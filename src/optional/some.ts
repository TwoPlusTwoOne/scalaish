import { Optional } from './optional';
import { Something } from './something';

export const Some: <T>(value: T) => Optional<T> = <T>(value: T): Optional<T> => {
  return new Something(value);
};
