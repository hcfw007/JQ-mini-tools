(function() {
  let $ = window.$ || window.jQuery
  if (!$) {
    console.debug('jQuery is required')
    return
  }

  window.$tab = function(groupName) {
    let tabSelectors = $(`[tab-group="${groupName}"][tab-type="tab"]`)
    if (tabSelectors.length === 0) {
      return
    }

    let defaultSelector = $(`[tab-group="${groupName}"][tab-type="tab"][tab-default="true"]`)
    if (defaultSelector.length === 0) {
      defaultSelector = $(tabSelectors[0])
    }
    tabSelectors.removeClass('active')
    defaultSelector.addClass('active')
    let defaultId = defaultSelector.attr('tab-id')
    $(`[tab-group="${groupName}"][tab-type="page"]`).hide()
    $(`[tab-group="${groupName}"][tab-type="page"][tab-id="${defaultId}"]`).show()

    tabSelectors.click(function() {
      let tabId = $(this).attr('tab-id')
      tabSelectors.removeClass('active')
      $(this).addClass('active')
      $(`[tab-group="${groupName}"][tab-type="page"]`).hide()
      $(`[tab-group="${groupName}"][tab-type="page"][tab-id="${tabId}"]`).show()
    })
  }

})()