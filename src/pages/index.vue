<template>
  <div class="index">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <div v-for="(item,i) in routes" :key="i" @click="goRoute(item.route)">{{item.name}}</div>
          <div ref="refDiv">aa</div>
        </el-aside>
        <el-main>
          <div class="main">
            <!-- <book title="title"></book> -->
            <!-- <data-component level=1>11</data-component> -->
            <!-- <data-component level=2>11</data-component> -->
            <!-- <router-view></router-view> -->
            <!-- <div class="page" @scroll="onscroll" >
              <div v-for="(item,i) in viewList" :key="i">{{item}}</div>
            </div> -->
            <!-- <div class="box"></div> -->
            <div>{{key}}</div>
            <div>{{testId}}</div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { onMounted, ref,reactive } from 'vue'
import DataComponent from '../components/todoList.vue'
import book from '../components/book.vue';
// const count = ref(0)
let list = [];
for(let i=0;i<1000;i++) {
  list[i] = `item-${i}`
}
let preList = [];
let postList = [];
export default {
  setup() {
    let testId = ref(1)
    let key = 1;
    let routes = [
      {name:'report',route:'/report/id/name'},
      {name:'data',route:'/data'},
      {name:'1234',route:'/report/12/kk'},
    ]
    let refDiv = ref(null);
    setTimeout(()=>{
        testId.value=2
        key=2;
      },2000)
    onMounted(()=> {
      console.log(refDiv)
      console.log('onMounted',refDiv.value)
      refDiv.value.style.color = 'red'
      
    })
    
    let viewList = [];
    
    return {
      routes,
      refDiv,
      viewList,
      testId,key
    }
  },
  components:{
    DataComponent,
    book
  },
  mounted() {
    // this.goHome();
    console.log(this.routes)
    this.viewList = list.splice(0,40);
    // console.log(this.viewList)
    postList = JSON.parse(JSON.stringify(list))
  },
  methods: {
    goRoute(route) {
      this.$router.push(route)
    },
    goHome() {
      let _this = this;
      setTimeout(() => {
        this.$router.push("/report");
        setTimeout(() => {
          this.$router.p;
        }, 2000);
      }, 8000);
    },
    onscroll(e) {
      if(!this._change) {
        console.log('aa')
        this._change = true;
        let scrollHeight = e.target.scrollHeight; // 滚动区域高
        let scrollTop = e.target.scrollTop;
        let offsetHeight = e.target.getBoundingClientRect().height;
        let currentHeight= scrollTop +offsetHeight;
        console.log(currentHeight)
        console.log(scrollHeight)
        if(currentHeight>=scrollHeight-100) {
          preList.push(...this.viewList.splice(0,10))
          this.viewList.push(...postList.splice(0,10))
        }
        setTimeout(()=>{
          this._change = false;
        },1000)
      }
      // if(this)
    }
  },
};
</script>

<style scoped>
.index {
  width: 100vw;
  height: 100vh;
}
.main {
  width: 100%;
  min-height: 600px;
  background: #a7a5a5;
}
.page {
  width: 100px;
  height: 400px;
  overflow: scroll;
  overflow-anchor: auto;
  color: red;
}
.box {
  width: 100px;
  height: 100px;
  border: solid 1px red;
}
</style>