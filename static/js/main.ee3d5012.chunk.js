(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/resume.1b8acd67.pdf"},3:function(e){e.exports=JSON.parse('{"a":"Quazi","c":"","b":"Rabbi","f":"| Engineer | Programmer | Soccer Fan ","j":[{"id":0,"image":"fa-github","url":"https://github.com/quazirab","style":"socialicons"},{"id":3,"image":"fa-linkedin","url":"https://www.linkedin.com/in/quazi-rabbi","style":"socialicons"}],"e":"About Me","q":true,"k":"https://www.instagram.com/","m":"quazirb","l":"/?__a=1","d":"Self-driven professional with ability to adopt any situation and always motivated to deliver challenging task with minimal supervision. Started working as an Electrical Engineer and later gained interest in Software Development and Data Science. Over 2-years of experience in developing reliable software using various languages, including Python. ","n":"Recent Git Projects","g":"https://api.github.com/users/","i":"quazirab","h":"/repos?sort=updated&direction=desc","o":6,"r":true,"p":false}')},49:function(e,a,t){e.exports=t(84)},54:function(e,a,t){},58:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),i=(t(54),t(17)),s=t(13),o=(t(55),t(56),t(58),t(3)),m=t(48),u=t(6),d=t(43),p=t.n(d),g=function(){var e=Object(n.useState)(new Array(o.j.length).fill("socialicons")),a=Object(u.a)(e,2),t=a[0],l=a[1],c=function(e){var a=Object(m.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",l(a)):"leave"===e.event?(a[e.icon.id]="socialicons",l(a)):void 0};return r.a.createElement("div",null,r.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{className:"container container-fluid text-center "},r.a.createElement("h1",{className:"display-1"},o.a+" "+o.c+" "+o.b),r.a.createElement(p.a,{className:"lead"}," ",o.f),r.a.createElement("div",{className:"p-5"},o.j.map((function(e){return r.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return c({icon:e,event:"enter"})},onMouseOut:function(){return c({icon:e,event:"leave"})}}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))},b=t(16),E=t.n(b),h=t(22),f=t.n(h),v=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(o.q),i=Object(u.a)(c,2),s=i[0],m=i[1],d=Object(n.useState)(f.a),p=Object(u.a)(d,1)[0];Object(n.useEffect)((function(){s&&g()}),[s]);var g=function(e){E.a.get(o.k+o.m+o.l).then((function(e){return l(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return m(!1),console.error(e.message)})).finally((function(){}))};return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("div",{className:"row"},s&&r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},r.a.createElement("img",{className:"border border-secondary rounded-circle",src:t,alt:"profilepicture"})),r.a.createElement("div",{className:"col-lg-".concat(s?"7":"12")},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},o.e),r.a.createElement("p",{className:"lead text-center"},o.d),p&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:f.a,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},N=function(e){var a=e.value,t=Object(n.useState)([]),l=Object(u.a)(t,2),c=l[0],i=l[1],s=Object(n.useCallback)((function(e){E.a.get(a).then((function(e){return i(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){s()}),[s]);var o=[],m=0;for(var d in c)o.push(d),m+=c[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",o.map((function(e){return r.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(c[e]/m*1e3)/10," %")})))},w=function(e){var a=e.value,t=Object(n.useState)("0 mints"),l=Object(u.a)(t,2),c=l[0],i=l[1],s=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),n=(new Date).getTime()-t.getTime(),r=Math.trunc(n/1e3/60/60);if(r<24)return i("".concat(r.toString()," hours ago"));var l=t.getDate(),c=t.getMonth(),s=t.getFullYear();return i("on ".concat(l," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][c]," ").concat(s))}),[a.pushed_at]);Object(n.useEffect)((function(){s()}),[s]);var o=a.name,m=a.description,d=a.svn_url,p=a.stargazers_count,g=a.languages_url;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},o," "),r.a.createElement("p",{className:"card-text"},m," "),r.a.createElement("a",{href:"".concat(d,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:d,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"),r.a.createElement("hr",null),r.a.createElement(N,{value:g}),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},p)),r.a.createElement("small",{className:"text-muted"},"Updated ",c)))))},y=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useCallback)((function(e){E.a.get(o.g+o.i+o.h).then((function(e){return l(e.data.slice(0,o.o))})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[]);return Object(n.useEffect)((function(){c()}),[c]),r.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid bg-transparent m-0"},t.length&&r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5"},o.n),r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement(w,{key:e.id,id:e.id,value:e})})))))},x=t(12),k=t(47),j=t(29),q={display:"flex",flexDirection:"row",alignItems:"center"},O=function(){return r.a.createElement("div",{id:"skills",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"d-inline align-self-center"},r.a.createElement("h1",{className:"display-4 pb-5 text-center"},"Skills"),r.a.createElement(k.a,{defaultActiveKey:"home",justify:!0,variant:"tabs",transition:!1,id:"skills-tabs",style:{backgroundColor:"#f7f7f7",fontSize:"1.25rem"}},r.a.createElement(j.a,{eventKey:"home",title:"Hard Skills"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("br",null),r.a.createElement("p",{className:"lead"},"Python",r.a.createElement(x.a,{now:90,style:{width:"490px",backgroundColor:"white"}})),r.a.createElement("p",{className:"lead"},"Git",r.a.createElement(x.a,{now:87,style:{width:"490px",backgroundColor:"white"}})),r.a.createElement("p",{className:"lead"},"Data Science",r.a.createElement(x.a,{now:80,style:{width:"490px",backgroundColor:"white"}})),r.a.createElement("p",{className:"lead"},"SQL",r.a.createElement(x.a,{now:70,style:{width:"490px",backgroundColor:"white"}})),r.a.createElement("p",{className:"lead"},"Cloud Computing",r.a.createElement(x.a,{now:60,style:{width:"490px",backgroundColor:"white"}}))),r.a.createElement("div",{className:"col"},r.a.createElement("br",null),r.a.createElement("p",{className:"lead"},"Testing and Development",r.a.createElement(x.a,{now:90,style:{width:"490px",backgroundColor:"white"}})),r.a.createElement("p",{className:"lead"},"Linux",r.a.createElement(x.a,{now:85,style:{width:"490px",backgroundColor:"white"}})),r.a.createElement("p",{className:"lead"},"Java",r.a.createElement(x.a,{now:80,style:{width:"490px",backgroundColor:"white"}})),r.a.createElement("p",{className:"lead"},"Jenkins",r.a.createElement(x.a,{now:75,style:{width:"490px",backgroundColor:"white"}})),r.a.createElement("p",{className:"lead"},"C/C++",r.a.createElement(x.a,{now:50,style:{width:"490px",backgroundColor:"white"}}))))),r.a.createElement(j.a,{eventKey:"soft",title:"Soft Skills"},r.a.createElement("div",{className:"col d-lg-inline align-self-center"},r.a.createElement("br",null),r.a.createElement("div",{className:"row",style:q},r.a.createElement("div",{className:"col text-center"},r.a.createElement("p",{className:"lead text-center"},"Collaboration"),r.a.createElement("img",{src:"https://img.icons8.com/ios/75/000000/collaboration-female-male.png"})),r.a.createElement("div",{className:"col text-center"},r.a.createElement("p",{className:"lead text-center"},"Problem Solving"),r.a.createElement("img",{src:"https://img.icons8.com/ios/75/000000/critical-thinking.png"})),r.a.createElement("div",{className:"col text-center"},r.a.createElement("p",{className:"lead text-center"},"Positivity"),r.a.createElement("img",{src:"https://img.icons8.com/ios/75/000000/happy-cloud.png"}))),r.a.createElement("br",null),r.a.createElement("div",{className:"row",style:q},r.a.createElement("div",{className:"col text-center"},r.a.createElement("p",{className:"lead text-center"},"Goal Setting"),r.a.createElement("img",{src:"https://img.icons8.com/ios/75/000000/goal.png"})),r.a.createElement("div",{className:"col text-center"},r.a.createElement("p",{className:"lead text-center"},"Organization"),r.a.createElement("img",{src:"https://img.icons8.com/ios/75/000000/to-do.png"})),r.a.createElement("div",{className:"col text-center"},r.a.createElement("p",{className:"lead text-center"},"Empathy"),r.a.createElement("img",{src:"https://img.icons8.com/ios/75/000000/trust.png"})))))))))},S=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=Object(u.a)(e,1)[0];return r.a.createElement("footer",{style:a,className:"mt-auto py-3 text-center"},r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/hashirshoaeb","aria-label":"My GitHub"},"Quazi Rabbi")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"}," ","Project code is open source. Feel free to fork and make your own version.")))},C=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),l=t[0],c=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==l&&c(e)}))}),[l]),r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(l?"bg-transparent":"bg-gradient"," ")},r.a.createElement("a",{className:"navbar-brand",href:"/#home"},"<".concat(o.a," />")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},o.p&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link lead",to:"/blog"},"Blog")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#projects"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:f.a,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("b",null,"Resume"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#aboutme"},r.a.createElement("b",null,"About"))))))},P=t(46),D=function e(a){var t=this,l=a.title,c=a.image,i=a.description;Object(P.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(r.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(r.a.createElement(n.Fragment,{key:t.list.length},r.a.createElement("h1",{className:""},e),r.a.createElement("hr",null))),t},this.getBlog=function(){return r.a.createElement("div",{className:"container-lg"},t.list)},this.title=l,this.image=c,this.description=i},_=[],M=new D({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),L=new D({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");_.push(L),_.push(M);var z=_,A=function(e){return r.a.createElement("div",{className:"container-lg mt-5 bg-blue"},r.a.createElement("h1",{className:"text-center"},"Blogs"),z.map((function(e,a){return r.a.createElement(H,{key:a,title:e.title,description:e.description,index:a})})))},H=function(e){var a=e.index,t=e.title,n=(e.image,e.description);return r.a.createElement("div",{className:"m-5"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-lg-12"}),r.a.createElement("div",{className:"col-8 col-lg-12"},r.a.createElement("div",{className:""},r.a.createElement("h1",{className:""},t),r.a.createElement("p",{className:"lead"},n),r.a.createElement(i.b,{to:"".concat("","blog/").concat(a)},"Read more..."," ")))),r.a.createElement("hr",null)))},B=function(e){var a=e.match.params.id,t=z[a];return r.a.createElement("div",{className:"container-lg mt-5"},t&&r.a.createElement("div",null,r.a.createElement("h1",{className:"display-2 text-center"},t.title),r.a.createElement("img",{className:"img-fluid mb-2",src:t.image,alt:t.title}),t.getBlog()),!t&&r.a.createElement("h1",{className:"display-1 text-center"},"404 - Page not found"))},J=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,null),r.a.createElement(v,null),r.a.createElement(y,null),r.a.createElement(O,null))},R=function(){return r.a.createElement(i.a,{basename:"/"},o.r&&r.a.createElement(C,null),r.a.createElement(s.a,{path:"/",exact:!0,component:J}),o.p&&r.a.createElement(s.a,{path:"/blog",exact:!0,component:A}),o.p&&r.a.createElement(s.a,{path:"/blog/:id",component:B}),r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.ee3d5012.chunk.js.map