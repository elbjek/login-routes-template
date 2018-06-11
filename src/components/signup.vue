 <template>

        <div class="container-fluid d-flex align-items-center "  >
        <div class="row form col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
                <form action="" class="  d-flex  align-items-center flex-column" @submit.prevent="validation">
                <h1>Login</h1>
                <div class="form-group d-flex align-items-center flex-column ">
                    <label for="email">
                <input class=" form-control" type="text"  name="email" v-model="email" placeholder="Username/Email">
                </label>
                <p>{{emailError}}</p>
                </div>
                <div class="form-group  d-flex align-items-center flex-column">
                <label for="password"> 
                <input class="form-control" :type="passtype" name="password" @click="showIcon()" v-model="password" placeholder="Password"> 
                <a href="#" v-if="show" @click="togglePassword()"> </a>
                </label>
                <p>{{passError}} </p>
                </div>
                <button class="btn btn-primary" type="submit">Login</button>
            </form>

        <div class="noAcc">
            <p>Dont have an account yet?</p>
            <a href="#">SIGN UP</a>
        </div>
        </div>


        </div>
</template>

<script>


export default {
  name: 'userpage',
  components: {
 
  }
}
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';
.container-fluid{
  max-width:1440px;
  margin:0 auto;
// float: left;
}

</style>
