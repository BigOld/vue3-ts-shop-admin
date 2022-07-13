<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    :collapse="isCollapse"
    router
  >
    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><ShoppingCart /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        <el-icon><Menu /></el-icon>
        商品列表
      </el-menu-item>
      <el-menu-item index="/product/product_itemize">
        <el-icon><Menu /></el-icon>
        商品分类
      </el-menu-item>
      <el-menu-item index="/product/product_specs">
        <el-icon><Menu /></el-icon>
        商品规格
      </el-menu-item>
      <el-menu-item index="/product/product_commint">
        <el-icon><Menu /></el-icon>
        商品评论
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><Goods /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/order_list">
        <el-icon><Menu /></el-icon>
        订单列表
      </el-menu-item>
      <el-menu-item index="/order/order_offline">
        <el-icon><Menu /></el-icon>
        订单线下
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <el-icon><Iphone /></el-icon>
      <template #title>
        媒体
      </template>
    </el-menu-item>
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><Lock /></el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/permission_admin">
        <el-icon><Menu /></el-icon>
        管理员
      </el-menu-item>
      <el-menu-item index="/permission/permission_role">
        <el-icon><Menu /></el-icon>
        角色
      </el-menu-item>
      <el-menu-item index="/permission/permission_rule">
        <el-icon><Menu /></el-icon>
        规则
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()

const isCollapse = computed(() => {
  return store.state.isCollapse
})
</script>

<style lang="scss" scoped>
.el-menu {
    height: 100%;
    border-right: none;
}

.el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
