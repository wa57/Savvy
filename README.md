# Savvy #

Savvy is a web-based service that provides location centric price information of goods and services.

### Details ###

|               |                                            |
| ------------- | ------------------------------------------ |
| Version       | v0.1                                       |
| Documentation | http://example.com                         |
| Source Code   | https://bitbucket.org/wjashman/savvy/      |

### Installation ###

* No Information

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
