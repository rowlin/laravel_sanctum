<template>
  <div id="wrapper">

    <!-- Sidebar -->
    <div id="sidebar-wrapper" >
      <SideBar></SideBar>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">

            <Nuxt/>

            <a href="#menu-toggle" class="btn btn-default" id="menu-toggle">Toggle Menu</a>
          </div>
        </div>
      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div>
</template>

<script>
export default {
  name: "admin.vue"
}
</script>

<style scoped>

</style>
