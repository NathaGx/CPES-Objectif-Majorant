// Gestion des images de cours et des images ajoutées par l'utilisateur.
window.courseMedia={
 key:'cpes-course-media-v1',
 load(){try{return JSON.parse(localStorage.getItem(this.key)||'[]')}catch(e){return[]}},
 save(a){localStorage.setItem(this.key,JSON.stringify(a))},
 add(subject,folder,file,title){
  return new Promise((resolve,reject)=>{
   if(!file||!file.type.startsWith('image/')) return reject(new Error('image'));
   const r=new FileReader();
   r.onload=()=>{let a=this.load();a.push({id:Date.now(),subject,folder,title:title||file.name,data:r.result});try{this.save(a);resolve()}catch(e){reject(e)}};
   r.onerror=reject;r.readAsDataURL(file);
  })
 },
 remove(id){this.save(this.load().filter(x=>x.id!==id))},
 forFolder(subject,folder){return this.load().filter(x=>x.subject===subject&&x.folder===folder)}
};
window.renderCourseImage=function(title,src,removableId){
 const t=esc(title), id='zoom_'+Math.random().toString(36).slice(2);
 setTimeout(function(){
  const box=document.getElementById(id);if(!box)return;
  const img=box.querySelector('img'),range=box.querySelector('input');
  range.oninput=function(){img.style.width=this.value+'%';img.style.maxWidth='none'};
 },0);
 return '<div class="item course-image"><span class="tag">Image du cours</span><h3>'+t+'</h3><div id="'+id+'" style="overflow:auto;max-height:80vh;border:1px solid var(--line);border-radius:10px"><img src="'+src+'" alt="'+t+'" draggable="false" style="display:block;width:100%;height:auto;max-width:none;user-select:none"></div><div style="display:flex;align-items:center;gap:10px;margin-top:10px"><b>Zoom</b><input type="range" min="50" max="500" value="100" step="10" style="flex:1"><span>50–500 %</span></div><p class="muted">Agrandis avec le curseur puis déplace-toi dans l’image avec les barres de défilement.</p>'+(removableId?'<button class="btn small" onclick="removeCourseImage('+removableId+')">Supprimer cette image</button>':'')+'</div>';
};
window.courseImageUploader=function(subject,folder){
 if(!folder)return '';
 return '<div class="card" style="margin-bottom:14px"><b>Ajouter une image à ce dossier</b><p class="muted">PNG, JPG ou WEBP. L’image reste liée à ce dossier sur cet appareil.</p><input id="courseImageTitle" placeholder="Titre de l’image (facultatif)" style="margin-right:8px"><input id="courseImageFile" type="file" accept="image/png,image/jpeg,image/webp"><button class="btn small" onclick="addCourseImage()">Ajouter</button></div>';
};
window.addCourseImage=async function(){
 const f=document.getElementById('courseImageFile')?.files?.[0];if(!f)return alert('Choisis une image.');
 const title=document.getElementById('courseImageTitle')?.value||f.name;
 try{await courseMedia.add(currentSubject,folderPath[currentSubject],f,title);renderContent()}catch(e){alert('Impossible d’enregistrer cette image. Essaie une image plus légère.')}
};
window.removeCourseImage=function(id){if(confirm('Supprimer cette image ?')){courseMedia.remove(id);renderContent()}};
window.renderUserCourseImages=function(subject,folder){return courseMedia.forFolder(subject,folder).map(x=>renderCourseImage(x.title,x.data,x.id)).join('')};
