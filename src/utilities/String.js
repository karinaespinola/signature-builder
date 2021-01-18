export function getFileName(filename) {
    return filename.split('.').slice(0, -1).join('.');
}