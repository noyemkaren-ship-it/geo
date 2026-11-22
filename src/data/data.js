export function check(map) {
  if (!map.name || !map.text || !map.photo) {
    return true
  }
  return false
}

function getHtml(id) {
  if (id == 1) {
    return `
      <h1>Первый признак равенства треугольников</h1>

      <h2 class="ytv-title">Утверждение</h2>
      <p class="ytv">
        <span class="ytv-text">
          Если две стороны и угол между ними одного треугольника 
          равны соответственно двум сторонам и углу между ними другого 
          треугольника, то такие треугольники равны.
        </span>
      </p>

      <h2 class="doc-title">Доказательство</h2>
      <div class="doc">
        <p>
          <strong>Дано:</strong> треугольники ABC и A<sub>1</sub>B<sub>1</sub>C<sub>1</sub>, 
          у которых ∠A = ∠A<sub>1</sub>, AB = A<sub>1</sub>B<sub>1</sub>, AC = A<sub>1</sub>C<sub>1</sub>.
        </p>
        <p>
          <strong>Доказать:</strong> △ABC = △A<sub>1</sub>B<sub>1</sub>C<sub>1</sub>.
        </p>
        
        <p>
          <strong>Доказательство:</strong>
        </p>
        <p>
          Пусть A<sub>1</sub>B<sub>2</sub>C<sub>2</sub> — треугольник, равный треугольнику ABC, 
          с вершиной B<sub>2</sub> на луче A<sub>1</sub>B<sub>1</sub> и с вершиной C<sub>2</sub> 
          в той же полуплоскости относительно прямой A<sub>1</sub>B<sub>1</sub>, где лежит вершина C<sub>1</sub> (рис. 45, а).
        </p>
        <p>
          Так как A<sub>1</sub>B<sub>1</sub> = A<sub>1</sub>B<sub>2</sub>, то вершина B<sub>2</sub> 
          совпадает с вершиной B<sub>1</sub> (рис. 45, б). Так как ∠B<sub>1</sub>A<sub>1</sub>C<sub>1</sub> = 
          ∠B<sub>2</sub>A<sub>1</sub>C<sub>2</sub>, то луч A<sub>1</sub>C<sub>2</sub> совпадает с лучом 
          A<sub>1</sub>C<sub>1</sub> (рис. 45, в). Так как A<sub>1</sub>C<sub>1</sub> = A<sub>1</sub>C<sub>2</sub>, 
          то вершина C<sub>2</sub> совпадает с вершиной C<sub>1</sub> (рис. 45, г).
        </p>
        <p>
          Итак, треугольник A<sub>1</sub>B<sub>1</sub>C<sub>1</sub> совпадает с треугольником 
          A<sub>1</sub>B<sub>2</sub>C<sub>2</sub>, значит, равен треугольнику ABC.
        </p>
        <p class="doc-end">Теорема доказана.</p>
      </div>
    `;
  }

  return `Не найдена к сожелению`;
}

export function getData() {
  return [
    {
      id: 1,
      name: "Первый признак равенства треугольников",
      text: getHtml(1),
      photo: "i.png"
    }
  ]
}