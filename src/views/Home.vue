<template>
  <div>
    <div class="hero">
      <div class="hero--content">
        <img class="logo img-fluid"
             src="../../static/vuepapers-mark.svg">
        <h1>{{ msg }}</h1>
        <p>
          <code>Vue.js themed wallpapers for nerds.</code>
        </p>
      </div>
    </div>
    <section class="section cards"
             v-if="allWallpapers.items">
      <div class="card"
         v-for="wallpaper in allWallpapers.items"
         :key="wallpaper.sys.id">
        <!-- TODO: Make the thumbnail width dynamic, based on the actual width of the card -->
        <img :src="`https://res.cloudinary.com/stanosmith/image/upload/w_200${wallpaper.fields.cloudinaryUrl}`"
             alt="">
        <h3>{{wallpaper.fields.name}}</h3>
        <div class="card--controls">
          <!-- TODO: Convert to button and force a download instead of opening a new tab -->
          <a :href="`https://res.cloudinary.com/stanosmith/image/upload${wallpaper.fields.cloudinaryUrl}`"
             :title="`Download ${wallpaper.fields.name}`">
            <f-icon icon-name="download"></f-icon>
          </a>
          <!-- TODO: Add attribution info -->
          <!-- TODO: Add author info -->
          <!--<button class="btn"
                  type="button">
            <f-icon icon-name="heart"></f-icon>
          </button>
          <button class="btn"
                  type="button">
            <f-icon icon-name="info"></f-icon>
          </button>-->
          <!--<pre><code>{{ wallpaper }}</code></pre>-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import fIcon from '@/components/FeatherIcon';

export default {
  name: 'home',
  data() {
    return {
      msg: 'Vuepapers',
    };
  },
  components: {
    fIcon,
  },
  computed: {
    ...mapState({
      allWallpapers: state => state.Contentful.allWallpapers,
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped
       lang="scss">
@import '../style/vars';

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

.hero,
.section {
  min-height: 70vh;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: $blue;
  padding-top: 32px;
  padding-bottom: 32px;
}

.card {
  /*flex-grow: 1;*/
  /*flex-basis: 30%;*/
  margin: 16px;
  background: $purple-dark;
  border: 3px solid $purple;
  color: $purple;
  text-decoration: none;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .btn {
    background: $purple-dark;
    color: $green;
    border: none;
  }

  code {
    text-align: left;
    font-size: 10px;
  }

  pre {
    max-height: 30em;
    /*overflow: auto;*/
  }
}

.card--controls {
  margin-bottom: 1em;
}
</style>
