<template>
  <div id="app" class="app">
    <router-view/>

    <footer class="footer">
      <p>
        <!-- TODO: Use SvgIcon component -->
        Made with <span class="svg-icon"><svg alt="yin &amp; yang" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16 4 4 0 1 1 0-8 4 4 0 1 0 0-8zm0 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg></span> by <a href="https://twitter.com/stanosmith">@stanosmith</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>


<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Oxygen+Mono|Oxygen:300,400,700');
  @import "vars";

  html, body {
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Oxygen", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $purple-light;
    background-color: $purple-dark;
  }

  pre, code, .monospace, .code {
    font-family: "Oxygen Mono", monospace;
    color: #42b883;
    background-color: $blue;
  }

  code {
    padding: .25rem .5rem;
    display: inline-block;
    border-radius: 2px;
  }

  h1, .h1, h2, .h2 {
    font-weight: lighter;
    margin-top: 0;
  }

  h1, .h1 {
    font-size: 3rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b883;
  }

  .app {
    text-align: center;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .svg-icon {
    display: inline-block;

    svg {
      overflow: hidden;
      width: 20px;
      height: 20px;
      fill: $green;
      display: inline-block;
      vertical-align: middle;
    }
  }

  .footer {
    padding: 10vh 16px;
  }

</style>
