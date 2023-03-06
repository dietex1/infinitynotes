<template>

  <div>
    <div>COUNT Likes: <strong> {{ likes }}</strong> <button v-on:click="addLike">LIKE</button></div>
    <div>COUNT DisLikes: <strong> {{ dislikes }}</strong> <button v-on:click="addDislike">Dislike</button></div>

  </div>
</template>

<script>
export default {
  data() {
    return{
      likes: 0,
      dislikes: 0
    }
  },
  methods: {
    addLike(){
      this.likes +=1;
    },
    addDislike(){
      this.dislikes +=1;
    }
  }
}
</script>

<style>

</style>