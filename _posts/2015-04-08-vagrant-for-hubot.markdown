---
layout: post
title:  "Making a Vagrant for Hubot!"
date:   2015-04-08 21:39:00
categories: vagrant hubot
---
#Notes
- Blog It!
- No talking. "Teasers"

# Setting up the project

1. Open GitHub for Windows.
![Create](/assets/vagrant-hubot/20150409014340699.png)
2. Create repository.
    1. Name it.
    2. Give it a path.
    3. Create it.
![Overview](/assets/vagrant-hubot/20150409014615118.png)
![Publish](/assets/vagrant-hubot/20150409015228820.png)
3. Publish the repository.
    1. Set repo name.
    2. Enter a description.
    3. Release it to the world.
![Pull Request](/assets/vagrant-hubot/20150409021356892.png)
4. Use github website to open pull request.
    - Open branch, with a new name. I commited here already.
    1. Select new branch.
    2. Input a short subject.
    3. Write some markdown.
    4. Make sure to notice the commit listed.
    5. Create the request.
5. Update client.
![Branch](/assets/vagrant-hubot/2015040902160166.png)
    1. Select new pull requested tracked branch.
![Context](/assets/vagrant-hubot/20150409021804331.png)
    2. The context menu will allow us to explore the files.
![Git Shell](/assets/vagrant-hubot/20150409022031767.png)
    3. We can also use the git shell. Helpful for vagrant commands.
6. Open commandline.
![vagrant init](/assets/vagrant-hubot/20150409022131738.png)
    1. vagrant init
7. Clean Vagrantfile!
![Vagrantfile](/assets/vagrant-hubot/20150409022331290.png)
    1. Explore project.
    2. Open prefered editor.
![Clean it](/assets/vagrant-hubot/2015040902301634.png)
    3. Clean out comments, while following them. Duh.
8. Set base box.
    1. Search for a box.
![Baseboxes](/assets/vagrant-hubot/20150409023133858.png)
    2. Set `config.vm.box` to "ubuntu/trusty64"
![Finished](/assets/vagrant-hubot/20150409023754975.png)
9. Enable a provisioner. In this case we will use shell.
![Cherry-pick](/assets/vagrant-hubot/20150409024206143.png)
10. Commit cherry-picked lines or the whole file. I prefer detail.
11. Sync commits or view the pull request.
12. Open commandline.
    1. vagrant up!
13. Closing the pull request when you know it works.

Did vagrant start for you?!

# Telling the Provisioner how to setup the system!

1. Working on it.
