<template>
  <div class="m-1">
    <img :src="product.image" alt="">
    <div class="p-2">
      <div class="flex w-full h-5  overflow-hidden">
        <h2 class="text-sm font-medium w-full">{{ product.title }}</h2>
        <span class="mr-1">...</span>
      </div>
      <p class="font-light text-sm">By {{ product.brand }}</p>
      <div v-if="product.discount" class="flex items-center mt-3">
       <p  class="text-red-700">$ {{ product.discount }}</p> 
       <span class="line-through font-light text-sm ml-3">$ {{ product.price }}</span>
      </div>
      <p v-else class="text-red-700 mt-3">$ {{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>