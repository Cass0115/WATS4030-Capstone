<template>
  <div class="charities">
    <h1>Find a charity</h1>
    
    <!-- Form Section -->
    <form v-on:submit.prevent="findCharities">
    <label for="causeSelection">Choose a cause:</label>
    <select v-model="cause">
      <option v-for="cause in causeList" v-bind:key="cause">{{ cause }} </option>
    </select>
     <p>City: <input v-model="citySearch" placeholder="City"><button v-on:click="findCharities">Search</button></p>
    </form>


<!-- <spinner v-if="showSpinner"></spinner> -->

  <div class="list">
    <ul v-show="searchResults.length > 0" class="char-results" >
      <li v-for="(searchResult, index) in searchResults" :key="index" class="results-list"><p class="char-name">{{searchResult.charityName}}, {{searchResult.ein}} </p>
      <p class="char-city">{{searchResult.city}}, {{searchResult.state}} {{searchResult.zipCode}}</p>
      <p><a v-bind:href="searchResult.donationUrl">Donate here!</a></p>
      <router-link v-bind:to="{name: 'CharityDetail', params: { ein:  searchResult.ein}}">More Information {{searchResult.ein}}</router-link>
      <router-view></router-view>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>  
import axios from "axios";

export default {
  name: "CharityMaster",
  data() {
    return {
      causeList: [
        "Choose a cause",
        "Animals",
        "Arts and Culture",
        "Children",
        "Human Rights",
        "Education",
        "Environment",
        "Family",
        "Health",
        "Hunger",
        "International Aid",
        "LGBT",
        "Military",
        "Religion",
        "Research",
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
  // name: "CharitySearch",
  //     components: {
  //   spinner: CubeSpinner
  // },

    methods: {
      findCharities: function (){
        // this.showSpinner = true;
        axios.get('http://crossorigin.me/http://data.orghunter.com/v1/charitysearch', {
         params: {
           user_key: '733478d5a8680b6d4c57b26d07d4b3fc',
           searchTerm: this.cause,
           city: this.citySearch,
           }
          
        })
        .then(response => {
          // this.showSpinner = false;
          this.searchResults = response.data.data
        })
        .catch(e => {
          // console.log("error");
          // this.showSpinner = false;
          this.errors.push(e)
        })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
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
button{
  background-color: #424242;
  height: 30px;
  width: 70px;
  border-radius: 10px;
  color: rgb(190, 190, 190);
  font-weight: 500;
}
</style>
