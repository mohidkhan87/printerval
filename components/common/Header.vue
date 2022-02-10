<template>
  <div class="border-b border-opacity-80 lg:pb-0 pb-5">
      <div class="sm:block hidden bg-gray-100 text-center text-sm font-light p-3"><span class="text-error">Valentine Day's Sale!</span> Save up to 45 % OFF sitewide. Gifts for any interest. Designed and sold by artists.</div>
    <Container>
      <div class="pt-5">
        <div class="flex justify-between items-center gap-5">
          <div class="flex gap-2 items-center flex-shrink-0">
            <div class="lg:hidden flex flex-col sm:gap-1.5 gap-1 cursor-pointer" @click="mobileMenu = true">
              <span class="flex-shrink-0 h-0.5 sm:w-6 w-4 bg-black"></span>
              <span class="flex-shrink-0 h-0.5 sm:w-6 w-5 bg-black"></span>
              <span class="flex-shrink-0 h-0.5 sm:w-6 w-3.5 bg-black"></span>
            </div>
            <img src="https://printerval.com/printerval/assets/images/logo.svg" alt="logo" class="lg:w-40 sm:w-32 w-28">
          </div>
          <div class="hidden md:flex items-center lg:bg-gray-100 bg-white lg:border-none border-2 rounded-full w-full pr-4">
            <input type="text" placeholder="Search designs and products" class="w-full bg-transparent outline-none py-2.5 px-4">
            <img src="@/assets/img/header/search.png" alt="search" class="w-6">
          </div>
          <div class="flex items-center sm:gap-3 gap-1.5 flex-shrink-0">
            <div class="md:hidden flex items-center justify-center h-full sm:p-2 p-1">
              <img src="@/assets/img/header/search.png" alt="search" class="sm:w-6 w-4">
            </div>
            <div class="region relative flex items-center justify-center h-full sm:p-2 p-1 z-20">
              <img src="https://printerval.com/modules/localization/images/uk.svg" alt="flag" class="sm:w-7 w-5">
              <div class="arrow-icon flex sm:ml-2 ml-1.5">
                <span class="h-px sm:w-2 w-1.5 bg-black transform rotate-45 sm:-mr-px"></span>
                <span class="h-px sm:w-2 w-1.5 bg-black transform -rotate-45 -ml-0.5"></span>
              </div>
              <div class="region_list absolute top-full right-0 w-44 bg-white shadow-rounded rounded">
                <ul>
                  <li v-for="(region, index) in regions" :key="index" class="flex items-center justify-between border-b px-3 py-2 cursor-pointer hover:text-blue-400 transition-all duration-200 ease-in-out">
                    <p class="font-light text-sm">
                      {{ region.name }}
                    </p>
                    <img :src="region.image" alt="flags" class="sm:w-7 w-5">
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex items-center justify-center h-full sm:p-2 p-1">
              <img src="@/assets/img/header/cart.png" alt="cart" class="sm:w-6 w-4 cursor-pointer">
            </div>
          </div>
        </div>
        <!-- Menu -->
        <nav class="relative lg:block hidden mt-4">
          <ul class="flex items-center">
            <li v-for="(list, index) in menu" :key="index">
              <p class="main py-2.5 px-4 transition-all duration-300 ease-in-out cursor-pointer hover:text-error">{{list.name}}</p>
              <ul v-if="list.subMenu" class="child-list absolute top-full left-0 w-full bg-white shadow-rounded p-4 rounded z-10">
                <li v-for="(innerList, idx) in list.subMenu" :key="idx">
                  {{innerList.name}}
                </li>
              </ul>
            </li>
            
            <li><p class="main text-red-700 py-2.5 px-4 transition-all duration-300 ease-in-out cursor-pointer">Top Sale</p></li>
          </ul>
        </nav>
        
        <!-- Mobile menu -->
        <div v-if="mobileMenu"  class="lg:hidden block fixed top-0 left-0 h-full w-full bg-black bg-opacity-40 transition-all duration-200 ease-in-out z-30" @click="mobileMenu = false, mobileSubMenu = null">
          <div class="fixed left-80 transform top-7 text-white flex justify-center items-center cursor-pointer">
            <span class="h-0.5 w-6 bg-white transform -rotate-45 "></span>
            <span class="h-0.5 w-6 bg-white transform rotate-45 -translate-x-full"></span>
          </div>
        </div>
        <!--  -->
        <nav>
          <div :class="mobileMenu ? 'translate-x-0' : '-translate-x-full' "  class="mobile-nav lg:hidden block fixed top-0 left-0 h-full bg-white transform transition-all duration-200 ease-in-out z-40">
            <div class="bg-gray-100 p-4">
              <img src="https://printerval.com/printerval/assets/images/logo.svg" alt="logo" class="sm:w-40 w-32">
            </div>
            <ul>
              <li v-for="(list, index) in menu" :key="index">
                <div class="group flex items-center justify-between border-t cursor-pointer" @click="openSubMenu(list)">
                  <p class="py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer group-hover:text-error">{{list.name}}</p>
                  <div v-if="list.subMenu" class="flex sm:ml-2 ml-1.5 mr-4 transform -rotate-90">
                    <span class="h-px w-2.5 bg-black transform rotate-45 -mr-px"></span>
                    <span class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"></span>
                  </div>
                </div>
                <!-- <ul v-if="list.subMenu" class="child-list absolute top-full left-0 w-full bg-white shadow-rounded p-4 rounded z-10">
                  <li v-for="(innerList, idx) in list.subMenu" :key="idx">
                    {{innerList.name}}
                  </li>
                </ul> -->
              </li>
              
              <li><p class="border-t text-red-700 py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer">Top Sale</p></li>
             
            </ul>
          </div>

          <!-- sub-menu -->
          <div :class="mobileSubMenu ? 'translate-x-0' : '-translate-x-full' "  class="mobile-nav lg:hidden block fixed top-0 left-0 h-full bg-white transform transition-all duration-300 ease-in-out z-50">
            <div class="flex items-center gap-2 bg-gray-100 p-4 cursor-pointer" @click="mobileSubMenu = null">
              <div class="flex justify-center items-center sm:ml-2 ml-1.5 transform rotate-90 bg-white h-8 w-8 rounded-full">
                <span class="h-px w-2.5 bg-black transform rotate-45 -mr-px"></span>
                <span class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"></span>
              </div>
              <h2 v-if="mobileSubMenu">{{mobileSubMenu.name}}</h2>
            </div>
             <!-- selected sub-menu -->
            <ul class="ml-4">
              <li v-for="(main, idx) in menu" :key="idx">
                <div v-if="main === mobileSubMenu">
                  <p v-for="(child, id) in main.subMenu" :key="id" class="py-3">{{child.name}}</p>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        id: 1,
        name: 'Home',
        subMenu: null
      },
      {
        id: 2,
        name: 'Clothing',
        subMenu: [
          {
            id: 1,
            name: 'Clothing Categories'
          },
        ]
      },
      {
        id: 3,
        name: 'Accessories',
        subMenu: [
          {
            id: 1,
            name: 'Accessories Categories'
          },
        ]
      },
      {
        id: 4,
        name: 'Home & Living',
        subMenu: [
          {
            id: 1,
            name: 'Home & Living Categories'
          },
        ]
      },
      {
        id: 5,
        name: 'Topics',
        subMenu: null
      },
      {
        id: 6,
        name: 'Shop',
        subMenu: null
      },
    ],
    mobileMenu: false,
    mobileSubMenu: null,
    regions: [
      {id: 1, name: 'US and Others', image: 'https://printerval.com/modules/localization/images/us.svg' },
      {id: 2, name: 'Canada', image: 'https://printerval.com/modules/localization/images/ca.svg'},
      {id: 3, name: 'Australia', image: 'https://printerval.com/modules/localization/images/au.svg'},
      {id: 4, name: 'United Kingdom', image: 'https://printerval.com/modules/localization/images/uk.svg'},
      {id: 5, name: 'Italiano', image: 'https://printerval.com/modules/localization/images/it.svg'},
    ]
  }),
  methods: {
    openSubMenu(list) {
      if(list.subMenu) { this.mobileSubMenu = list}
    }
  }
}
</script>

<style lang="scss" scoped>
.region {
  .region_list {
    display: none;
    animation: popdown .3s ease-in-out;
  }
  &:hover .region_list {
    display: block;
  }
  &:hover .arrow-icon {
    transition: all .3s ease-in-out;
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
          transition: all .3s ease-in-out;
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
        display: block
      }
      &:hover p.main{
        &::after {
          width: 70%;
        }

      }
    }
  }
}
.mobile-nav {
  width: 19rem;
}

@keyframes popdown {
  0%{
    opacity: 0;
    transform: scale(.9) translateY(-1rem);
  }
  100%{
     opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>