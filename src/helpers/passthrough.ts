// Template literal tag that basically clones template literal
// Made to allow prettier formatting on various languages in a string

function passthrough(strings: TemplateStringsArray, ...keys: string[]): string {
  const result = [strings[0]];
  for (const [index, key] of keys.entries()) {
    result.push(key);
    if (strings.length > index + 1) {
      result.push(strings[index + 1]);
    }
  }
  return result.join('');
}

export default passthrough;

// Hacky template tag literal to help leverage Tailwind Intellisense in template literals
// @see https://github.com/tailwindlabs/tailwindcss-intellisense/blob/1f1b4436e6e9d953073e154e17d0527372677e15/packages/tailwindcss-language-service/src/util/find.ts#L160

const PREFIX = '(className=" ';
const SUFFIX = ' "';

export function tailwind(...args: Parameters<typeof passthrough>) {
  const result = passthrough(...args);
  return result.slice(PREFIX.length, result.length - SUFFIX.length);
}
