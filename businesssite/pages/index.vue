<template>
    <!-- <div class="vue-tempalte"> -->
    <div class="vue-template">
        <form>
            <h3>Sign In</h3>
            <br>
            <div class="form-group">
                <label>Username</label>
                <input v-model="username" class="form-control form-control-lg" />
            </div>
            <br>
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>
            <br>
            <div>
              <v-btn @click="login()">Log In</v-btn>
              <div v-if="user !== null">
                <v-btn @click="logout()">Log Out</v-btn>
              </div>
            </div>
            <div>
              
            </div>
        </form><br>
        
          <ClickAdder @clicked="onClickChild" v-bind:count="count"/>
        
    </div>
</template>



<script>
import ClickAdder from './ClickAdder.vue'
  export default {
    name: 'IndexPage',
    components: {
      ClickAdder
    },
    data () {
      return {
        text: '',
        username: '',
        password: '',
        count: 0
      }
    },
    methods: {
      async login () {
        await this.$store.dispatch('accounts/login', {
          username: this.username,
          password: this.password
        })
        this.username = ''
        this.password = ''
        if (this.user != null) {
          this.$router.push('/mainpage')
        }
      },
      logout () {
        this.$store.dispatch('accounts/logout')
      },
      onClickChild (value) {
        console.log(value)
        this.count=value
      }

    },

    computed: {
      user () {
        return this.$store.state.accounts.user
      }
    }
  }
</script>





