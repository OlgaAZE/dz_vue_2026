<script setup>
import { onMounted, ref, computed } from "vue";
import ShopHeader from "./views/ShopHeader.vue";
import ItemCard from "./ItemCard.vue";
import { goodsApi } from "../public/goods.js";
import GoodsFilter from "./views/GoodsFilter.vue";
const goods = ref([]);
const total = ref(0);

const filterName = ref("");
const priceRange = ref([0, 0])
goodsApi().then((data) => {
   try {
    goods.value = data;
  } catch (error) {
    console.log(error);
  }
});

const filterProducts = computed(() => {
  const [fPrice, sPrice] = priceRange.value;
  return goods.value.filter((good) =>
    good.title.toLowerCase().includes(filterName.value.toLowerCase()) && good.price <= sPrice && good.price >= fPrice);
});
const getMaxPrice = computed(() => {
  if (!goods.value.length) return 0;
  return Math.max(...goods.value.map(g => g.price));
}) 
const getMinPrice = computed(() => {
  if (!goods.value.length) return 0;
  return Math.min(...goods.value.map(g => g.price));
}) 

function addToCard(id, quantGoods) {
  total.value+= Number(quantGoods);
}
function deleteFromCard(id, quantGoods) {
  total.value-= Number(quantGoods);
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
          v-model="quantGoods"
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
      <GoodsFilter v-model="filterName" v-model:priceRange="priceRange" :maxPrice="getMaxPrice" :minPrice="getMinPrice"/>
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
