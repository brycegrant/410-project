<template>
    <div class="vue-tempalte">
        <h1>My Reviews</h1>
              <v-btn @click="logout()">Log Out</v-btn>
      
    <div v-for="review in reviews" 
        :key="review.Review_id">
      <v-card class="card-size" elevation="2">
      <v-card-title>{{review.title}}</v-card-title>
      <v-card-subtitle>{{review.username}}</v-card-subtitle>
      <v-card-text>{{review.description}}</v-card-text>
      <!-- <v-card-subtitle>{{review.date}}</v-card-subtitle> -->

        <v-container>
            <v-row>
                <v-card-subtitle>{{review.date}}</v-card-subtitle>
                <v-col align-self="end">
                    
                    <v-btn @click="clear(review.Review_id)" class="right padding">
                        delete
                    </v-btn>
                    
                    <v-btn class="right">
                        edit
                    </v-btn>

                </v-col>
            </v-row>

            
        </v-container>
      

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
        //console.log(this.$store.state.accounts)
      let res = await this.$axios.get(`/api/reviews/accounts/${this.$store.state.accounts.user}`)
      this.reviews = res.data
     
    },
    
    methods: {
      logout () {
        this.$store.dispatch('accounts/logout')
        this.$router.push('/')
      },
      async clear(Review_id) {
        let res = await this.$axios.delete(`/api/reviews/${Review_id}`)
        res = await this.$axios.get(`/api/reviews/accounts/${this.$store.state.accounts.user}`)
        this.reviews = res.data
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
.right {
    float: right
}
.padding {
    margin-left: 10px;
}

</style>
