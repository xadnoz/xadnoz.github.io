(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{454:function(e,t,a){"use strict";a.r(t);var o=a(42),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"what-is-the-sequential-phragmen-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-sequential-phragmen-method"}},[e._v("#")]),e._v(" What is the sequential Phragmen method?")]),e._v(" "),a("p",[e._v("The sequential Phragmén method is a multi-winner election method introduced by Edvard Phragmén in the 1890s.")]),e._v(" "),a("p",[e._v("The quote below taken from the reference [Phragmén paper][phragmen paper] sums up the purpose of the sequential Phragmén method:")]),e._v(" "),a("blockquote",[a("p",[e._v("The problem that Phragmén’s methods try to solve is that of electing a set of a given numbers of persons from a larger set of candidates. Phragmén discussed this in the context of a parliamentary election in a multi-member constituency; the same problem can, of course, also occur in local elections, but also in many other situations such as electing a board or a committee in an organization.")])]),e._v(" "),a("h2",{attrs:{id:"where-is-the-phragmen-method-used-in-polkadot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-is-the-phragmen-method-used-in-polkadot"}},[e._v("#")]),e._v(" Where is the Phragmén method used in Polkadot?")]),e._v(" "),a("h3",{attrs:{id:"npos-validator-elections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npos-validator-elections"}},[e._v("#")]),e._v(" NPoS: Validator Elections")]),e._v(" "),a("p",[e._v("The sequential Phragmén method is used in the Nominated Proof-of-Stake scheme to elect validators based on their own self-stake and the stake that is voted to them from nominators. It also tries to equalize the weights between the validators after each election round. Since validators are paid equally in Polkadot, it is important that the stake behind each validator is spread out. Polkadot tries to optimize three metrics in its elections:")]),e._v(" "),a("ol",[a("li",[e._v("Maximize the total amount at stake.")]),e._v(" "),a("li",[e._v("Maximize the stake behind the minimally staked validator.")]),e._v(" "),a("li",[e._v("Minimize the variance of the stake in the set.")])]),e._v(" "),a("h4",{attrs:{id:"off-chain-phragmen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#off-chain-phragmen"}},[e._v("#")]),e._v(" Off-Chain Phragmen")]),e._v(" "),a("p",[e._v("Given the large set of nominators and validators, Phragmén's method is a difficult optimization problem. Polkadot uses off-chain workers to compute the result off-chain and submit a transaction to propose the set of winners. The reason for performing this computation off-chain is to keep a constant block time of six seconds and prevent long block times at the end of each era, when the validator election takes place.")]),e._v(" "),a("p",[e._v("Because certain user actions, like changing nominations, can change the outcome of the Phragmén election, the system forbids calls to these functions for the last quarter of the session before an era change. These functions are not permitted:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("bondExtra")])]),e._v(" "),a("li",[a("code",[e._v("unbond")])]),e._v(" "),a("li",[a("code",[e._v("withdrawUnbonded")])]),e._v(" "),a("li",[a("code",[e._v("validate")])]),e._v(" "),a("li",[a("code",[e._v("nominate")])]),e._v(" "),a("li",[a("code",[e._v("chill")])]),e._v(" "),a("li",[a("code",[e._v("payoutStakers")])]),e._v(" "),a("li",[a("code",[e._v("rebond")])])]),e._v(" "),a("h3",{attrs:{id:"council-elections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#council-elections"}},[e._v("#")]),e._v(" Council Elections")]),e._v(" "),a("p",[e._v("The Phragmén method is also used in the council election mechanism. When you vote for council members, you can select up to 16 different candidates, and then place a reserved bond which is the weight of your vote. Phragmén will run once on every election to determine the top candidates to assume council positions and then again amongst the top candidates to equalize the weight of the votes behind them as much as possible.")]),e._v(" "),a("h2",{attrs:{id:"what-does-it-mean-for-node-operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-mean-for-node-operators"}},[e._v("#")]),e._v(" What does it mean for node operators?")]),e._v(" "),a("p",[e._v("Phragmén is something that will run in the background and requires no extra effort from you. However, it is good to understand how it works since it means that not all the stake you've been nominated will end up on your validator after an election. Nominators are likely to nominate a few different validators that they trust to do a good job operating their nodes.")]),e._v(" "),a("p",[e._v("You can use the "),a("a",{attrs:{href:"https://github.com/kianenigma/offline-phragmen",target:"_blank",rel:"noopener noreferrer"}},[e._v("offline-phragmen"),a("OutboundLink")],1),e._v(" script for predicting the outcome of a validator election ahead of a new election.")]),e._v(" "),a("h2",{attrs:{id:"understanding-phragmen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understanding-phragmen"}},[e._v("#")]),e._v(" Understanding Phragmén")]),e._v(" "),a("p",[e._v("This section explains the sequential Phragmén method in-depth and walks through examples.")]),e._v(" "),a("h3",{attrs:{id:"basic-phragmen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-phragmen"}},[e._v("#")]),e._v(" Basic Phragmén")]),e._v(" "),a("h3",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("In order to understand the Weighted Phragmén method, we must first understand the basic Phragmén method. There must be some group of candidates, a group of seats they are vying for (which is less than the size of the group of candidates), and some group of voters. The voters can cast an approval vote - that is, they can signal approval for any subset of the candidates.")]),e._v(" "),a("p",[e._v("The subset should be a minimum size of one (i.e., one cannot vote for no candidates) and a maximum size of one less than the number of candidates (i.e., one cannot vote for all candidates). Users are allowed to vote for all or no candidates, but this will not have an effect on the final result, and so votes of this nature are meaningless.")]),e._v(" "),a("p",[e._v('Note that in this example, all voters are assumed to have equal say (that is, their vote does not count more or less than any other votes). The weighted case will be considered later. However, weighting can be "simulated" by having multiple voters vote for the same slate of candidates. For instance, five people voting for a particular candidate is mathematically the same as a single person with weight '),a("code",[e._v("5")]),e._v(" voting for that candidate.")]),e._v(" "),a("p",[e._v('The particular algorithm we call here the "Basic Phragmén" was first described by Brill '),a("em",[e._v("et al.")]),e._v(" in their paper "),a("a",{attrs:{href:"https://aaai.org/ocs/index.php/AAAI/AAAI17/paper/download/14757/13791",target:"_blank",rel:"noopener noreferrer"}},[e._v('"Phragmén’s Voting Methods and Justified Representation"'),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"algorithm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithm"}},[e._v("#")]),e._v(" Algorithm")]),e._v(" "),a("p",[e._v("The Phragmén method will iterate, selecting one seat at a time, according to the following rules:")]),e._v(" "),a("ol",[a("li",[e._v("Candidates submit their ballots, marking which candidates they approve of. Ballots will not be modified after submission.")]),e._v(" "),a("li",[e._v("An initial load of 0 is set for each ballot.")]),e._v(" "),a("li",[e._v("The candidate who wins the next available seat is the one where the ballots of their supporters would have the "),a("em",[e._v("least average (mean) cost")]),e._v(" if that candidate wins.")]),e._v(" "),a("li",[e._v("The "),a("em",[e._v("n")]),e._v(" ballots that approved that winning candidate get "),a("em",[e._v("1/n")]),e._v(" added to their load.")]),e._v(" "),a("li",[e._v("The load of all ballots that supported the winner of this round are averaged out so that they are equal.")]),e._v(" "),a("li",[e._v("If there are any more seats, go back to step 3. Otherwise, the selection ends.")])]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("Let's walk through an example with four candidates vying for three seats, and five voters.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Open Seats: 3\n\nCandidates:   A B C D  L0\n-------------------------\nVoter V1:       X      0\nVoter V2:         X X  0\nVoter V3:       X   X  0\nVoter V4:     X X      0\nVoter V5:       X X X  0\n")])])]),a("p",[e._v("In this example, we can see that voter "),a("code",[e._v("V1")]),e._v(" approves only of candidate "),a("code",[e._v("B")]),e._v(", voter "),a("code",[e._v("V2")]),e._v(" approves of candidates "),a("code",[e._v("C")]),e._v(" and "),a("code",[e._v("D")]),e._v(", etc. Voters can approve any number of candidates between 1 and "),a("code",[e._v("number_of_candidates - 1")]),e._v('. An initial "load" of '),a("code",[e._v("0")]),e._v(" is set for each ballot ("),a("code",[e._v("L0")]),e._v(" = load after round "),a("code",[e._v("0")]),e._v(', i.e., the "round" before the first round). We shall see shortly how this load is updated and used to select candidates.')]),e._v(" "),a("p",[e._v('We will now run through an iterative algorithm, with each iteration corresponding to one "seat". Since there are three seats, we will walk through three rounds.')]),e._v(" "),a("p",[e._v("For the first round, the winner is simply going to be the candidate with the most votes. Since all loads are equal, the lowest average load will be the candidate with the highest n, since "),a("code",[e._v("1/n")]),e._v(" will get smaller as "),a("code",[e._v("n")]),e._v(" increases. For this first example round, for instance, candidate "),a("code",[e._v("A")]),e._v(" had only one ballot vote for them. Thus, the average load for candidate A is "),a("code",[e._v("1/1")]),e._v(", or 1. Candidate C has two ballots approving of them, so the average load is "),a("code",[e._v("1/2")]),e._v(". Candidate B has the lowest average load, at "),a("code",[e._v("1/4")]),e._v(" and they get the first seat. Ballots loads are now averaged out, although for the first iteration, this will have not have any effect.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Filled seats: 1 (B)\nOpen Seats: 2\n\nCandidates:   A B C D  L0 L1\n-----------------------------\nVoter V1:       X      0  1/4\nVoter V2:         X X  0  0\nVoter V3:       X   X  0  1/4\nVoter V4:     X X      0  1/4\nVoter V5:       X X X  0  1/4\n")])])]),a("p",[e._v("We are now down to candidates "),a("code",[e._v("A")]),e._v(", "),a("code",[e._v("C")]),e._v(", and "),a("code",[e._v("D")]),e._v(" for two open seats. There is only one voter ("),a("code",[e._v("V4")]),e._v(") for "),a("code",[e._v("A")]),e._v(", with load "),a("code",[e._v("1/4")]),e._v(". "),a("code",[e._v("C")]),e._v(" has two voters, "),a("code",[e._v("V2")]),e._v(" and "),a("code",[e._v("V5")]),e._v(", with loads of "),a("code",[e._v("0")]),e._v(" and "),a("code",[e._v("1/4")]),e._v(". "),a("code",[e._v("D")]),e._v(" has three voters approving of them, "),a("code",[e._v("V2")]),e._v(", "),a("code",[e._v("V3")]),e._v(", and "),a("code",[e._v("V5")]),e._v(", with loads of "),a("code",[e._v("0")]),e._v(", "),a("code",[e._v("1/4")]),e._v(", and "),a("code",[e._v("1/4")]),e._v(", respectively.")]),e._v(" "),a("p",[e._v("If Candidate "),a("code",[e._v("A")]),e._v(" wins, the average load would be "),a("code",[e._v("(1/4 + 1/1) / 1")]),e._v(", or "),a("code",[e._v("5/4")]),e._v(". If candidate "),a("code",[e._v("C")]),e._v(" wins, the average load would be "),a("code",[e._v("(0 + 1/2) + (1/4 + 1/2) / 2")]),e._v(", or "),a("code",[e._v("5/8")]),e._v(". If candidate "),a("code",[e._v("D")]),e._v(" wins, the average load would be "),a("code",[e._v("(0 + 1/3) + (1/4 + 1/3) + (1/4 + 1/3) / 3")]),e._v(", or "),a("code",[e._v("1/2")]),e._v(". Since "),a("code",[e._v("1/2")]),e._v(" is the lowest average load, candidate D wins the second round.")]),e._v(" "),a("p",[e._v("Now everybody who voted for Candidate "),a("code",[e._v("D")]),e._v(" has their load set to the average, "),a("code",[e._v("1/2")]),e._v(" of all the loads.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Filled seats: 2 (B, D)\nOpen Seats: 1\n\nCandidates:   A B C D  L0 L1  L2\n---------------------------------\nVoter V1:       X      0  1/4 1/4\nVoter V2:         X X  0  0   1/2\nVoter V3:       X   X  0  1/4 1/2\nVoter V4:     X X      0  1/4 1/4\nVoter V5:       X X X  0  1/4 1/2\n")])])]),a("p",[e._v("There is now one seat open and two candidates, "),a("code",[e._v("A")]),e._v(" and "),a("code",[e._v("C")]),e._v(". Voter "),a("code",[e._v("V4")]),e._v(" is the only one voting for "),a("code",[e._v("A")]),e._v(", so if "),a("code",[e._v("A")]),e._v(" wins then the average load would be "),a("code",[e._v("(1/4 + 1/1) / 1")]),e._v(", or "),a("code",[e._v("5/4")]),e._v(". Voters "),a("code",[e._v("V2")]),e._v(" and "),a("code",[e._v("V5")]),e._v(" (both with load "),a("code",[e._v("1/2")]),e._v(") support "),a("code",[e._v("C")]),e._v(", so if "),a("code",[e._v("C")]),e._v(" wins the average load would be "),a("code",[e._v("((1/2 + 1/2) + (1/2 + 1/2)) / 2")]),e._v(", or "),a("code",[e._v("1")]),e._v(". Since the average load would be lower with "),a("code",[e._v("C")]),e._v(", "),a("code",[e._v("C")]),e._v(" wins the final seat.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Filled seats: 3 (B, D, C)\nOpen Seats: 0\n\nCandidates:   A B C D  L0 L1  L2  L3\n------------------------------------\nVoter V1:       X      0  1/4 1/4 1/4\nVoter V2:         X X  0  0   1/2 1\nVoter V3:       X   X  0  1/4 1/2 1/2\nVoter V4:     X X      0  1/4 1/4 1/4\nVoter V5:       X X X  0  1/4 1/2 1\n")])])]),a("p",[e._v("An interesting characteristic of this calculation is that the total load of all voters will always equal the number of seats filled in that round. In the zeroth round, load starts at "),a("code",[e._v("0")]),e._v(" and there are no seats filled. After the first round, the total of all loads is "),a("code",[e._v("1")]),e._v(", after the second round it is "),a("code",[e._v("2")]),e._v(", etc.")]),e._v(" "),a("h3",{attrs:{id:"weighted-phragmen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weighted-phragmen"}},[e._v("#")]),e._v(" Weighted Phragmén")]),e._v(" "),a("h3",{attrs:{id:"rationale-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale-2"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("While this method works well if all voters have equal weight, this is not the case in Polkadot. Elections for both validators and candidates for the Polkadot Council are weighted by the number of tokens held by the voters. This makes elections more similar to a corporate shareholder election than a traditional political election, where some members have more pull than others. Someone with a single token will have much less voting power than someone with 100. Although this may seem anti-democratic, in a pseudonymous system, it is trivial for someone with 100 tokens to create 100 different accounts and spread their wealth to all of their pseudonyms.")]),e._v(" "),a("p",[e._v("Therefore, not only do we want to allow voters to have their preferences expressed in the result, but do so while keeping as equal a distribution of their stake as possible and express the wishes of minorities as much as is possible. The Weighted Phragmén method allows us to reach these goals.")]),e._v(" "),a("h3",{attrs:{id:"algorithm-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-2"}},[e._v("#")]),e._v(" Algorithm")]),e._v(" "),a("p",[e._v("Weighted Phragmén is similar to Basic Phragmén in that it selects candidates sequentially, one per round, until the maximum number of candidates are elected. However, it has additional features to also allocate weight (stake) behind the candidates.")]),e._v(" "),a("p",[a("em",[e._v('Note: in terms of validator selection, for the following algorithm, you can think of "voters" as "nominators" and "candidates" as "validators".')])]),e._v(" "),a("ol",[a("li",[e._v('Candidates are elected, one per round, and added to the set of successful candidates (they have won a "seat"). This aspect of the algorithm is very similar to the "basic Phragmén" algorithm described above.')]),e._v(" "),a("li",[e._v("However, as candidates are elected, a weighted mapping is built, defining the weights of each selection of a validator by each candidate.")])]),e._v(" "),a("p",[e._v("In more depth, the algorithm operates like so:")]),e._v(" "),a("ol",[a("li",[e._v("Create a list of all voters, their total amount of stake, and which validators they support.")]),e._v(" "),a("li",[e._v("Generate an initial edge-weighted graph mapping from voters to candidates, where each edge weight is the total "),a("em",[e._v("potential")]),e._v(" weight (stake) given by that voter. The sum of all potential weight for a given candidate is called their "),a("em",[e._v("approval stake")]),e._v(".")]),e._v(" "),a("li",[e._v("Now we start electing candidates. For the list of all candidates who have not been elected, get their score, which is equal to "),a("code",[e._v("1 / approval_stake")]),e._v(".")]),e._v(" "),a("li",[e._v("For each voter, update the score of each candidate they support by adding their total budget (stake) multiplied by the load of the candidate and then dividing by that candidate's approval stake ("),a("code",[e._v("voter_budget * voter_load / candidate_approval_stake")]),e._v(".")]),e._v(" "),a("li",[e._v("Determine the candidate with the lowest score and elect that candidate. Remove the elected candidate from the pool of potential candidates.")]),e._v(" "),a("li",[e._v("The load for each edge connecting to the winning candidate is updated, with the edge load set to the score of the candidate minus the voter's load, and the voter's load then set to the candidate's score.")]),e._v(" "),a("li",[e._v("If there are more candidates to elect, go to Step 3. Otherwise, continue to step 8.")]),e._v(" "),a("li",[e._v("Now the stake is distributed amongst each nominator who backed at least one elected candidate. The backing stake for each candidate is calculated by taking the budget of the voter and multiplying by the edge load then dividing by the candidate load ("),a("code",[e._v("voter_budget * edge_load / candidate_load")]),e._v(").")])]),e._v(" "),a("h3",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[a("em",[e._v("Note: All numbers in this example are rounded off to three decimal places.")])]),e._v(" "),a("p",[e._v("In the following example, there are five voters and five candidates vying for three potential seats. Each voter "),a("code",[e._v("V1 - V5")]),e._v(" has an amount of stake equal to their number (e.g., "),a("code",[e._v("V1")]),e._v(" has stake of 1, "),a("code",[e._v("V2")]),e._v(" has stake of 2, etc.). Every voter is also going to have a "),a("em",[e._v("load")]),e._v(" which initially starts at "),a("code",[e._v("0")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Filled seats: 0\nOpen Seats: 3\n\nCandidates:    A B C D E  L0\n----------------------------\nVoter V1 (1):  X X        0\nVoter V2 (2):  X X        0\nVoter V3 (3):  X          0\nVoter V4 (4):    X X X    0\nVoter V5 (5):  X     X    0\n")])])]),a("p",[e._v("Let us now calculate the approval stake of each of the candidates. Recall that this is merely the amount of all support for that candidate by all voters.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Candidate A: 1 + 2 + 3 + 5 = 11\nCandidate B: 1 + 2 + 4 = 7\nCandidate C: 4 = 4\nCandidate D: 4 + 5 = 9\nCandidate E: 0\n")])])]),a("p",[e._v("The first step is easy - candidate "),a("code",[e._v("E")]),e._v(" has 0 approval stake and can be ignored from here on out. They will never be elected.")]),e._v(" "),a("p",[e._v("We can now calculate the initial scores of the candidates, which is "),a("code",[e._v("1 / approval_stake")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Candidate A: 1 / 11 = 0.091\nCandidate B: 1 / 7 = 0.143\nCandidate C: 1 / 4 = 0.25\nCandidate D: 1 / 9 = 0.111\nCandidate E: N/A\n")])])]),a("p",[e._v("For every edge, we are going to calculate the score, which is current score plus the total budget * the load of the voter divided by the approval stake of the candidate. However, since the load of every voter starts at 0, and anything multiplied by 0 is 0, any addition will be "),a("code",[e._v("0 / x")]),e._v(", or 0. This means that this step can be safely ignored for the initial round.")]),e._v(" "),a("p",[e._v("Thus, the best (lowest) score for Round 0 is Candidate A, with a score of "),a("code",[e._v("0.091")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Candidates:    A B C D E  L0 L1\n----------------------------------\nVoter V1 (1):  X X        0  0.091\nVoter V2 (2):  X X        0  0.091\nVoter V3 (3):  X          0  0.091\nVoter V4 (4):    X X X    0  0\nVoter V5 (5):  X     X    0  0.091\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Filled seats: 1 (A)\nOpen Seats: 2\n\nCandidates:    A B C D E  L0\n----------------------------\nVoter V1 (1):  X X        0\nVoter V2 (2):  X X        0\nVoter V3 (3):  X          0\nVoter V4 (4):    X X X    0\nVoter V5 (5):  X     X    0\n")])])]),a("p",[e._v("Candidate "),a("code",[e._v("A")]),e._v(" is now safe; there is no way that they will lose their seat. Before moving on to the next round, we need to update the scores on the edges of our graph for any candidates who have not yet been elected.")]),e._v(" "),a("p",[e._v("We elided this detail in the previous round, since it made no difference to the final scores, but we should go into depth here to see how scores are updated. We first must calculate the new loads of the voters, and then calculate the new scores of the candidates.")]),e._v(" "),a("p",[e._v("Any voter who had one of their choices for candidate fill the seat in this round (i.e., voters "),a("code",[e._v("V1")]),e._v(", "),a("code",[e._v("V2")]),e._v(", "),a("code",[e._v("V3")]),e._v(", and "),a("code",[e._v("V5")]),e._v(", who all voted for "),a("code",[e._v("A")]),e._v(") will have their load increased. This load increase will blunt the impact of their vote in future rounds, and the edge (which will be used in determining stake allocation later) is set to the score of the elected candidate minus the "),a("em",[e._v("current")]),e._v(" voter load.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("edge_load = elected_candidate_score - voter_load\nvoter_load = elected_candidate_score\n")])])]),a("p",[e._v("In this instance, the score of the elected candidate is "),a("code",[e._v("0.091")]),e._v(" and the voter loads are all "),a("code",[e._v("0")]),e._v(". So for each voter who voted for "),a("code",[e._v("A")]),e._v(", we will calculate a new edge load "),a("code",[e._v("Voter")]),e._v(" -> "),a("code",[e._v("A")]),e._v(" of:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Edge load: 0.091 - 0 = 0.091\n")])])]),a("p",[e._v("and a new voter load of:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Voter load: 0.091\n")])])]),a("p",[e._v("As a reminder, here are the current scores. Loads of the voters are all "),a("code",[e._v("0")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Candidate B : 0.143\nCandidate C : 0.25\nCandidate D : 0.111\n")])])]),a("p",[e._v("Now, we go through the weighted graph and update the score of the candidate and the load of the edge, using the algorithm:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("candidate_score = candidate_score + ((voter_budget * voter_load) / candidate_approval_stake)\n")])])]),a("p",[e._v("Without walking through each step, this gives us the following modifications to the scores of the different candidates.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("V1 updates B to 0.156\nV2 updates B to 0.182\nV4 updates B to 0.182\nV4 updates C to 0.25\nV4 updates D to 0.111\nV5 updates D to 0.162\n")])])]),a("p",[e._v("After scores are updated, the final scores for the candidates for this round are:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Candidate B: 0.182\nCandidate C: 0.25\nCandidate D: 0.162\n")])])]),a("p",[a("code",[e._v("D")]),e._v(", with the lowest score, is elected. You will note that even though candidate "),a("code",[e._v("B")]),e._v(" had more voters supporting them, candidate "),a("code",[e._v("D")]),e._v(" won the election due to their lower score. This is directly due to the fact that they had the lowest score, of course, but the root reason behind them having a lower score was both the greater amount of stake behind them and that voters who did not get one of their choices in an earlier round (in this example, voter V4) correspond to a higher likelihood of a candidate being elected.")]),e._v(" "),a("p",[e._v("We then update the loads for the voters and edges as specified above for any voters who voted for candidate "),a("code",[e._v("D")]),e._v(" (viz., "),a("code",[e._v("V4")]),e._v(" and "),a("code",[e._v("V5")]),e._v(") using the same formula as above.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Filled seats: 2 (A, D)\nOpen Seats: 1\n\nCandidates:    A B C D E  L0 L1    L2\n-----------------------------------\nVoter V1 (1):  X X        0  0.091 0.091\nVoter V2 (2):  X X        0  0.091 0.091\nVoter V3 (3):  X          0  0.091 0.091\nVoter V4 (4):    X X X    0  0     0.162\nVoter V5 (5):  X     X    0  0.091 0.162\n")])])]),a("p",[e._v("Following a similar process for Round 2, we start with initial candidate scores of:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Candidate B : 0.143\nCandidate C : 0.25\n")])])]),a("p",[e._v("We can then update the scores of the remaining two candidates according to the algorithm described above.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("V1 updates B to 0.156\nV2 updates B to 0.182\nV4 updates B to 0.274\nV4 updates C to 0.412\n")])])]),a("p",[e._v("With the lowest score of "),a("code",[e._v("0.274")]),e._v(", Candidate "),a("code",[e._v("B")]),e._v(" claims the last open seat. Candidates "),a("code",[e._v("A")]),e._v(", "),a("code",[e._v("D")]),e._v(", and "),a("code",[e._v("B")]),e._v(" have been elected, and candidates "),a("code",[e._v("C")]),e._v(" and "),a("code",[e._v("E")]),e._v(" are not.")]),e._v(" "),a("p",[e._v("Before moving on, we must perform a final load adjustment for the voters and the graph.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Filled seats: 3 (A, D, B)\nOpen Seats: 0\n\nCandidates:    A B C D E  L0 L1    L2    L3\n------------------------------------------\nVoter V1 (1):  X X        0  0.091 0.091 0.274\nVoter V2 (2):  X X        0  0.091 0.091 0.274\nVoter V3 (3):  X          0  0.091 0.091 0.091\nVoter V4 (4):    X X X    0  0     0.162 0.274\nVoter V5 (5):  X     X    0  0.091 0.162 0.162\n")])])]),a("p",[e._v("Now we have to determine how much stake every voter should allocate to each candidate. This is done by taking the load of the each edge and dividing it by the voter load, then multiplying by the total budget of the voter.")]),e._v(" "),a("p",[e._v("In this example, the weighted graph ended up looking like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Nominator: V1\n    Edge to A load= 0.091\n    Edge to B load= 0.183\nNominator: V2\n    Edge to A load= 0.091\n    Edge to B load= 0.183\nNominator: V3\n    Edge to A load= 0.091\nNominator: V4\n    Edge to B load= 0.113\n    Edge to D load= 0.162\nNominator: V5\n    Edge to A load= 0.091\n    Edge to D load= 0.071\n")])])]),a("p",[e._v("For instance, the budget of "),a("code",[e._v("V1")]),e._v(" is "),a("code",[e._v("1")]),e._v(", the edge load to "),a("code",[e._v("A")]),e._v(" is "),a("code",[e._v("0.091")]),e._v(", and the voter load is "),a("code",[e._v("0.274")]),e._v(". Using our equation:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("backing_stake (A) = voter_budget * edge_load / voter_load\n")])])]),a("p",[e._v("We can fill these variables in with:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("backing_stake (A) = 1 * 0.091 / 0.274 = 0.332\n")])])]),a("p",[e._v("For "),a("code",[e._v("V1")]),e._v(" backing stake of "),a("code",[e._v("B")]),e._v(", you can simply replace the edge load value and re-calculate.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("backing_stake (B) = 1 * 0.183 / 0.274 = 0.668\n")])])]),a("p",[e._v("Note that the total amount of all backing stake for a given voter will equal the total budget of the voter, unless that voter had no candidates elected, in which case it will be 0.")]),e._v(" "),a("p",[e._v("The final results are:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("A is elected with stake 6.807.\nD is elected with stake 4.545.\nB is elected with stake 3.647.\n\nV1 supports: A with stake: 0.332 and B with stake: 0.668.\nV2 supports: A with stake: 0.663 and B with stake: 1.337.\nV3 supports: A with stake: 3.0.\nV4 supports: B with stake: 1.642 and D with stake: 2.358.\nV5 supports: A with stake: 2.813 and D with stake: 2.187.\n")])])]),a("p",[e._v("You will notice that the total amount of stake for candidates "),a("code",[e._v("A")]),e._v(", "),a("code",[e._v("D")]),e._v(", and "),a("code",[e._v("B")]),e._v(" equals (aside from rounding errors) the total amount of stake of all the voters ("),a("code",[e._v("1 + 2 + 3 + 4 + 5 = 15")]),e._v("). This is because each voter had at least one of their candidates fill a seat. Any voter whose had none of their candidates selected will also not have any stake in any of the elected candidates.")]),e._v(" "),a("h2",{attrs:{id:"optimizations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimizations"}},[e._v("#")]),e._v(" Optimizations")]),e._v(" "),a("p",[e._v("The results are further optimized to more evenly distribute the load (which is a desirable feature, as discussed below) via post-processing.")]),e._v(" "),a("h3",{attrs:{id:"rationale-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale-3"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("Another issue is that we want to ensure that as equal a distribution of votes as possible amongst the elected validators or council members. This helps us increase the security of the system by ensuring that the minimum amount of tokens in order to join the active validator set or council is as high as possible. For example, imagine a result of five validators being elected, where validators have the following stake: "),a("code",[e._v("{1000, 20, 10, 10, 10}")]),e._v(', for a total stake of 1_050. In this case, a potential attacker could join the active validator set with only 11 tokens, and could obtain a majority of validators with only 33 tokens (since the attacker only has to have enough stake to "kick out" the three lowest validators).')]),e._v(" "),a("p",[e._v("In contrast, imagine a different result with the same amount of total stake, but with that stake perfectly equally distributed: "),a("code",[e._v("{210, 210, 210, 210, 210}")]),e._v(". With the same amount of stake, an attacker would need to stake 633 tokens in order to get a majority of validators, a much more expensive proposition. Although obtaining an equal distribution is unlikely, the more equal the distribution, the higher the threshold - and thus the higher the expense - for attackers to gain entry to the set.")]),e._v(" "),a("h3",{attrs:{id:"high-level-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#high-level-description"}},[e._v("#")]),e._v(" High-Level Description")]),e._v(" "),a("p",[e._v("After running the weighted Phragmén algorithm, a process is run which redistributes the vote amongst the elected set. This process will never add or remove an elected candidate from the set. Instead, it reduces the variance in the list of backing stake from the voters to the elected candidates. Perfect equalization is not always possible, but the algorithm attempts to equalize as much as possible.")]),e._v(" "),a("p",[e._v("These optimizations will not be covered in-depth on this page. For more details, you can view the "),a("a",{attrs:{href:"https://github.com/paritytech/substrate/blob/master/frame/elections-phragmen/src/lib.rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rust implementation in Substrate"),a("OutboundLink")],1),e._v(" or the "),a("code",[e._v("seqPhragménwithpostprocessing")]),e._v(" method in the "),a("a",{attrs:{href:"https://github.com/w3f/consensus/tree/master/NPoS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python reference implementation"),a("OutboundLink")],1),e._v(". If you would like to dive even more deeply, you can review the "),a("a",{attrs:{href:"https://research.web3.foundation/en/latest/polkadot/NPoS/4.%20Sequential%20Phragm%C3%A9n%E2%80%99s%20method.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3F Research Page on Sequential Phragmén Method"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"external-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-resources"}},[e._v("#")]),e._v(" External Resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://research.web3.foundation/en/latest/polkadot/NPoS/4.%20Sequential%20Phragm%C3%A9n%E2%80%99s%20method.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3F Research Page on Sequential Phragmén Method"),a("OutboundLink")],1),e._v(" - The formal adaptation of the Phragmén method as applied to Polkadot validators.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/w3f/consensus/tree/master/NPoS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python Reference Implementations"),a("OutboundLink")],1),e._v(" - Implementations of Simple and Complicated Phragmén methods.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/paritytech/substrate/blob/master/core/phragmen/src/lib.rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Substrate Implementation"),a("OutboundLink")],1),e._v(" - Rust implementation used in the Substrate Runtime Module Library.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://arxiv.org/pdf/1611.08826.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Phragmén's and Thiele's Election Methods"),a("OutboundLink")],1),e._v(" - 95-page paper explaining Phragmén's election methods in detail.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://aaai.org/ocs/index.php/AAAI/AAAI17/paper/download/14757/13791",target:"_blank",rel:"noopener noreferrer"}},[e._v("Phragmén’s Voting Methods and Justified Representation"),a("OutboundLink")],1),e._v(" - This paper by Brill "),a("em",[e._v("et al.")]),e._v(" is the source for the simple Phragmén algorithm, along with proofs about its properties.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/kianenigma/offline-phragmen",target:"_blank",rel:"noopener noreferrer"}},[e._v("Offline Phragmén"),a("OutboundLink")],1),e._v(" - Script to generate the Phragmén validator election outcome before the start of an era.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);