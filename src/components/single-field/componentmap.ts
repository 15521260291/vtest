import textComponent from '@/components/dynamicComponent/textComponent/textComponent.vue'
import selectSingle from '@/components/dynamicComponent/selectSingleComponent/selectSingle.vue'
import selectMultiple from '@/components/dynamicComponent/selectMultiple/selectMultiple.vue'
import booleanComponent from '@/components/dynamicComponent/booleanComponent/booleanComponent.vue'
import progressComponent from '@/components/dynamicComponent/progressComponent/progressComponent.vue'

export default {
  'text': textComponent,
  'option': selectSingle,
  'option-multiple': selectMultiple,
  'boolean': booleanComponent,
  'progress': progressComponent
}
