<template>
  <section>
    <h1>{{pageTItle}}</h1>
    <ol>
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="openUser(user)">{{user.name}}</a>
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  name: 'UsersPage',
    data() {
      return {
        pageTItle: 'Users page'
      }
    },
  async fetch({store}) {
    if (store.getters.getUsers.length === 0) {
      await store.dispatch('fetchUsers')
    }
  },
  computed: {
    users() {
      return this.$store.getters.getUsers
    }
  },
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user.id)
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
    font-size: 30px;
  }
</style>