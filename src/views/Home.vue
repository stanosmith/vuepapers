<template>
  <div>
    <div class="hero">
      <div class="hero--content">
        <img class="logo img-fluid" src="../../static/vuepapers-mark.svg">
        <h1>{{ msg }}</h1>
        <p>
          <code>Vue.js themed wallpapers for nerds. Coming soon&hellip;</code>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Vuepapers',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../style/vars";

  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $purple;
    background: linear-gradient(180deg, rgba(178, 136, 192, 0), $purple);

    .logo {
      display: block;
      margin: 0 auto;
    }

    &--content {
      padding: 32px 16px;
    }
  }

  .hero, .section {
    min-height: 90vh;
  }

</style>
