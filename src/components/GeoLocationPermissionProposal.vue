<script setup lang="ts">
import { ref } from 'vue';
const requestStarted = ref(false);

</script>

<template>
    <div id="permission-proposal-container">
        <h4 class="bold">Geo location permission needed</h4>
        <p>Please allow permission for proceed</p>
        <div id="action-area">
            <button @click="() => {$emit('start-request'); requestStarted = true}" :if="requestStarted">Request permission</button>
        </div>
    </div>
</template>


<style scoped>
#action-area {
    padding: 1em;
}

#permission-proposal-container {
    display: flex;
    margin: 10em;
    border: 1px solid #555;
    padding: 16px;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
}

</style>