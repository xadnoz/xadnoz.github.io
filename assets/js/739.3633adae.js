(window.webpackJsonp=window.webpackJsonp||[]).push([[739],{1160:function(a,e,t){"use strict";t.r(e);var r=t(42),o=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Parathreads are an idea for parachains to temporarily participate (on a block by block basis) in Polkadot security without needing to lease a dedicated parachain slot. This is done through economically sharing the scarce resource of a "),t("em",[a._v("parachain slot")]),a._v(" among a number of competing resources (parathreads). Chains that otherwise would not be able to acquire a full parachain slot, or do not find it economically sensible to do so, are enabled to still participate in Polkadot's shared security -- albeit with an associated fee per block. It also offers a graceful off-ramp to parachains which no longer require a dedicated parachain slot, but would like to continue using the relay chain.")]),a._v(" "),t("h2",{attrs:{id:"origin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#origin"}},[a._v("#")]),a._v(" Origin")]),a._v(" "),t("p",[a._v("According to "),t("a",{attrs:{href:"https://v.douyu.com/show/a4Jj7llO5q47Dk01",target:"_blank",rel:"noopener noreferrer"}},[a._v("this talk"),t("OutboundLink")],1),a._v(" in Chengdu, the origin of the idea came from similar notions in the limited resource of memory on early personal computers of the late '80s and '90s. Since computers have a limited amount of physical memory, when an application needs more, the computer can create virtual memory by using "),t("em",[a._v("swap space")]),a._v(" on a hard disk. Swap space allows the capacity of a computer's memory to expand and for more processes to run concurrently with the trade-off that some processes will take longer to progress.")]),a._v(" "),t("h2",{attrs:{id:"parachain-vs-parathread"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parachain-vs-parathread"}},[a._v("#")]),a._v(" Parachain vs. Parathread")]),a._v(" "),t("p",[a._v("Parachains and parathreads are very similar from a development perspective. One can imagine that a chain developed with Substrate can at different points in its lifetime assume one of three states: 1) independent chain with secured bridge, 2) parachain, or 3) parathread. It can switch between these last two states with relatively minimal effort on behalf of developers since the difference is more of an economic distinction than a technological one.")]),a._v(" "),t("p",[a._v("Parathreads have the exact same benefits for connecting to Polkadot that a full parachain has. Namely, it is able to send messages to other para{chain,threads} through XCMP and it is secured under the full economic security of Polkadot's validator set.")]),a._v(" "),t("p",[a._v("The difference between parachains and parathreads is economic. Parachains must be registered through a normal means of Polkadot, i.e. governance proposal or parachain slot auction. Parathreads have a fixed fee for registration that would realistically be much lower than the cost of acquiring a parachain slot. Similarly to how DOTs are locked for the duration of parachain slots and then returned to the winner of the auction, the deposit for a parathread will be returned to the parathread after the conclusion of its term.")]),a._v(" "),t("p",[a._v("Registration of the parathread does not guarantee anything more than the registration of the parathread code to the Polkadot relay chain. When a parathread progresses by producing a new block, there is a fee that must be paid in order to participate in a per-block auction for inclusion in the verification of the next relay chain block. All parathreads that are registered are competing in this auction for their parathread to be included for progression.")]),a._v(" "),t("p",[a._v("There are two interesting observations to make about parathreads. One, since they compete on a per-block basis, it is similar to how transactions are included in Bitcoin or Ethereum. A similar fee market will likely develop, which means that busier times will drive the price of parathread inclusion up, while times of low activity will require lower fees. Two, this mechanism is markedly different from the parachain mechanism which guarantees inclusion as long as a parachain slot is held; parathread registration grants no such right to the parathread.")]),a._v(" "),t("h2",{attrs:{id:"how-will-parathreads-be-operated"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-will-parathreads-be-operated"}},[a._v("#")]),a._v(" How Will Parathreads be Operated?")]),a._v(" "),t("p",[a._v("A portion of the parachain slots on the relay chain will be designated as part of the parathread pool. In other words, some parachain slots will have no parachain attached to them and rather will be used as a space for which the winner(s) of the block-by-block parathread fee auction can have their block candidate included.")]),a._v(" "),t("p",[a._v("Collators will offer a bid designated in DOTs for inclusion of a parathread block candidate. The relay chain block author is able to select from these bids to include a parathread block. The obvious incentive is for them to accept the block candidate with the highest bid, which would bring them the most profit. The tokens from the parathread bids will likely be split 80-20, meaning that 80% goes into Polkadot treasury and 20% goes to the block author. This is the same split that applies also to transaction fees and, like many other parameters in Polkadot, can be changed through a governance mechanism.")]),a._v(" "),t("p",[a._v("For a precise description of the parathread protocol, see "),t("a",{attrs:{href:"https://hackmd.io/UcOOzoyDR9WJpQBZICtg3Q?both#Parathread-Protocol",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"parathread-economics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parathread-economics"}},[a._v("#")]),a._v(" Parathread Economics")]),a._v(" "),t("p",[a._v("There are two sources of compensation for collators:")]),a._v(" "),t("ol",[t("li",[a._v("Assuming a parathread has its own local token system, it pays the collators from the transaction fees in its local token. If the parathread does not implement a local token, or its local token has no value (e.g. it is used only for governance), then it can use DOTs to incentivize collators.")]),a._v(" "),t("li",[a._v("Parathread protocol subsidy. A parathread can mint new tokens in order to provide additional incentives for the collator. Probably, the amount of local tokens to mint for the parathread would be a function of time, the more time that passes between parathread blocks that are included in the relay chain, the more tokens the parathread is willing to subsidize in order to be considered for inclusion. The exact implementation of this minting process could be through local parathread inflation or via a stockpile of funds like a treasury.")])]),a._v(" "),t("p",[a._v("Collators may be paid in local parathread currency. However, the relay chain transacts with the Polkadot universal currency (DOT) only. Collators must then submit block candidates with an associated bid in DOT. This means that if the parathread offers a local currency, the collator will need to understand the exchange rate between this currency and DOT in order to place a proper DOT bid on the relay chain and ensure that they make a profit.")]),a._v(" "),t("h2",{attrs:{id:"parachain-slot-swaps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parachain-slot-swaps"}},[a._v("#")]),a._v(" Parachain Slot Swaps")]),a._v(" "),t("p",[a._v('It will be possible for a parachain that holds a parachain slot to swap this slot with a parathread so that the parathread "upgrades" to a full parachain and the parachain becomes a parathread. Similarly, this provides a graceful off-ramp for parachains that have reached the end of their lease and do not have sufficient usage to justify renewal; they can remain registered on the relay chain but only produce new blocks when they need to. Parathreads help ease the sharp stop of the parachain slot term by allowing parachains that are still doing something useful to produce blocks, even if it is no longer economically viable to rent a parachain slot.')])])}),[],!1,null,null,null);e.default=o.exports}}]);