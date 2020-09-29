(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{672:function(e,t,a){"use strict";a.r(t);var s=a(42),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Validators perform critical functions for the network, and as such, have strict uptime requirements. Validators may have to go offline for periods of time to upgrade the client software or the host machine. This guide will walk you through upgrading your machine and keeping your validator online.")]),e._v(" "),a("p",[e._v("The process will take several hours, so make sure you understand the instructions first and plan accordingly.")]),e._v(" "),a("h2",{attrs:{id:"key-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-components"}},[e._v("#")]),e._v(" Key Components")]),e._v(" "),a("h3",{attrs:{id:"session-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session-keys"}},[e._v("#")]),e._v(" Session Keys")]),e._v(" "),a("p",[e._v("Session keys are stored in the client and used to sign validator operations. They are what link your validator node to your Controller account. You cannot change them mid-Session.")]),e._v(" "),a("p",[a("a",{attrs:{href:"learn-keys"}},[e._v("More info about keys in Polkadot.")])]),e._v(" "),a("h3",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[e._v("#")]),e._v(" Database")]),e._v(" "),a("p",[e._v("Validators keep a database with all of their votes. If two machines have the same Session keys but different databases, they risk equivocating. For this reason, we will generate new Session keys each time we change machines.")]),e._v(" "),a("p",[a("a",{attrs:{href:"learn-staking#slashing"}},[e._v("More info about equivocation.")])]),e._v(" "),a("h2",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),a("p",[e._v('You will need to start a second validator to operate while you upgrade your primary. Throughout these steps, we will refer to the validator that you are upgrading as "Validator A" and the second one as "Validator B."')]),e._v(" "),a("h3",{attrs:{id:"session-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session-n"}},[e._v("#")]),e._v(" Session "),a("code",[e._v("N")])]),e._v(" "),a("ol",[a("li",[e._v("Start a second node and connect it to your sentry nodes. Once it is synced, use the "),a("code",[e._v("--validator")]),e._v(' flag. This is "Validator B."')]),e._v(" "),a("li",[e._v("Generate Session keys in Validator B.")]),e._v(" "),a("li",[e._v("Submit a "),a("code",[e._v("set_key")]),e._v(" extrinsic from your Controller account with your new Session keys.")]),e._v(" "),a("li",[e._v("Take note of the Session that this extrinsic was executed in.")])]),e._v(" "),a("p",[a("strong",[e._v("It is imperative that your Validator A keep running in this Session.")]),e._v(" "),a("code",[e._v("set_key")]),e._v(" only takes effect in the next Session.")]),e._v(" "),a("h3",{attrs:{id:"session-n-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session-n-1"}},[e._v("#")]),e._v(" Session "),a("code",[e._v("N+1")])]),e._v(" "),a("p",[e._v("Validator B is now acting as your validator. You can safely take Validator A offline. See note at bottom.")]),e._v(" "),a("ol",[a("li",[e._v("Stop Validator A.")]),e._v(" "),a("li",[e._v("Perform your system or client upgrade.")]),e._v(" "),a("li",[e._v("Start Validator A, sync the database, and connect it to your sentry nodes.")]),e._v(" "),a("li",[e._v("Generate new Session keys in Validator A.")]),e._v(" "),a("li",[e._v("Submit a "),a("code",[e._v("set_key")]),e._v(" extrinsic from your Controller account with your new Session keys for Validator A.")]),e._v(" "),a("li",[e._v("Take note of the Session that this extrinsic was executed in.")])]),e._v(" "),a("p",[a("strong",[e._v("Again, it is imperative that Validator B keep running until the next Session.")])]),e._v(" "),a("p",[e._v("Once the Session changes, Validator A will take over. You can safely stop Validator B.")]),e._v(" "),a("p",[a("strong",[e._v("NOTE:")]),e._v(" To verify that the Session has changed, make sure that a block in the new Session is finalized. You should see log messages like this to indicate the change:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2019-10-28 21:44:13 Applying authority set change scheduled at block #450092\n2019-10-28 21:44:13 Applying GRANDPA set change to new set with 20 authorities\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);