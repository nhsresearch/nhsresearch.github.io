# The NHS Trust Research App

The NHS Trust Research app is a web app to help you do research on trusts & health boards in the NHS.

The app gives you a list of English NHS trusts and Scottish NHS health boards and for each body a link to:

1. The body's website
2. The body's page on its parent's website
3. The NHS Jobs page for the body
4. The Wikipedia page for the body
5. The Care Quality Commission or Health Care Improvement Scotland results for the body
6. The WhatDoTheyKnow freedom of information (FOI) requests & responses for the body
7. A Google search page limited to results from the body's website(s)

The app also supports keyword queries that can be executed in the following ways:

1. On the body's own website
2. On WhatDoTheyKnow in the context of the body
3. On Google in the context of the body's website(s)
4. On custom search engines

Keyword queries appear as links on the body's page in the NHS Trust Research app.
You can click on the links or COMMAND+ or CTRL+ click to open the results in a new browser tab.

To get started, you can configure your keywords and custom search engine using the Launcher:

https://nhsresearch.github.io/launcher.htm

Once you launch the app, you'll have access to all your custom keyword searches with a single click.

You can share your entire environment including your keywords and custom search engines by sharing the URL of any page that you're looking at in the NHS Trust Research app.

You can bookmark URLs to save your research environment and you can go back to the launcher to make changes to start a new research environment with different keywords and search engines.

## Custom search engines

You can use the launcher to add a custom search engine to the NHS Trust Research app.

If you add a custom search engine, you will see one or more links added to the page for each body. The additional link(s) will use the search engine.

A custom search engine is nothing more than a name and a URL.

The name will be used as link text and the URL will be used as the basis for the destination of the link.

If the URL contains `${query}`, you will get one link per keyword search that you've defined and `${query}` will be replaced by each set of keywords.

If the URL does not contain `${query}`, you will get a single link.

The link on each body page will be different for each body if the URL contains any of the following:
* `${shortName}`
* `${name}`
* `${id}`
* `${host}`
* `${website}`

These symbols are replaced with the relevant property for that body.

This is what your settings would look like if you wanted to add DuckDuckGo as a custom search engine:

Name:
**DuckDuckGo**

URL:
**`https://duckduckgo.com/?q=${query}+site%3A${host}`**

These settings will give you one link to DuckDuckGo for each keyword set that you have defined (because it contains `${query}`) and the search results are limited to those on the body's own websites (because of `site:${host}`).

## Non-traditional search engines

A custom search engine in the NHS Trust Research app is not limited to commercial search engines like Google and DuckDuckGo, it can be any URL.

For example, you may be interested in social media conversations about NHS bodies. You can define a custom search engine using the search function on any social media platform.

Here's how you might do that:
1. Go to the social media website and perform an example search that returns results you're interested in
2. Copy the URL of the search results page into another browser tab and confirm that the search results still appear as you'd expect.
   This shows that all the information for performing the search is contained in the URL.
3. Paste the URL into the URL field for a custom search engine in the NHS Trust Research app
4. If appropriate, replace the specific information that you searched for that identified the body (perhaps the trust's name) with a property token (perhaps `${shortName}`)
5. If appropriate, replace the specific information that you searched for that did not identify the trust (keywords, etc) with the `${query}` token

## Running the NHS Trust Research App from the local file system

If you download `index.htm` and `launcher.htm` to the same folder on your local disk, you can run the NHS Trust Research app locally by opening either file in a web browser.

One advantage to running the app locally from your file system is that you can use the custom search engine feature to link to a body-specific folder on your disk.

For example, if you are keeping body-specific documents in a folder called `nhs-research` in your documents folder on Mac OS X, with a subfolder for each body named using the body's ID, you could create a custom search engine in the launcher with the following settings to produce a link to the correct folder on the page for each NHS body:

Name:
**Research**

URL:
**`file:///Users/user/Documents/nhs-research/${id}`**

`user` should change to match your own local user name.

## Lists and Tags

The NHS Trust Research data contains tags on the NHS bodies that show up as lists in the app. You can see the lists at the bottom of any list page:

Region:
* East of England
* London
* Midlands
* North East and Yorkshire
* North West
* South East
* South West
* England
* Scotland

Organisation type:
* Foundation
* Trust
* Health Board

Service type:
* Ambulance
* Community Services
* Hospital
* Major A&E
* Mental Health
* Teaching
* University

