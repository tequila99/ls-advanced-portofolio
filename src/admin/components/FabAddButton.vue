<template lang='pug'>
  .fab-add-button(:style='{opacity: opacity, cursor: cursor }')
    font-awesome-icon(icon='plus')
</template>

<script>
export default {
  name: 'FabAddButton',
  props: {
    disable: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  computed: {
    opacity() {
      return !!this.disable ? '0.5' : '1'
    },
    cursor() {
      return !!this.disable ? 'unset' : 'pointer'
    }
  },
}
</script>

<style lang='pcss'>
  .fab-add-button {
    width: 40px;
    height: 40px;
    color: white;
    background-color: #343fd1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>