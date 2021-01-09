import Vue from "vue";
import VueRouter from "vue-router";

import AddItemForm from "../components/AddItemForm";
import ShoppingCart from "../components/ShoppingCart";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/add-item",
      name: "AddItem",
      component: AddItemForm,
    },
    {
      path: "/shopping-cart",
      name: "ShoppingCart",
      component: ShoppingCart,
    },
  ],
  mode: "history",
});

export default router;
