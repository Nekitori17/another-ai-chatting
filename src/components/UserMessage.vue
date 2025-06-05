<script setup lang="ts">
import type { ThemeOption } from "@/types/Theme"
import { NCard, NFlex, NInput, NSpace } from "naive-ui"
import { defineEmits, defineProps, ref } from "vue"
import VueMarkdown from "vue-markdown-render"
import ToolsBar from "./ToolsBarOfMessage.vue"

const props = defineProps<{
  index: number
  message: string
  iconTheme: ThemeOption
}>()

const emits = defineEmits<{
  (e: "regenerate", index: number): void
}>()

const message = ref(props.message)
const isEditing = ref(false)

function handleCopy() {
  navigator.clipboard.writeText(message.value)
}
</script>

<template>
  <NFlex>
    <NCard class="card" hoverable>
      <VueMarkdown :source="message" v-if="!isEditing" />
      <NSpace vertical v-if="isEditing">
        <NInput
          class="input-message"
          v-model:value="message"
          :placeholder="$t('user_placeholder')"
          type="textarea"
          :autosize="{ minRows: 1 }"
        />
      </NSpace>
      <ToolsBar
        :icon-theme="props.iconTheme"
        dir-of-icon="rtl"
        :is-editing="isEditing"
        @copy="handleCopy"
        @regenerate="$emit('regenerate', props.index)"
        @edit="isEditing = true"
        @done="isEditing = false"
      />
    </NCard>
  </NFlex>
</template>

<style scoped>
.card {
  text-align: right;
  padding: 0.5em;
  width: 75%;
  border-radius: 10px;
  color: white;
}

.function-row-buttons {
  visibility: hidden;
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
}

.card:hover .function-row-buttons {
  visibility: visible;
}

.input-message {
  background-color: transparent !important;
}
</style>
