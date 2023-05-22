<template>
  <a-switch
    v-model:checked="baseComponent.value"
    checked-children="是"
    un-checked-children="否"
    @change='(value) => baseComponent.valueChange(value)'
  />
</template>

<script lang='ts'>
import { ref, reactive, onBeforeMount, onMounted, defineComponent } from 'vue'
import { BaseCompoent } from '@/components/dynamicComponent/basehooks'

export default defineComponent({
  name: 'booleanComponent',
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
