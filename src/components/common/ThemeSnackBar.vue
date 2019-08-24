<template>
  <v-snackbar
    v-model="show"
    :color="color"
    :timeout="2000"
    top
  >
    <v-icon color="white">{{ icon }}</v-icon>
    <div>{{ text }}</div>
    <v-icon @click="show = false">mdi-close-circle</v-icon>
  </v-snackbar>
</template>

<script>
export default {
  data () {
    return {
      icon: '', // 提示框图标
      color: '' // 提示框颜色
    }
  },
  props: {
    // 是否显示提示框
    show: {
      type: Boolean,
      default: false
    },
    // 提示框主题
    theme: {
      type: String,
      default: 'success'
    },
    // 提示框文字
    text: {
      type: String,
      default: ''
    }
  },
  watch: {
    theme: function (val) {
      // 根据主题切换图标和颜色
      switch (val) {
        case 'success':
          this.icon = 'mdi-checkbox-marked-circle'
          this.color = 'success'
          break
        case 'error':
          this.icon = 'mdi-alert'
          this.color = 'error'
      }
    }
  }
}
</script>
