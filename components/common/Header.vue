<template>
  <div class="border-b border-opacity-80 lg:pb-0 pb-5">
    <div class="sm:block hidden bg-gray-100 text-center text-sm font-light p-3">
      <span class="text-error">Valentine Day's Sale!</span> Save up to 45 % OFF
      sitewide. Gifts for any interest. Designed and sold by artists.
    </div>
    <Container>
      <div class="pt-5">
        <div class="flex justify-between items-center gap-5">
          <div class="flex gap-2 items-center flex-shrink-0">
            <div
              class="lg:hidden flex flex-col sm:gap-1.5 gap-1 cursor-pointer"
              @click="mobileMenu = true"
            >
              <span class="flex-shrink-0 h-0.5 sm:w-6 w-4 bg-black"></span>
              <span class="flex-shrink-0 h-0.5 sm:w-6 w-5 bg-black"></span>
              <span class="flex-shrink-0 h-0.5 sm:w-6 w-3.5 bg-black"></span>
            </div>
            <img
              src="https://printerval.com/printerval/assets/images/logo.svg"
              alt="logo"
              class="lg:w-40 sm:w-32 w-28"
            />
          </div>
          <div
            :class="
              isSearching
                ? 'search_box z-50 bg-white'
                : 'z-auto lg:bg-gray-100 bg-white '
            "
            class="relative hidden md:flex items-center rounded-full lg:border-none border-2 transition-all duration-300 ease-in-out w-full pr-4"
            @click="isSearching = true"
          >
            <input
              type="text"
              placeholder="Search designs and products"
              class="w-full bg-transparent outline-none py-2.5 px-4"
            />
            <img
              src="@/assets/img/header/search.png"
              alt="search"
              class="w-6"
            />
            <!-- Search Results -->
            <div
              v-if="isSearching"
              class="search_results absolute top-full left-0 w-full grid xl:grid-cols-5 grid-cols-1 bg-white rounded-lg transform translate-y-3 px-4 py-5"
            >
              <div>
                <h2 class="font-medium text-gray-600 leading-5">
                  Trending searches
                </h2>
                <div
                  class="flex items-start gap-2 px-2 py-1 my-3 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src="https://printerval.com/images/trend.svg"
                    alt="result-icon"
                    class="mt-1"
                  />
                  <span class="font-extralight leading-5">family</span>
                </div>
                <div
                  class="flex items-start gap-2 px-2 py-1 my-3 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src="https://printerval.com/images/trend.svg"
                    alt="result-icon"
                    class="mt-1"
                  />
                  <span class="font-extralight leading-5"
                    >matching family disney shirts</span
                  >
                </div>
              </div>
              <div class="lg:col-span-4 lg:pl-5 pl-0">
                <h2 class="font-medium text-gray-600">Popular products</h2>
                <div
                  class="grid grid-flow-col lg:grid-rows-2 grid-rows-1 py-3 overflow-y-scroll scrollbar-none border-b"
                >
                  <div
                    v-for="(product, index) in popularProducts"
                    :key="index"
                    class="w-40"
                  >
                    <Products :product="product" :is-searching="true" />
                  </div>
                </div>
                <div class="flex gap-2 py-2.5">
                  <button
                    class="p-2 w-40 bg-light-blue rounded-sm text-white lg:text-base text-xs"
                  >
                    T-Shirts
                  </button>
                  <button
                    class="p-2 w-40 bg-light-pink rounded-sm text-white lg:text-base text-xs"
                  >
                    Custom T-Shirts
                  </button>
                  <button
                    class="p-2 w-40 bg-lightest-brown rounded-sm text-white lg:text-base text-xs"
                  >
                    Sweatshirts
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center sm:gap-3 gap-1.5 flex-shrink-0">
            <div
              class="region relative flex items-center justify-center h-full sm:p-2 p-1 z-20"
            >
              <img
                src="https://printerval.com/modules/localization/images/uk.svg"
                alt="flag"
                class="sm:w-7 w-5"
              />
              <div class="arrow-icon flex sm:ml-2 ml-1.5">
                <span
                  class="h-px sm:w-2 w-1.5 bg-black transform rotate-45 sm:-mr-px"
                ></span>
                <span
                  class="h-px sm:w-2 w-1.5 bg-black transform -rotate-45 -ml-0.5"
                ></span>
              </div>
              <div
                class="region_list absolute top-full right-0 w-44 bg-white shadow-rounded rounded"
              >
                <ul>
                  <li
                    v-for="(region, index) in regions"
                    :key="index"
                    class="flex items-center justify-between border-b px-3 py-2 cursor-pointer hover:text-blue-400 transition-all duration-200 ease-in-out"
                  >
                    <p class="font-light text-sm">
                      {{ region.name }}
                    </p>
                    <img :src="region.image" alt="flags" class="sm:w-7 w-5" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex items-center justify-center h-full sm:p-2 p-1">
              <!--  -->
              <div class="drawer drawer-end z-30">
                <input
                  id="cart-drawer"
                  type="checkbox"
                  class="border-none drawer-toggle"
                />
                <div
                  class="flex flex-col items-start justify-center drawer-content shadow-none"
                >
                  <label for="cart-drawer" class="z-20"
                    ><img
                      src="@/assets/img/header/cart.png"
                      alt="cart"
                      class="sm:w-6 w-4 cursor-pointer"
                  /></label>
                </div>
                <div class="drawer-side bg-white p-4 shadow-none">
                  <label
                    for="cart-drawer"
                    class="fixed top-0 left-0 h-full w-full drawer-overlay z-10"
                  ></label>
                  <div
                    class="bg-white fixed top-0 right-0 h-full w-80 overflow-y-scroll scrollbar-none p-4"
                  >
                    <div
                      class="flex justify-between items-center border-b pb-2"
                    >
                      <h2 class="uppercase font-semibold">Shopping Cart</h2>
                      <label for="cart-drawer" class="cursor-pointer">
                        <div
                          class="uppercase flex items-center gap-2 text-gray-400 text-xs cursor-pointer"
                        >
                          Close
                          <!-- arrow icon -->
                          <div class="flex justify-center items-center">
                            <span class="bg-gray-400 h-px w-3 -mr-px"></span>
                            <div
                              class="flex justify-center items-center transform -rotate-90 -ml-1.5"
                            >
                              <p
                                class="bg-gray-400 h-px w-1.5 transform rotate-45 -mr-px"
                              ></p>
                              <p
                                class="bg-gray-400 h-px w-1.5 transform -rotate-45 -ml-px"
                              ></p>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div
                      v-for="i in 2"
                      :key="i"
                      class="flex items-center gap-2 py-3 border-b"
                    >
                      <img
                        src="https://uscdn.printerval.com/unsafe/fit-in/630x630/filters:fill(fff)/storage.googleapis.com/printerval-us/2022/01/19/il-1140xn-b4ed5fb0d9896dcb1c8e32ae4f3d685b.webp"
                        alt="cart-item"
                        class="w-1/4 flex-shrink-0"
                      />
                      <div>
                        <div class="flex justify-between">
                          <h2 class="font-medium text-sm">
                            Custom 2022 Disney Birthday Family Matching T Shirt
                          </h2>
                          <!-- x icon -->
                          <div
                            class="h-5 w-5 rounded-full border-2 flex-shrink-0 flex justify-center items-center cursor-pointer mt-2"
                          >
                            <span
                              class="h-0.5 w-2.5 bg-black transform rotate-45 -mr-1"
                            ></span>
                            <span
                              class="h-0.5 w-2.5 bg-black transform -rotate-45 -ml-1.5"
                            ></span>
                          </div>
                        </div>
                        <div class="my-2.5">
                          <p class="text-xs text-gray-400 capitalize">
                            Style: Premium guys tee /print
                          </p>
                          <p class="text-xs text-gray-400 capitalize">
                            Location: front / color: maroon
                          </p>
                          <p class="text-xs text-gray-400 capitalize">
                            Size: M
                          </p>
                        </div>
                        <div class="text-gray-400 text-sm">
                          1 X
                          <span class="font-medium text-gray-600">$28.95</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="py-3 flex justify-between text-sm border-b px-1"
                    >
                      <p>Subtotal:</p>
                      <h2 class="font-medium">$28.95</h2>
                    </div>
                    <div class="flex flex-col items-center gap-3">
                      <a
                        href="#"
                        class="border-b-2 border-blue-700 pb-px w-max mx-auto text-sm mt-4"
                        >View Cart</a
                      >
                      <button
                        class="btn-active sm:btn-md btn-sm uppercase text-sm text-white font-normal rounded w-full"
                      >
                        Go to checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
            </div>
          </div>
          <!-- Close Search Results -->
          <transition name="fade">
            <div
              v-if="isSearching"
              class="md:block hidden fixed top-0 left-0 h-full w-full bg-footer-purple bg-opacity-40 z-40"
              @click="isSearching = false"
            ></div>
          </transition>
        </div>

        <!-- Menu -->
        <nav class="relative lg:block hidden mt-4">
          <ul class="flex items-center">
            <li v-for="(list, index) in menu" :key="index">
              <p
                class="main py-2.5 px-4 transition-all duration-300 ease-in-out cursor-pointer hover:text-error"
              >
                {{ list.name }}
              </p>
              <ul
                v-if="list.subMenu"
                class="child-list absolute top-full left-0 w-full bg-white shadow-rounded font-light p-4 rounded z-10"
              >
                <li v-for="(subList, idx) in list.subMenu" :key="idx">
                  {{ subList.name }}
                </li>
              </ul>
            </li>

            <li>
              <p
                class="main text-red-700 py-2.5 px-4 transition-all duration-300 ease-in-out cursor-pointer"
              >
                Top Sale
              </p>
            </li>
          </ul>
        </nav>

        <!-- Mobile menu -->
        <div
          v-if="mobileMenu"
          class="lg:hidden block fixed top-0 left-0 h-full w-full bg-black bg-opacity-40 transition-all duration-200 ease-in-out z-30"
          @click=";(mobileMenu = false), (mobileSubMenu = null)"
        >
          <div
            class="fixed left-80 transform top-7 text-white flex justify-center items-center cursor-pointer"
          >
            <span class="h-0.5 w-6 bg-white transform -rotate-45"></span>
            <span
              class="h-0.5 w-6 bg-white transform rotate-45 -translate-x-full"
            ></span>
          </div>
        </div>
        <!--  -->
        <nav>
          <div
            :class="mobileMenu ? 'translate-x-0' : '-translate-x-full'"
            class="mobile-nav lg:hidden block fixed top-0 left-0 h-full bg-white transform transition-all duration-200 ease-in-out z-40"
          >
            <div class="bg-gray-100 p-4">
              <img
                src="https://printerval.com/printerval/assets/images/logo.svg"
                alt="logo"
                class="sm:w-40 w-32"
              />
            </div>
            <ul>
              <li v-for="(list, index) in menu" :key="index">
                <div
                  class="group flex items-center justify-between border-t cursor-pointer"
                  @click="openSubMenu(list)"
                >
                  <p
                    class="py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer group-hover:text-error"
                  >
                    {{ list.name }}
                  </p>
                  <div
                    v-if="list.subMenu"
                    class="flex sm:ml-2 ml-1.5 mr-4 transform -rotate-90"
                  >
                    <span
                      class="h-px w-2.5 bg-black transform rotate-45 -mr-px"
                    ></span>
                    <span
                      class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"
                    ></span>
                  </div>
                </div>
              </li>

              <li>
                <p
                  class="border-t text-red-700 py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer"
                >
                  Top Sale
                </p>
              </li>
            </ul>
          </div>

          <!-- sub-menu -->
          <div
            :class="mobileSubMenu ? 'translate-x-0' : '-translate-x-full'"
            class="mobile-nav lg:hidden block fixed top-0 left-0 h-full bg-white transform transition-all duration-300 ease-in-out z-50"
          >
            <div
              class="flex items-center gap-2 bg-gray-100 p-4 cursor-pointer"
              @click="mobileSubMenu = null"
            >
              <div
                class="flex justify-center items-center sm:ml-2 ml-1.5 transform rotate-90 bg-white h-8 w-8 rounded-full"
              >
                <span
                  class="h-px w-2.5 bg-black transform rotate-45 -mr-px"
                ></span>
                <span
                  class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"
                ></span>
              </div>
              <h2 v-if="mobileSubMenu">{{ mobileSubMenu.name }}</h2>
            </div>
            <!-- selected sub-menu -->
            <ul class="ml-4">
              <li v-for="(main, idx) in menu" :key="idx">
                <div v-if="main === mobileSubMenu">
                  <p v-for="(child, id) in main.subMenu" :key="id" class="py-3">
                    {{ child.name }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Container>
    <!-- Bottom Menu -->
    <div
      class="md:hidden grid grid-cols-5 bg-white fixed bottom-0 left-0 w-full shadow-rounded pt-3 pb-2 z-20"
    >
      <div
        v-for="(nav, index) in bottomMenu"
        :key="index"
        class="flex flex-col items-center"
      >
        <img
          :src="require(`@/assets/img/header/${nav.image}`)"
          :class="nav.name === 'Products' && 'transform -rotate-90'"
          class="sm:h-7 h-5"
        />
        <p
          class="mt-1.5 sm:text-sm text-xs transform sm:scale-100 scale-90 uppercase"
        >
          {{ nav.name }}
        </p>
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
    isSearching: false,
    // Search results
    popularProducts: [
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
    regions: [
      {
        id: 1,
        name: 'US and Others',
        image: 'https://printerval.com/modules/localization/images/us.svg',
      },
      {
        id: 2,
        name: 'Canada',
        image: 'https://printerval.com/modules/localization/images/ca.svg',
      },
      {
        id: 3,
        name: 'Australia',
        image: 'https://printerval.com/modules/localization/images/au.svg',
      },
      {
        id: 4,
        name: 'United Kingdom',
        image: 'https://printerval.com/modules/localization/images/uk.svg',
      },
      {
        id: 5,
        name: 'Italiano',
        image: 'https://printerval.com/modules/localization/images/it.svg',
      },
    ],
    menu: [
      {
        id: 1,
        name: 'Home',
        subMenu: null,
      },
      {
        id: 2,
        name: 'Clothing',
        subMenu: [
          {
            id: 1,
            name: 'All Clothing',
          },
          { id: 2, name: 'T-Shirts' },
          { id: 3, name: 'Custom T-Shirts' },
          { id: 4, name: 'Hoodies' },
          { id: 5, name: 'Polo shirts' },
          { id: 6, name: 'Cloaks' },
          { id: 7, name: 'Tank Tops' },
          { id: 8, name: 'Sweatshirts' },
          { id: 9, name: 'Long Sleeves' },
        ],
      },
      {
        id: 3,
        name: 'Accessories',
        subMenu: [
          {
            id: 1,
            name: 'Accessories Categories',
          },
        ],
      },
      {
        id: 4,
        name: 'Home & Living',
        subMenu: [
          {
            id: 1,
            name: 'Home & Living Categories',
          },
        ],
      },
      {
        id: 5,
        name: 'Topics',
        subMenu: null,
      },
      {
        id: 6,
        name: 'Shop',
        subMenu: null,
      },
    ],
    mobileMenu: false,
    mobileSubMenu: null,
    // Bootom menu
    bottomMenu: [
      {
        id: 1,
        name: 'Home',
        image: 'home.png',
      },
      {
        id: 2,
        name: 'My Cart',
        image: 'cart.png',
      },
      {
        id: 3,
        name: 'Products',
        image: 'product.png',
      },
      {
        id: 4,
        name: 'Wishlist',
        image: 'heart.png',
      },
      {
        id: 5,
        name: 'Search',
        image: 'search.png',
      },
    ],
  }),
  methods: {
    openSubMenu(list) {
      if (list.subMenu) {
        this.mobileSubMenu = list
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.region {
  .region_list {
    display: none;
    animation: popdown 0.3s ease-in-out;
  }
  &:hover .region_list {
    display: block;
  }
  &:hover .arrow-icon {
    transition: all 0.3s ease-in-out;
    transform: rotate(-180deg);
  }
}
nav {
  ul {
    li {
      p.main {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background-color: black;
          transition: all 0.3s ease-in-out;
        }
        &:hover::after {
          width: 70%;
        }
      }
      // Child List
      .child-list {
        display: none;
      }
      &:hover .child-list {
        display: block;
      }
      &:hover p.main {
        &::after {
          width: 70%;
        }
      }
    }
  }
}
.search_box {
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 1px 3px #6f5d99;
}
.mobile-nav {
  width: 19rem;
}

// transition properties
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.search_results {
  animation: searchResults 0.2s ease-in-out;
}
// For hide scrollbar
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

@keyframes popdown {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(-1rem);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes searchResults {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0.75rem);
  }
}
</style>
