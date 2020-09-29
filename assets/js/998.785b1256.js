(window.webpackJsonp=window.webpackJsonp||[]).push([[998],{592:function(e,t,a){"use strict";a.r(t);var o=a(42),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("The Kusama network is Polkadot's experimental, community-focused R&D network. If you hold the DOT indicator token, you are entitled to claim an equivalent amount of KSM on the Kusama network. This is so that the Kusama network is aligned with the existing DOT holders and community.")]),e._v(" "),a("p",[e._v("You can claim KSMs by signing a message with the Ethereum account that holds your DOT indicator tokens.")]),e._v(" "),a("h2",{attrs:{id:"step-1-create-a-kusama-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-create-a-kusama-account"}},[e._v("#")]),e._v(" Step 1. Create a Kusama account")]),e._v(" "),a("p",[e._v("You will need to generate a Kusama account to claim KSM. There are a few ways you can create one.")]),e._v(" "),a("p",[e._v("For most users, we recommend using the "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/explorer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot UI"),a("OutboundLink")],1),e._v(" since it will allow you to store your encrypted keystore locally.")]),e._v(" "),a("blockquote",[a("p",[e._v("NOTICE: Unfortunately, at this time Kusama does not have hardware wallet support. Hopefully this will change soon!")])]),e._v(" "),a("p",[e._v("Another option you may consider using is the "),a("code",[e._v("subkey")]),e._v(" command line utility, which will allow you to take extra steps to protect the security of your key. Additionally, another option is the Polkawallet mobile wallet, although it requires an extra step to generate Kusama addresses.")]),e._v(" "),a("h3",{attrs:{id:"using-polkadot-js-extension-chrome-brave-or-firefox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-polkadot-js-extension-chrome-brave-or-firefox"}},[e._v("#")]),e._v(" Using polkadot{.js} extension (Chrome/Brave or Firefox)")]),e._v(" "),a("ol",[a("li",[e._v("Install the polkadot{.js} extension from the "),a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome store"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firefox store"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Create a new account by clicking on "),a("code",[e._v("I want to create a new account with a new seed")]),e._v(".")]),e._v(" "),a("li",[e._v("Copy the seed phrase and store it somewhere safe. Don't share the seed phrase with anyone, you can use it to access your account if you forget your password or want to import your account again.")]),e._v(" "),a("li",[e._v("Enter a name for the account and type a strong password (at least 6 characters).")]),e._v(" "),a("li",[e._v("Click on "),a("code",[e._v("Add the account with the generated seed")]),e._v(".")]),e._v(" "),a("li",[e._v("You can copy the account's address to the clipboard by clicking on its identicon.")])]),e._v(" "),a("h3",{attrs:{id:"using-subkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-subkey"}},[e._v("#")]),e._v(" Using "),a("code",[e._v("subkey")])]),e._v(" "),a("h4",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("You can install "),a("code",[e._v("subkey")]),e._v(" with this one-line command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cargo install --force --git https://github.com/paritytech/substrate subkey\n")])])]),a("p",[e._v("Note that you will already have had to install the proper Rust version and dependencies. If you have not done so, or experience problems installing using that command, run the following commands first, and then re-try the previous command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl https://sh.rustup.rs -sSf | sh\n\nrustup update nightly\nrustup target add wasm32-unknown-unknown --toolchain nightly\nrustup update stable\ncargo install --git https://github.com/alexcrichton/wasm-gc\n")])])]),a("p",[e._v("Alternatively, you can build "),a("code",[e._v("subkey")]),e._v(" from the source code.")]),e._v(" "),a("ol",[a("li",[e._v("Follow the build instructions for "),a("a",{attrs:{href:"https://www.substrate.io/kb/getting-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("Substrate"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("When building, only build "),a("code",[e._v("subkey")]),e._v(" by typing "),a("code",[e._v("cargo build -p subkey")]),e._v(".")]),e._v(" "),a("li",[e._v("The executable is "),a("code",[e._v("./target/debug/subkey")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("You can use subkey on a computer that is not connected to the internet for added security.")]),e._v(" "),a("p",[e._v("The command "),a("code",[e._v("subkey --network kusama generate")]),e._v(" will generate a new key-pair. If you want to be more secure, use 24 words, "),a("code",[e._v("subkey --network kusama generate --words 24")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ subkey --network kusama generate\nSecret phrase `lobster flock few equip connect boost excuse glass machine find wonder tattoo` is account:\n  Secret seed: 0x95b90eb1344e3aea40f4a6dc81622901a2ac39efb331c41db10c311bb9b46927\n  Public key (hex): 0xfe7fce341ff73e1db537daa4cc8c539997a8b0654b06cb81c47e4f067f55a65a\n  Address (SS58): JL1eTcbzuZP99FjeySkDrMygNREPdbhRyV7iD5AsV4fDRcg\n")])])]),a("p",[e._v("The "),a("code",[e._v("Address (SS58)")]),e._v(" field is what you should use to claim your KSM tokens. Never share your "),a("code",[e._v("Secret phrase")]),e._v(" or "),a("code",[e._v("Secret seed")]),e._v(", as these can both control your funds.")]),e._v(" "),a("p",[e._v("NOTE: Previous versions of "),a("code",[e._v("subkey")]),e._v(" only generated Substrate addresses. If you do not want to generate a new seed, you can convert the Substrate address to a Kusama address by following "),a("a",{attrs:{href:"#kusama-from-substrate-address"}},[e._v("this section")]),e._v(".")]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"https://www.substrate.io/kb/integrate/subkey",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("subkey")]),e._v(" documentation"),a("OutboundLink")],1),e._v(" or enter "),a("code",[e._v("subkey --help")]),e._v(" for more usage examples.")]),e._v(" "),a("h3",{attrs:{id:"using-polkadot-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-polkadot-ui"}},[e._v("#")]),e._v(" Using Polkadot UI")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Open up the "),a("a",{attrs:{href:"https://polkadot.js.org/apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot UI"),a("OutboundLink")],1),e._v(" and navigate to the "),a("code",[e._v("Settings")]),e._v(" tab. Find the configuration dropdown for "),a("code",[e._v("address network prefix")]),e._v(" and select "),a("code",[e._v("Kusama (canary)")]),e._v(". Click "),a("code",[e._v("Save and reload")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Navigate to the "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/accounts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot UI Accounts Tab"),a("OutboundLink")],1),e._v(" and click on the "),a("code",[e._v("Add account")]),e._v(" button.")])])]),e._v(" "),a("img",{attrs:{src:"/img/kusama/polkadotui-find-the-accounts-page.png",width:"50%"}}),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Enter a name for your account and create a secure password. This password will be used to decrypt your account.")])]),e._v(" "),a("img",{attrs:{src:"/img/kusama/polkadotui-create-your-account.png",width:"50%"}}),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v('Ignore the advanced options unless you want to change the type of cryptography used for your keys (we recommend "Schnorrkel (sr25519)").')])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("code",[e._v("Save")]),e._v(" and "),a("code",[e._v("Create and backup account")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Save your encrypted keystore locally.")])]),e._v(" "),a("li",[a("p",[e._v("The account now appears in your Accounts tab and is backed up to the keystore you just saved.")])]),e._v(" "),a("li",[a("p",[e._v("Click on the DOT identicon to copy the address to the clipboard. "),a("img",{attrs:{src:"/img/kusama/polkadotui-copy-account-address.png",width:"50%"}})])])]),e._v(" "),a("h3",{attrs:{id:"using-polkawallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-polkawallet"}},[e._v("#")]),e._v(" Using Polkawallet")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Install "),a("a",{attrs:{href:"https://polkawallet.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkawallet"),a("OutboundLink")],1),e._v(". Click "),a("code",[e._v("Download")]),e._v(' and select the link corresponding to the platform you are using. On Android you may need to allow installing apps from external sources. On iOS, you may need to "trust" Polkawallet in the '),a("code",[e._v("General > Profiles & Device Management > Enterprise App")]),e._v(" section before running the app.")])]),e._v(" "),a("li",[a("p",[e._v("Once the app is open, copy the seed phrase and store it in a safe place. Don't share the seed phrase with anyone, you can use it to access your account if you forget your password or otherwise lose your keystore.")])])]),e._v(" "),a("img",{attrs:{src:"/img/kusama/polkawallet-create-account.jpg",width:"50%"}}),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("Name your account and make a strong password, make sure to write it down in another place, then click "),a("code",[e._v("Save")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("You will be asked to confirm your seed phrase - this is to make sure you have copied it somewhere safe.")])]),e._v(" "),a("li",[a("p",[e._v("Click on the pink QR Code symbol and select "),a("code",[e._v("Copy address")]),e._v(" to copy your address to clipboard.")])])]),e._v(" "),a("img",{attrs:{src:"/img/kusama/polkawallet-accounts-page.jpg",width:"50%"}}),e._v(" "),a("img",{attrs:{src:"/img/kusama/polkawallet-copy-address.jpg",width:"50%"}}),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("a",{attrs:{href:"#kusama-from-substrate-address"}},[e._v("Get the Kusama address from the Substrate address.")])])]),e._v(" "),a("h3",{attrs:{id:"kusama-from-substrate-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kusama-from-substrate-address"}},[e._v("#")]),e._v(" Kusama from Substrate address")]),e._v(" "),a("p",[e._v("If you used one of the generation methods that gave you a generic Substrate address (begins with a "),a("code",[e._v("5")]),e._v("), then you will need to take an extra step to turn this into the properly encoded Kusama address.")]),e._v(" "),a("ol",[a("li",[e._v("Copy your Substrate generic address to the clipboard.")]),e._v(" "),a("li",[e._v("Go to the "),a("a",{attrs:{href:"https://polkadot.js.org/apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot UI"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Go to the "),a("code",[e._v("Settings")]),e._v(" tab and find the configuration for "),a("code",[e._v("address network prefix")]),e._v(".")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Substrate (development)")]),e._v(" and click "),a("code",[e._v("Save and reload")]),e._v(".")]),e._v(" "),a("li",[e._v("Go to the "),a("code",[e._v("Address book")]),e._v(" and click the "),a("code",[e._v("Add contact")]),e._v(" button.")]),e._v(" "),a("li",[e._v('Enter your address and give it a name like "My Address".')]),e._v(" "),a("li",[e._v("Go back to the "),a("code",[e._v("Settings")]),e._v(" tab and select the "),a("code",[e._v("Kusama (canary)")]),e._v(" option in "),a("code",[e._v("address network prefix")]),e._v(" and click "),a("code",[e._v("Save and reload")]),e._v(".")]),e._v(" "),a("li",[e._v("Go back to the "),a("code",[e._v("Address book")]),e._v(" and find the account you just added (it will have the same name).")]),e._v(" "),a("li",[e._v("The address is now formatted as a Kusama address.")])]),e._v(" "),a("h2",{attrs:{id:"step-2-get-ksm-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-get-ksm-tokens"}},[e._v("#")]),e._v(" Step 2. Get KSM tokens")]),e._v(" "),a("p",[e._v("There are two methods to claim KSM.")]),e._v(" "),a("h3",{attrs:{id:"_1-dot-holders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-dot-holders"}},[e._v("#")]),e._v(" 1. DOT Holders:")]),e._v(" "),a("p",[e._v("Those who participated in the Polkadot sales and have been allocated DOT indicator tokens can claim a proportional amount of KSMs on the Kusama Network.")]),e._v(" "),a("p",[e._v("To do this you must sign a message containing the address of your Kusama account. You can do this by using the Polkadot UI "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/claims",target:"_blank",rel:"noopener noreferrer"}},[e._v("Claims app"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"generate-a-kusama-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-kusama-address"}},[e._v("#")]),e._v(" Generate a Kusama address")]),e._v(" "),a("p",[e._v("If you haven't already done so, you will need to generate a Kusama address. See further up this page for detailed instructions first!")]),e._v(" "),a("h4",{attrs:{id:"claiming-your-ksm-with-mycrypto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#claiming-your-ksm-with-mycrypto"}},[e._v("#")]),e._v(" Claiming your KSM with MyCrypto")]),e._v(" "),a("p",[e._v("The Polkadot JS "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/claims",target:"_blank",rel:"noopener noreferrer"}},[e._v("Claims app"),a("OutboundLink")],1),e._v(" helps you sign a message from MyCrypto. MyCrypto is good to use in case you have stored the key to the Ethereum account holding your DOT indicator tokens on a hardware device like a Ledger Nano S or a Trezor. It also supports raw private keys, mnemonics and the Parity signer.")]),e._v(" "),a("p",[a("strong",[e._v("NOTICE")]),e._v(": It is much more secure to download and use the MyCrypto app locally. Please make sure to download the latest version for your operating system. You can always find the most up-to-date releases of the desktop app on their "),a("a",{attrs:{href:"https://github.com/MyCryptoHQ/MyCrypto/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("releases page"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v('Once you\'ve downloaded MyCrypto and have it running locally (we recommend an air-gapped computer for maximum security), you can start by navigating to the Claims app on the Polkadot JS UI. Select the account you would like to claim the KSMs into and click the blue "Continue" button to proceed. Your screen should look something like this:')]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/kusama/claim/claim-1.png",alt:"Claim Step 1"}})]),e._v(" "),a("p",[e._v('The hex encoded string that follows the sentence: "Pay KSMs to the Kusama account:" is the hex-encoded public key of your Kusama account, minus the '),a("code",[e._v("0x")]),e._v(" prefix. To verify that the public key is correct you can use the "),a("code",[e._v("subkey")]),e._v(" tool to inspect your address.")]),e._v(" "),a("p",[e._v('The next step is to go to the MyCrypto application and click on "Sign & Verify Message" tab. This will prompt you to select a method for unlocking your wallet. After unlocking your wallet, you will copy and paste the outputted sentence into the input box.')]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/kusama/claim/claim-2.png",alt:"Claim Step 2"}})]),e._v(" "),a("p",[e._v('When you click "Sign Message" you will get a JSON output like the below:')]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/kusama/claim/claim_3.png",alt:"Claim Step 3"}})]),e._v(" "),a("p",[e._v('Copy and paste the JSON output of the signed message from MyCrypto into the input box on the Polkadot JS UI and click "Confirm Claim."')]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/kusama/claim/claim-3.png",alt:"Claim Step 3"}})]),e._v(" "),a("p",[e._v("At this point you will see a success message if everything went right and your KSMs will now be in the account that you claimed to. Congratulations you can now participate in aspects of the Kusama network such as "),a("a",{attrs:{href:"learn-governance"}},[e._v("governance")]),e._v(" and "),a("a",{attrs:{href:"learn-staking"}},[e._v("staking")]),e._v(". During the soft launch period balance transfers will not be enabled.")]),e._v(" "),a("p",[a("img",{attrs:{src:"assets/kusama/claim/claim-4.png",alt:"Claim Step 4"}}),e._v("]")]),e._v(" "),a("h4",{attrs:{id:"verifying-your-claim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verifying-your-claim"}},[e._v("#")]),e._v(" Verifying your Claim")]),e._v(" "),a("p",[e._v("After you make an on-chain claim for KSMs, your balance should be updated on the Polkadot UI immediately.")]),e._v(" "),a("p",[e._v("Having trouble? Get support in the KSM "),a("a",{attrs:{href:"https://riot.im/app/#/room/#KSMAClaims:polkadot.builders",target:"_blank",rel:"noopener noreferrer"}},[e._v("Claims Support"),a("OutboundLink")],1),e._v(" channel.")]),e._v(" "),a("h3",{attrs:{id:"_2-faucet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-faucet"}},[e._v("#")]),e._v(" 2. Faucet:")]),e._v(" "),a("p",[e._v("For those who didn’t participate in the Polkadot sale, KSMs are publicly available after genesis through a faucet. Find out more "),a("a",{attrs:{href:"kusama-faucet"}},[e._v("here")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"third-party-claims-processes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#third-party-claims-processes"}},[e._v("#")]),e._v(" Third Party Claims Processes")]),e._v(" "),a("p",[a("strong",[e._v("We do not recommend using a third-party app or process to perform your claim or acquire KSM")])]),e._v(" "),a("p",[e._v("Claiming using a third-party process can lead to the loss of your allocation, therefore we cannot recommend using any third party apps to do so. Manually specifying your transaction data, as specified in our claims process, is the only way to be certain you will receive your allocation.")])])}),[],!1,null,null,null);t.default=s.exports}}]);