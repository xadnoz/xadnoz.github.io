(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{998:function(e,a,t){"use strict";t.r(a);var o=t(42),r=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("이 가이드는 Alexander testnet과 함께 동작하도록 업데이트 되었습니다.")]),e._v(" "),t("h2",{attrs:{id:"패러체인을-보는-방법-how-to-view-parachains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#패러체인을-보는-방법-how-to-view-parachains"}},[e._v("#")]),e._v(" 패러체인을 보는 방법(How to view parachains)")]),e._v(" "),t("p",[e._v("On the "),t("a",{attrs:{href:"https://polkadot.js.org/apps/#/explorer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot UI"),t("OutboundLink")],1),e._v(" navigate to the "),t("code",[e._v("Chain State")]),e._v(" tab. Select the "),t("code",[e._v("parachains")]),e._v(" module and the "),t("code",[e._v("parachains()")]),e._v(" then hit the "),t("code",[e._v("+")]),e._v(" button. It will return an array of the currently active parachains.")]),e._v(" "),t("h2",{attrs:{id:"패러체인에-애더-adder-를-배포하는-방법-how-to-deploy-the-adder-parachain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#패러체인에-애더-adder-를-배포하는-방법-how-to-deploy-the-adder-parachain"}},[e._v("#")]),e._v(" 패러체인에 애더(Adder)를 배포하는 방법 (How to deploy the Adder parachain)")]),e._v(" "),t("p",[t("strong",[e._v("You will need to have the minimum deposit needed to create a referendum. Currently this minimum is 5 DOTs.")])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("adder")]),e._v(" parachain is a simple parachain which will keep a value in storage and add to this value as messages are sent to it. It can be found in the Polkadot repository under the "),t("code",[e._v("test-parachains")]),e._v(" folder.")]),e._v(" "),t("blockquote",[t("p",[e._v("A slightly out-of-date video version of this guide presented by Adrian Brink is available "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=pDqkzvA4C0E",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(". When the two guides diverge, please refer to this written text as definitive and updated.")])]),e._v(" "),t("h3",{attrs:{id:"코드-짜기-building-the-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#코드-짜기-building-the-code"}},[e._v("#")]),e._v(" 코드 짜기 (Building the code)")]),e._v(" "),t("p",[e._v("첫번째로 폴카닷(Polkadot) 코드를 다운로드 받습니다.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/paritytech/polkadot.git\n")])])]),t("p",[e._v("Rust가 설치되어 있는지 확인하세요.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://sh.rustup.rs -sSf "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" clang pkg-config libssl-dev\nrustup update\n")])])]),t("p",[e._v("Now navigate to the "),t("code",[e._v("test-parachains")]),e._v(" folder in the Polkadot code repository and run the build script.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" polkadot/test-parachains\n./build.sh\n")])])]),t("p",[e._v("This will create the Wasm executable of the simple "),t("code",[e._v("adder")]),e._v(" parachain contained in this folder. This parachain will simply add messages that are sent to it. The Wasm executable will output into the "),t("code",[e._v("parachains/test/res/adder.wasm")]),e._v(" path so make sure you are able to find it there.")]),e._v(" "),t("p",[e._v("You will need to build and run the collator node in order to get the genesis state of this parachain.")]),e._v(" "),t("p",[t("code",[e._v("test-parachains/adder/collator")]),e._v("디렉토리로 가서 "),t("code",[e._v("build")]),e._v("와 "),t("code",[e._v("run")]),e._v(" 커맨드를 실행하세요.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("cargo build\ncargo run\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("ctrl-c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),t("p",[e._v("검사기(Collator)노드를 즉시 중단하면 다음과 같은 출력이 표시됩니다")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Starting adder collator with genesis:\nDec: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 27, 77, 3, 221, 140, 1, 241, 4, 145, 67,\n207, 156, 76, 129, 126, 75, 22, 127, 29, 27, 131, 229, 198, 240, 241, 13, 137, 186, 30, 123, 206]\nHex: 0x00000000000000000000000000000000000000000000000000000000000000000000000000000000011b4d03dd8c01f1049143cf9c4c817e4b167f1d1b83e5c6f0f10d89ba1e7bce\n")])])]),t("p",[e._v("The important information is the hex string. This is your genesis state and you will need to save it for the next steps.")]),e._v(" "),t("h3",{attrs:{id:"패러체인-배포하기-deploying-the-parachain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#패러체인-배포하기-deploying-the-parachain"}},[e._v("#")]),e._v(" 패러체인 배포하기 (Deploying the parachain)")]),e._v(" "),t("p",[e._v("Go to "),t("a",{attrs:{href:"https://polkadot.js.org/apps/#/extrinsics",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polkadot UI"),t("OutboundLink")],1),e._v(" on the "),t("code",[e._v("Extrinsics")]),e._v(" tab. Select the account you wish to deploy the parachain from. You will need to create a referendum to deploy the parachain.")]),e._v(" "),t("p",[e._v("Click on "),t("code",[e._v("democracy")]),e._v(" -> "),t("code",[e._v("propose(proposal,value)")]),e._v(" -> "),t("code",[e._v("parachains")]),e._v(" -> "),t("code",[e._v("registerParachain(id,code,initial_head_data)")]),e._v(".")]),e._v(" "),t("p",[e._v("In the "),t("code",[e._v("id")]),e._v(" input enter in the id of the parachain. In the case of the simple adder it will be "),t("code",[e._v("100")]),e._v(". In the "),t("code",[e._v("code")]),e._v(" field click on the page button and then upload the "),t("code",[e._v("adder.wasm")]),e._v(" binary that was compiled from before. In the "),t("code",[e._v("initial_head_data")]),e._v(" we will copy and paste the hex data that we got from running the collator node. In the "),t("code",[e._v("value")]),e._v(" field you will need to input the minimum required value for creating a referendum. At the time of writing this is "),t("em",[e._v("5 DOTs")]),e._v(" on the Alexander testnet.")]),e._v(" "),t("p",[t("img",{attrs:{src:"assets/parachain/register.png",alt:"패러체인 등록하기"}})]),e._v(" "),t("p",[e._v("If you navigate to the "),t("code",[e._v("Democracy")]),e._v(" tab you will be able to see your proposal in the proposals section.")]),e._v(" "),t("p",[e._v("Once you wait for the proposal to become a referendum you will be able to vote "),t("code",[e._v("Nay")]),e._v(" or "),t("code",[e._v("Aye")]),e._v(" on it. Assumably, you will vote Aye as this will be a vote for the deployment of your parachain.")]),e._v(" "),t("p",[t("img",{attrs:{src:"assets/parachain/referendum.png",alt:"패러체인 투표"}})]),e._v(" "),t("p",[e._v("After the voting period of your referendum goes through you will be able to query the state of your parachain.")]),e._v(" "),t("p",[e._v("You can go to the "),t("code",[e._v("Chain State")]),e._v(" tab and by querying the "),t("code",[e._v("parachains")]),e._v(" state you should be able to see some information on your parachain.")]),e._v(" "),t("p",[t("img",{attrs:{src:"assets/parachain/info.png",alt:"parachain info"}})]),e._v(" "),t("h3",{attrs:{id:"패러체인과-인터렉션-하기-interacting-with-the-parachain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#패러체인과-인터렉션-하기-interacting-with-the-parachain"}},[e._v("#")]),e._v(" 패러체인과 인터렉션 하기 (Interacting with the parachain)")]),e._v(" "),t("p",[t("em",[e._v("Coming soon")])])])}),[],!1,null,null,null);a.default=r.exports}}]);