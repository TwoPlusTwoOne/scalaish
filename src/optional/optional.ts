import { None } from './none';
import { Some } from './some';

export abstract class Optional<T> {
  public abstract match: (type: typeof Some | typeof None, fn: (value: T) => any) => Optional<T>;
  public abstract isSome: () => boolean;
  public abstract isNone: () => boolean;

  protected value: T;

  constructor(val: T) {
    this.value = val;
  }

  public getOrElse = <E>(elseValue: E): T | E => {
    return this.value ? this.value : elseValue;
  };

  public get = (): T => {
    return this.value;
  };
}
