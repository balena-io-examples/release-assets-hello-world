# Balena Hello World with SBOM Upload Example

This repository demonstrates how to set up a GitHub Action workflow that:
1. Creates a balena release
2. Generates Software Bill of Materials (SBOM) in multiple formats
3. Uploads SBOM files as balena release assets using the `balena-io/upload-balena-release-asset` action

## Features

- Simple Node.js Express application
- Multi-architecture support via balena
- Automated SBOM generation using Syft
- SBOM upload to balena releases
- GitHub release creation with SBOM artifacts
