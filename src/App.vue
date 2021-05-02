<template>
  <div class="top-navigator">
    <img class="logo" alt="Tu Evaluas logo" src="./assets/tuevaluas_logo.png">
    <button>ACCEDE A TU CUENTA</button>
  </div>
  <div id="nav">
    <router-link class="nav-style" to="/">HOME</router-link>
    <router-link class="nav-style"  to="/QuienesSomos">QUIENES SOMOS</router-link>
    <router-link class="nav-style"  to="/">PROFESORES</router-link>
    <router-link class="nav-style"  to="/">INSTITUCIONES</router-link>
    <router-link class="nav-style"  to="/">RANKINGS</router-link>
    <router-link class="nav-style"  to="/">PREGUNTAS FRECUENTES</router-link>
  </div>
  <router-view/>
</template>

<style>
div>.top-navigator{
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  }

  div>.top-navigator>button{
    background-color: #0c89d8;
    border: none;
    /* outline: none; */
    border-radius: 20px;
    height: 49%;
    color: white;
    padding: 10px;
    font-size: 10px;
    margin: 34px 61px;
  }
  
  div>.top-navigator>button:hover{
    cursor:pointer;
    background-color: #0a81ca;
  }

div>.top-navigator>img.logo{
  height: 5vmax;
  margin-top:10px;
  margin-left:30px;
  /* animation-name: shrink; */
  /* animation-duration: 5s; */
  /* animation-delay: 1s; */
  /* animation-timing-function: linear; */
  cursor: pointer;
}

/* @keyframes shrink{
  from{width:20%;}
  to{width: 22%}
} */



#app {
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 15px;
  display: flex;
  flex-flow: row;
  /* justify-content: center; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 11px;
}

#nav a {
  /* font-weight: bold; */
  color: #6e6e6e;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #6e6e6e;
}

#nav > .nav-style{
  margin-left:10px;
  padding: 1px 30px 1px 20px;
}

#nav> .nav-style:hover{
  background-color: #0c89d8;
  padding: 1px 30px 1px 20px;
  color: white;
}
</style>
