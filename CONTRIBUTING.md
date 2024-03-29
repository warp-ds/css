# Contributing to @warp-ds/css

Welcome to the [@warp-ds/css](https://github.com/warp-ds/css) repository!
We're glad you're interested in contributing.

This repository is maintained by the [Warp Core Team](https://github.com/orgs/warp-ds/teams/warp-core-team)
and is home to the [@warp-ds/css](https://www.npmjs.com/package/@warp-ds/css),
which for now only consist of a set of required resets based on the
[Warp Design System](https://github.com/warp-ds/).

To get an overview of the project, read the [README](README.md).

## Development Setup

To get started with developing [@warp-ds/css](https://github.com/warp-ds/css), follow the instructions below.
This will walk you through setting up your development environment.

### Cloning the repository

Start by cloning the repository to your dev environment by running:

```sh
git clone https://github.com/warp-ds/css
```

### pnpm

We use [pnpm](https://pnpm.io/) as package manager for Node.js.
Install it by running:

```sh
npm install -g pnpm
```

### Dependencies

Install dependencies by running:

```sh
pnpm install
```

## Contributing

### Branching

There are two branches to keep in mind:
- `next` : default, used for pre-releases.
- `main` : the main branch, used for stable releases.

When adding a new feature, fixing a bug, or adding to the repository in any other way,
you should always do this in a feature branch that is branched off the `next` branch.

### Committing

It is important to follow [Conventional Commits](https://www.conventionalcommits.org/) when making changes ([Commitizen](#commitizen) to the rescue),
as this is used in the [automated release process](#releases).

### Pull Request

When your changes are ready for pull request, this should be opened against the `next` branch.
Add the [Warp Core Team](https://github.com/orgs/warp-ds/teams/warp-core-team) as reviewer.

Pull request to the `next` branch should always be set to _squash_.
Make sure that the squash commit message follows the instructions in the [Committing](#committing) section before squash merging the pull request.

### Commitizen

We use [commitizen](https://github.com/commitizen/cz-cli) to ensure coherent commit message structure.
This is used to automatically generate change logs and handle versioning when [releasing](#releases).

```sh
npm install -g commitizen
```

When installed, you should be able to type `cz` or `git cz` in your terminal to commit your changes (replacing
`git commit`).

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

## Releases

This project uses [Semantic Release](https://github.com/semantic-release/semantic-release) to automate package
publishing when making changes to the `main` or `next` branch.

Please note that the version published will depend on your commit message structure.
Make sure to review and follow the instructions in the [Committing](#committing) section before committing.

This project is continuously published to [NPM](https://www.npmjs.com/package/@warp-ds/drive) and [Eik](https://assets.finn.no/pkg/@warp-ds/css) using a `next` tag (e.g. `1.1.0-next.1`).
Anyone needing to use the latest changes of this package can point to the `next` version while waiting for the stable release.

A stable release from the `main` branch is basically done by just opening a pull request from `next` to `main` and then make sure to _merge_ commit the pull request.
Never squash to `main` to prevent losing history and commit messages from all commits to `next`.

To avoid git history divergence between `next` and `main`,
when a stable release from `main` results in a semantic-release-bot commit being pushed to `main`,
a GitHub action automatically rebase `next` to `origin/main` after every release from `main`.

( For reference, see this rfc in Fabric-ds: [RFC: Fabric Releases and Release Schedule](https://github.com/fabric-ds/issues/blob/779d59723993c13d62374516259602d967da56ca/rfcs/0004-releases.md) )

## License

@warp-ds/css is [Apache-2.0 licensed](https://github.com/warp-ds/css/blob/main/LICENSE).
By contributing to @warp-ds/css, you agree that your contributions will be licensed under its Apache-2.0 license.
