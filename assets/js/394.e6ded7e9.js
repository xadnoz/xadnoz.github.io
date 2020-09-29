(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{797:function(a,e,t){"use strict";t.r(e);var o=t(42),r=Object(o.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Parachain development kits (PDKs) are a set of tools that make it easy for developers to create Polkadot compatible "),t("a",{attrs:{href:"learn-parachains"}},[a._v("parachains")]),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"mengapa-membuat-parachain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mengapa-membuat-parachain"}},[a._v("#")]),a._v(" Mengapa membuat parachain?")]),a._v(" "),t("p",[a._v("Before diving into what a PDK is and how it would be used, let's revisit "),t("em",[a._v("why")]),a._v(" a developer would want to create a parachain and connect it to Polkadot.")]),a._v(" "),t("p",[a._v("A parachain has two major value adds that make it a desirable choice for a developer over creating a standalone chain:")]),a._v(" "),t("ul",[t("li",[a._v("_ Keamanan bersama _ - menghapus keharusan bootstrap set validator rantai itu sendiri.")]),a._v(" "),t("li",[t("em",[a._v("Cross-chain communication")]),a._v(" - allows parachains to interoperate with each other through the XCMP protocol.")])]),a._v(" "),t("p",[a._v("Parachains can "),t("a",{attrs:{href:"learn-security"}},[a._v("lease the security")]),a._v(" of the Polkadot network by bonding "),t("a",{attrs:{href:"learn-DOT"}},[a._v("DOTs")]),a._v(" for a parachain slot. This means that the social costs of building a community around your project and convincing validators to participate in your network security are reduced. It is anticipated that Polkadot will have strong security, and decentralized application projects wishing to benefit from this security would want to become a parachain. For more information on the mechanic of leasing a parachain slot through a candle auction see "),t("a",{attrs:{href:"learn-auction"}},[a._v("here")]),a._v(".")]),a._v(" "),t("p",[a._v("Any decentralized application or chain that wants to enable trustless messaging to other parachains already connected to Polkadot would want to become a parachain. Interoperability between sovereign chains involves certain constraints and complex protocols to enable across a wide breadth of chains. With Polkadot, you will get this feature out of the box if your build your application as a parachain. The "),t("a",{attrs:{href:"learn-crosschain"}},[a._v("XCMP protocol")]),a._v(" will allow any parachains to interoperate by passing messages between them. Furthermore, as bridges to other chains are launched (such as those to Bitcoin or Ethereum) the parachains will be able to operate with these as well.")]),a._v(" "),t("h2",{attrs:{id:"apa-itu-pdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apa-itu-pdk"}},[a._v("#")]),a._v(" Apa itu PDK?")]),a._v(" "),t("p",[a._v("As mentioned, a PDK is a set of tools that allows developers to easily create a parachain. In practice this means that the PDK will consist of a couple key components:")]),a._v(" "),t("ul",[t("li",[a._v("_ Fungsi transisi negara _ - cara bagi aplikasi Anda untuk berpindah dari satu kondisi ke kondisi lainnya.")]),a._v(" "),t("li",[t("em",[a._v("Collator node")]),a._v(" - a type of peer-to-peer node in the Polkadot network with certain responsibilities in regard to parachains.")])]),a._v(" "),t("p",[a._v("The state transition function (STF) can be any abstract way for an application to go from one state to another state. The only constraint that Polkadot places on this STF is that it must be easily verifiable -- usually though what we call a "),t("em",[a._v("witness")]),a._v(" or "),t("em",[a._v("proof")]),a._v(". It must be so because the relay chain validators will need to check that each state it receives from the collator node is correct without actually running through the entire computation. Some examples of these proofs include the Proof-of-Validity blocks or zk-SNARKs which require less computational resources to verify than they do to generate. The verification asymmetry in proof generation of the STF is one of the integral insights that allows Polkadot to scale while keeping high security guarantees.")]),a._v(" "),t("p",[a._v("A collator node is one of the types of network maintainers in the Polkadot protocol. They are responsible for "),t("strong",[a._v("keeping availability")]),a._v(" of the state of the parachain and the new states returned from iteration of the state transition function. They must remain online in order to keep track of the state and also of the XCMP messages that it will route between itself and other parachains. Collator nodes are responsible for passing the succinct proofs to the relay chain validators, and tracking the latest blocks from the relay chain. In essence, a collator node also acts as a light client for the Polkadot relay chain. For more on collator nodes see "),t("a",{attrs:{href:"maintain-collator"}},[a._v("here")]),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"pdk-macam-apa-yang-ada"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pdk-macam-apa-yang-ada"}},[a._v("#")]),a._v(" PDK macam apa yang ada?")]),a._v(" "),t("p",[a._v("Currently the only PDK is Parity "),t("a",{attrs:{href:"https://github.com/paritytech/substrate",target:"_blank",rel:"noopener noreferrer"}},[a._v("Substrate"),t("OutboundLink")],1),a._v(" and "),t("a",{attrs:{href:"https://github.com/paritytech/cumulus",target:"_blank",rel:"noopener noreferrer"}},[a._v("Cumulus"),t("OutboundLink")],1),a._v(". Substrate is a blockchain framework that provides the basic building blocks of a blockchain (things like the networking layer, consensus, a Wasm interpreter) and provides an intuitive way to construct your runtime. Substrate is made to ease the process of creating a new chain, but it does not provide support for Polkadot compatibility directly. For this reason, Cumulus, an added library will contain all of the Polkadot compatibility glue code. Cumulus is still in development, but the idea is that it should be simple to take a Substrate chain and add the parachain code by importing the crates and adding a single line of code.")]),a._v(" "),t("p",[a._v("Substrate and Cumulus provide a PDK from the abstraction of the blockchain format, but it is not necessary that a parachain even needs to be a blockchain. For example, a parachain just needs to satisfy the two constraints listed above: "),t("em",[a._v("state transition function")]),a._v(" and "),t("em",[a._v("collator node")]),a._v(". Everything else is up to the implementer of the PDK.")]),a._v(" "),t("p",[a._v("One interesting idea for a PDK that would be nice to see is to have a "),t("a",{attrs:{href:"https://ethresear.ch/t/roll-up-roll-back-snark-side-chain-17000-tps/3675",target:"_blank",rel:"noopener noreferrer"}},[a._v("roll_up"),t("OutboundLink")],1),a._v(" kit that allowed developers to create snark-based parachains. If we review the roll_up write-up we see that the system uses two roles: users that update "),t("strong",[a._v("state")]),a._v(" and an operator that "),t("strong",[a._v("aggregates the state updates")]),a._v(" into a single on-chain update. It should be straight forward to see how we can translate this to the parachain terms. The state transition function for a roll_up-like parachain would be updating the state (in practice, most likely a merkle tree which would be easily verifiable) from the user inputs. The operator would act as the collator node which would aggregate the state and create the zk-SNARK proof which it would hand to the relay chain validators for verification.")]),a._v(" "),t("h2",{attrs:{id:"membangun-pdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#membangun-pdk"}},[a._v("#")]),a._v(" Membangun PDK")]),a._v(" "),t("p",[a._v("If you or your team are interested in developing a PDK feel free to open an issue on the "),t("a",{attrs:{href:"https://github.com/w3f/Web3-collaboration",target:"_blank",rel:"noopener noreferrer"}},[a._v("W3F collaboration repository"),t("OutboundLink")],1),a._v(" for comment. There may be grants available for this type of work.")])])}),[],!1,null,null,null);e.default=r.exports}}]);