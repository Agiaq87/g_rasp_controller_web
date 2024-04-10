<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import PermissionState from './model/permissionState';


let headerTitle = ref('Mobile device connection');
let subTitle = ref('section state goes here');
let showProposal = ref(false);

const permission: Ref<Map<String, PermissionState>> = ref(new Map<String, PermissionState>());

const sendCoordinate = () => {
  navigator.geolocation.getCurrentPosition(
    (success) => {
      console.log(success);
    },
    (error) => {
      console.log(error);
    },
    {
      enableHighAccuracy: true,
    }
  );
}

onMounted(() => {
  navigator.permissions.query({name:'geolocation'}).then((result) => {
    switch(result.state) {
      case "granted": {
        headerTitle.value = 'Associate new mobile device using QrCode';
        permission.value.set('geo', PermissionState.GRANTED);
        break;
      }
      case "prompt": {
        subTitle.value = 'Checking permission...';
        permission.value.set('geo', PermissionState.PROMPT);
        showProposal.value = true;
        break;
      }
      case "denied": {
        subTitle.value = 'Need permission to proceed';
        permission.value.set('geo', PermissionState.DENIED);
        showProposal.value = true;
        break;
      }
    }
  });
});
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
