<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col-1">No</th>
          <th scope="col-4">Product Name</th>
          <th scope="col-1">Quantity</th>
          <th scope="col" colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in products" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>
            <button
              class="btn btn-info"
              type="button"
              @click.prevent="getProductById(product.id)"
            >
              Edit
            </button>
            <button
              class="btn btn-danger"
              type="button"
              @click.prevent="deleteProduct(product.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    methods: {
    getProducts () {
      this.$store.dispatch('getProducts')
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', {
        id: id,
        router: this.$router
      })
    },
    getProductById (id) {
      this.$store.dispatch('getProductById', {
        id: id,
        router: this.$router
      })
    }
    },
    mounted() {
        this.getProducts()
    },
    computed: {
        products () {
            return this.$store.state.products
        }
    }
};
</script>

<style>
</style>