<template>
  <div class="search_style">
      <div class="search-bar">
        <div class="search-button">
            <div class="buscar-profesor" @click.prevent="toggleSearchPorfesorButton">
                <div class="buscar_button_style" :class="{ someother: buscarProfesorButton}">
                   <span class="material-icons">person</span> 
                   <p>BUCAR UN PROFESOR</p>
                </div>
            </div>
            <div class="buscar-institucion" @click.prevent="toggleSearchButton">
                <div class="buscar_button_style" :class="{ someother: buscarInstitucionButton}">
                    <span class="material-icons">school</span>
                    <p>BUSCAR UNA INSTITUCION</p>
                </div>
            </div>
        </div>
        <div class="search_tools">
            <div class="search_bar_style">
                <input type="text" name="Search">
            </div>
            <button><span class="material-icons">search</span></button>
        </div>
      </div>

      <div class="alphabet-search">
        <router-link v-for="al in alphabet" :key="al" to="/">
          {{al}}
        </router-link>
      </div>
      
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        
        const alphabet = ref(['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'])


        const toggleSearchButton=()=>{
            buscarInstitucionButton.value = !buscarInstitucionButton.value;
            if(buscarProfesorButton) buscarProfesorButton.value = false
            console.log(buscarInstitucionButton.value)
        }
        const toggleSearchPorfesorButton=()=>{
            buscarProfesorButton.value = !buscarProfesorButton.value;
            if(buscarInstitucionButton) buscarInstitucionButton.value = false
            console.log(buscarProfesorButton.value)
        }
        
        const buscarInstitucionButton = ref(false);
        const buscarProfesorButton = ref(false);

        return {alphabet, buscarInstitucionButton,buscarProfesorButton, toggleSearchButton, toggleSearchPorfesorButton}
    }

}
</script>

<style scoped>
    div>.search_style> *:not(div>.alphabet-search){
        display:flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    div>.search_style{
        background-color: #a8e3e5;
        padding: 2%;
        border-radius: 5px;
        box-shadow: 0px 1px 4px 0px;
        margin: auto;
    }    

    div>.alphabet-search>*{
        color: #fff;
        text-decoration: none;
        flex-direction: row ;
        justify-content:space-evenly;
        font-size: 14px;
        padding-left: 5px
    }

    div>.alphabet-search>*:hover{
        color: rgb(253, 142, 90);
        font-weight: bold;
    }

    /* alphabet-search a.router-link-exact-active{
        color: #fff;
        text-decoration: none;
        padding: 1%;
    } */

    div>.search-bar>.search-button{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    div>.search-bar>.search-button>.buscar-institucion, div>.search-bar>.search-button>.buscar-profesor{
        display: block;
        border: 1px solid #9d9c9cfa;
        border-radius: 3px;
        background-color: #fff;
        margin: 2px
    }

    .buscar_button_style{
        margin: 2px;
        border-radius: 3px;
        background-color: #fff;
        color: #aab0b4;
        padding: 10px 80px;
        font-size: 12px;
        cursor: pointer;

    }

    /*  */
     .buscar_button_style.someother, .buscar_button_style:hover{
          border: 1px solid #9d9c9cfa;
        background-color: #0a81ca;
        color: #fff;
    }

    div>.search-bar>.search_tools{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 10px;
        
    }

    div>.search-bar>.search_tools>.search_bar_style{
        border: 1px solid #9d9c9cfa;
        padding: 10px;
        background: white;
        outline:orange
    }

    div>.search-bar>.search_tools>.search_bar_style>input[type="text"]{
        width: 40vmax;
        padding: 5px 0px;
        outline: none;
        border: none
    }

    button{
        background: #dcf0fb;
        border: 0;
        border-radius: 0px 30px 30px 0;
        color:#0a81ca;
        cursor: pointer;
    }
</style>
