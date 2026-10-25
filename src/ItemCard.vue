<script setup>
import { defineProps } from "vue";
const emit = defineEmits(["addToCard", "deleteFromCard"]);
defineProps(["product"]);
function addProd() {
  emit("addToCard");
}
function deleteProd() {
  emit("deleteFromCard");
}
</script>
<template>
  <div class="product-card">
    <div>
      <img
        :src="product.image"
        :alt="product.name"
        class="product-card__image"
      />
    </div>
    <div class="product-card__content">
      <h2>{{ product.title }}</h2>
      <div class="product_price">
        <strong class="product-card__price">
          {{ product.price.toLocaleString("ru-RU") }} ₽
        </strong>
      </div>
    </div>
    <div class="btn">
      <button type="button" @click="addProd">+</button>
      <button type="button" @click="deleteProd">-</button>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Times New Roman", Times, serif;
}
.product-card {
  position: relative;
  width: 200px;
  height: 350px;
  margin: 20px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: white;
}
.product-card__image {
  width: 200px;
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

.product_description {
  height: 150px;
  border: none;
}
.product_price {
  position: absolute;
  bottom: 50px;
  right: 30px;
}
.btn {
  position: absolute;
  bottom: 10px;
  right: 30px;
}
</style>
