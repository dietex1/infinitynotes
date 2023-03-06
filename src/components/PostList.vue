<template>
  <div v-if="posts.length > 0">
<!--    <h1>Feed</h1>-->
    <transition-group name="p-list">
    <post-item   v-for="post in posts"
                 :post="post"
                 :key="post.id"
                 @remove="$emit('remove',post)"

    />
    </transition-group>
  </div>
  <div v-else id="emp">
    <h1 >EMPTY</h1>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {PostItem},
  props:{
    posts:{
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

#emp{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: -30px;
  color:red;
   margin-top: 100px;

}


.p-list-item{
  display: inline-block;
  margin-right: 10px;
}

.p-list-enter-active,
.p-list-leave-active{
  transition: all 0.4s ease;
}

.p-list-enter-form,
.p-list-leave-to{
  opacity: 0;
  transform: translatex(130px);
}

.p-list-move {
  transition: transform 0.4s ease;
}


</style>