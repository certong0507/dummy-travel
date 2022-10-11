"use strict";(self.webpackChunkreact_travelpa_admin=self.webpackChunkreact_travelpa_admin||[]).push([[7050],{30408:function(e,t,r){var n=r(1413),i=r(45987),a=(r(72791),r(47630)),o=r(48550),l=r(61134),s=r(77201),c=r(80184),d=["control","name","label","defaultValue","number","onBlur","leadingZeros"],u=(0,a.ZP)((function(e){var t=e.control,r=e.name,a=e.label,u=e.defaultValue,h=e.number,m=e.onBlur,f=e.leadingZeros,p=(0,i.Z)(e,d);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(l.Qr,{control:t,name:r,defaultValue:u||"",render:function(e){var t=e.field,r=t.onChange,i=t.value,l=e.fieldState,d=l.invalid,u=l.error;return(0,c.jsx)(o.Z,(0,n.Z)({required:!0,fullWidth:!0,label:a,size:"small",onChange:r,onBlur:m,value:i,error:d,helperText:(null===u||void 0===u?void 0:u.message)||" ",InputLabelProps:{style:{color:"#CCCCCC"}},InputProps:{autoComplete:"off",form:{autocomplete:"off"},inputComponent:h?f?s.sm:s.eO:null},FormHelperTextProps:{className:"mt-0"},multiline:!0},p))}})})}))((function(e){e.theme;return{".MuiInputLabel-root.Mui-error":{color:"rgb(239, 83, 80) !important"},".MuiInputLabel-shrink.Mui-focused.Mui-error":{color:"rgb(239, 83, 80) !important"},".MuiInputLabel-shrink.Mui-focused":{color:"#009C99 !important"},".MuiOutlinedInput-notchedOutline":{transition:"0.3s",legend:{float:"unset",overflow:"hidden",display:"block",width:"auto",padding:0,height:"11px",fontSize:"0.75em",visibility:"hidden",transition:"max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms",whiteSpace:"nowrap"}}}}));t.Z=u},87050:function(e,t,r){r.r(t),r.d(t,{ChangePassword:function(){return R},default:function(){return D}});var n=r(15861),i=r(29439),a=r(87757),o=r.n(a),l=r(72791),s=r(60364),c=r(64554),d=r(61889),u=r(57621),h=r(39504),m=r(20890),f=r(36151),p=r(61134),v=r(61265),g=r(16871),x=r(62797),w=x.Ry().shape({current_password:x.Z_().required("Field is required."),password:x.Z_().required("Field is required.").min(8,"Password must be at least 8 characters"),confirm_password:x.Z_().required("Field is required.").oneOf([x.iH("password")],"Passwords does not match")}).required(),Z=r(30408),b=r(5574),j=r(65661),C=r(39157),P=r(97123),y=r(94721),N=r(80184),S=(0,s.$j)((function(e){return{}}),{})((function(e){var t=e.handleClose,r=e.handleSubmit,n=e.isOpen,i=e.buttonLabel,a=e.title,o=e.children;return(0,N.jsxs)(b.Z,{disableEscapeKeyDown:!0,onClose:function(e,r){r&&"backdropClick"===r||t()},open:n,maxWidth:"sm",style:{minWidth:"30%"},fullWidth:!0,children:[(0,N.jsx)(j.Z,{id:"confirmation-dialog-title",className:"text-center",children:a}),(0,N.jsx)(y.Z,{style:{width:"93%"},className:"m-auto"}),(0,N.jsx)(C.Z,{children:o}),(0,N.jsx)(P.Z,{className:"justify-content-center mb-2",children:(0,N.jsx)(f.Z,{disableRipple:!0,onClick:r||t,autoFocus:!0,className:"w-50",variant:"contained",size:"medium",children:i})})]})})),M=r(50611),R=function(e){var t=e.success,r=e.fail,a=e.errorDetailData,s=e.doChangePassword,x=e.doResetChangePassword,b=(0,g.s0)(),j=(0,p.cI)({resolver:(0,v.X)(w),mode:"all"}),C=j.control,P=j.handleSubmit,y=j.trigger,M=(0,l.useState)(!1),R=(0,i.Z)(M,2),I=R[0],D=R[1],W=(0,l.useState)(null),k=(0,i.Z)(W,2),A=k[0],L=k[1];(0,l.useEffect)((function(){x(),L(null)}),[]);var V=function(){var e=(0,n.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:e.sent&&s({current_password:t.current_password,password:t.password});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){t&&(x(),D(!0)),r&&L(a)}),[t,r]);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(S,{title:"Password Updated.",buttonLabel:"OK",isOpen:I,handleClose:function(){D(!I),b("/dashboard/my-profile")}}),(0,N.jsx)(c.Z,{children:(0,N.jsx)(u.Z,{variant:"outlined",children:(0,N.jsxs)(h.Z,{children:[(0,N.jsx)(c.Z,{className:"d-flex justify-content-between",children:(0,N.jsx)(m.Z,{variant:"h6",children:"Change Password"})}),(0,N.jsx)("p",{className:"text-medium-emphasis",style:{fontSize:"14px"},children:"For your account's security, do not share your password with anyone else"}),(0,N.jsxs)(d.ZP,{container:!0,columns:{xs:1,lg:12},children:[(0,N.jsx)(d.ZP,{item:!0,xs:1,lg:12,className:"pt-0",children:(0,N.jsxs)(d.ZP,{container:!0,columns:{xs:1,sm:1,md:12,lg:12},children:[(0,N.jsx)(d.ZP,{item:!0,xs:1,sm:1,md:1.5,lg:1.5,children:(0,N.jsx)(m.Z,{variant:"caption",color:"text.secondary",children:"Current Password"})}),(0,N.jsx)(d.ZP,{item:!0,xs:1,sm:1,md:4.5,lg:4.5,children:(0,N.jsx)(Z.Z,{control:C,name:"current_password",label:"",type:"password"})})]})}),(0,N.jsx)(d.ZP,{item:!0,xs:1,lg:12,className:"pt-0",children:(0,N.jsxs)(d.ZP,{container:!0,columns:{xs:1,sm:1,md:12,lg:12},children:[(0,N.jsx)(d.ZP,{item:!0,xs:1,sm:1,md:1.5,lg:1.5,children:(0,N.jsx)(m.Z,{variant:"caption",color:"text.secondary",children:"New Password"})}),(0,N.jsx)(d.ZP,{item:!0,xs:1,sm:1,md:4.5,lg:4.5,children:(0,N.jsx)(Z.Z,{control:C,name:"password",label:"",type:"password"})})]})}),(0,N.jsx)(d.ZP,{item:!0,xs:1,lg:12,className:"pt-0",children:(0,N.jsxs)(d.ZP,{container:!0,columns:{xs:1,sm:1,md:12,lg:12},children:[(0,N.jsx)(d.ZP,{item:!0,xs:1,sm:1,md:1.5,lg:1.5,children:(0,N.jsx)(m.Z,{variant:"caption",color:"text.secondary",children:"Confirm Password"})}),(0,N.jsx)(d.ZP,{item:!0,xs:1,sm:1,md:4.5,lg:4.5,children:(0,N.jsx)(Z.Z,{control:C,name:"confirm_password",label:"",type:"password"})})]})})]}),(0,N.jsxs)(c.Z,{className:"d-flex justify-content-between",children:[(0,N.jsx)(m.Z,{variant:"subtitle2",color:"error",component:"div",className:"my-auto",children:null===A||void 0===A?void 0:A.errorMessage}),(0,N.jsx)(f.Z,{disableElevation:!0,variant:"contained",onClick:P(V),children:"Confirm"})]})]})})})]})},I={doChangePassword:M.HR,doResetChangePassword:M.kS},D=(0,s.$j)((function(e){return{loggedInUser:e.core.loggedInUser,success:e.userProfile.success,fail:e.userProfile.fail,errorDetailData:e.userProfile.errorDetailData}}),I)(R)},77201:function(e,t,r){r.d(t,{Du:function(){return p},Jz:function(){return g},Ny:function(){return f},eO:function(){return m},hu:function(){return v},sm:function(){return h}});var n=r(1413),i=r(45987),a=r(72791),o=r(30948),l=r(24805),s=r(60173),c=r(80184),d=["onChange","name"],u=["onChange","name"],h=a.forwardRef((function(e,t){var r=e.onChange,a=e.name,l=(0,i.Z)(e,d);return(0,c.jsx)(o.Z,(0,n.Z)((0,n.Z)({},l),{},{allowLeadingZeros:!0,allowNegative:!1,decimalSeparator:!1,getInputRef:t,onValueChange:function(e){r({target:{name:a,value:e.value}})}}))})),m=a.forwardRef((function(e,t){var r=e.onChange,a=e.name,l=(0,i.Z)(e,u);return(0,c.jsx)(o.Z,(0,n.Z)((0,n.Z)({},l),{},{allowNegative:!1,getInputRef:t,onValueChange:function(e){r({target:{name:a,value:e.value}})}}))})),f=function(e){var t=e.children;return(0,l.useMediaQuery)({minWidth:992})?t:null},p=function(e){var t=e.children;return(0,l.useMediaQuery)({minWidth:768,maxWidth:991})?t:null},v=function(e){var t=e.children,r=(0,s.Nt)().isPortrait,n=(0,l.useMediaQuery)({maxWidth:767});return console.log("[MobilePortraitView]","[isPortrait]",r,"[isMobile]",n),n?t:null},g=function(e){var t=e.children,r=(0,l.useMediaQuery)({maxWidth:767}),n=(0,l.useMediaQuery)({query:"(orientation: landscape)"});return r&&n?t:null}},65661:function(e,t,r){var n=r(87462),i=r(63366),a=r(72791),o=r(28182),l=r(90767),s=r(20890),c=r(47630),d=r(61046),u=r(17673),h=r(85090),m=r(80184),f=["className","id"],p=(0,c.ZP)(s.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),v=a.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiDialogTitle"}),s=r.className,c=r.id,v=(0,i.Z)(r,f),g=r,x=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},u.a,t)}(g),w=a.useContext(h.Z).titleId,Z=void 0===w?c:w;return(0,m.jsx)(p,(0,n.Z)({component:"h2",className:(0,o.Z)(x.root,s),ownerState:g,ref:t,variant:"h6",id:Z},v))}));t.Z=v},94721:function(e,t,r){var n=r(63366),i=r(87462),a=r(72791),o=r(28182),l=r(90767),s=r(12065),c=r(47630),d=r(61046),u=r(90133),h=r(80184),m=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:t.palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:(0,s.Fq)(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({},r.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat(t.palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat(t.palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return(0,i.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),p=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var r=e.ownerState;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===r.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),v=a.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiDivider"}),a=r.absolute,s=void 0!==a&&a,c=r.children,v=r.className,g=r.component,x=void 0===g?c?"div":"hr":g,w=r.flexItem,Z=void 0!==w&&w,b=r.light,j=void 0!==b&&b,C=r.orientation,P=void 0===C?"horizontal":C,y=r.role,N=void 0===y?"hr"!==x?"separator":void 0:y,S=r.textAlign,M=void 0===S?"center":S,R=r.variant,I=void 0===R?"fullWidth":R,D=(0,n.Z)(r,m),W=(0,i.Z)({},r,{absolute:s,component:x,flexItem:Z,light:j,orientation:P,role:N,textAlign:M,variant:I}),k=function(e){var t=e.absolute,r=e.children,n=e.classes,i=e.flexItem,a=e.light,o=e.orientation,s=e.textAlign,c={root:["root",t&&"absolute",e.variant,a&&"light","vertical"===o&&"vertical",i&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(c,u.V,n)}(W);return(0,h.jsx)(f,(0,i.Z)({as:x,className:(0,o.Z)(k.root,v),role:N,ref:t,ownerState:W},D,{children:c?(0,h.jsx)(p,{className:k.wrapper,ownerState:W,children:c}):null}))}));t.Z=v},90133:function(e,t,r){r.d(t,{V:function(){return i}});var n=r(95159);function i(e){return(0,n.Z)("MuiDivider",e)}var a=(0,r(30208).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=a}}]);
//# sourceMappingURL=7050.f3b8410a.chunk.js.map