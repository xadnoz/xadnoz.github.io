(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{1166:function(e,a,t){"use strict";t.r(a);var o=t(42),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v('Shared Protected Runtime Execution Enclaves (SPREE) sometimes referred to as "trust wormholes," are fragments of logic comparable to runtime modules in Substrate, but live on the Polkadot Relaychain and may be opted into by parachains.')]),e._v(" "),t("p",[e._v("SPREE in brief was described with the following properties and functions:")]),e._v(" "),t("ul",[t("li",[e._v("Parachains can opt-in to special runtime logic fragments (like smart contracts).")]),e._v(" "),t("li",[e._v("These fragments have their own storage and own "),t("a",{attrs:{href:"learn-crosschain"}},[e._v("XCMP")]),e._v(" endpoint.")]),e._v(" "),t("li",[e._v("All instances across parachains have identical logic.")]),e._v(" "),t("li",[e._v("It executes alongside parachain.")]),e._v(" "),t("li",[e._v("Protected: storage can not be altered by parachain logic; messages can not be faked from them by parachains.")])]),e._v(" "),t("h2",{attrs:{id:"origin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#origin"}},[e._v("#")]),e._v(" Origin")]),e._v(" "),t("p",[e._v("On 28 March, 2019 u/Tawaren, a member of the Polkadot community, made a post on "),t("a",{attrs:{href:"https://www.reddit.com/r/dot/",target:"_blank",rel:"noopener noreferrer"}},[e._v("r/dot"),t("OutboundLink")],1),e._v(' called "SmartProtocols Idea" and laid out a proposal for '),t("a",{attrs:{href:"https://www.reddit.com/r/dot/comments/b6kljn/smartprotocols_idea/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Smart Protocols"),t("OutboundLink")],1),e._v(". The core insight of the post was that XCMP had a complication in that it was difficult to verify and prove code was executed on a parachain without trust. A solution was to install the SmartProtocols in the Relaychain that would be isolated blobs of code with their own storage per instance that could only be changed through an interface with each parachain. SmartProtocols are the precursor to SPREE.")]),e._v(" "),t("h2",{attrs:{id:"what-is-a-spree-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-spree-module"}},[e._v("#")]),e._v(" What is a SPREE module?")]),e._v(" "),t("p",[e._v("SPREE modules are fragments of logic (in concrete terms they are blobs of WebAssembly code) that are uploaded onto Polkadot through a governance mechanism or by parachains. Once the blob is uploaded to Polkadot, all other parachains can decide to opt-in to the logic. The SPREE module would retain its own storage independent of the parachain, but would be able to be called through an interface with the parachain. Parachains will send messages to the SPREE module synchronously.")]),e._v(" "),t("p",[e._v("SPREE modules are important to the overall XCMP architecture because they give guarentee to the code that will be executed on destination parachains. While XCMP guarantees the delivery of a message, it does not guarantee what code will be executed, i.e. how the receiving parachain will interpret the message. While XCMP accomplishes trustless message passing, SPREE is the trustless interpenetration of the message and a key part to the usefulness of XCMP.")]),e._v(" "),t("p",[e._v("SPREE modules are like recipes in cookbooks. For example, if we give an order to a cook to make a soufflé, and we’re decently confident in the ability of the cook, we have a vague idea of what will be made but no actually surety how it will be made. However, let’s say that a cook has the “Soufflé Maker’s Manual” on their bookshelf and has committed themselves to only make souffles from this book. Now we can also consult the same book that the cook has, and we have a precise understanding of what will happen when we tell the cook to make a soufflé. In this example, “make a soufflé” was the message in XCMP and the cookbook was the SPREE module.")]),e._v(" "),t("p",[e._v("In concrete terms, SPREE modules could be useful for various functionality on Polkadot. One suggested use case of SPREE modules is for a trustless decentralized exchange that is offered as functionality to any parachain without any extra effort from parachain developers. One can imagine this working by having a SPREE module which exposes the interface for the incrementing and decrementing of balances of various assets based on a unique identifier.")]),e._v(" "),t("h2",{attrs:{id:"why"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[e._v("#")]),e._v(" Why?")]),e._v(" "),t("p",[e._v("Sending messages across parachains in XCMP only ensures that the message will be delivered but does not specify the code that will be executed, or how the message will be interpreted by the receiving parachain. There would be ways around this such as requesting a verifiable receipt of the execution from the receiving parachain, but in the naked case the other parachain would have to be trusted. Having shared code which exists in appendices that the parachain can opt-in to resolves the need for trust and makes the execution of the appendices completely trustless.")]),e._v(" "),t("p",[e._v("SPREE would be helpful to ensure that the same logic is shared between parachains in the SPREE modules. An especially relevant use case would revolve around the use of token transfers across parachains in which it is important that the sending and receiving parachains agree about how to change the total supply of tokens and a basic interface.")]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("p",[t("img",{attrs:{src:"assets/SPREE/spree_module.png",alt:"spree example"}})]),e._v(" "),t("p",[e._v("The diagram above is a simplification of the Polkadot system.")]),e._v(" "),t("p",[e._v('In this diagram we see that the Wasm code for SPREE module "X" has been uploaded to the Polkadot relay chain. The two cylinders "A" and "B" represent two distinct parachains that have both opted-in to this SPREE module creating two distinct instances of it with their own XCMP endpoints "A.X" and "B.X".')]),e._v(" "),t("p",[e._v('In the example we assume that this SPREE module "X" contains the functionality for incrementing of decrementing the balance of a particular asset that is unique to this module.')]),e._v(" "),t("p",[e._v("By initiating a transaction at A.X to decrease a particular balance by 1, a message over XCMP can be trustlessly sent to B.X to increase a balance by 1.")]),e._v(" "),t("p",[e._v("Collators, represented as the green triangle are responsible for relaying this message from parachain A to parachain B, as well as mantaining the storage for each particular instance of A.X and B.X for their respective parachains. They provide proofs of valid state transitions to the relay chain validators, represented as blue diamonds.")]),e._v(" "),t("p",[e._v("Validators can validate the correct state transitions of SPREE modules A.X and B.X by being provided with the previous state root of the SPREE module instances, the data of the XCMP message between the instances, and the next state root of the instance. They do this validation be checking it against the "),t("code",[e._v("validate")]),e._v(" function as provided by the SPREE module API. Collators are expected to be able to provide this information in order to progress their parachains.")]),e._v(" "),t("h2",{attrs:{id:"metaphor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metaphor"}},[e._v("#")]),e._v(" Metaphor")]),e._v(" "),t("p",[e._v("SPREE modules are like recipes in cookbooks. Let’s consider an example for comparison. We are at a restaurant and we give an order to a cook to make a soufflé. We're sufficiently confident in the cook’s ability and we have a vague idea of what will be made, but no actual surety how it will be made. If we want to be sure on the exact execution of the making of the soufflé, then we would need to inspect the cook’s kitchen before hand and verify ourselves how the cook makes the soufflé. This is comparable to sending XCMP messages without SPREE, as the sending party is responsible for verifying themselves the receiving chain’s code.")]),e._v(" "),t("p",[e._v("However, let's say that a cook has the Soufflé Maker's Manual; on their bookshelf and has committed themselves to only making soufflés from this book. One can now examine the book and have a precise understanding of what will happen when we tell the cook to make a soufflé. When we place an order to make a soufflé as is written on page 10 of the manual, we then know exactly what will be executed in the cook’s kitchen and the finished product that will come back to the table. Additionally, any kitchen we go to we can ask if the cook owns this book and if so we can order the standard recipe and be sure of the execution in the cook’s kitchen. Like the recipe in the cookbook, we only need to verify a SPREE module once in order to be sure of its execution across all parachains. If we know a parachain uses a specific SPREE module, it’s not necessary to know any other details on how the parachain is implemented.")])])}),[],!1,null,null,null);a.default=s.exports}}]);