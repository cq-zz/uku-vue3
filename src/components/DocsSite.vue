<script setup>
import MainLayout from "../layout/MainLayout.vue";
import SliderMenu from "./SliderMenu.vue";
import DocsPage from "./DocsPage.vue";
import ExamplePage from "./ExamplePage.vue";
</script>

<template>
  <main-layout>
    <template v-slot:slider>
      <slider-menu></slider-menu>
    </template>
    <template v-slot:docs>
      <docs-page></docs-page>
    </template>
    <template v-slot:example>
      <example-page></example-page>
    </template>
  </main-layout>
</template>
