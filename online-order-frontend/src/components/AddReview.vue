<template>
<h1>Add Review</h1>
  <div class="mb-3">
    <form>
      <label class="form-label"><b>Review</b></label>
      <input type="text" id="review" class="form-control" v-model="review">
      <button v-on:click="create" type="button">Create</button>
    </form>
  </div>
  <p>Reviews: {{this.count}}</p>
    <!-- <p class="card-text">{{this.review}}</p> -->
    <!-- <p v-for="review in reviews" :key="review"> </p> -->
      <li class="card-text" v-for="review in reviews" :key="review">{{review.review}}</li>
    <!-- </p> -->

<!-- <p class="card-text" v-for="review in reviews" :key="review">{{review}}</p> -->
<!-- <li v-for="review in displayReview" :key="review">{{review}}</li> -->
</template>

<script>
  export default {
    name: "AddReview",

    data() {
      return {
        review: '',
        reviews: [],
        count: ''
      }
    },

    methods: {
      // displayReview() {
      //   this.products = JSON.parse(localStorage.getItem("reviews"))
      // },

      create() {
        console.log("hii")
        let existing_reviews = JSON.parse(localStorage.getItem("reviews"))
        // let parsed_data = JSON.parse(existing_reviews)
        let new_review = {review: this.review}
        existing_reviews.push(new_review)
        localStorage.setItem("reviews",JSON.stringify(existing_reviews))
        console.log(existing_reviews)

        this.review = ""
      },
      getCount(){
        this.count = JSON.parse(localStorage.getItem("reviews")).length
      },
      displayReview() {
        this.reviews = JSON.parse(localStorage.getItem("reviews"))
        // this.review = JSON.parse(localStorage.getItem("reviews"))
        // return this.review

      }
    },
    mounted() {
      this.getCount();
      this.displayReview();
    }
  }
</script>