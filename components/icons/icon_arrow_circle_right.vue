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
        return { path: "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" } 
    }
}
</script>