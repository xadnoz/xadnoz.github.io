(window.webpackJsonp=window.webpackJsonp||[]).push([[690],{1106:function(e,t,o){"use strict";o.r(t);var a=o(42),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("This page contains basic information about running a Parity Polkadot client. There are a lot of ways to obtain/run a client, e.g. compiling from source, running in Docker, or downloading a binary. This guide will always refer to the executable as "),o("code",[e._v("polkadot")]),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Always refer to the client's help "),o("code",[e._v("polkadot --help")]),e._v(" for the most up-to-date information.")])]),e._v(" "),o("blockquote",[o("p",[e._v("Other client implementation teams: Feel free to make a PR to this page with instructions (or a link to instructions) for your client.")])]),e._v(" "),o("h2",{attrs:{id:"basic-node-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-node-operations"}},[e._v("#")]),e._v(" Basic Node Operations")]),e._v(" "),o("p",[o("strong",[e._v("Selecting a chain")])]),e._v(" "),o("p",[e._v("Use the "),o("code",[e._v("--chain <chainspec>")]),e._v(" option to select the chain. Can be "),o("code",[e._v("polkadot")]),e._v(", "),o("code",[e._v("kusama")]),e._v(", "),o("code",[e._v("westend")]),e._v(", or a custom chain spec.")]),e._v(" "),o("p",[o("strong",[e._v("Archive node")])]),e._v(" "),o("p",[e._v("An archive node does not prune any block or state data. Use the "),o("code",[e._v("--archive")]),e._v(" flag. Certain types of nodes, like validators and sentries, must run in archive mode. Likewise, all "),o("a",{attrs:{href:"build-protocol-info#events"}},[e._v("events")]),e._v(" are cleared from state in each block, so if you want to store events then you will need an archive node.")]),e._v(" "),o("p",[o("strong",[e._v("Exporting blocks")])]),e._v(" "),o("p",[e._v("To export blocks to a file, use "),o("code",[e._v("export-blocks")]),e._v(". Export in JSON (default) or binary ("),o("code",[e._v("--binary true")]),e._v(").")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("polkadot export-blocks --from "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("output_file"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),o("p",[o("strong",[e._v("RPC ports")])]),e._v(" "),o("p",[e._v("Use the "),o("code",[e._v("--rpc-external")]),e._v(" flag to expose RPC ports and "),o("code",[e._v("--ws-external")]),e._v(" to expose websockets. Not all RPC calls are safe to allow and you should use an RPC proxy to filter unsafe calls. Select ports with the "),o("code",[e._v("--rpc-port")]),e._v(" and "),o("code",[e._v("--ws-port")]),e._v(" options. To limit the hosts who can access, use the "),o("code",[e._v("--rpc-cors")]),e._v(" and "),o("code",[e._v("--ws-cors")]),e._v(" options.")]),e._v(" "),o("p",[o("strong",[e._v("Execution")])]),e._v(" "),o("p",[e._v("The Parity Polkadot client implements a "),o("a",{attrs:{href:"learn-polkadot-host"}},[e._v("Polkadot Host")]),e._v(" and a native runtime. The runtime must compile to WebAssembly and is stored on-chain. If the client's runtime is the same spec as the runtime that is stored on-chain, then the client will execute blocks using the client binary. Otherwise, the client will execute the Wasm runtime.")]),e._v(" "),o("p",[e._v("Therefore, when syncing the chain, the client will execute blocks from past runtimes using their associated Wasm binary. This feature also allows forkless upgrades: the client can execute a new runtime without updating the client.")]),e._v(" "),o("p",[e._v("Parity's Polkadot client has two Wasm execution methods, interpreted (default) and compiled. Set the preferred method to use when executing Wasm with "),o("code",[e._v("--wasm-execution <Interpreted|Compiled>")]),e._v(". Compiled execution will run much faster, especially when syncing the chain, but is experimental and may use more memory/CPU. A reasonable tradeoff would be to sync the chain with compiled execution and then restart the node with interpreted execution.")]),e._v(" "),o("h2",{attrs:{id:"file-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#file-structure"}},[e._v("#")]),e._v(" File Structure")]),e._v(" "),o("p",[e._v("The node stores a number of files in: "),o("code",[e._v("/home/$USER/.local/share/polkadot/chains/<chain name>/")]),e._v(". You can set a custom path with "),o("code",[e._v("--base-path <path>")]),e._v(".")]),e._v(" "),o("p",[o("strong",[o("code",[e._v("keystore")])])]),e._v(" "),o("p",[e._v("The keystore stores session keys, which are important for validator operations.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"learn-keys#session-keys"}},[e._v("Polkadot documentation")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.substrate.io/kb/learn-substrate/session-keys",target:"_blank",rel:"noopener noreferrer"}},[e._v("Substrate documentation"),o("OutboundLink")],1)])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("db")])])]),e._v(" "),o("p",[e._v("The database stores blocks and the state trie. If you are running a validator node, it also stores GRANDPA pre-votes and pre-commits and the offchain-worker DB. Use caution when "),o("a",{attrs:{href:"maintain-guides-how-to-upgrade"}},[e._v("migrating validator nodes")]),e._v(" to avoid equivocation. If you want to start a new machine without resyncing, you can stop your node, back up the DB, and move it to a new machine.")]),e._v(" "),o("p",[e._v("To delete your DB and re-sync from genesis, run:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("polkadot purge-chain\n")])])]),o("h2",{attrs:{id:"deployment-tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deployment-tools"}},[e._v("#")]),e._v(" Deployment Tools")]),e._v(" "),o("p",[e._v("Web3 Foundation maintains "),o("a",{attrs:{href:"https://github.com/w3f/polkadot-deployer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot Deployer"),o("OutboundLink")],1),e._v(", which allows you to create local or remote cloud deployments of Polkadot nodes. See the README for instructions.")]),e._v(" "),o("p",[e._v("Validators, see the "),o("a",{attrs:{href:"maintain-guides-how-to-use-polkadot-secure-validator"}},[e._v("secure setup guide")]),e._v(" for information specific to deploying validator nodes.")]),e._v(" "),o("h2",{attrs:{id:"monitoring-and-telemetry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-and-telemetry"}},[e._v("#")]),e._v(" Monitoring and Telemetry")]),e._v(" "),o("p",[o("strong",[e._v("Node status")])]),e._v(" "),o("p",[e._v("You can check the node's health via RPC with:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -H "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Content-Type: application/json"')]),e._v(" --data "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{ "jsonrpc":"2.0", "method":"system_health", "params":[],"id":1 }\'')]),e._v(" localhost:9933 \n")])])]),o("p",[o("strong",[e._v("Logs")])]),e._v(" "),o("p",[e._v("The Polkadot client has a number of log targets. The most interesting to users may be:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("afg")]),e._v(" (Al's Finality Gadget - GRANDPA consensus)")]),e._v(" "),o("li",[o("code",[e._v("babe")])]),e._v(" "),o("li",[o("code",[e._v("telemetry")])]),e._v(" "),o("li",[o("code",[e._v("txpool")])]),e._v(" "),o("li",[o("code",[e._v("usage")])])]),e._v(" "),o("p",[e._v("Other targets include: "),o("code",[e._v("db, gossip, peerset, state-db, state-trace, sub-libp2p, trie, wasm-executor, wasm-heap")]),e._v(".")]),e._v(" "),o("p",[e._v("The log levels, from least to most verbose, are:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("error")])]),e._v(" "),o("li",[o("code",[e._v("warn")])]),e._v(" "),o("li",[o("code",[e._v("info")])]),e._v(" "),o("li",[o("code",[e._v("debug")])]),e._v(" "),o("li",[o("code",[e._v("trace")])])]),e._v(" "),o("p",[e._v("All targets are set to "),o("code",[e._v("info")]),e._v(" logging by default. You can adjust individual log levels using the "),o("code",[e._v("--log (-l short)")]),e._v(" option, for example "),o("code",[e._v("-l afg=trace,sync=debug")]),e._v(" or globally with "),o("code",[e._v("-ldebug")]),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Telemetry & Metrics")])]),e._v(" "),o("p",[e._v("The Parity Polkadot client connects to telemetry by default. You can disable it with "),o("code",[e._v("--no-telemetry")]),e._v(", or connect only to specified telemetry servers with the "),o("code",[e._v("--telemetry-url")]),e._v(" option (see the help options for instructions). Connecting to public telemetry may expose information that puts your node at higher risk of attack. You can run your own, private "),o("a",{attrs:{href:"https://github.com/paritytech/substrate-telemetry",target:"_blank",rel:"noopener noreferrer"}},[e._v("telemetry server"),o("OutboundLink")],1),e._v(" or deploy a "),o("code",[e._v("substrate-telemetry")]),e._v(" instance to a Kubernetes cluster using "),o("a",{attrs:{href:"https://github.com/w3f/substrate-telemetry-chart",target:"_blank",rel:"noopener noreferrer"}},[e._v("this Helm chart"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The node also exposes a Prometheus endpoint by default (disable with "),o("code",[e._v("--no-prometheus")]),e._v("). You can expose metrics via Parity's "),o("a",{attrs:{href:"https://github.com/paritytech/dotexporter",target:"_blank",rel:"noopener noreferrer"}},[e._v("DOT exporter"),o("OutboundLink")],1),e._v(". Substrate has a "),o("a",{attrs:{href:"https://substrate.dev/docs/en/next/tutorials/visualizing-node-metrics/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vizualizing node metrics tutorial"),o("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);