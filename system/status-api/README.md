status-api
=======

App used to retrieve the destination status

Address: `http://api.paulahage.com:8004`


- [GET] `/get`
    - request header:
        - `Authorization`: Bearer token got from `http://api.paulahage.com:8001` authentication
    - query parameters:
        - `destinationId`: destinationId
    - response body:
        - code of destination status:
            - 0: available
            - 1: maintenance
            - 2: shutdown