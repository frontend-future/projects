# JavaScript Exercises

A collection of JavaScript practice exercises with automated tests using Jest.

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

- **Node.js** (use Node 20 LTS)
  - If you use nvm:
    - Install: `nvm install 20`
    - Use: `nvm use 20`
    - Check: `node --version`
  - Or download from [nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js)
  - To check if you have it installed, run: `npm --version`

## Getting Started

### 1. Install Dependencies

First, you need to install the testing framework (Jest) and other dependencies. Open your terminal in this project directory and run:

```bash
npm install
```

This will download all the necessary packages into a `node_modules` folder.

### 2. Understanding the Structure

Each exercise is in its own folder under `javascript-exercises/`:

```
javascript-exercises/
├── 01_helloWorld/
│   ├── helloWorld.js          # Your code goes here
│   ├── helloWorld.spec.js     # Tests for this exercise
│   └── solution/              # Reference solution (don't peek!)
├── 02_addNumbers/
│   ├── addNumbers.js
│   ├── addNumbers.spec.js
│   └── solution/
└── ...
```

## Running Tests

### Run All Tests

To run all tests in the project:

```bash
npm test
```

This will run every test file and show you which exercises are passing and which are failing.

### Run Tests for a Specific Exercise

To run tests for just one exercise, specify the path:

```bash
npm test 01_helloWorld
```

Or be more specific:

```bash
npm test javascript-exercises/01_helloWorld/helloWorld.spec.js
```

### Watch Mode (Recommended for Development)

Watch mode automatically re-runs tests when you save your files:

```bash
npm run test:watch
```

To watch a specific exercise:

```bash
npm run test:watch -- 01_helloWorld
```

Press `q` to quit watch mode.

### Verbose Output

For more detailed test output:

```bash
npm run test:verbose
```

### Test Coverage

To see how much of your code is covered by tests:

```bash
npm run test:coverage
```

## How to Work on an Exercise

1. **Choose an exercise** - Start with `01_helloWorld` and work your way up
2. **Read the test file** - Open the `.spec.js` file to understand what's expected
3. **Write your code** - Edit the corresponding `.js` file
4. **Run the tests** - Use `npm test <exercise-name>` to check your work
5. **Iterate** - Keep refining your code until all tests pass

### Example Workflow

```bash
# Start working on the helloWorld exercise
cd javascript-exercises/01_helloWorld

# Open the test file to see what's expected
cat helloWorld.spec.js

# Edit your solution
# (open helloWorld.js in your editor)

# Run the tests
npm test 01_helloWorld

# Keep editing and testing until all tests pass!
```

## Understanding Test Output

When you run tests, you'll see output like this:

```
PASS  javascript-exercises/01_helloWorld/helloWorld.spec.js
  Hello World
    ✓ says "Hello, World!" (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
```

- ✓ means the test passed
- ✗ means the test failed (along with details about what went wrong)

If a test fails, Jest will show you:
- What was expected
- What your code actually returned
- The difference between them

## Common Issues

### "Cannot find module"

If you see this error, make sure you:
1. Ran `npm install` first
2. Are in the correct directory
3. Have the correct file paths in your `require()` statements

### Tests aren't running

Make sure:
1. You're in the project root directory
2. You have `node_modules` folder (run `npm install` if not)
3. Your test file ends with `.spec.js`

### "jest is not recognized"

This means Jest isn't installed. Run:

```bash
npm install
```

## Tips for Beginners

1. **Read the tests first** - They tell you exactly what your function should do
2. **Start simple** - Get basic functionality working before handling edge cases
3. **Use console.log()** - Add `console.log()` statements to debug your code
4. **Run tests frequently** - Don't write too much code before testing
5. **Check the solution if stuck** - But try for at least 15-20 minutes first!

## Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)

## Need Help?

If you're stuck:
1. Read the test file carefully - it shows exactly what's expected
2. Check the error messages - they often point to the problem
3. Try using `console.log()` to inspect your variables
4. Look at the solution files (but only after trying yourself!)

Happy coding!
