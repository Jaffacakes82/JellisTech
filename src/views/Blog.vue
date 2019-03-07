<template>
  <div class="is-full-height">
    <section class="hero is-info is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">jellis.tech blog</h1>
        </div>
      </div>
    </section>
    <div class="container">
      <!-- START ARTICLE FEED -->
      <section class="articles">
        <div class="column is-12">
          <!-- START ARTICLE -->
          <div class="card article">
            <div class="card-content">
              <div class="media">
                <div class="media-center">
                  <img
                    src="../assets/images/functions.png"
                    class="article-image"
                    alt="Article image"
                  >
                </div>
                <div class="media-content has-text-centered">
                  <p class="title article-title">Serverless PDF generation in Azure</p>
                  <p class="subtitle is-6 article-subtitle">
                    <a href="https://github.com/jaffacakes82">@jaffacakes82</a> on March, 2019
                  </p>
                </div>
              </div>
              <div class="content article-body">
                <h4>
                  Everyone
                  <i class="fas fa-heart"></i>'s PDF reports.
                </h4>
                <p>
                  I can't remember the last time I worked for a client and they didn't want some kind of PDF generation capability built into their application.
                  This article walks through a recent implementation my team and I completed for one of our clients using the following stack:
                </p>
                <ul>
                  <li>Azure Function built on .NET Core and written in C# (App Service plan, not consumption!)</li>
                  <li>
                    <a
                      href="https://www.npmjs.com/package/html-pdf"
                    >node-html-pdf - HTML to PDF converter that uses phantomjs</a>
                  </li>
                </ul>
                <h4>Let's get started</h4>
                <p>
                  A quick Google eludes to the fact that generating PDFs on cloud PaaS platforms isn't a trivial task.
                  I did my share of keyboard smashing trying to get
                  <a href="https://github.com/rdvojmoc/DinkToPdf">DinkToPdf</a>,
                  a .NET Core wrapper for the wkhtmltopdf library, to work on Azure before I landed on my current solution.
                </p>
                <pre v-highlightjs><code class="csharp">Console.WriteLine("Foo");</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog"
};
</script>

<style lang="scss">
section.hero.is-info.is-bold {
  background-image: url("../assets/images/hero.svg");
  background-size: cover;
}
.articles {
  margin: 5rem 0;
  margin-top: -100px;

  .media-content {
    margin-top: 3rem;
  }

  .article-title {
    font-size: 2rem;
    font-weight: lighter;
    line-height: 2;
  }

  .article-subtitle {
    color: #909aa0;
    margin-bottom: 3rem;
  }

  .article-body {
    line-height: 1.4;
    margin: 0 6rem;

    h4 {
      margin-top: 2rem;
    }

    i {
      color: red;
    }

    p {
      line-height: 1.9;
      margin: 15px 0;
    }
  }

  .article-image {
    position: absolute;
    top: -30px;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-left: -30px;
    border: 3px solid #ccc;
    border-radius: 50%;
  }
}
</style>