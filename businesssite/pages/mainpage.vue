<template>
    <div class="vue-tempalte">
        <h1>Welcome to the main page</h1>
              <v-btn @click="logout()">Log Out</v-btn>
    </div>
</template>

<script>
  export default {
    name: 'mainpage',
    data () {
      return {
        text: '',
        
      }
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

