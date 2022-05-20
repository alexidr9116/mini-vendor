"use strict";(self.webpackChunkvmaclient=self.webpackChunkvmaclient||[]).push([[970],{5970:function(e,n,o){o.d(n,{Z:function(){return k}});var i=o(9439),t=o(4942),a=o(3366),l=o(7462),r=o(2791),c=o(8182),s={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},u=o(4419),d=o(886),v=o(4591);var p=o(4036),m=o(5836),f=o(8744),h=o(3031),y=o(4843),g=o(9201),b=o(184),Z=(0,g.Z)((0,b.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),x=(0,g.Z)((0,b.jsx)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),F=o(551),S=o(1625),A=o(1217);function C(e){return(0,A.Z)("MuiRating",e)}var w=(0,o(5878).Z)("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),V=["value"],R=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function L(e,n){if(null==e)return e;var o=Math.round(e/n)*n;return Number(o.toFixed(function(e){var n=e.toString().split(".")[1];return n?n.length:0}(n)))}var M=(0,S.ZP)("span",{name:"MuiRating",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[(0,t.Z)({},"& .".concat(w.visuallyHidden),n.visuallyHidden),n.root,n["size".concat((0,p.Z)(o.size))],o.readOnly&&n.readOnly]}})((function(e){var n,o=e.theme,i=e.ownerState;return(0,l.Z)((n={display:"inline-flex",position:"relative",fontSize:o.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent"},(0,t.Z)(n,"&.".concat(w.disabled),{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"}),(0,t.Z)(n,"&.".concat(w.focusVisible," .").concat(w.iconActive),{outline:"1px solid #999"}),(0,t.Z)(n,"& .".concat(w.visuallyHidden),s),n),"small"===i.size&&{fontSize:o.typography.pxToRem(18)},"large"===i.size&&{fontSize:o.typography.pxToRem(30)},i.readOnly&&{pointerEvents:"none"})})),z=(0,S.ZP)("label",{name:"MuiRating",slot:"Label",overridesResolver:function(e,n){return n.label}})((function(e){var n=e.ownerState;return(0,l.Z)({cursor:"inherit"},n.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})})),j=(0,S.ZP)("span",{name:"MuiRating",slot:"Icon",overridesResolver:function(e,n){var o=e.ownerState;return[n.icon,o.iconEmpty&&n.iconEmpty,o.iconFilled&&n.iconFilled,o.iconHover&&n.iconHover,o.iconFocus&&n.iconFocus,o.iconActive&&n.iconActive]}})((function(e){var n=e.theme,o=e.ownerState;return(0,l.Z)({display:"flex",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest}),pointerEvents:"none"},o.iconActive&&{transform:"scale(1.2)"},o.iconEmpty&&{color:(n.vars||n).palette.action.disabled})})),H=(0,S.ZP)("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:function(e){return(0,S.Dz)(e)&&"iconActive"!==e},overridesResolver:function(e,n){var o=e.iconActive;return[n.decimal,o&&n.iconActive]}})((function(e){var n=e.iconActive;return(0,l.Z)({position:"relative"},n&&{transform:"scale(1.2)"})}));function E(e){var n=(0,a.Z)(e,V);return(0,b.jsx)("span",(0,l.Z)({},n))}function O(e){var n=e.classes,o=e.disabled,i=e.emptyIcon,t=e.focus,a=e.getLabelText,s=e.highlightSelectedOnly,u=e.hover,d=e.icon,v=e.IconContainerComponent,p=e.isActive,f=e.itemValue,h=e.labelProps,y=e.name,g=e.onBlur,Z=e.onChange,x=e.onClick,F=e.onFocus,S=e.readOnly,A=e.ownerState,C=e.ratingValue,w=s?f===C:f<=C,V=f<=u,R=f<=t,L=f===e.ratingValueRounded,M=(0,m.Z)(),H=(0,b.jsx)(j,{as:v,value:f,className:(0,c.Z)(n.icon,w?n.iconFilled:n.iconEmpty,V&&n.iconHover,R&&n.iconFocus,p&&n.iconActive),ownerState:(0,l.Z)({},A,{iconEmpty:!w,iconFilled:w,iconHover:V,iconFocus:R,iconActive:p}),children:i&&!w?i:d});return S?(0,b.jsx)("span",(0,l.Z)({},h,{children:H})):(0,b.jsxs)(r.Fragment,{children:[(0,b.jsxs)(z,(0,l.Z)({ownerState:(0,l.Z)({},A,{emptyValueFocused:void 0}),htmlFor:M},h,{children:[H,(0,b.jsx)("span",{className:n.visuallyHidden,children:a(f)})]})),(0,b.jsx)("input",{className:n.visuallyHidden,onFocus:F,onBlur:g,onChange:Z,onClick:x,disabled:o,value:f,id:M,type:"radio",name:y,checked:L})]})}var T=(0,b.jsx)(Z,{fontSize:"inherit"}),I=(0,b.jsx)(x,{fontSize:"inherit"});function N(e){return"".concat(e," Star").concat(1!==e?"s":"")}var k=r.forwardRef((function(e,n){var o=(0,F.Z)({name:"MuiRating",props:e}),t=o.className,s=o.defaultValue,g=void 0===s?null:s,Z=o.disabled,x=void 0!==Z&&Z,S=o.emptyIcon,A=void 0===S?I:S,w=o.emptyLabelText,V=void 0===w?"Empty":w,j=o.getLabelText,k=void 0===j?N:j,B=o.highlightSelectedOnly,P=void 0!==B&&B,X=o.icon,D=void 0===X?T:X,W=o.IconContainerComponent,Y=void 0===W?E:W,q=o.max,G=void 0===q?5:q,J=o.name,K=o.onChange,Q=o.onChangeActive,U=o.onMouseLeave,$=o.onMouseMove,_=o.precision,ee=void 0===_?1:_,ne=o.readOnly,oe=void 0!==ne&&ne,ie=o.size,te=void 0===ie?"medium":ie,ae=o.value,le=(0,a.Z)(o,R),re=(0,m.Z)(J),ce=(0,f.Z)({controlled:ae,default:g,name:"Rating"}),se=(0,i.Z)(ce,2),ue=se[0],de=se[1],ve=L(ue,ee),pe=(0,d.Z)(v.Z),me=r.useState({hover:-1,focus:-1}),fe=(0,i.Z)(me,2),he=fe[0],ye=he.hover,ge=he.focus,be=fe[1],Ze=ve;-1!==ye&&(Ze=ye),-1!==ge&&(Ze=ge);var xe=(0,h.Z)(),Fe=xe.isFocusVisibleRef,Se=xe.onBlur,Ae=xe.onFocus,Ce=xe.ref,we=r.useState(!1),Ve=(0,i.Z)(we,2),Re=Ve[0],Le=Ve[1],Me=r.useRef(),ze=(0,y.Z)(Ce,Me),je=(0,y.Z)(ze,n),He=function(e){var n=""===e.target.value?null:parseFloat(e.target.value);-1!==ye&&(n=ye),de(n),K&&K(e,n)},Ee=function(e){0===e.clientX&&0===e.clientY||(be({hover:-1,focus:-1}),de(null),K&&parseFloat(e.target.value)===ve&&K(e,null))},Oe=function(e){Ae(e),!0===Fe.current&&Le(!0);var n=parseFloat(e.target.value);be((function(e){return{hover:e.hover,focus:n}}))},Te=function(e){if(-1===ye){Se(e),!1===Fe.current&&Le(!1);be((function(e){return{hover:e.hover,focus:-1}}))}},Ie=r.useState(!1),Ne=(0,i.Z)(Ie,2),ke=Ne[0],Be=Ne[1],Pe=(0,l.Z)({},o,{defaultValue:g,disabled:x,emptyIcon:A,emptyLabelText:V,emptyValueFocused:ke,focusVisible:Re,getLabelText:k,icon:D,IconContainerComponent:Y,max:G,precision:ee,readOnly:oe,size:te}),Xe=function(e){var n=e.classes,o=e.size,i=e.readOnly,t=e.disabled,a=e.emptyValueFocused,l=e.focusVisible,r={root:["root","size".concat((0,p.Z)(o)),t&&"disabled",l&&"focusVisible",i&&"readyOnly"],label:["label","pristine"],labelEmptyValue:[a&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return(0,u.Z)(r,C,n)}(Pe);return(0,b.jsxs)(M,(0,l.Z)({ref:je,onMouseMove:function(e){$&&$(e);var n,o=Me.current,i=o.getBoundingClientRect(),t=i.right,a=i.left,l=o.firstChild.getBoundingClientRect().width;n="rtl"===pe.direction?(t-e.clientX)/(l*G):(e.clientX-a)/(l*G);var r=L(G*n+ee/2,ee);r=function(e,n,o){return e<n?n:e>o?o:e}(r,ee,G),be((function(e){return e.hover===r&&e.focus===r?e:{hover:r,focus:r}})),Le(!1),Q&&ye!==r&&Q(e,r)},onMouseLeave:function(e){U&&U(e);be({hover:-1,focus:-1}),Q&&-1!==ye&&Q(e,-1)},className:(0,c.Z)(Xe.root,t),ownerState:Pe,role:oe?"img":null,"aria-label":oe?k(Ze):null},le,{children:[Array.from(new Array(G)).map((function(e,n){var o=n+1,i={classes:Xe,disabled:x,emptyIcon:A,focus:ge,getLabelText:k,highlightSelectedOnly:P,hover:ye,icon:D,IconContainerComponent:Y,name:re,onBlur:Te,onChange:He,onClick:Ee,onFocus:Oe,ratingValue:Ze,ratingValueRounded:ve,readOnly:oe,ownerState:Pe},t=o===Math.ceil(Ze)&&(-1!==ye||-1!==ge);if(ee<1){var a=Array.from(new Array(1/ee));return(0,b.jsx)(H,{className:(0,c.Z)(Xe.decimal,t&&Xe.iconActive),ownerState:Pe,iconActive:t,children:a.map((function(e,n){var t=L(o-1+(n+1)*ee,ee);return(0,b.jsx)(O,(0,l.Z)({},i,{isActive:!1,itemValue:t,labelProps:{style:a.length-1===n?{}:{width:t===Ze?"".concat((n+1)*ee*100,"%"):"0%",overflow:"hidden",position:"absolute"}}}),t)}))},o)}return(0,b.jsx)(O,(0,l.Z)({},i,{isActive:t,itemValue:o}),o)})),!oe&&!x&&(0,b.jsxs)(z,{className:(0,c.Z)(Xe.label,Xe.labelEmptyValue),ownerState:Pe,children:[(0,b.jsx)("input",{className:Xe.visuallyHidden,value:"",id:"".concat(re,"-empty"),type:"radio",name:re,checked:null==ve,onFocus:function(){return Be(!0)},onBlur:function(){return Be(!1)},onChange:He}),(0,b.jsx)("span",{className:Xe.visuallyHidden,children:V})]})]}))}))}}]);
//# sourceMappingURL=970.205695cf.chunk.js.map