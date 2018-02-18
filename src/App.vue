<template>
  <div id="app">
        <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <h1><a href="/">DM</a></h1>
    <img src="#" width="30" height="30" alt="">
  </a>
<ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" href="#">Find a Cause</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Find a Charity</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#/WhyDonate">Why Donate</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About</a>
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
  color: #2c3e50;
}
</style>
