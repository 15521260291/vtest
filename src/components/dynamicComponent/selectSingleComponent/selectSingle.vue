<template>
  <a-select
    v-model:value="baseComponent.value"
    style="width: 120px"
    @change="(value) => baseComponent.valueChange(value)"
  >
    <a-select-option v-for='(item, index) in baseComponent.options' :value="item.value" :key='index'>{{item.label}}</a-select-option>
  </a-select>
</template>

<script lang='ts'>
import { ref, reactive, onBeforeMount, onMounted, defineComponent } from 'vue'
import { BaseCompoent } from '@/components/dynamicComponent/basehooks'

export default defineComponent({
  name: 'selectSingle',
  setup() {

    const baseComponent = reactive(new BaseCompoent());
    // 初始化数据
    function init(fieldItem){
      baseComponent.init(fieldItem);
    }

    // function change(value){
    //   baseComponent.setSubmitValue(value);
    // }

    onBeforeMount(() => {
    })
    onMounted(() => {
    })
    return {
      baseComponent,
      init
    }
  }
})
</script>

<style scoped>
</style>
