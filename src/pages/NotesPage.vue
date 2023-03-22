<template>
  <div class="navbar">
    <h1 style=" padding-top:15px ; color: #0d47a1; display: flex;
  flex-direction: column;
  align-items: center">Notes</h1>

    <form  class="navbar-right" @submit.prevent="ret" >

          <my-buttons >Logout</my-buttons>


    </form>
    <div>
    <my-input
        v-model="searchNote"
        placeholder="Search..."
    />
    </div>
    <div class="app_btns">
      <my-buttons @click="showDialog"
      >Add Note</my-buttons>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
  </div>
  <div style="margin-top: 220px">
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"/>
    </my-dialog>

    <post-list
        :posts="sortedAndSearched"
        @remove="removePost"
        v-if="!isPostsLoading"
    />

<!--    <div ref="observer" class="observer"></div>-->
    <div v-intersection="loadMorePosts" class="observer"></div>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import MyButtons from "@/components/UI/MyButtons";
import axios from 'axios';
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";

export default {
  components: {MyInput, MySelect, MyButtons, MyDialog, PostList, PostForm},
  data() {
    return{
      posts:[],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchNote: '',
      page: 1,
      limit: 10,
      totalPages:0,
      sortOptions:[
        {value: 'title' , name: 'By name'},
        {value: 'dates' , name: 'By date'},
        {value: 'body' , name: 'By description'},

      ]
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post);
      this.dialogVisible = false;
    },
    ret(){
      window.location = "/notes";
    },

    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id )
    },
    showDialog(){
      this.dialogVisible = true;
    },
    // changePage(pageNumb){
    //   this.page=pageNumb;
    //   this.fetchPost()
    // },
    async fetchPost(){
      try{
        this.isPostsLoading=true;
        setTimeout( async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params:{
              _page: this.page,
              _limit: this.limit
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
          this.posts = response.data;
          this.isPostsLoading = false;

        },1)
      } catch(e){
        alert('ERROR')
      }
      finally {
      }
    },
    async loadMorePosts(){
      try{
        this.page +=1;
        setTimeout( async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params:{
              _page: this.page,
              _limit: this.limit
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
          this.posts = [...this.posts, ...response.data];
        })
      } catch(e){
        alert('ERROR')
      }

    },

  },
  mounted(){
    this.fetchPost();
    console.log(this.$refs.observer);
    //
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    //
    // const callback = (entries, observer) => {
    //   if(entries[0].isIntersecting && this.page < this.totalPages){
    //     this.loadMorePosts()
    //   }
    // };
    // const observer = new IntersectionObserver(callback,options);
    // observer.observe(this.$refs.observer);
  },
  computed:{
    sortedPosts(){
      return [...this.posts].sort(( post1, post2 ) =>
          post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearched () {
      return this.sortedPosts.filter( post => post.title.toLowerCase().includes(this.searchNote.toLowerCase()))
    }
  },
  watch: {
    // page(){
    //   this.fetchPost()
    // }

  }
}
</script>

<style scoped>

form{
  display: flex;
  flex-direction: column;
}

.page_wrapper {
  display: flex;
  margin-top: 15px;
}

.page{
  border : 1px solid black;
  padding: 5px 8px;
}

.current-page{
  background-color: #b1b1b1;
  border: 1px solid #545454;
  color: #f8f7f7;
}

/*#load{*/
/*  display: flex;*/

/*  border: 16px solid #efefef;*/
/*  border-top: 16px solid #3498db;*/
/*  border-radius: 50%;*/
/*  width: 80px;*/
/*  height: 80px;*/
/*  animation: spin 2s linear infinite;*/
/*  margin-left: 47.5%;*/
/*  margin-top: 30px;*/

/*}*/

/*@keyframes spin {*/
/*  0% { transform: rotate(0deg); }*/
/*  100% { transform: rotate(360deg); }*/

/*}*/

.app_btns{
  display: flex;
  justify-content: space-between;
  margin: 15px 20px;

}

.observer{

}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  /*justify-content: space-between;*/
  /*align-items: center;*/

  background-color: #f3f3f3;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.navbar h1 {
  margin-left: 20px;
}

.navbar-right {
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 20px;
}

</style>