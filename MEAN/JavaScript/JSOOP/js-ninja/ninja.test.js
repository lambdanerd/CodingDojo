import Ninja from './ninja';
import Sensei from './sensei';

const ninjaBrian = new Ninja('Brian');

describe('default ninjaBrian', () => {
  describe('should have these attributes with these defaults', () => {
    it('should have a name', () => {
      expect(ninjaBrian.name).toEqual('Brian');
    });

    it('should have 100 health by default', () => {
      expect(ninjaBrian.health).toEqual(100);
    });
    it('should have a speed of 3 by default', () => {
      expect(ninjaBrian.speed).toEqual(3);
    });

    it('should have a strength of 3 by default', () => {
      expect(ninjaBrian.strength).toEqual(3);
    });
  });

  describe('should have these methods', () => {
    it('should have the method nameStringifier()', () => {
      expect(ninjaBrian).toHaveProperty('nameStringifier');
    });
    it('should have the method sayName()', () => {
      expect(ninjaBrian).toHaveProperty('sayName');
    });

    it('should have the getter method stats()', () => {
      expect(ninjaBrian).toHaveProperty('stats');
    });

    it('should have the method drinkSake()', () => {
      expect(ninjaBrian).toHaveProperty('drinkSake');
    });
    it('should have the method punch()', () => {
      expect(ninjaBrian).toHaveProperty('punch');
    });
    it('should have the method kick()', () => {
      expect(ninjaBrian).toHaveProperty('kick');
    });
  });

  describe('should return these from methods', () => {
    it('should return the name in a string', () => {
      expect(ninjaBrian.nameStringifier()).toEqual('My ninja name is Brian!');
    });

    it('should return the stats in a string', () => {
      expect(ninjaBrian.stats).toEqual(
        'Name: Brian, Health: 100, Speed: 3, Strength: 3'
      );
    });

    it('should increase health by 10', () => {
      ninjaBrian.health = 90;
      ninjaBrian.drinkSake();
      expect(ninjaBrian.health).toEqual(100);
      ninjaBrian.drinkSake();
      expect(ninjaBrian.health).toEqual(110);
    });

    it("should decrease target Ninja's health by 5", () => {
      let dummyNinja = new Ninja('Dummy');
      expect(dummyNinja.health).toEqual(100);
      ninjaBrian.punch(dummyNinja);
      expect(dummyNinja.health).toEqual(95);
    });

    it("should decrease target Ninja's health by 15 * strength (3)", () => {
      let dummyNinja = new Ninja('Dummy');
      expect(dummyNinja.health).toEqual(100);
      ninjaBrian.kick(dummyNinja);
      expect(dummyNinja.health).toEqual(55);
    });
  });
});

const ninjaHyabusa = new Ninja('Hyabusa', 110);

describe('non-default ninjaHyabusa', () => {
  describe('should have these attributes with these defaults', () => {
    it('should have a name', () => {
      expect(ninjaHyabusa.name).toEqual('Hyabusa');
    });

    it('should have 110 health', () => {
      expect(ninjaHyabusa.health).toEqual(110);
    });

    it('should have a speed of 3 by default', () => {
      expect(ninjaHyabusa.speed).toEqual(3);
    });

    it('should have a strength of 3 by default', () => {
      expect(ninjaHyabusa.strength).toEqual(3);
    });
  });

  describe('should have these methods', () => {
    it('should have the method sayName()', () => {
      expect(ninjaHyabusa).toHaveProperty('sayName');
    });

    it('should have the getter method stats()', () => {
      expect(ninjaHyabusa).toHaveProperty('stats');
    });

    it('should have the method drinkShake()', () => {
      expect(ninjaHyabusa).toHaveProperty('drinkSake');
    });
  });

  describe('should return these from methods', () => {
    it('should return the name in a string', () => {
      expect(ninjaHyabusa.nameStringifier()).toEqual(
        'My ninja name is Hyabusa!'
      );
    });

    it('should return the stats in a string', () => {
      expect(ninjaHyabusa.stats).toEqual(
        'Name: Hyabusa, Health: 110, Speed: 3, Strength: 3'
      );
    });

    it('should increase health by 10', () => {
      ninjaHyabusa.health = 90;
      ninjaHyabusa.drinkSake();
      expect(ninjaHyabusa.health).toEqual(100);
      ninjaHyabusa.drinkSake();
      expect(ninjaHyabusa.health).toEqual(110);
    });
  });
});

const sesnseiMattTucker = new Sensei('Matt');

describe('default sesnseiMattTucker', () => {
  describe('should have these attributes with these defaults', () => {
    it('should have a name', () => {
      expect(sesnseiMattTucker.name).toEqual('Matt');
    });

    it('should have 200 health by default', () => {
      expect(sesnseiMattTucker.health).toEqual(200);
    });
    it('should have a speed of 10 by default', () => {
      expect(sesnseiMattTucker.speed).toEqual(10);
    });

    it('should have a strength of 10 by default', () => {
      expect(sesnseiMattTucker.strength).toEqual(10);
    });
  });

  describe('should have these methods', () => {
    it('should have the method speakWisdom()', () => {
      expect(sesnseiMattTucker).toHaveProperty('speakWisdom');
    });
  });

  describe('should return these from methods', () => {
    it('should return the name in a string', () => {
      expect(sesnseiMattTucker.nameStringifier()).toEqual(
        'My ninja name is Matt!'
      );
    });

    it('should return the stats in a string', () => {
      expect(sesnseiMattTucker.stats).toEqual(
        'Name: Matt, Health: 200, Speed: 10, Strength: 10'
      );
    });

    it('should increase health by 10', () => {
      let senseiPFresh = new Sensei('P-Fresh');
      expect(senseiPFresh.health).toEqual(200);
      senseiPFresh.drinkSake();
      expect(senseiPFresh.health).toEqual(210);
    });

    it("should decrease target Ninja's health by 5", () => {
      let dummyNinja = new Ninja('Dummy');
      expect(dummyNinja.health).toEqual(100);
      sesnseiMattTucker.punch(dummyNinja);
      expect(dummyNinja.health).toEqual(95);
    });

    it("should decrease target Ninja's health by 15 * strength (10)", () => {
      let ninjaCody = new Ninja('Cody');
      expect(ninjaCody.health).toEqual(100);
      sesnseiMattTucker.kick(ninjaCody);
      expect(ninjaCody.health).toEqual(-50);
    });

    it('should speak wisdom', () => {
      expect(sesnseiMattTucker.speakWisdom()).toEqual(
        'What one programmer can do in one month, two programmers can do in two months.'
      );
    });
  });
});
