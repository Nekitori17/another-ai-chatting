<script setup lang="ts">
import { NFlex, NAvatar, NSkeleton } from "naive-ui"
import { defineProps } from "vue"

const props = defineProps<{
  avatar: string
}>()
</script>

<template>
  <NFlex>
    <NAvatar round :src="avatar" size="large" />
    <div class="skeleton">
      <NSkeleton round size="small" />
      <NSkeleton round size="small" />
      <NSkeleton round size="small" style="width: 65%" />
    </div>
  </NFlex>
</template>

<style scoped>
.skeleton {
  position: relative;
  width: 75%;
  height: min-content;
}
.skeleton > * {
  margin-top: 0.5em;
}
</style>
