import { Some, None } from '../index';

describe('Optional types', () => {
  describe('Some', () => {
    it('should create a Some object', () => {
      const option = Some('Hello world');

      expect(option.isSome()).toBe(true);
      expect(option.isNone()).toBe(false);
    });

    it('should return "Hello world" on get', () => {
      const option = Some('Hello world');

      expect(option.get()).toEqual('Hello world');
    });

    it('should return "Hello world" on getOrElse', () => {
      const option = Some('Hello world');

      expect(option.getOrElse(1)).toEqual('Hello world');
    });

    it('should match for Some', () => {
      const option = Some('Hello world');
      const fn1 = jest.fn();
      const fn2 = jest.fn();

      option.match(Some, fn1).match(None, fn2);

      expect(fn1).toHaveBeenCalled();
      expect(fn2).not.toHaveBeenCalled();
    });
  });

  describe('None', () => {
    it('should create a None object', () => {
      const option = None;

      expect(option.isSome()).toBe(false);
      expect(option.isNone()).toBe(true);
    });

    it('should return null on get', () => {
      const option = None;

      expect(option.get()).toEqual(null);
    });

    it('should return 1 on getOrElse', () => {
      const option = None;

      expect(option.getOrElse(1)).toEqual(1);
    });

    it('should match for None', () => {
      const option = None;
      const fn1 = jest.fn();
      const fn2 = jest.fn();

      option.match(Some, fn1).match(None, fn2);

      expect(fn1).not.toHaveBeenCalled();
      expect(fn2).toHaveBeenCalled();
    });
  });
});
