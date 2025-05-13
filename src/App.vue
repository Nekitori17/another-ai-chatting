<script setup lang="ts">
import { NConfigProvider, darkTheme, lightTheme } from "naive-ui"
import { ref, watch } from "vue"
import { useI18n } from "vue-i18n"
import AIMessage from "./components/AIMessage.vue"
import Settings from "./components/Settings.vue"
import UserMessage from "./components/UserMessage.vue"

const { locale } = useI18n()

const showSettings = ref(false)
const appTheme = ref(localStorage.getItem("theme") || "dark")
const appLanguage = ref(localStorage.getItem("language") || "en")

watch(appTheme, (newTheme) => {
  localStorage.setItem("theme", newTheme)
})

watch(appLanguage, (newLanguage) => {
  localStorage.setItem("language", newLanguage)
  locale.value = newLanguage
})
</script>

<template>
  <NConfigProvider :theme="appTheme === 'light' ? lightTheme : darkTheme">
    <AIMessage avatar="favicon.ico" :index="0" message="Hello!" />
    <UserMessage :index="1" message="Hi!" />
    <button @click="showSettings = !showSettings">Show Settings</button>
    <Settings
      v-model:show="showSettings"
      v-model:theme="appTheme"
      v-model:language="appLanguage"
      :token-count="999"
      :token-limit="100248"
    />
  </NConfigProvider>
</template>

<style scoped></style>
