import TrPictureLoading from './tr-picture-loading'

TrPictureLoading.install = Vue => {
  Vue.directive(TrPictureLoading.name, TrPictureLoading)
};

export default TrPictureLoading
