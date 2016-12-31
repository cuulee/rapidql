/**
 * Created by iddo on 12/30/16.
 */
const assert = require('assert'),
    LeafNode = require('../src/Nodes/LeafNode');

describe('LeafNode', () => {
    let _name = 'a';
    let _val = 'b';
    let _context = {
        [_name] : _val
    };
    let ln = new LeafNode('a');
    it('should return name properly', () => {
         assert.equal('a', ln.getName());
    });

    describe('eval() validity', () => {
        it('should return value if in context', (done) => {
            ln.eval(_context).then((val) => {
                assert.equal(val, _val);
                done();
            }).catch(done);
        });

        it('should return error if value is not in context', (done) => {
            ln.eval({}).then((val) => { //Running on empty context
                done("Should not resolve");
            }).catch((err) => {
                assert(""+err, "Name a does not exist in context [object Object]");
                done();
            });
        });
    });
});