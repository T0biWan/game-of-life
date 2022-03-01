<template>
    <svg xmlns="http://www.w3.org/2000/svg" :class="css" :fill="fill" viewBox="0 0 24 24" :stroke="stroke">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="path" />
    </svg>
</template>

<script>
export default {
    // props: ['path', 'css', ]
    props: {
        path: {
            required: true
        },
        css: {},
        fill: {
            default: 'none'
        },
        stroke: {
            default: 'currentColor'
        },

    }
}
</script>
