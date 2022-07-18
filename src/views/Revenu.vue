<template>
  <div class="row">
    <div class="container">
      <nav-bar />

      <div class="ro">
        <div class="col">vos Revenus</div>

        <div class="col">
          <!-- <div v-if="loading" class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div> -->

          <button
            class="btn bg-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Ajouter
          </button>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <div v-if="loadingGet" class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div v-else>
            <my-table :datas="depanses" @Delete="Delete" @Modifier="modifier" />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Ajoutez un revenu
            </h5>
          </div>
          <div class="body p-5">
            <form @submit="addOrUpdate" class="">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="">nom</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="nom"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >montant</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="montant"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >description</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="description"
                />
              </div>

              <button
                id="btn-modal"
                type="submit"
                class="btn btn-primary form-control"
                data-bs-dismiss="modal"
              >
                Enregistrer
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <!-- <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> -->
            <!--
            <button type="button" class="btn btn-primary" @click="saveOrUpdate">
              Save changes
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import NavBar from "../components/NavBar.vue";
import MyTable from "@/components/MyTable.vue";
export default {
  components: { NavBar, MyTable },

  data() {
    return {
      datas: [],
      error: false,
      nom: "",
      description: "",
      montant: "",
      status: "save",
      id: "",
      loading: false,
      loadingGet: false,
    };
  },

  computed: {
    depanses() {
      return this.$store.state.revenu.revenus;
    },
  },

  methods: {
    getRevenus() {
      this.$store
        .dispatch("revenu/getRevenus")
        .then((res) => {
          console.log("res po ", res);
          this.datas = res.data.revenus;
          console.log("data ", this.datas);
        })
        .catch((err) => {
          this.error = true;
        });
    },

    modifier(data) {
      console.log("m ", data);
      // document.getElementById("btn-modal").click;
      this.status = "update";
      this.nom = data.nom;
      this.montant = data.montant;
      this.description = data.description;
      this.id = data._id;
    },

    addOrUpdate(e) {
      e.preventDefault();

      let data = {
        id: this.id,
        nom: this.nom,
        montant: this.montant,
        description: this.description,
      };

      console.log("update data ", data);

      if (this.status === "save") {
        console.log("update save ");
        this.$store
          .dispatch("revenu/addRevenu", data)
          .then((res) => {
            this.getRevenus();
            this.loading = true;
          })
          .catch((err) => {
            this.loading = true;
          });
      } else if (this.status === "update") {
        console.log("update update ");
        this.loading = true;
        this.$store
          .dispatch("revenu/updateRevenu", data)
          .then((res) => {
            this.getRevenus();
            this.loading = false;
          })
          .catch((err) => {
            this.loading = false;
          });
      }
    },

    Delete(id) {
      this.$store
        .dispatch("revenu/deleteRevenu", id)
        .then((res) => {
          this.getRevenus();
        })
        .catch((err) => {});
    },
  },

  beforeMount() {
    this.$store.commit("auth/setBearer");
  },

  mounted() {
    this.getRevenus();
  },
};
</script>
