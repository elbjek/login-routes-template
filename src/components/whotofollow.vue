 <template>
  <div class="whotofollow d-flex justify-content-center flex-column  ">
      <h1>Who to follow</h1>
        <div class="singleuser row d-flex flex-row justify-content-start align-items-center" v-for="user in users" :key="user.id">
               <div class="img"> <img :src="user.img" alt=""></div>
                <p>{{user.name}}</p>
                     <button class="btn">follow</button>
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
        //   users:[
        //         {
        //             img:"http://cdn.ebaumsworld.com/mediaFiles/picture/166932/83208904.jpg",
        //             name:"MissB",
        //         },
        //           {
        //             img:"http://www.evilmilk.com/pictures/Random_Celebrity_Picdump_6.jpg",
        //             name:"Shaquille O'Seal",
        //         },
        //           {
        //             img:"https://www.topcelebritynetworths.com/cnwimages/a/adam-sandler.jpg",
        //             name:"Adam S",
        //         }

        //   ],
          users:[]
          
      }
  },
  mounted(){
      this.axios 
      .get('http://api.myjson.com/bins/yt0eu').then(response => (this.users = response.data.users))
  }
}
</script>

<style scoped lang="scss">
.whotofollow{
    background-color: white;
    padding:10px;
    border-radius: 10px;
    	border: 2px solid rgba($color: #000000, $alpha: 0.1);
h1{
    font-size: 16px;
    text-align: center;
    font-weight: 900;
   border-bottom: 2px solid rgba($color: #000000, $alpha: 0.1);
    padding:10px;
}
.singleuser{
    padding:20px 10px;

    .img{
        height:50px;
        width:50px;
        border-radius: 50%;
        overflow: hidden;
        img{
            width:70px;
        }
    }
    p{
        margin:0; 
        padding:10px;
        width:70%;
        font-weight: 900;
    }
button{
    background-color:#00B2E2;
    // width:30%;
    padding:0px 10px;
    border-radius: 10px;;
    font-size: 14px;
    color:white;
    font-weight: 900;
    margin:10px;
}
}
}
</style>
