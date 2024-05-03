export const getFileContent = file => {
    return new Promise(function (resolve, reject) {
        const reader = new window.FileReader();
        reader.onload = event => resolve(event.target.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
};
