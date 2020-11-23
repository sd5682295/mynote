<template>
  <div>
  <b-button @click="reset_data">reset</b-button>
    <p>数据是</p>
    <div v-for="(book,index) in books">
      <p>{{book.bookname}}</p>
      <b-button @click="delete_book(index)">Button</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "book_delete_data",
    components: {

    },
    computed: {
      books:{get(){return this.$store.state.book_data}}
    },
    methods: {
      delete_book(index){
        this.$store.dispatch("book_add/root_book_data_delete", index)
      },
      reset_data(){
        this.$store.dispatch('book_add/data_reset')
      }
    }
  }
</script>

<style scoped>

</style>
