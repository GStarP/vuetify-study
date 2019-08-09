<template>
  <v-container grid-list-md fluid text-center>
    <v-layout wrap>
      <v-flex
        v-for="item in naviList"
        :key="item.id"
        :class="{ [`md${getWidth(item.id)}`]: true }"
      >
        <!-- v-hover还要在其包裹的元素上加 :elevation -->
        <v-hover v-slot:default="{ hover }">
          <v-card class="navi-card" color="primary" dark @click="navigateTo(item.to)" :elevation="hover ? 24 : 2">
            <!-- 固定宽高比 -->
            <v-responsive :aspect-ratio="16/9">
              <v-card-text class="navi-card-txt" v-text="item.txt"></v-card-text>
            </v-responsive>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      lineNum: 4,
      naviList: [{
        id: 1,
        txt: '菜单',
        to: '/menu'
      }, {
        id: 2,
        txt: '输入&列表&对话框&提示',
        to: '/search'
      }, {
        id: 3,
        txt: 'Loading动画',
        to: '/loading'
      }, {
        id: 4,
        txt: '分页',
        to: '/page'
      }, {
        id: 5,
        txt: 'Card',
        to: ''
      }, {
        id: 6,
        txt: 'Card',
        to: ''
      }]
    }
  },
  methods: {
    getWidth (id) {
      let rowNum = Math.floor(this.naviList.length / this.lineNum)
      if (id <= rowNum * this.lineNum) {
        return 12 / this.lineNum
      }
      return 12 / (this.naviList.length % this.lineNum)
    },
    navigateTo (url) {
      this.$router.push({ path: url })
    }
  }
}
</script>

<style lang="scss" scoped>
  .navi-card {
    >div {
      display: flex;
      align-items: center;
      .navi-card-txt {
        font-size: 26px;
      }
    }
  }
</style>
