(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[11],{607:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(29),c=n(3),o=n(0),i=n.n(o),s=n(33),l=n(151),d=n(114),j=n(345),b=n(591),O=n(593),h=n(587),x=n(418),u=n(590),p=n(592),f=n(589),v=n(64),m=n(5),g=n(147),y=n(359),w=n(53),C=n(349),k=n(331),S=n(342),T=n(605),z=n(608),D=n(1),P={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function H(e){var t=Object(s.b)(),n=Object(s.c)((function(e){return e.goods})),c=n.addOpen,i=n.add,d=n.addMessage,b=n.isLoadingG,O=o.forwardRef((function(e,t){return Object(D.jsx)(j.a,Object(r.a)({elevation:6,ref:t,variant:"filled"},e))})),h=o.useState({vertical:"top",horizontal:"center"}),x=Object(a.a)(h,2),u=x[0],p=x[1],f=u.vertical,m=u.horizontal,H=function(e){"clickaway"!==e&&(t(l.e.clearMessage()),p(Object(r.a)(Object(r.a)({},u),{},{open:!1})))},M=o.useState(""),G=Object(a.a)(M,2),A=G[0],B=G[1],N=o.useState(!0),E=Object(a.a)(N,2),R=E[0],J=E[1];return Object(D.jsx)("div",{children:Object(D.jsx)(C.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:e.Open,onClose:function(){return e.setOpen(!1)},closeAfterTransition:!0,BackdropComponent:y.a,BackdropProps:{timeout:500},children:Object(D.jsx)(k.a,{in:e.Open,children:Object(D.jsxs)(w.a,{sx:P,children:[b&&Object(D.jsx)(w.a,{sx:{width:"100%"},children:Object(D.jsx)(z.a,{})}),Object(D.jsx)(v.a,{id:"transition-modal-title",variant:"h6",component:"h2",sx:{ml:"35%"},children:"Add Product"}),i&&Object(D.jsx)(T.a,{anchorOrigin:{vertical:f,horizontal:m},open:c,autoHideDuration:3e3,onClose:H,children:Object(D.jsx)(O,{onClose:H,severity:"success",sx:{width:"100%"},children:d})},f+m),!i&&Object(D.jsx)(T.a,{anchorOrigin:{vertical:f,horizontal:m},open:c,autoHideDuration:3e3,onClose:H,children:Object(D.jsx)(O,{onClose:H,severity:"error",sx:{width:"100%"},children:d})},f+m),Object(D.jsxs)(w.a,{children:[Object(D.jsx)(S.a,{sx:{ml:12,mt:2},id:"type",name:"type",label:"Enter goods Type",value:A,onChange:function(e){B(e.target.value),J(!0),""===e.target.value&&J(!1)}}),!R&&Object(D.jsx)(O,{variant:"outlined",severity:"error",sx:{width:"55%",ml:10,mt:2,p:-5},children:"Please enter Type of Good"})]}),Object(D.jsx)(g.a,{variant:"outlined",sx:{mt:2,ml:13,width:"49%"},onClick:function(){""!==A?(t(Object(l.a)({type:A})),B("")):J(!1)},children:"Save"})]})})})})}var M=n(338),G=n(356),A={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function B(e){var t=o.forwardRef((function(e,t){return Object(D.jsx)(j.a,Object(r.a)({elevation:6,ref:t,variant:"filled"},e))})),n=o.useState({vertical:"top",horizontal:"center"}),c=Object(a.a)(n,2),i=c[0],d=c[1],b=i.vertical,O=i.horizontal,h=Object(s.b)(),x=Object(s.c)((function(e){return e.goods})),u=x.update,p=x.updateMessage,f=x.updateOpen,m=x.isLoadingG,P=function(e){"clickaway"!==e&&(h(l.e.clearMessage()),d(Object(r.a)(Object(r.a)({},i),{},{open:!1})))},H=o.useState(!0),M=Object(a.a)(H,2),G=M[0],B=M[1];return Object(D.jsx)("div",{children:Object(D.jsx)(C.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:e.Open,onClose:function(){return e.setOpen(!1)},closeAfterTransition:!0,BackdropComponent:y.a,BackdropProps:{timeout:500},children:Object(D.jsx)(k.a,{in:e.Open,children:Object(D.jsxs)(w.a,{sx:A,children:[m&&Object(D.jsx)(w.a,{sx:{width:"100%"},children:Object(D.jsx)(z.a,{})}),Object(D.jsx)(v.a,{id:"transition-modal-title",variant:"h6",component:"h2",sx:{ml:"35%"},children:"Update Product"}),u&&Object(D.jsx)(T.a,{anchorOrigin:{vertical:b,horizontal:O},open:f,autoHideDuration:3e3,onClose:P,children:Object(D.jsx)(t,{onClose:P,severity:"success",sx:{width:"100%"},children:p})},b+O),!1===u&&Object(D.jsx)(T.a,{anchorOrigin:{vertical:b,horizontal:O},open:f,autoHideDuration:3e3,onClose:P,children:Object(D.jsx)(t,{onClose:P,severity:"error",sx:{width:"100%"},children:p})},b+O),Object(D.jsxs)(w.a,{children:[Object(D.jsx)(S.a,{sx:{ml:12,mt:2},id:"type",name:"type",label:"Enter goods Type",value:e.type,onChange:function(t){e.setType(t.target.value),console.log(e.type),B(!0),""===t.target.value&&B(!1)}}),!G&&Object(D.jsx)(t,{variant:"outlined",severity:"error",sx:{width:"55%",ml:10,mt:2,p:-5},children:"Please enter Type of Good"})]}),Object(D.jsx)(g.a,{variant:"outlined",sx:{mt:2,ml:13,width:"49%"},onClick:function(){""!==e.type?h(Object(l.f)({id:e.id,type:e.type})):B(!1)},children:"Save"})]})})})})}var N=n(150),E=Object(m.a)(h.a)((function(e){var t,n=e.theme;return t={},Object(c.a)(t,"&.".concat(x.a.head),{backgroundColor:n.palette.common.black,color:n.palette.common.white}),Object(c.a)(t,"&.".concat(x.a.body),{fontSize:14}),t})),R=Object(m.a)(f.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}));t.default=function(){var e=i.a.forwardRef((function(e,t){return Object(D.jsx)(j.a,Object(r.a)({elevation:6,ref:t,variant:"filled"},e))})),t=Object(s.b)();function n(e){return Object(D.jsx)(M.a,Object(r.a)(Object(r.a)({},e),{},{direction:"left"}))}i.a.useEffect((function(){t(Object(l.d)())}),[]);var c=function(e){"clickaway"!==e&&t(l.e.clearMessage())},o=Object(s.c)((function(e){return e.goods})),h=o.goodsType,x=o.Delete,f=o.deleteOpen,m=o.deleteMessage,y=i.a.useState(!1),w=Object(a.a)(y,2),C=w[0],k=w[1],S=i.a.useState(!1),z=Object(a.a)(S,2),P=z[0],A=z[1],J=i.a.useState(!1),L=Object(a.a)(J,2),_=L[0],q=L[1],U=i.a.useState(!1),W=Object(a.a)(U,2),F=W[0],I=W[1],K=i.a.useState(),Q=Object(a.a)(K,2),V=Q[0],X=Q[1],Y=i.a.useState(),Z=Object(a.a)(Y,2),$=Z[0],ee=Z[1];return Object(D.jsxs)("div",{children:[Object(D.jsx)(d.a,{}),_&&Object(D.jsx)(B,{Open:F,setOpen:I,type:V,setType:X,id:$}),C&&Object(D.jsx)(H,{Open:P,setOpen:A}),x&&Object(D.jsx)(T.a,{TransitionComponent:n,open:f,autoHideDuration:3e3,onClose:c,children:Object(D.jsx)(e,{onClose:c,severity:"success",sx:{width:"100%"},children:m})}),!1===x&&Object(D.jsx)(T.a,{TransitionComponent:n,open:f,autoHideDuration:3e3,onClose:c,children:Object(D.jsx)(e,{onClose:c,severity:"error",sx:{width:"100%"},children:m})}),Object(D.jsxs)(G.a,{sx:{ml:"25%",width:"50%",overflow:"hidden"},children:[""==h&&Object(D.jsx)(v.a,{children:"No data found"}),Object(D.jsxs)(u.a,{children:[Object(D.jsx)(v.a,{variant:"h4",align:"center",sx:{p:2},children:"Products"}),Object(D.jsxs)(b.a,{sx:{minWidth:650,border:1,width:500,mb:2},align:"center","aria-label":"simple table",children:[Object(D.jsx)(p.a,{sx:{border:1},children:Object(D.jsxs)(R,{sx:{border:1},children:[Object(D.jsx)(E,{align:"center",sx:{border:1},children:"No."}),Object(D.jsx)(E,{align:"center",sx:{border:1},children:"Type"}),Object(D.jsx)(E,{align:"center",sx:{border:1}}),Object(D.jsx)(E,{align:"center",sx:{border:1}})]})}),Object(D.jsx)(O.a,{sx:{border:1},children:h.map((function(e,n){return Object(D.jsxs)(R,{sx:{"&:last-child td, &:last-child th":{border:1},border:1},children:[Object(D.jsx)(E,{component:"th",scope:"row",sx:{border:1},align:"center",children:n+1}),Object(D.jsx)(E,{align:"center",sx:{border:1,size:"small"},children:e.type}),Object(D.jsx)(E,{align:"center",sx:{border:1},children:Object(D.jsx)(g.a,{onClick:function(){q(!0),I(!0),console.log(h[n].type),X(h[n].type),ee(h[n]._id)},children:Object(D.jsx)("i",{className:"fa-solid fa-pen-to-square"})})}),Object(D.jsx)(E,{align:"center",sx:{border:1},children:Object(D.jsx)(g.a,{onClick:function(){t(Object(l.c)(e._id))},children:Object(D.jsx)("i",{className:"fa-solid fa-trash"})})})]},n)}))})]})]})]}),Object(D.jsx)(g.a,{variant:"contained",sx:{ml:42,mt:2,width:"50%"},onClick:function(){k(!0),A(!0)},children:"Add Goods"}),Object(D.jsx)(N.a,{})]})}}}]);
//# sourceMappingURL=11.19a35610.chunk.js.map