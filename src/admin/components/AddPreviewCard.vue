<template lang='pug'>
  .preview-card.preview-card--add
    .preview-card__container
      .preview-card__button-add
        font-awesome-icon(icon='plus' class='preview-card__button-add--icon')
      .preview-card__label Добавить работу

</template>

<script>
export default {
  name: '',
  props: {},
  data: () => ({}),
  computed: {},
  methods: {},
  mounted() {},
  components: {},
}
</script>

<style lang='pcss'>
  .preview-card {
    &--add {
      background-color: #204edb;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      justify-content: center;
      align-items: center;
    }
    &__container {
      width: 160px;
      display: flex;
      flex-direction: column;
      color: #fff;
      justify-content: center;
      align-items: center;
      justify-self: center;
    }
    &__button-add {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 2px solid #ffffff;
      &--icon {
        width: 34px !important;
        height: 34px !important;
      }
    }
    &__label {
      margin-top: 30px;
      font-size: 18px;
      font-weight: 700;
      padding: 0 10%;
      text-align: center;
    }
  }
</style>