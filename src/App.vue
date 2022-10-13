<template>
  <div>
    <!-- <Navbar /> -->
    <div class="sidebar">
      <SideBar />
      <div class="routerview">
        <router-view />
      </div>
    </div>
    <!-- <Data /> -->
  </div>
</template>
<script>
// import Data from "./components/Data.vue";
// import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/Sidebar.vue";
export default {
  name: "App",
  components: {
    // Data,
    // Navbar,
    SideBar,
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
