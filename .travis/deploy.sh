#!/usr/bin/env sh
set -x

rsync -avPh --delete build/ -e ssh $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR