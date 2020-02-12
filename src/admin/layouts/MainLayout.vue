<template lang='pug'>
  .layout
    header-admin(:avatar='avatar' :user-name='userName')
    toolbar-admin
    .admin-container
      router-view
</template>

<script>
import Header from  '../components/Header'
import Toolbar from '../components/Toolbar'

// const Header = require('./components/Header')
const avatarPath = 'content/user.jpg'

export default {
  name: 'MainLayout',
  data() {
    return {
      avatar: '',
      userName: 'Иван Милованов',
    }
  },
  created() {
    this.avatar = require(`images/${avatarPath}`)
  },
  components: {
    'header-admin': Header,
    'toolbar-admin': Toolbar,
  }  
}
</script>

<style lang='pcss'>
  @import url('../../styles/mixins.pcss');
  .admin-container {
    margin: 0 auto;
    max-width: 1480px;
    width: 95%;
    height: 100%;
    @include phones {
      width: 100%;
    }  
  }
</style>