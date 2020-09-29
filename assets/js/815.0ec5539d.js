(window.webpackJsonp=window.webpackJsonp||[]).push([[815],{1240:function(e,a,t){"use strict";t.r(a);var o=t(42),i=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("The Availability and Validity (AnV) protocol of Polkadot is what allows for the network to be efficiently sharded among parachains while maintaining strong security guarantees.")]),e._v(" "),t("h2",{attrs:{id:"phases-of-the-anv-protocol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phases-of-the-anv-protocol"}},[e._v("#")]),e._v(" Phases of the AnV protocol")]),e._v(" "),t("p",[e._v("There are six phases of the Availability and the Validity protocol.")]),e._v(" "),t("ol",[t("li",[e._v("Parachain phase.")]),e._v(" "),t("li",[e._v("Relay chain submission phase.")]),e._v(" "),t("li",[e._v("Availability and unavailability subprotocols.")]),e._v(" "),t("li",[e._v("Secondary GRANDPA approval validity checks.")]),e._v(" "),t("li",[e._v("Objection procedure for fishermen.")]),e._v(" "),t("li",[e._v("Invocation of a Byzantine fault tolerant "),t("em",[e._v("finality gadget")]),e._v(" to cement the chain.")])]),e._v(" "),t("h3",{attrs:{id:"parachain-phase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parachain-phase"}},[e._v("#")]),e._v(" Parachain phase")]),e._v(" "),t("p",[e._v("The parachain phase of AnV is when the "),t("em",[e._v("collator")]),e._v(" of a parachain proposes a "),t("em",[e._v("candidate block")]),e._v(" to the validators that are currently assigned to the parachain.")]),e._v(" "),t("blockquote",[t("p",[e._v("A "),t("strong",[e._v("candidate block")]),e._v(" is a new block from a parachain collator that may or may not be valid and must go through validity checks before being included into the Relay Chain.")])]),e._v(" "),t("h3",{attrs:{id:"relay-chain-submission-phase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relay-chain-submission-phase"}},[e._v("#")]),e._v(" Relay chain submission phase")]),e._v(" "),t("p",[e._v("The validators then check the candidate block against the verification function exposed by that parachain's registered code. If the verification succeeds, then the validators will pass the candidate block to the other validators in the gossip network. However, if the verification fails, the validators immediately reject the candidate block as invalid.")]),e._v(" "),t("p",[e._v("When more than half of the parachain validators agree that a particular parachain block candidate is a valid state transition, they prepare a "),t("em",[e._v("candidate receipt")]),e._v(". The candidate receipt is what will eventually be included into the Relay Chain state. It includes:")]),e._v(" "),t("ul",[t("li",[e._v("The parachain ID.")]),e._v(" "),t("li",[e._v("The collator's ID and signature.")]),e._v(" "),t("li",[e._v("A hash of the parent block's candidate receipt.")]),e._v(" "),t("li",[e._v("A Merkle root of the block's erasure coded pieces.")]),e._v(" "),t("li",[e._v("A Merkle root of any outgoing messages.")]),e._v(" "),t("li",[e._v("A hash of the block.")]),e._v(" "),t("li",[e._v("The state root of the parachain before block execution.")]),e._v(" "),t("li",[e._v("The state root of the parachain after block execution.")])]),e._v(" "),t("p",[e._v("This information is "),t("strong",[e._v("constant size")]),e._v(" while the actual PoV block of the parachain can be variable length. It is enough information for anyone that obtains the full PoV block to verify the state transition contained inside of it.")]),e._v(" "),t("h3",{attrs:{id:"availability-and-unavailability-subprotocols"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#availability-and-unavailability-subprotocols"}},[e._v("#")]),e._v(" Availability and unavailability subprotocols")]),e._v(" "),t("p",[e._v("During the availability and unavailability phases, the validators gossip the "),t("a",{attrs:{href:"#erasure-codes"}},[e._v("erasure coded")]),e._v(" pieces among the network. At least 1/3 + 1 validators must report that they possess their piece of the code word. Once this threshold of validators has been reached, the network can consider the PoV block of the parachain "),t("em",[e._v("available")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"erasure-codes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erasure-codes"}},[e._v("#")]),e._v(" Erasure Codes")]),e._v(" "),t("p",[e._v("Erasure coding transforms a message into a longer "),t("em",[e._v("code")]),e._v(" that allows for the original message to be recovered from a subset of the code and in absence of some portion of the code. A code is the original message padded with some extra data that enables the reconstruction of the code in the case of erasures.")]),e._v(" "),t("p",[e._v("The type of erasure codes used by Polkadot's availability scheme are "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reed-Solomon"),t("OutboundLink")],1),e._v(" codes, which already enjoys a battle-tested application in technology outside the blockchain industry. One example is found in the compact disk industry. CDs use Reed-Solomon codes to correct any missing data due to inconsistencies on the disk face such as dust particles or scratches.")]),e._v(" "),t("p",[e._v("In Polkadot, the erasure codes are used to keep parachain state available to the system without requiring all validators to keep tabs on all the parachains. Instead, validators share smaller pieces of the data and can later reconstruct the entire data under the assumption that 1/3+1 of the validators can provide their individual pieces of the data.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" The 1/3+1 threshold of validators that must be responsive in order to construct the full parachain state data corresponds to Polkadot's security assumption in regard to Byzantine nodes.")]),e._v(" "),t("h2",{attrs:{id:"fishermen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fishermen"}},[e._v("#")]),e._v(" Fishermen")]),e._v(" "),t("p",[e._v("Fishermen are full nodes of parachains, same as collators, but perform a different role in relationship to the Polkadot network. Instead of packaging the state transitions and producing the next parachain blocks as collators do, fishermen will watch this process and ensure no invalid state transitions are included. Fishermen will be moderately staked on the Relay Chain, unlike collators that require no stake on the Relay Chain. Fishermen will submit invalidity reports if they find that misconduct has occurred during the production of a parachain. If they are proven right about the reported misconduct, they will be handsomely rewarded, but they risk losing their stake if they're proven wrong. For this reason, fishermen are similar to bounty hunters that get a large payout on completing a job but no steady payout otherwise.")]),e._v(" "),t("h3",{attrs:{id:"how-to-run-a-fisherman-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-run-a-fisherman-node"}},[e._v("#")]),e._v(" How to run a fisherman node")]),e._v(" "),t("p",[e._v('It is expected that the requirements of running a fisherman will be moderate compared to the staking requirements of validator nodes. Some amount of tokens will be needed to register the "fishing" status on the Relay Chain. These tokens can be potentially slashed by the protocol if the fisherman submits an incorrect invalidity report. The slashing risk is to prevent fishermen from spamming the network since the reconstruction of parachain state is an expensive procedure for the Relay Chain to process.')]),e._v(" "),t("p",[e._v("On the hardware end of requirements, a moderately powerful machine should be capable of running a full node of one or more parachains. The biggest requirement will likely be the storage of data for each of the parachains that are being fished. However, improvements such as "),t("a",{attrs:{href:"https://example.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("pruning"),t("OutboundLink")],1),e._v(" mean that the eventual storage size needed to maintain a full node of a parachain will level off at a non-exorbitant amount. RAM and CPU requirements will likely scale with the amount of parachains being fished, with low to moderate requirements for fishing one parachain and increasing from there. A $10 or $20 /month cloud instance will be enough to get started.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" Fishermen are not available on Kusama or Polkadot yet! This page will be updated with a guide on setting one up once it becomes possible.")]),e._v(" "),t("h2",{attrs:{id:"further-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-resources"}},[e._v("#")]),e._v(" Further Resources")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://polkadot.network/the-path-of-a-parachain-block/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Life of a Parachain Block"),t("OutboundLink")],1),e._v(" - Article by Parity analyst Joe Petrowski expounding on the validity checks that a parachain block must pass in order to progress the parachain.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/w3f/research/tree/85cd4adfccb7d435f21cd9fd249cd1b7f5167537/docs/papers/AnV",target:"_blank",rel:"noopener noreferrer"}},[e._v("Availability and Validity"),t("OutboundLink")],1),e._v(" - Paper by the W3F Research Team that specifies the availability and validity protocol in detail.")])])])}),[],!1,null,null,null);a.default=i.exports}}]);