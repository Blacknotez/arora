

const config = require('../../config');
const { DataTypes } = require('sequelize');

function _0x38f3(){var _0xfbcb77=['TEXT','define','13626880JyiIdX','STRING','54JLCkwP','4NTtarg','4714722IZaOUS','250138NdWdJk','4759fipmQo','3091345SuiGZN','exports','setting','12YVDkSr','update','291243CqxULs','length','findAll','DATABASE','29982900OuSFnS'];_0x38f3=function(){return _0xfbcb77;};return _0x38f3();}function _0x37c8(_0x2c9b7d,_0x16a562){var _0x38f314=_0x38f3();return _0x37c8=function(_0x37c83c,_0x3024da){_0x37c83c=_0x37c83c-0x114;var _0x17a018=_0x38f314[_0x37c83c];return _0x17a018;},_0x37c8(_0x2c9b7d,_0x16a562);}var _0x451e5f=_0x37c8;(function(_0x40438d,_0x2023c7){var _0x5ba76a=_0x37c8,_0xccd9f1=_0x40438d();while(!![]){try{var _0x46cea0=parseInt(_0x5ba76a(0x121))/0x1+-parseInt(_0x5ba76a(0x11e))/0x2*(-parseInt(_0x5ba76a(0x114))/0x3)+parseInt(_0x5ba76a(0x125))/0x4*(parseInt(_0x5ba76a(0x122))/0x5)+parseInt(_0x5ba76a(0x11d))/0x6*(-parseInt(_0x5ba76a(0x120))/0x7)+parseInt(_0x5ba76a(0x11b))/0x8+parseInt(_0x5ba76a(0x11f))/0x9+-parseInt(_0x5ba76a(0x118))/0xa;if(_0x46cea0===_0x2023c7)break;else _0xccd9f1['push'](_0xccd9f1['shift']());}catch(_0x369a65){_0xccd9f1['push'](_0xccd9f1['shift']());}}}(_0x38f3,0xeaa1a));const AfnanPLK=config[_0x451e5f(0x117)][_0x451e5f(0x11a)]('Afnan',{'chat':{'type':DataTypes[_0x451e5f(0x11c)],'allowNull':![]},'type':{'type':DataTypes['STRING'],'allowNull':![]},'message':{'type':DataTypes[_0x451e5f(0x119)],'allowNull':![]}});async function addplk(_0x3d4f9a=null,_0x331728=_0x451e5f(0x124)){var _0x2ca590=_0x451e5f,_0x5d7d71=await AfnanPLK[_0x2ca590(0x116)]({'where':{'chat':_0x3d4f9a,'type':_0x331728}});return _0x5d7d71[_0x2ca590(0x115)]<0x1?![]:_0x5d7d71[0x0]['dataValues'];}async function makeplk(_0x2ef1b5=null,_0x51f9be='setting',_0x166961=null){var _0x52fac8=_0x451e5f,_0x43d9d7=await AfnanPLK[_0x52fac8(0x116)]({'where':{'chat':_0x2ef1b5,'type':_0x51f9be}});return _0x43d9d7['length']<0x1?await AfnanPLK['create']({'chat':_0x2ef1b5,'type':_0x51f9be,'message':_0x166961}):await _0x43d9d7[0x0][_0x52fac8(0x126)]({'chat':_0x2ef1b5,'type':_0x51f9be,'message':_0x166961});}async function removeplk(_0xbb2db8=null,_0x5f15c8=_0x451e5f(0x124)){var _0x2f0775=await AfnanPLK['findAll']({'where':{'chat':_0xbb2db8,'type':_0x5f15c8}});return await _0x2f0775[0x0]['destroy']();}module[_0x451e5f(0x123)]={'AfnanPLK':AfnanPLK,'addplk':addplk,'makeplk':makeplk,'removeplk':removeplk};




