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

## Custom search engines

You can use the launcher to add a custom search engine to the NHS Trust Research app.

If you add a custom search engine, you will see one or more links added to the page for each trust. The additional link(s) will use the search engine.

A custom search engine is nothing more than a name and a URL.

The name will be used as link text and the URL will be used as the basis for the destination of the link.

If the URL contains `${query}`, you will get one link per keyword search that you've defined and `${query}` will be replaced by each set of keywords.

If the URL does not contain `${query}`, you will get a single link.

The link on each trust page will be different for each trust if the URL contains any of the following:
* `${shortName}`
* `${name}`
* `${id}`
* `${host}`
* `${website}`

These symbols are replaced with the relevant property for that trust.

This is what your settings would look like if you wanted to add DuckDuckGo as a custom search engine:

Name:
**DuckDuckGo**

URL:
**`https://duckduckgo.com/?q=${query}+site%3A${host}`**

These settings will give you one link to DuckDuckGo for each keyword set that you have defined (because it contains `${query}`) and the search results are limited to those on the trust's own websites (because of `site:${host}`).

## Non-traditional search engines

A custom search engine in the NHS Trust Research app is not limited to commercial search engines like Google and DuckDuckGo, it can be any URL.

For example, you may be interested in social media conversations about NHS trusts. You can define a custom search engine using the search function on any social media platform.

Here's how you might do that:
1. Go to the social media website and perform an example search that returns results you're interested in
2. Copy the URL of the search results page into another browser tab and confirm that the search results still appear as you'd expect.
   This shows that all the information for performing the search is contained in the URL.
3. Paste the URL into the URL field for a custom search engine in the NHS Trust Research app
4. If appropriate, replace the specific information that you searched for that identified the trust (perhaps the trust's name) with a property token (perhaps `${shortName}`)
5. If appropriate, replace the specific information that you searched for that did not identify the trust (keywords, etc) with the `${query}` token

## Running the NHS Trust Research App from the local file system

If you download `index.htm` and `launcher.htm` to the same folder on your local disk, you can run the NHS Trust Research app locally by opening either file in a web browser.

One advantage to running the app locally from your file system is that you can use the custom search engine feature to link to a trust-specific folder on your disk.

For example, if you are keeping trust-specific documents in a folder called `nhs-research` in your documents folder on Mac OS X, with a subfolder for each trust named using the trust's ID, you could create a custom search engine in the launcher with the following settings to produce a link to the correct folder on the page for each NHS trust:

Name:
**Research**

URL:
**`file:///Users/user/Documents/nhs-research/${id}`**

`user` should change to match your own local user name.
