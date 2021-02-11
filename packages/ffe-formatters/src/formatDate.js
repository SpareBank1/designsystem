const ensureTwoDigits = d => `00${d}`.slice(-2);

export default function formatDate(timestamp) {
    if (!(Number.isInteger(timestamp) || timestamp instanceof Date)) {
        return null;
    }

    const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
    const dd = ensureTwoDigits(date.getDate());
    const mm = ensureTwoDigits(date.getMonth() + 1);
    const yyyy = date.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
}
