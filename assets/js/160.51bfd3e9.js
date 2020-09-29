(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{551:function(t,e,o){"use strict";o.r(e);var a=o(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("The architecture of Polkadot can be divided into two different parts, the Polkadot "),o("em",[t._v("runtime")]),t._v(" and the Polkadot "),o("em",[t._v("host")]),t._v(". The Polkadot runtime is the core state transition logic of the chain and can be upgraded over the course of time and without the need for a hard fork. In comparison, the Polkadot host is the environment in which the runtime executes and is expected to remain stable and mostly static over the lifetime of Polkadot.")]),t._v(" "),o("p",[t._v("The Polkadot host interacts with the Polkadot runtime in limited, and well-specified ways. For this reason, implementation teams can build an alternative implementation of the Polkadot host while treating the Polkadot runtime as a black box. For more details of the interactions between the host and the runtime, please see the "),o("a",{attrs:{href:"https://github.com/w3f/polkadot-spec/blob/master/runtime-environment-spec/polkadot_re_spec.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("specification"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"components-of-the-polkadot-host"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#components-of-the-polkadot-host"}},[t._v("#")]),t._v(" Components of the Polkadot host")]),t._v(" "),o("ul",[o("li",[t._v("Networking components such as Libp2p that facilitates network interactions.")]),t._v(" "),o("li",[t._v("State storage and the storage trie along with the database layer.")]),t._v(" "),o("li",[t._v("Consensus engine for GRANDPA and BABE.")]),t._v(" "),o("li",[t._v("Wasm interpreter and virtual machine.")]),t._v(" "),o("li",[t._v("Low level primitives for a blockchain, such as cryptographic primitives like hash functions.")])]),t._v(" "),o("p",[t._v("A compiled Polkadot runtime, a blob of Wasm code, can be uploaded into the Polkadot host and used as the logic for the execution of state transitions. Without a runtime, the Polkadot host is unable to make state transitions or produce any blocks.")]),t._v(" "),o("h2",{attrs:{id:"diagram"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#diagram"}},[t._v("#")]),t._v(" Diagram")]),t._v(" "),o("p",[t._v("Below is a diagram that displays the Polkadot host surrounding the Polkadot runtime. Think of the runtime (in white) as a component that can be inserted, swapped out, or removed entirely. While the parts in grey are stable and can not change without an explicit hard fork.")]),t._v(" "),o("p",[o("img",{attrs:{src:"assets/updated_pre.png",alt:"polkadot host"}})]),t._v(" "),o("h2",{attrs:{id:"resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/w3f/polkadot-spec",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polkadot Host Protocol Specification"),o("OutboundLink")],1),t._v(" - Incubator for the Polkadot Host spec, including tests.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);