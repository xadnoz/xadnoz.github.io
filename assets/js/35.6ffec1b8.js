(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{398:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"bisq-seed-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bisq-seed-node"}},[s._v("#")]),s._v(" Bisq Seed Node")]),s._v(" "),a("h2",{attrs:{id:"hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[s._v("#")]),s._v(" Hardware")]),s._v(" "),a("p",[s._v("Highly recommended to use SSD! Minimum specs:")]),s._v(" "),a("ul",[a("li",[s._v("CPU: 4 cores")]),s._v(" "),a("li",[s._v("RAM: 8 GB")]),s._v(" "),a("li",[s._v("SSD: 512 GB (HDD is too slow)")])]),s._v(" "),a("h2",{attrs:{id:"software"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[s._v("#")]),s._v(" Software")]),s._v(" "),a("p",[s._v("The following OS's are known to work well:")]),s._v(" "),a("ul",[a("li",[s._v("Ubuntu 18.04")]),s._v(" "),a("li",[s._v("Ubuntu 20.04")]),s._v(" "),a("li",[s._v("FreeBSD 12")])]),s._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),a("p",[s._v("Start with a clean Ubuntu server installation, and run the script")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s https://raw.githubusercontent.com/bisq-network/bisq/master/seednode/install_seednode_debian.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),a("p",[s._v("This will install and configure Tor, Bitcoin, and Bisq-Seednode services to start on boot.")]),s._v(" "),a("h3",{attrs:{id:"firewall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewall"}},[s._v("#")]),s._v(" Firewall")]),s._v(" "),a("p",[s._v("Next, configure your OS firewall to only allow SSH and Bitcoin P2P")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("/tcp\nufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8333")]),s._v("/tcp\nufw "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\n")])])]),a("h3",{attrs:{id:"syncing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syncing"}},[s._v("#")]),s._v(" Syncing")]),s._v(" "),a("p",[s._v("After installation, watch the Bitcoin blockchain sync progress")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f /bitcoin/debug.log\n")])])]),a("p",[s._v("After Bitcoin is fully synced, start the bisq service")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start bisq\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" journalctl --unit bisq --follow\n")])])]),a("p",[s._v("After Bisq is fully synced, check your Bitcoin and Bisq onion hostnames:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -H -u bitcoin bitcoin-cli getnetworkinfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" address\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /bisq/bisq-seednode/btc_mainnet/tor/hiddenservice/hostname\n")])])]),a("h3",{attrs:{id:"testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[s._v("#")]),s._v(" Testing")]),s._v(" "),a("p",[s._v("After your Bisq seednode is ready, test it by connecting to your new btcnode and bisq!")]),s._v(" "),a("p",[s._v("macOS:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/Applications/Bisq.app/Contents/MacOS/Bisq --seedNodes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("foo.onion:8000 --btcNodes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("foo.onion:8333\n")])])]),a("h3",{attrs:{id:"monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[s._v("#")]),s._v(" Monitoring")]),s._v(" "),a("p",[s._v("If you run a main seednode, you also are obliged to activate the monitoring feed by running")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s https://raw.githubusercontent.com/bisq-network/bisq/master/monitor/install_collectd_debian.sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("Follow the instruction given by the script and report your certificate to the seednode group!")]),s._v(" "),a("h3",{attrs:{id:"upgrading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading"}},[s._v("#")]),s._v(" Upgrading")]),s._v(" "),a("p",[s._v("To upgrade your seednode to a new tag, for example v1.2.5")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -u bisq -s\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" bisq\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout v1.2.5 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# new tag")]),s._v("\n./gradlew clean build -x "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" bisq restart\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" journalctl --unit bisq --follow\n")])])]),a("h3",{attrs:{id:"uninstall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uninstall"}},[s._v("#")]),s._v(" Uninstall")]),s._v(" "),a("p",[s._v("If you need to start over, you can run the uninstall script in this repo")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ./delete_seednode_debian.sh\n")])])]),a("p",[s._v("WARNING: this script will delete all data!")])])}),[],!1,null,null,null);t.default=n.exports}}]);