(window.webpackJsonp=window.webpackJsonp||[]).push([[674],{1087:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("If you're building dapps or products on a Substrate-based chain like Polkadot, Kusama or a custom Substrate implementation, you probably want the ability to run a node-as-a-back-end. After all, it's always better to rely on your own infrastructure than on a third-party-hosted one in this brave new decentralized world.")]),t._v(" "),a("p",[t._v("This guide will show you how to connect to "),a("a",{attrs:{href:"https://kusama.network",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kusama network"),a("OutboundLink")],1),t._v(", but the same process applies to any other "),a("a",{attrs:{href:"https://www.substrate.io/kb/learn-substrate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Substrate"),a("OutboundLink")],1),t._v("-based chain. First, let's clarify the term "),a("em",[t._v("full node")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"types-of-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types-of-nodes"}},[t._v("#")]),t._v(" Types of Nodes")]),t._v(" "),a("p",[t._v("A blockchain's growth comes from a "),a("em",[t._v("genesis block")]),t._v(", "),a("em",[t._v("extrinsics")]),t._v(", and "),a("em",[t._v("events")]),t._v(".")]),t._v(" "),a("p",[t._v("When a validator seals block 1, it takes the blockchain's state at block 0. It then applies all pending changes on top of it, and emits the events that are the result of these changes. Later, the state of the chain at block 1 is used in the same way to build the state of the chain at block 2, and so on. Once two thirds of the validators agree on a specific block being valid, it is finalized.")]),t._v(" "),a("p",[t._v("An "),a("strong",[t._v("archive node")]),t._v(" keeps all the past blocks. An archive node makes it convenient to query the past state of the chain at any point in time. Finding out what an account's balance at a certain block was, or which extrinsics resulted in a certain state change are fast operations when using an archive node. However, an archive node takes up a lot of disk space - around Kusama's 1.6 millionth block this was around 15 to 20GB. When running a validator, this requirement doubles as "),a("a",{attrs:{href:"maintain-guides-how-to-setup-sentry-node"}},[t._v("the sentry node")]),t._v(" in front of a validator should be an archive node too.")]),t._v(" "),a("p",[t._v("A "),a("strong",[t._v("full node")]),t._v(" is "),a("em",[t._v("pruned")]),t._v(", meaning it discards all information older than 256 blocks, but keeps the extrinsics for all past blocks, and the genesis block. A node that is pruned this way requires much less space than an archive node. In order to query past state through a full node, a user would have to wait for the node to rebuild the chain up until that block. A full node "),a("em",[t._v("can")]),t._v(" rebuild the entire chain with no additional input from other nodes and become an archive node. One caveat is that if finality stalled for some reason and the last finalized block is more than 256 blocks behind, a pruned full node will not be able to sync to the network.")]),t._v(" "),a("p",[t._v("Archive nodes are used by utilities that need past information - like block explorers, council scanners, discussion platforms like "),a("a",{attrs:{href:"https://polkassembly.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polkassembly"),a("OutboundLink")],1),t._v(", and others. They need to be able to look at past on-chain data. Full nodes are used by everyone else - they allow you to read the current state of the chain and to submit transactions directly to the chain without relying on a centralized infrastructure provider.")]),t._v(" "),a("p",[t._v("Another type of node is a "),a("strong",[t._v("light node")]),t._v(". A light node has only the runtime and the current state, but does not store past extrinsics and so cannot restore the full chain from genesis. Light nodes are useful for resource restricted devices. An interesting use-case of light nodes is a Chrome extension which is a node in its own right, running the runtime in WASM format: https://github.com/paritytech/substrate-light-ui")]),t._v(" "),a("h3",{attrs:{id:"fast-install-instructions-mac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fast-install-instructions-mac"}},[t._v("#")]),t._v(" Fast Install Instructions (Mac)")]),t._v(" "),a("blockquote",[a("p",[t._v("Not recommended if you're a validator. Please see "),a("a",{attrs:{href:"maintain-guides-secure-validator"}},[t._v("secure validator setup")])])]),t._v(" "),a("ul",[a("li",[t._v("Type terminal in the ios searchbar/searchlight to open the 'terminal' application")]),t._v(" "),a("li",[t._v("Install Homebrew within the terminal by running: "),a("code",[t._v('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"')])]),t._v(" "),a("li",[t._v("Then run: "),a("code",[t._v("brew install openssl cmake llvm")])]),t._v(" "),a("li",[t._v("Install Rust in your terminal by running: "),a("code",[t._v("curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh")])]),t._v(" "),a("li",[t._v("Once Rust is installed, run the following command to clone and build the kusama code:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone https://github.com/paritytech/polkadot kusama\ncd kusama\n./scripts/init.sh\ncargo build –-release\n")])])])]),t._v(" "),a("li",[t._v("Run the following command to start your node: "),a("code",[t._v('./target/release/polkadot --name "My node\'s name"')])]),t._v(" "),a("li",[t._v("Find your node at https://telemetry.polkadot.io/#list/Kusama")])]),t._v(" "),a("h3",{attrs:{id:"fast-install-instructions-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fast-install-instructions-windows"}},[t._v("#")]),t._v(" Fast Install Instructions (Windows)")]),t._v(" "),a("blockquote",[a("p",[t._v("This works only on Windows Pro with virtualization enabled.")])]),t._v(" "),a("blockquote",[a("p",[t._v("Not recommended if you're a validator. Please see "),a("a",{attrs:{href:"maintain-guides-secure-validator"}},[t._v("secure validator setup")])])]),t._v(" "),a("ul",[a("li",[t._v("Install WSL: https://docs.microsoft.com/en-us/windows/wsl/install-win10")]),t._v(" "),a("li",[t._v("Install Ubuntu (same webpage): https://docs.microsoft.com/en-us/windows/wsl/install-win10")]),t._v(" "),a("li",[t._v("Download Polkadot binary within Ubuntu by running: "),a("code",[t._v("curl -sL https://github.com/paritytech/polkadot/releases/download/v0.7.30/polkadot -o polkadot")])]),t._v(" "),a("li",[t._v("Run the following: "),a("code",[t._v("sudo chmod +x polkadot")])]),t._v(" "),a("li",[t._v("Run the following: "),a("code",[t._v('./polkadot --name "Your Node Name Here"')])]),t._v(" "),a("li",[t._v("Find your node at https://telemetry.polkadot.io/#list/Kusama")])]),t._v(" "),a("h3",{attrs:{id:"fast-install-instructions-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fast-install-instructions-linux"}},[t._v("#")]),t._v(" Fast Install Instructions (Linux)")]),t._v(" "),a("blockquote",[a("p",[t._v("Not recommended if you're a validator. Please see "),a("a",{attrs:{href:"maintain-guides-secure-validator"}},[t._v("secure validator setup")])])]),t._v(" "),a("ul",[a("li",[t._v("Download Polkadot binary by running: "),a("code",[t._v("curl -sL https://github.com/paritytech/polkadot/releases/download/v0.7.30/polkadot -o polkadot")])]),t._v(" "),a("li",[t._v("Run the following: "),a("code",[t._v("sudo chmod +x polkadot")])]),t._v(" "),a("li",[t._v("Run the following: "),a("code",[t._v('./polkadot --name "Your Node Name Here"')])]),t._v(" "),a("li",[t._v("Find your node at https://telemetry.polkadot.io/#list/Kusama")])]),t._v(" "),a("h2",{attrs:{id:"get-substrate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-substrate"}},[t._v("#")]),t._v(" Get Substrate")]),t._v(" "),a("p",[t._v("Follow instructions as outlined "),a("a",{attrs:{href:"https://www.substrate.io/kb/getting-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(" - note that Windows users will have their work cut out for them. It's better to use a virtual machine instead.")]),t._v(" "),a("p",[t._v("Test if the installation was successful by running "),a("code",[t._v("cargo --version")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("λ cargo --version\ncargo "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.41")]),t._v(".0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("626f0f40e "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-12-03"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"clone-and-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-and-build"}},[t._v("#")]),t._v(" Clone and Build")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://github.com/paritytech/polkadot",target:"_blank",rel:"noopener noreferrer"}},[t._v("paritytech/polkadot"),a("OutboundLink")],1),t._v(" repo's master branch contains the latest Kusama code.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/paritytech/polkadot kusama\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" kusama\n./scripts/init.sh\ncargo build --release\n")])])]),a("p",[t._v("Alternatively, check out a specific tagged release:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/paritytech/polkadot kusama\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" kusama\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout tags/v0.7.27\n./scripts/init.sh\ncargo build --release\n")])])]),a("h2",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[t._v("#")]),t._v(" Run")]),t._v(" "),a("p",[t._v("The built binary will be in the "),a("code",[t._v("target/release")]),t._v(" folder, called "),a("code",[t._v("polkadot")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./target/release/polkadot --name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My node\'s name"')]),t._v("\n")])])]),a("p",[t._v("Use the "),a("code",[t._v("--help")]),t._v(" flag to find out which flags you can use when running the node. For example, if "),a("a",{attrs:{href:"maintain-wss"}},[t._v("connecting to your node remotely")]),t._v(", you'll probably want to use "),a("code",[t._v("--ws-external")]),t._v(" and "),a("code",[t._v("--rpc-cors all")]),t._v(".")]),t._v(" "),a("p",[t._v("The syncing process will take a while depending on your bandwidth, processing power, disk speed and RAM. On a $10 DigitalOcean droplet, the process can complete in some 36 hours.")]),t._v(" "),a("p",[t._v("Congratulations, you're now syncing with Kusama. Keep in mind that the process is identical when using any other Substrate chain.")]),t._v(" "),a("h2",{attrs:{id:"running-an-archive-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-an-archive-node"}},[t._v("#")]),t._v(" Running an Archive Node")]),t._v(" "),a("p",[t._v("When running as a simple sync node (above), only the state of the past 256 blocks will be kept. When validating, it defaults to "),a("a",{attrs:{href:"#types-of-nodes"}},[t._v("archive mode")]),t._v(". To keep the full state use the "),a("code",[t._v("--pruning")]),t._v(" flag:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./target/release/polkadot --name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My node\'s name"')]),t._v(" --pruning archive\n")])])]),a("p",[t._v("It is possible to almost quadruple synchronization speed by using an additional flag: "),a("code",[t._v("--wasm-execution Compiled")]),t._v(". Note that this uses much more CPU and RAM, so it should be turned off after the node is in sync.")])])}),[],!1,null,null,null);e.default=n.exports}}]);