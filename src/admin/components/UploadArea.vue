<template lang='pug'>
  .upload-area
    //- button(id="vue-img-preview-button") 
    input(
      type="file" 
      accept="image/*" 
      name="preview" 
      @change="chooseImage" 
      :value='null'
    )
    img(
      class="upload-area__img" 
      :src='fullImage' 
      alt='Загруженное изображение' 
      v-if="!!fullImage"
    )
    font-awesome-icon(
      icon='times'
      class='upload-area__icon-close'
      v-if='!!fullImage'
      @click='$emit("clear");unloadImage=null'
    )
    .upload-area__content(v-else)
      .upload-area__label Перетащите или загрузите для загрузки изображения
      a.upload-area__button {{ 'Загрузить'}}
</template>

<script>
import { getFullPath } from '../helpers'
export default {
  name: 'UploadArea',
  props: {
    image: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      unloadImage: null,      
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
              : !!this.image ? getFullPath(this.image) : ''
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
  @import url('../../styles/mixins.pcss');
  .upload-area {
    width: 494px;
    height: 276px;
    @include tablets {
      width: 100%;
    }
    @include phones {
      max-width: 280px;
      width: 100%;
      height: 157px;      
    }
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    &__img {
      height: 100%;
		  width: 100%;
      object-fit: contain;
    }
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
    &__icon-close {
      width: 32px !important;
      height: 32px !important;
      position: absolute;
      padding: 5px;
      border-radius: 50% !important;
      overflow: hidden;
      top: 24px;
      right: 24px;
      color:grey;
      z-index: 20;
      cursor: pointer;
      &:hover {
        background: rgba(0,0,0,0.2);
      }
    }
    &__content {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    &__label {
      color: #414c63;
      font-size: 16px;
      font-weight: 600;
      opacity: .5;
      padding: 0 25%;
      text-align: center;
      margin-bottom: 27px;
      @include phones {
        display: none;
      }
    }
    &__button {
      font-size: 16px;
      padding: 18px 40px;
      border-radius: 40px;
      background: #1c52de;
      color: white;
      font-weight: 700;    
      text-transform: uppercase;  
    }
  }
</style>
