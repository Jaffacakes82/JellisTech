<template>
  <div class="is-full-height">
    <section class="hero is-fullheight is-bold">
      <div class="console-text">
        <p class="date-text">Last login: {{getDate()}}</p>
        <div class="command-text">
          <div class="tags has-addons is-marginless">
            <span class="tag is-light is-marginless">Joe@jellistech</span>
            <span class="tag is-dark is-marginless">$</span>
          </div>
          <span>Hello World!</span>
        </div>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <progress class="progress" value="15" max="100">15%</progress>
          <h1 class="title">jellis.tech<span class="blinking-cursor">|</span>
          </h1>
          <router-link class="button is-primary is-inverted is-outlined" to="blog">Blog</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    getDate() {
      let date = new Date();
      return date.toLocaleString();
    }
  }
};
</script>

<style lang="scss">
.hero {
  font-family: Consolas;
  background-color: #073642;
  color: #93a1a1;

  .console-text {
    display: inline-block;
    padding: 0.5rem;

    .tags {
      display: inline-block;
      padding-right: 0.5rem;
    }

    .date-text {
      color: #859900;
    }

    .command-text {
      padding-top: 0.5rem;
    }
  }

  .title {
    color: unset;
    .blinking-cursor {
      -webkit-animation: 1s blink step-end infinite;
      -moz-animation: 1s blink step-end infinite;
      -ms-animation: 1s blink step-end infinite;
      -o-animation: 1s blink step-end infinite;
      animation: 1s blink step-end infinite;
    }
  }
}

@keyframes "blink" {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #93a1a1;
  }
}

@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #93a1a1;
  }
}

@-webkit-keyframes "blink" {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #93a1a1;
  }
}

@-ms-keyframes "blink" {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #93a1a1;
  }
}

@-o-keyframes "blink" {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #93a1a1;
  }
}
</style>