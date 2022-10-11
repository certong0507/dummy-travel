"use strict";(self.webpackChunkreact_travelpa_admin=self.webpackChunkreact_travelpa_admin||[]).push([[2879],{57923:function(e,n,r){r.d(n,{Qy:function(){return f},Qz:function(){return m},RZ:function(){return h},T4:function(){return E},Tf:function(){return t},Ud:function(){return a},Y_:function(){return v},bD:function(){return C},cn:function(){return d},fC:function(){return l},ic:function(){return u},sd:function(){return c},zH:function(){return s}});var o=r(71653),i=r.n(o),t=function(e){return{type:i().SET_INSURANCE_DETAILS,payload:e}},a=function(e){return{type:i().SET_SELECTED_INSURANCE,payload:e}},l=function(e){return{type:i().SET_INSURANCE_RATE_DETAILS,payload:e}},c=function(e){return{type:i().SET_WATCH_INSURANCE_COVERAGE,payload:e}},u=function(e){return{type:i().SET_IS_SPOUSE,payload:e}},s=function(e){return{type:i().SET_ERROR_CODE_CONFIRM_DATA,payload:e}},d=function(e){return{type:i().SET_CODE_CONFIRM_SUCCESS,payload:e}},f=function(e){return{type:i().SET_ERROR_NEW_CODE_CONFIRM_DATA,payload:e}},m=function(e){return{type:i().SET_NEW_CODE_CONFIRM_SUCCESS,payload:e}},C=function(e){return{type:i().SET_NEW_CODE_SENT_SUCCESS,payload:e}},E=function(e){return{type:i().SET_CODE_SENT_SUCCESS,payload:e}},v=function(e){return{type:i().SET_ERROR_CODE_SENT_DATA,payload:e}},h=function(e){return{type:i().SET_RESEND_EMAIL_VERIFICATION,payload:e}}},30408:function(e,n,r){var o=r(1413),i=r(45987),t=(r(72791),r(47630)),a=r(48550),l=r(61134),c=r(77201),u=r(80184),s=["control","name","label","defaultValue","number","onBlur","leadingZeros"],d=(0,t.ZP)((function(e){var n=e.control,r=e.name,t=e.label,d=e.defaultValue,f=e.number,m=e.onBlur,C=e.leadingZeros,E=(0,i.Z)(e,s);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(l.Qr,{control:n,name:r,defaultValue:d||"",render:function(e){var n=e.field,r=n.onChange,i=n.value,l=e.fieldState,s=l.invalid,d=l.error;return(0,u.jsx)(a.Z,(0,o.Z)({required:!0,fullWidth:!0,label:t,size:"small",onChange:r,onBlur:m,value:i,error:s,helperText:(null===d||void 0===d?void 0:d.message)||" ",InputLabelProps:{style:{color:"#CCCCCC"}},InputProps:{autoComplete:"off",form:{autocomplete:"off"},inputComponent:f?C?c.sm:c.eO:null},FormHelperTextProps:{className:"mt-0"},multiline:!0},E))}})})}))((function(e){e.theme;return{".MuiInputLabel-root.Mui-error":{color:"rgb(239, 83, 80) !important"},".MuiInputLabel-shrink.Mui-focused.Mui-error":{color:"rgb(239, 83, 80) !important"},".MuiInputLabel-shrink.Mui-focused":{color:"#009C99 !important"},".MuiOutlinedInput-notchedOutline":{transition:"0.3s",legend:{float:"unset",overflow:"hidden",display:"block",width:"auto",padding:0,height:"11px",fontSize:"0.75em",visibility:"hidden",transition:"max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms",whiteSpace:"nowrap"}}}}));n.Z=d},22879:function(e,n,r){r.r(n),r.d(n,{ChangeEmail:function(){return Z},default:function(){return j}});var o=r(29439),i=r(72791),t=r(60364),a=r(64554),l=r(57621),c=r(39504),u=r(20890),s=r(61134),d=r(61265),f=r(16871),m=r(36151),C=r(61889),E=r(62797),v=E.Ry().shape({verifyCode:E.Z_().required("Field is required.")}).required(),h=E.Ry().shape({newEmail:E.Z_().required("Field is required."),confirmationCode:E.Z_()}).required(),p=r(30408),S=r(50611),g=r(57923),x=r(80184),y={doConfirmCurrentEmailVerificationCode:S.Bz,doSendCurrentEmailVerificationCode:S.YC,setErrorCodeConfirmData:g.zH,setCodeConfirmSuccess:g.cn},b=(0,t.$j)((function(e){return{loggedInUser:e.core.loggedInUser,errorCodeConfirmData:e.userProfile.errorCodeConfirmData,codeConfirmSuccess:e.userProfile.codeConfirmSuccess}}),y)((function(e){var n,r=e.setCodeConfirmSuccess,o=e.setErrorCodeConfirmData,t=e.doConfirmCurrentEmailVerificationCode,l=e.doSendCurrentEmailVerificationCode,c=e.setIsVerifiedEmail,E=e.loggedInUser,h=e.errorCodeConfirmData,S=e.codeConfirmSuccess,g=(0,f.s0)(),y=(0,s.cI)({defaultValues:{verifyCode:""},resolver:(0,d.X)(v),mode:"all"}),b=y.control,N=y.handleSubmit,_=(y.trigger,y.getValues),Z=(y.setValue,y.setError),j=y.reset;(0,i.useEffect)((function(){j()}),[]),(0,i.useEffect)((function(){S&&c(!0)}),[S]),(0,i.useEffect)((function(){h&&Z("verifyCode",{type:"custom",message:h})}),[h]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(a.Z,{sx:{p:2,border:"1px solid rgb(42, 74, 75)",borderRadius:"4px"},className:"mb-5",children:[(0,x.jsxs)(u.Z,{variant:"subtitle1",component:"div",color:"text.secondary",className:"mb-2",children:["A verification code was sent to"," ",(0,x.jsx)(u.Z,{variant:"body1",component:"span",children:(0,x.jsx)("b",{children:null===E||void 0===E||null===(n=E.customer)||void 0===n?void 0:n.email})})]}),(0,x.jsx)(u.Z,{variant:"caption",color:"text.secondary",component:"div",className:"mb-2 lh-sm",children:"Enter the account verification code you received. (It could take up to 5 minutes for an account verification code to be delivered.)"}),(0,x.jsx)(C.ZP,{container:!0,columns:{xs:1,lg:12},children:(0,x.jsx)(C.ZP,{item:!0,xs:1,lg:3,className:"pt-0 mb-3",children:(0,x.jsx)(p.Z,{control:b,name:"verifyCode",label:"Verification Code"})})}),(0,x.jsx)(m.Z,{disableElevation:!0,variant:"contained",onClick:N((function(){o(null),r(null);var e=_("verifyCode");t({verify_code:e})})),children:"Continue"})]}),(0,x.jsx)(u.Z,{variant:"subtitle2",className:"mb-2",children:"Having trouble receiving an account verification code?"}),(0,x.jsxs)(a.Z,{className:"d-flex justify-content-between",children:[(0,x.jsx)(m.Z,{disableElevation:!0,variant:"contained",onClick:function(){l()},children:"Resend account verification code"}),(0,x.jsx)(m.Z,{disableElevation:!0,variant:"outlined",onClick:function(){g("/dashboard/my-profile")},children:"Cancel"})]})]})})),N={doSendNewEmailVerificationCode:S.d7,setErrorNewCodeConfirmData:g.Qy,doConfirmNewEmailVerificationCode:S.r3,doGetLoggedInUser:S.Bq,setNewCodeConfirmSuccess:g.Qz,setNewCodeSentSuccess:g.bD},_=(0,t.$j)((function(e){return{loggedInUser:e.core.loggedInUser,newCodeSentSuccess:e.userProfile.newCodeSentSuccess,newCodeConfirmSuccess:e.userProfile.newCodeConfirmSuccess,errorNewCodeSentData:e.userProfile.errorNewCodeSentData,errorNewCodeConfirmData:e.userProfile.errorNewCodeConfirmData}}),N)((function(e){var n,r=e.setNewCodeSentSuccess,o=e.setNewCodeConfirmSuccess,t=e.setErrorNewCodeConfirmData,l=e.doSendNewEmailVerificationCode,c=e.doConfirmNewEmailVerificationCode,E=e.doGetLoggedInUser,v=e.loggedInUser,S=e.newCodeSentSuccess,g=e.newCodeConfirmSuccess,y=e.errorNewCodeSentData,b=e.errorNewCodeConfirmData,N=(0,f.s0)(),_=(0,s.cI)({resolver:(0,d.X)(h),mode:"all"}),Z=_.control,j=_.handleSubmit,w=(_.trigger,_.getValues),I=(_.setValue,_.setError);_.resetField;(0,i.useEffect)((function(){}),[g]),(0,i.useEffect)((function(){y&&I("newEmail",{type:"custom",message:y})}),[y]),(0,i.useEffect)((function(){b&&I("confirmationCode",{type:"custom",message:b})}),[b]);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(a.Z,{className:"mb-5",children:[!g&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(u.Z,{variant:"body2",component:"div",className:"mb-2",children:["Current Email Address "," : "," ",(0,x.jsx)("b",{children:null===v||void 0===v||null===(n=v.customer)||void 0===n?void 0:n.email})]}),(0,x.jsx)(C.ZP,{container:!0,columns:{xs:1,lg:12},children:(0,x.jsx)(C.ZP,{item:!0,xs:1,lg:3,className:"pt-0",children:(0,x.jsx)(p.Z,{control:Z,name:"newEmail",label:"New Email Address",disabled:S})})})]}),S&&!g&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.Z,{variant:"caption",component:"div",className:"mb-2",children:"Enter the code we sent to vour new email address"}),(0,x.jsx)(C.ZP,{container:!0,columns:{xs:1,lg:12},children:(0,x.jsx)(C.ZP,{item:!0,xs:1,lg:3,className:"pt-0",children:(0,x.jsx)(p.Z,{control:Z,name:"confirmationCode",label:"Confirmation Code"})})})]}),!S&&(0,x.jsx)(m.Z,{disableElevation:!0,variant:"contained",onClick:j((function(){t(null);var e=w("newEmail");l({new_email:e})})),className:"mt-3",children:"Change Email"}),S&&!g&&(0,x.jsx)(m.Z,{disableElevation:!0,variant:"contained",onClick:function(){var e=w("newEmail"),n=w("confirmationCode");c({verify_code:n,new_email:e})},className:"mt-3",children:"Confirm Change Email"}),g&&(0,x.jsxs)(a.Z,{children:[(0,x.jsx)(u.Z,{variant:"subtitle1",component:"div",children:"Your email address has been updated"}),(0,x.jsx)(u.Z,{variant:"caption",component:"div",color:"text.secondary",children:"Please login with your email address"}),(0,x.jsx)(m.Z,{disableElevation:!0,variant:"contained",className:"mt-3",onClick:function(){r(!1),o(!1),E(),N("/dashboard/my-profile")},children:"Continue"})]})]})})})),Z=function(){var e=(0,i.useState)(!1),n=(0,o.Z)(e,2),r=n[0],t=n[1];return(0,i.useEffect)((function(){t(!1)}),[]),(0,x.jsx)(a.Z,{children:(0,x.jsx)(l.Z,{variant:"outlined",children:(0,x.jsxs)(c.Z,{children:[(0,x.jsx)(u.Z,{variant:"h6",className:"mb-3",children:"Change Email"}),!r&&(0,x.jsx)(b,{setIsVerifiedEmail:t}),r&&(0,x.jsx)(_,{})]})})})},j=(0,t.$j)((function(e){return{}}),{})(Z)},77201:function(e,n,r){r.d(n,{Du:function(){return E},Jz:function(){return h},Ny:function(){return C},eO:function(){return m},hu:function(){return v},sm:function(){return f}});var o=r(1413),i=r(45987),t=r(72791),a=r(30948),l=r(24805),c=r(60173),u=r(80184),s=["onChange","name"],d=["onChange","name"],f=t.forwardRef((function(e,n){var r=e.onChange,t=e.name,l=(0,i.Z)(e,s);return(0,u.jsx)(a.Z,(0,o.Z)((0,o.Z)({},l),{},{allowLeadingZeros:!0,allowNegative:!1,decimalSeparator:!1,getInputRef:n,onValueChange:function(e){r({target:{name:t,value:e.value}})}}))})),m=t.forwardRef((function(e,n){var r=e.onChange,t=e.name,l=(0,i.Z)(e,d);return(0,u.jsx)(a.Z,(0,o.Z)((0,o.Z)({},l),{},{allowNegative:!1,getInputRef:n,onValueChange:function(e){r({target:{name:t,value:e.value}})}}))})),C=function(e){var n=e.children;return(0,l.useMediaQuery)({minWidth:992})?n:null},E=function(e){var n=e.children;return(0,l.useMediaQuery)({minWidth:768,maxWidth:991})?n:null},v=function(e){var n=e.children,r=(0,c.Nt)().isPortrait,o=(0,l.useMediaQuery)({maxWidth:767});return console.log("[MobilePortraitView]","[isPortrait]",r,"[isMobile]",o),o?n:null},h=function(e){var n=e.children,r=(0,l.useMediaQuery)({maxWidth:767}),o=(0,l.useMediaQuery)({query:"(orientation: landscape)"});return r&&o?n:null}}}]);
//# sourceMappingURL=2879.c430bbdd.chunk.js.map