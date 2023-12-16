import { useDataStore } from '../stores/DataStore';

const items = useDataStore().items.data;

export function formatQuantity (quantity) {
    if (quantity > 1000000) {
        return `${(quantity / 1000000).toFixed(1)}m`;
    }
    if (quantity > 10000) {
        return `${(quantity / 1000).toFixed(0)}k`;
    }
    return quantity.toString();
}

export function useProcessMaterial (unprocessedMaterial) {
    const getId = (material) => {
        const item = items.find(item => item.Name === material);
        return item ? item.Id : null;
    };

    const getRarity = (material) => {
        const item = items.find(item => item.Name === material);
        return item ? item.Rarity : null;
    };

    const getItemImagePath = (material) => {
        const id = getId(material);
        return id ? `images/items/icon/${id}.png` : null;
    };

    const getBorderImagePath = (material) => {
        const rarity = getRarity(material);
        return rarity ? `images/items/border/${rarity}.png` : null;
    };

    const result = {
        material: unprocessedMaterial.Material,
        quantity: formatQuantity(unprocessedMaterial.Quantity),
        itemImagePath: getItemImagePath(unprocessedMaterial.Material),
        borderImagePath: getBorderImagePath(unprocessedMaterial.Material)
    };
    return result;
}
