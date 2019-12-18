# Demo project for debugging junit-jest configuration

### Step by step 

Execute `$ npm install && npm test`


### Expected result:

The test report should be saved to `./test_reports/jest-junit.xml` (as specified by the [./jest.config.js](./jest.config.js))


### Actual result:

The test report is saved to `./junit.xml` (which is the default jest-junit configuration)
