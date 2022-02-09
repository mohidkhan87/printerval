<template>
  <div class="border-b border-opacity-80">
      <div class="bg-gray-100 text-center text-sm font-light p-3"><span class="text-error">Valentine Day's Sale!</span> Save up to 45 % OFF sitewide. Gifts for any interest. Designed and sold by artists.</div>
    <Container>
      <div class="pt-5">
        <div class="flex justify-between item-center gap-5">
          <div class="flex-shrink-0">
            <img src="https://printerval.com/printerval/assets/images/logo.svg" alt="logo" class="lg:w-40 w-32">
          </div>
          <div class="flex items-center bg-gray-100 rounded-full w-full pr-4">
            <input type="text" placeholder="Search designs and products" class="w-full bg-transparent outline-none py-2.5 px-4">
            <img src="@/assets/img/header/search.png" alt="search" class="w-6">
          </div>
          <div class="flex items-center gap-3 flex-shrink-0">
            <div class="flex items-center justify-center h-full px-2">
              <img src="https://printerval.com/modules/localization/images/uk.svg" alt="flag" class="w-7">
            </div>
            <div class="flex items-center justify-center h-full px-2">
              <img src="@/assets/img/header/cart.png" alt="cart" class="w-9">
            </div>
          </div>
        </div>
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
    ]
  })
}
</script>

<style lang="scss" scoped>
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
</style>