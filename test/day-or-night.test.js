const { partOfDay } = require('../app/day-or-night.js');

describe("When is it daylight?", () => {

    it('is daylight between 7am and 6pm (inclusive)', () => {

        let expected = "Daylight"

        let lowest_daylight_hour = partOfDay(7)
        let highest_daylight_hour = partOfDay(18)

        expect(lowest_daylight_hour).toBe(expected)
        expect(highest_daylight_hour).toBe(expected)
    })

    it('is night after 7pm and before 6am', () => {

        let expected = "Night"

        let lower_bound_night_hour = 4
        let higher_bound_night_hour = 19

        expect(partOfDay(lower_bound_night_hour)).toBe(expected)
        expect(partOfDay(higher_bound_night_hour)).toBe(expected)

    })

})