/*
 *  /MathJax/jax/output/HTML-CSS/autoload/maction.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var g="1.1.2";var c=MathJax.ElementJax.mml,e=MathJax.OutputJax["HTML-CSS"];var d,f,b;var a=e.config.tooltip=MathJax.Hub.Insert({delayPost:600,delayClear:600,offsetX:10,offsetY:5},e.config.tooltip||{});c.maction.Augment({HTMLtooltip:e.addElement(document.body,"div",{id:"MathJax_Tooltip"}),toHTML:function(j,h,k){j=this.HTMLhandleSize(this.HTMLcreateSpan(j));j.bbox=null;var i=this.selected();if(i){e.Measured(i.toHTML(j),j);if(k!=null){e.Remeasured(i.HTMLstretchV(j,h,k),j)}else{if(h!=null){e.Remeasured(i.HTMLstretchH(j,h),j)}}this.HTMLhandleHitBox(j)}this.HTMLhandleSpace(j);this.HTMLhandleColor(j);return j},HTMLhandleHitBox:function(i,l){var k;if(e.msieHitBoxBug){var j=e.addElement(i,"span");k=e.createFrame(j,i.bbox.h,i.bbox.d,i.bbox.w,0,"none");i.insertBefore(j,i.firstChild);j.style.marginRight=e.Em(-i.bbox.w);if(e.msieInlineBlockAlignBug){k.style.verticalAlign=e.Em(e.getHD(i).d-i.bbox.d)}}else{k=e.createFrame(i,i.bbox.h,i.bbox.d,i.bbox.w,0,"none");i.insertBefore(k,i.firstChild);k.style.marginRight=e.Em(-i.bbox.w)}k.className="MathJax_HitBox";k.id="MathJax-HitBox-"+this.spanID+(l||"")+e.idPostfix;var h=this.Get("actiontype");if(this.HTMLaction[h]){this.HTMLaction[h].call(this,i,k,this.Get("selection"))}},HTMLstretchH:c.mbase.HTMLstretchH,HTMLstretchV:c.mbase.HTMLstretchV,HTMLaction:{toggle:function(i,j,h){this.selection=h;j.onclick=i.childNodes[1].onclick=MathJax.Callback(["HTMLclick",this]);j.style.cursor=i.childNodes[1].style.cursor="pointer"},statusline:function(i,j,h){j.onmouseover=i.childNodes[1].onmouseover=MathJax.Callback(["HTMLsetStatus",this]);j.onmouseout=i.childNodes[1].onmouseout=MathJax.Callback(["HTMLclearStatus",this]);j.onmouseover.autoReset=j.onmouseout.autoReset=true},tooltip:function(i,j,h){if(this.data[1]&&this.data[1].isToken){j.title=j.alt=i.childNodes[1].title=i.childNodes[1].alt=this.data[1].data.join("")}else{j.onmouseover=i.childNodes[1].onmouseover=MathJax.Callback(["HTMLtooltipOver",this]);j.onmouseout=i.childNodes[1].onmouseout=MathJax.Callback(["HTMLtooltipOut",this]);j.onmouseover.autoReset=j.onmouseout.autoReset=true}}},HTMLclick:function(i){this.selection++;if(this.selection>this.data.length){this.selection=1}var h=this;while(h.type!=="math"){h=h.inherit}MathJax.Hub.getJaxFor(h.inputID).Update();if(!i){i=window.event}if(i.preventDefault){i.preventDefault()}if(i.stopPropagation){i.stopPropagation()}i.cancelBubble=true;i.returnValue=false;return false},HTMLsetStatus:function(h){window.status=((this.data[1]&&this.data[1].isToken)?this.data[1].data.join(""):this.data[1].toString())},HTMLclearStatus:function(h){window.status=""},HTMLtooltipOver:function(i){if(!i){i=window.event}if(b){clearTimeout(b);b=null}if(f){clearTimeout(f)}var h=i.pageX;var k=i.pageY;if(h==null){h=i.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;k=i.clientY+document.body.scrollTop+document.documentElement.scrollTop}var j=MathJax.Callback(["HTMLtooltipPost",this,h+a.offsetX,k+a.offsetY]);f=setTimeout(j,a.delayPost)},HTMLtooltipOut:function(h){if(f){clearTimeout(f);f=null}if(b){clearTimeout(b)}var i=MathJax.Callback(["HTMLtooltipClear",this,80]);b=setTimeout(i,a.delayClear)},HTMLtooltipPost:function(i,m){f=null;if(b){clearTimeout(b);b=null}var l=this.HTMLtooltip;l.style.display="block";l.style.opacity="";l.style.filter=e.config.styles["#MathJax_Tooltip"].filter;if(this===d){return}l.style.left=i+"px";l.style.top=m+"px";l.innerHTML='<span class="MathJax"><nobr></nobr></span>';e.getScales(l.firstChild,l.firstChild);var h=e.createStack(l.firstChild.firstChild);var k=e.createBox(h);try{e.Measured(this.data[1].toHTML(k),k)}catch(j){if(!j.restart){throw j}l.style.display="none";MathJax.Callback.After(["HTMLtooltipPost",this,i,m],j.restart)}e.placeBox(k,0,0);e.createRule(l.firstChild.firstChild,k.bbox.h,k.bbox.d,0);d=this},HTMLtooltipClear:function(i){var h=this.HTMLtooltip;if(i<=0){h.style.display="none";h.style.opacity=h.style.filter="";b=null}else{h.style.opacity=i/100;h.style.filter="alpha(opacity="+i+")";b=setTimeout(MathJax.Callback(["HTMLtooltipClear",this,i-20]),50)}}});MathJax.Hub.Browser.Select({MSIE:function(h){e.msieHitBoxBug=true}});MathJax.Hub.Startup.signal.Post("HTML-CSS maction Ready");MathJax.Ajax.loadComplete(e.autoloadDir+"/maction.js")});

