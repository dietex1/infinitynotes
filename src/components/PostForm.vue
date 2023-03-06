<template>
  <form @submit.prevent>
    <h4>Create a note.</h4>
<!--    v-bind:value="post.title"-->
<!--    @input="post.title = $event.target.value"-->
    <my-input v-model="post.title"
            type="text" placeholder="Title"/>
    <my-input v-model="post.body"
            type="text" placeholder="Description"/>
    <my-buttons  style="margin-top: 15px " @click="createPost" >Create</my-buttons>

  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
export default {
  components: {MyInput},
  data(){
    return{
      post:{
        title:'',
        dates:'',
        body:'',

      }
    }
  },
  methods:{
    createPost(){
      this.post.id= Date.now();
      // this.posts.push(newPost);
      this.$emit('create',this.post)
      this.post = {
        title:'',
        dates:(Date.now()),

        body:'',

      }
    }
  },
  // watch:{
  //   post:{
  //     handler(newVal){
  //       console.log(newVal)
  //     },
  //     deep: true
  //   }
  // }
}

</script>

<style scoped>

form{
  display: flex;
  flex-direction: column;
}



</style>