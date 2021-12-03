export var getFileContent = function getFileContent(file) {
  return new Promise(function (resolve, reject) {
    var reader = new window.FileReader();

    reader.onload = function (event) {
      return resolve(event.target.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };

    reader.readAsDataURL(file);
  });
};