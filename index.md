---
layout: default
title: Tidewritten
description: Immersive light novels and emotional stories about the moments that stay with you.
---

<div class="home-redesign">
  <section class="float-hero" aria-labelledby="home-title">
    <div class="float-field" aria-hidden="true">
      <span class="float-orb orb-a"></span><span class="float-orb orb-b"></span><span class="float-orb orb-c"></span>
      <span class="float-ring ring-a"></span><span class="float-ring ring-b"></span>
      <span class="float-speck speck-a">✦</span><span class="float-speck speck-b">·</span><span class="float-speck speck-c">✧</span>
    </div>
    <div class="float-hero-copy">
      <p class="home-eyebrow"><span></span> A PLACE FOR STORIES THAT STAY</p>
      <h1 id="home-title">Some feelings<br>leave a <em>tide</em> behind.</h1>
      <p class="home-lede">Romance, friendship, distance, and the little moments that somehow mean everything. Find a story, settle in, and stay a while.</p>
      <div class="home-buttons">
        <a class="home-button home-button-primary" href="{{ '/library/' | relative_url }}">Explore the library <span aria-hidden="true">↗</span></a>
        <a class="home-button home-button-quiet" href="#start-reading">Find a story <span aria-hidden="true">↓</span></a>
      </div>
      <div class="home-whisper"><span class="whisper-line"></span> Read slowly. Feel deeply. Come back whenever you like.</div>
    </div>
    <div class="float-hero-art" aria-hidden="true">
      <div class="float-water">
        <span class="water-layer layer-one"></span><span class="water-layer layer-two"></span><span class="water-layer layer-three"></span><span class="water-light"></span>
      </div>
      <span class="float-label label-top">a little more than words</span>
      <span class="float-label label-bottom">somewhere between then & now</span>
      <span class="float-dot dot-one"></span><span class="float-dot dot-two"></span><span class="float-dot dot-three"></span>
      <div class="art-caption"><span></span> Every story leaves a little behind</div>
    </div>
    <div class="hero-scroll-cue"><span>01</span><span class="scroll-line"></span><span>KEEP DRIFTING</span></div>
  </section>

  <section class="home-section start-section" id="start-reading">
    <div class="home-section-heading">
      <div><p class="home-eyebrow">A STORY FOR THIS MOMENT</p><h2>Let the tide <em>choose.</em></h2></div>
      <p>A little surprise from the library, picked at random. Stay for a chapter—or follow the feeling.</p>
    </div>
    <div class="random-story-stage" id="randomStoryStage" aria-live="polite" aria-atomic="true">
      <a class="random-story-card" id="randomStoryCard" href="{{ '/library/' | relative_url }}">
        <span class="random-story-art" id="randomStoryArt" aria-hidden="true"><span class="random-art-orb"></span><span class="random-art-ring"></span><span class="random-art-line"></span></span>
        <span class="random-story-copy">
          <span class="random-story-kicker" id="randomStoryKicker">A RANDOM PICK FROM THE LIBRARY</span>
          <strong id="randomStoryTitle">Finding your next story…</strong>
          <span class="random-story-summary" id="randomStorySummary">A small story might be just what you need.</span>
          <span class="random-story-cta">Discover this story <span aria-hidden="true">↗</span></span>
        </span>
        <span class="random-story-index" id="randomStoryIndex" aria-hidden="true">01</span>
      </a>
    </div>
    <div class="random-story-controls">
      <span><span class="random-live-dot" aria-hidden="true"></span> A new pick every 5 seconds</span>
      <button type="button" id="randomStoryNext">Surprise me ↗</button>
    </div>
    <div class="library-float-bar">
      <span class="library-float-icon" aria-hidden="true">〰</span>
      <div><strong>Want to choose for yourself?</strong><p>Browse the full collection and find the series or volume that feels right.</p></div>
      <a href="{{ '/library/' | relative_url }}">Browse the library <span aria-hidden="true">↗</span></a>
    </div>
  </section>

  <section class="home-quote">
    <span class="quote-orb quote-orb-one" aria-hidden="true"></span><span class="quote-orb quote-orb-two" aria-hidden="true"></span>
    <span class="home-quote-mark" aria-hidden="true">“</span>
    <p>Not every story needs to be true<br>to make you <em>feel something real.</em></p>
    <span class="home-quote-foot">A SMALL THOUGHT FROM TIDEWRITTEN</span>
  </section>

  <section class="recently-read-section home-recent" id="recentlyRead" style="display:none;">
    <div class="home-section-heading recent-heading"><div><p class="home-eyebrow">YOUR READING TRAIL</p><h2>Back to <em>your tide.</em></h2></div><p>Pick up a story you opened recently on this browser.</p></div>
    <div class="recently-read-list" id="recentlyReadList"></div>
  </section>

  <section class="home-end-card">
    <span class="end-orb end-orb-one" aria-hidden="true"></span><span class="end-orb end-orb-two" aria-hidden="true"></span>
    <div><p class="home-eyebrow">TAKE YOUR TIME</p><h2>There's no one right<br>way to <em>feel a story.</em></h2><p>Make a cup of something warm. Find a comfortable spot. Let the words do their thing.</p></div>
    <div class="home-end-links"><a href="{{ '/about/' | relative_url }}">About Tidewritten <span>↗</span></a><a href="{{ '/reading-guide/' | relative_url }}">Reader's guide <span>↗</span></a></div>
  </section>
</div>


<script>
(function(){
  var card=document.getElementById('randomStoryCard');
  var stage=document.getElementById('randomStoryStage');
  if(!card||!stage)return;
  var title=document.getElementById('randomStoryTitle');
  var summary=document.getElementById('randomStorySummary');
  var kicker=document.getElementById('randomStoryKicker');
  var index=document.getElementById('randomStoryIndex');
  var art=document.getElementById('randomStoryArt');
  var next=document.getElementById('randomStoryNext');
  var stories=[
    {title:'The Little Bird Chronicles',url:"{{ '/stories/notun-pakhi.html' | relative_url }}",genre:'QUIET ROMANCE · GROWING UP',summary:'Quiet school days, a returning friend, and the courage to say what matters.',art:'bird'},
    {title:'The Little Bird Chronicles — Season 2',url:"{{ '/stories/notun-pakhi-s2.html' | relative_url }}",genre:'SCHOOL LIFE · CONTINUING STORY',summary:'Old feelings return as the next part of the story begins.',art:'bird'},
    {title:'The Little Bird Chronicles — Season 3',url:"{{ '/stories/notun-pakhi-s3.html' | relative_url }}",genre:'ROMANCE · NEW CHAPTERS',summary:'A familiar story moves forward, carrying the moments that still matter.',art:'bird'},
    {title:'Meet Again',url:"{{ '/stories/phir-milenge.html' | relative_url }}",genre:'FRIENDSHIP · ROMANCE',summary:'Some connections take the long way around before finding their way back.',art:'sunset'},
    {title:'Meet Again — Season 2',url:"{{ '/stories/phir-milenge-s2.html' | relative_url }}",genre:'ROMANCE · UNSAID FEELINGS',summary:'What happens after the reunion can be harder than the reunion itself.',art:'sunset'},
    {title:'Meet Again — Season 3',url:"{{ '/stories/phir-milenge-s3.html' | relative_url }}",genre:'ROMANCE · SECOND CHANCES',summary:'Another turn in a story about distance, timing, and meeting again.',art:'sunset'},
    {title:'The Words We Never Sent',url:"{{ '/stories/the-last-message.html' | relative_url }}",genre:'MEMORIES · UNSAID WORDS',summary:'Some messages stay in drafts. Some feelings stay long after the moment passes.',art:'letter'},
    {title:'The Face I Never Forgot',url:"{{ '/stories/the-face-i-never-forgot.html' | relative_url }}",genre:'MEMORY · CONNECTION',summary:'A face from the past can make the present feel unexpectedly different.',art:'face'},
    {title:'Teaching Me How to Live',url:"{{ '/stories/teaching-me-how-to-live.html' | relative_url }}",genre:'LIFE · FRIENDSHIP',summary:'A story about the small things that help someone find their way forward.',art:'horizon'},
    {title:'When Everyone Went Offline',url:"{{ '/stories/when-everyone-went-offline.html' | relative_url }}",genre:'ONLINE FRIENDSHIP · DRAMA',summary:'When the screens go quiet, the people behind them still have stories to tell.',art:'stars'},
    {title:'The Account That Never Came Back',url:"{{ '/stories/the-account-that-never-came-back.html' | relative_url }}",genre:'MYSTERY · ONLINE LIFE',summary:'An absent account leaves behind questions that refuse to disappear.',art:'stars'},
    {title:'The Other Side of Us',url:"{{ '/stories/the-other-side-of-us.html' | relative_url }}",genre:'RELATIONSHIPS · DRAMA',summary:'Every relationship has a side that only becomes clear when you look closer.',art:'orbit'},
    {title:'Prismat: Fragments of the Fallen Sky',url:"{{ '/stories/prismat-fragments-of-the-fallen-sky.html' | relative_url }}",genre:'MYSTERY · SCIENCE FICTION',summary:'A distant instrument observes reality—and begins to decide what reality should be.',art:'prism'},
    {title:'The Student Council President Hates Everyone—Except, Apparently, Me: One Can of Coffee and a Broken Pen',url:"{{ '/stories/the-student-council-president-hates-everyone-vol-1.html' | relative_url }}",genre:'JAPANESE ROM-COM · SCHOOL LIFE',summary:'A sharp-tongued student council president, one can of coffee, and a broken pen.',art:'sunset'},
    {title:'The Student Council President Hates Everyone—Except, Apparently, Me: The Things We Never Said',url:"{{ '/stories/the-student-council-president-hates-everyone-vol-2.html' | relative_url }}",genre:'JAPANESE ROM-COM · DRAMA',summary:'What happens when the things left unsaid finally start to matter?',art:'letter'},
    {title:'The Other Side of Prismat',url:"{{ '/stories/x-prismat.html' | relative_url }}",genre:'SPECULATIVE · SCI-FI',summary:'A stranger signal opens the door to questions bigger than anyone expected.',art:'prism'},
    {title:'Offline',url:"{{ '/stories/offline.html' | relative_url }}",genre:'ONLINE FRIENDSHIP · DRAMA',summary:'Behind every username is a person with a life beyond the screen.',art:'stars'},
    {title:'Split',url:"{{ '/stories/split.html' | relative_url }}",genre:'FRIENDSHIP · EMOTIONAL DRAMA',summary:'When perspectives divide, the truth can look different from every side.',art:'orbit'},
    {title:'Wahi Bench',url:"{{ '/stories/wahi-bench.html' | relative_url }}",genre:'MEMORIES · QUIET MOMENTS',summary:'Sometimes one familiar place holds more memories than words can explain.',art:'horizon'},
    {title:'Zinda',url:"{{ '/stories/zinda.html' | relative_url }}",genre:'LIFE · EMOTIONAL STORY',summary:'A story about carrying on, and the moments that make life feel close again.',art:'horizon'}
  ];
  var current=-1,timer=null,paused=false,reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function choose(){var n;if(stories.length<2)return 0;do{n=Math.floor(Math.random()*stories.length);}while(n===current);return n;}
  function paint(n){
    var s=stories[n];current=n;
    card.href=s.url;title.textContent=s.title;summary.textContent=s.summary;kicker.textContent=s.genre;
    index.textContent=String(n+1).padStart(2,'0');
    art.className='random-story-art art-'+s.art;
    card.setAttribute('aria-label','Read '+s.title);
  }
  function rotate(){
    if(paused||document.hidden)return;
    if(reduced){paint(choose());return;}
    card.classList.remove('story-enter-right','story-leave-left');
    card.classList.add('story-leave-left');
    window.setTimeout(function(){
      paint(choose());
      card.classList.remove('story-leave-left');
      card.classList.add('story-enter-right');
      window.requestAnimationFrame(function(){window.requestAnimationFrame(function(){card.classList.remove('story-enter-right');});});
    },460);
  }
  function schedule(){window.clearInterval(timer);timer=window.setInterval(rotate,5000);}
  paint(choose());schedule();
  if(next)next.addEventListener('click',function(){rotate();schedule();});
  stage.addEventListener('mouseenter',function(){paused=true;});
  stage.addEventListener('mouseleave',function(){paused=false;});
  stage.addEventListener('focusin',function(){paused=true;});
  stage.addEventListener('focusout',function(){paused=false;});
  document.addEventListener('visibilitychange',function(){if(!document.hidden)schedule();});
})();
</script>

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
        'notun-pakhi':"{{ '/stories/notun-pakhi.html' | relative_url }}",
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
