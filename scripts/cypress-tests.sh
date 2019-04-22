#!/usr/bin/env bash

EXIT_CODE=0

trap './node_modules/.bin/kill-port 3001; exit ${EXIT_CODE}' EXIT

npm run start-cypress \
& ./node_modules/.bin/wait-on http://localhost:3001 \
    && NODE_ENV=development ./node_modules/.bin/cypress $@;

EXIT_CODE=$?
