## Creation of Hello World snap-in

This folder contains the documentation and the code for creating a ```Hello World snap-in``` that comments "Hello World" on the timeline of a work item when it is created.

For more reference on ```Snap-Ins```, please refer to the [documentation](https://github.com/devrev/snap-in-docs)
For reference on DevRev methods, refer to their [developer docs](https://developer.devrev.ai/beta/api-reference/accounts/create).

### Installation
1. Install ```DevRev CLI``` from [here](https://developer.devrev.ai/snap-in-development/references/install-dev-rev-cli). For Windows systems, download the executable from [here](https://github.com/devrev/cli/releases/tag/v0.4.6).
2. Install ```JQ``` from [here](https://jqlang.github.io/jq/).
3. Unzip the files and add the executables to system PATH. (Optional).
4. Verify the installation by running ```devrev --version``` on command shell.

### Authentication
To Authenticate with ```DevRev CLI```, run the following command.
```
devrev profiles authenticate -o <dev-org-slug> -u <youremail@yourdomain.com>
```

### Installing the DevRev Hello World snap-in Typescript Template
To install the ```Hello World``` snap-in template, clone this repo by running
```
https://github.com/AdarshAcharya5/DevRev-Assignment.git
```

Once you have cloned the repo, ```cd``` to
```
devrev-snaps-typescript-template/code
```
Then run the following commands to optionally rebuild the package. (Repo already contains the ```build.tar.gz``` file).
```
npm install
npm run build
npm run package
```
This will generate a ```build.tar.gz``` file within the current directory.

### Creating a new snap-in package

Create a new snap-in package via the following command.
```
devrev snap_in_package create-one --slug hello-world-snap-in | jq .
```
The slug name should be unique compared to other snap-in slug names.
### Creating a new snap-in version

Create a new snap-in version by running the following command.
```
devrev snap_in_version create-one --manifest ./devrev-snaps-typescript-template/manifest.yaml --archive ./devrev-snaps-typescript-template/code/build.tar.gz | jq .
```
### Creating the snap-in draft
Once the snap-in version is created, the next step is to create a draft. You can do this by running the following command.
```
devrev snap_in draft --snap_in_version <snap_in_version id>
```
The ```snap-in-version id``` can be found from the JSON schema output of the ```snap-in version create-one``` command.

### Deploying and testing the snap-in
The next step is to deploy and test the DevRev snap-in.
1. Login to the DevRev, through the site.
2. Go to ```Settings -> Snap-Ins```. Your newly created Hello World Snap-In should be visible and automatically deployed too.
3. If it is not deployed, click on the snap-in and press ```deploy snap-in``` on the upper right corner.
4. Go back to ```Home``` and create a new ```work item``` such as an ```issue```, ```ticket``` etc.
5. When the ```work item``` is created, a Hello World message should be commented in the ```Discussions``` thread automatically.
