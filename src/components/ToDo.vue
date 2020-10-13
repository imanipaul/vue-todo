<template>
  <div class="todo">
    <h3>To Do List</h3>
    <div class="contents">
      <Card>
        <template v-slot:title>Dos</template>
        <template v-slot:content>These are the things I need to do</template>
        <template v-slot:footer>Get it done!.</template>
      </Card>
      <Card>
        <template v-slot:title>Done</template>
        <template v-slot:content>These are the things I have done!</template>
        <template v-slot:footer>Congrats!</template>
      </Card>
      <Card>
        <template v-slot:title>Notes</template>
        <template v-slot:content
          >Write down things you dont want to forget.</template
        >
        <template v-slot:footer>Remember!</template>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDo",
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  .contents {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    & * {
      width: 22em;
      height: 80%;
      border-radius: 1em;
      margin: 1em;
    }
  }
}
</style>
