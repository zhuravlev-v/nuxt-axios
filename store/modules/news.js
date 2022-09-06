export default {
  state: () => ({
    news: []
  }),
  mutations: {
    setNews(state, data) {
      state.news = data.news.map((news, i) => {
        return { ...news, url: data.photos[i].url }
      });
    },
  },
  actions: {
    async fetchNews({commit}) {
      const news = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts');
      const photos = await this.$axios.$get('https://jsonplaceholder.typicode.com/photos');
      commit('setNews', { news, photos })
    }
  },
  getters: {
    getNews: state => state.news
  }
}