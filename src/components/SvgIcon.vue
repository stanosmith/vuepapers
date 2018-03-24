<template>
  <span class="svg-icon"
        v-html="svgData"></span>
</template>

<script>
const YIN_YANG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16 4 4 0 1 1 0-8 4 4 0 1 0 0-8zm0 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>';

export default {
  name: 'svg-icon',
  props: {
    iconName: {
      type: String,
    },
  },
  computed: {
    svgData() {
      // TODO: Return an icon based on the iconName prop
      return YIN_YANG;
    },
  },
};
</script>

<!-- Intentionally not including styles since scoped styles don't work when
     svg is injected via computed method -->
