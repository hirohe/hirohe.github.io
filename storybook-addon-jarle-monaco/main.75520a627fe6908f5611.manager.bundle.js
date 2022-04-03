(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1052:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(134),types=__webpack_require__(511),addon_panel=__webpack_require__(1066),es=(__webpack_require__(135),__webpack_require__(3),__webpack_require__(9),__webpack_require__(5),__webpack_require__(13),__webpack_require__(8),__webpack_require__(7),__webpack_require__(10),__webpack_require__(15),__webpack_require__(14),__webpack_require__(17),__webpack_require__(529)),constants_event_UpdateSource="livePreview:updateSource",constants_event_LoadSource="livePreview:loadSource",defaultEditorOptions=(Symbol("Scope"),{fontSize:16,scrollBeyondLastLine:!1,minimap:{enabled:!1},fixedOverflowWidgets:!0}),dist_esm=(__webpack_require__(50),__webpack_require__(327),__webpack_require__(2)),core_browser_esm=__webpack_require__(63);var EditorWrapper_templateObject,jsx_syntax_style=Object(core_browser_esm.c)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  .JSXElement.JSXBracket,\n  .JSXOpeningElement.JSXBracket,\n  .JSXClosingElement.JSXBracket,\n  .JSXSpreadChild.JSXBracket,\n  .JSXSpreadAttribute.JSXBracket {\n    color: rgb(135, 135, 135);\n  }\n\n  .JSXExpressionContainer.JSXBracket {\n    color: rgb(46, 140, 210);\n  }\n\n  .JSXElement.JSXIdentifier,\n  .JSXOpeningElement.JSXIdentifier,\n  .JSXClosingElement.JSXIdentifier {\n    color: rgb(25, 196, 160);\n  }\n\n  .JSXElement.JSXText {\n    color: rgb(210, 210, 210);\n  }\n\n  .JSXAttribute.JSXIdentifier {\n    color: rgb(120, 215, 255);\n  }\n"])));var components_EditorWrapper=dist_esm.styled.div(EditorWrapper_templateObject||(EditorWrapper_templateObject=function EditorWrapper_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  height: 100%;\n  ","\n"])),jsx_syntax_style),lib=__webpack_require__(239),traverse_lib=__webpack_require__(187),traverse_lib_default=__webpack_require__.n(traverse_lib),monaco_jsx_highlighter=__webpack_require__(528);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var components_LiveEditor=function LiveEditor(_ref){var channel=_ref.channel,_useState2=_slicedToArray(Object(react.useState)(""),2),code=_useState2[0],setCode=_useState2[1],loadSource=Object(react.useCallback)((function(val){setCode(val)}),[]),onChange=Object(react.useCallback)((function(val){channel.emit("".concat(constants_event_UpdateSource),val)}),[]);Object(react.useEffect)((function(){return channel.on(constants_event_LoadSource,loadSource),function(){channel.removeListener(constants_event_LoadSource,loadSource)}}),[]);var onMount=Object(react.useCallback)((function(editor,_monaco){!function applyJsxHighlighter(monacoInstance,editor){var monacoJSXHighlighter=new monaco_jsx_highlighter.a(monacoInstance,lib.parse,traverse_lib_default.a,editor);return monacoJSXHighlighter.highlightOnDidChangeModelContent(),monacoJSXHighlighter.addJSXCommentCommand(),monacoJSXHighlighter}(_monaco,editor)}),[]);return react_default.a.createElement(components_EditorWrapper,null,react_default.a.createElement(es.a,{height:"100%",language:"javascript",theme:"vs-dark",options:defaultEditorOptions,value:code,onChange:onChange,onMount:onMount}))};esm.a.register("storybook/react-live-edit",(function(api){esm.a.addPanel("storybook/react-live-edit/panel",{type:types.a.PANEL,title:"Live Edit",render:function render(_ref){var _storyData$parameters,_storyData$parameters2,active=_ref.active,key=_ref.key,storyData=api.getCurrentStoryData(),show=!(null==storyData||null===(_storyData$parameters=storyData.parameters)||void 0===_storyData$parameters||null===(_storyData$parameters2=_storyData$parameters.liveEdit)||void 0===_storyData$parameters2||!_storyData$parameters2.showEditor);return react_default.a.createElement(addon_panel.a,{active:show&&active,key:key},react_default.a.createElement(components_LiveEditor,{channel:esm.a.getChannel()}))}})}))},536:function(module,exports,__webpack_require__){__webpack_require__(537),__webpack_require__(1048),__webpack_require__(1057),__webpack_require__(1058),__webpack_require__(1049),__webpack_require__(1053),__webpack_require__(1051),__webpack_require__(1054),__webpack_require__(1050),__webpack_require__(1055),__webpack_require__(1056),module.exports=__webpack_require__(1052)},603:function(module,exports){}},[[536,2,3]]]);