<template>
  <div class="mb-3">
    <form>
      <label class="form-label"><b>Review</b></label>
      <input type="text" id="review" class="form-control" v-model="review">
      <button v-on:click="create" type="submit">Create</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "AddReview",

    data() {
      return {
        review: '',
        reviews: []
      }
    },

    methods: {
      create: function() {
        const existing_reviews = localStorage.getItem("reviews")
        let parsed_data = JSON.parse(existing_reviews)
        let new_review = {review: this.review}
        parsed_data.push(new_review)
        localStorage.setItem("reviews",JSON.stringify(parsed_data))

        this.review = ""
      }
    },
  }
</script>