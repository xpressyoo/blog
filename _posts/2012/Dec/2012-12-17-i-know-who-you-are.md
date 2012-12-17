---
title: I Know Who You're!
tagline: What your Browser Can Reveal About Yourself...
description: I know who you're; what your browser can reveal about yourself.
layout: post
tags : [hacking, tips]
---
{% include JB/setup %}

Nowadays, your daily browsing activity is stored, aggregated, analysed and sold for advertising purposes by Internet companies, e.g. Gmail [scans your emails](https://mail.google.com/mail/help/intl/en_GB/more.html#scanning) to deliver "targeted" ads, Facebook [serves ads](http://www.nytimes.com/2012/02/05/opinion/sunday/facebook-is-using-you.html?pagewanted=all&_r=0) depending on your relationship status or interests, etc. No big news here! What is less known is how your browser can reveal a sensible amount of information about yourself. This post aims at highlighting and describing the diverse types of data websites can quite easily gather just by "sniffing" your browser, and how these information once all wired together can help recompose a significant part of who you are.

## I know where you live

When your computer, tablet or smartphone connects to a website, it leaves a log of its public [IP address](http://en.wikipedia.org/wiki/Internet_Protocol). This is because the website needs your IP in order to make the connection between its server and your machine and then send the web pages you requested. All the existing IP addresses are assigned in blocks and publicly registered to specific Internet Service Providers (ISPs) or other organizations (universities, governments, corporations, etc.), making easy their access and their classification depending on geographical parameters. Today, several independent companies have created large databases linking a specific IP address to its respective country, city, region, ISP. To check it by yourself, visit [this service](http://www.ip-tracker.org/).

Now, it is extremely simple for a developer to retrieve the IP address of a visitor and translate it into geographical attributes. For instance, the following snippet uses jQuery and the [Wipmania API](http://www.wipmania.com/en/api/) to find out the country associated to the IP address of a visitor.

<code>IP-based Geolocation</code>
{% highlight html %}
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script>
$.getJSON('http://api.wipmania.com/jsonp?callback=?', function(data) { // Ajax call powered by jQuery

	var country = data.address.country; // get Country associated to the IP address

	alert('country');

});
</script>
{% endhighlight %}

#### Tip: Not comfortable with that? Use proxies or become anonymous thanks to [TOR](https://www.torproject.org).

## I know which language you speak

Your browser makes easily available the language in which it is configured. It is pretty common in web development to retrieve this piece of information to serve targeted content depending on the language of the visitor, e.g. currency, default language. The following snippet of code written in JavaScript detects the language code and translates it into human-readlable form.

<code>Language Detection</code>
{% highlight javascript %}
// Detect language of the browser
var lang = (navigator.language) ? navigator.language : navigator.userLanguage; 

// translate language code to actual language
	if (lang.indexOf('en') > -1) lang = 'English'; 
		else if (lang.indexOf('de') > -1) lang = 'German'; 
		else if (lang.indexOf('it') > -1) lang = 'Italian'; 
		else if (lang.indexOf('fr') > -1) lang = 'French'; 
		else if (lang.indexOf('es') > -1) lang = 'Spanish'; 
		else if (lang.indexOf('cn') > -1) lang = 'Chinese'; 
		else if (lang.indexOf('gr') > -1) lang = 'Greek'; 
		else if (lang.indexOf('pl') > -1) lang = 'Polish'; 
		else if (lang.indexOf('jp') > -1) lang = 'Japanese'; 
		else if (lang.indexOf('in') > -1) lang = 'Indian';
		else if (lang.indexOf('ru') > -1) lang = 'Russian'; 
		else if (lang.indexOf('kr') > -1) lang = 'Korean';

		// and so on and so forth...
 
{% endhighlight %}

## I know what technology you're using

Browser interrogation, or the fact to gather as much data as possible about the configuration of your machine, makes browser tracking and device fingerprinting possible. It is important to understand how this sniffing process can help companies or individuals track and follow you around the web thanks to the precise information they have gathered about your machine, e.g. operating system, browser, browser version, screen resolution and plugins installed. It turns out that a machine's configuration tends to be highly unique and easily accessible even if the browser’s cookies are deleted. Not convinced? Feel free to perform this [nice test](http://panopticlick.eff.org/) provided by the Electronic Frontier Foundation.

To illustrate the logics behind this, here are some lines of JavaScript that get the browser, browser version and operating system of a visitor.

<code>Browser Interrogation</code>
{% highlight javascript %}
var BrowserDetect = {
        init: function() {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
        searchString: function(data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
                } else if (dataProp) return data[i].identity;
            }
        },
        searchVersion: function(dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        }, {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        }, {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        }, { // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        }, { // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }],
        dataOS: [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }]
    };

    // Initialization Browser sniffing
    BrowserDetect.init();

    // Operating system
    var os = BrowserDetect.OS;
    // Browser
    var browser = BrowserDetect.browser;
    // Browser version
    var version = BrowserDetect.version;
{% endhighlight %}

Once the browser detected, let's say Google Chrome, we can retrieve the extensions installed via small scripts such as the one proposed by [Kotowicz.net](http://blog.kotowicz.net/2012/02/intro-to-chrome-addons-hacking.html).

## I know your browsing habits

Another crucial type of information developers can gather is the websites you tend to visit regularly. There exist a few different methods to achieve this. One smart exploit I am going to present here detects the websites in which a visitor is logged in via the authenticated images event handler. The method is straightforward.

Assume a specific image, e.g. https://example.com/img.png, is only accessible if the browser is currently logged into https://example.com. If the browser is not signed-in when I instruct the browser to make the Web request, the image will obviously not be returned. If the browser is signed-in, the image will be returned normally. Based upon this binary behavior, I can detect the difference between a logged-in and not logged-in browser, and by attaching a small bit of Javascript to the IMG tag, can return that information to my site. For example, the following code detects if a visitor is logged into Facebook, Google and Twitter.

<code>Login Detection</code>
{% highlight html %}

<ul>
	<li><span id="FacebookStatus" class="outputStatus"></span>
	<li><span id="TwitterStatus" class="outputStatus"></span>
	<li><span id="GmailStatus" class="outputStatus"></span>
	<li><span id="GooglePlusStatus" class="outputStatus"></span>
</ul>

<!-- Google -->
<img style="display:none;"
	onload="show_login_status('Gmail', true)"
	onerror="show_login_status('Gmail', false)"
src="https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&chtml=LoginDoneHtml&checkedDomains=youtube&checkConnection=youtube%3A291%3A1"
/>
 
<img style="display:none;"
	onload="show_login_status('GooglePlus', true)"
	onerror="show_login_status('GooglePlus', false)"
src="https://plus.google.com/up/?continue=https://www.google.com/intl/en/images/logos/accounts_logo.png&type=st&gpsrc=ogpy0"
/>

<!-- Twitter -->
<img style="display:none;"
	onload="show_login_status('Twitter', true)"
	onerror="show_login_status('Twitter', false)"
src="https://twitter.com/login?redirect_after_login=%2Fimages%2Fspinner.gif"
/>

<script>
// Facebook
 window.fbAsyncInit = function(){
  FB.init({ appId:'XXXX', status:true,  cookie:true, xfbml:true}); // Your App id
  FB.getLoginStatus(function(response){
   if (response.status != "unknown")
   {
    show_login_status("Facebook", true);
   }else{
    show_login_status("Facebook", false);
   }
  });
 };
 // Load the SDK Asynchronously
 (function(d){
  var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";
  d.getElementsByTagName('head')[0].appendChild(js);
 }(document));

// Results
function show_login_status(network, status)
  {
    if (status)
       {
         $("#" + network + "Status").html("You are currently logged in to <span class='red'>" + network + "</span>");
       }else{
         $("#" + network + "Status").html("You are not currently logged in to <span class='green'>" + network + "</span>");
       }
 }

</script>
{% endhighlight %}

Remark that the same methodology can be applied for CSS or JS files, iframes...

#### Tip: Not comfortable with that? Disable 3rd-party cookies in your browser's settings, it helps. Use Private Browsing (Firefox & IE) or Incognito (Chrome) modes as often as you can.

## OK, let's make a break

Before to go further, let's check what type of information can be retrieved from your browser. Here is a simple demo I put in place to illustrate this post: [START DEMO »](http://play.florianbersier.com/who-are-you/)

It's perhaps a good time to summarize and make a few remarks about what we've just seen.

By sniffing your browser, I can easily gather information about your location (IP), language (browser language and IP), get a very precise idea of the software - and even hardware - you're using (browser interrogation), attach an ID to your machine and track you (browser interrogation), and get a good picture of your browsing habits (e.g., login detection).

The effects of such raw data is not terribly severe... if taken separately. However, if wired together and computed by algorithms resting on global empirical data, it then becomes possible to infer more sensible information about yourself. For instance, knowing your browsing activity and machine's configuration, I can get an idea of your age and determine whether there is a higher probability for you to be a male or a female (see figures below).

<img src="http://royal.pingdom.com/wp-content/uploads/2012/08/social-network-gender-distr-580px.jpg" width="580" height="580" alt="Facebook Wall-to-Wall Conversation"/>

<img src="http://royal.pingdom.com/wp-content/uploads/2012/08/social-network-age-distribution-580px.jpg" width="580" height="580" alt="Facebook Wall-to-Wall Conversation"/>

Similarly, given your location, machine's configuration and browsing habits, I can get insights about your income level or education. For instance, according to a [study realized by Orbitz in 2012](http://online.wsj.com/article/SB10001424052702304458604577488822667325882.html), Mac users spend as much as 30% more a night on hotels than PC users. Not bad, eh?!

Conclusion: No need to be Google or Facebook to have a good idea of who you are. Surely, the granularity of information gathered from your browser is not comparable to the one proposed by big current Internet players. However, you should be aware that smart or even malicious websites have the means to access more sensible data about yourself than you would ever imagine. To be short, web browsers do NOT protect your privacy.

Feel free to leave your comments and questions below.
