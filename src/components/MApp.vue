<template lang="pug">
  .m-app(':class'="{blur}")
    .icon
      .image(
        ':class'="{placeholder: !icon}"
        ':style'="{backgroundImage: icon && `url(${icon})`}"
      )
    .title {{appName || 'Cool App!'}}

</template>

<script>
export default {
  props: {
    blur: Boolean,
    appName: String,
    icon: String,
  }
}
</script>

<style scoped lang="stylus">
.m-app
  display flex
  flex-direction column
  align-items center
  user-select none
  &.blur
    filter blur(2px)
  & .icon
    position relative
    width 45px
    height 45px
    //border-radius 10px
    & .image
      position: absolute
      top 0
      left 0
      right 0
      bottom 0
      background-size contain
      background-repeat no-repeat
      &.placeholder
        background-image url(../assets/icon.png)

  .title
    margin-top 5px
    font-size 10px
    font-weight 600
    color whitesmoke
</style>
