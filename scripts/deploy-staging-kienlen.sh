#!/bin/bash

# Fail the build on any failed command
set -e
mkdir -p $HOME/.ssh
git config --global user.email "dev-team@integritystl.com"
git config --global user.name "Automated Deployment"
ssh-keyscan -H 45.79.171.150 >> $HOME/.ssh/known_hosts
ssh-keyscan -H git.wpengine.com >> $HOME/.ssh/known_hosts
echo -e $PRIVATE_SSH_KEY >> $HOME/.ssh/id_rsa
chmod 600 $HOME/.ssh/id_rsa
ssh -vvv git@git.wpengine.com info
git remote add staging git@git.wpengine.com:staging/kienlen.git
git push staging develop
