// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// This will mock `next/dynamic`, so make sure to import it before any of your
// components.
import preloadAll from "jest-next-dynamic";

beforeAll(async () => {
  await preloadAll();
});