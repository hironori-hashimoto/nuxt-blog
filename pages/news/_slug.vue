<template>
  <article class="container mx-auto my-8 px-20 md:px-0">
    <h1 class="text-3xl font-bold my-8">{{ news.title }}</h1>
    <div>
      <p>date{{ news.date }}</p>
      <dd>{{ news.description }}</dd>
    </div>
    <div><img :src="news.image" /></div>
    <div v-for="tag in news.tags" :key="tag">{{ tag }}</div>
    <nuxt-content :document="news" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const news = await $content("news", params.slug || "index").fetch();
    return { news };
  },
};
</script>

<style scoped>
.container {
  background-color: #fff;
  color: #333;
}
</style>
