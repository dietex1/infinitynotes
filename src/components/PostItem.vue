<template>
  <div class="post">
    <div>
<!--      <div>{{ post.id }} likes = {{ $storeVuex.state.likes }}</div>-->
      <div style="margin-bottom: 5px" ><strong>Title: </strong> {{ post.title }}</div>
      <div style="margin-bottom: 5px" ><strong>Description: </strong> {{ post.body }}</div>
    </div>
    <div class="post_btns">
      <my-buttons @click="$emit('remove', post)">Delete</my-buttons>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    post:{
      type:Object,
      required:true,
    }
  }
}
</script>

<style scoped>
.post{
  padding: 15px;
  border: 2px solid #acc7ec;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>