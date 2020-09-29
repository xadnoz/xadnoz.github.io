(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{830:function(a,e,t){"use strict";t.r(e);var n=t(42),r=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("One of the central ideas in blockchain intercommunication is the role of bridges. Some of the exact details of how bridging will work in Polkadot have yet to be decided; please consider this page a work in progress. It will be updated as more details are determined.")]),a._v(" "),t("p",[a._v("Saat ini, ada tiga jenis jembatan di Polkadot:")]),a._v(" "),t("ul",[t("li",[a._v("_ Kontrak jembatan _ - Kontrak pintar yang digunakan sebagai jembatan antara Polkadot dan rantai eksternal.")]),a._v(" "),t("li",[a._v("_ Komunikasi lintas-parachain _ - Tidak perlu kontrak.")]),a._v(" "),t("li",[t("em",[a._v("In-built bridging modules")]),a._v(" - Bridging to Polkadot from an external chain via a purpose-built module.")])]),a._v(" "),t("h2",{attrs:{id:"kontrak-jembatan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kontrak-jembatan"}},[a._v("#")]),a._v(" Kontrak jembatan")]),a._v(" "),t("p",[a._v("Those who are already familiar with Ethereum may know of the "),t("a",{attrs:{href:"https://github.com/paritytech/parity-bridge",target:"_blank",rel:"noopener noreferrer"}},[a._v("Parity Bridge"),t("OutboundLink")],1),a._v(" and the efforts being made to connect PoA sidechains to the Ethereum mainnet. The bridge is a combination of two smart contracts, one deployed on each chain, that allow for cross-chain transfers of value. As an example of usage, the initial Parity Bridge proof of concept connects two Ethereum chains, "),t("code",[a._v("main")]),a._v(" and "),t("code",[a._v("side")]),a._v(". Ether deposited into the contract on "),t("code",[a._v("main")]),a._v(" generate a balance denominated in ERC-20 tokens on "),t("code",[a._v("side")]),a._v(". Conversely, ERC-20 tokens deposited back into the contract on "),t("code",[a._v("side")]),a._v(" can free up Ether on "),t("code",[a._v("main")]),a._v(".")]),a._v(" "),t("p",[a._v("In the case of Polkadot, it should be possible to have a bridge contract deployed on, say, an EVM-based standalone chain and a contract deployed on a smart contract capable parachain. This would not necessarily be the most efficient method of bridging, but given the generality of a Turing-complete parachain it would be possible to bridge Polkadot and any other smart contract capable blockchain.")]),a._v(" "),t("h2",{attrs:{id:"komunikasi-lintas-parachain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#komunikasi-lintas-parachain"}},[a._v("#")]),a._v(" Komunikasi Lintas Parachain")]),a._v(" "),t("p",[a._v("As mentioned on the "),t("a",{attrs:{href:"learn-parachains"}},[a._v("parachains")]),a._v(" page, parachains will be able to send messages (including transactions) to each other without the need for smart contracts to perform the bridging functionality. Cross-parachain messaging will be native to Polkadot.")]),a._v(" "),t("h2",{attrs:{id:"modul-bridging-yang-dibangun"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modul-bridging-yang-dibangun"}},[a._v("#")]),a._v(" Modul Bridging yang dibangun")]),a._v(" "),t("p",[a._v('Receiving messages on a parachain from a non-parachain blockchain will likely be done natively within a module of the client software. This would negate the need for bridging contracts and allow non-parachains to act as "virtual parachains". Collators for the specific blockchain can then collate transactions or other state transitions, and submit them to the relay chain as if the blockchain were a parachain.')]),a._v(" "),t("p",[a._v("The bridging modules will likely be written with particular parachains in mind (e.g. Bitcoin, Ethereum), which means that any blockchain that's based on either of those should be able to be bridged directly to Polkadot without the need of going through a bridge contract on a parachain. This should allow for faster execution for those chains that are compatible.")]),a._v(" "),t("p",[a._v("For the standalone chains that don't have an in-built bridging module on Polkadot, it will be necessary to deploy bridge contracts (see above).")]),a._v(" "),t("h2",{attrs:{id:"sumber-daya"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sumber-daya"}},[a._v("#")]),a._v(" Sumber daya")]),a._v(" "),t("h3",{attrs:{id:"jembatan-kontrak-pintar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jembatan-kontrak-pintar"}},[a._v("#")]),a._v(" Jembatan Kontrak Pintar")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/hicommonwealth/edgeth_bridge/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Edgeth Bridge"),t("OutboundLink")],1),a._v(" - a bridge from Ethereum to Edgeware chain (a Substrate-based chain).")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/paritytech/parity-bridge",target:"_blank",rel:"noopener noreferrer"}},[a._v("Jembatan Parity"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://poa.network/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Jaringan POA"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/giveth/ethereum-dapp-scaling-poa-network-acee8a51e772",target:"_blank",rel:"noopener noreferrer"}},[a._v("Case study"),t("OutboundLink")],1),a._v(" of POA Network's implementation of Parity's bridge chain solution.")])]),a._v(" "),t("h3",{attrs:{id:"runtime-jembatan-modul"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runtime-jembatan-modul"}},[a._v("#")]),a._v(" Runtime Jembatan Modul")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/chainx-org/ChainX/tree/develop/cxrml/bridge/btc",target:"_blank",rel:"noopener noreferrer"}},[a._v("ChainX BTC Bridge"),t("OutboundLink")],1),a._v(" - ChainX have implemented a BTC to Substrate bridge for their parachain.")])]),a._v(" "),t("h3",{attrs:{id:"desain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#desain"}},[a._v("#")]),a._v(" Desain")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://eprint.iacr.org/2018/643.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("XClaim"),t("OutboundLink")],1),a._v(" - XClaim design for bridging Proof-of-Work chains in a trustless way.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);