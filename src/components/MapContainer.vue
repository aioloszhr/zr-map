<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'
import { key_web_js, position } from '@/app-config'

let map = null
// let loca = null

onMounted(() => {
  AMapLoader.load({
    key: key_web_js, // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
    Loca: { version: '2.0.0' },
    AMapUI: {}
  })
    .then((AMap) => {
      map = new AMap.Map('container', {
        // 设置地图容器id
        viewMode: '3D', // 是否为3D地图模式
        zoom: 17, // 初始化地图级别
        center: position.tfPosition, // 初始化地图中心点位置
        showBuildingBlock: true // 显示建筑物
        // mapStyle: 'amap://styles/blue' // 官方地图样式
      })
      // loca = new window.Loca.Container({
      //   map
      // })
    })
    .catch((e) => {
      console.log(e)
    })
})

onUnmounted(() => {
  map?.destroy()
})
</script>

<template>
  <div id="container"></div>
</template>

<style scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
}
</style>
