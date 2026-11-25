import FavoriteSongs from '../src/FavoriteSongs';
import BranchedMenu from '../src/BranchedMenu';
import FlowingMenu from '../src/FlowingMenu';
import Folder from '../src/Folder';
import {GalleryLink,PhotographyPage} from '../src/Photography';
import {Hero, Dock} from '../src/intro';

  const projects = [
    {id:'pest', cardTitle:'Crop pest detection', brief:'Identifies pests in crop images and suggests a pesticide.', title:'AI-Based Pest Detection and Pesticide Recommendation System', type:'Final-year project', categories:['AI-CV'], tags:['Computer vision','Agriculture'], description:'An image-based system for identifying crop pests and recommending pesticides for the detected pest.'},
    {id:'pipeline', cardTitle:'Live AI inference', brief:'Streams model predictions from Kafka to a live client.', title:'Real-Time AI Inference Pipeline', type:'Systems engineering · 2025', categories:['Backend','AI-CV'], tags:['Kafka','Redis','FastAPI','WebSockets','Prometheus','Grafana'], description:'An asynchronous FastAPI service ingests events through Kafka and Redis Streams and sends predictions to clients over WebSockets. I packaged the services with Docker and used Prometheus to track throughput, latency and error rates.'},
    {id:'ecg', cardTitle:'ECG monitor', brief:'Captures heart signals and displays a live ECG waveform.', title:'Real-Time ECG Monitoring System', type:'Embedded systems · 2024–2025', categories:['Embedded','Backend','Web'], tags:['ESP32','AD8232','React','Node.js','MongoDB'], description:'An ESP32 reads an AD8232 ECG sensor and streams the signal over WebSocket to a React interface, where HTML5 Canvas draws the live waveform. A Node.js and Express backend calculates beats per minute and stores readings in MongoDB. Chart.js visualizes the readings and jsPDF generates reports on demand.'},
    {id:'verify', cardTitle:'VerifyAI', brief:'Checks text with BERT through a web app or browser extension.', title:'VerifyAI', type:'Machine learning', categories:['AI-CV','Backend','Web'], tags:['BERT','FastAPI','React','Chrome extension'], description:'A BERT-powered text verification project with a FastAPI backend, a React interface and a Chrome extension.'},
    {id:'student', cardTitle:'StudentSphere', brief:'A student interface with rounded panels and bold layouts.', title:'StudentSphere', type:'Interface design', categories:['Web'], tags:['Web','Claymorphism','Neubrutalism'], description:'A student-focused web interface that pairs rounded claymorphic elements with bold neubrutalist layouts.'}
  ];
  const smaller = [
    ['Emotion detection CNN','AI-CV'],['Agricultural disease prediction','AI-CV'],['Travel agency app','Web'],['ALU design report','Embedded']
  ];
  const skills = [
    ['Embedded & Hardware','ESP32, Arduino, 8051, 8085/8086, PIC, AD8232, Digital electronics, VLSI basics, UART, I2C, SPI'],
    ['Backend & Systems','FastAPI, Kafka, Redis, WebSockets, Docker, Prometheus, Node.js, Express.js, REST APIs, MongoDB, Kubernetes basics'],
    ['Web','React, HTML5, CSS, JavaScript, Firebase'],['AI/ML','PyTorch, Hugging Face'],
    ['Languages','Python, Java, C/C++, SQL'],['Tools','Git, GitHub, Copilot, Cursor, Proteus, Canva, Figma']
  ];
  const experienceGroups = [
    {label:'Education', children:[
      {value:'btech',label:'B.Tech · ECE',school:'Dr. B. C. Roy Engineering College',detail:'B.Tech in Electronics and Communication Engineering · 2023–2027 · Durgapur, West Bengal'},
      {value:'school',label:'Class X & XII',school:'Sudhir Memorial Institute Liluah',detail:'Class X · 2020 and Class XII · 2022 · Howrah, West Bengal'}
    ]},
    {label:'Internship & training', children:[
      {value:'ibm',label:'AICTE Edunet / IBM',detail:'Artificial Intelligence Virtual Intern · Remote · Jan–Feb 2025. During this one-month AICTE Edunet Foundation internship in collaboration with IBM, I prepared data, trained supervised learning models and evaluated their performance. I also explored IBM Watson and cloud deployment workflows.'},
      {value:'cttc',label:'CTTC Bhubaneswar',detail:'Embedded Systems Industrial Trainee · Bhubaneswar, Odisha · Jun–Jul 2024. I programmed PIC and Arduino microcontrollers, implemented UART, I2C and SPI communication modules, and tested circuits in Proteus.'}
    ]},
    {label:'Hackathons', children:[
      {value:'sih',label:'Smart India Hackathon',detail:'Worked on a technology problem statement and submitted it for Smart India Hackathon.'},
      {value:'code-for-change',label:'Code for Change 2.0',detail:'Hackathon'},
      {value:'hack4bengal',label:'Hack4Bengal',detail:'My team built and presented a working prototype within the hackathon deadline.'},
      {value:'graph-hacks',label:'Graph Hacks',detail:'Hackathon'}
    ]}
  ];
  const activities = [
    ['Hacktoberfest','Contributed open-source pull requests for three consecutive years.'],
    ['Data structures & algorithms','I practice problem solving on LeetCode and GeeksforGeeks.'],
    ['Freelance development','I work directly with clients and take projects from requirements through delivery.']
  ];
  const badges = [['NCC','Major rank'],['Karate','Black Belt'],['NIELIT','VLSI and Embedded Systems'],['NPTEL','Python Programming'],['GeeksforGeeks','Java Programming'],['Cyber Security Centre of Excellence & WEBEL','Cyber Security Basic Concepts'],['TCS iON','Certification']];
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
    const aliases={
      pest:['ai based pest detection and pesticide recommendation system','pest detection and pesticide recommendation system'],
      pipeline:['real time ai inference pipeline','realtime ai inference pipeline'],
      ecg:['real time ecg monitoring system','realtime ecg monitoring system'],
      verify:['verifyai'],student:['studentsphere']
    };
    const normalize=name=>name.toLowerCase().replace(/[^a-z0-9]/g,'');

const {useEffect,useRef,useState}=React;
function Chips({items}) {return <div className="p-chips">{items.map(t=><span className="p-chip" key={t}>{t}</span>)}</div>}
function Title({children}) {return <h2 className="p-title">{children}<span>.</span></h2>}
function ProjectCard({p,repo}) {
 const canvas=useRef(null);
 useEffect(()=>{renderPreview(p.id,canvas.current)},[p]);
 return <article className="p-card"><div className="p-spot-host" aria-hidden="true"><SpotlightCard spotlightColor="#d4fa68" intensity={0.12} proximity={50} borderGlow={0.6}/></div><div className="p-visual"><canvas ref={canvas} aria-label={'Concept illustration for '+p.title}/><span>Concept preview</span></div><div className="p-copy"><small>{p.type}</small><h3>{p.title}</h3><p>{p.description}</p><Chips items={p.tags}/>{repo&&<div className="p-links"><a href={repo.html_url}>GitHub</a>{repo.homepage?.startsWith('https://')&&<a href={repo.homepage}>Project website</a>}</div>}</div></article>
}
function Filters({items,value,onChange}) {return items.map(item=><button key={item} aria-pressed={item===value} onClick={()=>onChange(item)}>{item}</button>)}
function Projects(){
 const [category,setCategory]=useState('All'),[repos,setRepos]=useState([]);
 useEffect(()=>{fetch('https://api.github.com/users/Shiv2717/repos?per_page=100').then(r=>r.ok?r.json():[]).then(setRepos).catch(()=>{})},[]);
 const [selected, setSelected] = useState(null);
 const dialog = useRef(null);
 const stage = useRef(null);
 const [folderSize, setFolderSize] = useState(1);
 React.useLayoutEffect(() => {
   const resize = () => setFolderSize(Math.min(1.65, (stage.current.clientWidth - 24) / 540));
   resize();
   const observer = new ResizeObserver(resize);
   observer.observe(stage.current);
   return () => observer.disconnect();
 }, []);
 const items = React.useMemo(() => projects
   .filter(p => category === 'All' || p.categories.includes(category))
   .map(project => ({
     project,
     title:project.title,
     content:<div className="project-paper">
       <strong>{project.cardTitle}</strong>
       <span>{project.brief}</span>
     </div>
   })), [category]);
 const more = smaller.filter(([,tag]) => category === 'All' || category === tag);
 const repo = selected && repos.find(r => !r.fork && r.owner.login.toLowerCase() === 'shiv2717' &&
   aliases[selected.id].some(a => normalize(a) === normalize(r.name)));
 function showProject(item) {
   setSelected(item.project);
   dialog.current.showModal();
 }
 return <section id="work" className="p-section">
   <Title>Selected projects</Title>
   <div className="p-tabs"><Filters items={['All','Embedded','Backend','Web','AI-CV']} value={category} onChange={setCategory}/></div>
   <div ref={stage} className="project-folder">
     <Folder key={category} mode="flap" variant="solid" color="#4385f5" paperColor="#ffffff"
       theme="dark" size={folderSize} label="Projects" items={items} layout="spread"
       closeOnOutsideClick={!selected} intro={false} zoomOnClick={false} onItemClick={showProject}/>
   </div>
   <dialog className="project-dialog" ref={dialog} aria-label={selected?.title || 'Project details'} onClose={()=>setSelected(null)}>
     <button className="project-close" onClick={()=>dialog.current.close()}>Close</button>
     {selected && <ProjectCard p={selected} repo={repo}/>}
   </dialog>
   {more.length > 0 && <details className="p-more"><summary>More projects</summary><ul>{more.map(([name,tag])=><li key={name}>{name}<span>{tag}</span></li>)}</ul></details>}
 </section>;
}
const skillMenuItems = skills.map(([text, technologies]) => ({
  text, marquee:technologies.split(', ').join(' · ') + ' ·', controls:'skill-details'
}));

function SkillsMenu() {
  const [selected,setSelected] = useState(-1);
  return <>
    <div className="skill-menu-stage">
      <FlowingMenu items={skillMenuItems} speed={60} stretch={0.6} magnet={0.25}
        followCursor={0.4} textColor="#ffffff" bgColor="#120F17" marqueeBgColor="#ffffff"
        marqueeTextColor="#120F17" activeIndex={selected} ariaLabel="Technical skills"
        onItemClick={(_,index)=>setSelected(current=>current === index ? -1 : index)}/>
    </div>
    <div id="skill-details" className="skill-details" hidden={selected < 0} aria-live="polite">
      {selected >= 0 && <><h3>{skills[selected][0]}</h3><Chips items={skills[selected][1].split(', ')}/></>}
    </div>
  </>;
}
function ExperienceMenu() {
  const [entry,setEntry] = useState(() => experienceGroups[0].children.find(item => item.value === 'school'));
  return <div className="experience-browser">
    <BranchedMenu items={experienceGroups} defaultOpen={experienceGroups.map((_, index) => index)} defaultActive={entry.value}
      width={240} rowHeight={36} indent={40} trunk={14} radius={10} lineWidth={1.5}
      fontSize={14} drawDuration={400} foldDuration={300} onSelect={(_,item)=>setEntry(item)}/>
    <div className="experience-note" aria-live="polite">
      <h3>{entry.school ?? entry.label}</h3><p>{entry.detail}</p>
    </div>
  </div>;
}
function Activities(){return <section id="activities" className="p-section"><Title>Activities</Title><div className="p-badges">{activities.map(([name,detail])=><article key={name}><h3>{name}</h3><p>{detail}</p></article>)}</div></section>}
function Engineering(){return <><section id="skills" className="p-section"><Title>Skills</Title><SkillsMenu/></section><section id="experience" className="p-section"><Title>Education, experience &amp; training</Title><ExperienceMenu/></section><section id="achievements" className="p-section"><Title>Achievements &amp; certifications</Title><div className="p-badges">{badges.map(([a,b])=><article key={a}><h3>{a}</h3><p>{b}</p></article>)}</div></section></>}
function Portfolio(){
 const [feedback,setFeedback]=useState('');
 function compose(event){
 event.preventDefault();
 const data=new FormData(event.currentTarget);
 location.href='mailto:mishrashivam2717@gmail.com?subject=Portfolio%20enquiry&body='+encodeURIComponent(data.get('message')+'\n\nReply to '+data.get('email'));
 setFeedback(' Send your draft from your email app.');
 }
 return <><a className="skip" href="#about">Skip introduction</a><Dock/><main id="top"><Hero/><section id="about" className="block"><div className="profile-lead"><div className="profile-copy"><span className="over">Profile</span><h2>The person behind<br/><i>the projects.</i></h2><p className="bio-intro">I build across hardware and software, and photograph the world in between.</p></div><img className="profile-portrait" src={window.portfolioFiles?.["images/profile-portrait.jpg"] ?? "images/profile-portrait.jpg"} alt="Shivam Mishra" decoding="async" /></div><div className="bio"><p>I’m Shivam Kumar Mishra, an electronics and communication engineering student in Durgapur. I build connected devices and full-stack applications, and I’m interested in embedded systems and software roles.</p><p>Outside engineering, I hold an NCC Major rank and a Karate Black Belt. Photography gives me a reason to slow down and look closer.</p></div><small>English &nbsp; / &nbsp; Hindi &nbsp; / &nbsp; Bengali</small></section><Projects/><Engineering/><Activities/><section id="photos" className="block"><span className="over">BEHIND THE LENS</span><h2>Photography<span>.</span></h2><GalleryLink/></section><FavoriteSongs/><section id="contact" className="block"><span className="over">CONTACT</span><h2>Get in touch<span>.</span></h2><p className="muted"><a href="mailto:mishrashivam2717@gmail.com">mishrashivam2717@gmail.com</a> · <a href="https://github.com/Shiv2717">GitHub</a> · <a href="https://www.linkedin.com/in/shivam-mishra-shivam2717">LinkedIn</a></p><form onSubmit={compose}><label>Your email<input type="email" name="email" required/></label><label>Message<textarea name="message" required rows="4"></textarea></label><button className="primary">Open email draft</button><output aria-live="polite">{feedback}</output></form></section></main><footer>Shivam Mishra <a href="#top">Back to top ↑</a></footer></>
}
ReactDOM.createRoot(document.getElementById('root')).render(new URLSearchParams(location.search).get("gallery") === "photography" ? <PhotographyPage/> : <ClickSpark sparkColor="#dbad67"><Portfolio/></ClickSpark>);
