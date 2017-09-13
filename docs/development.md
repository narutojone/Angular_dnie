#Development Docs

### Setup Your Local Development Enviornment 

1. Install [GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your local machine if you don't already have it
1. Clone this repository to your computer
    1. Create a folder (e.g. ffm) in your user directory
    1. open up a terminal and navigate to the new folder (e.g. `cd www/ffm/`)
    1. run `git clone https://benbuie@bitbucket.org/buinkwebdevelopment/ffm.git .`
    1. Note: especially for windows users, it is very important that the folder is in your computer's user directory
1. Install [Docker Toolkit](https://docs.docker.com/engine/installation/) 
    - Note: you could also just install docker (not docker toolkit) if your computer meets the requirements, but these instructions are written assuming you have docker toolkit
1. Open the "Docker Quickstart Terminal"
    - You should see a terminal where you can type commands
    - Navigate your computers file system to the cloned repository folder (created above) (e.g. `cd www/ffm/`)
1. Magically create all the docker containers needed to run the code
    - In the quick start terminal run `docker-compose up`
    - If you get an error that you cannot connect to monogodb
        1. Get the correct network ip address `docker network inspect [project_folder]_default`
            - If the folder you created above is ffm then you'd run `docker network inspect ffm_default`
            - The network ip address is in IPAM.Config.Gateway
        1. Edit the file config/env/local-development.js so that your `db.uri` equals mongodb://[network ip address]/local-dev
            - So, for example, my file has the line `uri: 'mongodb://172.18.0.1/local-dev',`
1. Find your docker machine's ip address
    1. In the quick start terminal run `docker-machine ip default` and copy the number it prints (e.g. `192.168.99.100`)
1. View your site's web address
    1. Open Google Chrome (or another web browser if you absolutely need to)
    1. Visit http://[docker machine's ip address]:3000/ and you should see the homepage (e.g. [http://192.168.99.100:3000/](http://192.168.99.100:3000/))

### Trouble Shooting
1. For trouble shooting docker see https://github.com/bbuie/code_snipits/wiki/Docker-Trouble-Shooting
    - The containter_name for this project is `ffm_node`
    - The volume name for node_modules is `ffm_node_modules`
    - The volume name for bower_components is `ffm_bower_components`

###Accessing the local database
1. Download Robomongo https://robomongo.org/
1. Create a connection with address=192.168.99.100 and port=27017
    - Note that address should equal the docker-machine ip address, not the network address found above.
1. Connect to the database. 

###Comon Comands

- `docker exec -it ffmedia_web_1 bash` to ssh into the ffmedia container (note ffmedia_web_1 is the name of web container in docker)
- `npm run prune` on the container to install and prune both npm and bower
- `docker volume rm $(docker volume ls |awk '{print $2}')` delete all docker volumes on local machine

###Style changes
This project uses SCSS

###Branching model for development

1. We use the branching model found here: http://nvie.com/posts/a-successful-git-branching-model/
1. Always branch new features off the develop branch `git checkout -b [featureBranchName]`
1. Commit your changes to the feature branch
    - Always include the issue number at the begining of the commit message
    - e.g. `git commit -m '#111 made some changes'`
1. Ensure that your branch has no linting errors
1. Push your changes to this repo
1. Create a **pull request** from your feature branch to the **develop** branch
    - The title of your pull request should match the title of the task you're completing
    - Include a link to the trello card in the description
    - Include a gif of your changes. Use [licecap](http://www.cockos.com/licecap/) if you need software.
        - If your changes are difficult to include into one GIF, make two. 
    - Provide a summary of the work you completed in the description of the pull request. 
    - Add steps to QA so the reviewer can quickly know what changed and why
1. Review the "diff" of your code
    - Make sure all changes are needed and wanted. 
    - Comment to explain any unusual code.
    - Clean up code. 
1. Your changes will be merged after QA

###Creating a Release

1. create a release branch, bump the version number
1. test the production code by running `docker-compose -f docker-compose.prod.yml up`
1. if no errors, merge into the master branch and push to the origin
1. login to cloud66 account and click to deploy the stack

###Code style guide

It is important that you write your code in a cost effective way that makes it easy to understand, update, and maintain. The following are some principles you should keep in mind:

In general, this code should adhere to [this angular style guide](https://github.com/johnpapa/angular-styleguide)

####Here are some general code style tips

- Cost efficient code
    - We don't re-invent the wheel. If there are articles, best practices, or open-source code snippets or software, we reference them.
    - Our goal is to provide 10x the value of the cost of our code and we're constantly looking for ways to wire more powerful and efficient code whether it be cutting edge tools, best practices, code snippets, or any other way.
- Eloquent Code
    - Our code must be human readable.
        - We don't make it so convoluted that it is impossible to comprehend without a thorough study.
        - We avoid complex patterns unless they provide a 10x benefit to a more readable approach.
    - Our code should read like an essay.
        - When reading a file, we should be able to quickly understand what the file is doing and what are its important parts.
    - Readability is more important than performance.
        - That doesn't mean we make horrible performance decisions, but if we find that the two are in conflict, go with the more readable option.
        - We revisit performance if it becomes a problem.
    - Our code is self-documenting.
        - We take thought of what the next developer will think when they need to add a feature or edit your code.
        - We ask ourselves if function and variable names clearly identify features.
    - Our code should collapse easily.
        - Think about proper indentation, nesting, and closures to allow the file to collapse cleanly making the important functionality more easily navigable.
- Less code = less bugs.
    - We write our code using the fewest lines possible.
        - Still, we don't write with complex patterns that sacrifice readability.
    - We look for ways to re-use code
        - We avoid copying and pasting code, if we need to reuse some code, we create a reusable component.
        - That said, we don't necessarily need to start with a reusable component unless we know (emphasis added) we'll need to reuse it.
    - We always review completed code for opportunities to refactor
        - Code is not usually at its best with the first draft. Before finalizing a feature, review for opportunities to refactor based on the goal to make it more readable and maintainable.
- Responsive
    - Our code should be built to allow responsive styles depending on device screen size
