#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-helper-3889-5959/WebFrontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

