<script setup lang="ts">
import type { ThemeOption } from "@/types/Theme";
import { NAvatar, NCard, NFlex, NInput, NSpace } from "naive-ui";
import { defineEmits, defineProps, ref } from "vue";
import VueMarkdown from "vue-markdown-render";
import ToolsBar from "./ToolsBarOfMessage.vue";

const props = defineProps<{
  avatar: string
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
    <NAvatar round :src="avatar" size="large" />
    <NCard class="card" hoverable>
      <VueMarkdown :source="message" v-if="!isEditing" />
      <NSpace vertical v-if="isEditing">
        <NInput
          class="input-message"
          v-model:value="message"
          :placeholder="$t('ai_placeholder')"
          type="textarea"
          :autosize="{ minRows: 1 }"
        />
      </NSpace>
      <ToolsBar
        :icon-theme="props.iconTheme"
        dir-of-icon="ltr"
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
  padding: 0.5em;
  width: 75%;
  border-radius: 10px;
  color: white;
}

.function-row-buttons {
  visibility: hidden;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
}

.card:hover .function-row-buttons {
  visibility: visible;
}
</style>
