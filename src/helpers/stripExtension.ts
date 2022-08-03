function stripExtension(fileName: string): string {
  return fileName.replace(/^(.*?)\..*?$/, '$1');
}

export default stripExtension;
