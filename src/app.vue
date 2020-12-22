<template>
  <div class="app-main-wrapper">
    <button class="btn" @click="handleIncrement">Click me</button>
    <p class="display">{{ count }}</p>
    <p class="display2">{{ inputValue }}</p>
    <input type="text" v-model="inputValue">
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  public count: number = 0;
  public inputValue: string = '';

  handleIncrement() {
    this.count++;
  }
}
</script>

<style scoped lang="scss">
  .btn {
    border: none;
    outline: none;
    background-color: #1890ff;
  }
</style>