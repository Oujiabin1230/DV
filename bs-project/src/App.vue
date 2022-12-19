<template>
  <el-config-provider :locale="locale">
    <Home/>
  </el-config-provider>
</template>

<script>
import Home from './components/Home'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export default {
  setup(){
    return{
      locale:zhCn
    }
  },
  components: {
    Home
  }
}
</script>


<style lang="less">
  #app{
    width: 100%  !important;
    height: 100%  !important;
  }
</style>

