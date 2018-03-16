<template>
  <div id="app">
    <nav class="navbar">
      <a class="navbar-brand" href="#">
        <h2><a href="http://cassiedurr.com/WATS4030-Capstone/#/">Donate More</a></h2>
      </a>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link" href="#/WhyDonate">Why Donate</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/About">About</a>
      </li>
    </ul>
  </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}


</script>

<style>

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #669bb5;
}
h1, h2{
  font-family: 'IBM Plex Serif', serif;
}

nav{
  background-color: #f1f1f1;
  height: 150px;
}
nav a{
  color:#669bb5;
  font-weight: 500;
  padding-left: 5%;
  
}
.nav-link{
  padding: 0 1rem;
}

</style>
