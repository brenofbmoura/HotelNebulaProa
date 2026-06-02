// ============================================================
// HOTEL NEBULA — PARTE 3: Consultas e Extração de Dados
// Execute no MongoDB Shell (mongosh) ou MongoDB Compass
// ============================================================

use("hotel_nebula");

// ============================================================
// CONSULTA 1 — Quartos com características específicas
// ============================================================

// 1a. Quartos com "vista para o mar"
print("\n=== Quartos com vista para o mar ===");
db.quartos.find(
  { caracteristicas: "vista para o mar" },
  { numero: 1, tipo: 1, preco_diaria: 1, caracteristicas: 1 }
).forEach(q => printjson(q));

// 1b. Quartos com "banheira"
print("\n=== Quartos com banheira ===");
db.quartos.find(
  { caracteristicas: { $regex: "banheira", $options: "i" } },
  { numero: 1, tipo: 1, preco_diaria: 1 }
).forEach(q => printjson(q));

// 1c. Quartos do tipo "Luxo" disponíveis
print("\n=== Quartos Luxo disponíveis ===");
db.quartos.find(
  { tipo: "Luxo", status: "disponivel" },
  { numero: 1, tipo: 1, preco_diaria: 1, status: 1 }
).forEach(q => printjson(q));

// 1d. Quartos com capacidade >= 4
print("\n=== Quartos para 4 ou mais pessoas ===");
db.quartos.find(
  { capacidade: { $gte: 4 } },
  { numero: 1, tipo: 1, capacidade: 1, preco_diaria: 1 }
).sort({ capacidade: -1 }).forEach(q => printjson(q));

// ============================================================
// CONSULTA 2 — Hóspedes que reservaram mais de uma vez
// ============================================================

print("\n=== Hóspedes com mais de uma reserva ===");
db.reservas.aggregate([
  {
    $group: {
      _id: "$hospede_id",
      total_reservas: { $sum: 1 }
    }
  },
  {
    $match: { total_reservas: { $gt: 1 } }
  },
  {
    $lookup: {
      from: "hospedes",
      localField: "_id",
      foreignField: "_id",
      as: "hospede"
    }
  },
  {
    $unwind: "$hospede"
  },
  {
    $project: {
      nome: "$hospede.nome",
      email: "$hospede.email",
      total_reservas: 1
    }
  },
  {
    $sort: { total_reservas: -1 }
  }
]).forEach(r => printjson(r));

// ============================================================
// CONSULTA 3 — Faturamento por período
// ============================================================

// 3a. Faturamento total em abril de 2024
print("\n=== Faturamento em Abril de 2024 ===");
db.pagamentos.aggregate([
  {
    $match: {
      data_pagamento: {
        $gte: new Date("2024-04-01"),
        $lt: new Date("2024-05-01")
      },
      status: "pago"
    }
  },
  {
    $group: {
      _id: null,
      total_faturado: { $sum: "$valor" },
      num_pagamentos: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      mes: "Abril 2024",
      total_faturado: 1,
      num_pagamentos: 1
    }
  }
]).forEach(r => printjson(r));

// 3b. Faturamento mensal ao longo de 2024
print("\n=== Faturamento mensal em 2024 ===");
db.pagamentos.aggregate([
  {
    $match: {
      data_pagamento: {
        $gte: new Date("2024-01-01"),
        $lt: new Date("2025-01-01")
      },
      status: "pago"
    }
  },
  {
    $group: {
      _id: { $month: "$data_pagamento" },
      total_faturado: { $sum: "$valor" },
      num_pagamentos: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  },
  {
    $project: {
      mes: "$_id",
      total_faturado: 1,
      num_pagamentos: 1,
      _id: 0
    }
  }
]).forEach(r => printjson(r));

// 3c. Faturamento total anual 2024
print("\n=== Faturamento total anual 2024 ===");
db.pagamentos.aggregate([
  {
    $match: {
      data_pagamento: {
        $gte: new Date("2024-01-01"),
        $lt: new Date("2025-01-01")
      },
      status: "pago"
    }
  },
  {
    $group: {
      _id: null,
      total_anual: { $sum: "$valor" },
      total_hospedagens: { $sum: 1 },
      media_por_hospedagem: { $avg: "$valor" }
    }
  },
  {
    $project: {
      _id: 0,
      ano: 2024,
      total_anual: 1,
      total_hospedagens: 1,
      media_por_hospedagem: { $round: ["$media_por_hospedagem", 2] }
    }
  }
]).forEach(r => printjson(r));

// ============================================================
// CONSULTA 4 — Períodos com mais ocupação
// ============================================================

// 4a. Meses com mais reservas em 2024
print("\n=== Meses com mais reservas em 2024 ===");
db.reservas.aggregate([
  {
    $match: {
      check_in_previsto: {
        $gte: new Date("2024-01-01"),
        $lt: new Date("2025-01-01")
      }
    }
  },
  {
    $group: {
      _id: { $month: "$check_in_previsto" },
      total_reservas: { $sum: 1 }
    }
  },
  {
    $sort: { total_reservas: -1 }
  },
  {
    $project: {
      _id: 0,
      mes: "$_id",
      total_reservas: 1
    }
  }
]).forEach(r => printjson(r));

// 4b. Quarto mais reservado
print("\n=== Quartos mais reservados ===");
db.reservas.aggregate([
  {
    $group: {
      _id: "$quarto_id",
      total_reservas: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "quartos",
      localField: "_id",
      foreignField: "_id",
      as: "quarto"
    }
  },
  {
    $unwind: "$quarto"
  },
  {
    $project: {
      _id: 0,
      numero: "$quarto.numero",
      tipo: "$quarto.tipo",
      total_reservas: 1
    }
  },
  {
    $sort: { total_reservas: -1 }
  }
]).forEach(r => printjson(r));

// 4c. Média de diárias por hospedagem
print("\n=== Média de diárias por hospedagem ===");
db.hospedagens.aggregate([
  {
    $group: {
      _id: null,
      media_diarias: { $avg: "$num_diarias" },
      total_hospedagens: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      media_diarias: { $round: ["$media_diarias", 1] },
      total_hospedagens: 1
    }
  }
]).forEach(r => printjson(r));

// ============================================================
// CONSULTA BÔNUS — Ranking de avaliações por quarto
// ============================================================

print("\n=== Ranking de avaliações por quarto ===");
db.feedbacks.aggregate([
  {
    $group: {
      _id: "$quarto_id",
      media_geral: { $avg: "$nota_geral" },
      media_limpeza: { $avg: "$nota_limpeza" },
      media_atendimento: { $avg: "$nota_atendimento" },
      total_avaliacoes: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "quartos",
      localField: "_id",
      foreignField: "_id",
      as: "quarto"
    }
  },
  {
    $unwind: "$quarto"
  },
  {
    $project: {
      _id: 0,
      numero: "$quarto.numero",
      tipo: "$quarto.tipo",
      media_geral: { $round: ["$media_geral", 1] },
      media_limpeza: { $round: ["$media_limpeza", 1] },
      media_atendimento: { $round: ["$media_atendimento", 1] },
      total_avaliacoes: 1
    }
  },
  {
    $sort: { media_geral: -1 }
  }
]).forEach(r => printjson(r));

print("\n✅ Todas as consultas executadas com sucesso!");
