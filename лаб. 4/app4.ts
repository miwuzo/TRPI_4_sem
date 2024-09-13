class products {
    readonly id: number;
    public size: number;
    public color: string;
    public discount: number;
    private _cost: number;

    constructor(id: number, size: number, color: string, discount: number, cost: number) {
        this.id = id;
        this.size = size;
        this.color = color;
        this.discount = discount;
        this._cost = cost;
    }

    public get cost(): number {
        return parseFloat((this._cost * (1 - this.discount / 100)).toFixed(2));
    }

    public set cost(newPrice: number) {
        this._cost = newPrice;
    }
}


interface IShop {
    Boots: products[];
    Sneakers: products[];
    Sandals: products[];
}

let allProduct: IShop & Iterable<products> = {
    Boots: [
        new products(1, 22, "green", 10, 42),
        new products(2, 22, "green", 1, 39),
        new products(3, 34, "blue", 20, 100),
    ],
    Sneakers: [
        new products(4, 45, "green", 10, 42),
        new products(5, 30, "black", 50, 1000),
    ],
    Sandals: [
        new products(6, 20, "red", 10, 62),
        new products(7, 32, "green", 20, 82),
        new products(8, 42, "white", 10, 42),
    ],
    [Symbol.iterator](): Iterator<products> {
        let categories: products[] = [...this.Boots, ...this.Sneakers, ...this.Sandals];
        let current: number = 0;

        return {
            next(): IteratorResult<products> {
                if (current < categories.length) {
                    return { done: false, value: categories[current++] };
                } else {
                    return { done: true, value: null};
                }
            },
        };
    },
};



for (let product of allProduct) {
    console.log(`id: ${product.id}, size: ${product.size}, color: ${product.color}, discount: ${product.discount}, cost: ${product.cost}`)
}

function filter(minPrice: number, maxPrice: number, size: number, color: string): number[] {
    let filteredIds: number[] = [];
    for (let product of allProduct) {
        if (product.cost >= minPrice && product.cost <= maxPrice && product.size === size && product.color === color)
            filteredIds.push(product.id);
    }
    return filteredIds;
}


console.log(filter(10, 40, 22, 'green'));