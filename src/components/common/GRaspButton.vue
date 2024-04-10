<script setup lang="ts">
import type { Component } from 'vue';

    defineProps<{
        title?: string,
        icon?: Component
    }>();
</script>

<template>
    <div>
        <button 
        v-if="title"
        id="button-id" 
        class="padding-low item-black-background t-white t-bold t-size-medium box-shadow-fade-in"
        @mouseenter="$emit('mouseEnter')"
        @mouseleave="$emit('mouseLeave')"
        >{{ title }}</button>
        <button 
        v-else-if="icon"
        id="button-id" 
        class="padding-large item-black-background t-white box-shadow-fade-in button-border-radius" 
        @mouseenter="$emit('mouseEnter')"
        @mouseleave="$emit('mouseLeave')"        
        >
        <component :is="icon" />
        </button>
    </div> 
</template>

<style scoped>

</style>