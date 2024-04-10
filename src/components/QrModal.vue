<script setup lang="ts">

</script>

<template>
    <Teleport to="body">
        <div class="modal item-black-background button-shadow moving-down-animation padding-large">
            <p class="t-white t-bold t-size-smaller close-icon" @click="$emit('closeModal')">&times;</p>
            <p class="t-white t-bold t-size-large t-center padding-large">Scan Qr code for associate your mobile device</p>
            <div class="padding-large">
                <img src="../img/qrcode.png" />
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.modal {
    position:fixed;
    z-index: 999;
    top: 20%;
    left: 25%;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
</style>