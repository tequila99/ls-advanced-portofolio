import axios from 'axios'

export const wrapIntoFormData = plainObject => {
  const formData = new FormData();

  Object.keys(plainObject).forEach(key => {
    formData.append(key, plainObject[key]);
  });

  return formData;
};

export const getFullPath = imgPath => `${axios.defaults.baseURL}/${imgPath}`