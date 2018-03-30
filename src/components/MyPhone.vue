<template lang="pug">
  .device-wrapper
    .device(data-device="Pixel" data-orientation="portrait" data-color="black")
      .screen
        .status-bar
        slot
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus">
@import url('~html5-device-mockups/dist/device-mockups.min.css')
.screen
  pointer-events initial
  background-size contain
  background url(../assets/mbg.jpeg) round
  display flex
  align-items center
  justify-content center
.status-bar
  background-size contain
  background-repeat no-repeat
  background-image url(../assets/status-bar.png)
  position absolute
  top 0
  right 0
  height 30px
  width 65px
</style>
