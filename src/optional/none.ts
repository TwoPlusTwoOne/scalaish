import { Nothing } from './nothing';
import { Optional } from './optional';

export const None: Optional<null> = ((): Optional<null> => {
  return new Nothing();
})();
