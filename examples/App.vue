<template>
  <div id="app">
      <Button text="点我一下" class="f16"  @click="ButtonClickHanlder"></Button>
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
    console.log('btn  Clicked');
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
  