<template>
 
         <div class="sidebar col  d-flex justify-content-center align-items-center flex-column ">
            <div class="user  d-flex justify-content-center align-items-center flex-column">
               <div class="img "><img :src="user.img" alt=""></div>
               <ul class="">
                  <li><a href="#">{{user.name}}</a></li>
                  <li><a href="#">{{user.location}}</a></li>
               </ul>
            </div>
            <div class="connections d-flex justify-content-center  flex-row">
               <div class="col">
                  <h2>{{user.connections}}</h2>
                  <p>Connections</p>
               </div>
               <div class="col">
                  <h2>{{user.views}}</h2>
                  <p>Views</p>
               </div>
            </div>
         </div>

</template>

<script>


export default {
  name: 'sidebar',
  components: {

  },
  data(){
      return{
          user:{
            img:"https://imgix.bustle.com/rehost/2016/9/14/aa9be1bf-49ee-4ff9-8b8b-87aae3d011ee.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
            name:"Jessica Day",
            location:"New York, New York",
            connections:"356",
            views:"28"
          }
      }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/variables.scss';
.sidebar {
	border: 2px solid rgba($color: $dark-font, $alpha: 0.1);
	border-radius: 5px;
	background-color: $white;
	max-height:400px;
	.user {
		padding: 10px 0px 40px;
		.img {
			height: 120px;
			width: 120px;
			border-radius: 50%;
			overflow: hidden;
			object-position: top;
			object-fit: cover;
			margin: 0 auto;
			img {
				height: 120px;
			}
		}
		ul {
			margin: 0;
			padding: 0;
			text-align: center;
			li {
				list-style-type: none;
				padding: 5px 0px 0px;
				&:first-of-type {
					padding: 30px 0px 0px
				}
				a {
					color: $medium-font;
				}
			}
		}
	}
	.connections {
		border-top: 2px solid rgba($color: $dark-font, $alpha: 0.1);
		width: 100%;
		.col {
			// border: 1px solid black;
			text-align: center;
			&:hover {
				color: #4C585C;
				cursor: pointer;
			}
			&:last-of-type {
				border-left: 2px solid rgba($color: $dark-font, $alpha: 0.1);
			}
			h2 {
				margin-top: 10px;
				font-size: 20px;
			}
			p {
				margin-bottom: 10px;
				font-size: 14px;
			}
		}
	}
}
</style>
