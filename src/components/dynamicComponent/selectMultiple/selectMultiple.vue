<template>
  <a-select
    v-model:value="baseComponent.value"
    mode="multiple"
    style="width: 120px"
    placeholder="Please select"
    @change="(value) => baseComponent.valueChange(value)"
  >
    <a-select-option v-for='(item, index) in baseComponent.options' :value="item.value" :key='index'>{{item.label}}</a-select-option>
  </a-select>
</template>

<script lang='ts'>
import { ref, reactive, onBeforeMount, onMounted, defineComponent } from 'vue'
import { BaseCompoent } from '@/components/dynamicComponent/basehooks'

export default defineComponent({
  name: 'selectMultiple',
  setup() {

    const baseComponent = reactive(new BaseCompoent());
    // 初始化数据
    function init(fieldItem){
      baseComponent.init(fieldItem);
    }

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
