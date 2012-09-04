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
<pre>
<code>
[...]

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

[...]
</code>
</pre>

This should be pretty straightforward. We just need to declare our provider of choice and enter some options if we want to override the default ones. Note that all the options follow the original syntax of the provider. For example, [Google +1 button options](https://developers.google.com/+/plugins/+1button/) for "size" is \[ small, medium, tall \] and for "annotation" is \[ inline, bubble, none \].


### Jekyll Bootstrap Includes

The second step is to modify the file named <code>sharing</code> into the <code>_includes/JB/</code> folder of our Jekyll Bootstrap installation. The latter file just redirects the provider's taxonomy used in the configuration file to the HTML file that generates the provider's sharing button(s).

For example, if <code>provider : like</code> in <code>_config.yml</code> then the <code>sharing</code> file will include the <code>facebook</code> HTML file present in <code>_includes/JB/sharing-providers/</code>.

<code>The sharing file</code>

As you note, this implies the creation of a new folder named <code>sharing-providers</code> in <code>_includes/JB/</code>. This folder contains the diverse HTML files necessary to the generation of the sharing buttons.

For instance, this blog uses <code>provider : all</code> which calls a file named <code>global</code> looking as follows:

<code>The global file</code>
{% highlight html %}
{% raw %}
<div id="fb-root"></div>

<ul class="post-share ulno mob">

<!-- Hacker News -->
<li class="hn"><span id="hnews"></span>

<!-- Twitter -->
<li class="tw"><a href="https://twitter.com/share" class="twitter-share-button" data-text="{{ page.title }}" data-via="{{ site.JB.sharing.twitter.via }}" data-related="{{ site.author.twitter }}" data-count="{{ site.JB.sharing.twitter.count }}" data-size="{{ site.JB.sharing.twitter.size }}">Tweet</a>

<!-- Google+ -->
<li class="gp"><div class="g-plusone" data-size="{{ site.JB.sharing.googleplus.size }}" data-annotation="{{ site.JB.sharing.googleplus.annotation }}" data-width="{{ site.JB.sharing.googleplus.width }}"></div>

<!-- Facebook -->
<li class="fb"><div class="fb-like" data-send="false" data-layout="{{ site.JB.sharing.facebook.layout }}" data-width="{{ site.JB.sharing.facebook.width }}" data-show-faces="{{ site.JB.sharing.facebook.faces }}" data-font="{{ site.JB.sharing.facebook.font }}"></div>

<!-- Reddit -->
<li><script type="text/javascript" src="http://www.reddit.com/buttonlite.js?i=4"></script>
</ul>

<script>
  
(function(doc, script) {
 	
    // Async Social Buttons
    var js, 
        fjs = doc.getElementsByTagName(script)[0],
        add = function(url, id) {
            if (doc.getElementById(id)) {return;}
            js = doc.createElement(script);
            js.src = url;
            id && (js.id = id);
            fjs.parentNode.insertBefore(js, fjs);
        };

    // Twitter SDK
    add('//platform.twitter.com/widgets.js', 'twitter-wjs');
    
    // Google+ button
    add('https://apis.google.com/js/plusone.js');
    
    // Facebook SDK
    add('//connect.facebook.net/en_GB/all.js#xfbml=1&appId={{ site.JB.sharing.facebook.appid }}', 'facebook-jssdk');
    
    // Hacker News Button 	
      var hn_like = document.createElement('iframe');
      hn_like.frameborder="no";
      hn_like.scrolling="no";
      hn_like.height="28px";
      hn_like.width="110px";
      hn_like.src = "http://hnlike.com/upvote.php?link="
                    + encodeURIComponent(document.location)
                    + "&title="
                    + encodeURIComponent("{{ page.title }}");
      hn_like.innerHTML="iframes not supported by your browser";
      
      var where = document.getElementById("hnews");
      where.parentNode.insertBefore(
        hn_like,
        where
      );
}(document, 'script'));

</script>
{% endraw %}
{% endhighlight %}

Remark that the JavaScript is loaded asynchronously and that we retrieve the option values of the configuration file thanks to the Liquid markdown. The Hacker News button is powered by [hnlike.com](http://hnlike.com/) and uses the Jekyll snippet proposed by [dryman](http://www.idryman.org/blog/2012/04/05/jekyll-octopress-hacker-news-plugin/).

More examples can be found on my [forked version](https://github.com/xpressyoo/jekyll-bootstrap/tree/master/_includes/JB/sharing-providers) of the Jekyll Bootstrap.

### The Jekyll Theme

We're almost done! The last step is to add the sharing buttons to our Jekyll theme. This is achieved by modifying the <code>post.html</code> file present in <code>_includes/themes/name_of_your_theme</code>.

<code>post.html</code>
{% highlight html %}

[...]

    <!-- Paste the 3 next lines where you want the sharing button(s) to appear -->
    <div class="post-sharing">
      
    </div>

[...]

{% endhighlight %}

That's it, we're set!

Feel free to leave your comments and suggestions below.
