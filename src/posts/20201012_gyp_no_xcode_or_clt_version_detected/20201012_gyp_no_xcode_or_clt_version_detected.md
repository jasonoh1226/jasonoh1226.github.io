---
title: Error - gyp No Xcode or CLT version detected!
author: Jason Oh
date: 2020-10-12 01:57:00
featuredImgUrl: https://images.unsplash.com/photo-1560237731-890b122a9b6c
featuredImgAlt: Mountains with a starry sky
featuredImage: 20201012_gyp_no_xcode_or_clt_version_detected.png
categories: 
- Error
- Gatsby
tags:
- error
---

##### I recently got an error "gyp: No Xcode or CLT version detected when I created a new gatsy project, and this was how I solved the error

&nbsp;

```shell
gatsby new my_project
```

```shell
gyp: No Xcode or CLT version detected!
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:351:16)
gyp ERR! stack     at ChildProcess.emit (events.js:315:20)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:275:12)
gyp ERR! System Darwin 19.6.0
gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /Users/junyoungoh/Desktop/PersonalProjects/jason_gatsby_blog/node_modules/fsevents
gyp ERR! node -v v12.18.3
gyp ERR! node-gyp -v v5.1.0
gyp ERR! not ok 
```

When you get this error, I recommand you reinstall command-line tools by removing the previously installed version.

Here are the steps that you have to follow

&nbsp;


### Step 1 ###

First, get the location of the installed command-line tools by running the command below.

```shell
xcode-select --print-path
```

The result of the above command would be 
```shell
/Library/Developer/CommandLineTools
```

### Step 2 ###

You can now remove it from the system by using the above path.

```shell
sudo rm -r -f /Library/Developer/CommandLineTools
```

### Step 3 ###

Run the following command to reinstall the command-line tool.

```shell
xcode-select --install
```

&nbsp;
If you got the message "Xcode is not currently available from the Software update server", you could go to the apple developer website, and then download the recent version from the site.

[https://developer.apple.com](https://developer.apple.com/downloads/index.action?name=for%20Xcode)


&nbsp;

With the reinstallation of the command-line developer tools the error should disappear when you run any npm or gatsby commands from the command line.

