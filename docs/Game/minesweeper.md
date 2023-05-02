<script setup>
import MineSweeper from '../public/components/MineSweeper.vue'
import { computed } from 'vue'
import { useData } from 'vitepress'
import { darkTheme, lightTheme } from 'naive-ui'
import { default as NMessageProvider } from 'naive-ui/lib/message/src/MessageProvider'
import { default as NConfigProvider } from 'naive-ui/lib/config-provider/src/ConfigProvider'
const theme = computed(() => {
  return useData().isDark.value ? darkTheme : lightTheme
})
</script>

<n-config-provider :theme="theme">
  <n-message-provider placement="top-right">
    <p text="center 6 w-bold" m="!0">Mine Sweeper</p>
    <mine-sweeper />
  </n-message-provider>
</n-config-provider>
