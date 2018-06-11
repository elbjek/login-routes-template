<template>
   <div>
      <div class="col d-flex newstatus flex-column ">
         <ul class="d-flex justify-content-around">
            <li ><a href="#">Share an update</a></li>
            <li @click="inProgress()"><a href="#">Share a photo</a></li>
            <li @click="inProgress()"><a href="#">Write an article</a></li>
         </ul>
         <textarea v-model="statusUpdate"  name="" placeholder="Maximum 150 characters" id="textarea" cols="30" rows="2"></textarea>
         <button class="btn btn-primary" v-on:click="postStatus()" > Post</button>
      </div>
      <!-- TEMPLATE STATUS -->
      <div class="statuscard col d-flex  flex-column "  >
         <a href="#"  style="position:absolute; right:20px; top:10px">x</a>
         <div class="user d-flex align-items-center  ">
            <div class=" img "> <img :src="user.img" alt=""> </div>
            <p class="col">{{user.name}}</p>
         </div>
         <div class="status">
            <p class="col"> This is a status template and its awesome. </p>
            <p class="col " style="text-align:right">2 days ago</p>
         </div>
      </div>
      <!-- NEW STATUS -->
      <div class="statuscard col d-flex  flex-column "  v-for="status in newStatus" :key="status.id">
         <a href="#" @click="removeStatus(item)" style="position:absolute; right:20px; top:10px">x</a>
         <div class="user d-flex align-items-center  ">
            <div class=" img "> <img :src="status.img" alt=""> </div>
            <p class="col">{{status.name}}</p>
         </div>
         <div class="status">
            <p class="col">  {{status.status}} </p>
            <p class="col " style="text-align:right">{{status.time}}</p>
         </div>
      </div>
   </div>
</template>

<script>
import moment from 'moment'

export default {
	name: 'usercontent',
	data() {
		return {
			show: false,
			statusUpdate: '',
			newStatus: [],
			user: {
				img: "https://imgix.bustle.com/rehost/2016/9/14/aa9be1bf-49ee-4ff9-8b8b-87aae3d011ee.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
				name: "Jessica Day",
			}
		}
	},
	methods: {

		postStatus() {
			if (this.statusUpdate.length === "") {
				this.statusUpdate === ""
			}
			if (this.statusUpdate.length > 150) {
				this.statusUpdate = "Status too long"
			} else if (this.statusUpdate.length > 0) {
				var date = new Date();
				this.newStatus.push({
					status: this.statusUpdate,
					img: this.user.img,
					name: this.user.name,
					time: moment(date,'x').fromNow()
				})
				this.statusUpdate =""
			}
			this.show=false;

		},
		inProgress() {
			alert("in progress");
		},
		removeStatus(item) {
			var index = this.newStatus.indexOf(item);
			this.newStatus.splice(index, 1);
		}
	}

}

</script>

<style scoped lang="scss">

@import '../../styles/variables.scss';

	.newstatus{
			margin:0px 0px 0px 0px;
			border:$border-light;
			border-radius: 10px;

		ul{
				border-bottom:$border-light;
				margin:0;
				padding:0;
			li{
				list-style-type: none;
				padding:20px 0px 5px;
				border-bottom: 3px solid transparent;


				&:hover{
		
					border-bottom:$border-hover;
				}
				a{
					color:$dark-font;
					font-weight: bold;
					text-decoration: none;
				}
			}
		}
		textarea{
			background-color: $white;
			border:$border-light;
			padding:10px;
			margin-top: 10px;
		} 
		::placeholder{
			color:rgba($color: $dark-font, $alpha: 0.8)
		}
		button{
			background-color:$orange-button;
			border:none;
			margin-bottom:10px;
		}
	}
	.statuscard{
		border:$border-light;
		margin:10px 0px;
		padding:0;
		border-radius: 10px;
		a{
			color:$dark-font;
			cursor: pointer;
			padding:10px;
			text-decoration: none;
		}
		.user{
			border-bottom:$border-light;
			padding: 10px 10px;
				.img{
				height:50px;
				overflow: hidden;
				width:50px;
				border-radius: 50%;
				img{
					height:50px;
				}
			}
			p{
				margin:0;
				font-size: 14px;
			}
		}
		.status{
			background-color: $white;
			border-radius: 10px;
			p{
				margin:0;
				&:first-of-type{
					font-size: 18px;
					padding:10px 0px 0px 70px;
				}
				&:last-of-type{
					font-size: 13px;
				}
			}

		}
	}


</style>
