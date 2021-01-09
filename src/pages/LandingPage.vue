<template>
  <div class="container">
    <div class="inner-content">
      <Header />
     
      <router-link :to="{ name: 'AddItem' }"><button class="add-item" >add item</button> </router-link>

      <ShoppingList />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import ShoppingList from "../components/ShoppingList.vue";

export default {
  name: "LandingPage",
  components: {
    Header,
    ShoppingList,
  },
};
</script>

<style scoped>
.add-item {
  margin: 20px 5px;
  background: #e88635;
  color: #fff;
  border: none;
  text-transform: uppercase;
  border-radius: 10px;
  padding: 10px 10px;
}
</style>