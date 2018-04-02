<template lang="pug">
.device
  .wrapper
    slot
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus">
.device
  position relative
  width 280px
  height 618px
  background-image url(../assets/phone.png)
  background-repeat no-repeat
  background-size contain
  .wrapper
    position absolute
    top 0
    left 0
    height 100%
    width 100%
    display flex
    align-items center
    justify-content center
</style>
