<template>
  <div class="app">
    <div class="header">
      {{ text }}
    </div>
    <div class="inputs">
      <input
        @keyup.enter="getDishes($event)"
        type="text"
        placeholder="Chicken, rice"
        class="ingredientsField"
        v-model="inputField"
      />
      <input
        type="button"
        :value="btnText"
        @click="getDishes($event)"
        class="findButton"
      />
    </div>
    <img
      v-show="isLoading"
      src="../../public/img/loading_pizza.gif"
      class="loadingAnimation"
    />
    <appRenderList
      v-show="!isLoading"
      ref="child"
      v-bind:ingredients="inputField"
      v-bind:isLoading="isLoading"
      @stepsChanged="(n) => (n ? (btnText = 'Else') : 'Yummy!')"
      @errorOcured="btnText = 'Yummy!'"
      @isLoadingState="(state) => (isLoading = state)"
    ></appRenderList>
  </div>
</template>

<script>
import appRenderList from "./app-renderList.vue";

export default {
  name: "plate-pal-app",
  components: { appRenderList },
  data() {
    return {
      inputField: "",

      text: "Welcome to PlatePal app. Here you can browse through a wide variety of recipes from different cuisines and find inspiration for your next meal.",
      btnText: "Yummy!",
      isLoading: false,
    };
  },
  methods: {
    getDishes($event) {
      return this.$refs.child ? this.$refs.child.start($event) : "";
    },
  },
};
</script>

<style>
.app {
  min-height: 100vh;
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 0.7) 0%,
    rgba(245, 251, 167, 0.7) 0%,
    rgba(252, 239, 186, 0.7) 100%
  );
  padding: 10px 10px 10px;
}
.header {
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 30px 10px;
  font-weight: bold;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../public/img/header.jpg");
  font-size: 18px;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  color: rgb(255, 205, 130);
  letter-spacing: 1.3px;
  line-height: 24px;
  text-align: center;
  margin: 2px 1px 10px 1px;
}

.loadingAnimation {
  display: block;
  margin: 20vh auto;
  width: 35%;
}

.app {
  margin: 0 auto;
  max-width: 550px;
  min-width: 30px;
  border-radius: 5px;
}

.inputs {
  padding: 0 10px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  position: relative;
}

.ingredientsField {
  flex-basis: 100px;
  flex-grow: 1;
  padding: 12px;
  width: 0;
  font-size: 18px;
  border: 1px solid #75c800;
  border-radius: 5px;
  outline: none;
}
.ingredientsField:focus {
  border: 1px solid #ff9000;
}
.ingredientsField::placeholder {
  font-weight: bold;
  letter-spacing: 0.5px;
  opacity: 0.5;
  color: rgb(255, 166, 0);
}

.findButton {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  flex-basis: 100px;
  background-image: linear-gradient(
    to right,
    #ff8008 0%,
    #ffc837 51%,
    #ff8008 100%
  );
  transition: 0.5s;
  box-shadow: 0 0 20px #eee;
  background-size: 200% auto;
  color: rgb(251, 253, 217);
}

.findButton:hover {
  background-position: right center;
}

.error_message {
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #ff1e00dc;
}

.result {
  margin-top: 10px;
}

p {
  margin: 0 3px;
  padding: 7px;
  border-radius: 3px;
  font-weight: 600;
}

.ing_dir {
  position: relative;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    42deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 128, 8, 1) 0%,
    rgba(241, 219, 9, 1) 100%
  );
  padding: 15px 7px;
  margin-bottom: 8px;
  margin-top: 8px;
  font-weight: 800;
}

.ing::before {
  content: url(../../public/img/ingredients_icon.png);
  zoom: 0.07;
  position: absolute;
  right: 150px;
  top: 110px;
}

.dir::before {
  content: url(../../public/img/directions_icon.png);
  zoom: 0.07;
  position: absolute;
  right: 150px;
  top: 110px;
}

.dish_name {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    201deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(192, 142, 49, 1) 0%,
    rgba(114, 192, 49, 1) 100%
  );
  padding: 20px 7px;
  text-align: center;
}

p.collored_line {
  background-color: #ff91003a;
}

@media screen and (max-width: 460px) {
  .ingredientsField::placeholder {
    font-size: 13px;
  }

  .app {
    padding: 0 0 15px 0;
  }
}
</style>
