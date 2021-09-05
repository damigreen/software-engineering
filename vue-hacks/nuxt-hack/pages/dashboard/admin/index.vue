<template>
  <app-layout>
    <h1>Admin</h1>
  </app-layout>
</template>

<script>
export default {
  // name: "Admin",
  components: {
    "app-layout": () => import("@/components/layouts/app")
  },
  head() {
    return {
      title: "Admin Dashboard",
      meta: [
          {
            hid: "description",
            name: "description",
            content: "Dashboard of greensoft admins"
          }
      ] ,
      // TODO
      // Fix App Layout logo
      link: [
        {
          rel: "icon",
          type: "image",
          href: process.env.APP_URL + "/icon.png"
        }

      ]
    }
  }
}
</script>
