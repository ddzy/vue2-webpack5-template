<template>
  <div class="app-main-wrapper">
    <button class="btn" @click="handleIncrement">Click me</button>
    <p class="display">{{ count }}</p>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  public count: number = 0;

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