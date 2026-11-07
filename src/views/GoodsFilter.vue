<script setup>
import { ref, defineProps, watch, computed } from 'vue';
const props = defineProps({
   minPrice: { type: Number, default: 0 },
   maxPrice: { type: Number, default: 1000 },
   priceRange: {type: Array, default: [0, 10000]},
   step: { type: Number, default: 1 },
});
const filterName = defineModel('modelValue', { 
    type: String, 
    default: '' 
});
const priceRange = defineModel('priceRange', { 
    type: Array, 
    default: [0, 1000000] 
});
function getPrice(n) {
    return Math.floor(Number(n));
}
const localMin = ref(props.minPrice);
const localMax = ref(props.maxPrice);
watch(
  () => [props.minPrice, props.maxPrice],
  ([min, max]) => {
    localMin.value = min;
    localMax.value = max;

    priceRange.value = [min, max];
  },
  { immediate: true }
);
const minPosition  = computed(() => {
    return ((localMin.value - props.minPrice) / (props.maxPrice - props.minPrice)) * 100;
})
const maxPosition  = computed(() => {
    return ((localMax.value - props.minPrice) / (props.maxPrice - props.minPrice)) * 100;
})
function onMinInput(e) {
  localMin.value = Math.min(
    Number(e.target.value),
    localMax.value
  );
  priceRange.value = [localMin.value, localMax.value];
}
function onMaxInput(e) {
  localMax.value = Math.max(
    Number(e.target.value),
    localMin.value
  );
   priceRange.value = [localMin.value, localMax.value];
}
</script>
<template>
    <div class="good_input">
        <h3>Поиск товара</h3>
    <input type="text" 
           class="filterName" 
           placeholder="Введите название" 
           v-model="filterName">
    </input>
    </div>

<div class="range-slider">
        <div class="range-track"></div>
        <div class="range-selected"></div>
 <span
    class="range-value min-value"
    :style="{ left: minPosition + '%' }"
  >
    {{ getPrice(localMin) }} 
  </span>
  <span
    class="range-value min-value"
    :style="{ left: maxPosition + '%' }"
  >
    {{ getPrice(localMax) }} 
  </span>
        <input
          type="range"
          class="range-input min"
          :min="minPrice"
          :max="maxPrice"
          :step="step"
          :value="localMin"
          @input="onMinInput"
        />
        <input
          type="range"
          class="range-input max"
          :min="minPrice"
          :max="maxPrice"
          :step="step"
          :value="localMax"
          @input="onMaxInput"
        />
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
.good_input {
    margin-bottom: 20px;
}
.price-slider {
    margin-top: 16px;
    width: 100%;
    max-width: 360px;
}
.range {
    width: 100%;
    max-width: 360px;
    font-size: 13px;
    color: #374151;
}

.range-bounds {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #6b7280;
    font-variant-numeric: tabular-nums;
    margin-bottom: 10px;
}

.range-slider {
    position: relative;
    height: 55px;
    margin-bottom: 6px;
}

.range-track,
.range-selected {
    position: absolute;
    top: 40px;
    height: 4px;
    border-radius: 2px;
    pointer-events: none;
}
.range-track {
    left: 0;
    right: 0;
    background: #e5e7eb;
}
.range-selected {
    background: #3b82f6;
}

.range-input {
    position: absolute;
    top: 28px;
    inset-inline: 0;
    width: 100%;
    height: 24px;
    margin: 0;
    background: transparent;
    -webkit-appearance: none;
    appearance: none;
    pointer-events: none;
}
.range-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: all;    
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #3b82f6;
    cursor: grab;
    margin-top: -7px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: transform 0.12s;
}
.range-input::-webkit-slider-thumb:hover {
    transform: scale(1.15);
}
.range-input::-moz-range-thumb {
    pointer-events: all;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #3b82f6;
    cursor: grab;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.range-value {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    font-size: 12px;
    color: #374151;
    font-weight: 600;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
}
.range-values {
    text-align: center;
    font-size: 12px;
    color: #6b7280;
    font-variant-numeric: tabular-nums;
}
</style>