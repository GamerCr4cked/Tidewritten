---
layout: default
title: Home
description: Browse original light novels across romance, coming-of-age, friendship, drama, and speculative fiction.
permalink: /home/
---

<div class="home-redesign">
  <section class="float-hero" aria-labelledby="home-title">
    <div class="float-field" aria-hidden="true">
      <span class="float-orb orb-a"></span><span class="float-orb orb-b"></span><span class="float-orb orb-c"></span>
      <span class="float-ring ring-a"></span><span class="float-ring ring-b"></span>
      <span class="float-speck speck-a">✦</span><span class="float-speck speck-b">·</span><span class="float-speck speck-c">✧</span>
    </div>
    <div class="float-hero-copy">
      <p class="home-eyebrow"><span></span> ORIGINAL LIGHT NOVELS &amp; STORIES</p>
      <h1 id="home-title">Explore stories<br>across <em>genres.</em></h1>
      <p class="home-lede">Browse original light novels featuring romance, friendship, coming-of-age, contemporary drama, and speculative fiction. Choose a series or start with a standalone volume.</p>
      <div class="home-buttons">
        <a class="home-button home-button-primary" href="{{ '/library/' | relative_url }}">Browse the Library <span aria-hidden="true">↗</span></a>
        <a class="home-button home-button-quiet" href="#start-reading">Featured titles <span aria-hidden="true">↓</span></a>
      </div>
      
    </div>
    <div class="float-hero-art" aria-hidden="true">
      <div class="float-water">
        <span class="water-layer layer-one"></span><span class="water-layer layer-two"></span><span class="water-layer layer-three"></span><span class="water-light"></span>
      </div>
      
      
      <span class="float-dot dot-one"></span><span class="float-dot dot-two"></span><span class="float-dot dot-three"></span>
      <div class="art-caption"><span></span> TIDEWRITTEN READING COLLECTION</div>
    </div>
    <div class="hero-scroll-cue"><span>01</span><span class="scroll-line"></span><span>EXPLORE THE COLLECTION</span></div>
  </section>

  <section class="home-section start-section" id="start-reading">
    <div class="home-section-heading">
      <div><p class="home-eyebrow">FEATURED TITLES</p><h2>Explore the <em>collection.</em></h2></div>
      <p>Browse a rotating selection of volumes from the Tidewritten catalogue.</p>
    </div>
    <div class="random-story-stage" id="randomStoryStage" aria-live="polite" aria-atomic="true">
      <a class="random-story-card" id="randomStoryCard" href="{{ '/library/' | relative_url }}">
        <span class="random-story-art" id="randomStoryArt" aria-hidden="true"><span class="random-art-orb"></span><span class="random-art-ring"></span><span class="random-art-line"></span></span>
        <span class="random-story-copy">
          <span class="random-story-kicker" id="randomStoryKicker">FEATURED TITLE</span>
          <strong id="randomStoryTitle">Finding your next story…</strong>
          <span class="random-story-summary" id="randomStorySummary">Select this title to view its volume.</span>
          <span class="random-story-cta">View volume <span aria-hidden="true">↗</span></span>
        </span>
        <span class="random-story-index" id="randomStoryIndex" aria-hidden="true">01</span>
      </a>
    </div>
    <div class="random-story-controls">
      <span><span class="random-live-dot" aria-hidden="true"></span> Featured title updates every 5 seconds</span>
      <button type="button" id="randomStoryNext">Show another title ↗</button>
    </div>
    <div class="library-float-bar">
      <span class="library-float-icon" aria-hidden="true">〰</span>
      <div><strong>Browse the full catalogue</strong><p>View all available series and select a volume to read.</p></div>
      <a href="{{ '/library/' | relative_url }}">View all series <span aria-hidden="true">↗</span></a>
    </div>
  </section>

  <section class="recently-read-section home-recent" id="recentlyRead" style="display:none;">
    <div class="home-section-heading recent-heading"><div><p class="home-eyebrow">READING HISTORY</p><h2>Continue <em>reading.</em></h2></div><p>Reopen a title from your recent reading history on this browser.</p></div>
    <div class="recently-read-list" id="recentlyReadList"></div>
  </section>

  <section class="home-end-card">
    <span class="end-orb end-orb-one" aria-hidden="true"></span><span class="end-orb end-orb-two" aria-hidden="true"></span>
    <div><p class="home-eyebrow">TIDEWRITTEN</p><h2>Explore the<br><em>catalogue.</em></h2><p>Browse available volumes, read the usage guide, or learn more about the project.</p></div>
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
    {title:'The Girl by the School Gate',url:"{{ '/book/The-Little-Bird-Chronicles-Vol.1/' | relative_url }}",genre:'THE LITTLE BIRD CHRONICLES · VOL. 1',summary:'A school-gate encounter introduces a quiet romance set across the school year.',art:'bird'},
    {title:'When the Little Bird Returned',url:"{{ '/book/The-Little-Bird-Chronicles-Vol.2/' | relative_url }}",genre:'THE LITTLE BIRD CHRONICLES · VOL. 2',summary:'After a year apart, two students adjust to new routines and an unexpected reunion.',art:'bird'},
    {title:'Where Our Story Begins',url:"{{ '/book/The-Little-Bird-Chronicles-Vol.3/' | relative_url }}",genre:'THE LITTLE BIRD CHRONICLES · VOL. 3',summary:'Three years of glances and small promises lead to one honest truth.',art:'bird'},
    {title:'Somewhere Between Friends and Love',url:"{{ '/book/Meet-Again-Trilogy-Vol.1/' | relative_url }}",genre:'MEET AGAIN TRILOGY · VOL. 1',summary:'A reserved college student meets an outgoing classmate after she takes the only empty seat beside him.',art:'sunset'},
    {title:'The Silence Between Us',url:"{{ '/book/Meet-Again-Trilogy-Vol.2/' | relative_url }}",genre:'MEET AGAIN TRILOGY · VOL. 2',summary:'A long-distance relationship strains as missed calls and withheld information undermine trust.',art:'letter'},
    {title:'When We Meet Again',url:"{{ '/book/Meet-Again-Trilogy-Vol.3/' | relative_url }}",genre:'MEET AGAIN TRILOGY · VOL. 3',summary:'Two years after their breakup, Akito and Mio meet again and consider whether reconciliation is possible.',art:'sunset'},
    {title:'Prismat: Fragments of the Fallen Sky',url:"{{ '/book/Prismat-Vol.1/' | relative_url }}",genre:'PRISMAT · VOL. 1',summary:'Seven unexplained signals lead a research team toward evidence that may change humanity’s understanding of Earth.',art:'prism'},
    {title:'The Other Side of Us',url:"{{ '/book/The-Other-Side-of-Us-Vol.1/' | relative_url }}",genre:'CONTEMPORARY DRAMA · ROOMMATES',summary:'A rental mix-up forces two strangers to share an apartment and negotiate the boundaries of their new arrangement.',art:'orbit'},
    {title:'The Face I Never Forgot',url:"{{ '/book/Before-the-Feelings-Fade-Vol.1/' | relative_url }}",genre:'SCHOOL LIFE · FIRST LOVE',summary:'A student who has admired his classmate for a year decides to tell her how he feels.',art:'face'},
    {title:'The Messages We Mistook',url:"{{ '/book/Before-the-Feelings-Fade-Vol.2/' | relative_url }}",genre:'THE FACE I NEVER FORGOT · VOL. 2',summary:'Two years after his confession, Sota and Airi are friends, but a message makes him reconsider his feelings.',art:'face'},
    {title:'Teaching Me How to Live',url:"{{ '/book/Teaching-Me-How-to-Live-Vol.1/' | relative_url }}",genre:'WORKPLACE ROMANCE · SLOW BURN',summary:'A tightly scheduled office worker meets a woman whose unexpected kindness challenges his daily routine.',art:'horizon'},
    {title:'The Account That Never Came Back',url:"{{ '/book/The-Account-That-Never-Came-Back-Vol.1/' | relative_url }}",genre:'ONLINE FRIENDSHIP · GAMING',summary:'After a friend's account is suspended and his online identity changes, two former teammates try to reconnect with him.',art:'stars'},
    {title:'When Everyone Went Offline',url:"{{ '/book/When-Everyone-Went-Offline-Vol.1/' | relative_url }}",genre:'ONLINE FRIENDSHIP · DIGITAL LIFE',summary:'Four friends build a community around a Minecraft server, then struggle when one of them begins to drift away.',art:'stars'},
    {title:'The Words We Never Sent',url:"{{ '/book/The-Words-We-Never-Sent-Vol.1/' | relative_url }}",genre:'CONTEMPORARY DRAMA · ONLINE FRIENDSHIP',summary:'A close online friendship changes through late-night messages, misunderstandings, and an increasingly difficult silence.',art:'letter'},
    {title:'One Can of Coffee and a Broken Pen',url:"{{ '/book/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.1/' | relative_url }}",genre:'STUDENT COUNCIL ROM-COM · VOL. 1',summary:'A blunt student council president and an unflappable classmate clash over coffee, school duties, and unexpected feelings.',art:'sunset'},
    {title:'The Things We Never Said',url:"{{ '/book/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.2/' | relative_url }}",genre:'STUDENT COUNCIL ROM-COM · VOL. 2',summary:'As their relationship develops, Hanako and Kaito confront old identities, gaps in memory, and secrets from the past.',art:'letter'},
    {title:"The President's Last Rule",url:"{{ '/book/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.3/' | relative_url }}",genre:'STUDENT COUNCIL ROM-COM · FINAL VOL.',summary:'In the final volume, Kaito and Hanako confront the remaining secrets and decide what future they want together.',art:'sunset'}

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
        'notun-pakhi':"{{ '/book/The-Little-Bird-Chronicles-Vol.1/' | relative_url }}",
        'notun-pakhi-s2':"{{ '/book/The-Little-Bird-Chronicles-Vol.2/' | relative_url }}",
        'notun-pakhi-s3':"{{ '/book/The-Little-Bird-Chronicles-Vol.3/' | relative_url }}",
        'phir-milenge':"{{ '/book/Meet-Again-Trilogy-Vol.1/' | relative_url }}",
        'phir-milenge-s2':"{{ '/book/Meet-Again-Trilogy-Vol.2/' | relative_url }}",
        'phir-milenge-s3':"{{ '/book/Meet-Again-Trilogy-Vol.3/' | relative_url }}",
        'the-last-message':"{{ '/book/The-Words-We-Never-Sent-Vol.1/' | relative_url }}",
        'wahi-bench':"{{ '/book/Before-the-Feelings-Fade-Vol.1/' | relative_url }}",
        'zinda':"{{ '/book/Teaching-Me-How-to-Live-Vol.1/' | relative_url }}",
        'offline':"{{ '/book/When-Everyone-Went-Offline-Vol.1/' | relative_url }}",
        'the-last-login':"{{ '/book/The-Account-That-Never-Came-Back-Vol.1/' | relative_url }}",
        'split':"{{ '/book/The-Other-Side-of-Us-Vol.1/' | relative_url }}",
        'x-prismat':"{{ '/book/Prismat-Vol.1/' | relative_url }}"
      };
      var titles={
        'notun-pakhi':'The Girl by the School Gate',
        'notun-pakhi-s2':'When the Little Bird Returned',
        'notun-pakhi-s3':'Where Our Story Begins',
        'phir-milenge':'Somewhere Between Friends and Love',
        'phir-milenge-s2':'The Silence Between Us',
        'phir-milenge-s3':'When We Meet Again',
        'the-last-message':'The Words We Never Sent',
        'wahi-bench':'The Face I Never Forgot',
        'zinda':'Teaching Me How to Live',
        'offline':'When Everyone Went Offline',
        'the-last-login':'The Account That Never Came Back',
        'split':'The Other Side of Us',
        'x-prismat':'Prismat: Fragments of the Fallen Sky'
      };
      var target=routes[String(h.slug||'')]||h.url||h.path||'{{ "/library/" | relative_url }}';
      if(!/^\//.test(target))target='{{ "/" | relative_url }}'+target;
      return '<a href="'+safe(target)+'" class="recent-item"><span class="recent-title">'+safe(titles[String(h.slug||'')]||h.title||'Untitled story')+'</span><span class="recent-time">'+safe(ago)+' ↗</span></a>';
    }).join('');
    section.style.display='';
  }catch(e){}
})();
</script>
