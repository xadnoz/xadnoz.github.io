(window.webpackJsonp=window.webpackJsonp||[]).push([[777],{1201:function(e,t,s){"use strict";s.r(t);var n=s(42),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("You might want to host a node on one server and then connect to it from a UI hosted on another, e.g. "),s("a",{attrs:{href:"https://polkadot.js.org/apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("PolakdotJS UI"),s("OutboundLink")],1),e._v(". This will not be possible unless you set up a secure proxy for websocket connections. Let's see how we can set up WSS on a remote Substrate node.")]),e._v(" "),s("p",[s("em",[e._v("Note: this should "),s("strong",[e._v("only")]),e._v(" be done for sync nodes used as back-end for some dapps or projects. Never open websockets to your validator node - there's no reason to do that and it can only lead to security gaffes!")])]),e._v(" "),s("p",[e._v("In this guide we'll be using Ubuntu 18.04 hosted on a $10 DigitalOcean droplet. We'll assume you're using a similar OS, and that you have nginx installed (if not, run "),s("code",[e._v("sudo apt-get install nginx")]),e._v(").")]),e._v(" "),s("h2",{attrs:{id:"set-up-a-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-a-node"}},[e._v("#")]),e._v(" Set up a node")]),e._v(" "),s("p",[e._v("Whether it's a generic Substrate node, a Kusama node, or your own private blockchain, they all default to the same websocket connection: port 9944 on localhost. For this example, we'll set up a Kusama sync node (non-validator).")]),e._v(" "),s("p",[e._v("Create a new server on your provider of choice or locally at home (preferred). We'll assume you're using Ubuntu 18.04. Then install Substrate and build the node.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://getsubstrate.io -sSf "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/paritytech/polkadot kusama\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" kusama\n./scripts/init.sh\ncargo build --release\n/target/release/polkadot --name "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"DigitalOcean 10 USD droplet ftw"')]),e._v(" --rpc-cors all\n")])])]),s("p",[e._v("This will start the syncing process with Kusama's mainnet.")]),e._v(" "),s("p",[s("em",[e._v("Note: the "),s("code",[e._v("--rpc-cors")]),e._v(" mode needs to be set to all so that all external connections are allowed.")])]),e._v(" "),s("h2",{attrs:{id:"set-up-a-certificate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-a-certificate"}},[e._v("#")]),e._v(" Set up a certificate")]),e._v(" "),s("p",[e._v("To get WSS (secure websocket), you need an SSL certificate. There are two possible approaches.")]),e._v(" "),s("h3",{attrs:{id:"domain-and-certbot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#domain-and-certbot"}},[e._v("#")]),e._v(" Domain and Certbot")]),e._v(" "),s("p",[e._v("The first approach is getting a dedicated domain, redirecting its nameservers to your IP address, setting up an Nginx server for that domain, and finally "),s("a",{attrs:{href:"https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("following LetsEncrypt instructions"),s("OutboundLink")],1),e._v(" for Nginx setup. This will auto-generate an SSL certificate and include it in your Nginx configuration. This will let you connect PolkadotJS UI to a URL like mynode.mydomain.com rather than 82.196.8.192:9944, which is arguably more user friendly.")]),e._v(" "),s("p",[e._v("This is simple to do on cloud hosting providers or if you have a static IP, but harder to pull off when running things from your home server.")]),e._v(" "),s("h3",{attrs:{id:"self-signed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#self-signed"}},[e._v("#")]),e._v(" Self-signed")]),e._v(" "),s("p",[e._v("The second approach and one we'll follow here is generating a self-signed certificate and relying on the raw IP address of your node when connecting to it.")]),e._v(" "),s("p",[e._v("Generate a self-signed certificate.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" openssl req -x509 -nodes -days "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("365")]),e._v(" -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" openssl dhparam -out /etc/ssl/certs/dhparam.pem "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2048")]),e._v("\n")])])]),s("h2",{attrs:{id:"set-up-nginx-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-nginx-server"}},[e._v("#")]),e._v(" Set up Nginx server")]),e._v(" "),s("p",[e._v("Now it's time to tell Nginx to use these certificates. The server block below is all you need, but keep in mind that you need to replace some placeholder values. Notably:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("SERVER_ADDRESS")]),e._v(" should be replaced by your domain name if you have it, or your server's IP address if not.")]),e._v(" "),s("li",[s("code",[e._v("CERT_LOCATION")]),e._v(" should be "),s("code",[e._v("/etc/letsencrypt/live/YOUR_DOMAIN/fullchain.pem")]),e._v(" if you used Certbot, or "),s("code",[e._v("/etc/ssl/certs/nginx-selfsigned.crt")]),e._v(" if self-signed.")]),e._v(" "),s("li",[s("code",[e._v("CERT_LOCATION_KEY")]),e._v(" should be "),s("code",[e._v("/etc/letsencrypt/live/YOUR_DOMAIN/privkey.pem;")]),e._v(" if you used Certbot, or "),s("code",[e._v("/etc/ssl/private/nginx-selfsigned.key")]),e._v(" if self-signed.")]),e._v(" "),s("li",[s("code",[e._v("CERT_DHPARAM")]),e._v(" should be "),s("code",[e._v("/etc/letsencrypt/ssl-dhparams.pem")]),e._v(" if you used Certbot, and "),s("code",[e._v("/etc/ssl/certs/dhparam.pem")]),e._v(" if self-signed.")])]),e._v(" "),s("p",[s("em",[e._v("Note that if you used Certbot, it should have made the path insertions below for you if you followed the "),s("a",{attrs:{href:"https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("official instructions"),s("OutboundLink")],1)])]),e._v(" "),s("div",{staticClass:"language-conf extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('server {\n\n        server_name SERVER_ADDRESS;\n\n        root /var/www/node;\n        index index.html;\n\n        location / {\n          try_files $uri $uri/ =404;\n\n          proxy_pass http://localhost:9944;\n          proxy_set_header X-Real-IP $remote_addr;\n          proxy_set_header Host $host;\n          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\n          proxy_http_version 1.1;\n          proxy_set_header Upgrade $http_upgrade;\n          proxy_set_header Connection "upgrade";\n        }\n\n        listen [::]:443 ssl ipv6only=on;\n        listen 443 ssl;\n        ssl_certificate CERT_LOCATION;\n        ssl_certificate_key CERT_LOCATION_KEY;\n\n        ssl_session_cache shared:cache_nginx_SSL:1m;\n        ssl_session_timeout 1440m;\n\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n        ssl_prefer_server_ciphers on;\n\n        ssl_ciphers "ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:ECDHE-ECDSA-DES-CBC3-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:DES-CBC3-SHA:!DSS";\n\n        ssl_dhparam CERT_DHPARAM;\n\n}\n')])])]),s("p",[e._v("Restart nginx after setting this up: "),s("code",[e._v("sudo service nginx restart")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"connecting-to-the-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-the-node"}},[e._v("#")]),e._v(" Connecting to the node")]),e._v(" "),s("p",[e._v("Open "),s("a",{attrs:{href:"https://polkadot.js.org/apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("PolkadotJS UI"),s("OutboundLink")],1),e._v(' and click the logo in the top left to switch node. Activate the "Custom Endpoint" toggle and input your node\'s address - either the domain or the IP address. Remember to prefix with '),s("code",[e._v("wss://")]),e._v("!")]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/wss/wss01.jpg",alt:"A sync-in-progress chain connected to Polkadot UI"}})]),e._v(" "),s("p",[e._v("Congratulations - you have a secure remote connect setup for your Substrate node.")])])}),[],!1,null,null,null);t.default=o.exports}}]);