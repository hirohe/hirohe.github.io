(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1170:function(module,exports,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(52),__webpack_require__(43),__webpack_require__(35),__webpack_require__(45),__webpack_require__(1171),__webpack_require__(1172),__webpack_require__(8),__webpack_require__(44);var _clientApi=__webpack_require__(57),_clientLogger=__webpack_require__(38),_configFilename=__webpack_require__(1173);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1173:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1174:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(394).configure)([__webpack_require__(1175),__webpack_require__(1176)],module,!1)}).call(this,__webpack_require__(106)(module))},1175:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1175},1176:function(module,exports,__webpack_require__){var map={"./Watermark.stories.tsx":1182};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1176},1182:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Watermark_stories_Default}));__webpack_require__(4);var jsx_runtime=__webpack_require__(118),react=__webpack_require__(0);__webpack_require__(3),__webpack_require__(9),__webpack_require__(20),__webpack_require__(18),__webpack_require__(25),__webpack_require__(15),__webpack_require__(13),__webpack_require__(12),__webpack_require__(21),__webpack_require__(5),__webpack_require__(11),__webpack_require__(23),__webpack_require__(17),__webpack_require__(14),__webpack_require__(49),__webpack_require__(16);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function generateSvg(options){var text=options.text,textColor=options.textColor,textSize=options.textSize,fontFamily=options.fontFamily,opacity=options.opacity,gutter=options.gutter,rotate=options.rotate,size=function calcTextRenderedWidth(text,fontSize,fontFamily){var span=document.createElement("span");span.innerText=text,span.style.fontSize=fontSize+"px",span.style.fontFamily=fontFamily,span.style.visibility="hidden",document.body.appendChild(span);var width=span.offsetWidth;return document.body.removeChild(span),width}(text,textSize,fontFamily)+gutter,center=size/2;return'<svg width="'.concat(size,'" height="').concat(size,'" xmlns="http://www.w3.org/2000/svg"><text fill="').concat(textColor,'" x="50%" y="50%" font-size="').concat(textSize,'" text-anchor="middle" font-family="').concat(fontFamily,'" transform="rotate(').concat(rotate," ").concat(center," ").concat(center,')" opacity="').concat(opacity,'">').concat(text,"</text></svg>")}var watermarkWrapperStyle={position:"relative"},Watermark_Watermark=function Watermark(_ref){var _ref$show=_ref.show,show=void 0===_ref$show||_ref$show,text=_ref.text,_ref$textColor=_ref.textColor,textColor=void 0===_ref$textColor?"#cccccc":_ref$textColor,_ref$textSize=_ref.textSize,textSize=void 0===_ref$textSize?24:_ref$textSize,_ref$fontFamily=_ref.fontFamily,fontFamily=void 0===_ref$fontFamily?"Arial, Helvetica, sans-serif":_ref$fontFamily,_ref$opacity=_ref.opacity,opacity=void 0===_ref$opacity?.2:_ref$opacity,wrapperStyle=_ref.wrapperStyle,_ref$gutter=_ref.gutter,gutter=void 0===_ref$gutter?0:_ref$gutter,_ref$rotate=_ref.rotate,rotate=void 0===_ref$rotate?-45:_ref$rotate,children=_ref.children,_useState2=_slicedToArray(Object(react.useState)(""),2),backgroundImage=_useState2[0],setBackgroundImage=_useState2[1];Object(react.useEffect)((function(){var svg=generateSvg({text:text,textColor:textColor,textSize:textSize,fontFamily:fontFamily,opacity:opacity,gutter:gutter,rotate:rotate}),convertedSvg=encodeURIComponent(svg).replace(/'/g,"%27").replace(/"/g,"%22");setBackgroundImage('url("data:image/svg+xml,'.concat(convertedSvg,'")'))}),[show,text,textColor,textSize,opacity,gutter,rotate]);var watermarkStyle={pointerEvents:"none",position:"absolute",top:0,bottom:0,left:0,right:0,content:"",backgroundRepeat:"repeat",zIndex:1,backgroundImage:backgroundImage};return Object(jsx_runtime.jsxs)("div",{style:Object.assign({},watermarkWrapperStyle,wrapperStyle),children:[show&&Object(jsx_runtime.jsx)("div",{style:watermarkStyle}),children]})};Watermark_Watermark.displayName="Watermark";var src_Watermark=Watermark_Watermark;try{Watermark_Watermark.displayName="Watermark",Watermark_Watermark.__docgenInfo={description:"",displayName:"Watermark",props:{show:{defaultValue:{value:!0},description:"",name:"show",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},textColor:{defaultValue:{value:"#cccccc"},description:"",name:"textColor",required:!1,type:{name:"string"}},textSize:{defaultValue:{value:24},description:"",name:"textSize",required:!1,type:{name:"number"}},fontFamily:{defaultValue:{value:"Arial, Helvetica, sans-serif"},description:"",name:"fontFamily",required:!1,type:{name:"string"}},opacity:{defaultValue:{value:.2},description:"",name:"opacity",required:!1,type:{name:"number"}},rotate:{defaultValue:{value:-45},description:"",name:"rotate",required:!1,type:{name:"number"}},gutter:{defaultValue:{value:0},description:"",name:"gutter",required:!1,type:{name:"number"}},wrapperStyle:{defaultValue:null,description:"",name:"wrapperStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Watermark.tsx#Watermark"]={docgenInfo:Watermark_Watermark.__docgenInfo,name:"Watermark",path:"src/Watermark.tsx#Watermark"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}__webpack_exports__.default={title:"watermark test",component:src_Watermark,argTypes:{text:{control:"text"},textSize:{control:{type:"range",min:4,max:64}},textColor:{control:"color"},fontFamily:{control:"text"},opacity:{control:{type:"range",min:0,max:1,step:.01}},gutter:{control:{type:"range",min:0,max:150}},rotate:{control:{type:"range",min:-360,max:360}}}};var Watermark_stories_Default=function Default(_ref){var rest=_extends({},_ref);return Object(jsx_runtime.jsx)(src_Watermark,Object.assign({text:"Hello World"},rest,{children:Object(jsx_runtime.jsx)("div",{style:{height:500,backgroundColor:"#5f5f5f"}})}))};Watermark_stories_Default.displayName="Default",Watermark_stories_Default.parameters=Object.assign({storySource:{source:"({ ...rest }): React.ReactNode => (\r\n  <Watermark text={'Hello World'} {...rest}>\r\n    <div style={{ height: 500, backgroundColor: '#5f5f5f' }}>\r\n    </div>\r\n  </Watermark>\r\n)"}},Watermark_stories_Default.parameters);try{Watermark_stories_Default.displayName="Default",Watermark_stories_Default.__docgenInfo={description:"",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Watermark.stories.tsx#Default"]={docgenInfo:Watermark_stories_Default.__docgenInfo,name:"Default",path:"src/Watermark.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}},514:function(module,exports,__webpack_require__){__webpack_require__(515),__webpack_require__(736),__webpack_require__(737),__webpack_require__(893),__webpack_require__(1112),__webpack_require__(1144),__webpack_require__(1149),__webpack_require__(1161),__webpack_require__(1163),__webpack_require__(1168),__webpack_require__(1170),module.exports=__webpack_require__(1174)},583:function(module,exports){},737:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(394)}},[[514,1,2]]]);
//# sourceMappingURL=main.32b398cec228fbe382b5.bundle.js.map