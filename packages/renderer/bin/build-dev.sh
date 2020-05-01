#!/bin/bash

rm -rf dist/
mkdir dist
cp package.json dist/
npm run compile:dev