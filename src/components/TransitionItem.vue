<template>
  <div>
    <!-- Transition 过渡 -->
    <section>
      <transition name="rotate">
        <h1 v-if="rotateShow">Rotate Animation</h1>
      </transition>
      <button @click="rotateShow = !rotateShow">Rotate Click</button>
    </section>
    <!-- Javascript 过渡 -->
    <section>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false">
        <h1 v-if="jsShow">JS Animation</h1>
      </transition>
      <button @click="jsShow = !jsShow">JS Click</button>
    </section>
    <!-- Javascript 过渡 -->
    <section>
      <input type="number" v-model="number" />
      <button @click="handleNumberChange">Number Change</button>
      <span>{{ tweenNumber.toFixed(0) }}</span>
    </section>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  data() {
    return {
      rotateShow: false,
      jsShow: false,
      number: 0,
      tweenNumber: 0
    };
  },
  methods: {
    beforeEnter(el) {
      gsap.set(el, {
        scaleX: 0.8,
        scaleY: 1.2
      })
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        scaleX: 1.5,
        scaleY: 0.7,
        opacity: 1,
        x: 150,
        ease: 'elastic.inOut(2.5, 1)',
        onComplete: done
      })
    },
    leave(el, done) {
      gsap.to(el, {
        duration: 0.7,
        scaleX: 1,
        scaleY: 1,
        x: 300,
        ease: 'elastic.inOut(2.5, 1)'
      })
      gsap.to(el, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done
      })
    },
    handleNumberChange() {
      gsap.to(this, {
        duration: 1,
        tweenNumber: this.number
      })
    }
  },
};
</script>

<style lang="scss" scoped>
button {
  display: inline-block;
}

.rotate-enter-active {
  animation: rotate-animation 2s ease-out;
}
.rotate-leave-active {
  animation: rotate-animation 2s ease-in reverse;
}

@keyframes rotate-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
