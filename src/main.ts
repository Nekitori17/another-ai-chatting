import { createApp } from "vue"
import { createI18n } from "vue-i18n"
import App from "./App.vue"

import en from "./locales/en.json"
import vi from "./locales/vi.json"

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem("appLanguage") || "en",
  fallbackLocale: "en",
  messages: {
    en,
    vi,
  },
})

const app = createApp(App)
app.use(i18n)
app.mount("#app")
