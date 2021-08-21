---
title: Writing ESLint Rules
subtitle: How ESLint rules are structured and how they work
image: ../img/eslint-custom-rules.png
author: Yash Singh
date: August 10, 2021
---

# Writing ESLint Rules

In this article I will explain how ESLint rules work as a brief overview.

## What is an ESLint Rule?

An ESLint rule is a custom rule that for linting ESLint to specify your own standards.

## Setting Up a Plugin

ESLint rules are exported as plugins. To create a rule, using
the [yeoman generator](https://www.npmjs.com/package/generator-eslint) is suggested.
It automatically sets up the directory structure that is required for ESLint. The
rules directory contains the code for the rules with each filename being a rule ID.
For example, if there is a no-useless-comma.js inside the rules directory, then
that would become a rule that is automatically detected and exported thanks to
[requireindex](https://www.npmjs.com/package/requireindex).

## Structure of a Rule

A rule contains the following schema:

```ts
interface RuleSchema {
  meta: {
    type: 'problem' | 'suggestion' | 'layout';
    docs: {
      description: string;
      category: string;
      recommended: boolean;
      url: string;
      suggestion: boolean;
    };
    fixable: 'code' | 'whitespace';
    schema: Array<object>; // JSON Schema Format
    deprecated: boolean;
    replacedBy: Array<string>; // if deprecated, replacement rules
  };
  create: (
    context: object /* information on the code */
  ) => {
    [ASTSelector: string]: (node) => void;
  };
}
```

The meta property just contains some metadata on the rule. The create function
contains the main code for the rule. It takes an argument named context that
contains information on the code and returns an object of AST Selectors to
function mappings that do something if the AST Selector is matched.

## What is an AST Selector?

An AST Selector selects a specific part, node, or token that may occur multiple
times inside the code.
