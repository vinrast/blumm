export const filenameGenerator = (filename: string) => {
  const [name, extension] = filename.split('.');
  const random = Math.floor(Math.random() * 1000000);
  const date = Date.now();
  return `${date}-${random}.${extension}`;
};
