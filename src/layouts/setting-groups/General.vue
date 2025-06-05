<script setup lang="ts">
import { NSelect, NSpace, type SelectOption } from "naive-ui"
import { computed, ref, watch } from "vue"
import { useI18n } from "vue-i18n"

const { t, locale } = useI18n()

const appTheme = ref(localStorage.getItem("appTheme") || "dark")
const appLanguage = ref(localStorage.getItem("appLanguage") || "en")

const emits = defineEmits<{
  (e: "update:appTheme"): void
  (e: "update:appLanguage"): void
}>()

const themeOptions = computed<Array<SelectOption>>(() => [
  { label: t("settings:theme:light"), value: "light" },
  { label: t("settings:theme:dark"), value: "dark" },
])

const languageOptions = computed<Array<SelectOption>>(() => [
  { label: t("settings:languages:english"), value: "en" },
  { label: t("settings:languages:vietnamese"), value: "vi" },
])

watch(appLanguage, (newLang) => {
  locale.value = newLang
  localStorage.setItem("appLanguage", newLang)
  emits("update:appLanguage")
})

watch(appTheme, (newTheme) => {
  localStorage.setItem("appTheme", newTheme)
  emits("update:appTheme")
})
</script>

<template>
  <NSpace justify="space-between">
    <p>{{ $t("settings:theme") }}</p>
    <NSelect
      v-model:value="appTheme"
      :options="themeOptions"
      @update:value="$emit('update:appTheme')"
      style="width: 6em"
    />
  </NSpace>
  <br />
  <NSpace justify="space-between">
    <p>{{ $t("settings:language") }}</p>
    <NSelect
      v-model:value="appLanguage"
      :options="languageOptions"
      @update:value="$emit('update:appLanguage')"
      style="width: 10em"
    />
  </NSpace>
</template>

<style scoped></style>
