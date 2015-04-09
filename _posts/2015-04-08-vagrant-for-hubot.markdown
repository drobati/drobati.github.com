---
layout: post
title:  "Making a Vagrant for Hubot!"
date:   2015-04-08 21:39:00
categories: vagrant hubot
---
# Setting up the project

1. Open GitHub for Windows.

![Create](/assets/vagrant-hubot/20150409014340699.png)
1. Create repository.
    1. Name it.
    2. Give it a path.
    3. Create it.

![Overview](/assets/vagrant-hubot/20150409014615118.png)

Were going to publish and then select a branch after opening a pull request.

![Publish](/assets/vagrant-hubot/20150409015228820.png)

1. Publish the repository.
    1. Set repo name.
    2. Enter a description.
    3. Release it to the world.

![Pull Request](/assets/vagrant-hubot/20150409021356892.png)

1. Use github website to open pull request.
    - Open branch, with a new name. I commited here already.
    1. Select new branch.
    2. Input a short subject.
    3. Write some markdown.
    4. Make sure to notice the commit listed.
    5. Create the request.

![Branch](/assets/vagrant-hubot/2015040902160166.png)

Select new pull requested tracked branch.

![Context](/assets/vagrant-hubot/20150409021804331.png)

The context menu will allow us to explore the files.

![Git Shell](/assets/vagrant-hubot/20150409022031767.png)

We can also use the git shell. Helpful for vagrant commands.

![vagrant init](/assets/vagrant-hubot/20150409022131738.png)

Execute `vagrant init`.

![Vagrantfile](/assets/vagrant-hubot/20150409022331290.png)

1. Clean Vagrantfile!
    1. Explore project.
    2. Open `Vagrantfile` in prefered editor.

![Baseboxes](/assets/vagrant-hubot/20150409023133858.png)

Search for a box.

![Clean it](/assets/vagrant-hubot/2015040902301634.png)

Clean out comments, while following them.

![Finished](/assets/vagrant-hubot/20150409023754975.png)

Set `config.vm.box` to "ubuntu/trusty64". I went ahead and finished the rest of
the file too. Enable a provisioner, too. In this case we will use shell.

![Cherry-pick](/assets/vagrant-hubot/20150409024206143.png)

Commit cherry-picked lines or the whole file. I prefer detail.

![Sync](/assets/vagrant-hubot/20150409024327993.png)

Sync commits or view the pull request.

![Up](/assets/vagrant-hubot/20150409024647521.png)

Execute `vagrant up`.

![Merge It!](/assets/vagrant-hubot/20150409033519904.png)

Closing the pull request when you know it works.

_Did vagrant start for you?!_ After executing `vagrant up` we should have seen
it worked. Because it's headless, you wont see the GUI. This means to interact
with it we must use `vagrant ssh`.

# Telling the Provisioner how to setup the system!

1. Working on it.
