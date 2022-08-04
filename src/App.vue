<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MainLayout from './layout/MainLayout.vue';
import Slider from './components/Slider.vue';
import Example from './components/Example.vue';
import Docs from './components/Docs.vue';
</script>

<template>
  <main-layout>
    <template v-slot:slider>
      <slider></slider>
    </template>
    <template v-slot:docs>
      <docs></docs>
    </template>
    <template v-slot:example>
      <example></example>
    </template>
  </main-layout>
</template>

<style scoped>

</style>
