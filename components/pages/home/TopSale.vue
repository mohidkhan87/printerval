<template>
  <div class="2xl:w-10/12 w-full mx-auto">
    <h1 class="text-gray-700 sm:text-2xl text-xl font-medium mt-5 mb-2">
      Top Sale OFF
    </h1>
    <div class="w-full overflow-x-scroll scrollbar-none">
      <div class="sale-products-box flex items-center mt-4">
        <div
          v-for="(product, index) in topSale"
          :key="index"
          :class="index === viewTopSale && 'selected-sale'"
          class="sale-products px-5 py-2 text-gray-700 font-medium cursor-pointer"
          @click="viewTopSale = index"
        >
          {{ product.name }}
        </div>
      </div>
    </div>
    <div class="relative mb-5">
      <div v-for="(sale, index) in topSale" :key="index">
        <div v-if="index === viewTopSale">
          <VueSlickCarousel :ref="viewTopSale" v-bind="productsOptions">
            <div
              v-for="(product, ind) in sale.products"
              :key="ind"
              class="mt-5"
            >
              <Products :product="product" />
            </div>
          </VueSlickCarousel>
          <button
            class="absolute border flex justify-center items-center top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md -mb-2"
            @click="$refs[viewTopSale][0].next()"
          >
            <div class="flex transform -rotate-90">
              <span
                class="h-px w-2.5 bg-black transform rotate-45 -mr-px"
              ></span>
              <span
                class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"
              ></span>
            </div>
          </button>
          <button
            class="absolute border flex justify-center items-center top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white -mb-2"
            @click="$refs[viewTopSale][0].prev()"
          >
            <div class="flex transform rotate-90">
              <span
                class="h-px w-2.5 bg-black transform rotate-45 -mr-px"
              ></span>
              <span
                class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"
              ></span>
            </div>
          </button>
        </div>
      </div>
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
    // Slider Options
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
    // Component Data
    topSale: [
      {
        id: 1,
        name: 'Discount Today',
        products: [
          {
            id: 1,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 2,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 3,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 4,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 5,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 6,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 7,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 8,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 9,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 10,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 11,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 12,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
        ],
      },
      {
        id: 2,
        name: 'T-Shirts',
        products: [
          {
            id: 1,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 2,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 3,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 4,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 5,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 6,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 7,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 8,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 9,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 10,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 11,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 12,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
        ],
      },
      {
        id: 3,
        name: 'Hoodies',
        products: [
          {
            id: 1,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 2,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 3,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 4,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 5,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 6,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 7,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 8,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 9,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 10,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 11,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
          {
            id: 12,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
          },
        ],
      },
      {
        id: 4,
        name: 'Caps',
        products: [
          {
            id: 1,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 2,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 3,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 4,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 5,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 6,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 7,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 8,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 9,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 10,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 11,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
          {
            id: 12,
            title: '50th Anniversary Walt Disney World T-Shirts',
            brand: 'James Round',
            price: '20.85',
            discount: '18.25',
            image:
              'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp',
          },
        ],
      },
    ],
    viewTopSale: 0,
  }),
}
</script>

<style lang="scss" scoped>
.sale-products-box {
  width: max-content;
  .sale-products {
    border-bottom: 3px solid rgb(240, 240, 240);
    transition: all 0.3s ease-in-out;
    &:hover {
      border-bottom: 3px solid rgb(211, 211, 211);
    }
  }
  .selected-sale {
    border-bottom: 3px solid #ff7300;
    z-index: 10;
    &:hover {
      border-bottom: 3px solid #ff7300;
    }
  }
}

</style>
