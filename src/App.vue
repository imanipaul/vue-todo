<template>
  <SidePanel />
  <div class="home">
    <ToDo />
  </div>
</template>

<script>
import ToDo from "./components/ToDo";
import SidePanel from "./components/SidePanel.vue";

export default {
  name: "App",
  components: {
    ToDo,
    SidePanel,
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  background-color: #f4f4f4;

  .home {
    flex: 3;
    .hello {
      border: 5px solid red;
    }
  }
}
</style>
