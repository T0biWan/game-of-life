<template>
    <div class="w-screen h-screen bg-app">
        <h1 class="pt-8 mb-4 text-4xl font-bold text-center text-blue-400">Welcome to the game of life</h1>

        <canvas id="canvas" :width="canvas_width" :height="canvas_height" class="m-auto bg-canvas">Your browser does not support the HTML5 canvas tag.</canvas>

        <div class="flex justify-center mt-4">
            <button v-if="!is_running()" @click="start"><icon_play  css="h-9 w-9" fill="#202020" stroke="#60A5FA" /></button>
            <button v-else-if="is_running()" @click="pause"><icon_pause css="h-9 w-9" fill="#202020" stroke="#60A5FA" /></button>
            <button @click="next_tick"><icon_arrow_circle_right css="h-9 w-9" fill="#202020" stroke="#60A5FA" /></button>
        </div>
    </div>
</template>

<script>
import Game from '@/scripts/game'
import icon_pause from '@/components/icons/icon_pause'
import icon_play from '@/components/icons/icon_play'
import icon_arrow_circle_right from '@/components/icons/icon_arrow_circle_right'

export default {
    components: {
        icon_arrow_circle_right,
        icon_play,
        icon_pause,
    },

    data () {
        return {
            canvas_width: 750,
            canvas_height: 400,
            game: null,
        }
    },

    mounted () {
        this.create_game ()
    },

    methods: {
        create_game () { this.game = new Game('canvas', this.cell_size) },
        start () {
            this.game.is_running = true
            this.next_tick()
        },
        pause () { this.game.is_running = false },
        next_tick () { this.game.tick() },
        is_running () { if (this.game) return this.game.is_running },
    },
}
</script>
