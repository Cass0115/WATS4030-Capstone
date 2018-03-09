<template>
  <div class="test">
    <p>Charity Detail</p>
    <div v-show="basic.Result > 0" class="detail-results" >
    <p class="charity-classification">{{basicResult.classification}} </p>
    <p>{{basicResult}} </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CharityDetail',
  data () {
    return {
      errors: [],
      basicResult: null
    }
  },
  created(){
    axios.get('http://crossorigin.me/http://data.orghunter.com/v1/charitybasic', {
      params: {
        user_key:'733478d5a8680b6d4c57b26d07d4b3fc',
        ein: this.$route.params.ein
      }
    })
    .then(respone => {
      this.basicResult = response.data.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
