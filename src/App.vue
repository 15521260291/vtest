<script  lang="ts">
  import SingleField from './components/single-field/Single-field.vue'
  import testApp from './components/testApp/testApp.vue'
  import axios from 'axios'
  import { defineComponent, h, onBeforeMount, onMounted, ref } from 'vue'
  export default defineComponent({
    components: {SingleField},
    // render() {
    //   return h(SingleField, () => 'hello')
    //   // return h('div', 'test');
    // },
    setup() {
      const fields = ref([]);
      onBeforeMount(() => {
      })
      onMounted(() => {
        axios.get('/api/mockGetList').then(response => {
          // console.log('response', response.data.data);
          fields.value = response.data.data;
        })
      })
      return {
        fields
      }
    }
})
</script>

<template>
  <div class='container'>
    <SingleField v-for='(item, index) in fields' :field ='item' :key='index'></SingleField>
  </div>
</template>

<style scoped>
.container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
