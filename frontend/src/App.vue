<template>
  <div id="app">
    <div class="sidebar">
      <SideBar/>
    </div>
    <div class="content-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;

  .sidebar{
    width: 250px;
    height: 100vh;
    background-color: black;
    float: left;
  }

  .content-right{
    width: calc(100% - 250px);
    height: 100vh;
    background-color: red;
    float: left;
  }
}
</style>
