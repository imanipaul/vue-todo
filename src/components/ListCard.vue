<template>
  <Card>
    <template v-slot:title>{{ title }}</template>
    <template v-slot:content>
      These are the things I need to do

      <div class="inputgroup">
        <form @submit.prevent="createNewItem">
          <InputText
            type="text"
            placeholder="To Do Item"
            v-model="state.newItemContent"
          />
          <Button label="Submit" type="submit" />
        </form>
      </div>
      <div v-for="(item, index) in state.allItems" :key="index">{{ item }}</div>
    </template>
    <template v-slot:footer>Get it done!</template>
  </Card>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "ListCard",
  props: {
    title: String,
  },

  setup() {
    const state = reactive({
      newItemContent: "",
      allItems: [],
    });

    function createNewItem() {
      console.log("clicked");
      if (state.newItemContent) {
        state.allItems.push(state.newItemContent);
        state.newItemContent = "";
      }
    }

    return {
      state,
      createNewItem,
    };
  },
};
</script>

<style lang="scss" scoped>
.p-card {
  width: 22em;
  height: 80%;
  border-radius: 1em;
  margin: 1em;

  // .inputgroup {
  //   // width: 100px;
  //   .p-button {
  //   }
  // }
}
</style>
