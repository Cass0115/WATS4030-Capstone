<template>
 <div class="charity-search">
   <form v-on:submit.prevent="charitySearch">
     <p>Search for Charities <input type="text" v-model="charity"><button type="submit">Search</button></p>
   </form>
   <ul v-if="results && results.length > 0" class="results" >
     <li v-for="item of results">
       <p> {{item.results}} </p>
     </li>
   </ul>
   <div v-else-if="results && results.length== 0" class="no-results">
     <h2>No charities found</h2>
     <p>Please adjust your search to find more charities</p>
   </div>
   <ul v-if="errors && errors.length > 0" class="errors" >
     <li v-for="error of errors" >
      {{error.message}}
      </li>
   </ul>
 </div> <!-- end template div -->
</template>

<script>
import axios from "axios";

export default {
  name: "CharitySearch",
  data() {
    return {
      results: null,
      errors: [],
      charity: '',
    };
  },
 
    methods: {
      charitySearch: function (){
        axios.get('http://crossorigin.me/http://data.orghunter.com/v1/charitysearch', {
         params: {
           user_key: '733478d5a8680b6d4c57b26d07d4b3fc',
           searchTerm: '',
           }
          
        })
        .then(respone => {
          this.response = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })       
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
