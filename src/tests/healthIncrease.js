function healthIncrease(obj) {
  if (obj.healthPoints > 80) {
    return (obj.healthPoints = 100);
  }
  if (obj.healthPoints < 0) {
    obj.healthPoints = 0;
  }

  return (obj.healthPoints += 20);
}

module.exports = { healthIncrease };
