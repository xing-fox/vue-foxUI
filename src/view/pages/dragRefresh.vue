<style lang="less" scoped>
.dragRefresh{
  width: 100%;
  height: 100%;
  position: relative;
  .scrollContainer{
    width: 100%;
    height: initial !important;
    position: absolute;
    top: 0;
    bottom: 0px;
    box-sizing: border-box;
    overflow: auto;
    ul{
      width: 100%;
      background: #fff;
      li{
        color: #ff9008;
        font-size: .34rem;
        height: .5rem;
        line-height: .5rem;
      }
    }
  }
}
</style>

<template>
  <div class="dragRefresh">
    <DragRefresh className="scrollContainer" ref="Wrapper" :topRefresh="onTopRefresh" :bottomRefresh="onBottomRefresh">
      <ul>
        <li class='wq-border-b' v-for=" (item, index) in totalData " :key="index" @click='changeDetailsFunc(index)'>
          <span>{{ item }}</span>
        </li>
      </ul>
    </DragRefresh>
  </div>
</template>

<script>
import DragRefresh from '@/components/Dragrefresh/dragrefresh'
export default {
  name: 'dragRefresh',
  data () {
    return {
      totalData: ['qewr', 'asdf', 'zxcv', 'tyui', 'ghjk', '1234', 'qazw', 'tfgv', '9876'],
      flag: false
    }
  },
  components: {
    DragRefresh
  },
  created () {
    // let _flag = response.data.length === 10
    // let _flag = false
    // this.$refs.Wrapper.instance.setPagination(this.flag, !_flag)
    // setTimeout(() => {
    //   if (!this.flag) {
    //     this.$refs.Wrapper.$el.scrollTop = '1'
    //     setTimeout(() => {
    //       this.$refs.Wrapper.$el.scrollTop = '0'
    //     }, 50)
    //   }
    //   this.$refs.Wrapper.instance.setPagination(this.flag, !_flag)
    // }, 100)
  },
  methods: {
    onTopRefresh () {
      this.$refs.Wrapper.instance.setPagination(false, true)
    },
    onBottomRefresh () {
      console.log('bottom')
    },
  }
}
</script>
