[![NPM version](https://badge.fury.io/js/hell.png)](http://badge.fury.io/js/hell)
[![Build Status](https://secure.travis-ci.org/vesln/hell.png)](http://travis-ci.org/vesln/hell)
[![Coverage Status](https://coveralls.io/repos/vesln/hell/badge.png?branch=master)](https://coveralls.io/r/vesln/hell?branch=master)
[![Code Climate](https://codeclimate.com/github/vesln/hell.png)](https://codeclimate.com/github/vesln/hell)

# Hell

## Synopsis

Experimental complexity analyzer for JavaScript projects.

## Usage

```
  Usage: hell <path>

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    --ignore <path>     specify path to ignore
    --min <number>      specify min score
    --formatter <name>  specify formatter to use
    --formatters        display all formatters
```
## Formatters

### Tree

![tree](http://i.imgur.com/AMUiFlb.png)

### Rank

### Summary

### JSON

## FAQ

#### When to use it?

It's perfect when you are joining a new project since it can give
you a quick overview of where most of the complexity is. I consider it useful
when dealing with code that I don't know perfectly well too.
You are about to do some refactoring? Hell will give you hints what to tackle.

#### That's fine. Some numbers. How do I decrease them?

Great question, thanks for asking! There is no universal answer to this and
really depends on the app that you are working on. Keep in mind that even if you
have the perfect code it will still have complexity in it, which is fine.
However, a lot of complexity concentrated in one single place is a bad sign and you
should be aware of it.

#### Is this tool perfect?

No.

#### Can we improve it somehow?

Totally! This is just an initial implementation and I would love to hear ideas and merge
pull requests in.

#### I have code that couldn't be detected as complex enough, but it is. What do we do?

That's actually awesome! Please open a new issue with the code and explain why you
think it's giving you a wrong result. From there we can start a discussion and improve the
tool.

## Installation

```bash
$ npm install hell -g
```

## Tests

### Running the tests

```bash
$ npm test
```

### Test coverage

```bash
$ npm run-script coverage
```

## Support the author

Do you like this project? Star the repository, spread the word - it really helps. You may want to follow
me on [Twitter](https://twitter.com/vesln) and
[GitHub](https://github.com/vesln). Thanks!

## License

**MIT License**

Copyright (C) 2013 Veselin Todorov (hi@vesln.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
