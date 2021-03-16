<script>
export default {
  //fetchは取得したデータをstoreに保存する時に使う
  async fetch({ params, error, payload, store, $axios }) {
    const res = await $axios.$get("/custom/v0/posts").catch((err) => {
      console.error(err);
    });
    //storeにデータ保存してどこからでも扱えるようにする
    await store.commit("saveAllPosts", res);
  },
  //asyncDataは返却地がそのコンポーネントのdataにマージされる。
  async asyncData({ params, error, payload, store, $axios }) {
    const res = await $axios.$get("/custom/v0/posts").catch((err) => {
      console.error(err);
    });
    //this.postsでアクセス可能になる
    return {
      posts: res,
    };
  },
  async fetch({ store }) {
    if (!store.getters.allPosts) {
      await store.dispatch("fetchAllPost");
    }
  },
};
</script>
