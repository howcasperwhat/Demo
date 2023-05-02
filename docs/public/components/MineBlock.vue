<script setup lang='ts'>
import type { BlockState } from '../type/minesweeper'
import { isDev } from '../storage/minesweeper'

defineProps<{ block: BlockState }>()

const numberColors = [
  'text-transparent',
  'text-blue',
  'text-green',
  'text-red',
  'text-purple',
  'text-yellow',
  'text-pink',
  'text-gray',
]

function getBlockClass(block: BlockState) {
  if (block.flagged)
    return 'bg-gray-500/30'
  if (!block.revealed)
    return 'bg-gray-500/30 hover:bg-gray-500/30'
  return block.mine ? 'text-white bg-red/50' : numberColors[block.adjacentMines] + ' bg-gray-500/10'
}
</script>

<template>
  <button
    m-.5 h-10 w-10
    flex items-center justify-center
    border="1 gray-400/20"
    hover="bg-gray/10"
    :class="getBlockClass(block)"
  >
    <template v-if="block.flagged">
      <div i-mdi-flag text-red />
    </template>
    <template v-else-if="block.revealed || isDev">
      <div v-if="!block.mine">
        {{ block.adjacentMines }}
      </div>
      <div v-else i-mdi-mine />
    </template>
  </button>
</template>

<style scoped></style>
