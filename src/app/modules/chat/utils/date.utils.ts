export function formatTimestamp(timestamp : number): string {
    const date = new Date(timestamp);
    const options : Intl.DateTimeFormatOptions = {
        weekday : 'long',
        year : 'numeric',
        month : 'long',
        day : 'numeric',
        hour : 'numeric',
        minute : 'numeric',
    };
     return date.toLocaleDateString(undefined, options)
}