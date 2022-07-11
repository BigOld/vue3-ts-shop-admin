import { defineComponent, ref } from 'vue'

interface PropsType {
  msg: string
}

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup () {
    const count = ref(0)
    return (props: PropsType) => (
      <div>
        <p>{props.msg}</p>
        <p>{count.value}</p>
      </div>
    )
  }
})

// import { defineComponent } from 'vue'

// export default defineComponent({
//   props: {
//     msg: {
//       type: String,
//       required: true
//     }
//   },
//   data () {
//     return {
//       count: 0
//     }
//   },
//   render () {
//     return (
//       <div>
//         <div>{this.msg}</div>
//         <p>{this.count}</p>
//       </div>
//     )
//   }
// })
