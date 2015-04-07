# pa11y-reporter-ci

A CI-centric reporter for pa11y.

This library returns exit code 1 (tests fail) when there are more than zero errors, and exit code 0 when there are zero errors (tests pass).

## Installation

Requires [pa11y](https://github.com/nature/pa11y): `[sudo] npm install -g pa11y`.

```
[sudo] npm install -g pa11y-reporter-ci
```

## Usage

```
pa11y https://18f.gsa.gov -r ci
```

See [pa11y's documentation](https://github.com/nature/pa11y#custom-reporters) for more information.

# Public domain

This project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.
