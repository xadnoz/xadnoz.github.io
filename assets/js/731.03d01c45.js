(window.webpackJsonp=window.webpackJsonp||[]).push([[731],{383:function(e,t,a){"use strict";a.r(t);var r=a(42),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Polkadot uses a sophisticated governance mechanism that allows it to evolve gracefully over time at the ultimate behest of its assembled stakeholders. The stated goal is to ensure that the majority of the stake can always command the network.")]),e._v(" "),a("p",[e._v("To do this, we bring together various novel mechanisms, including an amorphous state-transition function stored on-chain and defined in a platform-neutral intermediate language (i.e. WebAssembly) and several on-chain voting mechanisms such as referenda with adaptive super-majority thresholds and batch approval voting. All changes to the protocol must be agreed upon by stake-weighted referenda.")]),e._v(" "),a("h2",{attrs:{id:"mechanism"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mechanism"}},[e._v("#")]),e._v(" Mechanism")]),e._v(" "),a("p",[e._v("In order to make any changes to the network, the idea is to compose active token holders and the council together to administrate a network upgrade decision. No matter whether the proposal is proposed by the public (DOT holders) or the council, it finally will have to go through a referendum to let all DOT holders, weighted by stake, make the decision.")]),e._v(" "),a("p",[e._v("The following steps are the governance procedure in the Polkadot network:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#proposing-referenda"}},[e._v("Proposing Referenda")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#voting-for-a-proposal"}},[e._v("Voting for a proposal")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#tallying"}},[e._v("Tallying")])])]),e._v(" "),a("p",[e._v("To better understand how the council is formed, please read "),a("a",{attrs:{href:"#council"}},[e._v("this section")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"referenda"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#referenda"}},[e._v("#")]),e._v(" Referenda")]),e._v(" "),a("p",[e._v("Referenda are simple, inclusive, stake-based voting schemes. Each referendum has a specific "),a("em",[e._v("proposal")]),e._v(" associated with it that takes the form of a privileged function call in the runtime (that includes the most powerful call: "),a("code",[e._v("set_code")]),e._v(', which is able to switch out the entire code of the runtime, achieving what would otherwise require a "hard fork"). They are discrete events, have a fixed period where voting happens, and then are tallied and the function call is made if the vote is approved. Referenda are always binary; your only options in voting are "aye", "nay", or abstaining entirely.')]),e._v(" "),a("p",[e._v("Referenda can be started in one of several ways:")]),e._v(" "),a("ul",[a("li",[e._v("Publicly submitted proposals;")]),e._v(" "),a("li",[e._v("Proposals submitted by the council, either through a majority or unanimously;")]),e._v(" "),a("li",[e._v("Proposals submitted as part of the enactment of a prior referendum;")]),e._v(" "),a("li",[e._v("Emergency proposals submitted by the Technical Committee and approved by the Council.")])]),e._v(" "),a("p",[e._v("All referenda have an "),a("em",[e._v("enactment delay")]),e._v(" associated with them. This is the period of time between the referendum ending and, assuming the proposal was approved, the changes being enacted. For the first two ways that a referendum is launched, this is a fixed time. For Kusama, it is 7 days; Polkadot will likely be 28 days. For the third type, it can be set as desired.")]),e._v(" "),a("p",[e._v('Emergency proposals deal with major problems with the network that need to be "fast-tracked". These will have a shorter enactment time.')]),e._v(" "),a("h3",{attrs:{id:"proposing-a-referendum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposing-a-referendum"}},[e._v("#")]),e._v(" Proposing a Referendum")]),e._v(" "),a("h4",{attrs:{id:"public-referenda"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-referenda"}},[e._v("#")]),e._v(" Public Referenda")]),e._v(" "),a("p",[e._v("Anyone can propose a referendum by depositing the minimum amount of DOTs for a certain period (number of blocks). If someone agrees with the proposal, they may deposit the same amount of tokens to support it. The proposal with the highest number of support bonds will be selected to be a referendum. The bonded tokens will be released once the proposal is tabled (that is, brought to a vote).")]),e._v(" "),a("h4",{attrs:{id:"council-referenda"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#council-referenda"}},[e._v("#")]),e._v(" Council Referenda")]),e._v(" "),a("p",[e._v('Unanimous Council - When all members of the council agree on a proposal, it can be moved to a referendum. This referendum will have a negative turnout bias (that is, the smaller the amount of stake voting, the smaller the amount necessary for it to pass - see "Adaptive Quorum Biasing", below).')]),e._v(" "),a("p",[e._v("Majority Council - When agreement from only a simple majority of council members occurs, the referendum can also be voted upon, but it will be majority-carries.")]),e._v(" "),a("p",[e._v("There can only be one active referendum at any given time, except when there is also an emergency referendum in progress.")]),e._v(" "),a("h4",{attrs:{id:"voting-timetable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#voting-timetable"}},[e._v("#")]),e._v(" Voting Timetable")]),e._v(" "),a("p",[e._v('Every thirty days, a new referendum will come up for a vote, assuming there is at least one proposal in one of the queues. There is a queue for Council-approved proposals and a queue for publicly submitted proposals. The referendum to be voted upon alternates between the top proposal in the two queues. The "top" proposal is determined by the number of second votes behind it. If the given queue whose turn it is to create a referedum has no proposals (is empty), and there are proposals waiting in the other queue, the top proposal in the other queue will become a referendum.')]),e._v(" "),a("p",[e._v("Multiple referenda cannot be voted upon in the same time period, excluding emergency referenda. An emergency referendum occurring at the same time as a regular referendum (either public- or council-proposed) is the only time that multiple referenda will be able to be voted on at once.")]),e._v(" "),a("h4",{attrs:{id:"voting-on-a-referendum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#voting-on-a-referendum"}},[e._v("#")]),e._v(" Voting on a referendum")]),e._v(" "),a("p",[e._v("To vote, a voter generally must lock their tokens up for at least the enactment delay period beyond the end of the referendum. This is in order to ensure that some minimal economic buy-in to the result is needed and to dissuade vote selling. It is possible to vote without locking at all, but your vote is worth a small fraction of a normal vote, given your stake. At the same time, holding only a small amount of DOT tokens does not mean that the holder cannot influence the referendum result, thanks to time-locking. You can read more about this at "),a("a",{attrs:{href:"#voluntary-locking"}},[e._v("Voluntary Locking")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Example:\n\nPeter: Votes `No` with 10 DOTs for a 128 week lock period  => 10 * 6 = 60 Votes\n\nLogan: Votes `Yes` with 20 DOTs for a 4 week lock period => 20 * 1 = 20 Votes\n\nKevin: Votes `Yes` with 15 DOTs for a 8 week lock period => 15 * 2 = 30 Votes\n")])])]),a("p",[e._v("Even though combining both Logan and Kevin vote with more DOTs than Peter, the lock period for both of them is less than Peter, leading to their voting power counting as less.")]),e._v(" "),a("h4",{attrs:{id:"tallying"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tallying"}},[e._v("#")]),e._v(" Tallying")]),e._v(" "),a("p",[e._v("Depending on which entity proposed the proposal and whether all council members voted yes, there are three different scenarios. We can use following table for reference.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("Entity")])]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("Metric")])])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Public")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Positive Turnout Bias (Super-Majority Approve)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Council (Complete agreement)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Negative Turnout Bias (Super-Majority Against)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Council (Majority agreement)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Simple Majority")])])])]),e._v(" "),a("p",[e._v("Also, we need the following information and apply one of the formulas listed below to calculate the voting result. For example, let's use the public proposal as an example, so "),a("code",[e._v("Super-Majority Approve")]),e._v(" formula will be applied. There is no strict quorum, but super-majority required increases as turnout lowers.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("approve - the number of aye votes\n\nagainst - the number of nay votes\n\nturnout - the total number of voting tokens (Does not include conviction)\n\nelectorate - the total number of DOTs tokens issued in the network\n")])])]),a("h5",{attrs:{id:"super-majority-approve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#super-majority-approve"}},[e._v("#")]),e._v(" Super-Majority Approve")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("positive turnout bias")]),e._v(", whereby a heavy super-majority of aye votes is required to carry at low turnouts, but as turnout increases towards 100%, it becomes a simple-majority-carriers as below.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://latex.codecogs.com/svg.latex?%5Clarge&space;%7Bagainst&space;%5Cover&space;%5Csqrt%7Bturnout%7D%7D&space;%3C&space;%7Bapprove&space;%5Cover&space;%5Csqrt%7Belectorate%7D%7D",alt:""}})]),e._v(" "),a("h5",{attrs:{id:"super-majority-against"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#super-majority-against"}},[e._v("#")]),e._v(" Super-Majority Against")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("negative turnout bias")]),e._v(", whereby a heavy super-majority of nay votes is required to reject at low turnouts, but as turnout increases towards 100%, it becomes a simple-majority-carriers as below.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://latex.codecogs.com/svg.latex?%5Clarge&space;%7Bagainst&space;%5Cover&space;%5Csqrt%7Belectorate%7D%7D&space;%3C&space;%7Bapprove&space;%5Cover&space;%5Csqrt%7Bturnout%7D%7D",alt:""}})]),e._v(" "),a("h5",{attrs:{id:"simple-majority"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-majority"}},[e._v("#")]),e._v(" Simple-Majority")]),e._v(" "),a("p",[e._v("Majority-carries, a simple comparison of votes, if there are more aye votes than nay, then the proposal is carried.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://latex.codecogs.com/svg.latex?%5Clarge&space;%7Bapprove%7D&space;%3E&space;%7Bagainst%7D",alt:""}})]),e._v(" "),a("p",[a("em",[e._v("To know more about where these above formulas come from, please read the "),a("a",{attrs:{href:"https://github.com/paritytech/substrate/blob/master/frame/democracy/src/vote_threshold.rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("democracy pallet"),a("OutboundLink")],1)]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Example:\n\nAssume:\n- We only have 1,500 DOTs tokens in total.\n- Public proposal\n\nJohn  - 500 DOTs\nPeter - 100 DOTs\nLilly - 150 DOTs\nJJ    - 150 DOTs\nKen   - 600 DOTs\n\nJohn: Votes `Yes` for a 4 week lock period  => 500 * 1 = 500 Votes\n\nPeter: Votes `Yes` for a 4 week lock period => 100 * 1 = 100 Votes\n\nJJ: Votes `No` for a 16 week lock period => 150 * 3 = 450 Votes\n\napprove = 600\nagainst = 450\nturnout = 750\nelectorate = 1500\n")])])]),a("p",[a("img",{attrs:{src:"https://latex.codecogs.com/svg.latex?%5Clarge&space;%5Cfrac%7B450%7D%7B%5Csqrt%7B750%7D%7D&space;%3C&space;%5Cfrac%7B600%7D%7B%5Csqrt%7B1500%7D%7D",alt:"\\Large \\frac{450}{\\sqrt{750}}&space;<&space;\\frac{600}{\\sqrt{1500}}"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://latex.codecogs.com/svg.latex?%5Clarge&space;%7B16.432%7D&space;%3C&space;%7B15.492%7D",alt:"\\Large {16.432}&space;<&space;{15.492}"}})]),e._v(" "),a("p",[e._v("Since the above example is a public referendum, "),a("code",[e._v("Super-Majority Approve")]),e._v(" would be used to calculate the result. And "),a("code",[e._v("Super-Majority Approve")]),e._v(" requires more "),a("code",[e._v("aye")]),e._v(" votes to pass the referendum when turnout is low, therefore, based on the above result, the referendum will be rejected. In addition, only the winning voter's tokens are locked. If the voters on the losing side of the referendum believe that the outcome will have negative effects, their tokens are transferrable so they will not be locked in to the decision. Moreover, winning proposals are autonomously enacted only after some enactment period.")]),e._v(" "),a("h4",{attrs:{id:"voluntary-locking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#voluntary-locking"}},[e._v("#")]),e._v(" Voluntary Locking")]),e._v(" "),a("p",[e._v("Polkadot utilizes an idea called "),a("code",[e._v("Voluntary Locking")]),e._v(" that allows token holders to increase their voting power by declaring how long they are willing to lock-up their DOTs, hence, the maximum number of votes for each token holder will be calculated by the following formula:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Max votes = tokens * vote_multiplier\n")])])]),a("p",[e._v("The conviction multiplier adds an extra vote every time the lock period doubles.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Lock Periods")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Vote Multiplier")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("0")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("0.1")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("1")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("1")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("2")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("4")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("8")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("4")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("16")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("5")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("32")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("6")])])])]),e._v(" "),a("p",[e._v("Based on the genesis runtime, the maximum number of lock periods is set to 6 and the lock period is 30 days on Polkadot and eight days on Kusama.")]),e._v(" "),a("h4",{attrs:{id:"adaptive-quorum-biasing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adaptive-quorum-biasing"}},[e._v("#")]),e._v(" Adaptive Quorum Biasing")]),e._v(" "),a("p",[e._v('Polkadot introduces a concept "Adaptive Quorum Biasing", which functions as a lever that the council can use to alter the effective super-majority required to make it easier or more difficult for a proposal to pass in the case that there is no clear majority of voting power backing it or against it.')]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/governance/adaptive-quorum-biasing.png",alt:""}})]),e._v(" "),a("p",[e._v("Let's use the above image as an example.")]),e._v(" "),a("p",[e._v('If a publicly submitted referendum only has 25% turnout, the tally of "aye" votes has to reach 66% for it to pass since we applied '),a("code",[e._v("Positive Turnout Bias")]),e._v(".")]),e._v(" "),a("p",[e._v('In contrast, when it has 75% turnout, the tally of "aye" votes has to reach 54%, which means that the super-majority required decreases as the turnout increases.')]),e._v(" "),a("p",[e._v('When the council proposes a new proposal through unanimous consent, the referendum would be put to a vote using "Negative Turnout Bias". In this case it is easier to pass this proposal with low turnout and requires a super-majority to reject. As more token holders participate in voting, the bias approaches a plain majority carries.')]),e._v(" "),a("p",[e._v('Referring to the above image, when a referendum only has 25% turnout, the tally of "aye" votes has to reach 34% for it to pass.')]),e._v(" "),a("p",[e._v('In short, when turnout rate is low, a super-majority is required to reject the proposal, which means a lower threshold of "aye" votes have to be reached, but as turnout increases towards 100%, it becomes a simple-majority.')]),e._v(" "),a("p",[e._v("All three tallying mechanisms - majority carries, super-majority approve, and super-majority against - equate to a simple majority carries system at 100% turnout.")]),e._v(" "),a("h2",{attrs:{id:"council"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#council"}},[e._v("#")]),e._v(" Council")]),e._v(" "),a("p",[e._v('To represent passive stakeholders, we introduce the idea of a "council". The council is an on-chain entity comprising a number of actors, each represented as an on-chain account. For Polkadot this number is likely to begin at around six people, and increase over the course of 9 months to 24 people (roughly one extra individual coming on every two weeks). In general it has a fixed number of seats (envisioned to be 24 for Polkadot) and all members have a fixed term (12 months).')]),e._v(" "),a("p",[e._v("The council is called upon primarily for two tasks of governance: proposing sensible referenda, and cancelling uncontroversially dangerous or malicious referenda.")]),e._v(" "),a("p",[e._v("For a referendum to be proposed by the council, a strict majority of members must be in favor, with no member exercising a veto. Vetoes may be exercised only once by a member for any single proposal; if, after a cool-down period, the proposal is resubmitted, they may not veto it a second time. In the case that all members vote in favor, the vote is considered unanimous and is treated as uncontroversial.")]),e._v(" "),a("p",[e._v("A two-thirds majority of the council can cancel a referendum. This may function as a last-resort if there is an issue found late in the day with a referendum's proposal such as a bug in the code of the runtime that the proposal would institute.")]),e._v(" "),a("p",[e._v("If the cancellation is controversial enough that the council cannot get a two-thirds majority, then it will be left to the stakeholders "),a("em",[e._v("en masse")]),e._v(" to determine the fate of the proposal.")]),e._v(" "),a("h3",{attrs:{id:"how-to-be-a-council-member"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-be-a-council-member"}},[e._v("#")]),e._v(" How to be a council member?")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/governance/approval-vote.png",alt:""}})]),e._v(" "),a("p",[e._v("At genesis, there will be 6 to 12 seats in the Council. All stakeholders are free to signal their approval of any of the registered candidates. For every two weeks, one of those seats is up for election and increase over the course of 9 months to 24 people (roughly one extra individual coming on every two weeks). All members have a fixed term (1 year). Council members can be removed early only by a referendum.")]),e._v(" "),a("p",[e._v("To elect a new council member, Polkadot employs the same election scheme as used for choosing the active set of validators, a [Phragmen election][phragmen]. The election also chooses a set number of runners up (currently seven in Kusama) that will remain in the queue with their votes intact.")]),e._v(" "),a("p",[e._v('As opposed to a "first past the post", where voters must decide only on a single candidate chosen from a list, a Phragmen election is a more expressive way to indicate voters\' views. Token holders can treat it as Boolean voting to support as many candidates as they want. The election algorithm will find the fair winners.')]),e._v(" "),a("p",[e._v("Let's take a look at the example below.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Round 1")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}}),e._v(" "),a("th",{staticStyle:{"text-align":"center"}}),e._v(" "),a("th",{staticStyle:{"text-align":"center"}}),e._v(" "),a("th",{staticStyle:{"text-align":"center"}}),e._v(" "),a("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("Token Holders")])]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("Candidates")])]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("B")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("C")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("D")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("E")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Peter")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Alice")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Bob")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Kelvin")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("Total")])]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("1")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("3")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2")])])])]),e._v(" "),a("p",[e._v("The above example shows that candidate C wins the election in round 1, while candidate A, B, D & E keep remaining on the candidates' list for the next round.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Round 2")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}}),e._v(" "),a("th",{staticStyle:{"text-align":"center"}}),e._v(" "),a("th",{staticStyle:{"text-align":"center"}}),e._v(" "),a("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("Token Holders")])]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("Candidates")])]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("B")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("D")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("E")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Peter")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Alice")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Bob")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Kelvin")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("Total")])]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("4")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("4")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("1")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("1")])])])]),e._v(" "),a("p",[e._v("For the top-N (say 4 in this example) runners-up, they can remain and their votes persist until the next election. After round 2, even though candidates A & B get the same number of votes in this round, candidate A gets elected because after adding the older unused approvals, it is higher than B.")]),e._v(" "),a("p",[e._v("This would be the tentative governance configuration for Polkadot in the initial genesis. It will be changed if any security loopholes have been found after third-party auditing.")]),e._v(" "),a("h3",{attrs:{id:"prime-members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prime-members"}},[e._v("#")]),e._v(" Prime Members")]),e._v(" "),a("p",[e._v("The council, being an instantiation of Substrate's Collective pallet, implements what's called a "),a("em",[e._v("prime member")]),e._v(" whose vote acts as the default for other members that fail to vote before the timeout.")]),e._v(" "),a("p",[e._v("The prime member is chosen based on a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Borda_count",target:"_blank",rel:"noopener noreferrer"}},[e._v("Borda count"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v('The purpose of having a prime member of the council is to ensure a quorum, even when several members abstain from a vote. Council members might be tempted to vote a "soft rejection" or a "soft approval" by not voting and letting the others vote. With the existence of a prime member, it forces councillors to be explicit in their votes or have their vote counted for whatever is voted on by the prime.')]),e._v(" "),a("h2",{attrs:{id:"technical-committee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technical-committee"}},[e._v("#")]),e._v(" Technical Committee")]),e._v(" "),a("p",[e._v("The Technical Committee was introduced in the "),a("a",{attrs:{href:"https://polkadot.network/kusama-rollout-and-governance/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kusama rollout and governance post"),a("OutboundLink")],1),e._v(" as one of the three chambers of Kusama governance (along with the Council and the Referendum chamber). The Technical Committee is composed of the teams that have successfully implemented or specified either Polkadot/Kusama runtime or the Polkadot Host. Teams are added or removed from the Technical Committee from a simple majority vote of the council.")]),e._v(" "),a("p",[e._v("The Technical Committee can, along with the Polkadot Council, produce emergency referenda, which are fast-tracked for voting and implementation. These emergency referenda are intended for use only under urgent circumstances.")]),e._v(" "),a("p",[e._v("Fast-tracked referenda are the only type of referenda which can be active alongside another active referendum.")]),e._v(" "),a("p",[e._v("Thus, with fast tracked referenda it is possible to have two active referendums at the same time. Voting on one does not prevent a user from voting on the other.")]),e._v(" "),a("h2",{attrs:{id:"usage-of-dot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-of-dot"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"learn-DOT#dots-for-governance"}},[e._v("Usage of DOT")])]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/paritytech/polkadot/wiki/Governance",target:"_blank",rel:"noopener noreferrer"}},[e._v("Initial Governance Description"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/paritytech/substrate/tree/master/frame/democracy/src",target:"_blank",rel:"noopener noreferrer"}},[e._v("Democracy Pallet"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);