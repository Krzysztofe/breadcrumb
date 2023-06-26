"use strict";(self.webpackChunkcrumb=self.webpackChunkcrumb||[]).push([[992],{5210:function(n,r,o){var i=o(8333),e=o(4554),t=o(3517),l=o(890),a=o(7689),s=o(1087),d=o(8566),c=o(184);r.Z=function(){var n=(0,a.UO)(),r=n.bookIdUrl,o=n.authorUrl,u=(0,a.TH)(),h=(0,d.Z)(r,o),v=h.bookDetails,x=h.authorBooks,m="",p=u.pathname.split("/").filter((function(n){return""!==n})),f=p.map((function(n,r){var o;if(m+="/".concat(n),void 0===(null===v||void 0===v?void 0:v.authorName)&&0===(null===x||void 0===x?void 0:x.length))o=(0,c.jsx)(l.Z,{color:"error",children:" Brak danych "});else if("undefined"===n)o=(0,c.jsx)(l.Z,{color:"error",children:" Brak danych "});else if(3===p.length&&r===p.length-1){var i;o=null!==(i=null===v||void 0===v?void 0:v.bookTitle)&&void 0!==i?i:""}else if(p.includes("author")){var e,t;o=null!==(e=null===x||void 0===x||null===(t=x[0])||void 0===t?void 0:t.authorName)&&void 0!==e?e:""}else if(p.includes("books")){var a;o=null!==(a=null===v||void 0===v?void 0:v.bookTitle)&&void 0!==a?a:""}return"author"===n||"books"===n?null:r===p.length-1?(0,c.jsx)(l.Z,{color:"info.main",variant:"h3",children:o},crypto.randomUUID()):(0,c.jsx)(s.rU,{to:m,style:{textDecoration:"none"},children:(0,c.jsx)(l.Z,{color:"info.main",variant:"h3",sx:{":hover":{color:"secondary.main"},cursor:"pointer"},children:o})},crypto.randomUUID())}));return(0,c.jsx)(e.Z,{my:2,p:2,bgcolor:"primary.main",children:(0,c.jsxs)(t.Z,{"aria-label":"breadcrumb",separator:(0,c.jsx)(i.Z,{fontSize:"small",sx:{color:"info.main"}}),children:["/"===u.pathname?(0,c.jsx)(l.Z,{variant:"h3",color:"info.main",children:"Lista"}):(0,c.jsx)(s.rU,{to:"/",style:{textDecoration:"none"},children:(0,c.jsx)(l.Z,{color:"info.main",variant:"h3",sx:{":hover":{color:"secondary.main"},cursor:"pointer"},children:"Lista"})}),f]})})}},8566:function(n,r,o){var i=o(9583);r.Z=function(){var n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",e=(0,i.j)(),t=e.data,l=e.error,a=e.isLoading,s=null===t||void 0===t||null===(n=t.items)||void 0===n?void 0:n.map((function(n){return null===n||void 0===n?void 0:n.volumeInfo})),d=null===s||void 0===s?void 0:s.map((function(n,r){var o;return{id:null===t||void 0===t?void 0:t.items[r].id,bookTitle:n.title,authorName:null===n||void 0===n||null===(o=n.authors)||void 0===o?void 0:o.join(", "),publishedDate:n.publishedDate,bookCover:n.imageLinks.thumbnail,description:n.description}})),c=null===d||void 0===d?void 0:d.find((function(n){return n.id===r})),u="undefined"!==o?null===d||void 0===d?void 0:d.filter((function(n){var r=n.authorName;return(null===r||void 0===r?void 0:r.toLowerCase())===(null===o||void 0===o?void 0:o.replaceAll("-"," "))})):[];return{booksToPrint:d,isLoading:a,bookDetails:c,authorBooks:u,error:l}}},6579:function(n,r,o){var i=o(8566),e=o(4554),t=o(5758),l=o(890),a=(o(2791),o(184));r.Z=function(n,r,o){var s=(0,i.Z)(r,o),d=s.booksToPrint,c=s.error;if(s.isLoading)return(0,a.jsx)(e.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,a.jsx)(t.Z,{})});if(!c)return d?n:(0,a.jsx)(l.Z,{variant:"h2",color:"error",sx:{textAlign:"center"},children:"Brak danych"});if("status"in c){var u="status"in c&&c.status;return(0,a.jsx)(l.Z,{variant:"h2",color:"error",sx:{textAlign:"center"},children:(0,a.jsxs)(a.Fragment,{children:[" B\u0142\u0105d: ",u]})})}}},9992:function(n,r,o){o.r(r),o.d(r,{default:function(){return f}});var i=o(1614),e=o(890),t=o(7689),l=o(5210),a=o(6579),s=o(9836),d=o(3382),c=o(3994),u=o(9281),h=o(6890),v=o(5855),x=o(8566),m=o(184),p=function(){var n=(0,t.s0)(),r=(0,t.UO)(),o=r.bookIdUrl,i=r.authorUrl,l=(0,x.Z)(o,i).authorBooks;return(0,m.jsx)(u.Z,{sx:{padding:{xs:1,sm:0}},children:(0,m.jsxs)(s.Z,{"aria-label":"simple table",children:[(0,m.jsx)(h.Z,{children:(0,m.jsx)(v.Z,{children:["Nr","Autor","Tytu\u0142","Rok wydania"].map((function(n){return(0,m.jsx)(c.Z,{children:(0,m.jsx)(e.Z,{variant:"h2",component:"span",children:n})},n)}))})}),(0,m.jsx)(d.Z,{children:null===l||void 0===l?void 0:l.map((function(r,o){var t=r.bookTitle,l=r.authorName,a=r.id,s=r.publishedDate;return(0,m.jsxs)(v.Z,{onClick:function(){return function(r){n("/author/".concat(i,"/").concat(r))}(a)},sx:{":hover":{backgroundColor:"secondary.main"},cursor:"pointer",backgroundColor:o%2===1?"primary.main":"inherit"},children:[(0,m.jsx)(c.Z,{children:(0,m.jsxs)(e.Z,{component:"span",children:[" ",o+1," "]})}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(e.Z,{children:l?(0,m.jsx)(e.Z,{component:"span",children:l}):(0,m.jsx)(e.Z,{color:"error",component:"span",children:"Brak autora"})})}),(0,m.jsx)(c.Z,{children:t?(0,m.jsx)(e.Z,{component:"span",children:t}):(0,m.jsx)(e.Z,{color:"error",component:"span",children:"Brak tytu\u0142u"})}),(0,m.jsx)(c.Z,{children:s?(0,m.jsx)(e.Z,{component:"span",children:s}):(0,m.jsx)(e.Z,{color:"error",component:"span",children:"Brak daty"})})]},a)}))})]})})},f=function(){var n=(0,t.UO)(),r=n.bookIdUrl,o=n.authorUrl,s=(0,x.Z)(r,o).authorBooks,d=(0,a.Z)((0,m.jsx)(p,{}),r,o);return(0,m.jsx)("main",{children:(0,m.jsxs)(i.Z,{sx:{padding:{xs:0,sm:2}},children:[(0,m.jsx)(l.Z,{}),(0,m.jsx)(e.Z,{variant:"h1",component:"h2",sx:{padding:{xs:1},paddingLeft:{xs:1,sm:0}},children:"Lista ksi\u0105\u017cek autora"}),0===(null===s||void 0===s?void 0:s.length)?(0,m.jsx)(e.Z,{variant:"h2",color:"error",sx:{textAlign:"center"},children:"Brak danych"}):d]})})}}}]);
//# sourceMappingURL=992.2a251cb7.chunk.js.map