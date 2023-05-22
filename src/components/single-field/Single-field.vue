<template>
  <div class='singleContainer'>
    <div class='label'><label>{{fieldTemp.label}}:</label></div>
    <div class='content'>
      <div class='show' v-if='!isEdit' @click.stop='showDynamicC()'>
        <div class='value' >
<!--          option、text-->
          <span class='normalValue'  v-if='normalType.includes(fieldTemp.fieldType)'>{{showValue()}}</span>
<!--          boolean类型-->
          <span class='boolean' v-else-if='fieldTemp.fieldType === "boolean"'>
            <span v-if='showValue() === "-"'>-</span>
            <span v-else>
              <a-badge :status="showValue() ? 'success' : 'error'" />{{showValue() ? '是' : '否'}}
            </span>
          </span>
<!--          进度条-->
          <span class='progress' v-else-if='fieldTemp.fieldType === "progress"'>
              <a-progress :percent="fieldTemp.value" />
            </span>
        </div>
        <span class="edit-icon">
          <edit-outlined />
        </span>
      </div>
<!--      编辑模式-->
      <div class='edit' v-else>
        <component ref='domRef' :is="dynamicC"></component>
        <span class="submit-icon" v-if='fieldTemp.fieldType !== "boolean"' @click='submit()'>
          <check-outlined />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  h,
  defineComponent,
  Component,
  ComponentPublicInstance,
  getCurrentInstance, nextTick
} from 'vue'
import componentmap from '@/components/single-field/componentmap';
import textComponent from '@/components/dynamicComponent/textComponent/textComponent.vue'
import axios from 'axios'
export default defineComponent({
  name: 'Single-field',
  components: {
    textComponent
  },
  props: ['field'],
  setup(props, context) {

    const normalType = ['option', 'option-multiple', 'text'];

    const isEdit = ref<boolean>(false);

    const fieldTemp = reactive(props.field);

    const dynamicC = ref<ComponentPublicInstance | null>(null);

    let isOver = false;

    let contentDom = null;

    const domRef = ref(null);

    // 展示值
    function showValue(): string{
      let result = null;
      if(fieldTemp.fieldType === 'text'){
         result = fieldTemp?.value;
      }else if(fieldTemp.fieldType === 'option'){
        result = fieldTemp?.value?.label;
      }else if(fieldTemp.fieldType === 'option-multiple'){
        result = fieldTemp.value.map(item => item.label).join(',');
      }else if(fieldTemp.fieldType === 'boolean'){
        result = fieldTemp?.value;
      }
      return result === null ? '-' : result;
    }

    // 获取动态组件
    function getDynamic(type: string): ComponentPublicInstance | null{
      return componentmap[type];
    }

    // 展示动态组件
    function showDynamicC(): any{

      // console.log('dd', domRef);

      const clickCb = (e) => {
        console.log('click')
        // 当前组件存在焦点、鼠标还在组件上、正在编辑状态
        if(fieldTemp.fieldType !== 'boolean'){
          if(contentDom.contains(document.activeElement) || contentDom.contains(e.target) || isOver){
            return;
          }
        }
        document.removeEventListener('click', clickCb);
        submit();
      };

      document.addEventListener('click', clickCb);

      isEdit.value = true;
      dynamicC.value = getDynamic(fieldTemp.fieldType);
      nextTick(() => {
        domRef.value.init(fieldTemp);
      })
    }

    // 提交
    function submit() {
      const body = domRef.value.baseComponent.getSubmitValue();
      console.log('submit', body)
      axios.post('/api/updateById', body).then(res => {
        console.log('返回', res)
        fieldTemp.value = body.submitValue;
        isEdit.value = false;

      })
    }


    onBeforeMount(() => {
    })
    onMounted(() => {
      const { proxy } = getCurrentInstance();
      contentDom =  proxy.$el.querySelector('.content');
      // console.log(contentDom, 'ccc');
      contentDom.addEventListener('mouseover', (e) => {
        isOver = true;
      })

      contentDom.addEventListener('mouseleave', (e) => {
        isOver = false;
      })
    })

    return {
      isEdit,
      dynamicC,
      showDynamicC,
      submit,
      showValue,
      fieldTemp,
      normalType,
      domRef
    }
  }
})
</script>

<style scoped>
 .singleContainer{
    display: flex;
  }

 .label{
   margin-right: 12px;
   width: 40px;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   text-align: right;
 }

 /*.content{*/
 /*  height: 32px;*/
 /*}*/
 .show{
   display: flex;
   height: 32px;
   line-height: 30px;
 }

 .edit{
   display: flex;
   align-items: center;
   height: 32px;
 }

 label{
   line-height: 32px;
 }

  .edit-icon{
   display: none;
   box-sizing: border-box;
   padding: 0px 4px;
   cursor: pointer;
   background: #d0d0d0;
   border: 1px solid #bbbbbb;
   border-top-right-radius: 4px;
   border-bottom-right-radius: 4px;
  }

  .submit-icon{
    display: inline-block;
    box-sizing: border-box;
    height: 32px;
    line-height: 30px;
    padding: 0px 4px;
    cursor: pointer;
    background: #d0d0d0;
    border: 1px solid #bbbbbb;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .show:hover .value{
    border: 1px solid #bbbbbb;
    border-radius: 4px 0px 0px 4px;
  }

  .show:hover .edit-icon{
    display: inline-block;
  }

  .value{
    display: inline-block;
    min-width: 100px;
    height: 100%;
    line-height: inherit;
  }

  input{
    max-width: 168px;
  }

  .ant-badge{
    width: 10px;
  }

</style>
