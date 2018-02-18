<template>
  <div class="forms">
    <h2>Hello world</h2>
      <!-- TODO Searchbar, location input, cause dropdown, submit button -->
    
      <div class="cause">
    <h2>Selected: {{ causeSelection }} </h2>
    <label for="causeChooser">Choose a cause:</label>
    <select v-model="causeSelection">
      <option disabled value="">Please choose a Cause</option>
      <option v-for="cause in causeList" v-bind:value="cause">{{ cause }} </option>
    </select>
  </div><!-- end cause div -->
   
<!--     <p>Search for charities <input v-model="charity"> <button v-on:click="findCharity">Search</button></p> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      causeList: [
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
      causeSelection: "Animals",
      errors: []
    };
  },

  created() {
      let charityURL ='http://crossorigin.me/http://data.orghunter.com/v1/charitysearch';
       
      axios.get(charityURL, {
         params: {
        user_key: '733478d5a8680b6d4c57b26d07d4b3fc',
        searchTerm: 'animal',
        city: 'seattle',
        state: '',
        zipCode: '',
        eligible: 1,
        rows: 15
      }
      })
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    });
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
