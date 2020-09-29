(window.webpackJsonp=window.webpackJsonp||[]).push([[491],{924:function(e,t,a){"use strict";a.r(t);var r=a(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("This page serves as a high-level introduction to the Polkadot protocol with terminology that may be specific to Polkadot, notable differences to other chains that you may have worked with, and practical information for dealing with the chain.")]),e._v(" "),a("h2",{attrs:{id:"dot-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dot-tokens"}},[e._v("#")]),e._v(" DOT Tokens")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Token decimals:")]),e._v(" 12")]),e._v(" "),a("li",[a("strong",[e._v("Balance type:")]),e._v(" "),a("a",{attrs:{href:"https://doc.rust-lang.org/std/u128/index.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("u128")]),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addresses"}},[e._v("#")]),e._v(" Addresses")]),e._v(" "),a("p",[e._v("In Polkadot (and most Substrate chains), user accounts are identified by a 32-byte (256-bit) "),a("code",[e._v("AccountId")]),e._v(". This is simply the public key for the cryptography used by Substrate.")]),e._v(" "),a("p",[e._v('Polkadot (and Substrate) use the SS58 address format. This is a broad "meta-format" designed to handle many different cryptographies and chains. It has much in common with Bitcoin\'s Base58Check format such as a version prefix, a hash-based checksum suffix, and base-58 encoding.')]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)",target:"_blank",rel:"noopener noreferrer"}},[e._v("SS58 page"),a("OutboundLink")],1),e._v(" in the Substrate wiki for encoding information and a more comprehensive list of network prefixes.")]),e._v(" "),a("p",[e._v("Relevant SS58 prefixes for this guide:")]),e._v(" "),a("ul",[a("li",[e._v("Polkadot: 0")]),e._v(" "),a("li",[e._v("Kusama: 2")]),e._v(" "),a("li",[e._v("Westend: 42")])]),e._v(" "),a("h3",{attrs:{id:"cryptography"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cryptography"}},[e._v("#")]),e._v(" Cryptography")]),e._v(" "),a("p",[e._v("Polkadot supports the following "),a("a",{attrs:{href:"learn-cryptography"}},[e._v("cryptographic")]),e._v(" key pairs and signing algorithms:")]),e._v(" "),a("ul",[a("li",[e._v("Ed25519")]),e._v(" "),a("li",[e._v("Sr25519 - Schorr signatures on the Ristretto group")]),e._v(" "),a("li",[e._v("ECDSA signatures on secp256k1")])]),e._v(" "),a("p",[e._v("Note that the address for a secp256k1 key is the SS58 encoding of the "),a("em",[e._v("hash of the public key")]),e._v(" in order to reduce the public key from 33 bytes to 32 bytes.")]),e._v(" "),a("h2",{attrs:{id:"existential-deposit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#existential-deposit"}},[e._v("#")]),e._v(" Existential Deposit")]),e._v(" "),a("p",[e._v("Polkadot uses an "),a("em",[e._v("existential deposit")]),e._v(" (ED) to prevent dust accounts from bloating state. If an account drops below the ED, it will be "),a("em",[e._v("reaped,")]),e._v(" i.e. completely removed from storage and the nonce reset.")]),e._v(" "),a("p",[e._v("Wallets and custodians who track account nonces for auditing purposes should take care not to have accounts reaped, as users could refund the address and try making transactions from it. The Balances pallet provides a "),a("code",[e._v("transfer_keep_alive")]),e._v(" function that will return an error and abort rather than make the transfer if doing so would result in reaping the sender's account.")]),e._v(" "),a("h2",{attrs:{id:"free-vs-reserved-vs-locked-vs-vesting-balance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#free-vs-reserved-vs-locked-vs-vesting-balance"}},[e._v("#")]),e._v(" Free vs. Reserved vs. Locked vs. Vesting Balance")]),e._v(" "),a("p",[e._v("Account balance information is stored in "),a("a",{attrs:{href:"https://substrate.dev/rustdocs/master/pallet_balances/struct.AccountData.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("AccountData")]),a("OutboundLink")],1),e._v(". Polkadot primarily deals with two types of balances: free and reserved.")]),e._v(" "),a("p",[e._v('For most operations, free balance is what you are interested in. It is the "power" of an account in staking and governance, for example. Reserved balance represents funds that have been set aside by some operation and still belong to the account holder, but cannot be used.')]),e._v(" "),a("p",[e._v("Locks are an abstraction over free balance that prevent spending for certain purposes. Several locks can operate on the same account, but they overlap rather than add. For example, an account could have a free balance of 200 DOTs with two locks on it: 150 DOTs for "),a("code",[e._v("Transfer")]),e._v(" purposes and 100 DOTs for "),a("code",[e._v("Reserve")]),e._v(" purposes. The account could not make a transfer that brings its free balance below 150 DOTs, but an operation could result in reserving DOTs such that the free balance is below 150, but above 100 DOTs.")]),e._v(" "),a("p",[e._v("Bonding tokens for staking and voting in governance referenda both utilize locks.")]),e._v(" "),a("p",[e._v("Vesting is another abstraction that uses locks on free balance. Vesting sets a lock that decreases over time until all the funds are transferable.")]),e._v(" "),a("p",[e._v("More info:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://substrate.dev/rustdocs/master/frame_support/traits/trait.LockableCurrency.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lockable Currency"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://substrate.dev/rustdocs/master/frame_support/traits/enum.WithdrawReason.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lock Withdraw Reasons"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://substrate.dev/rustdocs/master/pallet_vesting/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vesting"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"extrinsics-and-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extrinsics-and-events"}},[e._v("#")]),e._v(" Extrinsics and Events")]),e._v(" "),a("h3",{attrs:{id:"extrinsics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extrinsics"}},[e._v("#")]),e._v(" Extrinsics")]),e._v(" "),a("p",[e._v("Extrinsics constitute information from the outside world and take on three forms:")]),e._v(" "),a("ul",[a("li",[e._v("Inherents")]),e._v(" "),a("li",[e._v("Signed Transactions")]),e._v(" "),a("li",[e._v("Unsigned Transactions")])]),e._v(" "),a("p",[e._v("As an infrastructure provider, you will deal almost exclusively with signed transactions. You will, however, see other extrinsics within the blocks that you decode. Find more information in the "),a("a",{attrs:{href:"https://www.substrate.io/kb/learn-substrate/extrinsics",target:"_blank",rel:"noopener noreferrer"}},[e._v("Substrate documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Inherents contain information that is not provably true, but validators agree on based on some measure of reasonability. For example, a timestamp cannot be proved, but validators can agree that it is within some delta of their system clock. Inherents are not gossiped on the network, and only block authors insert them into blocks.")]),e._v(" "),a("p",[e._v("Signed transactions contain a signature of the account that issued the transaction and stands to pay a fee to have the transaction included on chain. Because the value of including signed transactions on-chain can be recognized prior to execution, they can be gossiped on the network between nodes with a low risk of spam. Signed transactions fit the concept of a transaction in Ethereum or Bitcoin.")]),e._v(" "),a("p",[e._v("Some transactions cannot be signed by a fee-paying account and use unsigned transactions. For example, when a user claims their DOTs from the Ethereum DOT indicator contract to a new DOT address, the new address doesn't yet have any funds with which to pay fees.")]),e._v(" "),a("h3",{attrs:{id:"transaction-mortality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-mortality"}},[e._v("#")]),e._v(" Transaction Mortality")]),e._v(" "),a("p",[e._v('Extrinsics can be mortal or immortal. The transaction payload includes a block number and block hash checkpoint from which a transaction is valid and a validity period (also called "era" in some places) that represents the number of blocks after the checkpoint for which the transaction is valid. If the extrinsic is not included in a block within this validity window, it will be discarded from the transaction queue.')]),e._v(" "),a("p",[e._v('Setting the block checkpoint to zero, using the genesis hash, and a validity period of zero will make the transaction "immortal".')]),e._v(" "),a("p",[a("strong",[e._v("NOTE:")]),e._v(" If an account is reaped and a user re-funds the account, then they could replay an immortal transaction. Always default to using a mortal extrinsic.")]),e._v(" "),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),a("p",[e._v("While extrinsics represent information from the outside world, events represent information from the chain. Extrinsics can trigger events. For example, the Staking pallet emits a "),a("code",[e._v("Reward")]),e._v(" event when claiming staking rewards to tell the user how much the account was credited.")]),e._v(" "),a("h3",{attrs:{id:"fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fees"}},[e._v("#")]),e._v(" Fees")]),e._v(" "),a("p",[e._v("Polkadot uses weight-based fees that, unlike gas, are charged "),a("em",[e._v("pre-dispatch.")]),e._v(' Users can also add a "tip" to increase transaction priority during congested periods. See the '),a("a",{attrs:{href:"learn-transaction-fees"}},[e._v("transaction fee")]),e._v(" page for more info.")]),e._v(" "),a("h3",{attrs:{id:"encoding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),a("p",[e._v("Parity's integration tools should allow you to deal with decoded data. If you'd like to bypass them and interact directly with the chain data or implement your own codec, Polkadot encodes block and transaction data using the "),a("a",{attrs:{href:"https://www.substrate.io/kb/advanced/codec",target:"_blank",rel:"noopener noreferrer"}},[e._v("SCALE codec"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"smart-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-contracts"}},[e._v("#")]),e._v(" Smart Contracts")]),e._v(" "),a("p",[e._v("The Polkadot Relay Chain does not support smart contracts.")]),e._v(" "),a("h2",{attrs:{id:"other-networks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-networks"}},[e._v("#")]),e._v(" Other Networks")]),e._v(" "),a("p",[e._v("Besides running a private network, Polkadot has two other networks where you could test infrastucture prior to deploying to the Polkadot mainnet.")]),e._v(" "),a("p",[a("strong",[e._v("Kusama Canary Network:")]),e._v(" Kusama is Polkadot's cutting-edge cousin. Many risky features are deployed to Kusama prior to making their way into Polkadot.")]),e._v(" "),a("p",[a("strong",[e._v("Westend Testnet:")]),e._v(" Westend is Polkadot's testnet and uses the Polkadot runtime.")]),e._v(" "),a("h2",{attrs:{id:"other-f-a-q"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-f-a-q"}},[e._v("#")]),e._v(" Other F.A.Q.")]),e._v(" "),a("p",[a("strong",[e._v("Can an account's balance change without a corresponding, on-chain transaction?")])]),e._v(" "),a("p",[e._v("No, but not all balance changes are in a "),a("em",[e._v("transaction,")]),e._v(" some are in "),a("em",[e._v("events.")]),e._v(" You will need to run an archive node and listen for events and transactions to track all account activity. This especially applies to "),a("em",[e._v("locking")]),e._v(" operations if you are calculating balance as the spendable balance, i.e. free balance minus the maximum lock.")]),e._v(" "),a("p",[a("strong",[e._v('What chain depth is considered "safe"?')])]),e._v(" "),a("p",[e._v("Polkadot uses a deterministic finality mechanism. Once a block is finalized, it cannot be reverted except by a hard fork. Kusama has had hard forks that had to revert four finalized blocks in order to cancel a runtime upgrade. Using a finalized depth of ten blocks should be safe.")]),e._v(" "),a("p",[e._v("Note that block production and finality are isolated processes in Polkadot, and the chain can have a long unfinalized head.")]),e._v(" "),a("p",[a("strong",[e._v("Do users need to interact with any smart contracts?")])]),e._v(" "),a("p",[e._v("No, users interact directly with the chain's logic.")]),e._v(" "),a("p",[a("strong",[e._v("Does Polkadot have state rent?")])]),e._v(" "),a("p",[e._v("No, Polkadot uses the existential deposit to prevent dust accounts and other economic mechanisms like locking or reserving tokens for operations that utilize state.")]),e._v(" "),a("p",[a("strong",[e._v("What is an external source to see the current chain height?")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://polkadot.js.org/apps/#/explorer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot JS explorer"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://polkascan.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkascan block explorer"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);