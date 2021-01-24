<template>
  <div id="app">
<!-- Header -->
    <section id="header">
      <div class="container">
<!-- Logo -->
        <h1 id="logo"><a href="index.html">4x4 Teardrop Trailers</a></h1>
        <p>In partnership with Vintage Trailer Works Inc.</p>
        <nav id="nav">
          <ul>
            <li><a class="icon solid fa-home" href="/"><span>Home</span></a></li>
            <li>
              <a href="#" class="icon fa-envelope"><span>Contact</span></a>
            </li>
            <li><a class="icon solid fa-quote-right" href="left-sidebar.html"><span>Request A Quote</span></a></li>
            <li><a class="icon solid fa-hashtag" href="right-sidebar.html"><span>About</span></a></li>
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
        </div>
      </div>
      <div id="copyright" class="container">
        <ul class="links">
          <li>Petaluma, CA</li><li><a href="#">BenK.vtw@gmail.com</a></li>
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
