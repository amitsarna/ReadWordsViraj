(this.webpackJsonpreadwordskyan=this.webpackJsonpreadwordskyan||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(3),o=n(4),i=n(1),s=n(8),l=n(6),u=n(0),h=n.n(u),c=n(5),d=n.n(c),m=(n(15),function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).originalWordList=["has","had","an","as","bed","but","did","from","got","school","him","his","if","jump","not","of","want","one","little","there","do","off","could","put","than","that","them","then","us","when","low","new","about","another","because","by","can\u2019t","down","half","home","just","live","after","back","been","called","first","have","house","last","made","again","ball","brother","came","don\u2019t","good","her","how","laugh","make","many","much","next","old","out","seen","so","their","time","tree","who","were","may","must","night","once","over","should","some","these","too","water","what","would","more","name","now","our","people","sister","take","took","very","way","where","your","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","day","week","January","February","March","April","May","June","July","August","September","October","November","December","month","year","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","number","red","orange","green","blue","black","white","brown","pink","purple","grey"],a.state={Words:a.originalWordList.slice(),CurrentWords:[],ButtonText:"Start",StopWatchRunning:!1,StartTime:Date.now(),RunningTime:"0"},a.handleClick=a.handleClick.bind(Object(i.a)(a)),a}return Object(o.a)(n,[{key:"handleClick",value:function(){var e=this,t=this.state.Words,n=this.state.StopWatchRunning,a="Next";0===t.length?n?(n=!1,a="Well Done Viraj! Start Again?"):(n=!0,t=this.originalWordList.slice()):n=!0;var r=[];if(t.length>0)for(var o=0;o<5;++o)if(0===t.length)a="Done",r.push("-");else{var i=Math.floor(Math.random()*t.length);r.push(t[i]),t.splice(i,1)}this.setState((function(o){return n&&!e.state.StopWatchRunning?(e.setState({StartTime:Date.now()}),e.timer=setInterval((function(){var t=Date.now()-e.state.StartTime,n=Math.floor(t/1e3);e.setState({RunningTime:n}),n>300&&clearInterval(e.timer)}))):n||clearInterval(e.timer),{Words:t,CurrentWords:r,ButtonText:a,StopWatchRunning:n}}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e,t=[],n=Object(a.a)(this.state.CurrentWords.entries());try{for(n.s();!(e=n.n()).done;){var r=e.value;t.push(h.a.createElement("div",{align:"center"},r[1]))}}catch(o){n.e(o)}finally{n.f()}return h.a.createElement("div",null,t,h.a.createElement("button",{className:"square",onClick:this.handleClick},this.state.ButtonText),h.a.createElement("div",{align:"center"},this.state.RunningTime," seconds"))}}]),n}(h.a.Component));d.a.render(h.a.createElement(m,null),document.getElementById("root"))},15:function(e,t,n){},9:function(e,t,n){e.exports=n(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.fba55e2b.chunk.js.map