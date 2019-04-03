<template>
  <transition name="fade"
              @after-leave="afterLeaveHandle">
    <div class="toast f14"
         :style="{ 'z-index': zIndex }"
         v-show="isVisible">
      <div class="toast-mask"
           :style="{ ...maskStyle, 'z-index': zIndex - 1 }"
           v-show="maskVisible">
      </div>
      <div class="toast-container"
           :style="{ ...containerStyle, 'z-index': zIndex }">
        <p v-html="value || text" :class="[`iconfont-${type}`]"></p>
      </div>
    </div>
  </transition>
</template>

<script>
import visibilityMixin from 'mixins/visibility'

export default {
  name: 'MoToast',
  mixins: [visibilityMixin],
  props: {
    value: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text' // caution、failure、success
    },
    time: {
      type: Number,
      default: 1500
    },
    maskVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show () {
      if (this.isVisible || this.timer) return
      this.isVisible = true
      this.$nextTick(() => {
        if (this.time !== 0) {
          this.timer = setTimeout(() => {
            this.hide()
          }, this.time)
        }
      })
    },
    hide () {
      this.isVisible = false
      this.clearTimer()
    },
    clearTimer () {
      clearTimeout(this.timer)
      this.timer = null
    },
    afterLeaveHandle () {
      this.remove && this.remove()
    }
  },
  mounted () {
    this.value && this.show()
  }
}
</script>
<style lang="scss">


.toast {
  position: fixed;
  top: 0;
  left: 0;
  .toast {
    &-caution, &-failure, &-success {
      &:before {
        padding-top: 30px;
        padding-bottom: 20px;
        display: grid;
      }
    }
  }
  &-mask {
    position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
  }
  &-container {
    position: fixed;
    transform: translate(-50%, -50%);
    left: 50%;
    bottom: 5%;
    width: 3rem;
    text-align: center;
    color: #FFF;
  }
  p {
    border-radius: 0.08rem;
    background: rgba(0, 0, 0, .8);
    display: inline-block;
    padding: 0.1rem 0.3rem;
    word-break: break-word;
  }
}
</style>
