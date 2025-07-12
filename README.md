# The NHS Trust Research App

The NHS Trust Research app is a web app to help you do research on trusts in the NHS.

The app gives you a list of NHS trusts (currently only those in England) and for each trust a link to:

1. The trust's website
2. The trust's annual documents
3. The NHS Jobs page for the trust
4. The Wikipedia page for the trust
5. The Care Quality Commission results for the trust
6. The WhatDoTheyKnow freedom of information (FOI) requests & responses for the trust
7. A Google search page limited to results from the trust's website(s)

The app also supports keyword queries that can be executed in the following ways:

1. On the trust's own website
2. On WhatDoTheyKnow in the context of the trust
3. On Google in the context of the trust's website(s)
4. On custom search engines

Keyword queries appear as links on the trust's page in the NHS Trust Research app.
You can click on the links or COMMAND+ or CTRL+ click to open the results in a new browser tab.

To get started, you can configure your keywords and custom search engine using the Launcher:

https://nhsresearch.github.io/launcher.htm

Once you launch the app, you'll have access to all your custom keyword searches with a single click.

You can share your entire environment including your keywords and custom search engines by sharing the URL of any page that you're looking at in the NHS Trust Research app.

You can bookmark URLs to save your research environment and you can go back to the launcher to make changes to start a new research environment with different keywords and search engines.

## Running the NHS Trust Research App from the local file system

If you download `index.htm` and `launcher.htm` to the same folder on your local disk, you can run the NHS Trust Research app locally by opening either file in a web browser.

One advantage to running the app locally from your file system is that you can use the custom search engine feature to link to a trust-specific folder on your disk.

For example, if you are keeping trust-specific documents in a folder called `nhs-research` in your documents folder on Mac OS X, with a subfolder for each trust named using the trust's ID, you could create a custom search engine in the launcher with the following settings to produce a link to the correct folder on the page for each NHS trust:

Name:
**Research**

URL:
**`file:///Users/user/Documents/nhs-research/${id}`**

`user` should change to match your own local user name.
