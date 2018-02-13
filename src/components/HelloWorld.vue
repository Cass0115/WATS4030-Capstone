<template>
  <div class="forms">
    <h2>{{ message }}</h2>
    <label>Message: <input type="text" v-model="message"> </label>
    <p>Computed reversed message: {{reversedMessage }}</p>
    <div class="cause">
    <h2>Selected: {{ causeSelection}} </h2>
    <label for="causeChooser">Choose a cause:</label>
    <select v-model="causeSelection">
      <option disabled value="">Please choose a Cause</option>
      <option v-for="cause in causeList" v-bind:value="cause">{{ cause }} </option>
    </select>
  </div><!-- end cause div -->
  </div>
</template>

<script>
  export default {
    name: 'FormsPractice',
    data () {
      return{
       causeList: [
       'Advocacy and Human Rights',
       'Animals',
       'Children and Family',
       'Education',
       'Health',
       'LGBT',
       'Religion',
       'STEM',
       'Women'
       ],
       causeSelection: 'Animals'
    }
  }
}

// import axios from "axios";

// export default {
//   data() {
//     return {
//       posts: [],
//       errors: []
//     }
//   },

//   created() {
//       this.fetchData();
//     }, 

//     methods: {
//         fetchData() {
//             axios.get('http://data.orghunter.com/v1/charitysearch?user_key=733478d5a8680b6d4c57b26d07d4b3fc').then(response => {
//               this.posts = response.data,
//                 console.log('Hello');
//             });
//         }
//     }
// }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
