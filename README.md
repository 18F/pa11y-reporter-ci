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

## Travis-CI Integration

```yaml
before_script:
  - npm i -g http-server pa11y pa11y-reporter-ci

script: 
  - nohup http-server -p 8080 >/dev/null 2>&1 &
  - pa11y localhost:8080/index.html -r ci -s WCAG2AAA
```

# Public domain

This project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.
