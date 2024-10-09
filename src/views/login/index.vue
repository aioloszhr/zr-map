<script setup lang="ts">
import { useRouter } from 'vue-router'
import Animation from './components/Animation.vue'
import SvgIcon from '@/components/SvgIcon.vue'
const router = useRouter()

const navigate = (name: string) => {
  router.push({ name })
}
</script>

<template>
  <div class="login-wrapper">
    <div class="container">
      <div class="header">
        <SvgIcon name="earth" width="20" height="20" color="#0675f7" />
        <span>Zr Data Visualization</span>
      </div>
      <div class="main">
        <div class="content">
          <div class="title">
            <p>您好，</p>
            <p>欢迎探索数据可视化</p>
          </div>
          <div class="desc">本网站用于记录数据可视化案例</div>
        </div>
        <div class="links">
          <div class="link">
            <div class="link-content" @click="navigate('ZRMap')">
              <div>地图（Gis）</div>
              <SvgIcon name="link" />
            </div>
          </div>
          <div class="link">
            <div class="link-content">
              <div>Three.js</div>
              <SvgIcon name="link" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Animation />
  </div>
</template>

<style scoped>
.login-wrapper {
  position: relative;
  min-width: 400px;
  height: 100vh;
  .container {
    position: relative;
    z-index: 2;
    height: 100%;
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      margin: 0 auto;
      width: 100%;
      height: 68px;
      font-weight: 700;
    }
    .main {
      margin: 0 auto;
      padding: 80px 24px 0;
      max-width: 900px;
      height: calc(100% - 68px);
      min-height: 864px;
      .content {
        margin-bottom: 60px;
        padding: 0;
        .title {
          display: flex;
          flex-direction: column;
          gap: 3px;
          font-size: 64px;
          color: #f5f9fff2;
          line-height: 90px;
          margin-bottom: 12px;
        }
        .desc {
          font-size: 32px;
          line-height: 46px;
          color: #e0ecffcc;
        }
      }
      .links {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        .link {
          width: 100%;
          max-width: 400px;
          border-radius: 16px;
          padding: 20px;
          background: linear-gradient(90deg, #262931, #1d2127a6);
          box-shadow: 0 18px 11px #00000040;
          outline: none;
          text-decoration: none;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.2s;
          cursor: pointer;
          .link-content {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>
