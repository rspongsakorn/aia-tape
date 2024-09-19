<script setup>
import { ref } from 'vue'

const posts = [
  {
    title: 'XXXXXXXXX XXXXXXX',
    description: 'xxxxxxxxxxxx xxxxxxxxxx xxxxxxxxx xxxxxxxxxxxx ',
  },
  {
    title: 'XXXXXXXXX XXXXXXX',
    description: 'xxxxxxxxxxx xxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx',
  },
  {
    title: 'XXXXXX XXXXXXXXXX',
    description: 'xxxxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxx',
  },
  {
    title: 'XXXXXXXXXX XXXXXX',
    description: 'xxxxxxxxxxxxxx xxxxxxxx xxxxxxxxxxxx xxxxxxxxxx ',
  },
  {
    title: 'XXXXX XXXXXXXXXXX',
    description: 'xxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxx',
  },
  {
    title: 'XXXXXXXXXX XXXXXX',
    description: 'xxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxx',
  },
]
</script>

<template>
  <main>
    <div class="bg-[#f5f5f5] py-8">
      <div class="dt:w-[1088px] tl:w-[608px] mb:w-[375px] mx-auto">
        <h2 class="dt:text-3xl tl:text-2xl mb:text-xl font-bold text-center">
          ข้อมูลข่าวสารและบทความ(ยอดนิยม)
        </h2>
        <div class="flex flex-wrap dt:justify-between justify-around w-full h-50 py-3">
          <div
            class="flex flex-col dt:w-[300px] tl:w-[250px] mb:w-[150px] mb-5 rounded-b-2xl shadow-[#a7a7a7] shadow-xl"
            v-for="post of posts"
          >
            <div
              class="w-full dt:h-[300px] tl:h-[250px] mb:h-[150px] bg-white border-2 border-[#ff0000]"
            ></div>
            <div class="p-5 mb:p-2 bg-white rounded-b-2xl">
              <h3 class="dt:text-2xl tl:text-xl mb:text-sm font-bold">{{ post.title }}</h3>
              <p class="dt:text-xl tl:text-lg mb:text-xs text-wrap">
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
/* @media (min-width: 1128px) {
  .wrapper {
    width: 1088px;
    margin: 0 auto;
  }
} */
</style>
