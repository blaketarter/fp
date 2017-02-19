const fp = require('../index');

describe('fp', function() {
    it('initializes without error', function() {
        const foo = fp([]);
        expect(foo).toBeInstanceOf(fp);
    });

    it('is an array', function() {
        const foo = fp([]);
        expect(foo).toHaveProperty('length');
        expect(foo).toBeInstanceOf(Array);
    });

    it('copies the initial data correctly', function() {
        const initialData = [1, 2, 3];
        const fpData = fp(initialData);

        expect(fpData).not.toBe(initialData);
        expect(fpData).toHaveLength(3);
        expect(fpData[0]).toBe(1);
        expect(fpData[1]).toBe(2);
        expect(fpData[2]).toBe(3);
    });

    it('has all of the correct methods from fp', function() {
        const foo = fp([]);

        expect(foo.forEach).toBeInstanceOf(Function);
        expect(foo.map).toBeInstanceOf(Function);
        expect(foo.filter).toBeInstanceOf(Function);
        expect(foo.reduce).toBeInstanceOf(Function);
        expect(foo.concatAll).toBeInstanceOf(Function);
        expect(foo.concatMap).toBeInstanceOf(Function);
        expect(fp.zip).toBeInstanceOf(Function);
    });
});