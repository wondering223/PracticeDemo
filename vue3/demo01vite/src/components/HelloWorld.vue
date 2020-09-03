<template>
<div>
    <h1>TODO</h1>
    <!-- 
     todoliat 三部分组成
    -->
    <div>
        <input type="text" v-model.trim="value" @keyup.enter="add(value)" />
        <button @click="add(value)">添加</button>
    </div>
    <div class="list">
        <div class="item" v-for="(item,i) of lists" :key="i+'k'">
            <p>{{name(i,item)}}</p>
            <button style="height:20px " @click="del(i)">已完成</button>
        </div>
    </div>
</div>
</template>

<style>
.item {
    display: flex;
    flex-direction: row;
    justify-items: space-between;
    align-content: space-between;
    align-items: center;

}
</style>

<script>
import {
    reactive,
    ref,
    computed
} from "vue";
export default {
    setup(props) {
        const lists = reactive(["小纯纯", "大纯纯", "想纯纯"]);
        const value = ref("");
        return {
            lists,
            value,
            add: (val) => {
                lists.push(val)
                value.value = ''
            },
            del: i => lists.splice(i, 1),
            name: (i, val) => i + 1 + "--" + val,
        };
    },
};
</script>
