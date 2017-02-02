# Introduction

Starter app. for the "Openshift Mall":

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts.

>Warning: Make sure you're using the latest version of Node.js and NPM

## Quick start

```
# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

Go to [http://localhost:8080](http://localhost:8080) in your browser.

You should see "Welcome to the Openshift Mall!"

## Build files

* single run: `npm run build`
* build files and watch: `npm run watch`

## Including openshift-mall content in origin-web-console

* In openshift-mall:
  * In /src/app/mall.js comment out the 'angular.element(document).ready(() => angular.bootstrap' code block
  * 'npm run build'
  * 'bower link'

* In origin-web-console
  * Clone: https://github.com/dtaylor113/origin-web-console
  * Switch to 'ux-mall-integration' branch
  * 'bower link openshift-mall'
  * 'grunt build'
  * 'grunt serve'

You should see:
![image](https://cloud.githubusercontent.com/assets/12733153/22567912/bb0c8216-e95f-11e6-9392-743e0b325aa2.png)

## Testing

### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`
