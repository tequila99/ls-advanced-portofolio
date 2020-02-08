<template lang='pug'>
  .edit-buttons
    a.edit-buttons__button(v-for='(icon, index) in iconsFilter' :key='index' @click.prevent='$emit(icon.name)')
      font-awesome-icon(class='edit-buttons__icon'  :icon='icon.icon' :color='icon.color'  )
</template>

<script>
export default {
  name: 'EditButtons',
  props: {
    icons: {
      type: String,
      default: 'ok close'
    }
  },
  data() {
    return {
      items: [
        {name: 'ok', icon: 'check', color: '#09d813'},
        {name: 'close', icon: 'times', color: '#bf2929'},
        {name: 'edit', icon: 'edit', color: '#a0a5b1'},
        {name: 'remove', icon: 'trash', color: '#a0a5b1'},
      ]
    }
  },
  computed: {
    iconsFilter() {
      return this.icons.split(' ').map(el => this.items.find(i => i.name === el))
    }
  },
  methods: {},
  mounted() {},
  components: {},
}
</script>

<style lang='pcss'>
  .edit-buttons {
    display: flex;
    /* width: 100%; */
    /* justify-content: space-between; */
    &__button {
      /* margin-right: 20px; */
      padding: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background: #ddd;
        transition: .4s;
      }

    }
  }

</style>