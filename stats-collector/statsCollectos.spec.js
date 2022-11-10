const chai = require('chai')
chai.should()

const StatsCollector = require('./statsCollector')

describe('StatsCollector', function () {
    it('add values to the dataset -> 1 a 19000ms', function () {
        const n = 19000
        const collector = new StatsCollector()
        const average = collector.pushValue(n)
        average.should.true
    })

    it('add values to the dataset  -> value > 19000ms', function () {
        const n = 80000
        const collector = new StatsCollector()
        const average = collector.pushValue(n)
        average.should.false
    })

    it('add values to the dataset  -> value < 0ms', function () {
        const n = -10
        const collector = new StatsCollector()
        const average = collector.pushValue(n)
        average.should.false
    })

    it('add value null to the dataset', function () {
        const collector = new StatsCollector()
        const average = collector.pushValue(null)
        average.should.false
    })

    it('add value string to the dataset', function () {
        const collector = new StatsCollector()
        const average = collector.pushValue('safsdfsdf')
        average.should.false
    })

    it('calculate the average the dataset', function () {
        const dataset = [2, 3, 3, 5, 8, 10, 11]
        const collector = new StatsCollector(dataset)
        const average = collector.getAverage()
        average.should.equal(6)
    })
    it('calculate the average the an dataset null', function () {
        const collector = new StatsCollector(null)
        const average = collector.getAverage()
        average.should.equal(0)
    })

    it('calculate the average the an dataset = []', function () {
        const dataset = []
        const collector = new StatsCollector(dataset)
        const average = collector.getAverage()
        average.should.equal(0)
    })

    it('calculate the median with values pairs', function () {
        const dataset = [2, 2, 3, 3, 5, 7, 8, 130]
        const collector = new StatsCollector(dataset)
        const median = collector.getMedian()
        median.should.equal(4)
    })
})
