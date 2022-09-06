<template>
  <div>
    <div class="news">
        <span class="news__date">05.09.2022</span>
        <img
          class="news__img"
          :src="news.url"
          alt=""
        />
        <div class="news__wrapper">
          <h3 class="news__title">{{ news.title }}</h3>
          <p class="news__text">
            {{ news.body }}
          </p>
          <NuxtLink to="/">Home</NuxtLink>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({ $axios, params, store }) {
    await store.dispatch('fetchNews')
    const news = store.getters.getNews[params.id-1]
    return { news }
  },
}
</script>
<style scoped>
  .news {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
  }
 
  .news__date {
    color: #999;
    font: 400 15px/1.4 ProximaNova, Helvetica, sans-serif;
  }

  .news__img {
    max-width: 600px;
  }

  .news__title {
    font-size: 30px;
    margin: 20px 0px 10px;
  }
</style>