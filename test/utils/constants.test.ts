import dotenv from '@ev-fns/dotenv';

dotenv();

describe('constants', () => {
  it("doesn't return undefined constants", () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const constants = require('../../src/functions/constants');
    expect(constants).toBeDefined();
    Object.keys(constants).forEach((key) => {
      expect(constants[key]).toBeDefined();
    });
  });
});
