
<script lang='ts'>
import { ref, reactive, onBeforeMount, onMounted, defineComponent, h } from 'vue'

export default defineComponent({
  name: 'testApp',
  render() {
    return h('div', this.$slots.footer());
  },
  setup() {
    onBeforeMount(() => {
    })
    onMounted(() => {
    })
    return {}
  }
})
</script>

<style scoped>
</style>
