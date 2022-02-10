<template>
  <div>
    <Header />
    <main>
      <!-- Poster -->
      <div class="container mx-auto px-4 2xl:px-10 my-4">
        <div class="poster bg-poster bg-cover bg-center"></div>
        <!-- <img src="https://uscdn.printerval.com/unsafe/0x840/storage.googleapis.com/printerval-us/2022/01/10/hpny-1444x420-usa-37c1e4d28910282da9d29e0491eba755.jpg" alt="poster"> -->
      </div>

      <!-- Categories and Products -->
      <div class="container mx-auto px-4 2xl:px-10">
        <!-- Categories -->
        <div
          class="grid md:grid-cols-3 grid-cols-2 md:gap-3.5 gap-2 2xl:w-10/12 w-full my-4 mx-auto"
        >
          <div v-for="(category, index) in categories" :key="index">
            <div
              class="categories relative rounded overflow-hidden cursor-pointer"
            >
              <img :src="category.image" alt="category" class="w-full" />
              <button
                class="absolute lg:block hidden top-3/4 left-1/2 transform -translate-x-1/2 rounded-full bg-white text-gray-800 shadow-lg border py-2 px-6"
              >
                {{ category.name }}
              </button>
            </div>
            <p class="lg:hidden block text-center sm:text-base text-sm my-2">
              {{ category.name }}
            </p>
          </div>
        </div>

        <!-- Trending Topics -->
        <div class="2xl:w-10/12 w-full mx-auto">
          <h1 class="text-gray-600 sm:text-2xl text-xl font-medium my-5">
            Trending Topics
          </h1>
          <div class="relative">
            <VueSlickCarousel ref="carousel1" v-bind="topicOptions">
              <div v-for="(topic, index) in trendingTopics" :key="index">
                <div
                  class="group w-max flex items-center bg-gray-100 sm:py-3 py-2 px-4 rounded-md sm:mx-1.5 mx-1"
                >
                  <img
                    src="https://printerval.com/images/trend.svg"
                    alt="arrow"
                    class="mr-2"
                  />
                  <span
                    class="group-hover:text-error sm:text-base text-sm transition-all ease-in-out duration-300"
                    >{{ topic.title }}</span
                  >
                </div>
              </div>
            </VueSlickCarousel>
            <button
              class="absolute border sm:flex hidden justify-center items-center top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white"
              @click="$refs.carousel1.next()"
            >
              <!-- <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" /> -->
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
              class="absolute border sm:flex hidden justify-center items-center top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white"
              @click="$refs.carousel1.prev()"
            >
              <!-- <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" /> -->
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

        <!-- Trending Products -->
        <div class="2xl:w-10/12 w-full mx-auto">
          <h1 class="text-gray-600 sm:text-2xl text-xl font-medium mt-5 mb-2">
            Trending Products
          </h1>
          <div class="relative mb-5">
            <VueSlickCarousel ref="carousel2" v-bind="productsOptions">
              <div v-for="(product, idx) in trendingProducts" :key="idx">
                <Products :product="product" />
              </div>
            </VueSlickCarousel>
            <button
              class="absolute border flex justify-center items-center top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md"
              @click="$refs.carousel2.next()"
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
              class="absolute border flex justify-center items-center top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white"
              @click="$refs.carousel2.prev()"
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

        <!-- Featured Products -->
        <div class="2xl:w-10/12 w-full mx-auto">
          <h1 class="text-gray-600 sm:text-2xl text-xl font-medium mt-5 mb-2">
            Featured Products
          </h1>
          <div class="relative mb-5">
            <VueSlickCarousel ref="carousel3" v-bind="productsOptions">
              <div v-for="(product, idx) in trendingProducts" :key="idx">
                <Products :product="product" />
              </div>
            </VueSlickCarousel>
            <button
              class="absolute border flex justify-center items-center top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md"
              @click="$refs.carousel3.next()"
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
              class="absolute border flex justify-center items-center top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white"
              @click="$refs.carousel3.prev()"
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

        <!-- New Arrivals -->
        <div class="2xl:w-10/12 w-full mx-auto">
          <h1 class="text-gray-600 sm:text-2xl text-xl font-medium mt-5 mb-2">
            New Arrivals
          </h1>
          <div class="relative mb-5">
            <VueSlickCarousel ref="carousel4" v-bind="productsOptions">
              <div v-for="(product, idx) in trendingProducts" :key="idx">
                <Products :product="product" />
              </div>
            </VueSlickCarousel>
            <button
              class="absolute border flex justify-center items-center top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md"
              @click="$refs.carousel4.next()"
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
              class="absolute border flex justify-center items-center top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white"
              @click="$refs.carousel4.prev()"
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

        <!-- Top Sale OFF -->
        <div class="2xl:w-10/12 w-full mx-auto">
          <h1 class="text-gray-600 sm:text-2xl text-xl font-medium mt-5 mb-2">
            Top Sale OFF
          </h1>
          <div class="w-full overflow-scroll">
            <div class="main-sale-products flex items-center mt-4">
              <div
                v-for="(product, index) in topSale"
                :key="index"
                :class="index === viewTopSale && 'selected-sale'"
                class="sale-products px-5 py-2 text-gray-600 cursor-pointer"
                @click="viewTopSale = index"
              >
                {{ product.name }}
              </div>
            </div>
          </div>
          <div class="relative mb-5">
            <VueSlickCarousel ref="carousel5" v-bind="productsOptions">
              <div
                v-for="(product, ind) in topSale[viewTopSale].products"
                :key="ind"
              >
                <Products :product="product" />
              </div>
            </VueSlickCarousel>
            <button
              class="absolute border flex justify-center items-center top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md"
              @click="$refs.carousel5.next()"
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
              class="absolute border flex justify-center items-center top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white"
              @click="$refs.carousel5.prev()"
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

      <!-- Services -->
      <div class="container mx-auto px-4 xl:px-10 2xl:px-10 my-8">
        <div
          class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-x-0 gap-x-2 lg:bg-skin bg-white lg:rounded-xl rounded-md lg:shadow-none shadow"
        >
          <div
            v-for="(service, idx) in services"
            :key="idx"
            class="flex lg:flex-col lg:items-center items-start gap-1 lg:border-none border-b py-5 sm:px-7 px-3"
          >
            <img :src="service.image" class="lg:h-16 smh-12 h-10" />
            <div
              class="flex flex-col lg:items-center items-start gap-1 lg:ml-0 ml-3"
            >
              <h2 class="text-footer-purple font-medium">
                {{ service.title }}
              </h2>
              <p class="text-sm font-light lg:text-center h-10">
                {{ service.detail }}
              </p>
              <p
                class="lg:block hidden text-footer-purple hover:text-error transition-all duration-300 ease-in-out font-medium cursor-pointer"
              >
                {{ service.action }}
              </p>
            </div>
            <div
              class="lg:hidden h-full flex items-end transform -rotate-90 ml-auto sm:pb-4 pb-7"
            >
              <span
                class="h-0.5 sm:w-3 w-2.5 bg-black transform rotate-45 -mr-0.5"
              ></span>
              <span
                class="h-0.5 sm:w-3 w-2.5 bg-black transform -rotate-45 -ml-0.5"
              ></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter -->
      <Container>
        <div class="flex flex-col items-center mt-16 mb-10">
          <div class="flex items-center gap-2">
            <img
              src="https://printerval.com/printerval/assets/images/subscribe-image.svg"
              alt="news"
              class="sm:w-16 w-12"
            />
            <h2 class="font-medium text-gray-600">
              Subscribe to our newsletter!
            </h2>
          </div>
          <div class="relative flex items-center sm:w-80 w-11/12 mt-4">
            <input
              type="text"
              placeholder="Your email address"
              class="w-full font-light border-b-2 border-gray-200 focus:border-light-purple outline-none pl-2 pr-3 py-1 transition-all duration-300 ease-in-out"
            />
            <img
              src="@/assets/img/home/send.png"
              alt="send"
              class="absolute top-1 right-2 flex-shrink-0 h-5 cursor-pointer"
            />
          </div>
        </div>
      </Container>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Products from '@/components/pages/home/Products.vue'
import Footer from '@/components/common/Footer.vue'

export default {
  components: {
    Header,
    Products,
    Footer,
  },
  data: () => ({
    categories: [
      {
        id: 1,
        name: 'Clothing',
        image:
          'https://uscdn.printerval.com/unsafe/360x360/storage.googleapis.com/printerval-central/files/category/03-09-2021/clothing-printerval-613203fef3949.jpg',
      },
      {
        id: 2,
        name: 'T-Shirts',
        image:
          'https://uscdn.printerval.com/unsafe/360x360/storage.googleapis.com/printerval-us/2021/12/15/t-shirts-product-share-image-cut-02a2976bad6119fa16fd576ca6c4c643.jpg',
      },
      {
        id: 3,
        name: 'Hoodies',
        image:
          'https://uscdn.printerval.com/unsafe/360x360/storage.googleapis.com/printerval-central/files/category/24-09-2021/cover-hoodie-01-614d4e277805a.jpg',
      },
      {
        id: 4,
        name: 'Accessories',
        image:
          'https://uscdn.printerval.com/unsafe/360x360/storage.googleapis.com/printerval-us/2021/11/15/cover-site-03-clothing-web-ea691d75ba1c75f869a85792702aca9a.jpg',
      },
      {
        id: 5,
        name: 'Home & Living',
        image:
          'https://uscdn.printerval.com/unsafe/360x360/storage.googleapis.com/printerval-us/2021/11/10/cover-site-05-home-living-web-ee7c7253593e3126b4e50ec79f5ee288.jpg',
      },
      {
        id: 6,
        name: 'Caps',
        image:
          'https://uscdn.printerval.com/unsafe/360x360/storage.googleapis.com/printerval-us/2021/11/10/cap-ok-82398d2cbe4c53c20b4d9f60c71c7cfc.jpg',
      },
    ],
    // Slider options
    topicOptions: {
      centerMode: true,
      arrows: false,
      variableWidth: true,
      swipe: true,
    },
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
    // page data
    trendingTopics: [
      {
        id: 1,
        title: 'Custom',
      },
      {
        id: 2,
        title: 'Disney',
      },
      {
        id: 3,
        title: 'Disney Trip Family Vacation',
      },
      {
        id: 4,
        title: 'Family Matching',
      },
      {
        id: 5,
        title: 'Disney Family',
      },
      {
        id: 6,
        title: 'Disney Vacation',
      },
      {
        id: 7,
        title: 'Disney Castle',
      },
      {
        id: 8,
        title: 'Micky Minnie',
      },
      {
        id: 9,
        title: 'Disney Vacation',
      },
    ],
    trendingProducts: [
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
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
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
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
      },
      {
        id: 4,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
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
          'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg',
      },
      {
        id: 6,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
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
        discount: '18.25',
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
        discount: '18.25',
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
        discount: '18.25',
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
        discount: '18.25',
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
    services: [
      {
        id: 1,
        title: 'Worldwide Shipping',
        detail: 'Available as Standard or Express delivery',
        action: 'Learn More',
        image: 'https://printerval.com/printerval/assets/images/shipping.svg',
      },
      {
        id: 2,
        title: 'Secure Payments',
        detail: '100% Secure payment with 256-bit SSL Encryption',
        action: 'Learn More',
        image: 'https://printerval.com/printerval/assets/images/secure.svg',
      },
      {
        id: 3,
        title: 'Free Return',
        detail: 'Exchange or money back guarantee for all orders',
        action: 'Learn More',
        image:
          'https://printerval.com/printerval/assets/images/free-return.svg',
      },
      {
        id: 4,
        title: 'Local Support',
        detail: '24/7 Dedicated support',
        action: 'Submit a request',
        image: 'https://printerval.com/printerval/assets/images/support.svg',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.poster {
  height: calc(100vw / 2);
  max-height: 25.5rem;
}
.categories {
  img {
    transition: all 0.3s ease-in-out;
  }
  &:hover img {
    transform: scale(1.25);
  }
}
.main-sale-products {
  width: max-content;
  .sale-products {
    width: max-content;
    border-bottom: 3px solid rgb(240, 240, 240);
    transition: all 0.3s ease-in-out;
    &:hover {
      border-bottom: 3px solid rgb(211, 211, 211);
    }
  }
  .selected-sale {
    border-bottom: 3px solid #ff5724;
    z-index: 10;
    &:hover {
      border-bottom: 3px solid #ff5724;
    }
  }
}
</style>
