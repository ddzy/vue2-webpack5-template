<template>
  <div class="app-main-wrapper">
    <button class="btn" @click="handleIncrement">Click me</button>
    <p class="display">{{ count }}</p>
    <p class="display2">{{ inputValue }}</p>
    <input type="text" v-model="inputValue">
    <ul class="list">
      <li class="item">1</li>
      <li class="item">2</li>
      <li class="item">3</li>
      <li class="item">4</li>
    </ul>
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
  .list {
    display: flex;
    justify-content: flex-start;
    list-style-type: none;
    margin: 0;
    padding: 0;
    .item {

    }
  }
</style>