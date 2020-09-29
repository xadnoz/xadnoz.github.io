(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{916:function(e,t,a){"use strict";a.r(t);var s=a(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("In order to prevent Sybil attacks, the faucet will only drip to users that have a GitHub account that was created prior to June, 21, 2019. If you do not have a GitHub account that was created prior to this date, please use the "),a("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSfGAqjXY3xLokwl7A-R4JZAnrBnSI3BVXKMKDLCKVtHaxgs-w/formResponse",target:"_blank",rel:"noopener noreferrer"}},[e._v("KSM Request Form"),a("OutboundLink")],1),e._v(" to request tokens.")]),e._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements:")]),e._v(" "),a("ul",[a("li",[e._v("Github account with a creation date "),a("strong",[e._v("before")]),e._v(" 21 June 2019")]),e._v(" "),a("li",[e._v("The address that the user requests a drip to must have never received a drip in the past")]),e._v(" "),a("li",[e._v("The GitHub user requesting the drip must not have received a drip from the faucet during the past 24 hours")]),e._v(" "),a("li",[e._v("The address must contain the string "),a("code",[e._v("ksma")]),e._v(" (case-insensitive)")])]),e._v(" "),a("h3",{attrs:{id:"step-1-generate-an-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-generate-an-address"}},[e._v("#")]),e._v(" Step 1: Generate an Address")]),e._v(" "),a("p",[e._v("The faucet will only drip to addresses that contain the string "),a("code",[e._v("ksma")]),e._v("(case-insensitive, that is, "),a("code",[e._v("KSMA")]),e._v(" or "),a("code",[e._v("kSmA")]),e._v(" would work). It will also never drip to the same address twice. Thus, a new address has to be created each time a user requests KSM tokens.")]),e._v(" "),a("p",[e._v("Obtaining a valid address will require generating numerous addresses until you find one which meets the requirements. You can think of this as a small proof-of-work. You can use the command-line tool "),a("a",{attrs:{href:"#Using-Subkey"}},[e._v("subkey")]),e._v(", the web interface ("),a("a",{attrs:{href:"#Using-PolkadotJS-Dashboard"}},[e._v("PolkadotJS Dashboard")]),e._v("), or any other program capable of generating arbitrary addresses which meet the requirements of the faucet. You can even code up your own if you like.")]),e._v(" "),a("h4",{attrs:{id:"using-polkadotjs-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-polkadotjs-dashboard"}},[e._v("#")]),e._v(" Using PolkadotJS Dashboard")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Go to "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/settings",target:"_blank",rel:"noopener noreferrer"}},[e._v("Settings"),a("OutboundLink")],1),e._v(" and select "),a("code",[e._v("Kusama (canary)")]),e._v(" on the address network prefix drop-down list, then click "),a("code",[e._v("Save & Reload")]),e._v(". "),a("img",{attrs:{src:"/img/kusama/faucet_1.png",alt:"Faucet 1"}})])]),e._v(" "),a("li",[a("p",[e._v("Under the "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/accounts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Accounts page"),a("OutboundLink")],1),e._v(", select "),a("code",[e._v("Vanity Address")]),e._v(" tab. "),a("img",{attrs:{src:"/img/kusama/faucet_2.png",alt:"Faucet 2"}})])]),e._v(" "),a("li",[a("p",[e._v("Input "),a("code",[e._v("ksma")]),e._v(' in the "search for" textbox and leave the "keypair crypto type" by default unless you want to use another type. After this, click '),a("code",[e._v("Start generation")]),e._v(". You may leave YES in the case sensitive field but switching to NO will greatly speed up the process. It may take 10 minutes or more to generate the address pattern you want, depending on the power of your hardware. "),a("img",{attrs:{src:"/img/kusama/faucet_3.png",alt:"Faucet 3"}})])]),e._v(" "),a("li",[a("p",[e._v("After you see that a valid "),a("code",[e._v("ksma")]),e._v(" address has been created, press the blue "),a("code",[e._v("+")]),e._v(" button to generate an account. Note that the case does not matter, any of the following are ok: kSmA, KSMA, ksMA, etc.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/kusama/save_generated_account.png",alt:"Save Generated Account"}})]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v('Give your account a name and password, then click "Save" to save the account.')])]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/kusama/create_account.png",alt:"Create Account"}})]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Save the backup file to your local computer.")])]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/kusama/save_backup.png",alt:"Save Backup"}})]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[e._v('Click on the Accounts tab, or press "My Accounts" at the top of the page, and look for your newly generated account. You can then copy the address to your clipboard by clicking on the dot icon next to the account.')])]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/kusama/select_address.png",alt:"Select Address"}})]),e._v(" "),a("h4",{attrs:{id:"using-subkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-subkey"}},[e._v("#")]),e._v(" Using subkey")]),e._v(" "),a("h4",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("You can install "),a("code",[e._v("subkey")]),e._v(" with this one-line command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cargo install --force --git https://github.com/paritytech/substrate subkey\n")])])]),a("p",[e._v("Alternatively, you can build "),a("code",[e._v("subkey")]),e._v(" from the source code.")]),e._v(" "),a("ol",[a("li",[e._v("Follow the build instructions for "),a("a",{attrs:{href:"https://substrate.dev/docs/en/overview/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Substrate"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("When building, build "),a("code",[e._v("subkey")]),e._v(" by typing "),a("code",[e._v("cargo build -p subkey")]),e._v(".")]),e._v(" "),a("li",[e._v("The executable is "),a("code",[e._v("./target/debug/subkey")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("The command "),a("code",[e._v("subkey --network kusama vanity ksma --number 1")]),e._v(" will generate a single key-pair where the address contains the string "),a("code",[e._v("ksma")]),e._v(".")]),e._v(" "),a("p",[e._v("Depending on the hardware configuration of your computer and on luck, this computation may take anywhere from a few seconds to approximately 10 minutes.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ subkey --network kusama vanity ksma --number 1\nGenerating key containing pattern 'ksma'\n100000 keys searched; best is 190/237 complete\n200000 keys searched; best is 190/237 complete\n300000 keys searched; best is 190/237 complete\n400000 keys searched; best is 190/237 complete\n500000 keys searched; best is 233/237 complete\n600000 keys searched; best is 233/237 complete\n700000 keys searched; best is 233/237 complete\nbest: 238 == top: 237\nSecret Key URI `0x8baef85b7b366ec293fbf761e24572e4e6dd7ba385cbe04bd475a70cc69a5665` is account:\n  Secret seed:      0x8baef85b7b366ec293fbf761e24572e4e6dd7ba385cbe04bd475a70cc69a5665\n  Public key (hex): 0x60857d605f87e6b58974e7c8e5ad814617428c6017b9ceb4c938d65db34ece3f\n  Account ID:       0x60857d605f87e6b58974e7c8e5ad814617428c6017b9ceb4c938d65db34ece3f\n  SS58 Address:     Eksmahpd3pYpSBWyg8DXD4e27wZcWF14AZA1evYYvvNXpgs\n")])])]),a("p",[e._v("The "),a("code",[e._v("Address (SS58)")]),e._v(" field is the Kusama address that you will need to request KSM to. Notice that the string "),a("code",[e._v("ksma")]),e._v(" starts at the second character. Never share your "),a("code",[e._v("Secret Key")]),e._v(", as this controls your funds.")]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"https://substrate.dev/docs/en/ecosystem/subkey",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("subkey")]),e._v(" documentation"),a("OutboundLink")],1),e._v(" or enter "),a("code",[e._v("subkey --help")]),e._v(" for more usage examples.")]),e._v(" "),a("h3",{attrs:{id:"step-2-submit-an-issue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-submit-an-issue"}},[e._v("#")]),e._v(" Step 2: Submit an Issue")]),e._v(" "),a("p",[e._v("Once you have generated your Kusama address containing the string "),a("code",[e._v("ksma")]),e._v(", you are ready to request KSM from the faucet.")]),e._v(" "),a("ol",[a("li",[e._v("Log in to Github. Go to the "),a("a",{attrs:{href:"https://github.com/kusamanetwork/faucet/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("faucet repo"),a("OutboundLink")],1),e._v(" of the Kusama Network organization.")]),e._v(" "),a("li",[e._v('Click on the Issues tab, then click "New Issue".')]),e._v(" "),a("li",[e._v('Enter any text for the "Title" textbox - it will be ignored.')]),e._v(" "),a("li",[e._v('In the "Leave a comment" textbox, enter the address you generated in Step 1 (which must include the string "ksma"). Do not enter any text other than this address.')]),e._v(" "),a("li",[e._v("Wait while the faucet verifies the address. Depending on network conditions and server load, this may take a few minutes, but should generally be complete within 30 seconds.")]),e._v(" "),a("li",[e._v("You will see a comment posted to your issue indicating success or failure. Success means that 0.1 KSM has been sent to the posted address; failure means that there was some problem and no KSM was sent to your address. In the event of failure, the message should indicate what the problem is (e.g., the faucet is dry, the address is invalid).")]),e._v(" "),a("li",[e._v("The issue will close automatically after you receive a response, whether or not it was a success.")])]),e._v(" "),a("h3",{attrs:{id:"after"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after"}},[e._v("#")]),e._v(" After")]),e._v(" "),a("p",[e._v("Remember that you must drip to a different address each time - you will not be able to get a drip from the faucet to this address again. You also may have a more secure way of storing addresses such as cold wallet, or simply keep all of your KSM at one address.")]),e._v(" "),a("p",[e._v("Therefore, you may wish to move your KSM to a different address after this. You should be able to move your KSM immediately after receiving them.")]),e._v(" "),a("p",[e._v("Note that you will not be able to transfer the entire 0.1KSM to another account, as there are transfer fees when moving KSM on-chain. Transferring 0.080 KSM should work.")]),e._v(" "),a("h3",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes:")]),e._v(" "),a("ul",[a("li",[e._v("A single GitHub account can get 0.1 KSM every 24 hours.")]),e._v(" "),a("li",[e._v("Remember to post "),a("em",[e._v("only the address")]),e._v(" - no other text, and definitely not your seed or mnemonic phrase!")]),e._v(" "),a("li",[e._v("The total number of KSM available to "),a("em",[e._v("all users")]),e._v(" of the faucet is 10 KSM per day.")])]),e._v(" "),a("h3",{attrs:{id:"what-to-do-with-my-ksm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-to-do-with-my-ksm"}},[e._v("#")]),e._v(" What To Do With My KSM")]),e._v(" "),a("p",[e._v("Owning KSM gives you a stake in the Kusama network. Among the things you can do with your KSM tokens are:")]),e._v(" "),a("ul",[a("li",[e._v("Transfer them to another account")]),e._v(" "),a("li",[e._v("Nominate validators and passively earn more KSM")]),e._v(" "),a("li",[e._v("Support (second) democratic proposals to help make them into active referenda")]),e._v(" "),a("li",[e._v("Vote for or against active referenda")]),e._v(" "),a("li",[e._v("Vote and support one or more of your favorite council members")]),e._v(" "),a("li",[e._v("Set your on-chain identity")]),e._v(" "),a("li",[e._v("and way more!")])]),e._v(" "),a("h3",{attrs:{id:"donations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#donations"}},[e._v("#")]),e._v(" Donations:")]),e._v(" "),a("p",[e._v("If you want to support the faucet, please send KSM to this address: "),a("strong",[e._v("EaG2CRhJWPb7qmdcJvy3LiWdh26Jreu9Dx6R1rXxPmYXoDk")])]),e._v(" "),a("p",[e._v("The faucet's wallet will be periodically refilled from the address above.")]),e._v(" "),a("h3",{attrs:{id:"support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support"}},[e._v("#")]),e._v(" Support:")]),e._v(" "),a("p",[e._v("If you are having difficulties using the faucet, please join the "),a("a",{attrs:{href:"https://riot.w3f.tech/#/room/#kusamawatercooler:polkadot.builders",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kusama Watercooler chat"),a("OutboundLink")],1),e._v(" and somebody will try to help you.")])])}),[],!1,null,null,null);t.default=r.exports}}]);