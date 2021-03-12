<template>
  <nuxt-link :to="slug">
    <article class="border p-4 rounded my-4">
      <h2 class="text-xl font-bold">{{ title }}</h2>
      <time class="text-right text-sm text-gray-700">{{ date }}</time>
      <div class="tags">
        <Tag>{{ category }}</Tag>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
import Tag from "~/components/Tag";

export default {
  props: {
    title: String,
    date: String,
    category: String,
    slug: String,
  },
};
</script>

<style>
</style>
