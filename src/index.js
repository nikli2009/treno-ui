import TrDrawer from './components/drawer/index.js';

// directives
// import TrPictureLoading from './directives/tr-picture-loading/index.js';

const components = [
    TrDrawer
];

const directives = [
  // TrPictureLoading
];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
  /*
  directives.map(directive => {
    Vue.directive(directive.name, directive)
  })
  */
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  TrDrawer,
  // TrPictureLoading
}
