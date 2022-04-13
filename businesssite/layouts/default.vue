<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      
      
      
      <v-toolbar-title v-text="title" id="toolbar-title" class="right" />
      <v-btn to="/mainpage">All Reviews</v-btn>
      <v-btn to="/myreviews">My Reviews</v-btn>
      <v-btn to="/createreview">Create Review</v-btn>
      <v-spacer />

      <div>
        <div v-if="user == null">
          <v-btn to="/">Login</v-btn>
        </div>

        
        <v-btn v-if="user != null" @click="logout()">Logout</v-btn>
      </div>

      


      
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Review Site'
    }
  },
  methods: {
    logout () {
        this.$store.dispatch('accounts/logout')
        this.$router.push('/')
      },
  },
  computed: {
      user () {
        return this.$store.state.accounts.user
      }
    }
}
</script>


<style scoped>
  #toolbar-title {
    margin-right: 20px;
  }

  .right {
    float: right
  }
  .padding {
    margin-left: 10px;
  }
</style>