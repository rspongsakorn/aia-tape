<script setup>
import { ref } from 'vue'

const posts = [
  {
    title: 'XXXXXXXXXXXXXXXX',
    description: 'xxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxx ',
  },
  {
    title: 'XXXXXXXXXXXXXXXX',
    description: 'xxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    title: 'XXXXXXXXXXXXXXXX',
    description: 'xxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxx',
  },
  {
    title: 'XXXXXXXXXXXXXXXX',
    description: 'xxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxx ',
  },
  {
    title: 'XXXXXXXXXXXXXXXX',
    description: 'xxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    title: 'XXXXXXXXXXXXXXXX',
    description: 'xxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxx',
  },
]
</script>

<template>
  <main>
    <div class="bg-[#f5f5f5] py-8">
      <div class="wrapper">
        <h2 class="text-3xl font-bold text-center">ข้อมูลข่าวสารและบทความ(ยอดนิยม)</h2>
        <div class="flex flex-wrap justify-between justify-center w-full h-50 py-3">
          <div
            class="flex flex-col w-72 m-5 rounded-b-2xl shadow-[#a7a7a7] shadow-xl"
            v-for="post of posts"
          >
            <div class="w-full h-72 bg-white border-2 border-[#ff0000]"></div>
            <div class="p-5 bg-white rounded-b-2xl">
              <h3 class="text-2xl font-bold">{{ post.title }}</h3>
              <p class="text-xl text-wrap">
                {{ post.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 1128px) {
  .wrapper {
    width: 1088px;
    margin: 0 auto;
  }
}
</style>
