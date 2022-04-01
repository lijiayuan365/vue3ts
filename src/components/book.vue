<template>
  <div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
import {ref, toRefs,h, reactive } from 'vue'
export default {
  props:{
    title:String
  },
  setup(props,context) {
    console.log(`book componet`)
    // const title = ref(props)
    const title = toRefs(props)
    console.log(title)
    const num = ref(0)
    const book = reactive({title:'Vue3'})
    return () => h('div',[num.value,book.title])
  }
}
</script>

<style>

</style>