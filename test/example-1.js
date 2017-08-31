 const expect = require('chai').expect;

// sample data source:
const data = [
    { name: 'Amy', membership: 100, club: 'swimming' },
    { name: 'Andy', membership: 75, club: 'tennis' },
    { name: 'Donna', membership: '300', club: 'tennis' },
    { name: 'Daniel', membership: 100, club: 'Tennis' },
    { name: 'David', membership: 100, club: 'Swimming' }
];

// implement this:
const summary = data.reduce((prev, curr) => {
    const clubName = curr.club.toLocaleLowerCase();
    return Object.assign(prev, {
        [clubName]: {
            members: (prev[clubName] && prev[clubName].members) ? prev[clubName].members + 1 : 1,
            feesTotal: (prev[clubName] && prev[clubName].feesTotal) ? prev[clubName].feesTotal + parseInt(curr.membership, 10) : parseInt(curr.membership, 10)
        }
    });
}, {});

describe('implementing the above reduce function', function() {
    it('SHOULD summarise the data source to provide a membership count and fees total', function() {
        const obj = { swimming: { members: 2, feesTotal: 200 }, tennis: { members: 3, feesTotal: 475 }};
        expect(summary).deep.equal(obj);
    });
});

