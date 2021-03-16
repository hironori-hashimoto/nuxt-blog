export const state = () => ({
  //すべての記事
  allPosts: null
});

export const getters = {
  //すべての記事
  allPosts(state) {
    return state.allPosts;
  }
}

export const mutations = {
  //すべての記事を保存
  saveAllPosts(state, allPosts) {
    state.allPosts = allPosts;
  }
}

export const actions = {
  /*
   * 全記事取得
   */
  async fetchAllPost({
    state,
    commit
  }) {
    const res = await this.$axios.$get('/custom/v0/all')
      .catch((err) => {
        console.error(err)
      });
    await commit('saveAllPosts', res);
    return res;
  }
}
