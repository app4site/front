<template lang="pug">
  .root
    input(
      placeholder=" "
      ':class'="{error}"
      ':autofocus'="alwaysFocus || autofocus"
      ':value'="value"
      '@input'="$emit('input', $event.target.value)"
      '@keyup.enter'="$emit('submit')"
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
.root
  display inline-block
  position relative

input
  height 100%
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
    background-color #4caf50
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
    color #4caf50
    transition 0.3s

  &.error
    ~ label
      color red
    ~ .border
      background-color red
</style>
