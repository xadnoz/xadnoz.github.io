(window.webpackJsonp=window.webpackJsonp||[]).push([[496],{903:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("This page will discuss the transaction format in Polkadot and how to create, sign, and broadcast transactions. Like the other pages in this guide, this page demonstrates some of the available tools. "),s("strong",[t._v("Always refer to each tool's documentation when integrating.")])]),t._v(" "),s("h2",{attrs:{id:"transaction-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-format"}},[t._v("#")]),t._v(" Transaction Format")]),t._v(" "),s("p",[t._v("Polkadot has some basic transaction information that is common to all transactions.")]),t._v(" "),s("ul",[s("li",[t._v("Address: The SS58-encoded address of the sending account.")]),t._v(" "),s("li",[t._v("Block Hash: The hash of the "),s("a",{attrs:{href:"build-protocol-info#transaction-mortality"}},[t._v("checkpoint")]),t._v(" block.")]),t._v(" "),s("li",[t._v("Block Number: The number of the checkpoint block.")]),t._v(" "),s("li",[t._v("Genesis Hash: The genesis hash of the chain.")]),t._v(" "),s("li",[t._v("Metadata: The SCALE-encoded metadata for the runtime when submitted.")]),t._v(" "),s("li",[t._v("Nonce: The nonce for this transaction.*")]),t._v(" "),s("li",[t._v("Spec Version: The current spec version for the runtime.")]),t._v(" "),s("li",[t._v("Tip: Optional, the "),s("a",{attrs:{href:"build-protocol-info#fees"}},[t._v("tip")]),t._v(" to increase transaction priority.")]),t._v(" "),s("li",[t._v("Validity Period: Optional, the number of blocks after the checkpoint for which a transaction is valid. If zero, the transaction is "),s("a",{attrs:{href:"build-protocol-info#transaction-mortality"}},[t._v("immortal")]),t._v(".")])]),t._v(" "),s("p",[t._v("*The nonce queried from the System module does not account for pending transactions. You must track and increment the nonce manually if you want to submit multiple valid transactions at the same time.")]),t._v(" "),s("p",[t._v("Each transaction will have its own (or no) parameters to add. For example, the "),s("code",[t._v("transferKeepAlive")]),t._v(" function from the Balances pallet will take:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("dest")]),t._v(": Destination address")]),t._v(" "),s("li",[s("code",[t._v("#[compact] value")]),t._v(": Number of tokens (compact encoding)")])]),t._v(" "),s("p",[t._v("Once you have all the necessary information, you will need to:")]),t._v(" "),s("ol",[s("li",[t._v("Construct an unsigned transaction.")]),t._v(" "),s("li",[t._v("Create a signing payload.")]),t._v(" "),s("li",[t._v("Sign the payload.")]),t._v(" "),s("li",[t._v("Serialize the signed payload into a transaction.")]),t._v(" "),s("li",[t._v("Submit the serialized transaction.")])]),t._v(" "),s("p",[t._v("Parity provides the following tools to help perform these steps.")]),t._v(" "),s("h2",{attrs:{id:"polkadot-js-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-js-tools"}},[t._v("#")]),t._v(" Polkadot JS Tools")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/polkadot-js/tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polkadot JS Tools"),s("OutboundLink")],1),t._v(' contains a set of command line tools for interacting with a Substrate client, including one called "Signer CLI" to create, sign, and broadcast transactions.')]),t._v(" "),s("p",[t._v("This example will use the "),s("code",[t._v("signer submit")]),t._v(" command, which will create and submit the transaction. The "),s("code",[t._v("signer sendOffline")]),t._v(" command has the exact same API, but will not broadcast the transaction. "),s("code",[t._v("submit")]),t._v(" and "),s("code",[t._v("sendOffline")]),t._v(" must be connected to a node to fetch the current metadata and construct a valid transaction. Their API has the format:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run:signer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("submit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("sendOffline"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --account "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("from-account-ss5"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("8")]),t._v(">")]),t._v(" --ws "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("endpoint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module.method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("param1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("paramX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("Signing:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run:signer sign --account "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("from-account-ss5"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("8")]),t._v(">")]),t._v(" --seed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("seed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("sr25519"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ed2551"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("payload"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("For example, let's send 0.5 DOT from "),s("code",[t._v("121X5bEgTZcGQx5NZjwuTjqqKoiG8B2wEAvrUFjuw24ZGZf2")]),t._v(" to "),s("code",[t._v("15vrtLsCQFG3qRYUcaEeeEih4JwepocNJHkpsrqojqnZPc2y")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run:signer submit --account 121X5bEgTZcGQx5NZjwuTjqqKoiG8B2wEAvrUFjuw24ZGZf2 --ws ws://127.0.0.1:9944 balances.transferKeepAlive 15vrtLsCQFG3qRYUcaEeeEih4JwepocNJHkpsrqojqnZPc2y "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500000000000")]),t._v("\n")])])]),s("p",[t._v("This will return a payload to sign and an input waiting for a signature. Take this payload and use your normal signing environment (e.g. airgapped machine, VM, etc.). Sign the payload:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run:signer sign --account 121X5bEgTZcGQx5NZjwuTjqqKoiG8B2wEAvrUFjuw24ZGZf2 --seed "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pulp gaze fuel ... mercy inherit equal"')]),t._v(" --type sr25519 0x040300ff4a83f1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".a8239139ff3ff7c3f6\n")])])]),s("p",[t._v("Save the output and bring it to the machine that you will broadcast from, enter it into "),s("code",[t._v("submit")]),t._v("'s signature field, and send the transaction (or just return the serialized transaction if using "),s("code",[t._v("sendOffline")]),t._v(").")]),t._v(" "),s("h2",{attrs:{id:"tx-wrapper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tx-wrapper"}},[t._v("#")]),t._v(" Tx Wrapper")]),t._v(" "),s("p",[t._v("If you do not want to use the CLI for signing operations, Parity provides an SDK called "),s("a",{attrs:{href:"https://github.com/paritytech/txwrapper",target:"_blank",rel:"noopener noreferrer"}},[t._v("txwrapper"),s("OutboundLink")],1),t._v(" to generate and sign transactions offline. See the "),s("a",{attrs:{href:"https://github.com/paritytech/txwrapper/tree/master/examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples"),s("OutboundLink")],1),t._v(" for a guide.")]),t._v(" "),s("p",[t._v("Note: Tx Wrapper defaults to Kusama's SS58 encoding. Read the documentation to ensure that you encode and decode address formats properly.")]),t._v(" "),s("p",[s("strong",[t._v("Import a private key")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" importPrivateKey "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@substrate/txwrapper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keypair "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("importPrivateKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“pulp gaze fuel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" mercy inherit equal”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Derive an address from a public key")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" deriveAddress "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@substrate/txwrapper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Public key, can be either hex string, or Uint8Array")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" publicKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" “"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x2ca17d26ca376087dc30ed52deb74bf0f64aca96fe78b05ec3e720a72adb1235")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" address "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deriveAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publicKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Construct a transaction offline")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" methods "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@substrate/txwrapper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" unsigned "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balances"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferKeepAlive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dest"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"15vrtLsCQFG3qRYUcaEeeEih4JwepocNJHkpsrqojqnZPc2y"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500000000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"121X5bEgTZcGQx5NZjwuTjqqKoiG8B2wEAvrUFjuw24ZGZf2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    blockHash"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    blockNumber"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4302222")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    genesisHash"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    metadataRpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// must import from client RPC call state_getMetadata")]),t._v("\n    nonce"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    specVersion"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1019")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tip"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    validityPeriod"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// seconds (240 minutes)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Construct a signing payload")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createSigningPayload "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@substrate/txwrapper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// See "Construct a transaction offline" for "{...}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" unsigned "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balances"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferKeepAlive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" signingPayload "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSigningPayload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unsigned"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Serialize a signed transaction")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createSignedTx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@substrate/txwrapper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example code, replace `signWithAlice` with actual remote signer.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// An example is given here:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://github.com/paritytech/txwrapper/blob/630c38d/examples/index.ts#L50-L68")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" signature "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("signWithAlice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signingPayload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" signedTx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSignedTx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unsigned"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" signature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Decode payload types")])]),t._v(" "),s("p",[t._v("You may want to decode payloads to verify their contents prior to submission.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" decode "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@substrate/txwrapper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Decode an unsigned tx")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" txInfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unsigned"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" metadata "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Decode a signing payload")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" txInfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signingPayload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" metadata "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Decode a signed tx")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" txInfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signedTx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" metadata "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Check a transaction's hash")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getTxHash "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" ‘@substrate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("txwrapper’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" txHash "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTxHash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signedTx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"submitting-a-signed-payload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#submitting-a-signed-payload"}},[t._v("#")]),t._v(" Submitting a Signed Payload")]),t._v(" "),s("p",[t._v("There are several ways to submit a signed payload:")]),t._v(" "),s("ol",[s("li",[t._v("Signer CLI ("),s("code",[t._v("yarn run:signer submit --tx <signed-transaction> --ws <endpoint>")]),t._v(")")]),t._v(" "),s("li",[s("a",{attrs:{href:"build-node-interaction#substrate-api-sidecar"}},[t._v("Substrate API Sidecar")])]),t._v(" "),s("li",[s("a",{attrs:{href:"build-node-interaction#polkadot-rpc"}},[t._v("RPC")]),t._v(" with "),s("code",[t._v("author_submitExtrinsic")]),t._v(" or "),s("code",[t._v("author_submitAndWatchExtrinsic")]),t._v(", the latter of which will subscribe you to events to be notified as a transaction gets validated and included in the chain.")])]),t._v(" "),s("h2",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),s("p",[t._v("Some addresses to use in the examples. See "),s("a",{attrs:{href:"https://www.substrate.io/kb/integrate/subkey",target:"_blank",rel:"noopener noreferrer"}},[t._v("Subkey documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ subkey --network polkadot generate\nSecret phrase "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("pulp gaze fuel "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". mercy inherit equal"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" is account:\n  Secret seed:      0x57450b3e09ba4598 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" 219756eeba80bb16\n  Public key "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 0x2ca17d26ca376087dc30ed52deb74bf0f64aca96fe78b05ec3e720a72adb1235\n  Account ID:       0x2ca17d26ca376087dc30ed52deb74bf0f64aca96fe78b05ec3e720a72adb1235\n  SS58 Address:     121X5bEgTZcGQx5NZjwuTjqqKoiG8B2wEAvrUFjuw24ZGZf2\n\n$ subkey --network polkadot generate\nSecret phrase "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("exercise auction soft "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". obey control easily"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" is account:\n  Secret seed:      0x5f4bbb9fbb69261a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" 4691ed7d1130fbbd\n  Public key "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 0xda04de6cd781c98acf0693dfb97c11011938ad22fcc476ed0089ac5aec3fe243\n  Account ID:       0xda04de6cd781c98acf0693dfb97c11011938ad22fcc476ed0089ac5aec3fe243\n  SS58 Address:     15vrtLsCQFG3qRYUcaEeeEih4JwepocNJHkpsrqojqnZPc2y\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);