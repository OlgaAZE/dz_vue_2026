<script setup>
import { ref, computed } from "vue";
import ShopHeader from "./views/ShopHeader.vue";
import ItemCard from "./ItemCard.vue";
import { goodsApi } from "../public/goods.js";
import GoodsFilter from "./views/GoodsFilter.vue";
const goods = ref([]);
const total = ref(0);

const filterName = ref("");
async function load(params) {
  goods.value = await goodsApi().then((data) => {
    return data;
  });
}
load();
const filterProducts = computed(() => {
  return goods.value.filter((good) =>
    good.title.toLowerCase().includes(filterName.value.toLowerCase()),
  );
});
function addToCard() {
  total.value++;
}
function deleteFromCard() {
  total.value--;
}
</script>

<template>
  <ShopHeader />
  <main class="products">
    <div>
      <h2>Каталог</h2>
      <div class="product_items">
        <ItemCard
          v-for="good in filterProducts"
          :key="good.id"
          :product="good"
          @addToCard="addToCard"
          @deleteFromCard="deleteFromCard"
        />
      </div>
    </div>
    <div class="filter_items">
      <h2>Корзина</h2>
      <div v-if="total >= 0">
        <span>Количество: {{ total }}</span>
      </div>
      <div v-else>
        <span>В корзине нет товаров</span>
      </div>
      <GoodsFilter v-model="filterName" />
    </div>
  </main>
</template>

<style scoped>
.products {
  display: flex;
}
.product_items {
  display: flex;
  flex-wrap: wrap;
}
.filter_items {
  width: 30%;
}
</style>
