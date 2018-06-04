<template lang="pug">
  {{ sample }}
</template>
<script>
export default {
  name() {
    return {
      name: "app"
    };
  },
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
