<template>
    <abstract_svg :path="path" :class="css" />
</template>

<script>
import abstract_svg from '@/components/icons/abstract_svg'

export default {
    components: {
        abstract_svg
    },

    props: ['css'],

    data () {
        return { path: "M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" } 
    }
}
</script>
