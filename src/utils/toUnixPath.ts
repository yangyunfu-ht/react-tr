export const toUnixPath = (path: string): string => {
  return path.replace(/\\/g, "/")
}