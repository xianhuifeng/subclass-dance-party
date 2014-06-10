describe("MarioDancer", function() {

  var MarioDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    MarioDancer = new MakeMarioDancer(10, 20, timeBetweenSteps);

  });

  it("should have a jQuery $node object", function(){
    expect(MarioDancer.$node).to.be.an.instanceof(jQuery);
  });




  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(MarioDancer, "step");
      expect(MarioDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(MarioDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(MarioDancer.step.callCount).to.be.equal(2);
      clock.tick(timeBetweenSteps);
      expect(MarioDancer.step.callCount).to.be.equal(3);
            clock.tick(timeBetweenSteps);
      expect(MarioDancer.step.callCount).to.be.equal(4);

    });
  });
});
describe("TextDancer", function() {

  var TextDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    TextDancer = new MakeTextDancer(10, 20, timeBetweenSteps);

  });

  it("should have a jQuery $node object", function(){
    expect(TextDancer.$node).to.be.an.instanceof(jQuery);
  });


  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(TextDancer, "step");
      expect(TextDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(TextDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(TextDancer.step.callCount).to.be.equal(2);
      clock.tick(timeBetweenSteps);
      expect(TextDancer.step.callCount).to.be.equal(3);
            clock.tick(timeBetweenSteps);
      expect(TextDancer.step.callCount).to.be.equal(4);

    });
  });
});
