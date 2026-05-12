#!/usr/bin/env bash
set -euo pipefail

ZIZMOR_VERSION="1.24.1"
REPO_ROOT="$(git rev-parse --show-toplevel)"

docker run --rm --network none \
    -v "${REPO_ROOT}/.github:/repo/.github" \
    "ghcr.io/zizmorcore/zizmor:${ZIZMOR_VERSION}" \
    --offline --config /repo/.github/zizmor.yml /repo
