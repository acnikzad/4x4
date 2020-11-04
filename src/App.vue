<template>
  <div id="app">
<!-- Header -->
    <section id="header">
      <div class="container">
<!-- Logo -->
        <h1 id="logo"><a href="index.html">4x4 Teardrop Trailers</a></h1>
        <p>In partnership with Vintage Trailer Works</p>
        <nav id="nav">
          <ul>
            <li><a class="icon solid fa-home" href="index.html"><span>Home</span></a></li>
            <li>
              <a href="#" class="icon fa-chart-bar"><span>Contact</span></a>
            </li>
            <li><a class="icon solid fa-cog" href="left-sidebar.html"><span>Request A Quote</span></a></li>
            <li><a class="icon solid fa-retweet" href="right-sidebar.html"><span>About</span></a></li>
            <!-- <li><a class="icon solid fa-sitemap" href="no-sidebar.html"><span>Rent A Trailer</span></a></li> -->
          </ul>
        </nav>
      </div>
    </section>
    <router-view/>
    <section id="footer">
      <div class="container">
        <header>
          <h2>Questions or comments? <strong>Get in touch:</strong></h2>
        </header>
        <div class="row">
          <div class="col-6 col-12-medium">
            <section>
              <p>Erat lorem ipsum veroeros consequat magna tempus lorem ipsum consequat Phaselamet
              mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique. Curabitur
              leo nibh, rutrum eu malesuada.</p>
              <div class="row">
                <div class="col-6 col-12-small">
                  <ul class="icons">
                    <li class="icon solid fa-home">
                      1234 Somewhere Road<br />
                      Nashville, TN 00000<br />
                      USA
                    </li>
                    <li class="icon solid fa-phone">
                      (000) 000-0000
                    </li>
                    <li class="icon solid fa-envelope">
                      <a href="#">info@untitled.tld</a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-12-small">
                  <ul class="icons">
                    <li class="icon brands fa-twitter">
                      <a href="#">@untitled</a>
                    </li>
                    <li class="icon brands fa-instagram">
                      <a href="#">instagram.com/untitled</a>
                    </li>
                    <li class="icon brands fa-dribbble">
                      <a href="#">dribbble.com/untitled</a>
                    </li>
                    <li class="icon brands fa-facebook-f">
                      <a href="#">facebook.com/untitled</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div id="copyright" class="container">
        <ul class="links">
          <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </div>
    </section>

  </div>
</template>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
