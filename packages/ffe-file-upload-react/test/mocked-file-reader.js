
export default function MockedFileReader() {
    let that = this;
    this.onload = (event) => {
    };

    this.onerror = (event) => {
    };

    this.readAsDataURL = () => {
        that.onload({
            target: {
                result: "data:application/pdf;base64,abcd1234"
            }
        })
    };

    this.readAsText = () => {
        throw 'You should use readAsDataURL to ensure base64 encoding';
    };

    this.readAsArrayBuffer = () => {
        throw 'You should use readAsDataURL to ensure base64 encoding';
    };

    this.readAsBinaryString = () => {
        throw 'You should use readAsDataURL to ensure base64 encoding';
    };
}
