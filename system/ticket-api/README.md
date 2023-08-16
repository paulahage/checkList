login-api
=======

App used to login and retrieve token for further usages in another APIs

Address: `http://api.paulahage.com:8002`


- [GET] `/get`
    - request header:
        - `Authorization`: Bearer token got from `http://api.paulahage.com:8001` authentication
    - response body:
        - list of locations