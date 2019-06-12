<template>
  <div class="child">
    <h5>child</h5>
    <div style="color:red;">{{title}}</div>
    <button @click="emitData">传递给父组件</button>
    <div>dispatch{{grandChild}}</div>
    <div>boardcast{{boardcastMsg}}</div>
    <grand-child></grand-child>
  </div>
</template>

<script>
import grandChild from "./grandChild.vue";
export default {
  name: "Child",
  props: ["title"],
  // inject: ["title"],
  data() {
    return {
      msg: "我是子组件",
      boardcastMsg: "",
      grandChild: ""
    };
  },
  components: {
    "grand-child": grandChild
  },
  mounted() {
    this.$on("dispatch", grandChild => {
      this.grandChild = grandChild;
    });
    this.$on("boardcast", msg => {
      this.boardcastMsg = msg;
    });
  },
  methods: {
    emitData() {
      this.$emit("getMsg", this.msg);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.child {
  width: 400px;
  height: 400px;
  border: 1px solid skyblue;
}
</style>
