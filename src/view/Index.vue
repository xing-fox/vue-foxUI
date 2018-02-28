<style lang="less" scoped>
ul {
  list-style-type: none;
  padding: 0;
  li {
    font-size: .3rem;
    margin: 0 .2rem;
    line-height: 1rem;
  }
}
</style>

<template>
  <div class="hello">
    <ul>
      <li class='Fw-border-b' @click='mapFunc'>Map(百度地图基本api)</li>
      <li class='Fw-border-b'>图文消息走马灯</li>
      <li class='Fw-border-b' @click='dragRefresh'>数据列表上滑下拉加载刷新</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  methods: {
    mapFunc () {
      this.$router.push({
        path: '/map'
      })
    },
    dragRefresh () {
      this.$router.push({
        path: '/dragRefresh'
      })
    }
  }
}
</script>
