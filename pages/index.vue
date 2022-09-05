<template>
  <div class="index-page">
    <h1 class="title">News page</h1>
    <ul class="news">
      <li class="news__preview">
        <div class="news__preview-wrapper">
          <h3 class="news__preview-title">Dolore, dolorem! <span class="news__preview-date">05.09.2022</span></h3>
          <p class="news__preview-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, in!</p>
          <a class="news-link" href="#"></a>
        </div>
        <img class="news__preview-thumbnail" src="https://via.placeholder.com/150/771796" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      // news: {}
    }
  },
  async fetch({store}) {
    await store.dispatch('fetchNews');    
  },
  computed: {
    news() {
      return this.store.getters.getNews;
    }
  },
  methods: {

  },  
}
</script>

<style scoped>
.news__preview {
  list-style: none;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  border: 1px solid darkgray;
  position: relative;
}

.news__preview-wrapper {
  padding: 10px 0px 5px 10px;
}

.news__preview-title {
  font-size: 23px;
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
  font-size: 14px;
  font-weight: 400;
}

.news-link {}

.news-link::after {
  content: ' ';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
</style>