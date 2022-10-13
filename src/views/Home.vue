<template>
  <div class="all">
    <div class="title">
      <h1>Home</h1>
      <a href=""><i class="fas fa-sign-out-alt"></i> Log-out</a>
    </div>
    <form @submit.prevent="add">
      <input type="hidden" v-model="form.id" required />
      <label for="">Merk Motor</label>
      <input type="text" v-model="form.name" required /><br />
      <label for="">Tahun</label>
      <input type="text" v-model="form.tahun" required /><br />
      <label for="">CC</label>
      <input type="text" v-model="form.cc" required /><br />
      <label for="">Made</label>
      <input type="text" v-model="form.made" required />
      <button type="submit" v-show="!updateSubmit">add</button>
      <!-- jika tidak update maka tombol update tidak muncul -->
      <button type="button" v-show="updateSubmit" @click="update(form)">
        Update
      </button>
      <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
    <!-- <ul v-for="data in users" :key="data.id">
      <li>
        <span>Nama saya : {{ data.name }}</span> &#160;
        <span>Umur saya {{ data.umur }} tahun</span> &#160;
      </li>
    </ul> -->
    <table border="1" style="width: 100%">
      <tr>
        <th>Merk Motor</th>
        <th>Tahun Buatan</th>
        <th>CC</th>
        <th>Buatan</th>
        <th>Image</th>
        <th>Action</th>
      </tr>
      <tr v-for="data in users" :key="data.id">
        <td>{{ data.name }}</td>
        <td>{{ data.tahun }}</td>
        <td>{{ data.cc }}</td>
        <td>{{ data.made }}</td>
        <td><img :src="data.image" alt="" width="100" height="100" /></td>
        <td style="text-align: center">
          <button @click="edit(data)">Edit</button> ||
          <button @click="del(data)">Delete</button>
        </td>
      </tr>
    </table>
    <br /><br /><br /><br />
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
  name: "HomeR",
  data() {
    return {
      form: {
        id: "",
        name: "",
        tahun: "",
        cc: "",
        made: "",
        image: "",
      },
      users: "",
      formMobil: {
        id: "",
        name: "",
        tahun: "",
      },
      mobils: "",
      updateSubmit: false,
      updateSubmitMobil: false,
    };
  },
  mounted() {
    this.load();
    this.loadMobil();
  },
  methods: {
    // Menampilkan data
    load() {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          this.users = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
    // Menambah Data
    add() {
      axios.post("http://localhost:3000/users/", this.form).then((res) => {
        this.load();
        this.form.name = "";
        this.form.tahun = "";
        this.form.cc = "";
        this.form.made = "";
        this.form.image = "";
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
    // Menampilkan data yang akan di Edit
    edit(data) {
      this.updateSubmit = true;
      this.form.id = data.id;
      this.form.name = data.name;
      this.form.tahun = data.tahun;
      this.form.cc = data.cc;
      this.form.made = data.made;
      this.form.image = data.image;
    },
    // Edit Mobil
    editMobil(mobil) {
      this.updateSubmitMobil = true;
      this.formMobil.id = mobil.id;
      this.formMobil.name = mobil.name;
      this.formMobil.tahun = mobil.tahun;
    },
    // Fungsi untuk mengupdate data perubahan
    update(form) {
      return axios
        .put("http://localhost:3000/users/" + form.id, {
          name: this.form.name,
          tahun: this.form.tahun,
          cc: this.form.cc,
          made: this.form.made,
          image: this.form.image,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.name = "";
          this.form.tahun = "";
          this.form.cc = "";
          this.form.made = "";
          this.form.image = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
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
    // Fungsi Mendelete Data
    del(data) {
      axios.delete("http://localhost:3000/users/" + data.id).then((res) => {
        this.load();
        let index = this.users.indexOf(
          form.name,
          form.tahun,
          form.cc,
          form.made,
          form.image
        );
        this.users.splice(index, 1);
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
