(window.webpackJsonp=window.webpackJsonp||[]).push([[578],{400:function(t,e,a){"use strict";a.r(e);var o=a(42),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("em",[t._v("This article is the up-to-date version of the blog post: "),a("a",{attrs:{href:"https://medium.com/polkadot-network/everything-you-need-to-know-to-prepare-for-polkadot-32d08b929735",target:"_blank",rel:"noopener noreferrer"}},[t._v("Everything you Need to Know to Prepare for Polkadot"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("Polkadot is a blockchain protocol with two goals: providing "),a("strong",[t._v("shared security")]),t._v(" among all connected parachains and allowing all connected chains to "),a("strong",[t._v("interoperate")]),t._v(" by using "),a("a",{attrs:{href:"learn-crosschain"}},[t._v("XCMP")]),t._v(". With the advent of "),a("a",{attrs:{href:"build-pdk"}},[t._v("PDKs")]),t._v(" like Parity Substrate and Cumulus, the time it takes to develop and launch a new chain has dropped significantly. Whereas before it would take years to launch a new chain, now it may only take weeks or even days.")]),t._v(" "),a("p",[t._v("This guide will walk you through the steps you can take today to get started building your vision with Polkadot. It will explain the difference between a parachain and a smart contract (and why one may be better suited for your application over the other). It will lay out the resources that are available now and the ones that are coming soon so that you can get started creating your application in anticipation of the Polkadot mainnet launch later this year.")]),t._v(" "),a("h2",{attrs:{id:"where-are-we-now"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-are-we-now"}},[t._v("#")]),t._v(" Where are we now?")]),t._v(" "),a("ul",[a("li",[t._v("Polkadot release: "),a("strong",[t._v("Early 2020")])]),t._v(" "),a("li",[t._v("Canary release: "),a("strong",[t._v("Kusama")])]),t._v(" "),a("li",[t._v("Current testnet: "),a("strong",[t._v("Westend")])]),t._v(" "),a("li",[t._v("Substrate: "),a("strong",[t._v("2.0.0")])]),t._v(" "),a("li",[t._v("Cumulus: "),a("strong",[t._v("In development")]),t._v(" ("),a("a",{attrs:{href:"https://github.com/paritytech/cumulus",target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo Available"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("ink!: "),a("strong",[t._v("In development")]),t._v(" ("),a("a",{attrs:{href:"https://www.substrate.io/kb/smart-contracts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Documentation"),a("OutboundLink")],1),t._v(")")])]),t._v(" "),a("h2",{attrs:{id:"what-you-need-to-know"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-you-need-to-know"}},[t._v("#")]),t._v(" What you need to know")]),t._v(" "),a("p",[t._v("Polkadot is currently on the v0.7 release with a testnet called Westend and a value-bearing canary network called Kusama. Polkadot is being built with "),a("a",{attrs:{href:"learn-implementations"}},[t._v("implementations in various programming languages")]),t._v(" ranging from Rust to JavaScript. Currently the leading implementation is built in Rust and built on the Substrate framework. Substrate is a library that allows developers to develop entire blockchain applications with ease by bundling together a networking protocol, consensus, and Wasm interpreter. Cumulus, an extension to Substrate, will allow any Substrate built chain to connect to Polkadot and become a parachain. Substrate is currently nearing its official 2.0.0 tagged release that will solidify its API.")]),t._v(" "),a("p",[t._v("Polkadot does not natively support smart contracts, however there will be parachains that do. Substrate chains can include smart contract functionality by using the "),a("a",{attrs:{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Contracts"),a("OutboundLink")],1),t._v(" pallet for Wasm contracts or the "),a("a",{attrs:{href:"https://github.com/paritytech/substrate/tree/master/frame/evm",target:"_blank",rel:"noopener noreferrer"}},[t._v("EVM"),a("OutboundLink")],1),t._v(" pallet in FRAME. The contracts pallet enables a chain to use Wasm-compiled contracts that can be deployed permissionlessly by users or with specific rules dependent on the chain. To facilitate development of Wasm smart contracts, Parity is also developing "),a("a",{attrs:{href:"https://github.com/paritytech/ink",target:"_blank",rel:"noopener noreferrer"}},[t._v("ink!"),a("OutboundLink")],1),t._v(", a domain specific language built in Rust for writing smart contracts.")]),t._v(" "),a("p",[t._v("Polkadot is planned to go live with an initial release early in 2020, depending on security audits and launch provisions outside of control of the team. Now that the tools have started to appear and stabilize, there has not been a better time to get your feet wet and start preparing for launch. But wait! Before you jump head-first into the code, you should think about the kind of decentralized application you want to make and understand the different paradigms available to developers who want to build on Polkadot.")]),t._v(" "),a("h2",{attrs:{id:"what-is-the-difference-between-building-a-parachain-a-parathread-or-a-smart-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-difference-between-building-a-parachain-a-parathread-or-a-smart-contract"}},[t._v("#")]),t._v(" What is the difference between building a parachain, a parathread, or a smart contract?")]),t._v(" "),a("p",[t._v("Polkadot provides a few ways for you to deploy your application: as a smart contract on an existing parachain, as your own parachain, or as a parathread. There are trade-offs when working with each of these and reading this section will help you understand them.")]),t._v(" "),a("p",[t._v("Parachains are individual chains containing their own runtime logic that benefit from the shared security and the cross-chain messaging provided by the Polkadot relay chain. Parachains permit a high degree of flexibility and customization but will require more effort to create and maintain.")]),t._v(" "),a("p",[t._v("Parathreads are like parachains and enable the developer to have lower-level control of the logic of their application. The main difference between the two is economic, since parathreads will be much less expensive to secure than a parachain. The lower costs of parathreads are due to the fact that parathreads will only produce a block when they need to, unlike parachains which have secured a slot to produce a block at every block of the relay chain. When building a parathread, you will use the same tools (like PDKs) and you get all of the benefits of building a parachain, without the drawback of the cost.")]),t._v(" "),a("p",[t._v("On the Polkadot mainnet, there will be parachains that act as smart contract platforms. Smart contracts are executable programs that exist on only a single chain and are limited in complexity. Because they exist on a single chain, they can have smooth interoperability with other smart contracts on the same chain. However, they will always be constrained and limited by the inherent characteristics of their host chain.")]),t._v(" "),a("p",[t._v("If there is a need to have a large amount of control over the design and features of your application, a parachain is a better choice. Keep in mind, smart contracts can be used as a testing ground before later being turned into full-fledged parachains. Smart contract platforms will usually have more convenient tooling like IDEs to facilitate quick iterations. A smart contract MVP could be created to gauge user interest before putting in the work to build out a parachain.")]),t._v(" "),a("p",[t._v("Parachains grant the creators more space to build the monetary system and other aspects of the chain from the ground up. They will allow for more succinct and efficient execution of complex logic than could ever be offered by a smart contract platform. Parachains also offer more flexibility in the form of governance and can perform complete upgrades in a less controversial way than the current process of hard-forks.")]),t._v(" "),a("p",[t._v("Some examples of features you can have on a parachain or parathread:")]),t._v(" "),a("ul",[a("li",[t._v("Custom fee structure (for example, pay a flat fee for transactions or pay per byte).")]),t._v(" "),a("li",[t._v("Custom monetary policy for the native token and local economy.")]),t._v(" "),a("li",[t._v("Treasury to be funded through transitions in your state function.")]),t._v(" "),a("li",[t._v("A governance mechanism that could manage a DAO that is responsible for allocating your on-chain treasury.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"assets/build-1.png",alt:"build 1"}})]),t._v(" "),a("p",[t._v("Parachains open possibilities to construct complex runtime logic that would be too expensive to execute with smart contracts. However, unlike smart contracts, parachains lack a mandatory gas metering system entirely and could potentially be vulnerable to bugs that cause infinite loops (something that is prevented by design in smart contracts).")]),t._v(" "),a("p",[t._v("You may also decide to harness a combination of parachain, parathread, and smart contract. If you have certain logic that requires loops and it cannot be removed, use the native parachain runtime to handle all complex logic and the smart contract to call iteration. If you require off-chain data from an oracle, you may want to use a parathread as an oracle feed that only triggers once every 24 hours (this makes the most sense if the data is useful to other players in the Polkadot ecosystem too).")]),t._v(" "),a("p",[t._v("Most likely you’ve already realized that your application is better suited to be one or the other (or a hybrid of them both), but if you need a quick recap to digest the information, you can use this comparison chart as a cheat sheet:")]),t._v(" "),a("p",[a("img",{attrs:{src:"assets/build-2.png",alt:"build 2"}})]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note:")]),t._v(" The image above does not include parathreads, but as we mentioned before all the benefits of parachains apply just as well to parathreads. Parathreads, however, "),a("em",[t._v("are")]),t._v(' cheaper to deploy and maintain. So if they had a column on the table above, it would look like the parachain column with "Ease of deployment" and "Maintenance overhead" changed to '),a("code",[t._v("+")]),t._v(".")])]),t._v(" "),a("p",[t._v("This guide now splits into two sections depending on whether you’ve decided on a smart contract or a parachain to build your application. Feel free to read both sections, or just the one that is applicable to you.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#so-you-want-to-build-a-parachain-or-parathread"}},[t._v("I want to build a parachain or parathread!")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#so-you-want-to-build-a-smart-contract"}},[t._v("I want to build a smart contract!")])])]),t._v(" "),a("h2",{attrs:{id:"so-you-want-to-build-a-parachain-or-parathread"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#so-you-want-to-build-a-parachain-or-parathread"}},[t._v("#")]),t._v(" So you want to build a parachain or parathread...")]),t._v(" "),a("p",[t._v("Now that you have determined that building a parachain or parathread is the right approach for your new project, the next step is to decide which framework to use. Frameworks for building a parachain or parathread are known as parachain development kits (PDKs). Currently, the only PDK available is Substrate and Cumulus from Parity Technologies.")]),t._v(" "),a("p",[t._v("In the future, there will be many different PDKs available in different programming languages, just like there are multiple "),a("RouterLink",{attrs:{to:"/polkadot-wiki/website/translated_docs/ko/learn-implementations.html"}},[t._v("implementations")]),t._v(" of the Polkadot Host.")],1),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Call to Action:")]),t._v(" Do you want to build a Parachain Development Kit from scratch? The Web3 Foundation is giving grants to teams who are doing this, learn more and apply on the "),a("a",{attrs:{href:"https://grants.web3.foundation",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3F grants page"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"get-started-with-substrate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-started-with-substrate"}},[t._v("#")]),t._v(" Get started with Substrate")]),t._v(" "),a("p",[t._v("Substrate is the underlying framework on which Polkadot itself is built. It is a toolset for blockchain innovators that provides the necessary building blocks for constructing a chain. It includes a library of modular plug-ins from which you can compose your chain logic and allows you to write your own pallets to use or publish to the community.")]),t._v(" "),a("p",[t._v("The best way to get started with Substrate is to explore the "),a("a",{attrs:{href:"https://www.substrate.io/kb/learn-substrate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Substrate Knowledge Base"),a("OutboundLink")],1),t._v(", an online resource built and maintained by Parity Technologies.")]),t._v(" "),a("p",[t._v("We recommend that you poke around in there to become familiar with the common patterns. Once you have a solid understanding, you can challenge yourself by progressing through the Substratekitties workshop then advancing to the TCR Dappchain tutorial or one of the others.")]),t._v(" "),a("h3",{attrs:{id:"how-to-set-up-your-parachain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-up-your-parachain"}},[t._v("#")]),t._v(" How to set up your parachain")]),t._v(" "),a("p",[t._v("After creating your chain logic with Substrate, you will be able to compile it down to a Wasm executable. This Wasm code blob will contain the entire state transition function of your chain, and is what you will need to deploy your project to Polkadot as either a parachain or parathread.")]),t._v(" "),a("p",[t._v("Validators on Polkadot will use the submitted Wasm code to validate the state transitions of your chain or thread, but doing this requires some additional infrastructure. A validator needs some way to stay up to date with the most recent state transitions, since Polkadot nodes will not be required to also be nodes of your chain.")]),t._v(" "),a("p",[t._v("This is where the collator node comes into play. A collator is a maintainer of your parachain and performs the critical action of producing new block candidates for your chain and passing them to Polkadot validators for inclusion in the Relaychain.")]),t._v(" "),a("p",[t._v("Substrate comes with its own networking layer built-in but unfortunately only supports solo chains (that is, chains which do not connect to the relay chain). However, there is the Cumulus extension which does include a collator node and allows for your Substrate-built logic to be compatible with Polkadot as either a parachain or parathread.")]),t._v(" "),a("h4",{attrs:{id:"cumulus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cumulus"}},[t._v("#")]),t._v(" Cumulus")]),t._v(" "),a("p",[t._v("The goal of "),a("a",{attrs:{href:"build-cumulus"}},[t._v("Cumulus")]),t._v(" is to be an extension of Substrate that will make any Substrate runtime compatible with Polkadot.")]),t._v(" "),a("p",[t._v("It handles the network compatibility overhead that any parachain would need to implement to be connected to Polkadot. This includes:")]),t._v(" "),a("ul",[a("li",[t._v("Cross-chain message passing.")]),t._v(" "),a("li",[t._v("Out-of-the-box Collator node setup.")]),t._v(" "),a("li",[t._v("An embedded light client of the relay chain.")]),t._v(" "),a("li",[t._v("Polkadot block authorship compatibility.")]),t._v(" "),a("li",[t._v("Integrating Cumulus with your Substrate chain will port it into a parachain capable of working on Polkadot with minimal modification, possibly as little work as importing a crate and adding a single line.")])]),t._v(" "),a("p",[t._v("Rob Habermeier, a co-founder of Polkadot, last year gave a talk at EthCC that introduced Cumulus, which you can watch below.\n"),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/thgtXq5YMOo",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",mark:"crwd-mark"}}),t._v(" "),a("iframe",{attrs:{width:"560",height:"315"}})]),t._v(" "),a("h3",{attrs:{id:"how-to-deploy-your-parachain-or-parathread-in-polkadot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-deploy-your-parachain-or-parathread-in-polkadot"}},[t._v("#")]),t._v(" How to deploy your parachain or parathread in Polkadot")]),t._v(" "),a("h4",{attrs:{id:"parachain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parachain"}},[t._v("#")]),t._v(" Parachain")]),t._v(" "),a("p",[t._v("In order to include your parachain into the Polkadot network, you will need to acquire a parachain slot.")]),t._v(" "),a("p",[t._v("Parachain slots will be sold in open auctions, the mechanics of which can be found on the "),a("a",{attrs:{href:"learn-auction"}},[t._v("parachain auction")]),t._v(" page of the wiki.")]),t._v(" "),a("h4",{attrs:{id:"parathread"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parathread"}},[t._v("#")]),t._v(" Parathread")]),t._v(" "),a("p",[t._v("Parathreads will not require a parachain slot, so you will not need to engage in the candle auction mechanism. Instead, you will be able to register your parathread code to the Relaychain for a fee and from then be able to start participating in the per-block auctions for inclusion of your state transition into the Relaychain.")]),t._v(" "),a("p",[t._v("For more information on how parathread per-block auctions work, see the more detailed "),a("a",{attrs:{href:"learn-parathreads"}},[t._v("parathread")]),t._v(" page.")]),t._v(" "),a("h2",{attrs:{id:"so-you-want-to-build-a-smart-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#so-you-want-to-build-a-smart-contract"}},[t._v("#")]),t._v(" So you want to build a smart contract...")]),t._v(" "),a("p",[t._v("The Polkadot relay chain itself will not support smart contracts. However, since the parachains that connect to Polkadot can support arbitrary state transitions, they can support smart contracts. Builders of smart contracts can use these options when they become available. Today, it's possible to start development using a local development chain and later deploy to a live environment when the technology matures.")]),t._v(" "),a("p",[t._v("Substrate supports smart contracts out-of-the-box in two ways. One way is using the provided "),a("a",{attrs:{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Contracts"),a("OutboundLink")],1),t._v(" pallet in the FRAME library. The second way is using the Substrate "),a("a",{attrs:{href:"https://github.com/paritytech/substrate/tree/master/frame/evm",target:"_blank",rel:"noopener noreferrer"}},[t._v("EVM pallet"),a("OutboundLink")],1),t._v(" to deploy EVM-based bytecode compiled from Solidity or Vyper and using tools available from the Ethereum stack.")]),t._v(" "),a("p",[t._v("The experience of deploying to an EVM-based chain may be more familiar to developers that have written smart contract before. However, the Contracts pallet makes some notable improvements to the design of the EVM. Namely these are:")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("Wasm")]),t._v(". The Contracts pallet uses WebAssembly as its compilation target. Any language that compiles to Wasm can potentially be used to write smart contracts. Although it's better to have a dedicated domain-specific-language and for that reason Parity offers the "),a("a",{attrs:{href:"#ink"}},[t._v("ink!")]),t._v(" language.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Rent")]),t._v(". Contracts must pay rent or else hold a deposit suitably large enough in order to justify its existence on-chain. When a contract does not uphold this, it may create what's called a "),a("em",[t._v("tombstone")]),t._v(" which is a reference to the contract. In some conditions, the contract will be deleted outright along with its storage if it does not maintain these requirements.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Caching")]),t._v(". Contracts are cached by default and therefore means they only need to be deployed once, and afterward be instantiated as many times as you want. This helps to keep the storage load on the chain down to the minimum. On top of this, when a contract is no longer being used and the "),a("em",[t._v("existential deposit")]),t._v(" is drained, the code will be erased from storage (known as reaping).")])])]),t._v(" "),a("p",[t._v("You will likely want to set up a local test environment to start writing your smart contracts. This can be done using a Substrate node with one of the two smart contracts pallets including. After development you will want to look into projects such as [Edgware])(#edgeware) for deploying your smart contract to a live environment.")]),t._v(" "),a("h3",{attrs:{id:"edgeware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edgeware"}},[t._v("#")]),t._v(" Edgeware")]),t._v(" "),a("p",[t._v("One project that is live today with the smart contracts pallet is "),a("a",{attrs:{href:"https://edgewa.re",target:"_blank",rel:"noopener noreferrer"}},[t._v("Edgeware"),a("OutboundLink")],1),t._v(". Edgeware is a permissionless platform for smart contracts and is conducting experiments with on-chain governance. It is currently the best option for developers who have created their smart contracts and want to deploy to a live environment.")]),t._v(" "),a("p",[t._v("Edgeware intends to at some point connect to Polkadot as a parachain that allows for smart contracts. At this point, the smart contracts would be able to interact with other pieces of the Polkadot ecosystem through "),a("a",{attrs:{href:"learn-crosschain"}},[t._v("XCMP")]),t._v(".")]),t._v(" "),a("p",[t._v("Edgeware documentation can be found "),a("a",{attrs:{href:"https://docs.edgewa.re/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"ink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ink"}},[t._v("#")]),t._v(" Ink")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/paritytech/ink",target:"_blank",rel:"noopener noreferrer"}},[t._v("ink!"),a("OutboundLink")],1),t._v(" is a domain specific language for writing smart contracts in Rust and compiles to Wasm code. As it states in its README, it is still in an experimental phase so brave developers should be aware that they might have a bumpy - but workable - development experience. There are some projects which have built projects in ink! with a decent level of complexity such as Plasm's "),a("a",{attrs:{href:"https://github.com/staketechnologies/Plasm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Plasma contracts"),a("OutboundLink")],1),t._v(", so it is mature enough to start building interesting things.")]),t._v(" "),a("p",[t._v("For interested developers, they can get started writing smart contracts using ink! by studying the "),a("a",{attrs:{href:"https://github.com/paritytech/ink/tree/master/examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples"),a("OutboundLink")],1),t._v(" that were already written. These can be used as guideposts to writing more complex logic which will be deployable on smart contract parachains.")]),t._v(" "),a("p",[t._v("ink! has laid much of the groundwork for a new smart contract stack that is based on a Wasm virtual machine and compatible with Substrate chains.")]),t._v(" "),a("h2",{attrs:{id:"deploying-your-smart-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-your-smart-contract"}},[t._v("#")]),t._v(" Deploying your smart contract")]),t._v(" "),a("p",[t._v("A smart contract is simply some code that exists at an address on a chain and is callable by external actors. The key part is that you actually have to put the code on chain before anyone can start executing it!")]),t._v(" "),a("p",[t._v("Deploying your smart contract on chain will vary slightly for whichever specific parachain you will use, but generally you will send a special transaction that will create the smart contract on the ledger. You will likely need to pay an associated fee for the initialization logic and any storage that your contract consumes.")]),t._v(" "),a("h2",{attrs:{id:"paying-for-your-smart-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paying-for-your-smart-contract"}},[t._v("#")]),t._v(" Paying for your smart contract")]),t._v(" "),a("p",[t._v("Each platform will have a different way of paying for and maintaining the state of your smart contract.")]),t._v(" "),a("p",[t._v("The different patterns you may see for paying for your smart contract include:")]),t._v(" "),a("ul",[a("li",[t._v("A transaction fee associated with deploying each transaction.")]),t._v(" "),a("li",[t._v("A subscription model in which you pay some chain entity routinely for usage of the platform.")]),t._v(" "),a("li",[t._v("An access token model for which you need to hold a threshold of native tokens to use the platform (EOS has something similar). Storage rent.")]),t._v(" "),a("li",[t._v("Free trial or developer promotion.")]),t._v(" "),a("li",[t._v("Most smart contract platforms use some form of gas to limit the number of operations a user can perform. Users will be required to pay for the gas upfront and will be refunded for what they don’t use.")])]),t._v(" "),a("p",[t._v("You will need to consider the storage and complexity of your smart contract to ensure that gas usage stays within reasonable bounds. Storage will likely be expensive for whichever smart contract platform you use, so it is necessary to keep as much data off-chain as possible. You may consider using "),a("a",{attrs:{href:"https://ipfs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPFS"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://storj.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Storj"),a("OutboundLink")],1),t._v(" to keep the data and submitting only the content address on chain.")]),t._v(" "),a("h3",{attrs:{id:"it-s-still-early"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#it-s-still-early"}},[t._v("#")]),t._v(" It's still early")]),t._v(" "),a("p",[t._v("It’s still very early for smart contracts on Polkadot and the development is only now stabilizing. We are actively producing content to help developers get up to speed and will maintain the wiki with the latest resources. You should also keep up to date with the following links:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://edgewa.re",target:"_blank",rel:"noopener noreferrer"}},[t._v("Edgeware"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/paritytech/ink",target:"_blank",rel:"noopener noreferrer"}},[t._v("ink!"),a("OutboundLink")],1),t._v(". (Keep an eye out for content on the wiki tab.)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Substrate contracts pallet"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),a("p",[t._v("This guide has given you a mental model and shown the requisite resources to help you determine and start building your project as a parachain or smart contract today. Even though the tooling is still maturing, the advantage of being early will be the familiarity and head start on your project, allowing you to innovate and create something truly new.")]),t._v(" "),a("p",[t._v("If you have interesting ideas for parachains or smart contracts on Polkadot feel free to drop in to the "),a("a",{attrs:{href:"https://riot.im/app/#/room/#polkadot-watercooler:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polkadot Watercooler"),a("OutboundLink")],1),t._v(" to talk about them. Developers may be interested in joining the "),a("a",{attrs:{href:"https://riot.im/app/#/room/#polkadotnoobs:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polkadot Beginners Lounge"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://riot.im/app/#/room/#substrate-technical:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Substrate Technical"),a("OutboundLink")],1),t._v(" to ask their questions. As always, keep up to date with Polkadot by following the "),a("a",{attrs:{href:"community"}},[t._v("social channels")]),t._v(".")]),t._v(" "),a("p",[t._v("Good luck!")])])}),[],!1,null,null,null);e.default=r.exports}}]);