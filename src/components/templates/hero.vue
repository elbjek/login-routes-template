 <template>
  <div class="hero">

        <h1> Welcome to this template</h1>
        <p>Have fun!</p>
         <router-link class='login' to="/login">Login</router-link> 

  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  }
}
</script>

<style  scoped lang="scss">
@import '../../styles/variables.scss';
.hero{
    background-image: url('../../assets/hero.jpg');
    background-position: center;
    background-size: cover;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1, p{
        color:$white;
    }
    h1{
        font-size: 60px;
        font-weight: 900;
    } 
    p{
        font-size: 20px;
    }
    .login{
        padding:10px 48px ;
        background-color: rgba($color: $white, $alpha: 0.8);
             border:1px solid rgba($color: $white, $alpha: 0.9);
        border-radius: 10px;
        color:$dark-font;
        font-weight: bolder;
        &:hover{
            background-color:  rgba($color: $white, $alpha: 0.9);
            border:1px solid rgba($color: $white, $alpha: 1);
            text-decoration: none;
        }
    }
}
</style>
