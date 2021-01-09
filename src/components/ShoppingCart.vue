<template>
  <div class="backdrop">
    <div class="cart">
      <div class="cart-body">
        <div class="box">
          <div>
            <h3>ShoppingCart</h3>
          </div>
          <div
            class="cart-item"
            v-for="cartItem in cartItems"
            :key="cartItem.itemId"
          >
            <div class="cart-item-body">
              <h3 style="text-transform: uppercase; margin-bottom: 16px">
                {{ cartItem.item.Name }}
              </h3>
              <div class="info">
                <div>
                  <input
                    type="button"
                    value="-"
                    @click="qtyMinus(cartItem)"
                    class="qty-minus"
                  />
                  <input type="number" min="1" v-model.number="cartItem.qty" />
                  <input
                    type="button"
                    value="+"
                    @click="cartItem.qty++"
                    class="qty-plus"
                  />
                </div>

                <span class="cost">{{ cartItem.item.Price }} den.</span>
                <button
                  class="del-cart-item"
                  @click="deleteItemFromCart(cartItem.item)"
                >
                  <span class="material-icons del-icon">
                    remove_circle_outline
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="no-items" v-if="cartItems.length === 0">
            No products in your cart...
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 24px;
            "
          >
            <div class="total">
              Total: <span>{{ sum() }} den.</span>
            </div>

            <div>
              <button class="c-btn" type="button" @click="closeCart">
                Cancel
              </button>
              <button class="b-btn">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartItemsStorage from "../storage/CartItemsStore";

export default {
  name: "ShoppingCart",
  data() {
    return {
      cartItems: [],
    };
  },
  mounted() {
    this.cartItems = cartItemsStorage.getCartItemsList()  ;
  
    console.log( this.cartItems)
  },
  methods: {
    deleteItemFromCart(item) {
      cartItemsStorage.removeItemFromCart(item);
    },
    sum() {
      let sum = 0;

      this.cartItems.forEach((cartItem) => {
        let amPr = null;

        if (cartItem.qty) {
          amPr = +cartItem.qty * +cartItem.item.Price;
          sum += amPr;
        } else {
          sum += +cartItem.Price;
        }
      });

      if (!sum) {
        return 0;
      }
      return sum;
    },

    qtyMinus(item) {
      if (item.qty > 0) {
        item.qty--;
      }
    },
    closeCart() {
      this.$router.go(-1)
    }
  },
};
</script>

<style scoped>
.backdrop {
  background-color: #000000a8;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  left: 0;
  z-index: 1;
}

.cart {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0px;
  left: 0;
  bottom: 0;
  overflow: scroll;
}

.cart-body {
  width: 100%;
  padding-bottom: 50px;
  color: #fff;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50px;
}

.cart-body .box {
  flex: 1;
  background: #27273c;
  box-shadow: 0 0 5px -2px #eee;
  border-radius: 5px;
  max-width: 400px;
  padding: 12px;
}

.cart-body h3 {
  text-align: center;
}

.cart-item {
  margin: 8px 0;
  padding: 12px 8px;
  box-shadow: 0px 0px 4px -1px rgba(151, 151, 151, 0.719);
}

.cart-item-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cart-item-body .info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 8px;
}

.cart-item-body .info .cost {
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

.del-cart-item {
  background: transparent;
  border: none;
}
.del-cart-item .del-icon {
  color: #ff0a00;
}

.total {
  color: #5ee814;
  padding: 3px 8px;
}
.total span {
  font-weight: bold;
}

.c-btn {
    border: 1px solid #eeeeee57;
    background: transparent;
    border-radius: 5px;
    color: #ffffffad;
    padding: 3px 6px;
    margin-right: 10px;
}

.b-btn {
  background: #f46f00;
    border-radius: 5px;
    color: #fff;
    padding: 3px 6px;
    text-shadow: 0 1px 0 rgba(0, 51, 83, 0.3);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), inset 0 1px rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.15);
    background-image: linear-gradient(-180deg, #d82d2d 0%, #e29100 100%);
    text-transform: uppercase;
}

.no-items {
  margin: 20px 0 10px 0;
  text-align: center;
  color: #979595a8;
}
</style>