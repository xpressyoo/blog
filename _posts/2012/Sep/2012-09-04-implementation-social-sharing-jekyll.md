---
title: Implementation of Social Sharing into Jekyll
tagline: How to add social sharing buttons to your Jekyll Powered Blog
description: How to implement social sharing buttons into Jekyll Bootstrap, the simple, blog aware, static site generator.
layout: post
tags : [hacking, jekyll]
---
{% include JB/setup %}

Two common features of any standard blog are (i) a commenting system and (ii) some social sharing buttons. While Jekyll provides natively a way to add a commenting provider (e.g. Disqus, LiveFyre, Facebook), it does not propose a simple way to add social sharing functionalities yet<sup>1</sup>. This post aims at presenting a way of filling the latter gap based on the Jekyll Bootstrap<sup>2</sup>. I hope this will be useful to a few Jekyll users out there.

1. Read I did not manage to find any satisfying way of achieving it ;)
2. All the code presented below can be found in my [forked version](https://github.com/xpressyoo/jekyll-bootstrap) of the Jekyll Bootstrap on Github.

### Jekyll configuration

Let's start with the beginning, the Jekyll configuration file. We are going to declare the sharing providers we want our blog to support (e.g. Twitter, Facebook, Google+) and the options (if any) necessary for the creation of the respective buttons. Here is how the new sharing section of the configuration file looks like:

<code>The _config.yml file</code>

This should be pretty straightforward. We just need to declare our provider of choice and enter some options if we want to override the default ones. Note that all the options follow the original syntax of the provider. For example, [Google +1 button options](https://developers.google.com/+/plugins/+1button/) for "size" is \[ small, medium, tall \] and for "annotation" is \[ inline, bubble, none \].


### Jekyll Bootstrap Includes

The second step is to modify the file named <code>sharing</code> into the <code>_includes/JB/</code> folder of our Jekyll Bootstrap installation. The latter file just redirects the provider's taxonomy used in the configuration file to the HTML file that generates the provider's sharing button(s).

For example, if <code>provider : like</code> in <code>_config.yml</code> then the <code>sharing</code> file will include the <code>facebook</code> HTML file present in <code>_includes/JB/sharing-providers/</code>.

<code>The sharing file</code>

As you note, this implies the creation of a new folder named <code>sharing-providers</code> in <code>_includes/JB/</code>. This folder contains the diverse HTML files necessary to the generation of the sharing buttons.

For instance, this blog uses <code>provider : all</code> which calls a file named <code>global</code> looking as follows:

<code>The global file</code>

Remark that the JavaScript is loaded asynchronously and that we retrieve the option values of the configuration file thanks to the Liquid markdown. The Hacker News button is powered by [hnlike.com](http://hnlike.com/) and uses the Jekyll snippet proposed by [dryman](http://www.idryman.org/blog/2012/04/05/jekyll-octopress-hacker-news-plugin/).

More examples can be found on my [forked version](https://github.com/xpressyoo/jekyll-bootstrap/tree/master/_includes/JB/sharing-providers) of the Jekyll Bootstrap.

### The Jekyll Theme

We're almost done! The last step is to add the sharing buttons to our Jekyll theme. This is achieved by modifying the <code>post.html</code> file present in <code>_includes/themes/name_of_your_theme</code>.

<code>post.html</code>


That's it, we're set!

Feel free to leave your comments and suggestions below.
