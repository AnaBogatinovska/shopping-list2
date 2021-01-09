<template>
  <div class="del-dialog">
    <div class="box">
      <h4>Are you sure you want to delete this item:</h4>
      <div class="item">
        <span style="display:flex; align-items:center;"
          ><span>{{ item.Name }}</span></span
        >
        <span class="line"></span>
        <span class="cost">{{ item.Price }} DEN</span>
      </div>
      <div class="btn-handlers">
        <button class="cancel-btn" @click="$emit('cancel-delete')">
          Cancel
        </button>
        <button class="ok-btn" @click="$emit('delete-item')">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteItemDialog",
  props: ["item"],
};
</script>

<style scoped>
.del-dialog {
  position: fixed;
  background: rgba(0, 0, 0, 0.472);
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.del-dialog .box {
  background: #27273c;
  padding: 12px;
  border-radius: 3px;
  box-shadow: 0 0 5px -2px aliceblue;
  border-radius: 4px;
}
.cost {
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
.del-dialog .item {
  display: flex;
  justify-content: center;
  margin-top: 28px;
}
.line {
  margin: 0 16px;
  border-left: 1px solid #fff;
}
</style>