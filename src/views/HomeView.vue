<script setup>
import { ref, onMounted } from 'vue'
import fetchData from '../utils/Contentful.js'
import RecommendPost from '../components/RecommendPost.vue'

// import { Layout } from 'ant-design-vue'
// const { Content, Footer } = Layout

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
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    title: 'แนะนำแผนประกัน',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    title: 'บริการหลังการขาย',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
      <div class="wrapper relative h-screen pt-14 flex-col bg-inherit">
        <div class="h-4/5 flex flex-col justify-center">
          <h1 class="text-4xl font-bold mb-4">{{ homepageData.title }}</h1>
          <div class="w-2/5 text-xl">{{ homepageData.description }}</div>
        </div>
        <div
          class="flex justify-around justify-center text-white w-full py-3 bg-[#bc103f] mb-8 rounded-full absolute bottom-0"
        >
          <div class="flex flex-col items-center justify-center" v-for="customer of customers">
            <p class="font-bold mb-1">{{ customer.amount }}</p>
            <p>{{ customer.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#f5f5f5] py-8">
      <div class="wrapper">
        <h2 class="text-3xl font-bold text-center">ตัวแทนประกันชีวิต AIA</h2>
        <div class="flex justify-around justify-center w-full h-50 py-3">
          <div class="flex flex-col items-center w-1/3 mx-1" v-for="step of steps">
            <div class="w-20 h-14 bg-white border border-black my-5"></div>
            <h3 class="text-2xl font-bold mb-1">{{ step.title }}</h3>
            <p class="text-xl text-wrap">
              {{ step.detail }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#bc103f] text-white py-8">
      <div class="wrapper">
        <h2 class="text-3xl font-bold text-center">ผลิตภัณท์ ประกันชีวิต AIA</h2>
        <div class="flex justify-between justify-center flex-wrap w-full py-3">
          <div class="flex flex-col items-center w-1/5 mx-1" v-for="product of products">
            <div class="w-40 h-40 bg-white my-5"></div>
            <h3 class="text-2xl mb-1">{{ product }}</h3>
          </div>
        </div>
      </div>
    </div>

    <RecommendPost />
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
