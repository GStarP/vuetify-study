<template>
  <v-layout justify-center wrap>
    <v-flex md8>
      <v-card>
        <v-list>
          <template
            v-for="(comp, i) of companyList"
          >
            <v-list-item
              :key="comp.id"
              two-line
            >
              <v-card class="company-item-name" flat>
                {{ comp.name }}
              </v-card>
              <div class="company-item-attr">
                <div>股价：{{ getRandomDouble(comp.id, 1) }}</div>
                <div>市值：{{ getRandomDouble(comp.id, 2) }}</div>
              </div>
              <div class="company-item-attr">
                <div>涨幅：{{ getRandomDouble(comp.id, 3) }}%</div>
                <div>跌幅：{{ getRandomDouble(comp.id, 4) }}%</div>
              </div>
              <div class="company-item-attr">
                <div>开盘：{{ getRandomDouble(comp.id, 5) }}</div>
                <div>收盘：{{ getRandomDouble(comp.id, 6) }}</div>
              </div>
              <div class="company-item-attr">
                <div>风险：{{ getRandomDouble(comp.id, 7) }}</div>
                <div>机遇：{{ getRandomDouble(comp.id, 8) }}</div>
              </div>
              <div class="company-item-icons">
                <v-icon class="edit-company" @click.stop="editCompany(i)" large>mdi-pencil-box</v-icon>
                <v-icon class="delete-company" @click="deleteCompany(i)" large>mdi-delete</v-icon>
              </div>
            </v-list-item>
            <v-divider :key="`divider-${i}`" v-if="i != (companyList.length - 1)"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
    <!-- 绑定一个 bool 来控制显示与否 -->
    <v-dialog width="800" v-model="dialogShow" persistent>
      <v-card height="560" width="100%" id="dialog-company">
        <v-card-title>{{ this.companyList[this.dialogCompanyIndex].name }}</v-card-title>
        <v-card-text>信息暂无</v-card-text>
        <div class="dialog-company-btns">
          <v-btn color="primary" @click="submitEdit">提交</v-btn>
          <v-btn color="primary" @click="dialogShow = false">取消</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <theme-snackbar
      :show="snackbarShow"
      :theme="snackbarTheme"
      :text="snackbarText"
    ></theme-snackbar>
  </v-layout>
</template>

<script>
export default {
  name: 'company-list',
  components: {
    'theme-snackbar': () => import('../common/ThemeSnackBar')
  },
  data () {
    return {
      dialogShow: false,
      dialogCompanyIndex: 0,
      submitSuccess: false,
      companyList: [
        {
          id: 1,
          name: '郝呆科技'
        },
        {
          id: 2,
          name: '紫宁娱乐'
        },
        {
          id: 3,
          name: '小草影业'
        },
        {
          id: 4,
          name: '紫婷服装'
        },
        {
          id: 5,
          name: '小七电竞'
        },
        {
          id: 6,
          name: '青橙武术'
        },
        {
          id: 7,
          name: '甜甜学会'
        }
      ],
      snackbarShow: false,
      snackbarTheme: '',
      snackbarText: ''
    }
  },
  methods: {
    getRandomDouble (seed, type) {
      let max = 8
      let rd = Math.random() * max
      rd = (rd % type) + Math.abs(seed - 3.5864)
      return rd.toFixed(2)
    },
    editCompany (index) {
      this.dialogCompanyIndex = index
      this.dialogShow = true
    },
    deleteCompany (index) {
      this.companyList.splice(index, 1)
    },
    submitEdit () {
      this.dialogShow = false
      this.showSuccessSnackBar('修改成功！')
    },
    showSuccessSnackBar (text) {
      this.snackbarTheme = 'success'
      this.snackbarText = text
      // 这里会出现一个 BUG, 我故意没有修改掉以作提醒
      // 当子组件 ThemeSnackBar 中控制显示的值由于 timeout 到时已经变成 false 时
      // 由于 Vue 强调子组件不允许修改父组件的状态, 所以父组件中控制显示的 snackbarShow 依然为 true
      // 所以当你再次点击编辑按钮时, 即使没有点击提交, 提示框也会直接弹出
      // 由此可见将 snackbar 封装组件给父组件调用还是挺难设计的
      // 目前有一个解决方案就是使用 vuex 统一管理状态, 希望有大神能给出更好地解决方案
      this.snackbarShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .company-item-name {
    font-size: 18px;
    margin-right: 20px;
  }
  .company-item-attr {
    padding: 10px;
    >div:first-child {
      margin-bottom: 10px;
    }
  }
  .company-item-icons {
    position: absolute;
    right: 16px;
    >i:first-child {
      margin-right: 8px;
    }
    .edit-company:hover {
      color: green;
    }
    .delete-company:hover {
      color: red;
    }
  }
  #dialog-company {
    >div:last-child {
      position: absolute;
      bottom: 20px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      >button:first-child {
        margin-right: 28px;
      }
    }
  }
  .submit-msg {
    position: fixed;
    width: 360px;
    top: 50%;
    margin-top: -40px;
  }
</style>
