 <template>
  <div id="app">
<!-- <index></index> -->
<navigation></navigation>
<router-view></router-view>

  </div>
</template>

<script>

import navigation from './components/navigation.vue'

export default {
  name: 'app',
  components: {
    navigation,

  },
  data(){
    return{
      authentication:false
    }
  }
}
</script>

<style lang="scss">
body{
background-color: #f1f1f1 !important;
margin:0;
padding:0;
// height:100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin:0 auto;
// height:200vh;
}
</style>
