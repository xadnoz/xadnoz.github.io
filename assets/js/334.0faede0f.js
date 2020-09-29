(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{1026:function(e,t,a){"use strict";a.r(t);var o=a(42),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"why-do-we-need-consensus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-do-we-need-consensus"}},[e._v("#")]),e._v(" Why do we need consensus?")]),e._v(" "),a("p",[e._v("Consensus is a method for coming to agreement over a shared state. In order for the state of the blockchain to continue to build and move forward, all nodes in the network must agree and come to consensus. It is the way that the nodes in a decentralized network are able to stay synced with each other. Without consensus for the decentralized network of nodes in a blockchain, there is no way to ensure that the state one node believes is true will be shared by the other nodes. Consensus aims to provide the "),a("em",[e._v("objective")]),e._v(" view of the state amid participants which each have their own "),a("em",[e._v("subjective")]),e._v(" views of the network. It is the process by which these nodes communicate and come to agreement, and are able to build new blocks.")]),e._v(" "),a("h2",{attrs:{id:"what-are-pow-and-pos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-pow-and-pos"}},[e._v("#")]),e._v(" What are PoW and PoS?")]),e._v(" "),a("p",[e._v("Proof of Work (PoW) and Proof of Stake (PoS) have been used as short hand to refer to consensus mechanisms of blockchains, but that does not capture the full picture. PoW is the method for agreeing on a block author and part of the fuller "),a("a",{attrs:{href:"#nakamoto-consensus"}},[e._v("Nakamoto consensus")]),e._v(" that also encompasses a chain selection algorithm (longest chain rule in Bitcoin). Similarly, PoS is a set of rules for selecting the validator set and does not specify a chain selection rule or how a chain might reach finality. PoS algorithms have traditionally been paired with an algorithm for coming to Byzantine agreement between nodes. For example, "),a("a",{attrs:{href:"learn-comparisons-cosmos"}},[e._v("Tendermint")]),e._v(" is a practical Byzantine fault tolerant algorithm which uses PoS as its validator set selection method.")]),e._v(" "),a("h2",{attrs:{id:"why-not-proof-of-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-not-proof-of-work"}},[e._v("#")]),e._v(" Why not Proof of Work?")]),e._v(" "),a("p",[e._v("Although simple and effective in coming to a decentralized consensus, proof of work consensus consumes an incredible amount of energy, has no economic or provable finality, and has no effective strategy in resisting cartels.")]),e._v(" "),a("h2",{attrs:{id:"probabilistic-vs-provable-finality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#probabilistic-vs-provable-finality"}},[e._v("#")]),e._v(" Probabilistic vs. provable finality")]),e._v(" "),a("p",[e._v("A pure Nakamoto consensus blockchain which runs PoW is only able to achieve the notion of "),a("em",[e._v("probabilistic finality")]),e._v(" and reach "),a("em",[e._v("eventual consensus")]),e._v(". Probabilistic finality means that under some assumptions about the network and participants, if we see a few blocks building on a given block, we can estimate the probability that it is final. Eventual consensus means that at some point in the future, all nodes will agree on the truthfulness of one set of data. This eventual consensus may take a long time and will not be able to be determined how long it will take ahead of time. However, finality gadgets such as GRANDPA or Ethereum's Casper FFG are designed to give stronger and quicker guarantees on the finality of blocks - specifically, that they can never be reverted after some process of Byzantine agreements has taken place. The notion of irreversible consensus is known as "),a("em",[e._v("provable finality.")])]),e._v(" "),a("p",[e._v("In the GRANDPA paper, it is phrased in this way:")]),e._v(" "),a("blockquote",[a("p",[e._v("We say an oracle A in a protocol is "),a("em",[e._v("eventually consistent")]),e._v(" if it returns the same value to all participants after some unspecified time.")])]),e._v(" "),a("h2",{attrs:{id:"what-is-grandpa-babe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-grandpa-babe"}},[e._v("#")]),e._v(" What is GRANDPA/BABE?")]),e._v(" "),a("h3",{attrs:{id:"hybrid-consensus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hybrid-consensus"}},[e._v("#")]),e._v(" Hybrid Consensus")]),e._v(" "),a("p",[e._v("There are two acronyms we use when we talk about the consensus protocol of Polkadot, GRANDPA and BABE. We talk about both of these acronyms because Polkadot uses what is known as "),a("em",[e._v("hybrid consensus")]),e._v(". Hybrid consensus splits up the finality gadget from the block production mechanism.")]),e._v(" "),a("p",[e._v('This is a way of getting the benefits of probabilistic finality (the ability to always produce new blocks) and provable finality (having a universal agreement on the canonical chain with no chance for reversion) in Polkadot. It also avoids the corresponding drawbacks of each mechanism (the chance of unknowingly following the wrong fork in probabilistic finality, and a chance for "stalling" - not being able to produce new blocks - in provable finality). By combining these two mechanisms, Polkadot allows for blocks to be rapidly produced, and the slower finality mechanism to run in a separate process to finalize blocks without risking slower transaction processing or stalling.')]),e._v(" "),a("p",[e._v("Hybrid consensus has been proposed in the past. Notably, it was proposed (now defunct) as a step in Ethereum's transition to proof of stake in "),a("a",{attrs:{href:"http://eips.ethereum.org/EIPS/eip-1011",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP 1011"),a("OutboundLink")],1),e._v(" which specified "),a("a",{attrs:{href:"#casper-ffg"}},[e._v("Casper FFG")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"babe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babe"}},[e._v("#")]),e._v(" BABE")]),e._v(" "),a("p",[e._v("BABE (Blind Assignment for Blockchain Extension) is the block production mechanism that runs between the validator nodes and determines the authors of new blocks. BABE is comparable as an algorithm to Ouroboros Praos, with some key differences in chain selection rule and slot time adjustments. BABE assigns block production slots to validators according to stake and using the Polkadot "),a("a",{attrs:{href:"learn-randomness"}},[e._v("randomness cycle")]),e._v(".")]),e._v(" "),a("p",[e._v("Validators in Polkadot will participate in a "),a("a",{attrs:{href:"learn-randomness"}},[e._v("lottery")]),e._v(" in every slot that will tell them whether or not they are the block producer candidate for that slot. Slots are discrete units of time, nominally 6 seconds in length. Because of this randomness mechanism, multiple validators could be candidates for the same slot. Other times, a slot could be empty, resulting in inconsistent block time.")]),e._v(" "),a("h4",{attrs:{id:"multiple-validators-per-slot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-validators-per-slot"}},[e._v("#")]),e._v(" Multiple Validators per Slot")]),e._v(" "),a("p",[e._v("When multiple validators are block producer candidates in a given slot, all will produce a block and broadcast it to the network. At that point, it's a race. The validator whose block reaches most of the network first wins. Depending on network topology and latency, both chains will continue to build in some capacity, until finalization kicks in and amputates a fork. See Fork Choice below for how that works.")]),e._v(" "),a("h4",{attrs:{id:"no-validators-in-slot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-validators-in-slot"}},[e._v("#")]),e._v(" No Validators in Slot")]),e._v(" "),a("p",[e._v("When no validators have rolled low enough in the randomness lottery to qualify for block production, a slot can remain seemingly blockless. We avoid this by running a secondary, round-robin style validator selection algorithm in the background. The validators selected to produce blocks through this algorithm always produce blocks, but these "),a("em",[e._v("secondary")]),e._v(" blocks are ignored if the same slot also produces a primary block from a "),a("a",{attrs:{href:"learn-randomness"}},[e._v("VRF-selected")]),e._v(" validator. Thus, a slot can have either a "),a("em",[e._v("primary")]),e._v(" or a "),a("em",[e._v("secondary")]),e._v(" block, and no slots are ever skipped.")]),e._v(" "),a("p",[e._v("For more details on BABE, please see the "),a("a",{attrs:{href:"https://research.web3.foundation/en/latest/polkadot/BABE/Babe.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("working research draft"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"grandpa-finality-gadget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grandpa-finality-gadget"}},[e._v("#")]),e._v(" GRANDPA: Finality gadget")]),e._v(" "),a("p",[e._v("GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement) is the finality gadget that is implemented for the Polkadot relay chain.")]),e._v(" "),a("p",[e._v("It works in a partially synchronous network model as long as 2/3 of nodes are honest and can cope with 1/5 Byzantine nodes in an asynchronous setting.")]),e._v(" "),a("p",[e._v("A notable distinction is that GRANDPA reaches agreements on chains rather than blocks, greatly speeding up the finalization process, even after long-term network partitioning or other networking failures.")]),e._v(" "),a("p",[e._v("In other words, as soon as more than 2/3 of validators attest to a chain containing a certain block, all blocks leading up to that one are finalized at once.")]),e._v(" "),a("h4",{attrs:{id:"protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protocol"}},[e._v("#")]),e._v(" Protocol")]),e._v(" "),a("p",[e._v("Please refer to heading 3 in "),a("a",{attrs:{href:"https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("the paper"),a("OutboundLink")],1),e._v(" for a full description of the protocol.")]),e._v(" "),a("h4",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/paritytech/substrate/blob/master/frame/grandpa/src/lib.rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rust implementation"),a("OutboundLink")],1),e._v(" is part of Substrate Frame.")]),e._v(" "),a("p",[e._v("For even more detail, see the "),a("a",{attrs:{href:"https://research.web3.foundation/en/latest/polkadot/GRANDPA.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GRANDPA research page"),a("OutboundLink")],1),e._v(" on the W3F Research pages.")]),e._v(" "),a("h3",{attrs:{id:"fork-choice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork-choice"}},[e._v("#")]),e._v(" Fork Choice")]),e._v(" "),a("p",[e._v("Bringing BABE and GRANDPA together, the fork choice of Polkadot becomes clear. BABE must always build on the chain that has been finalized by GRANDPA. When there are forks after the finalized head, BABE provides probabilistic finality by building on the chain with the most primary blocks.")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/best_chain.png",alt:"Best chain choice"}})]),e._v(" "),a("p",[e._v("In the above image, the black blocks are finalized. Ones are primary, twos are secondary blocks. Even though the topmost chain is the longest chain on the latest finalized block, it does not qualify because it has fewer primaries at the time of evaluation than the one below it.")]),e._v(" "),a("h2",{attrs:{id:"comparisons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comparisons"}},[e._v("#")]),e._v(" Comparisons")]),e._v(" "),a("h3",{attrs:{id:"nakamoto-consensus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nakamoto-consensus"}},[e._v("#")]),e._v(" Nakamoto consensus")]),e._v(" "),a("p",[e._v("Nakamoto consensus consists of the longest chain rule using proof of work as its sybil resistance mechanism and leader election.")]),e._v(" "),a("p",[e._v("Nakamoto consensus only gives us probabilistic finality. Probabilistic finality states that a block in the past is only as safe as the number of confirmations it has, or the number of blocks that have been built on top of it. As more blocks are built on top of a specific block in a Proof of Work chain, more computational work has been expended behind this particular chain. However, it does not guarantee that the chain containing the block will always remain the agreed-upon chain, since an actor with unlimited resources could potentially build a competing chain and expend enough computational resources to create a chain that did not contain a specific block. In such a situation, the longest chain rule employed in Bitcoin and other proof of work chains would move to this new chain as the canonical one.")]),e._v(" "),a("h3",{attrs:{id:"pbft-tendermint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pbft-tendermint"}},[e._v("#")]),e._v(" PBFT / Tendermint")]),e._v(" "),a("p",[e._v("Please see the "),a("a",{attrs:{href:"learn-comparisons-cosmos#consensus"}},[e._v("relevant section")]),e._v(" in the Cosmos comparison article.")]),e._v(" "),a("h3",{attrs:{id:"casper-ffg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#casper-ffg"}},[e._v("#")]),e._v(" Casper FFG")]),e._v(" "),a("p",[e._v("The two main differences between GRANDPA and Casper FFG (Friendly Finality Gadget) are:")]),e._v(" "),a("ul",[a("li",[e._v("in GRANDPA, different voters can cast votes simultaneously for blocks at different heights")]),e._v(" "),a("li",[e._v("GRANDPA only depends on finalized blocks to affect the fork-choice rule of the underlying block production mechanism")])]),e._v(" "),a("h3",{attrs:{id:"casper-cbc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#casper-cbc"}},[e._v("#")]),e._v(" Casper CBC")]),e._v(" "),a("p",[a("em",[e._v("Coming soon!")])]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("GRANDPA paper"),a("OutboundLink")],1),e._v(" - The academic description of the GRANDPA finality gadget. Contains formal proofs of the algorithm.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/paritytech/finality-grandpa",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rust implementation"),a("OutboundLink")],1),e._v(" - The reference implementation and the accompanying "),a("a",{attrs:{href:"https://github.com/paritytech/substrate/blob/master/frame/grandpa/src/lib.rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Substrate pallet"),a("OutboundLink")],1),e._v(".")])])])}),[],!1,null,null,null);t.default=n.exports}}]);