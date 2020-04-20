<template>
  <b-popover
    target="popover"
    placement="top"
    title="AQI scheme"
    triggers="click"
  >
    <template>
      <div class="good mb-1 p-1">
        0 - 50
        <div>Good</div>
      </div>
      <div class="moderate mb-1 p-1">
        51-100
        <div>Moderate</div>
      </div>
      <div class="sensitive mb-1 p-1">
        101-150
        <div>Unhealthy for Sensitive Groups</div>
      </div>
      <div class="unhealthy mb-1 p-1">
        151-200
        <div>Unhealthy</div>
      </div>
      <div class="very-unhealthy mb-1 p-1">
        201-300
        <div>Very Unhealthy</div>
      </div>
      <div class="hazardous p-1">
        301-500+
        <div>Hazardous</div>
      </div>
    </template>
  </b-popover>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/colors";
</style>
