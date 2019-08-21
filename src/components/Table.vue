<template>
  <v-container fluid>
    <!-- 按 headers 和 items 渲染表格 -->
    <v-data-table
      class="elevation-2 ml-10 mr-10"
      :headers="headers"
      :items="requests"
      :loading="requestsLoading"
      loading-text="申请加载中......"
      hide-default-footer
    >
      <!-- 自定义的 验证图片 列 -->
      <template v-slot:item.img="{ item }">
        <a>点此查看</a>
      </template>
      <!-- 自定义的 申请处理 列 -->
      <template v-slot:item.action="{ item }">
        <v-icon
          class="mr-2"
          @click="accept(item.id)"
        >mdi-checkbox-marked</v-icon>
        <v-icon
          @click="refuse(item.id)"
        >mdi-close-box</v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      // 表头列表
      headers: [
        {
          text: '银行名称',
          sortable: false,
          value: 'name'
        },
        {
          text: '银行编号',
          sortable: true,
          value: 'num'
        },
        {
          text: 'Swift Code',
          sortable: false,
          value: 'code'
        },
        {
          text: '银行公邮',
          sortable: false,
          value: 'email'
        },
        {
          text: '验证图片',
          sortable: false,
          value: 'img'
        },
        {
          text: '处理申请',
          sortable: false,
          value: 'action'
        }
      ],
      // 数据列表(没有数据时应为 undefined)
      requests: [
        {
          id: 1,
          name: '郝呆银行',
          num: 123456,
          code: 'HXW123456',
          email: 'hxwnb@qq.com'
        },
        {
          id: 2,
          name: '紫宁银行',
          num: 103091,
          code: 'ZZN103091',
          email: 'lovezzn@163.com'
        },
        {
          id: 3,
          name: '小草银行',
          num: 991004,
          code: 'LXC991004',
          email: 'lxcclchg@126.com'
        },
        {
          id: 4,
          name: '紫婷银行',
          num: 200000,
          code: 'ZZN200000',
          email: 'mimilee@gmail.com'
        },
        {
          id: 5,
          name: '小七银行',
          num: 777777,
          code: 'LMY777777',
          email: 'cjkalmy@sina.com'
        }
      ]
    }
  },
  computed: {
    // 控制是否正在加载
    requestsLoading () {
      return true
    }
  },
  methods: {
    accept (id) {
      alert(`同意申请${id}`)
    },
    refuse (id) {
      alert(`拒绝申请${id}`)
    }
  }
}
</script>
