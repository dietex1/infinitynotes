<template>
<button class="btn" >
  <slot></slot>
</button>
</template>

<script>
export default {
name: "my-buttons"
}
</script>

<style scoped>

/*.btn{*/
/*  padding: 10px 15px;*/
/*  color: teal;*/
/*  border :1px solid teal;*/
/*}*/

.btn {
  align-self: flex-end;
  background-color: #fff;
  color: #1a73e8;
  padding: 10px 20px;
  border: 1px solid #1a73e8;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #1a73e8;
  color: #fff;
}

button:focus {
  outline: none;
}
</style>