import redditAPI from "@/api/redditAPI";

export const loadEntries = async ({ commit }) => {
  const { data } = await redditAPI.get("/top.json?limit=50");
  console.log(data);
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

  //   redditPosts.forEach((post) => {
  //     // Identificador del autor del post
  //     const authorFullname = post.author_fullname;
  //     // URL base de la imagen del perfil del usuario en Reddit
  //     const profileImageUrlBase = "https://www.reddit.com/user/";
  //     // Si hay un identificador de autor válido
  //     if (authorFullname) {
  //       // Construir la URL de la imagen del perfil del usuario
  //       const profileImageUrl = `${profileImageUrlBase}${authorFullname}/avatar`;
  //       // Mostrar la URL de la imagen del perfil del usuario
  //       console.log(profileImageUrl);
  //     } else {
  //       console.log("No se encontró el identificador del autor del post.");
  //     }
  //     return {
  //       ...post,
  //     };
  //   });
  console.log(redditPosts);

  commit("setEntries", redditPosts);
};
