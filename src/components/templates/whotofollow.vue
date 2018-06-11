 <template>
  <div class="whotofollow d-flex justify-content-center flex-column  ">
      <h1>Find people you know</h1>
        <div class="singleuser row d-flex flex-row justify-content-start align-items-center" v-for="user in users" :key="user.id">
               <div class="img"> <img :src="user.img" alt=""></div>
                <p>{{user.name}}</p>
                     <button   class="btn">Follow</button>
        </div>
  </div>
</template>

<script>


export default {
  name: 'whotofollow',
  components: {

  },
  data(){
    return{
          users:[],
          follow:""
          
      }
  },
  mounted(){
      this.axios 
      .get('http://api.myjson.com/bins/yt0eu').then(response => (this.users = response.data.users))
  },
  methods:{
  
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/variables.scss';
.whotofollow {
	background-color:$white;
	padding: 10px;
	border-radius: 10px;
	border: $border-light;
	height:400px;
	h1 {
		font-size: 16px;
		text-align: center;
		font-weight: 900;
		border-bottom:$border-light;
		padding: 10px;
	}
	.singleuser {
		padding: 20px 10px;
		.img {
			height: 50px;
			width: 50px;
			border-radius: 50%;
			overflow: hidden;
			img {
				width: 70px;
			}
		}
		p {
			margin: 0 auto;
			width: 30%;
			font-weight: 900;
		}
		button {
			background-color: $blue-button;
			padding: 0px 10px;
			border-radius: 10px;
			font-size: 14px;
			color: $white;
			font-weight: 700;
			margin: 0 auto;
		}
	}
}
</style>
