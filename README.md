[![NPM version](https://badge.fury.io/js/hell.png)](http://badge.fury.io/js/hell)
[![Build Status](https://secure.travis-ci.org/vesln/hell.png)](http://travis-ci.org/vesln/hell)
[![Coverage Status](https://coveralls.io/repos/vesln/hell/badge.png?branch=master)](https://coveralls.io/r/vesln/hell?branch=master)
[![Code Climate](https://codeclimate.com/github/vesln/hell.png)](https://codeclimate.com/github/vesln/hell)

# Important Notice

I'm no longer actively maintaining this project. If you are interested supporting it - [ping me on twitter](https://twitter.com/vesln).
The only thing that I will ask you is to not change the API drastically. If you are planning on doing that - better start a brand new project.

If you want me to transfer you only the name on npm, I'd be happy to only if the project **does not have any downloads on npm lately**. In case it's being
downloaded, there are people that depend on it and might step up and start maintaining, so I will not transfer it to you, regardless if you want to release
a new major version etc.

If you have any other questions, let me know.

Thanks!

Veselin

# Hell

## Synopsis

Experimental complexity analyzer for JavaScript projects.

## Installation

```bash
$ npm install hell -g
```

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

![rank](http://i.imgur.com/baXx5fO.png)

### Summary

![summary](http://i.imgur.com/qOZhzHi.png)

### JSON

![json](http://i.imgur.com/nvb0BOy.png)

## Tests

### Running the tests

```bash
$ npm test
```

### Test coverage

```bash
$ npm run-script coverage
```
## FAQ

#### Is this tool perfect?

No.

#### Can we improve it somehow?

Totally! This is just an initial implementation and I would love to hear ideas and merge
pull requests in.

#### I have code that couldn't be detected as complex enough, but I believe it is. What do we do?

That's actually awesome! Please open a new issue with the code and explain why you
think it's giving you a wrong result. From there we can start a discussion and improve the
tool.


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
