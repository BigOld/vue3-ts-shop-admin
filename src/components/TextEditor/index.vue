<template>
  <div id="editor" />
</template>

<script lang="ts" setup>
import { onMounted, watch, ref } from 'vue'
import E from 'wangeditor'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

interface EmitsType {
  (e: 'update:model-value', value:string) :void
}

const emit = defineEmits<EmitsType>()

const editor = ref<InstanceType<typeof E> | null>(null)

const unWatchModelValue = watch(() => props.modelValue, () => {
  editor.value?.txt.html(props.modelValue)
  unWatchModelValue() // 只是为了初始化而监视，后面就不用再监视了
})

onMounted(() => {
  initEditor()
})

const initEditor = () => {
  editor.value = new E('#editor')

  editor.value.config.onchange = function (newHtml: string) {
    emit('update:model-value', newHtml)
  }

  editor.value.config.zIndex = 500

  editor.value.create()
}
</script>
