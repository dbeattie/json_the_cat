const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
 
  it('returns a string description for a valid breed(Siberian), via callback', (done) => {
    fetchBreedDescription('Siberian', (err, description) => {
      assert.equal(err, null);
      const expectedDescription = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(expectedDescription, description);
      done();
    });
  });

  it('returns a string description for a valid breed(Chartreux), via callback', (done) => {
    fetchBreedDescription('Chartreux', (err, description) => {
      assert.equal(err, null);
      const expectedDescription = "The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.";
      assert.equal(expectedDescription, description);
      done();
    });
  });
  
  it('returns null, via callback and the correct error description', (done) => {
    fetchBreedDescription(null, (err, description) => {
      const expectedDescription = `We're sorry that breed could not found!`;
      assert.equal(expectedDescription, err);
      done();
    });
  });

});