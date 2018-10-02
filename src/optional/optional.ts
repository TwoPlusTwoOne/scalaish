export abstract class Optional<T> {
  protected value: T;

  constructor(val: T) {
    this.value = val;
  }

  public getOrElse = <E>(elseValue: E): T | E => {
    return this.value ? this.value : elseValue;
  }

  public get = (): T => {
    return this.value;
  }

  public abstract match: (type: typeof Some | typeof None, fn: (value: T) => any) => Optional<T>;
  public abstract isSome: () => boolean;
  public abstract isNone: () => boolean;
}

class Something<T> extends Optional<T> {
  constructor(value: T) {
    super(value);
  }

  public match = (type: typeof Some | typeof None, fn: (value: T) => any) => {
    if (type === Some) {
      fn(this.value);
    }

    return this;
  }

  public isNone = () => false;
  public isSome = () => true;
}

class Nothing extends Optional<null> {
  constructor() {
    super(null);
  }

  match = (type: typeof Some | typeof None, fn: Function) => {
    if (type === None) {
      fn();
    }

    return this;
  }

  public isNone = () => true;
  public isSome = () => false;
}

export const Some: <T>(value: T) => Optional<T> = <T>(value: T): Optional<T> => {
  return new Something(value);
};

export const None: Optional<null> = ((): Optional<null> => {
  return new Nothing();
})();
