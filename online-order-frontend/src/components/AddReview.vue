<template>
<h1>Add Review</h1>
  <div class="mb-3">
    <form>
      <label class="form-label"><b>Add your review here</b></label>
      <textarea id="review" class="form-control" v-model="review"></textarea><br/>
      <button v-on:click="create" type="button">Create</button>
    </form>
  </div>
    <div class="display">
    <h4>Reviews({{count}})</h4>
    <div v-bind:key="review.name" v-for="review in reviews">
      <h5 class="card-text">{{review.review}}</h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddReview",

    data() {
      return {
        name: this.$route.params.name,
        review: '',
        reviews: [],
        count: '',
        product: {}
      }
    },

    methods: {
      loadReviews() {
        const reviews = JSON.parse(localStorage.getItem("reviews"));
        this.reviews = reviews.filter((review) => review.name == this.name)
        this.count = this.reviews.length
    },

      create() {
        console.log("hii")
        let existing_reviews = JSON.parse(localStorage.getItem("reviews"))
        let new_review = {review: this.review, name: this.name}
        existing_reviews.push(new_review)
        localStorage.setItem("reviews",JSON.stringify(existing_reviews))
        console.log(existing_reviews)

        this.review = ""
      },
    },
    mounted() {
      this.loadReviews();
    }
  }
</script>

<style>
h1 {
  text-align: left;
}
.mb-3 {
  text-align: left;
}
.form-control {
  width:50%;
  height: 60%;
}
.display {
  text-align: left;
}
button {
    padding: 10px;
    border: 2px;
    background-color: #5F9EA0;
    color: white;
  }
  button:hover {
    background-color: #808080;
  }
</style>