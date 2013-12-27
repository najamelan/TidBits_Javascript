// namespace
//
var TidBits = TidBits || {}


// The tests will exit the script with a non zero exit code if anything fails
//
if( 'undefined' !== typeof module )
{
	require( './OoJs/tests/Test_OoJS.js'           )

	console.log( "-------------------------------------------------------------------" );

	require( './UnitTesting/tests/testTestCase.js' )

	console.log( "-------------------------------------------------------------------" );
}

