(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{405:function(t,e,a){"use strict";a.r(e);var o=a(42),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Parachain development kits (PDKs) are a set of tools that make it easy for developers to create\nPolkadot compatible "),a("a",{attrs:{href:"learn-parachains"}},[t._v("parachains")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"why-create-a-parachain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-create-a-parachain"}},[t._v("#")]),t._v(" Why create a parachain?")]),t._v(" "),a("p",[t._v("Before diving into what a PDK is and how it would be used, let's revisit "),a("em",[t._v("why")]),t._v(" a developer would\nwant to create a parachain and connect it to Polkadot.")]),t._v(" "),a("p",[t._v("A parachain has two major value adds that make it a desirable choice for a developer over creating a\nstandalone chain:")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("Shared security")]),t._v(" - removes the necessity of bootstrapping a chain's own validator set.")]),t._v(" "),a("li",[a("em",[t._v("Cross-chain communication")]),t._v(" - allows parachains to interoperate with each other through the XCMP\nprotocol.")])]),t._v(" "),a("p",[t._v("Parachains can "),a("a",{attrs:{href:"learn-security"}},[t._v("lease the security")]),t._v(" of the Polkadot network by bonding\n"),a("a",{attrs:{href:"learn-DOT"}},[t._v("DOTs")]),t._v(" for a parachain slot. This means that the social costs of building a community\naround your project and convincing validators to participate in your network security are reduced.\nIt is anticipated that Polkadot will have strong security, and decentralized application projects\nwishing to benefit from this security would want to become a parachain. For more information on the\nmechanic of leasing a parachain slot through a candle auction see "),a("a",{attrs:{href:"learn-auction"}},[t._v("here")]),t._v(".")]),t._v(" "),a("p",[t._v("Any decentralized application or chain that wants to enable trustless messaging to other parachains\nalready connected to Polkadot would want to become a parachain. Interoperability between sovereign\nchains involves certain constraints and complex protocols to enable across a wide breadth of chains.\nWith Polkadot, you will get this feature out of the box if your build your application as a\nparachain. The "),a("a",{attrs:{href:"learn-crosschain"}},[t._v("XCMP protocol")]),t._v(" will allow any parachains to interoperate by\npassing messages between them. Furthermore, as bridges to other chains are launched (such as those\nto Bitcoin or Ethereum) the parachains will be able to operate with these as well.")]),t._v(" "),a("h2",{attrs:{id:"what-is-a-pdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-pdk"}},[t._v("#")]),t._v(" What is a PDK?")]),t._v(" "),a("p",[t._v("As mentioned, a PDK is a set of tools that allows developers to easily create a parachain. In\npractice this means that the PDK will consist of a couple key components:")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("State transition function")]),t._v(" - a way for your application to move from one state to another state.")]),t._v(" "),a("li",[a("em",[t._v("Collator node")]),t._v(" - a type of peer-to-peer node in the Polkadot network with certain\nresponsibilities in regard to parachains.")])]),t._v(" "),a("p",[t._v("The state transition function (STF) can be any abstract way for an application to go from one state\nto another state. The only constraint that Polkadot places on this STF is that it must be easily\nverifiable -- usually though what we call a "),a("em",[t._v("witness")]),t._v(" or "),a("em",[t._v("proof")]),t._v(". It must be so because the relay\nchain validators will need to check that each state it receives from the collator node is correct\nwithout actually running through the entire computation. Some examples of these proofs include the\nProof-of-Validity blocks or zk-SNARKs which require less computational resources to verify than they\ndo to generate. The verification asymmetry in proof generation of the STF is one of the integral\ninsights that allows Polkadot to scale while keeping high security guarantees.")]),t._v(" "),a("p",[t._v("A collator node is one of the types of network maintainers in the Polkadot protocol. They are\nresponsible for "),a("strong",[t._v("keeping availability")]),t._v(" of the state of the parachain and the new states returned\nfrom iteration of the state transition function. They must remain online in order to keep track of\nthe state and also of the XCMP messages that it will route between itself and other parachains.\nCollator nodes are responsible for passing the succinct proofs to the relay chain validators, and\ntracking the latest blocks from the relay chain. In essence, a collator node also acts as a light\nclient for the Polkadot relay chain. For more on collator nodes see "),a("a",{attrs:{href:"maintain-collator"}},[t._v("here")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"what-kind-of-pdks-exist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-kind-of-pdks-exist"}},[t._v("#")]),t._v(" What kind of PDKs exist?")]),t._v(" "),a("p",[t._v("Currently the only PDK is Parity "),a("a",{attrs:{href:"https://github.com/paritytech/substrate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Substrate"),a("OutboundLink")],1),t._v(" and\n"),a("a",{attrs:{href:"https://github.com/paritytech/cumulus",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cumulus"),a("OutboundLink")],1),t._v(". Substrate is a blockchain framework that provides\nthe basic building blocks of a blockchain (things like the networking layer, consensus, a Wasm\ninterpreter) and provides an intuitive way to construct your runtime. Substrate is made to ease the\nprocess of creating a new chain, but it does not provide support for Polkadot compatibility\ndirectly. For this reason, Cumulus, an added library will contain all of the Polkadot compatibility\nglue code. Cumulus is still in development, but the idea is that it should be simple to take a\nSubstrate chain and add the parachain code by importing the crates and adding a single line of code.")]),t._v(" "),a("p",[t._v("Substrate and Cumulus provide a PDK from the abstraction of the blockchain format, but it is not\nnecessary that a parachain even needs to be a blockchain. For example, a parachain just needs to\nsatisfy the two constraints listed above: "),a("em",[t._v("state transition function")]),t._v(" and "),a("em",[t._v("collator node")]),t._v(".\nEverything else is up to the implementer of the PDK.")]),t._v(" "),a("p",[t._v("One interesting idea for a PDK that would be nice to see is to have a\n"),a("a",{attrs:{href:"https://ethresear.ch/t/roll-up-roll-back-snark-side-chain-17000-tps/3675",target:"_blank",rel:"noopener noreferrer"}},[t._v("roll_up"),a("OutboundLink")],1),t._v(" kit that allowed\ndevelopers to create snark-based parachains. If we review the roll_up write-up we see that the\nsystem uses two roles: users that update "),a("strong",[t._v("state")]),t._v(" and an operator that "),a("strong",[t._v("aggregates the state\nupdates")]),t._v(" into a single on-chain update. It should be straight forward to see how we can translate\nthis to the parachain terms. The state transition function for a roll_up-like parachain would be\nupdating the state (in practice, most likely a merkle tree which would be easily verifiable) from\nthe user inputs. The operator would act as the collator node which would aggregate the state and\ncreate the zk-SNARK proof which it would hand to the relay chain validators for verification.")]),t._v(" "),a("h2",{attrs:{id:"build-a-pdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-a-pdk"}},[t._v("#")]),t._v(" Build a PDK")]),t._v(" "),a("p",[t._v("If you or your team are interested in developing a PDK feel free to open an issue on the\n"),a("a",{attrs:{href:"https://github.com/w3f/Web3-collaboration",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3F collaboration repository"),a("OutboundLink")],1),t._v(" for comment. There may be\ngrants available for this type of work.")])])}),[],!1,null,null,null);e.default=n.exports}}]);