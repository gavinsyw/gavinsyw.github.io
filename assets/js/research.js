(() => {
  const section = document.getElementById('research');
  if (!section) return;

  const buttons = [...section.querySelectorAll('[data-research-field]')];
  const results = section.querySelector('#research-results');
  const title = section.querySelector('#research-results-title');
  const status = section.querySelector('.research-status');
  const list = section.querySelector('.research-projects');
  const projects = [...section.querySelectorAll('[data-project-fields]')]
    .sort((a, b) => Number(b.dataset.year) - Number(a.dataset.year));

  let activeField = null;
  const showField = button => {
    const field = button.dataset.researchField;
    if (field === activeField) return;
    activeField = field;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.researchField === field)));
    const matches = projects.filter(project =>
      project.dataset.projectFields.split(/[;,]/).map(value => value.trim()).includes(field)
    );
    title.textContent = button.dataset.researchTitle;
    list.replaceChildren(...matches.map(project => {
      const item = document.createElement('li');
      item.append(project.cloneNode(true));
      return item;
    }));
    results.hidden = false;
    status.hidden = matches.length > 0;
    status.textContent = matches.length ? '' : 'Papers in this field will be added soon.';
  };

  buttons.forEach(button => {
    button.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'touch') showField(button);
    });
    button.addEventListener('focus', () => showField(button));
    button.addEventListener('click', () => showField(button));
  });
})();
