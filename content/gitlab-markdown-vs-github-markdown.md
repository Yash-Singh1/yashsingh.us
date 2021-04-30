---
title: GitLab Flavored Markdown vs. GitHub Flavored Markdown
subtitle: A complete comparision between the two markdown syntaxes
image: /img/gitLab-markdown-vs-github-markdown.png
author: Yash Singh
date: April 29, 2021
---

# Breakdown

Here is a table that has a simplified comparison between GitLab Flavored Markdown
and Github Flavored Markdown:

|GitLab Flavored Markdown|Github Flavored Markdown|
|--|--|
|Diagramming Mermaid/PlantUML|No Diagramming|
|Front Matter => YAML, JSON, TOML, and More|Front Matter => YAML|
|Inline and Multiline Diff|Multiline Diff|
|Equations/Math|No Equations/Math|
|References|Less References|
|TOC (Table of Contents)|No TOC|
|Metrics|No metrics|
|Single Line/Multiline Blockquotes|Single Line Blockquotes|
|Footnotes|No Footnotes|
|Images/Videos/Audio|Images|

# Explanation

Above was just a breakdown table, this is a more detailed explanation of each feature.

## Diagrams/Flowcharts

GitLab Flavored Markdown supports `Mermaid`/`PlantUML`. At the writing of this
article, Github Flavored Markdown doesn’t support any of them. Both `Mermaid` and
`PlantUML` are “Markdownish ways to render diagrams”. Since Github Flavored Markdown
doesn’tsupport either, I can’t demonstrate each. Here is some raw text that
displays some examples for each:

### Mermaid

The following is a `gitGraph` that was written in `MermaidJS`. To preview it,
go to the Mermaid Live Editor.

```text
gitGraph:
 commit
 commit
 branch example
 checkout example
 commit
 commit
 commit
 merge example

```

Here is how it would look in real life:

![Mermaid](https://mermaid.ink/img/eyJjb2RlIjoiZ2l0R3JhcGg6XG5cdGNvbW1pdFxuXHRjb21taXRcblx0YnJhbmNoIGV4YW1wbGVcblx0Y2hlY2tvdXQgZXhhbXBsZVxuXHRjb21taXRcblx0Y29tbWl0XG5cdGNvbW1pdFxuXHRtZXJnZSBleGFtcGxlXG4gICIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0IiwidGhlbWVWYXJpYWJsZXMiOnsiYmFja2dyb3VuZCI6IndoaXRlIiwicHJpbWFyeUNvbG9yIjoiI0VDRUNGRiIsInNlY29uZGFyeUNvbG9yIjoiI2ZmZmZkZSIsInRlcnRpYXJ5Q29sb3IiOiJoc2woODAsIDEwMCUsIDk2LjI3NDUwOTgwMzklKSIsInByaW1hcnlCb3JkZXJDb2xvciI6ImhzbCgyNDAsIDYwJSwgODYuMjc0NTA5ODAzOSUpIiwic2Vjb25kYXJ5Qm9yZGVyQ29sb3IiOiJoc2woNjAsIDYwJSwgODMuNTI5NDExNzY0NyUpIiwidGVydGlhcnlCb3JkZXJDb2xvciI6ImhzbCg4MCwgNjAlLCA4Ni4yNzQ1MDk4MDM5JSkiLCJwcmltYXJ5VGV4dENvbG9yIjoiIzEzMTMwMCIsInNlY29uZGFyeVRleHRDb2xvciI6IiMwMDAwMjEiLCJ0ZXJ0aWFyeVRleHRDb2xvciI6InJnYig5LjUwMDAwMDAwMDEsIDkuNTAwMDAwMDAwMSwgOS41MDAwMDAwMDAxKSIsImxpbmVDb2xvciI6IiMzMzMzMzMiLCJ0ZXh0Q29sb3IiOiIjMzMzIiwibWFpbkJrZyI6IiNFQ0VDRkYiLCJzZWNvbmRCa2ciOiIjZmZmZmRlIiwiYm9yZGVyMSI6IiM5MzcwREIiLCJib3JkZXIyIjoiI2FhYWEzMyIsImFycm93aGVhZENvbG9yIjoiIzMzMzMzMyIsImZvbnRGYW1pbHkiOiJcInRyZWJ1Y2hldCBtc1wiLCB2ZXJkYW5hLCBhcmlhbCIsImZvbnRTaXplIjoiMTZweCIsImxhYmVsQmFja2dyb3VuZCI6IiNlOGU4ZTgiLCJub2RlQmtnIjoiI0VDRUNGRiIsIm5vZGVCb3JkZXIiOiIjOTM3MERCIiwiY2x1c3RlckJrZyI6IiNmZmZmZGUiLCJjbHVzdGVyQm9yZGVyIjoiI2FhYWEzMyIsImRlZmF1bHRMaW5rQ29sb3IiOiIjMzMzMzMzIiwidGl0bGVDb2xvciI6IiMzMzMiLCJlZGdlTGFiZWxCYWNrZ3JvdW5kIjoiI2U4ZThlOCIsImFjdG9yQm9yZGVyIjoiaHNsKDI1OS42MjYxNjgyMjQzLCA1OS43NzY1MzYzMTI4JSwgODcuOTAxOTYwNzg0MyUpIiwiYWN0b3JCa2ciOiIjRUNFQ0ZGIiwiYWN0b3JUZXh0Q29sb3IiOiJibGFjayIsImFjdG9yTGluZUNvbG9yIjoiZ3JleSIsInNpZ25hbENvbG9yIjoiIzMzMyIsInNpZ25hbFRleHRDb2xvciI6IiMzMzMiLCJsYWJlbEJveEJrZ0NvbG9yIjoiI0VDRUNGRiIsImxhYmVsQm94Qm9yZGVyQ29sb3IiOiJoc2woMjU5LjYyNjE2ODIyNDMsIDU5Ljc3NjUzNjMxMjglLCA4Ny45MDE5NjA3ODQzJSkiLCJsYWJlbFRleHRDb2xvciI6ImJsYWNrIiwibG9vcFRleHRDb2xvciI6ImJsYWNrIiwibm90ZUJvcmRlckNvbG9yIjoiI2FhYWEzMyIsIm5vdGVCa2dDb2xvciI6IiNmZmY1YWQiLCJub3RlVGV4dENvbG9yIjoiYmxhY2siLCJhY3RpdmF0aW9uQm9yZGVyQ29sb3IiOiIjNjY2IiwiYWN0aXZhdGlvbkJrZ0NvbG9yIjoiI2Y0ZjRmNCIsInNlcXVlbmNlTnVtYmVyQ29sb3IiOiJ3aGl0ZSIsInNlY3Rpb25Ca2dDb2xvciI6InJnYmEoMTAyLCAxMDIsIDI1NSwgMC40OSkiLCJhbHRTZWN0aW9uQmtnQ29sb3IiOiJ3aGl0ZSIsInNlY3Rpb25Ca2dDb2xvcjIiOiIjZmZmNDAwIiwidGFza0JvcmRlckNvbG9yIjoiIzUzNGZiYyIsInRhc2tCa2dDb2xvciI6IiM4YTkwZGQiLCJ0YXNrVGV4dExpZ2h0Q29sb3IiOiJ3aGl0ZSIsInRhc2tUZXh0Q29sb3IiOiJ3aGl0ZSIsInRhc2tUZXh0RGFya0NvbG9yIjoiYmxhY2siLCJ0YXNrVGV4dE91dHNpZGVDb2xvciI6ImJsYWNrIiwidGFza1RleHRDbGlja2FibGVDb2xvciI6IiMwMDMxNjMiLCJhY3RpdmVUYXNrQm9yZGVyQ29sb3IiOiIjNTM0ZmJjIiwiYWN0aXZlVGFza0JrZ0NvbG9yIjoiI2JmYzdmZiIsImdyaWRDb2xvciI6ImxpZ2h0Z3JleSIsImRvbmVUYXNrQmtnQ29sb3IiOiJsaWdodGdyZXkiLCJkb25lVGFza0JvcmRlckNvbG9yIjoiZ3JleSIsImNyaXRCb3JkZXJDb2xvciI6IiNmZjg4ODgiLCJjcml0QmtnQ29sb3IiOiJyZWQiLCJ0b2RheUxpbmVDb2xvciI6InJlZCIsImxhYmVsQ29sb3IiOiJibGFjayIsImVycm9yQmtnQ29sb3IiOiIjNTUyMjIyIiwiZXJyb3JUZXh0Q29sb3IiOiIjNTUyMjIyIiwiY2xhc3NUZXh0IjoiIzEzMTMwMCIsImZpbGxUeXBlMCI6IiNFQ0VDRkYiLCJmaWxsVHlwZTEiOiIjZmZmZmRlIiwiZmlsbFR5cGUyIjoiaHNsKDMwNCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwiZmlsbFR5cGUzIjoiaHNsKDEyNCwgMTAwJSwgOTMuNTI5NDExNzY0NyUpIiwiZmlsbFR5cGU0IjoiaHNsKDE3NiwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwiZmlsbFR5cGU1IjoiaHNsKC00LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSkiLCJmaWxsVHlwZTYiOiJoc2woOCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwiZmlsbFR5cGU3IjoiaHNsKDE4OCwgMTAwJSwgOTMuNTI5NDExNzY0NyUpIn19LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

### PlantUML

This is an example brought from the official `PlantUML` Website. It demonstrates
a deployment diagram. To add in `PlantUML` to your markdown, the administrator
needs to enable it first. Read more at:

[https://docs.GitLab.com/ee/administration/integration/plantuml.html](https://docs.GitLab.com/ee/administration/integration/plantuml.html%60)
Then you can just add in `plantuml` syntax highlighting for the code wrapped
inside a code block.

```text
# PlantUML Editor

1. select template
2. write UML diagram

@startuml

left to the right direction

actor User

User --> (1. select template)
User --> (2. write uml diagram)

@enduml
```

Here is how this would look in real life:
![PlantUML](https://plantuml-server.kkeisuke.app/svg/JOox3OD044JphM924noIAG3H10MiO86JxeFs1hbzdpCdBvWtUakZEf-SH98T12iydXUnHxUDiHOHtLWTQpCN-H4Xp7YzHpHB_GDQlfFIXZyxZVXufA6dUqjFrpo8B5Rsldm1.svg)

## Emoji

Both Github Flavored Markdown and GitLab Flavored Markdown support emoji. If you
want to do a thumbs up, for example, you can type in `:+1:`, :+1:. Here is a
`gist` someone made, a cheat sheet of all of the emojis in
Github Flavored Markdown: [https://gist.github.com/rxaviers/7360908](https://gist.github.com/rxaviers/7360908).
This is a cheatsheet for GitLab Flavored Markdown: [https://www.webfx.com/tools/emoji-cheat-sheet/](https://www.webfx.com/tools/emoji-cheat-sheet/).
This article does not compare all the emojis in each syntax, so we won’t go too
deep into emojis.

## Front Matter

In Github Flavored Markdown, Front Matter can only be in the form of `YAML`.
GitLab Flavored Markdown supports all of that on top of `JSON` and `TOML`. You can
add other languages also. Here are a few examples for front matter brought from
the GitLab Flavored Markdown Docs:

### YAML

This is supported in both GitLab Flavored Markdown and Github Flavored Markdown

```markdown
---
title:  About Front Matter
example:
language:  yaml
---
```

### TOML

This is only supported in GitLab Flavored Markdown

```markdown
+++
title = "About Front Matter"
[example]
language = "toml"
+++
```

### JSON

This is only supported in GitLab Flavored Markdown

```markdown
;;;
{
 "title": "About Front Matter"
 "example": {
  "language": "json"
 }
}
;;;
```

### Other

Other languages are also supported by adding a specifier to the delimiters.
This is only supported in GitLab Flavored Markdown. Here is an example with `PHP`:

```markdown
---php
$title = "About Front Matter";
$example = array(
 'language' => "php",
);
---
```

## Diff

There are two forms of diff: inline and multiline diff. Multiline diff is
supported in both Github Flavored Markdown and GitLab Flavored Markdown.
It is rendered as the following:

```diff
+ added
- removed
```

It can be added in by using the `diff` specification in syntax highlighting.
Currently, Github Flavored Markdown doesn’t support inline diff.
Only GitLab Flavored Markdown does. Here is how to represent it
(examples brought from GitLab Documentation):

- `{+ addition 1 +}`
- `[+ addition 2 +]`
- `{- deletion 3 -}`
- `[- deletion 4 -]`

  They would be rendered as:
  ![Diff Preview](https://docs.GitLab.com/ee/user/img/inline_diff_01_v13_3.png)

## Equations/Math

GitLab Flavored Markdown can render math and Github Flavored Markdown can’t.
According to the documentation, math is rendered using `KaTeX` and written in `LaTeX`.
Inline math can be rendered with `$` (dollar signs). Here is an example using
inline math:

```markdown
$a^2+b^2=c^2$
```

This should render the Pythagorean theorem. For multiline math, just add `math`
as the syntax highlighting specified in a multiline code block.

## References

There are multiple types of references that can be used to refer to different
repositories, people, commits, etc. Keep in mind that the same namespace
trick is only available inside GitLab Flavored Markdown.
 Here is a list of different references:

### User

To refer to a user, just type in `@user_name`. The result will be a hovercard
or display that allows you to view the user. Also, in some cases,
it notifies that user.

### Group

The syntax for referring to a group is the same as referring to a user.
Instead, it refers to everyone inside that group. Use `@group_name`.

### Team

The `@all` syntax refers to the entire team.

### Project

To refer to a project, the following syntax is valid: `namespace/project>`

### Issue

To refer to an issue using the `#ID` syntax, where `ID` is the number of the issue.
For cross-project reference, use `namespace/project#ID`. If the project has the
same namespace, use: `project#ID`.

### Pull Request

In GitLab, pull requests are called merge requests. In Github, they use the same
syntax as an issue. In GitLab, on the other hand, instead of a `#` as in issues,
you will have to use an `!`.

### Project Snippets

Snippets are a feature only available in GitLab. To refer to one, instead of a `#`
present inside your reference as in an issue, use a `$`.

### Gists

Gists are a feature only available in Github. According to a gist: [https://gist.github.com/benbalter/5555251](https://gist.github.com/benbalter/5555251),
to refer to a gist inside Github Flavored Markdown, use the following syntax
`{% gist ID %}`, where `ID` is the ID of your gist. You can get the ID of your
gist by referring to the URL.

### Epics

Epics are a feature only available in GitLab Gold. To refer to an Epic, use the
`&ID` syntax, with `ID` representing the ID of the Epic. For cross-project
reference, use `group/subgroup&ID`.

### Vulnerabilities and Feature Flags

Introduced in 13.7, vulnerabilities is a GitLab Ultimate feature, but feature
flags is avaliable to all. To reference them:

|Reference|Input|Cross-project Reference|Shortcut withing same Namespace|
|--|--|--|--|
|vulnerabilities|`[vulnerability:123]`|`[vulnerability:namespace/project/123]`|`[vulnerability:project/123]`|
|feature flags|`[feature_flag:123]`|`[feature_flag:namespace/project/123]`|`[feature_flag:project/123]`|

### Labels

According to this issue: [https://github.com/isaacs/github/issues/305](https://github.com/isaacs/github/issues/305),
Github Flavored Markdown does not support references to labels, yet. Here is a
table brought from the GitLab documentation for label references:

|Reference|Input|Cross-project Reference|Shortcut withing same Namespace|
|--|--|--|--|
|label by ID|`~123`|`namespace/project~123`|`project~123`|
|one-word label by name|`~bug`|`namespace/project~bug`|`project~bug`|
<!-- markdownlint-disable MD013 -->
|multi-word label by name|`~"feature request"`|`namespace/project~"feature request"`|`project~"feature request"`|
<!-- markdownlint-enable MD013 -->
|scoped label by name|`~"priority::high"`|`namespace/project~"priority::high"`|`project~"priority::high"`|

### Milestones

Again, GitHub Flavored Markdown doesn’t have support for referencing milestones.
However, GitLab Flavored Markdown does. Here is a table on how to reference
milestones in GitLab Flavored Markdown:

|Reference|Input|Cross-project Reference|Shortcut withing same Namespace|
|--|--|--|--|
|milestone by ID|`%123`|`namespace/project%123`|`project%123`|
|one-word milestone by name|`%bug`|`namespace/project%bug`|`project%bug`|
<!-- markdownlint-disable MD013 -->
|multi-word milestone by name|`%"feature request"`|`namespace/project%"feature request"`|`project%"feature request"`|
<!-- markdownlint-enable MD013 -->

### Commits

GitHub does support referencing commits just like GitLab. For referencing a single
commit, just type in the commit hash, shortened or in long form, e.g. `9ba12248`.
If you want to do cross-project referencing, use the `namespace/project@HASH` syntax,
or `project@HASH` (for same namespace).

### Commit Ranges

Commit Ranges are a feature that allow you to reference multiple commits to compare
them. Currently, Github Flavored Markdown does not support referencing them, but
GitLab Flavored Markdown does. The syntax is similar to referencing commits,
except it is followed by a `...SECONDHASH` for the second commit hash.

### Repository File References

When referencing files within the repo, use the following syntax: `[README](doc/README.md)`.
This syntax is supported by Github Flavored Markdown. Also, if you want to
reference a certain line in that file, end the link with a `#L{NUM}`, replacing
`{NUM}` with the line number.

## Table of Contents

GitLab does support builtin table of contents generating inside the markdown
using the following syntax:

```markdown
[[_TOC_]]
```

This will create a table of contents at the position where `[[_TOC_]]` is found.
Though GitHub doesn't natively allow you to do this, there are multiple workarounds.
Here are some of them:

1. Use the builtin table of contents viewer when previewing markdown:

![Table of Contents Viewer](https://i.ibb.co/pycnfM1/Screen-Shot-2021-04-28-at-5-59-41-PM.png)\
2. Use `doctoc`. This is a GitHub Action that will update your table of contents.
An example repository using it is `nvm`: <https://github.com/nvm-sh/nvm>
3. Use the `Markdown All in One` Visual Studio Code extension: <https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one>
4. Manually type in and update the Table of Contents

If any of the above don't work, there is a `StackOverFlow` question
on this topic: <https://stackoverflow.com/questions/18244417/how-do-i-create-some-kind-of-table-of-content-in-github-wiki>.

## Metrics

GitLab has a builtin feature to embed metrics into their markdown. To read into
this with more detail, look at: <https://docs.GitLab.com/ee/operations/metrics/embed.html>.

## Blockquotes

Blockquotes are a way to show which text you are replying to or for quotes. For
example, if I am in a conversation with someone else, it can look similar to this
with blockquotes:

---

Person A:
I found a bug inside the program

Person B:
> I found a bug inside the program

What is the bug?

Person A:
>
> > I found a bug inside the program
>
> What is the bug?

The menu seems to be broken.

---

To use block quotes, you have to precede the line that wants to be blockquoted
with a `>`. Here is an example:

```markdown
> Imagination is more important than knowledge.
> - _Albert Einstein_
```

Though both Github Flavored Markdown and GitLab Flavored Markdown support blockquotes,
only GitLab Flavored Markdown supports multi-line blockquotes. Here is an example
of using multi-line blockquotes:

```markdown
>>>
This is someone who wrote a multi-line comment
I am replying to them
Everything I am typing will render as a blockquote in GitLab Flavored Markdown
>>>
```

## Footnotes

Footnotes is a feature avaliable only inside GitLab Flavored Markdown. Footnotes
let you link to notes at the end of the markdown. For example, if I want to write
the definition for some complicated word underneath, then I can use it. Also, if
I want to give credit or links, then it can be used for that too. It is currently
only supported by GitLab Flavored Markdown, however it is not hard to use alternatives
in Github Flavored Markdown. Here is the syntax in GitLab Flavored Markdown:

```markdown
  
A footnote reference tag looks like this: [^1]

This reference tag is a mix of letters and numbers. [^footnote-42]

[^1]: This is the text inside a footnote.

[^footnote-42]: This is another footnote.
```

And an alternative doing the exact same thing shown in GitLab Flavored Markdown
in Github Flavored Markdown is the following:

```html
A footnote reference tag looks like this: <sup><a href="#footnote-1">1</a></sup>

This reference tag is a mix of letters and numbers. <sup><a href="#footnote-footnote-42">footnote-42</a></sup>

<sup id="footnote-1">1</sup>This is the text inside a footnote.

<sup id="footnote-footnote-42">footnote-42</sup>This is another footnote.
```

As seen above, all that I did was make the footnote references in superscript and
link to the ID of the footnote at the bottom. At the bottom, the footnotes are in
superscript and the ID is as the hash was looking for above. However, if you have
a direct link that you want the superscript to link to, it is possible. According
to this `StackOverFlow` answer (<https://stackoverflow.com/a/39110752/13514657>):

```markdown
[1]

[1]: http://www.example.com/link1
```

Here is an example of footnotes rendering: <https://docs.GitLab.com/ee/user/markdown.html#footnotes>.

## Media

Github Flavored Markdown does provide a way to put in images, but it does not
support footnote-like syntax for images nor does it support Video or Audio
which GitLab Flavored Markdown does. The most common way to declare images in
markdown is like this:

```markdown
![alt text1][logo]
![alt text](img/markdown_logo.png "Title Text")
```

However there is another method which looks similar to footnotes as mentioned
above. It is only supported in GitLab Flavored Markdown:

```markdown
[logo]: img/markdown_logo.png
[logo]: img/markdown_logo.png "Title Text"
```

In this syntax, the alternative text comes first in square brackets and is
followed by a colon and a space. Then comes the link to the image followed by the
optional title text in double quotes. The GitLab documentation does not mention
any support for this syntax inside videos or audio. However, the first piece of
code for images that I showed above is exactly how you reference videos/audio.
The file though, will be a video or audio file.

# Conclusion

Thanks for reading my article on GitLab Flavored Markdown vs. GitHub Flavored Markdown.
Of course, GitLab Flavored Markdown is more advanced and supports more than the latter.
