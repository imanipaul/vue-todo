<template>
  <SidePanel />
  <div class="home">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Button label="Submit" icon="pi pi-check" iconPos="right" />
    <Card>
      <template v-slot:title>This is the header</template>
      <template v-slot:content
        >This is the content of the card. Theres a lot to say here. I hope I
        dont forget anything!</template
      >
      <template v-slot:footer>This is the end.</template>
    </Card>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SidePanel from "./components/SidePanel.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
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
  // margin-top: 60px;
  display: flex;
  // width: 100vw;

  .home {
    flex: 3;
    .hello {
      border: 5px solid red;
    }
  }

  // .side-panel {
  //   flex: 1;
  // }
}
</style>
