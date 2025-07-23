export const getUniqueFileName = (
    fileName: string,
    existing: Record<string, unknown>
): string => {
    const dotIndex = fileName.lastIndexOf('.');
    const baseName = dotIndex !== -1 ? fileName.slice(0, dotIndex) : fileName;
    const fileEnding = dotIndex !== -1 ? fileName.slice(dotIndex) : '';
    let newName = fileName;
    let counter = 1;

    while (existing[newName]) {
        newName = `${baseName}-${counter}${fileEnding}`;
        counter++;
    }

    return newName;
};
