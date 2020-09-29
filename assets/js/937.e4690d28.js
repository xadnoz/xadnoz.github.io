(window.webpackJsonp=window.webpackJsonp||[]).push([[937],{1364:function(a,t,e){"use strict";e.r(t);var o=e(42),r=Object(o.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("Polkadot and Kusama make stakers claim their rewards for past eras by submitting a transaction. This naturally leads to spreading out reward distribution, as people make transactions at disparate times, rather than updating the accounts of all stakers in a single block. Even if everyone submitted a reward claim at the same time, the fact that they are individual transactions would allow the block construction algorithm to process only a limited number per block and ensure that the network maintains a constant block time. If all rewards were sent out in one block, this could cause serious issues with the stability of the network.")]),a._v(" "),e("p",[a._v("Simple payouts requires one transaction per validator per era to claim rewards. The reason Polkadot requires this is to avoid an attack where someone has several thousand accounts nominating a single validator. The major cost in reward distribution is mutating the accounts in storage, and Polkadot cannot pay out several thousand accounts in a single transaction.")]),a._v(" "),e("h2",{attrs:{id:"claiming-rewards"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#claiming-rewards"}},[a._v("#")]),a._v(" Claiming Rewards")]),a._v(" "),e("p",[a._v("Polkadot stores up to 84 eras of reward info like maps of era number to validator points, inflationary rewards, and nomination exposures. Rewards will not be claimable more than 84 eras after they were earned. This means that all rewards must be claimed within 84 eras.")]),a._v(" "),e("p",[a._v("Anyone can trigger a payout for any validator, as long as they are willing to pay the transaction fee. Someone must submit a transaction with a validator ID and an era index. Polkadot will automatically calculate that validator's reward, find the top 64 nominators for that era, and distribute the rewards pro rata.")]),a._v(" "),e("blockquote",[e("p",[a._v("Note: The Staking system only applies the highest 64 nominations to each validator to reduce the complexity of the staking set.")])]),a._v(" "),e("p",[a._v("These details are handled for you automatically if you use the "),e("a",{attrs:{href:"https://polkadot.js.org/apps/#/staking/payout",target:"_blank",rel:"noopener noreferrer"}},[a._v("Polkadot JS UI"),e("OutboundLink")],1),a._v(", which also allows you to submit batches of eras at once.")]),a._v(" "),e("h2",{attrs:{id:"f-a-q-and-cautionary-notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#f-a-q-and-cautionary-notes"}},[a._v("#")]),a._v(" F.A.Q. and Cautionary Notes")]),a._v(" "),e("ol",[e("li",[a._v("Rewards expire after 84 eras. On Polkadot, that's about 84 days. On Kusama, it is approximately 21 days.")]),a._v(" "),e("li",[a._v("Claiming rewards (or neglecting to claim rewards) does not affect nominations in any way. Nominations will persist after claiming rewards or the rewards expire.")]),a._v(" "),e("li",[a._v('Rewards are not minted until they are claimed. Therefore, if your reward destination is "stash, increasing amount at stake", then your staked amount does not reflect your rewards until you claim them. If you want to maximize compounding, then you will need to claim often.')]),a._v(" "),e("li",[a._v("Staking operations at the end of an era are closed to allow the off-chain validator election to take place. See "),e("a",{attrs:{href:"learn-phragmen#off-chain-phragmen"}},[a._v("Off-chain Phragmén")]),a._v(" for more information.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);