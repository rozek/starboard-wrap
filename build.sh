#!/bin/bash

# Step 1: Compile TypeScript to JavaScript
echo "Compiling TypeScript..."
npx tsc --project tsconfig.json

# Step 2: Bundle with Rollup
echo "Bundling with Rollup..."
npx rollup -c rollup.config.js

echo "Build completed successfully!"