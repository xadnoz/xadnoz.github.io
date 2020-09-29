(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{554:function(e,t,a){"use strict";a.r(t);var o=a(42),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Randomness in Proof of Stake blockchains is important for a fair and unpredictable distribution of validator responsibilities. Computers are bad at random numbers because they are deterministic devices (the same input always produces the same output). What people usually call random numbers on a computer, such as in a gaming application, are actually "),a("em",[e._v("pseudo-random")]),e._v(" - that is, they depend on a sufficiently random "),a("em",[e._v("seed")]),e._v(" provided by the user or another type of "),a("em",[e._v("oracle")]),e._v(", like a "),a("a",{attrs:{href:"https://www.random.org/randomness/",target:"_blank",rel:"noopener noreferrer"}},[e._v("weather station for atmospheric noise"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://mdpi.altmetric.com/details/47574324",target:"_blank",rel:"noopener noreferrer"}},[e._v("your heart rate"),a("OutboundLink")],1),e._v(", or even "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Lavarand",target:"_blank",rel:"noopener noreferrer"}},[e._v("lava lamps"),a("OutboundLink")],1),e._v(", from which it can generate a series of seemingly-random numbers. But given the same seed, the same sequence will always be generated.")]),e._v(" "),a("p",[e._v("These inputs will vary based on time and space, however, and it would be impossible to get the same result into all the nodes of a particular blockchain around the world. If nodes get different inputs on which to build blocks, forks happen. Obviously, real-world entropy is not suitable for use as a seed for blockchain randomness.")]),e._v(" "),a("p",[e._v("There are two main approaches to blockchain randomness in production today: RANDAO and VRF. Polkadot uses VRF.")]),e._v(" "),a("h2",{attrs:{id:"vrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vrf"}},[e._v("#")]),e._v(" VRF")]),e._v(" "),a("p",[e._v("A verifiable random function is a mathematical operation that takes some input and produces a random number along with a proof of authenticity that this random number was generated by the submitter. The proof can be verified by any challenger to ensure the random number generation is valid.")]),e._v(" "),a("p",[e._v("The VRF used in Polkadot is roughly the same as the one used in Ouroboros Praos. Ouroboros randomness is secure for block production and works well for BABE. Where they differ is that Polkadot's VRF does not depend on a central clock (the problem becomes - whose central clock?), rather, it depends on its own past results to determine present and future results, and it uses slot numbers as a clock emulator, estimating time.")]),e._v(" "),a("p",[e._v("Here's how it works in detail:")]),e._v(" "),a("p",[e._v("Slots are discrete units of time six seconds in length. Each slot can contain a block, but may not. Slots make up epochs - on Kusama, 2400 slots make one epoch, which makes epochs four hours long.")]),e._v(" "),a("p",[e._v('In every slot, each validator "rolls a die". They execute a function (the VRF) which takes as input the following:')]),e._v(" "),a("ul",[a("li",[a("strong",[e._v('The "secret key"')]),e._v(", a key specifically made for these die rolls and which gets regenerated in every new slot.")]),e._v(" "),a("li",[a("strong",[e._v("The hash of VRF values from the blocks in the epoch before last (N-2)")]),e._v(", so past randomness has an effect on the current pending randomness (N).")]),e._v(" "),a("li",[a("strong",[e._v("The slot number.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/VRF_babe.png",alt:""}})]),e._v(" "),a("p",[e._v("The output is two values: a "),a("code",[e._v("RESULT")]),e._v(" (the random value) and a "),a("code",[e._v("PROOF")]),e._v(" (a proof that the random value was generated correctly).")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("RESULT")]),e._v(" is then compared to a "),a("em",[e._v("threshold")]),e._v(" defined in the implementation of the protocol (specifically, in the Polkadot Host). If the value is less than the threshold, then the validator who rolled this number is a viable block production candidate for that slot. The validator then attempts to create a block and submits this block into the network along with the previously obtained "),a("code",[e._v("PROOF")]),e._v(" and "),a("code",[e._v("RESULT")]),e._v(".")]),e._v(" "),a("p",[e._v("The fishermen - nodes watching the network for collator and validator wrongdoing - will be verifying relay chain blocks. Since an illegal roll will generate an illegal block, and since fishermen will have access to the "),a("code",[e._v("RESULT")]),e._v(" and "),a("code",[e._v("PROOF")]),e._v(" in every block produced by a validator, it'll be easy for them to automatically report cheating validators.")]),e._v(" "),a("p",[e._v("To summarize: under VRF, every validator rolls a number for themselves, checks it against a threshold, and produces a block if the random roll is under that threshold. Fishermen who observe the network and report bad behavior verify the validity of these rolls post hoc, reporting any cheaters to the system (e.g. someone pretends to be a block producer despite rolling a number over the threshold).")]),e._v(" "),a("p",[e._v("The astute reader will notice that due to the way this works, some slots may have no validators as block producer candidates because all validator candidates rolled too high and missed the threshold. We clarify how we resolve this issue and make sure that Polkadot block times remain near constant-time in the "),a("a",{attrs:{href:"learn-consensus"}},[e._v("wiki page on consensus")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"randao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#randao"}},[e._v("#")]),e._v(" RANDAO")]),e._v(" "),a("p",[e._v("An alternative method for getting randomness on chain is the "),a("a",{attrs:{href:"https://github.com/randao/randao",target:"_blank",rel:"noopener noreferrer"}},[e._v("RANDAO"),a("OutboundLink")],1),e._v(" method from Ethereum. RANDAO requires each validator to prepare by performing many thousands of hashes on some seed. Validators then publish the final hash during a round and the random number is derived from every participant's entry into the game. As long as one honest validator participates, the randomness is considered secure (non-economically viable to attack).")]),e._v(" "),a("p",[e._v("RANDAO is optionally augmented with VDF.")]),e._v(" "),a("h3",{attrs:{id:"vdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vdfs"}},[e._v("#")]),e._v(" VDFs")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://vdfresearch.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Verifiable Delay Functions"),a("OutboundLink")],1),e._v(" are computations which take a prescribed duration of time to complete, even on parallel computers. They produce unique output which can be independently and efficiently verified in a public setting. By feeding the result of RANDAO into a VDF, a delay is introduced which renders any attacker's attempt at influencing the current randomness obsolete.")]),e._v(" "),a("p",[e._v("VDFs will likely be implemented through ASIC devices which need to be run separately from the other types of nodes. Although only one is enough to keep the system secure, and they will be open source and distributed at nearly no charge, running them is neither cheap nor incentivized, producing unneccessary friction for users of the blockchains opting for this method.")]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://research.web3.foundation/en/latest/polkadot/BABE/Babe.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot's research on blockchain randomness and sortition"),a("OutboundLink")],1),e._v(" - contains reasoning for choices made along with proofs")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/paritytech/ink/issues/57",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discussion on Randomness used in Polkadot"),a("OutboundLink")],1),e._v(" - W3F researchers discuss the randomness in Polkadot and when it is usable and under which assumptions.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);