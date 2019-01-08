function healthDecrease(obj) {
  if (obj.healthPoints < 20) return "Sorry, you're already dead!";
  if (obj.healthPoints > 100) {
    obj.healthPoints = 100;
  }

  return (obj.healthPoints -= 20);
}

module.exports = { healthDecrease };
