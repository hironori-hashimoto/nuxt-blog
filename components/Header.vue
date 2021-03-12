<template>
  <header class="bg-white py-4 px-4 md:px-20">
    <div class="inner flex justify-between mx-auto">
      <nuxt-link to="/"
        ><div class="logo">
          <img
            src="https://d291vdycu0ht11.cloudfront.net/nuxt/production/img/logo.cc56943.svg"
          /></div
      ></nuxt-link>
      <nav>
        <ul>
          <li>おすすめ</li>
          <li>サークル</li>
          <li>マガジン</li>
          <li>イベント</li>
          <li>ショッピング</li>
          <li>人気タグ</li>
          <li>noteをまなぶ</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
ul {
  display: flex;
}
li {
  padding: 0 16px;
  list-style-type: none;
}
.v-application ul {
  padding: 0px;
}
</style>
