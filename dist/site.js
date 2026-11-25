const groups = ['Landscape','Street','Portraits','Events'];
const titles = ['Last light on the Himalayas','Mist among the trees','Before the storm','A taxi in Kolkata','The flower market','Along the stone alley','A face in afternoon light','By the window','At the pottery wheel','A procession of lanterns','An afternoon of cricket','The dancer’s gesture'];
const gallery = document.querySelector('#gallery');
const viewer = document.querySelector('#viewer');
const detail = document.querySelector('#detail');
const categories = document.querySelector('#categories');
const imagePath = index => 'images/photo-' + String(index + 1).padStart(2,'0') + '.webp';
let visible = [], selected = 0;
function show(index) {
  selected = index;
  const img = new Image();
  img.src = imagePath(index);
  img.alt = titles[index];
  const caption = document.createElement('p');
  caption.textContent = titles[index] + ' · ' + groups[Math.floor(index/3)] + ' · AI-generated study';
  detail.replaceChildren(img,caption);
  for(const [label,step] of [['Previous',-1],['Next',1]]) {
    const button = document.createElement('button');
    button.textContent = label;
    button.onclick = () => stepPhoto(step);
    detail.append(button);
  }
  if(!viewer.open) viewer.showModal();
}
function stepPhoto(step) {show(visible[(visible.indexOf(selected)+step+visible.length)%visible.length]);}
function filter(group) {
  gallery.replaceChildren();
  visible = [];
  for(const button of categories.children) button.setAttribute('aria-pressed',button.textContent === group);
  titles.forEach((title,index) => {
    if(group !== 'All' && groups[Math.floor(index/3)] !== group) return;
    visible.push(index);
    const button = document.createElement('button');
    const img = new Image();
    img.src = imagePath(index); img.alt = ''; img.loading = 'lazy';
    button.append(img,document.createTextNode(title)); button.onclick = () => show(index);
    gallery.append(button);
  });
}
for(const group of ['All',...groups]) {
  const button = document.createElement('button');
  button.textContent = group;
  button.onclick = () => filter(group);
  categories.append(button);
}
filter('All');
document.querySelector('#close').onclick = () => viewer.close();
viewer.addEventListener('keydown',event => {
  if(event.key === 'ArrowLeft') stepPhoto(-1);
  if(event.key === 'ArrowRight') stepPhoto(1);
});
document.querySelector('form').onsubmit = event => {
  event.preventDefault();
  const data = new FormData(event.target);
  const body = data.get('message') + '\n\nReply to ' + data.get('email');
  location.href = 'mailto:mishrashivam2717@gmail.com?subject=Portfolio%20enquiry&body=' + encodeURIComponent(body);
  document.querySelector('output').textContent = ' Send your draft from your email app.';
};
