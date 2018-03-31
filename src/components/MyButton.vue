<template lang="pug">
  label.my-button(v-if="file" :class="{primary}")
    input(type="file" :name="name" v-on="$listeners")
    span
      slot
  button.my-button(v-else v-on="$listeners" :class="{primary}")
    slot

</template>

<script>
  export default {
    props: {
      file: Boolean,
      primary: Boolean,
      name: String,
    },
    data: () => ({
    }),
    methods: {
    },
  }
</script>

<style scoped lang="stylus">
gold = #ffd014
golder = #fff900

.my-button
  border-radius 5px
  font-size inherit
  display inline-block
  cursor pointer
  border 1px solid gold
  padding 0.625rem 1.25rem
  width 100%
  outline none
  text-align center
  text-decoration none
  transition-property background-color, color, opacity
  transition-duration .3s

  &.primary
    background-color gold
    color black
    &:hover
      opacity .85

  &:not(.primary)
    background-color transparent
    color gold
    &:hover
      border-color gold
      background-color gold
      color black

  & input[type="file"]
    width 0.1px
    height 0.1px
    opacity 0
    overflow hidden
    position absolute
    z-index -1

</style>
