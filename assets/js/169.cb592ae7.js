(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1137:function(e,t,a){"use strict";a.r(t);var o=a(42),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("The treasury is a pot of funds collected through transaction fees, slashing, "),a("a",{attrs:{href:"learn-staking#inflation"}},[e._v("staking inefficiencies")]),e._v(", etc. The funds held in the treasury can be spent by making a spending proposal that, if approved by the council, will enter a waiting period before distribution. This waiting period is known as the budget period, and its duration is subject to "),a("a",{attrs:{href:"learn-governance"}},[e._v("governance")]),e._v(", with current defaults set to 24 days for Polkadot mainnet, and 6 days for Kusama. The treasury attempts to spend as many proposals in the queue as it can without running out of funds. If the treasury ends a budget period without spending all of its funds, it suffers a burn of a percentage of its funds -- thereby causing deflationary pressure. This percentage is currently at 0%.")]),e._v(" "),a("p",[e._v("When a stakeholder wishes to propose a spend from the treasury, they must reserve a deposit totaling 5% of the proposed spend (see below for variations). This deposit will be slashed if the proposal is rejected, and returned if the proposal was accepted.")]),e._v(" "),a("p",[e._v("Proposals may consist of (but are not limited to):")]),e._v(" "),a("ul",[a("li",[e._v("Infrastructure deployment and continued operation.")]),e._v(" "),a("li",[e._v("Network security operations (monitoring services, continuous auditing).")]),e._v(" "),a("li",[e._v("Ecosystem provisions (collaborations with friendly chains).")]),e._v(" "),a("li",[e._v("Marketing activities (advertising, paid features, collaborations).")]),e._v(" "),a("li",[e._v("Community events and outreach (meetups, pizza parties, hackerspaces).")]),e._v(" "),a("li",[e._v("Software development (wallets and wallet integration, clients and client upgrades).")])]),e._v(" "),a("p",[e._v("The treasury is ultimately controlled by the council, and how the funds will be spent is up to their judgment.")]),e._v(" "),a("h2",{attrs:{id:"funding-the-treasury"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#funding-the-treasury"}},[e._v("#")]),e._v(" Funding the Treasury")]),e._v(" "),a("p",[e._v("The Treasury is funded from different sources:")]),e._v(" "),a("ol",[a("li",[e._v("Slashing: When a validator is slashed for any reason, the slashed amount is sent to the Treasury with a reward going to the entity that reported the validator (another validator or fisherman). The reward is taken from the slash amount and varies per offence and number of reporters.")]),e._v(" "),a("li",[e._v("Transaction fees: A portion of each block's transaction fees goes to the Treasury, with the remainder going to the block author.")]),e._v(" "),a("li",[e._v("Staking inefficiency: "),a("a",{attrs:{href:"learn-staking#inflation"}},[e._v("Inflation")]),e._v(" is designed to be 10% in the first year, and the ideal staking ratio is set at 50%, meaning half of all tokens should be locked in staking. Any deviation from this ratio will cause a proportional amount of the inflation to go to the Treasury. In other words, if 50% of all tokens are staked, then 100% of the inflation goes to the validators as reward. If the staking rate is greater than or less than 50%, then the validators will receive less, with the remainder going to the Treasury.")]),e._v(" "),a("li",[e._v("Parathreads: "),a("a",{attrs:{href:"learn-parathreads"}},[e._v("Parathreads")]),e._v(" participate in a per-block auction for block inclusion. Part of this bid goes to the validator that accepts the block and the remainder goes to the Treasury.")])]),e._v(" "),a("h2",{attrs:{id:"creating-a-treasury-proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-treasury-proposal"}},[e._v("#")]),e._v(" Creating a Treasury Proposal")]),e._v(" "),a("p",[e._v("The proposer has to deposit 5% of the requested amount or 20 KSM (whichever is higher) as an anti-spam measure. This amount is burned if the proposal is rejected, or refunded otherwise. These values are subject to "),a("a",{attrs:{href:"learn-governance"}},[e._v("governance")]),e._v(" so they may change in the future.")]),e._v(" "),a("h3",{attrs:{id:"announcing-the-proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#announcing-the-proposal"}},[e._v("#")]),e._v(" Announcing the Proposal")]),e._v(" "),a("p",[e._v("To minimize storage on chain, proposals don't contain contextual information. When a user submits a proposal, they will probably need to find an off-chain way to explain the proposal. Most discussion takes place on the following platforms:")]),e._v(" "),a("ul",[a("li",[e._v("Many community members participate in discussion in the "),a("a",{attrs:{href:"https://riot.w3f.tech/#/room/#kusama:matrix.parity.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kusama Riot"),a("OutboundLink")],1),e._v(" chat.")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"https://forum.kusama.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kusama forum"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://forum.polkadot.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot forum"),a("OutboundLink")],1),e._v(" can be used for proposal explanations on Kusama and Polkadot respectively.")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"https://github.com/kusamanetwork/KGPs",target:"_blank",rel:"noopener noreferrer"}},[e._v("KGP (Kusama Governance Proposals)"),a("OutboundLink")],1),e._v(" repository is well suited for detailed issues about proposals on Kusama, with the added advantage of easy linkability across repositories and tagging team members.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://commonwealth.im",target:"_blank",rel:"noopener noreferrer"}},[e._v("Commonwealth.im"),a("OutboundLink")],1),e._v(" is a community site that allows users to log in with their KSM address and automatically reads proposals from the chain, turning them into discussion threads.")])]),e._v(" "),a("p",[e._v("Spreading the word about the proposal's explanation is ultimately up to the proposer - the recommended way is using official Riot channels like the "),a("a",{attrs:{href:"https://riot.w3f.tech/#/room/#kusama:matrix.parity.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kusama Direction room"),a("OutboundLink")],1),e._v(" or the "),a("a",{attrs:{href:"https://riot.w3f.tech/#/room/#kusamawatercooler:polkadot.builders",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kusama Watercooler"),a("OutboundLink")],1),e._v(". For Polkadot, you may want to frequent the "),a("a",{attrs:{href:"https://riot.w3f.tech/#/room/#polkadot-watercooler:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot Watercooler"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"creating-the-proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-proposal"}},[e._v("#")]),e._v(" Creating the Proposal")]),e._v(" "),a("p",[e._v("One way to create the proposal is to use the Polkadot JS Apps "),a("a",{attrs:{href:"https://polkadot.js.org/apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1),e._v(". From the website, use either the "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/extrinsics",target:"_blank",rel:"noopener noreferrer"}},[e._v("extrinsics tab"),a("OutboundLink")],1),e._v(" and select the Treasury pallet, then "),a("code",[e._v("proposeSpend")]),e._v(" and enter the desired amount and recipient, or use the "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/treasury",target:"_blank",rel:"noopener noreferrer"}},[e._v("Treasury tab"),a("OutboundLink")],1),e._v(" and its dedicated Submit Proposal button:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/treasury/propose.jpg",alt:"An example of a proposal being created"}})]),e._v(" "),a("p",[e._v("The system will automatically take the required deposit, picking the higher of the following two values: 20 KSM or 5% of the requested amount.")]),e._v(" "),a("p",[e._v("Once created, your proposal will become visible in the Treasury screen and the council can start voting on it.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/treasury/proposal.jpg",alt:"A pending proposal"}})]),e._v(" "),a("p",[e._v("Remember that the proposal has no metadata, so it's up to the proposer to create a description and purpose that the council could study and base their votes on.")]),e._v(" "),a("p",[e._v("At this point, a Council member can turn this proposal into a motion to accept, or a motion to reject. It is possible (but unlikely) that a motion for both acceptance and rejection is created. After being turned into a council motion, the proposal needs 51% of the council to approve it to pass, or 51% to reject it to fail. If majority is not reached, the proposal remains in limbo - neither accepted nor rejected until more council members weigh in.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/treasury/motion.jpg",alt:"Motion in action"}})]),e._v(" "),a("h2",{attrs:{id:"tipping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tipping"}},[e._v("#")]),e._v(" Tipping")]),e._v(" "),a("p",[e._v("Next to the proposals process, a separate system for making tips exists for the treasury. Tips can be suggested by anyone and are supported by members of the council. Tips do not have any definite value, the final value of the tip is decided based on the median of all tips issued by the tippers.")]),e._v(" "),a("p",[e._v("Currently on Kusama, the tippers are the same as the members of the council. However, being a tipper is not direct responsibility of the council, and at some point the council and the tippers may be different groups of accounts.")]),e._v(" "),a("p",[e._v("To better understand the process a tip goes through until it is paid out, let's consider an example.")]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("Bob has done something great for Kusama. Alice has noticed this and decides to report Bob as deserving a tip from the treasury. The council is composed of three members Charlie, Dave, and Eve.")]),e._v(" "),a("p",[e._v("Alice begins the process by issuing the "),a("code",[e._v("report_awesome")]),e._v(" extrinsic. This extrinsic requires two arguments, a reason and the address to tip. Alice submits Bob's address with the reason being a UTF-8 encoded URL to post on "),a("a",{attrs:{href:"https://kusama.polkassembly.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("polkassembly"),a("OutboundLink")],1),e._v(" that explains her reasoning for why Bob is deserving.")]),e._v(" "),a("p",[e._v("Alice must also lock up a deposit for making this report. The deposit is the base deposit as set in the chain's parameter list plus the additional deposit per byte contained in the reason. This is why Alice submitted a URL as the reason instead of the explanation directly, it was cheaper for her to do so.")]),e._v(" "),a("p",[e._v("For her trouble, Alice is able to claim the eventual finder's fee if the tip is approved by the tippers.")]),e._v(" "),a("p",[e._v("Since the tipper group is the same as the council on Kusama, the council must now collectively (but also independently) decide on the value of the tip that Bob deserves.")]),e._v(" "),a("p",[e._v("Charlie, Dave, and Eve all review the report and make tips according to their personal valuation of the benefit Bob has provided to Kusama.")]),e._v(" "),a("p",[e._v("Charlie tips 100 KSM. Dave tips 300 KSM. Eve tips 1000 KSM.")]),e._v(" "),a("p",[e._v("The tip could have been closed out with only two of the three tippers. Once more than half of the tippers group have issued tip valuations the countdown to close the tip will begin. In this case, the third tipper issued their tip before the end of the closing period, so all three were able to make their tip valuations known.")]),e._v(" "),a("p",[e._v("Now the actual tip that will be paid out to Bob is the median of these tips, so Bob will be paid out 300 KSM from the treasury.")]),e._v(" "),a("p",[e._v("In order for Bob to be paid his tip, some account must call the "),a("code",[e._v("close_tip")]),e._v(" extrinsic at the end of the closing period for the tip. This extrinsic may be called by anyone.")]),e._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("h3",{attrs:{id:"what-prevents-the-treasury-from-being-captured-by-a-majority-of-the-council"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-prevents-the-treasury-from-being-captured-by-a-majority-of-the-council"}},[e._v("#")]),e._v(" What prevents the treasury from being captured by a majority of the council?")]),e._v(" "),a("p",[e._v("The majority of the council can decide the outcome of a treasury spend proposal. In an adversarial mindset, we may consider the possibility that the council may at some point go rogue and attempt to steal all of the treasury funds. It is a possibility that the treasury pot becomes so great, that a large financial incentive would present itself.")]),e._v(" "),a("p",[e._v("For one, the treasury has deflationary pressure due to the burn that is suffered every spend period. The burn aims to incentivize the complete spend of all treasury funds at every burn period, so ideally the treasury pot doesn't have time to accumulate mass amounts of wealth. However, it is the case that the burn on the treasury could be so little that it does not matter - as is the case currently on Kusama. On Kusama, the treasury burn is currently set to 0, meaning that no funds are burned.")]),e._v(" "),a("p",[e._v("However, it is the case on Kusama that the council is composed of mainly well-known members of the community. Remember, the council is voted in by the token holders, so they must do some campaigning or otherwise be recognized to earn votes. In the scenario of an attack, the council members would lose their social credibility. Furthermore, members of the council are usually externally motivated by the proper operation of the chain. This external motivation is either because they run businesses which depend on the chain, or they have direct financial gain (through their holdings) of the token value remaining steady.")]),e._v(" "),a("p",[e._v("Concretely there are a couple on-chain methods that resist this kind of attack. One, the council majority may not be the token majority of the chain. This means that the token majority could vote to replace the council if they attempted this attack - or even reverse the treasury spend. They would do this through a normal referendum. Two, there are time delays to treasury spends. They are only enacted every spend period. This means that there will be some time to observe this attack is taking place. The time delay then allows chain participants time to respond. The response may take the form of governance measures or - in the most extreme cases a liquidation of their holdings and a migration to a minority fork. However, the possibility of this scenario is quite low.")]),e._v(" "),a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/paritytech/substrate/blob/master/frame/treasury/src/lib.rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Substrate's Treasury Pallet"),a("OutboundLink")],1),e._v(" - The Rust implementation of the treasury. ("),a("a",{attrs:{href:"https://substrate.dev/rustdocs/master/pallet_treasury/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docs"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/@gavofyork/kusama-rollout-and-governance-31eb18041044",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gavin Wood's Kusama Rollout Plan"),a("OutboundLink")],1),e._v(" - Details the treasury in its first live environment on the Kusama network.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);