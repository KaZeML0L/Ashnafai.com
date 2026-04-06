"use strict";(()=>{var e={};e.id=663,e.ids=[663],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9949:(e,a,t)=>{t.r(a),t.d(a,{originalPathname:()=>P,patchFetch:()=>A,requestAsyncStorage:()=>w,routeModule:()=>g,serverHooks:()=>S,staticGenerationAsyncStorage:()=>E});var r={};t.r(r),t.d(r,{POST:()=>_,runtime:()=>b});var i=t(9303),n=t(8716),o=t(670),s=t(7070),p=t(5662);let d=process.env.TELEGRAM_BOT_TOKEN,c=process.env.TELEGRAM_CHANNEL_ID;async function l(e,a){await fetch(`https://api.telegram.org/bot${d}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e,text:a,parse_mode:"HTML",disable_web_page_preview:!0})})}async function m(){await l(c,`🔒 <b>A new trade has been opened.</b>

<i>Pair and entry price are hidden for free members.</i>

📊 <a href="https://trade.ashnafai.com">See on platform</a> (15-min delay)
⚡️ <a href="https://trade.ashnafai.com#pricing">Get Premium — Instant alerts</a>`)}async function u(){await l(c,`🔒 <b>A trade has been closed.</b>

<i>Results are hidden for free members.</i>

📊 <a href="https://trade.ashnafai.com">View on platform</a>
⚡️ <a href="https://trade.ashnafai.com#pricing">Get Premium</a>`)}async function h(e,a,t,r,i){await l(e,`${"BUY"===t?"\uD83D\uDFE2":"\uD83D\uDD34"} <b>TRADE OPENED</b>

<b>Pair:</b> ${a}
<b>Direction:</b> ${t}
<b>Entry Price:</b> ${r}
<b>Lots:</b> ${i}

<a href="https://trade.ashnafai.com">View live on platform →</a>`)}async function f(e,a,t){await l(e,`${t>=0?"✅":"❌"} <b>TRADE CLOSED</b>

<b>Pair:</b> ${a}
<b>Result:</b> ${t>=0?"+":""}$${t.toFixed(2)}

<a href="https://trade.ashnafai.com">View on platform →</a>`)}let b="nodejs";async function _(e){let{id:a,symbol:t,type:r,openPrice:i,currentPrice:n,volume:o,profit:d,state:c}=await e.json(),l=String(r??"").includes("BUY")?"BUY":"SELL",b="ORDER_STATE_FILLED"!==c,_={metaapi_id:a,pair:String(t??"").replace("/",""),direction:l,open_price:i,current_price:n,lots:o,pnl:d,status:b?"open":"closed",closed_at:b?null:new Date().toISOString()};if(b){let{data:e}=await p.p.from("trades").select("opened_at").eq("metaapi_id",a).maybeSingle();_.opened_at=e?.opened_at??new Date().toISOString()}let{error:g}=await p.p.from("trades").upsert(_,{onConflict:"metaapi_id"});if(g)return s.NextResponse.json({error:g.message},{status:500});b?await m():await u();let{data:w}=await p.p.from("users").select("telegram_chat_id").eq("tier","premium").eq("telegram_connected",!0).not("telegram_chat_id","is",null);if(w?.length)for(let e of w)b?await h(String(e.telegram_chat_id),String(t),l,Number(i),Number(o)):await f(String(e.telegram_chat_id),String(t),Number(d));return s.NextResponse.json({ok:!0})}let g=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/webhooks/metaapi/route",pathname:"/api/webhooks/metaapi",filename:"route",bundlePath:"app/api/webhooks/metaapi/route"},resolvedPagePath:"C:\\KaZ Projects\\Ashnafai\\trade\\app\\api\\webhooks\\metaapi\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:w,staticGenerationAsyncStorage:E,serverHooks:S}=g,P="/api/webhooks/metaapi/route";function A(){return(0,o.patchFetch)({serverHooks:S,staticGenerationAsyncStorage:E})}},5662:(e,a,t)=>{t.d(a,{p:()=>s});var r=t(8336);let i=process.env.NEXT_PUBLIC_SUPABASE_URL||"https://placeholder.supabase.co",n=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||"anon-placeholder",o=process.env.SUPABASE_SERVICE_ROLE_KEY||"service-role-placeholder";(0,r.eI)(i,n);let s=(0,r.eI)(i,o)}};var a=require("../../../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[948,750],()=>t(9949));module.exports=r})();