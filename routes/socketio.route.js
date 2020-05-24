const express = require('express');
const router = express.Router();
const app = express.Router();

// Colocar controller que ainda não foi criado

const view_controller =  require("../control/view.controller");
const style_controller = require("../control/sytle.controller");
const js_controller = require("../control/javascript.controller");
const jq_controller = require("../control/jquery.controller");
const socketio_controller = require("../control/socketio.controller");
router.get('/index', view_controller.view);
router.get('/assetsCSS', style_controller.style);
router.get('/assetsJS', js_controller.javascript);
router.get('/assetsJQ', jq_controller.jquery);
router.get('/assetsSQ', socketio_controller.socketio);
module.exports = router;