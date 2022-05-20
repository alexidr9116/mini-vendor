"use strict";(self.webpackChunkvmaclient=self.webpackChunkvmaclient||[]).push([[407],{6407:function(e,n,s){s.r(n),s.d(n,{default:function(){return v}});var t=s(9439),i=s(2791),l=s(6871),a=s(2711),r=s(158),o=s(4135),c=(s(1633),s(1413)),d=s(1134),u=s(6140),m=s(4278),f=s(7876),h=s(2675),p=s(937),x=s(184);function b(e){var n=e.onClose,s=e.machine,l=e.id,r=void 0===l?"add":l,o=(0,i.useState)(!1),b=(0,t.Z)(o,2),v=b[0],g=b[1],j=(0,i.useState)(!1),N=(0,t.Z)(j,2),w=N[0],Z=N[1],S=(0,i.useMemo)((function(){return{img:(null===s||void 0===s?void 0:s.img)||"",vendorId:(null===s||void 0===s?void 0:s.vendorId)||"",slotCount:(null===s||void 0===s?void 0:s.slotCount)||"",title:(null===s||void 0===s?void 0:s.title)||"",description:(null===s||void 0===s?void 0:s.description)||"",deviceNumber:(null===s||void 0===s?void 0:s.deviceNumber)||"",type:(null===s||void 0===s?void 0:s.type)||"ble"}}),[s]),y=(0,d.cI)({defaultValues:S}),C=y.register,P=y.handleSubmit,M=y.setValue,V=y.watch,k=y.reset,I=y.formState,D=(I.errors,I.isSubmitting),E=V("img"),q=V("type");return(0,i.useEffect)((function(){"add"!==r&&null!==s&&(k(S),M("img","".concat(p.S$.root).concat(s.img)))}),[r,s,k,S,M]),(0,x.jsxs)("div",{className:"modal modal-open bg-black/0 ",children:[(0,x.jsx)("div",{className:" fixed inset-0 bg-black/80",onClick:n}),(0,x.jsxs)("div",{className:"z-50 bg-white rounded-xl py-5 px-3",children:[(0,x.jsxs)("p",{className:"text-center font-bold text-xl mb-3",children:["add"===r?"Add New Vendor Machine":"Edit Vendor Machine"," "]}),(0,x.jsxs)("form",{className:"flex flex-col items-center gap-3 p-2",onSubmit:P((function(e){console.log(e),g(!0);var s=new FormData;if("object"===typeof E)s.append("img",E),s.append("vendorId",e.vendorId),s.append("slotCount",e.slotCount),s.append("title",e.title),s.append("type",e.type),s.append("description",e.description),s.append("id",r),s.append("deviceNumber",e.deviceNumber),(0,p.oh)(p.PM.addMiniVendor,s).then((function(e){g(!1),200===e.status?(u.ZP.success(e.message),n()):u.ZP.error(e.message)})).catch((function(e){u.ZP.error("Internal Server Error")}));else{if("add"===r)return u.ZP.error("Choose Image File"),void g(!1);(0,p.oh)(p.PM.editMiniVendor,(0,c.Z)((0,c.Z)({},e),{},{id:r})).then((function(e){g(!1),200===e.status?(u.ZP.success(e.message),n()):u.ZP.error(e.message)})).catch((function(e){g(!1),console.log(e),u.ZP.error("Server Error")}))}})),children:[(0,x.jsxs)("div",{className:"grid grid-cols-2 w-full",children:[(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"w-full ",children:[(0,x.jsx)("p",{className:"",children:"VendorID*"}),(0,x.jsx)("input",(0,c.Z)({className:"input h-10 border border-stone-300 w-full",required:!0},C("vendorId")))]}),(0,x.jsxs)("div",{className:"w-full",children:[(0,x.jsx)("p",{className:"",children:"Slot Count*"}),(0,x.jsx)("input",(0,c.Z)({type:"number",className:"input h-10 border border-stone-300 w-full",required:!0},C("slotCount")))]}),(0,x.jsxs)("div",{className:"w-full ",children:[(0,x.jsx)("p",{className:"",children:"VendorType*"}),(0,x.jsxs)("select",(0,c.Z)((0,c.Z)({className:"select select-sm h-10 select-info w-full mb-2"},C("type")),{},{children:[(0,x.jsx)("option",{value:"ble",children:"Bluetooth"}),(0,x.jsx)("option",{value:"sms",children:"SMS"}),(0,x.jsx)("option",{value:"4g",children:"4G"}),(0,x.jsx)("option",{value:"wifi",children:"Wi-fi"})]}))]})]}),(0,x.jsx)("div",{className:"card p-3  gap-5  h-full",children:(0,x.jsxs)("div",{className:"mx-auto relative mt-4",children:[(0,x.jsx)(f.Z,{className:"w-36 h-36 rounded-lg outline-dashed outline-stone-300 outline-offset-4 outline-1",src:"string"===typeof E?E:E?URL.createObjectURL(E):""}),(0,x.jsx)("input",{hidden:!0,id:"img",type:"file",accept:"image/*",onChange:function(e){e.target.files&&e.target.files.length>0&&M("img",e.target.files[0])}}),(0,x.jsx)("label",{htmlFor:"img",className:"rounded-lg border bg-gray-50 w-9 h-9 cursor-pointer flex absolute bottom-0 right-0",children:(0,x.jsx)(a.JO,{icon:"fa:pencil",width:20,className:"m-auto text-stone-500"})})]})})]}),(0,x.jsxs)("div",{className:"w-full ",children:[(0,x.jsx)("p",{className:"",children:"Vendor Title"}),(0,x.jsx)("input",(0,c.Z)({className:"input h-10 border border-stone-300 w-full",required:!0},C("title")))]}),"sms"===q&&(0,x.jsxs)("div",{className:"w-full ",children:[(0,x.jsx)("p",{className:"",children:"Device Number"}),(0,x.jsx)("input",(0,c.Z)({className:"input h-10 border border-stone-300 w-full",required:!0},C("deviceNumber")))]}),(0,x.jsxs)("div",{className:"w-full",children:[(0,x.jsx)("p",{className:"",children:"Vendor Description"}),(0,x.jsx)("textarea",(0,c.Z)({className:"textarea textarea-bordered  w-full ",placeholder:"Description",required:!0},C("description")))]}),(0,x.jsxs)("div",{className:"w-full grid grid-cols-3 gap-2",children:[(0,x.jsx)("button",{className:"btn btn-sm btn-info ".concat(D&&"loading"),type:"submit",children:"Save"}),(0,x.jsx)("button",{className:"btn  btn-sm btn-info ",onClick:function(){Z(!0)},type:"button",disabled:"add"===r,children:"Delete"}),(0,x.jsx)("button",{className:"btn  btn-sm btn-info  ",onClick:n,children:"Cancel"})]})]})]}),w&&(0,x.jsx)(h.Z,{onCancel:function(){return Z(!1)},onAccept:function(){(0,p.yP)("".concat(p.PM.deleteMiniVendor),r).then((function(e){200===e.status?(u.ZP.success(e.message),Z(!1),n()):u.ZP.error(e.message)}))},title:"Do you want to remove, Sure?",description:"If you have proceed this operation, the data will be removed from  database"}),v&&(0,x.jsx)(m.Z,{message:"Saving"})]})}function v(){var e=(0,l.s0)(),n=(0,i.useState)({}),s=(0,t.Z)(n,2),c=s[0],d=s[1],m=(0,i.useState)(!1),v=(0,t.Z)(m,2),g=v[0],j=v[1],N=(0,i.useState)(!1),w=(0,t.Z)(N,2),Z=w[0],S=w[1],y=(0,i.useState)("add"),C=(0,t.Z)(y,2),P=C[0],M=C[1],V=(0,i.useState)([]),k=(0,t.Z)(V,2),I=k[0],D=k[1],E=(0,i.useState)([]),q=(0,t.Z)(E,2),O=q[0],_=q[1],A=(0,i.useState)(null),F=(0,t.Z)(A,2),J=F[0],L=F[1],R=(0,i.useState)([]),T=(0,t.Z)(R,2),U=T[0],$=T[1],z=function(){(0,p.Hf)(p.PM.getMiniVendors).then((function(e){if(200===e.status&&e.data&&e.data.data){var n=e.data.data;_(n),$(n)}}))};return(0,i.useEffect)((function(){(0,p.DS)(p.PM.admins,{}).then((function(e){200===e.status&&(D(e.data.users),z())}))}),[]),(0,x.jsxs)(r.Z,{title:"Machine Management",children:[(0,x.jsxs)("div",{className:"flex w-full gap-2 flex-col ",children:[(0,x.jsxs)("div",{className:"flex w-full justify-center items-center",children:[(0,x.jsx)(o.Z,{handleChangeSearch:function(e){$(O.filter((function(n){return n.title.includes(e)||n.type.includes(e)||n.description.includes(e)})))}}),(0,x.jsx)("button",{className:"btn btn-outline btn-sm btn-circle btn-error ml-2",onClick:function(){L(null),S(!0)},children:(0,x.jsx)(a.JO,{icon:"fa:plus"})})]}),(0,x.jsx)("div",{className:"grid grid-cols-1 gap-2 px-4 sm:grid-cols-2 lg:grid-cols-3",children:U&&U.map((function(n,s){return(0,x.jsxs)("div",{className:"card card-side bg-base-100 shadow-xl p-3",children:[(0,x.jsx)("figure",{children:(0,x.jsx)(f.Z,{className:"h-[200px] w-[130px]",src:"".concat(p.S$.root).concat(n.img),alt:"Vendor"})}),(0,x.jsxs)("div",{className:"card-body gap-0 p-3",children:[(0,x.jsxs)("h2",{className:"card-title",children:[n.title," ",(0,x.jsx)("label",{className:"badge badge-outline badge-info",children:n.type})]}),(0,x.jsxs)("p",{children:[n.description,".",(0,x.jsx)("br",{}),(0,x.jsxs)("select",{className:"select select-info select-sm w-full max-w-xs",value:n.owner,onChange:function(e){return s=e.target.value,t=n,d(s),L(t),void j(!0);var s,t},children:[(0,x.jsx)("option",{disabled:!0,children:"Select Owner"}),I.map((function(e,n){return(0,x.jsxs)("option",{value:e._id,children:[e.firstName," ",e.lastName," - ",e.mobile]},n)}))]})]}),(0,x.jsxs)("div",{className:"card-actions justify-end",children:[(0,x.jsx)("button",{className:"btn btn-info  btn-sm",onClick:function(){return s="".concat(n.vendorId),void e("/admin/get-products/".concat(s),{replace:!0});var s},children:"Products"}),(0,x.jsx)("button",{className:"btn btn-error btn-sm",onClick:function(){return function(e,n){M(e),L(n),S(!0)}("".concat(n._id),n)},children:"Edit"})]})]})]},s)}))})]}),Z&&(0,x.jsx)(b,{onClose:function(){S(!1),z()},id:P,machine:J}),g&&(0,x.jsx)(h.Z,{onAccept:function(){(0,p.DS)(p.PM.changeVendorOwner,{id:J._id,owner:c}).then((function(e){j(!1),200===e.status?(_((function(e){return e.map((function(e,n){return e._id===J._id&&(e.owner=c),e}))})),u.ZP.success(e.message)):u.ZP.error(e.message)}))},title:"Do you want to change this vendor's owner, really?",description:"If you proceed this operation, the vendor's owner will be change. ",onCancel:function(){return j(!1)}})]})}}}]);
//# sourceMappingURL=407.4243c2d4.chunk.js.map