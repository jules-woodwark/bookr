#! /bin/bash
GIT_DIR="$(git rev-parse --show-toplevel)"
#VERSION="$(cat ${GIT_DIR}/package.json | jq -r .version)"
VERSION='0.1.0'

# Remove old existing images
docker stop bookr-dev; docker rm bookr-dev

# Build a new image
docker build \
    -f "Dockerfile.dev" \
    -t "bookr-dev:${VERSION}" \
    "$GIT_DIR"

if [ $? -ne 0 ]; then
  echo "Build failed"
  exit 1
fi

# Run the container
docker run -d \
    -p 3001:3000 \
    --name=bookr-dev \
    "bookr-dev:${VERSION}"