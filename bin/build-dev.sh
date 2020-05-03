#!/bin/bash

DIR=$PWD

cd $DIR/packages/renderer
npm run build:dev

cd $DIR/packages/frontend

npm install
npm run build