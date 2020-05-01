#!/bin/bash

DIR=$PWD

cd $DIR/packages/renderer
npm run build:dev

cd $DIR/packages/frontend

cp -r $DIR/assets $DIR/packages/frontend/src/

npm install
npm run build