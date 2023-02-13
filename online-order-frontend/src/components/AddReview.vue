<template>
<h1>Add Review</h1>
  <div class="mb-3">
    <form>
      <label class="form-label"><b>Add your review here</b></label>
      <textarea id="review" class="form-control" v-model="review.review"></textarea><br/>
      <button v-on:click="create" type="button">Create</button>
    </form>
  </div>
    <div class="display">
    <h4>Reviews({{countReviews}})</h4>
    <div v-bind:key="review.name" v-for="review in currentReviews">
      <h5 class="card-text">{{review.review}}</h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddReview",

    data() {
      return {
        review: {
          name: this.$route.params.name,
          review: ''
        },
        currentReviews: (JSON.parse(localStorage.getItem("reviews")).filter((review) => review.name == this.$route.params.name)),
        otherReviews: (JSON.parse(localStorage.getItem("reviews")).filter((review) => review.name != this.$route.params.name))
      }
    },
    computed: {
      countReviews() {
        return this.currentReviews.length
      }
    },
    methods: {

      create() {
        console.log("hii")
        this.currentReviews.push(this.review)
        const allReviews = this.currentReviews.concat(this.otherReviews)
        localStorage.setItem("reviews",JSON.stringify(allReviews))
        this.review = {
          name: this.$route.params.name,
          review: ""
        }
      },
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