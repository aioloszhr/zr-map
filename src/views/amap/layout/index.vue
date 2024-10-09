<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { ElContainer, ElMain } from 'element-plus'
import ASide from './components/ASide.vue'

const router = useRouter()

onMounted(() => {
  router.push({ path: '/amap/home' })
})
</script>

<template>
  <div class="common-layout">
    <ElContainer>
      <ASide />
      <ElMain style="--el-main-padding: 0">
        <RouterView />
      </ElMain>
    </ElContainer>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  background: #fff;
}
</style>
