<script setup>
import { ref, onMounted } from 'vue'
import fetchData from '../utils/Contentful.js'
import RecommendPost from '../components/RecommendPost.vue'

const homepageData = ref({})

onMounted(async () => {
  const query = `{
    homepageCollection(limit: 1) {
      items {
        sys {
          id
        }
        title
        description
      }
    }
  }`

  const response = await fetchData(query)
  homepageData.value = response.data.homepageCollection.items[0]
})

const customers = [
  {
    title: 'จำนวนผู้ถือกรมธรรม์',
    amount: 'XXX',
  },
  {
    title: 'จำนวนครอบครัวที่ดูแล',
    amount: 'XXX',
  },
  {
    title: 'จำนวนเงินเอาประกันภัยรวม',
    amount: 'XXX',
  },
]

const steps = [
  {
    title: 'ให้คำปรึกษา ฟรี',
    detail: 'xxxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxx xxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx',
  },
  {
    title: 'แนะนำแผนประกัน',
    detail: 'xxxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxx xxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx',
  },
  {
    title: 'บริการหลังการขาย',
    detail: 'xxxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxx xxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx',
  },
]

const products = [
  'ประกันสุขภาพ',
  'ประกันโรคร้ายแรง',
  'ประกันสุขภาพ',
  'ประกันโรคร้ายแรง',
  'ประกันสุขภาพ',
  'ประกันโรคร้ายแรง',
  'ประกันสุขภาพ',
  'ประกันโรคร้ายแรง',
]
</script>

<template>
  <main>
    <div class="bg-[#e8c79b]">
      <div
        class="dt:w-[1088px] tl:w-[608px] mb:mx-[24px] m-auto relative h-screen pt-14 flex-col bg-inherit"
      >
        <div class="h-4/5 flex flex-col justify-center">
          <h1 class="text-4xl font-bold mb-4">{{ homepageData.title }}</h1>
          <div class="dt:w-2/5 tl:w-1/2 dt:text-xl tl:text-sm">{{ homepageData.description }}</div>
        </div>
        <div
          class="flex justify-around text-white w-full py-3 bg-[#bc103f] mb-8 rounded-full absolute bottom-0"
        >
          <div class="flex flex-col items-center justify-center" v-for="customer of customers">
            <p class="font-bold dt:text-xl tl:text-lg mb:text-xs mb-1">{{ customer.amount }}</p>
            <p class="dt:text-xl tl:text-lg mb:text-xs mb-0">{{ customer.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#f5f5f5] py-8">
      <div class="dt:w-[1088px] tl:w-[608px] mb:mx-[24px] m-auto">
        <h2 class="dt:text-3xl tl:text-2xl mb:text-xl font-bold text-center">
          ตัวแทนประกันชีวิต AIA
        </h2>
        <div
          class="flex mb:flex-col mb:items-center dt:justify-around tl:justify-between w-full py-3"
        >
          <div
            class="flex flex-col items-center mb:text-center w-[30%] mb:w-[200px]"
            v-for="step of steps"
          >
            <div class="w-20 h-14 bg-white border border-black my-5"></div>
            <h3 class="dt:text-2xl tl:text-xl mb:text-lg font-bold mb-1">{{ step.title }}</h3>
            <p class="dt:text-xl text-wrap">
              {{ step.detail }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#bc103f] text-white py-8">
      <div class="dt:w-[1088px] tl:w-[608px] mb:w-[375px] m-auto">
        <h2 class="dt:text-3xl tl:text-2xl mb:text-xl font-bold text-center">
          ผลิตภัณท์ ประกันชีวิต AIA
        </h2>
        <div class="flex justify-between flex-wrap w-full py-3">
          <div class="flex flex-col items-center w-1/4 mb:w-1/2" v-for="product of products">
            <div class="dt:w-[200px] dt:h-[200px] w-[100px] h-[100px] bg-white my-5"></div>
            <h3 class="dt:text-2xl tl:text-base mb-1">{{ product }}</h3>
          </div>
        </div>
      </div>
    </div>

    <RecommendPost />
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
