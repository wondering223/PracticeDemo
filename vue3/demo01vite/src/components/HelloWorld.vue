<template>
<div>
    <h1 @click="fn">TODO</h1>
    <!-- 
     todolist 三部分组成
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
import qs from "qs"
import axios from 'axios'
export default {
    setup(props) {
        const fn = () => {
            var url = "http://api.zhongcaisd.cn/lotteryuser/site/transaSiteAdd";
            var data = {
                interfaceCode: "transaSiteAdd",
                requestTime: parseInt(new Date().getTime() / 10000),
                accountId: 2,
                data: {
                    siteNum: "981",
                    type: "00",
                    areaId: 29,
                },
            };
            let str = JSON.stringify(data)
            axios.post(url, str, {
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => {
                console.log(res)
            })
        };
        const lists = reactive(["小纯纯", "大纯纯", "想纯纯"]);
        const value = ref("");
        return {
            lists,
            value,
            add: (val) => {
                lists.push(val);
                value.value = "";
            },
            del: (i) => lists.splice(i, 1),
            name: (i, val) => i + 1 + "--" + val,
            fn,
        };
    },
};
</script>
