import { computed, ref, watch } from 'vue'
import { darkTheme, type GlobalTheme } from 'naive-ui'

export type ThemeMode = 'light' | 'dark'

const THEME_STORAGE_KEY = 'simple-vue3-template-theme'

const themeMode = ref<ThemeMode>(getInitialThemeMode())

const isDark = computed(() => themeMode.value === 'dark')
const naiveTheme = computed<GlobalTheme | null>(() => (isDark.value ? darkTheme : null))

function getInitialThemeMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function setTheme(mode: ThemeMode) {
  themeMode.value = mode
}

function toggleTheme() {
  setTheme(isDark.value ? 'light' : 'dark')
}

function applyTheme(mode: ThemeMode) {
  if (typeof window !== 'undefined') {
    const isDarkMode = mode === 'dark'

    window.localStorage.setItem(THEME_STORAGE_KEY, mode)
    document.documentElement.dataset.theme = mode
    document.documentElement.classList.toggle('dark', isDarkMode)
  }
}

if (typeof window !== 'undefined') {
  watch(themeMode, applyTheme, { immediate: true })
}

export function useTheme() {
  return {
    themeMode,
    isDark,
    naiveTheme,
    setTheme,
    toggleTheme,
  }
}
