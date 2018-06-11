<template>

  <div>
    <div class="content col ">
        <div class="col d-flex newstatus flex-column ">
          <ul class="d-flex justify-content-around">
              <li  >Share an update</li>
              <li @click="inProgress()">Share a photo</li>
              <li @click="inProgress()">Write an article</li>
          </ul>
          <textarea v-on:click="showButton()" v-model="statusUpdate"  name="" placeholder="Maximum 150 characters" id="textarea" cols="30" rows="2"></textarea>
          <button v-if="show" class="btn btn-primary" v-on:click="postStatus()" > Post</button>
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
          <p class="col time" style="text-align:right">{{status.time}}</p>
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
					time: moment(date).fromNow()
				})
			};


		},
		inProgress() {
			alert("in progress")
		},
		removeStatus(item) {
			var index = this.newStatus.indexOf(item);
			this.newStatus.splice(index, 1);
		},
		showButton() {
			console.log("im here")
			this.show = true;
		}
	},

}

</script>

<style scoped lang="scss">
.content {
	border: 2px solid rgba($color: #000000, $alpha: 0.1);
	background-color: white;
	border-radius: 10px;
	margin: 0px;
	padding: 0;
	.newstatus {
		padding-bottom: 10px;
		ul {
			margin: 0;
			border-bottom: 2px solid rgba($color: #000000, $alpha: 0.1);
			li {
				display: inline;
				padding: 15px 0px;
				border-bottom: 3px solid rgba($color: #000000, $alpha: 0.0);
				&:hover {
					cursor: pointer;
					border-bottom: 3px solid rgba($color: #2B3A3E, $alpha: 0.8);
					background-color: rgba($color: #2B3A3E, $alpha: 0.1)
				}
			}
		}
		textarea {
			border: none;
			padding: 20px 10px;
		}
		button {
			// width:100px;
			background: #00B2E2;
			cursor: pointer;
			border: none;

		}
	}
}

.statuscard {
	padding: 0px 0px;
	margin: 10px 0px;
	border: 2px solid rgba($color: #000000, $alpha: 0.1);
	background-color: white;
	.user {
		padding: 10px 30px;
		.img {
			height: 70px;
			width: 70px;
			border-radius: 50%;
			overflow: hidden;
			object-position: top;
			object-fit: cover;
			// margin: 0 auto;
			img {
				height: 70px;
			}
		}
		p {
			margin: 0;
			padding: 0px 10px;
			font-size: 18px;
		}
	}
	.status {
		border-top: 2px solid rgba($color: #000000, $alpha: 0.1);
		padding: 10px 10px 0px;
		p {
			margin: 0;
		}
	}
}
</style>
