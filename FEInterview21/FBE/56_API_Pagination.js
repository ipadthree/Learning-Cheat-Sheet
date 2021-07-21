// fetchList is provided for you
// const fetchList = (since?: number) =>
//   Promise<{items: Array<{id: number}>}>

// you can change this to generator function if you want
const fetchListWithAmount = async (amount = 5) => {
    // your code here
    let cursor;
    const result = [];
    while (result.length < amount) {
        const { items } = await fetchList(cursor);
        result.push(...items);
        cursor = items.length > 0 && items[items.length - 1].id;
        if (items.length === 0) break;
    }
    return result.slice(0, amount);
};
