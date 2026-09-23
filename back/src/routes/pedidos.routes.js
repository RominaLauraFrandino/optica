// ============================================================
// CAPA DE RUTAS - Óptica La Mirada
// Cada controlador async va envuelto en asyncHandler: si su
// promesa falla, el error viaja al manejador centralizado.
// ============================================================
const { Router } = require("express");
const asyncHandler = require("../middlewares/asyncHandler");
const pedidosController = require("../controllers/pedidos.controller");

const router = Router();

router.get("/pedidos", asyncHandler(pedidosController.listarPedidos));
router.post("/pedidos", asyncHandler(pedidosController.crearPedido));
router.put("/pedidos/:id/avanzar", asyncHandler(pedidosController.avanzarPedido));

router.get("/armazones", asyncHandler(pedidosController.listarArmazones));

module.exports = router;
