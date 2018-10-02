import { None } from './none';
import { Optional } from './optional';
import { Some } from './some';

export class Something<T> extends Optional<T> {
  constructor(value: T) {
    super(value);
  }

  public match = (type: typeof Some | typeof None, fn: (value: T) => any) => {
    if (type === Some) {
      fn(this.value);
    }

    return this;
  };

  public isNone = () => false;
  public isSome = () => true;
}
