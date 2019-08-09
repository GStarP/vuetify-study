<template>
  <v-container grid-list-md fluid fill-height>
    <v-layout wrap justify-center>
      <v-flex md8 fill-height>
        <v-card height="100%" class="page-data-container">
          <v-list>
            <template
              v-for="(item, i) of pageList[pageNum-1]"
            >
              <v-list-item :key="i" class="page-data-item">
                <v-card width="100%" height="80" elevation="4">
                  <v-card-text class="text-center">{{ item.txt }}</v-card-text>
                </v-card>
              </v-list-item>
            </template>
          </v-list>
          <!--
            length: 总页数
            total-visible: 包括有效状态的箭头(所以设置为 7 才能保证中间页数的前后两页能显示)
          -->
          <v-pagination
            id="page-divider"
            v-model="pageNum"
            :length="10"
            :total-visible="7"
          ></v-pagination>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      pageNum: 1,
      // 模拟获取到的分页信息
      pageList: [
        [{
          txt: 'page1'
        }, {
          txt: 'page1'
        }, {
          txt: 'page1'
        }, {
          txt: 'page1'
        }, {
          txt: 'page1'
        }],
        [{
          txt: 'page2'
        }, {
          txt: 'page2'
        }, {
          txt: 'page2'
        }, {
          txt: 'page2'
        }, {
          txt: 'page2'
        }],
        [{
          txt: 'page3'
        }, {
          txt: 'page3'
        }, {
          txt: 'page3'
        }, {
          txt: 'page3'
        }, {
          txt: 'page3'
        }],
        [{
          txt: 'page4'
        }, {
          txt: 'page4'
        }, {
          txt: 'page4'
        }, {
          txt: 'page4'
        }, {
          txt: 'page4'
        }],
        [{
          txt: 'page5'
        }, {
          txt: 'page5'
        }, {
          txt: 'page5'
        }, {
          txt: 'page5'
        }, {
          txt: 'page5'
        }],
        [{
          txt: 'page6'
        }, {
          txt: 'page6'
        }, {
          txt: 'page6'
        }, {
          txt: 'page6'
        }, {
          txt: 'page6'
        }],
        [{
          txt: 'page7'
        }, {
          txt: 'page7'
        }, {
          txt: 'page7'
        }, {
          txt: 'page7'
        }, {
          txt: 'page7'
        }],
        [{
          txt: 'page8'
        }, {
          txt: 'page8'
        }, {
          txt: 'page8'
        }, {
          txt: 'page8'
        }, {
          txt: 'page8'
        }],
        [{
          txt: 'page9'
        }, {
          txt: 'page9'
        }, {
          txt: 'page9'
        }, {
          txt: 'page9'
        }, {
          txt: 'page9'
        }],
        [{
          txt: 'page10'
        }, {
          txt: 'page10'
        }, {
          txt: 'page10'
        }, {
          txt: 'page10'
        }, {
          txt: 'page10'
        }]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-data-container {
    padding: 20px 20px;
  }
  .page-data-item {
    margin: 15px 0;
    >div {
      display: flex;
      align-items: center;
      >div {
        font-size: 24px;
      }
    }
  }
  #page-divider {
    position: absolute;
    bottom: 20px;
  }
</style>
