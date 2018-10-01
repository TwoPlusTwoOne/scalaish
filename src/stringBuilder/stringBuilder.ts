class StringBuilder {

  private str: string[] = [];

  constructor(init?: string | string[]) {
    if (init) {
      if (typeof init === 'string') {
        this.str.push(init);
      }

      if (Array.isArray(init)) {
        this.str.push(...init);
      }
    }
  }

  public append = (value: string): StringBuilder => {
    this.str.push(value);
    return this;
  }

  public build = (separator?: string): string => {
    return this.str.join(separator || '');
  }

}

export default StringBuilder;