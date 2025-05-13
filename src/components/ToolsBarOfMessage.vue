<script setup lang="ts">
import { Check, Copy, Cpu, Edit } from "@vicons/tabler"
import { NAvatar, NCard, NFlex, NIcon, NInput, NSpace, NTooltip } from "naive-ui"
import { defineEmits, defineProps } from "vue"

const props = defineProps<{
  isEditing: boolean
}>()

const emits = defineEmits<{
  (e: "copy"): void
  (e: "regenerate"): void
  (e: "edit"): void
  (e: "done"): void
}>()
</script>

<template>
  <NFlex class="function-row-buttons" v-if="!isEditing">
    <NTooltip trigger="hover">
      <template #trigger>
        <NIcon size="125%" @click="$emit('copy')">
          <Copy />
        </NIcon>
      </template>
      {{ $t("copy") }}
    </NTooltip>
    <NTooltip trigger="hover">
      <template #trigger>
        <NIcon size="125%" @click="$emit('regenerate')">
          <Cpu />
        </NIcon>
      </template>
      {{ $t("regenerate") }}
    </NTooltip>
    <NTooltip trigger="hover">
      <template #trigger>
        <NIcon size="125%" @click="$emit('edit')">
          <Edit />
        </NIcon>
      </template>
      {{ $t("edit") }}
    </NTooltip>
  </NFlex>
  <NFlex class="function-row-buttons" v-else>
    <NTooltip trigger="hover">
      <template #trigger>
        <NIcon size="125%" @click="$emit('done')">
          <Check />
        </NIcon>
      </template>
      {{ $t("done") }}
    </NTooltip>
  </NFlex>
</template>

<style scoped></style>
