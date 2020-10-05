(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{372:function(e,t,a){"use strict";a.r(t);var r=a(42),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://travis-ci.org/bitcoinj/bitcoinj",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://travis-ci.org/bitcoinj/bitcoinj.png?branch=master",alt:"Build Status"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://coveralls.io/r/bitcoinj/bitcoinj?branch=master",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://coveralls.io/repos/bitcoinj/bitcoinj/badge.png?branch=master",alt:"Coverage Status"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://kiwiirc.com/client/irc.freenode.net/bitcoinj",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://kiwiirc.com/buttons/irc.freenode.net/bitcoinj.png",alt:"Visit our IRC channel"}}),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"welcome-to-bitcoinj"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#welcome-to-bitcoinj"}},[e._v("#")]),e._v(" Welcome to bitcoinj")]),e._v(" "),a("p",[e._v("The bitcoinj library is a Java implementation of the Bitcoin protocol, which allows it to maintain a wallet and send/receive transactions without needing a local copy of Bitcoin Core. It comes with full documentation and some example apps showing how to use it.")]),e._v(" "),a("h3",{attrs:{id:"technologies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technologies"}},[e._v("#")]),e._v(" Technologies")]),e._v(" "),a("ul",[a("li",[e._v("Java 7+ and Gradle 3.4+ for the "),a("code",[e._v("core")]),e._v(" module")]),e._v(" "),a("li",[e._v("Java 8+ and Gradle 3.4+ for "),a("code",[e._v("tools")]),e._v(" and "),a("code",[e._v("examples")])]),e._v(" "),a("li",[e._v("Java 11+ and Gradle 4.10+ for the JavaFX-based "),a("code",[e._v("wallettemplate")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://gradle.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gradle"),a("OutboundLink")],1),e._v(" - for building the project")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/google/protobuf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Protocol Buffers"),a("OutboundLink")],1),e._v(" - for use with serialization and hardware communications")])]),e._v(" "),a("h3",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),a("p",[e._v("To get started, it is best to have the latest JDK and Gradle installed. The HEAD of the "),a("code",[e._v("master")]),e._v(" branch contains the latest development code and various production releases are provided on feature branches.")]),e._v(" "),a("h4",{attrs:{id:"building-from-the-command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-from-the-command-line"}},[e._v("#")]),e._v(" Building from the command line")]),e._v(" "),a("p",[e._v("Official builds are currently using with JDK 8, even though the "),a("code",[e._v("core")]),e._v(" module is compatible with JDK 7 and later.")]),e._v(" "),a("p",[e._v("To perform a full build ("),a("em",[e._v("including")]),e._v(" JavaDocs and unit/integration "),a("em",[e._v("tests")]),e._v(") use JDK 8+")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gradle clean build\n")])])]),a("p",[e._v("If you are running JDK 11 or later and Gradle 4.10 or later, the build will automatically include the JavaFX-based "),a("code",[e._v("wallettemplate")]),e._v(" module. The outputs are under the "),a("code",[e._v("build")]),e._v(" directory.")]),e._v(" "),a("p",[e._v("To perform a full build "),a("em",[e._v("without")]),e._v(" unit/integration "),a("em",[e._v("tests")]),e._v(" use:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gradle clean assemble\n")])])]),a("h4",{attrs:{id:"building-from-an-ide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-from-an-ide"}},[e._v("#")]),e._v(" Building from an IDE")]),e._v(" "),a("p",[e._v("Alternatively, just import the project using your IDE. "),a("a",{attrs:{href:"http://www.jetbrains.com/idea/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IntelliJ"),a("OutboundLink")],1),e._v(" has Gradle integration built-in and has a free Community Edition. Simply use "),a("code",[e._v("File | New | Project from Existing Sources")]),e._v(" and locate the "),a("code",[e._v("build.gradle")]),e._v(" in the root of the cloned project source tree.")]),e._v(" "),a("h3",{attrs:{id:"example-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-applications"}},[e._v("#")]),e._v(" Example applications")]),e._v(" "),a("p",[e._v("These are found in the "),a("code",[e._v("examples")]),e._v(" module.")]),e._v(" "),a("h3",{attrs:{id:"where-next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-next"}},[e._v("#")]),e._v(" Where next?")]),e._v(" "),a("p",[e._v("Now you are ready to "),a("a",{attrs:{href:"https://bitcoinj.github.io/getting-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("follow the tutorial"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"testing-a-snapshot-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-a-snapshot-build"}},[e._v("#")]),e._v(" Testing a SNAPSHOT build")]),e._v(" "),a("p",[e._v("Building apps with official releases of "),a("strong",[e._v("bitcoinj")]),e._v(" is covered in the "),a("a",{attrs:{href:"https://bitcoinj.github.io/getting-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("tutorial"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("If you want to develop or test your app with a "),a("a",{attrs:{href:"https://jitpack.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jitpack"),a("OutboundLink")],1),e._v("-powered build of the latest "),a("code",[e._v("master")]),e._v(" or "),a("code",[e._v("release-0.15")]),e._v(" branch of "),a("strong",[e._v("bitcoinj")]),e._v(" follow the dynamically-generated instructions for that branch by following the correct link.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jitpack.io/#bitcoinj/bitcoinj/master-SNAPSHOT",target:"_blank",rel:"noopener noreferrer"}},[e._v("master"),a("OutboundLink")],1),e._v(" branch")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://jitpack.io/#bitcoinj/bitcoinj/release-0.15-SNAPSHOT",target:"_blank",rel:"noopener noreferrer"}},[e._v("release-0.15"),a("OutboundLink")],1),e._v(" branch")])])])}),[],!1,null,null,null);t.default=o.exports}}]);