(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{214:function(e,t,a){"use strict";function n(e,t){var a=t.left,n=t.right,r=t.mirror,o=t.opposite,l=(a?1:0)|(n?2:0)|(r?16:0)|(o?32:0)|(e?64:0);if(g.hasOwnProperty(l))return g[l];if(!r!=!(e&&o)){var i=[n,a];a=i[0],n=i[1]}var s=a?"-100%":n?"100%":"0",c=e?"from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d("+s+", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ":"from {\n        transform: translate3d("+s+", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";return g[l]=(0,u.animation)(c),g[l]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,o=e.duration,l=void 0===o?u.defaults.duration:o,s=e.delay,c=void 0===s?u.defaults.delay:s,g=e.count,d=void 0===g?u.defaults.count:g,m=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["children","out","forever","timeout","duration","delay","count"]),p={make:n,duration:void 0===r?l:r,delay:c,forever:a,count:d,style:{animationFillMode:"both"}};return m.left,m.right,m.mirror,m.opposite,(0,i.default)(m,p,p,t)}Object.defineProperty(t,"__esModule",{value:!0});var o,l=a(75),i=(o=l)&&o.__esModule?o:{default:o},s=a(2),u=a(55),c={out:s.bool,left:s.bool,right:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},g={};r.propTypes=c,t.default=r,e.exports=t.default},242:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s}),a.d(t,"e",function(){return u}),a.d(t,"d",function(){return c}),a.d(t,"c",function(){return g});var n=a(51),r=a(4),o=a(3),l=a.n(o),i=function(e,t){return function(a){l.a.post(r.V,{email:e,password:t}).then(function(e){var t=e.data;return a({type:n.a,payload:t})}).catch(function(e){console.log(e)})}},s=function(){return function(e){e({type:n.b,payload:[]})}},u=function(e,t){return function(a){l.a.post(r.ub,{token:t,user_id:e}).then(function(e){var t={delivery_user:e.data,order_history:e.data.data.orders};return a({type:n.d,payload:t})}).catch(function(e){console.log(e)})}},c=function(e){return function(t){t({type:n.c,payload:e})}},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(a){return l.a.post(r.tb,{token:e,toggle_status:!0,force_offline:t}).then(function(e){var t={delivery_user:e.data,order_history:e.data.data.orders};return a({type:n.d,payload:t})}).catch(function(e){console.log(e)})}}},333:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(6),o=a(8),l=a(7),i=a(9),s=a(0),u=a.n(s),c=a(56),g=a(363),d=a(18),m=a(42),p=a(242),f=a(29),v=a(13),y=a(214),h=a.n(y),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={loading:!1,email:"",password:"",error:!1},a.handleOnChange=function(e){a.props.getSingleLanguageData(e.target.value),localStorage.setItem("userPreferedLanguage",e.target.value)},a.handleInputEmail=function(e){a.setState({email:e.target.value.trim()})},a.handleInputPassword=function(e){a.setState({password:e.target.value})},a.handleLogin=function(e){e.preventDefault(),a.setState({loading:!0}),a.props.loginDeliveryUser(a.state.email,a.state.password)},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getSettings(),this.props.getAllLanguages(),document.getElementsByTagName("body")[0].classList.remove("bg-grey"),document.getElementsByTagName("body")[0].classList.add("delivery-dark-bg")}},{key:"componentWillReceiveProps",value:function(e){if(this.props.delivery_user!==e.delivery_user&&(this.setState({loading:!1}),!1===e.delivery_user.success&&this.setState({error:!0})),e.delivery_user.success&&"FoodomaaAndroidWebViewUA"===navigator.userAgent&&"undefined"!==window.Android&&window.Android.registerFcm(e.delivery_user.data.auth_token,e.delivery_user.data.id),this.props.languages!==e.languages)if(localStorage.getItem("userPreferedLanguage"))this.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage"));else if(e.languages.length){var t=e.languages.filter(function(e){return 1===e.is_default})[0].id;this.props.getSingleLanguageData(t)}}},{key:"render",value:function(){return window.innerWidth>768?u.a.createElement(g.a,{to:"/"}):this.props.delivery_user.success?u.a.createElement(g.a,{to:"/delivery"}):u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{seotitle:"Login",seodescription:localStorage.getItem("seoMetaDescription"),ogtype:"website",ogtitle:localStorage.getItem("seoOgTitle"),ogdescription:localStorage.getItem("seoOgDescription"),ogurl:window.location.href,twittertitle:localStorage.getItem("seoTwitterTitle"),twitterdescription:localStorage.getItem("seoTwitterDescription")}),this.state.error&&u.a.createElement("div",{className:"auth-error"},u.a.createElement("div",{className:"error-shake"},localStorage.getItem("emailPassDonotMatch"))),this.state.loading&&u.a.createElement(v.a,null),u.a.createElement("div",{className:"mt-50 mb-50"},u.a.createElement("div",{className:"text-center clipped-delivery-login-header"},u.a.createElement("img",{src:"/assets/img/logos/logo.png",alt:localStorage.getItem("storeName"),width:"120",className:"delivery-login-logo"}),u.a.createElement(h.a,{left:!0,duration:1e3},u.a.createElement("img",{src:"/assets/img/various/delivery-bike.svg",alt:this.props.title,className:"delivery-bike-img"}))),u.a.createElement("div",{className:"delivery-login-texts px-15 mt-50 pb-10 text-center"},u.a.createElement("span",{className:"delivery-login-title"},localStorage.getItem("loginLoginTitle")),u.a.createElement("br",null),u.a.createElement("span",{className:"delivery-login-subtitle"},localStorage.getItem("loginLoginSubTitle"))),u.a.createElement("div",{className:"height-70 delivery-dark-bg"},u.a.createElement("form",{onSubmit:this.handleLogin},u.a.createElement("div",{className:"form-group px-15 pt-30"},u.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("loginLoginEmailLabel")),u.a.createElement("div",{className:"col-md-9 pb-5"},u.a.createElement("input",{type:"text",name:"email",onChange:this.handleInputEmail,className:"form-control delivery-login-input"})),u.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("loginLoginPasswordLabel")),u.a.createElement("div",{className:"col-md-9"},u.a.createElement("input",{type:"password",name:"password",onChange:this.handleInputPassword,className:"form-control delivery-login-input"}))),u.a.createElement("div",{className:"mt-20 px-30 button-block"},u.a.createElement("button",{type:"submit",className:"btn delivery-login-button",style:{backgroundColor:localStorage.getItem("storeColor")}},localStorage.getItem("loginLoginTitle")))),this.props.languages&&this.props.languages.length>1&&u.a.createElement("div",{className:"mt-100 d-flex align-items-center justify-content-center"},u.a.createElement("div",{className:"mr-2 edit-address-input-label"},localStorage.getItem("changeLanguageText")),u.a.createElement("select",{onChange:this.handleOnChange,defaultValue:localStorage.getItem("userPreferedLanguage")?localStorage.getItem("userPreferedLanguage"):this.props.languages.filter(function(e){return 1===e.is_default})[0].id,className:"form-control delivery-language-select"},this.props.languages.map(function(e){return u.a.createElement("option",{value:e.id,key:e.id},e.language_name)}))))))}}]),t}(s.Component);b.contextTypes={router:function(){return null}};t.default=Object(d.b)(function(e){return{delivery_user:e.delivery_user.delivery_user,languages:e.languages.languages,language:e.languages.language}},{loginDeliveryUser:p.a,getSettings:m.a,getAllLanguages:f.a,getSingleLanguageData:f.b})(b)}}]);