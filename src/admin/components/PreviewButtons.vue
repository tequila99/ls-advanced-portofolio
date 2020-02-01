<template lang='pug'>
  .preview-buttons
    a(@click='$emit("edit")' class='preview-buttons__link')
      | Править
      font-awesome-icon(icon='edit' class='preview-buttons__icon--edit preview-buttons__icon')
    a(@click='$emit("remove")' class='preview-buttons__link')
      | Удалить
      font-awesome-icon(icon='trash' class='preview-buttons__icon--remove preview-buttons__icon')      
</template>

<script>
export default {
  name: 'PreviewButtons',
  props: {},
  data: () => ({}),
  computed: {},
  methods: {},
  mounted() {},
  components: {},
}
</script>

<style lang='pcss'>
  .preview-buttons {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;    
    &__link {
      color: #414c63;
      opacity: .5;
      font-size: 16px;
      display: flex;
      align-items: center;
      
    }
    &__icon {
      margin-left: 11px;
      &--edit {
        color: #383bcf;
      }
      &--remove {
        color: #c92e2e;
      }
    }
  }

</style>