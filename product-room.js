// Reuses the Paper Edition room photograph, loading both room and artwork on demand.
export function openRoom(button) {
  const section = button.closest('.product-room');
  const content = section.querySelector('.product-room__content');
  const he = section.lang === 'he';
  if (section.dataset.ready === 'true') {
    content.hidden = !content.hidden;
    button.setAttribute('aria-expanded', String(!content.hidden));
    return;
  }

  const sizes = JSON.parse(section.dataset.sizes);
  const scene = document.createElement('div');
  scene.className = 'product-room__scene';
  const room = document.createElement('img');
  room.className = 'product-room__background';
  room.alt = '';
  room.src = '/assets/paper-room.jpg';
  const print = document.createElement('div');
  print.className = 'product-room__print';
  const art = document.createElement('img');
  art.alt = he ? 'היצירה בפריים המלא מעל ספה' : 'The complete artwork above a sofa';
  art.src = section.dataset.image;
  print.append(art);
  scene.append(room, print);

  const controls = document.createElement('fieldset');
  controls.className = 'product-room__sizes';
  const legend = document.createElement('legend');
  legend.textContent = he ? 'בחרו מידה להשוואה' : 'Compare sizes';
  controls.append(legend);
  const choices = sizes.map((size, index) => {
    const choice = document.createElement('button');
    choice.type = 'button';
    choice.textContent = size;
    choice.setAttribute('aria-pressed', 'false');
    choice.addEventListener('click', () => select(index));
    controls.append(choice);
    return choice;
  });
  const note = document.createElement('p');
  note.className = 'product-room__note';
  note.textContent = he
    ? 'המחשה יחסית לספה ברוחב כ־290 ס״מ. הצילום מוצג בפריים המלא, ללא חיתוך; החלל והגימור להמחשה בלבד.'
    : 'Scale reference: sofa approximately 290 cm wide. The complete photograph is shown without cropping; room and finish are illustrative.';
  content.append(scene, controls, note);

  function select(index) {
    const dimensions = sizes[index].match(/(\d+)\s*[×x]\s*(\d+)/i);
    if (!dimensions) return;
    const width = Number(dimensions[1]);
    const height = Number(dimensions[2]);
    // Sofa spans 65% of the 1000×667 room photograph and represents 290 cm.
    print.style.width = `${(width / 290) * 65}%`;
    print.style.height = `${(height / 290) * 65 * (1000 / 667)}%`;
    choices.forEach((choice, i) => choice.setAttribute('aria-pressed', String(i === index)));
    print.setAttribute('aria-label', sizeLabel(sizes[index]));
  }
  function sizeLabel(size) {
    return he ? `מידה מוצגת: ${size}` : `Displayed size: ${size}`;
  }
  select(0);
  section.dataset.ready = 'true';
  content.hidden = false;
  button.setAttribute('aria-expanded', 'true');
}
