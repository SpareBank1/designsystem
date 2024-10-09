const ensureTwoDigits = (d: number) => `00${d}`.slice(-2);

export const formatDate = (timestamp: Date | number) => {
    const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
    const dd = ensureTwoDigits(date.getDate());
    const mm = ensureTwoDigits(date.getMonth() + 1);
    const yyyy = date.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
};
