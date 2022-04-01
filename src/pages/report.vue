<template>
  <div>report444</div>
</template>

<script>
import {ref} from 'vue'
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    console.log(this.$route)
  },
  methods:{
    test() {
      this.$route.params;
    }
  }
}
</script>

<style>

</style>