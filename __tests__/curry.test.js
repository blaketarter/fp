const { curry } = require('../dist');

describe('curry', () => {
  const arity1 = (a) => a;
  const arity2 = (a, b) => a + b;
  const arity3 = (a, b, c) => a + b + c;

  it('is defined', () => {
    expect(curry).toBeDefined();
  });

  it('currying a function does not throw an error', () => {
    const arity2C = curry(2, arity2);
    expect(arity2C).toBeDefined();
  });

  it('handles functions with an arity of 1', () => {
    const arity1C = curry(1, arity1);
    expect(arity1C('foo')).toBe('foo');
  });

  it('handles the curried function being passed around and reused', () => {
    const arity3C = curry(3, arity3);
    const fooBar = arity3C('foo', 'bar');
    expect(fooBar('baz')).toBe('foobarbaz');
    expect(fooBar('bang')).toBe('foobarbang');
  });

  describe('handles functions with an arity of 2', () => {
    it('can be called like normal', () => {
      const arity2C = curry(2, arity2);
      expect(arity2C('foo', 'bar')).toBe('foobar');
    });

    it('can be called in curried form', () => {
      const arity2C = curry(2, arity2);
      expect(arity2C('foo')('bar')).toBe('foobar');
    });

    it('can be called in curried form after being called witout args', () => {
      const arity2C = curry(2, arity2);
      expect(arity2C()('foo')('bar')).toBe('foobar');
    });

    it('can be called in different forms multiple times', () => {
      const arity2C = curry(2, arity2);
      expect(arity2C('foo', 'bar')).toBe('foobar');
      expect(arity2C('foo')('bar')).toBe('foobar');
      expect(arity2C()('foo')('bar')).toBe('foobar');
    });
  });

  describe('handles functions with an arity of 3', () => {
    it('can be called like normal', () => {
      const arity3C = curry(3, arity3);
      expect(arity3C('foo', 'bar', 'baz')).toBe('foobarbaz');
    });

    it('can be called in curried form', () => {
      const arity3C = curry(3, arity3);
      expect(arity3C('foo')('bar')('baz')).toBe('foobarbaz');
    });

    it('can be called in curried form after being called witout args', () => {
      const arity3C = curry(3, arity3);
      expect(arity3C()('foo')('bar')('baz')).toBe('foobarbaz');
    });

    it('can be called in different forms multiple times', () => {
      const arity3C = curry(3, arity3);
      expect(arity3C('foo', 'bar', 'baz')).toBe('foobarbaz');
      expect(arity3C('foo')('bar')('baz')).toBe('foobarbaz');
      expect(arity3C()('foo')('bar')('baz')).toBe('foobarbaz');
    });
  });
});