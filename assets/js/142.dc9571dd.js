(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{537:function(e,t,o){"use strict";o.r(t);var a=o(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v('Dfinity calls itself "the internet computer" and positions itself as a sister project to Ethereum. Dfinity has been in development since 2016, with a release called "Copper" supposed to have come out in 2017 but never seemed to have landed. In 2019, the world has yet to see the majority of Dfinity\'s closed source code for their client since they only publish helper libraries on '),o("a",{attrs:{href:"https://github.com/dfinity",target:"_blank",rel:"noopener noreferrer"}},[e._v("their GitHub"),o("OutboundLink")],1),e._v(". The closed source nature of development is in stark contrast to the development of Polkadot, which has developed its Rust reference implementation in "),o("a",{attrs:{href:"https://github.com/paritytech/polkadot",target:"_blank",rel:"noopener noreferrer"}},[e._v("the open on GitHub"),o("OutboundLink")],1),e._v(" from the start in 2017.")]),e._v(" "),o("h3",{attrs:{id:"algorithmic-governance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#algorithmic-governance"}},[e._v("#")]),e._v(" Algorithmic Governance")]),e._v(" "),o("p",[e._v("Dfinity is a strong proponent of algorithmic governance, having published "),o("a",{attrs:{href:"https://medium.com/dfinity/the-dfinity-blockchain-nervous-system-a5dd1783288e#.duzxztt9k",target:"_blank",rel:"noopener noreferrer"}},[e._v("two"),o("OutboundLink")],1),e._v(" "),o("a",{attrs:{href:"https://medium.com/dfinity/future-governance-integrating-traditional-ai-technology-into-the-blockchain-nervous-system-825ababf9d9",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog"),o("OutboundLink")],1),e._v(" posts explicitly on the topic.")]),e._v(" "),o("p",[e._v("Dfinitiy proposes a governance framework called the Blockchain Nervous System (BNS). However, they have not come forward with any definite algorithms or further information following the publishing of the two previous blog posts in 2018.")]),e._v(" "),o("p",[e._v('The BNS described in the blog posts is, compared to Polkadot\'s extensive governance mechanisms, a simplified reduction of the potential of on-chain governance. It only decides on chain forks through a "trust the expert" follow-the-heaviest-neuron approach.')]),e._v(" "),o("p",[e._v("Polkadot allows governance mechanisms to be much more fine-grained through mechanisms of conviction voting, a tri-cameral model of checks and balances, and the ability to follow chain upgrades seamlessly without needing to update client software.")]),e._v(" "),o("h3",{attrs:{id:"consensus"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consensus"}},[e._v("#")]),e._v(" Consensus")]),e._v(" "),o("p",[e._v("Dfinity uses a four-layered consensus consisting of an identity layer, a random beacon layer, a blockchain layer, and a notary layer.")]),e._v(" "),o("p",[e._v("The identity layer handles the Proof-of-Stake registration and anti-Sybil mechanism of the consensus protocol. In Polkadot, we would compare the identity layer to a subset of the function of NPoS, which handles the stake deposits and sybil resistance while also acting as the peer-set selection algorithm. It is expected that stake deposits on Dfinity will be a fixed size, so they do not implement a peer-set selection since it is inherent in their PoS; when an account makes a deposit they become a validator. Polkadot is more flexible and allows variable deposits and the ability to act as a nominator to participate in the staking system without needing to run validator infrastructure yourself.")]),e._v(" "),o("p",[e._v('The random beacon layer is used to construct a random number in Dfinity, which is the basis for the blockchain and notary layer. It employs a verifiable random function (VRF) that is based on BLS threshold signatures and requires a distributed key generation (DKG). The BLS threshold based VRF is able to solve the "last actor" problem in which the final participant in the protocol can abort by predicting the randomness and not publishing it. Although Polkadot also employs a VRF in its block production protocol BABE, it does not suffer from the "last actor" problem as it uses a different type of VRF that generates the randomness locally, but still allows global verification. The random beacon is then taken from the VRF outputs from two blocks prior, which can be proven to be secure.')]),e._v(" "),o("p",[e._v("The blockchain and fork resolution layer used in Dfinity is known as "),o("em",[e._v("probablistic slot protocol")]),e._v(" and uses the randomness from the random beacon to give priority to each proposer for a particular block. Within a constant block time, all proposals generated are sent to notaries which sign the block from the heaviest weighted proposal that they see and broadcast it. Forks are then decided based on the weight which was assigned to proposers in that round, with the heaviest proposer's block taking priority. Polkadot's BABE block production uses the random beacon from the previous VRF outputs to assign weights to producers too. The individual producers then create local randomness and if it beats a threshold as determined by their weight, that producer will produce a new block. BABE achieves constant block time by having a fallback to the Aura round robin style block assignment if for a particular slot no producer generated a random number that fell below their threshold. In BABE forks can happen if more than one producer pulls a correct \"lottery ticket\" random number, and in this case will rely on the chain selection rule which uses the last finalized chain from GRANDPA to build on.")]),e._v(" "),o("p",[e._v("Finally, in the notarization and "),o("em",[e._v("near-instant finality")]),e._v(" layer of Dfinity, the blocks which are produced in the previous layer are notarized by the committee of validators. The notarization is a timestamp and a proof that the block has been published to the network, which prevents a malicious validator from creating a private chain and revealing it later. The notarization mechanism aims to solve the selfish mining attack and the nothing at stake problem. The notarized blocks are then agreed on in a further finalization mechanism.")]),e._v(" "),o("p",[e._v("One should not pay too much heed to the term "),o("em",[e._v("near-instant finality")]),e._v(' because terms like this and "instant finality" are basically just marketing terms for Byzantine agreement protocols, and conceal the actual capability of the finality gadget. For example, the notarization and finality rounds of Dfinity consensus can be compared to the pre-commit and pre-vote rounds of standard BFT protocols. Although, since Dfinity has a two-step mechanism for producing and finalizing blocks (much like how Polkadot has with BABE and GRANDPA), the time-to-finality of both protocols should be comparable. GRANDPA has nice properties like coming to finality on entire chains of blocks instead of single blocks one at a time, which makes it an improvement to the finality mechanism outlined by Dfinity.')])])}),[],!1,null,null,null);t.default=n.exports}}]);