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

  public abstract match: (type: OptionalType, fn: Function) => Optional<T>;

  public abstract isSome: () => boolean;
  public abstract isNone: () => boolean;
}

export class Something<T> extends Optional<T> {

  constructor(value: T) {
    super(value);
  }

  public match = (type: OptionalType, fn: Function) => {
    if (type === OptionalType.Some) {
      fn();
    }

    return this;
  }

  public isNone = () => false;
  public isSome = () => true;
}

// export class Nothing extends Optional<null> {

//   constructor() {
//     super(null);
//   }

//   match = (type: OptionalType, fn: Function) => {
//     if (type === OptionalType.None) {
//       fn();
//     }

//     return this;
//   }

//   public isNone = () => true;
//   public isSome = () => false;
// }

const Nothing = ((): Optional<null> => {

  class NothingObject extends Optional<null> {
    constructor() {
      super(null);
    }

    match = (type: OptionalType, fn: Function) => {
      if (type === OptionalType.None) {
        fn();
      }

      return this;
    }

    public isNone = () => true;
    public isSome = () => false;
  }

  return new NothingObject();
})();

export default { Optional, Something, Nothing }