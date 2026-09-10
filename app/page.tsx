export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true" /><div className="hero-shade" aria-hidden="true" />
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Formica home"><span className="brand-mark">F.</span><span>FORMICA</span></a>
          <a className="nav-link" href="#story">Meet the ant <span aria-hidden="true">↘</span></a>
        </nav>
        <div className="hero-copy" id="top">
          <p className="eyebrow">A portrait of persistence</p>
          <h1 id="hero-title">Small body.<br />Vast world.</h1>
          <p className="intro">Beneath our feet, one of nature’s greatest engineers is already at work.</p>
          <a className="round-link" href="#story" aria-label="Scroll to discover the ant"><span>Discover</span><span aria-hidden="true">↓</span></a>
        </div>
        <p className="image-note">Black garden ant · <i>Lasius niger</i></p>
      </section>
      <section className="story" id="story" aria-labelledby="story-title">
        <div className="story-heading"><p className="section-label">01 — The collective</p><h2 id="story-title">No ant<br />stands alone.</h2></div>
        <div className="story-body"><div><p className="lead">An ant is tiny. A colony is a superorganism—thousands of individuals sharing signals, food, labour and purpose.</p><p>Following scent trails invisible to us, ants build networks, cultivate fungi and reshape entire ecosystems. Their strength is not in the individual, but in exquisite cooperation.</p></div></div>
        <div className="facts" aria-label="Ant facts">
          <article><span className="fact-number">12k+</span><p>known species around the world</p></article>
          <article><span className="fact-number">50×</span><p>their body weight carried by some ants</p></article>
          <article><span className="fact-number">140m</span><p>years of life on Earth</p></article>
        </div>
        <footer><span>Look closely.</span><span>The world is alive.</span></footer>
      </section>
    </main>
  );
}
