<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import GRaspButton from './common/GRaspButton.vue';
    import Cellphone from 'vue-material-design-icons/Cellphone.vue';
    import ApplicationOutline from 'vue-material-design-icons/ApplicationOutline.vue';
    import QrModal from './QrModal.vue';

    const title = ref('GRaspBerry');
    const openModal = ref(false);
    const enabledButton = ref(false);

    onMounted(() => {
        setTimeout(() => {enabledButton.value = true;}, 2300);
    });

    const updateTitle = (id?: string, event?: string) => {
        if (id && event) {
            switch(event) {
                case 'enter': {
                    if (id === 'mobile-associate') {
                        title.value = 'Associate new mobile device using QrCode';
                    } else {
                        title.value = 'Access web console';
                    }
                    break;
                }
            }
        } else {
            title.value = 'GRaspBerry';
        }
    }
</script>

<template>
    <div>
        <QrModal v-if="openModal" @closeModal="openModal = !openModal"/>
        <div class="centered moving-up-animation item-main-background item-centered">
            <div class="centered item-centered box-shadow-fade-in">
                <p class="t-bold t-white transition-in centered t-size-x-large fade-out">{{ title }}</p>
            </div>
        </div>
        <div class="centered button-flex transition-in-delayed">
            <GRaspButton 
            v-show="enabledButton"
            id="mobile-associate" 
            :icon="Cellphone"
            @mouseEnter="updateTitle('mobile-associate', 'enter')" 
            @mouseLeave="updateTitle(undefined, undefined)"
            @click="openModal = !openModal"
            />
            <p class="padding-xxx-large t-white t-bold t-size-medium transition-in-delayed">or</p>
            <GRaspButton 
            v-show="enabledButton"
            id="go-to-console" 
            :icon="ApplicationOutline"
            @mouseEnter="updateTitle('go-to-console', 'enter')" 
            @mouseLeave="updateTitle(undefined, undefined)"
            />
        </div>
    </div>
</template>

<style scoped>
.centered {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    z-index: 1;
    text-align: center;
}

.button-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
</style>../service/api