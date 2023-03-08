# Setup Elm GitHub Action

This action sets up an Elm environment to use with projects requiring Elm. It allows you to use the `elm` command in your workflow.

This GitHub Action is only compatible with Elm 0.19.0 and onwards (and therefore, incompatible with Elm 0.18.0 and below).

# Usage

See [action.yml](action.yml)

Basic:

```yaml
steps:
- uses: jorelali/setup-elm@v3
  with:
    elm-version: 0.19.1
- run: elm make src/Main.elm
```

Running as root (this won't run `sudo` when moving the elm binary):

```yaml
steps:
- uses: jorelali/setup-elm@v3
  with:
    elm-version: 0.19.1
    run-as-root: true
- run: elm make src/Main.elm
```

This option is useful when the GH Action job is using a custom container running in root, such as the Cypress browser containers. You probably won't use this very often!

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
