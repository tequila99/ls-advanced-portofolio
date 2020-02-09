<template lang='pug'>  
  .avatar(class='admin__avatar--mini')
    img(:src='avatar' :alt='userName' class='admin__avatar-img')
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    avatar: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      default: ''
    }
  },
  data: () => ({}),
  computed: {},
  methods: {},
  mounted() {},
  components: {},
}
</script>

<style scoped lang='pcss'>
  .admin {
    &__avatar {
      &--mini {
        width: 45px;
        height: 45px;
        overflow: hidden;
        border-radius: 50%;
        display: flex;
        justify-content: center;
      }
    }
    &__avatar-img {
      width: 100%;
      height: 100%;
      display: block;
      cursor: pointer;
      object-fit: cover;
    }
  }

</style>