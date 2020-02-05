<template lang='pug'>
  .toolbar-admin
    .admin-container
      ul.toolbar-admin__list
        li(class='toolbar-admin__item' v-for='(item,index) in items' :key='index')
          router-link(:to='item.path' class='toolbar-admin__link' :class='{ active: index===activeItem}') {{ item.label}}
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    items: {
      type: Array,
      default: () => [
        {label: 'Обо мне', path: '/about'},
        {label: 'Работы', path: '/works'},
        {label: 'Отзывы', path: '/reviews'}
      ]
    },
  },
  computed: {
    activeItem() {
      return this.items.findIndex(el => el.path === this.$route.path)
    }
  },
  methods: {
  },
  mounted() {

  },
  components: {
  },
}
</script>

<style lang='pcss'>
@import url('../../styles/mixins.pcss');
  .toolbar-admin {
    width: 100%;
    height: 77px;
    background: #fff;
    color: #414c63;
    display: flex;
    align-items: center;
    font-size: 16px;
    @include phones  {
      font-size: 14px;
      justify-content: center;
    }
    &__list {
      display: flex;
      height: 100%;
      @include phones {
        justify-content: center;
      }
    }
    &__item {
      height: 100%;
      display: flex;
    }
    &__link {
      padding: 0 30px;
      height: 100%;
      display: flex;
      align-items: center;
      color: #414c63;
      text-decoration: none;
      border-bottom: 3px solid #fff;
      @include phones {
        padding: 0 20px;
      }
      
    }
    &__link.active {
      border-bottom: 3px solid #383bcf;
      color: #383bcf;
      font-weight: 600;
    }
  }
</style>