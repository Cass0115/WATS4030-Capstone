<template>
  <div class="charities">
    <h1>Find a charity</h1>
    
      <div class="cause">
    <label for="causeSelection">Choose a cause:</label>
    <select v-model="cause">
      <option v-for="cause in causeList" v-bind:key="cause">{{ cause }} </option>
    </select>
  </div><!-- end cause div -->
   
<p>Search for charities <input v-model="citySearch" placeholder="City"> <button v-on:click="findCharities">Search</button></p>

 <div class="list">
   <ul v-show="searchResults.length > 0" class="char-results" >
     <li v-for="(searchResult, index) in searchResults" :key="index" class="results-list"><p class="char-name">{{searchResult.charityName}} </p>
     <p class="char-city">{{searchResult.city}}, {{searchResult.state}} {{searchResult.zipCode}}</p>
     <p><a href="searchResult.donationUrl">Donate here!</a></p></li>
   </ul>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      causeList: [
        "Choose a cause",
        "Advocacy and Human Rights",
        "Animals",
        "Children and Family",
        "Education",
        "Health",
        "LGBT",
        "Religion",
        "STEM",
        "Women"
      ],
      causeSelection: "Choose a cause",
      citySearch: null,
      errors: [],
      cause: [],
      searchResults: []
    };
  },

    methods: {
      findCharities: function (){
        axios.get('http://crossorigin.me/http://data.orghunter.com/v1/charitysearch', {
         params: {
           user_key: '733478d5a8680b6d4c57b26d07d4b3fc',
           searchTerm: this.cause,
           city: this.citySearch,
           }
          
        })
        .then(response => {
          this.searchResults = response.data.data
        })
        .catch(e => {
          this.errors.push(e)
        })
      }
    }
    // methods: {
    //   findDescription: function (){
    //     axios.get('http://crossorigin.me/data.orghunter.com/v1/charitybasic', {
    //       params:{
    //         user_key: '733478d5a8680b6d4c57b26d07d4b3fc',
    //         ein : '',
    //         organzation: ''
    //       }
    //     })
    //   }
    // }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
div.list{
  width: 100%;
  padding-left: 30%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 10px;
  text-align: left;
  background-color: lightgray;
  width: 70%;
  padding: 5%;

}
li:nth-child(even){
  background-color: rgb(244, 244, 244);
}
p.char-name{
  text-transform: lowercase;
}
p.char-name::first-letter{
  text-transform: capitalize;
}
</style>
