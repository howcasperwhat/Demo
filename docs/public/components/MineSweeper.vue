<script setup lang="ts">
import MineBlock from './MineBlock.vue'
import { GamePlay } from '../logic/minesweeper'
import { isDev, toggleDev } from '../storage/minesweeper'
import { computed, h, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import { useMessage } from 'naive-ui'
import { default as NAlert } from 'naive-ui/lib/alert/src/Alert'
const message = useMessage()
const play = new GamePlay(12, 12)
useStorage('minesweeper', play.state)
const board = computed(() => play.board)
const state = computed(() => play.state.value.gameState)
const renderMessage = (props) => {
  return h(NAlert, {
    type: props.type, style: { width: '24rem' }, closable: true,
    title: props.type === 'success' ? "Success" : "Fail"
  }, { default: () => props.content })
}
watch(state, (newState, oldState) => {
  if (oldState !== "playing") return
  if (newState === "won")
    message.success("You won!", { render: renderMessage, duration: 0 })
  else if (newState === "lose")
    message.error("You lose!", { render: renderMessage, duration: 0 })
})
</script>

<template>
  <div>
    <div p5 @contextmenu.prevent="">
      <div
        v-for="row, y in board" :key="y"
        flex select-none items-center justify-center
      >
        <MineBlock
          v-for="block, x in row" :key="x"
          :block="block"
          @click="play.onClick(block)"
          @contextmenu="play.onRightClick(block)"
        />
      </div>
    </div>
    <div flex="~ gap-1" justify-center>
      <button btn @click="toggleDev()" v-if="false">
        {{ isDev ? 'DEV' : 'NORMAL' }}
      </button>
      <button btn @click="play.reset(); message.destroyAll();">
        RESET
      </button>
    </div>
  </div>
</template>
