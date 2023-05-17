 const returnPostLogin = {
  name: "Cliente Zé Birita",
  email: "zebirita@email.com",
  role: "customer",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJuYW1lIjoiQ2xpZW50ZSBaw6kgQmlyaXRhIiwiZW1haWwiOiJ6ZWJpcml0YUBlbWFpbC5jb20iLCJwYXNzd29yZCI6IjFjMzc0NjZjMTU5NzU1Y2UxZmExODFiZDI0N2NiOTI1Iiwicm9sZSI6ImN1c3RvbWVyIn0sImlhdCI6MTY4MzkyODMwMSwiZXhwIjoxNjg0NzkyMzAxfQ.46tcbcvlL-O7DT1ot8oSEignOsVoiXxgJZG1wZwBuIU"
}
  
const returnGetProduct = [
  {
    "id": 1,
    "name": "Skol Lata 250ml",
    "price": "2.20",
    "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg"
  },
  {
    "id": 2,
    "name": "Heineken 600ml",
    "price": "7.50",
    "urlImage": "http://localhost:3001/images/heineken_600ml.jpg"
  },
  {
    "id": 3,
    "name": "Antarctica Pilsen 300ml",
    "price": "2.49",
    "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg"
  },
  {
    "id": 4,
    "name": "Brahma 600ml",
    "price": "7.50",
    "urlImage": "http://localhost:3001/images/brahma_600ml.jpg"
  },
  {
    "id": 5,
    "name": "Skol 269ml",
    "price": "2.19",
    "urlImage": "http://localhost:3001/images/skol_269ml.jpg"
  },
  {
    "id": 6,
    "name": "Skol Beats Senses 313ml",
    "price": "4.49",
    "urlImage": "http://localhost:3001/images/skol_beats_senses_313ml.jpg"
  },
  {
    "id": 7,
    "name": "Becks 330ml",
    "price": "4.99",
    "urlImage": "http://localhost:3001/images/becks_330ml.jpg"
  },
  {
    "id": 8,
    "name": "Brahma Duplo Malte 350ml",
    "price": "2.79",
    "urlImage": "http://localhost:3001/images/brahma_duplo_malte_350ml.jpg"
  },
  {
    "id": 9,
    "name": "Becks 600ml",
    "price": "8.89",
    "urlImage": "http://localhost:3001/images/becks_600ml.jpg"
  },
  {
    "id": 10,
    "name": "Skol Beats Senses 269ml",
    "price": "3.57",
    "urlImage": "http://localhost:3001/images/skol_beats_senses_269ml.jpg"
  },
  {
    "id": 11,
    "name": "Stella Artois 275ml",
    "price": "3.49",
    "urlImage": "http://localhost:3001/images/stella_artois_275ml.jpg"
  }
]
const returnUserSellers = [
  {
    "id": 2,
    "name": "Fulana Pereira",
    "email": "fulana@deliveryapp.com",
    "role": "seller"
  }
]
module.exports ={returnPostLogin, returnGetProduct, returnUserSellers};