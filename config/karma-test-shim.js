Error.stackTraceLimit = Infinity

require('es6-shim')
require('reflect-metadata')

require('zone.js/dist/zone')
require('zone.js/dist/long-stack-trace-zone')
require('zone.js/dist/jasmine-patch')
require('zone.js/dist/async-test')

const appContext = require.context('../src', true, /\.spec\.ts/)

appContext.keys().forEach(appContext)

const testing = require('@angular/core/testing')
const browser = require('@angular/platform-browser-dynamic/testing')

testing.setBaseTestProviders(
  browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
)
