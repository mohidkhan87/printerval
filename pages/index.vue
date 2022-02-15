<template>
  <div>
    <Header />
    <main class="font-roboto">
      <Container :padding="'px-4 2xl:px-10'">
        <!-- Poster -->
        <div class="my-4">
          <div class="poster bg-poster bg-cover bg-center"></div>
        </div>

        <!-- Categories -->
        <div
          class="grid md:grid-cols-3 grid-cols-2 md:gap-3.5 gap-2 2xl:w-10/12 w-full my-4 mx-auto"
        >
          <div v-for="(category, index) in categories" :key="index">
            <div
              class="categories relative rounded overflow-hidden cursor-pointer"
            >
              <img v-lazy="category.image" alt="category" class="w-full" />
              <button
                class="absolute lg:block hidden top-3/4 left-1/2 transform -translate-x-1/2 rounded-full bg-white text-dark-purple font-medium shadow-lg border py-2 px-6"
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
        <TrendingTopics />

        <!-- Trending Products -->
        <TrendingProducts />

        <!-- Featured Products -->
        <FeaturedProducts />

        <!-- New Arrivals -->
        <NewArrivals />

        <!-- Top Sale OFF -->
        <TopSale />
      </Container>

      <Container :padding="'px-4 xl:px-10 '">
        <!-- Services -->
        <div class="my-8">
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
                <h2
                  class="text-footer-purple hover:text-orange font-medium transition-all duration-300 ease-in-out cursor-pointer"
                >
                  {{ service.title }}
                </h2>
                <p class="text-sm transform scale-95 lg:text-center h-10">
                  {{ service.detail }}
                </p>
                <p
                  class="lg:block hidden text-footer-purple hover:text-orange transition-all duration-300 ease-in-out font-medium cursor-pointer"
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
        <div class="flex flex-col items-center mt-16 mb-10">
          <div class="flex items-center gap-2">
            <img
              src="https://printerval.com/printerval/assets/images/subscribe-image.svg"
              alt="news"
              class="sm:w-16 w-12"
            />
            <h2 class="font-medium text-gray-700">
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
import TrendingTopics from '@/components/pages/home/TrendingTopics.vue'
import TrendingProducts from '@/components/pages/home/TrendingProducts.vue'
import FeaturedProducts from '@/components/pages/home/FeaturedProducts.vue'
import NewArrivals from '@/components/pages/home/NewArrivals.vue'
import TopSale from '@/components/pages/home/TopSale.vue'
import Footer from '@/components/common/Footer.vue'

export default {
  components: {
    Header,
    TrendingTopics,
    TrendingProducts,
    FeaturedProducts,
    NewArrivals,
    TopSale,
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

// For hide scrollbar
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
