<script setup>
import { ref } from 'vue';
const navigation = ref([
  { id: '1', title: 'Главная', href: '#home' },
  { id: '2', title: 'Каталог', href: '#catalog' },
  { id: '3', title: 'О нас', href: '#about' },
  { id: '4', title: 'Доставка', href: '#delivery' },
  { id: '5', title: 'Контакты', href: '#contacts' }
]);
 
function changeColor(e) {
    e.target.style.color = "red";
}
</script>
<template>
    <div class="head">
    <header class="header">
        <a href="#home" class="logo" aria-label="CosmoShop">
            <img class="logo__icon" src="../components/icons/logo.png"/>
        </a>
    </header>
    <nav class="navigation">
        <a v-for="item in navigation" 
         @mouseover="changeColor"
        :key="item.id"
        :href="item.href"
        class="navigation__link">
        {{ item.title }}
        </a>
    </nav>
    </div>
</template>


<style scoped>
.head {
    display: flex;
}
.header {
    background: #f8fafc;
    font-family: Inter, Arial, sans-serif;
    z-index: 10;
}
.logo {
    display: inline;
    align-items: center;
    color: #f8fafc;
    text-decoration: none;
    flex-shrink: 0;
}
.logo__icon {
    display: inline;
    width: 248px;
    height: 248px;
}
.navigation {
    display: flex;
    align-items: center;
    margin-left: 150px;
    gap: 50px;
    flex-shrink: 0;
}

.navigation__link {
    position: block;
    padding: 20px 35px;
    color: #b9c9e3;
    text-decoration: none;
    font-size: 25px;
    white-space: nowrap;
    transition: color 0.2s ease;
}

.background {
    background-color: antiquewhite;
}
</style>