<template>
  <v-container grid-list-md fluid>
    <v-layout justify-center>
      <v-flex md6>
        <!-- v-input不是输入框???我惊了 -->
        <v-text-field
          label="Search"
          append-icon="mdi-magnify"
          solo
          rounded
          clearable
          @click:append="fakeSearch"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
    // TODO
  },
  methods: {
    fakeSearch () {
      alert('挖掘机技术哪家强？')
    }
  }
}
</script>
