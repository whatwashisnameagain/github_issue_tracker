export const loadData = asycn url => {
    const res = fetch(url);
    const data = res.json();
    return data;
}