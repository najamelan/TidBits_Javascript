# TidBits JavaScript

<aside class="warning">

We can now compile [rust to web assembly](https://youtu.be/TwuIRcpeUWE). As far as I'm concerned JavaScript is now dead, buried and forgotten. I finally woke up from a very long nightmare of being locked into Js by browsers.

Anyway, this never reached stable. I couldn't advise you on using JavaScript, but there's a lot of people that created programming languages for the sole purpose of not having to write Js directly, and if I'm not mistaking, [TypeScript](https://www.typescriptlang.org/) probably can do for you what this library did and surely much more too...

</aside>


A collection of JavaScript snippets centrally organised, documented and unit tested.

Currently the following submodules are available:

- [OoJs](https://github.com/najamelan/TidBits_Javascript_OoJs): A class allowing classic OOP in JavaScript
- [UnitTesting](https://github.com/najamelan/TidBits_Javascript_UnitTesting): A simple unit testing class for JavaScript


## Design Goals

The TidBits concept focusses on making available general purpose utilities in a consistent way as git submodules. The TidBits central repository is a way to centralise these snippets and to make sure they are documented and unit tested in a consistent way. Currently TidBits is split per programming language and that shall probably remain so for ever.

## Installation
If you want an offline copy of all the modules, you can add TidBits JavaScript entirely as a submodule to your project (don't worry, it's not big):

```bash
git submodule add https://github.com/najamelan/TidBits_Javascript.git includes/TidBits
git submodule update --init --recursive
cd includes/TidBits

# if you have npm, just do:
npm test

# else if you have nodejs
node tests.js

# if you have a browser, open test.htm
```

If you want individual modules only, have a look at their readme file for installation instructions

## Usage

All snippets by themselves are git repositories on their own right, and this allows you to add them on an individual basis to your repositories as submodules, or to clone the TidBits central repository to have all of them available.

There are 2 files which just allow centrally testing all snippets:

- tests.htm: for browsers
- tests.js : for nodejs

## Contributing

If you have interesting snippets that you would like to share, they can become included in the TidBits library if you want. The following are the requirements for TidBits JavaScript:

- your code must be fully unit tested
- it must be possible to call the unit tests from outside (eg. the main TidBits repository must be able to test your code)
- it must be documented
- if must be generic (this is meant as to be a programmers swiss knife, not a university or encyclopedia)
- if it doesn't deal with browser specific issues, make sure it runs in nodejs as well as in browsers
- use minimal dependencies, (eg. don't rely on jQuery just so you can have extend)
- do not have a constraining licence
- currently there is no central documentation system, so the only requirement is that you have a decent readme in your repo

TidBits JavaScript is young and requirements and standards are likely to change in the future.
