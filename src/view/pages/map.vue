<style lang="less" scoped>
.map{
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="map">
    <Fwmap></Fwmap>
  </div>
</template>

<script>
import Fwmap from '@/components/Fw-map'
export default {
  name: 'map',
  components: {
    Fwmap
  }
}
</script>
