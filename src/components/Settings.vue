<script setup lang="ts">
import { NDrawer, NDrawerContent } from "naive-ui"
import { defineModel } from "vue"
import General from "./setting-groups/General.vue"
import Model from "./setting-groups/Model.vue"
import Account from "./setting-groups/Account.vue"

const showSettings = defineModel("show", { type: Boolean, default: false, required: true })
const temputure = defineModel("temputure", { type: Number, default: 0.75, required: true })
const topP = defineModel("top-p", { type: Number, default: 1, required: true })

const props = defineProps<{
  tokenCount: number
  tokenLimit: number
}>()

const emits = defineEmits<{
  (e: "update:appTheme"): void
  (e: "update:appLanguage"): void
}>()
</script>

<template>
  <NDrawer v-model:show="showSettings" width="350" closeOnEsc>
    <NDrawerContent :native-scrollbar="false" closable>
      <template #header>
        <h2>{{ $t("settings") }}</h2>
      </template>
      <template #default>
        <div class="setting-items">
          <General
            @update:appTheme="$emit('update:appTheme')"
            @update:appLanguage="$emit('update:appLanguage')"
          />
          <br />
          <hr />
          <br />
          <Model
            :tokenCount="props.tokenCount"
            :tokenLimit="props.tokenLimit"
            v-model:temputure="temputure"
            v-model:topP="topP"
          />
          <br />
          <hr />
          <br />
          <Account />
        </div>
      </template>
      <template #footer>
        {{ $t("credit") }}
      </template>
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped>
.setting-items {
  margin-top: 5%;
}

.setting-items p {
  font-size: 1.1em;
}
</style>
