import redditAPI from "@/api/redditAPI";
import redditFirebaseAPI from "@/api/redditFirebaseAPI";

export const loadEntries = async ({ commit }) => {
  const { data } = await redditAPI.get("/top.json?limit=50");
  if (!data) {
    commit("setEntries", []);
    return;
  }
  const redditPosts = data.data.children.map((child) => {
    return {
      id: child.data.id,
      author: child.data.author,
      fullname: child.data.author_fullname,
      avatar: "",
      title: child.data.title,
      created: child.data.created,
      createdUTC: child.data.created_utc,
      thumbnail: child.data.thumbnail,
      thumbnailWidth: child.data.thumbnail_width,
      thumbnailHeight: child.data.thumbnail_height,
      fullImage: child.data.url_overridden_by_dest,
      numComments: child.data.num_comments,
      read: false,
    };
  });
  console.log(redditPosts);
  commit("setEntries", redditPosts);
};

export const loadReadEntries = async ({ commit }) => {
  const { data } = await redditFirebaseAPI.get("/read-entries.json");

  if (!data) {
    return;
  }

  const readEntries = [];
  for (let id of Object.keys(data)) {
    readEntries.push({
      id,
      ...data[id],
    });
  }
  console.log(readEntries);
  commit("updateEntriesReadState", readEntries);
};
