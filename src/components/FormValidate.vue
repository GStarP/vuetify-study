<template>
  <v-container grid-list-md fluid fill-height>
    <v-layout wrap justify-center>
      <v-flex md8 fill-height>
        <v-card class="bg-card" height="100%" elevation="4">
          <v-card class="myform-wrapper" flat>
            <v-form
              ref="myForm"
              v-model="isLegal"
              lazy-validation
            >
              <v-text-field
                v-model="username"
                label="username"
                :counter="12"
                :rules="usernameRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="password"
                :counter="16"
                :rules="passwordRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-select
                v-model="sex"
                label="sex"
                :items="sexList"
                :rules="sexRules"
                required
              ></v-select>
              <v-btn
                color="primary"
                @click="validateForm"
              >
                Validate
              </v-btn>
              <v-btn
                color="warning"
                @click="resetForm"
              >
                Reset
              </v-btn>
            </v-form>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      isLegal: true,
      username: '',
      usernameRules: [
        v => !!v || '用户名不能为空',
        v => (v && v.length < 12) || '用户名不能超过12位'
      ],
      password: '',
      passwordRules: [
        v => !!v || '密码不能为空',
        v => (v && v.length < 16) || '密码不能超过16位'
      ],
      email: '',
      emailRules: [
        v => !!v || '邮箱不能为空',
        v => /.+@.+\..+/.test(v) || '邮箱格式不正确'
      ],
      sex: '',
      sexList: [
        '男',
        '女',
        '未知'
      ],
      sexRules: [
        v => !!v || '请选择性别'
      ]
    }
  },
  methods: {
    validateForm () {
      // 使用 validate() 触发验证
      if (this.$refs.myForm.validate()) {
        alert('验证成功!')
      } else {
        alert('验证失败!')
      }
    },
    resetForm () {
      this.$refs.myForm.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
  .bg-card {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .myform-wrapper {
      width: 50%;
      button {
        margin: 20px 10px 20px 0;
      }
    }
  }
</style>
