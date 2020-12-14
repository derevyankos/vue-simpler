import {
  createApp,
  defineAsyncComponent,
  ref,
  reactive,
  onMounted

} from 'vue'

process.$ctx = {
  createApp,
  defineAsyncComponent,
  ref,
  reactive,
  onMounted
}

export {
  createApp,
  defineAsyncComponent,
  ref,
  reactive,
  onMounted
}