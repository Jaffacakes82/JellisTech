<template>
  <div class="is-full-height">
    <section class="hero is-fullheight is-bold">
      <div class="console-text">
        <p class="date-text">Last login: {{currentDate}}</p>
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
          <progress
            v-show="showProgressBar"
            class="progress is-large"
            :value="progressVal"
            max="100"
            :style="{ opacity: opacityVal }"
          ></progress>
          <div v-show="showMainMenu" class="main-menu">
            <h1 class="title">jellis.tech</h1>
            <router-link class="button is-large is-link is-inverted is-outlined" to="blog">Blog</router-link>
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
      showCursor: true,
      textToPrint:
        "az functionapp start --name JellisTech --resource-group JellisTech",
      textToPrintIndex: 0,
      progressVal: 0,
      opacityVal: 1,
      commandText: "",
      currentDate: new Date().toLocaleString()
    };
  },
  methods: {
    updateOpacity() {
      let that = this;
      this.opacityVal = this.opacityVal - 0.1;
      if (this.opacityVal > 0) {
        setTimeout(function() {
          that.updateOpacity();
        }, 25);
      } else {
        this.showProgressBar = false;
        this.showMainMenu = true;
      }
    },
    updateProgressBar() {
      let that = this;
      this.progressVal++;
      if (this.progressVal < 100) {
        setTimeout(function() {
          that.updateProgressBar();
        }, 15);
      } else {
        this.updateOpacity();
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
        this.updateProgressBar();
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
    padding: 0.5rem 0 0 0.5rem;

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

  .hero-body {
    padding-top:0;
    .title {
      color: unset;
    }

    .button {
      width: 185px
    }
  }

  .blinking-cursor {
    animation: blink-animation 1s steps(3, start) infinite;
    -webkit-animation: blink-animation 1s steps(3, start) infinite;
  }
}

@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>