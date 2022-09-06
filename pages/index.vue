<template>
  <div class="index-page">
    <h1 class="title">News page</h1>
    <ul class="news">
      <li v-for="news of newsArr" :key="news.id" class="news__preview">
        <span class="news__preview-date">05.09.2022</span>
        <img
          class="news__preview-thumbnail"
          :src="news.url"
          alt=""
        />
        <div class="news__preview-wrapper">
          <h3 class="news__preview-title">{{ news.title }}</h3>
          <p class="news__preview-text">
            {{ news.body }}
          </p>
          <a class="news-link" href="" @click.prevent="openNews(news)" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {}
  },
  async fetch({ store }) {
    await store.dispatch('fetchNews')
  },
  computed: {
    newsArr() {
      return this.$store.getters.getNews
    },
  },
  methods: {
    openNews(news) {
      this.$router.push('/' + news.id)
    }
  },
}
</script>

<style scoped>
.title {
  font-family: 'Chomsky';
  text-align: center;
}
.news {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  grid-template-rows: auto;
  max-width: 1250px;
  margin: 0 auto;
}

.news__preview {
  list-style: none;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 470px;
  min-width: 370px;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 0 0 3px 0 rgb(0 0 0 / 34%);
}

.news__preview-wrapper {
  padding-top: 10px;
}

.news__preview-thumbnail {
  max-width: 472px;
  max-height: 258px;
}

.news__preview-title {
  font-family: Helvetica, sans-serif;
  font-size: 22px;
  margin: 0px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.news__preview-text {
  max-width: 400px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.news__preview-date {
  color: #999;
  font: 400 15px/1.4 ProximaNova, Helvetica, sans-serif;
}

.news-link {
}

.news-link::after {
  content: ' ';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
</style>
