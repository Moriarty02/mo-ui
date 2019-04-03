<template>
  <button 
    class="button"
    :class="className"
    :disabled="disabled"
    @click.stop="onClick">{{text}}</button>
</template>

<script>
const classNames = {
  primary: 'primary',
  secondary: 'secondary',
  yellow: 'yellow'
}

export default {
  name:"MoButton",
  props:{
    type: {
      type: String,
      default: function(){
        return 'primary';
      }
    },

    text: String,

    disabled:{
      type: Boolean,
      default: function(){
        return false
      }
    }
  },
  computed: {
    className: function(){
      return classNames[this.type] || '';
    }
  },

  methods:{
    onClick(e){
      this.$emit("click",e)
    }
  }
}
</script>

<style scoped lang="scss">
  .button{
    position: relative;
    display: inline-block;
    height: 0.56rem;
    font-size: 0.28rem;
    color: #fff;
    padding: 0 0.2rem;
    text-align: center;
    border-radius: 0.04rem;
  }
  .button:active{
    background-color: #0078FF;
  }
    .button:focus{
    background-color: #0078FF;
  }
 
  button{
    outline: none;
    border:none;
  }


  .button.primary:not(:disabled){
    background-image: linear-gradient(-180deg, #4AB5FF 4%, #0078FF 100%);
    box-shadow: 0 0.04rem 0 0 rgba(0,147,255,0.30);
  }
  .button.secondary:not(:disabled){
    background-image: linear-gradient(-180deg, #FFD268 0%, #FF9978 28%, #FF4746 100%);
    box-shadow: 0 0.04rem 0 0 rgba(248,70,70,0.40);
  }
  .button.yellow:not(:disabled){
    background-image: linear-gradient(-180deg, #FDF255 0%, #FDB53A 90%);
    box-shadow: 0 0.04rem 0 0 rgba(248,70,70,0.40);
    color: #F84646;
  }

  button[disabled]{
    background-color: #9EA7AF;
    box-shadow: 0 0.04rem 0 0 rgba(158,167,175,0.30);
  }
  
</style>