 <template>
  <div class="hero">

<h1> Welcome to this template</h1>
<p>Have fun!</p>

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
background-image: url('../assets/hero.jpg');
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
}
</style>
