<template>
  <div>
    <!-- <Login /> -->
    <!-- <Navbar /> -->
    <div class="sidebar">
      <SideBar v-if="navbar" />
      <div class="routerview">
        <router-view @toggleBar="() => (navbar = !navbar)" />
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/Sidebar.vue";
// import Login from "@/components/Login.vue";
export default {
  name: "App",
  components: {
    SideBar,
    // Login,
  },
  data() {
    return {
      navbar: true,
    };
  },
};
</script>
<style scoped>
.sidebar {
  display: flex;
}
.routerview {
  width: 100%;
  margin: 0px 35px 10px 5px;
}
</style>
