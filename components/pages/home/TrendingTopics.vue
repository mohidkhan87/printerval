<template>
  <div class="2xl:w-10/12 w-full mx-auto">
    <h1 class="text-gray-700 sm:text-2xl text-xl font-medium my-5">
      Trending Topics
    </h1>
    <div class="relative">
      <VueSlickCarousel ref="trendingTopicsSlider" v-bind="topicOptions">
        <div v-for="(topic, index) in trendingTopics" :key="index">
          <div
            class="group w-max flex items-center bg-gray-100 sm:py-3 py-2.5 px-4 rounded-md sm:mx-1.5 mx-1"
          >
            <img
              src="https://printerval.com/images/trend.svg"
              alt="arrow"
              class="mr-2"
            />
            <span
              class="text-dark-purple group-hover:text-orange font-medium sm:text-base text-sm transition-all ease-in-out duration-300"
              >{{ topic.title }}</span
            >
          </div>
        </div>
      </VueSlickCarousel>
      <button
        class="absolute border sm:flex hidden justify-center items-center top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white"
        @click="$refs.trendingTopicsSlider.next()"
      >
        <div class="flex transform -rotate-90">
          <span class="h-px w-2.5 bg-black transform rotate-45 -mr-px"></span>
          <span class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"></span>
        </div>
      </button>
      <button
        class="absolute border sm:flex hidden justify-center items-center top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white"
        @click="$refs.trendingTopicsSlider.prev()"
      >
        <div class="flex transform rotate-90">
          <span class="h-px w-2.5 bg-black transform rotate-45 -mr-px"></span>
          <span class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"></span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    // Slider options
    topicOptions: {
      centerMode: true,
      arrows: false,
      variableWidth: true,
      swipe: true,
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
  }),
}
</script>

<style>
</style>
