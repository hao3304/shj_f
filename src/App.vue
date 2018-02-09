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
@import "//at.alicdn.com/t/font_568396_abo8m578w3r3sor.css";

html,body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  height: 100%;
  min-width: 1200px;

}
#app {
  height: 100%;
  font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',Arial,sans-serif ;
  background-color: #f6f6f6;
  color: rgb(85, 85, 85);
  font-weight: 400;


}
</style>
