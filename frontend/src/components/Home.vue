<template>
<div class="home">
<el-row display="margin-top:10px">
<el-input v-model="input" placeholder="请输入书名" style="display:inline-table; width: 30%; float:left"></el-input>
<el-button type="primary" @click="showBooks()" style="float:left; margin: 2px;">新增</el-button>
</el-row>
<el-row>
<el-table :data="bookList" style="width: 100%" border>
<el-table-column prop="id" label="编号" min-width="100">
<template slot-scope="scope"> {{ scope.row.pk }} </template>
</el-table-column>
<el-table-column prop="bookName" label="书名" min-width="100">
<template slot-scope="scope"> {{ scope.row.bookName }} </template>
</el-table-column>
<el-table-column prop="createTime" label="添加时间" min-width="100">
<template slot-scope="scope"> {{ scope.row.createTime }} </template>
</el-table-column>
</el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      input: '',
      bookList: []
    }
  },
  mounted: function () {
    this.showBooks()
  },
  methods: {
    showBooks () {
      this.$http.get('http://127.0.0.1:8000/api/show_books')
        .then((response) => {
          console.log(response.bodyText)
          var res = JSON.parse(response.bodyText)
          console.log(res)
          if (res.respCode === '000000') {
            console.log('ok')
            this.bookList = res.list
            console.log(res['list'])
          } else {
            this.$message.error('查询书籍失败')
            console.log(res['respMsg'])
          }
        })
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
