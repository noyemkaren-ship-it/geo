function shuffle(array) {
  const result = [...array]; 
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function getForms() {
    return shuffle([
        {
            id: 1,
            title: "Площадь квадрата",
            formula: "S = a<sup>2</sup>",
            explanation: "Где <b>a</b> — длина стороны квадрата."
        },
        {
            id: 2,
            title: "Периметр квадрата",
            formula: "P = 4a",
            explanation: "Где <b>a</b> — длина стороны квадрата. У квадрата 4 равные стороны."
        },
        {
            id: 3,
            title: "Площадь прямоугольника",
            formula: "S = a &middot; b",
            explanation: "Где <b>a</b> и <b>b</b> — длины смежных сторон (ширина и высота)."
        },
        {
            id: 4,
            title: "Периметр прямоугольника",
            formula: "P = 2(a + b)",
            explanation: "Где <b>a</b> и <b>b</b> — смежные стороны. Сумма всех сторон."
        },
        {
            id: 5,
            title: "Площадь треугольника",
            formula: "S = &frac12; &middot; a &middot; h",
            explanation: "Где <b>a</b> — основание, <b>h</b> — высота, проведенная к этому основанию."
        },
        {
            id: 6,
            title: "Площадь треугольника (по 3 сторонам)",
            formula: "S = &radic; (p(p-a)(p-b)(p-c))",
            explanation: "Формула Герона. Где <b>a, b, c</b> — стороны, а <b>p</b> — полупериметр (p = (a+b+c)/2)."
        },
        {
            id: 7,
            title: "Теорема Пифагора",
            formula: "c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>",
            explanation: "Только для прямоугольных треугольников. Где <b>c</b> — гипотенуза, <b>a</b> и <b>b</b> — катеты."
        },
        {
            id: 8,
            title: "Площадь круга",
            formula: "S = &pi; &middot; R<sup>2</sup>",
            explanation: "Где <b>R</b> — радиус круга, <b>&pi;</b> (пи) &asymp; 3.14."
        },
        {
            id: 9,
            title: "Длина окружности",
            formula: "C = 2 &middot; &pi; &middot; R",
            explanation: "Где <b>R</b> — радиус, <b>C</b> — длина окружности."
        },
        {
            id: 10,
            title: "Площадь трапеции",
            formula: "S = &frac12; &middot; (a + b) &middot; h",
            explanation: "Где <b>a</b> и <b>b</b> — основания трапеции, <b>h</b> — высота."
        },
        {
            id: 11,
            title: "Площадь параллелограмма",
            formula: "S = a &middot; h",
            explanation: "Где <b>a</b> — основание, <b>h</b> — высота, проведенная к нему."
        },
        {
            id: 12,
            title: "Площадь ромба (через диагонали)",
            formula: "S = &frac12; &middot; d<sub>1</sub> &middot; d<sub>2</sub>",
            explanation: "Где <b>d<sub>1</sub></b> и <b>d<sub>2</sub></b> — диагонали ромба. Они пересекаются под прямым углом."
        },
        {
            id: 13,
            title: "Сумма углов n-угольника",
            formula: "Сумма = 180&deg; &middot; (n - 2)",
            explanation: "Где <b>n</b> — количество сторон (и углов) многоугольника."
        },
        {
            id: 14,
            title: "Объем куба",
            formula: "V = a<sup>3</sup>",
            explanation: "Где <b>a</b> — длина ребра куба."
        },
        {
            id: 15,
            title: "Объем прямоугольного параллелепипеда",
            formula: "V = a &middot; b &middot; c",
            explanation: "Где <b>a, b, c</b> — длина, ширина и высота фигуры."
        },
        {
            id: 16,
            title: "Объем цилиндра",
            formula: "V = &pi; &middot; R<sup>2</sup> &middot; h",
            explanation: "Где <b>R</b> — радиус основания, <b>h</b> — высота цилиндра."
        },
        {
            id: 17,
            title: "Площадь поверхности сферы",
            formula: "S = 4 &middot; &pi; &middot; R<sup>2</sup>",
            explanation: "Где <b>R</b> — радиус сферы."
        },
        {
            id: 18,
            title: "Объем шара",
            formula: "V = 4/3 &middot; &pi; &middot; R<sup>3</sup>",
            explanation: "Где <b>R</b> — радиус шара."
        },
        {
            id: 19,
            title: "Теорема косинусов",
            formula: "c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> - 2ab &middot; cos(&gamma;)",
            explanation: "Где <b>&gamma;</b> — угол между сторонами <b>a</b> и <b>b</b>. Обобщение теоремы Пифагора."
        },
        {
            id: 20,
            title: "Теорема синусов",
            formula: "a / sin(&alpha;) = b / sin(&beta;) = c / sin(&gamma;)",
            explanation: "Где <b>&alpha;, &beta;, &gamma;</b> — углы, противолежащие сторонам <b>a, b, c</b> соответственно."
        }
    ])
}