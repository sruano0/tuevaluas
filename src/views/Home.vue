<template>
  <div class="home">
    <SearchWidget />
    
  </div>
</template>

<script>
import { ref } from 'vue'
import SearchWidget from '../components/SearchWidget.vue'

export default {
  name: 'Home',
  components: { SearchWidget },
  setup(){
    

  }
}
</script>

<style>
  div>.home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:40px auto;
    width: 80%;

  }
</style>