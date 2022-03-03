function handle(el, value) {
  if (value) {
    el.style.display = 'none'
  } else {
    el.style.display = 'inline'
  }
}

export default {
  mounted(el, binding, vnode) {
    console.log('directive mounted', el, binding, vnode)
    const { value } = binding
    handle(el, value)
  },
  updated(el, binding, vnode) {
    console.log('directive updated', el, binding, vnode)
    const { value } = binding
    handle(el, value)
  }
}