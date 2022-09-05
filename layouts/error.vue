<template>
  <section>
    <h1>Error 404</h1>

    <NuxtLink to="/">Home</NuxtLink>
  </section>
</template>

<script>
export default {
  name: 'ErrorLayout'
}
</script>

<style scoped>
section {
  width: 600px;
  margin: 0 auto;
  padding-top: 5rem;
}

h1 {
  color: red;
}
</style>