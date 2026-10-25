<script setup>
import { ref } from 'vue';
const filterName = defineModel();
</script>
<template>
    <div>
        <h2>Поиск товара</h2>
    <input type="text" class="filterName" placeholder="Введите название" v-model="filterName"></input>
    </div>
</template>

<style scoped>
.filterName {
    width: 150px;
    height: 20px;
    overflow: hidden;
    border: 2px solid #e2e8f0;
    border-radius: 20px; 
    background: white;
}
</style>