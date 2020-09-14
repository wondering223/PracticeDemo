<template>
<h1>{{ msg }}</h1>
<a-button @click="count++">count is: {{ count }}</a-button>
<p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            count: 0
        }
    }
}
</script>
