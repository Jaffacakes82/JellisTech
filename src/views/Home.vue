<template>
  <div class="is-full-height">
    <section class="hero is-fullheight is-bold">
      <div class="console-text">
        <p class="date-text">Last login: {{getDate()}}</p>
        <div class="command-text">
          <span class="tag">
            Joe@jellistech&nbsp;
            <i class="fas fa-chevron-right"></i>
          </span>
          <span>{{commandText}}</span>
          <span v-show="showCursor" class="blinking-cursor">|</span>
        </div>
        <div v-show="showSecondCmdLine" class="command-text">
          <span class="tag">
            Joe@jellistech&nbsp;
            <i class="fas fa-chevron-right"></i>
          </span>
          <span class="blinking-cursor">|</span>
        </div>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <progress v-show="showProgressBar" class="progress is-large" :value="progressVal" max="100"></progress>
          <div v-show="showMainMenu" class="main-menu">
            <h1 class="title">
              <span class="blinking-cursor">|</span>
            </h1>
            <router-link class="button is-primary is-inverted is-outlined" to="blog">Blog</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showSecondCmdLine: false,
      showMainMenu: false,
      showProgressBar: false,
      textToPrint:
        "az functionapp start --name JellisTech --resource-group JellisTech",
      textToPrintIndex: 0,
      progressVal: 0,
      commandText: ""
    };
  },
  methods: {
    getDate() {
      let date = new Date();
      return date.toLocaleString();
    },
    updateProgressBar() {
      let that = this;
      this.progressVal++;
      if (this.progressVal < 100) {
        setTimeout(function() {
          that.updateProgressBar();
        }, 25);
      }
    },
    writeCommandText() {
      let that = this;
      this.commandText += this.textToPrint[this.textToPrintIndex];
      if (this.textToPrintIndex < this.textToPrint.length - 1) {
        this.textToPrintIndex++;
        setTimeout(function() {
          that.writeCommandText();
        }, 75);
      } else {
        this.showCursor = false;
        this.showSecondCmdLine = true;
        this.showProgressBar = true;
        that.updateProgressBar();
      }
    }
  },
  mounted() {
    this.writeCommandText();
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

    .tag {
      margin-right: 0.5rem;
      font-size: 1rem;
      color: white;
      background-color: #0b4c5d99;
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
  }

  .blinking-cursor {
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
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