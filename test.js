// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test ('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    expect(total).toBe(23);
})
     // Esperamos que la suma de esos 2 números sea 23
    

     test ('Un Euro son 1.07 dollars', function() {
        // Import the function from app.js
        const { fromEuroToDollar } = require('./app.js');
        expect(fromEuroToDollar(1)).toBe("1.07");
    })
    
    test ('Convertir de USD a JPY (1 USD = 146.2 JPY)', function() {
        // Import the function from app.js
        const { fromDollarToYen } = require('./app.js')
        expect(fromDollarToYen(10)).toBe("1462.62");
    })
    
    test ('Convertir de JPY to GBP (1 JPY = 0.087 GBP)', function() {
        // Import the function from app.js
        const { fromYenToPound } = require('./app.js')
        expect(fromYenToPound(1000)).toBe("5.56");
    })
