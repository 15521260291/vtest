<template>
  <a-button-group>
    <a-button @click="decline">
      <template #icon><minus-outlined /></template>
    </a-button>
    <a-progress :percent="baseComponent.value ? baseComponent.value : 0" />
    <a-button @click="increase">
      <template #icon><plus-outlined /></template>
    </a-button>
  </a-button-group>
</template>

<script lang='ts'>
import { ref, reactive, onBeforeMount, onMounted, defineComponent } from 'vue'
import { BaseCompoent } from '@/components/dynamicComponent/basehooks'

export default defineComponent({
  name: 'progressComponent',
  setup() {

    const baseComponent = reactive(new BaseCompoent());
    // 初始化数据
    function init(fieldItem){
      baseComponent.init(fieldItem);
    }

    function decline(): void{
      let value = baseComponent.value - 10;
      if (value < 0) {
        value = 0;
      }
      baseComponent.setValue(value);
    }

    function increase(): void{
      let value = baseComponent.value + 10;
      if (value > 100) {
        value = 100;
      }
      baseComponent.setValue(value);
    }

    onBeforeMount(() => {
    })
    onMounted(() => {
    })
    return {
      baseComponent,
      init,
      decline,
      increase
    }
  }
})
</script>

<style scoped>
</style>
