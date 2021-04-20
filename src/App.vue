<template>
  <el-container id="app" >
    <el-header>
      <nva></nva>
    </el-header>
    <el-main>
      <stat></stat>
      <search></search>
      <router-view/>
    </el-main>
    <el-footer>
      <foot></foot>
    </el-footer>
  </el-container>
</template>

<script>
import nva from '@/components/nva'
import foot from '@/components/footer'
import stat from '@/components/stat'
import search from '@/components/search'
export default {
  name: 'App',
  components: {
    nva,
    foot,
    stat,
    search
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1b1f40;
  color: #2c3e50;
}
html {
  background-color: #1b1f40;
  height: 99%;
}
body{
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #1b1f40;
}
</style>
