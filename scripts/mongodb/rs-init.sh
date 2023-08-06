#!/bin/bash

mongosh <<EOF
const config = {
    "_id": "rs0",
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "mongo:27017",
            "priority": 1
        },
    ]
};
rs.initiate(config, { force: true });
rs.status();
EOF