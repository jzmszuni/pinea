<template>
  <div class="container-fluid text-center">
    <div class="h1">Favoritos</div>
    <p v-if="favorites.length === 0">sin favoritos</p>
    <ul class="list-group list-group-flush">
      <li 
        class="list-group-item"
        v-for="(favorite) in favorites" :key="favorite.id"
      >
      <div class="d-flex justify-content-between text-uppercase">
        <div>{{ favorite.name }}</div>
        <div>
          <router-link :to="`/pokemons/${favorite.name}`" class="btn btn-sm btn-outline-success rounded-0">Detalles</router-link>
          <button class="btn btn-sm btn-outline-danger rounded-0" @click="remove(favorite.id)">Quitar</button>
        </div>
      </div>
      </li>
    </ul>
  </div>

</template>

<script setup>
  import { useFavoriteStore } from "@/store/favorites.js"
  import { storeToRefs }      from 'pinia'
  import { RouterLink }       from "vue-router";

  const useFavoritos = useFavoriteStore()
  const { favorites } = storeToRefs(useFavoritos)
  const { remove } = useFavoritos

</script>

<style scoped>

</style>