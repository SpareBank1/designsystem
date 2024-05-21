export const getFileContent = (
    file: File,
): Promise<ArrayBuffer | string | null> => {
    return new Promise((resolve, reject) => {
        const reader = new window.FileReader();
        reader.onload = event =>
            resolve(event.target ? event.target.result : null);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
};
