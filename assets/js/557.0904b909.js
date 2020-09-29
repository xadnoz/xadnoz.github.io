(window.webpackJsonp=window.webpackJsonp||[]).push([[557],{964:function(t,o,e){"use strict";e.r(o);var a=e(42),n=Object(a.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("This guide will walk you through how to nominate your DOTs to a validator node so that you can take part in the staking system and earn fresh DOTs.")]),t._v(" "),e("p",[t._v("It has been updated for the Alexander testnet and Polkadot release PoC-4.")]),t._v(" "),e("h2",{attrs:{id:"create-stash-and-controller-accounts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-stash-and-controller-accounts"}},[t._v("#")]),t._v(" Create "),e("code",[t._v("stash")]),t._v(" and "),e("code",[t._v("controller")]),t._v(" accounts")]),t._v(" "),e("p",[t._v("We will assume that you will be starting with two fresh accounts. Click "),e("a",{attrs:{href:"learn-staking#accounts"}},[t._v("here")]),t._v(" to learn more about what "),e("code",[t._v("stash")]),t._v(" and "),e("code",[t._v("controller")]),t._v(" accounts mean.")]),t._v(" "),e("p",[t._v("The first step is to create two accounts by going to the "),e("em",[t._v("Accounts")]),t._v(" tab on the Polkadot Dashboard and clicking on "),e("a",{attrs:{href:"https://polkadot.js.org/apps/#/accounts",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("Add account")]),e("OutboundLink")],1),t._v(". Make sure to use "),e("code",[t._v("stash")]),t._v(" and "),e("code",[t._v("controller")]),t._v(" in the names of your accounts to identify them easily.")]),t._v(" "),e("p",[e("img",{attrs:{src:"assets/guides/how-to-nominate/polkadot-dashboard-create-account.jpg",alt:"Creating an account"}})]),t._v(" "),e("p",[t._v("Once you've created your accounts you will need to acquire some DOTs. See the "),e("a",{attrs:{href:"learn-DOT#getting-testnet-dots"}},[t._v("DOTs page")]),t._v(" for recommendations on getting testnet DOTs. Each of your accounts should have at least 150 milliDOTs to cover the existential deposit and transaction fees.")]),t._v(" "),e("h2",{attrs:{id:"nominating"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nominating"}},[t._v("#")]),t._v(" Nominating")]),t._v(" "),e("p",[t._v("It is now time to setup our nominator. We will do the following:")]),t._v(" "),e("ul",[e("li",[t._v("Bound the DOTs of the "),e("code",[t._v("stash")]),t._v(" account. These DOTs will be put at stake for the security of the network and can be slashed.")]),t._v(" "),e("li",[t._v("Select the "),e("code",[t._v("controller")]),t._v(". This is the account that will decide when to start or stop nominating.")])]),t._v(" "),e("p",[t._v("First, go to "),e("a",{attrs:{href:"https://polkadot.js.org/apps/#/staking/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Staking > Account actions"),e("OutboundLink")],1),t._v(' section. Click on the "New stake" button.')]),t._v(" "),e("p",[e("img",{attrs:{src:"assets/guides/how-to-nominate/polkadot-dashboard-bonding.jpg",alt:"dashboard bonding"}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Stash account")]),t._v(" - Select your "),e("code",[t._v("stash")]),t._v(" account, we will bound 100 milliDOTs, make sure it has this amount of funds.")]),t._v(" "),e("li",[e("strong",[t._v("Controller account")]),t._v(" - select the "),e("code",[t._v("controller")]),t._v(" account created earlier.")]),t._v(" "),e("li",[e("strong",[t._v("Value bonded")]),t._v(" - how many DOTs from the "),e("code",[t._v("stash")]),t._v(" account you want to bond/stake. You can top up this amount and bound more DOTs later, however, withdrawing any bounded amount requires the bounding duration period to be over (several months at the time of writing).")]),t._v(" "),e("li",[e("strong",[t._v("Payment destination")]),t._v(" - where the rewards get sent. More info "),e("a",{attrs:{href:"learn-staking#reward-distribution"}},[t._v("here")]),t._v(".")])]),t._v(" "),e("p",[t._v("Once everything is filled properly, click "),e("code",[t._v("Bond")]),t._v(" and sign the transaction (with your "),e("code",[t._v("stash")]),t._v(" account). You will then see the following. You can ignore the "),e("code",[t._v("Set Session Key")]),t._v(" button, it is only useful if you want to validate and we will not need it in this tutorial.")]),t._v(" "),e("p",[e("img",{attrs:{src:"assets/guides/how-to-nominate/polkadot-dashboard-set-session-key.jpg",alt:"dashboard overview"}})]),t._v(" "),e("h2",{attrs:{id:"nominating-a-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nominating-a-validator"}},[t._v("#")]),t._v(" Nominating a validator")]),t._v(" "),e("p",[t._v("Go to the "),e("em",[t._v("Staking Overview")]),t._v(" tab on the staking page of the Polkadot Dashboard. On the left side, you will see a list of validators (on the right side are validators who have signaled their intention to join the validator set and you can ignore them for now). From this list of validators, find ones that you would like to nominate and copy their address (by clicking on the identicon) or better, add them to your Address book.")]),t._v(" "),e("p",[e("img",{attrs:{src:"assets/guides/how-to-nominate/validators.png",alt:"Validators"}})]),t._v(" "),e("p",[t._v("Go back to the "),e("em",[t._v("Account Actions")]),t._v(" tab and click the "),e("code",[t._v("Nominate")]),t._v(" button. Fill in the blank field with the address of the validators you have chosen to nominate. After signing and submitting your transaction you should see the button "),e("code",[t._v("Stop Nominating")]),t._v(" and you should see the accounts you are nominating showing up under the "),e("code",[t._v("Nominating")]),t._v(" section. Your nomination will be effective in the next era (this can take up to one hour).")]),t._v(" "),e("p",[e("img",{attrs:{src:"assets/guides/how-to-nominate/nominating.jpg",alt:"Nominating"}})]),t._v(" "),e("p",[e("strong",[t._v("Congratulations!")]),t._v(" You are now a nominator.")]),t._v(" "),e("p",[t._v("If you return to the "),e("em",[t._v("Staking Overview")]),t._v(" tab after an era has changed and scroll until you find your validator you should see your own "),e("code",[t._v("stash")]),t._v(" account appear as one of the nominators.")]),t._v(" "),e("p",[e("img",{attrs:{src:"assets/guides/how-to-nominate/nominating2.jpg",alt:"Nominating2"}})]),t._v(" "),e("h2",{attrs:{id:"how-to-stop-nominating"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-stop-nominating"}},[t._v("#")]),t._v(" How to stop nominating")]),t._v(" "),e("p",[t._v("To stop nominating simply return to the "),e("em",[t._v("Account Actions")]),t._v(" tab and click the "),e("code",[t._v("Stop Nominating")]),t._v(" button. Your account will be set to "),e("code",[t._v("chill")]),t._v(" and at the next era will no longer be nominating to the validator. This may take up to an hour to take effect!")])])}),[],!1,null,null,null);o.default=n.exports}}]);