<script setup lang="ts">
import { Check, Copy, Cpu, Edit } from "@vicons/tabler";
import { NFlex, NIcon, NTooltip } from "naive-ui";
import { defineEmits, defineProps } from "vue";

const props = defineProps<{
  isEditing: boolean
  dirOfIcon: "ltr" | "rtl"
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
    <template v-if="dirOfIcon === 'ltr'">
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
    </template>
    <template v-else>
      <NTooltip trigger="hover">
        <template #trigger>
          <NIcon size="125%" @click="$emit('edit')">
            <Edit />
          </NIcon>
        </template>
        {{ $t("edit") }}
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
          <NIcon size="125%" @click="$emit('copy')">
            <Copy />
          </NIcon>
        </template>
        {{ $t("copy") }}
      </NTooltip>
    </template>
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
