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
gold = #79cd95
blya = #29293a

.my-button
  font-size inherit
  display inline-block
  cursor pointer
  border 3px solid gold
  padding 0.625rem 1.25rem
  width 100%
  outline none
  text-align center
  text-decoration none
  transition-property background-color, color, opacity
  transition-duration .4s

  &.primary
    background-color gold
    color blya
    &:hover
      opacity .85

  &:not(.primary)
    background-color transparent
    color white
    &:hover
      border-color gold
      background-color gold
      color blya

  & input[type="file"]
    width 0.1px
    height 0.1px
    opacity 0
    overflow hidden
    position absolute
    z-index -1

</style>
