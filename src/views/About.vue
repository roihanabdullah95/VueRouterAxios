<template>
  <div>
    <div class="title">
      <h1>About</h1>
      <a
        class="btn btn-outline-danger my-2 my-sm-0"
        style="margin-left: 830px"
        @click="out"
        href="/"
      >
        <i class="fas fa-sign-out-alt"></i>Logout</a
      >
    </div>
    <form @submit.prevent="addMobil">
      <input type="hidden" v-model="formMobil.id" />
      <input type="text" v-model="formMobil.name" /><br />
      <input type="text" v-model="formMobil.tahun" />
      <button type="submit" v-show="!updateSubmitMobil">add Mobil</button>
      <!-- jika tidak update maka tombol update tidak muncul -->
      <button
        type="button"
        v-show="updateSubmitMobil"
        @click="updateMobil(formMobil)"
      >
        Update Mobil
      </button>
      <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
    <ul v-for="mobil in mobils" :key="mobil.id">
      <li>
        <span>Nama saya : {{ mobil.name }}</span> &#160;
        <span>Umur saya {{ mobil.tahun }} tahun</span> &#160;
        <button @click="editMobil(mobil)">Edit</button> ||
        <button @click="delMobil(mobil)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "ProdukS",
  data() {
    return {
      formMobil: {
        id: "",
        name: "",
        tahun: "",
      },
      mobils: "",
      updateSubmitMobil: false,
    };
  },
  mounted() {
    this.loadMobil();
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
    }
  },
  methods: {
    loadMobil() {
      axios
        .get("http://localhost:3000/mobils")
        .then((res) => {
          this.mobils = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addMobil() {
      axios
        .post("http://localhost:3000/mobils/", this.formMobil)
        .then((res) => {
          this.loadMobil();
          this.formMobil.name = "";
          this.formMobil.tahun = "";
          // this.form.cc = "";
          // this.form.made = "";
          // this.form.image = "";
        });
    },

    // Edit Mobil
    editMobil(mobil) {
      this.updateSubmitMobil = true;
      this.formMobil.id = mobil.id;
      this.formMobil.name = mobil.name;
      this.formMobil.tahun = mobil.tahun;
    },

    // Mobil update
    updateMobil(formMobil) {
      return axios
        .put("http://localhost:3000/mobils/" + formMobil.id, {
          name: this.formMobil.name,
          tahun: this.formMobil.tahun,
        })
        .then((res) => {
          this.loadMobil();
          this.formMobil.id = "";
          this.formMobil.name = "";
          this.formMobil.tahun = "";
          this.updateSubmitMobil = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // Delete Mobil
    delMobil(mobil) {
      axios.delete("http://localhost:3000/mobils/" + mobil.id).then((res) => {
        this.loadMobil();
        let index = this.mobils.indexOf(formMobil.name, formMobil.tahun);
        this.mobils.splice(index, 1);
      });
    },
    out() {
      sessionStorage.clear();
      this.$router.push("/");
    },
  },
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
