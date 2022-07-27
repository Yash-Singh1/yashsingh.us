// Template literal tag that basically clones template literal
// Made to allow prettier formatting on javascript in a string

export function js(strings: TemplateStringsArray, ...keys: string[]): string {
  const result = [strings[0]];
  for (const [index, key] of keys.entries()) {
    result.push(key);
    if (strings.length > index + 1) {
      result.push(strings[index + 1]);
    }
  }
  return result.join('');
}

export default js;
