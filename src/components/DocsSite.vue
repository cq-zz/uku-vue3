<script setup>
import MainLayout from '../layout/MainLayout.vue';
import Slider from './Slider.vue';
import Docs from './Docs.vue';
import Example from './Example.vue';

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