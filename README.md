# Savvy #

Savvy is a web-based service that provides location centric price information of goods and services.

### Details ###

|               |                                            |
| ------------- | ------------------------------------------ |
| Version       | v0.1                                       |
| Documentation | http://example.com                         |
| Source Code   | https://bitbucket.org/wjashman/savvy/      |

### Installation ###

* Frontend

Run env.sh
env.sh will auto install brew, node, npm modules, all dependencies, and clone the repo to your current directory

Run "gulp" to activate the gulp task manager, will auto concatenate and minify all JS as well as watch for any changes
gulp will also compile all SASS

If you want to run specific gulp tasks, run "gulp <<TASK NAME>>"

Run npm run server to start the local server. The local server will watch for any changes

### Contribution guidelines ###

* All indents should be 4 spaces, NO TABS, seriously don't use tabs.

### Examples ###

    Search for coffee:

    Client      ============================================>>>>    Server
            http://besavvy.xyz/api/v1/products/search?query=coffee

    Client      <<<<============================================    Server
            HTTP 200 OK:
            [
                {
                    product_id: 1235,
                    description: "Large Coffee",
                    tags: ["coffee", "drinks", "caffeine"]
                },
                {
                    product_id: 113,
                    description: "Jumbo Coffee",
                    tags: ["coffee", "drinks", "caffeine", "fat"]
                },
                {
                    product_id: 134,
                    description: "Large Decaf Coffee",
                    tags: ["coffee", "drinks", "caffeine"]
                },
                {
                    product_id: 2842,
                    description: "Decaf Coffee",
                    tags: ["coffee", "drinks", "caffeine"]
                },
                {
                    ...
                }
            ]
