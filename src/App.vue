<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="ml-2 enable-click" @click="$router.push({ path: '/' })">Vuetify-Study</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- target="_blank" 规定了新标签页打开 -->
      <v-btn
        text
        href="http://94.191.110.118/"
        target="_blank"
      >
        <span class="mr-2">Rocket-Girl-101</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>
