export default {
  name: "reddit-entries",
  component: () =>
    import(
      /* webpackChunkName: "redditEntries" */ "@/modules/reddit-entries/layouts/RedditEntriesLayout.vue"
    ),
  children: [],
};
