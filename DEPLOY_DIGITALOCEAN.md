# Reconnect PantryPilot to DigitalOcean

This app is a static site. It does not need a Droplet to run.

The simplest recovery path is DigitalOcean App Platform:

1. Push this repo to GitHub so DigitalOcean can deploy the latest version.
2. In DigitalOcean, go to `Create -> App Platform`.
3. Choose GitHub as the source and select `babfro-cyber/recipe-book`, branch `main`.
4. If DigitalOcean asks for manual settings, use:
   - Component type: `Static Site`
   - Source directory: `/`
   - Build command: `sh scripts/build-static-site.sh`
   - Output directory: `dist`
5. Deploy the app.
6. If you used a custom domain before, attach the same domain to the new app.

## Why reuse the same domain

This planner stores data in the browser with `localStorage`.

If you serve it again from the same domain, your browser should keep seeing the same saved plans.
If you switch to a different domain or subdomain, the app will open with empty local data.

## CLI option

If you prefer the CLI, install `doctl` and create the app from the included spec:

```sh
brew install doctl
doctl auth init
doctl apps create --spec .do/app.yaml
```

## Files added for deployment

- `.do/app.yaml`: App Platform spec for this repo.
- `scripts/build-static-site.sh`: Copies the site into `dist/` for deployment.

## Local verification

You can test the packaged static output locally:

```sh
sh scripts/build-static-site.sh
python3 -m http.server 5500 -d dist
```
