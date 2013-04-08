---
title: When Robots Meet the Internet
tagline: Or how the Internet will make robotics part of our everyday lives
description: How the Internet in general and the Internet of Things in particular will make robotics part of our everyday lives.
layout: post
tags : [IoT, opinion, robotics]
---
{% include JB/setup %}

Robots generally get a bad role in the movies, travelling back in time to hunt us down or turning against their creators and endangering the Human race. Outside of fiction, robots are still perceived in the collective imagination as a [threat to employment](https://encrypted.google.com/search?hl=en&q=robots%20employment%20threat). Such a poor reputation is largely explained by the fear of the unknown and the difficulty to apprehend the whys and wherefores of robotics. Hopefully, things are about to change and the Internet is probably going to be the driving force behind the evolution of mindsets and the demystification of robots. The Internet and more precisely the Internet of Things indeed propose tools and protocols that can tackle efficiently key challenges for the development and democratization of robotics, i.e. object recognition, information processing and control. 

> The Internet is continuously being supplied with eyes and ears, but it still misses arms and legs to take action! \[...\] Robots seem the logical candidates that take on the role of gateways of information flows. _-- CFP for [Cloud Robotics and the Internet of Things](http://www.theinternetofthings.eu/prepublication-robotics-meets-internet-things-soon-be-cfp) (2012)_

This post starts with a brief definition and some illustrations of what is the Internet of Things. Then I move to the identification and description of three crucial axes for the development of robotics, namely object recognition, information processing and control. The raison-d'être of this section is to share some insights concerning the way the Internet and IoT could provide interesting and natural answers to the latter dimensions. I conclude by highlighting some points that might endanger the sustainability of an environment made of Internet-powered/aware robots, that is a lack of standardization and integration, (cloud) data privacy concerns, the risk of technological "solutionism" and vague human-robots interaction laws.


## Internet of Things (IoT)

No need to define what is the Internet, or more precisely, what is the first version of the Internet, that is a global system of interconnected computer networks which makes available thanks to a specific protocol ([TCP/IP](http://en.wikipedia.org/wiki/Internet_protocol_suite)) a growing amount of data created by human beings. The Internet of Things is sometimes described as the next version of the Internet and is all about data created by things. As its name indicates, the Internet of Things (IoT hereafter) refers to physical and uniquely identifiable objects (or things) that are connected to the Internet and are so able to identify themselves to other devices and to communicate with them. In other words, IoT moves the boundaries of the information system from the online world to the physical world. 

> Like something out of a sci-fi movie, the Internet of Things promises to transform our daily lives. _-- Daniel Saks, AppDirect [in Wired](http://www.wired.com/insights/2013/03/faster-please-breaking-down-barriers-to-the-internet-of-things/) (2013)_

To achieve this, IoT mainly rests on Radio-frequency identification ([RFID](http://en.wikipedia.org/wiki/RFID)), i.e. the wireless non-contact use of radio-frequency electromagnetic fields to transfer data, in order to identify and track tags attached to objects. For instance, RFID tags can report sensor data such as motion, temperature or humidity, identification data (e.g. biometric passports) and so on and so forth. Note that IoT also commonly uses barcodes and other 2D-codes (e.g. QR codes) for identification purposes. Another crucial (coming) technological feature of IoT is the unique adressability of things, meaning that every object is identified by a singular IP address. Thanks to the [IPv6 protocol](http://en.wikipedia.org/wiki/IPv6) and its extremely large address space (roughly 2<sup>128</sup> IP addresses), this won't be too much of a problem!

### A Few Examples

An over-used and quite limited (to not say dumb) illustration of IoT is the "[smart fridge](http://fuckyeahinternetfridge.tumblr.com/)", or the fact to have a fridge able to notify you when you run out of milk and even order some if needed. Instead of talking about fridges, I focus in the coming lines on three different IoT-related products and ideas I find convincing and promising. The first example highlights the ability for objects to communicate between each others, the second one shows how things can become smart and autonomous, and the third and last example provides a meaningful illustration of what sensors-powered objects can do.

#### i) [Automatic](http://www.automatic.com/) -- Your Car and Smartphone, Connected
_Nota Bene: To play/pause a video, just click on it._

<iframe width="560" height="315" src="http://www.youtube-nocookie.com/embed/_AyXNeRbpRk?wmode=transparent;rel=0;showinfo=0;controls=0" frameborder="0" > </iframe>

> The device \[Automatic\] combines two burgeoning trends—the "Internet of things", where traditionally offline gadgets are connected to the Internet to amplify their usefulness, and the mining of data that's collected by our devices for meaning. By putting these two together, the company thinks it can get users to conserve gas and spend less—and make a profit itself while doing so. _-- [MIT Technology Review](http://www.technologyreview.com/news/512211/gadget-gets-under-the-hood-to-bring-analytics-to-driving/) (2013)_

#### ii) [Nest](http://www.nest.com/) -- The Learning Thermostat

<iframe width="560" height="315" src="http://www.youtube-nocookie.com/embed/L8TkhHgkBsg?wmode=transparent;rel=0;showinfo=0;controls=0" frameborder="0" > </iframe>

> The Nest is a game changer. \[... It\] learns from user behavior and eventually adjusts the home's climate control based on previous activity. _-- [TechCrunch](http://techcrunch.com/2011/12/22/nest-arm-zigbee/) (2011)_

#### iii) [MYO](https://getmyo.com/) -- The Gesture Control Armband

<iframe width="560" height="315" src="http://www.youtube-nocookie.com/embed/oWu9TFJjHaM?wmode=transparent;rel=0;showinfo=0;controls=0" frameborder="0" > </iframe>

> It looks like Minority Report, but better: the MYO armband will let you control iTunes by snapping your fingers, command radio-controlled toys like Luke using the Force, and flash through Powerpoint presentations without using a clicker. _-- [MIT Technology Review](http://www.technologyreview.com/view/512016/can-a-myoelectric-armband-replace-your-mouse/) (2013)_

## I-Robot

This section is interested in showing how the Internet in general and IoT in particular will occupy an increasingly prominent role in the future of robotics, eventually leading to the coming of Internet-powered robots (I-Robots henceforth). Three crucial challenges for the development of robots are identified and presented, that is object recognition, information processing and control. 

### Object Recognition

> Object recognition is a key unresolved challenge for robotics. _-- Michahelles, van Kranenburg and Waibel, [RFID Journal](http://www.rfidjournal.com/articles/view?9773) (2012)_

Robots are by definition autonomous systems that need to interact with their specific environments. The latter observation implies that they must be able to recognize the physical objects surrounding them in a first stage in order to take appropriate actions in a second stage. Nowadays, object recognition is mainly achieved through image recognition, i.e. diverse algorithms extract specific object features from a video stream or single image and compare them with other objects sharing the same features stored in a database. Unnecessary to emphasize that such a process is both costly in terms of computations and error-prone.

IoT proposes a completely different way of dealing with object recognition. By making objects "smart" and connected, robots don't have to identify objects around them since objects automatically identify themselves to robots. To illustrate this, let's consider a very trivial example: a robot whose unique function is to prepare your wake up coffee. In such a case, object recognition could be used to track the robot's position in the kitchen, to identify a coffee mug or the coffee pot's handle via tags, e.g. a barcode indicating that the object is a mug with a specific capacity in centiliters.

An existing and early application of IoT-capable robots is the one developed on a large scale by [Kiva Systems](http://www.kivasystems.com/). This company, recently acquired by Amazon, proposes warehouse robots that use QR codes to sense their locations (see video below).

<iframe width="560" height="315" src="http://www.youtube-nocookie.com/embed/QhfDKeDUvbE?wmode=transparent;rel=0;showinfo=0;controls=0" frameborder="0" > </iframe>

Assuming that more and more objects i) will be connected to the Internet (e.g. through a wireless home network), ii) will use a common protocol to communicate and interact, iii) or will be tagged (e.g. barcodes) may sound strange and unrealistic in 2013 but this won't be the case in a few years from now.


### Information Processing

> A robot is a machine that gathers information about its environment and uses that information to follow instructions to do some sort of work. _-- [The Tech Museum of Innovation](http://www.thetech.org/) (2000)_

The Tech Museum's definition of robots is especially interesting because it emphasizes well the vital role played by information and information processing in robotics. Indeed, robots are "intellingent" systems who continuously treat and process data to achieve tasks they have been designed for. And more complex the tasks, more important is the amount of information to process, leading inevitably to heavier computations and larger costs.

However, a significant part of these computations does not need to take place in real-time, and it's where the Internet can help. By moving to the [cloud](http://cdn.thenextweb.com/wp-content/blogs.dir/1/files/2012/12/Grishin-Final-SB.jpg) actions without hard real-time requirements, the computing power on the robot is reduced, improving then operation duration of systems and decreasing costs. For instance, a common high-level robotics task which does not require hard real-time is called "mapping". Mapping is the fact to store a description of the environment to allow a robot to localize a landmark or itself, e.g. this can go from trajectories planning to object grabbing.

Two other obvious advantages of offloading computation to the cloud are that such a centralization can foster collaboration and simplify software updates. For example, if robots share the same clouding platform, they could build a common map, and some of their functions could be updated directly from the cloud like a smartphone's application, e.g. [RobotAppStore](http://www.robotappstore.com/).

Initiatives like [RoboEarth](http://www.roboearth.org/what-is-roboearth), a "World Wide Web for robots", all together with its recent protocol or [PaaS](http://en.wikipedia.org/wiki/PaaS) called [Rapyuta](http://rapyuta.org/rapyuta-the-roboearth-cloud-engine) (see video below) are concrete illustrations of cloud robotics.

<iframe width="560" height="315" src="http://www.youtube-nocookie.com/embed/4-ir1ieqKyc?wmode=transparent;rel=0;showinfo=0;controls=0" frameborder="0" > </iframe>

It makes no doubt that cloud computing will be a key factor in the democratization of robots, decreasing their cost of production and maintenance, while increasing their "knowledge" and computing capacity thanks to collaboration and centralization.


### Control

> 1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.
> 2. A robot must obey any orders given to it by human beings, except where such orders would conflict with the First Law.
> 3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law. 
> _-- Isaac Asimov, "I, Robot", [The Three Laws of Robotics](http://en.wikipedia.org/wiki/Three_Laws_of_Robotics) (1941)_

The Internet already has and will have a growing importance in the way humans control robots. In this section, I consider three different dimensions, depending on the features of human-robot interactions (HRI). Please also note that as a matter of personal preference, the word "communication" is used instead of "control" in the next lines.


#### Hard Communication

I define hard communication as the fact to communicate with an I-Robot using a physical or hard object connected to the Internet, e.g. a smartphone, a tablet, a laptop, some [Google's glasses](http://www.google.com/glass/start/what-it-does/) or IoT-capable items. Assuming that more and more robots and things will be connected to the Internet, hard communication will become increasingly important. For instance, we will communicate with a robot present in our home while we are away via a specific application installed on our smartphones. By making communication between a robot and a human as easy as a touch on a screen via pre-configured software, this type of communication will certainly democratize the use of robots.

An early and fun illustration of hard communication is proposed by LEGO with its "[Mindstorms](http://mindstorms.lego.com/en-us/default.aspx)" (see video below).

<iframe width="560" height="315" src="http://www.youtube-nocookie.com/embed/RHdiBvpq7Dg?wmode=transparent;rel=0;showinfo=0;controls=0" frameborder="0" > </iframe>


#### Soft Communication

Soft communication regroups Internet technologies which allow more natural or softer ways to communicate with robots. Specifically, soft communication is close to the field of artificial intelligence ([AI](http://en.wikipedia.org/wiki/AI)). The main idea here is that cloud robotics will increase the amount of data available to robots, making them "smarter" and so more prone to interact and communicate with humans in a soft way. For example, text-to-speech ([TTS](https://en.wikipedia.org/wiki/Text_to_speech)) technology is promised to a bright future in robotics, robots being able to understand, interpret and reply to requests when we will talk to them.


#### Raw Communication

I define raw communication as the fact to communicate with robots using programming languages. This is the raw basis of every kind of HRI. Here, the introduction of IoT and cloud computing into robotics will surely have important effects on the type of languages (e.g. Python) and data formats (e.g. JSON) robots will rest on, encouraging the adoption of tools and methods already commonly used by Web developers.

The coming generation of I-Robots will also certainly encourage the creation of new [API](http://en.wikipedia.org/wiki/API)s, e.g. to facilitate the communication between robots and diverse IoT objects. Finally, we can expect to observe a growing enthusiasm for the development and sharing of robot-targeted scripts on platforms like [Github](https://github.com/), constantly increasing the possibilities and fonctionalities of our beloved autonomous systems.


## Challenges & Future Directions

We have seen that the Internet can foster the development and democratization of robotics in many respects. Specifically, IoT provides a completely different way of dealing with object recognition, by making key objects in our daily lives capable of communicating with autonomous systems. Cloud computing decreases the amount of computations that a robot needs to do on its own by centralizing a consequent part of data and calculations in the cloud, encouraging so collaboration and facilitating software maintenance. Finally, the Internet transforms the way we communicate with robots, by making control easier, more natural and more open. To be concise and to summarize, the Internet provides a promising new platform for the development of smarter and cheaper robots.

However, if we want these changes to be viable and sustainable in the long run, there are a few challenges ahead we need to be aware of and willing to deal with, namely standardization, data privacy, technological solutionism and legal framework for HRI.

### Standardization

In a perfect world, IoT would rest on a unique "API", allowing every object connected to the Internet to communicate and to interact with other ones using a common "language". Now, this is far from reality. The Internet of Things is an emerging market, and current IoT companies all propose products that use their own specific protocol. If things go on like that, we will end up with a situation where Internet-capable things from company X will be able to communicate between themselves but won't be capable of interacting with objects from company Y or company Z, limiting then the promises and possibilities of the Internet \[of Things\].

#### One API to rule them all?

The main challenge we're facing is that unlike the creation of the Web, the development of IoT is primarily businness driven. The Internet favorizing a "winner-takes-the-most" market structure, this implies that a very few IoT companies will be the unquestioned leaders of this sector in a few years from now. Knowing this, some different scenarios could lead to the emergence of a standard. For instance, if one or several of the latter companies would decide to make their API open-source at a certain point of time, this could encourage start-ups active in the Internet of Things to adopt it, independent developers to write scripts based on it and so on... leading eventually to the birth of a sound and major standard controlled by an independent and international organization, like the [W3C](http://en.wikipedia.org/wiki/W3C).


### Data Privacy

> Certainly any time you have something autonomous or semi-autonomous, you should worry about who controls it. _-- Bruce Schneier, author of [Liars and Outliers](http://www.schneier.com/book-lo.html) - in [The Network](http://thenetwork.cisco.com/) (2013)_

In the coming years, the Internet of Things and Cloud Robotics will clearly produce a lot more information about ourselves, our consumption, our habits, etc. While the "data privacy & security" topic is not new at all, it seems important to make people sensitive to the fact that the dimensions and completeness of information stored about themselves will grow exponentially in the next few years. We will need to accompany this new dynamics with a continuing and increasing legal and technological effort.


### Technological Solutionism

> \[...\] A pervasive and dangerous ideology that I call "solutionism": an intellectual pathology that recognizes problems as problems based on just one criterion: whether they are "solvable" with a nice and clean technological solution at our disposal. Thus, forgetting and inconsistency become "problems" simply because we have the tools to get rid of them — and not because we've weighed all the philosophical pros and cons. _-- Evgeny Morozov in [The New York Times](http://www.nytimes.com/2013/03/03/opinion/sunday/the-perils-of-perfection.html/) (2013)_

[Morozov](http://www.evgenymorozov.com/)'s solutionism is somehow linked to the code of ethics we need to keep in mind whenever creating or developing a new technology. Put differently, technological progress should be always envisaged in terms of [social surplus](http://market.subwiki.org/wiki/Social_surplus), i.e. the overall value of this technology for the whole society and not only for a given group of individuals.

### Legal Framework for Human-Robot Interactions

Besides ethics, we will need to think of an efficient legal framework in order to accompany a new environment and a new kind of interactions between machines and human beings. Murphy and Woods revisited in 2009 the legendary three [laws of robotics](http://en.wikipedia.org/wiki/Three_Laws_of_Robotics) first proposed by Asimov in the 1940s, and called them "The Three Laws of Responsible Robotics":

> 1. A human may not deploy a robot without the human-robot work system meeting the highest legal and professional standards of safety and ethics. 
> 2. A robot must respond to humans as appropriate for their roles.
> 3. A robot must be endowed with sufficient situated autonomy to protect its own existence as long as such protection provides smooth transfer of control which does not conflict with the First and Second Laws.

Those could represent a good start...


## Short Conclusion

No doubt that the Internet and robots are made to evolve together. By the end of the decade, their technological symbiosis will have significantly transformed our daily lives. Let's just hope that we will do everything to ensure that such an important and promising technological progress will benefit to the whole Human kind...

> Robots will naturally interact with people both physically and cognitively based on advanced communication and information processing – in all areas of our lives. Robotics will be a key element for dealing with societal challenges Europe is facing. From ageing society, to creation and retention of jobs, growing security threats and increasing worldwide competition for production sites - robotics is a solution provider. _-- [EU Robotics](http://www.eurobotics-project.eu/press-room/eurobotics-press-releases/robots-save-jobs-in-europe.html) (2011)_

> Eventually, the word robot will disappear, the point of acceptance \[will be\] when \[we will\] stop thinking of robots as robots and just in terms of functionality. _-- Sabine Hauert, [Lift Conference](http://videos.liftconference.com/video/1178752/sabine-hauert-robotics-today?player_id=1176439) (2011)_


<em>Credits: Banner picture from the movie "I, Robot" (2004), © 20th Century Fox.</em>
