import { Something, Nothing } from '../index';

describe('Optional types', () => {

  describe('Something', () => {

    it('should create a Something object', () => {
      const option = new Something('Hello world');

      expect(option.isSome()).toBe(true);
      expect(option.isNone()).toBe(false);
    });

    it('should return "Hello world" on get', () => {
      const option = new Something('Hello world');

      expect(option.get()).toEqual('Hello world');
    });

    it('should return "Hello world" on getOrElse', () => {
      const option = new Something('Hello world');

      expect(option.getOrElse(1)).toEqual('Hello world');
    });

    it('should match for Some', () => {
      const option = new Something('Hello world');
      const fn1 = jest.fn();
      const fn2 = jest.fn();

      option.match(OptionalType.Some, fn1).match(OptionalType.None, fn2);

      expect(fn1).toHaveBeenCalled();
      expect(fn2).not.toHaveBeenCalled();
    });

  });

  describe('Nothing', () => {

    it('should create a Nothing object', () => {
      const option = Nothing;

      expect(option.isSome()).toBe(false);
      expect(option.isNone()).toBe(true);
    });

    it('should return null on get', () => {
      const option = Nothing;

      expect(option.get()).toEqual(null);
    });

    it('should return 1 on getOrElse', () => {
      const option = Nothing;

      expect(option.getOrElse(1)).toEqual(1);
    });

    it('should match for None', () => {
      const option = Nothing;
      const fn1 = jest.fn();
      const fn2 = jest.fn();

      option.match(OptionalType.Some, fn1).match(OptionalType.None, fn2);

      expect(fn1).not.toHaveBeenCalled();
      expect(fn2).toHaveBeenCalled();
    });

  });

});