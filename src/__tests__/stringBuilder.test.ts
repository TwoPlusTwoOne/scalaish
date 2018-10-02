import { StringBuilder } from '../index';
describe('String builder', () => {
  it('should build basic string', () => {
    const builder = new StringBuilder();
    builder
      .append('Hello')
      .append(' ')
      .append('world')
      .append('!');

    const finalString = builder.build();
    expect(finalString).toEqual('Hello world!');
  });

  it('should build string with starting string', () => {
    const builder = new StringBuilder('Hello');
    builder
      .append(' ')
      .append('world')
      .append('!');

    const finalString = builder.build();
    expect(finalString).toEqual('Hello world!');
  });

  it('should build string with starting string array', () => {
    const builder = new StringBuilder(['Hello']);
    builder
      .append(' ')
      .append('world')
      .append('!');

    const finalString = builder.build();
    expect(finalString).toEqual('Hello world!');
  });

  it('should build string with starting string array (multiple elements)', () => {
    const builder = new StringBuilder(['Hello', ' ', 'world']);
    builder.append('!');

    const finalString = builder.build();
    expect(finalString).toEqual('Hello world!');
  });
});
