export { default as StringBuilder } from './stringBuilder/stringBuilder';
export { Nothing, Something, Optional } from './optional/optional';

declare global {
  enum OptionalType {
    Some,
    None,
  }
}