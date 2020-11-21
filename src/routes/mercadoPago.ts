const mercadoPago = require('mercadopago');
mercadoPago.configure({
    access_token:'TEST-a7814406-190d-4bee-852d-e258cbcf11a3'
});
// Crea un objeto de preferencia
const preference = {
    items: [
      {
        id: 4379598124502059,
        title: 'Mi producto',
        unit_price: 100,
        quantity: 1,
      }
    ]
  };

  export default mercadoPago.preferences.create(preference)
.then(function(response:any){
// Este valor reemplazará el string "<%= global.id %>" en tu HTML
  console.log(preference);
}).catch((error:any) => {
  console.log(error + " Su");
});
