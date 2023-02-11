import p from "critters";
import { files as c } from "files-pipeline";
import l from "files-pipeline/dist/lib/apply-to.js";
import n from "files-pipeline/dist/lib/deepmerge.js";
import { fileURLToPath as m } from "url";
import o from "./options/index.js";
var x=(t={})=>{for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&t[e]===!0&&(t[e]=o[e]);t=n(o,t);const i=new Set;if(typeof t.path<"u"&&(t.path instanceof Array||t.path instanceof Set))for(const e of t.path)i.add(e);return{name:"astro-critters",hooks:{"astro:build:done":async({dir:e})=>{if(i.size||i.add(e),!!t.critters)for(const s of i){const a=await l(s,r=>r instanceof URL?m(r):r),f=new p(n(t.critters,{path:a instanceof Map?a.keys().next().value:a,logLevel:(()=>{switch(t.logger){case 0:return"silent";case 1:return"silent";case 2:return"info";default:return"info"}})()}));await(await(await(await new c(t.logger).in(s)).by("**/*.html")).not(t.exclude)).pipeline(n(o.pipeline,{wrote:async r=>f.process(r.buffer.toString())}))}}}}};export { x as default };

