<template lang="pug">
  p(@click="sampleMethod" :href="lonk") {{ sample }}
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      title: "Vue Template",
      sample: "Hey!",
      lonk: "https://startpage.com"
    };
  },
  methods() {
    return {
      sampleMethod() {
        this.title = "What a wonderful kind of day!";
      }
    };
  }
};
</script>
<style lang="stylus">
</style>
