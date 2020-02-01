<template lang='pug'>
  .toolbar-admin
    .admin-container
      ul.toolbar-admin__list
        li(class='toolbar-admin__item' v-for='(item,index) in items' :key='index')
          a(class='toolbar-admin__link' :class='{ active: index===activeItem}') {{ item.label}}
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    items: {
      type: Array,
      default: () => [
        {label: 'Обо мне'},
        {label: 'Работы'},
        {label: 'Отзывы'}
      ]
    },
    activeItem: {
      type: Number,
      default: 0
    }
  },
  computed: {},
  methods: {
  },
  mounted() {

  },
  components: {
  },
}
</script>

<style lang='pcss'>
  .toolbar-admin {
    width: 100%;
    height: 77px;
    background: #fff;
    color: #414c63;
    display: flex;
    align-items: center;
    font-size: 16px;
    &__list {
      display: flex;
      height: 100%;
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
      
    }
    &__link.active {
      border-bottom: 3px solid #383bcf;
      color: #383bcf;
      font-weight: 600;
    }
  }
</style>