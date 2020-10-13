<template>
  <div class="side-panel">
    <img src="https://picsum.photos/150" />
    <h1>Welcome</h1>
    <h2>View ToDos Below:</h2>
    <Card style="width: 18em; margin-bottom: 2em">
      <template v-slot:title>This is the header</template>
      <template v-slot:content
        >This is the content of the card. Theres a lot to say here. I hope I
        dont forget anything!</template
      >
      <template v-slot:footer>This is the end.</template>
    </Card>
    <Button label="Submit" />
  </div>
</template>

<script>
export default {
  name: "SidePanel",
};
</script>

<style lang="scss" scoped>
.side-panel {
  height: 100vh;
  width: 100px;
  background-color: lightblue;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3em;
}
</style>
