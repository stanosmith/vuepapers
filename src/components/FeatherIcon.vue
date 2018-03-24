<template>
  <span class="f-icon"
        v-html="svgData"></span>
</template>

<script>
import feather from 'feather-icons';

export default {
  name: 'feather-icon',
  props: {
    iconName: {
      type: String,
      default: 'activity',
    },
  },
  computed: {
    svgData() {
      return feather.icons[this.iconName].toSvg();
    },
  },
};
</script>

<!-- Intentionally not including styles since scoped styles don't work when
     svg is injected via computed method -->
