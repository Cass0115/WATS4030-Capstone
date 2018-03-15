<template>
  <div class="charities">
    <h1>Find a charity</h1>
    <p class="first">There are a plethera of non-profits that you can choose to give to, and the process of selecting which organization to support can be overwhelming. Use this handy tool to search for charities in your area.</p>
    <!-- Form Section -->
    <form v-on:submit.prevent="findCharities">
     
     <!-- *** error message ***   -->
    <p v-if="errors.length">
      <b>Please only put city into search field</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </p>

    <!-- Cause List -->
    <label for="causeSelection">Choose a cause:</label>
    <select v-model="cause">
      <option v-for="cause in causeList" v-bind:key="cause">{{ cause }} </option>
    </select>
  
     <p>City: <input v-model="citySearch" placeholder="City"><button id="submit" v-on:click="findCharities">Search</button></p>
    </form>

    <div style="font-size:3em; color:black"><i class="fab fa-facebook-f"></i></div>

  <div v-show="searchResults.lenght > 0" >
  <p v-for="(searchResult, index) in searchResults" :key="index" class="cause-result">{{cause}}</p>
  </div>

  <div class="list">
    <ul v-show="searchResults.length > 0" class="char-results" >
      
      <li v-for="(searchResult, index) in searchResults" :key="index" class="results-list">
        
        <p class="char-name">{{searchResult.charityName}}</p>
      <p class="char-city">{{searchResult.city}}, {{searchResult.state}} {{searchResult.zipCode}} </p>
      <p><a v-bind:href="searchResult.donationUrl">Donate here!</a></p>

      <router-link v-bind:to="{name: 'CharityDetail', params: {ein:  searchResult.ein}}">More Information</router-link>
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
      zipCode: [],
      state: [],
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
           city: this.citySearch
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
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: 600;
  font-size: 38px;
  padding-top: 3rem;
}
.first{
  color: #424242;
  width: 45%;
  margin: 0 auto;
  padding: 3rem 0;
  font-size: 18px;
  font-weight: 300;
  text-align: left;
}
div.list{
  width: 100%;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 10px;
  text-align: left;
  background-color: rgb(225, 225, 225);
  width: 35%;
  padding: 3%;
  border-radius: 5px;
  height: 225px;

}
p.char-name{
  text-transform: lowercase;
}
p.char-name::first-letter{
  text-transform: capitalize;
}
form{
  margin-right: 3%;
  padding-top: 5%;
}
button{
  background-color: #424242;
  height: 40px;
  border-radius: 2px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  width: 30%;
  display: block;
  margin: 0 auto;
  margin-top: 16px;
}
input{
  width: 19%;
  margin-left: 7.5%;
}
select{
  width: 19%;
}
</style>
