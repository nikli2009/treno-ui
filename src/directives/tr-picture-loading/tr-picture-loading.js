export default {
  name: 'tr-picture-loading',
  bind: function (el, binding, vnode, old) {
    // get binding
    // 1. try loading it
    // 2. on error => use with the reload view
    // 3. on success => replace src attr
    // 4. when loading it => use loading view

    // 5. consider support lazyloading
    let s = JSON.stringify;
    el.src = binding.value.src
  },
  inserted: function (el, binding, vnode) {
  },
  update: function(el, binding, vnode, oldVnode) {
  }
}
