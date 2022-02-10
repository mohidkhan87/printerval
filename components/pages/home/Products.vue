<template>
  <div class="product_effect rounded transition-all duration-300 ease-linear cursor-pointer mx-1 mt-5 overflow-hidden">
    <div class="overflow-hidden">
      <img :src="product.image" alt="">
    </div>
    <div class="p-2">
      <div class="flex w-full h-5  overflow-hidden">
        <h2 class="text-sm font-medium">{{ product.title }}</h2>
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

<style lang="scss" scoped>
.product_effect {
  img {
     transition: all .3s ease-in-out;
  }
  &:hover {
    box-shadow: 0 0 1px 3px #aa97d6;
     img {
      transform: scale(1.5)
    }
  }
}
</style>