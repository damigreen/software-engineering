<template>
  <!-- <app-layout id="layout-app" v-if="checkAuth"> -->
  <app-layout id="layout-app">
      <toast />
  </app-layout>
</template>

<script>
export default {
  data: () => ({
    showProfileDropDown: false
  }),
  methods: {
    logout() {
      //logout logic 
    }
  }
}
</script>
