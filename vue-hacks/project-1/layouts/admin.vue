<template>
  <app-layout>
    <div class="slim-navbar">
      <div class="container">
        <ul class="nav">
          <nuxt-link
            tag="li"
            exact-active-class="active"
            class="nav-item"
            to="/dashboard/admin"
          >
            <a class="nav-link">
              <i class="icon ion-ios-briefcase-outline"></i>
              <span>Dashboard</span>
            </a>
          </nuxt-link>
          <li
            class="nav-item with-sub"
            :class="{ active: $route.fullPath.includes('maintenance') }"
          >
            <a class="nav-link" href="#">
              <i class="icon ion-ios-cog-outline"></i>
              <span>Work</span>
            </a>
            <div class="sub-item">
              <ul>
                <li>
                  <nuxt-link to="/maintenance/requests">Activity</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/maintenance/float-requests">Float</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/maintenance/routines">Scheduler</nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li
            class="nav-item with-sub"
            :class="{ active: currentActiveRoutes.includes('manage') }"
          >
            <a class="nav-link" href="#">
              <i class="icon ion-ios-grid-view-outline"></i>
              <span>Manage</span>
            </a>
            <div class="sub-item">
              <ul>
                <li>
                  <nuxt-link to="/onboarding/organizations"
                    >Organizations</nuxt-link
                  >
                </li>
                <li class="sub-with-sub">
                  <nuxt-link to="/people/users">People</nuxt-link>
                  <ul>
                    <li><nuxt-link to="/people/users">Users</nuxt-link></li>
                    <li><nuxt-link to="/people/trades">Trades</nuxt-link></li>
                    <li>
                      <nuxt-link to="/onboarding/vendor-pool"
                        >Vendor Pool</nuxt-link
                      >
                    </li>
                    <li><nuxt-link to="/people/technicians">Technicians</nuxt-link></li>
                  </ul>
                </li>
                <li>
                  <nuxt-link to="/assets">Equipment</nuxt-link>
                </li>
                <li class="sub-with-sub">
                  <nuxt-link to="/performance/slas">Reports</nuxt-link>
                  <ul>
                    <li>
                      <nuxt-link to="/performance/slas"
                        >SLA Performance</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/reports/incident-reports"
                        >Incidents</nuxt-link
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <!-- dropdown-menu -->
          </li>
        </ul>
      </div>
      <!-- container -->
    </div>
    <!-- slim-navbar -->
    <div class="slim-mainpanel">
      <nuxt />
    </div>
  </app-layout>
</template>

<script>
import layoutMixin from "@/mixins/layout";

export default {
  components: {
    "app-layout": () => import("@/components/layouts/app")
  },
  head: () => ({
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: process.env.APP_URL + "/favicon.ico"
      }
    ]
  }),
  mixins: [layoutMixin]
};
</script>
