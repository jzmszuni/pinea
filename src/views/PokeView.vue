<template>
  <div>
    <p v-if="loading">Cargando ...</p>
    <div class="alert rounded-0 text-center fs-1" v-if="error"> {{ error }}</div>
    <div 
      class="card mb-3 rounded-0 text-center" 
      style="max-width: 540px;"
      v-if="data"
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="data.sprites.front_default" class="img-fluid rounded-start" alt="..." width="200" height="200">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title text-dark text-uppercase">
              {{ data.name }} 
              <span
                v-for="(item, index) in data.types" :key="index" 
                class="badge bg-info rounded-0 me-1"
              >
                {{ item.type.name }}
              </span>
            </h5>
            <ul class="list-group list-group-flush">
              <li 
                class="list-group-item d-flex justify-content-between align-items-start" 
                v-for="(item, index) in data.abilities" :key="index"
              >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Habilidad</div>
                {{ item.ability.name }}
              </div>
              <span class="badge bg-primary rounded-pill">{{ index+1 }}</span>
              </li>
            </ul>
            <p class="card-text text-center">
              <small class="text-muted btn-group">
                <button
                  class="btn btn-sm btn-success"
                  @click="useFavoritos.add(data)"
                  :disabled="findPoke(data.name)"
                >
                  Favorito
                </button>
                <button
                  class="btn btn-sm btn-danger"
                  @click="back"
                >
                  volver
                </button>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRoute, useRouter }  from 'vue-router';
  import { useGetData }           from '@/composables/getData'
  import { useFavoriteStore }     from "@/store/favorites.js"
  // constantes
  // -- use
  const route     = useRoute();
  const router    = useRouter();
  const {data, getData, loading, error} = useGetData()
  getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
  const useFavoritos = useFavoriteStore()
  const { add, findPoke } = useFavoritos


  // -- route || router
  const back = () => router.push('/pokemons')

</script>