// ============================================================
// HOTEL NEBULA — PARTE 2: Script de Inserção MongoDB
// Execute no MongoDB Shell (mongosh) ou MongoDB Compass
// ============================================================

use("hotel_nebula");

// ============================================================
// 1. HÓSPEDES
// ============================================================
db.hospedes.insertMany([
  {
    nome: "Ana Paula Ferreira",
    email: "ana.paula@email.com",
    telefone: "+55 11 91234-5678",
    cpf: "123.456.789-00",
    nacionalidade: "Brasileira",
    data_nascimento: new Date("1990-03-15"),
    endereco: {
      rua: "Rua das Flores, 123",
      cidade: "São Paulo",
      estado: "SP",
      cep: "01310-100"
    },
    criado_em: new Date("2024-01-10")
  },
  {
    nome: "Roberto Almeida Santos",
    email: "roberto.santos@email.com",
    telefone: "+55 21 98765-4321",
    cpf: "234.567.890-11",
    nacionalidade: "Brasileira",
    data_nascimento: new Date("1985-07-22"),
    endereco: {
      rua: "Av. Atlântica, 500",
      cidade: "Rio de Janeiro",
      estado: "RJ",
      cep: "22010-000"
    },
    criado_em: new Date("2024-02-05")
  },
  {
    nome: "Maria Clara Oliveira",
    email: "maria.clara@email.com",
    telefone: "+55 31 97654-3210",
    cpf: "345.678.901-22",
    nacionalidade: "Brasileira",
    data_nascimento: new Date("1995-11-30"),
    endereco: {
      rua: "Rua dos Ipês, 88",
      cidade: "Belo Horizonte",
      estado: "MG",
      cep: "30130-010"
    },
    criado_em: new Date("2024-01-25")
  },
  {
    nome: "John Williams",
    email: "john.williams@email.com",
    telefone: "+1 555 123-4567",
    cpf: null,
    passaporte: "US12345678",
    nacionalidade: "Americano",
    data_nascimento: new Date("1978-05-10"),
    endereco: {
      rua: "5th Avenue, 200",
      cidade: "New York",
      estado: "NY",
      cep: "10001"
    },
    criado_em: new Date("2024-03-01")
  },
  {
    nome: "Fernanda Costa Lima",
    email: "fernanda.lima@email.com",
    telefone: "+55 47 96543-2109",
    cpf: "456.789.012-33",
    nacionalidade: "Brasileira",
    data_nascimento: new Date("1992-09-18"),
    endereco: {
      rua: "Rua XV de Novembro, 300",
      cidade: "Florianópolis",
      estado: "SC",
      cep: "88010-400"
    },
    criado_em: new Date("2024-02-14")
  }
]);

// ============================================================
// 2. QUARTOS
// ============================================================
db.quartos.insertMany([
  {
    numero: 101,
    tipo: "Standard",
    andar: 1,
    capacidade: 2,
    preco_diaria: 250.00,
    status: "disponivel",
    caracteristicas: ["ar-condicionado", "frigobar", "tv 40 polegadas", "wifi"],
    tamanho_m2: 20,
    criado_em: new Date("2023-01-01")
  },
  {
    numero: 201,
    tipo: "Luxo",
    andar: 2,
    capacidade: 2,
    preco_diaria: 450.00,
    status: "disponivel",
    caracteristicas: ["vista para o mar", "banheira", "ar-condicionado", "frigobar", "varanda", "tv 55 polegadas", "wifi"],
    tamanho_m2: 35,
    criado_em: new Date("2023-01-01")
  },
  {
    numero: 301,
    tipo: "Suite",
    andar: 3,
    capacidade: 4,
    preco_diaria: 850.00,
    status: "disponivel",
    caracteristicas: ["vista para o mar", "banheira de hidromassagem", "sala de estar", "cozinha americana", "varanda", "ar-condicionado", "wifi", "tv 65 polegadas"],
    tamanho_m2: 75,
    criado_em: new Date("2023-01-01")
  },
  {
    numero: 102,
    tipo: "Standard",
    andar: 1,
    capacidade: 1,
    preco_diaria: 180.00,
    status: "manutencao",
    caracteristicas: ["ar-condicionado", "frigobar", "tv 32 polegadas", "wifi"],
    tamanho_m2: 15,
    criado_em: new Date("2023-01-01")
  },
  {
    numero: 202,
    tipo: "Luxo",
    andar: 2,
    capacidade: 3,
    preco_diaria: 550.00,
    status: "disponivel",
    caracteristicas: ["vista para a piscina", "banheira", "ar-condicionado", "frigobar", "varanda", "tv 55 polegadas", "wifi", "cama king size"],
    tamanho_m2: 40,
    criado_em: new Date("2023-01-01")
  },
  {
    numero: 401,
    tipo: "Suite Presidencial",
    andar: 4,
    capacidade: 6,
    preco_diaria: 2500.00,
    status: "disponivel",
    caracteristicas: ["vista panorâmica", "banheira de hidromassagem", "piscina privativa", "sala de jantar", "cozinha completa", "2 quartos", "varanda ampla", "wifi", "mordomo"],
    tamanho_m2: 180,
    criado_em: new Date("2023-01-01")
  }
]);

// ============================================================
// 3. FUNCIONÁRIOS
// ============================================================
db.funcionarios.insertMany([
  {
    nome: "Carlos Eduardo Lima",
    cpf: "987.654.321-00",
    cargo: "Recepcionista",
    departamento: "Recepção",
    email: "carlos.lima@hotelnebula.com",
    telefone: "+55 21 99876-5432",
    salario: 2800.00,
    turno: "manhã",
    data_admissao: new Date("2022-08-01"),
    ativo: true,
    criado_em: new Date("2022-08-01")
  },
  {
    nome: "Patrícia Souza",
    cpf: "876.543.210-99",
    cargo: "Gerente de Hospedagem",
    departamento: "Gestão",
    email: "patricia.souza@hotelnebula.com",
    telefone: "+55 21 99765-4321",
    salario: 6500.00,
    turno: "integral",
    data_admissao: new Date("2021-03-15"),
    ativo: true,
    criado_em: new Date("2021-03-15")
  },
  {
    nome: "José Augusto Pereira",
    cpf: "765.432.109-88",
    cargo: "Camareira",
    departamento: "Governança",
    email: "jose.pereira@hotelnebula.com",
    telefone: "+55 21 98654-3210",
    salario: 1900.00,
    turno: "manhã",
    data_admissao: new Date("2023-01-10"),
    ativo: true,
    criado_em: new Date("2023-01-10")
  },
  {
    nome: "Larissa Mendes",
    cpf: "654.321.098-77",
    cargo: "Chef de Cozinha",
    departamento: "Alimentos e Bebidas",
    email: "larissa.mendes@hotelnebula.com",
    telefone: "+55 21 97543-2109",
    salario: 5200.00,
    turno: "tarde",
    data_admissao: new Date("2020-06-01"),
    ativo: true,
    criado_em: new Date("2020-06-01")
  }
]);

// ============================================================
// 4. RESERVAS
// ============================================================

// Busca IDs inseridos para referenciar
const ana = db.hospedes.findOne({ email: "ana.paula@email.com" });
const roberto = db.hospedes.findOne({ email: "roberto.santos@email.com" });
const maria = db.hospedes.findOne({ email: "maria.clara@email.com" });
const john = db.hospedes.findOne({ email: "john.williams@email.com" });
const fernanda = db.hospedes.findOne({ email: "fernanda.lima@email.com" });

const q101 = db.quartos.findOne({ numero: 101 });
const q201 = db.quartos.findOne({ numero: 201 });
const q301 = db.quartos.findOne({ numero: 301 });
const q202 = db.quartos.findOne({ numero: 202 });
const q401 = db.quartos.findOne({ numero: 401 });

db.reservas.insertMany([
  {
    hospede_id: ana._id,
    quarto_id: q201._id,
    check_in_previsto: new Date("2024-04-10"),
    check_out_previsto: new Date("2024-04-15"),
    num_hospedes: 2,
    status: "finalizada",
    origem: "site",
    valor_total_previsto: 2250.00,
    observacoes: "Hóspede solicitou travesseiro extra",
    criado_em: new Date("2024-03-20")
  },
  {
    hospede_id: roberto._id,
    quarto_id: q301._id,
    check_in_previsto: new Date("2024-04-20"),
    check_out_previsto: new Date("2024-04-25"),
    num_hospedes: 3,
    status: "finalizada",
    origem: "telefone",
    valor_total_previsto: 4250.00,
    observacoes: "",
    criado_em: new Date("2024-04-01")
  },
  {
    hospede_id: ana._id,
    quarto_id: q101._id,
    check_in_previsto: new Date("2024-06-01"),
    check_out_previsto: new Date("2024-06-04"),
    num_hospedes: 1,
    status: "finalizada",
    origem: "aplicativo",
    valor_total_previsto: 750.00,
    observacoes: "",
    criado_em: new Date("2024-05-10")
  },
  {
    hospede_id: john._id,
    quarto_id: q401._id,
    check_in_previsto: new Date("2024-07-15"),
    check_out_previsto: new Date("2024-07-20"),
    num_hospedes: 4,
    status: "finalizada",
    origem: "agencia",
    valor_total_previsto: 12500.00,
    observacoes: "VIP — cliente especial",
    criado_em: new Date("2024-06-01")
  },
  {
    hospede_id: maria._id,
    quarto_id: q202._id,
    check_in_previsto: new Date("2024-08-05"),
    check_out_previsto: new Date("2024-08-08"),
    num_hospedes: 2,
    status: "finalizada",
    origem: "site",
    valor_total_previsto: 1650.00,
    observacoes: "",
    criado_em: new Date("2024-07-20")
  },
  {
    hospede_id: fernanda._id,
    quarto_id: q201._id,
    check_in_previsto: new Date("2024-12-24"),
    check_out_previsto: new Date("2024-12-27"),
    num_hospedes: 2,
    status: "confirmada",
    origem: "site",
    valor_total_previsto: 1350.00,
    observacoes: "Lua de mel — decoração especial",
    criado_em: new Date("2024-11-01")
  }
]);

// ============================================================
// 5. HOSPEDAGENS
// ============================================================

const res1 = db.reservas.findOne({ hospede_id: ana._id, check_in_previsto: new Date("2024-04-10") });
const res2 = db.reservas.findOne({ hospede_id: roberto._id });
const res3 = db.reservas.findOne({ hospede_id: ana._id, check_in_previsto: new Date("2024-06-01") });
const res4 = db.reservas.findOne({ hospede_id: john._id });
const res5 = db.reservas.findOne({ hospede_id: maria._id });

db.hospedagens.insertMany([
  {
    reserva_id: res1._id,
    hospede_id: ana._id,
    quarto_id: q201._id,
    check_in_real: new Date("2024-04-10T14:00:00Z"),
    check_out_real: new Date("2024-04-15T11:30:00Z"),
    num_diarias: 5,
    status: "finalizada",
    servicos_consumidos: [
      { nome: "Café da manhã", quantidade: 2, preco_unitario: 45.00, data: new Date("2024-04-11") },
      { nome: "Spa", quantidade: 1, preco_unitario: 200.00, data: new Date("2024-04-12") },
      { nome: "Room Service", quantidade: 3, preco_unitario: 80.00, data: new Date("2024-04-13") }
    ],
    valor_diarias: 2250.00,
    valor_servicos: 530.00,
    valor_total: 2780.00,
    criado_em: new Date("2024-04-10")
  },
  {
    reserva_id: res2._id,
    hospede_id: roberto._id,
    quarto_id: q301._id,
    check_in_real: new Date("2024-04-20T15:00:00Z"),
    check_out_real: new Date("2024-04-25T12:00:00Z"),
    num_diarias: 5,
    status: "finalizada",
    servicos_consumidos: [
      { nome: "Café da manhã", quantidade: 3, preco_unitario: 45.00, data: new Date("2024-04-21") },
      { nome: "Transfer aeroporto", quantidade: 1, preco_unitario: 150.00, data: new Date("2024-04-20") },
      { nome: "Jantar romântico", quantidade: 2, preco_unitario: 180.00, data: new Date("2024-04-22") }
    ],
    valor_diarias: 4250.00,
    valor_servicos: 645.00,
    valor_total: 4895.00,
    criado_em: new Date("2024-04-20")
  },
  {
    reserva_id: res3._id,
    hospede_id: ana._id,
    quarto_id: q101._id,
    check_in_real: new Date("2024-06-01T13:00:00Z"),
    check_out_real: new Date("2024-06-04T11:00:00Z"),
    num_diarias: 3,
    status: "finalizada",
    servicos_consumidos: [
      { nome: "Café da manhã", quantidade: 1, preco_unitario: 45.00, data: new Date("2024-06-02") },
      { nome: "Lavanderia", quantidade: 1, preco_unitario: 60.00, data: new Date("2024-06-03") }
    ],
    valor_diarias: 750.00,
    valor_servicos: 105.00,
    valor_total: 855.00,
    criado_em: new Date("2024-06-01")
  },
  {
    reserva_id: res4._id,
    hospede_id: john._id,
    quarto_id: q401._id,
    check_in_real: new Date("2024-07-15T16:00:00Z"),
    check_out_real: new Date("2024-07-20T11:00:00Z"),
    num_diarias: 5,
    status: "finalizada",
    servicos_consumidos: [
      { nome: "Café da manhã", quantidade: 4, preco_unitario: 45.00, data: new Date("2024-07-16") },
      { nome: "Spa", quantidade: 3, preco_unitario: 200.00, data: new Date("2024-07-17") },
      { nome: "Jantar romântico", quantidade: 2, preco_unitario: 180.00, data: new Date("2024-07-18") },
      { nome: "Passeio de barco", quantidade: 4, preco_unitario: 250.00, data: new Date("2024-07-19") },
      { nome: "Room Service", quantidade: 5, preco_unitario: 80.00, data: new Date("2024-07-19") }
    ],
    valor_diarias: 12500.00,
    valor_servicos: 2540.00,
    valor_total: 15040.00,
    criado_em: new Date("2024-07-15")
  },
  {
    reserva_id: res5._id,
    hospede_id: maria._id,
    quarto_id: q202._id,
    check_in_real: new Date("2024-08-05T14:00:00Z"),
    check_out_real: new Date("2024-08-08T12:00:00Z"),
    num_diarias: 3,
    status: "finalizada",
    servicos_consumidos: [
      { nome: "Café da manhã", quantidade: 2, preco_unitario: 45.00, data: new Date("2024-08-06") },
      { nome: "Spa", quantidade: 1, preco_unitario: 200.00, data: new Date("2024-08-07") }
    ],
    valor_diarias: 1650.00,
    valor_servicos: 290.00,
    valor_total: 1940.00,
    criado_em: new Date("2024-08-05")
  }
]);

// ============================================================
// 6. PAGAMENTOS
// ============================================================

const hosp1 = db.hospedagens.findOne({ hospede_id: ana._id, check_in_real: new Date("2024-04-10T14:00:00Z") });
const hosp2 = db.hospedagens.findOne({ hospede_id: roberto._id });
const hosp3 = db.hospedagens.findOne({ hospede_id: ana._id, check_in_real: new Date("2024-06-01T13:00:00Z") });
const hosp4 = db.hospedagens.findOne({ hospede_id: john._id });
const hosp5 = db.hospedagens.findOne({ hospede_id: maria._id });

db.pagamentos.insertMany([
  {
    hospedagem_id: hosp1._id,
    hospede_id: ana._id,
    valor: 2780.00,
    metodo: "cartao_credito",
    parcelas: 2,
    status: "pago",
    data_pagamento: new Date("2024-04-15"),
    criado_em: new Date("2024-04-15")
  },
  {
    hospedagem_id: hosp2._id,
    hospede_id: roberto._id,
    valor: 4895.00,
    metodo: "pix",
    parcelas: 1,
    status: "pago",
    data_pagamento: new Date("2024-04-25"),
    criado_em: new Date("2024-04-25")
  },
  {
    hospedagem_id: hosp3._id,
    hospede_id: ana._id,
    valor: 855.00,
    metodo: "debito",
    parcelas: 1,
    status: "pago",
    data_pagamento: new Date("2024-06-04"),
    criado_em: new Date("2024-06-04")
  },
  {
    hospedagem_id: hosp4._id,
    hospede_id: john._id,
    valor: 15040.00,
    metodo: "cartao_credito",
    parcelas: 5,
    status: "pago",
    data_pagamento: new Date("2024-07-20"),
    criado_em: new Date("2024-07-20")
  },
  {
    hospedagem_id: hosp5._id,
    hospede_id: maria._id,
    valor: 1940.00,
    metodo: "pix",
    parcelas: 1,
    status: "pago",
    data_pagamento: new Date("2024-08-08"),
    criado_em: new Date("2024-08-08")
  }
]);

// ============================================================
// 7. FEEDBACKS
// ============================================================

db.feedbacks.insertMany([
  {
    hospede_id: ana._id,
    quarto_id: q201._id,
    hospedagem_id: hosp1._id,
    nota_geral: 9,
    nota_limpeza: 10,
    nota_atendimento: 9,
    nota_localizacao: 8,
    nota_custo_beneficio: 8,
    comentario: "Excelente estadia! O quarto era lindo e o atendimento impecável. A vista para o mar foi incrível. Voltarei com certeza!",
    recomendaria: true,
    criado_em: new Date("2024-04-16")
  },
  {
    hospede_id: roberto._id,
    quarto_id: q301._id,
    hospedagem_id: hosp2._id,
    nota_geral: 10,
    nota_limpeza: 10,
    nota_atendimento: 10,
    nota_localizacao: 9,
    nota_custo_beneficio: 9,
    comentario: "Perfeito em todos os aspectos. A suite é espaçosa, o jantar romântico foi especial. Recomendo demais!",
    recomendaria: true,
    criado_em: new Date("2024-04-26")
  },
  {
    hospede_id: ana._id,
    quarto_id: q101._id,
    hospedagem_id: hosp3._id,
    nota_geral: 7,
    nota_limpeza: 8,
    nota_atendimento: 7,
    nota_localizacao: 8,
    nota_custo_beneficio: 6,
    comentario: "Quarto simples mas limpo. Atendimento ok. Achei um pouco caro para o que oferece.",
    recomendaria: true,
    criado_em: new Date("2024-06-05")
  },
  {
    hospede_id: john._id,
    quarto_id: q401._id,
    hospedagem_id: hosp4._id,
    nota_geral: 10,
    nota_limpeza: 10,
    nota_atendimento: 10,
    nota_localizacao: 10,
    nota_custo_beneficio: 10,
    comentario: "Outstanding experience! The presidential suite was magnificent. Every detail was perfect.",
    recomendaria: true,
    criado_em: new Date("2024-07-21")
  },
  {
    hospede_id: maria._id,
    quarto_id: q202._id,
    hospedagem_id: hosp5._id,
    nota_geral: 8,
    nota_limpeza: 9,
    nota_atendimento: 8,
    nota_localizacao: 8,
    nota_custo_beneficio: 7,
    comentario: "Ótima experiência no geral. Quarto confortável e bem equipado. O spa foi maravilhoso!",
    recomendaria: true,
    criado_em: new Date("2024-08-09")
  }
]);

print("✅ Hotel Nebula — banco populado com sucesso!");
print("Coleções criadas: hospedes, quartos, funcionarios, reservas, hospedagens, pagamentos, feedbacks");
