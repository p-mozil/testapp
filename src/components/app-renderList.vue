<template>
  <div class="app-render-list">
    <div class="main">
      <div class="result">
        <p
          v-show="!error.isError"
          :class="styledList(step, id)"
          v-for="(step, id) in steps"
          :key="id"
        >
          {{ step }}
        </p>
        <p class="error_message" v-show="error.isError">{{ error.errorMsg }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import getApiKey from "../assets/api/api.js";

export default {
  name: "app-renderList",
  props: {
    ingredients: String,
  },
  data() {
    return {
      response: null,
      prompt: "",
      steps: null,
      error: {
        isError: false,
        errorMsg: "",
      },
    };
  },
  methods: {
    styledList(step, id) {
      return step != "Ingredients:" && id == 0
        ? {
            dish_name: true,
            collored_line: false,
            ing_dir: false,
          }
        : step == "Ingredients:"
        ? {
            dish_name: false,
            collored_line: false,
            ing_dir: true,
            ing: true,
          }
        : step == "Directions:" || step == "Instructions:"
        ? {
            dish_name: false,
            collored_line: false,
            ing_dir: true,
            dir: true,
          }
        : !(id % 2)
        ? {
            dish_name: false,
            collored_line: true,
            ing_dir: false,
          }
        : "";
    },
    start() {
      this.dataRequest(this.prompt);
    },

    async dataRequest(prompt) {
      try {
        this.$emit("isLoadingState", true);
        if (!this.ingredients) {
          this.error.isError = true;
          this.error.errorMsg = "Please provide at least one ingredient.";
          this.$emit("errorOcured");
          this.$emit("isLoadingState", false);
        } else {
          this.error.isError = false;
          const key = await getApiKey();
          const response = await fetch(
            `https://api.openai.com/v1/completions`,
            {
              body: JSON.stringify({
                model: "text-davinci-002",
                prompt: prompt,
                temperature: 0.5,
                max_tokens: 300,
              }),
              method: "POST",
              headers: {
                "content-type": "application/json",
                Authorization: `Bearer  ${key}`,
              },
            }
          );
          this.response = await response.json();
        }
      } catch {
        this.error.isError = true;
        this.error.errorMsg = "Error fetching dishes. Please try again later.";
        this.$emit("isLoadingState", false);
      }
    },
  },
  watch: {
    ingredients() {
      this.prompt = `Dish recipe using only ${this.ingredients}.Replace Fahrenheit temperature with Celsius. Also give ingredients and directions`;
    },
    response() {
      let prevResponse = this.steps;
      this.steps = this.response.choices[0].text
        .split(/\n/)
        .filter((el, index, arr) => {
          return (
            el.charAt(0) != "," &&
            el != "" &&
            arr[0].charAt(0).toLowerCase() !== el.charAt(0)
          );
        });
        if (prevResponse === this.steps) {
        this.dataRequest(prompt);
      }
      this.$emit("isLoadingState", false);
    },
    steps() {
      this.$emit("stepsChanged", this.steps);
    },
  },
};
</script>
