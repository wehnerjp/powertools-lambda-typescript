# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.14.2](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.14.1...v1.14.2) (2023-11-03)

**Note:** Version bump only for package @aws-lambda-powertools/logger

## [1.14.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.14.0...v1.14.1) (2023-10-31)

**Note:** Version bump only for package @aws-lambda-powertools/logger

# [1.14.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.13.1...v1.14.0) (2023-09-29)

### Features

- **layers:** add `arm64` to integration test matrix ([#1720](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1720)) ([61ad5ac](https://github.com/aws-powertools/powertools-lambda-typescript/commit/61ad5ac3bcf7742684aeec28553ec294696f3301))

## [1.13.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.13.0...v1.13.1) (2023-09-21)

### Bug Fixes

- **maintenance:** remove upper peer dependency Middy ([#1705](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1705)) ([df21ec8](https://github.com/aws-powertools/powertools-lambda-typescript/commit/df21ec8761b1be511c13c28fedd41bf0e2851061))

# [1.13.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.12.1...v1.13.0) (2023-09-18)

**Note:** Version bump only for package @aws-lambda-powertools/logger

## [1.12.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.12.0...v1.12.1) (2023-07-25)

**Note:** Version bump only for package @aws-lambda-powertools/logger

# [1.12.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.11.1...v1.12.0) (2023-07-25)

### Features

- **logger:** add cause to formatted error ([#1617](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1617)) ([6a14595](https://github.com/aws-powertools/powertools-lambda-typescript/commit/6a145959249db6eeb89fdfe3ed4c6e30ab155f9c))

## [1.11.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.11.0...v1.11.1) (2023-07-11)

**Note:** Version bump only for package @aws-lambda-powertools/logger

# [1.11.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.10.0...v1.11.0) (2023-06-29)

**Note:** Version bump only for package @aws-lambda-powertools/logger

# [1.10.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.9.0...v1.10.0) (2023-06-23)

### Bug Fixes

- **idempotency:** skip persistence for optional idempotency key ([#1507](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1507)) ([b9fcef6](https://github.com/aws-powertools/powertools-lambda-typescript/commit/b9fcef66eb4bd9a7ad1eeac5f5db2cdbccc70c71))

### Features

- **logger:** clear state when other middlewares return early ([#1544](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1544)) ([d5f3f13](https://github.com/aws-powertools/powertools-lambda-typescript/commit/d5f3f13ccd7aae1bbc59431741e8aaf042dd2a73))

# [1.9.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.8.0...v1.9.0) (2023-06-09)

### Features

- **logger:** enhance log level handling ([#1476](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1476)) ([0021536](https://github.com/aws-powertools/powertools-lambda-typescript/commit/0021536e35ba7046226155055f9ab6b5f988f71f))

# [1.8.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.7.0...v1.8.0) (2023-04-07)

### Features

- **logger:** add `CRITICAL` log level ([#1399](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1399)) ([a248ff0](https://github.com/aws-powertools/powertools-lambda-typescript/commit/a248ff0a584bac5a97fe300f3addbb9c3a50b555))
- **parameters:** ability to set `maxAge` and `decrypt` via environment variables ([#1384](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1384)) ([dcf6620](https://github.com/aws-powertools/powertools-lambda-typescript/commit/dcf6620f55004b69186cd69b0c42b1cdd9fd1ce4))

# [1.7.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.6.0...v1.7.0) (2023-03-20)

### Features

- **logger:** add silent log level to suppress the emission of all logs ([#1347](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1347)) ([c82939e](https://github.com/aws-powertools/powertools-lambda-typescript/commit/c82939ebdb82ae596cbad07be397794ee4b69fe5))

# [1.6.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.5.1...v1.6.0) (2023-03-02)

### Bug Fixes

- **logger:** createChild not passing all parent's attributes ([#1267](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1267)) ([84ab4b9](https://github.com/aws-powertools/powertools-lambda-typescript/commit/84ab4b911d17d687bdbe60ded31f1e2b6860feb3))
- **logger:** middleware stores initial persistent attributes correctly ([#1329](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1329)) ([6b32304](https://github.com/aws-powertools/powertools-lambda-typescript/commit/6b3230489895dc1abdfc6ad56daeeb555fda529f))

### Features

- **logger:** make loglevel types stricter ([#1313](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1313)) ([5af51d3](https://github.com/aws-powertools/powertools-lambda-typescript/commit/5af51d319dee68d7a7ba832721580d7a6e655249))

## [1.5.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.5.0...v1.5.1) (2023-01-13)

### Bug Fixes

- **logger:** logger throws TypeError when log item has BigInt value ([#1201](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1201)) ([a09e4df](https://github.com/aws-powertools/powertools-lambda-typescript/commit/a09e4dfbb2cef062c1178de3e3dbc2583aef7a91))

# [1.5.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.4.1...v1.5.0) (2022-11-25)

### Bug Fixes

- **logger:** merge child logger options correctly ([#1178](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1178)) ([cb91374](https://github.com/aws-powertools/powertools-lambda-typescript/commit/cb9137436cc3a10d6c869506ddd07e35963ba8b2))

### Features

- **logger:** disable logs while testing with `jest --silent` in dev env ([#1165](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1165)) ([6f0c307](https://github.com/aws-powertools/powertools-lambda-typescript/commit/6f0c30728f31d60433b3afb6983c64110c28d27e))
- **logger:** pretty printing logs in local and non-prod environment ([#1141](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1141)) ([8d52660](https://github.com/aws-powertools/powertools-lambda-typescript/commit/8d52660eb6b8324e284421c2484c45d9a0839346))

## [1.4.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.4.0...v1.4.1) (2022-11-09)

**Note:** Version bump only for package @aws-lambda-powertools/logger

# [1.4.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.3.0...v1.4.0) (2022-10-27)

### Features

- **all:** moved EnvService to commons + exposed getXrayTraceId in tracer ([#1123](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1123)) ([c8e3c15](https://github.com/aws-powertools/powertools-lambda-typescript/commit/c8e3c15b64142ebe6f43835a5917ecba26293a32))

# [1.3.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.2.1...v1.3.0) (2022-10-17)

### Bug Fixes

- **all:** update version command to use lint-fix ([#1119](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1119)) ([6f14fb3](https://github.com/aws-powertools/powertools-lambda-typescript/commit/6f14fb3229882b1dd0c20d18c87a542993432da9))
- **logger:** wait for decorated method return before clearing out state ([#1087](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1087)) ([133ed3c](https://github.com/aws-powertools/powertools-lambda-typescript/commit/133ed3c31ce1d99eb8f427f54721896781438ef7))

### Reverts

- Revert "chore(release): v1.3.0 [skip ci]" ([237b99f](https://github.com/aws-powertools/powertools-lambda-typescript/commit/237b99f9f6eff5e6e26d779603cf13cd4422c156))

## [1.2.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.2.0...v1.2.1) (2022-08-25)

**Note:** Version bump only for package @aws-lambda-powertools/logger

# [1.2.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.1.1...v1.2.0) (2022-08-23)

**Note:** Version bump only for package @aws-lambda-powertools/logger

## [1.1.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.1.0...v1.1.1) (2022-08-18)

### Bug Fixes

- **logger:** decorated class methods cannot access `this` ([#1060](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1060)) ([73990bb](https://github.com/aws-powertools/powertools-lambda-typescript/commit/73990bbcbbd9d5a6d6f55f553e4fd8f038654fa9))

# [1.1.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.0.2...v1.1.0) (2022-08-12)

### Bug Fixes

- **logger:** fix clearstate bug when lambda handler throws ([#1045](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1045)) ([5ebd1cf](https://github.com/aws-powertools/powertools-lambda-typescript/commit/5ebd1cf44a2a3b6d99923e5bb942af3327325241))

## [1.0.2](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v1.0.1...v1.0.2) (2022-07-19)

**Note:** Version bump only for package @aws-lambda-powertools/logger

## [1.0.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.12.0-rc.1...v1.0.1) (2022-07-14)

**Note:** Version bump only for package @aws-lambda-powertools/logger

# [0.12.0-rc.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.12.0-rc.0...v0.12.0-rc.1) (2022-07-14)

**Note:** Version bump only for package @aws-lambda-powertools/logger

# [0.12.0-rc.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.11.1-rc.0...v0.12.0-rc.0) (2022-07-14)

### Bug Fixes

- **logger:** POWERTOOLS_LOGGER_LOG_EVENT precedence is respected ([#1015](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1015)) ([1cbb4db](https://github.com/aws-powertools/powertools-lambda-typescript/commit/1cbb4db4daf776e12f7dc2b383ac7fa561b7bada))

### Reverts

- Revert "chore(release): v0.12.0-rc.0 [skip ci]" ([9397f1d](https://github.com/aws-powertools/powertools-lambda-typescript/commit/9397f1d3624eb0bfbeb5e4c2702ae51e558a5b4a))
- Revert "chore(release): v0.12.0-rc.0 [skip ci]" (#1017) ([51c18da](https://github.com/aws-powertools/powertools-lambda-typescript/commit/51c18da20db434f8b12f320e5074e3e0a146046e)), closes [#1017](https://github.com/aws-powertools/powertools-lambda-typescript/issues/1017)

## [0.11.1-rc.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.11.0...v0.11.1-rc.0) (2022-06-24)

**Note:** Version bump only for package @aws-lambda-powertools/logger

# [0.11.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.10.0...v0.11.0) (2022-06-23)

### Features

- **logger:** add clear state functionality ([#902](https://github.com/aws-powertools/powertools-lambda-typescript/issues/902)) ([fa1dacb](https://github.com/aws-powertools/powertools-lambda-typescript/commit/fa1dacb001503a0a607e0951499119a1a9c61545))

# [0.10.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.9.1...v0.10.0) (2022-06-02)

### Features

- **all:** nodejs16x support ([#877](https://github.com/aws-powertools/powertools-lambda-typescript/issues/877)) ([d2b13c9](https://github.com/aws-powertools/powertools-lambda-typescript/commit/d2b13c945adb1a74b7c5f76d45f28a6979ce6429))
- **logger:** add removeKeys functionality ([#901](https://github.com/aws-powertools/powertools-lambda-typescript/issues/901)) ([a0f72c2](https://github.com/aws-powertools/powertools-lambda-typescript/commit/a0f72c275270db33d382bff357f6054f552197e6))

## [0.9.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.9.0...v0.9.1) (2022-05-24)

### Bug Fixes

- **logger:** enable logging of arbitrary objects ([#883](https://github.com/aws-powertools/powertools-lambda-typescript/issues/883)) ([5d34854](https://github.com/aws-powertools/powertools-lambda-typescript/commit/5d348543d3fbb48a98a9b2c34a1e8fa56b037adb))

# [0.9.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.8.1...v0.9.0) (2022-05-16)

### Bug Fixes

- **logger:** add xray_trace_id to every log ([#776](https://github.com/aws-powertools/powertools-lambda-typescript/issues/776)) ([11af21a](https://github.com/aws-powertools/powertools-lambda-typescript/commit/11af21ae236140e85d1503d355074c9ec254d90b))

## [0.8.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.8.0...v0.8.1) (2022-04-14)

### Bug Fixes

- **logger:** change logging to use stdout ([#748](https://github.com/aws-powertools/powertools-lambda-typescript/issues/748)) ([0781a47](https://github.com/aws-powertools/powertools-lambda-typescript/commit/0781a479a6ae3c794f94c72b59cd0920073159a2))

# [0.8.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.7.2...v0.8.0) (2022-04-08)

**Note:** Version bump only for package @aws-lambda-powertools/logger

## [0.7.2](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.7.1...v0.7.2) (2022-04-01)

**Note:** Version bump only for package @aws-lambda-powertools/logger

## [0.7.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.7.0...v0.7.1) (2022-03-17)

### Bug Fixes

- **logger:** enable sequential invocation in e2e test ([#658](https://github.com/aws-powertools/powertools-lambda-typescript/issues/658)) ([800424b](https://github.com/aws-powertools/powertools-lambda-typescript/commit/800424bc77223682ad6cdcc9f35080aff30ba91e))
- **logger:** fix handling of additional log keys ([#614](https://github.com/aws-powertools/powertools-lambda-typescript/issues/614)) ([8aab299](https://github.com/aws-powertools/powertools-lambda-typescript/commit/8aab29900c5fac8eb625eb747acbc23ceac8f6ba))

# [0.7.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.6.0...v0.7.0) (2022-03-08)

### Features

- **logger:** adopted Utility class & updated unit tests ([#550](https://github.com/aws-powertools/powertools-lambda-typescript/issues/550)) ([48f3487](https://github.com/aws-powertools/powertools-lambda-typescript/commit/48f34870d5bc3a5affcb70c8927859c56da6c5ff))

# [0.6.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.5.1...v0.6.0) (2022-02-17)

### Bug Fixes

- **logger:** fix logger attribute merging ([#535](https://github.com/aws-powertools/powertools-lambda-typescript/issues/535)) ([8180be1](https://github.com/aws-powertools/powertools-lambda-typescript/commit/8180be1ceb3f75bb7a35a7905cca867fb5eaa970))

### Features

- **logger:** add e2e tests for logger ([#529](https://github.com/aws-powertools/powertools-lambda-typescript/issues/529)) ([e736b65](https://github.com/aws-powertools/powertools-lambda-typescript/commit/e736b652c112b1c24c29eca8b1edfd87a79d1b2e))

## [0.5.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.5.0...v0.5.1) (2022-02-09)

**Note:** Version bump only for package @aws-lambda-powertools/logger

# [0.5.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.4.0...v0.5.0) (2022-01-26)

### Bug Fixes

- **examples:** fix errors in logger and metrics examples ([#509](https://github.com/aws-powertools/powertools-lambda-typescript/issues/509)) ([c19b47c](https://github.com/aws-powertools/powertools-lambda-typescript/commit/c19b47cb4cdb71e0ae404e9302226256d02fb7d5))
- **logger|metrics:** properly return decorated class ([#489](https://github.com/aws-powertools/powertools-lambda-typescript/issues/489)) ([014c5bd](https://github.com/aws-powertools/powertools-lambda-typescript/commit/014c5bd7d5c807064af8f04c16d297a8fe3bc0d9))

### Features

- **all:** make `@middy/core` optional ([#511](https://github.com/aws-powertools/powertools-lambda-typescript/issues/511)) ([1107f96](https://github.com/aws-powertools/powertools-lambda-typescript/commit/1107f96e9b4c678d34ee36757366f150d99be4dc))

# [0.4.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.3.3...v0.4.0) (2022-01-20)

### Features

- **logger:** JSDOCS support ([#491](https://github.com/aws-powertools/powertools-lambda-typescript/issues/491)) ([cd2c2d9](https://github.com/aws-powertools/powertools-lambda-typescript/commit/cd2c2d93a5822e26d3113a042be1dd0473aa6b2a))

## [0.3.3](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.3.2...v0.3.3) (2022-01-17)

**Note:** Version bump only for package @aws-lambda-powertools/logger

## [0.3.2](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.3.1...v0.3.2) (2022-01-17)

### Bug Fixes

- export LogFormatter + update docs ([#479](https://github.com/aws-powertools/powertools-lambda-typescript/issues/479)) ([7f91566](https://github.com/aws-powertools/powertools-lambda-typescript/commit/7f91566d4ff34887914009e2424df7c39a96cd71))

## [0.3.1](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.3.0...v0.3.1) (2022-01-14)

### Bug Fixes

- **all:** fix latest release broken by change of npm pack result on common ([#470](https://github.com/aws-powertools/powertools-lambda-typescript/issues/470)) ([2c3df93](https://github.com/aws-powertools/powertools-lambda-typescript/commit/2c3df9378ac191f6da6cb5f458f6227d6466cafa)), closes [#417](https://github.com/aws-powertools/powertools-lambda-typescript/issues/417)

# [0.3.0](https://github.com/aws-powertools/powertools-lambda-typescript/compare/v0.2.0...v0.3.0) (2022-01-14)

### Bug Fixes

- **build:** Update contributing.md and fix npm ci ([#417](https://github.com/aws-powertools/powertools-lambda-typescript/issues/417)) ([279ad98](https://github.com/aws-powertools/powertools-lambda-typescript/commit/279ad984f71d5b157a13cffeab52602f2c09c1f8)), closes [#415](https://github.com/aws-powertools/powertools-lambda-typescript/issues/415) [#415](https://github.com/aws-powertools/powertools-lambda-typescript/issues/415)

### Features

- **all:** Update to examples use released version (0.2.0) ([#405](https://github.com/aws-powertools/powertools-lambda-typescript/issues/405)) ([d5e0620](https://github.com/aws-powertools/powertools-lambda-typescript/commit/d5e0620473f31d0839c027a76a88dcdcb98c84de))

# 0.2.0 (2022-01-05)

### Features

- _logger:_ beta release (#24 (https://github.com/aws-powertools/powertools-lambda-python/issues/24))

### Contributor List:

@alan-churley, @bahrmichael, @dreamorosi, @flochaz, @heitorlessa, @ijemmy and @saragerion
