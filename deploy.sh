#!/bin/bash
set -e

echo_and_run() { echo "\$ $@" ; "$@" ; }

read -e -p "Heroku app name: " APP_NAME
read -e -p "Custom Domain: " CUSTOM_DOMAIN

CUSTOM_SUBDOMAIN=$(echo CUSTOM_DOMAIN | sed 's/\..*//g')
CUSTOM_URL="http://$CUSTOM_DOMAIN/"

echo_and_run heroku create $APP_NAME --addons heroku-postgresql:dev

HEROKU_URL=$(heroku info -s | grep web_url | sed 's/.*=//g')
HEROKU_DOMAIN=$(basename $HEROKU_URL)

echo_and_run heroku config:set PGSSLMODE=require


if [ "$CUSTOM_DOMAIN" != "" ]
then
    echo_and_run heroku domains:add $CUSTOM_DOMAIN
    echo "add CNAME for $CUSTOM_SUBDOMAIN -> $HEROKU_DOMAIN"
    echo_and_run heroku config:set "web_url=$CUSTOM_URL"
else
    echo_and_run heroku config:set "web_url=$HEROKU_URL"
fi

echo_and_run git push heroku master
