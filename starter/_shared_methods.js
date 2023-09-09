function getItemByName(array, name) {
    // for (let item of this.item) {
    //     if (item.name === name) return item;
    // }

    return array.find(item => item.name === name);
}

function moveItem(itemName, sourceArr, destinationArr) {
    let item = getItemByName(sourceArr, itemName);

    if (item) {
        let itemIndex = sourceArr.indexOf(item);

        if (itemIndex !== -1) {
            if (item.name === itemName) {
                destinationArr.push(item);
                sourceArr.splice(itemIndex, 1);
            }
        }
    }
}

module.exports = {
    getItemByName,
    moveItem
}
