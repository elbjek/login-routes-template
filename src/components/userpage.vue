<template>
  <div>
    <cover></cover>
    <div class="container-fluid d-flex  flex-wrap">
      <sidebar class="col-lg-2  "></sidebar>
      <usercontent class="col-lg-8 "></usercontent>
      <whotofollow class="col-lg-2  "></whotofollow>
    </div>
  </div>
</template>

<script>
  import sidebar from '../components/templates/sidebar.vue'
  import usercontent from '../components/templates/usercontent.vue'
  import whotofollow from '../components/templates/whotofollow.vue'
  import cover from '../components/templates/cover.vue'
  export default {
    name: 'userpage',
    components: {
      sidebar,
      usercontent,
      whotofollow,
      cover
    }
  }
</script>

<style scoped lang="scss">

  .container-fluid {
    width: 1440px;
    margin: 0 auto;
    background-color: $background ;
  }
</style>
