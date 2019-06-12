<template>
  <div class="grandChild">
    <h5>grandchild</h5>
    <div>provide&inject{{title}}</div>
    <button @click="dispatch">通知父组件</button>
    <div style="color: yellow">boardcast{{msg}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  inject: ["title"],
  mounted() {
    this.$on("boardcast", msg => {
      this.msg = msg;
    });
  },
  methods: {
    dispatch() {
      // 调用main中注册的函数
      this.$dispatch("dispatch", "来自孙子");
    }
  }
};
</script>

<style scoped>
.grandChild {
  height: 200px;
  width: 200px;
  border: 1px solid green;
}
</style>
