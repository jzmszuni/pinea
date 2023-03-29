<template>
  <div>
    <h1 class="text-uppercase">Pokemones</h1>
    <p v-if="loading">Cargando ...</p>
    <div class="alert rounded-0 text-center" v-if="error"> {{ error }}</div>
    <div 
      v-if="data"
      class="d-flex flex-column justify-content-around align-items-center"
    >
      <div class="btn-group w-50" role="group" aria-label="Basic example">
        <button 
          type="button" 
          class="btn btn-outline-primary rounded-0" 
          @click="getData(data.previous)"
          :disabled="!data.previous"
        >
          preview
        </button>
        <button 
          type="button" 
          class="btn btn-outline-primary rounded-0" 
          @click="getData(data.next)"
          :disabled="!data.next"
        >
          next
        </button>
      </div>
      <ul 
        class="list-group rounded-0 w-50"
      >
        <li
          class="list-group-item"
          v-for="(pokemon, index) in data.results" 
          :key="index"
        >
          <router-link
          class="btn btn-sm btn-outline-secondary w-100 rounded-0 text-uppercase" 
          :to="`/pokemons/${pokemon.name}`"
          >
            {{ pokemon.name }}
          </router-link>
        </li>
      </ul>
      <div class="btn-group w-50" role="group" aria-label="Basic example">
        <button 
          type="button" 
          class="btn btn-outline-primary rounded-0" 
          @click="getData(data.previous)"
          :disabled="!data.previous"
        >
          preview
        </button>
        <button 
          type="button" 
          class="btn btn-outline-primary rounded-0" 
          @click="getData(data.next)"
          :disabled="!data.next"
        >
          next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// import
import { RouterLink } from 'vue-router'
import { useGetData } from '@/composables/getData'


const {data, getData, loading, error} = useGetData()
getData("https://pokeapi.co/api/v2/pokemon")

</script>