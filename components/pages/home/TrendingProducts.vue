<template>
  <div class="2xl:w-10/12 w-full mx-auto">
    <h1 class="text-gray-700 sm:text-2xl text-xl font-medium mt-5 mb-2">
      Trending Products
    </h1>
    <div v-if="isLoaded" class="relative mb-5">
      <VueSlickCarousel ref="trendingProducts" v-bind="productsOptions">
        <div v-for="(product, idx) in trendingProducts" :key="idx" class="mt-5">
          <Products :product="product" :is-trending="true" />
        </div>
      </VueSlickCarousel>
      <button
        class="absolute border flex justify-center items-center top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md -mt-4"
        @click="$refs.trendingProducts.next()"
      >
        <div class="flex transform -rotate-90">
          <span class="h-px w-2.5 bg-black transform rotate-45 -mr-px"></span>
          <span class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"></span>
        </div>
      </button>
      <button
        class="absolute border flex justify-center items-center top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white -mt-4"
        @click="$refs.trendingProducts.prev()"
      >
        <div class="flex transform rotate-90">
          <span class="h-px w-2.5 bg-black transform rotate-45 -mr-px"></span>
          <span class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"></span>
        </div>
      </button>
    </div>
    <div v-else class="grid grid-flow-col grid-rows-2 gap-3 overflow-x-scroll scrollbar-none">
      <div v-for="i in 20" :key="i" class="trending-product-skeleton bg-gray-100 rounded"></div>
    </div>
  </div>
</template>

<script>
import Products from '@/components/pages/home/Products.vue'

export default {
  components: {
    Products,
  },
  data: () => ({
    // Slider options
    productsOptions: {
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: false,
      rows: 2,
      infinite: false,
      swipe: true,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    },
    // Component data
    trendingProducts: [
      {
        id: 1,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
      },
      {
        id: 2,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-central/files/us/product/24-11-2021/619dbe4962acc-1637727817-619dbe4983af7.jpg',
      },
      {
        id: 3,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
      },
      {
        id: 4,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-central/files/us/product/24-11-2021/619dbe4962acc-1637727817-619dbe4983af7.jpg',
      },
      {
        id: 5,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
      },
      {
        id: 6,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-central/files/us/product/24-11-2021/619dbe4962acc-1637727817-619dbe4983af7.jpg',
      },
      {
        id: 7,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
      },
      {
        id: 8,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
      },
      {
        id: 9,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
      },
      {
        id: 10,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
      },
      {
        id: 11,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
      },
      {
        id: 12,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
      },
      {
        id: 13,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
      },
      {
        id: 14,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
      },
      {
        id: 15,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
      },
      {
        id: 16,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image:
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
      },
    ],
    isLoaded: false
  }),
  mounted(){
    this.isLoaded = true
  }
}
</script>

<style lang="scss">
.trending-product-skeleton {
  position: relative;
  height: 240px;
  width: 230px;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 30%;
    background: linear-gradient(to right, #F3F4F6, rgb(250, 253, 255), #F3F4F6 );
    animation: gradient .9s infinite;

  }
}
@keyframes gradient {
  0%{
    transform: translateX(-20%)
  }
  100%{
    transform: translateX(330%)
  }
}

// For hide scrollbar
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}


@media screen and (max-width: 1279px) {
  .trending-product-skeleton {
    height: 15vw;
    width: 15vw;
  }
}
@media screen and (max-width: 1023px) {
  .trending-product-skeleton {
    height: 23vw;
    width: 23vw;
  }
}
@media screen and (max-width: 640px) {
  .trending-product-skeleton {
    height: 40vw;
    width: 40vw;
  }
  
}
</style>
