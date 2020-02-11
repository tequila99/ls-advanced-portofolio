<template lang='pug'>
  .upload-avatar
    .upload-avatar__img
      input(
        type="file" 
        accept="image/*" 
        name="avatar" 
        @change="chooseImage" 
        :value='null'
      )
      img(
        class="upload-avatar__unload-img"
        :src='fullImage'
        alt='Загруженный аватар'
        v-if="!!fullImage"
      )
      font-awesome-icon(v-else class='upload-avatar__icon' icon='user')
    a.upload-avatar__label(@click='unloadImage=null') {{ !!unloadImage ? 'Удалить фото' : 'Добавить фото' }}
</template>

<script>
import { getFullPath } from '../helpers'
export default {
  name: 'UploadAvatar',
  props: {
    avatar: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      unloadImage: null
    }
  },
  watch: {
    unloadImage(newval) {
      if (newval === null) this.$emit('clear')
    }
  },
  computed: {
    fullImage() {
            return !!this.unloadImage 
              ? this.unloadImage 
              : !!this.avatar ? getFullPath(this.avatar) : ''
    }
  },
  methods: {
    chooseImage (e) {
      let files = e.target.files;
      if(files.length === 0) {
        this.unloadImage = null
        return
      }
      let reader = new FileReader();
      reader.onload = (e) => {
        this.unloadImage = e.target.result;
        this.$emit('input',files[0])
      }
      reader.readAsDataURL(files[0]);
    },    
  }
}
</script>

<style lang='pcss'>
  .upload-avatar {
    display: flex;
    flex-direction: column;
    &__unload-img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }    
    &__img {
      width: 200px;
      height: 200px;
      background-color: #dee4ed;
      border-radius: 50%;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;
      input {
        width: 100%;
        cursor: pointer;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.001;        
        z-index: 10;        
      }
    }
    
    &__icon {
      width: 100px !important;
      height: 100px !important;
    }
    &__label {
      margin: 27px auto 0;
      display: flex;
      color: #383bcf;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    }
  }
</style>