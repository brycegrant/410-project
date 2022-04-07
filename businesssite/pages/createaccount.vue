<template>
    <div>
        <h1>Create an Account</h1>
        <v-form @submit.prevent="submit">
            <v-text-field
            v-model="firstname"
            label="Firstname"
            required
            ></v-text-field>

            <v-text-field
            v-model="lastname"
            label="Lastname"
            required
            ></v-text-field>
        
            <v-text-field
            v-model="username"
            label="Username"
            required
            ></v-text-field>

            <v-text-field
            v-model="password"
            label="Password"
            type="password"
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
</template>

<script>
  export default {
    name: 'createaccountpage',
    data () {
      return {
        firstname: '',
        lastname: '',
        username: '',
        password: ''
      }
    },
    
    methods: {
      logout () {
        this.$store.dispatch('accounts/logout')
        this.$router.push('/')
      },
      clear () {
        this.firstname = ''
        this.lastname = ''
        this.username = ''
        this.password = ''
      },
      async submit () {
          let res = await this.$axios.post("/api/accounts", {firstname: this.firstname, lastname: this.lastname, username: this.username, password: this.password})
          this.clear()
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