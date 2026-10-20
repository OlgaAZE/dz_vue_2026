<script setup>
import { ref } from 'vue';
import ShopHeader from './views/ShopHeader.vue';
import ItemCard from './ItemCard.vue';
const cosmeticsProducts = ref([
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCplJ1RDY3Jc4Cx7CRLPqFj40X2cMMKU9XHcfffCbURQ&s=10',
    name: 'Увлажняющий крем для лица „Нежная забота“',
    description: 'Лёгкий крем с гиалуроновой кислотой и алоэ для ежедневного ухода.',
    price: 890,
    inStock: true
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCplJ1RDY3Jc4Cx7CRLPqFj40X2cMMKU9XHcfffCbURQ&s=10',
    name: 'Тональный крем „Perfect Cover“',
    description: 'Стойкое покрытие, выравнивает тон и скрывает несовершенства.',
    price: 1450,
    inStock: false
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv98EtOL-ZeRrkdlNzwMuCGqPD_FrXxCBoqjo24apQUA&s=10',
    name: 'Тушь для ресниц „Volume Lash“',
    description: 'Придаёт объём и удлиняет ресницы, не осыпается в течение дня.',
    price: 990,
    inStock: false
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv98EtOL-ZeRrkdlNzwMuCGqPD_FrXxCBoqjo24apQUA&s=10',
    name: 'Палетка теней „Sunset Mood“',
    description: '8 оттенков в тёплой гамме для дневного и вечернего макияжа.',
    price: 1750,
    inStock: false
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv98EtOL-ZeRrkdlNzwMuCGqPD_FrXxCBoqjo24apQUA&s=10',
    name: 'Сыворотка для лица с витамином C',
    description: 'Осветляет и придаёт сияние, борется с тусклостью кожи.',
    price: 1290,
    inStock: true
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv98EtOL-ZeRrkdlNzwMuCGqPD_FrXxCBoqjo24apQUA&s=10',
    name: 'Бальзам для губ „Berry Kiss“',
    description: 'Смягчает и увлажняет губы, лёгкий ягодный оттенок.',
    price: 390,
    inStock: true
  },
  {
    id: 7,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv98EtOL-ZeRrkdlNzwMuCGqPD_FrXxCBoqjo24apQUA&s=10',
    name: 'Маска для волос „Silk Repair“',
    description: 'Интенсивное восстановление, придаёт блеск и гладкость.',
    price: 650,
    inStock: true
  },
  {
    id: 8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv98EtOL-ZeRrkdlNzwMuCGqPD_FrXxCBoqjo24apQUA&s=10',
    name: 'Пенка для умывания „Gentle Clean“',
    description: 'Мягкая пенка для всех типов кожи, не сушит и не стягивает.',
    price: 720,
    inStock: true
  },
  {
    id: 9,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv98EtOL-ZeRrkdlNzwMuCGqPD_FrXxCBoqjo24apQUA&s=10',
    name: 'Лак для ногтей „Cherry Dream“',
    description: 'Насыщенный вишнёвый оттенок, стойкое покрытие до 7 дней.',
    price: 450,
    inStock: true
  },
  {
    id: 10,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv98EtOL-ZeRrkdlNzwMuCGqPD_FrXxCBoqjo24apQUA&s=10',
    name: 'Масло для тела „Tropical Glow“',
    description: 'Питательное масло с ароматом кокоса и ванили.',
    price: 850,
    inStock: true
  },
  {
    id: 11,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv98EtOL-ZeRrkdlNzwMuCGqPD_FrXxCBoqjo24apQUA&s=10',
    name: 'Масло для тела „Tropical Glow“',
    description: 'Питательное масло с ароматом кокоса и ванили.',
    price: 850,
    inStock: true
  },
   {
    id: 12,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpyhV_g75wjxgIUnjQ5LAOEowSonItY9bphxRAbc3eQ&s=10',
    name: 'Масло для тела „Tropical Glow“',
    description: 'Питательное масло с ароматом кокоса и ванили.',
    price: 850,
    inStock: true
  },
  {
    id: 13,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpyhV_g75wjxgIUnjQ5LAOEowSonItY9bphxRAbc3eQ&s=10',
    name: 'Масло для тела „Tropical Glow“',
    description: 'Питательное масло с ароматом кокоса и ванили.',
    price: 850,
    inStock: true
  },
   {
    id: 14,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpyhV_g75wjxgIUnjQ5LAOEowSonItY9bphxRAbc3eQ&s=10',
    name: 'Масло для тела „Tropical Glow“',
    description: 'Питательное масло с ароматом кокоса и ванили.',
    price: 850,
    inStock: true
  },
   {
    id: 15,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpyhV_g75wjxgIUnjQ5LAOEowSonItY9bphxRAbc3eQ&s=10',
    name: 'Масло для тела „Tropical Glow“',
    description: 'Питательное масло с ароматом кокоса и ванили.',
    price: 850,
    inStock: true
  },
   {
    id: 16,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpyhV_g75wjxgIUnjQ5LAOEowSonItY9bphxRAbc3eQ&s=10',
    name: 'Масло для тела „Tropical Glow“',
    description: 'Питательное масло с ароматом кокоса и ванили.',
    price: 850,
    inStock: true
  },
   {
    id: 17,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpyhV_g75wjxgIUnjQ5LAOEowSonItY9bphxRAbc3eQ&s=10',
    name: 'Масло для тела „Tropical Glow“',
    description: 'Питательное масло с ароматом кокоса и ванили.',
    price: 850,
    inStock: true
  },
   {
    id: 18,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpyhV_g75wjxgIUnjQ5LAOEowSonItY9bphxRAbc3eQ&s=10',
    name: 'Масло для тела „Tropical Glow“',
    description: 'Питательное масло с ароматом кокоса и ванили.',
    price: 850,
    inStock: true
  },
   {
    id: 19,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpyhV_g75wjxgIUnjQ5LAOEowSonItY9bphxRAbc3eQ&s=10',
    name: 'Масло для тела „Tropical Glow“',
    description: 'Питательное масло с ароматом кокоса и ванили.',
    price: 850,
    inStock: true
  },
   {
    id: 20,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpyhV_g75wjxgIUnjQ5LAOEowSonItY9bphxRAbc3eQ&s=10',
    name: 'Масло для тела „Tropical Glow“',
    description: 'Питательное масло с ароматом кокоса и ванили.',
    price: 850,
    inStock: true
  }
]);
</script>

<template>
<ShopHeader/>
<main class="products">
  <ItemCard v-for="product in cosmeticsProducts" :key="product.id" :product="product"/>
</main>

</template>

<style scoped>
.products {
  display: flex;
  justify-content: space-start;
  flex-wrap: wrap;
  padding: 24px;
}
</style>
