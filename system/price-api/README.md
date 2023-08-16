price-api
=======

App used to get prices for destinations

Address: `http://api.paulahage.com:8003`


- [GET] `/getCurrent`
    - request header:
        - `Authorization`: Bearer token got from `http://api.paulahage.com:8001` authentication
    - response body:
        - list of locations with current prices that can have discount
- [GET] `/getFull`
    - request header:
        - `Authorization`: Bearer token got from `http://api.paulahage.com:8001` authentication
    - response body:
        - list of locations with full prices