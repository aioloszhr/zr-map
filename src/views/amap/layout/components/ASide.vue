<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElAside, ElMenu, ElSubMenu, ElMenuItem } from 'element-plus'
import SvgIcon from '@/components/SvgIcon.vue'
import { menus } from '@/app-config'

const router = useRouter()
const activePath = ref('/amap/home')

const handleMenuClick = (key: string) => {
  console.log('key', key)
  router.push({ path: key })
}
</script>

<template>
  <ElAside width="200px" style="min-height: 100vh">
    <ElMenu :default-active="activePath" @select="handleMenuClick">
      <template v-for="(submenu, index) in menus" :key="index">
        <ElSubMenu
          v-if="submenu.children && submenu.children.length > 0"
          :index="submenu.path"
        >
          <template #title>
            <SvgIcon
              :name="submenu.meta.icon"
              width="20"
              height="20"
              style="margin-right: 5px"
            />
            <span>{{ submenu.meta.title }}</span>
          </template>
          <ElMenuItem
            v-for="menuItem in submenu.children"
            :key="menuItem.path"
            :index="`${submenu.path}/${menuItem.path}`"
            :class="{
              'is-active': `${submenu.path}/${menuItem.path}` === activePath
            }"
          >
            {{ menuItem.meta.title }}
          </ElMenuItem>
        </ElSubMenu>
        <ElMenuItem v-else :index="submenu.path">
          <SvgIcon
            :name="submenu.meta.icon"
            width="20"
            height="20"
            style="margin-right: 5px"
          />
          <span>{{ submenu.meta.title }}</span>
        </ElMenuItem>
      </template>
    </ElMenu>
  </ElAside>
</template>

<style scoped>
.el-menu {
  height: 100%;
  & .el-menu--inline {
    .is-active {
      background: #c6e2ff;
    }
  }
}
</style>
