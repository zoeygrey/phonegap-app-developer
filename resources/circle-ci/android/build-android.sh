#!/usr/bin/env bash

if [ "$(git rev-parse HEAD)" != "$(git rev-parse $(git describe --abbrev=0 --tags))" ]; then
    echo "Building adhoc release"
    npm run adhoc-android
    cordova plugin add https://github.com/timkim/wikitude-cordova-plugin.git --nofetch
else
    echo "Building Appstore release"
    npm run release-android
fi