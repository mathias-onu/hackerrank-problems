class HashTable {
    private _table: any[]

    constructor() {
        this._table = Array(137)
    }

    put(data: any): void {
        const pos = this.betterHash(data)
        this._table[pos] = data
    }

    get(key: string): any {
        return this._table[this.betterHash(key)]
    }

    simpleHash(data: any): number {
        let total = 0;
        for (let i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i)
        }

        return total % this._table.length;
    }

    betterHash(str: string) {
        const H = 37
        let total = 0
        for (let i = 0; i < str.length; ++i) {
            total += H * total + str.charCodeAt(i)
        }
        total = total % this._table.length
        if (total < 0) total += this._table.length - 1;
           
        return total
    }

    showDistro(): void {
        for (let i = 0; i < this._table.length; i++) {
            if (this._table[i] !== undefined) {
                console.log(i, this._table[i])
            }
        }
    }
}

const htb = new HashTable()

htb.put('Denis')
htb.put('Edu')
htb.put('Mathias')
htb.put('David')
htb.put('Sebi')
htb.put('Filip')
htb.put('Coco')
htb.put('Arsenie')
htb.put('Octav')

htb.showDistro()

console.log(htb.get('Octav'))