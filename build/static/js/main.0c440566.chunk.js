(this["webpackJsonpcovid19-app"]=this["webpackJsonpcovid19-app"]||[]).push([[0],{20:function(e,a,t){e.exports=t(32)},25:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),r=t(17),n=t.n(r),s=t(7),m=t(5);t(25);var o=function(){return l.a.createElement("header",{className:"bg-dark text-white"},l.a.createElement("div",{className:"container py-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-3 text-center text-md-left logo"},l.a.createElement("h2",{className:"mb-0"},"JM")),l.a.createElement("div",{className:"col-12 col-md-9 title text-center text-md-right"},l.a.createElement("h2",{className:"mb-0"},"COVID-19 Info: React Example Code")))))},d=t(8),i=t.n(d),E=t(10),u=t(11);var N=function(){Object(c.useEffect)((function(){v()}),[]);var e=Object(c.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],n="",m=0,o=0,d=0,N=0,h=0,v=function(){var e=Object(E.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona-api.com/countries");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,r(t.data.sort((function(e,a){return a.latest_data.confirmed-e.latest_data.confirmed})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return m=t.reduce((function(e,a){return e+a.latest_data.confirmed}),0),o=t.reduce((function(e,a){return e+a.today.confirmed}),0),d=t.reduce((function(e,a){return e+a.latest_data.recovered}),0),N=t.reduce((function(e,a){return e+a.latest_data.critical}),0),h=t.reduce((function(e,a){return e+a.today.deaths+a.latest_data.deaths}),0),t[0]&&(n=t[0].updated_at),l.a.createElement("div",{className:"container-fluid dashboard__page"},l.a.createElement("h1",{className:"mt-5 text-center"},"Dashboard"),l.a.createElement("p",{className:"text-center"},"Last Update: ",n),l.a.createElement("div",{className:"container cases__block"},l.a.createElement("div",{className:"row mt-5 pb-3"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"cases__confirmed card bg-light text-center"},l.a.createElement("p",{className:"cases__title"},"Confirmed Cases"),l.a.createElement("h2",null,m.toLocaleString())))),l.a.createElement("div",{className:"row mt-3"},l.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 mb-4 mb-lg-0"},l.a.createElement("div",{className:"cases__active card text-center"},l.a.createElement("p",{className:"cases__title"},"New Cases"),l.a.createElement("h2",null,o.toLocaleString()))),l.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 mb-4 mb-lg-0"},l.a.createElement("div",{className:"cases__recovered card text-center"},l.a.createElement("p",{className:"cases__title"},"Recovered"),l.a.createElement("h2",null,d.toLocaleString()))),l.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 mb-4 mb-md-0"},l.a.createElement("div",{className:"cases__critical card text-center"},l.a.createElement("p",{className:"cases__title"},"Critical"),l.a.createElement("h2",null,N.toLocaleString()))),l.a.createElement("div",{className:"col-12 col-md-6 col-lg-3"},l.a.createElement("div",{className:"cases__deaths card text-center"},l.a.createElement("p",{className:"cases__title"},"Deaths"),l.a.createElement("h2",null,h.toLocaleString()))))),l.a.createElement("div",{className:"data-grid container"},l.a.createElement("div",{className:"table-responsive-sm"},l.a.createElement("table",{className:"table table-sm table-bordered table-striped bg-light"},l.a.createElement("caption",null,"List of countries with COVID-19 cases"),l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Country"),l.a.createElement("th",null,"Total Cases"),l.a.createElement("th",null,"New Cases"),l.a.createElement("th",null,"Total Deaths"),l.a.createElement("th",null,"New Deaths"),l.a.createElement("th",null,"Total Recovery"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e.code},l.a.createElement("td",{className:"data-grid--country"},l.a.createElement(s.b,{to:"/country/".concat(e.code)},e.name)),l.a.createElement("td",{className:"data-grid--total"},e.latest_data.confirmed.toLocaleString()),l.a.createElement("td",{className:"data-grid--new"},e.today.confirmed.toLocaleString()),l.a.createElement("td",{className:"data-grid--deaths"},e.latest_data.deaths.toLocaleString()),l.a.createElement("td",{className:"data-grid--new-deaths"},e.today.deaths.toLocaleString()),l.a.createElement("td",{className:"data-grid--recovery"},e.latest_data.recovered.toLocaleString()))})))))))};var h=function(e){var a=e.match;Object(c.useEffect)((function(){o()}),[]);var t=Object(c.useState)({latest_data:{},today:{}}),r=Object(u.a)(t,2),n=r[0],m=r[1],o=function(){var e=Object(E.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona-api.com/countries/".concat(a.params.id));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,m(c.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"container-fluid mb-5 country__detail"},l.a.createElement("h1",{className:"my-5 text-center text-uppercase"},n.name),l.a.createElement("div",{className:"container my-4"},l.a.createElement("form",{action:""},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement(s.b,{to:"/"},l.a.createElement("button",{className:"btn btn-outline-info"},"Back to Dashboard"))),l.a.createElement("div",{className:"col-6 text-right"},l.a.createElement("select",{name:"country",id:"country",className:"form-control d-none"},l.a.createElement("option",{value:"usa"},"USA"),l.a.createElement("option",{value:"other"},"Other")))))),l.a.createElement("div",{className:"container cases__block"},l.a.createElement("div",{className:"row mt-5 pb-3"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"cases__confirmed card bg-light text-center"},l.a.createElement("p",{className:"cases__title"},"Confirmed Cases"),l.a.createElement("h2",null,n.latest_data.confirmed)))),l.a.createElement("div",{className:"row mt-3"},l.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 mb-4 mb-lg-0"},l.a.createElement("div",{className:"cases__active card text-center"},l.a.createElement("p",{className:"cases__title"},"New Cases"),l.a.createElement("h2",null,n.today.confirmed))),l.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 mb-4 mb-lg-0"},l.a.createElement("div",{className:"cases__recovered card text-center"},l.a.createElement("p",{className:"cases__title"},"Recovered"),l.a.createElement("h2",null,n.latest_data.recovered))),l.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 mb-4 mb-md-0"},l.a.createElement("div",{className:"cases__critical card text-center"},l.a.createElement("p",{className:"cases__title"},"Critical"),l.a.createElement("h2",null,n.latest_data.critical))),l.a.createElement("div",{className:"col-12 col-md-6 col-lg-3"},l.a.createElement("div",{className:"cases__deaths card text-center"},l.a.createElement("p",{className:"cases__title"},"Deaths"),l.a.createElement("h2",null,n.latest_data.deaths))))))};var v=function(){return l.a.createElement("footer",{className:"bg-dark text-white"},l.a.createElement("div",{className:"container-fluid py-2 px-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("p",null,"Covid-19 API: ",l.a.createElement("a",{href:"https://about-corona.net/documentation",target:"_Blank",className:"text-white",rel:"noopener noreferrer"},"https://about-corona.net/documentation")),"Created using:"),l.a.createElement("div",{className:"col-12 col-md-9 mx-auto"},l.a.createElement("div",{className:"row row-cols-2 row-cols-lg-5"},l.a.createElement("div",{className:"col mb-4"},l.a.createElement("div",{className:"card h-100"},l.a.createElement("a",{href:"https://www.w3schools.com/html/html5_intro.asp",className:"text-white",target:"_Blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"card-body"},l.a.createElement("i",{className:"fab fa-html5 fa-2x","aria-hidden":"true"}),l.a.createElement("p",{className:"card-text"},"HTML5"))))),l.a.createElement("div",{className:"col mb-4"},l.a.createElement("div",{className:"card h-100"},l.a.createElement("a",{href:"https://www.w3schools.com/css/",className:"text-white",target:"_Blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"card-body"},l.a.createElement("i",{className:"fab fa-css3-alt fa-2x","aria-hidden":"true"}),l.a.createElement("p",{className:"card-text"},"CSS3"))))),l.a.createElement("div",{className:"col mb-4"},l.a.createElement("div",{className:"card h-100"},l.a.createElement("a",{href:"https://getbootstrap.com/docs/4.4/getting-started/introduction/",className:"text-white",target:"_Blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"card-body"},l.a.createElement("i",{className:"fab fa-bootstrap fa-2x","aria-hidden":"true"}),l.a.createElement("p",{className:"card-text"},"Bootstrap"))))),l.a.createElement("div",{className:"col mb-4"},l.a.createElement("div",{className:"card h-100"},l.a.createElement("a",{href:"https://sass-lang.com/documentation",className:"text-white",target:"_Blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"card-body"},l.a.createElement("i",{className:"fab fa-sass fa-2x","aria-hidden":"true"}),l.a.createElement("p",{className:"card-text"},"Sass"))))),l.a.createElement("div",{className:"col mb-4"},l.a.createElement("div",{className:"card h-100"},l.a.createElement("a",{href:"https://reactjs.org/docs/getting-started.html",className:"text-white",target:"_Blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"card-body"},l.a.createElement("i",{className:"fab fa-react fa-2x","aria-hidden":"true"}),l.a.createElement("p",{className:"card-text"},"React JS")))))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-3 text-center text-md-left logo"},"JM"),l.a.createElement("div",{className:"col-12 col-md-9 title text-center text-md-right"},"COVID-19 Info: React Example Code | ",l.a.createElement("a",{href:"http://josemolinaresume.com",target:"_Blank",className:"text-white"},l.a.createElement("u",null,"josemolinaresume.com"))))))};var f=function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"container-fluid p-0"},l.a.createElement(o,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0,component:N}),l.a.createElement(m.a,{path:"/country",exact:!0,component:h}),l.a.createElement(m.a,{path:"/country/:id",component:h})),l.a.createElement(v,null)))};n.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.0c440566.chunk.js.map