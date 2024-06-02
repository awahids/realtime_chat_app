<template>
  <div class="sidebar">
    <h2>Rooms</h2>
    <ul>
      <li v-for="room in rooms"
        :key="room.id">
        <a :href="'/chatroom/' + room.id">{{ room.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rooms: []
    }
  },
  created() {
    this.fetchRooms();
  },
  methods: {
    async fetchRooms() {
      try {
        const response = await fetch('/rooms');
        const data = await response.json();
        this.rooms = data;
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    }
  }
}
</script>

<style>
.sidebar {
  width: 25%;
  background-color: #333;
  color: white;
  padding: 1rem;
}
</style>