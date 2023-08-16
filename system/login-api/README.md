login-api
=======

App used to login and retrieve token for further usages in another APIs

Address: `http://api.paulahage.com:8001`


- [GET] `/authorize`
    - request query params:
        - `secret_client_id`: Secret use to identify the caller. DO NOT expose it to the public.
            - Your secret id: `4562476697`
        - `redirect_uri` URL that login will be called after authentication
    - response query parameter:
        - `jwt`: JWT token, containing:
            - `user_id`: Unique identifier to distinguish the user in your system
            - `token_id`: Token to be used to call other APIs