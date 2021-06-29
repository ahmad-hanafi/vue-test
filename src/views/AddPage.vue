<template>
  <div class="addPage">
    <Navbar />

    <AddData />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AddData from "@/components/AddData.vue";

export default {
  name: "AddPage",
  components: {
    Navbar,
    AddData,
  },
};
</script>

<style>
</style>