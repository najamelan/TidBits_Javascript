// namespace
//
var TidBits = TidBits || {}


// The tests will exit the script with a non zero exit code if anything fails
//
if( 'undefined' !== typeof module )
{
	TidBits.testOoJs     = require( './OoJs/tests/testOoJs.js'            ).testOoJs
	TidBits.testTestCase = require( './UnitTesting/tests/testTestCase.js' ).testTestCase
}

