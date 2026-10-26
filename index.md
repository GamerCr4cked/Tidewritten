---
layout: default
title: Tidewritten
description: Stories for the feelings that stay with you long after the last line.
---

<section class="tide-hero">
  <div class="hero-atmosphere" aria-hidden="true"><span class="orb orb-one"></span><span class="orb orb-two"></span><span class="orb orb-three"></span><span class="hero-ripple ripple-one"></span><span class="hero-ripple ripple-two"></span></div>
  <div class="hero-copy">
    <p class="eyebrow"><span class="eyebrow-dot"></span> AN INDEPENDENT STORY SPACE</p>
    <h1>Some feelings<br>leave a <span class="hero-accent">tide</span> behind.</h1>
    <p class="hero-description">For the words we couldn't say, the moments we still carry, and the stories that feel a little too real.</p>
    <div class="hero-actions">
      <a class="button button-primary" href="{{ '/stories' | relative_url }}">Explore the stories <span aria-hidden="true">↗</span></a>
      <a class="text-link" href="#the-current">Stay a little <span aria-hidden="true">↓</span></a>
    </div>
    <div class="hero-signature"><span class="signature-line"></span><span>Written from feeling. Read at your own pace.</span></div>
  </div>
  <div class="hero-art" aria-hidden="true">
    <div class="water-disc"><div class="water-disc-inner"></div><span class="disc-glint"></span></div>
    <span class="float-note note-one">the things we never said</span><span class="float-note note-two">somewhere between then & now</span>
    <div class="hero-art-caption"><span class="caption-pulse"></span> A quiet place for loud feelings</div>
  </div>
  <div class="hero-bottom-line" aria-hidden="true"><span>01 / FEEL</span><span>SCROLL TO DISCOVER ↓</span></div>
</section>

<section class="current-section" id="the-current">
  <div class="section-heading">
    <div><p class="eyebrow">FOLLOW THE CURRENT</p><h2>Find a story<br><span>that finds you.</span></h2></div>
    <p class="section-intro">A growing collection of fictional people, honest emotions, and little moments that stay long after the page is closed.</p>
  </div>
  <div class="collection-grid">
    <a href="{{ '/stories' | relative_url }}" class="collection-card collection-main">
      <span class="collection-index">01 — THE COLLECTION</span><span class="collection-symbol" aria-hidden="true">↗</span>
      <div class="collection-card-bottom"><span class="collection-icon" aria-hidden="true">〰</span><h3>Stories</h3><p>Romance, friendship, heartbreak, hope — follow whatever pulls at you.</p><span class="collection-count">{{ site.pages | where: "layout", "story" | where_exp: "item", "item.translation != true" | size }} stories <span aria-hidden="true">→</span></span></div>
    </a>
    <a href="{{ '/coming-soon' | relative_url }}" class="collection-card collection-horizon">
      <span class="collection-index">02 — WHAT'S NEXT</span><span class="horizon-orbit" aria-hidden="true"><span></span></span>
      <div class="collection-card-bottom"><span class="collection-icon" aria-hidden="true">✳</span><h3>On the horizon</h3><p>New worlds are taking shape. There's more beneath the surface.</p><span class="collection-count">Something is coming <span aria-hidden="true">→</span></span></div>
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
    var baseUrl='{{ "/" | relative_url }}stories/';
    var safe=function(value){return String(value||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});};
    list.innerHTML=history.slice(0,4).map(function(h){
      var ago='Recently read';
      if(h.time){var m=Math.max(0,Math.floor((Date.now()-h.time)/60000));ago=m<1?'Just now':m<60?m+'m ago':m<1440?Math.floor(m/60)+'h ago':Math.floor(m/1440)+'d ago';}
      return '<a href="'+baseUrl+encodeURIComponent(String(h.slug||''))+'" class="recent-item"><span class="recent-title">'+safe(h.title||'Untitled story')+'</span><span class="recent-time">'+safe(ago)+' ↗</span></a>';
    }).join('');
    section.style.display='';
  }catch(e){}
})();
</script>
