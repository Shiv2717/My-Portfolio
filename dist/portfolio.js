(()=>{var Ut=["001.webp","002.webp","003.webp","004.webp","005.webp","006.webp","007.webp","008.webp","009.webp","010.webp","011.webp","012.webp","013.webp","014.webp","015.webp","016.webp","017.webp","018.webp","019.webp","020.webp","021.webp","022.webp","023.webp","024.webp","025.webp","026.webp","027.webp","028.webp","029.webp","030.webp","031.webp","032.webp","033.webp","034.webp","035.webp","036.webp","037.webp","038.webp","039.webp","040.webp","041.webp","042.webp","043.webp","044.webp","045.webp","046.webp","047.webp","048.webp","049.webp","050.webp","051.webp","052.webp","053.webp","054.webp","055.webp","056.webp","057.webp","058.webp","059.webp","060.webp","061.webp","062.webp","063.webp","064.webp","065.webp","066.webp","067.webp","068.webp","069.webp","070.webp","071.webp","072.webp","073.webp","074.webp","075.webp","076.webp","077.webp","078.webp","079.webp","080.webp","081.webp","082.webp","083.webp","084.webp","085.webp","086.webp","087.webp","088.webp"];var Yr=window.React,{Children:ru,isValidElement:$r,useLayoutEffect:au,useMemo:Zr,useEffect:Zt,useRef:ct,useCallback:Vn,useState:Ks}=window.React;var rs=Math.PI*2,gf=1/240,xf=6,_f=[{title:"Brand guidelines"},{title:"Launch plan"},{title:"Moodboard"}],vf=[.5,-1.1,1.5,-.7,1.2,-1.6],yf=[{x:.14,y:-.004,r:1.4},{x:.115,y:.008,r:-1.1},{x:.09,y:0,r:.6}],bf=[{x:.27,y:-.016,r:4.5},{x:.2,y:.014,r:1.2},{x:.14,y:0,r:-1.2}],nc=[{x:.16,rise:0,r:3},{x:-.17,rise:.05,r:-3.5},{x:0,rise:.1,r:.5},{x:.25,rise:.08,r:5},{x:-.25,rise:.09,r:-5.5},{x:.08,rise:.12,r:1.5}],pu=[4,-5,3,-6,5,-3],mu=[.03,-.04,.05,-.02,.04,-.05],Mf=[-6,4,-3,7,-5,3],Sf={open:-180,receive:-24,peek:-13,rest:0},wf={open:-64,receive:-30,peek:-15,rest:0},ic={out:50,drag:80,focus:90},Ef=typeof window>"u"?Zt:au,Et=(i,e,t)=>Math.min(t,Math.max(e,i)),ou=(()=>{let i=null,e=new Map;return t=>{let n=String(t);if(e.has(n))return e.get(n);let s=[61,139,255];return typeof document<"u"&&(i??=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),i&&(i.clearRect(0,0,1,1),i.fillStyle="#3d8bff",i.fillStyle=n,i.fillRect(0,0,1,1),s=Array.from(i.getImageData(0,0,1,1).data.slice(0,3)))),e.set(n,s),s}})(),mi=(i,e,t)=>i.map((n,s)=>Math.round(n+(e[s]-n)*t)),ni=i=>`rgb(${i[0]}, ${i[1]}, ${i[2]})`,Tf=i=>(.2126*i[0]+.7152*i[1]+.0722*i[2])/255,oc=(i,e)=>{let t=new Array(16);for(let n=0;n<4;n++)for(let s=0;s<4;s++)t[n*4+s]=i[s]*e[n*4]+i[4+s]*e[n*4+1]+i[8+s]*e[n*4+2]+i[12+s]*e[n*4+3];return t},as=(...i)=>i.reduce(oc),Ln=(i,e,t=0)=>[1,0,0,0,0,1,0,0,0,0,1,0,i,e,t,1],Kr=(i,e)=>[i,0,0,0,0,e,0,0,0,0,1,0,0,0,0,1],cu=i=>{let e=i*Math.PI/180,t=Math.cos(e),n=Math.sin(e);return[1,0,0,0,0,t,n,0,0,-n,t,0,0,0,0,1]},sc=i=>{let e=i*Math.PI/180,t=Math.cos(e),n=Math.sin(e);return[t,0,-n,0,0,1,0,0,n,0,t,0,0,0,0,1]},Af=i=>{let e=i*Math.PI/180,t=Math.cos(e),n=Math.sin(e);return[t,n,0,0,-n,t,0,0,0,0,1,0,0,0,0,1]},os=i=>`matrix3d(${i.map(e=>Math.abs(e)<1e-7?0:Number(e.toFixed(6))).join(", ")})`,Cf=(i,e,t,n,s)=>{let r=(i?180:224)*e,a=(i?232:176)*e,o=20*e,l=12*e,c=o*.75,u=i?o:o+a*.3,h=i?[0,l,l,0]:[l,l,l,l],d=r-h[0]-h[1]-c*2-10*e,f=Et(n?t+14*e+c:r*.34,Math.min(r*.3,d),d),m=s==="left"?h[0]+5*e+c:s==="center"?(r-f)/2:r-h[1]-5*e-c-f,_=i?r*.8:r*.54;return{book:i,scale:e,w:r,h:a,tabH:o,r:l,shoulder:c,corners:h,tabW:f,tabX:m,frontTop:u,frontH:o+a-u,docW:_,docH:_*(i?1.28:1.22)}},gu=i=>{let{w:e,h:t,tabX:n,tabW:s,tabH:r,shoulder:a}=i,[o,l,c,u]=i.corners,h=r,d=r+t;return[`M 0 ${h+o}`,`Q 0 ${h} ${o} ${h}`,`L ${n-a} ${h}`,`C ${n} ${h} ${n} 0 ${n+a} 0`,`L ${n+s-a} 0`,`C ${n+s} 0 ${n+s} ${h} ${n+s+a} ${h}`,`L ${e-l} ${h}`,`Q ${e} ${h} ${e} ${h+l}`,`L ${e} ${d-c}`,`Q ${e} ${d} ${e-c} ${d}`,`L ${u} ${d}`,`Q 0 ${d} 0 ${d-u}`,"Z"].join(" ")},lu=`#version 300 es
layout(location = 0) in vec2 aCorner;
uniform mat4 uModel;
uniform vec2 uSize;
uniform float uDepth;
uniform vec2 uOrigin;
uniform vec4 uView;
uniform float uBleed;
out vec2 vLocal;
out vec2 vUv;
void main() {
  vLocal = aCorner * (uSize + vec2(uBleed, 0.0)) - vec2(uBleed, 0.0);
  vUv = aCorner;
  vec4 q = uModel * vec4(vLocal, 0.0, 1.0);
  float w = 1.0 - q.z / uDepth;
  vec2 p = q.xy - uOrigin + (uOrigin - uView.xy) * w;
  vec2 clip = p / uView.zw * 2.0 - w;
  gl_Position = vec4(clip.x, -clip.y, 0.0, w);
}`,Rf=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uImage;
uniform float uAlpha;
out vec4 outColor;
void main() {
  outColor = texture(uImage, vUv) * uAlpha;
}`,If=`#version 300 es
layout(location = 0) in vec2 aCorner;
out vec2 vUv;
void main() {
  vUv = aCorner;
  gl_Position = vec4(aCorner * 2.0 - 1.0, 0.0, 1.0);
}`,Pf=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uImage;
uniform vec2 uStep;
uniform float uSigma;
out vec4 outColor;
void main() {
  float spacing = max(1.0, uSigma * 2.5 / 24.0);
  int reach = int(min(ceil(uSigma * 2.5 / spacing), 24.0));
  vec4 sum = texture(uImage, vUv);
  float total = 1.0;
  for (int i = 1; i <= 24; i++) {
    if (i > reach) break;
    float x = float(i) * spacing;
    float weight = exp(-0.5 * x * x / (uSigma * uSigma));
    sum += (texture(uImage, vUv + uStep * x) + texture(uImage, vUv - uStep * x)) * weight;
    total += 2.0 * weight;
  }
  outColor = sum / total;
}`,Lf=`#version 300 es
precision highp float;
in vec2 vLocal;
uniform mat4 uModel;
uniform vec2 uSize;
uniform float uDepth;
uniform vec2 uOrigin;
uniform vec4 uView;
uniform sampler2D uBehind;
uniform vec4 uRadii;
uniform float uSpine;
uniform float uLens;
uniform float uMorph;
uniform vec3 uInsideTop;
uniform vec3 uInsideBottom;
uniform float uTabRatio;
uniform vec2 uGutter;
uniform float uBevel;
uniform float uStrength;
uniform float uSplit;
uniform vec4 uTint;
uniform float uHaze;
uniform float uDim;
uniform float uGlint;
uniform float uShine;
uniform vec2 uLight;
out vec4 outColor;

float box(vec2 p, vec2 b, vec4 r) {
  float k = p.x > 0.0 ? (p.y > 0.0 ? r.z : r.y) : (p.y > 0.0 ? r.w : r.x);
  vec2 q = abs(p) - b + k;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - k;
}

float shape(vec2 p) {
  vec2 halfSize = vec2(uSize.x + uSpine, uSize.y) * 0.5;
  return box(p - vec2(uSize.x - halfSize.x, halfSize.y), halfSize, uRadii);
}

vec2 locate(vec2 p) {
  vec4 q = uModel * vec4(p, 0.0, 1.0);
  float w = 1.0 - q.z / uDepth;
  vec2 s = uOrigin + (q.xy - uOrigin) / w;
  vec2 uv = (s - uView.xy) / uView.zw;
  return vec2(uv.x, 1.0 - uv.y);
}

void main() {
  float d = shape(vLocal);
  float aa = max(fwidth(d), 1e-3);
  float cover = clamp(0.5 - d / aa, 0.0, 1.0);
  if (cover <= 0.0) discard;
  float e = 0.5;
  vec2 n = vec2(
    shape(vLocal + vec2(e, 0.0)) - shape(vLocal - vec2(e, 0.0)),
    shape(vLocal + vec2(0.0, e)) - shape(vLocal - vec2(0.0, e))
  );
  n /= max(length(n), 1e-5);
  float inside = max(0.0, -d);
  float t = 1.0 - clamp(inside / uBevel, 0.0, 1.0);
  vec2 bend = -n * pow(t, 2.0) * uStrength + (uSize * 0.5 - vLocal) * uLens;
  vec2 p = vLocal + bend;
  vec2 uv = locate(p);
  mat2 jac = mat2(locate(p + vec2(1.0, 0.0)) - uv, locate(p + vec2(0.0, 1.0)) - uv);
  vec4 seen = texture(uBehind, uv);
  if (uSplit > 0.0) {
    vec2 split = jac * (bend * uSplit);
    seen.r = texture(uBehind, uv + split).r;
    seen.b = texture(uBehind, uv - split).b;
  }
  vec4 color = vec4(uTint.rgb, 1.0) * uTint.a + seen * (1.0 - uTint.a);
  color.rgb = mix(color.rgb, vec3(color.a), uHaze + uGlint);
  color.rgb *= 1.0 - uDim;
  float band = 0.0;
  if (uMorph > 0.0) {
    band = (1.0 - smoothstep(0.0, uSize.x * 0.75, vLocal.x)) * uMorph;
    vec3 solid = mix(uInsideTop, uInsideBottom, uTabRatio + vLocal.y / uSize.y * (1.0 - uTabRatio));
    color = mix(color, vec4(solid, 1.0), band);
  }
  if (uGutter.y > 0.0) color.rgb *= 1.0 - uGutter.y * (1.0 - smoothstep(0.0, uGutter.x, vLocal.x));
  float facing = dot(n, uLight);
  float edge = clamp(inside / aa, 0.0, 1.0);
  vec2 span = vLocal / uSize;
  float across = uLight.x > 0.0 ? 1.0 - span.x : span.x;
  float sheen = smoothstep(0.85, 0.0, across * 0.55 + span.y) * 0.07 * uShine * (1.0 - band);
  float light = (max(facing, 0.0) * 0.85 + max(-facing, 0.0) * 0.28) * t * t * t * uShine + sheen;
  light += exp(-inside / 0.9) * (0.16 + 0.3 * max(facing, 0.0)) * uShine;
  float shade = max(-facing, 0.0) * t * t * 0.22 * (1.0 - band);
  color = color * (1.0 - shade) + vec4(0.0, 0.0, 0.0, shade);
  light = clamp(light * edge * (1.0 - band), 0.0, 1.0);
  color = color * (1.0 - light) + vec4(light);
  outColor = color * cover;
}`,uu=(i,e,t)=>{let n=i.createShader(e);return n?(i.shaderSource(n,t),i.compileShader(n),i.getShaderParameter(n,i.COMPILE_STATUS)?n:(i.deleteShader(n),null)):null},rc=(i,e,t,n)=>{let s=uu(i,i.VERTEX_SHADER,e),r=uu(i,i.FRAGMENT_SHADER,t),a=i.createProgram();if(!s||!r||!a)return null;if(i.attachShader(a,s),i.attachShader(a,r),i.linkProgram(a),i.deleteShader(s),i.deleteShader(r),!i.getProgramParameter(a,i.LINK_STATUS))return i.deleteProgram(a),null;let o={};return n.forEach(l=>{o[l]=i.getUniformLocation(a,l)}),{program:a,uniforms:o}},hu=["uModel","uSize","uDepth","uOrigin","uView","uBleed"],Df=i=>{let e=i.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!0});if(!e)return null;let t=rc(e,lu,Rf,[...hu,"uImage","uAlpha"]),n=rc(e,If,Pf,["uImage","uStep","uSigma"]),s=rc(e,lu,Lf,[...hu,"uBehind","uRadii","uSpine","uLens","uMorph","uInsideTop","uInsideBottom","uTabRatio","uGutter","uBevel","uStrength","uSplit","uTint","uHaze","uDim","uGlint","uShine","uLight"]);if(!t||!n||!s)return null;let r=e.createVertexArray(),a=e.createBuffer();e.bindVertexArray(r),e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let o=()=>({texture:e.createTexture(),frame:e.createFramebuffer()}),l=[o(),o(),o()],c={width:0,height:0},u=new Map,h=(m,_)=>{e.uniform1f(m.uniforms.uDepth,_.depth),e.uniform2f(m.uniforms.uOrigin,_.origin[0],_.origin[1]),e.uniform4f(m.uniforms.uView,_.view.x,_.view.y,_.view.width,_.view.height)},d=(m,_)=>{i.width!==m&&(i.width=m),i.height!==_&&(i.height=_),!(c.width===m&&c.height===_)&&(c.width=m,c.height=_,l.forEach(g=>{e.bindTexture(e.TEXTURE_2D,g.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,m,_,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,g.frame),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,g.texture,0)}))},f=(m,_,g,p,A)=>{e.bindFramebuffer(e.FRAMEBUFFER,_.frame),e.clear(e.COLOR_BUFFER_BIT),e.bindTexture(e.TEXTURE_2D,m.texture),e.uniform2f(n.uniforms.uStep,g,p),e.uniform1f(n.uniforms.uSigma,A),e.drawArrays(e.TRIANGLE_STRIP,0,4)};return{upload(m,_){let g=u.get(m);g||(g=e.createTexture(),u.set(m,g)),e.bindTexture(e.TEXTURE_2D,g),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,_),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)},prune(m){u.forEach((_,g)=>{m.has(g)||(e.deleteTexture(_),u.delete(g))})},render(m){if(e.isContextLost())return;let _=Math.max(1,Math.round(m.view.width*m.dpr)),g=Math.max(1,Math.round(m.view.height*m.dpr));d(_,g);let[p,A,M]=l;e.bindVertexArray(r),e.activeTexture(e.TEXTURE0),e.viewport(0,0,_,g),e.clearColor(0,0,0,0),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.bindFramebuffer(e.FRAMEBUFFER,p.frame),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(t.program),h(t,m),e.uniform1i(t.uniforms.uImage,0),e.uniform1f(t.uniforms.uBleed,0),m.layers.forEach(W=>{let E=u.get(W.key);E&&(e.bindTexture(e.TEXTURE_2D,E),e.uniformMatrix4fv(t.uniforms.uModel,!1,W.matrix),e.uniform2f(t.uniforms.uSize,W.width,W.height),e.uniform1f(t.uniforms.uAlpha,W.alpha),e.drawArrays(e.TRIANGLE_STRIP,0,4))});let T=m.glass,U=T.frost*m.dpr,C=p;U>.35&&(e.disable(e.BLEND),e.useProgram(n.program),e.uniform1i(n.uniforms.uImage,0),f(p,A,1/_,0,U),f(A,M,0,1/g,U),e.enable(e.BLEND),C=M),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clear(e.COLOR_BUFFER_BIT);let I=s.uniforms;e.useProgram(s.program),h(s,m),e.bindTexture(e.TEXTURE_2D,C.texture),e.uniform1i(I.uBehind,0),e.uniformMatrix4fv(I.uModel,!1,T.matrix),e.uniform2f(I.uSize,T.width,T.height),e.uniform1f(I.uBleed,T.bleed),e.uniform4fv(I.uRadii,T.radii),e.uniform1f(I.uSpine,T.spine),e.uniform1f(I.uLens,T.lens),e.uniform1f(I.uMorph,T.morph),e.uniform3fv(I.uInsideTop,T.insideTop),e.uniform3fv(I.uInsideBottom,T.insideBottom),e.uniform1f(I.uTabRatio,T.tabRatio),e.uniform2fv(I.uGutter,T.gutter),e.uniform1f(I.uBevel,T.bevel),e.uniform1f(I.uStrength,T.strength),e.uniform1f(I.uSplit,T.split),e.uniform4fv(I.uTint,T.tint),e.uniform1f(I.uHaze,T.haze),e.uniform1f(I.uDim,T.dim),e.uniform1f(I.uGlint,T.glint),e.uniform1f(I.uShine,T.shine),e.uniform2fv(I.uLight,T.light),e.drawArrays(e.TRIANGLE_STRIP,0,4)},dispose(){u.forEach(m=>e.deleteTexture(m)),u.clear(),l.forEach(m=>{e.deleteTexture(m.texture),e.deleteFramebuffer(m.frame)}),e.deleteBuffer(a),e.deleteVertexArray(r),e.deleteProgram(t.program),e.deleteProgram(n.program),e.deleteProgram(s.program)}}},du=(i,e,t,n,s,r)=>{let a=Math.max(0,Math.min(r,n/2,s/2));i.beginPath(),i.moveTo(e+a,t),i.arcTo(e+n,t,e+n,t+s,a),i.arcTo(e+n,t+s,e,t+s,a),i.arcTo(e,t+s,e,t,a),i.arcTo(e,t,e+n,t,a),i.closePath()},Nf=(i,e)=>{let t=0,n=0,s=i;for(;s&&s!==e;)t+=s.offsetLeft,n+=s.offsetTop,s=s.offsetParent;return s===e?[t,n]:null},Uf=i=>!i||i==="transparent"||/rgba?\([^)]*[,/]\s*0\s*\)$/.test(i),Ff=(i,e,t,n,s,r)=>{let a=Array.from(e.childNodes).filter(_=>_.nodeType===3).map(_=>_.textContent).join("").trim();if(!a)return;let o=parseFloat(r.fontSize)||12,l=parseFloat(r.lineHeight)||o*1.2,c=t+(parseFloat(r.paddingLeft)||0),u=n+(parseFloat(r.paddingTop)||0),h=s-(parseFloat(r.paddingLeft)||0)-(parseFloat(r.paddingRight)||0);i.font=`${r.fontStyle} ${r.fontWeight} ${r.fontSize} ${r.fontFamily}`,i.fillStyle=r.color,i.textBaseline="middle";let d=_=>{if(i.measureText(_).width<=h)return _;let g=_;for(;g.length>1&&i.measureText(`${g}\u2026`).width>h;)g=g.slice(0,-1);return`${g.trimEnd()}\u2026`};if(r.whiteSpace==="nowrap"){i.fillText(d(a),c,u+l/2);return}let f="",m=0;a.split(/\s+/).forEach(_=>{let g=f?`${f} ${_}`:_;f&&i.measureText(g).width>h?(i.fillText(f,c,u+l*(m+.5)),m+=1,f=_):f=g}),f&&i.fillText(f,c,u+l*(m+.5))},fu=(i,e,t)=>{let n=Math.max(1,i.offsetWidth),s=Math.max(1,i.offsetHeight),r=document.createElement("canvas");r.width=Math.max(1,Math.round(n*e)),r.height=Math.max(1,Math.round(s*e));let a=[],o=r.getContext("2d");if(!o)return{canvas:r,pending:a};o.scale(e,e);let l=(c,u,h)=>{let d=getComputedStyle(c);if(d.display==="none"||d.visibility==="hidden")return;let f=c.offsetWidth,m=c.offsetHeight,_=parseFloat(d.borderTopLeftRadius)||0,g=c!==i&&Number.isFinite(parseFloat(d.opacity))?parseFloat(d.opacity):1;if(o.save(),o.globalAlpha*=g,Uf(d.backgroundColor)||(o.fillStyle=d.backgroundColor,du(o,u,h,f,m,_),o.fill()),d.overflow!=="visible"&&(du(o,u,h,f,m,_),o.clip()),c instanceof HTMLImageElement){if(!c.complete||!c.naturalWidth)a.push(c);else if(!t){let p=Math.max(f/c.naturalWidth,m/c.naturalHeight),A=f/p,M=m/p;o.drawImage(c,(c.naturalWidth-A)/2,(c.naturalHeight-M)/2,A,M,u,h,f,m)}}else Ff(o,c,u,h,f,d),Array.from(c.children).forEach(p=>{let A=Nf(p,i);A&&l(p,A[0],A[1])});o.restore()};return l(i,0,0),{canvas:r,pending:a}},Of=(i,e,t,n)=>{let s=document.createElement("canvas");s.width=Math.max(1,Math.round(i.w*n)),s.height=Math.max(1,Math.round((i.tabH+i.h)*n));let r=s.getContext("2d");if(!r)return s;r.scale(n,n);let a=r.createLinearGradient(0,0,0,i.tabH+i.h);return a.addColorStop(0,e),a.addColorStop(1,t),r.fillStyle=a,r.fill(new Path2D(gu(i))),s},ac=({title:i,description:e})=>React.createElement("div",{className:"folder-doc"},i?React.createElement("span",{className:"folder-doc-title"},i):React.createElement("span",{className:"folder-doc-heading"}),e&&React.createElement("span",{className:"folder-doc-text"},e),React.createElement("span",{className:"folder-doc-line",style:{width:"92%"}}),React.createElement("span",{className:"folder-doc-line",style:{width:"84%"}}),React.createElement("span",{className:"folder-doc-line",style:{width:"88%"}}),React.createElement("span",{className:"folder-doc-block"}),React.createElement("span",{className:"folder-doc-line",style:{width:"80%"}}),React.createElement("span",{className:"folder-doc-line",style:{width:"62%"}})),Bf=i=>$r(i)?i:typeof i=="string"||typeof i=="number"?React.createElement(ac,{title:String(i)}):i&&typeof i=="object"?i.image?React.createElement("div",{className:"folder-photo"},React.createElement("img",{src:i.image,alt:i.alt??i.title??"",draggable:!1})):i.content?i.content:React.createElement(ac,{title:i.title,description:i.description}):React.createElement(ac,null),kf=(i,e,t,n,s)=>{let r=s.w/2,a=s.frontTop+s.frontH/2;if(t==="open"){if(n==="row"){let d=10*s.scale,f=Math.min(.8,(s.w*1.86-d*(e-1))/(e*s.docW)),m=s.docW*f+d;return{x:s.w/2+(i-(e-1)/2)*m,y:a,z:0,r:0,ry:0,s:f}}if(n==="stack"){let f=Math.min(26*s.scale,s.h*.36/Math.max(1,e-1)),m=s.frontTop+14*s.scale+(e-1)*f;return{x:s.w,y:m+s.docH*.74/2-i*f,z:0,r:0,ry:0,s:.74}}let c=e>4?.58:e>3?.64:.72,u=e===2?s.w:Math.min(s.w*1.3,s.w*.6*(e-1)),h=e>1?u/2-i*u/(e-1):s.w*.5;return{x:s.w/2+h,y:a+mu[i]*s.h,z:0,r:pu[i],ry:0,s:c}}let l=(t==="rest"?yf:bf)[i]??{x:.06,y:0,r:vf[i]??0};return{x:r+l.x*s.w,y:a+l.y*s.h+i*.8*s.scale,z:0,r:l.r,ry:0,s:1}},zf=(i,e,t,n,s,r)=>{let a=nc[i]??nc[nc.length-1],o=s.tabH+s.h-5*s.scale-s.docH/2,l=(e-1)/2;if(t==="open"){let f=s.tabH-s.h*.02;if(n==="stack"){let A=Math.min(30*s.scale,s.h*.62/Math.max(1,e-1)),M=1.04-i*.05;return{x:s.w/2,y:s.tabH+s.h*.1-i*A-s.docH*(1.04-M)/2,z:-i*18*s.scale,r:0,ry:0,s:M}}let m=12*s.scale,_=Math.min(.94,(s.w*2.3-m*(e-1))/(e*s.docW)),g=s.docW*_+m,p=n==="row";return{x:s.w/2+(i-l)*g,y:f+(p?0:mu[i]*s.h*.7),z:0,r:p?0:pu[i]*.55,ry:0,s:_}}let c=t==="receive"?1.7:t==="peek"?1.3:1,u=s.w/2+a.x*s.w*c;if(t==="rest")return{x:u,y:o-a.rise*s.h,z:0,r:a.r,ry:0,s:1};let h=t==="peek"&&r!=null?Math.max(0,1-Math.abs(r-u)/(s.w*.32)):0,d=a.rise+(t==="receive"?.03:.1);return{x:u,y:o-d*s.h-h*h*s.h*.09,z:0,r:a.r*1.6,ry:0,s:1}},Vf=({items:i,label:e,mode:t="flap",variant:n="solid",color:s="#3d8bff",paperColor:r="#ffffff",tabPosition:a="right",layout:o="spread",size:l=1,openOn:c="click",open:u,defaultOpen:h=!1,onOpenChange:d,onItemClick:f,onItemDrop:m,draggable:_=!0,zoomOnClick:g=!0,peek:p=!0,intro:A=!0,tilt:M=.5,bounce:T=.4,speed:U=1,frost:C=.25,closeOnOutsideClick:I=!0,theme:W="dark",className:E="",style:y,children:R})=>{let $=ct(null),X=ct(null),ne=ct(null),q=ct(null),F=ct(null),be=ct(null),Z=ct(null),Ee=ct([]),Ce=ct(null),He=ct(null),je=ct(null),[rt,at]=Ks(h),[st,ce]=Ks(0),[_e,Fe]=Ks([]),[ge,me]=Ks(!1),se=u!==void 0,ae=se?!!u:rt,Re=t==="book",re=n==="glass",w=Zr(()=>{let z=ru.toArray(R).filter($r);return(z.length?z:i?.length?i:_f).slice(0,xf)},[R,i]),oe=w.length,de=Math.max(.3,Number(l)||1),ee=Cf(Re,de,st,!!e,a),le=ee.tabH+ee.h,ve=Re?{x:-.75*ee.w,y:-.25*le,width:2.5*ee.w,height:1.5*le}:{x:-.25*ee.w,y:-.1*le,width:1.5*ee.w,height:1.3*le};Ef(()=>{let z=Ce.current;if(!z)return;let he=!0,Ne=()=>{he&&ce(z.offsetWidth)};return Ne(),document.fonts?.ready.then(Ne),()=>{he=!1}},[e,de]);let ie=Vn(z=>{let he=typeof z=="function"?z(ae):z;se||at(he),he!==ae&&d?.(he)},[se,ae,d]),Se=ct(ie);Se.current=ie;let b=ou(s),x=ou(r),N=mi(b,[0,0,0],.16),j=ni(mi(b,[0,0,0],.08)),fe=ni(N),Y=ct(null);Y.current={open:ae,layout:o,openOn:c,peek:p,intro:A,draggable:_,zoomOnClick:g,closeOnOutsideClick:I,onItemClick:f,onItemDrop:m,tilt:Et(M,0,1.5),bounce:Et(T,0,1),speed:Et(U,.2,3),frost:Et(C,0,1),count:oe,entries:w,glass:re,light:W==="light",tint:b,insideTop:j,insideBottom:fe,insideTone:[mi(b,[0,0,0],.08).map(z=>z/255),N.map(z=>z/255)],content:`${t}|${de}|${r}|${s}|${ee.tabX}|${ee.tabW}`,depth:Math.round(Math.max(ee.w,ee.h)*5),view:ve,g:ee},Zt(()=>{let z=$.current;if(!z)return;let he=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Ne=k=>({value:k,velocity:0}),L={raf:0,last:0,ready:!1,hovered:!1,pressed:!1,pointerX:0,pointerY:0,deskX:0,deskY:0,hoveredItem:-1,phase:"rest",previous:"rest",changedAt:0,front:Ne(0),rx:Ne(0),ry:Ne(0),lift:Ne(0),squash:Ne(1),items:[],focus:-1,drag:null,receiving:!1,receiveUntil:0,suppressClick:!1,dropCount:0,intro:{phase:"done",start:0,opening:!1},anchor:Ne(0),appear:1,content:{key:"",entries:null,renderer:null}},ze=k=>{for(;L.items.length<k;)L.items.push({x:Ne(0),y:Ne(0),z:Ne(0),r:Ne(0),ry:Ne(0),s:Ne(1),hover:Ne(0),mx:Ne(0),my:Ne(0),alpha:Ne(1),place:"inside",rank:0,layer:"inside",elevated:!1,insertUntil:0,insertFrom:null,outX:0,outY:0,outR:0,outS:1,outOrder:0,localX:0,localY:0,fresh:!0});L.items.length>k&&(L.items.length=k,L.focus>=k&&(L.focus=-1),Ze())},Ze=()=>{let k=[];L.items.forEach((K,xe)=>{K.place==="out"&&k.push(xe)}),Fe(K=>K.length===k.length&&K.every((xe,v)=>xe===k[v])?K:k)},P=(k,K,xe,v,D)=>{let V=xe*xe,G=2*v*xe,S=Math.max(1,Math.ceil(D/gf)),J=D/S;for(let te=0;te<S;te++)k.velocity+=(V*(K-k.value)-G*k.velocity)*J,k.value+=k.velocity*J;return Math.abs(K-k.value)>.01||Math.abs(k.velocity)>.01},Le=(k,K)=>{k.value=K,k.velocity=0},Ae=()=>{let{g:k}=Y.current;return k.book?k.w/2*Et(-L.front.value/180,0,1):0},Te=(k,K)=>{let xe=z.getBoundingClientRect(),v=z.offsetWidth/(xe.width||1),D=z.offsetHeight/(xe.height||1);return[(k-xe.left)*v,(K-xe.top)*D]},we=()=>{let k=z.getBoundingClientRect(),K=0,xe=0,v=window.innerWidth,D=window.innerHeight;for(let S=z.parentElement;S&&S!==document.body;S=S.parentElement){let J=getComputedStyle(S);if(/(hidden|clip|auto|scroll)/.test(`${J.overflowX} ${J.overflowY}`)){let te=S.getBoundingClientRect();K=Math.max(K,te.left),xe=Math.max(xe,te.top),v=Math.min(v,te.right),D=Math.min(D,te.bottom);break}}let V=z.offsetWidth/(k.width||1),G=z.offsetHeight/(k.height||1);return{left:(K-k.left)*V,top:(xe-k.top)*G,right:(v-k.left)*V,bottom:(D-k.top)*G}},pe=(k,K)=>{let{g:xe}=Y.current,v=Ae();if(xe.book){let D=L.front.value<-90?v-xe.w:v;return k>=D&&k<=v+xe.w&&K>=xe.tabH*.5&&K<=xe.tabH+xe.h}return k>=0&&k<=xe.w&&K>=0&&K<=xe.tabH+xe.h},Ye=k=>{let{g:K}=Y.current,xe=K.docW*k.s.value/2,v=K.docH*k.s.value/2;if(K.book){if(L.front.value<-60)return!1;let D=Ae();return k.x.value-xe<D+K.w&&k.x.value+xe>D&&k.y.value+v>K.tabH&&k.y.value-v<K.tabH+K.h}return L.front.value<-45?!1:k.y.value+v>K.frontTop+4*K.scale&&k.x.value+xe>0&&k.x.value-xe<K.w},Qe=k=>{if(k.length<2)return[0,0];let K=k[0],xe=k[k.length-1],v=Math.max(.016,(xe[0]-K[0])/1e3);return[(xe[1]-K[1])/v,(xe[2]-K[2])/v]},xt=(k,K)=>k.open?"open":L.receiving||K<L.receiveUntil?"receive":k.peek&&L.hovered&&!L.drag?.active?"peek":"rest",dt=(k,K,xe,v)=>{if(v.g.book)return kf(k,K,xe,v.layout,v.g);let D=L.hovered?(L.pointerX+1)/2*v.g.w:null;return zf(k,K,xe,v.layout,v.g,D)},Lt=(k,K,xe)=>{let{g:v}=xe;return k.insertFrom==="side"?{...K,x:Math.max(K.x,v.w+v.docW*.54*K.s)}:{...K,y:Math.min(K.y,v.frontTop-v.docH*.5*K.s-8*v.scale)}},Ct=k=>{L.raf=0;let K=Y.current,{g:xe}=K;ze(K.count);let v=k/1e3,D=L.last?Math.min(.05,(k-L.last)/1e3):1/60;L.last=k;let V=he?1:1-.72*K.bounce,G=rs*(xe.book?1.55:2)*K.speed,S=rs*2.1*K.speed,J=rs*1.6*K.speed,te=xt(K,v);te!==L.phase&&(L.previous=L.phase,L.phase=te,L.changedAt=k);let ye=(k-L.changedAt)/1e3,ue=v<L.receiveUntil,Ge=[];L.items.forEach((qe,yt)=>{qe.place==="inside"&&Ge.push(yt)});let ke=Ge.length;Ge.forEach((qe,yt)=>{L.items[qe].rank=yt}),L.focus>=0&&te!=="open"&&L.items[L.focus]?.place==="inside"&&(L.focus=-1);let O=L.intro;L.ready||(O.opening=K.open),O.phase==="run"&&!O.opening&&(K.open||L.drag?.active)&&(O.phase="done");let Q=O.phase==="run"?v-O.start:0,H=O.phase!=="done"&&!O.opening,De=(.16+ke*.085+.3)/K.speed,Ve=H&&Q<De,Ie=qe=>(.16+(ke-1-qe)*.085)/K.speed,Me=(qe,yt)=>xe.book?{...yt,r:yt.r+(qe.rank%2?7:-6),s:yt.s*1.12}:{...yt,y:yt.y-(xe.h*.8+xe.docH*.5),r:yt.r+(qe.rank%2?9:-7)};O.phase==="run"&&(ue=!0,Q>(O.opening?1.4:De+1)/K.speed&&(O.phase="done"));let et=O.phase==="wait"?0:O.phase==="run"?Et(Q/(.34/K.speed),0,1):1;L.appear=1-(1-et)**3;let Ke=L.previous==="open"&&te!=="open"&&!he?((xe.book?.1:.06)+.035*ke)/K.speed:0,Je=ye<Ke?L.previous:te,tt=Ve?xe.book?-150:-42:(xe.book?Sf:wf)[Je];if(!L.ready){L.ready=!0;let qe=O.phase!=="done"&&O.opening;qe&&(L.phase="rest",L.previous="rest"),Le(L.front,qe?0:tt),Le(L.anchor,H?1:0),L.items.forEach(yt=>{let wt=dt(yt.rank,ke,qe?"rest":te,K),ln=H?Me(yt,wt):wt;Le(yt.x,ln.x),Le(yt.y,ln.y),Le(yt.z,ln.z),Le(yt.r,ln.r),Le(yt.ry,ln.ry),Le(yt.s,ln.s),Le(yt.alpha,H?0:1),Le(yt.hover,H&&xe.book?3:0),yt.fresh=!1})}if(O.phase==="wait"){en(),L.last=0;return}ue=P(L.front,tt,G,V,D)||ue;let ft=.2+.35*K.bounce;xe.book&&L.front.value<-180?(L.front.value=-360-L.front.value,L.front.velocity=-L.front.velocity*ft):L.front.value>0&&(L.front.value=-L.front.value,L.front.velocity=-L.front.velocity*ft),ye<Ke&&(ue=!0),ue=P(L.anchor,H?1:0,G,1,D)||ue;let nt=L.hovered&&!he;ue=P(L.rx,nt?-L.pointerY*8*K.tilt:0,J,1,D)||ue,ue=P(L.ry,nt?L.pointerX*10*K.tilt:0,J,1,D)||ue,ue=P(L.lift,L.hovered&&te!=="open"?1:0,J,1,D)||ue,ue=P(L.squash,L.pressed?.975:1,rs*3.2,.6,D)||ue;let vt=te==="open"&&L.previous!=="open",it=L.drag?.active?L.drag:null,_t=L.hoveredItem,Tt=!it&&_t>=0&&L.items[_t]?L.items[_t]:null,cn=Tt&&Tt.place==="inside"&&te==="open"?dt(Tt.rank,ke,"open",K):null,tn=Et((xe.tabH+xe.h)*1.18/xe.docH,1.2,2.2),ut=xe.book?xe.tabH+xe.h/2:xe.tabH+xe.h*.36;L.items.forEach((qe,yt)=>{if(qe.fresh){let Pn=dt(qe.rank,ke,"rest",K);Le(qe.x,Pn.x),Le(qe.y,Pn.y),Le(qe.r,Pn.r),qe.fresh=!1}let wt,ln=S,In=V,ti=0,iu=1,Xr=!1;if(L.focus===yt)wt={x:xe.w/2,y:ut,z:0,r:0,ry:0,s:tn},ti=2.4,qe.layer="focus";else if(it&&it.index===yt){let[Pn]=Qe(it.samples);wt={x:L.deskX+it.grabX,y:L.deskY+it.grabY,z:0,r:Et(Pn*.012,-14,14),ry:0,s:it.scale*1.05},ln=rs*5,In=.78,ti=1.4,!qe.elevated&&!Ye(qe)&&(qe.elevated=!0),qe.layer=qe.elevated?"drag":"inside"}else if(qe.place==="out")wt={x:qe.outX,y:qe.outY,z:0,r:qe.outR,ry:0,s:qe.outS},ti=_t===yt?1:.15,Xr=_t===yt,qe.layer="out";else{let Pn=vt&&xe.book?ke-1-qe.rank:qe.rank,qr=he?0:vt?((xe.book?.16:.05)+Pn*(xe.book?.055:.045))/K.speed:Pn*.03/K.speed,ss=ye>=qr?te:L.previous;if(wt=dt(qe.rank,ke,ss,K),ye<qr&&(ue=!0),H&&Q<Ie(qe.rank))wt=Me(qe,wt),iu=0,ti=xe.book?3:0,qe.layer="inside";else if(qe.insertUntil>v)ue=!0,wt=Lt(qe,wt,K),qe.layer="drag",ti=.6;else if(qe.insertUntil=0,qe.elevated=!1,qe.layer="inside",cn&&ss==="open")if(_t===yt)wt={...wt,y:wt.y-6*xe.scale,r:wt.r*.2,ry:0,s:wt.s*1.05},ti=1,Xr=!0;else{let su=wt.x-cn.x;wt={...wt,x:wt.x+Math.sign(su)*12*xe.scale*Math.max(0,1-Math.abs(su)/(xe.w*1.1))},ti=.2}else ss==="open"&&(ti=.2)}if(ue=P(qe.x,wt.x,ln,In,D)||ue,ue=P(qe.y,wt.y,ln,In,D)||ue,!xe.book&&qe.layer==="inside"){let Pn=qe.r.value*Math.PI/180,qr=(xe.docW*Math.abs(Math.sin(Pn))+xe.docH*Math.abs(Math.cos(Pn)))*qe.s.value/2,ss=xe.tabH+xe.h-2*xe.scale-qr;qe.y.value>ss&&(qe.y.value=ss,qe.y.velocity>0&&(qe.y.velocity*=-.25))}ue=P(qe.z,wt.z,S,V,D)||ue,ue=P(qe.r,wt.r,ln,In,D)||ue,ue=P(qe.ry,wt.ry,S,V,D)||ue,ue=P(qe.s,wt.s,S,V,D)||ue,ue=P(qe.hover,ti,S,V,D)||ue,ue=P(qe.alpha,iu,rs*3*K.speed,1,D)||ue,ue=P(qe.mx,Xr?qe.localX*7*xe.scale:0,J,.85,D)||ue,ue=P(qe.my,Xr?qe.localY*7*xe.scale:0,J,.85,D)||ue}),en(),ue||it?L.raf=requestAnimationFrame(Ct):L.last=0},Ni=(k,K)=>{if(L.content.key===K.content&&L.content.entries===K.entries&&L.content.renderer===k)return;L.content={key:K.content,entries:K.entries,renderer:k};let xe=Math.min(window.devicePixelRatio||1,2),v=new Set(["back"]);k.upload("back",Of(K.g,K.insideTop,K.insideBottom,xe)),Ee.current.slice(0,K.count).forEach((D,V)=>{if(!D)return;let G=`item-${V}`;v.add(G);let S=fu(D,xe,!1);try{k.upload(G,S.canvas)}catch{S=fu(D,xe,!0),k.upload(G,S.canvas)}S.pending.forEach(J=>J.addEventListener("load",Mn,{once:!0}))}),k.prune(v)},en=()=>{let k=Y.current,{w:K,h:xe,tabH:v,frontTop:D,frontH:V,docW:G,docH:S,scale:J,book:te}=k.g,ye=K/2,ue=v+xe/2,Ge=L.front.value,ke=Ge*Math.PI/180,O=te?Et(-Ge/180,0,1):0,Q=K/2*O*(1-L.anchor.value),H=(1+L.lift.value*.012)*L.squash.value*(.94+.06*L.appear);z.style.opacity=L.appear<.999?L.appear.toFixed(3):"";let De=as(Ln(ye,ue),cu(L.rx.value),sc(L.ry.value),Kr(H,H),Ln(-ye,-ue)),Ve=oc(De,Ln(Q,0)),Ie=te&&Ge<-90,Me=Ie?"3":"40";X.current&&(X.current.style.transform=os(Ve),X.current.style.setProperty("--folder-gutter",O.toFixed(3)),X.current.style.setProperty("--folder-label",(te?1:1-Et((-Ge-18)/26,0,1)).toFixed(3)));let et=te?as(Ve,Ln(0,D,2*J*(1-O)),sc(Ge)):as(Ve,Ln(0,v+xe,2*J),cu(Ge),Ln(0,-V)),$e=te?Math.sin(ke)*-.42+Math.cos(ke)*.9:Math.sin(ke)*.5+Math.cos(ke)*.86,Ke=(Ie?-$e:$e)/(te?.9:.86),Je=Et((Ke-1)*.9,0,.18),tt=Et((1-Ke)*(te?.5:.22),0,.5),ft=ne.current;ft&&(ft.style.transform=os(et),ft.style.zIndex=Me,ft.dataset.face=Ie?"inner":"outer",ft.style.setProperty("--folder-glint",Je.toFixed(3)),ft.style.setProperty("--folder-dim",tt.toFixed(3)));let nt=te?Math.max(0,Math.sin(-ke)):0;if(q.current&&(q.current.style.transform=os(oc(Ve,Ln(0,te?v:v+xe))),q.current.style.opacity=(.75+L.lift.value*.25).toFixed(3)),F.current&&(F.current.style.transform=os(as(Ve,Ln(K*nt*.12,D+xe*nt*.04),Kr(Math.cos(ke),1))),F.current.style.opacity=(Ie?1-nt*.7:0).toFixed(3)),be.current){let ut=K*Math.cos(ke)+K*nt*.36;be.current.style.transform=os(as(Ve,Ln(0,D+xe*nt*.03),Kr(ut/K,1))),be.current.style.zIndex=ut>0?"39":"2",be.current.style.opacity=(Et(nt*4,0,1)*(1-nt*.45)).toFixed(3)}let vt=L.items.map((ut,qe)=>[ut,qe]).filter(([ut])=>ut.layer==="out").sort((ut,qe)=>ut[0].outOrder-qe[0].outOrder).map(([,ut])=>ut),it=[];L.items.forEach((ut,qe)=>{let yt=Ee.current[qe],wt=3*J+ut.z.value+ut.hover.value*26*J,ln=as(De,Ln(ut.x.value+ut.mx.value,ut.y.value+ut.my.value,wt),sc(ut.ry.value),Af(ut.r.value),Kr(ut.s.value,ut.s.value),Ln(-G/2,-S/2)),In=10+k.count-ut.rank;ut.layer==="inside"&&L.phase==="open"&&L.hoveredItem===qe&&(In=30),ut.layer==="out"&&(In=ic.out+vt.indexOf(qe)),ut.layer==="drag"&&(In=ic.drag),ut.layer==="focus"&&(In=ic.focus),it.push({index:qe,matrix:ln,layer:In,alpha:Et(ut.alpha.value,0,1),inside:ut.layer==="inside"}),yt&&(yt.style.transform=os(ln),yt.style.zIndex=String(In),yt.style.setProperty("--folder-lift",Et(ut.hover.value,0,2.4).toFixed(3)),yt.style.opacity=ut.alpha.value<.995?Math.max(0,ut.alpha.value).toFixed(3):"")});let _t=Z.current,Tt=je.current;if(!_t||!Tt||!k.glass)return;_t.style.zIndex=Me,Ni(Tt,k);let cn=[];Ie||(cn.push({key:"back",matrix:Ve,width:K,height:v+xe,alpha:1}),it.filter(ut=>ut.inside).sort((ut,qe)=>ut.layer-qe.layer).forEach(ut=>cn.push({key:`item-${ut.index}`,matrix:ut.matrix,width:G,height:S,alpha:ut.alpha})));let tn=Math.min(window.devicePixelRatio||1,2);Tt.render({dpr:tn,depth:k.depth,origin:[ye,ue],view:k.view,layers:cn,glass:{matrix:et,width:K,height:V,radii:te?[0,k.g.r,k.g.r,0]:[k.g.r,k.g.r,k.g.r,k.g.r],spine:te?K*2:0,bleed:Ie?2:0,morph:te?Et((O-.55)/.45,0,1)**2:0,insideTop:k.insideTone[0],insideBottom:k.insideTone[1],tabRatio:v/(v+xe),gutter:[12*J,te?.12*O:0],bevel:12*J,strength:14*J,split:.26,lens:.02,frost:k.frost*6*J,tint:[k.tint[0]/255,k.tint[1]/255,k.tint[2]/255,k.light?.1:.14],haze:.04+k.frost*.1,dim:tt*.8,glint:Je,shine:k.light?.72:.85,light:Ie?[.55,-.83]:[-.55,-.83]}})},Ot=()=>{L.raf||(L.raf=requestAnimationFrame(Ct))},$t=()=>{L.intro.phase==="wait"&&(L.intro.phase="run",L.intro.start=performance.now()/1e3,Ot())},Mn=()=>{L.content.key="",Ot()},jn=()=>{let k=L.drag,K=k?L.items[k.index]:null;L.receiving=!!(k?.active&&K&&(K.place==="out"||K.elevated)&&pe(L.deskX,L.deskY))},Gt=k=>{let K=L.items[k.index];K&&(k.active=!0,k.grabX=K.x.value-k.downX,k.grabY=K.y.value-k.downY,k.scale=K.place==="out"?K.outS:K.s.value,k.clip=we(),L.suppressClick=!0,L.focus===k.index&&(L.focus=-1),K.elevated=K.place==="out"||!Ye(K),z.dataset.dragging="")},Sn=(k,K)=>{let xe=Y.current,v=L.items[k.index];if(L.receiving=!1,delete z.dataset.dragging,!v)return;let D=performance.now()/1e3,[V,G]=K?[0,0]:Qe(k.samples);if(pe(L.deskX,L.deskY)){let Q=v.place==="out"||v.elevated;v.place="inside",Q&&!he&&(v.insertUntil=D+.24/xe.speed,v.insertFrom=xe.g.book?L.front.value<-90?null:"side":"top",v.insertFrom||(v.insertUntil=0),L.receiveUntil=v.insertUntil?v.insertUntil+.14/xe.speed:0),v.elevated=!1,Ze(),xe.onItemDrop?.(xe.entries[k.index],k.index,!0);return}let S=k.clip??we(),J=xe.g.docW*k.scale/2,te=xe.g.docH*k.scale/2,ye=L.deskX+k.grabX+Et(V,-2400,2400)*.09,ue=L.deskY+k.grabY+Et(G,-2400,2400)*.09;v.place="out",v.elevated=!0;let Ge=8*xe.g.scale,ke=J*1.08+Ge,O=te*1.08+Ge;v.outX=Et(ye,S.left+ke,Math.max(S.left+ke,S.right-ke)),v.outY=Et(ue,S.top+O,Math.max(S.top+O,S.bottom-O)),v.outR=Et(v.r.value*.5+Et(V,-2400,2400)*.003+Mf[k.index%6]*.6,-12,12),v.outS=k.scale,L.dropCount+=1,v.outOrder=L.dropCount,Ze(),xe.onItemDrop?.(xe.entries[k.index],k.index,!1)},zn=k=>{let K=L.drag;if(K&&k.pointerId===K.id){let[V,G]=Te(k.clientX,k.clientY);L.deskX=V,L.deskY=G;let S=performance.now();for(K.samples.push([S,V,G]);K.samples.length>2&&S-K.samples[0][0]>100;)K.samples.shift();if(!K.active){let J=k.pointerType==="touch"?8:4;Math.hypot(k.clientX-K.clientX,k.clientY-K.clientY)>J&&Gt(K)}K.active&&jn(),Ot()}if(k.pointerType==="touch")return;let xe=z.getBoundingClientRect();L.pointerX=Et((k.clientX-xe.left)/xe.width*2-1,-1.5,1.5),L.pointerY=Et((k.clientY-xe.top)/xe.height*2-1,-1.5,1.5);let v=k.target.closest?.("[data-folder-item]"),D=v&&z.contains(v)?Number(v.getAttribute("data-folder-item")):-1;if(L.hoveredItem=D,v&&D>=0&&!L.drag?.active){let V=v.getBoundingClientRect(),G=L.items[D];G&&(G.localX=Et((k.clientX-V.left)/V.width*2-1,-1,1),G.localY=Et((k.clientY-V.top)/V.height*2-1,-1,1))}L.hovered||(L.hovered=!0,Y.current.openOn==="hover"&&Se.current(!0)),Ot()},pn=k=>{k.pointerType==="touch"||L.drag?.active||(L.hovered=!1,L.pressed=!1,L.hoveredItem=-1,Y.current.openOn==="hover"&&Se.current(!1),Ot())},Cn=k=>{if(k.button>0)return;L.suppressClick=!1;let K=k.target.closest?.("[data-folder-item]");if(K&&z.contains(K)&&Y.current.draggable){let[xe,v]=Te(k.clientX,k.clientY);L.deskX=xe,L.deskY=v,L.drag={index:Number(K.getAttribute("data-folder-item")),id:k.pointerId,clientX:k.clientX,clientY:k.clientY,downX:xe,downY:v,grabX:0,grabY:0,scale:1,clip:null,active:!1,samples:[[performance.now(),xe,v]]};try{K.setPointerCapture(k.pointerId)}catch{L.drag.id=k.pointerId}}else L.pressed=!0;Ot()},mn=k=>{L.pressed=!1;let K=L.drag;K&&k.pointerId===K.id&&(L.drag=null,K.active&&Sn(K,k.type==="pointercancel")),Ot()},Qn=k=>{if(z.contains(k.target))return;let K=Y.current;L.focus>=0&&(L.focus=-1,Ot()),K.open&&K.closeOnOutsideClick&&Se.current(!1)},ei=k=>{if(k.key!=="Escape")return;if(L.focus>=0){L.focus=-1,Ot();return}let K=Y.current;K.open&&K.closeOnOutsideClick&&Se.current(!1)};z.addEventListener("pointermove",zn),z.addEventListener("pointerleave",pn),z.addEventListener("pointerdown",Cn),window.addEventListener("pointerup",mn),window.addEventListener("pointercancel",mn),document.addEventListener("pointerdown",Qn),document.addEventListener("keydown",ei),document.fonts?.ready.then(Mn);let Rn=null;return Y.current.intro&&!he&&(L.intro.phase="wait",z.style.opacity="0",typeof IntersectionObserver>"u"?$t():(Rn=new IntersectionObserver(k=>{k.some(K=>K.isIntersecting)&&(Rn?.disconnect(),$t())},{threshold:.2}),Rn.observe(z))),He.current={wake:Ot,invalidate:Mn,consumeClick:()=>L.suppressClick?(L.suppressClick=!1,!0):!1,interactive:k=>Y.current.open||L.items[k]?.place==="out"||L.focus===k,select:k=>{let K=Y.current;K.zoomOnClick&&(L.focus=L.focus===k?-1:k),K.onItemClick?.(K.entries[k],k),Ot()},blur:()=>L.focus<0?!1:(L.focus=-1,Ot(),!0)},Ot(),()=>{cancelAnimationFrame(L.raf),z.removeEventListener("pointermove",zn),z.removeEventListener("pointerleave",pn),z.removeEventListener("pointerdown",Cn),window.removeEventListener("pointerup",mn),window.removeEventListener("pointercancel",mn),document.removeEventListener("pointerdown",Qn),document.removeEventListener("keydown",ei),Rn?.disconnect(),He.current=null}},[]),Zt(()=>{if(!re)return;let z=Z.current;if(!z)return;let he=Df(z);if(!he)return;je.current=he,me(!0);let Ne=L=>{L.preventDefault(),je.current=null,me(!1)};return z.addEventListener("webglcontextlost",Ne),He.current?.invalidate(),()=>{z.removeEventListener("webglcontextlost",Ne),he.dispose(),je.current===he&&(je.current=null),me(!1)}},[re]),Zt(()=>{He.current?.wake()});let We=()=>{He.current?.blur()||c!=="hover"&&ie(!ae)},Pe=(z,he)=>{let Ne=He.current;if(Ne){if(Ne.consumeClick()){z.stopPropagation();return}Ne.interactive(he)&&(z.stopPropagation(),Ne.select(he))}},Oe={"--folder-rgb":b.join(", "),"--folder-base":ni(b),"--folder-front-top":ni(mi(b,[255,255,255],.12)),"--folder-front-bottom":ni(mi(b,[0,0,0],.06)),"--folder-inside-top":j,"--folder-inside-bottom":fe,"--folder-tab-ink":Tf(N)>.6?"rgba(0, 0, 0, 0.72)":"rgba(255, 255, 255, 0.92)","--folder-paper":ni(x),"--folder-paper-ink":ni(mi(x,[0,0,0],.11)),"--folder-paper-ink-strong":ni(mi(x,[0,0,0],.28)),"--folder-paper-text":ni(mi(x,[0,0,0],.72)),"--folder-w":`${ee.w}px`,"--folder-h":`${ee.h}px`,"--folder-tab-h":`${ee.tabH}px`,"--folder-front-y":`${ee.frontTop}px`,"--folder-front-h":`${ee.frontH}px`,"--folder-r":`${ee.r}px`,"--folder-front-radius":Re?`0 ${ee.r}px ${ee.r}px 0`:`${ee.r}px`,"--folder-doc-w":`${ee.docW}px`,"--folder-doc-h":`${ee.docH}px`,"--folder-frost":`${(1.5+Et(C,0,1)*10)*de}px`,"--folder-depth":`${Y.current.depth}px`,"--folder-scale":de,...y},Be=gu(ee);return React.createElement("div",{ref:$,className:`folder-root${E?` ${E}`:""}`,"data-mode":Re?"book":"flap","data-variant":n,"data-theme":W==="light"?"light":"dark","data-open":ae?"":void 0,"data-gl":re&&ge?"":void 0,"data-draggable":_?"":void 0,style:Oe},React.createElement("div",{className:"folder-stage",role:"button",tabIndex:0,"aria-expanded":ae,"aria-label":e?`${e} folder`:"Folder",onClick:We,onKeyDown:z=>{z.target===z.currentTarget&&(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),We())}},React.createElement("span",{ref:q,className:"folder-layer folder-ground","aria-hidden":"true"}),Re&&React.createElement("span",{ref:F,className:"folder-layer folder-cast","aria-hidden":"true"}),React.createElement("div",{ref:X,className:"folder-layer folder-back","aria-hidden":"true"},React.createElement("div",{className:"folder-back-fill",style:{clipPath:`path('${Be}')`}},Re&&React.createElement("span",{className:"folder-gutter"})),React.createElement("svg",{className:"folder-back-rim",width:ee.w,height:le,viewBox:`0 0 ${ee.w} ${le}`},React.createElement("path",{className:"folder-focus",d:Be})),e&&React.createElement("span",{className:"folder-tab-text",style:{left:ee.tabX,width:ee.tabW}},e)),w.map((z,he)=>{let Ne=ae||_e.includes(he);return React.createElement("div",{key:$r(z)&&z.key!=null?z.key:he,ref:L=>{Ee.current[he]=L},className:"folder-layer folder-item","data-folder-item":he,role:Ne?"button":void 0,"aria-label":Ne&&z?.title?z.title:void 0,tabIndex:Ne?0:-1,onClick:L=>Pe(L,he),onKeyDown:L=>{!Ne||L.key!=="Enter"&&L.key!==" "||(L.preventDefault(),L.stopPropagation(),He.current?.select(he))}},Bf(z))}),Re&&React.createElement("span",{ref:be,className:"folder-layer folder-shade","aria-hidden":"true"}),React.createElement("div",{ref:ne,className:"folder-layer folder-front","data-face":"outer","aria-hidden":"true"},React.createElement("div",{className:"folder-face folder-face-outer"}),Re&&React.createElement("div",{className:"folder-face folder-face-inner"},React.createElement("span",{className:"folder-inner-gutter"}))),re&&React.createElement("canvas",{ref:Z,className:"folder-glass","aria-hidden":"true",style:{left:ve.x,top:ve.y,width:ve.width,height:ve.height}})),e&&React.createElement("span",{ref:Ce,className:"folder-tab-text folder-measure","aria-hidden":"true"},e))},xu=Vf;function Hf(i,e,t){return Math.max(e,Math.min(i,t))}var At={toVector(i,e){return i===void 0&&(i=e),Array.isArray(i)?i:[i,i]},add(i,e){return[i[0]+e[0],i[1]+e[1]]},sub(i,e){return[i[0]-e[0],i[1]-e[1]]},addTo(i,e){i[0]+=e[0],i[1]+=e[1]},subTo(i,e){i[0]-=e[0],i[1]-=e[1]}};function _u(i,e,t){return e===0||Math.abs(e)===1/0?Math.pow(i,t*5):i*e*t/(e+t*i)}function vu(i,e,t,n=.15){return n===0?Hf(i,e,t):i<e?-_u(e-i,t-e,n)+e:i>t?+_u(i-t,t-e,n)+t:i}function yu(i,[e,t],[n,s]){let[[r,a],[o,l]]=i;return[vu(e,r,a,n),vu(t,o,l,s)]}function Gf(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Wf(i){var e=Gf(i,"string");return typeof e=="symbol"?e:String(e)}function Ft(i,e,t){return e=Wf(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function bu(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(i,s).enumerable})),t.push.apply(t,n)}return t}function Pt(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?bu(Object(t),!0).forEach(function(n){Ft(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):bu(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}var Iu={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function Mu(i){return i?i[0].toUpperCase()+i.slice(1):""}var Xf=["enter","leave"];function qf(i=!1,e){return i&&!Xf.includes(e)}function Pu(i,e="",t=!1){let n=Iu[i],s=n&&n[e]||e;return"on"+Mu(i)+Mu(s)+(qf(t,s)?"Capture":"")}var Yf=["gotpointercapture","lostpointercapture"];function Lu(i){let e=i.substring(2).toLowerCase(),t=!!~e.indexOf("passive");t&&(e=e.replace("passive",""));let n=Yf.includes(e)?"capturecapture":"capture",s=!!~e.indexOf(n);return s&&(e=e.replace("capture","")),{device:e,capture:s,passive:t}}function Du(i,e=""){let t=Iu[i],n=t&&t[e]||e;return i+n}function Js(i){return"touches"in i}function Nu(i){return Js(i)?"touch":"pointerType"in i?i.pointerType:"mouse"}function $f(i){return Array.from(i.touches).filter(e=>{var t,n;return e.target===i.currentTarget||((t=i.currentTarget)===null||t===void 0||(n=t.contains)===null||n===void 0?void 0:n.call(t,e.target))})}function Zf(i){return i.type==="touchend"||i.type==="touchcancel"?i.changedTouches:i.targetTouches}function Uu(i){return Js(i)?Zf(i)[0]:i}function lc(i,e){try{let t=e.clientX-i.clientX,n=e.clientY-i.clientY,s=(e.clientX+i.clientX)/2,r=(e.clientY+i.clientY)/2,a=Math.hypot(t,n);return{angle:-(Math.atan2(t,n)*180)/Math.PI,distance:a,origin:[s,r]}}catch{}return null}function Fu(i){return $f(i).map(e=>e.identifier)}function Su(i,e){let[t,n]=Array.from(i.touches).filter(s=>e.includes(s.identifier));return lc(t,n)}function cc(i){let e=Uu(i);return Js(i)?e.identifier:e.pointerId}function cs(i){let e=Uu(i);return[e.clientX,e.clientY]}var wu=40,Eu=800;function Ou(i){let{deltaX:e,deltaY:t,deltaMode:n}=i;return n===1?(e*=wu,t*=wu):n===2&&(e*=Eu,t*=Eu),[e,t]}function Kf(i){var e,t;let{scrollX:n,scrollY:s,scrollLeft:r,scrollTop:a}=i.currentTarget;return[(e=n??r)!==null&&e!==void 0?e:0,(t=s??a)!==null&&t!==void 0?t:0]}function Jf(i){let e={};if("buttons"in i&&(e.buttons=i.buttons),"shiftKey"in i){let{shiftKey:t,altKey:n,metaKey:s,ctrlKey:r}=i;Object.assign(e,{shiftKey:t,altKey:n,metaKey:s,ctrlKey:r})}return e}function Jr(i,...e){return typeof i=="function"?i(...e):i}function jf(){}function Bu(...i){return i.length===0?jf:i.length===1?i[0]:function(){let e;for(let t of i)e=t.apply(this,arguments)||e;return e}}function Tu(i,e){return Object.assign({},e,i||{})}var Qf=32,jr=class{constructor(e,t,n){this.ctrl=e,this.args=t,this.key=n,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(e){this.ctrl.state[this.key]=e}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){let{state:e,shared:t,ingKey:n,args:s}=this;t[n]=e._active=e.active=e._blocked=e._force=!1,e._step=[!1,!1],e.intentional=!1,e._movement=[0,0],e._distance=[0,0],e._direction=[0,0],e._delta=[0,0],e._bounds=[[-1/0,1/0],[-1/0,1/0]],e.args=s,e.axis=void 0,e.memo=void 0,e.elapsedTime=e.timeDelta=0,e.direction=[0,0],e.distance=[0,0],e.overflow=[0,0],e._movementBound=[!1,!1],e.velocity=[0,0],e.movement=[0,0],e.delta=[0,0],e.timeStamp=0}start(e){let t=this.state,n=this.config;t._active||(this.reset(),this.computeInitial(),t._active=!0,t.target=e.target,t.currentTarget=e.currentTarget,t.lastOffset=n.from?Jr(n.from,t):t.offset,t.offset=t.lastOffset,t.startTime=t.timeStamp=e.timeStamp)}computeValues(e){let t=this.state;t._values=e,t.values=this.config.transform(e)}computeInitial(){let e=this.state;e._initial=e._values,e.initial=e.values}compute(e){let{state:t,config:n,shared:s}=this;t.args=this.args;let r=0;if(e&&(t.event=e,n.preventDefault&&e.cancelable&&t.event.preventDefault(),t.type=e.type,s.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,s.locked=!!document.pointerLockElement,Object.assign(s,Jf(e)),s.down=s.pressed=s.buttons%2===1||s.touches>0,r=e.timeStamp-t.timeStamp,t.timeStamp=e.timeStamp,t.elapsedTime=t.timeStamp-t.startTime),t._active){let C=t._delta.map(Math.abs);At.addTo(t._distance,C)}this.axisIntent&&this.axisIntent(e);let[a,o]=t._movement,[l,c]=n.threshold,{_step:u,values:h}=t;if(n.hasCustomTransform?(u[0]===!1&&(u[0]=Math.abs(a)>=l&&h[0]),u[1]===!1&&(u[1]=Math.abs(o)>=c&&h[1])):(u[0]===!1&&(u[0]=Math.abs(a)>=l&&Math.sign(a)*l),u[1]===!1&&(u[1]=Math.abs(o)>=c&&Math.sign(o)*c)),t.intentional=u[0]!==!1||u[1]!==!1,!t.intentional)return;let d=[0,0];if(n.hasCustomTransform){let[C,I]=h;d[0]=u[0]!==!1?C-u[0]:0,d[1]=u[1]!==!1?I-u[1]:0}else d[0]=u[0]!==!1?a-u[0]:0,d[1]=u[1]!==!1?o-u[1]:0;this.restrictToAxis&&!t._blocked&&this.restrictToAxis(d);let f=t.offset,m=t._active&&!t._blocked||t.active;m&&(t.first=t._active&&!t.active,t.last=!t._active&&t.active,t.active=s[this.ingKey]=t._active,e&&(t.first&&("bounds"in n&&(t._bounds=Jr(n.bounds,t)),this.setup&&this.setup()),t.movement=d,this.computeOffset()));let[_,g]=t.offset,[[p,A],[M,T]]=t._bounds;t.overflow=[_<p?-1:_>A?1:0,g<M?-1:g>T?1:0],t._movementBound[0]=t.overflow[0]?t._movementBound[0]===!1?t._movement[0]:t._movementBound[0]:!1,t._movementBound[1]=t.overflow[1]?t._movementBound[1]===!1?t._movement[1]:t._movementBound[1]:!1;let U=t._active?n.rubberband||[0,0]:[0,0];if(t.offset=yu(t._bounds,t.offset,U),t.delta=At.sub(t.offset,f),this.computeMovement(),m&&(!t.last||r>Qf)){t.delta=At.sub(t.offset,f);let C=t.delta.map(Math.abs);At.addTo(t.distance,C),t.direction=t.delta.map(Math.sign),t._direction=t._delta.map(Math.sign),!t.first&&r>0&&(t.velocity=[C[0]/r,C[1]/r],t.timeDelta=r)}}emit(){let e=this.state,t=this.shared,n=this.config;if(e._active||this.clean(),(e._blocked||!e.intentional)&&!e._force&&!n.triggerAllEvents)return;let s=this.handler(Pt(Pt(Pt({},t),e),{},{[this.aliasKey]:e.values}));s!==void 0&&(e.memo=s)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}};function ep([i,e],t){let n=Math.abs(i),s=Math.abs(e);if(n>s&&n>t)return"x";if(s>n&&s>t)return"y"}var Ui=class extends jr{constructor(...e){super(...e),Ft(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=At.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=At.sub(this.state.offset,this.state.lastOffset)}axisIntent(e){let t=this.state,n=this.config;if(!t.axis&&e){let s=typeof n.axisThreshold=="object"?n.axisThreshold[Nu(e)]:n.axisThreshold;t.axis=ep(t._movement,s)}t._blocked=(n.lockDirection||!!n.axis)&&!t.axis||!!n.axis&&n.axis!==t.axis}restrictToAxis(e){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":e[1]=0;break;case"y":e[0]=0;break}}},tp=i=>i,Au=.15,ku={enabled(i=!0){return i},eventOptions(i,e,t){return Pt(Pt({},t.shared.eventOptions),i)},preventDefault(i=!1){return i},triggerAllEvents(i=!1){return i},rubberband(i=0){switch(i){case!0:return[Au,Au];case!1:return[0,0];default:return At.toVector(i)}},from(i){if(typeof i=="function")return i;if(i!=null)return At.toVector(i)},transform(i,e,t){let n=i||t.shared.transform;return this.hasCustomTransform=!!n,n||tp},threshold(i){return At.toVector(i,0)}},np=0,Fi=Pt(Pt({},ku),{},{axis(i,e,{axis:t}){if(this.lockDirection=t==="lock",!this.lockDirection)return t},axisThreshold(i=np){return i},bounds(i={}){if(typeof i=="function")return r=>Fi.bounds(i(r));if("current"in i)return()=>i.current;if(typeof HTMLElement=="function"&&i instanceof HTMLElement)return i;let{left:e=-1/0,right:t=1/0,top:n=-1/0,bottom:s=1/0}=i;return[[e,t],[n,s]]}}),Cu={ArrowRight:(i,e=1)=>[i*e,0],ArrowLeft:(i,e=1)=>[-1*i*e,0],ArrowUp:(i,e=1)=>[0,-1*i*e],ArrowDown:(i,e=1)=>[0,i*e]},uc=class extends Ui{constructor(...e){super(...e),Ft(this,"ingKey","dragging")}reset(){super.reset();let e=this.state;e._pointerId=void 0,e._pointerActive=!1,e._keyboardActive=!1,e._preventScroll=!1,e._delayed=!1,e.swipe=[0,0],e.tap=!1,e.canceled=!1,e.cancel=this.cancel.bind(this)}setup(){let e=this.state;if(e._bounds instanceof HTMLElement){let t=e._bounds.getBoundingClientRect(),n=e.currentTarget.getBoundingClientRect(),s={left:t.left-n.left+e.offset[0],right:t.right-n.right+e.offset[0],top:t.top-n.top+e.offset[1],bottom:t.bottom-n.bottom+e.offset[1]};e._bounds=Fi.bounds(s)}}cancel(){let e=this.state;e.canceled||(e.canceled=!0,e._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(e){let t=this.config,n=this.state;if(e.buttons!=null&&(Array.isArray(t.pointerButtons)?!t.pointerButtons.includes(e.buttons):t.pointerButtons!==-1&&t.pointerButtons!==e.buttons))return;let s=this.ctrl.setEventIds(e);t.pointerCapture&&e.target.setPointerCapture(e.pointerId),!(s&&s.size>1&&n._pointerActive)&&(this.start(e),this.setupPointer(e),n._pointerId=cc(e),n._pointerActive=!0,this.computeValues(cs(e)),this.computeInitial(),t.preventScrollAxis&&Nu(e)!=="mouse"?(n._active=!1,this.setupScrollPrevention(e)):t.delay>0?(this.setupDelayTrigger(e),t.triggerAllEvents&&(this.compute(e),this.emit())):this.startPointerDrag(e))}startPointerDrag(e){let t=this.state;t._active=!0,t._preventScroll=!0,t._delayed=!1,this.compute(e),this.emit()}pointerMove(e){let t=this.state,n=this.config;if(!t._pointerActive)return;let s=cc(e);if(t._pointerId!==void 0&&s!==t._pointerId)return;let r=cs(e);if(document.pointerLockElement===e.target?t._delta=[e.movementX,e.movementY]:(t._delta=At.sub(r,t._values),this.computeValues(r)),At.addTo(t._movement,t._delta),this.compute(e),t._delayed&&t.intentional){this.timeoutStore.remove("dragDelay"),t.active=!1,this.startPointerDrag(e);return}if(n.preventScrollAxis&&!t._preventScroll)if(t.axis)if(t.axis===n.preventScrollAxis||n.preventScrollAxis==="xy"){t._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(e);return}else return;this.emit()}pointerUp(e){this.ctrl.setEventIds(e);try{this.config.pointerCapture&&e.target.hasPointerCapture(e.pointerId)&&e.target.releasePointerCapture(e.pointerId)}catch{}let t=this.state,n=this.config;if(!t._active||!t._pointerActive)return;let s=cc(e);if(t._pointerId!==void 0&&s!==t._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(e);let[r,a]=t._distance;if(t.tap=r<=n.tapsThreshold&&a<=n.tapsThreshold,t.tap&&n.filterTaps)t._force=!0;else{let[o,l]=t._delta,[c,u]=t._movement,[h,d]=n.swipe.velocity,[f,m]=n.swipe.distance,_=n.swipe.duration;if(t.elapsedTime<_){let g=Math.abs(o/t.timeDelta),p=Math.abs(l/t.timeDelta);g>h&&Math.abs(c)>f&&(t.swipe[0]=Math.sign(o)),p>d&&Math.abs(u)>m&&(t.swipe[1]=Math.sign(l))}}this.emit()}pointerClick(e){!this.state.tap&&e.detail>0&&(e.preventDefault(),e.stopPropagation())}setupPointer(e){let t=this.config,n=t.device;t.pointerLock&&e.currentTarget.requestPointerLock(),t.pointerCapture||(this.eventStore.add(this.sharedConfig.window,n,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,n,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,n,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(e){this.state._preventScroll&&e.cancelable&&e.preventDefault()}setupScrollPrevention(e){this.state._preventScroll=!1,ip(e);let t=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",t),this.eventStore.add(this.sharedConfig.window,"touch","cancel",t),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,e)}setupDelayTrigger(e){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(e)},this.config.delay)}keyDown(e){let t=Cu[e.key];if(t){let n=this.state,s=e.shiftKey?10:e.altKey?.1:1;this.start(e),n._delta=t(this.config.keyboardDisplacement,s),n._keyboardActive=!0,At.addTo(n._movement,n._delta),this.compute(e),this.emit()}}keyUp(e){e.key in Cu&&(this.state._keyboardActive=!1,this.setActive(),this.compute(e),this.emit())}bind(e){let t=this.config.device;e(t,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(e(t,"change",this.pointerMove.bind(this)),e(t,"end",this.pointerUp.bind(this)),e(t,"cancel",this.pointerUp.bind(this)),e("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(e("key","down",this.keyDown.bind(this)),e("key","up",this.keyUp.bind(this))),this.config.filterTaps&&e("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}};function ip(i){"persist"in i&&typeof i.persist=="function"&&i.persist()}var js=typeof window<"u"&&window.document&&window.document.createElement;function zu(){return js&&"ontouchstart"in window}function sp(){return zu()||js&&window.navigator.maxTouchPoints>1}function rp(){return js&&"onpointerdown"in window}function ap(){return js&&"exitPointerLock"in window.document}function op(){try{return"constructor"in GestureEvent}catch{return!1}}var gn={isBrowser:js,gesture:op(),touch:zu(),touchscreen:sp(),pointer:rp(),pointerLock:ap()},cp=250,lp=180,up=.5,hp=50,dp=250,fp=10,Ru={mouse:0,touch:0,pen:8},pp=Pt(Pt({},Fi),{},{device(i,e,{pointer:{touch:t=!1,lock:n=!1,mouse:s=!1}={}}){return this.pointerLock=n&&gn.pointerLock,gn.touch&&t?"touch":this.pointerLock?"mouse":gn.pointer&&!s?"pointer":gn.touch?"touch":"mouse"},preventScrollAxis(i,e,{preventScroll:t}){if(this.preventScrollDelay=typeof t=="number"?t:t||t===void 0&&i?cp:void 0,!(!gn.touchscreen||t===!1))return i||(t!==void 0?"y":void 0)},pointerCapture(i,e,{pointer:{capture:t=!0,buttons:n=1,keys:s=!0}={}}){return this.pointerButtons=n,this.keys=s,!this.pointerLock&&this.device==="pointer"&&t},threshold(i,e,{filterTaps:t=!1,tapsThreshold:n=3,axis:s=void 0}){let r=At.toVector(i,t?n:s?1:0);return this.filterTaps=t,this.tapsThreshold=n,r},swipe({velocity:i=up,distance:e=hp,duration:t=dp}={}){return{velocity:this.transform(At.toVector(i)),distance:this.transform(At.toVector(e)),duration:t}},delay(i=0){switch(i){case!0:return lp;case!1:return 0;default:return i}},axisThreshold(i){return i?Pt(Pt({},Ru),i):Ru},keyboardDisplacement(i=fp){return i}});function Vu(i){let[e,t]=i.overflow,[n,s]=i._delta,[r,a]=i._direction;(e<0&&n>0&&r<0||e>0&&n<0&&r>0)&&(i._movement[0]=i._movementBound[0]),(t<0&&s>0&&a<0||t>0&&s<0&&a>0)&&(i._movement[1]=i._movementBound[1])}var mp=30,gp=100,hc=class extends jr{constructor(...e){super(...e),Ft(this,"ingKey","pinching"),Ft(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();let e=this.state;e._touchIds=[],e.canceled=!1,e.cancel=this.cancel.bind(this),e.turns=0}computeOffset(){let{type:e,movement:t,lastOffset:n}=this.state;e==="wheel"?this.state.offset=At.add(t,n):this.state.offset=[(1+t[0])*n[0],t[1]+n[1]]}computeMovement(){let{offset:e,lastOffset:t}=this.state;this.state.movement=[e[0]/t[0],e[1]-t[1]]}axisIntent(){let e=this.state,[t,n]=e._movement;if(!e.axis){let s=Math.abs(t)*mp-Math.abs(n);s<0?e.axis="angle":s>0&&(e.axis="scale")}}restrictToAxis(e){this.config.lockDirection&&(this.state.axis==="scale"?e[1]=0:this.state.axis==="angle"&&(e[0]=0))}cancel(){let e=this.state;e.canceled||setTimeout(()=>{e.canceled=!0,e._active=!1,this.compute(),this.emit()},0)}touchStart(e){this.ctrl.setEventIds(e);let t=this.state,n=this.ctrl.touchIds;if(t._active&&t._touchIds.every(r=>n.has(r))||n.size<2)return;this.start(e),t._touchIds=Array.from(n).slice(0,2);let s=Su(e,t._touchIds);s&&this.pinchStart(e,s)}pointerStart(e){if(e.buttons!=null&&e.buttons%2!==1)return;this.ctrl.setEventIds(e),e.target.setPointerCapture(e.pointerId);let t=this.state,n=t._pointerEvents,s=this.ctrl.pointerIds;if(t._active&&Array.from(n.keys()).every(a=>s.has(a))||(n.size<2&&n.set(e.pointerId,e),t._pointerEvents.size<2))return;this.start(e);let r=lc(...Array.from(n.values()));r&&this.pinchStart(e,r)}pinchStart(e,t){let n=this.state;n.origin=t.origin,this.computeValues([t.distance,t.angle]),this.computeInitial(),this.compute(e),this.emit()}touchMove(e){if(!this.state._active)return;let t=Su(e,this.state._touchIds);t&&this.pinchMove(e,t)}pointerMove(e){let t=this.state._pointerEvents;if(t.has(e.pointerId)&&t.set(e.pointerId,e),!this.state._active)return;let n=lc(...Array.from(t.values()));n&&this.pinchMove(e,n)}pinchMove(e,t){let n=this.state,s=n._values[1],r=t.angle-s,a=0;Math.abs(r)>270&&(a+=Math.sign(r)),this.computeValues([t.distance,t.angle-360*a]),n.origin=t.origin,n.turns=a,n._movement=[n._values[0]/n._initial[0]-1,n._values[1]-n._initial[1]],this.compute(e),this.emit()}touchEnd(e){this.ctrl.setEventIds(e),this.state._active&&this.state._touchIds.some(t=>!this.ctrl.touchIds.has(t))&&(this.state._active=!1,this.compute(e),this.emit())}pointerEnd(e){let t=this.state;this.ctrl.setEventIds(e);try{e.target.releasePointerCapture(e.pointerId)}catch{}t._pointerEvents.has(e.pointerId)&&t._pointerEvents.delete(e.pointerId),t._active&&t._pointerEvents.size<2&&(t._active=!1,this.compute(e),this.emit())}gestureStart(e){e.cancelable&&e.preventDefault();let t=this.state;t._active||(this.start(e),this.computeValues([e.scale,e.rotation]),t.origin=[e.clientX,e.clientY],this.compute(e),this.emit())}gestureMove(e){if(e.cancelable&&e.preventDefault(),!this.state._active)return;let t=this.state;this.computeValues([e.scale,e.rotation]),t.origin=[e.clientX,e.clientY];let n=t._movement;t._movement=[e.scale-1,e.rotation],t._delta=At.sub(t._movement,n),this.compute(e),this.emit()}gestureEnd(e){this.state._active&&(this.state._active=!1,this.compute(e),this.emit())}wheel(e){let t=this.config.modifierKey;t&&(Array.isArray(t)?!t.find(n=>e[n]):!e[t])||(this.state._active?this.wheelChange(e):this.wheelStart(e),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(e){this.start(e),this.wheelChange(e)}wheelChange(e){"uv"in e||e.cancelable&&e.preventDefault();let n=this.state;n._delta=[-Ou(e)[1]/gp*n.offset[0],0],At.addTo(n._movement,n._delta),Vu(n),this.state.origin=[e.clientX,e.clientY],this.compute(e),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){let t=this.config.device;t&&(e(t,"start",this[t+"Start"].bind(this)),e(t,"change",this[t+"Move"].bind(this)),e(t,"end",this[t+"End"].bind(this)),e(t,"cancel",this[t+"End"].bind(this)),e("lostPointerCapture","",this[t+"End"].bind(this))),this.config.pinchOnWheel&&e("wheel","",this.wheel.bind(this),{passive:!1})}},xp=Pt(Pt({},ku),{},{device(i,e,{shared:t,pointer:{touch:n=!1}={}}){if(t.target&&!gn.touch&&gn.gesture)return"gesture";if(gn.touch&&n)return"touch";if(gn.touchscreen){if(gn.pointer)return"pointer";if(gn.touch)return"touch"}},bounds(i,e,{scaleBounds:t={},angleBounds:n={}}){let s=a=>{let o=Tu(Jr(t,a),{min:-1/0,max:1/0});return[o.min,o.max]},r=a=>{let o=Tu(Jr(n,a),{min:-1/0,max:1/0});return[o.min,o.max]};return typeof t!="function"&&typeof n!="function"?[s(),r()]:a=>[s(a),r(a)]},threshold(i,e,t){return this.lockDirection=t.axis==="lock",At.toVector(i,this.lockDirection?[.1,3]:0)},modifierKey(i){return i===void 0?"ctrlKey":i},pinchOnWheel(i=!0){return i}}),dc=class extends Ui{constructor(...e){super(...e),Ft(this,"ingKey","moving")}move(e){this.config.mouseOnly&&e.pointerType!=="mouse"||(this.state._active?this.moveChange(e):this.moveStart(e),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(e){this.start(e),this.computeValues(cs(e)),this.compute(e),this.computeInitial(),this.emit()}moveChange(e){if(!this.state._active)return;let t=cs(e),n=this.state;n._delta=At.sub(t,n._values),At.addTo(n._movement,n._delta),this.computeValues(t),this.compute(e),this.emit()}moveEnd(e){this.state._active&&(this.state._active=!1,this.compute(e),this.emit())}bind(e){e("pointer","change",this.move.bind(this)),e("pointer","leave",this.moveEnd.bind(this))}},_p=Pt(Pt({},Fi),{},{mouseOnly:(i=!0)=>i}),fc=class extends Ui{constructor(...e){super(...e),Ft(this,"ingKey","scrolling")}scroll(e){this.state._active||this.start(e),this.scrollChange(e),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(e){e.cancelable&&e.preventDefault();let t=this.state,n=Kf(e);t._delta=At.sub(n,t._values),At.addTo(t._movement,t._delta),this.computeValues(n),this.compute(e),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){e("scroll","",this.scroll.bind(this))}},vp=Fi,pc=class extends Ui{constructor(...e){super(...e),Ft(this,"ingKey","wheeling")}wheel(e){this.state._active||this.start(e),this.wheelChange(e),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(e){let t=this.state;t._delta=Ou(e),At.addTo(t._movement,t._delta),Vu(t),this.compute(e),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){e("wheel","",this.wheel.bind(this))}},yp=Fi,mc=class extends Ui{constructor(...e){super(...e),Ft(this,"ingKey","hovering")}enter(e){this.config.mouseOnly&&e.pointerType!=="mouse"||(this.start(e),this.computeValues(cs(e)),this.compute(e),this.emit())}leave(e){if(this.config.mouseOnly&&e.pointerType!=="mouse")return;let t=this.state;if(!t._active)return;t._active=!1;let n=cs(e);t._movement=t._delta=At.sub(n,t._values),this.computeValues(n),this.compute(e),t.delta=t.movement,this.emit()}bind(e){e("pointer","enter",this.enter.bind(this)),e("pointer","leave",this.leave.bind(this))}},bp=Pt(Pt({},Fi),{},{mouseOnly:(i=!0)=>i}),Qs=new Map,er=new Map;function gc(i){Qs.set(i.key,i.engine),er.set(i.key,i.resolver)}var xc={key:"drag",engine:uc,resolver:pp},_c={key:"hover",engine:mc,resolver:bp},vc={key:"move",engine:dc,resolver:_p},yc={key:"pinch",engine:hc,resolver:xp},bc={key:"scroll",engine:fc,resolver:vp},Mc={key:"wheel",engine:pc,resolver:yp};function Mp(i,e){if(i==null)return{};var t={},n=Object.keys(i),s,r;for(r=0;r<n.length;r++)s=n[r],!(e.indexOf(s)>=0)&&(t[s]=i[s]);return t}function Sp(i,e){if(i==null)return{};var t=Mp(i,e),n,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);for(s=0;s<r.length;s++)n=r[s],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}var wp={target(i){if(i)return()=>"current"in i?i.current:i},enabled(i=!0){return i},window(i=gn.isBrowser?window:void 0){return i},eventOptions({passive:i=!0,capture:e=!1}={}){return{passive:i,capture:e}},transform(i){return i}},Ep=["target","eventOptions","window","enabled","transform"];function Qr(i={},e){let t={};for(let[n,s]of Object.entries(e))switch(typeof s){case"function":t[n]=s.call(t,i[n],n,i);break;case"object":t[n]=Qr(i[n],s);break;case"boolean":s&&(t[n]=i[n]);break}return t}function Tp(i,e,t={}){let n=i,{target:s,eventOptions:r,window:a,enabled:o,transform:l}=n,c=Sp(n,Ep);if(t.shared=Qr({target:s,eventOptions:r,window:a,enabled:o,transform:l},wp),e){let u=er.get(e);t[e]=Qr(Pt({shared:t.shared},c),u)}else for(let u in c){let h=er.get(u);h&&(t[u]=Qr(Pt({shared:t.shared},c[u]),h))}return t}var ea=class{constructor(e,t){Ft(this,"_listeners",new Set),this._ctrl=e,this._gestureKey=t}add(e,t,n,s,r){let a=this._listeners,o=Du(t,n),l=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},c=Pt(Pt({},l),r);e.addEventListener(o,s,c);let u=()=>{e.removeEventListener(o,s,c),a.delete(u)};return a.add(u),u}clean(){this._listeners.forEach(e=>e()),this._listeners.clear()}},Sc=class{constructor(){Ft(this,"_timeouts",new Map)}add(e,t,n=140,...s){this.remove(e),this._timeouts.set(e,window.setTimeout(t,n,...s))}remove(e){let t=this._timeouts.get(e);t&&window.clearTimeout(t)}clean(){this._timeouts.forEach(e=>void window.clearTimeout(e)),this._timeouts.clear()}},ta=class{constructor(e){Ft(this,"gestures",new Set),Ft(this,"_targetEventStore",new ea(this)),Ft(this,"gestureEventStores",{}),Ft(this,"gestureTimeoutStores",{}),Ft(this,"handlers",{}),Ft(this,"config",{}),Ft(this,"pointerIds",new Set),Ft(this,"touchIds",new Set),Ft(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),Ap(this,e)}setEventIds(e){if(Js(e))return this.touchIds=new Set(Fu(e)),this.touchIds;if("pointerId"in e)return e.type==="pointerup"||e.type==="pointercancel"?this.pointerIds.delete(e.pointerId):e.type==="pointerdown"&&this.pointerIds.add(e.pointerId),this.pointerIds}applyHandlers(e,t){this.handlers=e,this.nativeHandlers=t}applyConfig(e,t){this.config=Tp(e,t,this.config)}clean(){this._targetEventStore.clean();for(let e of this.gestures)this.gestureEventStores[e].clean(),this.gestureTimeoutStores[e].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...e){let t=this.config.shared,n={},s;if(!(t.target&&(s=t.target(),!s))){if(t.enabled){for(let a of this.gestures){let o=this.config[a],l=Hu(n,o.eventOptions,!!s);if(o.enabled){let c=Qs.get(a);new c(this,e,a).bind(l)}}let r=Hu(n,t.eventOptions,!!s);for(let a in this.nativeHandlers)r(a,"",o=>this.nativeHandlers[a](Pt(Pt({},this.state.shared),{},{event:o,args:e})),void 0,!0)}for(let r in n)n[r]=Bu(...n[r]);if(!s)return n;for(let r in n){let{device:a,capture:o,passive:l}=Lu(r);this._targetEventStore.add(s,a,"",n[r],{capture:o,passive:l})}}}};function ls(i,e){i.gestures.add(e),i.gestureEventStores[e]=new ea(i,e),i.gestureTimeoutStores[e]=new Sc}function Ap(i,e){e.drag&&ls(i,"drag"),e.wheel&&ls(i,"wheel"),e.scroll&&ls(i,"scroll"),e.move&&ls(i,"move"),e.pinch&&ls(i,"pinch"),e.hover&&ls(i,"hover")}var Hu=(i,e,t)=>(n,s,r,a={},o=!1)=>{var l,c;let u=(l=a.capture)!==null&&l!==void 0?l:e.capture,h=(c=a.passive)!==null&&c!==void 0?c:e.passive,d=o?n:Pu(n,s,u);t&&h&&(d+="Passive"),i[d]=i[d]||[],i[d].push(r)},Cp=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function Rp(i){let e={},t={},n=new Set;for(let s in i)Cp.test(s)?(n.add(RegExp.lastMatch),t[s]=i[s]):e[s]=i[s];return[t,e,n]}function us(i,e,t,n,s,r){if(!i.has(t)||!Qs.has(n))return;let a=t+"Start",o=t+"End",l=c=>{let u;return c.first&&a in e&&e[a](c),t in e&&(u=e[t](c)),c.last&&o in e&&e[o](c),u};s[n]=l,r[n]=r[n]||{}}function Gu(i,e){let[t,n,s]=Rp(i),r={};return us(s,t,"onDrag","drag",r,e),us(s,t,"onWheel","wheel",r,e),us(s,t,"onScroll","scroll",r,e),us(s,t,"onPinch","pinch",r,e),us(s,t,"onMove","move",r,e),us(s,t,"onHover","hover",r,e),{handlers:r,config:e,nativeHandlers:n}}function Ip(i,e={},t,n){let s=Yr.useMemo(()=>new ta(i),[]);if(s.applyHandlers(i,n),s.applyConfig(e,t),Yr.useEffect(s.effect.bind(s)),Yr.useEffect(()=>s.clean.bind(s),[]),e.target===void 0)return s.bind.bind(s)}function Pp(i){return i.forEach(gc),function(t,n){let{handlers:s,nativeHandlers:r,config:a}=Gu(t,n||{});return Ip(s,a,void 0,r)}}function Wu(i,e){return Pp([xc,yc,bc,Mc,vc,_c])(i,e||{})}var na={maxVerticalRotationDeg:5,dragSensitivity:20,enlargeTransitionMs:300,segments:35},gi=(i,e,t)=>Math.min(Math.max(i,e),t),Xu=i=>(i%360+360)%360,qu=i=>((i+180)%360+360)%360-180,ia=(i,e,t)=>{let n=i.dataset[e]??i.getAttribute(`data-${e}`),s=n==null?NaN:parseFloat(n);return Number.isFinite(s)?s:t};function Lp(i,e){let t=Array.from({length:e},(c,u)=>-37+u*2),n=[-8,-6,-4,-2,0,2,4,6,8],s=n.map(c=>c+1),r=t.flatMap((c,u)=>(u%2===0?n:s).map(d=>({x:c,y:d,sizeX:2,sizeY:2}))),a=r.length;if(i.length===0)return r.map(c=>({...c,src:"",alt:""}));i.length>a&&console.warn(`[DomeGallery] Provided image count (${i.length}) exceeds available tiles (${a}). Some images will not be shown.`);let o=i.map(c=>typeof c=="string"?{src:c,alt:""}:{src:c.src||"",alt:c.alt||""}),l=Array.from({length:a},(c,u)=>o[u%o.length]);for(let c=1;c<l.length;c++)if(l[c].src===l[c-1].src){for(let u=c+1;u<l.length;u++)if(l[u].src!==l[c].src){let h=l[c];l[c]=l[u],l[u]=h;break}}return r.map((c,u)=>({...c,src:l[u].src,alt:l[u].alt}))}function Dp(i,e,t,n,s){let r=360/s/2,a=r*(i+(t-1)/2);return{rotateX:r*(e-(n-1)/2),rotateY:a}}function wc({images:i=[],fit:e=.5,fitBasis:t="auto",minRadius:n=600,maxRadius:s=1/0,padFactor:r=.25,overlayBlurColor:a="#120F17",maxVerticalRotationDeg:o=na.maxVerticalRotationDeg,dragSensitivity:l=na.dragSensitivity,enlargeTransitionMs:c=na.enlargeTransitionMs,segments:u=na.segments,dragDampening:h=2,openedImageWidth:d="400px",openedImageHeight:f="400px",imageBorderRadius:m="30px",openedImageBorderRadius:_="30px",grayscale:g=!0}){let p=ct(null),A=ct(null),M=ct(null),T=ct(null),U=ct(null),C=ct(null),I=ct(null),W=ct(null),E=ct({x:0,y:0}),y=ct({x:0,y:0}),R=ct(null),$=ct(!1),X=ct(!1),ne=ct(null),q=ct(!1),F=ct(0),be=ct(0),Z=ct(!1),Ee=Vn(()=>{Z.current||(Z.current=!0,document.body.classList.add("dg-scroll-lock"))},[]),Ce=Vn(()=>{Z.current&&p.current?.getAttribute("data-enlarging")!=="true"&&(Z.current=!1,document.body.classList.remove("dg-scroll-lock"))},[]),He=Zr(()=>Lp(i,u),[i,u]),je=(ge,me)=>{let se=M.current;se&&(se.style.transform=`translateZ(calc(var(--radius) * -1)) rotateX(${ge}deg) rotateY(${me}deg)`)},rt=ct(null);Zt(()=>{let ge=p.current;if(!ge)return;let me=new ResizeObserver(se=>{let ae=se[0].contentRect,Re=Math.max(1,ae.width),re=Math.max(1,ae.height),w=Math.min(Re,re),oe=Math.max(Re,re),de=Re/re,ee;switch(t){case"viewport":ee=Math.max(Re,re*1.28);break;case"min":ee=w;break;case"max":ee=oe;break;case"width":ee=Re;break;case"height":ee=re;break;default:ee=de>=1.3?Re:w}let le=ee*e,ve=re*1.35;t!=="viewport"&&(le=Math.min(le,ve)),le=gi(le,n,s),rt.current=Math.round(le);let ie=Math.max(8,Math.round(w*r));ge.style.setProperty("--radius",`${rt.current}px`),ge.style.setProperty("--viewer-pad",`${ie}px`),ge.style.setProperty("--overlay-blur-color",a),ge.style.setProperty("--tile-radius",m),ge.style.setProperty("--enlarge-radius",_),ge.style.setProperty("--image-filter",g?"grayscale(1)":"none"),je(E.current.x,E.current.y);let Se=U.current?.querySelector(".enlarge");if(Se&&T.current&&A.current){let b=T.current.getBoundingClientRect(),x=A.current.getBoundingClientRect();if(d&&f){let j=document.createElement("div");j.style.cssText=`position: absolute; width: ${d}; height: ${f}; visibility: hidden;`,document.body.appendChild(j);let fe=j.getBoundingClientRect();document.body.removeChild(j);let Y=b.left-x.left+(b.width-fe.width)/2,We=b.top-x.top+(b.height-fe.height)/2;Se.style.left=`${Y}px`,Se.style.top=`${We}px`}else Se.style.left=`${b.left-x.left}px`,Se.style.top=`${b.top-x.top}px`,Se.style.width=`${b.width}px`,Se.style.height=`${b.height}px`}});return me.observe(ge),()=>me.disconnect()},[e,t,n,s,r,a,g,m,_,d,f]),Zt(()=>{je(E.current.x,E.current.y)},[]);let at=Vn(()=>{ne.current&&(cancelAnimationFrame(ne.current),ne.current=null)},[]),st=Vn((ge,me)=>{let ae=gi(ge,-1.4,1.4)*80,Re=gi(me,-1.4,1.4)*80,re=0,w=gi(h??.6,0,1),oe=.94+.055*w,de=.015-.01*w,ee=Math.round(90+270*w),le=()=>{if(ae*=oe,Re*=oe,Math.abs(ae)<de&&Math.abs(Re)<de){ne.current=null;return}if(++re>ee){ne.current=null;return}let ve=gi(E.current.x-Re/200,-o,o),ie=qu(E.current.y+ae/200);E.current={x:ve,y:ie},je(ve,ie),ne.current=requestAnimationFrame(le)};at(),ne.current=requestAnimationFrame(le)},[h,o,at]);Wu({onDragStart:({event:ge})=>{if(I.current)return;at();let me=ge;$.current=!0,X.current=!1,y.current={...E.current},R.current={x:me.clientX,y:me.clientY}},onDrag:({event:ge,last:me,velocity:se=[0,0],direction:ae=[0,0],movement:Re})=>{if(I.current||!$.current||!R.current)return;let re=ge,w=re.clientX-R.current.x,oe=re.clientY-R.current.y;X.current||w*w+oe*oe>16&&(X.current=!0);let de=gi(y.current.x-oe/l,-o,o),ee=qu(y.current.y+w/l);if((E.current.x!==de||E.current.y!==ee)&&(E.current={x:de,y:ee},je(de,ee)),me){$.current=!1;let[le,ve]=se,[ie,Se]=ae,b=le*ie,x=ve*Se;if(Math.abs(b)<.001&&Math.abs(x)<.001&&Array.isArray(Re)){let[N,j]=Re;b=gi(N/l*.02,-1.2,1.2),x=gi(j/l*.02,-1.2,1.2)}(Math.abs(b)>.005||Math.abs(x)>.005)&&st(b,x),X.current&&(be.current=performance.now()),X.current=!1}}},{target:A,eventOptions:{passive:!0}}),Zt(()=>{let ge=C.current;if(!ge)return;let me=()=>{if(performance.now()-F.current<250)return;let ae=I.current;if(!ae)return;let Re=ae.parentElement,re=U.current?.querySelector(".enlarge");if(!re)return;let w=Re.querySelector(".item__image--reference"),oe=W.current;if(!oe){re.remove(),w&&w.remove(),Re.style.setProperty("--rot-y-delta","0deg"),Re.style.setProperty("--rot-x-delta","0deg"),ae.style.visibility="",ae.style.zIndex=0,I.current=null,p.current?.removeAttribute("data-enlarging"),q.current=!1,Ce();return}let de=re.getBoundingClientRect(),ee=p.current.getBoundingClientRect(),le={left:oe.left-ee.left,top:oe.top-ee.top,width:oe.width,height:oe.height},ve={left:de.left-ee.left,top:de.top-ee.top,width:de.width,height:de.height},ie=document.createElement("div");ie.className="enlarge-closing",ie.style.cssText=`position:absolute;left:${ve.left}px;top:${ve.top}px;width:${ve.width}px;height:${ve.height}px;z-index:9999;border-radius: var(--enlarge-radius, 32px);overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.35);transition:all ${c}ms ease-out;pointer-events:none;margin:0;transform:none;`;let Se=re.querySelector("img");if(Se){let x=Se.cloneNode();x.style.cssText="width:100%;height:100%;object-fit:cover;",ie.appendChild(x)}re.remove(),p.current.appendChild(ie),ie.getBoundingClientRect(),requestAnimationFrame(()=>{ie.style.left=le.left+"px",ie.style.top=le.top+"px",ie.style.width=le.width+"px",ie.style.height=le.height+"px",ie.style.opacity="0"});let b=()=>{ie.remove(),W.current=null,w&&w.remove(),Re.style.transition="none",ae.style.transition="none",Re.style.setProperty("--rot-y-delta","0deg"),Re.style.setProperty("--rot-x-delta","0deg"),requestAnimationFrame(()=>{ae.style.visibility="",ae.style.opacity="0",ae.style.zIndex=0,I.current=null,p.current?.removeAttribute("data-enlarging"),requestAnimationFrame(()=>{Re.style.transition="",ae.style.transition="opacity 300ms ease-out",requestAnimationFrame(()=>{ae.style.opacity="1",setTimeout(()=>{ae.style.transition="",ae.style.opacity="",q.current=!1,!$.current&&p.current?.getAttribute("data-enlarging")!=="true"&&document.body.classList.remove("dg-scroll-lock")},300)})})})};ie.addEventListener("transitionend",b,{once:!0})};ge.addEventListener("click",me);let se=ae=>{ae.key==="Escape"&&me()};return window.addEventListener("keydown",se),()=>{ge.removeEventListener("click",me),window.removeEventListener("keydown",se)}},[c,Ce]);let ce=Vn(ge=>{if(q.current)return;q.current=!0,F.current=performance.now(),Ee();let me=ge.parentElement;I.current=ge,ge.setAttribute("data-focused","true");let se=ia(me,"offsetX",0),ae=ia(me,"offsetY",0),Re=ia(me,"sizeX",2),re=ia(me,"sizeY",2),w=Dp(se,ae,Re,re,u),oe=Xu(w.rotateY),de=Xu(E.current.y),ee=-(oe+de)%360;ee<-180&&(ee+=360);let le=-w.rotateX-E.current.x;me.style.setProperty("--rot-y-delta",`${ee}deg`),me.style.setProperty("--rot-x-delta",`${le}deg`);let ve=document.createElement("div");ve.className="item__image item__image--reference",ve.style.opacity="0",ve.style.transform=`rotateX(${-w.rotateX}deg) rotateY(${-w.rotateY}deg)`,me.appendChild(ve),ve.offsetHeight;let ie=ve.getBoundingClientRect(),Se=A.current?.getBoundingClientRect(),b=T.current?.getBoundingClientRect();if(!Se||!b||ie.width<=0||ie.height<=0){q.current=!1,I.current=null,me.removeChild(ve),Ce();return}W.current={left:ie.left,top:ie.top,width:ie.width,height:ie.height},ge.style.visibility="hidden",ge.style.zIndex=0;let x=document.createElement("div");x.className="enlarge",x.style.position="absolute",x.style.left=b.left-Se.left+"px",x.style.top=b.top-Se.top+"px",x.style.width=b.width+"px",x.style.height=b.height+"px",x.style.opacity="0",x.style.zIndex="30",x.style.willChange="transform, opacity",x.style.transformOrigin="top left",x.style.transition=`transform ${c}ms ease, opacity ${c}ms ease`;let N=i.find(he=>he.src===me.dataset.src)?.fullSrc||me.dataset.src||ge.querySelector("img")?.src||"",j=document.createElement("img");j.alt=ge.getAttribute("aria-label")||"",j.src=N,x.appendChild(j),U.current.appendChild(x);let fe=ie.left-b.left,Y=ie.top-b.top,We=ie.width/b.width,Pe=ie.height/b.height,Oe=isFinite(We)&&We>0?We:1,Be=isFinite(Pe)&&Pe>0?Pe:1;if(x.style.transform=`translate(${fe}px, ${Y}px) scale(${Oe}, ${Be})`,setTimeout(()=>{x.parentElement&&(x.style.opacity="1",x.style.transform="translate(0px, 0px) scale(1, 1)",p.current?.setAttribute("data-enlarging","true"))},16),d||f){let he=Ne=>{if(Ne.propertyName!=="transform")return;x.removeEventListener("transitionend",he);let L=x.style.transition;x.style.transition="none";let ze=d||`${b.width}px`,Ze=f||`${b.height}px`;x.style.width=ze,x.style.height=Ze;let P=x.getBoundingClientRect();x.style.width=b.width+"px",x.style.height=b.height+"px",x.offsetWidth,x.style.transition=`left ${c}ms ease, top ${c}ms ease, width ${c}ms ease, height ${c}ms ease`;let Le=b.left-Se.left+(b.width-P.width)/2,Ae=b.top-Se.top+(b.height-P.height)/2;requestAnimationFrame(()=>{x.style.left=`${Le}px`,x.style.top=`${Ae}px`,x.style.width=ze,x.style.height=Ze});let Te=()=>{x.removeEventListener("transitionend",Te),x.style.transition=L};x.addEventListener("transitionend",Te,{once:!0})};x.addEventListener("transitionend",he)}},[i,c,Ee,f,d,u,Ce]),_e=Vn(ge=>{$.current||X.current||performance.now()-be.current<80||q.current||ce(ge.currentTarget)},[ce]),Fe=Vn(ge=>{ge.pointerType==="touch"&&($.current||X.current||performance.now()-be.current<80||q.current||ce(ge.currentTarget))},[ce]);return Zt(()=>()=>{document.body.classList.remove("dg-scroll-lock")},[]),React.createElement("div",{ref:p,className:"sphere-root",style:{"--segments-x":u,"--segments-y":u,"--overlay-blur-color":a,"--tile-radius":m,"--enlarge-radius":_,"--image-filter":g?"grayscale(1)":"none"}},React.createElement("main",{ref:A,className:"sphere-main"},React.createElement("div",{className:"stage"},React.createElement("div",{ref:M,className:"sphere"},He.map((ge,me)=>React.createElement("div",{key:`${ge.x},${ge.y},${me}`,className:"item","data-src":ge.src,"data-offset-x":ge.x,"data-offset-y":ge.y,"data-size-x":ge.sizeX,"data-size-y":ge.sizeY,style:{"--offset-x":ge.x,"--offset-y":ge.y,"--item-size-x":ge.sizeX,"--item-size-y":ge.sizeY}},React.createElement("div",{className:"item__image",role:"button",tabIndex:0,"aria-label":ge.alt||"Open image",onKeyDown:se=>{(se.key==="Enter"||se.key===" ")&&(se.preventDefault(),_e(se))},onClick:_e,onPointerUp:Fe},React.createElement("img",{src:ge.src,draggable:!1,alt:ge.alt,onError:se=>{let ae=se.currentTarget,Re=Number(ae.dataset.retry||0);Re>=2||ae.src.startsWith("data:")||(ae.dataset.retry=String(Re+1),setTimeout(()=>{ae.isConnected&&!ae.naturalWidth&&(ae.src=ge.src)},350*(Re+1)))}})))))),React.createElement("div",{className:"overlay"}),React.createElement("div",{className:"overlay overlay--blur"}),React.createElement("div",{className:"edge-fade edge-fade--top"}),React.createElement("div",{className:"edge-fade edge-fade--bottom"}),React.createElement("div",{className:"viewer",ref:U},React.createElement("div",{ref:C,className:"scrim"}),React.createElement("div",{ref:T,className:"frame"}),React.createElement("button",{className:"dome-close",type:"button",onClick:()=>C.current?.click()},"Close photo"))))}function Yu(i){return window.portfolioFiles?.[i]??i}var tr=Ut.map((i,e)=>({src:Yu("images/clicks/tiles/"+i),fullSrc:Yu("images/clicks/"+i),alt:"Photograph "+(e+1)+" by Shivam Mishra"}));function Np(i){let e=new URL(location.href);return i?e.searchParams.set("gallery","photography"):e.searchParams.delete("gallery"),e.hash=i?"":"photos",e.href}function $u(){return React.createElement("a",{className:"dome-entry",href:Np(!0),target:"_blank",rel:"noopener"},React.createElement("div",{className:"dome-strip","aria-hidden":"true"},[0,Math.floor(tr.length/2),tr.length-1].map(i=>React.createElement("img",{key:i,src:tr[i].src,alt:"",loading:"lazy"}))),React.createElement("span",{className:"dome-callout"},React.createElement("strong",null,"Open photo gallery"),React.createElement("small",null,"Color dome \xB7 Opens in a new tab")))}function Zu(){return React.useEffect(()=>{document.title="Photography | Shivam Mishra"},[]),React.createElement("div",{className:"photo-room"},React.createElement(wc,{images:tr,grayscale:!1,segments:Math.max(35,Math.ceil(tr.length/9)),fitBasis:"viewport",fit:.81,minRadius:200,overlayBlurColor:"#120f17",imageBorderRadius:"22%",openedImageBorderRadius:"8px",openedImageWidth:"min(92vw, 1400px)",openedImageHeight:"88dvh"}))}var Ku="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789",Ju="ui-monospace, 'SF Mono', 'JetBrains Mono', Menlo, Consolas, 'Liberation Mono', monospace",Up=["#ffffff","#61dca3"],Fp=["#18181b","#0f9f6e"],Ec=8,Op=1.4,Bp=.2,kp=.1,zp=48,Vp=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,Hp=`#version 300 es
precision highp float;
precision highp int;
uniform sampler2D uAtlas;
uniform sampler2D uState;
uniform ivec2 uCell;
uniform ivec2 uGrid;
uniform int uAtlasColumns;
uniform vec2 uResolution;
uniform vec2 uOrigin;
uniform vec3 uBase;
uniform float uBaseOpacity;
uniform vec3 uColors[8];
uniform float uEdge;
uniform float uCenter;
uniform vec2 uPointer;
uniform float uRadius;
uniform float uPresence;
uniform float uReveal;
uniform float uTime;
uniform float uFlow;
uniform float uFlowScale;
uniform vec4 uBackground;
out vec4 outColor;

float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 w = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, w.x), mix(c, d, w.x), w.y);
}

float smoother(float x) {
  x = clamp(x, 0.0, 1.0);
  return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
}

void main() {
  vec2 frag = vec2(gl_FragCoord.x, uResolution.y - gl_FragCoord.y) - uOrigin;
  ivec2 q = ivec2(floor(frag));
  ivec2 cell = q / uCell;
  vec4 color = vec4(0.0);
  if (all(greaterThanEqual(q, ivec2(0))) && all(lessThan(cell, uGrid))) {
    vec4 state = texelFetch(uState, cell, 0);
    int glyph = int(state.r * 255.0 + 0.5);
    ivec2 texel = ivec2(glyph % uAtlasColumns, glyph / uAtlasColumns) * uCell + (q - cell * uCell);
    float coverage = texelFetch(uAtlas, texel, 0).a;
    if (coverage > 0.0) {
      vec2 center = vec2(cell * uCell) + vec2(uCell) * 0.5 + uOrigin;
      float mask = 1.0;
      if (uEdge > 0.0) {
        vec2 edge = min(center, uResolution - center) / uEdge;
        mask = smoother(edge.x) * smoother(edge.y);
      }
      if (uCenter > 0.0) {
        vec2 room = max(abs(center - uResolution * 0.5) - uResolution * vec2(0.3, 0.24), 0.0);
        float soft = min(uResolution.x, uResolution.y) * 0.24;
        mask *= 1.0 - uCenter * (1.0 - smoother(length(room) / soft));
      }
      float seed = hash(vec2(cell) + 17.0);
      float rest = state.g * uBaseOpacity * (0.8 + 0.2 * sin(uTime * (0.5 + 1.2 * seed) + seed * 40.0));
      if (uFlow > 0.0) {
        vec2 p = center / uFlowScale;
        float n = 0.65 * noise(p + vec2(uTime * 0.05, uTime * 0.03)) + 0.35 * noise(p * 2.03 - vec2(uTime * 0.04, -uTime * 0.06));
        rest *= mix(1.0, 0.1 + 1.7 * smoothstep(0.25, 0.8, n), uFlow);
      }
      if (uPresence > 0.0) {
        float d = length(center - uPointer) / uRadius;
        float f = clamp(1.0 - d * d, 0.0, 1.0);
        rest = mix(rest, max(rest, uReveal * step(0.004, state.g)), f * f * uPresence);
      }
      float heat = state.b;
      rest = min(rest, 1.0) * (1.0 - heat);
      vec3 tint = uColors[int(state.a * 255.0 + 0.5)];
      float weight = coverage * mask;
      color = vec4((uBase * rest + tint * heat) * weight, (rest + heat) * weight);
    }
  }
  outColor = color + uBackground * (1.0 - color.a);
}`,Dn=(i,e,t)=>Math.min(t,Math.max(e,i)),Gp=i=>{let e=Dn(i,0,1);return e*e*e*(e*(e*6-15)+10)},ju=(i,e,t)=>{let n=i.createShader(e);return n?(i.shaderSource(n,t),i.compileShader(n),i.getShaderParameter(n,i.COMPILE_STATUS)?n:(i.deleteShader(n),null)):null},Wp=i=>{let e=ju(i,i.VERTEX_SHADER,Vp),t=ju(i,i.FRAGMENT_SHADER,Hp),n=i.createProgram();if(!e||!t||!n)return null;if(i.attachShader(n,e),i.attachShader(n,t),i.linkProgram(n),i.deleteShader(e),i.deleteShader(t),!i.getProgramParameter(n,i.LINK_STATUS))return i.deleteProgram(n),null;let s={},r=i.getProgramParameter(n,i.ACTIVE_UNIFORMS);for(let a=0;a<r;a++){let o=i.getActiveUniform(n,a);if(!o)continue;let l=o.name.replace(/\[0\]$/,"");s[l]=i.getUniformLocation(n,l)}return{program:n,uniforms:s}},Xp=({glitchColors:i,baseColor:e,characters:t=Ku,fontFamily:n=Ju,fontSize:s=14,spacing:r=.6,density:a=.9,baseOpacity:o=.16,glitchAmount:l=.5,speed:c=1,smooth:u=!0,interactive:h=!0,cursorRadius:d=140,clickEffect:f="tear",flow:m=.5,edgeFade:_=0,centerFade:g=0,intro:p=!0,lightMode:A=!1,backgroundColor:M,dpr:T,className:U="",style:C,...I})=>{let W=ct(null),E=ct(null),y=ct(null),$={colors:((Array.isArray(i)&&i.length?i:null)||(A?Fp:Up)).slice(0,Ec),baseColor:e||(A?"#18181b":"#ffffff"),characters:t||Ku,fontFamily:n||Ju,fontSize:Dn(s,6,96),spacing:Dn(r,0,2),density:Dn(a,0,1),baseOpacity:Dn(o,0,1),glitchAmount:Dn(l,0,1),speed:Math.max(0,c),smooth:u,interactive:h,cursorRadius:Math.max(0,d),clickEffect:f,flow:Dn(m,0,1),edgeFade:Dn(_,0,.5),centerFade:Dn(g,0,1),intro:p,backgroundColor:M,dpr:T},X=ct($);return X.current=$,Zt(()=>{let ne=W.current,q=E.current,F=q?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!ne||!q||!F)return;let be=Wp(F);if(!be)return;let Z=be.uniforms,Ee=F.createVertexArray(),Ce=()=>{let O=F.createTexture();return F.bindTexture(F.TEXTURE_2D,O),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_WRAP_S,F.CLAMP_TO_EDGE),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_WRAP_T,F.CLAMP_TO_EDGE),O},He=Ce(),je=Ce(),rt=F.getParameter(F.MAX_TEXTURE_SIZE),at=document.createElement("canvas"),st=at.getContext("2d"),ce=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});if(!st)return;let _e=new Map,Fe=O=>{let Q=String(O),H=_e.get(Q);if(H)return H;let De=[1,1,1];if(ce){ce.clearRect(0,0,1,1),ce.fillStyle="#ffffff",ce.fillStyle=Q,ce.fillRect(0,0,1,1);let[Ve,Ie,Me]=ce.getImageData(0,0,1,1).data;De=[Ve/255,Ie/255,Me/255]}return _e.set(Q,De),De},ge=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,me={width:1,height:1,ratio:1},se={cols:0,rows:0,cellW:0,cellH:0,originX:0,originY:0,atlasColumns:1},ae={x:0,y:0,sx:0,sy:0,inside:!1,presence:0,stir:0,fresh:!0},Re=[],re=new Float32Array(Ec*3),w=new Set,oe=[0],de="",ee="",le=1,ve=0,ie=new Uint8Array(0),Se=new Float32Array(0),b=new Float32Array(0),x=new Float32Array(0),N=new Float32Array(0),j=new Float32Array(0),fe=new Float32Array(0),Y=new Float32Array(0),We=new Float32Array(0),Pe=new Float32Array(0),Oe=new Int32Array(0),Be=new Int32Array(0),z=0,he=X.current.intro&&!ge,Ne=0,L=0,ze=-1,Ze=0,P=0,Le=0,Ae=!0,Te=0,we=0,pe=!0,Ye=!0,Qe=()=>oe[Math.random()*oe.length|0],xt=()=>Math.random()*le|0,dt=(O,Q=1)=>Y[O]<X.current.density?Math.round(We[O]*255*Q):0,Lt=(O,Q)=>{let H=Math.floor((O-se.originX)/se.cellW),De=Math.floor((Q-se.originY)/se.cellH);return H<0||De<0||H>=se.cols||De>=se.rows?-1:De*se.cols+H},Ct=(O,Q,H,De,Ve,Ie=0)=>{if(Oe[O]<0){Oe[O]=z,Be[z++]=O,Se[O]=0,x[O]=H,b[O]=Q,N[O]=De,j[O]=0,fe[O]=Ie,ie[O*4+3]=Ve;return}Se[O]<.15&&(ie[O*4+3]=Ve),b[O]=x[O]>0?Math.max(b[O],Q):Q,x[O]=Math.max(x[O],H),N[O]=Math.max(N[O],De),fe[O]=Math.min(fe[O],Ie)},Ni=O=>{let Q=Be[O],H=Be[--z];Be[O]=H,Oe[H]=O,Oe[Q]=-1,Se[Q]=0,ie[Q*4+2]=0},en=()=>{let O=X.current,Q=O.fontSize*me.ratio,H=`${Q}px ${O.fontFamily}`,De=Array.from(O.characters),Ve=Array.from(new Set(De)).slice(0,256);st.font=H;let Ie=1;Ve.forEach(it=>{Ie=Math.max(Ie,st.measureText(it).width)});let Me=st.measureText("M"),et=Math.max(2,Math.ceil(Ie+Q*O.spacing)),$e=Math.max(2,Math.ceil(Q*(.95+O.spacing))),Ke=Math.max(1,Math.min(Ve.length,Math.floor(rt/et)));at.width=Ke*et,at.height=Math.ceil(Ve.length/Ke)*$e,st.font=H,st.textAlign="center",st.textBaseline="alphabetic",st.fillStyle="#ffffff";let Je=$e/2+(Me.actualBoundingBoxAscent-Me.actualBoundingBoxDescent)/2;Ve.forEach((it,_t)=>{st.fillText(it,_t%Ke*et+et/2,Math.floor(_t/Ke)*$e+Je)}),F.bindTexture(F.TEXTURE_2D,He),F.texImage2D(F.TEXTURE_2D,0,F.RGBA,F.RGBA,F.UNSIGNED_BYTE,at);let tt=new Map(Ve.map((it,_t)=>[it,_t])),ft=De.map(it=>tt.get(it)).filter(it=>it!==void 0),nt=ft.length!==oe.length||ft.some((it,_t)=>it!==oe[_t]);oe=ft.length?ft:[0];let vt=et!==se.cellW||$e!==se.cellH;return se.cellW=et,se.cellH=$e,se.atlasColumns=Ke,!w.has(H)&&document.fonts?.load&&(w.add(H),document.fonts.load(H,O.characters).then(()=>{Ye&&(de="",K())}).catch(()=>{})),{resized:vt,charsChanged:nt}},Ot=(O,Q,H,De)=>{let Ve=(O+.5)/H-.5,Ie=(Q+.5)/De-.5,Me=Math.min(1,Math.hypot(Ve,Ie*.8)*1.6);return Op*(.3*Me+.7*Math.random()**1.3)},$t=()=>{let O=Math.ceil(q.width/se.cellW)+1,Q=Math.ceil(q.height/se.cellH)+1;if(se.originX=Math.floor((q.width-O*se.cellW)/2),se.originY=Math.floor((q.height-Q*se.cellH)/2),O===se.cols&&Q===se.rows)return;let H=O*Q,De=new Uint8Array(H*4),Ve=new Float32Array(H),Ie=new Float32Array(H),Me=new Float32Array(H),et=Math.floor((se.cols-O)/2),$e=Math.floor((se.rows-Q)/2);for(let Ke=0;Ke<Q;Ke++)for(let Je=0;Je<O;Je++){let tt=Ke*O+Je,ft=Je+et,nt=Ke+$e;if(ft>=0&&nt>=0&&ft<se.cols&&nt<se.rows){let vt=nt*se.cols+ft;De[tt*4]=ie[vt*4],De[tt*4+1]=ie[vt*4+1],Ve[tt]=Y[vt],Ie[tt]=We[vt],Me[tt]=Pe[vt]}else De[tt*4]=Qe(),Ve[tt]=Math.random(),Ie[tt]=.55+.45*Math.random(),Me[tt]=he?Ot(Je,Ke,O,Q):-1}se.cols=O,se.rows=Q,ve=H,ie=De,Y=Ve,We=Ie,Pe=Me,Se=new Float32Array(H),b=new Float32Array(H),x=new Float32Array(H),N=new Float32Array(H),j=new Float32Array(H),fe=new Float32Array(H),Oe=new Int32Array(H).fill(-1),Be=new Int32Array(H),z=0,Re.length=0;for(let Ke=0;Ke<H;Ke++)ie[Ke*4+1]=Pe[Ke]>=0?0:dt(Ke);ze=X.current.density,F.bindTexture(F.TEXTURE_2D,je),F.texImage2D(F.TEXTURE_2D,0,F.RGBA8,O,Q,0,F.RGBA,F.UNSIGNED_BYTE,ie),Ae=!1},Mn=()=>{let O=X.current,Q=`${O.fontSize*me.ratio}|${O.fontFamily}|${O.spacing}|${O.characters}`;if(Q===de)return;de=Q;let{resized:H,charsChanged:De}=en();if((H||!se.cols)&&$t(),De){for(let Ve=0;Ve<ve;Ve++)ie[Ve*4]=Qe();Ae=!0}},jn=()=>{let O=X.current,Q=O.colors.join(",");if(Q!==ee){ee=Q,le=Math.max(1,O.colors.length);for(let H=0;H<Ec;H++){let De=Fe(O.colors[Math.min(H,le-1)]??"#ffffff");re[H*3]=De[0],re[H*3+1]=De[1],re[H*3+2]=De[2]}for(let H=0;H<ve;H++)ie[H*4+3]>=le&&(ie[H*4+3]=xt());Ae=!0}},Gt=O=>{Re.length<zp&&Re.push({carry:0,after:0,wiggle:0,branch:0,...O})},Sn=(O,Q)=>{let H=Lt(O,Q);if(H<0)return;let De=Math.floor(H/se.cols),Ve=se.cols*se.cellW;for(let Ie=-2;Ie<=2;Ie++){let Me=De+Ie;if(Me<0||Me>=se.rows)continue;let et=1-Math.abs(Ie)/3;if(Ie!==0&&Math.random()>.3+.6*et)continue;let $e=xt(),Ke=se.originY+(Me+.5)*se.cellH,Je=(Math.random()-.5)*6*se.cellW*(1-et);[0,Math.PI].forEach(tt=>{let ft=Ve*(.12+.5*et*(.4+.6*Math.random()));Gt({x:O+Je,y:Ke,angle:tt,life:ft,span:ft,speed:(2200+Math.random()*1200)*me.ratio,after:Math.abs(Ie)*.035+Math.random()*.03,color:$e})})}},zn=(O,Q)=>{let H=Math.min(me.width,me.height)*me.ratio,De=5+(Math.random()*3|0),Ve=Math.random()*Math.PI*2;for(let Ie=0;Ie<De;Ie++){let Me=H*(.25+Math.random()*.3);Gt({x:O,y:Q,angle:Ve+Ie/De*Math.PI*2+(Math.random()-.5)*.4,life:Me,span:Me,speed:(700+Math.random()*400)*me.ratio,wiggle:.2,branch:.03,color:xt()})}},pn=(O,Q)=>{let H=Lt(O,Q);H<0||(Ct(H,1,.08,.8,xt()),X.current.clickEffect==="burst"?zn(O,Q):Sn(O,Q))},Cn=O=>{for(let Q=Re.length-1;Q>=0;Q--){let H=Re[Q];if(H.after>0){H.after-=O;continue}let De=Math.max(1,Math.abs(Math.cos(H.angle))*se.cellW+Math.abs(Math.sin(H.angle))*se.cellH*.6);for(H.carry+=H.speed*O;H.carry>=De&&H.life>0;){H.carry-=De,H.life-=De,H.angle+=(Math.random()-.5)*H.wiggle,H.x+=Math.cos(H.angle)*De,H.y+=Math.sin(H.angle)*De;let Ve=Lt(H.x,H.y);if(Ve<0){H.life=0;break}let Ie=H.life/H.span;if(Ct(Ve,.5+.5*Ie,.03+Math.random()*.05,.5+.5*Ie,H.color),H.branch&&Math.random()<H.branch){let Me=Math.random()<.5?-1:1,et=H.life*(.45+Math.random()*.3);Gt({x:H.x,y:H.y,angle:H.angle+Me*(.5+Math.random()*.5),life:et,span:H.span,speed:H.speed,wiggle:H.wiggle,color:H.color})}}H.life<=0&&Re.splice(Q,1)}},mn=O=>{let Q=X.current;if(ge||Q.speed<=0||!ve)return;Ze+=ve*Bp*Q.speed*O;let H=Math.min(ve,Ze|0);for(Ze-=H;H-- >0;){let Ie=Math.random()*ve|0;Oe[Ie]<0&&(ie[Ie*4]=Qe(),Ae=!0)}let De=Math.max(Q.speed,.2);P+=ve*Q.glitchAmount**1.6*kp*Q.speed*O;let Ve=Math.min(ve,P|0);for(P-=Ve;Ve-- >0;){let Ie=Math.random()*ve|0,Me=xt(),et=.45+.55*Math.random(),$e=(.04+Math.random()*.26)/De,Ke=(.45+Math.random()*.6)/De,Je=Math.random();if(Je<.24){let tt=Ie%se.cols,ft=Je<.015,nt=Math.min(se.cols-tt,ft?10+(Math.random()*24|0):2+(Math.random()*7|0)),vt=(ft?.012:.028)/De;for(let it=0;it<nt;it++)Ct(Ie+it,et,$e,Ke,Me,it*vt)}else Ct(Ie,et,$e,Ke,Me)}},Qn=O=>{let Q=X.current;if(ae.presence<.02||ge||!ve)return;let H=Q.cursorRadius*me.ratio;if(H<1)return;let De=Math.max(0,Math.floor((ae.sx-H-se.originX)/se.cellW)),Ve=Math.min(se.cols-1,Math.floor((ae.sx+H-se.originX)/se.cellW)),Ie=Math.max(0,Math.floor((ae.sy-H-se.originY)/se.cellH)),Me=Math.min(se.rows-1,Math.floor((ae.sy+H-se.originY)/se.cellH)),et=ae.presence*(3+9*ae.stir)*O;for(let Je=Ie;Je<=Me;Je++){let tt=(se.originY+(Je+.5)*se.cellH-ae.sy)/H;for(let ft=De;ft<=Ve;ft++){let nt=(se.originX+(ft+.5)*se.cellW-ae.sx)/H,vt=nt*nt+tt*tt;if(vt>=1)continue;let it=Je*se.cols+ft;Oe[it]<0&&Math.random()<(1-vt)*(1-vt)*et&&(ie[it*4]=Qe(),Ae=!0)}}let $e=Math.PI*H*H/(se.cellW*se.cellH);Le+=$e*ae.presence*(.15+4*ae.stir)*O;let Ke=Math.min(512,Le|0);for(Le-=Ke;Ke-- >0;){let Je=Math.random()*Math.PI*2,tt=Math.sqrt(Math.random()),ft=(1-tt*tt)**2;if(Math.random()>ft)continue;let nt=Lt(ae.sx+Math.cos(Je)*tt*H,ae.sy+Math.sin(Je)*tt*H);nt<0||Ct(nt,(.3+.7*Math.random())*(.45+.55*ae.stir),.02+Math.random()*.08,.35+Math.random()*.4,xt())}},ei=O=>{let Q=X.current,H=Math.max(Q.speed,.5),De=1-Math.exp(-O/.05);for(let Ve=0;Ve<z;){let Ie=Be[Ve];if(fe[Ie]>0){fe[Ie]-=O,Ve++;continue}let Me=Se[Ie];if(x[Ie]>0?(x[Ie]-=O,Me=Q.smooth?Me+(b[Ie]-Me)*De:b[Ie]):Me=Q.smooth?Me*Math.exp(-O*4/Math.max(N[Ie],.05)):0,Me<.012&&x[Ie]<=0){Ni(Ve),Ae=!0;continue}Se[Ie]=Me,j[Ie]-=O,j[Ie]<=0&&(ie[Ie*4]=Qe(),j[Ie]=(.045+.45*(1-Me)*(1-Me))*(.6+.8*Math.random())/H),ie[Ie*4+2]=Math.round(Me*255),Ae=!0,Ve++}},Rn=O=>{if(!he)return;let Q=X.current,H=!1;for(let De=0;De<ve;De++){let Ve=Pe[De];if(Ve<0)continue;let Ie=Ne-Ve;if(Ie<0){H=!0;continue}Ie<O&&Math.random()<(Y[De]<Q.density?.45:.12)&&Ct(De,.4+.5*Math.random(),.02,.35+Math.random()*.35,xt());let Me=Q.smooth?Gp(Ie/.35):1;ie[De*4+1]=dt(De,Me),Me>=1?Pe[De]=-1:H=!0}Ae=!0,H||(he=!1)},k=O=>{if(Te=0,xe&&(xe=!1,v()),!pe||document.hidden)return;let Q=X.current,H=we?Dn((O-we)/1e3,5e-4,.05):1/60;if(we=O,Ne+=H,ge||(L+=H*Q.speed),Mn(),jn(),Q.density!==ze){ze=Q.density;for(let Ke=0;Ke<ve;Ke++)Pe[Ke]<0&&(ie[Ke*4+1]=dt(Ke));Ae=!0}let De=Q.interactive&&ae.inside&&!ge?1:0;ae.presence+=(De-ae.presence)*(1-Math.exp(-H/.25)),Math.abs(De-ae.presence)<.002&&(ae.presence=De);let Ve=ae.sx,Ie=ae.sy,Me=1-Math.exp(-H/.07);ae.sx+=(ae.x-ae.sx)*Me,ae.sy+=(ae.y-ae.sy)*Me;let et=Math.hypot(ae.sx-Ve,ae.sy-Ie)/me.ratio/H;if(ae.stir+=(Dn(et/1400,0,1)-ae.stir)*(1-Math.exp(-H/.12)),ae.stir<.001&&(ae.stir=0),Rn(H),mn(H),Qn(H),Cn(H),ei(H),F.viewport(0,0,q.width,q.height),F.disable(F.BLEND),F.useProgram(be.program),F.bindVertexArray(Ee),F.activeTexture(F.TEXTURE1),F.bindTexture(F.TEXTURE_2D,je),Ae&&(F.texSubImage2D(F.TEXTURE_2D,0,0,0,se.cols,se.rows,F.RGBA,F.UNSIGNED_BYTE,ie),Ae=!1),F.uniform1i(Z.uState,1),F.activeTexture(F.TEXTURE0),F.bindTexture(F.TEXTURE_2D,He),F.uniform1i(Z.uAtlas,0),F.uniform2i(Z.uCell,se.cellW,se.cellH),F.uniform2i(Z.uGrid,se.cols,se.rows),F.uniform1i(Z.uAtlasColumns,se.atlasColumns),F.uniform2f(Z.uResolution,q.width,q.height),F.uniform2f(Z.uOrigin,se.originX,se.originY),F.uniform3fv(Z.uBase,Fe(Q.baseColor)),F.uniform1f(Z.uBaseOpacity,Q.baseOpacity),F.uniform3fv(Z.uColors,re),F.uniform1f(Z.uEdge,Q.edgeFade*Math.min(q.width,q.height)),F.uniform1f(Z.uCenter,Q.centerFade),F.uniform2f(Z.uPointer,ae.sx,ae.sy),F.uniform1f(Z.uRadius,Math.max(1,Q.cursorRadius*me.ratio)),F.uniform1f(Z.uPresence,ae.presence),F.uniform1f(Z.uReveal,Math.min(1,Q.baseOpacity*3.5)),F.uniform1f(Z.uTime,L),F.uniform1f(Z.uFlow,Q.flow),F.uniform1f(Z.uFlowScale,Math.max(q.width,q.height)*.32),Q.backgroundColor){let[Ke,Je,tt]=Fe(Q.backgroundColor);F.uniform4f(Z.uBackground,Ke,Je,tt,1)}else F.uniform4f(Z.uBackground,0,0,0,0);F.drawArrays(F.TRIANGLES,0,3),!ge&&Q.speed>0||z>0||Re.length>0||he||ae.presence!==0&&ae.presence!==1||ae.stir>0?Te=requestAnimationFrame(k):we=0};function K(){!Te&&pe&&!document.hidden&&(Te=requestAnimationFrame(k))}let xe=!1,v=()=>{let O=X.current;me.width=Math.max(1,ne.clientWidth),me.height=Math.max(1,ne.clientHeight),me.ratio=Math.min(O.dpr||window.devicePixelRatio||1,2),q.width=Math.max(1,Math.round(me.width*me.ratio)),q.height=Math.max(1,Math.round(me.height*me.ratio)),Mn(),se.cols&&$t()},D=()=>{xe=!0,K()},V=O=>{let Q=ne.getBoundingClientRect(),H=O.clientX-Q.left,De=O.clientY-Q.top;ae.inside=H>=0&&De>=0&&H<=Q.width&&De<=Q.height,ae.x=H*me.ratio,ae.y=De*me.ratio,(ae.fresh||ae.presence<.02)&&(ae.sx=ae.x,ae.sy=ae.y,ae.fresh=!1)},G=O=>{V(O),K()},S=O=>{V(O);let Q=X.current;!ae.inside||Q.clickEffect==="none"||ge||!ve||(pn(ae.x,ae.y),K())},J=O=>{O.pointerType!=="mouse"&&(ae.inside=!1)},te=()=>{ae.inside=!1,K()},ye=()=>{we=0,K()},ue=()=>{de="",K()},Ge=new ResizeObserver(D);Ge.observe(ne);let ke=new IntersectionObserver(O=>{pe=O.some(Q=>Q.isIntersecting),pe&&(we=0,K())});return ke.observe(ne),window.addEventListener("pointermove",G,{passive:!0}),window.addEventListener("pointerdown",S,{passive:!0}),window.addEventListener("pointerup",J,{passive:!0}),window.addEventListener("pointercancel",J,{passive:!0}),document.documentElement.addEventListener("pointerleave",te),document.addEventListener("visibilitychange",ye),document.fonts?.addEventListener?.("loadingdone",ue),D(),y.current=K,()=>{Ye=!1,cancelAnimationFrame(Te),y.current=null,Ge.disconnect(),ke.disconnect(),window.removeEventListener("pointermove",G),window.removeEventListener("pointerdown",S),window.removeEventListener("pointerup",J),window.removeEventListener("pointercancel",J),document.documentElement.removeEventListener("pointerleave",te),document.removeEventListener("visibilitychange",ye),document.fonts?.removeEventListener?.("loadingdone",ue),F.deleteTexture(He),F.deleteTexture(je),F.deleteVertexArray(Ee),F.deleteProgram(be.program),q.isConnected||F.getExtension("WEBGL_lose_context")?.loseContext()}},[]),Zt(()=>{y.current?.()}),React.createElement("div",{ref:W,className:`letter-glitch${U?` ${U}`:""}`,style:C,...I},React.createElement("canvas",{ref:E,className:"letter-glitch-canvas","aria-hidden":"true"}))},Qu=Xp;var Eh=0,dl=1,Th=2;var fl=1,Ah=2,Yn=3,li=0,an=1,bn=2,$n=0,Hi=1,pl=2,ml=3,gl=4,Ch=5,wi=100,Rh=101,Ih=102,Ph=103,Lh=104,Dh=200,Nh=201,Uh=202,Fh=203,Ta=204,Aa=205,Oh=206,Bh=207,kh=208,zh=209,Vh=210,Hh=211,Gh=212,Wh=213,Xh=214,eo=0,to=1,no=2,Gi=3,io=4,so=5,ro=6,ao=7,xl=0,qh=1,Yh=2,hi=0,$h=1,Zh=2,Kh=3,Jh=4,jh=5,Qh=6,oo=7;var _l=300,Ji=301,ji=302,co=303,lo=304,Dr=306,Xn=1e3,En=1001,Ca=1002,hn=1003,ed=1004;var Nr=1005;var nn=1006,uo=1007;var Zn=1008;var kn=1009,vl=1010,yl=1011,Hs=1012,ho=1013,Pi=1014,Kn=1015,Qi=1016,fo=1017,po=1018,Gs=1020,bl=35902,Ml=35899,Sl=1021,wl=1022,An=1023,ws=1026,Ws=1027,El=1028,mo=1029,go=1030,xo=1031;var _o=1033,Ur=33776,Fr=33777,Or=33778,Br=33779,vo=35840,yo=35841,bo=35842,Mo=35843,So=36196,wo=37492,Eo=37496,To=37808,Ao=37809,Co=37810,Ro=37811,Io=37812,Po=37813,Lo=37814,Do=37815,No=37816,Uo=37817,Fo=37818,Oo=37819,Bo=37820,ko=37821,zo=36492,Vo=36494,Ho=36495,Go=36283,Wo=36284,Xo=36285,qo=36286;var ur=2300,Ra=2301,Ea=2302,Qc=2400,el=2401,tl=2402;var td=3200,nd=3201;var Tl=0,id=1,di="",qt="srgb",Wi="srgb-linear",hr="linear",Mt="srgb";var Vi=7680;var nl=519,sd=512,rd=513,ad=514,Al=515,od=516,cd=517,ld=518,ud=519,il=35044;var Cl="300 es",On=2e3,dr=2001;function Rl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hd(){let i=fr("canvas");return i.style.display="block",i}var eh={},Es=null;function Il(...i){let e="THREE."+i.shift();Es?Es("log",e,...i):console.log(e,...i)}function ot(...i){let e="THREE."+i.shift();Es?Es("warn",e,...i):console.warn(e,...i)}function mt(...i){let e="THREE."+i.shift();Es?Es("error",e,...i):console.error(e,...i)}function Ts(...i){let e=i.join(" ");e in eh||(eh[e]=!0,ot(...i))}function dd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Tc=Math.PI/180,Ia=180/Math.PI;function Xs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function qp(i,e){return(i%e+e)%e}function Ac(i,e,t){return(1-t)*i+t*e}function nr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==m){let g=l*d+c*f+u*m+h*_;g<0&&(d=-d,f=-f,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){let A=Math.acos(g),M=Math.sin(A);p=Math.sin(p*A)/M,o=Math.sin(o*A)/M,l=l*p+d*o,c=c*p+f*o,u=u*p+m*o,h=h*p+_*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+m*o,h=h*p+_*o;let A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-o*f,e[t+2]=c*m+u*f+o*d-l*h,e[t+3]=u*m-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cc=new B,th=new dn,lt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],A=s[1],M=s[4],T=s[7],U=s[2],C=s[5],I=s[8];return r[0]=a*_+o*A+l*U,r[3]=a*g+o*M+l*C,r[6]=a*p+o*T+l*I,r[1]=c*_+u*A+h*U,r[4]=c*g+u*M+h*C,r[7]=c*p+u*T+h*I,r[2]=d*_+f*A+m*U,r[5]=d*g+f*M+m*C,r[8]=d*p+f*T+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,m=t*h+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Rc.makeScale(e,t)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rc=new lt,nh=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ih=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yp(){let i={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wi]:{primaries:e,whitePoint:n,transfer:hr,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var bt=Yp();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hs,Pa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hs===void 0&&(hs=fr("canvas")),hs.width=e.width,hs.height=e.height;let s=hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$p=0,As=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ic(s[a].image)):r.push(Ic(s[a]))}else r=Ic(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ic(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}var Zp=0,Pc=new B,sn=class i extends ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=En,s=En,r=nn,a=Zn,o=An,l=kn,c=i.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Xs(),this.name="",this.source=new As(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pc).x}get height(){return this.source.getSize(Pc).y}get depth(){return this.source.getSize(Pc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=_l;sn.DEFAULT_ANISOTROPY=1;var Nt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,T=(f+1)/2,U=(p+1)/2,C=(u+d)/4,I=(h+_)/4,W=(m+g)/4;return M>T&&M>U?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=C/n,r=I/n):T>U?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=C/s,r=W/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=I/r,s=W/r),this.set(n,s,r,t),this}let A=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(g-m)/A,this.y=(h-_)/A,this.z=(d-u)/A,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},La=class extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new sn(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new As(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends La{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pr=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ei=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(e.matrixWorld),this.union(sa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ra.subVectors(this.max,ir),ds.subVectors(e.a,ir),fs.subVectors(e.b,ir),ps.subVectors(e.c,ir),xi.subVectors(fs,ds),_i.subVectors(ps,fs),Oi.subVectors(ds,ps);let t=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-Oi.z,Oi.y,xi.z,0,-xi.x,_i.z,0,-_i.x,Oi.z,0,-Oi.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-Oi.y,Oi.x,0];return!Lc(t,ds,fs,ps,ra)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,ds,fs,ps,ra))?!1:(aa.crossVectors(xi,_i),t=[aa.x,aa.y,aa.z],Lc(t,ds,fs,ps,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ii=[new B,new B,new B,new B,new B,new B,new B,new B],Nn=new B,sa=new Ei,ds=new B,fs=new B,ps=new B,xi=new B,_i=new B,Oi=new B,ir=new B,ra=new B,aa=new B,Bi=new B;function Lc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Bi.fromArray(i,r);let o=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),u=n.dot(Bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Kp=new Ei,sr=new B,Dc=new B,Cs=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);let t=sr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Dc)),this.expandByPoint(sr.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},si=new B,Nc=new B,oa=new B,vi=new B,Uc=new B,ca=new B,Fc=new B,mr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Nc.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Nc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(oa),o=vi.dot(this.direction),l=-vi.dot(oa),c=vi.lengthSq(),u=Math.abs(1-a*a),h,d,f,m;if(u>0)if(h=a*l-o,d=a*o-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Nc).addScaledVector(oa,d),f}intersectSphere(e,t){si.subVectors(e.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,s,r){Uc.subVectors(t,e),ca.subVectors(n,e),Fc.crossVectors(Uc,ca);let a=this.direction.dot(Fc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,e);let l=o*this.direction.dot(ca.crossVectors(vi,ca));if(l<0)return null;let c=o*this.direction.dot(Uc.cross(vi));if(c<0||l+c>a)return null;let u=-o*vi.dot(Fc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,m,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,m,_,g)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),a=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jp,e,jp)}lookAt(e,t,n){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),yi.crossVectors(n,xn),yi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),yi.crossVectors(n,xn)),yi.normalize(),la.crossVectors(xn,yi),s[0]=yi.x,s[4]=la.x,s[8]=xn.x,s[1]=yi.y,s[5]=la.y,s[9]=xn.y,s[2]=yi.z,s[6]=la.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],A=n[3],M=n[7],T=n[11],U=n[15],C=s[0],I=s[4],W=s[8],E=s[12],y=s[1],R=s[5],$=s[9],X=s[13],ne=s[2],q=s[6],F=s[10],be=s[14],Z=s[3],Ee=s[7],Ce=s[11],He=s[15];return r[0]=a*C+o*y+l*ne+c*Z,r[4]=a*I+o*R+l*q+c*Ee,r[8]=a*W+o*$+l*F+c*Ce,r[12]=a*E+o*X+l*be+c*He,r[1]=u*C+h*y+d*ne+f*Z,r[5]=u*I+h*R+d*q+f*Ee,r[9]=u*W+h*$+d*F+f*Ce,r[13]=u*E+h*X+d*be+f*He,r[2]=m*C+_*y+g*ne+p*Z,r[6]=m*I+_*R+g*q+p*Ee,r[10]=m*W+_*$+g*F+p*Ce,r[14]=m*E+_*X+g*be+p*He,r[3]=A*C+M*y+T*ne+U*Z,r[7]=A*I+M*R+T*q+U*Ee,r[11]=A*W+M*$+T*F+U*Ce,r[15]=A*E+M*X+T*be+U*He,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+g*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],A=h*g*c-_*d*c+_*l*f-o*g*f-h*l*p+o*d*p,M=m*d*c-u*g*c-m*l*f+a*g*f+u*l*p-a*d*p,T=u*_*c-m*h*c+m*o*f-a*_*f-u*o*p+a*h*p,U=m*h*l-u*_*l-m*o*d+a*_*d+u*o*g-a*h*g,C=t*A+n*M+s*T+r*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return e[0]=A*I,e[1]=(_*d*r-h*g*r-_*s*f+n*g*f+h*s*p-n*d*p)*I,e[2]=(o*g*r-_*l*r+_*s*c-n*g*c-o*s*p+n*l*p)*I,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*f-n*l*f)*I,e[4]=M*I,e[5]=(u*g*r-m*d*r+m*s*f-t*g*f-u*s*p+t*d*p)*I,e[6]=(m*l*r-a*g*r-m*s*c+t*g*c+a*s*p-t*l*p)*I,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*I,e[8]=T*I,e[9]=(m*h*r-u*_*r-m*n*f+t*_*f+u*n*p-t*h*p)*I,e[10]=(a*_*r-m*o*r+m*n*c-t*_*c-a*n*p+t*o*p)*I,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*I,e[12]=U*I,e[13]=(u*_*s-m*h*s+m*n*d-t*_*d-u*n*g+t*h*g)*I,e[14]=(m*o*s-a*_*s-m*n*l+t*_*l+a*n*g-t*o*g)*I,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,m=r*h,_=a*u,g=a*h,p=o*h,A=l*c,M=l*u,T=l*h,U=n.x,C=n.y,I=n.z;return s[0]=(1-(_+p))*U,s[1]=(f+T)*U,s[2]=(m-M)*U,s[3]=0,s[4]=(f-T)*C,s[5]=(1-(d+p))*C,s[6]=(g+A)*C,s[7]=0,s[8]=(m+M)*I,s[9]=(g-A)*I,s[10]=(1-(d+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ms.set(s[0],s[1],s[2]).length(),a=ms.set(s[4],s[5],s[6]).length(),o=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);let c=1/r,u=1/a,h=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,t.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=On,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===On)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===dr)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=On,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===On)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===dr)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ms=new B,Un=new It,Jp=new B(0,0,0),jp=new B(1,1,1),yi=new B,la=new B,xn=new B,sh=new It,rh=new dn,Bn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rh.setFromEuler(this),this.setFromQuaternion(rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var Rs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qp=0,ah=new B,gs=new dn,ri=new It,ua=new B,rr=new B,em=new B,tm=new dn,oh=new B(1,0,0),ch=new B(0,1,0),lh=new B(0,0,1),uh={type:"added"},nm={type:"removed"},xs={type:"childadded",child:null},Oc={type:"childremoved",child:null},rn=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new Bn,n=new dn,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new lt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(oh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(lh,e)}translateOnAxis(e,t){return ah.copy(e).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ua.copy(e):ua.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(rr,ua,this.up):ri.lookAt(ua,rr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(ri),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uh),xs.child=e,this.dispatchEvent(xs),xs.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nm),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uh),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,tm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};rn.DEFAULT_UP=new B(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new B,ai=new B,Bc=new B,oi=new B,_s=new B,vs=new B,hh=new B,kc=new B,zc=new B,Vc=new B,Hc=new Nt,Gc=new Nt,Wc=new Nt,Si=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),ai.subVectors(n,t),Bc.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(ai),l=Fn.dot(Bc),c=ai.dot(ai),u=ai.dot(Bc),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Hc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Hc.fromBufferAttribute(e,t),Gc.fromBufferAttribute(e,n),Wc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Hc,r.x),a.addScaledVector(Gc,r.y),a.addScaledVector(Wc,r.z),a}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),ai.subVectors(e,t),Fn.cross(ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Fn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;_s.subVectors(s,n),vs.subVectors(r,n),kc.subVectors(e,n);let l=_s.dot(kc),c=vs.dot(kc);if(l<=0&&c<=0)return t.copy(n);zc.subVectors(e,s);let u=_s.dot(zc),h=vs.dot(zc);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(_s,a);Vc.subVectors(e,r);let f=_s.dot(Vc),m=vs.dot(Vc);if(m>=0&&f<=m)return t.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(vs,o);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return hh.subVectors(r,s),o=(h-u)/(h-u+(f-m)),t.copy(s).addScaledVector(hh,o);let p=1/(g+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(_s,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Xc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ht=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=qp(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Xc(a,r,e+1/3),this.g=Xc(a,r,e),this.b=Xc(a,r,e-1/3)}return bt.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=fd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return bt.workingToColorSpace(Jt.copy(this),e),Math.round(gt(Jt.r*255,0,255))*65536+Math.round(gt(Jt.g*255,0,255))*256+Math.round(gt(Jt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=qt){bt.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(ha);let n=Ac(bi.h,ha.h,t),s=Ac(bi.s,ha.s,t),r=Ac(bi.l,ha.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new ht;ht.NAMES=fd;var im=0,Ti=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Hi,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xi=class extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new B,da=new Ue,sm=0,Yt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=il,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==il&&(e.usage=this.usage),e}};var gr=class extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xr=class extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Xt=class extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},rm=0,wn=new It,qc=new rn,ys=new B,_n=new Ei,ar=new Ei,Wt=new B,fn=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rl(e)?xr:gr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(_n.min,ar.min),_n.expandByPoint(Wt),Wt.addVectors(_n.max,ar.max),_n.expandByPoint(Wt)):(_n.expandByPoint(ar.min),_n.expandByPoint(ar.max))}_n.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Wt.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(e,c),Wt.add(ys)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let W=0;W<n.count;W++)o[W]=new B,l[W]=new B;let c=new B,u=new B,h=new B,d=new Ue,f=new Ue,m=new Ue,_=new B,g=new B;function p(W,E,y){c.fromBufferAttribute(n,W),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,W),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),m.sub(d);let R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(R),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(R),o[W].add(_),o[E].add(_),o[y].add(_),l[W].add(g),l[E].add(g),l[y].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let W=0,E=A.length;W<E;++W){let y=A[W],R=y.start,$=y.count;for(let X=R,ne=R+$;X<ne;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let M=new B,T=new B,U=new B,C=new B;function I(W){U.fromBufferAttribute(s,W),C.copy(U);let E=o[W];M.copy(E),M.sub(U.multiplyScalar(U.dot(E))).normalize(),T.crossVectors(C,E);let R=T.dot(l[W])<0?-1:1;a.setXYZW(W,M.x,M.y,M.z,R)}for(let W=0,E=A.length;W<E;++W){let y=A[W],R=y.start,$=y.count;for(let X=R,ne=R+$;X<ne;X+=3)I(e.getX(X+0)),I(e.getX(X+1)),I(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new Yt(d,u,h)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dh=new It,ki=new mr,fa=new Cs,fh=new B,pa=new B,ma=new B,ga=new B,Yc=new B,xa=new B,ph=new B,_a=new B,kt=class extends rn{constructor(e=new fn,t=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Yc.fromBufferAttribute(h,e),a?xa.addScaledVector(Yc,u):xa.addScaledVector(Yc.sub(t),u))}t.add(xa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(fa.containsPoint(ki.origin)===!1&&(ki.intersectSphere(fa,fh)===null||ki.origin.distanceToSquared(fh)>(e.far-e.near)**2))&&(dh.copy(r).invert(),ki.copy(e.ray).applyMatrix4(dh),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=a[g.materialIndex],A=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let T=A,U=M;T<U;T+=3){let C=o.getX(T),I=o.getX(T+1),W=o.getX(T+2);s=va(this,p,e,n,c,u,h,C,I,W),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let A=o.getX(g),M=o.getX(g+1),T=o.getX(g+2);s=va(this,a,e,n,c,u,h,A,M,T),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=a[g.materialIndex],A=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let T=A,U=M;T<U;T+=3){let C=T,I=T+1,W=T+2;s=va(this,p,e,n,c,u,h,C,I,W),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let A=g,M=g+1,T=g+2;s=va(this,a,e,n,c,u,h,A,M,T),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function am(i,e,t,n,s,r,a,o){let l;if(e.side===an?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===li,o),l===null)return null;_a.copy(o),_a.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(_a);return c<t.near||c>t.far?null:{distance:c,point:_a.clone(),object:i}}function va(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,pa),i.getVertexPosition(l,ma),i.getVertexPosition(c,ga);let u=am(i,e,t,n,pa,ma,ga,ph);if(u){let h=new B;Si.getBarycoord(ph,pa,ma,ga,h),s&&(u.uv=Si.getInterpolatedAttribute(s,o,l,c,h,new Ue)),r&&(u.uv1=Si.getInterpolatedAttribute(r,o,l,c,h,new Ue)),a&&(u.normal=Si.getInterpolatedAttribute(a,o,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new B,materialIndex:0};Si.getNormal(pa,ma,ga,d.normal),u.face=d,u.barycoord=h}return u}var Is=class i extends fn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(h,2));function m(_,g,p,A,M,T,U,C,I,W,E){let y=T/I,R=U/W,$=T/2,X=U/2,ne=C/2,q=I+1,F=W+1,be=0,Z=0,Ee=new B;for(let Ce=0;Ce<F;Ce++){let He=Ce*R-X;for(let je=0;je<q;je++){let rt=je*y-$;Ee[_]=rt*A,Ee[g]=He*M,Ee[p]=ne,c.push(Ee.x,Ee.y,Ee.z),Ee[_]=0,Ee[g]=0,Ee[p]=C>0?1:-1,u.push(Ee.x,Ee.y,Ee.z),h.push(je/I),h.push(1-Ce/W),be+=1}}for(let Ce=0;Ce<W;Ce++)for(let He=0;He<I;He++){let je=d+He+q*Ce,rt=d+He+q*(Ce+1),at=d+(He+1)+q*(Ce+1),st=d+(He+1)+q*Ce;l.push(je,rt,st),l.push(rt,at,st),Z+=6}o.addGroup(f,Z,E),f+=Z,d+=be}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function es(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qt(i){let e={};for(let t=0;t<i.length;t++){let n=es(i[t]);for(let s in n)e[s]=n[s]}return e}function om(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var pd={clone:es,merge:Qt},cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=om(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},_r=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mi=new B,mh=new Ue,gh=new Ue,jt=class extends _r{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,mh,gh),t.subVectors(gh,mh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Tc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bs=-90,Ms=1,Na=class extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(bs,Ms,e,t);s.layers=this.layers,this.add(s);let r=new jt(bs,Ms,e,t);r.layers=this.layers,this.add(r);let a=new jt(bs,Ms,e,t);a.layers=this.layers,this.add(a);let o=new jt(bs,Ms,e,t);o.layers=this.layers,this.add(o);let l=new jt(bs,Ms,e,t);l.layers=this.layers,this.add(l);let c=new jt(bs,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},vr=class extends sn{constructor(e=[],t=Ji,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ua=class extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new vr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Is(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:$n});r.uniforms.tEquirect.value=t;let a=new kt(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=nn),new Na(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Gn=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},um={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(um)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ls=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ds=class extends sn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=hn,u=hn,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $c=new B,hm=new B,dm=new lt,Hn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$c.subVectors(n,t).cross(hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($c),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dm.getNormalMatrix(e),s=this.coplanarPoint($c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new Cs,fm=new Ue(.5,.5),ya=new B,Ns=class{constructor(e=new Hn,t=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],A=r[12],M=r[13],T=r[14],U=r[15];if(s[0].setComponents(c-a,f-u,p-m,U-A).normalize(),s[1].setComponents(c+a,f+u,p+m,U+A).normalize(),s[2].setComponents(c+o,f+h,p+_,U+M).normalize(),s[3].setComponents(c-o,f-h,p-_,U-M).normalize(),n)s[4].setComponents(l,d,g,T).normalize(),s[5].setComponents(c-l,f-d,p-g,U-T).normalize();else if(s[4].setComponents(c-l,f-d,p-g,U-T).normalize(),t===On)s[5].setComponents(c+l,f+d,p+g,U+T).normalize();else if(t===dr)s[5].setComponents(l,d,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){zi.center.set(0,0,0);let t=fm.distanceTo(e.center);return zi.radius=.7071067811865476+t,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ya.x=s.normal.x>0?e.max.x:e.min.x,ya.y=s.normal.y>0?e.max.y:e.min.y,ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qi=class extends sn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},yr=class extends sn{constructor(e,t,n=Pi,s,r,a,o=hn,l=hn,c,u=ws,h=1){if(u!==ws&&u!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new As(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},br=class extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ot("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ue:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,s=[],r=[],a=[],o=new B,l=new It;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(gt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(gt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Us=class extends vn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ue){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fa=class extends Us{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ll(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ba=new B,Zc=new Ll,Kc=new Ll,Jc=new Ll,Fs=class extends vn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(ba.subVectors(s[0],s[1]).add(s[0]),c=ba);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ba.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ba),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Zc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,_,g),Kc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,_,g),Jc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(Zc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Kc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Jc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Zc.calc(l),Kc.calc(l),Jc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function pm(i,e){let t=1-i;return t*t*e}function mm(i,e){return 2*(1-i)*i*e}function gm(i,e){return i*i*e}function cr(i,e,t,n){return pm(i,e)+mm(i,t)+gm(i,n)}function xm(i,e){let t=1-i;return t*t*t*e}function _m(i,e){let t=1-i;return 3*t*t*i*e}function vm(i,e){return 3*(1-i)*i*i*e}function ym(i,e){return i*i*i*e}function lr(i,e,t,n,s){return xm(i,e)+_m(i,t)+vm(i,n)+ym(i,s)}var Mr=class extends vn{constructor(e=new Ue,t=new Ue,n=new Ue,s=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ue){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(e,s.x,r.x,a.x,o.x),lr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oa=class extends vn{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(e,s.x,r.x,a.x,o.x),lr(e,s.y,r.y,a.y,o.y),lr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sr=class extends vn{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends vn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends vn{constructor(e=new Ue,t=new Ue,n=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ue){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(e,s.x,r.x,a.x),cr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends vn{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(e,s.x,r.x,a.x),cr(e,s.y,r.y,a.y),cr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Er=class extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(xh(o,l.x,c.x,u.x,h.x),xh(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ue().fromArray(s))}return this}},sl=Object.freeze({__proto__:null,ArcCurve:Fa,CatmullRomCurve3:Fs,CubicBezierCurve:Mr,CubicBezierCurve3:Oa,EllipseCurve:Us,LineCurve:Sr,LineCurve3:Ba,QuadraticBezierCurve:wr,QuadraticBezierCurve3:ka,SplineCurve:Er}),za=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new sl[s.type]().fromJSON(s))}return this}},Yi=class extends za{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Sr(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new wr(this.currentPoint.clone(),new Ue(e,t),new Ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Mr(this.currentPoint.clone(),new Ue(e,t),new Ue(n,s),new Ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Er(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Us(e,t,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ai=class extends Yi{constructor(e){super(e),this.uuid=Xs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Yi().fromJSON(s))}return this}};function bm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=md(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Tm(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,h=l;for(let d=t;d<s;d+=t){let f=i[d],m=i[d+1];f<o&&(o=f),m<l&&(l=m),f>u&&(u=f),m>h&&(h=m)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return Tr(r,a,t,o,l,c,0),a}function md(i,e,t,n,s){let r;if(s===Om(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=_h(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=_h(a/n|0,i[a],i[a+1],r);return r&&Os(r,r.next)&&(Cr(r),r=r.next),r}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Os(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Cr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Tr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Pm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Sm(i,n,s,r):Mm(i)){e.push(l.i,i.i,c.i),Cr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=wm($i(i),e),Tr(i,e,t,n,s,r,2)):a===2&&Em(i,e,t,n,s,r):Tr($i(i),e,t,n,s,r,1);break}}}function Mm(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),h=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&or(s,o,r,l,a,c,m.x,m.y)&&Dt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Sm(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(u,h,d),_=Math.max(o,l,c),g=Math.max(u,h,d),p=rl(f,m,e,t,n),A=rl(_,g,e,t,n),M=i.prevZ,T=i.nextZ;for(;M&&M.z>=p&&T&&T.z<=A;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&or(o,u,l,h,c,d,M.x,M.y)&&Dt(M.prev,M,M.next)>=0||(M=M.prevZ,T.x>=f&&T.x<=_&&T.y>=m&&T.y<=g&&T!==s&&T!==a&&or(o,u,l,h,c,d,T.x,T.y)&&Dt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&or(o,u,l,h,c,d,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;T&&T.z<=A;){if(T.x>=f&&T.x<=_&&T.y>=m&&T.y<=g&&T!==s&&T!==a&&or(o,u,l,h,c,d,T.x,T.y)&&Dt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function wm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Os(n,s)&&xd(n,t,t.next,s)&&Ar(n,s)&&Ar(s,n)&&(e.push(n.i,t.i,s.i),Cr(t),Cr(t.next),t=i=s),t=t.next}while(t!==i);return $i(t)}function Em(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Nm(a,o)){let l=_d(a,o);a=$i(a,a.next),l=$i(l,l.next),Tr(a,e,t,n,s,r,0),Tr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Tm(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=md(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Dm(c))}s.sort(Am);for(let r=0;r<s.length;r++)t=Cm(s[r],t);return t}function Am(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Cm(i,e){let t=Rm(i,e);if(!t)return e;let n=_d(t,i);return $i(n,n.next),$i(t,t.next)}function Rm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Os(i,t))return t;do{if(Os(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&gd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);Ar(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Im(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Im(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function Pm(i,e,t,n){let s=i;do s.z===0&&(s.z=rl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lm(s)}function Lm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function rl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Dm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function gd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function or(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&gd(i,e,t,n,s,r,a,o)}function Nm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Um(i,e)&&(Ar(i,e)&&Ar(e,i)&&Fm(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||Os(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Os(i,e){return i.x===e.x&&i.y===e.y}function xd(i,e,t,n){let s=Sa(Dt(i,e,t)),r=Sa(Dt(i,e,n)),a=Sa(Dt(t,n,i)),o=Sa(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ma(i,t,e)||r===0&&Ma(i,n,e)||a===0&&Ma(t,i,n)||o===0&&Ma(t,e,n))}function Ma(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Sa(i){return i>0?1:i<0?-1:0}function Um(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&xd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ar(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function Fm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function _d(i,e){let t=al(i.i,i.x,i.y),n=al(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _h(i,e,t,n){let s=al(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function al(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Om(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ol=class{static triangulate(e,t,n=2){return bm(e,t,n)}},Wn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];vh(e),yh(n,e);let a=e.length;t.forEach(vh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,yh(n,t[l]);let o=ol.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function vh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function yh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Bs=class i extends fn{constructor(e=new Ai([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Xt(s,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:Bm,M,T=!1,U,C,I,W;p&&(M=p.getSpacedPoints(u),T=!0,d=!1,U=p.computeFrenetFrames(u,!1),C=new B,I=new B,W=new B),d||(g=0,f=0,m=0,_=0);let E=o.extractPoints(c),y=E.shape,R=E.holes;if(!Wn.isClockWise(y)){y=y.reverse();for(let re=0,w=R.length;re<w;re++){let oe=R[re];Wn.isClockWise(oe)&&(R[re]=oe.reverse())}}function X(re){let oe=10000000000000001e-36,de=re[0];for(let ee=1;ee<=re.length;ee++){let le=ee%re.length,ve=re[le],ie=ve.x-de.x,Se=ve.y-de.y,b=ie*ie+Se*Se,x=Math.max(Math.abs(ve.x),Math.abs(ve.y),Math.abs(de.x),Math.abs(de.y)),N=oe*x*x;if(b<=N){re.splice(le,1),ee--;continue}de=ve}}X(y),R.forEach(X);let ne=R.length,q=y;for(let re=0;re<ne;re++){let w=R[re];y=y.concat(w)}function F(re,w,oe){return w||mt("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(w,oe)}let be=y.length;function Z(re,w,oe){let de,ee,le,ve=re.x-w.x,ie=re.y-w.y,Se=oe.x-re.x,b=oe.y-re.y,x=ve*ve+ie*ie,N=ve*b-ie*Se;if(Math.abs(N)>Number.EPSILON){let j=Math.sqrt(x),fe=Math.sqrt(Se*Se+b*b),Y=w.x-ie/j,We=w.y+ve/j,Pe=oe.x-b/fe,Oe=oe.y+Se/fe,Be=((Pe-Y)*b-(Oe-We)*Se)/(ve*b-ie*Se);de=Y+ve*Be-re.x,ee=We+ie*Be-re.y;let z=de*de+ee*ee;if(z<=2)return new Ue(de,ee);le=Math.sqrt(z/2)}else{let j=!1;ve>Number.EPSILON?Se>Number.EPSILON&&(j=!0):ve<-Number.EPSILON?Se<-Number.EPSILON&&(j=!0):Math.sign(ie)===Math.sign(b)&&(j=!0),j?(de=-ie,ee=ve,le=Math.sqrt(x)):(de=ve,ee=ie,le=Math.sqrt(x/2))}return new Ue(de/le,ee/le)}let Ee=[];for(let re=0,w=q.length,oe=w-1,de=re+1;re<w;re++,oe++,de++)oe===w&&(oe=0),de===w&&(de=0),Ee[re]=Z(q[re],q[oe],q[de]);let Ce=[],He,je=Ee.concat();for(let re=0,w=ne;re<w;re++){let oe=R[re];He=[];for(let de=0,ee=oe.length,le=ee-1,ve=de+1;de<ee;de++,le++,ve++)le===ee&&(le=0),ve===ee&&(ve=0),He[de]=Z(oe[de],oe[le],oe[ve]);Ce.push(He),je=je.concat(He)}let rt;if(g===0)rt=Wn.triangulateShape(q,R);else{let re=[],w=[];for(let oe=0;oe<g;oe++){let de=oe/g,ee=f*Math.cos(de*Math.PI/2),le=m*Math.sin(de*Math.PI/2)+_;for(let ve=0,ie=q.length;ve<ie;ve++){let Se=F(q[ve],Ee[ve],le);ge(Se.x,Se.y,-ee),de===0&&re.push(Se)}for(let ve=0,ie=ne;ve<ie;ve++){let Se=R[ve];He=Ce[ve];let b=[];for(let x=0,N=Se.length;x<N;x++){let j=F(Se[x],He[x],le);ge(j.x,j.y,-ee),de===0&&b.push(j)}de===0&&w.push(b)}}rt=Wn.triangulateShape(re,w)}let at=rt.length,st=m+_;for(let re=0;re<be;re++){let w=d?F(y[re],je[re],st):y[re];T?(I.copy(U.normals[0]).multiplyScalar(w.x),C.copy(U.binormals[0]).multiplyScalar(w.y),W.copy(M[0]).add(I).add(C),ge(W.x,W.y,W.z)):ge(w.x,w.y,0)}for(let re=1;re<=u;re++)for(let w=0;w<be;w++){let oe=d?F(y[w],je[w],st):y[w];T?(I.copy(U.normals[re]).multiplyScalar(oe.x),C.copy(U.binormals[re]).multiplyScalar(oe.y),W.copy(M[re]).add(I).add(C),ge(W.x,W.y,W.z)):ge(oe.x,oe.y,h/u*re)}for(let re=g-1;re>=0;re--){let w=re/g,oe=f*Math.cos(w*Math.PI/2),de=m*Math.sin(w*Math.PI/2)+_;for(let ee=0,le=q.length;ee<le;ee++){let ve=F(q[ee],Ee[ee],de);ge(ve.x,ve.y,h+oe)}for(let ee=0,le=R.length;ee<le;ee++){let ve=R[ee];He=Ce[ee];for(let ie=0,Se=ve.length;ie<Se;ie++){let b=F(ve[ie],He[ie],de);T?ge(b.x,b.y+M[u-1].y,M[u-1].x+oe):ge(b.x,b.y,h+oe)}}}ce(),_e();function ce(){let re=s.length/3;if(d){let w=0,oe=be*w;for(let de=0;de<at;de++){let ee=rt[de];me(ee[2]+oe,ee[1]+oe,ee[0]+oe)}w=u+g*2,oe=be*w;for(let de=0;de<at;de++){let ee=rt[de];me(ee[0]+oe,ee[1]+oe,ee[2]+oe)}}else{for(let w=0;w<at;w++){let oe=rt[w];me(oe[2],oe[1],oe[0])}for(let w=0;w<at;w++){let oe=rt[w];me(oe[0]+be*u,oe[1]+be*u,oe[2]+be*u)}}n.addGroup(re,s.length/3-re,0)}function _e(){let re=s.length/3,w=0;Fe(q,w),w+=q.length;for(let oe=0,de=R.length;oe<de;oe++){let ee=R[oe];Fe(ee,w),w+=ee.length}n.addGroup(re,s.length/3-re,1)}function Fe(re,w){let oe=re.length;for(;--oe>=0;){let de=oe,ee=oe-1;ee<0&&(ee=re.length-1);for(let le=0,ve=u+g*2;le<ve;le++){let ie=be*le,Se=be*(le+1),b=w+de+ie,x=w+ee+ie,N=w+ee+Se,j=w+de+Se;se(b,x,N,j)}}}function ge(re,w,oe){l.push(re),l.push(w),l.push(oe)}function me(re,w,oe){ae(re),ae(w),ae(oe);let de=s.length/3,ee=A.generateTopUV(n,s,de-3,de-2,de-1);Re(ee[0]),Re(ee[1]),Re(ee[2])}function se(re,w,oe,de){ae(re),ae(w),ae(de),ae(w),ae(oe),ae(de);let ee=s.length/3,le=A.generateSideWallUV(n,s,ee-6,ee-3,ee-2,ee-1);Re(le[0]),Re(le[1]),Re(le[3]),Re(le[1]),Re(le[2]),Re(le[3])}function ae(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function Re(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return km(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new sl[s.type]().fromJSON(s)),new i(n,e.options)}},Bm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new Ue(r,a),new Ue(o,l),new Ue(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Ue(a,1-l),new Ue(c,1-h),new Ue(d,1-m),new Ue(_,1-p)]:[new Ue(o,1-l),new Ue(u,1-h),new Ue(f,1-m),new Ue(g,1-p)]}};function km(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Zi=class i extends fn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){let A=p*d-a;for(let M=0;M<c;M++){let T=M*h-r;m.push(T,-A,0),_.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){let M=A+c*p,T=A+c*(p+1),U=A+1+c*(p+1),C=A+1+c*p;f.push(M,T,C),f.push(T,U,C)}this.setIndex(f),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Rr=class i extends fn{constructor(e=new Ai([new Ue(0,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(r,3)),this.setAttribute("uv",new Xt(a,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,m=d.holes;Wn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let A=m[g];Wn.isClockWise(A)===!0&&(m[g]=A.reverse())}let _=Wn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let A=m[g];f=f.concat(A)}for(let g=0,p=f.length;g<p;g++){let A=f[g];s.push(A.x,A.y,0),r.push(0,0,1),a.push(A.x,A.y)}for(let g=0,p=_.length;g<p;g++){let A=_[g],M=A[0]+h,T=A[1]+h,U=A[2]+h;n.push(M,T,U),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return zm(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function zm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ks=class i extends fn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new B,h=new B,d=new B;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let _=m/s*r,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,A=(s+1)*f+m;a.push(_,g,A),a.push(g,p,A)}this.setIndex(a),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var zs=class extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ci=class extends zs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Va=class extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ha=class extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Vm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ki=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ga=class extends Ki{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case el:r=e,o=2*t-n;break;case tl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case el:a=e,l=2*n-t;break;case tl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,A=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,M=(-1-f)*g+(1.5+f)*_+.5*m,T=f*g-f*_;for(let U=0;U!==o;++U)r[U]=p*a[u+U]+A*a[c+U]+M*a[l+U]+T*a[h+U];return r}},Wa=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},Xa=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ga(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case Ra:t=this.InterpolantFactoryMethodLinear;break;case Ea:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ot("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return Ea}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(mt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){mt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){mt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Vm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){mt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ea,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let _=t[h+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Ra;var Ri=class extends yn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=ur;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};qa.prototype.ValueTypeName="color";var Ya=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};Ya.prototype.ValueTypeName="number";var $a=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ir=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends yn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=ur;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};Za.prototype.ValueTypeName="vector";var Ka=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vd=new Ka,Ja=class{constructor(e){this.manager=e!==void 0?e:vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var ja=class extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var jc=new It,bh=new B,Mh=new B,cl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),Mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mh),t.updateMatrixWorld(),jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Pr=class extends _r{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ll=class extends cl{constructor(){super(new Pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new ll}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Qa=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Dl="\\[\\]\\.:\\/",Hm=new RegExp("["+Dl+"]","g"),Nl="[^"+Dl+"]",Gm="[^"+Dl.replace("\\.","")+"]",Wm=/((?:WC+[\/:])*)/.source.replace("WC",Nl),Xm=/(WCOD+)?/.source.replace("WCOD",Gm),qm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),Ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),$m=new RegExp("^"+Wm+Xm+qm+Ym+"$"),Zm=["material","materials","bones","map"],ul=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hm,"")}static parseTrackName(e){let t=$m.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;mt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=ul;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rb=new Float32Array(1);var Sh=new It,Lr=class{constructor(e,t,n=0,s=1/0){this.ray=new mr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Rs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sh),this}intersectObject(e,t=!0,n=[]){return hl(e,this,n,t),n.sort(wh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)hl(e[s],this,n,t);return n.sort(wh),n}};function wh(i,e){return i.distance-e.distance}function hl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)hl(r[a],e,t,!0)}}function Ul(i,e,t,n){let s=Km(n);switch(t){case Sl:return i*e;case El:return i*e/s.components*s.byteLength;case mo:return i*e/s.components*s.byteLength;case go:return i*e*2/s.components*s.byteLength;case xo:return i*e*2/s.components*s.byteLength;case wl:return i*e*3/s.components*s.byteLength;case An:return i*e*4/s.components*s.byteLength;case _o:return i*e*4/s.components*s.byteLength;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yo:case Mo:return Math.max(i,16)*Math.max(e,8)/4;case vo:case bo:return Math.max(i,8)*Math.max(e,8)/2;case So:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case zo:case Vo:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Go:case Wo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xo:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Km(i){switch(i){case kn:case vl:return{byteLength:1,components:1};case Hs:case yl:case Qi:return{byteLength:2,components:1};case fo:case po:return{byteLength:2,components:4};case Pi:case ho:case Kn:return{byteLength:4,components:1};case bl:case Ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function Hd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jm(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,c0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,d0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,M0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,S0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,w0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,F0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,J0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ax=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ox=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ex=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ix=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:Qm,alphahash_pars_fragment:e0,alphamap_fragment:t0,alphamap_pars_fragment:n0,alphatest_fragment:i0,alphatest_pars_fragment:s0,aomap_fragment:r0,aomap_pars_fragment:a0,batching_pars_vertex:o0,batching_vertex:c0,begin_vertex:l0,beginnormal_vertex:u0,bsdfs:h0,iridescence_fragment:d0,bumpmap_pars_fragment:f0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:x0,color_fragment:_0,color_pars_fragment:v0,color_pars_vertex:y0,color_vertex:b0,common:M0,cube_uv_reflection_fragment:S0,defaultnormal_vertex:w0,displacementmap_pars_vertex:E0,displacementmap_vertex:T0,emissivemap_fragment:A0,emissivemap_pars_fragment:C0,colorspace_fragment:R0,colorspace_pars_fragment:I0,envmap_fragment:P0,envmap_common_pars_fragment:L0,envmap_pars_fragment:D0,envmap_pars_vertex:N0,envmap_physical_pars_fragment:X0,envmap_vertex:U0,fog_vertex:F0,fog_pars_vertex:O0,fog_fragment:B0,fog_pars_fragment:k0,gradientmap_pars_fragment:z0,lightmap_pars_fragment:V0,lights_lambert_fragment:H0,lights_lambert_pars_fragment:G0,lights_pars_begin:W0,lights_toon_fragment:q0,lights_toon_pars_fragment:Y0,lights_phong_fragment:$0,lights_phong_pars_fragment:Z0,lights_physical_fragment:K0,lights_physical_pars_fragment:J0,lights_fragment_begin:j0,lights_fragment_maps:Q0,lights_fragment_end:eg,logdepthbuf_fragment:tg,logdepthbuf_pars_fragment:ng,logdepthbuf_pars_vertex:ig,logdepthbuf_vertex:sg,map_fragment:rg,map_pars_fragment:ag,map_particle_fragment:og,map_particle_pars_fragment:cg,metalnessmap_fragment:lg,metalnessmap_pars_fragment:ug,morphinstance_vertex:hg,morphcolor_vertex:dg,morphnormal_vertex:fg,morphtarget_pars_vertex:pg,morphtarget_vertex:mg,normal_fragment_begin:gg,normal_fragment_maps:xg,normal_pars_fragment:_g,normal_pars_vertex:vg,normal_vertex:yg,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:Mg,clearcoat_normal_fragment_maps:Sg,clearcoat_pars_fragment:wg,iridescence_pars_fragment:Eg,opaque_fragment:Tg,packing:Ag,premultiplied_alpha_fragment:Cg,project_vertex:Rg,dithering_fragment:Ig,dithering_pars_fragment:Pg,roughnessmap_fragment:Lg,roughnessmap_pars_fragment:Dg,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Ug,shadowmap_vertex:Fg,shadowmask_pars_fragment:Og,skinbase_vertex:Bg,skinning_pars_vertex:kg,skinning_vertex:zg,skinnormal_vertex:Vg,specularmap_fragment:Hg,specularmap_pars_fragment:Gg,tonemapping_fragment:Wg,tonemapping_pars_fragment:Xg,transmission_fragment:qg,transmission_pars_fragment:Yg,uv_pars_fragment:$g,uv_pars_vertex:Zg,uv_vertex:Kg,worldpos_vertex:Jg,background_vert:jg,background_frag:Qg,backgroundCube_vert:ex,backgroundCube_frag:tx,cube_vert:nx,cube_frag:ix,depth_vert:sx,depth_frag:rx,distanceRGBA_vert:ax,distanceRGBA_frag:ox,equirect_vert:cx,equirect_frag:lx,linedashed_vert:ux,linedashed_frag:hx,meshbasic_vert:dx,meshbasic_frag:fx,meshlambert_vert:px,meshlambert_frag:mx,meshmatcap_vert:gx,meshmatcap_frag:xx,meshnormal_vert:_x,meshnormal_frag:vx,meshphong_vert:yx,meshphong_frag:bx,meshphysical_vert:Mx,meshphysical_frag:Sx,meshtoon_vert:wx,meshtoon_frag:Ex,points_vert:Tx,points_frag:Ax,shadow_vert:Cx,shadow_frag:Rx,sprite_vert:Ix,sprite_frag:Px},Xe={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Jn={basic:{uniforms:Qt([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Qt([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new ht(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Qt([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Qt([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Qt([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new ht(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Qt([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Qt([Xe.points,Xe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Qt([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Qt([Xe.common,Xe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Qt([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Qt([Xe.sprite,Xe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Qt([Xe.common,Xe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Qt([Xe.lights,Xe.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Jn.physical={uniforms:Qt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Yo={r:0,b:0,g:0},ts=new Bn,Lx=new It;function Dx(i,e,t,n,s,r,a){let o=new ht(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function m(M){let T=M.isScene===!0?M.background:null;return T&&T.isTexture&&(T=(M.backgroundBlurriness>0?t:e).get(T)),T}function _(M){let T=!1,U=m(M);U===null?p(o,l):U&&U.isColor&&(p(U,1),T=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,T){let U=m(T);U&&(U.isCubeTexture||U.mapping===Dr)?(u===void 0&&(u=new kt(new Is(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:es(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,I,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ts.copy(T.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(ts)),u.material.toneMapped=bt.getTransfer(U.colorSpace)!==Mt,(h!==U||d!==U.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=U,d=U.version,f=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new kt(new Zi(2,2),new Tn({name:"BackgroundMaterial",uniforms:es(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=bt.getTransfer(U.colorSpace)!==Mt,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(h!==U||d!==U.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=U,d=U.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,T){M.getRGB(Yo,Pl(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,T,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),l=T,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:g,dispose:A}}function Nx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,R,$,X,ne){let q=!1,F=h(X,$,R);r!==F&&(r=F,c(r.object)),q=f(y,X,$,ne),q&&m(y,X,$,ne),ne!==null&&e.update(ne,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,T(y,R,$,X),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,R,$){let X=$.wireframe===!0,ne=n[y.id];ne===void 0&&(ne={},n[y.id]=ne);let q=ne[R.id];q===void 0&&(q={},ne[R.id]=q);let F=q[X];return F===void 0&&(F=d(l()),q[X]=F),F}function d(y){let R=[],$=[],X=[];for(let ne=0;ne<t;ne++)R[ne]=0,$[ne]=0,X[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:$,attributeDivisors:X,object:y,attributes:{},index:null}}function f(y,R,$,X){let ne=r.attributes,q=R.attributes,F=0,be=$.getAttributes();for(let Z in be)if(be[Z].location>=0){let Ce=ne[Z],He=q[Z];if(He===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(He=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(He=y.instanceColor)),Ce===void 0||Ce.attribute!==He||He&&Ce.data!==He.data)return!0;F++}return r.attributesNum!==F||r.index!==X}function m(y,R,$,X){let ne={},q=R.attributes,F=0,be=$.getAttributes();for(let Z in be)if(be[Z].location>=0){let Ce=q[Z];Ce===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(Ce=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(Ce=y.instanceColor));let He={};He.attribute=Ce,Ce&&Ce.data&&(He.data=Ce.data),ne[Z]=He,F++}r.attributes=ne,r.attributesNum=F,r.index=X}function _(){let y=r.newAttributes;for(let R=0,$=y.length;R<$;R++)y[R]=0}function g(y){p(y,0)}function p(y,R){let $=r.newAttributes,X=r.enabledAttributes,ne=r.attributeDivisors;$[y]=1,X[y]===0&&(i.enableVertexAttribArray(y),X[y]=1),ne[y]!==R&&(i.vertexAttribDivisor(y,R),ne[y]=R)}function A(){let y=r.newAttributes,R=r.enabledAttributes;for(let $=0,X=R.length;$<X;$++)R[$]!==y[$]&&(i.disableVertexAttribArray($),R[$]=0)}function M(y,R,$,X,ne,q,F){F===!0?i.vertexAttribIPointer(y,R,$,ne,q):i.vertexAttribPointer(y,R,$,X,ne,q)}function T(y,R,$,X){_();let ne=X.attributes,q=$.getAttributes(),F=R.defaultAttributeValues;for(let be in q){let Z=q[be];if(Z.location>=0){let Ee=ne[be];if(Ee===void 0&&(be==="instanceMatrix"&&y.instanceMatrix&&(Ee=y.instanceMatrix),be==="instanceColor"&&y.instanceColor&&(Ee=y.instanceColor)),Ee!==void 0){let Ce=Ee.normalized,He=Ee.itemSize,je=e.get(Ee);if(je===void 0)continue;let rt=je.buffer,at=je.type,st=je.bytesPerElement,ce=at===i.INT||at===i.UNSIGNED_INT||Ee.gpuType===ho;if(Ee.isInterleavedBufferAttribute){let _e=Ee.data,Fe=_e.stride,ge=Ee.offset;if(_e.isInstancedInterleavedBuffer){for(let me=0;me<Z.locationSize;me++)p(Z.location+me,_e.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let me=0;me<Z.locationSize;me++)g(Z.location+me);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let me=0;me<Z.locationSize;me++)M(Z.location+me,He/Z.locationSize,at,Ce,Fe*st,(ge+He/Z.locationSize*me)*st,ce)}else{if(Ee.isInstancedBufferAttribute){for(let _e=0;_e<Z.locationSize;_e++)p(Z.location+_e,Ee.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let _e=0;_e<Z.locationSize;_e++)g(Z.location+_e);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let _e=0;_e<Z.locationSize;_e++)M(Z.location+_e,He/Z.locationSize,at,Ce,He*st,He/Z.locationSize*_e*st,ce)}}else if(F!==void 0){let Ce=F[be];if(Ce!==void 0)switch(Ce.length){case 2:i.vertexAttrib2fv(Z.location,Ce);break;case 3:i.vertexAttrib3fv(Z.location,Ce);break;case 4:i.vertexAttrib4fv(Z.location,Ce);break;default:i.vertexAttrib1fv(Z.location,Ce)}}}}A()}function U(){W();for(let y in n){let R=n[y];for(let $ in R){let X=R[$];for(let ne in X)u(X[ne].object),delete X[ne];delete R[$]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;let R=n[y.id];for(let $ in R){let X=R[$];for(let ne in X)u(X[ne].object),delete X[ne];delete R[$]}delete n[y.id]}function I(y){for(let R in n){let $=n[R];if($[y.id]===void 0)continue;let X=$[y.id];for(let ne in X)u(X[ne].object),delete X[ne];delete $[y.id]}}function W(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:W,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:g,disableUnusedAttributes:A}}function Ux(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Fx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==An&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let W=I===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==kn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Kn&&!W)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(ot("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=m>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:A,maxVaryings:M,maxFragmentUniforms:T,vertexTextures:U,maxSamples:C}}function Ox(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Hn,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let A=r?0:n,M=A*4,T=p.clippingState||null;l.value=T,T=u(m,d,M,f);for(let U=0;U!==M;++U)T[U]=t[U];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,T=f;M!==_;++M,T+=4)a.copy(h[M]).applyMatrix4(A,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Bx(i){let e=new WeakMap;function t(a,o){return o===co?a.mapping=Ji:o===lo&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===co||o===lo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ua(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Li=4,yd=[.125,.215,.35,.446,.526,.582],is=20,kx=256,kr=new Pr,bd=new ht,Fl=null,Ol=0,Bl=0,kl=!1,zx=new B,$s=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=zx}=r;Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fl,Ol,Bl),this._renderer.xr.enabled=kl,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Qi,format:An,colorSpace:Wi,depthBuffer:!1},s=Md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Vx(r)),this._blurMaterial=Gx(r,e,t),this._ggxMaterial=Hx(r,e,t)}return s}_compileMaterial(e){let t=new kt(new fn,e);this._renderer.compile(t,kr)}_sceneToCubeUV(e,t,n,s,r){let l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(bd),h.toneMapping=hi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kt(new Is,new Xi({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,A=e.background;A?A.isColor&&(g.color.copy(A),e.background=null,p=!0):(g.color.copy(bd),p=!0);for(let M=0;M<6;M++){let T=M%3;T===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):T===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));let U=this._cubeSize;qs(s,T*U,M>2?U:0,U,U),h.setRenderTarget(s),p&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=A}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ji||e.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;qs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,kr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=.05+c*.95,f=h*d,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-Li?n-m+Li:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,qs(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(o,kr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,qs(e,g,p,3*_,2*_),s.setRenderTarget(e),s.render(o,kr)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&mt("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[s];h.material=c;let d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*is-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):is;g>is&&ot(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${is}`);let p=[],A=0;for(let I=0;I<is;++I){let W=I/_,E=Math.exp(-W*W/2);p.push(E),I===0?A+=E:I<g&&(A+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/A;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;let T=this._sizeLods[s],U=3*T*(s>M-Li?s-M+Li:0),C=4*(this._cubeSize-T);qs(t,U,C,3*T,2*T),l.setRenderTarget(t),l.render(h,kr)}};function Vx(i){let e=[],t=[],n=[],s=i,r=i-Li+1+yd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Li?l=yd[a-i+Li-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,A=new Float32Array(_*m*f),M=new Float32Array(g*m*f),T=new Float32Array(p*m*f);for(let C=0;C<f;C++){let I=C%3*2/3-1,W=C>2?0:-1,E=[I,W,0,I+2/3,W,0,I+2/3,W+1,0,I,W,0,I+2/3,W+1,0,I,W+1,0];A.set(E,_*m*C),M.set(d,g*m*C);let y=[C,C,C,C,C,C];T.set(y,p*m*C)}let U=new fn;U.setAttribute("position",new Yt(A,_)),U.setAttribute("uv",new Yt(M,g)),U.setAttribute("faceIndex",new Yt(T,p)),n.push(new kt(U,null)),s>Li&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Md(i,e,t){let n=new qn(i,e,t);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Hx(i,e,t){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ko(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Gx(i,e,t){let n=new Float32Array(is),s=new B(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Sd(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function wd(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===co||l===lo,u=l===Ji||l===ji;if(c||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new $s(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new $s(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Xx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ts("WebGLRenderer: "+n+" extension not supported."),s}}}function qx(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,m=h.attributes.position,_=0;if(f!==null){let A=f.array;_=f.version;for(let M=0,T=A.length;M<T;M+=3){let U=A[M+0],C=A[M+1],I=A[M+2];d.push(U,C,C,I,I,U)}}else if(m!==void 0){let A=m.array;_=m.version;for(let M=0,T=A.length/3-1;M<T;M+=3){let U=M+0,C=M+1,I=M+2;d.push(U,C,C,I,I,U)}}else return;let g=new(Rl(d)?xr:gr)(d,1);g.version=_;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Yx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function h(d,f,m,_){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let A=0;A<m;A++)p+=f[A]*_[A];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function $x(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:mt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zx(i,e,t){let n=new WeakMap,s=new Nt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let E=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let T=o.attributes.position.count*M,U=1;T>e.maxTextureSize&&(U=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let C=new Float32Array(T*U*4*h),I=new pr(C,T,U,h);I.type=Kn,I.needsUpdate=!0;let W=M*4;for(let y=0;y<h;y++){let R=g[y],$=p[y],X=A[y],ne=T*U*4*y;for(let q=0;q<R.count;q++){let F=q*W;f===!0&&(s.fromBufferAttribute(R,q),C[ne+F+0]=s.x,C[ne+F+1]=s.y,C[ne+F+2]=s.z,C[ne+F+3]=0),m===!0&&(s.fromBufferAttribute($,q),C[ne+F+4]=s.x,C[ne+F+5]=s.y,C[ne+F+6]=s.z,C[ne+F+7]=0),_===!0&&(s.fromBufferAttribute(X,q),C[ne+F+8]=s.x,C[ne+F+9]=s.y,C[ne+F+10]=s.z,C[ne+F+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new Ue(T,U)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Kx(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Gd=new sn,Ed=new yr(1,1),Wd=new pr,Xd=new Da,qd=new vr,Td=[],Ad=[],Cd=new Float32Array(16),Rd=new Float32Array(9),Id=new Float32Array(4);function Zs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Td[s];if(r===void 0&&(r=new Float32Array(s),Td[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jo(i,e){let t=Ad[e];t===void 0&&(t=new Int32Array(e),Ad[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function t_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Id.set(n),i.uniformMatrix2fv(this.addr,!1,Id),Ht(t,n)}}function n_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Rd.set(n),i.uniformMatrix3fv(this.addr,!1,Rd),Ht(t,n)}}function i_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Cd.set(n),i.uniformMatrix4fv(this.addr,!1,Cd),Ht(t,n)}}function s_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function o_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function c_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function d_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ed.compareFunction=Al,r=Ed):r=Gd,t.setTexture2D(e||r,s)}function f_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xd,s)}function p_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||qd,s)}function m_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wd,s)}function g_(i){switch(i){case 5126:return Jx;case 35664:return jx;case 35665:return Qx;case 35666:return e_;case 35674:return t_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return a_;case 35669:case 35673:return o_;case 5125:return c_;case 36294:return l_;case 36295:return u_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function x_(i,e){i.uniform1fv(this.addr,e)}function __(i,e){let t=Zs(e,this.size,2);i.uniform2fv(this.addr,t)}function v_(i,e){let t=Zs(e,this.size,3);i.uniform3fv(this.addr,t)}function y_(i,e){let t=Zs(e,this.size,4);i.uniform4fv(this.addr,t)}function b_(i,e){let t=Zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function M_(i,e){let t=Zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function S_(i,e){let t=Zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function w_(i,e){i.uniform1iv(this.addr,e)}function E_(i,e){i.uniform2iv(this.addr,e)}function T_(i,e){i.uniform3iv(this.addr,e)}function A_(i,e){i.uniform4iv(this.addr,e)}function C_(i,e){i.uniform1uiv(this.addr,e)}function R_(i,e){i.uniform2uiv(this.addr,e)}function I_(i,e){i.uniform3uiv(this.addr,e)}function P_(i,e){i.uniform4uiv(this.addr,e)}function L_(i,e,t){let n=this.cache,s=e.length,r=Jo(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Gd,r[a])}function D_(i,e,t){let n=this.cache,s=e.length,r=Jo(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Xd,r[a])}function N_(i,e,t){let n=this.cache,s=e.length,r=Jo(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||qd,r[a])}function U_(i,e,t){let n=this.cache,s=e.length,r=Jo(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wd,r[a])}function F_(i){switch(i){case 5126:return x_;case 35664:return __;case 35665:return v_;case 35666:return y_;case 35674:return b_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return w_;case 35667:case 35671:return E_;case 35668:case 35672:return T_;case 35669:case 35673:return A_;case 5125:return C_;case 36294:return R_;case 36295:return I_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return U_}}var Vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=g_(t.type)}},Hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=F_(t.type)}},Gl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},zl=/(\w+)(\])?(\[|\.)?/g;function Pd(i,e){i.seq.push(e),i.map[e.id]=e}function O_(i,e,t){let n=i.name,s=n.length;for(zl.lastIndex=0;;){let r=zl.exec(n),a=zl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pd(t,c===void 0?new Vl(o,i,e):new Hl(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Gl(o),Pd(t,h)),t=h}}}var Ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);O_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ld(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var B_=37297,k_=0;function z_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Dd=new lt;function V_(i){bt._getMatrix(Dd,bt.workingColorSpace,i);let e=`mat3( ${Dd.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case hr:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Nd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+z_(i.getShaderSource(e),o)}else return r}function H_(i,e){let t=V_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function G_(i,e){let t;switch(e){case $h:t="Linear";break;case Zh:t="Reinhard";break;case Kh:t="Cineon";break;case Jh:t="ACESFilmic";break;case Qh:t="AgX";break;case oo:t="Neutral";break;case jh:t="Custom";break;default:ot("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $o=new B;function W_(){bt.getLuminanceCoefficients($o);let i=$o.x.toFixed(4),e=$o.y.toFixed(4),t=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function q_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Y_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function zr(i){return i!==""}function Ud(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(i){return i.replace($_,K_)}var Z_=new Map;function K_(i,e){let t=pt[e];if(t===void 0){let n=Z_.get(e);if(n!==void 0)t=pt[n],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wl(t)}var J_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(i){return i.replace(J_,j_)}function j_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Q_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ah?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function ev(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case ji:e="ENVMAP_TYPE_CUBE";break;case Dr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function nv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xl:e="ENVMAP_BLENDING_MULTIPLY";break;case qh:e="ENVMAP_BLENDING_MIX";break;case Yh:e="ENVMAP_BLENDING_ADD";break}return e}function iv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Q_(t),c=ev(t),u=tv(t),h=nv(t),d=iv(t),f=X_(t),m=q_(r),_=s.createProgram(),g,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(zr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(zr).join(`
`),p.length>0&&(p+=`
`)):(g=[Bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),p=[Bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?pt.tonemapping_pars_fragment:"",t.toneMapping!==hi?G_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,H_("linearToOutputTexel",t.outputColorSpace),W_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),a=Wl(a),a=Ud(a,t),a=Fd(a,t),o=Wl(o),o=Ud(o,t),o=Fd(o,t),a=Od(a),o=Od(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=A+g+a,T=A+p+o,U=Ld(s,s.VERTEX_SHADER,M),C=Ld(s,s.FRAGMENT_SHADER,T);s.attachShader(_,U),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(R){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(_)||"",X=s.getShaderInfoLog(U)||"",ne=s.getShaderInfoLog(C)||"",q=$.trim(),F=X.trim(),be=ne.trim(),Z=!0,Ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,U,C);else{let Ce=Nd(s,U,"vertex"),He=Nd(s,C,"fragment");mt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+q+`
`+Ce+`
`+He)}else q!==""?ot("WebGLProgram: Program Info Log:",q):(F===""||be==="")&&(Ee=!1);Ee&&(R.diagnostics={runnable:Z,programLog:q,vertexShader:{log:F,prefix:g},fragmentShader:{log:be,prefix:p}})}s.deleteShader(U),s.deleteShader(C),W=new Ys(s,_),E=Y_(s,_)}let W;this.getUniforms=function(){return W===void 0&&I(this),W};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,B_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=C,this}var rv=0,Xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ql(e),t.set(e,n)),n}},ql=class{constructor(e){this.id=rv++,this.code=e,this.usedTimes=0}};function av(i,e,t,n,s,r,a){let o=new Rs,l=new Xl,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,y,R,$,X){let ne=$.fog,q=X.geometry,F=E.isMeshStandardMaterial?$.environment:null,be=(E.isMeshStandardMaterial?t:e).get(E.envMap||F),Z=be&&be.mapping===Dr?be.image.height:null,Ee=m[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&ot("WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let Ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,He=Ce!==void 0?Ce.length:0,je=0;q.morphAttributes.position!==void 0&&(je=1),q.morphAttributes.normal!==void 0&&(je=2),q.morphAttributes.color!==void 0&&(je=3);let rt,at,st,ce;if(Ee){let dt=Jn[Ee];rt=dt.vertexShader,at=dt.fragmentShader}else rt=E.vertexShader,at=E.fragmentShader,l.update(E),st=l.getVertexShaderID(E),ce=l.getFragmentShaderID(E);let _e=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),ge=X.isInstancedMesh===!0,me=X.isBatchedMesh===!0,se=!!E.map,ae=!!E.matcap,Re=!!be,re=!!E.aoMap,w=!!E.lightMap,oe=!!E.bumpMap,de=!!E.normalMap,ee=!!E.displacementMap,le=!!E.emissiveMap,ve=!!E.metalnessMap,ie=!!E.roughnessMap,Se=E.anisotropy>0,b=E.clearcoat>0,x=E.dispersion>0,N=E.iridescence>0,j=E.sheen>0,fe=E.transmission>0,Y=Se&&!!E.anisotropyMap,We=b&&!!E.clearcoatMap,Pe=b&&!!E.clearcoatNormalMap,Oe=b&&!!E.clearcoatRoughnessMap,Be=N&&!!E.iridescenceMap,z=N&&!!E.iridescenceThicknessMap,he=j&&!!E.sheenColorMap,Ne=j&&!!E.sheenRoughnessMap,L=!!E.specularMap,ze=!!E.specularColorMap,Ze=!!E.specularIntensityMap,P=fe&&!!E.transmissionMap,Le=fe&&!!E.thicknessMap,Ae=!!E.gradientMap,Te=!!E.alphaMap,we=E.alphaTest>0,pe=!!E.alphaHash,Ye=!!E.extensions,Qe=hi;E.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Qe=i.toneMapping);let xt={shaderID:Ee,shaderType:E.type,shaderName:E.name,vertexShader:rt,fragmentShader:at,defines:E.defines,customVertexShaderID:st,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:me,batchingColor:me&&X._colorsTexture!==null,instancing:ge,instancingColor:ge&&X.instanceColor!==null,instancingMorph:ge&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Wi,alphaToCoverage:!!E.alphaToCoverage,map:se,matcap:ae,envMap:Re,envMapMode:Re&&be.mapping,envMapCubeUVHeight:Z,aoMap:re,lightMap:w,bumpMap:oe,normalMap:de,displacementMap:d&&ee,emissiveMap:le,normalMapObjectSpace:de&&E.normalMapType===id,normalMapTangentSpace:de&&E.normalMapType===Tl,metalnessMap:ve,roughnessMap:ie,anisotropy:Se,anisotropyMap:Y,clearcoat:b,clearcoatMap:We,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Oe,dispersion:x,iridescence:N,iridescenceMap:Be,iridescenceThicknessMap:z,sheen:j,sheenColorMap:he,sheenRoughnessMap:Ne,specularMap:L,specularColorMap:ze,specularIntensityMap:Ze,transmission:fe,transmissionMap:P,thicknessMap:Le,gradientMap:Ae,opaque:E.transparent===!1&&E.blending===Hi&&E.alphaToCoverage===!1,alphaMap:Te,alphaTest:we,alphaHash:pe,combine:E.combine,mapUv:se&&_(E.map.channel),aoMapUv:re&&_(E.aoMap.channel),lightMapUv:w&&_(E.lightMap.channel),bumpMapUv:oe&&_(E.bumpMap.channel),normalMapUv:de&&_(E.normalMap.channel),displacementMapUv:ee&&_(E.displacementMap.channel),emissiveMapUv:le&&_(E.emissiveMap.channel),metalnessMapUv:ve&&_(E.metalnessMap.channel),roughnessMapUv:ie&&_(E.roughnessMap.channel),anisotropyMapUv:Y&&_(E.anisotropyMap.channel),clearcoatMapUv:We&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:z&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(E.sheenRoughnessMap.channel),specularMapUv:L&&_(E.specularMap.channel),specularColorMapUv:ze&&_(E.specularColorMap.channel),specularIntensityMapUv:Ze&&_(E.specularIntensityMap.channel),transmissionMapUv:P&&_(E.transmissionMap.channel),thicknessMapUv:Le&&_(E.thicknessMap.channel),alphaMapUv:Te&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(de||Se),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!q.attributes.uv&&(se||Te),fog:!!ne,useFog:E.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Fe,skinning:X.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:je,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:se&&E.map.isVideoTexture===!0&&bt.getTransfer(E.map.colorSpace)===Mt,decodeVideoTextureEmissive:le&&E.emissiveMap.isVideoTexture===!0&&bt.getTransfer(E.emissiveMap.colorSpace)===Mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===an,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ye&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&E.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function p(E){let y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(let R in E.defines)y.push(R),y.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(A(y,E),M(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function A(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function M(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function T(E){let y=m[E.type],R;if(y){let $=Jn[y];R=pd.clone($.uniforms)}else R=E.uniforms;return R}function U(E,y){let R;for(let $=0,X=u.length;$<X;$++){let ne=u[$];if(ne.cacheKey===y){R=ne,++R.usedTimes;break}}return R===void 0&&(R=new sv(i,y,E,r),u.push(R)),R}function C(E){if(--E.usedTimes===0){let y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function I(E){l.remove(E)}function W(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:T,acquireProgram:U,releaseProgram:C,releaseShaderCache:I,programs:u,dispose:W}}function ov(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function cv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,m,_,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function o(h,d,f,m,_,g){let p=a(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,m,_,g){let p=a(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||cv),n.length>1&&n.sort(d||kd),s.length>1&&s.sort(d||kd)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function lv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new zd,i.set(n,[a])):s>=r.length?(a=new zd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function uv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ht};break;case"SpotLight":t={position:new B,direction:new B,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function hv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var dv=0;function fv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pv(i){let e=new uv,t=hv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new It,a=new It;function o(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,A=0,M=0,T=0,U=0,C=0,I=0;c.sort(fv);for(let E=0,y=c.length;E<y;E++){let R=c[E],$=R.color,X=R.intensity,ne=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=$.r*X,h+=$.g*X,d+=$.b*X;else if(R.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(R.sh.coefficients[F],X);I++}else if(R.isDirectionalLight){let F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let be=R.shadow,Z=t.get(R);Z.shadowIntensity=be.intensity,Z.shadowBias=be.bias,Z.shadowNormalBias=be.normalBias,Z.shadowRadius=be.radius,Z.shadowMapSize=be.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=R.shadow.matrix,A++}n.directional[f]=F,f++}else if(R.isSpotLight){let F=e.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy($).multiplyScalar(X),F.distance=ne,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,n.spot[_]=F;let be=R.shadow;if(R.map&&(n.spotLightMap[U]=R.map,U++,be.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[_]=be.matrix,R.castShadow){let Z=t.get(R);Z.shadowIntensity=be.intensity,Z.shadowBias=be.bias,Z.shadowNormalBias=be.normalBias,Z.shadowRadius=be.radius,Z.shadowMapSize=be.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=q,T++}_++}else if(R.isRectAreaLight){let F=e.get(R);F.color.copy($).multiplyScalar(X),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=F,g++}else if(R.isPointLight){let F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),F.distance=R.distance,F.decay=R.decay,R.castShadow){let be=R.shadow,Z=t.get(R);Z.shadowIntensity=be.intensity,Z.shadowBias=be.bias,Z.shadowNormalBias=be.normalBias,Z.shadowRadius=be.radius,Z.shadowMapSize=be.mapSize,Z.shadowCameraNear=be.camera.near,Z.shadowCameraFar=be.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=R.shadow.matrix,M++}n.point[m]=F,m++}else if(R.isHemisphereLight){let F=e.get(R);F.skyColor.copy(R.color).multiplyScalar(X),F.groundColor.copy(R.groundColor).multiplyScalar(X),n.hemi[p]=F,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xe.LTC_FLOAT_1,n.rectAreaLTC2=Xe.LTC_FLOAT_2):(n.rectAreaLTC1=Xe.LTC_HALF_1,n.rectAreaLTC2=Xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let W=n.hash;(W.directionalLength!==f||W.pointLength!==m||W.spotLength!==_||W.rectAreaLength!==g||W.hemiLength!==p||W.numDirectionalShadows!==A||W.numPointShadows!==M||W.numSpotShadows!==T||W.numSpotMaps!==U||W.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=T+U-C,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,W.directionalLength=f,W.pointLength=m,W.spotLength=_,W.rectAreaLength=g,W.hemiLength=p,W.numDirectionalShadows=A,W.numPointShadows=M,W.numSpotShadows=T,W.numSpotMaps=U,W.numLightProbes=I,n.version=dv++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0,g=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){let M=c[p];if(M.isDirectionalLight){let T=n.directional[h];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),h++}else if(M.isSpotLight){let T=n.spot[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let T=n.rectArea[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let T=n.hemi[_];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Vd(i){let e=new pv(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function mv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Vd(i),e.set(s,[o])):r>=a.length?(o=new Vd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _v(i,e,t){let n=new Ns,s=new Ue,r=new Ue,a=new Nt,o=new Va({depthPacking:nd}),l=new Ha,c={},u=t.maxTextureSize,h={[li]:an,[an]:li,[bn]:bn},d=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:gv,fragmentShader:xv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new fn;m.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new kt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl;let p=this.type;this.render=function(C,I,W){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let E=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),$=i.state;$.setBlending($n),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let X=p!==Yn&&this.type===Yn,ne=p===Yn&&this.type!==Yn;for(let q=0,F=C.length;q<F;q++){let be=C[q],Z=be.shadow;if(Z===void 0){ot("WebGLShadowMap:",be,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let Ee=Z.getFrameExtents();if(s.multiply(Ee),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Ee.x),s.x=r.x*Ee.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Ee.y),s.y=r.y*Ee.y,Z.mapSize.y=r.y)),Z.map===null||X===!0||ne===!0){let He=this.type!==Yn?{minFilter:hn,magFilter:hn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new qn(s.x,s.y,He),Z.map.texture.name=be.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let Ce=Z.getViewportCount();for(let He=0;He<Ce;He++){let je=Z.getViewport(He);a.set(r.x*je.x,r.y*je.y,r.x*je.z,r.y*je.w),$.viewport(a),Z.updateMatrices(be,He),n=Z.getFrustum(),T(I,W,Z.camera,be,this.type)}Z.isPointLightShadow!==!0&&this.type===Yn&&A(Z,W),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,y,R)};function A(C,I){let W=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(I,null,W,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(I,null,W,f,_,null)}function M(C,I,W,E){let y=null,R=W.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)y=R;else if(y=W.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let $=y.uuid,X=I.uuid,ne=c[$];ne===void 0&&(ne={},c[$]=ne);let q=ne[X];q===void 0&&(q=y.clone(),ne[X]=q,I.addEventListener("dispose",U)),y=q}if(y.visible=I.visible,y.wireframe=I.wireframe,E===Yn?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:h[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,W.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let $=i.properties.get(y);$.light=W}return y}function T(C,I,W,E,y){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Yn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld);let X=e.update(C),ne=C.material;if(Array.isArray(ne)){let q=X.groups;for(let F=0,be=q.length;F<be;F++){let Z=q[F],Ee=ne[Z.materialIndex];if(Ee&&Ee.visible){let Ce=M(C,Ee,E,y);C.onBeforeShadow(i,C,I,W,X,Ce,Z),i.renderBufferDirect(W,null,X,Ce,C,Z),C.onAfterShadow(i,C,I,W,X,Ce,Z)}}}else if(ne.visible){let q=M(C,ne,E,y);C.onBeforeShadow(i,C,I,W,X,q,null),i.renderBufferDirect(W,null,X,q,C,null),C.onAfterShadow(i,C,I,W,X,q,null)}}let $=C.children;for(let X=0,ne=$.length;X<ne;X++)T($[X],I,W,E,y)}function U(C){C.target.removeEventListener("dispose",U);for(let W in c){let E=c[W],y=C.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}var vv={[eo]:to,[no]:ro,[io]:ao,[Gi]:so,[to]:eo,[ro]:no,[ao]:io,[so]:Gi};function yv(i,e){function t(){let P=!1,Le=new Nt,Ae=null,Te=new Nt(0,0,0,0);return{setMask:function(we){Ae!==we&&!P&&(i.colorMask(we,we,we,we),Ae=we)},setLocked:function(we){P=we},setClear:function(we,pe,Ye,Qe,xt){xt===!0&&(we*=Qe,pe*=Qe,Ye*=Qe),Le.set(we,pe,Ye,Qe),Te.equals(Le)===!1&&(i.clearColor(we,pe,Ye,Qe),Te.copy(Le))},reset:function(){P=!1,Ae=null,Te.set(-1,0,0,0)}}}function n(){let P=!1,Le=!1,Ae=null,Te=null,we=null;return{setReversed:function(pe){if(Le!==pe){let Ye=e.get("EXT_clip_control");pe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Le=pe;let Qe=we;we=null,this.setClear(Qe)}},getReversed:function(){return Le},setTest:function(pe){pe?_e(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(pe){Ae!==pe&&!P&&(i.depthMask(pe),Ae=pe)},setFunc:function(pe){if(Le&&(pe=vv[pe]),Te!==pe){switch(pe){case eo:i.depthFunc(i.NEVER);break;case to:i.depthFunc(i.ALWAYS);break;case no:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case io:i.depthFunc(i.EQUAL);break;case so:i.depthFunc(i.GEQUAL);break;case ro:i.depthFunc(i.GREATER);break;case ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=pe}},setLocked:function(pe){P=pe},setClear:function(pe){we!==pe&&(Le&&(pe=1-pe),i.clearDepth(pe),we=pe)},reset:function(){P=!1,Ae=null,Te=null,we=null,Le=!1}}}function s(){let P=!1,Le=null,Ae=null,Te=null,we=null,pe=null,Ye=null,Qe=null,xt=null;return{setTest:function(dt){P||(dt?_e(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(dt){Le!==dt&&!P&&(i.stencilMask(dt),Le=dt)},setFunc:function(dt,Lt,Ct){(Ae!==dt||Te!==Lt||we!==Ct)&&(i.stencilFunc(dt,Lt,Ct),Ae=dt,Te=Lt,we=Ct)},setOp:function(dt,Lt,Ct){(pe!==dt||Ye!==Lt||Qe!==Ct)&&(i.stencilOp(dt,Lt,Ct),pe=dt,Ye=Lt,Qe=Ct)},setLocked:function(dt){P=dt},setClear:function(dt){xt!==dt&&(i.clearStencil(dt),xt=dt)},reset:function(){P=!1,Le=null,Ae=null,Te=null,we=null,pe=null,Ye=null,Qe=null,xt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,A=null,M=null,T=null,U=null,C=null,I=new ht(0,0,0),W=0,E=!1,y=null,R=null,$=null,X=null,ne=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,be=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(be=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=be>=1):Z.indexOf("OpenGL ES")!==-1&&(be=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=be>=2);let Ee=null,Ce={},He=i.getParameter(i.SCISSOR_BOX),je=i.getParameter(i.VIEWPORT),rt=new Nt().fromArray(He),at=new Nt().fromArray(je);function st(P,Le,Ae,Te){let we=new Uint8Array(4),pe=i.createTexture();i.bindTexture(P,pe),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<Ae;Ye++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(Le+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return pe}let ce={};ce[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(i.DEPTH_TEST),a.setFunc(Gi),oe(!1),de(dl),_e(i.CULL_FACE),re($n);function _e(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Fe(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function ge(P,Le){return h[P]!==Le?(i.bindFramebuffer(P,Le),h[P]=Le,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Le),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function me(P,Le){let Ae=f,Te=!1;if(P){Ae=d.get(Le),Ae===void 0&&(Ae=[],d.set(Le,Ae));let we=P.textures;if(Ae.length!==we.length||Ae[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Ye=we.length;pe<Ye;pe++)Ae[pe]=i.COLOR_ATTACHMENT0+pe;Ae.length=we.length,Te=!0}}else Ae[0]!==i.BACK&&(Ae[0]=i.BACK,Te=!0);Te&&i.drawBuffers(Ae)}function se(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let ae={[wi]:i.FUNC_ADD,[Rh]:i.FUNC_SUBTRACT,[Ih]:i.FUNC_REVERSE_SUBTRACT};ae[Ph]=i.MIN,ae[Lh]=i.MAX;let Re={[Dh]:i.ZERO,[Nh]:i.ONE,[Uh]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[Vh]:i.SRC_ALPHA_SATURATE,[kh]:i.DST_COLOR,[Oh]:i.DST_ALPHA,[Fh]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[zh]:i.ONE_MINUS_DST_COLOR,[Bh]:i.ONE_MINUS_DST_ALPHA,[Hh]:i.CONSTANT_COLOR,[Gh]:i.ONE_MINUS_CONSTANT_COLOR,[Wh]:i.CONSTANT_ALPHA,[Xh]:i.ONE_MINUS_CONSTANT_ALPHA};function re(P,Le,Ae,Te,we,pe,Ye,Qe,xt,dt){if(P===$n){_===!0&&(Fe(i.BLEND),_=!1);return}if(_===!1&&(_e(i.BLEND),_=!0),P!==Ch){if(P!==g||dt!==E){if((p!==wi||T!==wi)&&(i.blendEquation(i.FUNC_ADD),p=wi,T=wi),dt)switch(P){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:mt("WebGLState: Invalid blending: ",P);break}else switch(P){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ml:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",P);break}A=null,M=null,U=null,C=null,I.set(0,0,0),W=0,g=P,E=dt}return}we=we||Le,pe=pe||Ae,Ye=Ye||Te,(Le!==p||we!==T)&&(i.blendEquationSeparate(ae[Le],ae[we]),p=Le,T=we),(Ae!==A||Te!==M||pe!==U||Ye!==C)&&(i.blendFuncSeparate(Re[Ae],Re[Te],Re[pe],Re[Ye]),A=Ae,M=Te,U=pe,C=Ye),(Qe.equals(I)===!1||xt!==W)&&(i.blendColor(Qe.r,Qe.g,Qe.b,xt),I.copy(Qe),W=xt),g=P,E=!1}function w(P,Le){P.side===bn?Fe(i.CULL_FACE):_e(i.CULL_FACE);let Ae=P.side===an;Le&&(Ae=!Ae),oe(Ae),P.blending===Hi&&P.transparent===!1?re($n):re(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let Te=P.stencilWrite;o.setTest(Te),Te&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),le(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(P){y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),y=P)}function de(P){P!==Eh?(_e(i.CULL_FACE),P!==R&&(P===dl?i.cullFace(i.BACK):P===Th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),R=P}function ee(P){P!==$&&(F&&i.lineWidth(P),$=P)}function le(P,Le,Ae){P?(_e(i.POLYGON_OFFSET_FILL),(X!==Le||ne!==Ae)&&(i.polygonOffset(Le,Ae),X=Le,ne=Ae)):Fe(i.POLYGON_OFFSET_FILL)}function ve(P){P?_e(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function ie(P){P===void 0&&(P=i.TEXTURE0+q-1),Ee!==P&&(i.activeTexture(P),Ee=P)}function Se(P,Le,Ae){Ae===void 0&&(Ee===null?Ae=i.TEXTURE0+q-1:Ae=Ee);let Te=Ce[Ae];Te===void 0&&(Te={type:void 0,texture:void 0},Ce[Ae]=Te),(Te.type!==P||Te.texture!==Le)&&(Ee!==Ae&&(i.activeTexture(Ae),Ee=Ae),i.bindTexture(P,Le||ce[P]),Te.type=P,Te.texture=Le)}function b(){let P=Ce[Ee];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function j(){try{i.texSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function fe(){try{i.texSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function We(){try{i.compressedTexSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function Pe(){try{i.texStorage2D(...arguments)}catch(P){P("WebGLState:",P)}}function Oe(){try{i.texStorage3D(...arguments)}catch(P){P("WebGLState:",P)}}function Be(){try{i.texImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function z(){try{i.texImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function he(P){rt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),rt.copy(P))}function Ne(P){at.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),at.copy(P))}function L(P,Le){let Ae=c.get(Le);Ae===void 0&&(Ae=new WeakMap,c.set(Le,Ae));let Te=Ae.get(P);Te===void 0&&(Te=i.getUniformBlockIndex(Le,P.name),Ae.set(P,Te))}function ze(P,Le){let Te=c.get(Le).get(P);l.get(Le)!==Te&&(i.uniformBlockBinding(Le,Te,P.__bindingPointIndex),l.set(Le,Te))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Ee=null,Ce={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,A=null,M=null,T=null,U=null,C=null,I=new ht(0,0,0),W=0,E=!1,y=null,R=null,$=null,X=null,ne=null,rt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:Fe,bindFramebuffer:ge,drawBuffers:me,useProgram:se,setBlending:re,setMaterial:w,setFlipSided:oe,setCullFace:de,setLineWidth:ee,setPolygonOffset:le,setScissorTest:ve,activeTexture:ie,bindTexture:Se,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Be,texImage3D:z,updateUBOMapping:L,uniformBlockBinding:ze,texStorage2D:Pe,texStorage3D:Oe,texSubImage2D:j,texSubImage3D:fe,compressedTexSubImage2D:Y,compressedTexSubImage3D:We,scissor:he,viewport:Ne,reset:Ze}}function bv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,x){return f?new OffscreenCanvas(b,x):fr("canvas")}function _(b,x,N){let j=1,fe=Se(b);if((fe.width>N||fe.height>N)&&(j=N/Math.max(fe.width,fe.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let Y=Math.floor(j*fe.width),We=Math.floor(j*fe.height);h===void 0&&(h=m(Y,We));let Pe=x?m(Y,We):h;return Pe.width=Y,Pe.height=We,Pe.getContext("2d").drawImage(b,0,0,Y,We),ot("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Y+"x"+We+")."),Pe}else return"data"in b&&ot("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),b;return b}function g(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(b,x,N,j,fe=!1){if(b!==null){if(i[b]!==void 0)return i[b];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=x;if(x===i.RED&&(N===i.FLOAT&&(Y=i.R32F),N===i.HALF_FLOAT&&(Y=i.R16F),N===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.R8UI),N===i.UNSIGNED_SHORT&&(Y=i.R16UI),N===i.UNSIGNED_INT&&(Y=i.R32UI),N===i.BYTE&&(Y=i.R8I),N===i.SHORT&&(Y=i.R16I),N===i.INT&&(Y=i.R32I)),x===i.RG&&(N===i.FLOAT&&(Y=i.RG32F),N===i.HALF_FLOAT&&(Y=i.RG16F),N===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RG8UI),N===i.UNSIGNED_SHORT&&(Y=i.RG16UI),N===i.UNSIGNED_INT&&(Y=i.RG32UI),N===i.BYTE&&(Y=i.RG8I),N===i.SHORT&&(Y=i.RG16I),N===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),N===i.UNSIGNED_INT&&(Y=i.RGB32UI),N===i.BYTE&&(Y=i.RGB8I),N===i.SHORT&&(Y=i.RGB16I),N===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),N===i.UNSIGNED_INT&&(Y=i.RGBA32UI),N===i.BYTE&&(Y=i.RGBA8I),N===i.SHORT&&(Y=i.RGBA16I),N===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){let We=fe?hr:bt.getTransfer(j);N===i.FLOAT&&(Y=i.RGBA32F),N===i.HALF_FLOAT&&(Y=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Y=We===Mt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function T(b,x){let N;return b?x===null||x===Pi||x===Gs?N=i.DEPTH24_STENCIL8:x===Kn?N=i.DEPTH32F_STENCIL8:x===Hs&&(N=i.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Pi||x===Gs?N=i.DEPTH_COMPONENT24:x===Kn?N=i.DEPTH_COMPONENT32F:x===Hs&&(N=i.DEPTH_COMPONENT16),N}function U(b,x){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==hn&&b.minFilter!==nn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function C(b){let x=b.target;x.removeEventListener("dispose",C),W(x),x.isVideoTexture&&u.delete(x)}function I(b){let x=b.target;x.removeEventListener("dispose",I),y(x)}function W(b){let x=n.get(b);if(x.__webglInit===void 0)return;let N=b.source,j=d.get(N);if(j){let fe=j[x.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&E(b),Object.keys(j).length===0&&d.delete(N)}n.remove(b)}function E(b){let x=n.get(b);i.deleteTexture(x.__webglTexture);let N=b.source,j=d.get(N);delete j[x.__cacheKey],a.memory.textures--}function y(b){let x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let fe=0;fe<x.__webglFramebuffer[j].length;fe++)i.deleteFramebuffer(x.__webglFramebuffer[j][fe]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=b.textures;for(let j=0,fe=N.length;j<fe;j++){let Y=n.get(N[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(N[j])}n.remove(b)}let R=0;function $(){R=0}function X(){let b=R;return b>=s.maxTextures&&ot("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),R+=1,b}function ne(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function q(b,x){let N=n.get(b);if(b.isVideoTexture&&ve(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){let j=b.image;if(j===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(N,b,x);return}}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function F(b,x){let N=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){ce(N,b,x);return}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function be(b,x){let N=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){ce(N,b,x);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function Z(b,x){let N=n.get(b);if(b.version>0&&N.__version!==b.version){_e(N,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}let Ee={[Xn]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[Ca]:i.MIRRORED_REPEAT},Ce={[hn]:i.NEAREST,[ed]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},He={[sd]:i.NEVER,[ud]:i.ALWAYS,[rd]:i.LESS,[Al]:i.LEQUAL,[ad]:i.EQUAL,[ld]:i.GEQUAL,[od]:i.GREATER,[cd]:i.NOTEQUAL};function je(b,x){if(x.type===Kn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===nn||x.magFilter===uo||x.magFilter===Nr||x.magFilter===Zn||x.minFilter===nn||x.minFilter===uo||x.minFilter===Nr||x.minFilter===Zn)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Ee[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Ee[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Ee[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Ce[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Ce[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,He[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===hn||x.minFilter!==Nr&&x.minFilter!==Zn||x.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function rt(b,x){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",C));let j=x.source,fe=d.get(j);fe===void 0&&(fe={},d.set(j,fe));let Y=ne(x);if(Y!==b.__cacheKey){fe[Y]===void 0&&(fe[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),fe[Y].usedTimes++;let We=fe[b.__cacheKey];We!==void 0&&(fe[b.__cacheKey].usedTimes--,We.usedTimes===0&&E(x)),b.__cacheKey=Y,b.__webglTexture=fe[Y].texture}return N}function at(b,x,N){return Math.floor(Math.floor(b/N)/x)}function st(b,x,N,j){let Y=b.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,N,j,x.data);else{Y.sort((z,he)=>z.start-he.start);let We=0;for(let z=1;z<Y.length;z++){let he=Y[We],Ne=Y[z],L=he.start+he.count,ze=at(Ne.start,x.width,4),Ze=at(he.start,x.width,4);Ne.start<=L+1&&ze===Ze&&at(Ne.start+Ne.count-1,x.width,4)===ze?he.count=Math.max(he.count,Ne.start+Ne.count-he.start):(++We,Y[We]=Ne)}Y.length=We+1;let Pe=i.getParameter(i.UNPACK_ROW_LENGTH),Oe=i.getParameter(i.UNPACK_SKIP_PIXELS),Be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let z=0,he=Y.length;z<he;z++){let Ne=Y[z],L=Math.floor(Ne.start/4),ze=Math.ceil(Ne.count/4),Ze=L%x.width,P=Math.floor(L/x.width),Le=ze,Ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Ze,P,Le,Ae,N,j,x.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Be)}}function ce(b,x,N){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);let fe=rt(b,x),Y=x.source;t.bindTexture(j,b.__webglTexture,i.TEXTURE0+N);let We=n.get(Y);if(Y.version!==We.__version||fe===!0){t.activeTexture(i.TEXTURE0+N);let Pe=bt.getPrimaries(bt.workingColorSpace),Oe=x.colorSpace===di?null:bt.getPrimaries(x.colorSpace),Be=x.colorSpace===di||Pe===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let z=_(x.image,!1,s.maxTextureSize);z=ie(x,z);let he=r.convert(x.format,x.colorSpace),Ne=r.convert(x.type),L=M(x.internalFormat,he,Ne,x.colorSpace,x.isVideoTexture);je(j,x);let ze,Ze=x.mipmaps,P=x.isVideoTexture!==!0,Le=We.__version===void 0||fe===!0,Ae=Y.dataReady,Te=U(x,z);if(x.isDepthTexture)L=T(x.format===Ws,x.type),Le&&(P?t.texStorage2D(i.TEXTURE_2D,1,L,z.width,z.height):t.texImage2D(i.TEXTURE_2D,0,L,z.width,z.height,0,he,Ne,null));else if(x.isDataTexture)if(Ze.length>0){P&&Le&&t.texStorage2D(i.TEXTURE_2D,Te,L,Ze[0].width,Ze[0].height);for(let we=0,pe=Ze.length;we<pe;we++)ze=Ze[we],P?Ae&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,ze.width,ze.height,he,Ne,ze.data):t.texImage2D(i.TEXTURE_2D,we,L,ze.width,ze.height,0,he,Ne,ze.data);x.generateMipmaps=!1}else P?(Le&&t.texStorage2D(i.TEXTURE_2D,Te,L,z.width,z.height),Ae&&st(x,z,he,Ne)):t.texImage2D(i.TEXTURE_2D,0,L,z.width,z.height,0,he,Ne,z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){P&&Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,L,Ze[0].width,Ze[0].height,z.depth);for(let we=0,pe=Ze.length;we<pe;we++)if(ze=Ze[we],x.format!==An)if(he!==null)if(P){if(Ae)if(x.layerUpdates.size>0){let Ye=Ul(ze.width,ze.height,x.format,x.type);for(let Qe of x.layerUpdates){let xt=ze.data.subarray(Qe*Ye/ze.data.BYTES_PER_ELEMENT,(Qe+1)*Ye/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,Qe,ze.width,ze.height,1,he,xt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,ze.width,ze.height,z.depth,he,ze.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,L,ze.width,ze.height,z.depth,0,ze.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?Ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,ze.width,ze.height,z.depth,he,Ne,ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,L,ze.width,ze.height,z.depth,0,he,Ne,ze.data)}else{P&&Le&&t.texStorage2D(i.TEXTURE_2D,Te,L,Ze[0].width,Ze[0].height);for(let we=0,pe=Ze.length;we<pe;we++)ze=Ze[we],x.format!==An?he!==null?P?Ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,ze.width,ze.height,he,ze.data):t.compressedTexImage2D(i.TEXTURE_2D,we,L,ze.width,ze.height,0,ze.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?Ae&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,ze.width,ze.height,he,Ne,ze.data):t.texImage2D(i.TEXTURE_2D,we,L,ze.width,ze.height,0,he,Ne,ze.data)}else if(x.isDataArrayTexture)if(P){if(Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,L,z.width,z.height,z.depth),Ae)if(x.layerUpdates.size>0){let we=Ul(z.width,z.height,x.format,x.type);for(let pe of x.layerUpdates){let Ye=z.data.subarray(pe*we/z.data.BYTES_PER_ELEMENT,(pe+1)*we/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,z.width,z.height,1,he,Ne,Ye)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,he,Ne,z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,L,z.width,z.height,z.depth,0,he,Ne,z.data);else if(x.isData3DTexture)P?(Le&&t.texStorage3D(i.TEXTURE_3D,Te,L,z.width,z.height,z.depth),Ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,he,Ne,z.data)):t.texImage3D(i.TEXTURE_3D,0,L,z.width,z.height,z.depth,0,he,Ne,z.data);else if(x.isFramebufferTexture){if(Le)if(P)t.texStorage2D(i.TEXTURE_2D,Te,L,z.width,z.height);else{let we=z.width,pe=z.height;for(let Ye=0;Ye<Te;Ye++)t.texImage2D(i.TEXTURE_2D,Ye,L,we,pe,0,he,Ne,null),we>>=1,pe>>=1}}else if(Ze.length>0){if(P&&Le){let we=Se(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Te,L,we.width,we.height)}for(let we=0,pe=Ze.length;we<pe;we++)ze=Ze[we],P?Ae&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,he,Ne,ze):t.texImage2D(i.TEXTURE_2D,we,L,he,Ne,ze);x.generateMipmaps=!1}else if(P){if(Le){let we=Se(z);t.texStorage2D(i.TEXTURE_2D,Te,L,we.width,we.height)}Ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ne,z)}else t.texImage2D(i.TEXTURE_2D,0,L,he,Ne,z);g(x)&&p(j),We.__version=Y.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function _e(b,x,N){if(x.image.length!==6)return;let j=rt(b,x),fe=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+N);let Y=n.get(fe);if(fe.version!==Y.__version||j===!0){t.activeTexture(i.TEXTURE0+N);let We=bt.getPrimaries(bt.workingColorSpace),Pe=x.colorSpace===di?null:bt.getPrimaries(x.colorSpace),Oe=x.colorSpace===di||We===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let Be=x.isCompressedTexture||x.image[0].isCompressedTexture,z=x.image[0]&&x.image[0].isDataTexture,he=[];for(let pe=0;pe<6;pe++)!Be&&!z?he[pe]=_(x.image[pe],!0,s.maxCubemapSize):he[pe]=z?x.image[pe].image:x.image[pe],he[pe]=ie(x,he[pe]);let Ne=he[0],L=r.convert(x.format,x.colorSpace),ze=r.convert(x.type),Ze=M(x.internalFormat,L,ze,x.colorSpace),P=x.isVideoTexture!==!0,Le=Y.__version===void 0||j===!0,Ae=fe.dataReady,Te=U(x,Ne);je(i.TEXTURE_CUBE_MAP,x);let we;if(Be){P&&Le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Ze,Ne.width,Ne.height);for(let pe=0;pe<6;pe++){we=he[pe].mipmaps;for(let Ye=0;Ye<we.length;Ye++){let Qe=we[Ye];x.format!==An?L!==null?P?Ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye,0,0,Qe.width,Qe.height,L,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye,Ze,Qe.width,Qe.height,0,Qe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye,0,0,Qe.width,Qe.height,L,ze,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye,Ze,Qe.width,Qe.height,0,L,ze,Qe.data)}}}else{if(we=x.mipmaps,P&&Le){we.length>0&&Te++;let pe=Se(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Ze,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(z){P?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,he[pe].width,he[pe].height,L,ze,he[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ze,he[pe].width,he[pe].height,0,L,ze,he[pe].data);for(let Ye=0;Ye<we.length;Ye++){let xt=we[Ye].image[pe].image;P?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye+1,0,0,xt.width,xt.height,L,ze,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye+1,Ze,xt.width,xt.height,0,L,ze,xt.data)}}else{P?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,L,ze,he[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ze,L,ze,he[pe]);for(let Ye=0;Ye<we.length;Ye++){let Qe=we[Ye];P?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye+1,0,0,L,ze,Qe.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye+1,Ze,L,ze,Qe.image[pe])}}}g(x)&&p(i.TEXTURE_CUBE_MAP),Y.__version=fe.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Fe(b,x,N,j,fe,Y){let We=r.convert(N.format,N.colorSpace),Pe=r.convert(N.type),Oe=M(N.internalFormat,We,Pe,N.colorSpace),Be=n.get(x),z=n.get(N);if(z.__renderTarget=x,!Be.__hasExternalTextures){let he=Math.max(1,x.width>>Y),Ne=Math.max(1,x.height>>Y);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,Y,Oe,he,Ne,x.depth,0,We,Pe,null):t.texImage2D(fe,Y,Oe,he,Ne,0,We,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),le(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,fe,z.__webglTexture,0,ee(x)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,fe,z.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(b,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){let j=x.depthTexture,fe=j&&j.isDepthTexture?j.type:null,Y=T(x.stencilBuffer,fe),We=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=ee(x);le(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,Y,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,We,i.RENDERBUFFER,b)}else{let j=x.textures;for(let fe=0;fe<j.length;fe++){let Y=j[fe],We=r.convert(Y.format,Y.colorSpace),Pe=r.convert(Y.type),Oe=M(Y.internalFormat,We,Pe,Y.colorSpace),Be=ee(x);N&&le(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Oe,x.width,x.height):le(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be,Oe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);let fe=j.__webglTexture,Y=ee(x);if(x.depthTexture.format===ws)le(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(x.depthTexture.format===Ws)le(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function se(b){let x=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let j=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){let fe=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",fe)};j.addEventListener("dispose",fe),x.__depthDisposeCallback=fe}x.__boundDepthTexture=j}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let j=b.texture.mipmaps;j&&j.length>0?me(x.__webglFramebuffer[0],b):me(x.__webglFramebuffer,b)}else if(N){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),ge(x.__webglDepthbuffer[j],b,!1);else{let fe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,Y)}}else{let j=b.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ge(x.__webglDepthbuffer,b,!1);else{let fe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(b,x,N){let j=n.get(b);x!==void 0&&Fe(j.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&se(b)}function Re(b){let x=b.texture,N=n.get(b),j=n.get(x);b.addEventListener("dispose",I);let fe=b.textures,Y=b.isWebGLCubeRenderTarget===!0,We=fe.length>1;if(We||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,a.memory.textures++),Y){N.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[Pe]=[];for(let Oe=0;Oe<x.mipmaps.length;Oe++)N.__webglFramebuffer[Pe][Oe]=i.createFramebuffer()}else N.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let Pe=0;Pe<x.mipmaps.length;Pe++)N.__webglFramebuffer[Pe]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(We)for(let Pe=0,Oe=fe.length;Pe<Oe;Pe++){let Be=n.get(fe[Pe]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&le(b)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Pe=0;Pe<fe.length;Pe++){let Oe=fe[Pe];N.__webglColorRenderbuffer[Pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[Pe]);let Be=r.convert(Oe.format,Oe.colorSpace),z=r.convert(Oe.type),he=M(Oe.internalFormat,Be,z,Oe.colorSpace,b.isXRRenderTarget===!0),Ne=ee(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,he,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,N.__webglColorRenderbuffer[Pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(N.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),je(i.TEXTURE_CUBE_MAP,x);for(let Pe=0;Pe<6;Pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Oe=0;Oe<x.mipmaps.length;Oe++)Fe(N.__webglFramebuffer[Pe][Oe],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Oe);else Fe(N.__webglFramebuffer[Pe],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);g(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Pe=0,Oe=fe.length;Pe<Oe;Pe++){let Be=fe[Pe],z=n.get(Be),he=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(he=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,z.__webglTexture),je(he,Be),Fe(N.__webglFramebuffer,b,Be,i.COLOR_ATTACHMENT0+Pe,he,0),g(Be)&&p(he)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Pe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,j.__webglTexture),je(Pe,x),x.mipmaps&&x.mipmaps.length>0)for(let Oe=0;Oe<x.mipmaps.length;Oe++)Fe(N.__webglFramebuffer[Oe],b,x,i.COLOR_ATTACHMENT0,Pe,Oe);else Fe(N.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,Pe,0);g(x)&&p(Pe),t.unbindTexture()}b.depthBuffer&&se(b)}function re(b){let x=b.textures;for(let N=0,j=x.length;N<j;N++){let fe=x[N];if(g(fe)){let Y=A(b),We=n.get(fe).__webglTexture;t.bindTexture(Y,We),p(Y),t.unbindTexture()}}}let w=[],oe=[];function de(b){if(b.samples>0){if(le(b)===!1){let x=b.textures,N=b.width,j=b.height,fe=i.COLOR_BUFFER_BIT,Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,We=n.get(b),Pe=x.length>1;if(Pe)for(let Be=0;Be<x.length;Be++)t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);let Oe=b.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Be=0;Be<x.length;Be++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),Pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,We.__webglColorRenderbuffer[Be]);let z=n.get(x[Be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,z,0)}i.blitFramebuffer(0,0,N,j,0,0,N,j,fe,i.NEAREST),l===!0&&(w.length=0,oe.length=0,w.push(i.COLOR_ATTACHMENT0+Be),b.depthBuffer&&b.resolveDepthBuffer===!1&&(w.push(Y),oe.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pe)for(let Be=0;Be<x.length;Be++){t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,We.__webglColorRenderbuffer[Be]);let z=n.get(x[Be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ee(b){return Math.min(s.maxSamples,b.samples)}function le(b){let x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ve(b){let x=a.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function ie(b,x){let N=b.colorSpace,j=b.format,fe=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==Wi&&N!==di&&(bt.getTransfer(N)===Mt?(j!==An||fe!==kn)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",N)),x}function Se(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=$,this.setTexture2D=q,this.setTexture2DArray=F,this.setTexture3D=be,this.setTextureCube=Z,this.rebindTextures=ae,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=le}function Mv(i,e){function t(n,s=di){let r,a=bt.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ml)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vl)return i.BYTE;if(n===yl)return i.SHORT;if(n===Hs)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Qi)return i.HALF_FLOAT;if(n===Sl)return i.ALPHA;if(n===wl)return i.RGB;if(n===An)return i.RGBA;if(n===ws)return i.DEPTH_COMPONENT;if(n===Ws)return i.DEPTH_STENCIL;if(n===El)return i.RED;if(n===mo)return i.RED_INTEGER;if(n===go)return i.RG;if(n===xo)return i.RG_INTEGER;if(n===_o)return i.RGBA_INTEGER;if(n===Ur||n===Fr||n===Or||n===Br)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===yo||n===bo||n===Mo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===So||n===wo||n===Eo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===So||n===wo)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Eo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===To||n===Ao||n===Co||n===Ro||n===Io||n===Po||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===ko)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===To)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===Vo||n===Ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Go||n===Wo||n===Xo||n===qo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new br(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tn({vertexShader:Sv,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$l=class extends ui{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new Yl,p={},A=t.getContextAttributes(),M=null,T=null,U=[],C=[],I=new Ue,W=null,E=new jt;E.viewport=new Nt;let y=new jt;y.viewport=new Nt;let R=[E,y],$=new Qa,X=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let _e=U[ce];return _e===void 0&&(_e=new Ps,U[ce]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ce){let _e=U[ce];return _e===void 0&&(_e=new Ps,U[ce]=_e),_e.getGripSpace()},this.getHand=function(ce){let _e=U[ce];return _e===void 0&&(_e=new Ps,U[ce]=_e),_e.getHandSpace()};function q(ce){let _e=C.indexOf(ce.inputSource);if(_e===-1)return;let Fe=U[_e];Fe!==void 0&&(Fe.update(ce.inputSource,ce.frame,c||a),Fe.dispatchEvent({type:ce.type,data:ce.inputSource}))}function F(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",be);for(let ce=0;ce<U.length;ce++){let _e=C[ce];_e!==null&&(C[ce]=null,U[ce].disconnect(_e))}X=null,ne=null,g.reset();for(let ce in p)delete p[ce];e.setRenderTarget(M),f=null,d=null,h=null,s=null,T=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(W),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,n.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){o=ce,n.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ce){c=ce},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",F),s.addEventListener("inputsourceschange",be),A.xrCompatible!==!0&&await t.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,ge=null,me=null;A.depth&&(me=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Fe=A.stencil?Ws:ws,ge=A.stencil?Gs:Pi);let se={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new qn(d.textureWidth,d.textureHeight,{format:An,type:kn,depthTexture:new yr(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Fe={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new qn(f.framebufferWidth,f.framebufferHeight,{format:An,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function be(ce){for(let _e=0;_e<ce.removed.length;_e++){let Fe=ce.removed[_e],ge=C.indexOf(Fe);ge>=0&&(C[ge]=null,U[ge].disconnect(Fe))}for(let _e=0;_e<ce.added.length;_e++){let Fe=ce.added[_e],ge=C.indexOf(Fe);if(ge===-1){for(let se=0;se<U.length;se++)if(se>=C.length){C.push(Fe),ge=se;break}else if(C[se]===null){C[se]=Fe,ge=se;break}if(ge===-1)break}let me=U[ge];me&&me.connect(Fe)}}let Z=new B,Ee=new B;function Ce(ce,_e,Fe){Z.setFromMatrixPosition(_e.matrixWorld),Ee.setFromMatrixPosition(Fe.matrixWorld);let ge=Z.distanceTo(Ee),me=_e.projectionMatrix.elements,se=Fe.projectionMatrix.elements,ae=me[14]/(me[10]-1),Re=me[14]/(me[10]+1),re=(me[9]+1)/me[5],w=(me[9]-1)/me[5],oe=(me[8]-1)/me[0],de=(se[8]+1)/se[0],ee=ae*oe,le=ae*de,ve=ge/(-oe+de),ie=ve*-oe;if(_e.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(ie),ce.translateZ(ve),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),me[10]===-1)ce.projectionMatrix.copy(_e.projectionMatrix),ce.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{let Se=ae+ve,b=Re+ve,x=ee-ie,N=le+(ge-ie),j=re*Re/b*Se,fe=w*Re/b*Se;ce.projectionMatrix.makePerspective(x,N,j,fe,Se,b),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function He(ce,_e){_e===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(_e.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;let _e=ce.near,Fe=ce.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(Fe=g.depthFar)),$.near=y.near=E.near=_e,$.far=y.far=E.far=Fe,(X!==$.near||ne!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),X=$.near,ne=$.far),$.layers.mask=ce.layers.mask|6,E.layers.mask=$.layers.mask&3,y.layers.mask=$.layers.mask&5;let ge=ce.parent,me=$.cameras;He($,ge);for(let se=0;se<me.length;se++)He(me[se],ge);me.length===2?Ce($,E,y):$.projectionMatrix.copy(E.projectionMatrix),je(ce,$,ge)};function je(ce,_e,Fe){Fe===null?ce.matrix.copy(_e.matrixWorld):(ce.matrix.copy(Fe.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(_e.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(_e.projectionMatrix),ce.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Ia*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ce){l=ce,d!==null&&(d.fixedFoveation=ce),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ce)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh($)},this.getCameraTexture=function(ce){return p[ce]};let rt=null;function at(ce,_e){if(u=_e.getViewerPose(c||a),m=_e,u!==null){let Fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let ge=!1;Fe.length!==$.cameras.length&&($.cameras.length=0,ge=!0);for(let Re=0;Re<Fe.length;Re++){let re=Fe[Re],w=null;if(f!==null)w=f.getViewport(re);else{let de=h.getViewSubImage(d,re);w=de.viewport,Re===0&&(e.setRenderTargetTextures(T,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(T))}let oe=R[Re];oe===void 0&&(oe=new jt,oe.layers.enable(Re),oe.viewport=new Nt,R[Re]=oe),oe.matrix.fromArray(re.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(re.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(w.x,w.y,w.width,w.height),Re===0&&($.matrix.copy(oe.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),ge===!0&&$.cameras.push(oe)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let Re=h.getDepthInformation(Fe[0]);Re&&Re.isValid&&Re.texture&&g.init(Re,s.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Re=0;Re<Fe.length;Re++){let re=Fe[Re].camera;if(re){let w=p[re];w||(w=new br,p[re]=w);let oe=h.getCameraImage(re);w.sourceTexture=oe}}}}for(let Fe=0;Fe<U.length;Fe++){let ge=C[Fe],me=U[Fe];ge!==null&&me!==void 0&&me.update(ge,_e,c||a)}rt&&rt(ce,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),m=null}let st=new Hd;st.setAnimationLoop(at),this.setAnimationLoop=function(ce){rt=ce},this.dispose=function(){}}},ns=new Bn,Ev=new It;function Tv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Pl(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,A,M,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,T)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,A,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===an&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===an&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let A=e.get(p),M=A.envMap,T=A.envMapRotation;M&&(g.envMap.value=M,ns.copy(T),ns.x*=-1,ns.y*=-1,ns.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),g.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(ns)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,A,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let A=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Av(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,M){let T=M.program;n.uniformBlockBinding(A,T)}function c(A,M){let T=s[A.id];T===void 0&&(m(A),T=u(A),s[A.id]=T,A.addEventListener("dispose",g));let U=M.program;n.updateUBOMapping(A,U);let C=e.render.frame;r[A.id]!==C&&(d(A),r[A.id]=C)}function u(A){let M=h();A.__bindingPointIndex=M;let T=i.createBuffer(),U=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,U,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let M=s[A.id],T=A.uniforms,U=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,I=T.length;C<I;C++){let W=Array.isArray(T[C])?T[C]:[T[C]];for(let E=0,y=W.length;E<y;E++){let R=W[E];if(f(R,C,E,U)===!0){let $=R.__offset,X=Array.isArray(R.value)?R.value:[R.value],ne=0;for(let q=0;q<X.length;q++){let F=X[q],be=_(F);typeof F=="number"||typeof F=="boolean"?(R.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,$+ne,R.__data)):F.isMatrix3?(R.__data[0]=F.elements[0],R.__data[1]=F.elements[1],R.__data[2]=F.elements[2],R.__data[3]=0,R.__data[4]=F.elements[3],R.__data[5]=F.elements[4],R.__data[6]=F.elements[5],R.__data[7]=0,R.__data[8]=F.elements[6],R.__data[9]=F.elements[7],R.__data[10]=F.elements[8],R.__data[11]=0):(F.toArray(R.__data,ne),ne+=be.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(A,M,T,U){let C=A.value,I=M+"_"+T;if(U[I]===void 0)return typeof C=="number"||typeof C=="boolean"?U[I]=C:U[I]=C.clone(),!0;{let W=U[I];if(typeof C=="number"||typeof C=="boolean"){if(W!==C)return U[I]=C,!0}else if(W.equals(C)===!1)return W.copy(C),!0}return!1}function m(A){let M=A.uniforms,T=0,U=16;for(let I=0,W=M.length;I<W;I++){let E=Array.isArray(M[I])?M[I]:[M[I]];for(let y=0,R=E.length;y<R;y++){let $=E[y],X=Array.isArray($.value)?$.value:[$.value];for(let ne=0,q=X.length;ne<q;ne++){let F=X[ne],be=_(F),Z=T%U,Ee=Z%be.boundary,Ce=Z+Ee;T+=Ee,Ce!==0&&U-Ce<be.storage&&(T+=U-Ce),$.__data=new Float32Array(be.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=T,T+=be.storage}}}let C=T%U;return C>0&&(T+=U-C),A.__size=T,A.__cache={},this}function _(A){let M={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=48,M.storage=48):A.isMatrix4?(M.boundary=64,M.storage=64):A.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",A),M}function g(A){let M=A.target;M.removeEventListener("dispose",g);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Cv=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),fi=null;function Rv(){return fi===null&&(fi=new Ds(Cv,32,32,go,Qi),fi.minFilter=nn,fi.magFilter=nn,fi.wrapS=En,fi.wrapT=En,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var Zo=class{constructor(e={}){let{canvas:t=hd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Set([_o,xo,mo]),_=new Set([kn,Pi,Hs,Gs,fo,po]),g=new Uint32Array(4),p=new Int32Array(4),A=null,M=null,T=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1;this._outputColorSpace=qt;let W=0,E=0,y=null,R=-1,$=null,X=new Nt,ne=new Nt,q=null,F=new ht(0),be=0,Z=t.width,Ee=t.height,Ce=1,He=null,je=null,rt=new Nt(0,0,Z,Ee),at=new Nt(0,0,Z,Ee),st=!1,ce=new Ns,_e=!1,Fe=!1,ge=new It,me=new B,se=new Nt,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function re(){return y===null?Ce:1}let w=n;function oe(v,D){return t.getContext(v,D)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",Ye,!1),w===null){let D="webgl2";if(w=oe(D,v),w===null)throw oe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw v("WebGLRenderer: "+v.message),v}let de,ee,le,ve,ie,Se,b,x,N,j,fe,Y,We,Pe,Oe,Be,z,he,Ne,L,ze,Ze,P,Le;function Ae(){de=new Xx(w),de.init(),Ze=new Mv(w,de),ee=new Fx(w,de,e,Ze),le=new yv(w,de),ee.reversedDepthBuffer&&d&&le.buffers.depth.setReversed(!0),ve=new $x(w),ie=new ov,Se=new bv(w,de,le,ie,ee,Ze,ve),b=new Bx(C),x=new Wx(C),N=new jm(w),P=new Nx(w,N),j=new qx(w,N,ve,P),fe=new Kx(w,j,N,ve),Ne=new Zx(w,ee,Se),Be=new Ox(ie),Y=new av(C,b,x,de,ee,P,Be),We=new Tv(C,ie),Pe=new lv,Oe=new mv(de),he=new Dx(C,b,x,le,fe,f,l),z=new _v(C,fe,ee),Le=new Av(w,ve,ee,le),L=new Ux(w,de,ve),ze=new Yx(w,de,ve),ve.programs=Y.programs,C.capabilities=ee,C.extensions=de,C.properties=ie,C.renderLists=Pe,C.shadowMap=z,C.state=le,C.info=ve}Ae();let Te=new $l(C,w);this.xr=Te,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let v=de.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=de.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(v){v!==void 0&&(Ce=v,this.setSize(Z,Ee,!1))},this.getSize=function(v){return v.set(Z,Ee)},this.setSize=function(v,D,V=!0){if(Te.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=v,Ee=D,t.width=Math.floor(v*Ce),t.height=Math.floor(D*Ce),V===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(Z*Ce,Ee*Ce).floor()},this.setDrawingBufferSize=function(v,D,V){Z=v,Ee=D,Ce=V,t.width=Math.floor(v*V),t.height=Math.floor(D*V),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(X)},this.getViewport=function(v){return v.copy(rt)},this.setViewport=function(v,D,V,G){v.isVector4?rt.set(v.x,v.y,v.z,v.w):rt.set(v,D,V,G),le.viewport(X.copy(rt).multiplyScalar(Ce).round())},this.getScissor=function(v){return v.copy(at)},this.setScissor=function(v,D,V,G){v.isVector4?at.set(v.x,v.y,v.z,v.w):at.set(v,D,V,G),le.scissor(ne.copy(at).multiplyScalar(Ce).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(v){le.setScissorTest(st=v)},this.setOpaqueSort=function(v){He=v},this.setTransparentSort=function(v){je=v},this.getClearColor=function(v){return v.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,V=!0){let G=0;if(v){let S=!1;if(y!==null){let J=y.texture.format;S=m.has(J)}if(S){let J=y.texture.type,te=_.has(J),ye=he.getClearColor(),ue=he.getClearAlpha(),Ge=ye.r,ke=ye.g,O=ye.b;te?(g[0]=Ge,g[1]=ke,g[2]=O,g[3]=ue,w.clearBufferuiv(w.COLOR,0,g)):(p[0]=Ge,p[1]=ke,p[2]=O,p[3]=ue,w.clearBufferiv(w.COLOR,0,p))}else G|=w.COLOR_BUFFER_BIT}D&&(G|=w.DEPTH_BUFFER_BIT),V&&(G|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),he.dispose(),Pe.dispose(),Oe.dispose(),ie.dispose(),b.dispose(),x.dispose(),fe.dispose(),P.dispose(),Le.dispose(),Y.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",en),Te.removeEventListener("sessionend",Ot),$t.stop()};function we(v){v.preventDefault(),Il("WebGLRenderer: Context Lost."),I=!0}function pe(){Il("WebGLRenderer: Context Restored."),I=!1;let v=ve.autoReset,D=z.enabled,V=z.autoUpdate,G=z.needsUpdate,S=z.type;Ae(),ve.autoReset=v,z.enabled=D,z.autoUpdate=V,z.needsUpdate=G,z.type=S}function Ye(v){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Qe(v){let D=v.target;D.removeEventListener("dispose",Qe),xt(D)}function xt(v){dt(v),ie.remove(v)}function dt(v){let D=ie.get(v).programs;D!==void 0&&(D.forEach(function(V){Y.releaseProgram(V)}),v.isShaderMaterial&&Y.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,V,G,S,J){D===null&&(D=ae);let te=S.isMesh&&S.matrixWorld.determinant()<0,ye=Qn(v,D,V,G,S);le.setMaterial(G,te);let ue=V.index,Ge=1;if(G.wireframe===!0){if(ue=j.getWireframeAttribute(V),ue===void 0)return;Ge=2}let ke=V.drawRange,O=V.attributes.position,Q=ke.start*Ge,H=(ke.start+ke.count)*Ge;J!==null&&(Q=Math.max(Q,J.start*Ge),H=Math.min(H,(J.start+J.count)*Ge)),ue!==null?(Q=Math.max(Q,0),H=Math.min(H,ue.count)):O!=null&&(Q=Math.max(Q,0),H=Math.min(H,O.count));let De=H-Q;if(De<0||De===1/0)return;P.setup(S,G,ye,V,ue);let Ve,Ie=L;if(ue!==null&&(Ve=N.get(ue),Ie=ze,Ie.setIndex(Ve)),S.isMesh)G.wireframe===!0?(le.setLineWidth(G.wireframeLinewidth*re()),Ie.setMode(w.LINES)):Ie.setMode(w.TRIANGLES);else if(S.isLine){let Me=G.linewidth;Me===void 0&&(Me=1),le.setLineWidth(Me*re()),S.isLineSegments?Ie.setMode(w.LINES):S.isLineLoop?Ie.setMode(w.LINE_LOOP):Ie.setMode(w.LINE_STRIP)}else S.isPoints?Ie.setMode(w.POINTS):S.isSprite&&Ie.setMode(w.TRIANGLES);if(S.isBatchedMesh)if(S._multiDrawInstances!==null)Ts("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount,S._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))Ie.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else{let Me=S._multiDrawStarts,et=S._multiDrawCounts,$e=S._multiDrawCount,Ke=ue?N.get(ue).bytesPerElement:1,Je=ie.get(G).currentProgram.getUniforms();for(let tt=0;tt<$e;tt++)Je.setValue(w,"_gl_DrawID",tt),Ie.render(Me[tt]/Ke,et[tt])}else if(S.isInstancedMesh)Ie.renderInstances(Q,De,S.count);else if(V.isInstancedBufferGeometry){let Me=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,et=Math.min(V.instanceCount,Me);Ie.renderInstances(Q,De,et)}else Ie.render(Q,De)};function Lt(v,D,V){v.transparent===!0&&v.side===bn&&v.forceSinglePass===!1?(v.side=an,v.needsUpdate=!0,pn(v,D,V),v.side=li,v.needsUpdate=!0,pn(v,D,V),v.side=bn):pn(v,D,V)}this.compile=function(v,D,V=null){V===null&&(V=v),M=Oe.get(V),M.init(D),U.push(M),V.traverseVisible(function(S){S.isLight&&S.layers.test(D.layers)&&(M.pushLight(S),S.castShadow&&M.pushShadow(S))}),v!==V&&v.traverseVisible(function(S){S.isLight&&S.layers.test(D.layers)&&(M.pushLight(S),S.castShadow&&M.pushShadow(S))}),M.setupLights();let G=new Set;return v.traverse(function(S){if(!(S.isMesh||S.isPoints||S.isLine||S.isSprite))return;let J=S.material;if(J)if(Array.isArray(J))for(let te=0;te<J.length;te++){let ye=J[te];Lt(ye,V,S),G.add(ye)}else Lt(J,V,S),G.add(J)}),M=U.pop(),G},this.compileAsync=function(v,D,V=null){let G=this.compile(v,D,V);return new Promise(S=>{function J(){if(G.forEach(function(te){ie.get(te).currentProgram.isReady()&&G.delete(te)}),G.size===0){S(v);return}setTimeout(J,10)}de.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Ct=null;function Ni(v){Ct&&Ct(v)}function en(){$t.stop()}function Ot(){$t.start()}let $t=new Hd;$t.setAnimationLoop(Ni),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(v){Ct=v,Te.setAnimationLoop(v),v===null?$t.stop():$t.start()},Te.addEventListener("sessionstart",en),Te.addEventListener("sessionend",Ot),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(D),D=Te.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,D,y),M=Oe.get(v,U.length),M.init(D),U.push(M),ge.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ce.setFromProjectionMatrix(ge,On,D.reversedDepth),Fe=this.localClippingEnabled,_e=Be.init(this.clippingPlanes,Fe),A=Pe.get(v,T.length),A.init(),T.push(A),Te.enabled===!0&&Te.isPresenting===!0){let J=C.xr.getDepthSensingMesh();J!==null&&Mn(J,D,-1/0,C.sortObjects)}Mn(v,D,0,C.sortObjects),A.finish(),C.sortObjects===!0&&A.sort(He,je),Re=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Re&&he.addToRenderList(A,v),this.info.render.frame++,_e===!0&&Be.beginShadows();let V=M.state.shadowsArray;z.render(V,v,D),_e===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=A.opaque,S=A.transmissive;if(M.setupLights(),D.isArrayCamera){let J=D.cameras;if(S.length>0)for(let te=0,ye=J.length;te<ye;te++){let ue=J[te];Gt(G,S,v,ue)}Re&&he.render(v);for(let te=0,ye=J.length;te<ye;te++){let ue=J[te];jn(A,v,ue,ue.viewport)}}else S.length>0&&Gt(G,S,v,D),Re&&he.render(v),jn(A,v,D);y!==null&&E===0&&(Se.updateMultisampleRenderTarget(y),Se.updateRenderTargetMipmap(y)),v.isScene===!0&&v.onAfterRender(C,v,D),P.resetDefaultState(),R=-1,$=null,U.pop(),U.length>0?(M=U[U.length-1],_e===!0&&Be.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?A=T[T.length-1]:A=null};function Mn(v,D,V,G){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)M.pushLight(v),v.castShadow&&M.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ce.intersectsSprite(v)){G&&se.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ge);let te=fe.update(v),ye=v.material;ye.visible&&A.push(v,te,ye,V,se.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ce.intersectsObject(v))){let te=fe.update(v),ye=v.material;if(G&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),se.copy(v.boundingSphere.center)):(te.boundingSphere===null&&te.computeBoundingSphere(),se.copy(te.boundingSphere.center)),se.applyMatrix4(v.matrixWorld).applyMatrix4(ge)),Array.isArray(ye)){let ue=te.groups;for(let Ge=0,ke=ue.length;Ge<ke;Ge++){let O=ue[Ge],Q=ye[O.materialIndex];Q&&Q.visible&&A.push(v,te,Q,V,se.z,O)}}else ye.visible&&A.push(v,te,ye,V,se.z,null)}}let J=v.children;for(let te=0,ye=J.length;te<ye;te++)Mn(J[te],D,V,G)}function jn(v,D,V,G){let{opaque:S,transmissive:J,transparent:te}=v;M.setupLightsView(V),_e===!0&&Be.setGlobalState(C.clippingPlanes,V),G&&le.viewport(X.copy(G)),S.length>0&&Sn(S,D,V),J.length>0&&Sn(J,D,V),te.length>0&&Sn(te,D,V),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Gt(v,D,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[G.id]===void 0&&(M.state.transmissionRenderTarget[G.id]=new qn(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?Qi:kn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));let J=M.state.transmissionRenderTarget[G.id],te=G.viewport||X;J.setSize(te.z*C.transmissionResolutionScale,te.w*C.transmissionResolutionScale);let ye=C.getRenderTarget(),ue=C.getActiveCubeFace(),Ge=C.getActiveMipmapLevel();C.setRenderTarget(J),C.getClearColor(F),be=C.getClearAlpha(),be<1&&C.setClearColor(16777215,.5),C.clear(),Re&&he.render(V);let ke=C.toneMapping;C.toneMapping=hi;let O=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),_e===!0&&Be.setGlobalState(C.clippingPlanes,G),Sn(v,V,G),Se.updateMultisampleRenderTarget(J),Se.updateRenderTargetMipmap(J),de.has("WEBGL_multisampled_render_to_texture")===!1){let Q=!1;for(let H=0,De=D.length;H<De;H++){let Ve=D[H],{object:Ie,geometry:Me,material:et,group:$e}=Ve;if(et.side===bn&&Ie.layers.test(G.layers)){let Ke=et.side;et.side=an,et.needsUpdate=!0,zn(Ie,V,G,Me,et,$e),et.side=Ke,et.needsUpdate=!0,Q=!0}}Q===!0&&(Se.updateMultisampleRenderTarget(J),Se.updateRenderTargetMipmap(J))}C.setRenderTarget(ye,ue,Ge),C.setClearColor(F,be),O!==void 0&&(G.viewport=O),C.toneMapping=ke}function Sn(v,D,V){let G=D.isScene===!0?D.overrideMaterial:null;for(let S=0,J=v.length;S<J;S++){let te=v[S],{object:ye,geometry:ue,group:Ge}=te,ke=te.material;ke.allowOverride===!0&&G!==null&&(ke=G),ye.layers.test(V.layers)&&zn(ye,D,V,ue,ke,Ge)}}function zn(v,D,V,G,S,J){v.onBeforeRender(C,D,V,G,S,J),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),S.onBeforeRender(C,D,V,G,v,J),S.transparent===!0&&S.side===bn&&S.forceSinglePass===!1?(S.side=an,S.needsUpdate=!0,C.renderBufferDirect(V,D,G,S,v,J),S.side=li,S.needsUpdate=!0,C.renderBufferDirect(V,D,G,S,v,J),S.side=bn):C.renderBufferDirect(V,D,G,S,v,J),v.onAfterRender(C,D,V,G,S,J)}function pn(v,D,V){D.isScene!==!0&&(D=ae);let G=ie.get(v),S=M.state.lights,J=M.state.shadowsArray,te=S.state.version,ye=Y.getParameters(v,S.state,J,D,V),ue=Y.getProgramCacheKey(ye),Ge=G.programs;G.environment=v.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(v.isMeshStandardMaterial?x:b).get(v.envMap||G.environment),G.envMapRotation=G.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Ge===void 0&&(v.addEventListener("dispose",Qe),Ge=new Map,G.programs=Ge);let ke=Ge.get(ue);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===te)return mn(v,ye),ke}else ye.uniforms=Y.getUniforms(v),v.onBeforeCompile(ye,C),ke=Y.acquireProgram(ye,ue),Ge.set(ue,ke),G.uniforms=ye.uniforms;let O=G.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(O.clippingPlanes=Be.uniform),mn(v,ye),G.needsLights=Rn(v),G.lightsStateVersion=te,G.needsLights&&(O.ambientLightColor.value=S.state.ambient,O.lightProbe.value=S.state.probe,O.directionalLights.value=S.state.directional,O.directionalLightShadows.value=S.state.directionalShadow,O.spotLights.value=S.state.spot,O.spotLightShadows.value=S.state.spotShadow,O.rectAreaLights.value=S.state.rectArea,O.ltc_1.value=S.state.rectAreaLTC1,O.ltc_2.value=S.state.rectAreaLTC2,O.pointLights.value=S.state.point,O.pointLightShadows.value=S.state.pointShadow,O.hemisphereLights.value=S.state.hemi,O.directionalShadowMap.value=S.state.directionalShadowMap,O.directionalShadowMatrix.value=S.state.directionalShadowMatrix,O.spotShadowMap.value=S.state.spotShadowMap,O.spotLightMatrix.value=S.state.spotLightMatrix,O.spotLightMap.value=S.state.spotLightMap,O.pointShadowMap.value=S.state.pointShadowMap,O.pointShadowMatrix.value=S.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function Cn(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=Ys.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function mn(v,D){let V=ie.get(v);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function Qn(v,D,V,G,S){D.isScene!==!0&&(D=ae),Se.resetTextureUnits();let J=D.fog,te=G.isMeshStandardMaterial?D.environment:null,ye=y===null?C.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Wi,ue=(G.isMeshStandardMaterial?x:b).get(G.envMap||te),Ge=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),O=!!V.morphAttributes.position,Q=!!V.morphAttributes.normal,H=!!V.morphAttributes.color,De=hi;G.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(De=C.toneMapping);let Ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ie=Ve!==void 0?Ve.length:0,Me=ie.get(G),et=M.state.lights;if(_e===!0&&(Fe===!0||v!==$)){let _t=v===$&&G.id===R;Be.setState(G,v,_t)}let $e=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==et.state.version||Me.outputColorSpace!==ye||S.isBatchedMesh&&Me.batching===!1||!S.isBatchedMesh&&Me.batching===!0||S.isBatchedMesh&&Me.batchingColor===!0&&S.colorTexture===null||S.isBatchedMesh&&Me.batchingColor===!1&&S.colorTexture!==null||S.isInstancedMesh&&Me.instancing===!1||!S.isInstancedMesh&&Me.instancing===!0||S.isSkinnedMesh&&Me.skinning===!1||!S.isSkinnedMesh&&Me.skinning===!0||S.isInstancedMesh&&Me.instancingColor===!0&&S.instanceColor===null||S.isInstancedMesh&&Me.instancingColor===!1&&S.instanceColor!==null||S.isInstancedMesh&&Me.instancingMorph===!0&&S.morphTexture===null||S.isInstancedMesh&&Me.instancingMorph===!1&&S.morphTexture!==null||Me.envMap!==ue||G.fog===!0&&Me.fog!==J||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Be.numPlanes||Me.numIntersection!==Be.numIntersection)||Me.vertexAlphas!==Ge||Me.vertexTangents!==ke||Me.morphTargets!==O||Me.morphNormals!==Q||Me.morphColors!==H||Me.toneMapping!==De||Me.morphTargetsCount!==Ie)&&($e=!0):($e=!0,Me.__version=G.version);let Ke=Me.currentProgram;$e===!0&&(Ke=pn(G,D,S));let Je=!1,tt=!1,ft=!1,nt=Ke.getUniforms(),vt=Me.uniforms;if(le.useProgram(Ke.program)&&(Je=!0,tt=!0,ft=!0),G.id!==R&&(R=G.id,tt=!0),Je||$!==v){le.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),nt.setValue(w,"projectionMatrix",v.projectionMatrix),nt.setValue(w,"viewMatrix",v.matrixWorldInverse);let Tt=nt.map.cameraPosition;Tt!==void 0&&Tt.setValue(w,me.setFromMatrixPosition(v.matrixWorld)),ee.logarithmicDepthBuffer&&nt.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&nt.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),$!==v&&($=v,tt=!0,ft=!0)}if(S.isSkinnedMesh){nt.setOptional(w,S,"bindMatrix"),nt.setOptional(w,S,"bindMatrixInverse");let _t=S.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),nt.setValue(w,"boneTexture",_t.boneTexture,Se))}S.isBatchedMesh&&(nt.setOptional(w,S,"batchingTexture"),nt.setValue(w,"batchingTexture",S._matricesTexture,Se),nt.setOptional(w,S,"batchingIdTexture"),nt.setValue(w,"batchingIdTexture",S._indirectTexture,Se),nt.setOptional(w,S,"batchingColorTexture"),S._colorsTexture!==null&&nt.setValue(w,"batchingColorTexture",S._colorsTexture,Se));let it=V.morphAttributes;if((it.position!==void 0||it.normal!==void 0||it.color!==void 0)&&Ne.update(S,V,Ke),(tt||Me.receiveShadow!==S.receiveShadow)&&(Me.receiveShadow=S.receiveShadow,nt.setValue(w,"receiveShadow",S.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(vt.envMap.value=ue,vt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(vt.envMapIntensity.value=D.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=Rv()),tt&&(nt.setValue(w,"toneMappingExposure",C.toneMappingExposure),Me.needsLights&&ei(vt,ft),J&&G.fog===!0&&We.refreshFogUniforms(vt,J),We.refreshMaterialUniforms(vt,G,Ce,Ee,M.state.transmissionRenderTarget[v.id]),Ys.upload(w,Cn(Me),vt,Se)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ys.upload(w,Cn(Me),vt,Se),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&nt.setValue(w,"center",S.center),nt.setValue(w,"modelViewMatrix",S.modelViewMatrix),nt.setValue(w,"normalMatrix",S.normalMatrix),nt.setValue(w,"modelMatrix",S.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let _t=G.uniformsGroups;for(let Tt=0,cn=_t.length;Tt<cn;Tt++){let tn=_t[Tt];Le.update(tn,Ke),Le.bind(tn,Ke)}}return Ke}function ei(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Rn(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(v,D,V){let G=ie.get(v);G.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ie.get(v.texture).__webglTexture=D,ie.get(v.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let V=ie.get(v);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0};let k=w.createFramebuffer();this.setRenderTarget=function(v,D=0,V=0){y=v,W=D,E=V;let G=!0,S=null,J=!1,te=!1;if(v){let ue=ie.get(v);if(ue.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(w.FRAMEBUFFER,null),G=!1;else if(ue.__webglFramebuffer===void 0)Se.setupRenderTarget(v);else if(ue.__hasExternalTextures)Se.rebindTextures(v,ie.get(v.texture).__webglTexture,ie.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let O=v.depthTexture;if(ue.__boundDepthTexture!==O){if(O!==null&&ie.has(O)&&(v.width!==O.image.width||v.height!==O.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(v)}}let Ge=v.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(te=!0);let ke=ie.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ke[D])?S=ke[D][V]:S=ke[D],J=!0):v.samples>0&&Se.useMultisampledRTT(v)===!1?S=ie.get(v).__webglMultisampledFramebuffer:Array.isArray(ke)?S=ke[V]:S=ke,X.copy(v.viewport),ne.copy(v.scissor),q=v.scissorTest}else X.copy(rt).multiplyScalar(Ce).floor(),ne.copy(at).multiplyScalar(Ce).floor(),q=st;if(V!==0&&(S=k),le.bindFramebuffer(w.FRAMEBUFFER,S)&&G&&le.drawBuffers(v,S),le.viewport(X),le.scissor(ne),le.setScissorTest(q),J){let ue=ie.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue.__webglTexture,V)}else if(te){let ue=D;for(let Ge=0;Ge<v.textures.length;Ge++){let ke=ie.get(v.textures[Ge]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ge,ke.__webglTexture,V,ue)}}else if(v!==null&&V!==0){let ue=ie.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ue.__webglTexture,V)}R=-1},this.readRenderTargetPixels=function(v,D,V,G,S,J,te,ye=0){if(!(v&&v.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ie.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&te!==void 0&&(ue=ue[te]),ue){le.bindFramebuffer(w.FRAMEBUFFER,ue);try{let Ge=v.textures[ye],ke=Ge.format,O=Ge.type;if(!ee.textureFormatReadable(ke)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(O)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-G&&V>=0&&V<=v.height-S&&(v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ye),w.readPixels(D,V,G,S,Ze.convert(ke),Ze.convert(O),J))}finally{let Ge=y!==null?ie.get(y).__webglFramebuffer:null;le.bindFramebuffer(w.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(v,D,V,G,S,J,te,ye=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ie.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&te!==void 0&&(ue=ue[te]),ue)if(D>=0&&D<=v.width-G&&V>=0&&V<=v.height-S){le.bindFramebuffer(w.FRAMEBUFFER,ue);let Ge=v.textures[ye],ke=Ge.format,O=Ge.type;if(!ee.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(O))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Q=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Q),w.bufferData(w.PIXEL_PACK_BUFFER,J.byteLength,w.STREAM_READ),v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ye),w.readPixels(D,V,G,S,Ze.convert(ke),Ze.convert(O),0);let H=y!==null?ie.get(y).__webglFramebuffer:null;le.bindFramebuffer(w.FRAMEBUFFER,H);let De=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await dd(w,De,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Q),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,J),w.deleteBuffer(Q),w.deleteSync(De),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,V=0){let G=Math.pow(2,-V),S=Math.floor(v.image.width*G),J=Math.floor(v.image.height*G),te=D!==null?D.x:0,ye=D!==null?D.y:0;Se.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,V,0,0,te,ye,S,J),le.unbindTexture()};let K=w.createFramebuffer(),xe=w.createFramebuffer();this.copyTextureToTexture=function(v,D,V=null,G=null,S=0,J=null){J===null&&(S!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=S,S=0):J=0);let te,ye,ue,Ge,ke,O,Q,H,De,Ve=v.isCompressedTexture?v.mipmaps[J]:v.image;if(V!==null)te=V.max.x-V.min.x,ye=V.max.y-V.min.y,ue=V.isBox3?V.max.z-V.min.z:1,Ge=V.min.x,ke=V.min.y,O=V.isBox3?V.min.z:0;else{let it=Math.pow(2,-S);te=Math.floor(Ve.width*it),ye=Math.floor(Ve.height*it),v.isDataArrayTexture?ue=Ve.depth:v.isData3DTexture?ue=Math.floor(Ve.depth*it):ue=1,Ge=0,ke=0,O=0}G!==null?(Q=G.x,H=G.y,De=G.z):(Q=0,H=0,De=0);let Ie=Ze.convert(D.format),Me=Ze.convert(D.type),et;D.isData3DTexture?(Se.setTexture3D(D,0),et=w.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Se.setTexture2DArray(D,0),et=w.TEXTURE_2D_ARRAY):(Se.setTexture2D(D,0),et=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);let $e=w.getParameter(w.UNPACK_ROW_LENGTH),Ke=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Je=w.getParameter(w.UNPACK_SKIP_PIXELS),tt=w.getParameter(w.UNPACK_SKIP_ROWS),ft=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ve.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ve.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ge),w.pixelStorei(w.UNPACK_SKIP_ROWS,ke),w.pixelStorei(w.UNPACK_SKIP_IMAGES,O);let nt=v.isDataArrayTexture||v.isData3DTexture,vt=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let it=ie.get(v),_t=ie.get(D),Tt=ie.get(it.__renderTarget),cn=ie.get(_t.__renderTarget);le.bindFramebuffer(w.READ_FRAMEBUFFER,Tt.__webglFramebuffer),le.bindFramebuffer(w.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let tn=0;tn<ue;tn++)nt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ie.get(v).__webglTexture,S,O+tn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ie.get(D).__webglTexture,J,De+tn)),w.blitFramebuffer(Ge,ke,te,ye,Q,H,te,ye,w.DEPTH_BUFFER_BIT,w.NEAREST);le.bindFramebuffer(w.READ_FRAMEBUFFER,null),le.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(S!==0||v.isRenderTargetTexture||ie.has(v)){let it=ie.get(v),_t=ie.get(D);le.bindFramebuffer(w.READ_FRAMEBUFFER,K),le.bindFramebuffer(w.DRAW_FRAMEBUFFER,xe);for(let Tt=0;Tt<ue;Tt++)nt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,it.__webglTexture,S,O+Tt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,it.__webglTexture,S),vt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_t.__webglTexture,J,De+Tt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,_t.__webglTexture,J),S!==0?w.blitFramebuffer(Ge,ke,te,ye,Q,H,te,ye,w.COLOR_BUFFER_BIT,w.NEAREST):vt?w.copyTexSubImage3D(et,J,Q,H,De+Tt,Ge,ke,te,ye):w.copyTexSubImage2D(et,J,Q,H,Ge,ke,te,ye);le.bindFramebuffer(w.READ_FRAMEBUFFER,null),le.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else vt?v.isDataTexture||v.isData3DTexture?w.texSubImage3D(et,J,Q,H,De,te,ye,ue,Ie,Me,Ve.data):D.isCompressedArrayTexture?w.compressedTexSubImage3D(et,J,Q,H,De,te,ye,ue,Ie,Ve.data):w.texSubImage3D(et,J,Q,H,De,te,ye,ue,Ie,Me,Ve):v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,J,Q,H,te,ye,Ie,Me,Ve.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,J,Q,H,Ve.width,Ve.height,Ie,Ve.data):w.texSubImage2D(w.TEXTURE_2D,J,Q,H,te,ye,Ie,Me,Ve);w.pixelStorei(w.UNPACK_ROW_LENGTH,$e),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ke),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Je),w.pixelStorei(w.UNPACK_SKIP_ROWS,tt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ft),J===0&&D.generateMipmaps&&w.generateMipmap(et),le.unbindTexture()},this.initRenderTarget=function(v){ie.get(v).__webglFramebuffer===void 0&&Se.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Se.setTextureCube(v,0):v.isData3DTexture?Se.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Se.setTexture2DArray(v,0):Se.setTexture2D(v,0),le.unbindTexture()},this.resetState=function(){W=0,E=0,y=null,le.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};var Yd={portrait:[1.6,2.25],landscape:[2.25,1.6]},Pv={left:.27,center:.5,right:.73},Gr=.018,on=.007,zt=4,$d=1/.05,Lv=1/960,Dv=2,pi=72,Zd=24,Zl=.36,nf=.095,Nv=.0135,jo=.036,Hr=.15,Kd=1024,Jd={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},Qo=[0,.07,.93,1],Uv=[-.95,-.28,.28,.95],Fv=9,Ov=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,Bv=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,kv=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,zv=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,jd={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},Di=(i,e,t)=>Math.min(t,Math.max(e,i)),Vr=(i,e,t)=>i+(e-i)*t,Kl=(i,e)=>{try{let t=document.createElement("canvas").getContext("2d");if(!t)return e;t.fillStyle="#000000",t.fillStyle=i;let n=t.fillStyle;if(n.startsWith("#")){let r=parseInt(n.slice(1),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}let s=n.match(/[\d.]+/g);return!s||s.length<3?e:[Number(s[0])/255,Number(s[1])/255,Number(s[2])/255]}catch{return e}},Vv=i=>.2126*i[0]+.7152*i[1]+.0722*i[2],ec=(i,e=1)=>`rgba(${Math.round(i[0]*255)}, ${Math.round(i[1]*255)}, ${Math.round(i[2]*255)}, ${e})`,sf=i=>{let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}},eu=(i,e,t,n,s,r)=>{let a=Math.max(0,Math.min(r,n/2,s/2)),o=a*.4477;i.moveTo(e+a,t),i.lineTo(e+n-a,t),i.bezierCurveTo(e+n-o,t,e+n,t+o,e+n,t+a),i.lineTo(e+n,t+s-a),i.bezierCurveTo(e+n,t+s-o,e+n-o,t+s,e+n-a,t+s),i.lineTo(e+a,t+s),i.bezierCurveTo(e+o,t+s,e,t+s-o,e,t+s-a),i.lineTo(e,t+a),i.bezierCurveTo(e,t+o,e+o,t,e+a,t)},Jl=(i,e)=>{if(!e)return Promise.resolve(null);let t=i.get(e);if(t)return t;let n=new Promise(s=>{let r=new Image;r.crossOrigin="anonymous",r.decoding="async",r.onload=()=>s(r),r.onerror=()=>s(null),r.src=e});return i.set(e,n),n},Qd=(i,e)=>{let[t,n]=Yd[i]||Yd.portrait,s=Vr(.03,Math.min(t,n)*.2,Di(e,0,1)),r={width:.34,height:.07,y:n/2-.13},a=n/2-.055;return{width:t,height:n,radius:s,slot:r,ringY:a,hangY:a+nf}},Hv=i=>{let{width:e,height:t,radius:n,slot:s}=i,r=new Ai;eu(r,-e/2+on,-t/2+on,e-on*2,t-on*2,Math.max(n-on,.005));let a=new Yi;eu(a,-s.width/2-on,s.y-s.height/2-on,s.width+on*2,s.height+on*2,s.height/2+on),r.holes.push(a);let o=new Bs(r,{depth:Gr,bevelEnabled:!0,bevelThickness:on,bevelSize:on,bevelSegments:5,curveSegments:24});o.translate(0,0,-Gr/2);let l=new Rr(r,24),c=l.getAttribute("position"),u=l.getAttribute("uv");for(let h=0;h<c.count;h++)u.setXY(h,(c.getX(h)+e/2)/e,(c.getY(h)+t/2)/t);return u.needsUpdate=!0,{body:o,face:l}},ef=i=>{let e=new Ai,t=i*1.16;eu(e,-t/2+.014,-Hr/2+.014,t-.028,Hr-.028,.024);let n=new Bs(e,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return n.translate(0,0,-.01),n},Gv=i=>{let e=Qo.length,t=new fn;t.setAttribute("position",new Yt(new Float32Array(i*e*3),3)),t.setAttribute("normal",new Yt(new Float32Array(i*e*3),3)),t.setAttribute("uv",new Yt(new Float32Array(i*e*2),2));let n=[];for(let s=0;s<i-1;s++)for(let r=0;r<e-1;r++){let a=s*e+r;n.push(a,a+e,a+1,a+1,a+e,a+e+1)}return t.setIndex(n),t},Wv=i=>{let e=new Ls;e.background=new ht(.035,.035,.04);let t=new Zi(1,1),n=[],s=(o,l,c,u=0)=>{let h=new Xi({color:new ht(o,o,o),side:bn});n.push(h);let d=new kt(t,h);d.position.set(...l),d.scale.set(c[0],c[1],1),d.lookAt(0,0,0),d.rotateZ(u),e.add(d)};s(2.6,[0,4.5,8],[9,4]),s(6,[-5.5,.5,7],[.9,14]),s(4,[5,-.5,8],[.6,14]),s(3.5,[0,-1,9],[24,.35],Math.PI/3),s(2.5,[1,2.5,9],[24,.2],Math.PI/3),s(1.4,[0,6,-6],[12,4]),s(.5,[0,-7,1],[16,6]),s(.9,[8,0,-2],[4,10]);let r=new $s(i),a=r.fromScene(e,.035);return r.dispose(),t.dispose(),n.forEach(o=>o.dispose()),a},jl=(i,e)=>{let t=new qi(i);return t.colorSpace=qt,t.anisotropy=e,t},Xv=()=>{let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d");if(!t)return new qi(e);let n=sf(7),s=Float32Array.from({length:16384},()=>n()),r=(l,c)=>{let u=0;for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++)u+=s[(c+h+128)%128*128+(l+d+128)%128];return u/9*1.6},a=t.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=r((c-1+128)%128,l)-r((c+1)%128,l),h=r(c,(l-1+128)%128)-r(c,(l+1)%128),d=Math.hypot(u,h,1),f=(l*128+c)*4;a.data[f]=(u/d*.5+.5)*255,a.data[f+1]=(h/d*.5+.5)*255,a.data[f+2]=(1/d*.5+.5)*255,a.data[f+3]=255}t.putImageData(a,0,0);let o=new qi(e);return o.wrapS=Xn,o.wrapT=Xn,o.repeat.set(5,7),o},qv=()=>{let t=sf(19),n=Float32Array.from({length:16384},()=>t()),s=l=>Math.sqrt(Math.max(0,1-4*l*l)),r=(l,c)=>{let u=(l%128+128)%128,h=(c%128+128)%128,d=u/128*8,f=h/128*8,m=Math.floor(d),_=Math.floor(f),g=d-m-.5,p=f-_-.5,A=(m+_)%2===0,M=s(g)*(.55+.45*Math.cos(p*Math.PI*(A?1:.6))),T=s(p)*(.55+.45*Math.cos(g*Math.PI*(A?.6:1)));return(A?Math.max(M,T*.7):Math.max(T,M*.7))+n[h*128+u]*.08},a=new Uint8Array(16384*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=(r(c-1,l)-r(c+1,l))*1.6,h=(r(c,l-1)-r(c,l+1))*1.6,d=Math.hypot(u,h,1),f=(l*128+c)*4;a[f]=(u/d*.5+.5)*255,a[f+1]=(h/d*.5+.5)*255,a[f+2]=(1/d*.5+.5)*255,a[f+3]=255}let o=new Ds(a,128,128);return o.wrapS=Xn,o.wrapT=Xn,o.magFilter=nn,o.minFilter=Zn,o.generateMipmaps=!0,o.needsUpdate=!0,o},Yv=(i,e,t,n,s)=>{let r=(s==="contain"?Math.min:Math.max)(t/e.width,n/e.height),a=e.width*r,o=e.height*r;i.drawImage(e,(t-a)/2,(n-o)/2,a,o)},tf=(i,e,t,n)=>{let s=i.getContext("2d");s&&(s.fillStyle=ec(t),s.fillRect(0,0,i.width,i.height),e&&Yv(s,e,i.width,i.height,n))},$v=(i,e,t)=>{let s=e?Math.max(64,Math.round(e.width/e.height*192)):384;i.width=192,i.height=s;let r=i.getContext("2d");if(!r)return s/192;if(r.fillStyle=ec(t),r.fillRect(0,0,192,s),e)return r.save(),r.translate(192,0),r.rotate(Math.PI/2),r.drawImage(e,0,0,s,192),r.restore(),s/192;let a=Vv(t)>.5?[0,0,0]:[1,1,1];r.fillStyle=ec(a,.05);for(let o=0;o<s;o+=4)r.fillRect(0,o,192,1);r.fillStyle=ec(a,.2);for(let o=0;o<s;o+=14)r.fillRect(192*.075,o,2,8),r.fillRect(192*.925-2,o,2,8);return s/192},Zv=()=>{let i=()=>Array.from({length:zt+1},()=>new B);return{nodes:i(),previous:i(),velocities:i(),lengths:new Float64Array(zt),impulses:new Float64Array(zt),rest:1,anchor:new B,body:{position:new B,previous:new B,velocity:new B,quaternion:new dn,previousQuaternion:new dn,angular:new B,mass:1,inverseInertia:new B(1,1,1),hang:new B},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},St={a:new B,b:new B,c:new B,d:new B,e:new B,f:new B,g:new B,pin:new B,q:new dn,r:new dn},tu=(i,e,t)=>(St.r.copy(i.quaternion).invert(),t.copy(e).applyQuaternion(St.r),t.set(t.x*i.inverseInertia.x,t.y*i.inverseInertia.y,t.z*i.inverseInertia.z),t.applyQuaternion(i.quaternion)),rf=(i,e)=>{let{x:t,y:n,z:s,w:r}=i;i.x+=.5*(e.x*r+e.y*s-e.z*n),i.y+=.5*(e.y*r+e.z*t-e.x*s),i.z+=.5*(e.z*r+e.x*n-e.y*t),i.w+=.5*(-e.x*t-e.y*n-e.z*s),i.normalize()},af=(i,e,t)=>{let n=St.c.crossVectors(e,t);return 1/i.mass+n.dot(tu(i,n,St.d))},of=(i,e,t)=>{i.position.addScaledVector(t,1/i.mass),rf(i.quaternion,tu(i,St.e.crossVectors(e,t),St.f))},Kv=(i,e,t,n)=>{let{nodes:s,body:r}=i,a=s[e],o=e===0?0:$d,l=e===zt-1,c=St.g,u=s[e+1];l&&(c.copy(r.hang).applyQuaternion(r.quaternion),u=St.b.copy(r.position).add(c));let h=St.a.subVectors(u,a),d=h.length(),f=d-i.rest;if(f<=0||d<1e-9)return;let m=h.divideScalar(d),_=l?af(r,c,m):$d,g=(d-i.lengths[e])/t,A=(n.hold*Math.tanh(n.stiffness*f/n.hold)+n.spring*f+n.bandDamping*Math.max(0,g))*t*t-i.impulses[e];if(A<=0)return;let M=Math.min(f/(o+_),A);i.impulses[e]+=M,o&&a.addScaledVector(m,M*o),l?of(r,c,m.multiplyScalar(-M)):u.addScaledVector(m,-M*_)},Jv=(i,e,t)=>{let n=St.g.copy(e.local).applyQuaternion(i.quaternion),s=St.a.copy(t).sub(i.position).sub(n),r=s.length();if(r<1e-9)return;let a=s.divideScalar(r),o=r/af(i,n,a);of(i,n,a.multiplyScalar(o))},Ql=(i,e,t)=>{let{nodes:n,previous:s,velocities:r,body:a,anchor:o}=i;n[0].copy(o);for(let c=1;c<=zt;c++)n[c].copy(n[c-1]),t?n[c].x+=i.rest:n[c].y-=i.rest;a.quaternion.identity(),t&&a.quaternion.setFromAxisAngle(new B(0,0,1),Math.PI/2),a.hang.set(0,e.hangY,0);let l=St.a.copy(a.hang).applyQuaternion(a.quaternion);a.position.copy(n[zt]).sub(l),a.previous.copy(a.position),a.previousQuaternion.copy(a.quaternion),a.velocity.set(0,0,0),a.angular.set(0,0,0);for(let c=0;c<=zt;c++)s[c].copy(n[c]),r[c].set(0,0,0);i.lengths.fill(i.rest),i.turn=0,i.twist=0,i.twistRaw=0,i.calm=0},jv=(i,e,t)=>{i.rest=t/zt;let{width:n,height:s}=e,r=i.body,a=Gr+on*2;r.mass=1,r.inverseInertia.set(12/(s*s+a*a),12/(n*n+a*a),12/(n*n+s*s)),r.hang.set(0,e.hangY,0)},Qv=(i,e,t,n)=>{let s=Math.max(1,Math.ceil(e/Lv-1e-6)),r=e/s,{nodes:a,previous:o,velocities:l,body:c}=i,u=t.breeze*(Math.sin(n*.53)*.7+Math.sin(n*1.31+1.7)*.3)*3,h=t.breeze*Math.sin(n*.37+.6)*2,d=i.grab,f=St.pin,m=Math.exp(-t.nodeDrag*r),_=Math.exp(-t.linearDrag*r),g=Math.exp(-t.angularDrag*r);for(let A=0;A<s;A++){for(let y=1;y<zt;y++){let R=l[y];R.y-=t.gravity*r,R.x+=u*r,R.z+=h*r,o[y].copy(a[y]),a[y].addScaledVector(R,r)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let M=c.quaternion;if(d){let y=St.q.copy(d.rotation).multiply(St.r.copy(M).invert());y.w<0&&y.set(-y.x,-y.y,-y.z,-y.w);let R=St.a.set(y.x,y.y,y.z).multiplyScalar(2*t.grip);R.addScaledVector(c.angular,-t.gripDamping),c.angular.addScaledVector(tu(c,R,St.b),r)}let T=St.a.set(0,1,0).applyQuaternion(M),U=St.b.set(-T.x*T.z,-T.y*T.z,1-T.z*T.z);if(U.lengthSq()>.001){let y=St.d.set(0,0,1).applyQuaternion(M),R=Math.atan2(St.e.crossVectors(U,y).dot(T),U.dot(y)),$=R-i.twistRaw;$>Math.PI?$-=Math.PI*2:$<-Math.PI&&($+=Math.PI*2),i.twist+=$,i.twistRaw=R}if(!d){let y=c.angular.dot(T);c.angular.addScaledVector(T,(t.twist*(i.turn-i.twist)-t.twistDamping*y)*r)}c.velocity.y-=t.gravity*r,c.velocity.x+=u*.35*r,c.velocity.z+=h*.35*r,c.position.addScaledVector(c.velocity,r),rf(c.quaternion,St.f.copy(c.angular).multiplyScalar(r)),i.impulses.fill(0),d&&f.lerpVectors(d.from,d.target,(A+1)/s);for(let y=0;y<Dv;y++){for(let R=0;R<zt;R++)Kv(i,R,r,t);d&&Jv(c,d,f)}for(let y=1;y<zt;y++){let R=l[y].subVectors(a[y],o[y]).divideScalar(r).multiplyScalar(m);R.multiplyScalar(1/(1+t.nodeAir*R.length()*r))}c.velocity.subVectors(c.position,c.previous).divideScalar(r);let C=St.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(C.x,C.y,C.z).multiplyScalar(2/r*(C.w<0?-1:1));let I=St.a.set(0,0,1).applyQuaternion(c.quaternion),W=c.velocity.dot(I),E=St.b.copy(c.velocity).addScaledVector(I,-W);E.multiplyScalar(1/(1+t.air*E.length()*r)),c.velocity.copy(E).addScaledVector(I,W/(1+t.broadside*Math.abs(W)*r)).multiplyScalar(_),c.angular.multiplyScalar(g/(1+t.spinAir*c.angular.length()*r)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),a[zt].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let y=0;y<zt;y++)i.lengths[y]=a[y].distanceTo(a[y+1])}d&&d.from.copy(d.target);let p=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let A=1;A<zt;A++)p+=l[A].lengthSq()*.05;i.calm=p<2e-4?i.calm+e:0},ey=({frontImage:i,backImage:e,imageFit:t="cover",cardColor:n="#ffffff",orientation:s="portrait",finish:r="glossy",cornerRadius:a=.3,size:o=.6,anchor:l="center",strapLength:c=.5,strapImage:u,strapColor:h="#111111",strapWidth:d=.65,metal:f="silver",gravity:m=1,damping:_=.5,elasticity:g=.5,breeze:p=.5,interactive:A=!0,intro:M=!0,className:T="",style:U})=>{let C=ct(null),I=ct(null),W=ct(null);return I.current={frontImage:window.portfolioFiles?.[i?.replace(/^\//,"")]??i,backImage:window.portfolioFiles?.[e?.replace(/^\//,"")]??e,imageFit:t==="contain"?"contain":"cover",cardColor:n,orientation:s==="landscape"?"landscape":"portrait",finish:r,cornerRadius:a,size:o,anchor:l,strapLength:c,strapImage:window.portfolioFiles?.[u?.replace(/^\//,"")]??u,strapColor:h,strapWidth:d,metal:f,gravity:m,damping:_,elasticity:g,breeze:p,interactive:A,intro:M},Zt(()=>{W.current?.()}),Zt(()=>{let E=C.current;if(!E)return;let y;try{y=new Zo({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{let S=document.createElement("button");S.type="button",S.className="lanyard-fallback",S.setAttribute("aria-label","Flip Shivam Mishra field pass");let J=new Image,te=!1;return J.src=I.current.frontImage,J.alt="Shivam Mishra field pass",S.onclick=()=>{te=!te,J.src=te?I.current.backImage:I.current.frontImage},S.appendChild(J),E.appendChild(S),()=>S.remove()}y.setClearColor(0,0),y.outputColorSpace=qt,y.toneMapping=oo,y.toneMappingExposure=1;let R=y.domElement;R.className="lanyard-canvas",R.tabIndex=0,R.setAttribute("role","button"),R.setAttribute("aria-label","Shivam Mishra field pass. Drag to swing, or press Enter or Space to flip."),E.appendChild(R);let $=Math.min(8,y.capabilities.getMaxAnisotropy()),X=new Ls,ne=Wv(y);X.environment=ne.texture;let q=new jt(Zd,1,.1,200),F=new Vs(16777215,1.6);F.position.set(-2.5,4,6);let be=new Vs(16777215,.35);be.position.set(3,-1,4),X.add(F,be);let Z=new Map,Ee={front:null,back:null,strap:null},Ce=document.createElement("canvas"),He=document.createElement("canvas"),je=document.createElement("canvas"),rt=jl(Ce,$),at=jl(He,$),st=jl(je,$);st.wrapS=En,st.wrapT=Xn;let ce=Xv(),_e=qv(),Fe={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new B},foilFill:{value:new B},foilTop:{value:new B}},ge=S=>{Object.assign(S.uniforms,Fe),S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
${Ov}`).replace("#include <project_vertex>",`#include <project_vertex>
${Bv}`),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
${kv}`).replace("#include <opaque_fragment>",`${zv}
#include <opaque_fragment>`)},me=new Ci({map:rt,normalMap:ce,normalScale:new Ue(.06,.06)}),se=new Ci({map:at,normalMap:ce,normalScale:new Ue(.06,.06)});me.onBeforeCompile=ge,se.onBeforeCompile=ge;let ae=new Ci,Re=new zs({metalness:1}),re=new Ci({map:st,normalMap:_e,normalScale:new Ue(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new ht(.32,.32,.34),side:bn}),w=new Gn,oe=new kt(void 0,ae),de=new kt(void 0,me),ee=new kt(void 0,se),le=new kt(new ks(nf,Nv,18,72),Re);le.rotation.y=Math.PI/2-.7,w.add(oe,de,ee,le),X.add(w);let ve=Gv(pi),ie=new kt(ve,re);ie.frustumCulled=!1,X.add(ie);let Se=new Gn,b=new kt(ef(Zl),Re);b.position.y=jo+Hr/2-.004;let x=new kt(new ks(jo,.0105,14,40),Re);Se.add(b,x),X.add(Se);let N=Zv(),j=[],fe=new B,Y=new B,We=new Fs(j,!1,"centripetal"),Pe={width:1,height:1},Oe=Qd("portrait",.3),Be={},z=Zl,he=2,Ne=0,L=performance.now(),ze=0,Ze=!0,P=!0,Le=!1,Ae=!1,Te=null,we=0,pe=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Ye=()=>{let S=I.current,J=Kl(S.cardColor,[1,1,1]),te=Kd,ye=Math.round(Kd*Oe.height/Oe.width);(Ce.width!==te||Ce.height!==ye)&&(Ce.width=te,Ce.height=ye,He.width=te,He.height=ye,rt.dispose(),at.dispose()),tf(Ce,Ee.front,J,S.imageFit),tf(He,Ee.back||Ee.front,J,S.imageFit),rt.needsUpdate=!0,at.needsUpdate=!0,Gt()},Qe=()=>{let S=I.current;he=$v(je,Ee.strap,Kl(S.strapColor,[.07,.07,.07])),_e.repeat.set(2,2*he),st.dispose(),st.needsUpdate=!0,Gt()},xt=()=>{let S=I.current,J=Pe.width/Pe.height,te=Oe.height/Di(S.size,.15,.9),ye=Oe.width/.72;te*J<ye&&(te=ye/J);let ue=te*J;q.aspect=J,q.position.set(0,0,te/2/Math.tan(Zd*Math.PI/360)),q.lookAt(0,0,0),q.updateProjectionMatrix(),q.updateMatrixWorld(),Fe.foilKey.value.set(-2.5,4,6).normalize().transformDirection(q.matrixWorldInverse),Fe.foilFill.value.set(3,-1,4).normalize().transformDirection(q.matrixWorldInverse),Fe.foilTop.value.set(.5,4.5,8).normalize().transformDirection(q.matrixWorldInverse);let Ge=((Pv[S.anchor]??.5)-.5)*ue,ke=te/2+.2,Q=te/2-te*Vr(.12,.42,Di(S.strapLength,0,1))+(Oe.hangY-Oe.height/2);N.anchor.set(Ge,ke,0),jv(N,Oe,ke-Q),N.nodes[0].copy(N.anchor),N.previous[0].copy(N.anchor)},dt=()=>{let S=I.current,J=`${S.orientation}|${S.cornerRadius}`;if(J!==Be.layoutKey){Oe=Qd(S.orientation,S.cornerRadius);let Q=Hv(Oe);oe.geometry.dispose(),de.geometry.dispose(),ee.geometry.dispose(),oe.geometry=Q.body,de.geometry=Q.face,ee.geometry=Q.face.clone(),de.position.z=Gr/2+on+6e-4,ee.rotation.y=Math.PI,ee.position.z=-(Gr/2+on+6e-4),le.position.set(0,Oe.ringY,0),Be.framingKey=""}let te=`${J}|${S.size}|${S.anchor}|${S.strapLength}|${Pe.width}|${Pe.height}`;te!==Be.framingKey&&(xt(),Le?N.grab||Ql(N,Oe,!1):(Ql(N,Oe,S.intro&&!pe),Le=!0));let ye=`${S.frontImage}|${S.backImage}|${S.strapImage}`;if(ye!==Be.imageKey){let Q=++we;Promise.all([Jl(Z,S.frontImage),Jl(Z,S.backImage),Jl(Z,S.strapImage)]).then(([H,De,Ve])=>{!P||Q!==we||(Ee.front=H,Ee.back=De,Ee.strap=Ve,Ye(),Qe())})}let ue=`${J}|${S.cardColor}|${S.imageFit}`;ue!==Be.faceKey&&Ye(),S.strapColor!==Be.strapColor&&Qe();let Ge=Jd[S.finish]||Jd.glossy,ke=Kl(S.cardColor,[1,1,1]);[me,se].forEach(Q=>{Q.roughness=Ge.roughness,Q.metalness=Ge.metalness,Q.clearcoat=Ge.clearcoat,Q.clearcoatRoughness=Ge.clearcoatRoughness,Q.anisotropy=Ge.anisotropy}),Fe.foilStrength.value=Ge.foil,Fe.foilAspect.value=Oe.height/Oe.width,ae.color.setRGB(ke[0]*.92,ke[1]*.92,ke[2]*.92,qt),ae.roughness=Math.min(Ge.roughness,.35),ae.metalness=Ge.metalness,ae.clearcoat=1,ae.clearcoatRoughness=.08;let O=jd[S.metal]||jd.silver;Re.color.set(O.color),Re.roughness=O.roughness,z=Zl*Di(S.strapWidth,.4,2),z!==Be.strapScale&&(b.geometry.dispose(),b.geometry=ef(z)),R.style.touchAction=S.interactive?"pan-y":"auto",Be={layoutKey:J,framingKey:te,imageKey:ye,faceKey:ue,strapColor:S.strapColor,strapScale:z},Gt()},Lt=Array.from({length:pi},()=>new B),Ct=Array.from({length:pi},()=>new B),Ni=Uv.map(S=>[Math.cos(S),Math.sin(S)]),en={tangent:new B,toCamera:new B,basis:new It,up:new B,across:new B,facing:new B,end:new B},Ot=()=>{let S=N.nodes[zt],J=jo+Hr+.05,te=zt-1;for(;te>0&&N.nodes[te].distanceTo(S)<J*1.1;)te--;let ye=en.up.subVectors(N.nodes[te],S);ye.lengthSq()<1e-8&&ye.set(0,1,0).applyQuaternion(N.body.quaternion),ye.normalize(),fe.copy(S).addScaledVector(ye,J),Y.copy(S).addScaledVector(ye,jo+Hr*.35),j.length=0;for(let Je=0;Je<=te;Je++)j.push(N.nodes[Je]);j.push(fe,Y),We.updateArcLengths();for(let Je=0;Je<pi;Je++)We.getPointAt(Je/(pi-1),Lt[Je]);let ue=We.getLength(),Ge=1-fe.distanceTo(Y)/Math.max(ue,.001),ke=ve.getAttribute("position"),O=ve.getAttribute("normal"),Q=ve.getAttribute("uv"),H=Qo.length,De=N.rest*zt,Ve=De/(z*he),Ie=z/Math.pow(Math.max(1,ue/Math.max(De,.001)),.35),{tangent:Me,toCamera:et,across:$e,facing:Ke}=en;for(let Je=0;Je<pi;Je++){Me.subVectors(Lt[Math.min(pi-1,Je+1)],Lt[Math.max(0,Je-1)]),Me.lengthSq()<1e-12&&Me.set(0,-1,0),Me.normalize(),et.subVectors(q.position,Lt[Je]).normalize();let tt=Ct[Je].crossVectors(et,Me);tt.lengthSq()<1e-10&&tt.copy(Je>0?Ct[Je-1]:St.a.set(1,0,0)),tt.normalize(),Je>0&&tt.dot(Ct[Je-1])<0&&tt.negate();let ft=-N.twist*Math.pow(Math.min(1,Je/(pi-1)/Ge),1.3);Ke.crossVectors(Me,tt),$e.copy(tt).multiplyScalar(Math.cos(ft)).addScaledVector(Ke,Math.sin(ft)),Ke.crossVectors(Me,$e);let nt=Lt[Je],vt=(1-Je/(pi-1))*Ve;for(let it=0;it<H;it++){let _t=Je*H+it,Tt=(Qo[it]-.5)*Ie,[cn,tn]=Ni[it];ke.setXYZ(_t,nt.x+$e.x*Tt,nt.y+$e.y*Tt,nt.z+$e.z*Tt),O.setXYZ(_t,Ke.x*cn+$e.x*tn,Ke.y*cn+$e.y*tn,Ke.z*cn+$e.z*tn),Q.setXY(_t,Qo[it],vt)}}en.end.copy($e),ke.needsUpdate=!0,O.needsUpdate=!0,Q.needsUpdate=!0,$e.copy(en.end).addScaledVector(ye,-en.end.dot(ye)).normalize(),Ke.crossVectors($e,ye).normalize(),en.basis.makeBasis($e,ye,Ke),Se.quaternion.setFromRotationMatrix(en.basis),Se.position.copy(S)},$t=()=>{w.position.copy(N.body.position),w.quaternion.copy(N.body.quaternion),Ot(),y.render(X,q)},Mn=()=>{let S=I.current,J=40*Di(S.gravity,0,3),te=Math.max(J,20),ye=Di(S.elasticity,0,1),ue=Di(S.damping,0,1);return{gravity:J,hold:te*Vr(2.2,5.5,ye),stiffness:te*10*zt,spring:te*Vr(.1,.4,ye)*zt,bandDamping:te*Vr(.3,.08,ye)*zt,linearDrag:.25*Math.pow(16,ue),angularDrag:.5*Math.pow(12,ue),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:pe?0:Di(S.breeze,0,1)}},jn=S=>{if(Ne=0,!P)return;let J=Math.min(1/30,Math.max(1/240,(S-L)/1e3));L=S,ze+=J;let te=Mn();Qv(N,J,te,ze);let ye=N.body;Number.isFinite(ye.position.x+ye.position.y+ye.position.z+ye.quaternion.w)||(N.grab=null,Ql(N,Oe,!1)),$t();let ue=N.calm>1.2&&!N.grab&&te.breeze===0;Ze&&!ue&&(Ne=requestAnimationFrame(jn))},Gt=()=>{Ne||!Ze||!P||(N.calm=0,L=performance.now(),Ne=requestAnimationFrame(jn))},Sn=new Lr,zn=new Ue,pn=S=>{let J=R.getBoundingClientRect();zn.set((S.clientX-J.left)/J.width*2-1,-((S.clientY-J.top)/J.height)*2+1),Sn.setFromCamera(zn,q)},Cn=()=>(w.updateMatrixWorld(),Sn.intersectObjects([oe,de,ee],!1)[0]||null),mn=S=>{R.style.cursor!==S&&(R.style.cursor=S)},Qn=S=>{let J=N.body,te=St.a.set(0,1,0).applyQuaternion(J.quaternion),ye=N.turn>0?-1:1;if(N.turn===0){let ue=St.c.subVectors(S,q.position).normalize();ye=St.b.subVectors(S,J.position).cross(ue).dot(te)<0?-1:1}N.turn=N.turn===0?Math.PI*ye:0,J.angular.addScaledVector(te,Fv*ye)},ei=S=>{if(!I.current.interactive||S.button>0)return;pn(S);let J=Cn();J&&(N.grab={local:J.point.clone().sub(N.body.position).applyQuaternion(N.body.quaternion.clone().invert()),rotation:N.body.quaternion.clone(),reach:J.distance,from:J.point.clone(),target:J.point.clone()},Te={x:S.clientX,y:S.clientY,time:performance.now(),point:J.point.clone()},R.setPointerCapture?.(S.pointerId),mn("grabbing"),S.preventDefault(),Gt())},Rn=S=>{if(I.current.interactive){if(pn(S),N.grab){Te&&Math.hypot(S.clientX-Te.x,S.clientY-Te.y)>6&&(Te=null),Sn.ray.at(N.grab.reach,N.grab.target),Gt();return}S.pointerType!=="touch"&&(Ae=!!Cn(),mn(Ae?"grab":""))}},k=S=>{N.grab&&(N.grab=null,Te&&S.type==="pointerup"&&performance.now()-Te.time<450&&Qn(Te.point),Te=null,R.releasePointerCapture?.(S.pointerId),mn(Ae&&S.pointerType!=="touch"?"grab":""),Gt())},K=S=>{!I.current.interactive||S.touches.length!==1||(pn(S.touches[0]),Cn()&&S.preventDefault())},xe=S=>{!I.current.interactive||!["Enter"," "].includes(S.key)||(S.preventDefault(),S.repeat||(Qn(N.body.position),Gt()))};R.addEventListener("keydown",xe),R.addEventListener("pointerdown",ei),R.addEventListener("pointermove",Rn),R.addEventListener("pointerup",k),R.addEventListener("pointercancel",k),R.addEventListener("lostpointercapture",k),R.addEventListener("touchstart",K,{passive:!1});let v=()=>{Pe.width=Math.max(1,E.clientWidth),Pe.height=Math.max(1,E.clientHeight),y.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),y.setSize(Pe.width,Pe.height,!1),dt(),$t()},D=new ResizeObserver(v);D.observe(E);let V=new IntersectionObserver(([S])=>{Ze=S.isIntersecting,Ze&&Gt()});V.observe(E);let G=()=>{document.hidden||Gt()};return document.addEventListener("visibilitychange",G),W.current=dt,v(),()=>{P=!1,cancelAnimationFrame(Ne),W.current=null,D.disconnect(),V.disconnect(),document.removeEventListener("visibilitychange",G),R.removeEventListener("keydown",xe),R.removeEventListener("pointerdown",ei),R.removeEventListener("pointermove",Rn),R.removeEventListener("pointerup",k),R.removeEventListener("pointercancel",k),R.removeEventListener("lostpointercapture",k),R.removeEventListener("touchstart",K),[oe,de,ee,le,b,x,ie].forEach(S=>S.geometry?.dispose()),[me,se,ae,Re,re].forEach(S=>S.dispose()),[rt,at,st,ce,_e].forEach(S=>S.dispose()),ne.dispose(),y.dispose(),R.parentNode&&R.parentNode.removeChild(R)}},[]),React.createElement("div",{ref:C,className:`lanyard ${T}`.trim(),style:U})},cf=ey;function uf(){return React.createElement("section",{className:"cover","aria-label":"Introduction"},React.createElement("div",{className:"hero-glitch","aria-hidden":"true"},React.createElement(Qu,{glitchColors:["#ffffff","#61dca3"],glitchAmount:.5,speed:1,flow:.5,clickEffect:"burst",density:.95})),React.createElement("div",{className:"mast"},React.createElement("a",{href:"#top",className:"monogram","aria-label":"Shivam Mishra home"},"sm."),React.createElement("span",null,"Engineering & photography"),React.createElement("a",{href:window.portfolioFiles?.["resume.pdf"]??"resume.pdf",download:"Shivam-Mishra-Resume.pdf"},"R\xE9sum\xE9 ",React.createElement("small",null,"PDF"))),React.createElement("div",{className:"lanyard-stage"},React.createElement(cf,{intro:!1,size:.56,strapLength:.42,damping:.8,breeze:.15,frontImage:"card-front.png",backImage:"card-back.png",strapImage:"band.png"})),React.createElement("div",{className:"cover-bottom"},React.createElement("h1",{className:"hero-heading"},"Shivam Mishra \u2014 Engineering and photography"),React.createElement("a",{href:"#about"},"Meet Shivam ",React.createElement("span",{"aria-hidden":"true"},"\u2193"))))}var lf=["top","work","skills","photos","contact"],ty=["Home","Projects","Skills","Photos","Contact"];function hf(){let[i,e]=React.useState(!1),[t,n]=React.useState(0),s=React.useRef(null),r=React.useRef(null);return React.useEffect(()=>{function a(){let o=Math.min(120,innerHeight/4),l=0;lf.forEach((c,u)=>{document.getElementById(c)?.getBoundingClientRect().top<=o&&(l=u)}),n(l)}return a(),window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[]),React.useEffect(()=>{if(!i)return;function a(o){r.current?.contains(o.target)||e(!1)}return document.addEventListener("pointerdown",a),document.addEventListener("focusin",a),()=>{document.removeEventListener("pointerdown",a),document.removeEventListener("focusin",a)}},[i]),React.createElement("nav",{ref:r,className:"section-nav","aria-label":"Portfolio navigation",onKeyDown:a=>{a.key==="Escape"&&(e(!1),s.current.focus({preventScroll:!0}))}},React.createElement("button",{className:"menu-trigger",ref:s,"aria-expanded":i,"aria-controls":"portfolio-links",onClick:()=>e(a=>!a)},React.createElement("span",{className:"menu-icon","aria-hidden":"true"}),i?"Close":"Menu"),React.createElement("ul",{id:"portfolio-links",className:"menu-links",hidden:!i},lf.map((a,o)=>React.createElement("li",{key:a},React.createElement("a",{href:"#"+a,"aria-current":o===t?"location":void 0,onClick:()=>{e(!1),s.current.focus({preventScroll:!0})}},ty[o])))))}var ny=[{id:"pest",cardTitle:"Crop pest detection",brief:"Identifies pests in crop images and suggests a pesticide.",title:"AI-Based Pest Detection and Pesticide Recommendation System",type:"Final-year project",categories:["AI-CV"],tags:["Computer vision","Agriculture"],description:"An image-based system for identifying crop pests and recommending pesticides for the detected pest."},{id:"pipeline",cardTitle:"Live AI inference",brief:"Streams model predictions from Kafka to a live client.",title:"Real-Time AI Inference Pipeline",type:"Systems engineering",categories:["Backend","AI-CV"],tags:["Kafka","Redis","FastAPI","WebSockets","Prometheus","Grafana"],description:"A streaming inference pipeline that connects event ingestion, prediction delivery and service monitoring."},{id:"ecg",cardTitle:"ECG monitor",brief:"Captures heart signals and displays a live ECG waveform.",title:"Real-Time ECG Monitoring System",type:"Embedded systems",categories:["Embedded"],tags:["Embedded","ECG","Signal monitoring"],description:"An embedded monitoring project that captures cardiac electrical activity and displays a live ECG waveform."},{id:"verify",cardTitle:"VerifyAI",brief:"Checks text with BERT through a web app or browser extension.",title:"VerifyAI",type:"Machine learning",categories:["AI-CV","Backend","Web"],tags:["BERT","FastAPI","React","Chrome extension"],description:"A BERT-powered text verification project with a FastAPI backend, a React interface and a Chrome extension."},{id:"student",cardTitle:"StudentSphere",brief:"A student interface with rounded panels and bold layouts.",title:"StudentSphere",type:"Interface design",categories:["Web"],tags:["Web","Claymorphism","Neubrutalism"],description:"A student-focused web interface that pairs rounded claymorphic elements with bold neubrutalist layouts."}],iy=[["Emotion detection CNN","AI-CV"],["Agricultural disease prediction","AI-CV"],["Travel agency app","Web"],["ALU design report","Embedded"]],sy=[["Embedded & Hardware","ESP32, Arduino, 8051, 8085/8086, VLSI basics"],["Backend & Systems","FastAPI, Kafka, Redis, WebSockets, Docker, Prometheus"],["Web","React, HTML, CSS, JavaScript, Firebase"],["AI/ML","PyTorch, Hugging Face"],["Languages","Python, Java, C/C++"],["Tools","Git, GitHub, Copilot, Cursor"]],ry=[["IBM","Virtual internship"],["CTTC Bhubaneswar","Industrial training in embedded protocols and VLSI"],["Smart India Hackathon","Selected participant"],["Code for Change 2.0","Hackathon"],["Graph Hacks","Hackathon"]],ay=[["NCC","Major rank"],["Karate","Black Belt"],["NIELIT","VLSI & Embedded"],["NPTEL","Python"],["GeeksforGeeks","Java"],["CSCoE / WEBEL","Cyber Security"],["TCS iON","Certification"]];function oy(i,e){let t=e.getContext("2d");if(!t)return;let n=760,s=360;e.width=n,e.height=s;let r={pest:["#152a14","#435b1f","#a4db76"],pipeline:["#18232b","#233d50","#89dbef"],ecg:["#0d2522","#1b443d","#81f6c8"],verify:["#29243c","#504661","#c2a2e5"],student:["#2b333e","#52667d","#d7e2f4"]},[a,o,l]=r[i],c=t.createLinearGradient(0,0,n,s);c.addColorStop(0,o),c.addColorStop(1,a),t.fillStyle=c,t.fillRect(0,0,n,s);let u=(f,m,_=1)=>{t.beginPath(),f.forEach(([g,p],A)=>A?t.lineTo(g,p):t.moveTo(g,p)),t.strokeStyle=m,t.lineWidth=_,t.stroke()},h=(f,m,_,g,p,A)=>{t.fillStyle=p,t.fillRect(f,m,_,g),A&&(t.strokeStyle=A,t.lineWidth=1,t.strokeRect(f,m,_,g))},d=(f,m,_,g=14,p=l)=>{t.font=g+"px monospace",t.fillStyle=p,t.fillText(f,m,_)};for(let f=0;f<n;f+=30)for(let m=0;m<s;m+=30)h(f,m,1.5,1.5,"#ffffff29");if(i==="pest"){t.save(),t.translate(365,210),t.rotate(-.41),t.beginPath(),t.moveTo(-215,0),t.bezierCurveTo(-116,-128,20,-128,230,-5),t.bezierCurveTo(45,119,-89,94,-215,0),t.fillStyle="#6eaa47",t.fill(),t.clip();for(let p=-220;p<240;p+=21)u([[p-75,-115],[p,0],[p-73,108]],"#accb7877",2);u([[-238,0],[237,-5]],"#bad58a",4),t.restore();let f=357,m=137,_=98,g=83;t.strokeStyle=l,t.lineWidth=3;for(let[p,A]of[[f,1],[f+_,-1]])for(let[M,T]of[[m,1],[m+g,-1]])u([[p+15*A,M],[p,M],[p,M+15*T]],"#d9ff86",3);t.fillStyle="#293318",t.beginPath(),t.ellipse(404,177,12,18,-.38,0,2*Math.PI),t.fill();for(let p=0;p<3;p++)u([[385,163+p*8],[403,168+p*7],[421,160+p*8]],"#273916",2);d("PEST REGION",f,m-9,13,"#e0ffa7")}else if(i==="pipeline"){let f=[[102,190,"INGEST"],[275,190,"KAFKA"],[456,100,"MODEL"],[456,274,"REDIS"],[644,190,"STREAM"]];[[0,1],[1,2],[1,3],[2,4],[3,4]].forEach(([m,_])=>{let[g,p]=f[m],[A,M]=f[_];u([[g,p],[(g+A)/2,p],[(g+A)/2,M],[A,M]],"#76c7e1",2)}),f.forEach(([m,_,g])=>{h(m-46,_-22,92,44,"#203847","#76b0c8"),d(g,m-g.length*4.2,_+5,14)})}else if(i==="ecg"){for(let m=0;m<n;m+=18)u([[m,0],[m,s]],"#6fdfba19");for(let m=0;m<s;m+=18)u([[0,m],[n,m]],"#6fdfba19");let f=[];for(let m=0;m<n;m++){let _=m%156/156,g=(p,A,M)=>M*Math.exp(-((_-p)**2)/A);f.push([m,192-g(.15,.001,11)+g(.35,2e-4,18)-g(.385,14e-5,84)+g(.43,3e-4,33)-g(.7,.003,21)])}t.shadowBlur=11,t.shadowColor=l,u(f,l,3),t.shadowBlur=0,d("ECG  /  LEAD I",34,60,14)}else{t.save(),t.translate(370,180),t.rotate(i==="student"?-.06:.045),h(-235,-114,470,236,"#12151f55"),h(-242,-123,470,236,i==="student"?"#cad3dc":"#302c3a",l),h(-242,-123,470,28,a);for(let f=0;f<3;f++)t.fillStyle=l,t.beginPath(),t.arc(-222+f*12,-109,3,0,Math.PI*2),t.fill();if(i==="student")d("StudentSphere",-218,-38,26,a),["Courses","Campus","Schedule"].forEach((f,m)=>{h(-216+m*143,-12,123,83,["#f5ce81","#c5b1e4","#a0c9b6"][m],a),d(f,-205+m*143,38,16,a)});else{d("VerifyAI",-217,-45,29,"#f0e6ff");for(let f=0;f<3;f++)h(-214,-15+f*19,245-f*22,5,"#887991");h(70,-42,121,78,"#4a4357",l),d("BERT",107,3,17)}t.restore()}}var cy={pest:["ai based pest detection and pesticide recommendation system","pest detection and pesticide recommendation system"],pipeline:["real time ai inference pipeline","realtime ai inference pipeline"],ecg:["real time ecg monitoring system","realtime ecg monitoring system"],verify:["verifyai"],student:["studentsphere"]},df=i=>i.toLowerCase().replace(/[^a-z0-9]/g,""),{useEffect:ff,useRef:nu,useState:Wr}=React;function pf({items:i}){return React.createElement("div",{className:"p-chips"},i.map(e=>React.createElement("span",{className:"p-chip",key:e},e)))}function tc({children:i}){return React.createElement("h2",{className:"p-title"},i,React.createElement("span",null,"."))}function ly({p:i,repo:e}){let t=nu(null);return ff(()=>{oy(i.id,t.current)},[i]),React.createElement("article",{className:"p-card"},React.createElement("div",{className:"p-spot-host","aria-hidden":"true"},React.createElement(SpotlightCard,{spotlightColor:"#d4fa68",intensity:.12,proximity:50,borderGlow:.6})),React.createElement("div",{className:"p-visual"},React.createElement("canvas",{ref:t,"aria-label":"Concept illustration for "+i.title}),React.createElement("span",null,"Concept preview")),React.createElement("div",{className:"p-copy"},React.createElement("small",null,i.type),React.createElement("h3",null,i.title),React.createElement("p",null,i.description),React.createElement(pf,{items:i.tags}),e&&React.createElement("div",{className:"p-links"},React.createElement("a",{href:e.html_url},"GitHub"),e.homepage?.startsWith("https://")&&React.createElement("a",{href:e.homepage},"Project website"))))}function uy({items:i,value:e,onChange:t}){return i.map(n=>React.createElement("button",{key:n,"aria-pressed":n===e,onClick:()=>t(n)},n))}function hy(){let[i,e]=Wr("All"),[t,n]=Wr([]);ff(()=>{fetch("https://api.github.com/users/Shiv2717/repos?per_page=100").then(m=>m.ok?m.json():[]).then(n).catch(()=>{})},[]);let[s,r]=Wr(null),a=nu(null),o=nu(null),[l,c]=Wr(1);React.useLayoutEffect(()=>{let m=()=>c(Math.min(1.65,(o.current.clientWidth-24)/540));m();let _=new ResizeObserver(m);return _.observe(o.current),()=>_.disconnect()},[]);let u=React.useMemo(()=>ny.filter(m=>i==="All"||m.categories.includes(i)).map(m=>({project:m,title:m.title,content:React.createElement("div",{className:"project-paper"},React.createElement("strong",null,m.cardTitle),React.createElement("span",null,m.brief))})),[i]),h=iy.filter(([,m])=>i==="All"||i===m),d=s&&t.find(m=>!m.fork&&m.owner.login.toLowerCase()==="shiv2717"&&cy[s.id].some(_=>df(_)===df(m.name)));function f(m){r(m.project),a.current.showModal()}return React.createElement("section",{id:"work",className:"p-section"},React.createElement(tc,null,"Selected projects"),React.createElement("div",{className:"p-tabs"},React.createElement(uy,{items:["All","Embedded","Backend","Web","AI-CV"],value:i,onChange:e})),React.createElement("div",{ref:o,className:"project-folder"},React.createElement(xu,{key:i,mode:"flap",variant:"solid",color:"#4385f5",paperColor:"#ffffff",theme:"dark",size:l,label:"Projects",items:u,layout:"spread",closeOnOutsideClick:!s,intro:!1,zoomOnClick:!1,onItemClick:f})),React.createElement("dialog",{className:"project-dialog",ref:a,"aria-label":s?.title||"Project details",onClose:()=>r(null)},React.createElement("button",{className:"project-close",onClick:()=>a.current.close()},"Close"),s&&React.createElement(ly,{p:s,repo:d})),h.length>0&&React.createElement("details",{className:"p-more"},React.createElement("summary",null,"More projects"),React.createElement("ul",null,h.map(([m,_])=>React.createElement("li",{key:m},m,React.createElement("span",null,_))))))}function dy({name:i,items:e}){function t(s){let r=s.currentTarget,a=r.getBoundingClientRect();r.style.setProperty("--yaw",9*(s.clientX-a.left)/a.width-4.5+"deg"),r.style.setProperty("--pitch",6-10*(s.clientY-a.top)/a.height+"deg")}function n(s){s.currentTarget.removeAttribute("style")}return React.createElement("div",{className:"cube-stage",onPointerMove:t,onPointerDown:t,onPointerLeave:n,onPointerCancel:n,onPointerUp:n},React.createElement("article",{className:"skill-solid"},React.createElement("div",{className:"skill-face"},React.createElement("h3",null,i),React.createElement(pf,{items:e.split(", ")}))))}function fy(){return React.createElement(React.Fragment,null,React.createElement("section",{id:"skills",className:"p-section"},React.createElement(tc,null,"Skills"),React.createElement("div",{className:"p-skills"},sy.map(([i,e])=>React.createElement(dy,{key:i,name:i,items:e})))),React.createElement("section",{id:"experience",className:"p-section"},React.createElement(tc,null,"Experience & training"),React.createElement("ol",{className:"p-timeline"},ry.map(([i,e])=>React.createElement("li",{key:i},React.createElement("h3",null,i),React.createElement("p",null,e))))),React.createElement("section",{id:"achievements",className:"p-section"},React.createElement(tc,null,"Achievements & certifications"),React.createElement("div",{className:"p-badges"},ay.map(([i,e])=>React.createElement("article",{key:i},React.createElement("h3",null,i),React.createElement("p",null,e))))))}function py(){let[i,e]=Wr("");function t(n){n.preventDefault();let s=new FormData(n.currentTarget);location.href="mailto:mishrashivam2717@gmail.com?subject=Portfolio%20enquiry&body="+encodeURIComponent(s.get("message")+`

Reply to `+s.get("email")),e(" Send your draft from your email app.")}return React.createElement(React.Fragment,null,React.createElement("a",{className:"skip",href:"#about"},"Skip introduction"),React.createElement(hf,null),React.createElement("main",{id:"top"},React.createElement(uf,null),React.createElement("section",{id:"about",className:"block"},React.createElement("div",{className:"profile-lead"},React.createElement("div",{className:"profile-copy"},React.createElement("span",{className:"over"},"Profile"),React.createElement("h2",null,"The person behind",React.createElement("br",null),React.createElement("i",null,"the projects.")),React.createElement("p",{className:"bio-intro"},"I build across hardware and software, and photograph the world in between.")),React.createElement("img",{className:"profile-portrait",src:window.portfolioFiles?.["images/profile-portrait.jpg"]??"images/profile-portrait.jpg",alt:"Shivam Mishra",decoding:"async"})),React.createElement("div",{className:"bio"},React.createElement("p",null,"I\u2019m an ECE student in Durgapur, pursuing my B.Tech from 2023 to 2027. My projects span embedded systems, backend services, web interfaces and AI."),React.createElement("p",null,"Outside engineering, I hold an NCC Major rank and a Karate Black Belt. Photography gives me a reason to slow down and look closer.")),React.createElement("small",null,"English \xA0 / \xA0 Hindi \xA0 / \xA0 Bengali")),React.createElement(hy,null),React.createElement(fy,null),React.createElement("section",{id:"photos",className:"block"},React.createElement("span",{className:"over"},"BEHIND THE LENS"),React.createElement("h2",null,"Photography",React.createElement("span",null,".")),React.createElement($u,null)),React.createElement("section",{id:"contact",className:"block"},React.createElement("span",{className:"over"},"CONTACT"),React.createElement("h2",null,"Get in touch",React.createElement("span",null,".")),React.createElement("p",{className:"muted"},React.createElement("a",{href:"mailto:mishrashivam2717@gmail.com"},"mishrashivam2717@gmail.com")," \xB7 ",React.createElement("a",{href:"https://github.com/Shiv2717"},"GitHub")," \xB7 ",React.createElement("a",{href:"https://www.linkedin.com/in/shivam-mishra-shivam2717"},"LinkedIn")),React.createElement("form",{onSubmit:t},React.createElement("label",null,"Your email",React.createElement("input",{type:"email",name:"email",required:!0})),React.createElement("label",null,"Message",React.createElement("textarea",{name:"message",required:!0,rows:"4"})),React.createElement("button",{className:"primary"},"Open email draft"),React.createElement("output",{"aria-live":"polite"},i)))),React.createElement("footer",null,"Shivam Mishra ",React.createElement("a",{href:"#top"},"Back to top \u2191")))}ReactDOM.createRoot(document.getElementById("root")).render(new URLSearchParams(location.search).get("gallery")==="photography"?React.createElement(Zu,null):React.createElement(ClickSpark,{sparkColor:"#dbad67"},React.createElement(py,null)));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
