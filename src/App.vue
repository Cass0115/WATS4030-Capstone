<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <h2><a href="http://cassiedurr.com/WATS4030-Capstone/#/">Donate More</a></h2>
        <img src="#" width="30" height="30" alt="">
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #669bb5;
}

nav{
  background-color: #f1f1f1;
}
nav a{
  color:#669bb5;
  font-weight: 500;
}
/* nav{
  background-image: url(../charity-09.jpg);
  opacity: 50%;
  height: 100%;
  position: relative;
  top: 50%;
}
nav img{
  height: 150px;
} */
</style>
