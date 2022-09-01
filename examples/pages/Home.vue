<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '../components/HelloWorld.vue';
const imgUrl = () => {
    return new URL('../assets/vue.svg', import.meta.url).href;
};
</script>

<template>
    <div class="home-wrap">
        <img src="../assets/logo.png" alt="">
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img :src="imgUrl()" class="logo vue" alt="Vue logo" />
        </a>
        <HelloWorld msg="Vite + Vue" />
        <div><a href="https://vue-clamp.vercel.app/">clamp</a></div>
        <div><a href="https://tympanus.net/Development/ButtonStylesInspiration/">ButtonStyles</a></div>
        <div><a href="https://www.shejidaren.com/css-border-radius.html">borderRadius</a></div>
        <div class="menu">
            <router-link to="/button">
                Button
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.home-wrap {
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
