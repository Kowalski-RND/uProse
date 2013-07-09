μ!
====

μ! is a flat-file, javascript powered blogging platform that aims to be **super lightweight** &amp; **hassle free**.

The only requirements to get online is to have the contents of the build folder hosted someplace<br>
(actual webhost, github pages, Dropbox public folder, etc).

This will provide a very basic blogging platform without any bells or whistles. With this basic frame, <br>
customization will be a breeze as you only need [place actual number here] lines of code to use μ! <br>
on the page, allowing you to retrofit an existing page with a blog without any database requirement.

###Why?
Why another blogging platform? I say why not. It is a nice little experiment and should be fun to code.

###Configuration
The blog configuration is all contained in JSON format within the conf.json file.

Here you can specify the basics such as:
- Blog Title (separate options exist for title bar and actual title on page)
- Tagline
- Owner
- Social Media Links
- Post Categories

###Writing
μ! comes with an editor which generates posts for you in JSON format. Since no database is <br>
used, μ! does not have any authentication. This means that to add new posts you must edit the <br>
posts.json file.

The editor makes this easy. The editor will load your previous posts from the flatfile. When it<br>
is time to "save", the editor will append the new post into the existing flatfile. From here you<br>
just have to copy/paste into or overwrite the existing posts.json file.

Once updated, the loader will find the new post and display it on the page.

###License
μ! is licensed under the MIT license. Go ahead and break / improve it!
