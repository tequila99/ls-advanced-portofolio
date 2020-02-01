<template lang='pug'>
  .fab-add-button
    font-awesome-icon(icon='plus')
</template>

<script>
export default {
  name: 'FabAddButton',
  props: {},
  data: () => ({}),
  computed: {},
  methods: {},
  mounted() {},
  components: {},
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