<template lang="pug">
  .cool-input(':class'="{spinner}")
    input(
      placeholder=" "
      ':class'="{error}"
      ':autofocus'="alwaysFocus || autofocus"
      ':value'="value"
      ':readonly'="readonly"
      '@input'="$emit('input', $event.target.value)"
      '@keyup.enter'="!readonly && $emit('submit')"
      '@blur'="blur"
    )
    label {{error || placeholder}}
    span.border
</template>

<script>
  export default {
    props: {
      value: String,
      error: String,
      placeholder: String,
      autofocus: Boolean,
      alwaysFocus: Boolean,
      spinner: Boolean,
      readonly: Boolean,
    },
    methods: {
      blur(event) {
        if (this.alwaysFocus)
          event.target.focus()
      }
    },
  }
</script>

<style scoped lang="stylus">
apple = #4caf50

.cool-input
  display inline-block
  position relative
  margin-top 30px

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

.spinner:after
  position absolute
  top 0
  right 0
  height 0.8em
  width 0.8em
  content ' '
  border-radius 100%
  border .25rem solid rgba(apple, 0.2)
  border-top-color apple;
  animation spin 1500ms infinite linear
  transform translateZ(0)

input
  width 100%
  outline none
  border 0
  padding 0 0 4px
  border-bottom 1px solid #ccc
  background-color transparent
  font-size inherit

  ~ .border
    position absolute
    bottom 0
    left 0
    width 0
    height 2px
    background-color apple
    transition 0.4s

  &:focus ~ .border
  &:not(:placeholder-shown) ~ .border
    width 100%
    transition 0.4s

  ~ label
    position absolute
    left 0
    width 100%
    bottom 0
    height 100%
    color #aaa
    transition 0.3s
    pointer-events none
    user-select none
    letter-spacing 0.5px

  &:focus ~ label
  &:not(:placeholder-shown) ~ label
    height 15px
    bottom 100%
    font-size 12px
    color apple
    transition 0.3s

  &.error
    ~ label
      color red
    ~ .border
      background-color red
</style>
