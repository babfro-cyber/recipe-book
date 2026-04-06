#!/bin/sh

set -eu

DIST_DIR="${1:-dist}"

rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR"

cp index.html "$DIST_DIR"/
cp styles.css "$DIST_DIR"/
cp app.js "$DIST_DIR"/
cp -R Recipes "$DIST_DIR"/Recipes

for optional_file in 404.html favicon.ico favicon.png favicon.svg; do
  if [ -e "$optional_file" ]; then
    cp -R "$optional_file" "$DIST_DIR"/
  fi
done

find "$DIST_DIR" -name '.DS_Store' -delete
