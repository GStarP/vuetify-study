<template>
  <v-container grid-list-md fluid text-center fill-height>
    <v-layout wrap justify-center>
      <v-flex md10 fill-height>
        <v-card height="100%" elevation="4">
          <v-card class="loading-msg-container" height="80%" flat>
            <v-progress-circular
              id="loading-circle"
              :size="80"
              color="primary"
              v-if="isLoading"
              indeterminate
            ></v-progress-circular>
            {{ loadingMsg }}
          </v-card>
          <v-btn color="primary" @click="getMsg" large>GET</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      loadingMsg: '点击 GET 获取信息'
    }
  },
  methods: {
    getMsg () {
      this.loadingMsg = ''
      this.isLoading = true
      fetch('http://localhost:3000/getLoadingMsg', {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then((json) => {
        this.loadingMsg = json.data
        this.isLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .loading-msg-container {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
  }
  #loading-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -40px;
    margin-left: -40px;
  }
</style>
