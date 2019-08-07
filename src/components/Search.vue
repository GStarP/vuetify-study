<template>
  <v-container grid-list-md fluid>
    <v-layout justify-center mt-4>
      <v-flex md6 align-center>
        <!-- v-input不是输入框???我惊了 -->
        <v-text-field
          id="search-input-company"
          label="Search"
          append-icon="mdi-magnify"
          hint="输入关键词查询公司信息"
          v-model="keyword"
          @click:append="fakeSearch"
          solo
          rounded
          clearable
          autofocus
        ></v-text-field>
      </v-flex>
    </v-layout>
    <CompanyList></CompanyList>
  </v-container>
</template>

<script>
import CompanyList from './search/CompanyList'
export default {
  data () {
    return {
      keyword: ''
    }
  },
  components: {
    CompanyList
  },
  methods: {
    fakeSearch () {
      alert(this.keyword)
    }
  }
}
</script>
