(window.webpackJsonp=window.webpackJsonp||[]).push([[765],{380:function(e,t,a){"use strict";a.r(t);var o=a(42),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("This guide will instruct you how to set up a validator node on the Kusama network.")]),e._v(" "),a("h2",{attrs:{id:"preliminaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preliminaries"}},[e._v("#")]),e._v(" Preliminaries")]),e._v(" "),a("p",[e._v("Running a validator on a live network is a lot of responsibility! You will be accountable for not only your own stake, but also the stake of your current nominators. If you make a mistake and get slashed, your money and your reputation will be at risk. However, running a validator can also be very rewarding, knowing that you contribute to the security of a decentralized network while growing your stash.")]),e._v(" "),a("p",[e._v("Since security is so important to running a successful validator, you should take a look at the "),a("a",{attrs:{href:"maintain-guides-secure-validator"}},[e._v("secure validator")]),e._v(" information to make you understand the factors to consider when constructing your infrastructure. The Web3 Foundation also maintains a "),a("a",{attrs:{href:"https://github.com/w3f/polkadot-secure-validator",target:"_blank",rel:"noopener noreferrer"}},[e._v("reference implementation for a secure validator set-up"),a("OutboundLink")],1),e._v(" that you can use by deploying yourself. As you progress in your journey as a validator, you will likely want to use this repository as a "),a("em",[e._v("starting point")]),e._v(" for your own modifications and customizations.")]),e._v(" "),a("p",[e._v("If you need help, please reach out on the "),a("a",{attrs:{href:"https://riot.im/app/#/room/#KusamaValidatorLounge:polkadot.builders",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kusama validator chat"),a("OutboundLink")],1),e._v(" on Riot. The team and other validators are there to help answer questions and provide experience. If you have a more significant proposal, you can write it on the "),a("a",{attrs:{href:"https://forum.kusama.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kusama forum"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"how-many-ksm-do-i-need"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-many-ksm-do-i-need"}},[e._v("#")]),e._v(" How Many KSM Do I Need?")]),e._v(" "),a("p",[e._v("You can have a rough estimate on that by using the methods listed "),a("a",{attrs:{href:"learn-faq#what-are-the-ways-to-find-out-the-minimum-stake-necessary-for-the-validators"}},[e._v("here")]),e._v(". Validators are elected based on "),a("a",{attrs:{href:"learn-phragmen"}},[e._v("Phragmen's algorithm")]),e._v(". To be elected into the set, you need a minimum stake behind your validator. This stake can come from yourself or from "),a("a",{attrs:{href:"maintain-nominator"}},[e._v("nominators")]),e._v(". This means that as a minimum, you will need enough KSM to set up Stash and Controller "),a("a",{attrs:{href:"learn-keys"}},[e._v("accounts")]),e._v(" with the existential deposit, plus a little extra for transaction fees. The rest can come from nominators.")]),e._v(" "),a("p",[a("strong",[e._v("Warning:")]),e._v(" Any KSM that you stake for your validator is liable to be slashed, meaning that an insecure or improper setup may result in loss of KSM tokens! If you are not confident in your ability to run a validator node, it is recommended to nominate your KSM to a trusted validator node instead.")]),e._v(" "),a("h2",{attrs:{id:"initial-set-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-set-up"}},[e._v("#")]),e._v(" Initial Set-up")]),e._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("You will likely run your validator on a cloud server running Linux. You may choose whatever "),a("a",{attrs:{href:"#vps-list"}},[e._v("VPS")]),e._v(" provider that your prefer, and whatever operating system you are comfortable with. For this guide we will be using "),a("strong",[e._v("Ubuntu 18.04")]),e._v(", but the instructions should be similar for other platforms.")]),e._v(" "),a("p",[e._v("You will not need a very powerful machine to run your validator, but you should be aware of the resource constraints. The most important resource for your validator node is networking bandwidth, followed by its storage and memory capabilities. The bare minimum requirements for a machine to run a validator are as follows:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Storage:")]),e._v(" 40GB - 80GB. Kusama doesn't have very heavy storage requirements yet so something in this range will be fine, just keep in mind you may have to upgrade it later if the chain state becomes very big.")]),e._v(" "),a("li",[a("strong",[e._v("Memory:")]),e._v(" 2GB - 8GB. 2GB is really the minimum memory you should operate your validator with, anything less than this make build times too inconvenient. For better performance you can bump it up to 4GB or 8GB, but anything more than that is probably over-kill.")]),e._v(" "),a("li",[a("strong",[e._v("CPU:")]),e._v(" 1 - 2. One CPU is okay, but 2 is better. Again, this is a performance preference.")])]),e._v(" "),a("p",[e._v("On most cloud service providers, these specs are usually within the $10 - $20 per month range.")]),e._v(" "),a("h3",{attrs:{id:"install-rust"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-rust"}},[e._v("#")]),e._v(" Install Rust")]),e._v(" "),a("p",[e._v("Once you choose your cloud service provider and set-up your new server, the first thing you will do is install Rust.")]),e._v(" "),a("p",[e._v("If you have never installed Rust, you should do this first. This command will fetch the latest version of Rust and install it.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://sh.rustup.rs -sSf "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v("\n")])])]),a("p",[e._v("Otherwise, if you have already installed Rust, run the following command to make sure you are using the latest version.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("rustup update\n")])])]),a("p",[e._v("Finally, run this command to install the necessary dependencies for compiling and running the Kusama node software.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" clang pkg-config libssl-dev build-essential\n")])])]),a("p",[e._v("Note - if you are using OSX and you have "),a("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),a("OutboundLink")],1),e._v(" installed, you can issue the following equivalent command INSTEAD of the previous one:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" cmake pkg-config openssl "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" llvm\n")])])]),a("h3",{attrs:{id:"install-configure-network-time-protocol-ntp-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-configure-network-time-protocol-ntp-client"}},[e._v("#")]),e._v(" Install & Configure Network Time Protocol (NTP) Client")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Network_Time_Protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("NTP"),a("OutboundLink")],1),e._v(" is a networking protocol designed to synchronize the clocks of computers over a network. NTP allows you to synchronize the clocks of all the systems within the network. Currently it is required that validators' local clocks stay reasonably in sync, so you should be running NTP or a similar service. You can check whether you have the NTP client by running:")]),e._v(" "),a("p",[a("em",[e._v("If you are using Ubuntu 18.04 / 19.04, NTP Client should be installed by default.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("timedatectl\n")])])]),a("p",[e._v("If NTP is installed and running, you should see "),a("code",[e._v("System clock synchronized: yes")]),e._v(" (or a similar message). If you do not see it, you can install it by executing:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" ntp\n")])])]),a("p",[e._v("ntpd will be started automatically after install. You can query ntpd for status information to verify that everything is working:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" ntpq -p\n")])])]),a("h3",{attrs:{id:"building-and-installing-the-polkadot-binary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-and-installing-the-polkadot-binary"}},[e._v("#")]),e._v(" Building and Installing the "),a("code",[e._v("polkadot")]),e._v(" Binary")]),e._v(" "),a("p",[e._v("You will need to build the "),a("code",[e._v("polkadot")]),e._v(" binary from the "),a("a",{attrs:{href:"https://github.com/paritytech/polkadot",target:"_blank",rel:"noopener noreferrer"}},[e._v("paritytech/polkadot"),a("OutboundLink")],1),e._v(" repository on GitHub using the source code available in the "),a("strong",[e._v("v0.7")]),e._v(" branch.")]),e._v(" "),a("p",[e._v("You should generally use the latest "),a("strong",[e._v("0.7.x")]),e._v(" tag. At the time of writing, this was "),a("strong",[e._v("0.7.28")]),e._v(', but you should review the output from the "git tag" command ('),a("code",[e._v('git tag | grep "$v\\0\\.7"')]),e._v(") to see a list of all the potential 0.7 releases. You should replace "),a("code",[e._v("v0.7.28")]),e._v(" with the latest build (i.e., the highest number). You can also find the latest Kusama version on the "),a("a",{attrs:{href:"https://github.com/paritytech/polkadot/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("release"),a("OutboundLink")],1),e._v(" tab.")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: If you prefer to use SSH rather than HTTPS, you can replace the first line of the below with "),a("code",[e._v("git clone git@github.com:paritytech/polkadot.git")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/paritytech/polkadot.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" polkadot\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$v")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[e._v("\\0")]),e._v('\\.7"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout v0.7.28\n./scripts/init.sh\ncargo build --release\n")])])]),a("p",[e._v("This step will take a while (generally 15 - 30 minutes, depending on your hardware).")]),e._v(" "),a("p",[e._v("If you are interested in generating keys locally, you can also install "),a("code",[e._v("subkey")]),e._v(" from the same directory. You may then take the generated "),a("code",[e._v("subkey")]),e._v(" executable and transfer it to an air-gapped machine for extra security.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("cargo "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --force --git https://github.com/paritytech/substrate subkey\n")])])]),a("h3",{attrs:{id:"synchronize-chain-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronize-chain-data"}},[e._v("#")]),e._v(" Synchronize Chain Data")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note:")]),e._v(" Validators must sync their nodes in archive mode to avoid being slashed. If you've already synced the chain, you must first remove the database with "),a("code",[e._v("polkadot purge-chain")]),e._v(" and then ensure that you run Polkadot with the "),a("code",[e._v("--pruning=archive")]),e._v(" option.")])]),e._v(" "),a("p",[e._v("You can begin syncing your node by running the following command:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./target/release/polkadot --pruning"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("archive\n")])])]),a("p",[e._v("if you do not want to start in validator mode right away.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" The "),a("code",[e._v("--pruning=archive")]),e._v(" flag is implied by the "),a("code",[e._v("--validator")]),e._v(" and "),a("code",[e._v("--sentry")]),e._v(" flags, so it is only required explicitly if you start your node without one of these two options. If you do not set your pruning to archive node, even when not running in validator and sentry mode, you will need to re-sync your database when you switch.")]),e._v(" "),a("p",[e._v("Depending on the size of the chain when you do this, this step may take anywhere from a few minutes to a few hours.")]),e._v(" "),a("p",[e._v("If you are interested in determining how much longer you have to go, your server logs (printed to STDOUT from the "),a("code",[e._v("polkadot")]),e._v(" process) will tell you the latest block your node has processed and verified. You can then compare that to the current highest block via "),a("a",{attrs:{href:"https://telemetry.polkadot.io/#list/Kusama",target:"_blank",rel:"noopener noreferrer"}},[e._v("Telemetry"),a("OutboundLink")],1),e._v(" or the "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/explorer",target:"_blank",rel:"noopener noreferrer"}},[e._v("PolkadotJS Block Explorer"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note:")]),e._v(" If you do not already have KSM, this is as far as you will be able to go until the end of the soft launch period. You can still run a node, but you will need to have a minimal amount of KSM to continue, as balance transfers are disabled during the soft launch. Please keep in mind that even for those with KSM, they will only be indicating their "),a("em",[e._v("intent")]),e._v(" to validate; they will also not be able to run a validator until the NPoS phase starts.")])]),e._v(" "),a("h2",{attrs:{id:"bond-ksm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bond-ksm"}},[e._v("#")]),e._v(" Bond KSM")]),e._v(" "),a("p",[e._v("It is highly recommended that you make your controller and stash accounts be two separate accounts. For this, you will create two accounts and make sure each of them have at least enough funds to pay the fees for making transactions. Keep most of your funds in the stash account since it is meant to be the custodian of your staking funds.")]),e._v(" "),a("p",[e._v("Make sure not to bond all your KSM balance since you will be unable to pay transaction fees from your bonded balance.")]),e._v(" "),a("p",[e._v("It is now time to set up our validator. We will do the following:")]),e._v(" "),a("ul",[a("li",[e._v("Bond the KSM of the Stash account. These KSM will be put at stake for the security of the network and can be slashed.")]),e._v(" "),a("li",[e._v("Select the Controller. This is the account that will decide when to start or stop validating.")])]),e._v(" "),a("p",[e._v("First, go to the "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/staking/actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Staking"),a("OutboundLink")],1),e._v(' section. Click on "Account Actions", and then the "New stake" button.')]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/guides/how-to-validate/polkadot-dashboard-bonding.jpg",alt:"dashboard bonding"}})]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Stash account")]),e._v(" - Select your Stash account. In this example, we will bond 100 milliKSMs - make sure that your Stash account contains "),a("em",[e._v("at least")]),e._v(" this much. You can, of course, stake more than this.")]),e._v(" "),a("li",[a("strong",[e._v("Controller account")]),e._v(" - Select the Controller account created earlier. This account will also need a small amount of KSM in order to start and stop validating.")]),e._v(" "),a("li",[a("strong",[e._v("Value bonded")]),e._v(" - How much KSM from the Stash account you want to bond/stake. Note that you do not need to bond all of the KSM in that account. Also note that you can always bond "),a("em",[e._v("more")]),e._v(" KSM later. However, "),a("em",[e._v("withdrawing")]),e._v(" any bonded amount requires the duration of the unbonding period. On Kusama, the unbonding period is 7 days. On Polkadot, the planned unbonding period is 28 days.")]),e._v(" "),a("li",[a("strong",[e._v("Payment destination")]),e._v(" - The account where the rewards from validating are sent. More info "),a("a",{attrs:{href:"https://wiki.polkadot.network/en/latest/polkadot/learn/staking/#reward-distribution",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("Once everything is filled in properly, click "),a("code",[e._v("Bond")]),e._v(" and sign the transaction with your Stash account.")]),e._v(" "),a("p",[e._v('After a few seconds, you should see an "ExtrinsicSuccess" message. You should now see a new card with all your accounts (note: you may need to refresh the screen). The bonded amount on the right corresponds to the funds bonded by the Stash account.')]),e._v(" "),a("h2",{attrs:{id:"set-session-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-session-keys"}},[e._v("#")]),e._v(" Set Session Keys")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note:")]),e._v(" The session keys are consensus critical, so if you are not sure if your node has the current session keys that you made the "),a("code",[e._v("setKeys")]),e._v(" transaction then you can use one of the two available RPC methods to query your node: "),a("a",{attrs:{href:"https://polkadot.js.org/api/substrate/rpc.html#haskey-publickey-bytes-keytype-text-bool",target:"_blank",rel:"noopener noreferrer"}},[e._v("hasKey"),a("OutboundLink")],1),e._v(" to check for a specific key or "),a("a",{attrs:{href:"https://polkadot.js.org/api/substrate/rpc.html#hassessionkeys-sessionkeys-bytes-bool",target:"_blank",rel:"noopener noreferrer"}},[e._v("hasSessionKeys"),a("OutboundLink")],1),e._v(" to check the full session key public key string.")])]),e._v(" "),a("p",[e._v("Once your node is fully synced, stop the process by pressing Ctrl-C. At your terminal prompt, you will now start running the node in validator mode with a flag allowing unsafe RPC calls, needed for some advanced operations.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./target/release/polkadot --validator --name "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"name on telemetry"')]),e._v(" --unsafe-rpc-expose\n")])])]),a("p",[e._v("You can give your validator any name that you like, but note that others will be able to see it, and it will be included in the list of all servers using the same telemetry server. Since numerous people are using telemetry, it is recommended that you choose something likely to be unique. Note that the "),a("code",[e._v("--unsafe-rpc-expose")]),e._v(" flag is needed in order to set the session key as shown below.")]),e._v(" "),a("h3",{attrs:{id:"generating-the-session-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-the-session-keys"}},[e._v("#")]),e._v(" Generating the Session Keys")]),e._v(" "),a("p",[e._v("You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what associates your validator node with your Controller account on Polkadot.")]),e._v(" "),a("h4",{attrs:{id:"option-1-polkadotjs-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-1-polkadotjs-apps"}},[e._v("#")]),e._v(" Option 1: PolkadotJS-APPS")]),e._v(" "),a("p",[e._v("You can generate your "),a("a",{attrs:{href:"https://wiki.polkadot.network/en/latest/polkadot/learn/keys/#session-key",target:"_blank",rel:"noopener noreferrer"}},[e._v("Session keys"),a("OutboundLink")],1),e._v(" in the client via the apps RPC. If you are doing this, make sure that you have the PolkadotJS-Apps explorer attached to your validator node. You can configure the apps dashboard to connect to the endpoint of your validator in the Settings tab. If you are connected to a default endpoint hosted by Parity of Web3 Foundation, you will not be able to use this method since making RPC requests to this node would effect the local keystore hosted on a "),a("em",[e._v("public node")]),e._v(" and you want to make sure you are interacting with the keystore for "),a("em",[e._v("your node")]),e._v(".")]),e._v(" "),a("p",[e._v("Once ensuring that you have connected to your node, the easiest way to set session keys for your node is by calling the "),a("code",[e._v("author_rotateKeys")]),e._v(" RPC request to create new keys in your validator's keystore. Navigate to Toolbox tab and select RPC Calls then select the author > rotateKeys() option and remember to save the output that you get back for a later step.")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/guides/how-to-validate/polkadot-explorer-rotatekeys-rpc.jpg",alt:"Explorer RPC call"}})]),e._v(" "),a("h4",{attrs:{id:"option-2-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-2-cli"}},[e._v("#")]),e._v(" Option 2: CLI")]),e._v(" "),a("p",[e._v("If you are on a remote server, it is easier to run this command on the same machine (while the node is running with the default HTTP RPC port configured):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Content-Type: application/json"')]),e._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\'')]),e._v(" http://localhost:9933\n")])])]),a("p",[e._v('The output will have a hex-encoded "result" field. The result is the concatenation of the four public keys. Save this result for a later step.')]),e._v(" "),a("p",[e._v("You can restart your node at this point, omitting the "),a("code",[e._v("--unsafe-rpc-expose")]),e._v(" flag as it is no longer needed.")]),e._v(" "),a("h3",{attrs:{id:"submitting-the-setkeys-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submitting-the-setkeys-transaction"}},[e._v("#")]),e._v(" Submitting the "),a("code",[e._v("setKeys")]),e._v(" Transaction")]),e._v(" "),a("p",[e._v("You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what associates your validator with your Controller account.")]),e._v(" "),a("p",[e._v("Go to "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/staking/actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Staking > Account Actions"),a("OutboundLink")],1),e._v(', and click "Set Session Key" on the bonding account you generated earlier. Enter the output from '),a("code",[e._v("author_rotateKeys")]),e._v(' in the field and click "Set Session Key".')]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/guides/how-to-validate/set-session-key-1.jpg",alt:"staking-change-session"}}),e._v(" "),a("img",{attrs:{src:"assets/guides/how-to-validate/set-session-key-2.jpg",alt:"staking-session-result"}})]),e._v(" "),a("p",[e._v("Submit this extrinsic and you are now ready to start validating.")]),e._v(" "),a("h2",{attrs:{id:"validate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validate"}},[e._v("#")]),e._v(" Validate")]),e._v(" "),a("p",[e._v("To verify that your node is live and synchronized, head to "),a("a",{attrs:{href:"https://telemetry.polkadot.io/#/Kusama",target:"_blank",rel:"noopener noreferrer"}},[e._v("Telemetry"),a("OutboundLink")],1),e._v(" and find your node. Note that this will show all nodes on the Kusama network, which is why it is important to select a unique name!")]),e._v(" "),a("p",[e._v('If everything looks good, go ahead and click on "Validate" in Polkadot UI.')]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/guides/how-to-validate/polkadot-dashboard-validate.jpg",alt:"dashboard validate"}}),e._v(" "),a("img",{attrs:{src:"assets/guides/how-to-validate/polkadot-dashboard-validate-modal.jpg",alt:"dashboard validate"}})]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Payment preferences")]),e._v(" - Rewards you will keep, the rest will be shared among you and your nominators.")])]),e._v(" "),a("p",[e._v('Click "Validate".')]),e._v(" "),a("p",[e._v('If you go to the "Staking" tab, you will see a list of active validators currently running on the network. At the top of the page, it shows how many validator slots are available as well as how many nodes have signaled their intention to be a validator. You can also go to the "Waiting" tab to double check to see whether your node is listed there.')]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/guides/how-to-validate/polkadot-dashboard-staking.jpg",alt:"staking queue"}})]),e._v(" "),a("p",[e._v("The validator set is refreshed every era. In the next era, if there is a slot available and your node is selected to join the validator set, your node will become an active validator. Until then, it will remain in the "),a("em",[e._v("waiting")]),e._v(" queue. If your validator is not selected to become part of the validator set, it will remain in the "),a("em",[e._v("waiting")]),e._v(" queue until it is. There is no need to re-start if you are not selected for the validator set in a particular era. However, it may be necessary to increase the number of KSMs staked or seek out nominators for your validator in order to join the validator set.")]),e._v(" "),a("p",[a("strong",[e._v("Congratulations!")]),e._v(" If you have followed all of these steps, and been selected to be a part of the validator set, you are now running a Kusama validator! If you need help, reach out on the "),a("a",{attrs:{href:"https://forum.kusama.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kusama forum"),a("OutboundLink")],1),e._v(" or in the "),a("a",{attrs:{href:"https://riot.im/app/#/room/#KusamaValidatorLounge:polkadot.builders",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kusama Validator chat"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("h3",{attrs:{id:"why-am-i-unable-to-synchronize-the-chain-with-0-peers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-am-i-unable-to-synchronize-the-chain-with-0-peers"}},[e._v("#")]),e._v(" Why am I unable to synchronize the chain with 0 peers?")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/guides/how-to-validate/polkadot-zero-peer.jpg",alt:"zero-peer"}})]),e._v(" "),a("p",[e._v("Make sure to enable "),a("code",[e._v("30333")]),e._v(" libp2p port. Eventually, it will take a little bit of time to discover other peers over the network.")]),e._v(" "),a("h3",{attrs:{id:"how-do-i-clear-all-my-chain-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-clear-all-my-chain-data"}},[e._v("#")]),e._v(" How do I clear all my chain data?")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./target/release/polkadot purge-chain\n")])])]),a("h2",{attrs:{id:"vps-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vps-list"}},[e._v("#")]),e._v(" VPS List")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.ovh.com.au/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OVH"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.digitalocean.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Digital Ocean"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.vultr.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vultr"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.linode.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linode"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://contabo.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Contabo"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.scaleway.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scaleway"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"using-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-docker"}},[e._v("#")]),e._v(" Using Docker")]),e._v(" "),a("p",[e._v("If you have Docker installed, you can use it to start your validator node without needing to build the binary. You can do this with a simple one line command:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ docker run parity/polkadot:v0.7.28 --validator --name "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"name on telemetry"')]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);