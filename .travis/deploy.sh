#!/usr/bin/env sh
set -x

rsync -a --delete build/ -e ssh $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR