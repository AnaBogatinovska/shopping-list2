<template>
  <div class="container">
    <div class="inner-content">
      <div class="box-container">
        <div class="box-body">
          <div class="list-item" v-for="item in listItems" :key="item.Id">
            <div class="item-body" :class="{ added: isItemAdded(item) }">
              <div class="delete-item">
                <span
                  class="material-icons del-item-icon"
                  @click="isDeleteItemClicked(item)"
                >
                  highlight_off
                </span>
              </div>
              <h3>{{ item.Name }}</h3>
              <div class="middle">
                <span class="cost">{{ item.Price }} DEN</span>
                <div>
                  <input
                    type="button"
                    value="-"
                    @click="qtyMinus(item)"
                    class="qty-minus"
                  />
                  <input type="number" min="1" v-model.number="item.Amount" />
                  <input
                    type="button"
                    value="+"
                    @click="item.Amount++"
                    class="qty-plus"
                  />
                </div>
              </div>
              <div class="add-btn">
                <button
                  class="add-cart-btn"
                  @click="addItemToCart(item)"
                  v-if="!item.AddedToCart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <delete-item-dialog
      v-if="itemToDelete"
      :item="itemToDelete"
      @cancel-delete="itemToDelete = null"
      @delete-item="deleteItem(itemToDelete)"
    />
  </div>
</template>

<script>
import itemsStorage from "../storage/ListStore";
import cartItemsStorage from "../storage/CartItemsStore";
import DeleteItemDialog from "./DeleteItemDialog.vue";

export default {
  components: { DeleteItemDialog },
  name: "ShoppingList",
  props: ["shoppingItems"],
  data() {
    return {
      cart: [],
      listItems: [],
      itemToDelete: null,
    };
  },
  mounted() {
    this.cart = cartItemsStorage.getCartItemsList();
    this.listItems = itemsStorage.getListItems();
  },
  methods: {
    isDeleteItemClicked(item) {
      this.itemToDelete = item;
    },
    deleteItem(item) {
      itemsStorage.removeItem(item);
      cartItemsStorage.removeItemFromCart(item);
      this.itemToDelete = null
    },
    addItemToCart(item) {
      cartItemsStorage.addToCart(item);
    },
    qtyMinus(item) {
      if (item.Amount > 0) {
        item.Amount--;
      }
    },
    isItemAdded(item) {
      return !!this.cart.find((i) => i.itemId === item.Id);
    },
  },
};
</script>

<style scoped>
.box-body {
  display: flex;
  flex-wrap: wrap;
}
.list-item {
  flex: 0 0 25%;
}
.item-body {
  padding: 10px;
  margin: 5px;
  box-shadow: 0 0 5px -2px aliceblue;
  border-radius: 4px;
  color: #eee;
  position: relative;
}

.item-body.added {
  box-shadow: 0 0 5px 1px rgba(0, 255, 55, 0.548);
  transition: all 0.5s;
}

.item-body h3 {
  text-align: center;
  text-transform: uppercase;
  margin: 10px 0;
}

.item-body .cost,
.del-box .cost {
  display: table-cell;
  background: green;
  padding: 2px 4px;
  vertical-align: middle;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  text-shadow: 0 1px 0 rgba(0, 51, 83, 0.3);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), inset 0 1px rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-image: linear-gradient(-180deg, #d82d2d 0%, #e29100 100%);
  border-radius: 5px;
  font-size: 14px;
  text-transform: uppercase;
}

.middle {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 22px 0;
}

.middle input.disabled {
  cursor: not-allowed;
  background: #b3b3b3 !important;
}

.add-btn {
  display: flex;
}

.add-btn .add-cart-btn {
  flex: 1;
  border: 1px solid #eeeeee2e;
  background: transparent;
  color: #fff;
  border-radius: 4px;
  padding: 3px;
  font-family: monospace;
  transition: all 0.25s;
}
.add-btn .add-cart-btn:hover {
  background: rgb(253, 131, 43);
  border: 1px solid rgba(255, 255, 255, 0.692);
  transition: all 0.1s;
}

.add-btn .remove-from-cart {
  flex: 1;
  border: 1px solid #eeeeee2e;
  background: rgb(7 255 59 / 43%);
  color: #fff;
  border-radius: 4px;
  padding: 3px;
  font-family: monospace;
  transition: all 0.25s;
}

.delete-item {
  position: absolute;
  right: 3px;
  top: 3px;
}
.del-item-icon {
  font-size: 20px;
  cursor: pointer;
}
.del-item-icon:hover {
  color: #d82d2d;
}
</style>