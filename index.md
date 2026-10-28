---
layout: default
title: Tidewritten
description: Immersive light novels and emotional stories about the moments that stay with you.
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
    {title:'The Girl by the School Gate',url:"{{ '/stories/the-girl-by-the-school-gate/' | relative_url }}",genre:'THE LITTLE BIRD CHRONICLES · VOL. 1',summary:'One small encounter at a Japanese school gate becomes the beginning of a story that stays.',art:'bird'},
    {title:'When the Little Bird Returned',url:"{{ '/stories/the-little-bird-returns/' | relative_url }}",genre:'THE LITTLE BIRD CHRONICLES · VOL. 2',summary:'A year changes the school, the routine, and the people waiting by the gate.',art:'bird'},
    {title:'Where Our Story Begins',url:"{{ '/stories/where-our-story-begins/' | relative_url }}",genre:'THE LITTLE BIRD CHRONICLES · VOL. 3',summary:'Three years of glances and small promises lead to one honest truth.',art:'bird'},
    {title:'Somewhere Between Friends and Love',url:"{{ '/stories/somewhere-between-friends-and-love/' | relative_url }}",genre:'MEET AGAIN TRILOGY · VOL. 1',summary:'A quiet college student’s carefully ordered life changes when a late arrival takes the empty seat beside him.',art:'sunset'},
    {title:'The Silence Between Us',url:"{{ '/stories/the-silence-between-us/' | relative_url }}",genre:'MEET AGAIN TRILOGY · VOL. 2',summary:'Distance is only part of the problem when two people stop telling each other the truth.',art:'letter'},
    {title:'When We Meet Again',url:"{{ '/stories/when-we-meet-again/' | relative_url }}",genre:'MEET AGAIN TRILOGY · VOL. 3',summary:'After two years apart, a second chance asks whether growth can become forgiveness.',art:'sunset'},
    {title:'Prismat: Fragments of the Fallen Sky',url:"{{ '/stories/prismat-fragments-of-the-fallen-sky/' | relative_url }}",genre:'PRISMAT · VOL. 1',summary:'Seven impossible signals begin rewriting the evidence—and the question becomes what Earth is being measured for.',art:'prism'},
    {title:'The Other Side of Us',url:"{{ '/stories/the-other-side-of-us/' | relative_url }}",genre:'CONTEMPORARY DRAMA · ROOMMATES',summary:'One flat, two strangers, and a shared address that was never supposed to become a home.',art:'orbit'},
    {title:'The Face I Never Forgot',url:"{{ '/stories/the-face-i-never-forgot/' | relative_url }}",genre:'SCHOOL LIFE · FIRST LOVE',summary:'He spent a year finding reasons to speak to her—and one night finding the courage to be honest.',art:'face'},
    {title:'The Messages We Mistook',url:"{{ '/stories/the-face-i-never-forgot-vol-2/' | relative_url }}",genre:'THE FACE I NEVER FORGOT · VOL. 2',summary:'Two years later, friendship feels ordinary—until one careful message makes Sota face the hope he never admitted.',art:'face'},
    {title:'Teaching Me How to Live',url:"{{ '/stories/teaching-me-how-to-live/' | relative_url }}",genre:'WORKPLACE ROMANCE · SLOW BURN',summary:'A stranger at a bus stop reminds a man who lives by timetables that life can still surprise him.',art:'horizon'},
    {title:'The Account That Never Came Back',url:"{{ '/stories/the-account-that-never-came-back/' | relative_url }}",genre:'ONLINE FRIENDSHIP · GAMING',summary:'A suspended account, a missing friend, and a gaming community trying to reconnect the pieces.',art:'stars'},
    {title:'When Everyone Went Offline',url:"{{ '/stories/when-everyone-went-offline/' | relative_url }}",genre:'ONLINE FRIENDSHIP · DIGITAL LIFE',summary:'A Minecraft server became a home for four people—and silence changes what home means.',art:'stars'},
    {title:'The Words We Never Sent',url:"{{ '/stories/the-words-we-never-sent/' | relative_url }}",genre:'CONTEMPORARY DRAMA · ONLINE FRIENDSHIP',summary:'They never promised forever. They only made it feel possible, until the words ran out.',art:'letter'},
    {title:'One Can of Coffee and a Broken Pen',url:"{{ '/stories/the-student-council-president-hates-everyone-vol-1/' | relative_url }}",genre:'STUDENT COUNCIL ROM-COM · VOL. 1',summary:'A terrifying student council president, a boy who refuses to chase her, and one can of coffee too many.',art:'sunset'},
    {title:'The Things We Never Said',url:"{{ '/stories/the-student-council-president-hates-everyone-vol-2/' | relative_url }}",genre:'STUDENT COUNCIL ROM-COM · VOL. 2',summary:'Dating does not prepare them for old names, missing memories, and truths that arrive too late.',art:'letter'},
    {title:"The President's Last Rule",url:"{{ '/stories/the-student-council-president-hates-everyone-vol-3/' | relative_url }}",genre:'STUDENT COUNCIL ROM-COM · FINAL VOL.',summary:'The secrets are finally explained, old wounds begin to heal, and the president makes one last rule for a happy future.',art:'sunset'}

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
