(window.webpackJsonp=window.webpackJsonp||[]).push([[420],{975:function(a,e,t){"use strict";t.r(e);var n=t(42),o=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("The parachain slots of Polkadot will be sold according to an unpermissioned "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Candle_auction",target:"_blank",rel:"noopener noreferrer"}},[a._v("Candle auction"),t("OutboundLink")],1),a._v(" which has been slightly modified to be secure on a blockchain.")]),a._v(" "),t("h2",{attrs:{id:"mekanisme-lelang-lilin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mekanisme-lelang-lilin"}},[a._v("#")]),a._v(" Mekanisme lelang lilin")]),a._v(" "),t("p",[a._v("Candle auctions are a variant of open auctions where bidders submit bids that are increasingly higher and the highest bidder at the conclusion of the auction is considered the winner.")]),a._v(" "),t("p",[a._v('Candle auctions were originally employed in 16th century for the sale of ships and get their name from the "inch of a candle" that determined the open period of the auction. When the flame extinguished and the candle went out, the auction would suddenly terminate and the standing bid at that point would win.')]),a._v(" "),t("p",[a._v("When Candle auctions are used online, they require a random number to decide the moment of termination.")]),a._v(" "),t("p",[a._v("Parachain slot auctions will differ slightly from a normal Candle auction in that it does not use the random number to decide the duration of its opening phase. Instead, it has a known open phase and will be retroactively determined (at the normal close) to have ended at some point in the past. So during the open phase, bids will continue to be accepted but, later bids have higher probability of losing since the retroactively determined close moment may be found to have preceded the time that a bid was submitted.")]),a._v(" "),t("h2",{attrs:{id:"mengapa-menggunakan-lelang-candle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mengapa-menggunakan-lelang-candle"}},[a._v("#")]),a._v(" Mengapa menggunakan lelang Candle?")]),a._v(" "),t("p",[a._v("The open and transparent nature of blockchain systems opens attack vectors which are non-existent in traditional auction formats. Normal open auctions in particular can be vulnerable to "),t("em",[a._v("auction sniping")]),a._v(" when implemented over the internet or on a blockchain.")]),a._v(" "),t("p",[a._v("Auction sniping takes place when the end of an auction is known and bidders are hesitant to bid their true price early, in hopes of paying less than they actually value the item.")]),a._v(" "),t("p",[a._v("For example, Alice may value an item at auction for 30 USD. She submits an initial bid of 10 USD in hopes of acquiring the items at a lower price. Alice's strategy is to place incrementally higher bids until her true value of 30 USD is exceeded. Another bidder Eve values the same item at 11 USD. Eve's strategy is to watch the auction and submit a bid of 11 USD at the last second. Alice will have no time to respond to this bid before the close of the auction and will lose the item. The auction mechanism is sub-optimal because it has not discovered the true price of the item and the item has not gone to the actor who valued it the most.")]),a._v(" "),t("p",[a._v("On blockchains this problem may be even worse, since it potentially gives the producer of the block an opportunity to snipe any auction at the last concluding block by adding it themselves and/or ignoring other bids. There is also the possibility of a malicious bidder or a block producer trying to "),t("em",[a._v("grief")]),a._v(" honest bidders by sniping auctions.")]),a._v(" "),t("p",[a._v("For this reason, "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Vickrey_auction",target:"_blank",rel:"noopener noreferrer"}},[a._v("Vickrey auctions"),t("OutboundLink")],1),a._v(", a variant of second price auction in which bids are hidden and only revealed in a later phase, have emerged as a well-regarded mechanic. For example, it is implemented as the mechanism to auction human readable names on the "),t("a",{attrs:{href:"https://ens.domains",target:"_blank",rel:"noopener noreferrer"}},[a._v("ENS"),t("OutboundLink")],1),a._v(". The Candle auction is another solution which does not need the two-step commit and reveal schemes (a main component of Vickrey auctions), and for this reason allows smart contracts to participate.")]),a._v(" "),t("p",[a._v('Candle auctions allow everyone to always know the states of the bid, but not when the auction will be determined to have "ended." This helps to ensure that bidders are willing to bid their true bids early. Otherwise, they might find themselves in the situation that the auction was determined to have "ended" before they even bid.')]),a._v(" "),t("h2",{attrs:{id:"bagaimana-ini-digunakan-di-polkadot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bagaimana-ini-digunakan-di-polkadot"}},[a._v("#")]),a._v(" Bagaimana ini digunakan di Polkadot")]),a._v(" "),t("p",[a._v("Polkadot will use a "),t("em",[a._v("random beacon")]),a._v(' based on the VRF that\'s used also in other places of the protocol. The VRF will provide the base of the randomness which will retroactively determine the "end-time" of the auction.')]),a._v(" "),t("p",[a._v("When an account bids, they can place bids for any of the available periods or ranges in a slot. However, if a parachain (with the same STF) bids then that parachain must bid on a continuous period or range to the one they already occupy. They will not be able to bid for an overlapping slot (no multiples of the same parachain at the same time) and they will not be able to bid for a future slot if there is a gap in between. In the case a parachain is rebooted after having already reached the conclusion of its slot duration, it will need to be started again from a new genesis (which could be snapshot of all the old state) and will need to be bid from an external account.")]),a._v(" "),t("p",[a._v("The slot durations are capped to 2 years and divided into 6-month periods. Parachains may lease a slot for any contiguous range of the slot duration. Parachains may lease more than one slot over time, meaning that they could extend their lease to Polkadot past the 2 year slot duration simply by leasing a contiguous slot.")]),a._v(" "),t("h2",{attrs:{id:"bagaimana-cara-kerja-penawaran"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bagaimana-cara-kerja-penawaran"}},[a._v("#")]),a._v(" Bagaimana cara kerja penawaran?")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Slot parachain di awal\n\n       --6 bulan--\n       v v\nSlot A | 1 | 2 | 3 | 4 |...\nSlot B | 1 | 2 | 3 | 4 |...\nSlot C | __________ | 1 | 2 | 3 | 4 |...\nSlot D | __________ | 1 | 2 | 3 | 4 |...\nSlot E | __________ | __________ | 1 | 2 | 3 | 4 |...\n       ^                                             ^\n       ---------------------2 tahun-------------------\n\nSetiap periode dalam rentang 1 - 4 mewakili durasi 6 bulan untuk total 2 tahun\n")])])]),t("p",[a._v("Each parachain slot has a maximum duration of 2 years. Each 6 month interval in the slot is divided into its own "),t("code",[a._v("lease period")]),a._v(". More than one continuous "),t("code",[a._v("period")]),a._v(" is a "),t("code",[a._v("range")]),a._v(".")]),a._v(" "),t("p",[a._v("Several auctions will take place in the preceding six months before a set of parachain slot leases begin.")]),a._v(" "),t("p",[a._v("Bidders will submit a configuration of bids specifying the DOT amount they are willing to lock up and for which ranges. The slot ranges may be any continuous range of the periods 1 - 4.")]),a._v(" "),t("p",[a._v("Konfigurasi penawar untuk satu penawar mungkin terlihat seperti ini:")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("Bids"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    range"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    bond_amount"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("300")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//DOTs")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    range"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    bond_amount"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("777")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//DOTs")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    range"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    bond_amount"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("450")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// DOTs")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("The winner selection algorithm will pick bids which may be non-overlapping in order to maximize the amount of DOTs held over the entire 2-year lease duration of the parachain slot. This means that the highest bidder for any given slot lease period might not always win (see the "),t("a",{attrs:{href:"#compete"}},[a._v("example below")]),a._v(").")]),a._v(" "),t("p",[a._v("A random number is determined at each block which is based on the VRF used by Polkadot. Additionally, each auction will have a threshold that starts at 0 and increases to 1. The random number produced by the VRF is examined next to the threshold to determine if that block is the end of the auction. Additionally, the VRF will pick a block from the last epoch to take the state of bids from (to mitigate some types of attacks from malicious validators).")]),a._v(" "),t("h3",{attrs:{id:"contoh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contoh"}},[a._v("#")]),a._v(" Contoh")]),a._v(" "),t("h4",{attrs:{id:"non-bersaing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#non-bersaing"}},[a._v("#")]),a._v(" Non-bersaing")]),a._v(" "),t("p",[a._v("Ada satu slot parachain yang tersedia.")]),a._v(" "),t("p",[a._v("Tawaran Alice "),t("code",[a._v("20 DOTs")]),a._v(" untuk rentang 1 - 2.")]),a._v(" "),t("p",[a._v("Tawaran Bob "),t("code",[a._v("30 DOTs")]),a._v(" untuk rentang 3 - 4.")]),a._v(" "),t("p",[a._v("Lelang berakhir.")]),a._v(" "),t("p",[a._v("Alice mengikat "),t("code",[a._v("20 DOTs")]),a._v(" dan akan memiliki slot parachain untuk tahun pertama.")]),a._v(" "),t("p",[a._v("Bob mengikat "),t("code",[a._v("30 DOTs")]),a._v(" dan akan memiliki slot parachain untuk tahun kedua.")]),a._v(" "),t("h4",{attrs:{id:"bersaing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bersaing"}},[a._v("#")]),a._v(" Bersaing")]),a._v(" "),t("p",[a._v("Ada satu slot parachain yang tersedia.")]),a._v(" "),t("p",[a._v("Tawaran Charlie "),t("code",[a._v("75 DOTs")]),a._v(" untuk rentang 1 - 4.")]),a._v(" "),t("p",[a._v("Dave tawaran "),t("code",[a._v("100 DOTs")]),a._v(" untuk rentang 3 - 4.")]),a._v(" "),t("p",[a._v("Tawaran Emily "),t("code",[a._v("40 DOTs")]),a._v(" untuk rentang 1 - 2.")]),a._v(" "),t("p",[a._v("Let's calculate every bidder's valuation according to the algorithm. We do this by multiplying the bond amount by the amount of periods in the specified range of the bid.")]),a._v(" "),t("p",[a._v("Charlie - 75 * 4 = 300 for range 1 - 4")]),a._v(" "),t("p",[a._v("Dave - 100 * 2 = 200 for range 3 - 4")]),a._v(" "),t("p",[a._v("Emily - 40 * 2 = 80 for range 1 - 2")]),a._v(" "),t("p",[a._v("Although Dave had the highest bid in accordance to DOT amount, when we do the calculations we see that since he only bid for a range of 2, he would need to share the slot with Emily who bid much less. Together Dave's and Emily's bids only equal a valuation of "),t("code",[a._v("280")]),a._v(".")]),a._v(" "),t("p",[a._v("Charlie's valuation for the entire range is "),t("code",[a._v("300")]),a._v(" therefore Charlie is awarded the complete range of the parachain slot.")]),a._v(" "),t("h2",{attrs:{id:"tanya-jawab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tanya-jawab"}},[a._v("#")]),a._v(" Tanya-jawab")]),a._v(" "),t("h3",{attrs:{id:"mengapa-tidak-semua-orang-menawar-untuk-panjang-maks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mengapa-tidak-semua-orang-menawar-untuk-panjang-maks"}},[a._v("#")]),a._v(" Mengapa tidak semua orang menawar untuk panjang maks?")]),a._v(" "),t("p",[a._v("For the duration of the slot the "),t("code",[a._v("DOTs")]),a._v(" bid in the auction will be locked up. This means that there are opportunity costs from the possibility of using those "),t("code",[a._v("DOTs")]),a._v(" for something else. For parachains that are beneficial to Polkadot, this should align the interests between parachains and the Polkadot relay chain.")]),a._v(" "),t("h3",{attrs:{id:"bagaimana-mekanisme-ini-membantu-memastikan-keragaman-parachain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bagaimana-mekanisme-ini-membantu-memastikan-keragaman-parachain"}},[a._v("#")]),a._v(" Bagaimana mekanisme ini membantu memastikan keragaman parachain?")]),a._v(" "),t("p",[a._v("The method for dividing the parachain slots into six month intervals was partly inspired by the desire to allow for a greater amount of parachain diversity, and prevent particularly large and well-funded parachains from hoarding slots. By making each period a six-month duration but the overall slot a 2-year duration, the mechanism can cope with well-funded parachains that will ensure they secure a slot at the end of their lease, while gradually allowing other parachains to enter the ecosystem to occupy the six-month durations which are not filled. For example, if a large, well-funded parachain has already acquired a slot for range 1 - 4, they would be very interested in getting the next slot which would open for 2 - 5. Under this mechanism that parachain could acquire period 5 (since that is the only one it needs) and allow range 2 - 4 of the second parachain slot to be occupied by another.")]),a._v(" "),t("h3",{attrs:{id:"mengapa-keacakan-sulit-pada-blockchain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mengapa-keacakan-sulit-pada-blockchain"}},[a._v("#")]),a._v(" Mengapa keacakan sulit pada blockchain?")]),a._v(" "),t("p",[a._v("Randomness is problematic for blockchain systems. Generating a random number trustlessly on a transparent and open network in which other parties must be able to verify opens the possibility for actors to attempt to alter or manipulate the randomness. There have been a few solutions that have been put forward, including hash-onions like "),t("a",{attrs:{href:"https://github.com/randao/randao",target:"_blank",rel:"noopener noreferrer"}},[a._v("RANDAO"),t("OutboundLink")],1),a._v(" and "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Verifiable_random_function",target:"_blank",rel:"noopener noreferrer"}},[a._v("verifiable random functions"),t("OutboundLink")],1),a._v(" (VRFs). The latter is what Polkadot uses as a base for its randomness.")]),a._v(" "),t("h2",{attrs:{id:"sumber-daya"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sumber-daya"}},[a._v("#")]),a._v(" Sumber daya")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://research.web3.foundation/en/latest/polkadot/Parachain-Allocation.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Parachain Allocation"),t("OutboundLink")],1),a._v(" - W3F research page on parachain allocation that goes more in depth to the mechanism.")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/paritytech/polkadot/pull/239",target:"_blank",rel:"noopener noreferrer"}},[a._v("paritytech/polkadot#239"),t("OutboundLink")],1),a._v(" - Pull request introducing the parachain slots code.")])])])}),[],!1,null,null,null);e.default=o.exports}}]);