import { defineStore } from 'pinia'
import { ref, computed }  from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)
  const reactiveValue = ref("valor reactivo para destructuración")
  // actions
  const decrement = () => count.value --
  const increment = () => count.value ++
  const reset = () => {
    count.value = 0
    reactiveValue.value = "valor reactivo para destructuración reseted"
  }
  // getters
  const  double = computed( () => count.value*2)
  return {
    count,
    reactiveValue,
    double,
    decrement,
    increment,
    reset,
  }
});

// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     count: 0
//   }),
//   actions: {
//     increment() {
//       this.count++
//     }
//   },
//   getters: {
//     double: (state) => state.count * 2
//   }
// });