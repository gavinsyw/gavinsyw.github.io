(function () {
  var dataEl = document.getElementById('floating-icon-data');
  var wrapper = document.getElementById('floating-icon');
  if (!dataEl || !wrapper) return;

  var config = JSON.parse(dataEl.textContent);
  var now = new Date();
  var month = String(now.getMonth() + 1).padStart(2, '0');
  var day = String(now.getDate()).padStart(2, '0');
  var today = month + '-' + day;

  var icon = (config.default && config.default.icon) || '';
  var text = (config.default && config.default.text) || '';

  function padDate(str) {
    var parts = str.split('-');
    return parts[0].padStart(2, '0') + '-' + parts[1].padStart(2, '0');
  }

  for (var i = 0; i < config.periods.length; i++) {
    var start = padDate(config.periods[i].start);
    var end = padDate(config.periods[i].end);
    var match = start <= end
      ? (today >= start && today <= end)
      : (today >= start || today <= end);
    if (match) {
      icon = config.periods[i].icon;
      text = config.periods[i].text;
      break;
    }
  }

  if (icon || text) {
    wrapper.setAttribute('aria-label', text || ' ');
    wrapper.querySelector('.cn-egg').textContent = icon;
    wrapper.querySelector('.cn-egg-tooltip').textContent = text;
    wrapper.style.display = '';
  }
})();
