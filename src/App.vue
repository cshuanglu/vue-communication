<template>
  <div id="app">
    <h5>parent</h5>
    <div>emit{{msg}}</div>
    <div>dispatch{{grandChild}}</div>
    <button @click="boardcast">给孙子传递数据</button>
    <Child :title="title" @getMsg="getMsg"/>
  </div>
</template>

<script>
import Child from "./components/Child.vue";

export default {
  name: "app",
  provide: {
    title: "我是你爷爷"
  },
  data() {
    return {
      title: "父组件数据传递",
      msg: "",
      grandChild: ""
    };
  },
  mounted() {
    // $on 监听孙子传递事件
    this.$on("dispatch", grandChild => {
      this.grandChild = grandChild;
    });
  },
  methods: {
    boardcast() {
      this.$boardcast("boardcast", "我是你爷爷");
    },
    getMsg(msg) {
      this.msg = msg;
    }
  },
  components: {
    Child
  }
};
</script>

<style scope>
.app {
  width: 500px;
  height: 400px;
  border: 1px solid hotpink;
}
.singe {
  height: 0;
  width: 0;
  border-width: 20px;
  border-style: solid;
  border-color: red red transparent transparent;
  /* transform: rotateX(120deg); */
}
@keyframes myfirst {
  from {
    background-color: aqua;
    left: 10px;
  }
  to {
    background-color: pink;
    left: 0px;
  }
}
.box {
  width: 100px;
  height: 100px;
  /* box-sizing: border-box; */
  border: 1px solid pink;
  background-color: aqua;
  animation: myfirst 5s;
  -webkit-animation: myfirst 5s;
  position: relative;
}
</style>
