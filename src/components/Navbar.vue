<template>
  <!-- <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
    <li><router-link to="/contact">Contact</router-link></li>
    <li><router-link to="/produk">Produk</router-link></li>
    <li><router-link to="/detail">Detail</router-link></li>
  </ul> -->
  <div>
    <h1>Data Transportasi/Provinsi</h1>
  </div>
</template>
<script>
export default {
  name: "NavbarR",
};
</script>
<style scoped>
h1 {
  text-align: center;
  background-color: #333;
  padding: 10px 0;
  color: white;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 20px;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
  padding-left: 10px;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}
.active {
  background-color: #4caf50;
}
</style>
