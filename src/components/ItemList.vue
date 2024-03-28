<template>
  <div class="container">
    <h1>Item List</h1>
    <ul class="list-group">
      <li v-for="item in items" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
        {{ item.name }}
        <div>
          <button class="btn btn-primary btn-sm mx-4" @click="editItem(item)">Edit</button>
          <button class="btn btn-danger btn-sm" @click="deleteItem(item.id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { items } from '../data/items.js';

export default {
  data() {
    return {
      items: items
    };
  },
  methods: {
    editItem(item) {
      this.$router.push({ name: 'edit-item', params: { id: item.id } });
    },
    deleteItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
    }
  }
};
</script>

<style scoped>

</style>
