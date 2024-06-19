import { colision } from './colision.js';

describe('Colision test', () => {
    it("should return false when the cat doesn't collide with boxes", () => {
      const boxsHitBoxs = [100, 100, 200, 50, 50]; // boxX, boxY, boxY2, width, height
      const catHitBox = [200, 300, 30, 30]; // catX, catY, width, height
      
      expect(colision(boxsHitBoxs, catHitBox)).toBe(false);
    });

    it('should return true when collides with the first box', () => {
      const boxsHitBoxs = [100, 100, 200, 50, 50];
      const catHitBox = [150, 120, 30, 30];
        
      expect(colision(boxsHitBoxs, catHitBox)).toBe(true);
    });

    it('should return true when collides with the second box', () => {
      const boxsHitBoxs = [100, 100, 200, 50, 50];
      const catHitBox = [150, 220, 30, 30];
        
      expect(colision(boxsHitBoxs, catHitBox)).toBe(true);
    });

    it('should return true when cat on the boundary of the first box', () => {
      const boxsHitBoxs = [100, 100, 200, 50, 50];
      const catHitBox = [160, 100, 50, 50];
        
      expect(colision(boxsHitBoxs, catHitBox)).toBe(true);
    });

    it('should return true when cat on the boundary of the second box', () => {
      const boxsHitBoxs = [100, 100, 200, 50, 50]; 
      const catHitBox = [160, 200, 50, 50];
        
      expect(colision(boxsHitBoxs, catHitBox)).toBe(true);
    });

    it('should return undefined, when coordinates are invalid', () => {
      const boxsHitBoxs = [100, 100, 200, 50, 50];
      const catHitBox = [400, 400, 30, 30];
        
      expect(colision(boxsHitBoxs, catHitBox)).toBe(undefined);
    });
});
