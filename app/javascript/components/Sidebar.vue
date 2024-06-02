<template>
  <div class="sidebar">
    <h2>Rooms</h2>
    <ul>
      <li v-for="room in rooms"
        :key="room.id"
        @click="selectRoom(room.id)">
        {{ room.name }}
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
    fetchRooms() {
      fetch('/rooms')
        .then(response => response.json())
        .then(data => {
          this.rooms = data;
        });
    },
    selectRoom(roomId) {
      this.$emit('room-selected', roomId);
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
