Example URLs:

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
