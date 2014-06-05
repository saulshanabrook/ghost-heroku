# Deploy

```
$ ./deploy.sh
```

# Change domain after initial setup
```
$ heroku config:set "web_url=new_domain"
```

# Run Locally
```
$ npm start
```
# Downsides of hosting on Heroku
1. No image upload suport, because Heroku has an ephemeral filesystem.
   Waiting on Ghost apps support for external filesystems TryGhost/Ghost#1474
2. Maybe no themes support TryGhost/Ghost#1502
3. Postgresql isn't officially supported


# Smart things this does
1. Retrieve Herokuy PG `DATABASE_URL` straight from the environment, without
   having to break it up, like other solutions suggest. [This requires](https://github.com/brianc/node-postgres/issues/575)
   telling `node-postgresql` to use SSL by default, by setting
   `PGSSLMODE=require` in the environment.
2. Install Ghost as an NPM module so that the source is not included in the
   repo itself. This feels a lot cleaner to me. And then if you wan to update
   ghost, just change the version in package.json.

