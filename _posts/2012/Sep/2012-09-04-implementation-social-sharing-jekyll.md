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
{% highlight html %}
{% raw %}
...

# Settings for sharing 
  # Sharing is for things like tweet, plusone, hn upvotes, like, linkedin
  # Add a tweet button 		=> provider : tweet
  # Add a like button 		=> provider : like (you also need a facebook appid)
  # Add a plus one button 	=> provider : plusone
  # Add a HN button 		=> provider : hn
  # Add them all (i.e. hn + tweet + plusone + like) => provider : all
  # Set 'provider' to the sharing provider you want to use.
  # Set 'provider' to false to turn sharing off globally.
  #
  sharing :
    provider : all
    twitter :
      size :
      via :
      count :
    facebook :
      appid : 123
      layout : button_count
      font :
      faces : false
      width : 90
    googleplus :
      size : medium
      width :
      annotation : bubble
    linkedin :
      counter : right      
...
{% endraw %}
{% endhighlight %}
