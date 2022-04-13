<template>
    <div>

        <div v-if="user == null">
          <h3>Please login to leave a review</h3>
        </div>
        
        <div v-else>
          <h1>Create a Review</h1>
            <v-form @submit.prevent="submit">
            <v-text-field
            v-model="title"
            label="Title"
            required
            ></v-text-field>

            <v-text-field
            v-model="description"
            label="Description"
            required
            ></v-text-field>
        
            <v-btn @click="clear">
                clear
            </v-btn>
            <v-btn class="mr-4" type="submit">
                submit
            </v-btn>
        </v-form>
        </div>

        
    </div>
</template>

<script>
  export default {
    name: 'createreviewpage',
    data () {
      return {
        title: '',
        description: '',
        
      }
    },
    
    methods: {
      logout () {
        this.$store.dispatch('accounts/logout')
        this.$router.push('/')
      },
      clear () {
          this.title = ''
          this.description = ''
      },
      async submit () {
          let res = await this.$axios.post("/api/reviews", {title: this.title, description: this.description, date: new Date().toISOString()})
          this.clear()
      }
    },

    computed: {
      user () {
        return this.$store.state.accounts.user
      }
    }
  }
</script>