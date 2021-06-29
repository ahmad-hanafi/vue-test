<template>
  <div>
      <h2>Add Product</h2>
    <form>
        <label for="name">Product Name</label><br />
        <div class="d-flex justify-content-center">
          <input
            type="text"
            class="form-control col-6"
            required
            v-model="name"
          /><br />
        </div>

        <label for="quantity">Quantity</label><br />
        <div class="d-flex justify-content-center">
          <input
            type="number"
            class="form-control col-6"
            required
            v-model="quantity"
          /><br />
        </div>

        <hr />

        <button
          type="button"
          class="btn btn-primary btn-block"
          @click.prevent="addProduct()"
        >
          Add Product
        </button>
      </form>
</div>
</template>

<script>

export default {
  name: 'addProduct',
  data() {
    return {
      name: '',
      quantity: ''
    }
  },
  methods: {
    addProduct() {
      this.$store.dispatch('addProduct', {
        name: this.name,
        quantity: this.quantity,
        router: this.$router
      })
    }
  }
};
</script>

<style>
</style>