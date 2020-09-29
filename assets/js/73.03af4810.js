(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{459:function(e,t,o){"use strict";o.r(t);var r=o(42),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Errors in Substrate-based chains are usually accompanied by descriptive messages. However, to read\nthese messages, a tool parsing the blockchain data needs to request "),o("em",[e._v("chain metadata")]),e._v(" from a node.\nThat metadata explains how to read the messages. One such tool with a built-in parser for chain\nmetadata is the "),o("a",{attrs:{href:"https://polkadot.js.org/apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot JS Apps UI"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"polkadotjs-apps-explorer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#polkadotjs-apps-explorer"}},[e._v("#")]),e._v(" PolkadotJS Apps Explorer")]),e._v(" "),o("p",[e._v("Here's how to find out the detailed error description through Polkadot JS Apps.")]),e._v(" "),o("p",[e._v("A typical failed transactions looks something like this:")]),e._v(" "),o("p",[o("img",{attrs:{src:"/img/errors/01.jpg",alt:"Error while sending a transaction"}})]),e._v(" "),o("p",[e._v("The image displays only the error name as defined in the code, not its error message. Despite this\nerror being rather self-explanatory, let's find its details.")]),e._v(" "),o("p",[e._v("In the "),o("a",{attrs:{href:"https://polkadot.js.org/apps/#/explorer",target:"_blank",rel:"noopener noreferrer"}},[e._v("explorer tab"),o("OutboundLink")],1),e._v(", find the block in which this failure\noccured. Then, expand the "),o("code",[e._v("system.ExtrinsicFailed")]),e._v(" frame:")]),e._v(" "),o("p",[o("img",{attrs:{src:"/img/errors/02.jpg",alt:"Error described"}})]),e._v(" "),o("p",[e._v("Notice how the "),o("code",[e._v("details")]),e._v(" field contains a human-readable description of the error. Most errors will\nhave this, if looked up this way.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://polkadot.js.org/apps/#/explorer/query/0xa10104ed21dfe409c7871a975155766c5dd97e1e2ac7faf3c90f1f8dca89104b",target:"_blank",rel:"noopener noreferrer"}},[e._v("This block"),o("OutboundLink")],1),e._v("\nis a live example of the above.")]),e._v(" "),o("p",[e._v("If you cannot look up the error this way, or there is no message in the "),o("code",[e._v("details")]),e._v(" field, consult the\ntable below.")]),e._v(" "),o("h2",{attrs:{id:"common-errors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#common-errors"}},[e._v("#")]),e._v(" Common Errors")]),e._v(" "),o("p",[e._v("The table below lists the most commonly encountered errors and ways to resolve them.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Error")]),e._v(" "),o("th",[e._v("Description")]),e._v(" "),o("th",[e._v("Solution")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("BadOrigin")]),e._v(" "),o("td",[e._v("You are not allowed to do this operation, e.g. trying to create a council motion with a non-council account.")]),e._v(" "),o("td",[e._v("Either switch to an account which has the necessary permissions, or check if the operation you're trying to execute is permitted at all (e.g. calling "),o("code",[e._v("system.setCode")]),e._v(" to do a runtime upgrade directly, without voting).")])]),e._v(" "),o("tr",[o("td",[e._v("BadProof")]),e._v(" "),o("td",[e._v("The transaction's signature seems invalid.")]),e._v(" "),o("td",[e._v("It's possible that the node you're connected to is following an obsolete fork - trying again after it catches up usually resolves the issue. To check for bigger problems, inspect the last finalized and current best block of the node you're connected to and compare the values to chain stats exposed by other nodes - are they in sync? If not, try connecting to a different node.")])]),e._v(" "),o("tr",[o("td",[e._v("Future")]),e._v(" "),o("td",[e._v('Transaction nonce too high, i.e. it\'s "from the future".')]),e._v(" "),o("td",[e._v("Reduce the nonce to +1 of current nonce. Check current nonce by inspecting the address you're using to send the transaction.")])]),e._v(" "),o("tr",[o("td",[e._v("Stale")]),e._v(" "),o("td",[e._v("Transaction nonce too low.")]),e._v(" "),o("td",[e._v("Increase the nonce to +1 of current nonce. Check current nonce by inspecting the address you're using to send the transaction.")])]),e._v(" "),o("tr",[o("td",[e._v("ExhaustsResources")]),e._v(" "),o("td",[e._v("There aren't enough resources left in the current block to submit this transaction.")]),e._v(" "),o("td",[e._v("Try again in the next block.")])]),e._v(" "),o("tr",[o("td",[e._v("Payment")]),e._v(" "),o("td",[e._v("Unable to pay for TX fee.")]),e._v(" "),o("td",[e._v("You might not have enough free balance to cover the fee this transaction would incur.")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);