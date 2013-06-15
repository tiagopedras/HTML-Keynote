#HTML Keynote V0.1
### made by TPWD

A Keynote-like way to present a webpage using absolutely positioned slides.

---

Check out the [demo here](http://lab.tpwd.pt/html-keynote/).

---

###Intro

This project was created as a personal challenge after the 2013 Mac Pro website release.
This first version only mimics the main navigation style, using the mouse scroll or the selectors on the right. Next version will attempt the video synchronisation feature.

###Main structure

The main structure is composed of a 100% width and height div, in a 100% tall html and body tags.

The \#main tag has relative positioning to hold all of the absolute positioned slide sections which are using the .slide class.

Most of the content you'll see here is positioned inside an inner tag with the .bottom\_content class.

###Content


You can use all sorts of content inside each slide. And apart from the basic structure and positioning CSS you can position elements slide the slide as you wish.

Each slide is composed of \<div\> with the .bottom\_content class that holds the title and description to the bottom. This is optional and editable although there are predefined animations for the elements inside this tag (bottom move and fade in).


###Large images

Although you could use a background-image in any section, you can also use the .slide container to insert more content.

It's not as easy to control if you wish to achieve a fully covered effect but very helpful if it's an image that will blend with the background.


###Navigation

The side navigation should be manually created with as many items as the slides. It might be advisable to create them dynamically according to the slides themselves.

Urls are using the slide's ids but the navigation labels are independent. You can write what you want.


###Suggestions

Do you have a suggestion for this project? We're more than glad to improve this!

Send it over in [a tweet][] or visit our website at [tpwd.pt][].

[Download from GitHub]: https://github.com/tiagopedras/HTML-Keynote
[@TPWDpt]: https://twitter.com/TPWDpt
[a tweet]: https://twitter.com/intent/tweet
[tpwd.pt]: http://tpwd.pt/
