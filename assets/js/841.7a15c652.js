(window.webpackJsonp=window.webpackJsonp||[]).push([[841],{374:function(t,e,a){"use strict";a.r(e);var o=a(42),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Polkadot uses NPoS (Nominated Proof-of-Stake) as its mechanism for selecting the validator set. It is designed with the roles of "),a("strong",[t._v("validators")]),t._v(" and "),a("strong",[t._v("nominators")]),t._v(", to maximize chain security. Actors who are interested in maintaining the network can run a validator node. At genesis, Polkadot will have a limited amount of slots available for these validators, but this number will grow over time to over one thousand.")]),t._v(" "),a("p",[t._v("The system encourages DOT holders to participate as nominators. Nominators may back up to 16 validators as trusted validator candidates.")]),t._v(" "),a("p",[t._v("Validators assume the role of producing new blocks in "),a("a",{attrs:{href:"learn-consensus#babe"}},[t._v("BABE")]),t._v(", validating parachain blocks, and guaranteeing finality. Nominators can choose to back select validators with their stake.")]),t._v(" "),a("p",[t._v("The staking system pays out rewards equally to all validators. Distribution of the rewards are pro-rata to all stakers after the validator payment is deducted. In this way, the network incents the nomination of lower-staked validators to create an equally-staked validator set.")]),t._v(" "),a("h2",{attrs:{id:"how-does-staking-work-in-polkadot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-does-staking-work-in-polkadot"}},[t._v("#")]),t._v(" How does staking work in Polkadot?")]),t._v(" "),a("h3",{attrs:{id:"_1-identifying-which-role-you-are"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-identifying-which-role-you-are"}},[t._v("#")]),t._v(" 1. Identifying which role you are")]),t._v(" "),a("p",[t._v("In staking, you can be either a "),a("a",{attrs:{href:"#validators-and-nominators"}},[t._v("nominator or a validator")]),t._v(".")]),t._v(" "),a("p",[t._v("As a nominator, you can nominate one or more (up to 16) validator candidates that you trust to help you earn rewards in DOTs. You can take a look at the "),a("a",{attrs:{href:"maintain-nominator"}},[t._v("nominator guide")]),t._v(" to understand what you are required to do when the mainnet launches.")]),t._v(" "),a("p",[t._v("A validator node is required to be responsive 24/7, perform its expected duties in a timely manner, and avoid any slashable behavior. You can follow our "),a("a",{attrs:{href:"maintain-guides-how-to-validate-kusama"}},[t._v("Kusama validator guide")]),t._v(" if you would like to run a validator on Kusama.")]),t._v(" "),a("h3",{attrs:{id:"_2-nomination-period"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-nomination-period"}},[t._v("#")]),t._v(" 2. Nomination period")]),t._v(" "),a("p",[t._v("Any potential validators can indicate their intention to be a validator candidate. Their candidacies are made public to all nominators, and a nominator in turn submits a list of any number of candidates that it supports. In the next epoch (lasting several hours), a certain number of validators having the most DOT backing get elected and become active. There are no particular requirements for a DOT holder to become a nominator, though we expect each nominator to carefully track the performance and reputation of validators.")]),t._v(" "),a("p",[t._v("Once the nomination period ends, the NPoS election mechanism takes the nominators and their associated votes as input, and outputs a set of validators of the required size, that maximizes the stake backing of any validator, and that makes the stakes backing validators as evenly distributed as possible. The objectives of this election mechanism are to maximize the security of the network, and achieve fair representation of the nominators. If you want to know more about how NPoS works (e.g. election, running time complexity, etc.), please read "),a("a",{attrs:{href:"http://research.web3.foundation/en/latest/polkadot/NPoS.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"_3-staking-rewards-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-staking-rewards-distribution"}},[t._v("#")]),t._v(" 3. Staking Rewards Distribution")]),t._v(" "),a("p",[t._v("To explain how rewards are paid to validators and nominators, we need to consider "),a("strong",[t._v("validator pools")]),t._v(", where a validator pool consists of an elected validator together with the nominators backing it. (Note: if a nominator "),a("code",[t._v("n")]),t._v(" with stake "),a("code",[t._v("s")]),t._v(" backs several elected validators, say "),a("code",[t._v("k")]),t._v(", the NPoS election mechanism will split its stakes into pieces "),a("code",[t._v("s_1")]),t._v(", "),a("code",[t._v("s_2")]),t._v(", …, "),a("code",[t._v("s_k")]),t._v(", so that it backs validator "),a("code",[t._v("i")]),t._v(" with stake "),a("code",[t._v("s_i")]),t._v(". In that case, nominator "),a("code",[t._v("n")]),t._v(" will be rewarded the same as if there were "),a("code",[t._v("k")]),t._v(" nominators in different pools, each backing a single validator "),a("code",[t._v("i")]),t._v(" with stake "),a("code",[t._v("s_i")]),t._v("). For each validator pool, we keep a list of nominators with the associated stakes.")]),t._v(" "),a("p",[t._v("The general rule for rewards across validator pools is that two validator pools get paid the "),a("strong",[t._v("same amount of DOTs")]),t._v(" for equal work, i.e. they are NOT paid proportional to the stakes in each pool. Within a validator pool, a (configurable) part of the reward goes to pay the validator's commission fees and the remainder is paid "),a("strong",[t._v("pro-rata")]),t._v(" (i.e. proportional to stake) to the nominators and validator. Notice in particular that the validator is rewarded twice: once as commission fees for validating, and once for nominating itself with stake.")]),t._v(" "),a("p",[t._v("To estimate the inflation rate and how many DOTs you can get each month as a nominator or validator, you can use this "),a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-9Hc3kZ23EhZC3X6feRUKSTv6gj4xR7cvUbJD2zUEZk/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[t._v("Excel sheet"),a("OutboundLink")],1),t._v(" as a reference and play around with it by changing some parameters (e.g. validator pools, total supply, commission fees, etc.) to have a better estimate. Even though it may not be entirely accurate since staking participation is changing dynamically, it works well as an indicator.")]),t._v(" "),a("h3",{attrs:{id:"_4-rewards-mechanism"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-rewards-mechanism"}},[t._v("#")]),t._v(" 4. Rewards Mechanism")]),t._v(" "),a("p",[t._v("We highlight two features of this payment scheme. The first is that since validator pools are paid the same, pools with less stake will pay more to nominators per-DOT than pools with more stake. We thus give nominators an economic incentive to gradually shift their preferences to lower staked validators that gain a sufficient amount of reputation. The reason for this is that we want the stake across validator pools to be as evenly distributed as possible, to avoid a concentration of power among a few validators. In the long term, we expect all validator pools to have similar levels of stake, with the stake being higher for higher reputation validators (meaning that a nominator that is willing to risk more by backing a validator with a low reputation will get paid more).")]),t._v(" "),a("p",[t._v("The following example should clarify the above. For simplicity, we have the following assumptions:")]),t._v(" "),a("ul",[a("li",[t._v("These validators do not have a stake of their own.")]),t._v(" "),a("li",[t._v("They do NOT charge any commission fees")]),t._v(" "),a("li",[t._v("Reward amount is 100 DOT tokens")]),t._v(" "),a("li",[t._v("The least amount of DOTs to be a validator is 350")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("A - Validator Pool")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}})])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Nominator (4)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Stake (600)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Fraction of the Total Stake")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Rewards")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Jin")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("100")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.167")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("16.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Sam")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("50")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.083")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8.3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Anson")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("250")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.417")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("41.7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Bobby")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("200")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.333")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("33.3")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("B - Validator Pool")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}})])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Nominator (4)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Stake (400)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Fraction of the Total Stake")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Rewards")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Alice")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("100")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.25")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("25")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Peter")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("100")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.25")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("25")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("John")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("150")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.375")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("37.5")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Kitty")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("50")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.125")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12.5")])])])]),t._v(" "),a("p",[a("em",[t._v("Both validator pools A & B have 4 nominators with the total stake 600 and 400 respectively.")])]),t._v(" "),a("p",[t._v("Based on the above rewards distribution, nominators in validator pool B get more rewards per DOT than those in pool A because pool A has more overall stake. Sam has staked 50 DOTs in pool A, but he only gets 8.3 in return, whereas Kitty gets 12.5 with the same amount of stake.")]),t._v(" "),a("p",[t._v("We also remark that when the network slashes a validator slot for a misbehavior (e.g. validator offline, equivocation, etc.) the slashed amount is a fixed percentage (and NOT a fixed amount of DOTs), which means that validator pools with more stake get slashed more DOTs. Again, this is done to provide nominators with an economic incentive to shift their preferences and back less popular validators whom they consider to be trustworthy.")]),t._v(" "),a("p",[t._v("The second point to note is that each validator candidate is free to name their desired commission fee (as a percentage of rewards) to cover operational costs. Since validator pools are paid the same, pools with lower commission fees pay more to nominators than pools with higher fees. Thus, each validator can choose between increasing their fees to earn more DOTs, or decreasing their fees to attract more nominators and increase their chances of being elected. We will let the market regulate itself in this regard. In the long term, we expect that all validators will need to be cost efficient to remain competitive, and that validators with higher reputation will be able to charge slightly higher commission fees (which is fair).")]),t._v(" "),a("h2",{attrs:{id:"accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accounts"}},[t._v("#")]),t._v(" Accounts")]),t._v(" "),a("p",[t._v("There are two different accounts for managing your funds: "),a("code",[t._v("Stash")]),t._v(" and "),a("code",[t._v("Controller")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:"assets/NPoS/staking-keys_stash_controller.png",alt:"staking"}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Stash:")]),t._v(" This account holds funds bonded for staking, but delegates some functions to a Controller. As a result, you may actively participate with a Stash key kept in a cold wallet, meaning it stays offline all the time. You can also designate a Proxy account to vote in "),a("a",{attrs:{href:"./learn-governance"}},[t._v("governance")]),t._v(" proposals.")]),t._v(" "),a("li",[a("strong",[t._v("Controller")]),t._v(" This account acts on behalf of the Stash account, signalling decisions about nominating and validating. It set preferences like payout account and commission. If you are a validator, it also sets your "),a("a",{attrs:{href:"learn-keys#session-keys"}},[t._v("session keys")]),t._v(". It only needs enough funds to pay transaction fees.")])]),t._v(" "),a("p",[t._v('We designed this hierarchy of separate key types so that validator operators and nominators can protect themselves much better than in systems with only one key. As a rule, you lose security anytime you use one key for multiple roles, or even if you use keys related by derivation. You should never use any account key for a "hot" session key in particular.')]),t._v(" "),a("p",[t._v("Controller and Stash account keys can be either sr25519 or ed25519. For more on how keys are used in Polkadot and the cryptography behind it "),a("a",{attrs:{href:"learn-keys"}},[t._v("see here")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"validators-and-nominators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validators-and-nominators"}},[t._v("#")]),t._v(" Validators and nominators")]),t._v(" "),a("p",[t._v("Since validator slots will be limited, most of those who wish to stake their DOTs and contribute economic security to the network will be nominators. Validators do most of the heavy lifting: they produce new block candidates in BABE, vote and come to consensus in GRANDPA, validate the state transition function of parachains, and possibly some other responsibilities regarding data availability and "),a("a",{attrs:{href:"learn-crosschain"}},[t._v("XCMP")]),t._v('. Nominators, on the other hand, do not need to do anything once they have bonded their DOTs. The experience of the nominator is similar to "set it and forget it," while the validator will be doing active service for the network by performing the critical operations. For this reason, the validator has certain privileges regarding the payout of the staking mechanism and will be able to declare its own allocation before the share is divided to nominators.')]),t._v(" "),a("p",[a("img",{attrs:{src:"assets/NPoS/article-2.png",alt:"staking"}})]),t._v(" "),a("h3",{attrs:{id:"want-to-stake-dots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#want-to-stake-dots"}},[t._v("#")]),t._v(" Want to stake DOTs?")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"mirror-maintain-guides-how-to-nominate-kusama"}},[t._v("Nominator Guide")]),t._v(" - Become a nominator on the Kusama network.")]),t._v(" "),a("li",[a("a",{attrs:{href:"mirror-maintain-guides-how-to-validate-kusama"}},[t._v("Validator Guide")]),t._v(" - Become a validator on the Kusama network.")])]),t._v(" "),a("h2",{attrs:{id:"slashing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[t._v("#")]),t._v(" Slashing")]),t._v(" "),a("p",[t._v("Slashing will happen if a validator misbehaves (e.g. goes offline, attacks the network, or runs modified software) in the network. They and their nominators will get slashed by losing a percentage of their bonded/staked DOTs.")]),t._v(" "),a("p",[t._v("Validator pools with larger total stake backing them will get slashed more harshly than less popular ones, so we encourage nominators to shift their nominations to less popular validators to reduce the possible losses.")]),t._v(" "),a("p",[t._v("The following levels of offence are "),a("a",{attrs:{href:"https://research.web3.foundation/en/latest/polkadot/slashing/amounts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("defined"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("ul",[a("li",[t._v("Level 1: isolated unresponsiveness, i.e. going offline for a long time. No slashing, only "),a("a",{attrs:{href:"#chilling"}},[a("em",[t._v("chilling")])]),t._v(".")]),t._v(" "),a("li",[t._v("Level 2: concurrent unresponsiveness or isolated equivocation. Slashes a very small amount of the stake and chills.")]),t._v(" "),a("li",[t._v("Level 3: misconducts unlikely to be accidental, but which do not harm the network's security to any large extent. Examples include concurrent equivocation or isolated cases of unjustified voting in "),a("a",{attrs:{href:"learn-consensus"}},[t._v("GRANDPA")]),t._v(". Slashes a moderately small amount of the stake and chills.")]),t._v(" "),a("li",[t._v("Level 4: misconduct that poses a serious security or monetary risk to the system, or mass collusion. Slashes all or most of the stake behind the validator and chills.")])]),t._v(" "),a("p",[t._v("Let's look at these offences in a bit more detail.")]),t._v(" "),a("h3",{attrs:{id:"unresponsiveness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unresponsiveness"}},[t._v("#")]),t._v(" Unresponsiveness")]),t._v(" "),a("p",[t._v('For every session, validators will send an "I\'m Online" message to indicate they are online. If a validator produces no blocks during an epoch and fails to send the heartbeat, it will be reported as unresponsive. Depending on the repeated offences and how many other validators were unresponsive or offline, slashing will occur.')]),t._v(" "),a("p",[t._v("Here is the formula for calculation:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Let x = offenders, n = total no. validators\n\nmin((3 * (x - (n / 10 + 1))) / n, 1) * 0.07\n")])])]),a("p",[t._v("Note that if less than 10% of all validators are offline, no penalty is enacted.")]),t._v(" "),a("p",[t._v("Validators should have a well-architected network infrastructure to ensure the node is running to reduce the risk of being slashed. A high availability setup is desirable, preferably with backup nodes that kick in "),a("strong",[t._v("only once the original node is verifiably offline")]),t._v(" (to avoid double-signing and being slashed for equivocation - see below), together with "),a("a",{attrs:{href:"maintain-guides-how-to-setup-sentry-node"}},[t._v("proxy nodes")]),t._v(" to avoid being DDoSed when your validator node's IP address is exposed. A comprehensive guide on secure validator setup is available "),a("a",{attrs:{href:"https://wiki.polkadot.network/docs/en/maintain-guides-secure-validator",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"grandpa-equivocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grandpa-equivocation"}},[t._v("#")]),t._v(" GRANDPA Equivocation")]),t._v(" "),a("p",[t._v("A validator signs two or more votes in the same round on different chains.")]),t._v(" "),a("h3",{attrs:{id:"babe-equivocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babe-equivocation"}},[t._v("#")]),t._v(" BABE Equivocation")]),t._v(" "),a("p",[t._v("A validator produces two or more blocks on the relay chain in the same time slot.")]),t._v(" "),a("p",[t._v("GRANDPA and BABE equivocation slashing penalty is calculated as below:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Let x = offenders, n = total no. validators\n\nMin( (3 * x / n )^2, 1)\n")])])]),a("p",[t._v("Validators may run their nodes on multiple machines to make sure they can still perform validation work in case one of their nodes goes down. It should be noted that if they do not have good coordination to manage signing machines, then equivocation is possible.")]),t._v(" "),a("p",[t._v("If a validator is reported for any one of the offences they will be removed from the validator set ("),a("a",{attrs:{href:"#chilling"}},[t._v("chilled")]),t._v(") and they will not be paid while they are out. They will be considered inactive immediately and will lose their nominators. They need to re-issue intent to validate and gather support from nominators.")]),t._v(" "),a("p",[t._v("If you want to know more details about slashing, please look at our "),a("a",{attrs:{href:"https://research.web3.foundation/en/latest/polkadot/slashing/amounts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("research page"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"chilling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chilling"}},[t._v("#")]),t._v(" Chilling")]),t._v(" "),a("p",[t._v("Chilling is the act of removing a validator from the active validator set, also disqualifying them from the set of electable candidates in the next NPoS cycle.")]),t._v(" "),a("p",[t._v("This may be voluntary and validator-initiated, e.g. if there is a planned outage in the validator's surroundings or hosting provider, and the validator wants to exit to protect themselves against slashing. When voluntary, chilling will keep the validator active in the current session, but will move them to the inactive set in the next. The validator will not lose their nominators.")]),t._v(" "),a("p",[t._v("When used as part of a punishment, being chilled carries an implied penalty of being un-nominated. It also disables the validator for the remainder of the current era and removes the offending validator from the next election.")]),t._v(" "),a("p",[t._v("Polkadot allows some validators to be disabled, but if the number of disabled validators gets too large, Polkadot will trigger a new validator election to get a full set. Disabled validators will need to resubmit their intention to validate and regarner support from nominators.")]),t._v(" "),a("h3",{attrs:{id:"slashing-across-eras"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slashing-across-eras"}},[t._v("#")]),t._v(" Slashing Across Eras")]),t._v(" "),a("p",[t._v("There are 3 main difficulties to account for with slashing in NPoS:")]),t._v(" "),a("ul",[a("li",[t._v("A nominator can nominate multiple validators and be slashed via any of them.")]),t._v(" "),a("li",[t._v("Until slashed, stake is reused from era to era. Nominating with N coins for E eras in a row does not mean you have N*E coins to be slashed - you've only ever had N.")]),t._v(" "),a("li",[t._v("Slashable offences can be found after the fact and out of order.")])]),t._v(" "),a("p",[t._v("To balance this, we only slash for the maximum slash a participant can receive in some time period, rather than the sum. This ensures protection from overslashing. Likewise, the time span over which maximum slashes are computed are finite and the validator is chilled with nominations withdrawn after a slashing event, as stated in the previous section. This prevents rage-quit attacks in which, once caught misbehaving, a participant deliberately misbehaves more because their slashing amount is already maxed out.")]),t._v(" "),a("h2",{attrs:{id:"reward-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reward-distribution"}},[t._v("#")]),t._v(" Reward Distribution")]),t._v(" "),a("p",[t._v("Note that Kusama runs approximately 4x as fast as Polkadot, except for block production times. Polkadot will also produce blocks at approximately six second intervals.")]),t._v(" "),a("p",[t._v("Rewards are recorded per session (approximately one hour on Kusama and four hours on Polkadot) and calculated per era (approximately six hours on Kusama and twenty-four hours on Polkadot). Thus, rewards will be calculated four times per day on Kusama and once per day on Polkadot.")]),t._v(" "),a("p",[t._v("In order to be paid your staking rewards, someone must claim them for each validator that you nominate. Staking rewards are kept available for 84 eras, which is approximately 84 days on Polkadot and 21 days on Kusama. For more information on why this is so, see the page on "),a("a",{attrs:{href:"learn-simple-payouts"}},[t._v("simple payouts")]),t._v(".")]),t._v(" "),a("blockquote",[a("p",[t._v("WARNING: If nobody claims your staking rewards by this time, then you will not be able to claim them and some of your staking rewards will be lost.")])]),t._v(" "),a("h3",{attrs:{id:"claiming-rewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#claiming-rewards"}},[t._v("#")]),t._v(" Claiming Rewards")]),t._v(" "),a("p",[t._v("If you go to the Staking payouts page on "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/staking/payout",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polkadot JS"),a("OutboundLink")],1),t._v(", you will see a list of validators that you have nominated in the past 84 eras. Each one has the option to trigger the payout for all unclaimed eras. Note that this will pay everyone who was nominating that validator during those eras, and anyone can call it.")]),t._v(" "),a("h3",{attrs:{id:"reward-distribution-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reward-distribution-example"}},[t._v("#")]),t._v(" Reward Distribution Example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    PER_ERA * BLOCK_TIME = **Reward Distribution Time**\n\n    3600 * 6 seconds = 21,600 s = 6 hours\n\n    ***These parameters can be changed by proposing a referendum***\n")])])]),a("p",[t._v("Validators can create a cut of the reward that is not shared with the nominators. This cut is a percentage of the block reward, not an absolute value. After the value gets deducted, the remaining portion is based on their staked value and split between the validator and all of the nominators who have voted for this validator.")]),t._v(" "),a("p",[t._v("For example, assume the block reward for a validator is 10 DOTs. A validator may specify "),a("code",[t._v("validator_payment = 50%")]),t._v(", in which case the validator would receive 5 DOTs. The remaining 5 DOTs would then be split between the validator and their nominators based on the proportion of stake each nominator had. Note that validators can put up their own stake, and for this calculation, their stake acts just as if they were another nominator.")]),t._v(" "),a("p",[t._v("Rewards can be directed to the same account (controller) or to the stash account (and either increasing the staked value or not increasing the staked value). It is also possible to top-up / withdraw some bonded DOTs without having to un-stake everything.")]),t._v(" "),a("p",[t._v("For specific details about validator payouts, please see "),a("a",{attrs:{href:"maintain-guides-validator-payout"}},[t._v("this guide")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"inflation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inflation"}},[t._v("#")]),t._v(" Inflation")]),t._v(" "),a("p",[t._v("Inflation is designed to be 10% in the first year, with validator rewards being a function of amount staked and the remainder going to treasury.")]),t._v(" "),a("p",[a("img",{attrs:{src:"assets/NPoS/staking-participation-rate.png",alt:"staking"}})]),t._v(" "),a("p",{staticStyle:{"text-align":"center"}},[t._v("Source: "),a("a",{attrs:{href:"https://research.web3.foundation/en/latest/polkadot/Token%20Economics.html"}},[t._v("Research - Web3 Foundation")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("x-axis")]),t._v(": Proportion of DOTs staked")]),t._v(" "),a("li",[a("strong",[t._v("y-axis")]),t._v(": Inflation, annualized percentage")]),t._v(" "),a("li",[a("strong",[t._v("Blue line")]),t._v(": Inflation rewards to stakers")]),t._v(" "),a("li",[a("strong",[t._v("Green line")]),t._v(": Staker rate of return")])]),t._v(" "),a("p",[t._v("The above chart shows the inflation model of the network. Depending on the staking participation, the distribution of the inflation to validators versus the treasury will change dynamically to provide incentives to participate (or not participate) in staking. For instance, all of the inflation would go to the validators if 50% of all KSM / DOT are staked, but any deviation from the 50% - positive or negative - sends the proportional remainder to the treasury and effectively reduces validator payouts.")]),t._v(" "),a("p",[t._v("For those who are interested in knowing more about the design of inflation model for the network, please see "),a("a",{attrs:{href:"https://research.web3.foundation/en/latest/polkadot/Token%20Economics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"why-stake"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-stake"}},[t._v("#")]),t._v(" Why stake?")]),t._v(" "),a("ul",[a("li",[t._v("10% inflation/year when the network launches")]),t._v(" "),a("li",[t._v("50% targeted active staking")]),t._v(" "),a("li",[t._v("~20% annual return")])]),t._v(" "),a("h2",{attrs:{id:"why-not-stake"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-not-stake"}},[t._v("#")]),t._v(" Why not stake?")]),t._v(" "),a("ul",[a("li",[t._v("Tokens will be locked for about 28 days on Polkadot after unbonding, seven days on Kusama.")]),t._v(" "),a("li",[t._v("Punishment in case of validator found to be misbehaving (see "),a("a",{attrs:{href:"#slashing"}},[t._v("#slashing")]),t._v(").")]),t._v(" "),a("li",[t._v("You want to use the tokens for a parachain slot.")])]),t._v(" "),a("h2",{attrs:{id:"how-many-validators-will-polkadot-have"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-many-validators-will-polkadot-have"}},[t._v("#")]),t._v(" How many validators will Polkadot have?")]),t._v(" "),a("p",[t._v("The plan is to start with somewhere between 50 to 100 open validator positions and open more gradually. The top bound on the number of validators has not been determined yet, but should only be limited by the bandwidth strain of the network due to frequent and voluminous peer-to-peer message passing. The estimate of the number of validators that Polkadot will have at maturity is around 1000. Kusama, Polkadot's canary network, is currently rapidly approaching 200 validators slots.")]),t._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://medium.com/web3foundation/how-nominated-proof-of-stake-will-work-in-polkadot-377d70c6bd43",target:"_blank",rel:"noopener noreferrer"}},[t._v("How Nominated Proof of Stake will work in Polkadot"),a("OutboundLink")],1),t._v(" - Blog post by Web3 Foundation researcher Alfonso Cevallos covering NPoS in Polkadot.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://wiki.polkadot.network/docs/en/maintain-guides-secure-validator",target:"_blank",rel:"noopener noreferrer"}},[t._v("Secure validator setup"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=i.exports}}]);