<template>
  <v-container grid-list-md fluid fill-height>
    <v-layout>
      <v-flex md2>
        <v-card height="100%">
          <v-navigation-drawer
            color="primary"
            absolute
            dark
          >
            <v-list class="py-0" nav>
              <v-list-item two-line>
                <v-list-item-avatar>
                  <img src="https://s2.ax1x.com/2019/08/07/eIE51U.jpg">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>江城子</v-list-item-title>
                  <v-list-item-subtitle>明月夜，短松冈</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item
                v-for="item of itemList"
                :key="item.id"
                @click="$router.push({ path: item.to })"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.txt }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-flex>
      <v-flex md10>
        <v-card class="temp-card" height="100%">
          <router-view></router-view>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      itemList: [{
        id: 1,
        txt: 'Dashboard',
        icon: 'mdi-view-dashboard',
        to: '/menu1'
      }, {
        id: 2,
        txt: 'Photos',
        icon: 'mdi-image',
        to: '/menu2'
      }, {
        id: 3,
        txt: 'About',
        icon: 'mdi-help-box',
        to: '/menu3'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .temp-card {
    display: flex;
    >div {
      position: absolute;
      top: 40%;
      text-align: center;
      font-size: 36px;
      font-weight: bold;
    }
  }
</style>
