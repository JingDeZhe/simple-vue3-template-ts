<script setup lang="ts">
import { NConfigProvider, NDialogProvider, NGlobalStyle, NLoadingBarProvider, NMessageProvider, NNotificationProvider } from 'naive-ui'

import NaiveApiProvider from './NaiveApiProvider.vue'

const { naiveTheme } = useTheme()
</script>

<template>
  <n-config-provider :theme="naiveTheme">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <naive-api-provider>
              <slot></slot>
            </naive-api-provider>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
    <n-global-style />
  </n-config-provider>
</template>
