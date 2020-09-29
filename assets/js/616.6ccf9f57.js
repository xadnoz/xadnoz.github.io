(window.webpackJsonp=window.webpackJsonp||[]).push([[616],{850:function(e,t,a){"use strict";a.r(t);var o=a(42),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("There are several ways to generate a Polkadot address:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#polkadotjs-browser-plugin"}},[e._v("Polkadot.js Browser Plugin")]),e._v(" "),a("strong",[e._v("RECOMMENDED FOR MOST USERS")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#subkey"}},[e._v("Subkey")]),e._v(" "),a("strong",[e._v("ADVANCED and MOST SECURE")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#polkadotjs"}},[e._v("Polkadot.js Web Apps")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#parity-signer"}},[e._v("Parity Signer")]),e._v(" "),a("strong",[e._v("COMING SOON")])])]),e._v(" "),a("h2",{attrs:{id:"disclaimer-key-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disclaimer-key-security"}},[e._v("#")]),e._v(" DISCLAIMER: Key Security")]),e._v(" "),a("p",[e._v("Your secret seed is the "),a("em",[e._v("only")]),e._v(" way to get access to your account. You must keep the secret both secure and private. If you share you secret with anyone they will be able to have full access to your account, including all of your funds. The secret, for this reason, is a target from hackers and others with bad intentions to steal your funds. We recommend a variety of account generation methods that have various convienience and security tradeoffs. Please review this page carefully before making your address so that you understand the risks of the account generation method you choose and how to properly mitigate them in order to keep your funds safe.")]),e._v(" "),a("h3",{attrs:{id:"storing-your-key-safely"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storing-your-key-safely"}},[e._v("#")]),e._v(" Storing your key safely")]),e._v(" "),a("p",[e._v("The seed is your "),a("strong",[e._v("key")]),e._v(" to the account. Knowing the seed allows you, or anyone else who knows the seed, to re-generate and control this account.")]),e._v(" "),a("p",[e._v("It is imperative to store the seed somewhere safe, secret, and secure. If you lose access to your account, you can re-create it by entering the seed. This also means that somebody else can have control over your account if they have access to your seed.")]),e._v(" "),a("p",[e._v("For maximum security, the seed should be written down on paper or another non-digital device and stored in a safe place. You may also want to protect your seed from physical damage, as well (e.g. by storing in a sealed plastic bag to prevent water damage, storing it in a fireproof safe, etc.) It is recommended that you store multiple copies of the seed in geographically separate locations (e.g., one in your home safe and one in a safety deposit box at your bank).")]),e._v(" "),a("p",[e._v("You should definitely not store your seed on any kind of computer that has or may have access to the internet in the future.")]),e._v(" "),a("h2",{attrs:{id:"polkadot-js-browser-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-js-browser-plugin"}},[e._v("#")]),e._v(" Polkadot.js Browser Plugin")]),e._v(" "),a("p",[e._v("The polkadot.js plugin provides a reasonable balance of security and usability. It provides a separate local mechanism to generate your address and interact with Polkadot.")]),e._v(" "),a("p",[e._v('This method involves installing the polkadot.js plugin and using it as a “virtual vault," separate from your browser, to store your private keys. It also allows signing of transactions and similar functionality.')]),e._v(" "),a("p",[e._v("It is still running on the same computer you use to connected to the internet with and thus is less secure than using Parity Signer or other air-gapped protocols.")]),e._v(" "),a("h3",{attrs:{id:"install-the-browser-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-browser-plugin"}},[e._v("#")]),e._v(" Install the Browser Plugin")]),e._v(" "),a("p",[e._v("The browser plugin is available for both "),a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Chrome"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension",target:"_blank",rel:"noopener noreferrer"}},[e._v("FireFox"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("If you would like to know more or review the code of the plugin yourself, you can visit the Github source "),a("a",{attrs:{href:"https://github.com/polkadot-js/extension",target:"_blank",rel:"noopener noreferrer"}},[e._v("repository"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("After installing the plugin, you should see the orange and white polkadot.js logo in the menu bar of your browser.")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_plugin_js_02.jpg",alt:"plugin-02"}})]),e._v(" "),a("h3",{attrs:{id:"open-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-accounts"}},[e._v("#")]),e._v(" Open Accounts")]),e._v(" "),a("p",[e._v("Navigate to "),a("a",{attrs:{href:"https://polkadot.js.org/apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot Apps"),a("OutboundLink")],1),e._v('. Click on the "Accounts" tab. This is located in the sidebar on the left of your screen.')]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_plugin_js_03.jpg",alt:"plugin-03"}})]),e._v(" "),a("h3",{attrs:{id:"create-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-account"}},[e._v("#")]),e._v(" Create Account")]),e._v(" "),a("p",[e._v('Open the polkadot.js browser extension by clicking the logo on the top bar of your browser. You will see a separate browser window open. If you have used this extension before, you may see a list of previously generated accounts. In any case you will see two buttons: “I want to create an account with a new seed” and “I have a pre-existing seed, import the account."')]),e._v(" "),a("p",[e._v("Click “I want to create an account with a new seed”.")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_plugin_js_04.jpg",alt:"plugin-04"}})]),e._v(" "),a("p",[e._v("The polkadot.js plugin will then use system randomness to make a new seed for you and display it to you in the form of twelve words.")]),e._v(" "),a("p",[e._v("You should back up these keys. It is imperative to store the seed somewhere safe, secret, and secure. If you cannot access your account via polkadot.js for some reason, you can simply re-enter your seed, and have access to your account once again.")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_plugin_js_05.jpg",alt:"plugin-05"}})]),e._v(" "),a("p",[e._v("Please see above for information on "),a("a",{attrs:{href:"#disclaimer-key-security"}},[e._v("storing your key safely")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"name-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name-account"}},[e._v("#")]),e._v(" Name Account")]),e._v(" "),a("p",[e._v("You are not able to edit the seed words. However, you should add a descriptive name for this account in the lower textbox (e.g. “Bob”, “Jane”, or “Office Account”).")]),e._v(" "),a("h3",{attrs:{id:"enter-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enter-password"}},[e._v("#")]),e._v(" Enter Password")]),e._v(" "),a("p",[e._v("After typing a name for the account, a new textbox will appear in which you can enter a password. When you start typing, a new textbox will appear underneath it. Enter the same password in the second textbox. If your passwords do not match, the plugin will not allow you to generate the account.")]),e._v(" "),a("p",[e._v("Note that this password will protect your data in the plugin, and any backup file you export from the plugin. It does NOT protect your seed phrase. If someone knows the twelve words in your mnemonic seed, they still have control over your account even if they do not know the password.")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_plugin_js_06.jpg",alt:"plugin-06"}})]),e._v(" "),a("h3",{attrs:{id:"review-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#review-account"}},[e._v("#")]),e._v(" Review Account")]),e._v(" "),a("p",[e._v("Once both of your passwords match, the program will display information about the account that will be generated for you.")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_plugin_js_07.jpg",alt:"plugin-07"}})]),e._v(" "),a("p",[e._v("Click on “Add the account with the generated seed”. You will be taken back to the main page of the plugin, which should now include your generated account.")]),e._v(" "),a("h3",{attrs:{id:"set-address-for-polkadot-mainnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-address-for-polkadot-mainnet"}},[e._v("#")]),e._v(" Set Address for Polkadot Mainnet")]),e._v(" "),a("p",[e._v("Now we will ensure that the addresses are displayed as Polkadot mainnet addresses.")]),e._v(" "),a("p",[e._v('Click on "Options" at the top of the plugin window.')]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_plugin_js_08.jpg",alt:"plugin-08"}})]),e._v(" "),a("p",[e._v('In the "display addresses formatted for" dropdown, select "Polkadot (live) and then click "Back".')]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_plugin_js_09.jpg",alt:"plugin-09"}})]),e._v(" "),a("h3",{attrs:{id:"get-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-address"}},[e._v("#")]),e._v(" Get Address")]),e._v(" "),a("p",[e._v("Verify that your address has a “1” as the first character. This indicates that it is a Polkadot mainnet address.")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_plugin_js_10.jpg",alt:"plugin-10"}})]),e._v(" "),a("p",[e._v("You can copy the address by double-clicking on the string representation of the address itself, and then copying (e.g. with Control-C on Windows or Linux, Command-C on OS X). DO NOT click on the icon representing your account (the colorful hexagon of differently-colored dots) - this will copy a Kusama version of your address.")]),e._v(" "),a("p",[e._v("Be sure that you select the ENTIRE displayed address. Note that when you paste it, you will see even more characters than are displayed.")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_plugin_js_11.jpg",alt:"plugin-11"}})]),e._v(" "),a("h3",{attrs:{id:"copy-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-address"}},[e._v("#")]),e._v(" Copy Address")]),e._v(" "),a("p",[e._v("You can now copy and paste the address from the address textbox, and you now have a plain-text copy of your Polkadot mainnet address.")]),e._v(" "),a("p",[e._v("Note that an address in a different format can always be converted to a Polkadot address, since the same public key can be used for generating addresses on different networks. However, for ease of use and understanding, it is best to ensure that you are always using Polkadot mainnet addresses.")]),e._v(" "),a("h2",{attrs:{id:"subkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subkey"}},[e._v("#")]),e._v(" Subkey")]),e._v(" "),a("p",[e._v("Subkey is recommended for technically advanced users who are comfortable with command line and compiling Rust code. Subkey allows you to generate keys on any device that can compile the code. Subkey may also be useful for automated account generation, using an air-gapped device other than one running iOS or Android or other specific purposes. It is not recommended for general users.")]),e._v(" "),a("p",[e._v("For detailed build and usage instructions of subkey, please see "),a("a",{attrs:{href:"https://github.com/paritytech/substrate/tree/master/bin/utils/subkey",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/subkey_01.jpg",alt:"subkey-01"}})]),e._v(" "),a("h2",{attrs:{id:"polkadot-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-js"}},[e._v("#")]),e._v(" Polkadot.js")]),e._v(" "),a("p",[e._v("Using the polkadot.js user interface without the plugin is not recommended. It is the least secure way of generating an account. It should only be used if all of the other methods are not feasible in your situation.")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_js_01.jpg",alt:"pjs-01"}})]),e._v(" "),a("h3",{attrs:{id:"go-to-polkadot-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-to-polkadot-apps"}},[e._v("#")]),e._v(" Go to Polkadot Apps")]),e._v(" "),a("p",[e._v("Navigate to "),a("a",{attrs:{href:"https://polkadot.js.org/apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot Apps"),a("OutboundLink")],1),e._v(' and click on the "Accounts" tab. It is located in the sidebar on the left side of your screen.')]),e._v(" "),a("h3",{attrs:{id:"start-account-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-account-generation"}},[e._v("#")]),e._v(" Start Account Generation")]),e._v(" "),a("p",[e._v('Click on the "Add Account" button.')]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_js_02.jpg",alt:"pjs-02"}})]),e._v(" "),a("p",[e._v("You should see a pop-up that looks like the one here. The required text fields to complete are highlighted in pink.")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_js_03.jpg",alt:"pjs-03"}})]),e._v(" "),a("p",[e._v("You can ignore the Advanced creation options; the defaults are fine. You will have to enter an Account Name and a password to protect your account. Be sure to select a secure and hard-to-guess password. Note that anything will be accepted as a password here. Please note: There are no checks to see if it is long enough or secure. You will need this password for any future interaction with or transaction from this account.")]),e._v(" "),a("p",[e._v("When you have entered valid information for both, the color of the text boxes will turn from pink to white.")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_js_04.jpg",alt:"pjs-04"}})]),e._v(" "),a("p",[e._v("Please see above for information on "),a("a",{attrs:{href:"#disclaimer-key-security"}},[e._v("storing your key safely")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"create-and-backup-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-and-backup-account"}},[e._v("#")]),e._v(" Create and backup account")]),e._v(" "),a("p",[e._v("Click “Save” and your account will be created. It will also generate a backup file that you should save to your computer. Ideally, you would also save it on an external hard drive or thumb drive, or print it out and be able to re-enter it later. You should not store it in cloud storage, email it to yourself, etc.")]),e._v(" "),a("p",[e._v("You can use this backup file to restore your account. This backup file is not readable unless it is decrypted with the password.")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/accounts/polkadot_js_05.jpg",alt:"pjs-05"}})]),e._v(" "),a("h3",{attrs:{id:"multi-signature-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-signature-accounts"}},[e._v("#")]),e._v(" Multi-signature Accounts")]),e._v(" "),a("p",[e._v("Multi-signature accounts are accounts created from several standard accounts (or even other multi-sig accounts). For a full explanation, please see the "),a("a",{attrs:{href:"learn-accounts#multi-signature-accounts"}},[e._v("Accounts Explainer section on multi-sigs")]),e._v(".")]),e._v(" "),a("p",[e._v("On the "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/accounts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Accounts"),a("OutboundLink")],1),e._v(" tab, click the "),a("code",[e._v("Multisig")]),e._v(" button. Enter the threshold and add signatories. The threshold must be less than or equal to the number of signatories. The threshold indicates how many members must be in agreement for an extrinsic submission to be successful. Click "),a("code",[e._v("Create")]),e._v(" when done. We'll use the accounts Alice, Bob, and Charlie here.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/accounts/create-multisig.png",alt:"Multi-sig account creation"}})]),e._v(" "),a("p",[e._v("This merely calculates the multi-signature's address and adds it to your UI. The account does not exist yet, and is subject to the same "),a("a",{attrs:{href:"learn-accounts#existential-deposit-and-reaping"}},[e._v("Existential Deposit and Reaping")]),e._v(" rules as regular accounts.")]),e._v(" "),a("p",[e._v("Suppose we funded it with some tokens, and now want to send from the multi-sig to another account.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/accounts/send-from-multi.png",alt:"Sending from multi-sig account"}})]),e._v(" "),a("p",[e._v("The next step is to sign the transaction from with enough accounts to meet the threshold; in the above case, two out of three signatories must sign.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/accounts/sign-from-multi-1.png",alt:"Signing from multi-sig account"}})]),e._v(" "),a("p",[e._v("There is currently no indication of a pending transaction from a multi-sig in the UI. This means the second signatory must "),a("strong",[e._v("repeat the call in full")]),e._v(" in order to sign it. In other words:")]),e._v(" "),a("ul",[a("li",[e._v("if Alice initiates a transaction from the multi-sig to Ferdie for 150 tokens, there will be a pending transaction in the chain.")]),e._v(" "),a("li",[e._v("if Bob initiates a transaction from the multi-sig to Ferdie for 250 tokens, there will be "),a("strong",[e._v("another")]),e._v(" pending transaction in the chain, and the first one will not complete.")]),e._v(" "),a("li",[e._v("because the threshold is 2/3, Charlie can now finalize either or both of these by repeating the desired transaction.")])]),e._v(" "),a("p",[e._v("Other calls work exactly the same - if a multi-sig wants to become a Council member, the candidacy request has to come from the multi-sig, but be signed (re-requested) from each signatory until the threshold is reached.")]),e._v(" "),a("p",[e._v("Signatories should communicate off-chain to prevent many pending transactions and crossed communication lines on-chain.")]),e._v(" "),a("h2",{attrs:{id:"parity-signer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parity-signer"}},[e._v("#")]),e._v(" Parity Signer")]),e._v(" "),a("p",[e._v("Parity Signer is a secure way of storing your DOTs on an air-gapped device.")]),e._v(" "),a("p",[a("strong",[e._v("Coming soon!")])]),e._v(" "),a("p",[e._v("Parity Signer requires the genesis hash of the chain to be known in order to derive new accounts. Since Polkadot is not launched yet - the genesis hash is not known. Expect a Parity Signer release to follow the launch of Polkadot that allows you to create accounts.")])])}),[],!1,null,null,null);t.default=s.exports}}]);