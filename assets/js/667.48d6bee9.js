(window.webpackJsonp=window.webpackJsonp||[]).push([[667],{799:function(e,t,a){"use strict";a.r(t);var o=a(42),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Validators in a Proof of Stake network are responsible for keeping the network in consensus and verifying state transitions. As the number of validators is limited, validators in the set have the responsibility to be online and faithfully execute their tasks.")]),e._v(" "),a("p",[e._v("This primarily means that validators:")]),e._v(" "),a("ul",[a("li",[e._v("Must have infrastructure that protects the validator's signing keys so that an attacker cannot take control and commit slashable behavior.")]),e._v(" "),a("li",[e._v("Must be high availability.")])]),e._v(" "),a("h2",{attrs:{id:"high-availability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#high-availability"}},[e._v("#")]),e._v(" High Availability")]),e._v(" "),a("p",[e._v('The best way to keep your validator available is to have it behind a layer of "sentry nodes". Sentry nodes are full nodes that can be provisioned on cloud infrastructure, e.g. AWS, GCP, Azure. Your validator node should be placed in a private data center and limit its connections to the sentry nodes.')]),e._v(" "),a("p",[e._v("Sentry nodes can filter the messages that they send to the validator, never sending duplicates so that the validator doesn't get spammed. Likewise, if a sentry node is attacked and goes offline, other instances can be provisioned to replace it. DDoS attacks should never make it to the validator.")]),e._v(" "),a("p",[e._v("As validators are expected to have 100% uptime, node operators may want to have failovers. In this setup, there would be one primary validator, and a second one that only responds to messages if the primary goes offline.")]),e._v(" "),a("p",[e._v("If multiple validators do end up online at the same time, your validator may end up signing multiple blocks and will thus get slashed for equivocation. A properly configured, highly available setup like this will reduce your chances of getting slashed for non-responsiveness, but a misconfigured setup will increase your chances of getting slashed for equivocation. This is a trade-off, and we expect that different validators will make different decisions on which side they err towards.")]),e._v(" "),a("h2",{attrs:{id:"key-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-management"}},[e._v("#")]),e._v(" Key Management")]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"https://wiki.polkadot.network/en/latest/polkadot/learn/keys/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot Keys guide"),a("OutboundLink")],1),e._v(" for more information on keys. The keys that are of primary concern for validator infrastructure are the Session keys. These keys sign messages related to consensus and parachains. Although Session keys are "),a("em",[e._v("not")]),e._v(" account keys and therefore cannot transfer funds, an attacker could use them to commit slashable behavior.")]),e._v(" "),a("p",[e._v("Session keys are generated inside the node via RPC call. See the "),a("a",{attrs:{href:"https://guide.kusama.network/en/latest/try/validate/#set-the-session-key",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kusama guide"),a("OutboundLink")],1),e._v(" for instructions on setting Session keys. These should be generated and kept within your client. When you generate new Session keys, you must submit an extrinsic (a Session certificate) from your Controller key telling the chain your new Session keys.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("NOTE:")]),e._v(" Session keys can also be generated outside the client and inserted into the client's keystore via RPC. For most users, we recommend using the key generation functionality within the client.")])]),e._v(" "),a("h3",{attrs:{id:"signing-outside-the-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signing-outside-the-client"}},[e._v("#")]),e._v(" Signing Outside the Client")]),e._v(" "),a("p",[e._v("In the future, Polkadot will support signing payloads outside the client so that keys can be stored on another device, e.g. a hardware security module (HSM) or secure enclave. For the time being, however, Session key signatures are performed within the client.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("NOTE:")]),e._v(" HSMs are not a panacea. They do not incorporate any logic and will just sign and return whatever payload they receive. Therefore, an attacker who gains access to your validator node could still commit slashable behavior.")])]),e._v(" "),a("p",[e._v("An example of highly available, secure setup would be a layer of sentry nodes in front of multiple validators connected to a single signing machine. This machine could implement signing logic to avoid equivocation, even if an attacker gained access to a validator node.")]),e._v(" "),a("h2",{attrs:{id:"monitoring-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-tools"}},[e._v("#")]),e._v(" Monitoring Tools")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/paritytech/substrate-telemetry",target:"_blank",rel:"noopener noreferrer"}},[e._v("Telemetry"),a("OutboundLink")],1),e._v(" This tracks your node details including the version you are running, block height, CPU & memory usage, block propagation time, etc.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus"),a("OutboundLink")],1),e._v("-based monitoring stack, including "),a("a",{attrs:{href:"https://grafana.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grafana"),a("OutboundLink")],1),e._v(" for dashboards and log aggregation. It includes alerting, querying, visualization, and monitoring features and works for both cloud and on-premise systems. The data from "),a("code",[e._v("substrate-telemetry")]),e._v(" can be made available to Prometheus through exporters like "),a("a",{attrs:{href:"https://github.com/w3f/substrate-telemetry-exporter",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),a("OutboundLink")],1),e._v(".")])])]),e._v(" "),a("h2",{attrs:{id:"linux-best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-best-practices"}},[e._v("#")]),e._v(" Linux Best Practices")]),e._v(" "),a("ul",[a("li",[e._v("Never use the root user.")]),e._v(" "),a("li",[e._v("Always update the security patches for your OS.")]),e._v(" "),a("li",[e._v("Enable and set up a firewall.")]),e._v(" "),a("li",[e._v("Never allow password-based SSH, only use key-based access.")]),e._v(" "),a("li",[e._v("Disable non-essential SSH subsystems (banner, motd, scp, X11 forwarding) and harden your SSH configuration ("),a("a",{attrs:{href:"https://stribika.github.io/2015/01/04/secure-secure-shell.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("reasonable guide to begin with"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("li",[e._v("Back up your storage regularly.")])]),e._v(" "),a("h2",{attrs:{id:"conclusions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Do not expose validators to the public internet, they should only be accessible by allowed parties. Therefore, we propose a layered approach in which the validators are isolated from the internet and connect to the Polkadot network via an intermediate layer of public-facing nodes.")])]),e._v(" "),a("li",[a("p",[e._v("At the moment, Polkadot/Substrate can't interact with HSM/SGX, so we need to provide the signing key seeds to the validator machine. This key is kept in memory for signing operations and persisted to disk (encrypted with a password).")])]),e._v(" "),a("li",[a("p",[e._v("Given that HA setups would always be at risk of double-signing and there's currently no built-in mechanism to prevent it, we propose having a single instance of the validator to avoid slashing. Slashing penalties for being offline are much less than those for equivocation.")])])]),e._v(" "),a("h3",{attrs:{id:"validators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validators"}},[e._v("#")]),e._v(" Validators")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Validators should only run the Polkadot binary, and they should not listen on any port other than the configured p2p port.")])]),e._v(" "),a("li",[a("p",[e._v("Validators should run on bare-metal machines, as opposed to VMs. This will prevent some of the availability issues with cloud providers, along with potential attacks from other VMs on the same hardware. The provisioning of the validator machine should be automated and defined in code. This code should be kept in private version control, reviewed, audited, and tested.")])]),e._v(" "),a("li",[a("p",[e._v("Session keys should be generated and provided in a secure way.")])]),e._v(" "),a("li",[a("p",[e._v("Polkadot should be started at boot and restarted if stopped for any reason (supervisor process).")])]),e._v(" "),a("li",[a("p",[e._v("Polkadot should run as non-root user.")])]),e._v(" "),a("li",[a("p",[e._v("Each validator should connect to the Polkadot network through a set of at least 2 public-facing nodes. The connection is done through a VPN and the machine can't access the public internet, thus the only possible connection is through the VPN.")])])]),e._v(" "),a("h3",{attrs:{id:"public-facing-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-facing-nodes"}},[e._v("#")]),e._v(" Public Facing Nodes")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("At least two nodes associated with each validator run on at least two different cloud providers and they only publicly expose the p2p port.")])]),e._v(" "),a("li",[a("p",[e._v("They can run as a container on Kubernetes and we can define the desired state (number of replicas always up, network and storage settings); the connection between the validator and the public-facing nodes is done through a VPN. They have the common Kubernetes security setup in place (restrictive service account, pod security policy and network policy).")])]),e._v(" "),a("li",[a("p",[e._v("Node keys should be provided in a secure way.")])]),e._v(" "),a("li",[a("p",[e._v("Only run the Polkadot container, no additional services. The VPN agent should run on a sidecar in the same pod (sharing the same network stack).")])])]),e._v(" "),a("h3",{attrs:{id:"monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[e._v("#")]),e._v(" Monitoring")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Public-facing nodes and the validator should be monitored and alerts set for several failure conditions defined.")])]),e._v(" "),a("li",[a("p",[e._v("There should be an on-call rotation for managing the alerts.")])]),e._v(" "),a("li",[a("p",[e._v("There should be a clear protocol with actions to perform for each level of each alert and an escalation policy.")])])]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://medium.com/figment-networks/full-disclosure-figments-cosmos-validator-infrastructure-3bc707283967",target:"_blank",rel:"noopener noreferrer"}},[e._v("Figment Network's Full Disclosure of Cosmos Validator Infrastructure"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://kb.certus.one/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Certus One's Knowledge Base"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/slowmist/eos-bp-nodes-security-checklist",target:"_blank",rel:"noopener noreferrer"}},[e._v("EOS Block Producer Security List"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://forum.cosmos.network/t/sentry-node-architecture-overview/454",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sentry Node Architecture Overview"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/loom-network/hsm-policies-and-the-importance-of-validator-security-ec8a4cc1b6f",target:"_blank",rel:"noopener noreferrer"}},[e._v("HSM Policies and the Important of Validator Security"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);