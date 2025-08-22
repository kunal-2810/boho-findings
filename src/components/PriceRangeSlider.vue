<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-between font-primary text-xs text-gray-600 mb-1">
      <span>₹{{ min }}</span>
      <span>₹{{ max }}</span>
    </div>
    <Slider
      v-model="internalValue"
      :min="min"
      :max="max"
      :step="step"
      :tooltip="'always'"
      :lazy="true"
      :disabled="false"
      :format="formatTooltip"
      :class="'w-full'"
      :data-type="'number'"
      :range="true"
      :color="'#f97316'"
    />
    <div class="font-medium font-primary text-gray-800 mt-4">
      ₹{{ internalValue[0].toLocaleString() }} - ₹{{ internalValue[1].toLocaleString() }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';
import type { PropType } from 'vue';
import Slider from '@vueform/slider';
import '../assets/slider-theme/tailwind.css';

const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 5000 },
  step: { type: Number, default: 100 },
  modelValue: { type: Array as PropType<number[]>, required: true }
});
const emit = defineEmits(['update:modelValue']);

const internalValue = ref<[number, number]>([props.modelValue[0], props.modelValue[1]]);

watch(() => props.modelValue, (val) => {
  internalValue.value = [val[0], val[1]];
});

watch(internalValue, (val) => {
  emit('update:modelValue', val);
});

function formatTooltip(val: number) {
  return `₹${val}`;
}
</script>
