<template>
  <div>
    <h1 class="text-center">Our Birds!</h1>
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(bird, i) in birds" :key="i">
        <v-img :src="bird.pic"></v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {};
  },
  props: {
    birds: {
      type: Array,
    },
  },

  methods: {},
};
</script>
