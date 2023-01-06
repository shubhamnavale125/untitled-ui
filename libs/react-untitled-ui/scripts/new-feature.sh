#!/bin/sh
node ./scripts/generate/generate.js

echo "ℹ️  add new component to src/components/modules.ts"
echo "⋮"
echo "import * as newComponentX from './newComponentX';"
echo "⋮"
echo "['newComponentX', newComponentX],"
echo "⋮"
echo "ℹ️  add new components to storybook/stories/index.ts"
echo "⋮"
echo "import './components/newComponentX/NewComponentX.stories';"
echo "⋮"
