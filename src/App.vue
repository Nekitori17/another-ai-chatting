<script setup lang="ts">
import { NConfigProvider, darkTheme, lightTheme } from "naive-ui"
import { ref } from "vue"
import AIMessage from "./components/AIMessage.vue"
import Settings from "./components/Settings.vue"
import UserMessage from "./components/UserMessage.vue"

const showSettings = ref(false)
const temputure = ref(0.75)
const topP = ref(1)
const appTheme = ref(localStorage.getItem("appTheme") || "light")

function updateAppTheme() {
  appTheme.value = localStorage.getItem("appTheme") || "light"
}

</script>

<template>
  <NConfigProvider :theme="appTheme === 'dark' ? darkTheme : lightTheme">
    <AIMessage avatar="favicon.ico" :index="0" message="Hello!" />
    <UserMessage :index="1" message="Hi!" />
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

<style scoped></style>
