<template>
  <div>
    <Header />
    <main>
      <!-- Poster -->
      <div class="container mx-auto px-5 2xl:px-10 my-4">
        <img src="https://uscdn.printerval.com/unsafe/0x840/storage.googleapis.com/printerval-us/2022/01/10/hpny-1444x420-usa-37c1e4d28910282da9d29e0491eba755.jpg" alt="poster">
      </div>

      <!-- Categories -->
      <div class="container mx-auto px-5 2xl:px-10 ">
        <div class="grid grid-cols-3 gap-3.5 2xl:w-10/12 w-full my-4 mx-auto ">
          <div v-for="(category, index) in  categories" :key="index" class="categories relative rounded overflow-hidden cursor-pointer">
            <img :src="category.image" alt="category" class="w-full">
            <button class="absolute top-3/4 left-1/2 transform -translate-x-1/2 rounded-full bg-white text-gray-800 shadow-lg border py-2 px-6">{{category.name}}</button>
          </div>
        </div>

        <!-- Trending Topics -->
        <h1 class="text-gray-800 text-2xl my-5">Trending Topics</h1>
        <div class="relative">
          <VueSlickCarousel ref="carousel1" v-bind="topicOptions">
            <div v-for="(topic, index) in trendingTopics" :key="index">
              <div class="w-max bg-gray-100 p-3 px-5 rounded-md mx-1.5">{{ topic.title }}</div>
            </div>
          </VueSlickCarousel>
          <button
          class="
          
          absolute
          border
          flex
          justify-center
          items-center
          top-1/2
          right-2
          transform
          -translate-y-1/2
          h-10
          w-10
          rounded-full
          bg-white
         
         
        "
          @click="$refs.carousel1.next()"
        >
          <!-- <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" /> -->
          N
          </button>
          <button
            class="
            absolute
            border
            sm:flex
            justify-center
            items-center
            top-1/2
            left-2
            transform
            -translate-y-1/2
            h-10
            w-10
            rounded-full
            bg-white
           
          "
            @click="$refs.carousel1.prev()"
          >
            <!-- <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" /> -->
            B
          </button>
        </div>

         <!-- Trending Products -->
        <h1 class="text-gray-800 text-2xl my-5">Trending Products</h1>
        <div class="relative my-5">
          <VueSlickCarousel ref="carousel2"  v-bind="productsOptions">
            <div v-for="(product, idx) in trendingProducts" :key="idx">
             <Products :product="product" />
            </div>
          </VueSlickCarousel>
          <button
          class="
          
          absolute
          border
          flex
          justify-center
          items-center
          top-1/2
          right-2
          transform
          -translate-y-1/2
          h-10
          w-10
          rounded-full
          bg-white
         
         
        "
          @click="$refs.carousel2.next()"
        >
          N
          </button>
          <button
            class="
            absolute
            border
            sm:flex
            justify-center
            items-center
            top-1/2
            left-2
            transform
            -translate-y-1/2
            h-10
            w-10
            rounded-full
            bg-white
           
          "
            @click="$refs.carousel2.prev()"
          >
            
            B
          </button>
        </div>
        
      </div>
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
    Footer
  },
  data: () => ({
    categories: [
      {
        id: 1,
        name: 'Clothing',
        image: 'https://uscdn.printerval.com/unsafe/360x360/storage.googleapis.com/printerval-central/files/category/03-09-2021/clothing-printerval-613203fef3949.jpg'
      },
      {
        id: 2,
        name: 'T-Shirts',
        image: 'https://uscdn.printerval.com/unsafe/360x360/storage.googleapis.com/printerval-us/2021/12/15/t-shirts-product-share-image-cut-02a2976bad6119fa16fd576ca6c4c643.jpg'
      },
      {
        id: 3,
        name: 'Hoodies',
        image: 'https://uscdn.printerval.com/unsafe/360x360/storage.googleapis.com/printerval-central/files/category/24-09-2021/cover-hoodie-01-614d4e277805a.jpg'
      },
      {
        id: 4,
        name: 'Accessories',
        image: 'https://uscdn.printerval.com/unsafe/360x360/storage.googleapis.com/printerval-us/2021/11/15/cover-site-03-clothing-web-ea691d75ba1c75f869a85792702aca9a.jpg'
      },
      {
        id: 5,
        name: 'Home & Living',
        image: 'https://uscdn.printerval.com/unsafe/360x360/storage.googleapis.com/printerval-us/2021/11/10/cover-site-05-home-living-web-ee7c7253593e3126b4e50ec79f5ee288.jpg'
      },
      {
        id: 6,
        name: 'Caps',
        image: 'https://uscdn.printerval.com/unsafe/360x360/storage.googleapis.com/printerval-us/2021/11/10/cap-ok-82398d2cbe4c53c20b4d9f60c71c7cfc.jpg'
      },
    ],
    // Slider options
    topicOptions: {
        centerMode: true,
        // centerPadding: '10px',
        // focusOnSelect: true,
        slidesToShow: 7,
        arrows: false,
        infinite: true,
        variableWidth: true

    },
    productsOptions: {
        slidesToShow: 5,
        arrows: false,
        rows: 2,
        infinite: false,
        swipe: true
    },
    trendingTopics: [
      {
        id: 1,
        title: 'Custom'
      },
      {
        id: 2,
        title: 'Disney'
      },
      {
        id: 3,
        title: 'Disney Trip Family Vacation'
      },
      {
        id: 4,
        title: 'Family Matching'
      },
      {
        id: 5,
        title: 'Disney Family'
      },
      {
        id: 6,
        title: 'Disney Vacation'
      },
      {
        id: 7,
        title: 'Disney Castle'
      },
      {
        id: 8,
        title: 'Micky Minnie'
      },
      {
        id: 9,
        title: 'Disney Vacation'
      },
    ],
    trendingProducts: [
      {
        id: 1,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: '18.25',
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg'
      },
      {
        id: 2,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp'
      },
      {
        id: 3,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: '18.25',
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg'
      },
      {
        id: 4,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp'
      },
      {
        id: 5,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: '18.25',
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg'
      },
      {
        id: 6,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp'
      },
      {
        id: 7,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: '18.25',
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg'
      },
      {
        id: 8,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp'
      },
      {
        id: 9,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: '18.25',
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg'
      },
      {
        id: 10,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp'
      },
      {
        id: 11,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: '18.25',
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg'
      },
      {
        id: 12,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp'
      },
      {
        id: 13,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: '18.25',
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg'
      },
      {
        id: 14,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp'
      },
      {
        id: 15,
        title: '50th Anniversary Walt Disney World T-Shirts',
        brand: 'James Round',
        price: '20.85',
        discount: '18.25',
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2021/11/26/mickey-white-4cdda933db130ad3573eef2a25e4010c.jpg'
      },
      {
        id: 16,
        title: 'Custom 2022 Disney Birthday Family Matching T Shirt',
        brand: 'Josephine',
        price: '30.85',
        discount: null,
        image: 'https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp'
      },
    ]
  }),
  methods: {
  }
}
</script> 

<style lang="scss" scoped>
.categories {
  img{
    transition: all .3s ease-in-out;
    &:hover {
      transform: scale(1.25)
    }
  }
}
</style>
