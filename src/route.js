 import anasayfa from "./pages/anasayfa";
 import ekip from "./pages/ekip";
 import galeri from "./pages/galeri";
 import codex7 from "./pages/codex7";
 import iletisim from "./pages/iletisim";
 import makale from "./pages/makale";
 import randevu from "./pages/randevu";
 import story from "./pages/story.vue"

 export const routes = [
     {path : '/', component :  anasayfa , name:'anasayfa'},
     {path : '/galeri', component : galeri, name:'galeri'},
     {path : '/codex7', component : codex7, name:'codex7'},
     {path : '/iletisim', component : iletisim, name:'iletisim'},
     {path : '/makale', component : makale, name:'makale'},
     {path : '/randevu', component : randevu, name:'randevu'},
     {path : '/makale/:id', component : makale, name:'makale'},
     {path : '/story/:id', component : story, name:'story'},
     {path : '/ekip', component : ekip, name:'ekip'}
 ];