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
      <v-container> <router-view /></v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped></style>
