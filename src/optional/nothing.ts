import { None } from './none';
import { Optional } from './optional';
import { Some } from './some';

export class Nothing extends Optional<null> {
  constructor() {
    super(null);
  }

  public match = (type: typeof Some | typeof None, fn: (value: null) => any) => {
    if (type === None) {
      fn(null);
    }

    return this;
  };

  public isNone = () => true;
  public isSome = () => false;
}
