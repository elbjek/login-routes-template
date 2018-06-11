 <template>
  <div >
<b-navbar toggleable="md" >

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <router-link class="logo" to="/"> LOGO</router-link>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
    <b-nav-item href="#"> Home</b-nav-item>
    <b-nav-item href="#">Gallery </b-nav-item>
    <b-nav-item href="#"> <router-link to="/login">Login</router-link> </b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>


  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  }
}
</script>

<style  lang="scss">
@import '../../styles/variables.scss';
.navbar{
    max-width:1440px;
    margin:0 auto;
    z-index: 1;
}
.nav-item a{
    color: rgba($color: $dark-font, $alpha: 1.0) !important;
    font-weight: bold;
    margin-left:20px;
    a{
      margin:0;
    }
    &:hover{
      text-decoration: none;
    }
}
.logo{
    font-weight: 900 !important;
    color:$dark-font;;
    font-size: 20px;
    transition: 0.2s ease-in-out;
    // margin-left:10px;
    &:hover{
      text-decoration: none;
      transform: scale(1.05,1.05);
      color:$dark-font;

    }
}
</style>
