<template>
  <platePalApp />
</template>

<script>
import platePalApp from "./components/plate-pal-app.vue";

export default {
  name: "App",
  components: {
    platePalApp,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&display=swap");

#app {
  margin-top: 0;

  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
}
body {
  margin: 0 auto;
}
@media screen and (max-width: 460px) {
  body {
    margin: 0;
  }
}
</style>
