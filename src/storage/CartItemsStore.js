import Vue from "vue";

class CartItems {
  cartItems = [];

  getCartItemsList() {
    if (localStorage.getItem("cartItems") !== null) {
      let result = JSON.parse(localStorage.getItem("cartItems"));
      // console.log("result", result);
      // console.log("before carItems", this.cartItems);

      result.forEach((item, idx) => {
        Vue.set(this.cartItems, idx, item);
      });

      // Vue.set(this.cartItems, result);
      // console.log("after cartItems  ", this.cartItems);
    }
    return this.cartItems;
  }

  setCartItemsList() {
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  }

  addToCart(item) {
    let idx = this.cartItems.findIndex((i) => i.itemId === item.Id);
    if (idx !== -1) {
      this.cartItems[idx].qty += item.Amount;
    } else {
      this.cartItems.push({
        qty: item.Amount,
        itemId: item.Id,
        item: item,
      });
    }
    this.setCartItemsList();
  }

  removeItemFromCart(item) {
    let idx = this.cartItems.findIndex((i) => i.Id === item.Id);
    this.cartItems.splice(idx, 1);
    this.setCartItemsList();
  }
}

export default new CartItems();
