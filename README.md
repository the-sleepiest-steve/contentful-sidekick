# MSQC Contetnful Sidekick
Is a fork of the Contentful Sidekick Chrome Extension that helps end users of Contentful find the content they want to edit quickly on highly nested pages that use alot of different peices of content to make up the page. It is customized to work with MSQC's specific Contentful configuration and structure. If you are looking at forking this you might have better luck with the origional.

## Download
You can download the released version on the [Chrome Web Store](https://chrome.google.com/webstore/detail/contentful-sidekick/cmheemjjmooepppggclooeejginffobo).<br>
**IMPORTANT: before you use the sidekick you must first enable it by adding html attributes to your page**

## Enabling for your site
The Contentful Sidekick uses Two data attributes on the elements you want to enable editing for. Typically this is placed on an elment that corrisponds to a different content model. Because MSQC mixes Spaces we need to add the Space ID to each content model to enable building the correct link for each entry.

### Add this to your HTML element
**Tip**: A good practice is to only add these tags on a staging or preview environment... But... We are going to skip leveraging the environment variable since we currently don't utilize it.
```
<div class="contentful-module full-text" data-msqc-entry-id="{{$entryId}}" data-msqc-space-id="{{$entryId}}">
```
Example of a Blade partial for a specific Content Model:

```html
<div class="example-contentful-module example-content-model-text" data-msqc-entry-id="{{$entryId}}" data-msqc-space-id="{{$entryId}}">
  <div class="{{$example2}} size"@if(isset($example)) id="{{$example}}"@endif>
    {!! $example3 !!}
  </div>
</div>
```

Your page now highlights the elements and adds an edit button directly to the content entry in Contentful
screenshot

# Developing Locally
## Development Env Setup
- Clone Repo
- npm install
- npm start

*This will then create a watch process that will rebuild all files to /dist/chrome anytime a file changes.*

## Loading into chrome
- Open [chrome://extensions/](chrome://extensions/)
- Turn Development Mode on in the upper right corner
- Choose Load Unpacked
- Navigate to *[project folder]*/dist/chrome and select the folder
- you should now see the extension in your browser

## Making changes
Even though the webpack rebuilds the files automatically, you need to refresh the extension in the [chrome://extensions/](chrome://extensions/) to make them load. TODO: Working on a solutions to automatically reload the extension

## Key files
`/src/shared/css/content.css` This is the CSS for the page styles for the sidekick <br>
`/src/shared/js/content.js` This is the JS file that adds the elements to it
