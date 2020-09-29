(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{535:function(a,t,e){"use strict";e.r(t);var o=e(42),s=Object(o.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"alexander"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alexander"}},[a._v("#")]),a._v(" Alexander")]),a._v(" "),e("p",[a._v("The fourth (now defunct) proof of concept (PoC-4) testnet for Polkadot.")]),a._v(" "),e("h2",{attrs:{id:"attestation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attestation"}},[a._v("#")]),a._v(" Attestation")]),a._v(" "),e("p",[a._v("In the Polkadot validity system, an "),e("em",[a._v("attestation")]),a._v(" is a type of message that validators broadcast\nthat says whether they think a parachain candidate block is valid or invalid.")]),a._v(" "),e("h2",{attrs:{id:"authority"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authority"}},[a._v("#")]),a._v(" Authority")]),a._v(" "),e("p",[a._v("An authority is a generic term for the role in a blockchain that is able to participate in the\nconsensus mechanisms. In GRANDPA, the authorities vote on chains they consider final. In BABE, the\nauthorities are block producers. Authority sets can be chosen be mechanisms such as Polkadot's NPoS\nalgorithm.")]),a._v(" "),e("h2",{attrs:{id:"babe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babe"}},[a._v("#")]),a._v(" BABE")]),a._v(" "),e("p",[a._v("_B_lind _A_ssignment of _B_lock _E_xtension is Polkadot's block production mechanism.")]),a._v(" "),e("h2",{attrs:{id:"block"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block"}},[a._v("#")]),a._v(" Block")]),a._v(" "),e("p",[a._v("A collection of data, such as transactions, that together indicates a state transition of the\nblockchain.")]),a._v(" "),e("h2",{attrs:{id:"block-explorer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-explorer"}},[a._v("#")]),a._v(" Block explorer")]),a._v(" "),e("p",[a._v("An application that allows a user to explore the different blocks on a blockchain.")]),a._v(" "),e("h2",{attrs:{id:"bls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bls"}},[a._v("#")]),a._v(" BLS")]),a._v(" "),e("p",[a._v("Boneh-Lynn-Shacham (BLS) signatures have slow signing, very slow verification, require slow and much\nless secure pairing friendly curves, and tend towards dangerous malleability. Yet, BLS permits a\ndiverse array of signature aggregation options far beyond any other known signature scheme, which\nmakes BLS a preferred scheme for voting in consensus algorithms and for threshold signatures.")]),a._v(" "),e("h2",{attrs:{id:"bonding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bonding"}},[a._v("#")]),a._v(" Bonding")]),a._v(" "),e("p",[a._v('A process by which tokens can be "frozen" in exchange for some other benefit. For example, staking\nis a form of bonding for which you receive rewards in exchange for securing the network. You can\nalso bond tokens in exchange for a parachain slot.')]),a._v(" "),e("h2",{attrs:{id:"bridge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bridge"}},[a._v("#")]),a._v(" Bridge")]),a._v(" "),e("p",[a._v("A parachain that acts as an intermediary between the Polkadot relay chain and an external chain, in\nsuch a way that it appears to the relay chain that the external chain is a parachain (i.e., meets\nthe Polkadot Host's requirements of parachains). Bridges allow for interaction between other\nblockchains, such as Ethereum and Bitcoin, that are not natively compatible with Polkadot.")]),a._v(" "),e("h2",{attrs:{id:"byzantine-fault-tolerance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#byzantine-fault-tolerance"}},[a._v("#")]),a._v(" Byzantine Fault Tolerance")]),a._v(" "),e("p",[a._v("The property of a system that is tolerant of Byzantine faults; that is, a system where not only may\nindividual subsystems fail, but it may not be clear if a particular subsystem has failed or not.\nThat is, different observers on the system may not agree on whether or not the system has failed.\nEnsuring Byzantine fault tolerance is an important part of developing any distributed system.")]),a._v(" "),e("h2",{attrs:{id:"collator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#collator"}},[a._v("#")]),a._v(" Collator")]),a._v(" "),e("p",[a._v("A node that maintains a parachain by collecting parachain transactions and producing state\ntransition proofs for the validators.")]),a._v(" "),e("h2",{attrs:{id:"consensus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consensus"}},[a._v("#")]),a._v(" Consensus")]),a._v(" "),e("p",[a._v("The process of a group of entities to agree on a particular data value (such as the ordering and\nmakeup of blocks on a blockchain). There are a variety of algorithms used for determining consensus.\nThe consensus algorithm used by Polkadot is GRANDPA.")]),a._v(" "),e("h2",{attrs:{id:"dapps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dapps"}},[a._v("#")]),a._v(" Dapps")]),a._v(" "),e("p",[a._v("A generic term for a decentralized application, that is, one that runs as part of a distributed\nnetwork as opposed to being run on a specific system or set of systems.")]),a._v(" "),e("h2",{attrs:{id:"dots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dots"}},[a._v("#")]),a._v(" DOTs")]),a._v(" "),e("p",[a._v('The native token for Polkadot. DOTs serve three purposes: network governance (allowing them to vote\non network upgrades and other exceptional events), general operation (rewarding good actors and\npunishing bad actors), and bonding (adding new parachains by "freezing" DOTs while they are\nconnected the relay chain).')]),a._v(" "),e("h2",{attrs:{id:"duty-roster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#duty-roster"}},[a._v("#")]),a._v(" Duty Roster")]),a._v(" "),e("p",[a._v("A lookup table that specifies the job that a particular validator is required to do (i.e. attest to\nthe validity of a specific paracahain). The duty roster routinely shuffles the validator set into\ndifferent subsets per parachain.")]),a._v(" "),e("h2",{attrs:{id:"epoch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#epoch"}},[a._v("#")]),a._v(" Epoch")]),a._v(" "),e("p",[a._v("An epoch is a time duration in the BABE protocol that is broken into smaller time slots. Each slot\nhas at least one slot leader who has the right to propose a block. In Kusama, it is the same\nduration as a "),e("a",{attrs:{href:"#session"}},[a._v("session")]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"era"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#era"}},[a._v("#")]),a._v(" Era")]),a._v(" "),e("p",[a._v("A (whole) number of sessions, which is the period that the validator set (and each validator's\nactive nominator set) is recalculated and where rewards are paid out.")]),a._v(" "),e("h2",{attrs:{id:"equivocation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#equivocation"}},[a._v("#")]),a._v(" Equivocation")]),a._v(" "),e("p",[a._v("Providing conflicting information to the network. BABE equivocation entails creating multiple blocks\nin the same slot. GRANDPA equivocation would consist of signing multiple conflicting chains.")]),a._v(" "),e("h2",{attrs:{id:"extrinsic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extrinsic"}},[a._v("#")]),a._v(" Extrinsic")]),a._v(" "),e("p",[a._v('State changes that come from the outside world, i.e. they are not part of the system itself.\nExtrinsics can take two forms, "'),e("a",{attrs:{href:"#inherent"}},[a._v("inherents")]),a._v('" and "'),e("a",{attrs:{href:"#transaction"}},[a._v("transactions")]),a._v('".')]),a._v(" "),e("h2",{attrs:{id:"finality"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finality"}},[a._v("#")]),a._v(" Finality")]),a._v(" "),e("p",[a._v('The property of a block that cannot be reverted. Generally, created blocks are not final until some\npoint in the future - perhaps never, in the case of "probabilistic finality". The Polkadot relay\nchain uses a deterministic finality gadget known as '),e("a",{attrs:{href:"#GRANDPA-consensus-algorithm"}},[a._v("GRANDPA")]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"finality-gadget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finality-gadget"}},[a._v("#")]),a._v(" Finality Gadget")]),a._v(" "),e("p",[a._v("A mechanism that determines finality.")]),a._v(" "),e("h2",{attrs:{id:"fisherman"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fisherman"}},[a._v("#")]),a._v(" Fisherman")]),a._v(" "),e("p",[a._v("Nodes that monitor the network for validators or collators who are behaving badly. Fishermen must\nstake a small amount of DOTs but can be rewarded greatly if they find bad behavior.")]),a._v(" "),e("h2",{attrs:{id:"frame"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frame"}},[a._v("#")]),a._v(" Frame")]),a._v(" "),e("p",[a._v("The collection of Substrate-provided pallets (Substrate Runtime Modules).")]),a._v(" "),e("h2",{attrs:{id:"genesis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#genesis"}},[a._v("#")]),a._v(" Genesis")]),a._v(" "),e("p",[a._v("The origin of a blockchain, also known as block 0. It can also be used to reference the initial\nstate of the blockchain at origination.")]),a._v(" "),e("blockquote",[e("p",[a._v('Example: "In the '),e("em",[a._v("genesis")]),a._v(' state Alice, Bob, and Charlie had 30 tokens each."')])]),a._v(" "),e("h2",{attrs:{id:"governance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#governance"}},[a._v("#")]),a._v(" Governance")]),a._v(" "),e("p",[a._v("The process of determining what changes to the network are permissible, such as modifications to\ncode or movement of funds. The governance system in Polkadot is on-chain and revolves around\nstakeholder voting.")]),a._v(" "),e("h2",{attrs:{id:"governance-council"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#governance-council"}},[a._v("#")]),a._v(" Governance Council")]),a._v(" "),e("p",[a._v('An on-chain entity that consists of several on-chain accounts (starting at 6, eventually moving to\nthe final value of 24). The Council can act as a representative for "passive" (non-voting)\nstakeholders. Council members have two main tasks: proposing referenda for the overall stakeholder\ngroup to vote on and cancelling malicious referenda.')]),a._v(" "),e("h2",{attrs:{id:"grandpa-finality-gadget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grandpa-finality-gadget"}},[a._v("#")]),a._v(" GRANDPA Finality Gadget")]),a._v(" "),e("p",[a._v("GHOST-based Recursive ANcestor Deriving Prefix Agreement. It is the finality gadget for Polkadot,\nwhich allows asynchronous, accountable, and safe finality to the blockchain. For an overview of\nGRANDPA, see this Medium post:\n"),e("a",{attrs:{href:"https://medium.com/polkadot-network/polkadot-proof-of-concept-3-a-better-consensus-algorithm-e81c380a2372",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://medium.com/polkadot-network/polkadot-proof-of-concept-3-a-better-consensus-algorithm-e81c380a2372"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"hard-fork"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hard-fork"}},[a._v("#")]),a._v(" Hard Fork")]),a._v(" "),e("p",[a._v("A permanent diversion of a blockchain that can occur quickly due to a high priority change in a\nconsensus rule. Clients who follow a hard fork always need to upgrade their clients in order to\ncontinue following the upgraded chain. Hard forks are considered permanent divergences of a chain\nfor which non-upgraded clients are following consensus rules incompatible to the ones followed by\nupgraded clients.")]),a._v(" "),e("h2",{attrs:{id:"hard-spoon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hard-spoon"}},[a._v("#")]),a._v(" Hard Spoon")]),a._v(" "),e("p",[a._v('Defined by Jae Kwon of Cosmos as "a new chain that takes into account state from an existing chain;\nnot to compete, but to provide broad access." A non-contentious blockchain that inherits the state\nof the underlying blockchain and creates a new branch of '),e("em",[a._v("the same blockchain")]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"inherent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inherent"}},[a._v("#")]),a._v(" Inherent")]),a._v(" "),e("p",[a._v('Extrinsics that are "inherently true." Inherents are not gossiped on the network and are put into\nblocks by the block author. They are not provably true the way that the desire to send funds is,\ntherefore they do not carry a signature. A blockchain\'s '),e("a",{attrs:{href:"#runtime"}},[a._v("runtime")]),a._v(" must have rules for\nvalidating inherents. For example, timestamps are inherents. They are validated by being within some\nmargin that each validator deems reasonable.")]),a._v(" "),e("h2",{attrs:{id:"ksm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ksm"}},[a._v("#")]),a._v(" KSM")]),a._v(" "),e("p",[a._v("The abbreviation for Kusama network tokens.")]),a._v(" "),e("h2",{attrs:{id:"kusama"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kusama"}},[a._v("#")]),a._v(" Kusama")]),a._v(" "),e("p",[a._v('The "canary network" for Polkadot. It consists of an early-release, unaudited version of the\nPolkadot software. It is not a testnet - after the transition to NPoS, the network is entirely in\nthe hands of the community (i.e., Kusama token holders).')]),a._v(" "),e("h2",{attrs:{id:"libp2p"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#libp2p"}},[a._v("#")]),a._v(" LIBP2P")]),a._v(" "),e("p",[a._v("An open-source library for encrypted peer-to-peer communications and other networking functionality.\nMore information at: "),e("a",{attrs:{href:"https://libp2p.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://libp2p.io/"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"liveness"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#liveness"}},[a._v("#")]),a._v(" Liveness")]),a._v(" "),e("p",[a._v("The property of a distributed system that it will eventually come to some sort of consensus. A\nsystem stuck in an infinite loop would not be considered live, even if computations are taking\nplace; a system that eventually provides a result, even if incorrect or it takes a long time, is\nconsidered to have liveness.")]),a._v(" "),e("h2",{attrs:{id:"message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[a._v("#")]),a._v(" Message")]),a._v(" "),e("p",[a._v("In Polkadot's XCMP protocol, a "),e("em",[a._v("message")]),a._v(" is arbitrary data that is sent from one parachain (the\negress chain) to another (the ingress chain) through a channel and ensured delivery by the vaidator\nset.")]),a._v(" "),e("h2",{attrs:{id:"message-queue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#message-queue"}},[a._v("#")]),a._v(" Message Queue")]),a._v(" "),e("p",[a._v("In Polkadot's XCMP protocol, a "),e("em",[a._v("message queue")]),a._v(" is the list of messages waiting to be process by a\nparticular receiving parachain over a channel.")]),a._v(" "),e("h2",{attrs:{id:"node-explorer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-explorer"}},[a._v("#")]),a._v(" Node Explorer")]),a._v(" "),e("p",[a._v("A tool that gives you information about a node, such as the latest blocks sealed, finalized, and the\ncurrent chain state as known by that node.")]),a._v(" "),e("h2",{attrs:{id:"nominated-proof-of-stake-npos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nominated-proof-of-stake-npos"}},[a._v("#")]),a._v(" Nominated Proof of Stake (NPoS)")]),a._v(" "),e("p",[a._v("A Proof-of-Stake system where nominators back validators with their own stake as a show of faith in\nthe good behavior of the validator. Nominated Proof-of-Stake differs from the more generic concept\nDelegated Proof-of-Stake in that nominators are subject to loss of stake if they nominate a bad\nvalidator; delegators are not subject to loss of stake based on the behavior of the validator. Note\nthat some other blockchain technologies may use the term Delegated Proof-of-Stake, even if\ndelegators can be slashed. Polkadot uses the Phragmen method to allocate stake to nominees.")]),a._v(" "),e("h2",{attrs:{id:"nominator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nominator"}},[a._v("#")]),a._v(" Nominator")]),a._v(" "),e("p",[a._v("Accounts that select a set of validators to nominate by bonding their tokens. Nominators receive\nsome of the validators' rewards, but are also liable for slashing if their nominated validators\nmisbehave.")]),a._v(" "),e("h2",{attrs:{id:"on-chain-governance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#on-chain-governance"}},[a._v("#")]),a._v(" On-chain Governance")]),a._v(" "),e("p",[a._v("A governance system of a blockchain that is controlled by mechanisms on the blockchain. On-chain\ngovernance allows decisions to be made in a transparent manner. Note that there are a variety of\ndifferent algorithms for making these decisions, such as simple majority voting, adaptive quorum\nbiasing, or identity-based quadratic voting.")]),a._v(" "),e("h2",{attrs:{id:"pallet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pallet"}},[a._v("#")]),a._v(" Pallet")]),a._v(" "),e("p",[a._v("A Substrate runtime module.")]),a._v(" "),e("h2",{attrs:{id:"parachain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parachain"}},[a._v("#")]),a._v(" Parachain")]),a._v(" "),e("p",[a._v('A blockchain that meets several characteristics that allow it work within the confines of the\nPolkadot Host. Also known as "parallelized chain."')]),a._v(" "),e("h2",{attrs:{id:"parachain-registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parachain-registry"}},[a._v("#")]),a._v(" Parachain Registry")]),a._v(" "),e("p",[a._v("A relatively simple database-like construct that holds both static and dynamic information on each\nchain.")]),a._v(" "),e("h2",{attrs:{id:"parity-technologies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parity-technologies"}},[a._v("#")]),a._v(" Parity Technologies")]),a._v(" "),e("p",[a._v("A company, founded by Dr. Gavin Wood, that is developing Substrate and Polkadot. It has also\nreleased several other projects including Parity Ethereum and Parity Secret Store.")]),a._v(" "),e("h2",{attrs:{id:"polkadot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#polkadot"}},[a._v("#")]),a._v(" Polkadot")]),a._v(" "),e("p",[a._v("A heterogeneous, multi-chain network allowing various blockchains of different characteristics to\nperform arbitrary, cross-chain communication under shared security.")]),a._v(" "),e("h2",{attrs:{id:"polkadot-host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-host"}},[a._v("#")]),a._v(" Polkadot Host")]),a._v(" "),e("p",[a._v("The environment in which a runtime module can be executed. Parachains must support the Polkadot\nHost - external chains that do not will have to use a bridge. Previously known as the Polkadot\nRuntime Environment or PRE.")]),a._v(" "),e("h2",{attrs:{id:"polkadot-runtime-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-runtime-environment"}},[a._v("#")]),a._v(" Polkadot Runtime Environment")]),a._v(" "),e("p",[a._v("The previous name for the "),e("a",{attrs:{href:"#polkadot-host"}},[a._v("Polkadot Host")]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"proof-of-stake-pos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proof-of-stake-pos"}},[a._v("#")]),a._v(" Proof of Stake (PoS)")]),a._v(" "),e("p",[a._v("A method of selecting participation in a consensus system, in which participants are chosen based on\nhow many tokens they have at stake (at risk of loss due to misbehavior). Normally, Proof-of-Stake\nsystems limit the number of participants.")]),a._v(" "),e("h2",{attrs:{id:"proof-of-validity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proof-of-validity"}},[a._v("#")]),a._v(" Proof of Validity")]),a._v(" "),e("p",[a._v("A proof produced by parachain collators. Based on this proof and the parachain registry, a validator\ncan verify that a parachain has properly executed its state transition function. Proofs of Validity\ngo into the relay chain blocks.")]),a._v(" "),e("h2",{attrs:{id:"proof-of-work-pow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proof-of-work-pow"}},[a._v("#")]),a._v(" Proof of Work (PoW)")]),a._v(" "),e("p",[a._v("A method of selecting participants in a consensus system, typically the longest chain rule, in which\nparticipants try to solve a puzzle like finding a partial pre-image of a hash. Normally, a\nProof-of-Work system can have any number of participants.")]),a._v(" "),e("h2",{attrs:{id:"proposal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[a._v("#")]),a._v(" Proposal")]),a._v(" "),e("p",[a._v("A potential function call to be voted on in a referendum. Proposals modify the behavior of the\nPolkadot network, from minor parameter tuning all the way up to replacing the runtime code.")]),a._v(" "),e("h2",{attrs:{id:"protocol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#protocol"}},[a._v("#")]),a._v(" Protocol")]),a._v(" "),e("p",[a._v("A system of rules that allows two or more entities of a communications system to transmit\ninformation. The protocol defines the rules, syntax, semantics and synchronization of communication\nand possible recovery methods.")]),a._v(" "),e("h2",{attrs:{id:"random-seed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#random-seed"}},[a._v("#")]),a._v(" Random Seed")]),a._v(" "),e("p",[a._v("A random seed is pseudo-random number available on-chain. It is used in various places of the\nPolkadot protocol, most prominently in "),e("a",{attrs:{href:"#babe"}},[a._v("BABE")]),a._v(" the block production mechanism.")]),a._v(" "),e("h2",{attrs:{id:"referendum"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#referendum"}},[a._v("#")]),a._v(" Referendum")]),a._v(" "),e("p",[a._v("A vote on whether or not a proposal should be accepted by the network. Referenda may be initiated by\nthe Governance Council, by a member of the public, or as the result of a previous proposal.\nStakeholders vote on referenda, weighted by both the size of their stake (i.e. number of DOTs held)\nand the amount of time they are willing to lock their tokens.")]),a._v(" "),e("h2",{attrs:{id:"relay-chain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#relay-chain"}},[a._v("#")]),a._v(" Relay chain")]),a._v(" "),e("p",[a._v("The chain that coordinates consensus and communication between parachains (and external chains, via\nbridges).")]),a._v(" "),e("h2",{attrs:{id:"runtime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runtime"}},[a._v("#")]),a._v(" Runtime")]),a._v(" "),e("p",[a._v("The state transition function of a blockchain. It defines a valid algorithm for determining the\nstate of the next block given the previous state.")]),a._v(" "),e("h2",{attrs:{id:"runtime-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runtime-module"}},[a._v("#")]),a._v(" Runtime Module")]),a._v(" "),e("p",[a._v('A module that implements specific transition functions and features one might want to have in their\nruntime. Each module should have domain-specific logic. For example, a Balances module has logic to\ndeal with accounts and balances. In Substrate, modules are called "pallets".')]),a._v(" "),e("h2",{attrs:{id:"safety"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#safety"}},[a._v("#")]),a._v(" Safety")]),a._v(" "),e("p",[a._v("The property of a distributed system indicating that a particular state transition will not be\nreverted. GRANDPA provides "),e("em",[a._v("deterministic")]),a._v(' safety. That is, for a state changed marked as "safe" or\n"final", one would require a hard fork to revert that change.')]),a._v(" "),e("h2",{attrs:{id:"sealing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sealing"}},[a._v("#")]),a._v(" Sealing")]),a._v(" "),e("p",[a._v("The process of adding a block to the relay chain. Note that finalization is a separate process -\nblocks are finalized some time after they are sealed.")]),a._v(" "),e("h2",{attrs:{id:"session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[a._v("#")]),a._v(" Session")]),a._v(" "),e("p",[a._v("A session is a Substrate implementation term for a period of time that has a constant set of\nvalidators. Validators can only join or exit the validator set at a session change.")]),a._v(" "),e("h2",{attrs:{id:"session-certificate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session-certificate"}},[a._v("#")]),a._v(" Session Certificate")]),a._v(" "),e("p",[a._v("A message containing a signature on the concatenation of all the Session keys. Signed by the\nController.")]),a._v(" "),e("h2",{attrs:{id:"session-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session-key"}},[a._v("#")]),a._v(" Session Key")]),a._v(" "),e("p",[a._v("Hot keys that are used for performing network operations by validators, for example signing GRANDPA\ncommit messages.")]),a._v(" "),e("h2",{attrs:{id:"shared-security"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shared-security"}},[a._v("#")]),a._v(" Shared Security")]),a._v(" "),e("p",[a._v("The security model that Polkadot uses whereby all chains are equally secured. This is acheived by\nplacing proofs of validity of parachain blocks into the relay chain such that, in order to revert\nfinality of a single parachain, an attacked would need to attack the entire Polkadot system.")]),a._v(" "),e("h2",{attrs:{id:"slashing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[a._v("#")]),a._v(" Slashing")]),a._v(" "),e("p",[a._v("The removal of a percentage of an account's DOTs as a punishment for a validator acting maliciously\nor incompetently (e.g., equivocating or remaining offline for an extended period of time).")]),a._v(" "),e("h2",{attrs:{id:"soft-fork"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#soft-fork"}},[a._v("#")]),a._v(" Soft Fork")]),a._v(" "),e("p",[a._v('A backwards compatible change to client code which causes upgraded clients to start mining a new\nchain. Requires a "vote-by-hashrate" of majority of miners in order to enact successfully. Soft\nforks are considered temporary divergences in a chain since non-upgraded clients do not follow the\nnew consensus rules but upgraded clients are still compatible with old consensus rules.')]),a._v(" "),e("h2",{attrs:{id:"staking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[a._v("#")]),a._v(" Staking")]),a._v(" "),e("p",[a._v('The act of bonding tokens (for Polkadot, DOTs) which are put up as "collateral" for a chance to\nproduce a valid block (and thus obtain a block reward). Validators and nominators stake their DOTs\nin order to secure the network.')]),a._v(" "),e("h2",{attrs:{id:"state-transition-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state-transition-function"}},[a._v("#")]),a._v(" State transition function")]),a._v(" "),e("p",[a._v("A function that describes how the state of a blockchain can be transformed. For example, it may\ndescribe how tokens can be transferred from one account to another.")]),a._v(" "),e("h2",{attrs:{id:"substrate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#substrate"}},[a._v("#")]),a._v(" Substrate")]),a._v(" "),e("p",[a._v("A modular framework for building blockchains. Polkadot is built using Substrate. Chains built with\nSubstrate will be easy to connect as parachains.")]),a._v(" "),e("h2",{attrs:{id:"tabling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tabling"}},[a._v("#")]),a._v(" Tabling")]),a._v(" "),e("p",[a._v('In Polkadot governance, bringing a proposal to a vote via referendum. Note that this is the British\nmeaning of "tabling", which is different than the US version, which means "to postpone" a measure.')]),a._v(" "),e("h2",{attrs:{id:"transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transaction"}},[a._v("#")]),a._v(" Transaction")]),a._v(" "),e("p",[a._v('An extrinsic that is signed. Transactions are gossiped on the network and incur a transaction fee.\nTransactions are "provably true", unlike inherents. For example, one can prove that Alice wants to\nsend funds to Bob by the fact that she signed a transfer-funds message with her private key.')]),a._v(" "),e("h2",{attrs:{id:"validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validator"}},[a._v("#")]),a._v(" Validator")]),a._v(" "),e("p",[a._v("A node that secures the relay chain by staking DOTs, validating proofs from collators on parachains\nand voting on consensus along with other validators.")]),a._v(" "),e("h2",{attrs:{id:"voting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#voting"}},[a._v("#")]),a._v(" Voting")]),a._v(" "),e("p",[a._v("The process of stakeholders determining whether or not a referendum should pass. Votes are weighted\nboth by the number of DOTs that the stakeholder account controls and the amount of time they are\nwilling to lock their DOTs.")]),a._v(" "),e("h2",{attrs:{id:"wallet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wallet"}},[a._v("#")]),a._v(" Wallet")]),a._v(" "),e("p",[a._v("A program that allows one to store private keys and sign transactions for Polkadot or other\nblockchain networks.")]),a._v(" "),e("h2",{attrs:{id:"wasm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wasm"}},[a._v("#")]),a._v(" Wasm")]),a._v(" "),e("p",[a._v("An instruction format for a virtual, stack-based machine. Polkadot Runtime Modules are compiled to\nWasm.")]),a._v(" "),e("h2",{attrs:{id:"watermark"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watermark"}},[a._v("#")]),a._v(" Watermark")]),a._v(" "),e("p",[a._v("In Polkadot's parachain messaging scheme, the "),e("em",[a._v("watermark")]),a._v(" is the minimum processed send-height of\nthe receiving parachain. All messages on all channels that are sending to this parachain at or\nbefore the watermark are guaranteed to be processed.")]),a._v(" "),e("h2",{attrs:{id:"web3-foundation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web3-foundation"}},[a._v("#")]),a._v(" Web3 Foundation")]),a._v(" "),e("p",[a._v("A Switzerland-based foundation that nurtures and stewards technologies and applications in the\nfields of decentralized web software protocols, particularly those that utilize modern cryptographic\nmethods to safeguard decentralization, to the benefit and for the stability of the Web3 ecosystem.")]),a._v(" "),e("h2",{attrs:{id:"webassembly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webassembly"}},[a._v("#")]),a._v(" WebAssembly")]),a._v(" "),e("p",[a._v("An instruction format for a virtual, stack-based machine. Polkadot Runtime Modules are compiled to\nWebAssembly. Also known as Wasm.")]),a._v(" "),e("h2",{attrs:{id:"witness"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#witness"}},[a._v("#")]),a._v(" Witness")]),a._v(" "),e("p",[a._v("Cryptographic proof statements of data validity.")])])}),[],!1,null,null,null);t.default=s.exports}}]);