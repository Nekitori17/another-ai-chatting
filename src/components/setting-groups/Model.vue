<script setup lang="ts">
import { NInput, NInputNumber, NSlider, NSpace } from "naive-ui"
import { defineModel, watch } from "vue"

const temputure = defineModel("temputure", { type: Number, default: 0.75, required: true })
const topP = defineModel("top-p", { type: Number, default: 1, required: true })

const props = defineProps<{
  tokenCount: number
  tokenLimit: number
}>()

watch(temputure, (newTemp) => {
  if (newTemp < 0) {
    temputure.value = 0
  } else if (newTemp > 2) {
    temputure.value = 2
  }
})
</script>

<template>
  <NSpace justify="space-between">
    <p>{{ $t("settings:model") }}</p>
    <p style="color: gray">Gemini 2.0 Flash</p>
  </NSpace>
  <br />
  <NSpace justify="space-between">
    <p>{{ $t("settings:token-count") }}</p>
    <p style="color: gray">
      {{ props.tokenCount.toLocaleString("us") }}/{{ props.tokenLimit.toLocaleString("us") }}
    </p>
  </NSpace>
  <br />
  <NSpace justify="space-between">
    <p>{{ $t("settings:tempurature") }}</p>
  </NSpace>
  <NSpace justify="space-between" align="center">
    <NSlider v-model:value="temputure" :min="0" :max="2" :step="0.01" style="width: 17.5em" />
    <NInput v-model:value="temputure" placeholder=" " style="width: 3em" />
  </NSpace>
  <br />
  <NSpace justify="space-between">
    <p>{{ $t("settings:top-p") }}</p>
    <NInputNumber v-model:value="topP" :min="0" :max="1" :step="0.01" style="width: 6.5em" />
  </NSpace>
</template>

<style scoped></style>
