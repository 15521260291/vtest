<template>
  <a-input placeholder="请输入" v-model:value="baseComponent.value" @change='baseComponent.valueChange($event)' />
</template>

<script lang='ts'>
import { ref, reactive, onBeforeMount, onMounted, defineComponent } from 'vue'
import { BaseCompoent } from '@/components/dynamicComponent/basehooks';

export default defineComponent({
  name: 'textComponent',
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
