<template>
  <div class="title">
    <h1>Contact</h1>
    <a href=""><i class="fas fa-sign-out-alt"></i> Log-out</a>
  </div>
</template>
<script>
export default {
  name: "ContactR",
};
</script>
<style scoped>
.all {
  margin: 0;
  padding: 0;
}
.title {
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  align-items: center;
  background-color: #4a4a4a;
  max-width: 1440px;
  width: 100%;
  color: white;
  margin-bottom: 20px;
}
.title i,
a {
  text-decoration: none;
  color: white;
}
</style>
