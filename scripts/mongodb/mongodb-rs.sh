#!/usr/bin/env bash
#set -x #echo on

args="$@"

docker-compose up -d $args
 
sleep 5

## checks if the hostnames are already in the /etc/hosts file if not adds them
grep -qxF '172.20.0.2 mongodb' /etc/hosts || echo '172.20.0.2 mongo' | sudo tee -a /etc/hosts


docker exec mongodb ./scripts/rs-init.sh
