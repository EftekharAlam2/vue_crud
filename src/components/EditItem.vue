<template>
  <div class="container">
    <h1>Edit Item</h1>
    <form @submit.prevent="saveChanges">
      <div class="form-group">
        <label for="itemName">Item Name:</label>
        <input type="text" class="form-control" id="itemName" v-model="editedItem.name">
      </div>
      <button type="submit" class="btn btn-primary">Save Changes</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { items } from '../data/items.js';

export default {
  data() {
    return {
      editedItem: {} // Initialize as an empty object
    };
  },
  mounted() {
    const itemId = this.$route.params.id;
    this.editedItem = items.find(item => item.id === parseInt(itemId));
  },
  methods: {
    saveChanges() {
      const itemId = this.$route.params.id;
      const index = items.findIndex(item => item.id === parseInt(itemId));
      if (index !== -1) {
        items[index].name = this.editedItem.name;
      }
      this.$router.push({ name: 'item-list' });
    }
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
