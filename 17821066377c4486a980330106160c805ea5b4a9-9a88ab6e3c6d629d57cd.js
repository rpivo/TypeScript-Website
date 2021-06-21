(self.webpackChunktypescriptlang_org=self.webpackChunktypescriptlang_org||[]).push([[414],{6705:function(e,t){t.D=function(e,t,r){var n,i;void 0===t&&(t=50),void 0===r&&(r={});var o=null!=(n=r.isImmediate)&&n,s=r.maxWait,a=Date.now();function l(){if(void 0!==s){var e=Date.now()-a;if(e+t>=s)return s-e}return t}var u=function(){var t=[].slice.call(arguments),r=this,n=function(){i=void 0,a=Date.now(),o||e.apply(r,t)},s=o&&void 0===i;void 0!==i&&clearTimeout(i),i=setTimeout(n,l()),s&&e.apply(r,t)};return u.cancel=function(){void 0!==i&&clearTimeout(i)},u}},2057:function(e,t,r){"use strict";r.d(t,{k:function(){return b}});var n=r(3415),i=r(6108),o=r(2332);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function u(e,t){switch(t){case"number":return+e;case"string":return e;case"boolean":return"true"===e.toLowerCase()||0===e.length}throw new Error("Unknown primitive type "+t+" with - "+e)}var c=!1;try{c="undefined"!=typeof localStorage}catch(x){}var f=void 0!==i,d=c&&localStorage.getItem("DEBUG")||f&&{}.DEBUG?o.log:function(e){return""};function p(e){for(var t=[],r=[],n=0,i=0,o=0,s=function(s){var l=e[s],u=function(){i=n,n+=l.length+1},c=function(t){d("Removing line "+s+" for "+t),o++,e.splice(s,1),s--};if(l.includes("//")){var f=/^\s*\/\/\s*\^+( .+)?$/.exec(l),p=/^\s*\/\/\s*\^\?\s*$/.exec(l),g=/^\s*\/\/ prettier-ignore$/.exec(l),h=/^\s*\/\/\s*\^\|$/.exec(l);if(null!==p){var m=l.indexOf("^");r.push({kind:"query",offset:m,text:void 0,docs:void 0,line:s+o-1}),c("having a query")}else if(null!==f){var v=l.indexOf("^"),y=l.lastIndexOf("^")-v+1,b=i+v,w=f[1]?f[1].trim():"";t.push({kind:"highlight",position:b,length:y,description:w,line:s}),c("having a highlight")}else if(null!==g)c("being a prettier ignore");else if(null!==h){var x=l.indexOf("^");r.push({kind:"completion",offset:x,text:void 0,docs:void 0,line:s+o-1}),c("having a completion query")}else u()}else u();a=s},a=0;a<e.length;a++)s(a);return{highlights:t,queries:r}}function g(e,t,r){var n=r.get(t.toLowerCase());if(d("Get "+e+" mapped option: "+t+" => "+n),void 0===n){var i=Array.from(r.keys());throw new Error("Invalid value "+t+" for "+e+". Allowed values: "+i.join(","))}return n}function h(e,t,r,n){d("Setting "+e+" to "+t);for(var i,o=function(){var n=i.value;if(n.name.toLowerCase()===e.toLowerCase()){switch(n.type){case"number":case"string":case"boolean":r[n.name]=u(t,n.type);break;case"list":var o=n.element.type,s=t.split(",");r[n.name]="string"==typeof o?s.map((function(e){return u(e,o)})):s.map((function(e){return g(n.name,e,o)}));break;default:var a=n.type;r[n.name]=g(n.name,t,a)}return{v:void 0}}},s=l(n.optionDeclarations);!(i=s()).done;){var a=o();if("object"==typeof a)return a.v}throw new Error("No compiler setting named '"+e+"' exists!")}var m=/^\/\/\s?@(\w+)$/,v=/^\/\/\s?@(\w+):\s?(.+)$/;var y={errors:[],noErrors:!1,showEmit:!1,showEmittedFile:void 0,noStaticSemanticInfo:!1,emit:!1,noErrorValidation:!1};function b(e,t,o){var a,u,c;void 0===o&&(o={});var f=null!=(a=o.tsModule)?a:r(9809),g=null!=(u=o.lzstringModule)?u:r(5472),b=e,x=function(e){switch(e){case"js":case"javascript":return"js";case"ts":case"typescript":return"ts";case"tsx":return"tsx";case"jsx":return"jsx";case"jsn":return"json"}throw new Error("Cannot handle the file extension:"+e)}(t),E="index."+x;d("\n\nLooking at code: \n```"+x+"\n"+e+"\n```\n");var S=s({strict:!0,target:f.ScriptTarget.ES2016,allowJs:!0},null!=(c=o.defaultCompilerOptions)?c:{});!function(e){if(e.includes("// @errors "))throw new Error("You have '@errors ' - you're missing the colon after errors");if(e.includes("// @filename "))throw new Error("You have '@filename ' - you're missing the colon after filename")}(e);var F=(e=function(e){return(e=e.replace(/¨D/g,"$")).replace(/¨T/g,"~")}(e)).split(/\r\n?|\n/g),j=s({},function(e){for(var t=s({},y),r=0;r<e.length;r++){var n=void 0;(n=m.exec(e[r]))?n[1]in t&&(t[n[1]]=!0,d("Setting options."+n[1]+" to true"),e.splice(r,1),r--):(n=v.exec(e[r]))&&n[1]in t&&(t[n[1]]=n[2],d("Setting options."+n[1]+" to "+n[2]),e.splice(r,1),r--)}return"errors"in t&&"string"==typeof t.errors&&(t.errors=t.errors.split(" ").map(Number),d("Setting options.error to ",t.errors)),t}(F),o.defaultOptions),k=function(e,t,r){for(var n=s({},t),i=0;i<e.length;){var o=void 0;if(o=m.exec(e[i]))n[o[1]]=!0,h(o[1],"true",n,r);else{if(!(o=v.exec(e[i]))){i++;continue}if("filename"===o[1]){i++;continue}h(o[1],o[2],n,r)}e.splice(i,1)}return n}(F,S,f);j.showEmittedFile||(j.showEmittedFile=k.jsx&&k.jsx===f.JsxEmit.Preserve?"index.jsx":"index.js");var C=function(){var e=r(3768)("path");return(o.vfsRoot||i.cwd()).split(e.sep).join(e.posix.sep)},D=!!o.fsMap,O=D&&o.fsMap?o.fsMap:new Map,P=D?(0,n.FI)(O):(0,n.Lk)(O,C(),f),L=D?"/":C()+"/",N=(0,n.sE)(P,[],f,k,o.customTransformers),T=N.languageService;e=F.join("\n");for(var A,I=[],M=[],U=[],q=w(e,E,L),W=["js","jsx","ts","tsx"],$=q.map((function(e){return e[0]})),R=function(){var e,t,r=A.value,n=r[0],i=r[1],o=n.split(".").pop()||"",s=k.resolveJsonModule&&"json"===o;if(!W.includes(o)&&!s)return"continue";var a=i.join("\n");N.createFile(n,a);var l=p(i);(e=U).push.apply(e,l.highlights);var u=l.queries.map((function(e,t){var r,i,o=N.getSourceFile(n),s=f.getPositionOfLineAndCharacter(o,e.line,e.offset);switch(e.kind){case"query":var a=T.getQuickInfoAtPosition(n,s),l="Could not get LSP result: "+[(r=N.getSourceFile(n).text)[(i=s)-3],r[i-2],r[i-1],">",r[i],"<",r[i+1],r[i+2],r[i+3]].filter(Boolean).join(""),u=void 0;return a&&a.displayParts&&(l=a.displayParts.map((function(e){return e.text})).join(""),u=a.documentation?a.documentation.map((function(e){return e.text})).join("<br/>"):void 0),{kind:"query",text:l,docs:u,line:e.line-t,offset:e.offset,file:n};case"completion":var c=T.getCompletionsAtPosition(n,s-1,{});if(!c&&!j.noErrorValidation)throw new Error("Twoslash: The ^| query at line "+e.line+" in "+n+" did not return any completions");var d=function(e,t){e=String(e),t=Number(t)>>>0;var r=e.slice(0,t+1).search(/\S+$/),n=e.slice(t).search(/\s/);return n<0?{word:e.slice(r),startPos:r}:{word:e.slice(r,n+t),startPos:r}}(o.text,s-1),p=o.text.slice(d.startPos,s).split(".").pop()||"";return{kind:"completions",completions:(null==c?void 0:c.entries)||[],completionPrefix:p,line:e.line-t,offset:e.offset,file:n}}}));(t=I).push.apply(t,u);var c=i.join("\n");N.updateFile(n,c)},_=l(q);!(A=_()).done;)R();var V=e.split(/\r\n?|\n/g);p(V),e=V.join("\n"),j.emit&&$.forEach((function(e){var t=e.split(".").pop()||"";W.includes(t)&&T.getEmitOutput(e).outputFiles.forEach((function(e){P.writeFile(e.name,e.text)}))}));var B=[],G=[];$.forEach((function(t){var r=t.split(".").pop()||"";if(W.includes(r)){j.noErrors||(B.push.apply(B,T.getSemanticDiagnostics(t)),B.push.apply(B,T.getSyntacticDiagnostics(t)));var n=N.sys.readFile(t),i=N.getSourceFile(t);if(!i)throw new Error("No sourcefile found for "+t+" in twoslash");if(!j.showEmit){for(var o,s=-1==e.indexOf(n)?0:e.indexOf(n),a=e.slice(0,s).split("\n").length-1,u=l(j.noStaticSemanticInfo?[]:function(e,t){var r=[];return function n(i){e.forEachChild(i,(function(i){if(e.isIdentifier(i)){var o=i.getStart(t,!1);r.push({span:e.createTextSpan(o,i.end-o),text:i.getText(t)})}n(i)}))}(t),r}(f,i));!(o=u()).done;){var c=o.value,d=c.span,p=T.getQuickInfoAtPosition(t,d.start);if(p&&p.displayParts){var g=p.displayParts.map((function(e){return e.text})).join(""),h=c.text,m=p.documentation?p.documentation.map((function(e){return e.text})).join("\n"):void 0,v=d.start+s,y=f.createSourceFile("_.ts",e,f.ScriptTarget.ES2015),b=f.getLineAndCharacterOfPosition(y,v),w=b.line,x=b.character;G.push({text:g,docs:m,start:v,length:d.length,line:w,character:x,targetString:h})}}I.filter((function(e){return e.file===t})).forEach((function(e){var t=f.getPositionOfLineAndCharacter(i,e.line,e.offset)+s;switch(e.kind){case"query":M.push({docs:e.docs,kind:"query",start:t+s,length:e.text.length,text:e.text,offset:e.offset,line:e.line+a+1});break;case"completions":M.push({completions:e.completions,kind:"completions",start:t+s,completionsPrefix:e.completionPrefix,length:1,offset:e.offset,line:e.line+a+1})}}))}}}));var H=B.filter((function(e){return e.file&&$.includes(e.file.fileName)}));!j.noErrorValidation&&H.length&&function(e,t,r,n){var i=e.filter((function(e){return!t.errors.includes(e.code)})),o=i.map((function(e){return e.code})).join(" ");if(i.length){var s="// @errors: "+e.map((function(e){return e.code})).join(" "),a=t.errors.length?" - the annotation specified "+t.errors:"\n\nExpected:\n"+s,l=i.map((function(e){var t="string"==typeof e.messageText?e.messageText:e.messageText.messageText;return"["+e.code+"] - "+t})).join("\n  ");throw new Error("Errors were thrown in the sample, but not included in an errors tag: "+o+a+"\n\n  "+l+"\n\n## Code\n\n'''"+r+"\n"+n+"\n'''")}}(H,j,t,b);for(var J,Q=[],Y=l(H);!(J=Y()).done;){var z=J.value,K=N.sys.readFile(z.file.fileName),X=e.indexOf(K),Z=f.flattenDiagnosticMessageText(z.messageText,"\n"),ee="err-"+z.code+"-"+z.start+"-"+z.length,te=f.getLineAndCharacterOfPosition(z.file,z.start),re=te.line,ne=te.character;Q.push({category:z.category,code:z.code,length:z.length,start:z.start?z.start+X:void 0,line:re,character:ne,renderedMessage:Z,id:ee})}if(j.showEmit){var ie=j.showEmittedFile||E,oe=L+ie.replace(".jsx","").replace(".js","").replace(".d.ts","").replace(".map",""),se=$.find((function(e){return e===oe+".ts"||e===oe+".tsx"}));if(!se&&!k.outFile){var ae=$.join(", ");throw new Error("Cannot find the corresponding **source** file for "+ie+" (looking for: "+oe+" in the vfs) - in "+ae)}k.outFile&&(se=$[0]);var le=T.getEmitOutput(se),ue=le.outputFiles.find((function(e){return e.name===L+j.showEmittedFile||e.name===j.showEmittedFile}));if(!ue){var ce=le.outputFiles.map((function(e){return e.name})).join(", ");throw new Error("Cannot find the file "+j.showEmittedFile+" (looking for: "+(L+j.showEmittedFile)+" in the vfs) - in "+ce)}e=ue.text,t=ue.name.split(".").pop(),U=[],I=[],G=[]}var fe="https://www.typescriptlang.org/play/#code/"+g.compressToEncodedURIComponent(b),de="// ---cut---\n";if(e.includes(de)){var pe=e.indexOf(de)+de.length,ge=e.substr(0,pe).split("\n").length-1;e=e.split(de).pop(),G.forEach((function(e){e.start-=pe,e.line-=ge})),G=G.filter((function(e){return e.start>-1})),Q.forEach((function(e){e.start&&(e.start-=pe),e.line&&(e.line-=ge)})),Q=Q.filter((function(e){return e.start&&e.start>-1})),U.forEach((function(e){e.position-=pe,e.line-=ge})),U=U.filter((function(e){return e.position>-1})),M.forEach((function(e){return e.line-=ge})),M=M.filter((function(e){return e.line>-1}))}return{code:e,extension:t,highlights:U,queries:M,staticQuickInfos:G,errors:Q,playgroundURL:fe}}var w=function(e,t,r){for(var n,i=e.split(/\r\n?|\n/g),o=e.includes("@filename: "+t)?"global.ts":t,s=[],a=[],u=l(i);!(n=u()).done;){var c=n.value;c.includes("// @filename: ")?(a.push([r+o,s]),o=c.split("// @filename: ")[1].trim(),s=[]):s.push(c)}return a.push([r+o,s]),a.filter((function(e){return e[1].length>0&&(e[1].length>1||""!==e[1][0])}))}},3415:function(e,t,r){"use strict";r.d(t,{yp:function(){return f},Lk:function(){return v},FI:function(){return m},sE:function(){return u}});var n=r(6108),i=r(2332);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=!1;try{s="undefined"!=typeof localStorage}catch(w){}var a=void 0!==n,l=s&&localStorage.getItem("DEBUG")||a&&{}.DEBUG?i.log:function(e){return""};function u(e,t,r,n,i){void 0===n&&(n={});var s=o({},g(r),n),a=function(e,t,r,n,i){var s=[].concat(t),a=y(e,r,n),l=a.compilerHost,u=a.updateFile,c=new Map,f=0;return{languageServiceHost:o({},l,{getProjectVersion:function(){return f.toString()},getCompilationSettings:function(){return r},getCustomTransformers:function(){return i},getScriptFileNames:function(){return s},getScriptSnapshot:function(t){var r=e.readFile(t);if(r)return n.ScriptSnapshot.fromString(r)},getScriptVersion:function(e){return c.get(e)||"0"},writeFile:e.writeFile}),updateFile:function(e){f++,c.set(e.fileName,f.toString()),s.includes(e.fileName)||s.push(e.fileName),u(e)}}}(e,t,s,r,i),l=a.languageServiceHost,u=a.updateFile,c=r.createLanguageService(l),f=c.getCompilerOptionsDiagnostics();if(f.length){var d=y(e,n,r);throw new Error(r.formatDiagnostics(f,d.compilerHost))}return{name:"vfs",sys:e,languageService:c,getSourceFile:function(e){var t;return null==(t=c.getProgram())?void 0:t.getSourceFile(e)},createFile:function(e,t){u(r.createSourceFile(e,t,s.target,!1))},updateFile:function(e,t,n){var i=c.getProgram().getSourceFile(e);if(!i)throw new Error("Did not find a source file for "+e);var o=i.text,s=null!=n?n:r.createTextSpan(0,o.length),a=o.slice(0,s.start)+t+o.slice(s.start+s.length),l=r.updateSourceFile(i,a,{span:s,newLength:t.length});u(l)}}}var c=function(e,t){var r,n=e.target||t.ScriptTarget.ES5,i=e.lib||[],o=["lib.d.ts","lib.dom.d.ts","lib.dom.iterable.d.ts","lib.webworker.d.ts","lib.webworker.importscripts.d.ts","lib.scripthost.d.ts","lib.es5.d.ts","lib.es6.d.ts","lib.es2015.collection.d.ts","lib.es2015.core.d.ts","lib.es2015.d.ts","lib.es2015.generator.d.ts","lib.es2015.iterable.d.ts","lib.es2015.promise.d.ts","lib.es2015.proxy.d.ts","lib.es2015.reflect.d.ts","lib.es2015.symbol.d.ts","lib.es2015.symbol.wellknown.d.ts","lib.es2016.array.include.d.ts","lib.es2016.d.ts","lib.es2016.full.d.ts","lib.es2017.d.ts","lib.es2017.full.d.ts","lib.es2017.intl.d.ts","lib.es2017.object.d.ts","lib.es2017.sharedmemory.d.ts","lib.es2017.string.d.ts","lib.es2017.typedarrays.d.ts","lib.es2018.asyncgenerator.d.ts","lib.es2018.asynciterable.d.ts","lib.es2018.d.ts","lib.es2018.full.d.ts","lib.es2018.intl.d.ts","lib.es2018.promise.d.ts","lib.es2018.regexp.d.ts","lib.es2019.array.d.ts","lib.es2019.d.ts","lib.es2019.full.d.ts","lib.es2019.object.d.ts","lib.es2019.string.d.ts","lib.es2019.symbol.d.ts","lib.es2020.d.ts","lib.es2020.full.d.ts","lib.es2020.string.d.ts","lib.es2020.symbol.wellknown.d.ts","lib.es2020.bigint.d.ts","lib.es2020.promise.d.ts","lib.es2020.sharedmemory.d.ts","lib.es2020.intl.d.ts","lib.esnext.array.d.ts","lib.esnext.asynciterable.d.ts","lib.esnext.bigint.d.ts","lib.esnext.d.ts","lib.esnext.full.d.ts","lib.esnext.intl.d.ts","lib.esnext.symbol.d.ts"],s=t.ScriptTarget[n],a=o.filter((function(e){return e.startsWith("lib."+s.toLowerCase())})),l=o.indexOf(a.pop()),u=i.map((function(e){var t=o.filter((function(t){return t.startsWith("lib."+e.toLowerCase())}));return 0===t.length?0:o.indexOf(t.pop())})),c=((r=u)&&r.length?r.reduce((function(e,t){return t>e?t:e})):void 0)||0,f=Math.max(l,c);return o.slice(0,f+1)},f=function(e,t,r,n,i,o,s){var a=o||fetch,l=s||localStorage,u=new Map,f=c(e,n),d="https://typescript.azureedge.net/cdn/"+t+"/typescript/lib/";return(r?function(){return Object.keys(localStorage).forEach((function(e){e.startsWith("ts-lib-")&&!e.startsWith("ts-lib-"+t)&&l.removeItem(e)})),Promise.all(f.map((function(e){var r,n="ts-lib-"+t+"-"+e,o=l.getItem(n);return o?Promise.resolve((r=o,i?i.decompressFromUTF16(r):r)):a(d+e).then((function(e){return e.text()})).then((function(e){var t;return l.setItem(n,(t=e,i?i.compressToUTF16(t):t)),e}))}))).then((function(e){e.forEach((function(e,t){var r="/"+f[t];u.set(r,e)}))}))}:function(){return Promise.all(f.map((function(e){return a(d+e).then((function(e){return e.text()}))}))).then((function(e){e.forEach((function(e,t){return u.set("/"+f[t],e)}))}))})().then((function(){return u}))};function d(e){throw new Error("Method '"+e+"' is not implemented.")}function p(e,t){return function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=t.apply(void 0,n),s="string"==typeof o?o.slice(0,80)+"...":o;return l.apply(void 0,["> "+e].concat(n)),l("< "+s),o}}var g=function(e){return o({},e.getDefaultCompilerOptions(),{jsx:e.JsxEmit.React,strict:!0,esModuleInterop:!0,module:e.ModuleKind.ESNext,suppressOutputPathCheck:!0,skipLibCheck:!0,skipDefaultLibCheck:!0,moduleResolution:e.ModuleResolutionKind.NodeJs})},h=function(e){return e.replace("/","/lib.").toLowerCase()};function m(e){return{args:[],createDirectory:function(){return d("createDirectory")},directoryExists:p("directoryExists",(function(t){return Array.from(e.keys()).some((function(e){return e.startsWith(t)}))})),exit:function(){return d("exit")},fileExists:p("fileExists",(function(t){return e.has(t)||e.has(h(t))})),getCurrentDirectory:function(){return"/"},getDirectories:function(){return[]},getExecutingFilePath:function(){return d("getExecutingFilePath")},readDirectory:p("readDirectory",(function(t){return"/"===t?Array.from(e.keys()):[]})),readFile:p("readFile",(function(t){return e.get(t)||e.get(h(t))})),resolvePath:function(e){return e},newLine:"\n",useCaseSensitiveFileNames:!0,write:function(){return d("write")},writeFile:function(t,r){e.set(t,r)}}}function v(e,t,r){var n=t+"/vfs",i=b(),o=r.sys,s=i.dirname(4026);return{name:"fs-vfs",root:n,args:[],createDirectory:function(){return d("createDirectory")},directoryExists:p("directoryExists",(function(t){return Array.from(e.keys()).some((function(e){return e.startsWith(t)}))||o.directoryExists(t)})),exit:o.exit,fileExists:p("fileExists",(function(t){if(e.has(t))return!0;if(t.includes("tsconfig.json")||t.includes("tsconfig.json"))return!1;if(t.startsWith("/lib")){var r=s+"/"+t.replace("/","");return o.fileExists(r)}return o.fileExists(t)})),getCurrentDirectory:function(){return n},getDirectories:o.getDirectories,getExecutingFilePath:function(){return d("getExecutingFilePath")},readDirectory:p("readDirectory",(function(){return"/"===(arguments.length<=0?void 0:arguments[0])?Array.from(e.keys()):o.readDirectory.apply(o,arguments)})),readFile:p("readFile",(function(t){if(e.has(t))return e.get(t);if(t.startsWith("/lib")){var r=s+"/"+t.replace("/",""),n=o.readFile(r);if(!n){var i=o.readDirectory(s);throw new Error("TSVFS: A request was made for "+r+" but there wasn't a file found in the file map. You likely have a mismatch in the compiler options for the CDN download vs the compiler program. Existing Libs: "+i+".")}return n}return o.readFile(t)})),resolvePath:function(t){return e.has(t)?t:o.resolvePath(t)},newLine:"\n",useCaseSensitiveFileNames:!0,write:function(){return d("write")},writeFile:function(t,r){e.set(t,r)}}}function y(e,t,r){var n=new Map;return{compilerHost:o({},e,{getCanonicalFileName:function(e){return e},getDefaultLibFileName:function(){return"/"+r.getDefaultLibFileName(t)},getDirectories:function(){return[]},getNewLine:function(){return e.newLine},getSourceFile:function(i){return n.get(i)||(o=r.createSourceFile(i,e.readFile(i),t.target||g(r).target,!1),n.set(o.fileName,o),o);var o},useCaseSensitiveFileNames:function(){return e.useCaseSensitiveFileNames}}),updateFile:function(t){var r=n.has(t.fileName);return e.writeFile(t.fileName,t.text),n.set(t.fileName,t),r}}}var b=function(){return r(3204)(String.fromCharCode(112,97,116,104))}},3768:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=3768,e.exports=t},3204:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=3204,e.exports=t},5472:function(){},9809:function(){},4026:function(){}}]);
//# sourceMappingURL=17821066377c4486a980330106160c805ea5b4a9-9a88ab6e3c6d629d57cd.js.map