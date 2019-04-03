<template>
  <div id="app">
      <mo-button text="打开弹窗" class="f16"  @click="ButtonClickHanlder"></mo-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color: '#ff0000'
    }
  },
  methods: {
  ButtonClickHanlder(){
    this.$toast({
        text: '弹窗测试'
      }).show()
  }
  }
}
</script>

<style lang="scss">
@import "assets/style.scss";
#app{
  padding: 0.26rem;
}
</style>
  