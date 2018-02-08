<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
html,body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  height: 100%;
  font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',Arial,sans-serif;
  color: rgb(85, 85, 85);
  font-weight: 400;
}
#app {
  height: 100%;
}
</style>
