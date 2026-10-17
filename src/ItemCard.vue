<script setup>
import {defineProps} from 'vue';

defineProps(['product'])
function addToCard() {
    alert('Товар добавлен');
}
</script>
<template>
    <div class="product-card">
        <div>
            <img :src="product.image" :alt="product.name" class="product-card__image"/>  
        </div>
         <div class="product-card__content">
            <h2>{{ product.name }}</h2>

            <p>{{ product.description }}</p>

            <strong class="product-card__price">
            {{ product.price.toLocaleString('ru-RU') }} ₽
            </strong>

            <button v-if="product.inStock" type="button" :disabled="!product.inStock" @click="addToCard">
            В корзину
            </button>
            <p v-else="inStock">
            Нет в наличии
            </p>
        </div>
    </div>
</template>


<style scoped>
.product-card {
    width:200px;
    height: 350px;
    margin: 20px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    background: white;
}
.product-card__image {
    width:200px;
    height: 100px;
    object-fit: contain;
    background: #f8fafc;
}
.product-card__content {
  padding: 16px;
}
.product-card h2 {
  font-size: 18px;
}
</style>