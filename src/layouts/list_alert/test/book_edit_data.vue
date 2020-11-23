<template>
  <div>
    <!-- <p>aaaaaaa</p> -->


    <b-button @click="reset_data">reset</b-button>
    <p>{{input_bookname}}</p>
    <p>数据是</p>
    <div v-for="(book,index) in books">
      <p>{{book.bookname}}</p>
     <b-form-group label="书名" label-for="wenti">
         <b-form-input v-model="input_bookname" id="wenti"></b-form-input>
       </b-form-group>
      <b-button @click="edit_book(index)">Button</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "book_edit_data",
    components: {

    },
    computed: {
      input_bookname: {
        get() {
          return this.$store.getters["book_add/input_bookname"]
        },
        set(v) {
          this.$store.commit("book_add/input_bookname_update", v)
        }
      },
      books:{get(){return this.$store.state.book_data}}
    },
    methods: {
      edit_book(index){
        this.$store.dispatch("book_add/root_book_data_update", index)
      },
      reset_data(){
        this.$store.dispatch('book_add/data_reset')
      }
    }
  }
</script>

<style scoped>

</style>
