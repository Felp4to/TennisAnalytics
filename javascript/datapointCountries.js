// class datapointCountries

class datapointCountries {
    constructor(timestamp)
    {
        this.timestamp = timestamp;
        this.dataClay = null;
        this.dataGrass = null;
        this.dataHard = null;
    }

    // Getter method
    getValue(surface, key)
    {
        if (this[surface]?.hasOwnProperty(key))
        {
            return this[surface][key];
        } else {
            console.error(`Key "${key}" does not exist in the dictionary "${surface}".`);
            return null;
        }
    }

    setDictionary(surface, data)
    {
        if(surface == "Clay") this.dataClay = data;
        if(surface == "Grass") this.dataGrass = data;
        if(surface == "Hard") this.dataHard = data;
    }
    
    getAllSurfacesCountries()
    {
        const allKeys = new Set([
            ...Object.keys(this.dataClay), 
            ...Object.keys(this.dataGrass), 
            ...Object.keys(this.dataHard)
        ]);
          
        const sumDict = {};
        allKeys.forEach(key => {
        sumDict[key] = (this.dataClay[key] || 0) + (this.dataGrass[key] || 0) + (this.dataHard[key] || 0);
        });
          
        return sumDict;
    }

    // get sum
    getSum()
    {
        const values = Object.values(this.getAllSurfacesCountries());
        return values.reduce((acc, val) => acc + val, 0);
    }

    // Setter method
    setValue(surface, key, value)
    {
        if (this[surface]?.hasOwnProperty(key))
        {
            this[surface][key] = value;
        } else {
            console.error(`Key "${key}" does not exist in the dictionary "${surface}".`);
        }
    }
    
    // Increment/Decrement method
    changeValue(surface, key, delta)
    {
        if (this[surface]?.hasOwnProperty(key))
        {
            this[surface][key] += delta;
        } else {
            console.error(`Key "${key}" does not exist in the dictionary "${surface}".`);
        }
    }

    // restituisce il timestamp
    getTimestamp()
    {
        return this.timestamp;
    }

    // print
    print()
    {
        console.log("Print timestamp countries:");
        console.log(this.timestamp);
        console.log(this.dataClay);
        console.log(this.dataGrass);
        console.log(this.dataHard);
    }

}


export default datapointCountries; 