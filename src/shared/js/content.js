/* global chrome */
$(() => {
  const getState = new Promise((resolve, reject) => {
    chrome.storage.sync.get({
      sideKickEnabled: false,
    }, (items) => {
      resolve(items.sideKickEnabled);
    });
  });

  getState.then((active) => {
    if (active) {
      const getContentfulUrl = (elementId, spaceId) => {
        return `https://app.contentful.com/spaces/${spaceId}/entries/${elementId}`;
      };


      $.each($('[data-msqc-entry-id]'), (index, el) => {
        // Get the data for each element
        const elementId = $(el)
          .data('msqc-entry-id');
        const spaceId = $(el)
          .data('msqc-space-id');
        $(el)
          .addClass('msqc-element')
          .off('click')
          .on('click', (e) => {
            if ($(e.target)
              .data('msqc-entry-id') !== elementId && $(e.target)
              .data('msqc-space-id') !== spaceId) {
              return;
            }
            e.stopPropagation();
            window.open(getContentfulUrl(elementId, spaceId));
          });
      });
    }

  });
});
