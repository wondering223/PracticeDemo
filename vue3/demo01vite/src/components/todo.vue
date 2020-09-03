<template>
<div>
    <h1>TODO</h1>
    <!-- 
     todoliat 三部分组成
     -->
    <div>
        <input type="text" v-model.trim="value">
        <button @click="add(value)">添加</button>
    </div>
    <div class="list">
        <div class="item" v-for="(item,i) of lists" :key="i+'k'"></div>
    </div>
</div>
</template>

<script>
import {
    reactive,
    ref
} from 'vue'
export default {
    name: "todo",
    setup(props) {
        const lists = reactive(['小纯纯', '大纯纯', '想纯纯'])
        const value = ref('')
        return {
            lists,
            value,
            add: val => lists.push(val)
        }

    }
}
</script>
