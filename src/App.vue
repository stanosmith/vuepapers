<template>
  <div id="app" class="app">

    <router-view/>

    <footer class="footer">
      <div>
        <!-- TODO: Use SvgIcon component -->
        Made with <svg-icon icon-name="yin-yang"></svg-icon> by <a href="https://twitter.com/stanosmith">@stanosmith</a>
      </div>
    </footer>
  </div>
</template>

<script>
import svgIcon from '@/components/SvgIcon';

export default {
  name: 'App',
  components: {
    svgIcon,
  },
};
</script>


<style lang="scss">

  @import "style/vars";
  @import "style/global";

</style>
