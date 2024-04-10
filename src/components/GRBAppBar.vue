<script setup lang="ts">
defineProps({
    title: String,
    subTitle: String,
});
</script>

<template>
    <header class="app-bar">
    <div class="app-bar__leading">
      
    </div>
    <div class="app-bar__title">
      <h3>{{ title }}</h3>
      <h4>{{ subTitle }}</h4>
    </div>
    <div class="app-bar__actions">
      
    </div>
  </header>
</template>

<style scoped>
.app-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #9b00ee; /* Example color */
  color: white;
  padding: 12px;
}

.app-bar__leading,
.app-bar__actions {
  display: flex;
  align-items: center;
}

.app-bar__title {
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
</style>