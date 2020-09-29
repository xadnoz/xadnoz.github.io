(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{411:function(e,t,a){"use strict";a.r(t);var r=a(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("The Polkadot relay chain will not support smart contracts natively. However, parachains on Polkadot\nwill support smart contracts. There are already announced projects such as\n"),a("a",{attrs:{href:"https://edgewa.re",target:"_blank",rel:"noopener noreferrer"}},[e._v("Edgeware"),a("OutboundLink")],1),e._v(", and thanks to the Substrate built-in\n"),a("a",{attrs:{href:"https://crates.parity.io/pallet_contracts/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("contract pallet"),a("OutboundLink")],1),e._v(", it is likely that more\nparachains will support this feature.")]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("p",[e._v("Here is the list of current resources available to developers who want to get started writing smart\ncontracts to deploy on parachains based on Substrate.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/paritytech/ink",target:"_blank",rel:"noopener noreferrer"}},[e._v("ink!"),a("OutboundLink")],1),e._v(" - Parity's ink to write smart contracts.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://substrate.dev/substrate-contracts-workshop/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Substrate Contracts Workshop"),a("OutboundLink")],1),e._v(" - Walks you\nthrough the basics of writing and deploying an ERC20 token using "),a("code",[e._v("ink!")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Collected below are some community examples of smart contracts in "),a("code",[e._v("ink!")]),e._v(". Are you working on a smart\ncontract example? Ask us to add it to this page!")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/JesseAbram/foRust/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ownable"),a("OutboundLink")],1),e._v(" - Port of the OpenZeppelin "),a("code",[e._v("Ownable")]),e._v(" contract.")])]),e._v(" "),a("h2",{attrs:{id:"what-is-the-difference-between-developing-a-smart-contract-versus-a-parachain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-difference-between-developing-a-smart-contract-versus-a-parachain"}},[e._v("#")]),e._v(" What is the difference between developing a smart contract versus a parachain?")]),e._v(" "),a("h3",{attrs:{id:"layer-of-abstraction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layer-of-abstraction"}},[e._v("#")]),e._v(" Layer of Abstraction")]),e._v(" "),a("p",[e._v("When you write a smart contract you are creating the instructions which will be deployed and\nassociated to a specific chain address.")]),e._v(" "),a("p",[e._v("In comparison, a runtime module is the entire logic of a chain's state transitions (what's called a\nstate transition function).")]),e._v(" "),a("p",[e._v("Smart contracts must consciously implement upgradeability while parachains will have the ability to\nswap out their code entirely through a root command or via the governance pallet.")]),e._v(" "),a("p",[e._v("When you build a smart contract, it will be eventually be deployed to a target chain with its own\nenvironment. Parachains allow the developer to declare the environment of their own chain, even\nallowing others to write smart contracts for it.")]),e._v(" "),a("h3",{attrs:{id:"gas-fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-fees"}},[e._v("#")]),e._v(" Gas Fees")]),e._v(" "),a("p",[e._v("Smart contracts must find a way to limit their own execution, or else full nodes are vulnerable to\nDOS attacks. An infinite loop in a smart contract, for example, could consume the computational\nresources of an entire chain, preventing others from using it. The\n"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Halting_problem",target:"_blank",rel:"noopener noreferrer"}},[e._v("halting problem"),a("OutboundLink")],1),e._v(' shows that with a powerful enough\nlanguage, it is impossible to know ahead of time whether or not a program will ever cease execution.\nSome platforms, such as Bitcoin, get around this constraint by providing a very restricted scripting\nlanguage. Others, such as Ethereum, "charge" the smart contract "gas" for the rights to execute\ntheir code. If a smart contract does get into a state where execution will never halt, it eventually\nruns out of gas, ceases execution, and any state transition that would have been made by the smart\ncontract is rolled back.')]),e._v(" "),a("p",[e._v("Parachains can implement arbitrarily powerful programming languages and also contain no notion of\ngas for their own native logic. This means that some functionality is easier to implement for the\ndeveloper, but it also means there are some constructs, such as a loop without a terminating\ncondition, which should "),a("em",[e._v("never")]),e._v(" be implemented. Leaving certain logic, such as complex loops which\ncould possibly run indefinitely, to a non-smart contract layer, or even trying to eliminate it\nentirely, will often be a wiser choice.")]),e._v(" "),a("h2",{attrs:{id:"resources-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources-2"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://stackoverflow.com/a/56041305",target:"_blank",rel:"noopener noreferrer"}},[e._v("When should I build a Substrate runtime versus a Substrate smart contract"),a("OutboundLink")],1),e._v(" -\nFrom a technical standpoint answers the question of when a developer might choose to develop a\nruntime versus a smart contract.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);