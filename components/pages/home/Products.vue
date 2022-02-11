<template>
  <div
    :class="!isSearching && 'product_effect rounded'"
    class="group transition-all duration-300 ease-linear cursor-pointer mx-1 overflow-hidden"
  >
    <div class="overflow-hidden">
      <img :src="product.image" alt="" />
    </div>
    <div class="p-2">
      <div class="flex w-full h-5 overflow-hidden">
        <h2
          :class="isSearching && 'group-hover:text-error'"
          class="text-sm font-medium transition-all duration-300 ease-linear"
        >
          {{ product.title }}
        </h2>
        <span :class="isSearching && 'group-hover:text-error'" class="mr-1"
          >...</span
        >
      </div>
      <p v-if="!isSearching" class="font-light text-sm">
        By {{ product.brand }}
      </p>
      <div
        v-if="product.discount"
        :class="isSearching ? 'mt-px' : 'mt-3'"
        class="flex items-center"
      >
        <p class="text-red-700">$ {{ product.discount }}</p>
        <span class="line-through font-light text-sm ml-3"
          >$ {{ product.price }}</span
        >
      </div>
      <p v-else :class="isSearching ? 'mt-px' : 'mt-3'" class="text-red-700">
        $ {{ product.price }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
    isSearching: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.product_effect {
  img {
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    box-shadow: 0 0 1px 3px #aa97d6;
    img {
      transform: scale(1.5);
    }
  }
}
</style>
