import Vue from 'vue'

Vue.directive('meu-transform', {

  bind(el, binding, vnode) {

    let current = 0

    el.addEventListener('dblclick', () => {

      let incremento = binding.value || 90

      binding.modifiers.reverse
        ? current -= incremento
        : current+=incremento

      el.style.transform = `rotate(${current}deg)`
      binding.modifiers.animate && (el.style.transition = 'transform 0.5s')
    })
  }
})
