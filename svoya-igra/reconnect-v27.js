(()=>{'use strict';
const NativeWS=window.WebSocket;
const OPEN=NativeWS.OPEN??1,CONNECTING=NativeWS.CONNECTING??0,CLOSING=NativeWS.CLOSING??2,CLOSED=NativeWS.CLOSED??3;
class ReconnectingWebSocket{
 constructor(url,protocols){this.url=url;this.protocols=protocols;this.onopen=null;this.onmessage=null;this.onerror=null;this.onclose=null;this._ws=null;this._closed=false;this._timer=null;this._attempt=0;this._lastState=null;this._lastJoinTopic='';this._connect()}
 get readyState(){return this._ws?.readyState??CLOSED}
 get bufferedAmount(){return this._ws?.bufferedAmount??0}
 get protocol(){return this._ws?.protocol||''}
 get extensions(){return this._ws?.extensions||''}
 get binaryType(){return this._ws?.binaryType||'blob'}
 set binaryType(v){if(this._ws)this._ws.binaryType=v}
 _status(text){const e=document.getElementById('netStatus');if(e)e.textContent=text}
 _connect(){if(this._closed)return;clearTimeout(this._timer);this._status(this._attempt?'переподключение…':'подключение…');let sock;try{sock=this.protocols?new NativeWS(this.url,this.protocols):new NativeWS(this.url)}catch(e){this._schedule();return}this._ws=sock;
  sock.onopen=e=>{this._attempt=0;try{this.onopen?.call(this,e)}catch(_){} };
  sock.onmessage=e=>{let isJoinOk=false;try{const m=JSON.parse(e.data);if(m.event==='phx_reply'&&m.payload?.status==='ok')isJoinOk=true}catch(_){}try{this.onmessage?.call(this,e)}catch(_){}if(isJoinOk&&this._lastState){setTimeout(()=>this._replayState(),80)}};
  sock.onerror=e=>{this._status('сеть недоступна · переподключение…');try{this.onerror?.call(this,e)}catch(_){} };
  sock.onclose=e=>{if(this._closed){try{this.onclose?.call(this,e)}catch(_){};return}this._status('связь потеряна · переподключение…');this._schedule()};
 }
 _schedule(){if(this._closed)return;clearTimeout(this._timer);this._attempt++;const delay=Math.min(5000,700+this._attempt*400);this._timer=setTimeout(()=>this._connect(),delay)}
 _capture(data){try{const m=JSON.parse(data);if(m.event==='phx_join')this._lastJoinTopic=m.topic||this._lastJoinTopic;const d=m?.payload?.payload;if(m.event==='broadcast'&&d?.type==='broadcast'&&d?.event==='game'&&d?.payload?.type==='state'){const s=d.payload;if(Array.isArray(s.players)&&s.players.length)this._lastState=JSON.parse(JSON.stringify(s))}}catch(_){} }
 _replayState(){if(!this._lastState||!this.onmessage)return;const payload={type:'broadcast',event:'game',payload:this._lastState};const msg={topic:this._lastJoinTopic||'',event:'broadcast',payload};try{this.onmessage.call(this,{data:JSON.stringify(msg)})}catch(_){} }
 send(data){this._capture(data);if(this._ws?.readyState===OPEN){this._ws.send(data);return}throw new DOMException('WebSocket is not open','InvalidStateError')}
 close(code,reason){this._closed=true;clearTimeout(this._timer);try{this._ws?.close(code,reason)}catch(_){} }
 addEventListener(type,fn){if(type==='open')this.onopen=fn;else if(type==='message')this.onmessage=fn;else if(type==='error')this.onerror=fn;else if(type==='close')this.onclose=fn}
 removeEventListener(type,fn){if(type==='open'&&this.onopen===fn)this.onopen=null;else if(type==='message'&&this.onmessage===fn)this.onmessage=null;else if(type==='error'&&this.onerror===fn)this.onerror=null;else if(type==='close'&&this.onclose===fn)this.onclose=null}
}
ReconnectingWebSocket.CONNECTING=CONNECTING;ReconnectingWebSocket.OPEN=OPEN;ReconnectingWebSocket.CLOSING=CLOSING;ReconnectingWebSocket.CLOSED=CLOSED;
window.WebSocket=ReconnectingWebSocket;
})();