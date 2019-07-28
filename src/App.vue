<template>
  <div id="app" class="app">
    <router-view />

    <footer class="footer">
      <div class="footer--item">
        <!-- TODO: Use SvgIcon component -->
        Made with <svg-icon icon-name="yin-yang"></svg-icon> by
        <a href="https://twitter.com/stanosmith" target="_blank">@stanosmith</a>
      </div>
      <div class="footer--item">
        <a href="https://www.contentful.com/" rel="nofollow" target="“_blank”"
          ><img
            src="https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg"
            style="max-width:100px;width:100%;"
            alt="Powered by Contentful"
        /></a>
      </div>
    </footer>
  </div>
</template>

<script>
import svgIcon from '@/components/SvgIcon';

export default {
  name: 'app',
  components: {
    svgIcon,
  },
};
</script>

<style lang="scss">
@import 'style/vars';
@import 'style/global';
</style>
