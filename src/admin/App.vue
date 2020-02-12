<template lang="pug">
  .main-app
    router-view
    modal-warning
</template>

<script>
import ModalWarning from './components/ModalWarning'
export default {
  name: 'MainApp',
  components: {ModalWarning}
}
</script>

<style lang='pcss'>
@import url('../styles/mixins.pcss');
body {
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.42;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f7f7f7;
  position: relative;
}

* {
  box-sizing: border-box;
}
.wrapper {
  overflow: hidden;
  min-height: 100%;
  position: relative;  
}
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }  

</style>