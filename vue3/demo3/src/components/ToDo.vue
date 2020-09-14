<template>
<a-row>
    <a-col :span="8" :offset="8">
        <h2>TODO</h2>
        <!-- list -->
        {{value}}
        <a-list bordered :data-source="lists">
            <template v-slot:renderItem="{ item, index }">
                <a-list-item>{{ index + item }}</a-list-item>
            </template>
            <template v-slot:header>
                <a-input-search v-model:value.trim="value" placeholder="请输入" size="large">
                    <template v-slot:enterButton>
                        <a-button @click="add(value)">添加</a-button>
                    </template>
                </a-input-search>
            </template>
        </a-list>
    </a-col>
</a-row>
</template>

<script>
import {
    reactive,
    ref,
    computed
} from "vue";
export default {
    name: "ToDo",
    setup(props) {
        const lists = reactive(["小纯纯", "大纯纯", "想纯纯"]);
        const value = ref("");
        return {
            lists,
            value,
            add: (val) => {
                if (!val) return false;
                lists.push(val);
                value.value = "";
            },
            del: (i) => lists.splice(i, 1),
            name: (i, val) => i + 1 + "--" + val,
        };
    },
};
</script>
