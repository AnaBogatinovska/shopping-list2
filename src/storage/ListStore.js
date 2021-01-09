class Items {
  items = [];

  getListItems() {
    if (localStorage.getItem("items") !== null) {
      this.items = JSON.parse(localStorage.getItem("items"));
    }
    return this.items;
  }

  setListItems() {
    localStorage.setItem("items", JSON.stringify(this.items));
  }

  pushItem(item) {
      // set Id to item
      let result = [];
      this.items.forEach(i => {
          result.push(i.Id)
      })

      let biggestId = 0

      for(let i= 0; i<= result.length; i++) {
          if(result[i] > biggestId) {
              biggestId = result[i]
          }
      }

      item.Id = biggestId + 1;

      // push item to list
    this.items.push(item);
    this.setListItems();
  }

  removeItem(item) {
     let idx =  this.items.findIndex(i => i.Id === item.Id)
    this.items.splice(idx, 1)
    this.setListItems()
  }
}

export default new Items();
