<template>
  <div>
    <form>
        <label for="name">Product Name</label><br />
        <div class="d-flex justify-content-center">
          <input
            type="text"
            class="form-control col-6"
            required
            v-model="product.name"
          /><br />
        </div>

        <label for="quantity">Quantity</label><br />
        <div class="d-flex justify-content-center">
          <input
            type="number"
            class="form-control col-6"
            required
            v-model="product.quantity"
          /><br />
        </div>

        <hr />

        <button
          type="button"
          class="btn btn-primary btn-block"
          @click.prevent="updateProduct(product.id)"
        >
          Save Changes
        </button>
      </form>
</div>
</template>

<script>

export default {
  name: 'updateProduct',
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  methods: {
    updateProduct(id) {
      this.$store.dispatch("updateProduct", {
        id: id,
        router: this.$router,
      });
    },
  }
};
</script>

<style>
</style>