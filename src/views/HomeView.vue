<script setup>
import { ref, onMounted } from 'vue'
import fetchData from '../utils/Contentful.js'

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
</script>

<template>
  <main>
    <div class="header">
      <h1>{{ homepageData.title }}</h1>
      <div class="header-des">{{ homepageData.description }}</div>
      <div class="bg withFullWidth"></div>
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 1128px) {
  .header {
    /* position: relative; */
    padding-top: 54px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* place-items: center; */
  }

  .header-des {
    width: 340px;
    font-size: 16px;
  }

  .bg {
    position: absolute;
    top: 0;
    height: 100%;
    background-color: #e8c79b;
  }
}
</style>
