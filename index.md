---
layout: default
title: Tidewritten
description: Immersive light novels and emotional stories about the moments that stay with you.
---

<section class="tide-hero">
  <div class="hero-atmosphere" aria-hidden="true"><span class="orb orb-one"></span><span class="orb orb-two"></span><span class="orb orb-three"></span><span class="hero-ripple ripple-one"></span><span class="hero-ripple ripple-two"></span></div>
  <div class="hero-copy">
    <p class="eyebrow"><span class="eyebrow-dot"></span> THE TIDEWRITTEN LIBRARY</p>
    <h1>Some feelings<br>leave a <span class="hero-accent">tide</span> behind.</h1>
    <p class="hero-description">A quiet place for immersive light novels, complicated friendships, first love, heartbreak, and the words that stay with us long after the last page.</p>
    <div class="hero-actions">
      <a class="button button-primary" href="{{ '/library/' | relative_url }}">Enter the library <span aria-hidden="true">↗</span></a>
      <a class="text-link" href="#featured">Find your next story <span aria-hidden="true">↓</span></a>
    </div>
    <div class="hero-signature"><span class="signature-line"></span><span>Read slowly. Feel deeply. Return whenever you're ready.</span></div>
  </div>
  <div class="hero-art" aria-hidden="true">
    <div class="water-disc"><div class="water-disc-inner"></div><span class="disc-glint"></span></div>
    <span class="float-note note-one">the things we never said</span><span class="float-note note-two">somewhere between then & now</span>
    <div class="hero-art-caption"><span class="caption-pulse"></span> Every story leaves a little behind</div>
  </div>
  <div class="hero-bottom-line" aria-hidden="true"><span>01 / DISCOVER</span><span>SCROLL TO EXPLORE ↓</span></div>
</section>

<section class="current-section" id="featured">
  <div class="section-heading">
    <div><p class="eyebrow">START SOMEWHERE</p><h2>Stories worth<br><span>staying for.</span></h2></div>
    <p class="section-intro">Explore complete arcs and standalone stories, presented in a focused reading experience made for the words themselves—not distractions.</p>
  </div>
  <div class="collection-grid">
    <a href="{{ '/stories/the-girl-by-the-school-gate/' | relative_url }}" class="collection-card collection-main">
      <span class="collection-index">01 — FEATURED SERIES</span><span class="collection-symbol" aria-hidden="true">↗</span>
      <div class="collection-card-bottom"><span class="collection-icon" aria-hidden="true">小鳥</span><h3>The Little Bird Chronicles</h3><p>Three volumes of quiet school days, a returning friend, and the courage to turn unspoken feelings into an honest beginning.</p><span class="collection-count">Start with Volume 1 <span aria-hidden="true">→</span></span></div>
    </a>
    <a href="{{ '/library/' | relative_url }}" class="collection-card collection-horizon">
      <span class="collection-index">02 — THE FULL COLLECTION</span><span class="horizon-orbit" aria-hidden="true"><span></span></span>
      <div class="collection-card-bottom"><span class="collection-icon" aria-hidden="true">〰</span><h3>Explore the Library</h3><p>Browse the current light-novel editions, open a volume directly, and discover the stories being adapted next.</p><span class="collection-count">Browse all available stories <span aria-hidden="true">→</span></span></div>
    </a>
  </div>
</section>

<section class="quote-section">
  <span class="quote-mark" aria-hidden="true">“</span>
  <p>Not every story needs to be true<br>to make you <em>feel something real.</em></p>
  <span class="quote-foot">A NOTE FROM TIDEWRITTEN</span>
</section>

<section class="recently-read-section" id="recentlyRead" style="display:none;">
  <div class="section-heading recent-heading"><div><p class="eyebrow">PICK UP WHERE YOU LEFT OFF</p><h2>Back to <span>your tide.</span></h2></div><p class="section-intro">Your recently opened stories, waiting right where you left them.</p></div>
  <div class="recently-read-list" id="recentlyReadList"></div>
</section>

<script>
(function(){
  var section=document.getElementById('recentlyRead'),list=document.getElementById('recentlyReadList');
  try{
    var history=JSON.parse(localStorage.getItem('readingHistory')||'[]');
    if(!Array.isArray(history)||!history.length)return;
    var safe=function(value){return String(value||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});};
    list.innerHTML=history.slice(0,4).map(function(h){
      var ago='Recently read';
      if(h.time){var m=Math.max(0,Math.floor((Date.now()-h.time)/60000));ago=m<1?'Just now':m<60?m+'m ago':m<1440?Math.floor(m/60)+'h ago':Math.floor(m/1440)+'d ago';}
      var routes={
        'notun-pakhi':"{{ '/stories/the-girl-by-the-school-gate/' | relative_url }}",
        'notun-pakhi-s2':"{{ '/stories/the-little-bird-returns/' | relative_url }}",
        'notun-pakhi-s3':"{{ '/stories/where-our-story-begins/' | relative_url }}",
        'phir-milenge':"{{ '/stories/somewhere-between-friends-and-love/' | relative_url }}",
        'phir-milenge-s2':"{{ '/stories/the-silence-between-us/' | relative_url }}",
        'phir-milenge-s3':"{{ '/stories/when-we-meet-again/' | relative_url }}",
        'the-last-message':"{{ '/stories/the-words-we-never-sent/' | relative_url }}",
        'wahi-bench':"{{ '/stories/the-face-i-never-forgot/' | relative_url }}",
        'zinda':"{{ '/stories/teaching-me-how-to-live/' | relative_url }}",
        'offline':"{{ '/stories/when-everyone-went-offline/' | relative_url }}",
        'the-last-login':"{{ '/stories/the-account-that-never-came-back/' | relative_url }}",
        'split':"{{ '/stories/the-other-side-of-us/' | relative_url }}",
        'x-prismat':"{{ '/stories/prismat-fragments-of-the-fallen-sky/' | relative_url }}"
      };
      var target=routes[String(h.slug||'')]||h.url||h.path||'{{ "/library/" | relative_url }}';
      if(!/^\//.test(target))target='{{ "/" | relative_url }}'+target;
      return '<a href="'+safe(target)+'" class="recent-item"><span class="recent-title">'+safe(h.title||'Untitled story')+'</span><span class="recent-time">'+safe(ago)+' ↗</span></a>';
    }).join('');
    section.style.display='';
  }catch(e){}
})();
</script>
