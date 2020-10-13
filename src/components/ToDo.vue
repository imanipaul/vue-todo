<template>
  <div class="todo">
    <h3>To Do List</h3>
    <div class="contents">
      <ListCard title="To Do Items" />
      <!-- <Card>
        <template v-slot:title>Dos</template>
        <template v-slot:content>
          These are the things I need to do

          <div class="inputgroup">
            <Button label="Search" />
            <InputText placeholder="Keyword" />
          </div>
        </template>
        <template v-slot:footer>Get it done!.</template>
      </Card> -->
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
import ListCard from "./ListCard";
export default {
  name: "ToDo",
  components: { ListCard },
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

    & .p-card {
      width: 22em;
      height: 80%;
      border-radius: 1em;
      margin: 1em;

      .inputgroup {
        // width: 100px;
        .p-button {
        }
      }
    }
  }
}
</style>
