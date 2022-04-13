<template>
    <div class="vue-tempalte">
        <h1>All Reviews</h1>
      
    <div v-for="review in reviews" 
        :key="review.Review_id">

      <v-card class="card-size"
        
        elevation="2"
      >
      <v-card-title>{{review.title}}</v-card-title>
      <v-card-subtitle>{{review.username}}</v-card-subtitle>
      <v-card-text>{{review.description}}</v-card-text>
      <v-card-subtitle>{{review.date}}</v-card-subtitle>
      </v-card>
      <br>
    </div>
    </div>
</template>

<script>
  export default {
    name: 'mainpage',
    data () {
      return {
        text: '',
        reviews: []
      }
    },
    async created () {
      let res = await this.$axios.get("/api/reviews")
      this.reviews = res.data
     
    },
    methods: {
      logout () {
        this.$store.dispatch('accounts/logout')
        this.$router.push('/')
      }
    },
    computed: {
      user () {
        return this.$store.state.accounts.user
      }
    }
  }
</script>

<style>

/* .card-size {
  max-width: 500px
} */

</style>
