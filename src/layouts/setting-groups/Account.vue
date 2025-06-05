<script setup lang="ts">
import { NButton, NSpace } from "naive-ui"
import { defineEmits } from "vue"

const emits = defineEmits<{
  (e: "logout"): void
}>()
</script>

<template>
  <NSpace justify="space-between">
    <p>{{ $t("settings:account:export") }}</p>
    <NButton color="#00ffbb" round secondary>
      {{ $t("settings:account:exportButton") }}
    </NButton>
  </NSpace>
  <br />
  <NSpace justify="space-between">
    <p>{{ $t("settings:account:import") }}</p>
    <NButton color="#00ff48" round secondary>
      {{ $t("settings:account:importButton") }}
    </NButton>
  </NSpace>
  <br />
  <NSpace justify="space-between">
    <p>{{ $t("settings:account:logout") }}</p>
    <NButton color="#ff6969" round secondary @click="emits('logout')">
      {{ $t("settings:account:logoutButton") }}
    </NButton>
  </NSpace>
</template>

<style scoped></style>
