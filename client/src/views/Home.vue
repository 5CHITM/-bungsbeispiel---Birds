<template>
  <div>
    <h4>Our Endangered Birds</h4>
    <v-row no-gutters>
      <v-col class="mr-2">
        <v-text-field v-model="firstname" label="Firstname"></v-text-field>
        <v-text-field v-model="lastname" label="Lastname"></v-text-field>
        <p class="text-caption">Click on the <span class="red--text">eye</span> icon if you have observed that bird!</p>
      </v-col>
      <v-col class="ml-2"> <WatchedBirdname v-if="lastSeen" :lastSeen="lastSeen"></WatchedBirdname> </v-col>
      <v-col></v-col>
    </v-row>
    <v-data-table :headers="headers" :items="birds" :items-per-page="5" class="elevation-1">
      <template v-slot:item.pic="{ item }">
        <v-img max-width="100" :src="item.pic"></v-img>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn icon color="red" @click="seenBird(item)">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import WatchedBirdname from '@/components/WatchedBirdname.vue';
export default {
  name: 'Home',
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id', align: 'start' },
        { text: 'Image', value: 'pic', sortable: false },
        { text: 'Common Name', value: 'commonName' },
        { text: 'Scientific Name', value: 'scientificName' },
        { text: 'Observed', value: 'count' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      firstname: 'Sebastian',
      lastname: 'Lang',
      lastSeen: '',
    };
  },
  components: {
    WatchedBirdname,
  },
  props: {
    birds: {
      type: Array,
    },
  },
  methods: {
    seenBird(bird) {
      this.lastSeen = bird;

      return this.$emit('seen', { bird, observedBy: `${this.firstname} ${this.lastname}` });
    },
  },
};
</script>
