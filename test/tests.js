var assert = chai.assert;

suite('Resultado de las pruebas:', function() {
    test('Creacion correcta de la tabla', function() {
        original.value = "\"Hola\" , \"Adios\" , \"Mar\" , \"Aire\"";
        calculate();
		var expected = '<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>Hola</td>                                  <td>Adios</td>                                  <td>Mar</td>                                  <td>Aire</td>              </tr>\n</tbody></table>';
		assert.equal(finaltable.innerHTML, expected);
    });
    test('Fallo al introducir un numero erroneo de elementos', function() {
        original.value = "Color, Prenda \n Rojo, Pantalon, Falda \n Amarillo, Camisa \n Negro, Chaqueta";
        calculate();
        assert.match(finaltable.innerHTML, /class="error"/);
    });

});