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
    color:white;
}
h1{
    font-size: 60px;
    font-weight: 900;
} p{
    font-size: 20px;
}
.login{
padding:10px 20px ;
background-color: rgba($color: #FFF, $alpha: 0.8);
border-radius: 10px;
color:black;
font-weight: bolder;
}
}
</style>
