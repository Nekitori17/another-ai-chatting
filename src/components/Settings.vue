<script setup lang="ts">
import {
  NDrawer,
  NDrawerContent,
  NSelect,
  NSpace,
  NSlider,
  NInput,
  NInputNumber,
  type SelectGroupOption,
  type SelectOption,
} from "naive-ui"
import { computed, defineModel, reactive, watch } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const showSettings = defineModel("show", {
  type: Boolean,
  default: false,
  required: true,
})

const currentTheme = defineModel("theme", {
  type: String,
  default: "dark",
  required: true,
})

const language = defineModel("language", {
  type: String,
  default: "en",
  required: true,
})

const temputure = defineModel("temputure", {
  type: Number,
  default: 0.75,
  required: true,
})

const topP = defineModel("top-p", {
  type: Number,
  default: 1,
  required: true,
})

const props = defineProps<{
  tokenCount: number
  tokenLimit: number
}>()

const themeOptions = computed(() => {
  return reactive<Array<SelectOption | SelectGroupOption>>([
    {
      label: t("settings:theme:light"),
      value: "light",
      disabled: false,
    },
    {
      label: t("settings:theme:dark"),
      value: "dark",
      disabled: false,
    },
  ])
})

const languageOptions = computed(() => {
  return reactive<Array<SelectOption | SelectGroupOption>>([
    {
      label: t("settings:languages:english"),
      value: "en",
      disabled: false,
    },
    {
      label: t("settings:languages:vietnamese"),
      value: "vi",
      disabled: false,
    },
  ])
})

watch(
  () => temputure.value,
  (newValue) => {
    if (newValue < 0) {
      temputure.value = 0
    } else if (newValue > 2) {
      temputure.value = 2
    }
  },
)
</script>

<template>
  <NDrawer v-model:show="showSettings" width="350">
    <NDrawerContent>
      <template #header>
        <h2>{{ $t("settings") }}</h2>
      </template>
      <template #default>
        <div class="setting-items">
          <NSpace justify="space-between">
            <p>{{ $t("settings:theme") }}</p>
            <NSelect v-model:value="currentTheme" :options="themeOptions" style="width: 6em" />
          </NSpace>
          <br />
          <NSpace justify="space-between">
            <p>{{ $t("settings:language") }}</p>
            <NSelect v-model:value="language" :options="languageOptions" style="width: 10em" />
          </NSpace>
          <br />
          <hr />
          <br />
          <NSpace justify="space-between">
            <p>{{ $t("settings:token-count") }}</p>
            <p>
              {{ props.tokenCount.toLocaleString("us") }}/{{
                props.tokenLimit.toLocaleString("us")
              }}
            </p>
          </NSpace>
          <br />
          <NSpace justify="space-between">
            <p>{{ $t("settings:tempurature") }}</p>
          </NSpace>
          <NSpace justify="space-between" align="center">
            <NSlider
              v-model:value="temputure"
              :min="0"
              :max="2"
              :step="0.01"
              style="width: 17.5em"
            />
            <NInput
              v-model:value="temputure"
              :placeholder="t('settings:tempurature')"
              style="width: 3em"
            />
          </NSpace>
          <br />
          <NSpace justify="space-between">
            <p>{{ $t("settings:top-p") }}</p>
            <NInputNumber
              v-model:value="topP"
              :min="0"
              :max="1"
              :step="0.01"
              style="width: 6.5em"
            />
          </NSpace>
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
