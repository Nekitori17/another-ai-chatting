<script setup lang="ts">
import { NConfigProvider, darkTheme, lightTheme } from "naive-ui"
import { ref, onMounted, watch, type Ref } from "vue"
import AIMessage from "./components/AIMessage.vue"
import AIMesssaeLoading from "./components/AIMesssaeLoading.vue"
import Settings from "./layouts/Settings.vue"
import UserMessage from "./components/UserMessage.vue"
import type { ThemeOption } from "./types/Theme"

const showSettings = ref(false)
const temputure = ref(0.75)
const topP = ref(1)
const appTheme = ref(localStorage.getItem("appTheme") || "light") as Ref<ThemeOption>

function updateAppTheme() {
  console.log("updateAppTheme")
  appTheme.value = (localStorage.getItem("appTheme") as ThemeOption) || "light"
}

function applyBodyTheme(theme: string) {
  document.body.classList.remove("theme-light", "theme-dark")
  document.body.classList.add(`theme-${theme}`)
}

onMounted(() => {
  applyBodyTheme(appTheme.value)
})

watch(appTheme, (newTheme) => {
  applyBodyTheme(newTheme)
})
</script>

<template>
  <NConfigProvider :theme="appTheme === 'dark' ? darkTheme : lightTheme">
    <AIMesssaeLoading avatar="favicon.ico" />
    <AIMessage avatar="favicon.ico" :index="0" message="Hello!" :icon-theme="appTheme" />
    <UserMessage :index="1" message="Hi!" :icon-theme="appTheme" />
    <button @click="showSettings = !showSettings">Show Settings</button>
    <Settings
      v-model:show="showSettings"
      v-model:temputure="temputure"
      v-model:top-p="topP"
      :token-count="999"
      :token-limit="100248"
      @update:app-theme="updateAppTheme"
    />
    
  </NConfigProvider>
</template>

<style>
body.theme-light {
  background-color: #fdfdfd;
}

body.theme-dark {
  background-color: #1e1e1e;
}
</style>
