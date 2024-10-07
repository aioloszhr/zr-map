<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { completeSize } from '@/utils'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'currentColor',
  },
  width: {
    type: [Number, String],
    default: 0,
  },
  height: {
    type: [Number, String],
    default: 0,
  },
  size: {
    type: [Number, String],
    default: 14,
  },
})

const symbolId = computed(() => {
  return `#icon-${props.name}`
})

const cssVars = computed(() => {
  const cssVar = {
    '--zr-icon-width': props.width
      ? completeSize(props.width)
      : completeSize(props.size),
    '--zr-icon-height': props.height
      ? completeSize(props.height)
      : completeSize(props.size),
    '--zr-icon-color': props.color,
  }

  return cssVar
})
</script>

<template>
  <span class="zr-icon" :style="cssVars">
    <svg aria-hidden="true">
      <use :xlink:href="symbolId" />
    </svg>
  </span>
</template>

<style scoped>
.zr-icon {
  position: relative;
  width: var(--zr-icon-width);
  height: var(--zr-icon-height);
  border: none;
  outline: none;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: var(--zr-icon-color);
  transform: translateZ(0);

  & svg {
    width: var(--zr-icon-width);
    height: var(--zr-icon-height);
    fill: currentColor;
  }
}
</style>
