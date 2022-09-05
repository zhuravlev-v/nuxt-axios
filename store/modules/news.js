export default {
  state: () => ({
    news: []
  }),
  mutations: {
    setNews(state, news) {
      state.news = news
    }
  },
  actions: {
    async fetchNews({commit}) {
      const news = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts');
      console.log(news)
      commit('setNews', news)
    }
  },
  getters: {
    getNews: state => state.news
  }
}