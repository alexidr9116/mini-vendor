"use strict";(self.webpackChunkvmaclient=self.webpackChunkvmaclient||[]).push([[98],{9098:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var i=n(9439),c=n(2791),l=(n(2711),n(6140)),s=n(6326),r=n(2161),a=n(2990),o=n(2675),d=n(158),u=n(4135),h=n(937),f=n(5678),x=n(4278),j=n(184),g=10;function v(){var e=(0,c.useState)(""),t=(0,i.Z)(e,2),n=t[0],v=t[1],m=(0,c.useState)(!1),p=(0,i.Z)(m,2),b=p[0],S=p[1],Z=(0,c.useState)([]),w=(0,i.Z)(Z,2),C=w[0],y=w[1],N=(0,c.useState)([]),P=(0,i.Z)(N,2),M=P[0],k=P[1],E=(0,c.useState)({}),U=(0,i.Z)(E,2),A=U[0],D=U[1],T=(0,c.useState)(""),L=(0,i.Z)(T,2),_=L[0],R=L[1],F=(0,c.useState)(""),H=(0,i.Z)(F,2),B=H[0],I=H[1],K=(0,c.useState)(0),O=(0,i.Z)(K,2),$=O[0],q=O[1],z=(0,c.useState)([]),G=(0,i.Z)(z,2),J=G[0],Q=G[1],V=(0,c.useState)([]),W=(0,i.Z)(V,2),X=W[0],Y=W[1],ee=(0,c.useState)(!1),te=(0,i.Z)(ee,2),ne=te[0],ie=te[1],ce=function(){A&&A._id&&(0,h.Hf)("".concat(h.PM.getProducts).concat(A._id)).then((function(e){if(200===e.status&&e.data&&e.data.data){var t=e.data.data;k(t)}}))},le=function(e){if(e.target.checked){if(!J.includes(e.target.id)){var t=J.slice(0,J.length);t.push(e.target.id),Q(t)}}else J.includes(e.target.id)&&Q(J.filter((function(t){return t!==e.target.id})))};return(0,c.useEffect)((function(){!ne||"coming"!==n&&"ub"!==n||(0,h.DS)("".concat(h.PM.sendSmsNotify),{selected:J,position:n}).then((function(e){ie(!1),200===e.status?l.ZP.success(e.message):l.ZP.error(e.message)})).catch((function(e){ie(!1),l.ZP.error("Server Error")}))}),[ne]),(0,c.useEffect)((function(){(0,h.Hf)(h.$R.getSelf).then((function(e){200===e.status?D(e.data.warehouse):l.ZP.error("Please select your warehouse")}))}),[]),(0,c.useEffect)((function(){!function(){var e=B;"all"===B&&(e="");var t=M.filter((function(t){return(t.barcode.includes(_)||t.position.includes(_)||"".concat(t.mobile).includes(_))&&t.position.includes(e)}));y(t),Y(t.slice($*g,Math.min(($+1)*g,t.length)))}()}),[M,B,_]),(0,c.useEffect)((function(){A&&A._id&&ce()}),[A]),(0,j.jsxs)(d.Z,{title:"Product Management",className:"flex w-full flex-col gap-4",children:[(0,j.jsxs)("div",{className:"flex w-full justify-between p-2",children:[(0,j.jsxs)("select",{className:"select select-bordered ",onChange:function(e){I(e.target.value)},value:B,children:[(0,j.jsx)("option",{value:"",disabled:!0,children:"Select Status.."}),(0,j.jsx)("option",{value:"all",children:"All"}),(0,j.jsx)("option",{value:"china",children:"China"}),(0,j.jsx)("option",{value:"coming",children:"Coming"}),(0,j.jsx)("option",{value:"ub",children:"Ulaanbaatar"}),(0,j.jsx)("option",{value:"delivery",children:"Delivery"}),(0,j.jsx)("option",{value:"completed",children:"Completed"})]}),(0,j.jsx)(u.Z,{handleChangeSearch:function(e){R(e)}})]}),(0,j.jsx)("div",{className:"overflow-x-auto w-full",children:(0,j.jsxs)("table",{className:"table w-full table-compact",children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:(0,j.jsx)("label",{})}),(0,j.jsx)("th",{children:"Barcode"}),(0,j.jsx)("th",{children:"Mobile"}),(0,j.jsx)("th",{children:"Price"}),(0,j.jsx)("th",{children:"Location"}),(0,j.jsx)("th",{children:"RegTime"}),(0,j.jsx)("th",{children:"UbTime"}),(0,j.jsx)("th",{children:"FsTime"})]})}),(0,j.jsxs)("tbody",{children:[0===X.length&&(0,j.jsx)("tr",{children:(0,j.jsx)("td",{colSpan:8,children:(0,j.jsx)("div",{className:"text-lg text-center p-4",children:"No data display"})})}),X&&X.map((function(e,t){return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:(0,j.jsx)("label",{children:(0,j.jsx)("input",{type:"checkbox",className:"checkbox rounded-md checkbox-sm",id:e._id,onChange:le})})}),(0,j.jsx)("td",{children:e.barcode}),(0,j.jsx)("td",{children:e.mobile}),(0,j.jsx)("td",{children:(0,f.w2)(e.price,"\u20ae")}),(0,j.jsx)("td",{children:e.position}),(0,j.jsx)("td",{children:(0,f.oE)(e.registeredAt)}),(0,j.jsx)("td",{children:e.arrivedUbAt?(0,f.oE)(e.arrivedUbAt):""}),(0,j.jsx)("td",{children:e.arrivedUser?(0,f.oE)(e.arrivedUser):""})]},t)}))]})]})}),(0,j.jsxs)("div",{className:"flex justify-between w-full items-center mb-4 p-1  rounded-b-lg bg-stone-200 -mt-3",children:[(0,j.jsx)("div",{className:"flex items-center gap-2",children:J&&J.length>=1&&(0,j.jsxs)("select",{className:"select select-bordered select-sm",onChange:function(e){v(e.target.value),S(!0)},value:n,children:[(0,j.jsx)("option",{value:"",disabled:!0,children:"Select Option"}),(0,j.jsx)("option",{value:"coming",children:"Left from China"}),(0,j.jsx)("option",{value:"ub",children:"Arrived Ulaanbaatar"}),(0,j.jsx)("option",{value:"delivery",children:"Start Delivery"}),(0,j.jsx)("option",{value:"completed",children:"Arrived Client"})]})}),(0,j.jsxs)("div",{className:"flex items-center  ",children:[(0,j.jsxs)("label",{children:[$+1," of ",Math.ceil(C.length/g)]}),(0,j.jsx)(s.Z,{onClick:function(){var e=$;e>=1&&(e--,Y(C.slice(e*g,Math.min((e+1)*g,C.length))),q(e))},disabled:0===$,children:(0,j.jsx)(r.Z,{})}),(0,j.jsx)(s.Z,{onClick:function(){var e=$;e<Math.ceil(C.length/g)-1&&(e++,Y(C.slice(e*g,Math.min((e+1)*g,C.length))),q(e))},disabled:$===Math.ceil(C.length/g)-1,children:(0,j.jsx)(a.Z,{})})]})]}),b&&(0,j.jsx)(o.Z,{description:"Do you want to change selected good's location to ".concat(n,"? If you will proceed this action, SMS will be send to clients"),title:"Change Product`s Location, Really?",onAccept:function(){(0,h.DS)("".concat(h.PM.changeLocation),{selected:J,position:n}).then((function(e){S(!1),200===e.status?(ce(),"ub"!==n&&"coming"!==n||ie(!0)):l.ZP.error(e.message)})).catch((function(e){S(!1),l.ZP.error("Server Error")}))},onCancel:function(){return S(!1)}}),ne&&(0,j.jsx)(x.Z,{message:"Sending SMS Notification"})]})}},5678:function(e,t,n){n.d(t,{FK:function(){return l},gC:function(){return r},oE:function(){return a},w2:function(){return s}});var i=n(6098),c=n.n(i);function l(e){return c()(e).format("0,0.00a").replace(".00","")}function s(e,t){return"".concat(l(e)," ").concat(t)}function r(e){try{var t=new Date(e).toUTCString();return t.substring(0,t.length-3)}catch(n){return""}}function a(e){try{var t=new Date(e).toUTCString();return t.substring(0,t.length-12)}catch(n){return""}}}}]);
//# sourceMappingURL=98.41de9109.chunk.js.map