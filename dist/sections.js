(() => {
  const projects = [
    {id:'pest', title:'AI-Based Pest Detection and Pesticide Recommendation System', type:'Final-year project', categories:['AI-CV'], tags:['Computer vision','Agriculture'], description:'An image-based system for identifying crop pests and recommending pesticides for the detected pest.'},
    {id:'pipeline', title:'Real-Time AI Inference Pipeline', type:'Systems engineering', categories:['Backend','AI-CV'], tags:['Kafka','Redis','FastAPI','WebSockets','Prometheus','Grafana'], description:'A streaming inference pipeline that connects event ingestion, prediction delivery and service monitoring.'},
    {id:'ecg', title:'Real-Time ECG Monitoring System', type:'Embedded systems', categories:['Embedded'], tags:['Embedded','ECG','Signal monitoring'], description:'An embedded monitoring project that captures cardiac electrical activity and displays a live ECG waveform.'},
    {id:'verify', title:'VerifyAI', type:'Machine learning', categories:['AI-CV','Backend','Web'], tags:['BERT','FastAPI','React','Chrome extension'], description:'A BERT-powered text verification project with a FastAPI backend, a React interface and a Chrome extension.'},
    {id:'student', title:'StudentSphere', type:'Interface design', categories:['Web'], tags:['Web','Claymorphism','Neubrutalism'], description:'A student-focused web interface that pairs rounded claymorphic elements with bold neubrutalist layouts.'}
  ];
  const smaller = [
    ['Emotion detection CNN','AI-CV'],['Agricultural disease prediction','AI-CV'],['Travel agency app','Web'],['ALU design report','Embedded']
  ];
  const skills = [
    ['Embedded & Hardware','ESP32, Arduino, 8051, 8085/8086, VLSI basics'],
    ['Backend & Systems','FastAPI, Kafka, Redis, WebSockets, Docker, Prometheus'],
    ['Web','React, HTML, CSS, JavaScript, Firebase'],['AI/ML','PyTorch, Hugging Face'],
    ['Languages','Python, Java, C/C++'],['Tools','Git, GitHub, Copilot, Cursor']
  ];
  const timeline = [
    ['IBM','Virtual internship'],['CTTC Bhubaneswar','Industrial training in embedded protocols and VLSI'],
    ['Smart India Hackathon','Selected participant'],['Code for Change 2.0','Hackathon'],['Graph Hacks','Hackathon']
  ];
  const badges = [['NCC','Major rank'],['Karate','Black Belt'],['NIELIT','VLSI & Embedded'],['NPTEL','Python'],['GeeksforGeeks','Java'],['CSCoE / WEBEL','Cyber Security'],['TCS iON','Certification']];
  const chips = items => items.map(tag => '<span class="p-chip">'+tag+'</span>').join('');
  function renderPreview(id, canvas) {
    const ctx=canvas.getContext('2d');
    if(!ctx)return;
    const W=760,H=360;
    canvas.width=W; canvas.height=H;
    const styles = {
      pest:['#152a14','#435b1f','#a4db76'],pipeline:['#18232b','#233d50','#89dbef'],
      ecg:['#0d2522','#1b443d','#81f6c8'],verify:['#29243c','#504661','#c2a2e5'],student:['#2b333e','#52667d','#d7e2f4']
    };
    const [dark,mid,light]=styles[id];
    const grad=ctx.createLinearGradient(0,0,W,H);
    grad.addColorStop(0,mid);grad.addColorStop(1,dark);ctx.fillStyle=grad;ctx.fillRect(0,0,W,H);
    const line=(points,color,width=1)=>{ ctx.beginPath(); points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke(); };
    const rect=(x,y,w,h,fill,edge)=>{ctx.fillStyle=fill;ctx.fillRect(x,y,w,h);if(edge){ctx.strokeStyle=edge;ctx.lineWidth=1;ctx.strokeRect(x,y,w,h)}};
    const label=(str,x,y,size=14,color=light)=>{ctx.font=size+'px monospace';ctx.fillStyle=color;ctx.fillText(str,x,y)};
    for(let x=0;x<W;x+=30)for(let y=0;y<H;y+=30)rect(x,y,1.5,1.5,'#ffffff29');
    if(id==='pest'){
      ctx.save();ctx.translate(365,210);ctx.rotate(-.41);
      ctx.beginPath();ctx.moveTo(-215,0);ctx.bezierCurveTo(-116,-128,20,-128,230,-5);ctx.bezierCurveTo(45,119,-89,94,-215,0);ctx.fillStyle='#6eaa47';ctx.fill();ctx.clip();
      for(let x=-220;x<240;x+=21){line([[x-75,-115],[x,0],[x-73,108]],'#accb7877',2)}
      line([[-238,0],[237,-5]],'#bad58a',4);ctx.restore();
      const bx=357,by=137,bw=98,bh=83;
      ctx.strokeStyle=light;ctx.lineWidth=3;
      for(const [x,k] of [[bx,1],[bx+bw,-1]])for(const [y,j] of [[by,1],[by+bh,-1]])line([[x+15*k,y],[x,y],[x,y+15*j]],'#d9ff86',3);
      ctx.fillStyle='#293318';ctx.beginPath();ctx.ellipse(404,177,12,18,-.38,0,2*Math.PI);ctx.fill();
      for(let i=0;i<3;i++)line([[385,163+i*8],[403,168+i*7],[421,160+i*8]],'#273916',2);
      label('PEST REGION',bx,by-9,13,'#e0ffa7');
    } else if(id==='pipeline'){
      const nodes=[[102,190,'INGEST'],[275,190,'KAFKA'],[456,100,'MODEL'],[456,274,'REDIS'],[644,190,'STREAM']];
      [[0,1],[1,2],[1,3],[2,4],[3,4]].forEach(([a,b])=>{const [x,y]=nodes[a],[u,v]=nodes[b];line([[x,y],[(x+u)/2,y],[(x+u)/2,v],[u,v]],'#76c7e1',2)});
      nodes.forEach(([x,y,t])=>{rect(x-46,y-22,92,44,'#203847','#76b0c8');label(t,x-t.length*4.2,y+5,14)});
    }else if(id==='ecg'){
      for(let x=0;x<W;x+=18)line([[x,0],[x,H]],'#6fdfba19');
      for(let y=0;y<H;y+=18)line([[0,y],[W,y]],'#6fdfba19');
      let wave=[];for(let x=0;x<W;x++){let t=(x%156)/156;const peak=(center,spread,amp)=>amp*Math.exp(-((t-center)**2)/spread);wave.push([x,192-peak(.15,.001,11)+peak(.35,.0002,18)-peak(.385,.00014,84)+peak(.43,.0003,33)-peak(.7,.003,21)])}
      ctx.shadowBlur=11;ctx.shadowColor=light;line(wave,light,3);ctx.shadowBlur=0;label('ECG  /  LEAD I',34,60,14)
    }else{
      ctx.save();ctx.translate(370,180);ctx.rotate(id==='student'?-.06:.045);
      rect(-235,-114,470,236,'#12151f55');rect(-242,-123,470,236,id==='student'?'#cad3dc':'#302c3a',light);
      rect(-242,-123,470,28,dark);for(let i=0;i<3;i++){ctx.fillStyle=light;ctx.beginPath();ctx.arc(-222+i*12,-109,3,0,Math.PI*2);ctx.fill()}
      if(id==='student'){
        label('StudentSphere',-218,-38,26,dark);
        ['Courses','Campus','Schedule'].forEach((t,i)=>{rect(-216+i*143,-12,123,83,['#f5ce81','#c5b1e4','#a0c9b6'][i],dark);label(t,-205+i*143,38,16,dark)});
      }else{label('VerifyAI',-217,-45,29,'#f0e6ff');for(let i=0;i<3;i++)rect(-214,-15+i*19,245-i*22,5,'#887991');rect(70,-42,121,78,'#4a4357',light);label('BERT',107,3,17)}
      ctx.restore();
    }
  }
  function mount() {
    const work=document.getElementById('work'), engineering=document.getElementById('engineering');
    if(!work||!engineering)return;
    work.innerHTML='<div class="p-section"><h2 class="p-title">Selected projects<span>.</span></h2><div class="p-tabs" aria-label="Filter projects">'+['All','Embedded','Backend','Web','AI-CV'].map((name,i)=>'<button type="button" aria-pressed="'+(!i)+'">'+name+'</button>').join('')+'</div><div class="p-grid"></div><details class="p-more"><summary>More projects</summary><ul></ul></details></div>';
    const grid=work.querySelector('.p-grid'),more=work.querySelector('details');
    let cleanups=[];
    const knownRepositories=new Map();
    const aliases={
      pest:['ai based pest detection and pesticide recommendation system','pest detection and pesticide recommendation system'],
      pipeline:['real time ai inference pipeline','realtime ai inference pipeline'],
      ecg:['real time ecg monitoring system','realtime ecg monitoring system'],
      verify:['verifyai'],student:['studentsphere']
    };
    const normalize=name=>name.toLowerCase().replace(/[^a-z0-9]/g,'');
    function showProjectLinks(article,id) {
      const repository=knownRepositories.get(id);
      if(!repository||article.querySelector('.p-links'))return;
      const links=document.createElement('div');links.className='p-links';
      const add=(label,url)=>{const link=document.createElement('a');link.textContent=label;link.href=url;links.append(link)};
      add('GitHub',repository.html_url);
      if(repository.homepage && /^https:\/\//i.test(repository.homepage)) add('Project website',repository.homepage);
      article.querySelector('.p-copy').append(links);
    }
    async function loadRepositories(){
      try {
        const response=await fetch('https://api.github.com/users/Shiv2717/repos?per_page=100',{referrerPolicy:'no-referrer'});
        if(!response.ok)return;
        const repositories=await response.json();
        for(const [id,names] of Object.entries(aliases)){
          const match=repositories.find(repo=>repo.owner?.login.toLowerCase()==='shiv2717' && !repo.fork && names.some(name=>normalize(name)===normalize(repo.name)));
          if(match)knownRepositories.set(id,match);
        }
        grid.querySelectorAll('article').forEach(article=>showProjectLinks(article,article.dataset.id));
      } catch { /* Offline portfolios still show every card. */ }
    }
    function draw(category){
      cleanups.forEach(dispose=>dispose());
      cleanups=[];
      grid.innerHTML='';
      projects.filter(p=>category==='All'||p.categories.includes(category)).forEach(p=>{
        const article=document.createElement('article');article.className='p-card';
        article.innerHTML='<div class="p-visual"><canvas aria-label="Concept illustration for '+p.title+'" role="img"></canvas><span>Concept preview</span></div><div class="p-copy"><small>'+p.type+'</small><h3>'+p.title+'</h3><p>'+p.description+'</p><div class="p-chips">'+chips(p.tags)+'</div></div>';
        grid.append(article);renderPreview(p.id,article.querySelector('canvas'));
        article.dataset.id=p.id;
        showProjectLinks(article,p.id);
        if(window.mountPortfolioSpotlight){
          const host=document.createElement('div');host.className='p-spot-host';host.setAttribute('aria-hidden','true');article.prepend(host);
          cleanups.push(window.mountPortfolioSpotlight(host));
        }
      });
      const rows=smaller.filter(([,c])=>category==='All'||category===c);
      more.hidden=!rows.length;
      more.querySelector('ul').innerHTML=rows.map(([name,c])=>'<li>'+name+'<span>'+c+'</span></li>').join('');
    }
    loadRepositories();
    const buttons=[...work.querySelectorAll('.p-tabs button')];
    buttons.forEach(b=>b.addEventListener('click',()=>{buttons.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));draw(b.textContent)}));draw('All');
    engineering.innerHTML='<section id="skills" class="p-section"><h2 class="p-title">Skills<span>.</span></h2><div class="p-skills">'+skills.map(([title,items])=>'<article><h3>'+title+'</h3><div class="p-chips">'+chips(items.split(', '))+'</div></article>').join('')+'</div></section><section id="experience" class="p-section"><h2 class="p-title">Experience & training<span>.</span></h2><ol class="p-timeline">'+timeline.map(([n,d])=>'<li><h3>'+n+'</h3><p>'+d+'</p></li>').join('')+'</ol></section><section id="achievements" class="p-section"><h2 class="p-title">Achievements & certifications<span>.</span></h2><div class="p-badges">'+badges.map(([n,d])=>'<article><i aria-hidden="true">✧</i><h3>'+n+'</h3><p>'+d+'</p></article>').join('')+'</div></section>';
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();
