'use strict';

/**
 * Implement calculateMenAverageAge function
 *
 * Function returns average age of men in array. If `century` is specified then
 * function calculates average age only for men who died in this century
 *
 * To calculate century:
 * Divide year of person's death by 100: Math.ceil(person.died / 100)
 *
 * @param {object[]} people
 * @param {number} century - optional
 *
 * @return {number}
 */
function calculateMenAverageAge(people, century) {
  const flteredMen = people.filter(person =>
    century ? Math.ceil(person.died / 100) === century && person.sex === 'm'
      : (person.sex === 'm'));
  const menAge = flteredMen.map(person => person.died - person.born);
  const totalmenAge = menAge.reduce((sum, age) => sum + age);

  return totalmenAge / menAge.length;
}

/**
 * Implement calculateWomenAverageAge function
 *
 * Function returns average age of women in array. If `withChildren` is
 * specified then function calculates average age only for women with children
 *
 * Hint: To check if a woman has children you should find someone who mention
 * her as mother.
 *
 * @param {object[]} people
 * @param {boolean} withChildren - optional
 *
 * @return {number}
 */
function calculateWomenAverageAge(people, withChildren) {
  const filteredWomen = people.filter(person =>
    withChildren ? people.some(children =>
      children.mother === person.name)
      && person.sex === 'f' : (person.sex === 'f'));

  const womenAge = filteredWomen.map(person => person.died - person.born);
  const totalWomenAge = womenAge.reduce((sum, age) => sum + age);

  return totalWomenAge / womenAge.length;
}

/**
 * Implement calculateAverageAgeDiff function.
 *
 * The function returns an average age difference between a child and his or her
 * mother in the array. (A mother's age at child birth)
 *
 * If `onlyWithSon` is specified then function calculates age difference only
 * for sons and their mothers.
 *
 * @param {object[]} people
 * @param {boolean} onlyWithSon - optional
 *
 * @return {number}
 */
function calculateAverageAgeDiff(people, onlyWithSon) {
  const filteredChildren = people.filter(child =>
    onlyWithSon ? people.some(mother =>
      mother.name === child.mother) && child.sex === 'm'
      : people.some(mother => mother.name === child.mother));

  const ageDifference = filteredChildren.map(child =>
    child.born - (people.find(mother => mother.name === child.mother)).born);
  const totalAgeDifference = ageDifference.reduce((sum, age) => sum + age, 0);

  return totalAgeDifference / ageDifference.length;
}

module.exports = {
  calculateMenAverageAge,
  calculateWomenAverageAge,
  calculateAverageAgeDiff,
};
