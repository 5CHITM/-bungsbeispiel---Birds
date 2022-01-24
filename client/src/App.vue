<template>
  <v-app>
    <v-app-bar app absolute color="indigo" dark>
      <v-app-bar-nav-icon>
        <v-img max-width="50" alt="logo" src="@/assets/bird.png"></v-img>
      </v-app-bar-nav-icon>

      <v-app-bar-title>Bird Watch</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn color="indigo" class="mx-1" active-class="active" to="/"> Home </v-btn>
      <v-btn color="indigo" class="mx-1" active-class="active" to="/gallery"> Gallery </v-btn>
      <v-btn color="indigo" class="mx-1" active-class="active" to="/about"> About </v-btn>
    </v-app-bar>
    <v-main>
      <v-container> <router-view :birds="birds" @seen="seenBird" /></v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',

  data: () => ({
    birds: [],
  }),
  created() {
    this.fetchData();
  },
  methods: {
    async seenBird(birdObj) {
      try {
        await axios({
          url: `${process.env.VUE_APP_SERVER}/bird/${birdObj.bird.id}`,
          method: 'patch',
          contentType: 'application/json',
          data: { birdObj },
        });
        this.fetchData();
      } catch (error) {
        console.error(error);
      }

      return null;
    },
    async fetchData() {
      try {
        const { data } = await axios({
          url: `${process.env.VUE_APP_SERVER}/birds`,
          method: 'GET',
        });
        this.birds = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped></style>
