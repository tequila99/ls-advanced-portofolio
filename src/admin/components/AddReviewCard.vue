<template lang='pug'>
  .review-add
    .review-add__container
      .review-add__button-add
        font-awesome-icon(icon='plus' class='review-add__button-add--icon')
      .review-add__label Добавить работу

</template>

<script>
export default {
  name: 'AddReviewCard',
}
</script>

<style lang='pcss'>
  .review-add {
    width: 340px;
    height: 380px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);   
    background-color: #204edb;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;    
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