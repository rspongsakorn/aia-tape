<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
      <div class="grid-item">7</div>
      <div class="grid-item">8</div>
      <div class="grid-item9">9</div>
      <div class="grid-item">10</div>
      <div class="grid-item">11</div>
      <!-- <div class="grid-item">8</div> -->
    </div>
  </div>
</template>

<style>
@media (min-width: 1128px) {
  .about {
    padding-top: 54px;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    /* grid-template-rows: auto auto auto auto; */
    gap: 5px;
    background-color: #2196f3;
    padding: 10px;
  }
  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }

  .grid-item9 {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
    grid-column: 3;
    grid-row: 3 / span 2;
  }
}
</style>
