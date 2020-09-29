(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{774:function(a,e,t){"use strict";t.r(e);var o=t(42),r=Object(o.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"era-points"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#era-points"}},[a._v("#")]),a._v(" Era Points")]),a._v(" "),t("p",[a._v("For every era (a period of time approximately 6 hours in length in Kusama, and 24 hours in Polkadot), validators are paid proportionally to the amount of "),t("em",[a._v("era points")]),a._v(" they have collected. Era points are reward points earned for payable actions like:")]),a._v(" "),t("ul",[t("li",[a._v("issuing validity statements for "),t("a",{attrs:{href:"learn-parachains"}},[a._v("parachain")]),a._v(" blocks.")]),a._v(" "),t("li",[a._v("producing a non-uncle block in the relay chain.")]),a._v(" "),t("li",[a._v("producing a reference to a previously unreferenced uncle block.")]),a._v(" "),t("li",[a._v("producing a referenced uncle block.")])]),a._v(" "),t("p",[t("em",[a._v("Note: An uncle block is a relay chain block that is valid in every regard, but which failed to become canonical. This can happen when two or more validators are block producers in a single slot, and the block produced by one validator reaches the next block producer before the others. We call the lagging blocks uncle blocks.")])]),a._v(" "),t("p",[a._v("Payments occur at the end of every era.")]),a._v(" "),t("h2",{attrs:{id:"payout-scheme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#payout-scheme"}},[a._v("#")]),a._v(" Payout Scheme")]),a._v(" "),t("p",[a._v("No matter how much total stake is behind a validator, all validators split the block authoring payout equally. The total payout, however, may differ based on "),t("a",{attrs:{href:"#era-points"}},[a._v("era points")]),a._v(", as described above.")]),a._v(" "),t("p",[a._v('Validators may also receive "tips" from senders as an incentive to include transactions in their produced blocks.')]),a._v(" "),t("p",[a._v("For simplicity, the examples below will assume all validators have the same amount of era points.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Validator Set Size (v): 4\nValidator 1 Stake (v1): 18 DOTs\nValidator 2 Stake (v2):  9 DOTs\nValidator 3 Stake (v3):  8 DOTs\nValidator 4 Stake (v4):  7 DOTs\nPayout (p): 8 DOTs\n\nPayout for each validator (v1 - v4):\np / v = 8 / 4 = 2 DOTs\n")])])]),t("p",[a._v("Note that this is different than most other Proof-of-Stake systems such as Cosmos. As long as a validator is in the validator set, it will receive the same block reward as every other validator. Validator "),t("code",[a._v("v1")]),a._v(", who had 18 DOTs staked, received the same reward (2 DOTs) in this era as "),t("code",[a._v("v4")]),a._v(" who had only 7 DOTs staked.")]),a._v(" "),t("h2",{attrs:{id:"running-multiple-validators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-multiple-validators"}},[a._v("#")]),a._v(" Running Multiple Validators")]),a._v(" "),t("p",[a._v("It is possible for a single entity to run multiple validators. Running multiple validators may provide a better risk/reward ratio. Assuming you have enough DOTs, or enough stake nominates your validator, to ensure that your validators remain in the validator set, running multiple validators will result in a higher return than running a single validator.")]),a._v(" "),t("p",[a._v("For the following example, assume you have 18 DOTs to stake. For simplicity's sake, we will ignore nominators. Running a single validator, as in the example above, would net you 2 DOTs in this era.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Validator Set Size (v): 4\nValidator 1 Stake (v1): 18 DOTs <- Your validator\nValidator 2 Stake (v2):  9 DOTs\nValidator 3 Stake (v3):  8 DOTs\nValidator 4 Stake (v4):  7 DOTs\nPayout (p): 8 DOTs\n\nYour payout = (p / v) * 1 = (8 / 4) * 1 = 2\n")])])]),t("p",[a._v("Running two validators, and splitting the stake equally, would result in the original validator "),t("code",[a._v("v4")]),a._v(" to be kicked out of the validator set, as only the top "),t("code",[a._v("v")]),a._v(" validators (as measured by stake) are selected to be in the validator set. More important, it would also double the reward that you get from each era.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Validator Set Size (v): 4\nValidator 1 Stake (v1): 9 DOTs <- Your first validator\nValidator 2 Stake (v2): 9 DOTs <- Your second validator\nValidator 3 Stake (v3): 9 DOTs\nValidator 4 Stake (v4): 8 DOTs\nPayout (p): 8 DOTs\n\nYour payout = (p / v) * 1 = (8 / 4) * 2 = 4\n")])])]),t("p",[a._v("With enough stake, you could run more than two validators. However, each validator must have enough stake behind it to be in the validator set.")]),a._v(" "),t("p",[a._v("The incentives of the system favor equally-staked validators. This will most likely be a dynamic, rather than static, equilibrium. Potential validators will run different numbers of validators and apply different amounts of stake to them as time goes on, and in response to the actions of other validators on the network.")]),a._v(" "),t("h2",{attrs:{id:"slashing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[a._v("#")]),a._v(" Slashing")]),a._v(" "),t("p",[a._v("Although rewards are paid equally, slashes are relative to a validator's stake. Therefore, if you do have enough DOTs to run multiple validators, it is in your best interest to do so. A slash of 30% will, of course, be more DOTs for a validator with 18 DOTs staked than one with 9 DOTs staked.")]),a._v(" "),t("p",[a._v("Running multiple validators does not absolve you of the consequences of misbehavior. Polkadot punishes attacks that appear coordinated more severely than individual attacks. You should not, for example, run multiple validators hosted on the same infrastructure. A proper multi-validator configuration would ensure that they do not fail simultaneously.")]),a._v(" "),t("p",[a._v("Nominators have the incentive to nominate the lowest-staked validator, as this will result in the lowest risk and highest reward.")]),a._v(" "),t("h2",{attrs:{id:"nominators-and-validator-payments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nominators-and-validator-payments"}},[a._v("#")]),a._v(" Nominators and Validator Payments")]),a._v(" "),t("p",[a._v('Nominated stake allows you to "vote" for validators and share in the rewards (and slashing) without running a validator node yourself. Validators can choose to keep a percentage of the rewards due to their validator to "reimburse" themselves for the cost of running a validator node. Other than that, all rewards are shared based on the stake behind each validator. This includes the stake of the validator itself, plus any stake bonded by nominators.')]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("NOTE:")]),a._v(" Validators set their preference as a percentage of the block reward, "),t("em",[a._v("not")]),a._v(" an absolute number of DOTs. Polkadot's block reward is based on the "),t("em",[a._v("total")]),a._v(" amount at stake, with the reward peaking when the amount staked is at 50% of the total supply. In periods when there is a lower amount staked, and therefore lower rewards, the validator's payout preference could mean that there is zero left over for nominators.")])]),a._v(" "),t("p",[a._v("In the following examples, we can see the results of several different validator payment schemes and split between nominator and validator stake. We will assume a single nominator for each validator. However, there can be numerous nominators for each validator. Rewards are still distributed proportionally - for example, if the total rewards to be given to nominators is 2 DOTs, and there are four nominators with equal stake bonded, each will receive 0.5 DOTs. Note also that a single nominator may stake different validators.")]),a._v(" "),t("p",[a._v("Each validator in the example has selected a different validator payment (that is, a percentage of the reward set aside directly for the validator before sharing with all bonded stake). The validator's payment percentage (in DOTs) is listed in brackets ("),t("code",[a._v("[]")]),a._v(") next to each validator. Note that since the validator payment is public knowledge, having a low or non-existent validator payment may attract more stake from nominators, since they know they will receive a larger reward.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Validator Set Size (v): 4\nValidator 1 Stake (v1) [0.2]: 18 DOTs (9 validator, 9 nominator)\nValidator 2 Stake (v2) [0.4]:  9 DOTs (3 validator, 6 nominator)\nValidator 3 Stake (v3) [0.1]:  8 DOTs (4 validator, 4 nominator)\nValidator 4 Stake (v4) [0.0]:  6 DOTs (1 validator, 5 nominator)\nPayout (p): 8 DOTs\n\nPayout for each validator (v1 - v4):\np / v = 8 / 4 = 2 DOTs\n\nv1:\n(0.2 * 2) = 0.4 DOTs -> validator payment\n(2 - 0.4) = 1.6 -> shared between all stake\n(9 / 18) * 1.6 = 0.8 -> validator stake share\n(9 / 18) * 1.6 = 0.8 -> nominator stake share\nv1 validator total reward: 0.4 + 0.8 = 1.2 DOTs\nv1 nominator reward: 0.8 DOTs\n\nv2:\n(0.4 * 2) = 0.8 DOTs -> validator payment\n(2 - 0.8) = 1.2 -> shared between all stake\n(3 / 9) * 1.2 = 0.4 -> validator stake share\n(6 / 9) * 1.2 = 0.8 -> nominator stake share\nv2 validator total reward: 0.8 + 0.4 = 1.2 DOTs\nv2 nominator reward: 0.8 DOTs\n\nv3:\n(0.1 * 2) = 0.2 DOTs -> validator payment\n(2 - 0.2) = 1.8 -> shared between all stake\n(4 / 8) * 1.8 = 0.9 -> validator stake share\n(4 / 8) * 1.8 = 0.9 -> nominator stake share\nv3 validator total reward: 0.2 + 0.9 DOTs = 1.1 DOTs\nv3 nominator reward: 0.9 DOTs\n\nv4:\n(0 * 2) = 0 DOTs -> validator payment\n(2 - 0) = 2.0 -> shared between all stake\n(1 / 6) * 2 = 0.33 -> validator stake share\n(5 / 6) * 2 = 1.67 -> nominator stake share\nv4 validator total reward: 0 + 0.33 DOTs = 0.33 DOTs\nv4 nominator reward: 1.67 DOTs\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);