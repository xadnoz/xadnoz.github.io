(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{847:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("This document covers the basics of Polkadot and Kusama account addresses and how they exist on-chain. For a more in-depth explanation of the cryptography behind them, please see "),a("a",{attrs:{href:"learn-cryptography"}},[t._v("the cryptography page")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"address-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#address-format"}},[t._v("#")]),t._v(" Address Format")]),t._v(" "),a("p",[t._v("The address format used in Substrate-based chains is SS58. SS58 is a modification of Base-58-check from Bitcoin with some minor modifications. Notably, the format contains an "),a("em",[t._v("address type")]),t._v(" prefix which identifies an address as belonging to a specific network.")]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("ul",[a("li",[t._v("Polkadot addresses always start with the number 1.")]),t._v(" "),a("li",[t._v("Kusama addresses always start with a capital letter like C, D, F, G, H, J...")]),t._v(" "),a("li",[t._v("Generic Substrate addresses start with 5.")])]),t._v(" "),a("p",[t._v("These prefixes are defined "),a("a",{attrs:{href:"https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("It's important to understand that the different formats for different networks are merely different representations of the same public key in a private-public keypair generated by an address generation tool (see next section). This makes the addresses cross-Substrate-chain-compatible as long as you convert the format.")]),t._v(" "),a("h3",{attrs:{id:"for-the-curious-how-prefixes-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-the-curious-how-prefixes-work"}},[t._v("#")]),t._v(" For the Curious: How Prefixes Work")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)",target:"_blank",rel:"noopener noreferrer"}},[t._v("SS58 document"),a("OutboundLink")],1),t._v(" states that:")]),t._v(" "),a("ul",[a("li",[t._v("Polkadot has an address type of "),a("code",[t._v("00000000b")]),t._v(", so "),a("code",[t._v("0")]),t._v(" in decimal.")]),t._v(" "),a("li",[t._v("Kusama (Polkadot Canary) has an address type of "),a("code",[t._v("00000010b")]),t._v(", so "),a("code",[t._v("2")]),t._v(" in decimal.")]),t._v(" "),a("li",[t._v("Generic Substrate has "),a("code",[t._v("00101010b")]),t._v(" as address type, which is "),a("code",[t._v("42")]),t._v(" in decimal.")])]),t._v(" "),a("p",[t._v("Because Base58-check alphabet has no number 0, the lowest value is indeed 1. So "),a("code",[t._v("00000000b")]),t._v(" is 1 in Base58-check. If we try to "),a("a",{attrs:{href:"https://www.better-converter.com/Encoders-Decoders/Base58Check-to-Hexadecimal-Decoder",target:"_blank",rel:"noopener noreferrer"}},[t._v("decode"),a("OutboundLink")],1),t._v(" a Polkadot address like "),a("code",[t._v("1FRMM8PEiWXYax7rpS6X4XZX1aAAxSWx1CrKTyrVYhV24fg")]),t._v(", the result is "),a("code",[t._v("000aff6865635ae11013a83835c019d44ec3f865145943f487ae82a8e7bed3a66b29d7")]),t._v(". The first byte is "),a("code",[t._v("00")]),t._v(", which is indeed "),a("code",[t._v("00000000")]),t._v(" in binary and "),a("code",[t._v("0")]),t._v(" in decimal and thus matches the address type of Polkadot.")]),t._v(" "),a("p",[t._v("Let's take a look at Substrate addresses. If we decode "),a("code",[t._v("5CK8D1sKNwF473wbuBP6NuhQfPaWUetNsWUNAAzVwTfxqjfr")]),t._v(", we get "),a("code",[t._v("2a0aff6865635ae11013a83835c019d44ec3f865145943f487ae82a8e7bed3a66b77e5")]),t._v(". The first byte is "),a("code",[t._v("2a")]),t._v(" which when "),a("a",{attrs:{href:"https://www.rapidtables.com/convert/number/hex-to-decimal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("converted from hex to decimal"),a("OutboundLink")],1),t._v(" is 42. 42 is "),a("code",[t._v("00101010")]),t._v(" in binary, just as the SS58 document states.")]),t._v(" "),a("p",[t._v("Finally, let's look at Kusama addresses. Decoding "),a("code",[t._v("CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp")]),t._v(" gives us "),a("code",[t._v("020aff6865635ae11013a83835c019d44ec3f865145943f487ae82a8e7bed3a66b0985")]),t._v(" with the first byte being "),a("code",[t._v("02")]),t._v(", just as specified. If we try a Kusama address that starts with a completely different letter, like "),a("code",[t._v("J4iggBtsWsb61RemU2TDWDXTNHqHNfBSAkGvVZBtn1AJV1a")]),t._v(", we still get "),a("code",[t._v("02")]),t._v(" as the first byte: "),a("code",[t._v("02f2d606a67f58fa0b3ad2b556195a0ef905676efd4e3ec62f8fa1b8461355f1142509")]),t._v(". It seems counterintuitive that some addresses always have the same prefix and others like Kusama can vary wildly, but it's just a quirk of Base58-check encoding.")]),t._v(" "),a("h2",{attrs:{id:"obtaining-and-managing-an-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-and-managing-an-address"}},[t._v("#")]),t._v(" Obtaining and Managing an Address")]),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("most user-friendly")]),t._v(" way to create a Kusama address is through the "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/accounts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polkadot JS UI"),a("OutboundLink")],1),t._v(". Remember to back up the seed phrase used to generate your account - the accounts are stored only in your browser, so purging the cache will wipe your accounts as well. You would then have to recreate them using the seed phrase given to you by the UI - this will also restore all your previously held balances.")]),t._v(" "),a("p",[t._v("A "),a("strong",[t._v("more convenient and recommended")]),t._v(" method of keeping the accounts stored on your computer is using the "),a("a",{attrs:{href:"https://github.com/polkadot-js/extension",target:"_blank",rel:"noopener noreferrer"}},[t._v("PolkadotJS extension"),a("OutboundLink")],1),t._v(". This extension remembers your accounts and allows you to clear your browser cache without fear. Still, don't forget to back up your seed phrase - if you lose access to this computer, or the extension somehow crashes beyond repair, the phrase will come in handy.")]),t._v(" "),a("p",[t._v('Please note that as this keeps your accounts in the browser, it is not a safe place to keep large holdings. By definition, a browser is a "hot wallet" and susceptible to a wide range of attacks, so keep your funds in cold storage when dealing with non-trivial amounts. Creating cold storage is as simple as securely stashing away the seed phrase for your accounts and removing all traces of the accounts from your computer.')]),t._v(" "),a("p",[t._v("Other than the extension and the default UI, Polkadot and Kusama addresses can also be created with the "),a("a",{attrs:{href:"https://github.com/paritytech/substrate/tree/master/bin/utils/subkey",target:"_blank",rel:"noopener noreferrer"}},[t._v("Subkey tool"),a("OutboundLink")],1),t._v(". Subkey is intended for users comfortable with using the command line and can seem intimidating, but is quite approachable. Follow the instructions in the "),a("a",{attrs:{href:"https://www.substrate.io/kb/integrate/subkey",target:"_blank",rel:"noopener noreferrer"}},[t._v("Subkey documentation"),a("OutboundLink")],1),t._v(". When used properly, Subkey is the "),a("strong",[t._v("most secure")]),t._v(" available method of creating an account.")]),t._v(" "),a("p",[t._v("There is also the very secure "),a("a",{attrs:{href:"https://www.parity.io/signer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parity Signer"),a("OutboundLink")],1),t._v(" but it currently only supports Kusama addresses, not Polkadot or generic Substrate.")]),t._v(" "),a("p",[t._v("Alternatively, you might find some wallets on the "),a("a",{attrs:{href:"http://www.polkaproject.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polkaproject.com page"),a("OutboundLink")],1),t._v(" but bear in mind that these are "),a("strong",[t._v("unaudited")]),t._v(" and not officially affiliated with Web3 Foundation or the Polkadot project unless otherwise stated.")]),t._v(" "),a("p",[t._v("Hardware wallet integration from "),a("a",{attrs:{href:"https://ledger.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ledger"),a("OutboundLink")],1),t._v(" is coming soon.")]),t._v(" "),a("h2",{attrs:{id:"existential-deposit-and-reaping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#existential-deposit-and-reaping"}},[t._v("#")]),t._v(" Existential Deposit and Reaping")]),t._v(" "),a("p",[t._v("When you generate an account (address), you only generate a "),a("em",[t._v("key")]),t._v(' which lets you access it. The account does not exist yet on-chain. For that, it needs the existential deposit - 0.01 KSM / DOT. This deposit is paid by the account sending you tokens. The one "creating" you pays for your creation.')]),t._v(" "),a("p",[t._v("Going below 0.01 causes an account to be "),a("em",[t._v("reaped")]),t._v(". Your account will be wiped from the blockchain's state to conserve space. You do not lose access to the reaped address - as long as you have your private key or recovery phrase, you can still use the address - but it needs a top-up of another existential deposit to be able to interact with the chain.")]),t._v(" "),a("p",[t._v("Here's another way to think about existential deposits. Ever notice those "),a("code",[t._v("Thumbs.db")]),t._v(" files on Windows or "),a("code",[t._v(".DS_Store")]),t._v(" files on Mac? Those are junk, they serve no specific purpose other than making previews a bit faster. If a folder is completely empty save for such a file, you can remove the folder to clear junk off your hard drive. That does not mean you lose access to this folder forever - you can always recreate it. You have the "),a("em",[t._v("key")]),t._v(", after all - you're the computer's owner. It just means you want to keep your computer clean until you maybe end up needing this folder again, and then recreate it. Your address is like this folder - it gets removed from the chain when nothing is in it, but gets put back when it has at least the existential deposit.")]),t._v(" "),a("h2",{attrs:{id:"indices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indices"}},[t._v("#")]),t._v(" Indices")]),t._v(" "),a("p",[t._v("A Kusama address can have an index. An index is like a short and easy to remember version of an address.")]),t._v(" "),a("p",[t._v("Indices are populated in order. Think of them like slots going from 0 to any arbitrary number:")]),t._v(" "),a("p",[a("code",[t._v("[0][1][2][3][4][5][6]...")])]),t._v(" "),a("p",[t._v("If slots 0-2 are populated by addresses A, B and C respectively, and I add an existential deposit to address X, that address will automatically be put into slot 3. Henceforth, you can send me money by just sending to "),a("code",[t._v("[3]")]),t._v(" rather than remembering my whole address.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("But what if an account gets reaped as explained above? In that case, the index is emptied. In other words, the slot frees up again. If someone creates a new account, they may end up using the same index another address was using before.")]),t._v(" "),a("p",[t._v("Because of this unreliability of indices, they "),a("strong",[t._v("may not be present")]),t._v(" in Polkadot mainnet.")]),t._v(" "),a("h2",{attrs:{id:"identities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#identities"}},[t._v("#")]),t._v(" Identities")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("Identities")]),t._v(" pallet built into Kusama allows users to attach on-chain metadata to their accounts. This metadata can be verified by independent registrars to provide trustworthiness. To learn more about how to set or release an identity, how to define sub-accounts, or how to become a registrar, please read "),a("a",{attrs:{href:"learn-identity"}},[t._v("this guide")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"multi-signature-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-signature-accounts"}},[t._v("#")]),t._v(" Multi-signature Accounts")]),t._v(" "),a("p",[t._v("It is possible to create a multi-signature account in Substrate-based chains. A multi-signature account is composed of one or more addresses and a threshold. The threshold defines how many signatories (participating addresses) need to agree on the submission of an extrinsic in order for the call to be successful.")]),t._v(" "),a("p",[t._v("For example, Alice, Bob, and Charlie set up a multi-sig with a threshold of 2. This means Alice and Bob can execute any call even if Charlie disagrees with it. Likewise, Charlie and Bob can execute any call without Alice. A threshold is typically a number smaller than the total number of members but can also be equal to it which means they all have to be in agreement.")]),t._v(" "),a("p",[t._v("Multi-signature accounts have several uses:")]),t._v(" "),a("ul",[a("li",[t._v("securing your own stash: use additional signatories as a 2FA mechanism to secure your funds. One signer can be on one computer, another can be on another, or in cold storage. This slows down your interactions with the chain, but is orders of magnitude more secure.")]),t._v(" "),a("li",[t._v("board decisions: legal entities such as businesses and foundations use multi-sigs to collectively govern over the entity's treasury.")]),t._v(" "),a("li",[t._v("group participation in governance: a multi-sig account can do everything a regular account can. A multi-sig account could be a council member in Kusama's governance, where a set of community members could vote as one entity.")])]),t._v(" "),a("p",[t._v("Multi-signature accounts "),a("strong",[t._v("cannot be modified after being created")]),t._v(". Changing the set of members or altering the threshold is not possible and instead requires the dissolution of the current multi-sig and creation of a new one. As such, multi-sig account addresses are "),a("strong",[t._v("deterministic")]),t._v(", i.e. you can always calculate the address of a multi-sig just by knowing the members and the threshold, without the account existing yet. This means one can send tokens to an address which does not exist yet, and if the entities designated as the recipients come together in a new multi-sig under a matching threshold, they will immediately have access to these tokens. Calculating the address of a multi-sig deterministically can be done in TypeScript like so:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rawAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("addresses"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" threshold"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("addresses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modlpy/utilisuba'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Uint8Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" addresses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" addresses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" idx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" decoded "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decoded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" idx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" addresses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" threshold\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("blake2AsU8a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("addresses"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" threshold"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ss58prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hashed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rawAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addresses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" threshold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hashed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ss58prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" multiSigAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addresses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The Polkadot JS Apps UI also supports multi-sig accounts, as documented in the "),a("a",{attrs:{href:"learn-account-generation#multi-signature-accounts"}},[t._v("Account Generation page")]),t._v(". This is easier than generating them manually.")])])}),[],!1,null,null,null);e.default=n.exports}}]);