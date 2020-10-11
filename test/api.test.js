const request = require("supertest");
const app = require("../app");

describe("GET /api/pruebas", () => {
    it("Devuelve un JSON con Pruebas creadas", (done) => {
      request(app)
        .get("/api/pruebas")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
        
    });
  });

  describe("POST /api/prueba", () => {
    it("Responde con status 201 si crea una Prueba correctamente", (done) => {
      const data = {
        nombre: "Test Técnico",
        empresa: "Rendalo Maq",
        comentarios: "Gracias por la Oportunidad!"
      };
      request(app)
        .post("/api/prueba")
        .send(data)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(201, done);
        
    });
    });