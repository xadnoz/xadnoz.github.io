(window.webpackJsonp=window.webpackJsonp||[]).push([[704],{1120:function(t,e,a){"use strict";a.r(e);var i=a(42),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Expect things to break on Kusama. To help you break some things, take a look at the following threat model.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Hacker wants to …")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Security promise that should prevent the hack")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Hacking Incentive")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Hacking Damage")]),t._v(" "),a("th",[t._v("Hacking value details")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Double spend tokens via getting the clients to accept a different chain")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Integrity (System-wide)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High")]),t._v(" "),a("td",[t._v("If attackers are able to double spend tokens, they are able to get services without paying for them. This gives them a high monetary incentive to execute the attack.")])]),t._v(" "),a("tr",[a("td",[t._v("Cause system to mint tokens to his own account")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Integrity (System-wide)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Medium")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Low - Medium")]),t._v(" "),a("td",[t._v("If an attacker is able to craft transactions that mint tokens to their account, then this provides a high monetary incentive to execute this attack.")])]),t._v(" "),a("tr",[a("td",[t._v("Validate malicious blocks to double spend tokens")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Availability (System-wide)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Medium")]),t._v(" "),a("td",[t._v("If an attacker is able to double spend tokens, they are able to get services without paying for them. This gives them a high monetary incentive to execute the attack.")])]),t._v(" "),a("tr",[a("td",[t._v("Undermine consensus mechanism to split chain")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Integrity (System-wide)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High")]),t._v(" "),a("td",[t._v('"If an attacker is able to double spend tokens, they are able to get services without paying for them. This gives them a high monetary incentive to execute the attack. Betting on decrease in value of the cryptocurrency or competitors want to damage the reputation, so that the value of their blockchain increases.')])]),t._v(" "),a("tr",[a("td",[t._v("Tamper/manipulate blockchain history to invalidate transactions (e.g. a voting result)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Integrity (System-wide)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Medium")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Medium - High")]),t._v(" "),a("td",[t._v("Attacker can rollback undesired transactions by intentionally invalidating the block where transaction has happened. Attacker can force a governance decision (or even an on-chain update) which favors them.")])]),t._v(" "),a("tr",[a("td",[t._v("Undermine blockchain or consensus mechanism to damage the ecosystem's reputation")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Availability (System-wide)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High")]),t._v(" "),a("td",[t._v("Betting on decrease in value of the cryptocurrency or competitors want to damage the reputation, so that the value of their blockchain increases")])]),t._v(" "),a("tr",[a("td",[t._v("Censorship")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Availability (System-wide)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Medium")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High")]),t._v(" "),a("td",[t._v("Hackers are able to block undesirable types of transactions (e.g. industry competitor transactions or referendum votes). This could be achieved by colluding with other stakeholders or by otherwise obtaining more voting power.")])]),t._v(" "),a("tr",[a("td",[t._v("Deanonymize users")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Confidentiality (Node)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Medium")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Medium")]),t._v(" "),a("td",[t._v("Parties that want to de-anonymize users can use the information to oppress the opposition (e.g. political activists).")])]),t._v(" "),a("tr",[a("td",[t._v("Steal token from node")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Integrity (Node)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High")]),t._v(" "),a("td",[t._v("Attackers that are able to steal tokens from nodes can claim assets for themselves, which gives them a high monetary incentive to execute the attack.")])]),t._v(" "),a("tr",[a("td",[t._v("Steal token from node by leaking credentials")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Confidentiality (Node)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High")]),t._v(" "),a("td",[t._v("Attackers that are able to steal tokens from nodes can claim assets for themselves, which gives them a high monetary incentive to execute the attack.")])]),t._v(" "),a("tr",[a("td",[t._v("Prevent node from accessing the Polkadot network")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Availability (Node)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Low")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Low - Medium")]),t._v(" "),a("td",[t._v("Run a targeted denial-of-service attack out of revenge, monetary interests (in case of a competing coin exchange, etc.).")])]),t._v(" "),a("tr",[a("td",[t._v("Defraud other participants")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Integrity (Node)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Medium")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Low - Medium")]),t._v(" "),a("td",[t._v("Attacker can abuse other participants’ misunderstanding of Polkadot's security guarantees to defraud them. Also, if the reward for calling out bad behavior can be set up so that it is higher than the according punishment, a set of self-handled nodes can be set up to generate a source cycle. Other participants are not needed for this attack.")])]),t._v(" "),a("tr",[a("td",[t._v("Defraud other participants")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Integrity (System-wide)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High")]),t._v(" "),a("td",[t._v("An attacker could abuse bugs in Polkadot's economic system to defraud other participants. For example, an attacker could exploit a logic bug to not pay transaction fees.")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);