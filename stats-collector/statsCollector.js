class StatsCollector {
    constructor(listTimeMs = []) {
        this.maxRequest = 20000 * 604800
        this.maxLength = 19000
        this.listTimeMs = listTimeMs
    }

    // generate() {
    //     for (let i = 0; i < this.maxRequest; i++) {
    //         const n = Math.random() * (this.maxLength - 1) + 1
    //         this.listTimeMs.push(n)
    //     }
    //     console.log(this.listTimeMs)
    // }

    pushValue(responseTimeMs /*number*/) /*void*/ {
        // TODO implement
        // to know if responseTimeMs is a string
        if (typeof responseTimeMs === 'string') return false
        // to know if it is greater than 19000 or less than 0 or null
        if (
            responseTimeMs > this.maxLength ||
            responseTimeMs <= 0 ||
            responseTimeMs === null
        )
            return false
        // add value the listTimeMs
        this.listTimeMs.push(responseTimeMs)
        return true
    }

    getMedian() /*number*/ {
        // TODO
        if (
            this.listTimeMs === undefined ||
            this.listTimeMs === null ||
            this.listTimeMs.length === 0
        ) {
            return 0
        }
        // sort the list from shortest to longest
        const in_order = this.listTimeMs.sort((a, b) => a - b)
        // get the median of the listTimeMs
        const median = in_order[Math.round(in_order.length / 2) - 1]
        // to know if the list is odd or even
        if (this.listTimeMs.length % 2 === 0) {
            const total = median + in_order[median + 1]
            return total / 2
        }
        return median
    }

    getAverage() /*number*/ {
        // TODO implement
        if (
            this.listTimeMs === undefined ||
            this.listTimeMs === null ||
            this.listTimeMs.length === 0
        ) {
            return 0
        }
        // sum up all the values in the list
        const sum = this.listTimeMs.reduce((acc, next) => acc + next)
        // return average
        return sum / this.listTimeMs.length
    }
}
module.exports = StatsCollector
