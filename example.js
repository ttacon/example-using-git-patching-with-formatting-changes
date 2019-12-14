const _ = require("underscore");

/**
 * Example file showing how to split unstaged git changes into two commits.
 *
 * Yes, this is a contrived example 😝.
 */

function exampleCall({ nameObj } = {}) {
  const retObj = {
    ..._.omit(nameObj, "firstName", "lastName"),
    firstName: nameObj.firstName,
    lastName: nameObj.lastName
  };

  if (!nameObj.firstName && !nameObj.lastName) {
    retObj.anObjectHasNoName = true;
  }

  return retObj;
}

module.exports = { exampleCall };
