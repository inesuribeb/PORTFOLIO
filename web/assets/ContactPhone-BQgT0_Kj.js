import{c as p,j as e,a as m,r as i,A as s}from"./index-BIrzAWmu.js";const c=p(e.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");function v(){const{isMenuOpen:n,setIsMenuOpen:o}=m(),[t,d]=i.useState(!1),[l,h]=i.useState(!1),[r,x]=i.useState(!1),[a,u]=i.useState(new Date);return e.jsxs("div",{className:"contact-phone",onClick:j=>{j.stopPropagation(),o(!1)},children:["        ",e.jsxs("div",{className:"first-part",children:[e.jsxs("div",{className:"toggle-contact-phone",children:[e.jsxs("h5",{className:"contact-mini-title",onClick:()=>!n&&d(!t),children:["Email me! ",e.jsx(c,{})]}),e.jsx("div",{className:`in-and-out ${t?"visible":"hidden"}`,children:e.jsx("p",{children:"inesuribeb@gmail.com"})})]}),e.jsxs("div",{className:"toggle-contact-phone",children:[e.jsxs("h5",{className:"contact-mini-title",onClick:()=>!n&&h(!l),children:["Find me on ",e.jsx(c,{})]}),e.jsx("div",{className:`in-and-out ${l?"visible":"hidden"}`,children:e.jsxs("ul",{className:"contact-phone-ul",children:[e.jsx("li",{children:e.jsxs("a",{href:"https://github.com/inesuribeb",target:"_blank",rel:"noopener noreferrer",children:["Github ",e.jsx(s,{className:"link-icon"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"https://www.instagram.com/inesuribeb/",target:"_blank",rel:"noopener noreferrer",children:["Instagram ",e.jsx(s,{className:"link-icon"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"https://www.linkedin.com/in/in%C3%A9s-uribe-barr%C3%B3n-325305143/",target:"_blank",rel:"noopener noreferrer",children:["Linkedin ",e.jsx(s,{className:"link-icon"})]})}),e.jsxs("li",{children:["Behance ",e.jsx(s,{className:"link-icon"})]})]})})]}),e.jsxs("div",{className:"toggle-contact-phone",children:[e.jsxs("h5",{className:"contact-mini-title",onClick:()=>!n&&x(!r),children:["Services ",e.jsx(c,{})]}),e.jsx("div",{className:`in-and-out ${r?"visible":"hidden"}`,children:e.jsxs("ul",{className:"contact-phone-ul",children:[e.jsx("li",{children:"Visual Identity"}),e.jsx("li",{children:"Interface Design"}),e.jsx("li",{children:"User Experience"}),e.jsx("li",{children:"Creative Direction"}),e.jsx("li",{children:"Content Production"}),e.jsx("li",{children:"Front-End & Back-End"}),e.jsx("li",{children:"Creative Digital Solutions"}),e.jsx("li",{children:"Full-Stack Web Development"})]})})]})]}),e.jsxs("div",{className:"second-part",children:[e.jsx("div",{className:"contact-presentation",children:e.jsxs("p",{children:["Designer with a strong background in ",e.jsx("i",{children:"visual communication"}),", currently expanding my skill set as a ",e.jsx("i",{children:"full-stack web developer"}),".",e.jsx("br",{}),e.jsx("br",{})," With a passion for merging ",e.jsx("i",{children:"creativity"})," with ",e.jsx("i",{children:"technology"}),", I aim to create digital experiences that are both ",e.jsx("i",{children:"aesthetically"})," pleasing and ",e.jsx("i",{children:"functionally"})," effective. I focus on designing user-centric solutions that balance ",e.jsx("i",{children:"innovation"}),", ",e.jsx("i",{children:"design principles"}),", and ",e.jsx("i",{children:"technical approach"}),"."]})}),e.jsx("div",{className:"city-and-hour",children:e.jsxs("h5",{children:["Bilbao, Spain",e.jsx("br",{}),`${a.getHours()%12||12}:${String(a.getMinutes()).padStart(2,"0")} ${a.getHours()>=12?"PM":"AM"}`]})})]})]})}export{v as default};