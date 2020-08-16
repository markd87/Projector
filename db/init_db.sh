#!/bin/bash

# create a database inside the postgres container
docker exec -it projector_db psql -U postgres -c "create database projector_db"
