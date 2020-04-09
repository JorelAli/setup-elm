# Setup Elm GitHub Action

This action sets up an Elm environment to use with projects requiring Elm. It allows you to use the `elm` command in your workflow.

This GitHub Action is only compatible with Elm 0.19.0 and onwards (and therefore, incompatible with Elm 0.18.0 and below).

# Usage

See [action.yml](action.yml)

Basic:

```yaml
steps:
- uses: jorelali/setup-elm@v2
  with:
    elm-version: 0.19.1
- run: elm make src/Main.elm
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
