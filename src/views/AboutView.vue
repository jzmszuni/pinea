<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>Prueba de contador global ({{ reactiveValue }})</h3>
    <p>contador: {{ count }}</p>
    <p>doble: {{ double }}</p>
    <button @click="decrement">decrement</button>
    <button @click="reset">reset</button>
    <button @click="increment">increment</button>
  </div>
</template>

<script setup>
  import { useCounterStore } from "@/store/counter.js"
  import { storeToRefs } from 'pinia'

  // sin destructurar se puede utilizar nomenclatura del punto, es decir: useCounter.count, etc...
  const useCounter = useCounterStore()

  // destructuración:
  const { decrement, increment, reset, } = useCounter
  const { count, reactiveValue, double, } = storeToRefs(useCounter)
</script>

<style>

</style>
