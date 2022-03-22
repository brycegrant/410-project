<script>
export default {
//   data() {
//     return {
//       count: 0
//     }
//   }
    props: {
        count: 0

    },
    methods: {
    onClickButton (event) {
      this.$emit('clicked', this.count+1)
    }
  }
}
</script>

<template>
  <button @click="onClickButton">
    You clicked me {{ count }} times.
  </button>
</template>