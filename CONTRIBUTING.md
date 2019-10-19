# Contributing Guidelines
- Keep import sources alphabetized from a-z.
- If you're submitting a bug fix, feel free to increment the third parts of the version numbers in package.json
and package-lock.json by one.

Example: Correcting a packet name typo:

Increment versions from, say, 2.7.18 to 2.7.19.

- If you're just doing clerical work such as adding or removing comments (non-functional changes), you should
not change the version numbers.

- If you're modifying the wrapper itself, or adding packet processing files or modifying them to process more
fields, please increment the second parts of the version numbers by one and drop the third parts
to zero.

Example: Adding the `hq` property to an item packet:

Increment versions from, say, 2.7.19 to 2.8.0.

- If you do not follow these guidelines, I will be forced to do these things myself, and I won't complain about it,
but I am lazy and would rather not do chores.
