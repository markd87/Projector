#! /bin/bash

# Hasura docker container

docker run -d -p 8080:8080 \
       -e HASURA_GRAPHQL_DATABASE_URL=postgres://postgres:projector123@host.docker.internal:5432/projector_db \
       -e HASURA_GRAPHQL_ENABLE_CONSOLE=true \
       -e HASURA_GRAPHQL_DEV_MODE=true \
       -e HASURA_GRAPHQL_ADMIN_SECRET=myadminsecretkey \
       hasura/graphql-engine:v1.3.0
