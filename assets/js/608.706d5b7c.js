(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{1019:function(t,e,a){"use strict";a.r(e);var n=a(42),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("When interacting with the "),a("a",{attrs:{href:"https://kusama.network",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kusama network"),a("OutboundLink")],1),t._v(" via "),a("a",{attrs:{href:"https://polkadot.js.org/apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polkadot Apps"),a("OutboundLink")],1),t._v(" or other UIs and programmatic methods, you'd ideally be running your own node ("),a("a",{attrs:{href:"maintain-sync"}},[t._v("text guide")]),t._v(", "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=31DdfcxbAVs",target:"_blank",rel:"noopener noreferrer"}},[t._v("video guide"),a("OutboundLink")],1),t._v("). Granted, that's not something everyone can or wants to do, so convenience trumps ideals in most cases. To facilitate this convenience, Kusama has several public endpoints you can use for your apps.")]),t._v(" "),a("h2",{attrs:{id:"parity-archive-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parity-archive-node"}},[t._v("#")]),t._v(" Parity Archive Node")]),t._v(" "),a("p",[t._v("The development company Parity maintains an archive node at endpoint "),a("code",[t._v("wss://kusama-rpc.polkadot.io/")]),t._v(".")]),t._v(" "),a("p",[t._v("To connect to the Parity node, use the endpoint in your JavaScript apps like so:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ApiPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" WsProvider "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WsProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wss://kusama-rpc.polkadot.io/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ApiPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" provider "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),a("p",[t._v("or in Polkadot Apps UI by clicking the top-left corner of the screen and selecting the appropriate option:")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/endpoints/parity.png",alt:"Selecting Parity's Node"}})]),t._v(" "),a("h2",{attrs:{id:"web3-foundation-archive-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web3-foundation-archive-node"}},[t._v("#")]),t._v(" Web3 Foundation Archive Node")]),t._v(" "),a("p",[t._v("The Web3 Foundation maintains an archive node at endpoint "),a("code",[t._v("wss://cc3-5.kusama.network/")]),t._v(".")]),t._v(" "),a("p",[t._v("To connect to this node, replace the endpoint in the JavaScript snippet above.")]),t._v(" "),a("p",[t._v("Connect to it in Polkadot Apps UI by clicking the top-left corner of the screen and selecting the appropriate option:")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/endpoints/w3f.png",alt:"Selecting W3F's Node"}})]),t._v(" "),a("h2",{attrs:{id:"kusama-ryo-full-node-cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kusama-ryo-full-node-cloud"}},[t._v("#")]),t._v(" Kusama RYO Full Node Cloud")]),t._v(" "),a("p",[t._v("RYO (Run Your Own) infrastructure from "),a("a",{attrs:{href:"https://ava.do",target:"_blank",rel:"noopener noreferrer"}},[t._v("Avado"),a("OutboundLink")],1),t._v(" is a load balancer - a server redirecting requests randomly to other computers - to which you can attach your own home-run node. This means that by connecting to the load balancer's endpoint, you're randomly connecting to another person's public node: the convenience of one reliable endpoint, without the downside of centralization*.")]),t._v(" "),a("p",[t._v("Check the current status of the Kusama RYO cloud including available nodes at https://status.cloud.ava.do/")]),t._v(" "),a("p",[t._v("To connect to the RYO cloud, use the endpoint "),a("code",[t._v("wss://kusama.polkadot.cloud.ava.do/")]),t._v(" in the JavaScript code.")]),t._v(" "),a("p",[t._v("Connect to the endpoint in Polkadot Apps UI by clicking the top-left corner of the screen and selecting the appropriate option:")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/endpoints/ryo.png",alt:"Selecting the RYO cloud"}})]),t._v(" "),a("h3",{attrs:{id:"things-to-know"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#things-to-know"}},[t._v("#")]),t._v(" Things to know")]),t._v(" "),a("h4",{attrs:{id:"reliability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reliability"}},[t._v("#")]),t._v(" Reliability")]),t._v(" "),a("p",[t._v("There is no incentive to run these public nodes yet. We're working on making that happen. Ideally, the Kusama Treasury would fund this public infrastructure venture. For now, running the nodes is altruistic.")]),t._v(" "),a("h4",{attrs:{id:"centralization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centralization"}},[t._v("#")]),t._v(" *Centralization")]),t._v(" "),a("p",[t._v("The nodes are distributed and decentralized, but the load balancer serving them requests isn't. The Ava.do team is actively looking for other companies and organizations willing to run load balancers as backups to the main one - "),a("a",{attrs:{href:"https://t.me/joinchat/F_LlkBLEoDrFioPNviEpsQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("get in touch"),a("OutboundLink")],1),t._v(" if you'd like to lend a hand.")]),t._v(" "),a("h4",{attrs:{id:"full-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-nodes"}},[t._v("#")]),t._v(" Full nodes")]),t._v(" "),a("p",[t._v("The nodes in the RYO cloud are currently "),a("em",[t._v("full nodes")]),t._v(", not "),a("em",[t._v("archive nodes")]),t._v(". To learn the difference, "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=31DdfcxbAVs",target:"_blank",rel:"noopener noreferrer"}},[t._v("watch this crash course"),a("OutboundLink")],1),t._v(". If you need archive data, run your own archive node or use a Parity or W3F hosted node for now. Archive nodes in RYO are planned for a future update.")]),t._v(" "),a("h4",{attrs:{id:"avado-only"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avado-only"}},[t._v("#")]),t._v(" Avado Only")]),t._v(" "),a("p",[t._v("For now, the RYO cloud can be joined only with Ava.do hardware. This is a guarantee that the hardware is at or above minimum requirements, so that the endpoint can guarantee a reliable node on the other end. In the future, fully custom remote-run and even cloud-run nodes will be able to join the RYO cloud.")])])}),[],!1,null,null,null);e.default=o.exports}}]);