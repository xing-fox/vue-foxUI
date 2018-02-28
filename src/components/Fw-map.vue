<style lang="less" scoped>
  .map{
    width: 100%;
    height: 100%;
    #container{
      width: 100%;
      height: 100%;
    }
  }
</style>

<template>
  <div class="map">
    <div id='container'></div>
  </div>
</template>

<script>
import BMap from 'BMap'
export default {
  name: 'Fxmap',
  data () {
    return {
      map: '',
      zoom: 15 // 缩放级别
    }
  },
  mounted () {
    this.map = new BMap.Map('container')
    this.map.addControl(new BMap.NavigationControl({offset: new BMap.Size(10, 10)})) // 尺寸大小控件
    this.map.addControl(new BMap.GeolocationControl({offset: new BMap.Size(10, 10)})) // 定位控件
    this.currentPoint()
  },
  methods: {
    currentPoint () { // 获取当前位置
      let self = this
      let geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition((r) => {
        /* global BMAP_STATUS_SUCCESS */
        /* eslint no-undef: "error" */
        if (geolocation.getStatus() === BMAP_STATUS_SUCCESS) {
          self.map.centerAndZoom(r.point, self.zoom)
          self.map.addOverlay(new BMap.Marker(r.point))
          self.getElementsClass(' anchorBL') // 删除百度logo
        } else {
          alert('failed' + geolocation.getStatus())
        }
      }, {enableHighAccuracy: true})
    },
    getElementsClass (classnames) { // 消除百度logo
      setTimeout(() => {
        let tags = document.getElementsByTagName('*')
        for (let i in tags) {
          if (tags[i].nodeType === 1) {
            if (tags[i].getAttribute('class') === classnames) {
              tags[i].style.display = 'none'
            }
          }
        }
      }, 50)
    }
  }
}
</script>
