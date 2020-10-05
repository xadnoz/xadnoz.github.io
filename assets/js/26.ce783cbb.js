(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{391:function(e,t,a){"use strict";a.r(t);var r=a(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"release-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-process"}},[e._v("#")]),e._v(" Release Process")]),e._v(" "),a("ul",[a("li",[e._v("Update translations "),a("RouterLink",{attrs:{to:"/bisq/docs/translation-process.html#synchronising-translations"}},[e._v("translation-process.md")]),e._v(".")],1),e._v(" "),a("li",[e._v("Update data stores "),a("RouterLink",{attrs:{to:"/bisq/docs/data-stores.html#update-stores"}},[e._v("data-stores.md")]),e._v(".")],1),e._v(" "),a("li",[e._v("Update bitcoinj checkpoint "),a("RouterLink",{attrs:{to:"/bisq/docs/bitcoinj-checkpoint.html#update-checkpoint"}},[e._v("bitcoinj-checkpoint")]),e._v(".")],1),e._v(" "),a("li",[e._v("Write release notes (see below).")]),e._v(" "),a("li",[e._v("Webpage (Prepare PR)\n"),a("ul",[a("li",[a("p",[e._v("Update version number in:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/bisq-network/bisq-website/blob/master/_config.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("_config.yml"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("p",[e._v("Update currency list in "),a("a",{attrs:{href:"https://github.com/bisq-network/bisq-website/blob/master/_includes/market_currency_selector.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("market_currency_selector.html"),a("OutboundLink")],1),e._v(" (use "),a("a",{attrs:{href:"https://github.com/bisq-network/bisq/blob/master/desktop/src/test/java/bisq/desktop/MarketsPrintTool.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("MarketsPrintTool"),a("OutboundLink")],1),e._v("\nto create HTML content).")])]),e._v(" "),a("li",[a("p",[e._v("Update "),a("a",{attrs:{href:"https://github.com/bisq-network/bisq-website/blob/master/roadmap.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("roadmap"),a("OutboundLink")],1),e._v(" with new release notes.")])])])])]),e._v(" "),a("h3",{attrs:{id:"bisq-maintainers-suggestion-for-writing-release-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bisq-maintainers-suggestion-for-writing-release-notes"}},[e._v("#")]),e._v(" Bisq maintainers, suggestion for writing release notes")]),e._v(" "),a("p",[e._v("To be able to create release notes before you make the final release tag, you can temporarily create a local tag and\nremove it afterwards again.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("git tag v(new version, e.g. 0.9.4) #create tag\ngit tag -d v(new version, e.g. 0.9.4) #delete tag\n")])])]),a("p",[e._v("Write release notes. git shortlog helps a lot, for example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("git shortlog --no-merges v(current version, e.g. 0.9.3)..v(new version, e.g. 0.9.4)\n")])])]),a("p",[e._v("Generate list of authors:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("git log --format='- %aN' v(current version, e.g. 0.9.3)..v(new version, e.g. 0.9.4) | sort -fiu\n")])])]),a("ol",[a("li",[e._v("Prepare the release notes with major changes from user perspective.")]),e._v(" "),a("li",[e._v("Prepare a short version of the release notes for the in-app update popup")])]),e._v(" "),a("h3",{attrs:{id:"basic-preparations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-preparations"}},[e._v("#")]),e._v(" Basic preparations")]),e._v(" "),a("p",[e._v("For releasing a new Bisq version you'll need Linux, Windows and macOS.\nYou can use a virtualization solution like "),a("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("VirtualBox"),a("OutboundLink")],1),e._v(" for this purpose.")]),e._v(" "),a("h4",{attrs:{id:"virtualbox-recommended-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox-recommended-configuration"}},[e._v("#")]),e._v(" VirtualBox recommended configuration")]),e._v(" "),a("p",[e._v("Although performance of VMs might vary based on your hardware configuration following setup works pretty well on macOS.")]),e._v(" "),a("p",[e._v("Use VirtualBox < 5.2.22: Using a more recent version makes VMs hardly usable on a MacBook Pro (15-inch, 2016)\nwith following configuration:")]),e._v(" "),a("ul",[a("li",[e._v("System > Motherboard > Base Memory: 2048 MB")]),e._v(" "),a("li",[e._v("System > Processor > Processor(s): 2 CPUs")]),e._v(" "),a("li",[e._v("System > Processor > Execution Cap: 90%")]),e._v(" "),a("li",[e._v("Display > Screen > Video Memory: 128 MB")]),e._v(" "),a("li",[e._v("Display > Screen > Scale Factor: 200%")]),e._v(" "),a("li",[e._v("Display > Screen > HiDPI Support: Use unscaled HiDPI Output (checked)")]),e._v(" "),a("li",[e._v("Display > Screen > Acceleration: Enable 3D acceleration (checked)")])]),e._v(" "),a("h5",{attrs:{id:"windows-vm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-vm"}},[e._v("#")]),e._v(" Windows VM")]),e._v(" "),a("ul",[a("li",[e._v("Windows 10 64bit")]),e._v(" "),a("li",[e._v("Recommended virtual disk size: 55 GB")])]),e._v(" "),a("h5",{attrs:{id:"linux-vm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-vm"}},[e._v("#")]),e._v(" Linux VM")]),e._v(" "),a("ul",[a("li",[e._v("Ubuntu 16.04.4 64bit")]),e._v(" "),a("li",[e._v("Recommended virtual disk size: 15 GB")])]),e._v(" "),a("h5",{attrs:{id:"macos-vm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos-vm"}},[e._v("#")]),e._v(" macOS VM")]),e._v(" "),a("ul",[a("li",[e._v("macOS X 10.11 (El Capitan) 64bit")]),e._v(" "),a("li",[e._v("Recommended virtual disk size: 40 GB")])]),e._v(" "),a("h4",{attrs:{id:"for-every-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-every-os"}},[e._v("#")]),e._v(" For every OS")]),e._v(" "),a("ul",[a("li",[e._v("Install latest security updates")])]),e._v(" "),a("h4",{attrs:{id:"for-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-windows"}},[e._v("#")]),e._v(" For Windows")]),e._v(" "),a("ul",[a("li",[e._v("Update AntiVirus Software and virus definitions")]),e._v(" "),a("li",[e._v("Install unicode version of "),a("a",{attrs:{href:"http://www.jrsoftware.org/isdl.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("Inno Tools"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Run full AV system scan")])]),e._v(" "),a("h3",{attrs:{id:"build-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-release"}},[e._v("#")]),e._v(" Build release")]),e._v(" "),a("h4",{attrs:{id:"macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" macOS")]),e._v(" "),a("ol",[a("li",[e._v("Make sure all version numbers are updated (update version variables and run "),a("a",{attrs:{href:"https://github.com/bisq-network/bisq/blob/master/bisq/desktop/package/macosx/replace_version_number.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("replace_version_number.sh"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("li",[e._v("Set environment variable e.g. export BISQ_GPG_USER=manfred@bitsquare.io to ~/.profile file or the like... (one time effort)")]),e._v(" "),a("li",[e._v("Update "),a("a",{attrs:{href:"https://github.com/bisq-network/bisq/blob/b4b5d0bb12c36afbe1aa6611dd8451378df6db8c/desktop/package/macosx/create_app.sh#L42",target:"_blank",rel:"noopener noreferrer"}},[e._v("vmPath variable"),a("OutboundLink")],1),e._v(" if necessary")]),e._v(" "),a("li",[e._v("Run "),a("a",{attrs:{href:"https://github.com/bisq-network/bisq/blob/master/desktop/package/macosx/create_app.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("create_app.sh"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Build output expected in deploy directory (opened after successful build process):")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.dmg")]),e._v(" macOS signed installer")]),e._v(" "),a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.jar")]),e._v(" Deterministic fat jar")]),e._v(" "),a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.jar.txt")]),e._v(" sha256 sum of deterministic fat jar")])]),e._v(" "),a("p",[e._v("The build script also copies over the deterministic fat jar into the shared folders for the other VMs (Windows & Linux).\nBefore building the other binaries install the generated Bisq app on macOS and verify that everything works as expected.")]),e._v(" "),a("h4",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),a("ul",[a("li",[e._v("Run "),a("code",[e._v("desktop/package/linux/package.sh")]),e._v(" from the shared VM folder")])]),e._v(" "),a("p",[e._v("Build output expected:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.deb")]),e._v(" package for distributions that derive from Debian")]),e._v(" "),a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.rpm")]),e._v(" package for distributions that derive from Redhat based distros")])]),e._v(" "),a("ul",[a("li",[e._v("Install and run generated package")])]),e._v(" "),a("h4",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),a("ul",[a("li",[e._v("Run "),a("code",[e._v("desktop/package/windows/package.bat")]),e._v(" from the shared VM folder")])]),e._v(" "),a("p",[e._v("Build output expected:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.exe")]),e._v(" Windows unsigned installer")]),e._v(" "),a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.exe.txt")]),e._v(" sha256 sum of installer")])]),e._v(" "),a("h3",{attrs:{id:"sign-release-on-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-release-on-macos"}},[e._v("#")]),e._v(" Sign release on macOS")]),e._v(" "),a("ul",[a("li",[e._v("Run "),a("a",{attrs:{href:"https://github.com/bisq-network/bisq/blob/master/bisq/desktop/package/macosx/finalize.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("finalize.sh"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Build output expected:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("F379A1C6.asc")]),e._v(" Sig key of Manfred Karrer")]),e._v(" "),a("li",[a("code",[e._v("5BC5ED73.asc")]),e._v(" Sig key of Chris Beams")]),e._v(" "),a("li",[a("code",[e._v("29CDFD3B.asc")]),e._v("Sig key of Christoph Atteneder")]),e._v(" "),a("li",[a("code",[e._v("signingkey.asc")]),e._v(" Fingerprint of key that was used for these builds")]),e._v(" "),a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.jar.txt")]),e._v(" Sha256 sum of deterministic fat jar")]),e._v(" "),a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.dmg")]),e._v(" macOS installer")]),e._v(" "),a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.dmg.asc")]),e._v(" Signature for macOS installer")]),e._v(" "),a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.deb")]),e._v(" Debian package")]),e._v(" "),a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.deb.asc")]),e._v(" Signature for Debian package")]),e._v(" "),a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.rpm")]),e._v(" Redhat based distro package")]),e._v(" "),a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.rpm.asc")]),e._v(" Signature for Redhat based distro package")]),e._v(" "),a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.exe")]),e._v(" Windows installer")]),e._v(" "),a("li",[a("code",[e._v("Bisq-${NEW-VERSION}.exe.asc")]),e._v(" Signature for Windows installer")])]),e._v(" "),a("ul",[a("li",[e._v("Run a AV scan over all files on the Windows VM where the files got copied over.")])]),e._v(" "),a("h3",{attrs:{id:"final-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final-test"}},[e._v("#")]),e._v(" Final test")]),e._v(" "),a("ul",[a("li",[e._v("Make at least one mainnet test trade with some exotic currency to not interfere with real traders.")])]),e._v(" "),a("h3",{attrs:{id:"tag-and-push-release-to-master"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tag-and-push-release-to-master"}},[e._v("#")]),e._v(" Tag and push release to master")]),e._v(" "),a("p",[e._v("If all was successful:")]),e._v(" "),a("ul",[a("li",[e._v("commit changes of new version number (update version number for release of e.g. v0.9.4)")]),e._v(" "),a("li",[e._v("create tag for the release")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    git tag -s v(new version,  e.g. 0.9.4) -m"Release v(new version, e.g. 0.9.4)"\n')])])]),a("ul",[a("li",[e._v("Revert back to SNAPSHOT where necessary (change version variable (e.g. 0.9.4) in shell script "),a("a",{attrs:{href:"https://github.com/bisq-network/bisq/blob/master/desktop/package/macosx/insert_snapshot_version.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("insert_snapshot_version.sh"),a("OutboundLink")],1),e._v(" and run it) and commit these changes.")]),e._v(" "),a("li",[e._v("Push all commits to master including the new tag")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    git push --tags origin master\n")])])]),a("h3",{attrs:{id:"github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[e._v("#")]),e._v(" GitHub")]),e._v(" "),a("h4",{attrs:{id:"upload-preparations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-preparations"}},[e._v("#")]),e._v(" Upload preparations")]),e._v(" "),a("ul",[a("li",[e._v("Check the fingerprint of the pgp key which was used for signing in signingkey.asc (e.g. 29CDFD3B for Christoph Atteneder)")]),e._v(" "),a("li",[e._v("Add all files including signingkey.asc and the gpg pub keys to GitHub release page")]),e._v(" "),a("li",[e._v("Check all uploaded files with "),a("a",{attrs:{href:"https://www.virustotal.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("virustotal.com"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Select the release tag as the source for the GitHub release.")]),e._v(" "),a("li",[e._v("Release on GitHub")])]),e._v(" "),a("h4",{attrs:{id:"post-github-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-github-release"}},[e._v("#")]),e._v(" Post GitHub release")]),e._v(" "),a("ul",[a("li",[e._v("Apply “A newer version is already available! Please don’t use this version anymore.” to old GitHub releases.")]),e._v(" "),a("li",[e._v("Merge the webpage PR and check if they got deployed properly.")]),e._v(" "),a("li",[e._v("Start the Alert sender app (CMD + M)  remove the old version and send the update message.\nCheck the checkbox for update, set the version number (e.g. 0.9.4) and add the short version of the release notes.")]),e._v(" "),a("li",[e._v("After sending the Update message leave it running for about 1 minute to give time for good propagation.")]),e._v(" "),a("li",[e._v("Make a backup of that alert sender app data directory")])]),e._v(" "),a("h3",{attrs:{id:"announce-the-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#announce-the-release"}},[e._v("#")]),e._v(" Announce the release")]),e._v(" "),a("ul",[a("li",[e._v("Forum")]),e._v(" "),a("li",[e._v("Slack (#general channel)")]),e._v(" "),a("li",[e._v("Twitter")]),e._v(" "),a("li",[e._v("Optionally reddit /r/Bisq")]),e._v(" "),a("li",[e._v("Notify @freimair so that he can start updating "),a("a",{attrs:{href:"https://aur.archlinux.org/cgit/aur.git/tree/PKGBUILD?h=bisq-git",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Arch User Repository"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Celebrate")])])])}),[],!1,null,null,null);t.default=s.exports}}]);