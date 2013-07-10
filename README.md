μProse
====

μProse is a flat-file, javascript powered blogging platform that aims to be **super lightweight** &amp; **hassle free**.

The only requirements to get online is to have the contents of the build folder hosted someplace<br>
(actual webhost, github pages, Dropbox public folder, etc).

This will provide a very basic blogging platform without any bells or whistles. With this basic frame, <br>
customization will be a breeze as you only need to have a couple lines of code on your page to use μProse, <br>
thus allowing you to retrofit an existing page with a blog without any database requirement.

###That is an odd name.
I thought so too but it actually describes the essence of this project.

The Greek letter μ (Mu) is the International System of Units symbol for micro.<br>μProse is lightweight and small (micro) and lets you write your prose quickly and easily.
<br><br>μ also looks very similar to the letter U and would make the project's name to be Uprose.<br>Uprose *(v.)* - to come into existence or prominence.<br><br>I think either name fits the bill and don't care which one your take to heart.

###Why another blogging platform? 
I say why not. It is a nice little experiment and should be fun to code.

In addition since everything in μProse is stored in a flat file there are no passwords to remember.<br>To update the blog you upload an updated file. It is that simple.

###Configuration
The blog configuration is all contained in JSON format within the conf.json file.

Here you can specify the basics such as:
- Blog Title
- Tagline
- Owner
- Post Categories
- Post Tags
- Footer (copyright etc)

###Writing
μProse comes with an editor which generates posts for you in JSON format. Since no database is <br>
used, μProse does not have any authentication. This means that to add new posts you must edit the <br>
entries.json file.

The editor makes this easy. The editor will load your previous posts from the flatfile. When it<br>
is time to "save", the editor will append the new post into the existing flatfile. From here you<br>
just have to copy/paste into or overwrite the existing posts.json file.

Once updated, the loader will find the new post and display it on the page.

###Extensions
μProse can easily be configured with [Firebase](https://www.firebase.com/) to provide a realtime backend with near-zero configuration on your part.

This feature is not ready for primetime just yet.

###License
μProse is licensed under the MIT license. Go ahead and break / improve it!

###Shout-outs
μProse is built on a really awesome framework maintained by very cool people over at Google.

- [AngularJS](http://angularjs.org/)

Last but not least a shout out to the beautiful default theme used to get you started with μProse.

- [Minimal Theme](https://github.com/orderedlist/minimal) by [Steve Smith](https://github.com/orderedlist) 
