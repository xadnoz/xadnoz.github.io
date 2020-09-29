(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1191:function(e,t,o){"use strict";o.r(t);var a=o(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("The following guide will walk you through using "),o("a",{attrs:{href:"https://github.com/w3f/polkadot-secure-validator",target:"_blank",rel:"noopener noreferrer"}},[e._v("polkadot secure validator"),o("OutboundLink")],1),e._v(" to deploy your\nvalidator in a secure way. It will work for Kusama (and later Polkadot) out of the box, and if\nyou're using another Substrate-based chain, should work with some tweaking. We assume you will be\ndeploying on Kusama.")]),e._v(" "),o("p",[e._v("It uses Terraform for defining and managing your infrastructure. Ansible, an automation tool, is\nused for setting up the VPN, Firewall, and the validator node. It supports a few different cloud\nproviders such as AWS, Microsoft Azure, GCP, and Packet. The code is publicly hosted on GitHub, so\nplease file an "),o("a",{attrs:{href:"https://github.com/w3f/polkadot-secure-validator/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),o("OutboundLink")],1),e._v(" if you would like to make a feature request or report a bug.")]),e._v(" "),o("h2",{attrs:{id:"dependencies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),o("p",[e._v("The next step is to install the software dependencies for running the secure validator scripts. We\nwill need to acquire NodeJS, Yarn, Terraform, and Ansible. Usually these are readily available using\nyour operating system's package manager. Instructions may vary depending on which system you are on,\nthe instructions below demonstrate the commands for a user of a Debian or Ubuntu based system.")]),e._v(" "),o("h3",{attrs:{id:"nodejs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nodejs"}},[e._v("#")]),e._v(" NodeJS")]),e._v(" "),o("p",[e._v("We recommend using "),o("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm"),o("OutboundLink")],1),e._v(" as a tool to manage different NodeJS versions across projects.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("sudo apt-get install curl\ncurl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -\nsudo apt-get install nodejs\nnode -v  (Check your node version)\n")])])]),o("h3",{attrs:{id:"yarn"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[e._v("#")]),e._v(" Yarn")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -\necho "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list\nsudo apt update\nsudo apt install yarn\n')])])]),o("h3",{attrs:{id:"terraform"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#terraform"}},[e._v("#")]),e._v(" Terraform")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("sudo apt-get install unzip\nwget https://releases.hashicorp.com/terraform/0.12.16/terraform_0.12.16_linux_amd64.zip\nunzip terraform_0.12.16_linux_amd64.zip\nsudo mv terraform /usr/local/bin/\nterraform --version  (Check whether it is configured properly)\n")])])]),o("h3",{attrs:{id:"ansible"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ansible"}},[e._v("#")]),e._v(" Ansible")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("sudo apt-add-repository ppa:ansible/ansible\nsudo apt-get update\nsudo apt-get install ansible -y\nsudo apt-get install python -y\n")])])]),o("h2",{attrs:{id:"deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),o("h3",{attrs:{id:"step-one-clone-the-repository"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-one-clone-the-repository"}},[e._v("#")]),e._v(" Step One: Clone the repository")]),e._v(" "),o("p",[e._v("The first step is to clone the "),o("code",[e._v("polkadot-secure-validator")]),e._v(" guide locally.")]),e._v(" "),o("div",{staticClass:"language-zsh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ git clone git@github.com:w3f/polkadot-secure-validator.git\n")])])]),o("p",[e._v("Now you can "),o("code",[e._v("cd")]),e._v(" into the "),o("code",[e._v("polkadot-secure-validator")]),e._v(" directory and start to change the\nconfigurations to match your custom deployment. However, before we start tweaking those, let's start\nby creating two new SSH keys that we (or rather, the ansible playbooks) will use to access the\nmachines.")]),e._v(" "),o("h3",{attrs:{id:"step-two-generate-the-ssh-keys"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-two-generate-the-ssh-keys"}},[e._v("#")]),e._v(" Step Two: Generate the SSH keys")]),e._v(" "),o("p",[e._v("We will use "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Secure_Shell",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSH"),o("OutboundLink")],1),e._v(", a remote shell tool, to access our validator and public sentry nodes. You will\nfirst use the "),o("code",[e._v("ssh-keygen")]),e._v(" command to generate two keys, one for your validator and one for the\nsentry nodes.")]),e._v(" "),o("div",{staticClass:"language-zsh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ ssh-keygen -m pem -f id_rsa_validator\n$ ssh-keygen -m pem -f id_rsa_public\n")])])]),o("p",[e._v("Be sure to add these keys to your SSH agent. First make sure your SSH agent is evaluated, then add\nthe keys to them.")]),e._v(" "),o("div",{staticClass:"language-zsh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ eval $(ssh-agent)\n$ ssh-add id_rsa_validator\n$ ssh-add id_rsa_public\n")])])]),o("p",[e._v("For this tutorial we will not set a passphrase for the SSH key, although usually that would be\nrecommended.")]),e._v(" "),o("h3",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),o("p",[e._v("After you have installed all the required software and made your ssh keys, you can start to\nconfigure your infrastructure deployment by following the instructions. Start by cloning the\n"),o("code",[e._v("polkadot-secure-validator")]),e._v(" repository locally, and installing the package dependencies. Then\ncustomize the configuration how you want it.")]),e._v(" "),o("p",[e._v("First run yarn to install the NodeJS dependencies:")]),e._v(" "),o("div",{staticClass:"language-zsh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ yarn\n")])])]),o("p",[e._v("Now you can copy the configuration sample and start to cutomize it.")]),e._v(" "),o("div",{staticClass:"language-zsh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ cp config/main.sample.json config/main.json\n# now you should customize config/main.json\n")])])]),o("p",[e._v("Under "),o("code",[e._v("validators")]),e._v(" and "),o("code",[e._v("publicNodes")]),e._v(", specify which cloud provider you want to use, the type of\nmachine specification, the number of validators you are going to deploy, the machine location, and\nthe user to use for SSH.")]),e._v(" "),o("h4",{attrs:{id:"getting-the-authorization-keys"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-authorization-keys"}},[e._v("#")]),e._v(" Getting the authorization keys")]),e._v(" "),o("p",[e._v("The secure validator set up supports Google Cloud, AWS, Microsoft Azure, and Packet. For this\ntutorial we will be using Google Cloud.")]),e._v(" "),o("h5",{attrs:{id:"log-in-to-the-google-cloud-console"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#log-in-to-the-google-cloud-console"}},[e._v("#")]),e._v(" Log in to the Google Cloud console")]),e._v(" "),o("p",[e._v("You will need to log in to the google cloud console in order to access your authorization keys.")]),e._v(" "),o("p",[e._v("In the IAM&Admin panel you will navigate to service accounts. Download JSON for service account key.")]),e._v(" "),o("p",[e._v("Make sure to also auth into your account like so:")]),e._v(" "),o("div",{staticClass:"language-zsh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ gcloud auth login\n")])])]),o("p",[e._v("And don't forget to enable the compute engine!")]),e._v(" "),o("h4",{attrs:{id:"configuration-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[e._v("#")]),e._v(" Configuration Options")]),e._v(" "),o("p",[e._v("The other options can be mostly self explanatory. Here's some tips on what they are and how you can\nuse them:")]),e._v(" "),o("p",[e._v("In the "),o("code",[e._v("additionalFlags")]),e._v(" option, configure any of the additional flags you want to run for your\nvalidator. If you want to run with a specific name, this is where you would enter it.")]),e._v(" "),o("p",[e._v("Under the "),o("code",[e._v("polkadotBinary.url")]),e._v(" field you can provide the release that is hosted in the "),o("a",{attrs:{href:"https://github.com/w3f/polkadot/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3F\nrepository"),o("OutboundLink")],1),e._v(" or use an alternate one that you build and publish yourself.")]),e._v(" "),o("p",[e._v("By enabling the "),o("code",[e._v("nodeExporter")]),e._v(", Ansible will install and configure the "),o("a",{attrs:{href:"https://github.com/prometheus/node_exporter",target:"_blank",rel:"noopener noreferrer"}},[e._v("node_exporter"),o("OutboundLink")],1),e._v(" which will\nexpose hardware-level metrics of your node in a format compatible with Prometheus.")]),e._v(" "),o("p",[e._v("The field "),o("code",[e._v("machineType:")]),e._v(" will configure the machine's hardware specifications, check\n"),o("a",{attrs:{href:"https://cloud.google.com/compute/docs/machine-types",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" for the configuration options for GCP. The other hosting providers should\nhave similar pages in their documentation.")]),e._v(" "),o("p",[e._v("Under "),o("code",[e._v("provider")]),e._v(" the option are "),o("code",[e._v("gcp")]),e._v(" (Google Cloud Provider), "),o("code",[e._v("aws")]),e._v(" (AWS), "),o("code",[e._v("azure")]),e._v(" (Microsoft\nAzure) and "),o("code",[e._v("packet")]),e._v(" for Packet.")]),e._v(" "),o("p",[e._v("The field "),o("code",[e._v("count")]),e._v(" is the number of instances you would like to create.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("location")]),e._v(" and "),o("code",[e._v("zone")]),e._v(" fields are for the location of the machine, for GCP check\n"),o("a",{attrs:{href:"https://cloud.google.com/compute/docs/regions-zones/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(", other cloud providers will have similar documentation.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("telemetryUrl")]),e._v(" field will send your node's information to a specific telemetry server. You could\nsend all your nodes' data (e.g. IP address) to the public endpoint, but it is highly recommended\nthat that you set up your own telemetry server to protect your validator’s data from being exposed\nto the public. If you want to do that, see "),o("a",{attrs:{href:"https://github.com/paritytech/substrate-telemetry",target:"_blank",rel:"noopener noreferrer"}},[e._v("substrate telemetry source"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("blockquote",[o("p",[e._v("NOTE: If you decided to send your node’s information to public telemetry, the name for your\nvalidator and public node that is displayed on the telemetry would look something like\n"),o("code",[e._v("PROJECT_NAME-sv-public-0")]),e._v(" / "),o("code",[e._v("PROJECT_NAME-sv-validator-0")]),e._v(".")])]),e._v(" "),o("p",[e._v("Configure "),o("code",[e._v("projectId")]),e._v(" to be the name of the project you want to use in GCP.")]),e._v(" "),o("p",[e._v("Configure "),o("code",[e._v("sshUser")]),e._v(" to be the user that manages your machine.")]),e._v(" "),o("p",[e._v("For different cloud providers, you need to set the corresponding credentials as environment\nvariables, for example, on GCP you only need to set "),o("code",[e._v("GOOGLE_APPLICATION_CREDENTIALS")]),e._v(". This variable\nis the path to the JSON file containing the credentials of the service account you wish to use; this\nservice account needs to have write access to compute and network resources if you use GCP. For\nothers, you can check that by referring to the "),o("a",{attrs:{href:"https://github.com/w3f/polkadot-secure-validator#prerequisites",target:"_blank",rel:"noopener noreferrer"}},[e._v("README"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Besides that, you need two additional environment variables that will allow Ansible to connect to\nthe created machines. These values of these variables will be the keys that you generated at the\nbeginning of the guide.")]),e._v(" "),o("blockquote",[o("p",[o("code",[e._v("SSH_ID_RSA_PUBLIC")]),e._v(" - Path to private SSH key you want to use for the public nodes.")])]),e._v(" "),o("blockquote",[o("p",[o("code",[e._v("SSH_ID_RSA_VALIDATOR")]),e._v(" - Path to private SSH key you want to use for the validator.")])]),e._v(" "),o("blockquote",[o("p",[e._v("NOTE: You will need to configure the Compute Engine API and enable billing on your GCP accounts to\nproperly run these scripts.")])]),e._v(" "),o("p",[e._v("After everything is configured properly, you can start to run the deployment with:")]),e._v(" "),o("div",{staticClass:"language-zsh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ scripts/deploy.sh\n")])])]),o("blockquote",[o("p",[e._v("NOTE: Certain steps of the process may hang, however the scripts are idempotent so you simply need\nto re-run them and")])]),e._v(" "),o("p",[e._v('When the deployment and configuration is completed, you should see some output that looks like\nwhat\'s below. You are able to find the validator’s session keys by searching for "show rotateKeys\noutput".')]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("TASK [polkadot-validator-session-info : retrieve session info] *****************\n\nok: [34.80.70.172]\n\n\nPLAY RECAP *********************************************************************\n\n34.80.224.231              : ok=41   changed=1    unreachable=0    failed=0    skipped=11   rescued=0    ignored=0\n\n34.80.70.172               : ok=49   changed=1    unreachable=0    failed=0    skipped=14   rescued=0    ignored=0\n\n35.189.183.66              : ok=41   changed=1    unreachable=0    failed=0    skipped=11   rescued=0    ignored=0\n\nDone\nDone in 131.85s.\n")])])]),o("p",[e._v("Also you can use "),o("code",[e._v("sshUser")]),e._v(" to access one of the created instances that shows above.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('TASK [polkadot-validator : show rotateKeys output] *****************************\n\nok: [34.80.70.172] => {\n    "rotate_keys": {\n        "changed": false,\n        "connection": "close",\n        "content_length": "295",\n        "content_type": "application/json; charset=utf-8",\n        "cookies": {},\n        "cookies_string": "",\n        "date": "Sun, 24 Nov 2019 12:13:42 GMT",\n        "elapsed": 0,\n        "failed": false,\n        "json": {\n            "id": 1,\n            "jsonrpc": "2.0",\n            "result": "0xf126b68841f51988b37780fa5b224b2aa86888a8d3962a63595dbc4d85baac2dee7c9900c8ddfad1991a8884e58273f06d5c1dbfc3dc6000c037185ccead9d692a3b3396cdd7e2def520682d65ad7e8ca234fb17630b428752e6150462998b4362a2b7e201657c8084ae8215bd142458ccd69506d08b18925dc897fb95f54249"\n        },\n        "msg": "OK (295 bytes)",\n        "redirected": false,\n        "status": 200,\n        "url": "http://localhost:9933"\n    }\n}\n')])])]),o("p",[e._v('The result "0xf126b68841f5…..95f54249" is your session key. Set this to your controller account in\n'),o("a",{attrs:{href:"https://polkadot.js.org/apps/#/staking/actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("polkadot-js Apps"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("After accessing one of the machines through SSH, you can keep track of the node’s status by running\n"),o("code",[e._v("journalctl --follow -u polkadot")]),e._v(", which will show the latest synced block information.")]),e._v(" "),o("p",[e._v("Every time you change something in "),o("code",[e._v("main.json")]),e._v(", you can simply run "),o("code",[e._v("./scripts/deploy.sh")]),e._v(" to update\nit.")]),e._v(" "),o("p",[e._v("Congratulations! You have successfully deployed a secure validator. Free feel to open an issue if\nyou have any suggestions.")])])}),[],!1,null,null,null);t.default=n.exports}}]);