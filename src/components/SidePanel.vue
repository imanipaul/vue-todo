<template>
  <div class="side-panel">
    <img src="https://picsum.photos/150" />
    <h1>Welcome</h1>
    <h2>View ToDos Below:</h2>
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
  background-color: lightgray;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3em;
}
</style>
