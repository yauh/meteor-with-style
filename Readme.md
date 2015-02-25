# Meteor code in style

This repository contains a simple Meteor application that shows how to

* set defaults for your editor of choice
* perform linting on Meteor (JavaScript) code
* utilize js-beautify to format code according to style requirements

You can find the associated slides [on slideshare](http://de.slideshare.net/stephanhochhaus/writing-meteor-code-with-style). Also this repository contains a sample Meteor application so you can get started with some style experiments on your own.

## Why worry about style?

Two reasons why you should decide on a style and enforce it:

1. It becomes easier to understand code written by other developers
1. (Dumb) compile errors can be avoided

Style includes naming conventions, formatting, commenting, patterns, and other areas teams would like to keep consistent.

## How to find the right style?

A good coding style minimizes ambiguity and makes it easy for team members to read other developer's code.

For Meteor projects it is a good idea to look at [the offical MDG Style Guide](https://github.com/meteor/meteor/wiki/Meteor-Style-Guide).

## How to enforce a certain style?

Before there were computers there were code reviews to identify violations of style guidelines. Static code analysis tools will produce reports of all found violations.

Enforcing a certain style becomes easier when using a [supporting editor configuration](Editing.md) as well as tools that are capable of [pointing out violations of style rules](Linting.md). Ideally the editor is capable of [beautifiying the code adhering to style conventions](Beautification.md).
