(window.webpackJsonp=window.webpackJsonp||[]).push([[951],{613:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("This guide assumes you have already set up a validator and would like to make it more resilient and protect against sybil attack or DDoS. It has same configuration of the "),a("a",{attrs:{href:"https://github.com/w3f/polkadot-secure-validator",target:"_blank",rel:"noopener noreferrer"}},[e._v("polkadot secure validator"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("In this guide, we will walk you through how to configure a validator that sits inside a VPN. The validator only talks to the public facing nodes to isolate it from the internet and reduce the chance of your validator being hacked.")]),e._v(" "),a("h2",{attrs:{id:"vpn-installation-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vpn-installation-configuration"}},[e._v("#")]),e._v(" VPN Installation & Configuration")]),e._v(" "),a("p",[e._v("We will use Wireguard to configure the VPN. Wireguard is a fast and secure VPN that uses state-of-the-art cryptography. If you want to learn more about Wireguard, please go "),a("a",{attrs:{href:"https://www.wireguard.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". Before we move on to the next step, configure the firewall to open the required ports.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ssh port")]),e._v("\nufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v("/tcp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# wireguard port")]),e._v("\nufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("51820")]),e._v("/udp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# libp2p port (Note: Only public node is required))")]),e._v("\nufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("30333")]),e._v("/tcp\nufw "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# double check the firewall rules")]),e._v("\nufw verbose\n")])])]),a("h3",{attrs:{id:"_1-install-wireguard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-wireguard"}},[e._v("#")]),e._v(" 1. Install Wireguard")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# install linux headers")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" linux-headers-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("uname")]),e._v(" -r"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\nadd-apt-repository ppa:wireguard/wireguard\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# you can skip this on Ubuntu 18.04")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" wireguard\n")])])]),a("h3",{attrs:{id:"_2-generating-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-generating-keys"}},[e._v("#")]),e._v(" 2. Generating Keys")]),e._v(" "),a("p",[e._v("There are two commands you will use quite a bit when setting up Wireguard; "),a("code",[e._v("wg")]),e._v(" is the configuration utility for managing Wireguard tunnel interfaces; "),a("code",[e._v("wg-quick")]),e._v(" is a utility for starting and stopping the interface.")]),e._v(" "),a("p",[e._v("To generate the public / private keypair, execute the following commands:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /etc/wireguard\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("umask")]),e._v(" 077\nwg genkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" privatekey "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" wg pubkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" publickey\n")])])]),a("p",[e._v("You will see that two files, "),a("code",[e._v("publickey")]),e._v(" and "),a("code",[e._v("privatekey")]),e._v(", have been created. As may be guessed from their names, "),a("code",[e._v("publickey")]),e._v(" contains the public key and "),a("code",[e._v("privatekey")]),e._v(" contains the private key of the keypair.")]),e._v(" "),a("h3",{attrs:{id:"_3-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-configuration"}},[e._v("#")]),e._v(" 3. Configuration")]),e._v(" "),a("p",[e._v("Now create a "),a("code",[e._v("wg0.conf")]),e._v(" file under the "),a("code",[e._v("/etc/wireguard/")]),e._v(" directory. This file will be used to configure the interface.")]),e._v(" "),a("p",[e._v("Here is a "),a("code",[e._v("wg0.conf")]),e._v(" configuration template for the "),a("strong",[e._v("validator")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Interface"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# specify the address you want to assign for this machine.")]),e._v("\nAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.0")]),e._v(".0.1/32\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# the private key you just generated")]),e._v("\nPrivateKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" 8MeWtQjBrmYazzwni7s/9Ow37U8eECAfAs0AIuffFng"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# listening port of your server")]),e._v("\nListenPort "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("51820")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# if you use wg to add a new peer when running, it will automatically")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# save the newly added peers to your configuration file")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# without requiring a restart")]),e._v("\nSaveConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Public Node A")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Peer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# replace it to the public node A public key")]),e._v("\nPublicKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Vdepw3JhRKDytCwjwA0nePLFiNsfB4KxGewl4YwAFRg")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# public ip address for your public node machine")]),e._v("\nEndpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("112.223")]),e._v(".334.445:51820\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# replace it to the public node A interface address")]),e._v("\nAllowedIPs "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.0")]),e._v(".0.2/32\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# keep the connection alive by sending a handshake every 21 seconds")]),e._v("\nPersistentKeepalive "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v("\n")])])]),a("blockquote",[a("p",[e._v("Note: In this guide, we only set up 1 peer (public node)")])]),e._v(" "),a("p",[e._v("You need to do the previous steps (1 and 2) again in your "),a("strong",[e._v("public node")]),e._v(" but the "),a("code",[e._v("wg0.conf")]),e._v(" configuration file will look like this:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Interface"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.0")]),e._v(".0.2/32\nPrivateKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("eCii0j3IWi4w0hScc8myUj5QjXjjt5rp1VVuqlEmM24")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\nListenPort "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("51820")]),e._v("\nSaveConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Validator")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Peer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# replace this with the validator public key")]),e._v("\nPublicKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" iZeq+jm4baF3pTWR1K1YEyLPhrfpIckGjY/DfwCoKns"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# public ip address of the validator")]),e._v("\nEndpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("55.321")]),e._v(".234.4:51820\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# replace it with the validator interface address")]),e._v("\nAllowedIPs "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.0")]),e._v(".0.1/32\nPersistentKeepalive "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v("\n")])])]),a("h3",{attrs:{id:"_4-test-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-test-connection"}},[e._v("#")]),e._v(" 4. Test-Connection")]),e._v(" "),a("p",[e._v("If everything goes well, you are ready to test the connection.")]),e._v(" "),a("p",[e._v("To start the tunnel interface, execute the following command in both your "),a("code",[e._v("validator")]),e._v(" and "),a("code",[e._v("public node")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("wg-quick up wg0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The console would output something like this")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#[#] ip link add wg0 type wireguard")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#[#] wg setconf wg0 /dev/fd/63")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#[#] ip -4 address add 10.0.0.1/24 dev wg0")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#[#] ip link set mtu 1420 up dev wg0")]),e._v("\n")])])]),a("p",[e._v("You can check the status of the interface by running "),a("code",[e._v("wg")]),e._v(" :")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Output")]),e._v("\n interface: wg0\n  public key: iZeq+jm4baF3pTWR1K1YEyLPhrfpIckGjY/DfwCoKns"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n  private key: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  listening port: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("51820")]),e._v("\n\npeer: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Vdepw3JhRKDytCwjwA0nePLFiNsfB4KxGewl4YwAFRg")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n  endpoint: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("112.223")]),e._v(".334.445:51820\n  allowed ips: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.0")]),e._v(".0.2/32\n  latest handshake: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("18")]),e._v(" seconds ago\n  transfer: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("580")]),e._v(" B received, "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("460")]),e._v(" B sent\n  persistent keepalive: every "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v(" seconds\n")])])]),a("p",[e._v("You can then use "),a("code",[e._v("ping")]),e._v(" to verify the connectivity between the nodes.")]),e._v(" "),a("p",[e._v("In case you want to update "),a("code",[e._v("wg0.conf")]),e._v(", run "),a("code",[e._v("wg-quick down wg0")]),e._v(" to stop the interface first.")]),e._v(" "),a("h3",{attrs:{id:"_5-start-your-sentry-node-and-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-start-your-sentry-node-and-validator"}},[e._v("#")]),e._v(" 5. Start your Sentry Node and Validator")]),e._v(" "),a("p",[e._v("After you have started the "),a("code",[e._v("wg0")]),e._v(" interface on your public node and validator, do spend a little bit of time to take a look at the following description of those flags you are going to use.")]),e._v(" "),a("p",[a("code",[e._v("--sentry")]),e._v(" - This would be required for your public node to be an authority as an observer. That means it acts the same as a validator node but without holding keys / signing. And the difference between running a full node versus adding an extra "),a("code",[e._v("--sentry")]),e._v(" flag is that a full node might not have all the data the validator needs to validate properly.")]),e._v(" "),a("p",[a("code",[e._v("--reserved-nodes")]),e._v(" - The node will try to connect to these nodes and always accept connections from them, but it will still connect and accept connections from other nodes as well.")]),e._v(" "),a("p",[a("code",[e._v("--reserved-only")]),e._v(" - Only allows the connection from reserved nodes you defined")]),e._v(" "),a("p",[e._v("You need to execute the following command to start your validator and then copy the node's identity first. Then stop it.")]),e._v(" "),a("p",[a("code",[e._v("polkadot --validator")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2020-04-16 19:40:52 ----------------------------\n2020-04-16 19:40:52 This chain is not in any way\n2020-04-16 19:40:52       endorsed by the\n2020-04-16 19:40:52      KUSAMA FOUNDATION\n2020-04-16 19:40:52 ----------------------------\n2020-04-16 19:40:52 Parity Polkadot\n2020-04-16 19:40:52 ✌️  version 0.7.29-13ec3023-x86_64-linux-gnu\n2020-04-16 19:40:52 ❤️  by Parity Technologies <admin@parity.io>, 2017-2020\n2020-04-16 19:40:52 📋 Chain specification: Kusama\n2020-04-16 19:40:52 🏷  Node name: 😍 Anson demo\n2020-04-16 19:40:52 👤 Role: AUTHORITY\n2020-04-16 19:40:52 ⛓  Native runtime: kusama-1057:2(parity-kusama-1)\n2020-04-16 19:40:53 📦 Highest known block at #1913153\n2020-04-16 19:40:53 🏷  Local node identity is: QmR4kE8mxKcPjtvEofN59B176tKxsKoNV5Ugbf86vmfJnY\n2020-04-16 19:40:53 👶 Starting BABE Authorship worker\n")])])]),a("p",[e._v("Now start your sentry with "),a("code",[e._v("--sentry")]),e._v(" flag.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('polkadot \\\n--name "Sentry-A" \\\n--sentry /ip4/VALIDATOR_VPN_ADDRESS/tcp/30333/p2p/VALIDATOR_NODE_IDENTITY\n')])])]),a("p",[e._v("Result:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2020-04-16 19:41:53 ----------------------------\n2020-04-16 19:41:53 This chain is not in any way\n2020-04-16 19:41:53       endorsed by the\n2020-04-16 19:41:53      KUSAMA FOUNDATION\n2020-04-16 19:41:53 ----------------------------\n2020-04-16 19:41:53 Parity Polkadot\n2020-04-16 19:41:53 ✌️  version 0.7.29-13ec3023-x86_64-linux-gnu\n2020-04-16 19:41:53 ❤️  by Parity Technologies <admin@parity.io>, 2017-2020\n2020-04-16 19:41:53 📋 Chain specification: Kusama\n2020-04-16 19:41:53 🏷  Node name: Sentry ANSON - A\n2020-04-16 19:41:53 👤 Role: SENTRY\n2020-04-16 19:41:53 ⛓  Native runtime: kusama-1057:2(parity-kusama-1)\n2020-04-16 19:41:53 📦 Highest known block at #1913161\n2020-04-16 19:41:53 🏷  Local node identity is: QmSAg4uHhVK1CHt5TJGPrWVWDJBVjgwKd1wSv88DPCtEHa\n2020-04-16 19:41:53 〽️ Prometheus server started at 127.0.0.1:9615\n")])])]),a("p",[e._v("You are also required to use the sentry's node identity when starting your validator, so make sure to save it somewhere else as well. Then start your validator.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('polkadot \\\n--name "Validator" \\\n--reserved-only \\\n--reserved-nodes /ip4/SENTRY_VPN_ADDRESS/tcp/30333/p2p/SENTRY_NODE_IDENTITY \\\n--validator\n')])])]),a("p",[e._v("You should see your validator has 1 peer, that is a connection from your sentry node. Do the above steps to spin up few more if you think one sentry node is not enough.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2020-04-16 19:42:57 💤 Idle (1 peers), best: #1913174 (0x24f6…14f9), finalized #1913151 (0xced8…492b), ⬇ 18.0kiB/s ⬆ 4.5kiB/s\n2020-04-16 19:42:58 🔍 Discovered new external address for our node: /ip4/10.0.0.164/tcp/30333/p2p/12D3KooWEnA6JqCk59k8SNShYDGDHTfdqGJLsTpZjgLRT6rAqfDg\n2020-04-16 19:43:00 ✨ Imported #1913175 (0x76c0…ad3e)\n2020-04-16 19:43:00 Starting parachain attestation session on top of parent 0x76c0c4649d290c840523316ac157380dd703fa1b9fb83b326756ce35ff49ad3e. Local parachain duty is None\n2020-04-16 19:43:02 💤 Idle (1 peers), best: #1913175 (0x76c0…ad3e), finalized #1913172 (0x5925…15bd), ⬇ 33.0kiB/s ⬆ 7.1kiB/s\n2020-04-16 19:43:07 ✨ Imported #1913176 (0xf1bc…3ace)\n2020-04-16 19:43:07 Starting parachain attestation session on top of parent 0xf1bc3c7ed57070b4ad48bfc564a16827dc7486582f97abf00ff38061e4ef3ace. Local parachain duty is None\n2020-04-16 19:43:07 💤 Idle (1 peers), best: #1913176 (0xf1bc…3ace), finalized #1913173 (0x4c97…e6b6), ⬇ 16.4kiB/s ⬆ 5.9kiB/s\n2020-04-16 19:43:08 ✨ Imported #1913176 (0x672e…6123)\n2020-04-16 19:43:12 💤 Idle (1 peers), best: #1913176 (0xf1bc…3ace), finalized #1913174 (0x24f6…14f9), ⬇ 43.7kiB/s ⬆ 29.4kiB/s\n2020-04-16 19:43:13 ✨ Imported #1913177 (0x4e1b…209f)\n2020-04-16 19:43:13 Starting parachain attestation session on top of parent 0x4e1b8fd258739d5784fbdf7cf156e2ebfd90159b21427b8e041a3aa73b99209f. Local parachain duty is None\n2020-04-16 19:43:14 ✨ Imported #1913177 (0x9b77…67c7)\n2020-04-16 19:43:17 💤 Idle (1 peers), best: #1913177 (0x4e1b…209f), finalized #1913174 (0x24f6…14f9)\n")])])]),a("p",[e._v("Congratulations! You have successfully set up a validator with a public facing node and now have a more secure way of running your validator.")])])}),[],!1,null,null,null);t.default=n.exports}}]);