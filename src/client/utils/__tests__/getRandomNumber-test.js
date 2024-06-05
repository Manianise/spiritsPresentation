function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

const mockMin= jest.fn();
mockMin.mockReturnValue();

test('getRandomNumber mock function', () => {
  getRandomNumber(mockMin, 42);

mockMin()

});