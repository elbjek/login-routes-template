 <template>
  <div>

<div class="container-fluid d-flex  flex-wrap" >
  <sidebar class="col-lg-2  "></sidebar>
  <usercontent class="col-lg-8 "></usercontent>
  <whotofollow class="col-lg-2  "></whotofollow>
</div>
  </div>
</template>

<script>

import sidebar from '../components/sidebar.vue'
import usercontent from '../components/usercontent.vue'
import whotofollow from '../components/whotofollow.vue'
export default {
  name: 'userpage',
  components: {
    sidebar,
    usercontent,
    whotofollow
  }
}
</script>

<style scoped lang="scss">

.container-fluid{
  width:1440px;
  margin:0 auto;
}

</style>
