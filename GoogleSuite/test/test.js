import Loginpage from'../pageobject/LoginPage';
var expect = require('chai').expect;


describe('UbiSoft Visual regression', function() {
    before(function()
    {
        Loginpage.open();
    }),
    it('Check Available Now Section', function () {
        Loginpage.CheckAvailableNowSection();
    }),
    it('Check Game Overview Section', function () {
        Loginpage.CheckGameOverviewSection();
    }),
    it('Check sliding image', function () {
        Loginpage.CheckSlidingImage();
    }),
    it('Failed test case', function () {
       var result= Loginpage.CheckGameOverviewSection();
       console.log(result[0].isSameDimensions);
       expect(result[0].isSameDimensions).to.be.true;
    });
});