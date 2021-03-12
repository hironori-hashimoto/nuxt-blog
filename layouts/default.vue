<template>
  <div>
    <v-app v-cloak>
      <Header />
      <GlobalNavitation />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
        @click="$router.push('/')"
      >
        <span class="hidden-sm-and-down">{{ title }}</span>
      </v-toolbar-title>
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>

<script lang="ts">
</script>

<style>
body {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: #fff;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  margin: 0 auto;
  max-width: 90%;
  line-height: 2;
  font-size: 16px;
  padding: 0;
  color: #333;
  letter-spacing: 0.5px;
  padding: 20px;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
