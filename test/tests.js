var assert = chai.assert;

suite('Resultados de los tests:', function() {
    test('Generación correcta de plantilla', function() {
        original.value = "\"Elem1\" , \"Elem2\"";
        calculate();
		assert.equal(finaltable.innerHTML,'<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>Elem1</td>                                  <td>Elem2</td>              </tr>\n</tbody></table>');
    });
    test('Generación de error al introducir un número incorrecto de elementos', function() {
        original.value = "Dia, Asignatura \n Lunes, Matemáticas \n Jueves, Inglés, Francés \n Viernes, Biología";
        calculate();
        assert.match(finaltable.innerHTML, /error/);
    });

});