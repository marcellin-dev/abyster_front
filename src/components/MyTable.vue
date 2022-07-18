<template>
  <div class="my-table">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">nom</th>
          <th scope="col">montant</th>
          <th scope="col">description</th>
          <th scope="col">actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in datas" :key="item.id">
          <th scope="row">
            {{ key }}
          </th>
          <td>{{ item.nom }}</td>
          <td>{{ item?.montant }}</td>
          <td>{{ item?.description }}</td>
          <td>
            <div class="row">
              <div class="col">
                <button
                  class="btn bg-success"
                  @click="modifier(item)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </div>
              <div class="col">
                <button class="btn bg-danger" @click="Delete(item._id)">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <th>total</th>
          <th></th>
          <th></th>
          <th></th>
          <th>{{ total }} fcfa</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["datas"],

  data() {
    return {};
  },

  computed: {
    total() {
      let tempo = this.datas;
      let som = 0;
      tempo.map((item) => {
        som += Number(item.montant);
      });
      return som;
    },
  },
  methods: {
    Delete(id) {
      this.$emit("Delete", id);
    },
    modifier(data) {
      this.$emit("Modifier", data);
    },
  },
};
</script>
