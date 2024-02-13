// TODO: refactor by creating a type DNode, enforcing typing across dataStore instantiation, adding, and removing

class Dictionary {
    _dataStore!: any[]

    constructor() {
        this._dataStore = new Array()
    }

    add(key: any, value: any): void {
        this._dataStore.push({ [key]: value })
    }
    find(key: any): any {
        return this._dataStore[key]
    }
    remove(key: any) {
        for (let i = 0; i < this._dataStore.length; i++) {
            if (key === Object.keys(this._dataStore[i])[0]) {
                this._dataStore.splice(this._dataStore[i], 1)
            }
        }
    }
    showAll(): void {
        for (let i = 0; i < this._dataStore.length; i++) {
            console.log(this._dataStore[i])
        }
    }
    length(): number {
        return this._dataStore.length
    }
}

const dict = new Dictionary()
dict.add('age', 16)
dict.add('name', 'Mathias')
dict.add('employed', false)
dict.showAll()
dict.remove('age')
dict.showAll()
console.log(dict.length())

