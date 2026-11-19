'use strict';
const STATIONS=[{"name":"Stanwell","x":1440,"y":3540,"attach":[1440,3540],"regio":1},{"name":"Medway Airport","x":1440,"y":3510,"attach":[1440.0,3510.0]},{"name":"Eastden","x":1440,"y":3536,"attach":[1440.0,3535.71],"regio":1},{"name":"Millholme Junction","x":1440,"y":3600,"attach":[1440.0,3600.0],"regio":1},{"name":"Holmford Junction","x":1440,"y":3549,"attach":[1440.0,3548.57],"regio":1},{"name":"Hawbrook Junction","x":1443,"y":3548,"attach":[1443.06,3548.17],"regio":1},{"name":"Birchsted","x":1446,"y":3556,"attach":[1446.12,3556.33],"regio":1},{"name":"Warley","x":1320,"y":3210,"attach":[1320,3210],"regio":1},{"name":"Melbridge Central","x":1290,"y":3090,"attach":[1290.0,3090.0]},{"name":"Melsted","x":1314,"y":3204,"attach":[1314.24,3204.24],"regio":1},{"name":"Thornworth","x":1308,"y":3198,"attach":[1308.49,3198.49],"regio":1},{"name":"Thurlthorpe","x":1303,"y":3193,"attach":[1302.95,3192.54],"regio":1},{"name":"Newthwaite","x":1298,"y":3186,"attach":[1297.92,3186.16],"regio":1},{"name":"Chalfield","x":1294,"y":3179,"attach":[1294.05,3179.0],"regio":1},{"name":"Goldwell","x":1292,"y":3171,"attach":[1291.61,3171.25],"regio":1},{"name":"Kirkford","x":1290,"y":3163,"attach":[1290.41,3163.23],"regio":1},{"name":"Larkhurst","x":1290,"y":3155,"attach":[1290.0,3155.11],"regio":1},{"name":"Sandcote","x":1290,"y":3147,"attach":[1290.0,3146.97],"regio":1},{"name":"Oakthwaite","x":1290,"y":3139,"attach":[1290.0,3138.83],"regio":1},{"name":"Stowsted","x":1350,"y":3480,"attach":[1350.0,3480.0],"regio":1},{"name":"Blackcote","x":1320,"y":3221,"attach":[1320.0,3220.78],"regio":1},{"name":"Dunstow","x":1320,"y":3232,"attach":[1320.0,3231.56],"regio":1},{"name":"Thorndale","x":1320,"y":3242,"attach":[1320.0,3242.33],"regio":1},{"name":"Warbridge","x":1320,"y":3253,"attach":[1320.0,3253.11],"regio":1},{"name":"Newminster","x":1320,"y":3264,"attach":[1320.0,3263.89],"regio":1},{"name":"Blackden","x":1320,"y":3275,"attach":[1320.0,3274.67],"regio":1},{"name":"Heaththorpe","x":1320,"y":3285,"attach":[1320.0,3285.45],"regio":1},{"name":"Highmore","x":1320,"y":3296,"attach":[1320.0,3296.22],"regio":1},{"name":"Grimsmore","x":1320,"y":3307,"attach":[1320.0,3307.0],"regio":1},{"name":"Ulverstow","x":1320,"y":3318,"attach":[1320.0,3317.78],"regio":1},{"name":"Cherrywell","x":1320,"y":3329,"attach":[1320.0,3328.56],"regio":1},{"name":"Elmstow","x":1320,"y":3339,"attach":[1320.0,3339.33],"regio":1},{"name":"Larkminster","x":1320,"y":3350,"attach":[1320.0,3350.11],"regio":1},{"name":"Saxethwaite","x":1320,"y":3361,"attach":[1320.0,3360.89],"regio":1},{"name":"Wakeholme","x":1320,"y":3372,"attach":[1320.0,3371.67],"regio":1},{"name":"Stowdale","x":1320,"y":3382,"attach":[1320.0,3382.45],"regio":1},{"name":"Swanford","x":1320,"y":3393,"attach":[1320.0,3393.22],"regio":1},{"name":"Leamore","x":1320,"y":3404,"attach":[1320.0,3404.0],"regio":1},{"name":"Brentwick","x":1320,"y":3415,"attach":[1320.0,3414.78],"regio":1},{"name":"Leadale","x":1320,"y":3426,"attach":[1320.0,3425.56],"regio":1},{"name":"Ashhurst","x":1410,"y":3270,"attach":[1410.0,3270.0],"regio":1},{"name":"Wickton","x":1324,"y":3214,"attach":[1324.45,3214.45],"regio":1},{"name":"Larkcombe","x":1329,"y":3219,"attach":[1328.9,3218.9],"regio":1},{"name":"Little Lynwick","x":1333,"y":3223,"attach":[1333.35,3223.35],"regio":1},{"name":"Silmere","x":1338,"y":3228,"attach":[1337.8,3227.8],"regio":1},{"name":"Redworth","x":1342,"y":3232,"attach":[1342.25,3232.25],"regio":1},{"name":"Thorngate","x":1347,"y":3237,"attach":[1346.7,3236.7],"regio":1},{"name":"Newbrook","x":1351,"y":3241,"attach":[1351.15,3241.15],"regio":1},{"name":"Fenmore","x":1356,"y":3246,"attach":[1355.61,3245.61],"regio":1},{"name":"Bramwick","x":1360,"y":3250,"attach":[1360.06,3250.06],"regio":1},{"name":"Ryested","x":1365,"y":3255,"attach":[1364.51,3254.51],"regio":1},{"name":"Millstow","x":1369,"y":3259,"attach":[1368.96,3258.96],"regio":1},{"name":"Blackton","x":1374,"y":3263,"attach":[1373.76,3263.02],"regio":1},{"name":"Wardour","x":1680,"y":3570,"attach":[1680,3570]},{"name":"Beckthorpe","x":1680,"y":3480,"attach":[1680.0,3480.0],"regio":1},{"name":"Holmden","x":1680,"y":3561,"attach":[1680.0,3561.0],"regio":1},{"name":"Quarrley","x":1680,"y":3552,"attach":[1680.0,3552.0],"regio":1},{"name":"Fernwood","x":1680,"y":3543,"attach":[1680.0,3543.0],"regio":1},{"name":"Hunford","x":1680,"y":3534,"attach":[1680.0,3534.0],"regio":1},{"name":"Eastthorpe","x":1680,"y":3720,"attach":[1680.0,3720.0],"regio":1},{"name":"Wingate","x":1680,"y":3577,"attach":[1680.0,3577.14],"regio":1},{"name":"Warham","x":1680,"y":3584,"attach":[1680.0,3584.29],"regio":1},{"name":"Swanwick","x":1680,"y":3591,"attach":[1680.0,3591.43],"regio":1},{"name":"Ryeby","x":1680,"y":3599,"attach":[1680.0,3598.57],"regio":1},{"name":"Moorwood","x":1680,"y":3606,"attach":[1680.0,3605.71],"regio":1},{"name":"Todfield","x":1680,"y":3613,"attach":[1680.0,3612.86],"regio":1},{"name":"Swanthwaite","x":1680,"y":3620,"attach":[1680.0,3620.0],"regio":1},{"name":"Hartwood","x":1680,"y":3627,"attach":[1680.0,3627.14],"regio":1},{"name":"Hawcote","x":1680,"y":3634,"attach":[1680.0,3634.29],"regio":1},{"name":"Fenholme","x":1680,"y":3641,"attach":[1680.0,3641.43],"regio":1},{"name":"Saxecote","x":1680,"y":3649,"attach":[1680.0,3648.57],"regio":1},{"name":"Walholme","x":1680,"y":3656,"attach":[1680.0,3655.71],"regio":1},{"name":"Burnbrook","x":1680,"y":3663,"attach":[1680.0,3662.86],"regio":1},{"name":"Beckthwaite","x":1680,"y":3670,"attach":[1680.0,3670.0],"regio":1},{"name":"Willowmere","x":1680,"y":3677,"attach":[1680.0,3677.14],"regio":1},{"name":"Crowfield Junction","x":1710,"y":3450,"attach":[1710.0,3450.0],"regio":1},{"name":"Highford","x":1680,"y":3562,"attach":[1680.0,3562.34],"regio":1},{"name":"Dundale","x":1680,"y":3555,"attach":[1680.0,3554.68],"regio":1},{"name":"Fernfield","x":1680,"y":3547,"attach":[1680.0,3547.02],"regio":1},{"name":"Walstead","x":1680,"y":3539,"attach":[1680.0,3539.36],"regio":1},{"name":"Brookbury","x":1680,"y":3532,"attach":[1680.0,3531.7],"regio":1},{"name":"Southmere","x":1680,"y":3524,"attach":[1680.0,3524.04],"regio":1},{"name":"Fairgate","x":1680,"y":3516,"attach":[1680.0,3516.38],"regio":1},{"name":"Longden","x":1680,"y":3509,"attach":[1680.0,3508.72],"regio":1},{"name":"Malmere","x":1680,"y":3501,"attach":[1680.01,3501.06],"regio":1},{"name":"Melby","x":1681,"y":3493,"attach":[1680.71,3493.43],"regio":1},{"name":"Longbrook","x":1682,"y":3486,"attach":[1682.43,3486.0],"regio":1},{"name":"Silcote","x":1680,"y":3450,"attach":[1680.0,3450.0],"regio":1},{"name":"Oakholme","x":1680,"y":3557,"attach":[1680.0,3556.67],"regio":1},{"name":"Longham","x":1680,"y":3543,"attach":[1680.0,3543.33],"regio":1},{"name":"Quarrbridge","x":1680,"y":3530,"attach":[1680.0,3530.0],"regio":1},{"name":"Ashcombe","x":1740,"y":3210,"attach":[1740,3210],"regio":1},{"name":"Oakmouth","x":1620,"y":3060,"attach":[1620.0,3060.0]},{"name":"Millsted","x":1733,"y":3203,"attach":[1733.33,3203.33],"regio":1},{"name":"Penstead","x":1727,"y":3197,"attach":[1726.66,3196.66],"regio":1},{"name":"Blackbrook","x":1720,"y":3190,"attach":[1719.98,3189.98],"regio":1},{"name":"Chalstead","x":1713,"y":3183,"attach":[1713.31,3183.31],"regio":1},{"name":"Millwood","x":1707,"y":3177,"attach":[1706.64,3176.64],"regio":1},{"name":"Woodstow","x":1700,"y":3170,"attach":[1699.97,3169.97],"regio":1},{"name":"Oldton","x":1693,"y":3163,"attach":[1693.3,3163.3],"regio":1},{"name":"Fenden","x":1687,"y":3157,"attach":[1686.62,3156.62],"regio":1},{"name":"Whitham","x":1680,"y":3150,"attach":[1679.95,3149.95],"regio":1},{"name":"Sutgate","x":1673,"y":3143,"attach":[1673.28,3143.28],"regio":1},{"name":"Fernstead","x":1667,"y":3137,"attach":[1666.61,3136.61],"regio":1},{"name":"Eastcombe","x":1660,"y":3130,"attach":[1659.94,3129.94],"regio":1},{"name":"Marwood","x":1653,"y":3123,"attach":[1653.26,3123.26],"regio":1},{"name":"Ashbrook","x":1647,"y":3117,"attach":[1646.59,3116.59],"regio":1},{"name":"Elmdale","x":1640,"y":3110,"attach":[1639.92,3109.92],"regio":1},{"name":"Victoria Central","x":1680,"y":3390,"attach":[1680.0,3390.0]},{"name":"Chalden","x":1729,"y":3221,"attach":[1728.98,3221.02],"regio":1},{"name":"Cherryminster","x":1718,"y":3232,"attach":[1717.96,3232.04],"regio":1},{"name":"Kirkcote","x":1707,"y":3243,"attach":[1706.94,3243.06],"regio":1},{"name":"Lower Ryested","x":1696,"y":3254,"attach":[1695.93,3254.07],"regio":1},{"name":"Blackholme","x":1687,"y":3267,"attach":[1686.65,3266.51],"regio":1},{"name":"Barkwell","x":1681,"y":3281,"attach":[1681.1,3280.99],"regio":1},{"name":"Kirkby","x":1680,"y":3297,"attach":[1680.0,3296.51],"regio":1},{"name":"Salbrook","x":1650,"y":3270,"attach":[1650.0,3270.0],"regio":1},{"name":"Leawood","x":1735,"y":3215,"attach":[1734.99,3215.01],"regio":1},{"name":"Warford","x":1730,"y":3220,"attach":[1729.99,3220.01],"regio":1},{"name":"Hartstow","x":1725,"y":3225,"attach":[1724.98,3225.02],"regio":1},{"name":"Faircote","x":1720,"y":3230,"attach":[1719.97,3230.03],"regio":1},{"name":"Hartwick","x":1715,"y":3235,"attach":[1714.96,3235.04],"regio":1},{"name":"Kirkdale","x":1710,"y":3240,"attach":[1709.96,3240.04],"regio":1},{"name":"Bradby","x":1705,"y":3245,"attach":[1704.95,3245.05],"regio":1},{"name":"Moorsted","x":1700,"y":3250,"attach":[1699.94,3250.06],"regio":1},{"name":"Fairbridge","x":1695,"y":3255,"attach":[1694.94,3255.06],"regio":1},{"name":"Leabury","x":1690,"y":3260,"attach":[1689.87,3260.01],"regio":1},{"name":"Longcombe","x":1620,"y":3210,"attach":[1620.0,3210.0],"regio":1},{"name":"Brookdale","x":1732,"y":3210,"attach":[1732.0,3210.0],"regio":1},{"name":"Grimsbury","x":1724,"y":3210,"attach":[1724.0,3210.0],"regio":1},{"name":"Bramthwaite","x":1716,"y":3210,"attach":[1716.0,3210.0],"regio":1},{"name":"Larkthwaite","x":1708,"y":3210,"attach":[1708.0,3210.0],"regio":1},{"name":"Yarford","x":1700,"y":3210,"attach":[1700.0,3210.0],"regio":1},{"name":"Oakgate","x":1692,"y":3210,"attach":[1692.0,3210.0],"regio":1},{"name":"Salcote","x":1684,"y":3210,"attach":[1684.0,3210.0],"regio":1},{"name":"Fenby","x":1676,"y":3210,"attach":[1676.0,3210.0],"regio":1},{"name":"Woldbury","x":1668,"y":3210,"attach":[1668.0,3210.0],"regio":1},{"name":"Millley","x":1732,"y":3213,"attach":[1732.39,3213.26],"regio":1},{"name":"Birchton","x":1725,"y":3217,"attach":[1724.77,3216.53],"regio":1},{"name":"Long Yarwood","x":1717,"y":3220,"attach":[1717.13,3219.71],"regio":1},{"name":"Wakebrook","x":1709,"y":3222,"attach":[1709.29,3222.39],"regio":1},{"name":"Thurlham","x":1701,"y":3224,"attach":[1701.18,3224.0],"regio":1},{"name":"Beckton","x":1693,"y":3225,"attach":[1692.94,3224.63],"regio":1},{"name":"Heathsted","x":1685,"y":3224,"attach":[1684.69,3224.29],"regio":1},{"name":"Brentwell","x":1677,"y":3223,"attach":[1676.5,3223.04],"regio":1},{"name":"Fairthwaite","x":1668,"y":3221,"attach":[1668.43,3221.18],"regio":1},{"name":"Chungsia","x":1680,"y":1590,"attach":[1680,1590]},{"name":"Hantsin","x":1620,"y":1620,"attach":[1620.0,1620.0]},{"name":"Peiting Central","x":1350,"y":1620,"attach":[1350.0,1620.0]},{"name":"Sianning","x":1595,"y":1590,"attach":[1594.94,1590.0]},{"name":"Songqiao Airport","x":1510,"y":1590,"attach":[1509.89,1590.0]},{"name":"Quanguan","x":1425,"y":1590,"attach":[1424.83,1590.0]},{"name":"Yenchia Main","x":1710,"y":1350,"attach":[1710.0,1350.0]},{"name":"North Chungsia","x":1680,"y":1527,"attach":[1680.0,1527.44]},{"name":"Pu’an","x":1680,"y":1465,"attach":[1680.0,1464.89]},{"name":"Linhai-Pu’an","x":1680,"y":1402,"attach":[1680.0,1402.33]},{"name":"Hengchu","x":1710,"y":1500,"attach":[1710.0,1500.0]},{"name":"Farinport Central","x":690,"y":2100,"attach":[690,2100]},{"name":"Amptonside Central","x":840,"y":2100,"attach":[840.0,2100.0]},{"name":"Alderford Airport","x":765,"y":2100,"attach":[765.0,2100.0]},{"name":"Willowbury","x":1620,"y":3450,"attach":[1620,3450],"regio":1},{"name":"Foxstead Junction","x":1620,"y":3450,"attach":[1620,3450],"regio":1},{"name":"Hunton","x":1631,"y":3450,"attach":[1631.25,3450.0],"regio":1},{"name":"Stockmere","x":1642,"y":3450,"attach":[1642.5,3450.0],"regio":1},{"name":"Kings Hawgate","x":1627,"y":3450,"attach":[1627.09,3450.0],"regio":1},{"name":"Thurlcote","x":1634,"y":3450,"attach":[1634.17,3450.0],"regio":1},{"name":"Birchcote","x":1641,"y":3451,"attach":[1641.23,3450.57],"regio":1},{"name":"Grimssted","x":1648,"y":3452,"attach":[1648.06,3452.4],"regio":1},{"name":"Salfield","x":1500,"y":3090,"attach":[1500,3090],"regio":1},{"name":"Burnminster Junction","x":1290,"y":3090,"attach":[1290.0,3090.0],"regio":1},{"name":"Cherrymore","x":1492,"y":3090,"attach":[1492.22,3090.0],"regio":1},{"name":"Fenmere","x":1484,"y":3090,"attach":[1484.44,3090.0],"regio":1},{"name":"Ulverholme","x":1477,"y":3090,"attach":[1476.67,3090.0],"regio":1},{"name":"Ulverthorpe","x":1469,"y":3090,"attach":[1468.89,3090.0],"regio":1},{"name":"Thornmere","x":1461,"y":3090,"attach":[1461.11,3090.0],"regio":1},{"name":"Crowbrook","x":1453,"y":3090,"attach":[1453.33,3090.0],"regio":1},{"name":"Willowwick","x":1446,"y":3090,"attach":[1445.56,3090.0],"regio":1},{"name":"Heathholme","x":1438,"y":3090,"attach":[1437.78,3090.0],"regio":1},{"name":"Ulverhurst","x":1430,"y":3090,"attach":[1430.0,3090.0],"regio":1},{"name":"Longcote","x":1422,"y":3090,"attach":[1422.22,3090.0],"regio":1},{"name":"Hawmore","x":1414,"y":3090,"attach":[1414.44,3090.0],"regio":1},{"name":"Barkton","x":1407,"y":3090,"attach":[1406.67,3090.0],"regio":1},{"name":"Newstead","x":1399,"y":3090,"attach":[1398.89,3090.0],"regio":1},{"name":"Claybrook","x":1391,"y":3090,"attach":[1391.11,3090.0],"regio":1},{"name":"Foxcote","x":1383,"y":3090,"attach":[1383.33,3090.0],"regio":1},{"name":"Chalminster","x":1376,"y":3090,"attach":[1375.56,3090.0],"regio":1},{"name":"Coldham","x":1368,"y":3090,"attach":[1367.78,3090.0],"regio":1},{"name":"Elmmere","x":1360,"y":3090,"attach":[1360.0,3090.0],"regio":1},{"name":"Goldsted","x":1352,"y":3090,"attach":[1352.22,3090.0],"regio":1},{"name":"Rookwell","x":1344,"y":3090,"attach":[1344.44,3090.0],"regio":1},{"name":"Hunwood","x":1337,"y":3090,"attach":[1336.67,3090.0],"regio":1},{"name":"Lynstow","x":1508,"y":3090,"attach":[1508.14,3090.0],"regio":1},{"name":"Woodhurst","x":1516,"y":3090,"attach":[1516.28,3090.0],"regio":1},{"name":"Rookhurst","x":1524,"y":3090,"attach":[1524.42,3090.0],"regio":1},{"name":"Leathwaite","x":1533,"y":3090,"attach":[1532.56,3090.0],"regio":1},{"name":"Todmere","x":1541,"y":3090,"attach":[1540.7,3090.0],"regio":1},{"name":"Beckdale","x":1549,"y":3090,"attach":[1548.83,3090.0],"regio":1},{"name":"Newthorpe","x":1557,"y":3090,"attach":[1556.97,3090.0],"regio":1},{"name":"Chalcote","x":1565,"y":3090,"attach":[1565.11,3090.0],"regio":1},{"name":"Goldbrook","x":1573,"y":3090,"attach":[1573.23,3089.59],"regio":1},{"name":"Ashfield","x":1581,"y":3088,"attach":[1581.25,3088.39],"regio":1},{"name":"Whitbury","x":1500,"y":3240,"attach":[1500.0,3240.0],"regio":1},{"name":"Wykebury","x":1500,"y":3099,"attach":[1500.0,3098.82],"regio":1},{"name":"Penby","x":1500,"y":3108,"attach":[1500.0,3107.65],"regio":1},{"name":"Swanstow","x":1500,"y":3116,"attach":[1500.0,3116.47],"regio":1},{"name":"Ryebridge","x":1500,"y":3125,"attach":[1500.0,3125.29],"regio":1},{"name":"Bradstead","x":1500,"y":3134,"attach":[1500.0,3134.12],"regio":1},{"name":"Silham","x":1500,"y":3143,"attach":[1500.0,3142.94],"regio":1},{"name":"Ormwick","x":1500,"y":3152,"attach":[1500.0,3151.76],"regio":1},{"name":"Kings Wickden","x":1500,"y":3161,"attach":[1500.0,3160.59],"regio":1},{"name":"Southham","x":1500,"y":3169,"attach":[1500.0,3169.41],"regio":1},{"name":"Ulverbury","x":1500,"y":3178,"attach":[1500.0,3178.24],"regio":1},{"name":"Heaththwaite","x":1500,"y":3187,"attach":[1500.0,3187.06],"regio":1},{"name":"Northwell","x":1502,"y":3100,"attach":[1501.95,3100.05],"regio":1},{"name":"Chalstow","x":1504,"y":3110,"attach":[1503.89,3110.1],"regio":1},{"name":"Hartstead","x":1506,"y":3120,"attach":[1505.84,3120.16],"regio":1},{"name":"Southcote","x":1508,"y":3130,"attach":[1507.78,3130.21],"regio":1},{"name":"Coldminster","x":1510,"y":3140,"attach":[1509.73,3140.26],"regio":1},{"name":"Ormmere","x":1512,"y":3150,"attach":[1511.67,3150.31],"regio":1},{"name":"Redby","x":1514,"y":3160,"attach":[1513.62,3160.36],"regio":1},{"name":"Netherthwaite","x":1515,"y":3171,"attach":[1515.02,3170.5],"regio":1},{"name":"Saxeminster","x":1515,"y":3181,"attach":[1515.29,3180.73],"regio":1},{"name":"Leaminster","x":1650,"y":3960,"attach":[1650,3960],"regio":1},{"name":"Marlbury","x":1650,"y":3870,"attach":[1650.0,3870.0]},{"name":"Cherrystow","x":1650,"y":3951,"attach":[1650.0,3951.0],"regio":1},{"name":"Stockbridge","x":1650,"y":3942,"attach":[1650.0,3942.0],"regio":1},{"name":"Elmbury","x":1650,"y":3933,"attach":[1650.0,3933.0],"regio":1},{"name":"Blackdale","x":1650,"y":3924,"attach":[1650.0,3924.0],"regio":1},{"name":"Atlantic Airport","x":1650,"y":3930,"attach":[1650.0,3930.0]},{"name":"Willowholme","x":1650,"y":3951,"attach":[1650.0,3951.37],"regio":1},{"name":"Claystead","x":1650,"y":3943,"attach":[1650.0,3942.74],"regio":1},{"name":"Brentmore","x":1650,"y":3934,"attach":[1650.0,3934.11],"regio":1},{"name":"Grimswick","x":1650,"y":3925,"attach":[1650.0,3925.49],"regio":1},{"name":"Ashcote","x":1650,"y":3917,"attach":[1650.0,3916.86],"regio":1},{"name":"Highham","x":1650,"y":3908,"attach":[1650.0,3908.23],"regio":1},{"name":"Yarby","x":1650,"y":3900,"attach":[1650.0,3899.6],"regio":1},{"name":"Silwick","x":1650,"y":3891,"attach":[1650.0,3890.97],"regio":1},{"name":"Redham","x":1650,"y":3882,"attach":[1650.0,3882.34],"regio":1},{"name":"Thornmore","x":1650,"y":3874,"attach":[1650.0,3873.72],"regio":1},{"name":"Long Crowwick","x":1650,"y":3865,"attach":[1650.0,3865.09],"regio":1},{"name":"Meldale","x":1650,"y":3856,"attach":[1650.0,3856.46],"regio":1},{"name":"Wakefield","x":1650,"y":3848,"attach":[1650.0,3847.83],"regio":1},{"name":"Sutmere","x":1650,"y":3839,"attach":[1650.0,3839.2],"regio":1},{"name":"Marfield","x":1650,"y":3831,"attach":[1650.0,3830.57],"regio":1},{"name":"Ormwell","x":1650,"y":3822,"attach":[1650.0,3821.94],"regio":1},{"name":"Holmholme","x":1650,"y":3813,"attach":[1650.0,3813.32],"regio":1},{"name":"Cherrycombe","x":1650,"y":3805,"attach":[1650.0,3804.69],"regio":1},{"name":"Redden","x":1650,"y":3796,"attach":[1650.0,3796.06],"regio":1},{"name":"Saxecombe","x":1650,"y":3787,"attach":[1650.0,3787.43],"regio":1},{"name":"Kirkfield","x":1650,"y":3779,"attach":[1650.0,3778.8],"regio":1},{"name":"Weswell","x":1650,"y":3770,"attach":[1650.09,3770.18],"regio":1},{"name":"Thurlden","x":1651,"y":3762,"attach":[1650.88,3761.59],"regio":1},{"name":"Swanbrook","x":1470,"y":3960,"attach":[1470.0,3960.0],"regio":1},{"name":"Elmwick","x":1642,"y":3960,"attach":[1642.17,3960.0],"regio":1},{"name":"Shepthwaite","x":1634,"y":3960,"attach":[1634.35,3960.0],"regio":1},{"name":"Great Foxley","x":1627,"y":3960,"attach":[1626.52,3960.0],"regio":1},{"name":"Oakdale","x":1619,"y":3960,"attach":[1618.7,3960.0],"regio":1},{"name":"Yarcote","x":1611,"y":3960,"attach":[1610.87,3960.0],"regio":1},{"name":"Ashford","x":1603,"y":3960,"attach":[1603.04,3960.0],"regio":1},{"name":"Hunwell","x":1595,"y":3960,"attach":[1595.22,3960.0],"regio":1},{"name":"Goldden","x":1587,"y":3960,"attach":[1587.39,3960.0],"regio":1},{"name":"Stockthwaite","x":1580,"y":3960,"attach":[1579.57,3960.0],"regio":1},{"name":"Kirkhurst","x":1572,"y":3960,"attach":[1571.74,3960.0],"regio":1},{"name":"Langfield","x":1564,"y":3960,"attach":[1563.91,3960.0],"regio":1},{"name":"Lynthwaite","x":1556,"y":3960,"attach":[1556.09,3960.0],"regio":1},{"name":"Clayfield","x":1548,"y":3960,"attach":[1548.26,3960.0],"regio":1},{"name":"Winton","x":1540,"y":3960,"attach":[1540.43,3960.0],"regio":1},{"name":"Bramsted","x":1533,"y":3960,"attach":[1532.61,3960.0],"regio":1},{"name":"Ormton","x":1525,"y":3960,"attach":[1524.78,3960.0],"regio":1},{"name":"Barkwick","x":1517,"y":3960,"attach":[1516.96,3960.0],"regio":1},{"name":"Chalbrook Junction","x":1650,"y":3870,"attach":[1650.0,3870.0],"regio":1},{"name":"Brentby","x":1654,"y":3954,"attach":[1653.8,3954.3],"regio":1},{"name":"Goldham","x":1658,"y":3949,"attach":[1657.6,3948.6],"regio":1},{"name":"Goldton","x":1661,"y":3943,"attach":[1661.03,3942.68],"regio":1},{"name":"Malden","x":1664,"y":3936,"attach":[1663.56,3936.35],"regio":1},{"name":"Highley","x":1665,"y":3930,"attach":[1664.75,3929.65],"regio":1},{"name":"Walbury","x":1665,"y":3923,"attach":[1664.53,3922.83],"regio":1},{"name":"Woodbrook","x":1663,"y":3916,"attach":[1663.18,3916.12],"regio":1},{"name":"Wykested","x":1661,"y":3910,"attach":[1661.29,3909.53],"regio":1},{"name":"Waketon","x":1320,"y":2910,"attach":[1320,2910],"regio":1},{"name":"Stockmore","x":1470,"y":2910,"attach":[1470.0,2910.0],"regio":1},{"name":"Northminster","x":1328,"y":2910,"attach":[1327.89,2910.0],"regio":1},{"name":"Hunhurst","x":1336,"y":2910,"attach":[1335.79,2910.0],"regio":1},{"name":"Melgate","x":1344,"y":2910,"attach":[1343.68,2910.0],"regio":1},{"name":"Yarmore","x":1352,"y":2910,"attach":[1351.58,2910.0],"regio":1},{"name":"Wakeham","x":1359,"y":2910,"attach":[1359.47,2910.0],"regio":1},{"name":"Leawell","x":1367,"y":2910,"attach":[1367.37,2910.0],"regio":1},{"name":"Brambrook","x":1375,"y":2910,"attach":[1375.26,2910.0],"regio":1},{"name":"Claycombe","x":1383,"y":2910,"attach":[1383.16,2910.0],"regio":1},{"name":"Eastminster","x":1391,"y":2910,"attach":[1391.05,2910.0],"regio":1},{"name":"Elmfield","x":1399,"y":2910,"attach":[1398.95,2910.0],"regio":1},{"name":"Longthwaite","x":1407,"y":2910,"attach":[1406.84,2910.0],"regio":1},{"name":"Bradgate","x":1415,"y":2910,"attach":[1414.74,2910.0],"regio":1},{"name":"Fenbridge","x":1423,"y":2910,"attach":[1422.63,2910.0],"regio":1},{"name":"Kingsferry","x":1230,"y":2910,"attach":[1230.0,2910.0]},{"name":"Grimswell","x":1314,"y":2910,"attach":[1314.0,2910.0],"regio":1},{"name":"Ryecote","x":1308,"y":2910,"attach":[1308.0,2910.0],"regio":1},{"name":"Oldwood","x":1302,"y":2910,"attach":[1302.0,2910.0],"regio":1},{"name":"Coldstead","x":1296,"y":2910,"attach":[1296.0,2910.0],"regio":1},{"name":"Coldstow","x":1290,"y":2910,"attach":[1290.0,2910.0],"regio":1},{"name":"Oakminster","x":1284,"y":2910,"attach":[1284.0,2910.0],"regio":1},{"name":"Stockwood","x":1278,"y":2910,"attach":[1278.0,2910.0],"regio":1},{"name":"Fairsted","x":1272,"y":2910,"attach":[1272.0,2910.0],"regio":1},{"name":"Malwell","x":1266,"y":2910,"attach":[1266.0,2910.0],"regio":1},{"name":"Bradbrook","x":1200,"y":2760,"attach":[1200.0,2760.0],"regio":1},{"name":"Oldcote","x":1320,"y":2902,"attach":[1320.0,2902.38],"regio":1},{"name":"Netherbury","x":1320,"y":2895,"attach":[1319.98,2894.76],"regio":1},{"name":"Elmby","x":1319,"y":2887,"attach":[1319.16,2887.19],"regio":1},{"name":"Grimsmere","x":1317,"y":2880,"attach":[1316.75,2879.99],"regio":1},{"name":"Southmore","x":1313,"y":2873,"attach":[1312.81,2873.5],"regio":1},{"name":"Ryestead","x":1308,"y":2868,"attach":[1307.78,2867.78],"regio":1},{"name":"Shepton","x":1302,"y":2862,"attach":[1302.39,2862.39],"regio":1},{"name":"Warthorpe","x":1297,"y":2857,"attach":[1297.0,2857.0],"regio":1},{"name":"Stockcombe","x":1292,"y":2852,"attach":[1291.61,2851.61],"regio":1},{"name":"Winthorpe","x":1286,"y":2846,"attach":[1286.22,2846.22],"regio":1},{"name":"Swanwood","x":1281,"y":2841,"attach":[1280.83,2840.83],"regio":1},{"name":"Sutstead","x":1275,"y":2835,"attach":[1275.45,2835.45],"regio":1},{"name":"Netherfield","x":1270,"y":2830,"attach":[1270.06,2830.06],"regio":1},{"name":"Eastfield","x":1265,"y":2825,"attach":[1264.67,2824.67],"regio":1},{"name":"Eastwick","x":1259,"y":2819,"attach":[1259.28,2819.28],"regio":1},{"name":"Woodminster","x":1254,"y":2814,"attach":[1253.89,2813.89],"regio":1},{"name":"Crowford","x":1249,"y":2809,"attach":[1248.5,2808.5],"regio":1},{"name":"Oldminster","x":1243,"y":2803,"attach":[1243.11,2803.11],"regio":1},{"name":"Wakewood","x":1238,"y":2798,"attach":[1237.72,2797.72],"regio":1},{"name":"Langham","x":1232,"y":2792,"attach":[1232.33,2792.33],"regio":1},{"name":"Wykethorpe","x":1320,"y":2918,"attach":[1320.0,2918.27],"regio":1},{"name":"Thornham","x":1320,"y":2927,"attach":[1320.0,2926.54],"regio":1},{"name":"Melton","x":1320,"y":2935,"attach":[1320.0,2934.81],"regio":1},{"name":"Walbridge","x":1320,"y":2943,"attach":[1320.0,2943.08],"regio":1},{"name":"Grimsstead","x":1320,"y":2951,"attach":[1320.0,2951.35],"regio":1},{"name":"Rookgate","x":1320,"y":2960,"attach":[1320.0,2959.62],"regio":1},{"name":"Marwick","x":1320,"y":2968,"attach":[1320.0,2967.89],"regio":1},{"name":"Moorford","x":1320,"y":2976,"attach":[1320.0,2976.17],"regio":1},{"name":"Quarrthwaite","x":1320,"y":2984,"attach":[1320.0,2984.44],"regio":1},{"name":"Langcote","x":1320,"y":2993,"attach":[1320.0,2992.71],"regio":1},{"name":"Melcote","x":1320,"y":3001,"attach":[1320.0,3000.98],"regio":1},{"name":"Melminster","x":1320,"y":3009,"attach":[1320.0,3009.25],"regio":1},{"name":"Shepwick","x":1320,"y":3018,"attach":[1320.0,3017.52],"regio":1},{"name":"Cotham","x":1320,"y":3026,"attach":[1320.0,3025.79],"regio":1},{"name":"Waterbridge","x":1320,"y":3034,"attach":[1320.0,3034.06],"regio":1},{"name":"Saxehurst","x":1320,"y":3042,"attach":[1319.68,3042.32],"regio":1},{"name":"Warwood","x":1319,"y":3050,"attach":[1318.62,3050.49],"regio":1},{"name":"Stanbrook","x":1321,"y":2921,"attach":[1321.13,2920.5],"regio":1},{"name":"Moorley","x":1322,"y":2931,"attach":[1322.25,2931.0],"regio":1},{"name":"Swanbury","x":1323,"y":2942,"attach":[1323.38,2941.51],"regio":1},{"name":"Longmore","x":1325,"y":2952,"attach":[1324.5,2952.01],"regio":1},{"name":"Wykethwaite","x":1326,"y":2963,"attach":[1325.63,2962.51],"regio":1},{"name":"Quarrthorpe","x":1327,"y":2973,"attach":[1326.75,2973.01],"regio":1},{"name":"Langbury","x":1328,"y":2984,"attach":[1327.88,2983.51],"regio":1},{"name":"Millminster","x":1329,"y":2994,"attach":[1329.0,2994.01],"regio":1},{"name":"Swanwell","x":1330,"y":3005,"attach":[1330.13,3004.52],"regio":1},{"name":"Warstow","x":1331,"y":3015,"attach":[1331.25,3015.02],"regio":1},{"name":"Barkwood","x":1332,"y":3026,"attach":[1332.38,3025.52],"regio":1},{"name":"Woodley","x":1334,"y":3036,"attach":[1333.5,3036.02],"regio":1},{"name":"Highwood","x":1335,"y":3047,"attach":[1334.63,3046.52],"regio":1},{"name":"Woldworth","x":1336,"y":3057,"attach":[1335.63,3057.03],"regio":1},{"name":"Havenbolme Hbf","x":780,"y":2550,"attach":[780.0,2550.0]},{"name":"Binchester","x":840,"y":2700,"attach":[840.0,2700.0]},{"name":"Whitehurst","x":990,"y":2580,"attach":[990.0,2580.0]},{"name":"Longmere","x":1410,"y":3960,"attach":[1410.0,3960.0],"regio":1},{"name":"Beckham","x":1440,"y":4080,"attach":[1440.0,4080.0],"regio":1},{"name":"Wykemore","x":1462,"y":3968,"attach":[1461.63,3968.37],"regio":1},{"name":"Melholme","x":1453,"y":3977,"attach":[1453.42,3976.89],"regio":1},{"name":"Winden","x":1447,"y":3986,"attach":[1446.51,3986.44],"regio":1},{"name":"Holmstow","x":1442,"y":3997,"attach":[1442.03,3997.33],"regio":1},{"name":"Ulverton","x":1440,"y":4009,"attach":[1440.21,4008.98],"regio":1},{"name":"Waterwick","x":1650,"y":4080,"attach":[1650.0,4080.0],"regio":1},{"name":"Kirkcombe","x":1479,"y":3960,"attach":[1479.48,3960.0],"regio":1},{"name":"Ryeham","x":1489,"y":3960,"attach":[1488.95,3960.0],"regio":1},{"name":"Northham","x":1498,"y":3960,"attach":[1498.43,3960.0],"regio":1},{"name":"Birchthorpe","x":1508,"y":3960,"attach":[1507.9,3960.0],"regio":1},{"name":"Crowworth","x":1517,"y":3961,"attach":[1517.34,3960.86],"regio":1},{"name":"Birchby","x":1526,"y":3963,"attach":[1526.47,3963.32],"regio":1},{"name":"Hunwick","x":1535,"y":3967,"attach":[1534.96,3967.44],"regio":1},{"name":"Grimsfield","x":1543,"y":3973,"attach":[1542.55,3973.06],"regio":1},{"name":"Holmthwaite","x":1549,"y":3979,"attach":[1549.49,3979.49],"regio":1},{"name":"Redthorpe","x":1556,"y":3986,"attach":[1556.19,3986.19],"regio":1},{"name":"Highfield","x":1563,"y":3993,"attach":[1562.89,3992.89],"regio":1},{"name":"Sutley","x":1570,"y":4000,"attach":[1569.59,3999.59],"regio":1},{"name":"Heathcombe","x":1576,"y":4006,"attach":[1576.29,4006.29],"regio":1},{"name":"Saxestead","x":1583,"y":4013,"attach":[1582.99,4012.99],"regio":1},{"name":"Chalby","x":1590,"y":4020,"attach":[1589.7,4019.7],"regio":1},{"name":"Woodcombe","x":1596,"y":4026,"attach":[1596.4,4026.4],"regio":1},{"name":"Waterfield","x":1603,"y":4033,"attach":[1603.1,4033.1],"regio":1},{"name":"Burnstead","x":1610,"y":4040,"attach":[1609.8,4039.8],"regio":1},{"name":"Brentley","x":1440,"y":3750,"attach":[1440.0,3750.0],"regio":1},{"name":"Heathden","x":1470,"y":3950,"attach":[1470.0,3950.42],"regio":1},{"name":"Northton","x":1470,"y":3941,"attach":[1470.0,3940.85],"regio":1},{"name":"Burnmore","x":1470,"y":3931,"attach":[1470.0,3931.27],"regio":1},{"name":"Hazeldale","x":1470,"y":3922,"attach":[1470.0,3921.7],"regio":1},{"name":"Thurlbury","x":1470,"y":3912,"attach":[1470.0,3912.12],"regio":1},{"name":"Cherrysted","x":1470,"y":3903,"attach":[1470.0,3902.55],"regio":1},{"name":"Silworth","x":1470,"y":3893,"attach":[1470.0,3892.97],"regio":1},{"name":"Cherrybury","x":1470,"y":3883,"attach":[1470.0,3883.4],"regio":1},{"name":"Heathstow","x":1470,"y":3874,"attach":[1470.0,3873.82],"regio":1},{"name":"Sandfield","x":1470,"y":3864,"attach":[1470.0,3864.25],"regio":1},{"name":"Kirkden","x":1470,"y":3855,"attach":[1470.0,3854.67],"regio":1},{"name":"Newmore","x":1470,"y":3845,"attach":[1470.0,3845.1],"regio":1},{"name":"Willowdale","x":1470,"y":3836,"attach":[1470.0,3835.52],"regio":1},{"name":"Stanmere","x":1470,"y":3826,"attach":[1470.0,3825.95],"regio":1},{"name":"Nethersted","x":1470,"y":3816,"attach":[1470.0,3816.37],"regio":1},{"name":"Barkholme","x":1470,"y":3807,"attach":[1470.0,3806.8],"regio":1},{"name":"Longbridge","x":1470,"y":3797,"attach":[1469.64,3797.24],"regio":1},{"name":"Northden","x":1500,"y":3330,"attach":[1500.0,3330.0],"regio":1},{"name":"Woodfield","x":1500,"y":3250,"attach":[1500.0,3250.0],"regio":1},{"name":"Moorwell","x":1500,"y":3260,"attach":[1500.0,3260.0],"regio":1},{"name":"Hazelthwaite","x":1500,"y":3270,"attach":[1500.0,3270.0],"regio":1},{"name":"Ellesmere","x":1710,"y":1830,"attach":[1710,1830]},{"name":"Barton Central","x":1800,"y":1830,"attach":[1800.0,1830.0]},{"name":"Fukow","x":1710,"y":1710,"attach":[1710.0,1710.0]},{"name":"Zhennanguan","x":1710,"y":1770,"attach":[1710.0,1770.0]},{"name":"Touraine-Central","x":1620,"y":1950,"attach":[1620.0,1950.0]},{"name":"Prinsburg Central","x":1950,"y":1920,"attach":[1950.0,1920.0]},{"name":"Chatham","x":2010,"y":2010,"attach":[2010,2010]},{"name":"Meiyin","x":1050,"y":1890,"attach":[1050,1890]},{"name":"Tsingshui","x":1135,"y":1805,"attach":[1135.06,1804.94]},{"name":"Somerfield St John","x":1080,"y":2040,"attach":[1080.0,2040.0]},{"name":"Millstead","x":945,"y":1995,"attach":[945.0,1995.0]},{"name":"Swanley","x":1680,"y":3460,"attach":[1680.0,3460.0],"regio":1},{"name":"Weswick","x":1680,"y":3470,"attach":[1680.0,3470.0],"regio":1},{"name":"Thurldale","x":1680,"y":3480,"attach":[1680.0,3480.0],"regio":1},{"name":"Brookworth","x":1680,"y":3490,"attach":[1680.0,3490.0],"regio":1},{"name":"Millmore","x":1680,"y":3500,"attach":[1680.0,3500.0],"regio":1},{"name":"Blackby","x":1680,"y":3510,"attach":[1680.0,3510.0],"regio":1},{"name":"Yarstow","x":1680,"y":3520,"attach":[1680.0,3520.0],"regio":1},{"name":"Walley","x":1680,"y":3530,"attach":[1680.0,3530.0],"regio":1},{"name":"Brookholme","x":1680,"y":3540,"attach":[1680.0,3540.0],"regio":1},{"name":"Willowden","x":1680,"y":3550,"attach":[1680.0,3550.0],"regio":1},{"name":"Waterhurst","x":1680,"y":3560,"attach":[1680.0,3560.0],"regio":1},{"name":"Southgate","x":1680,"y":3570,"attach":[1680.0,3570.0],"regio":1},{"name":"Hazelbury","x":1680,"y":3580,"attach":[1680.0,3580.0],"regio":1},{"name":"Beckholme","x":1680,"y":3590,"attach":[1680.0,3590.0],"regio":1},{"name":"Wykeford","x":1680,"y":3600,"attach":[1680.0,3600.0],"regio":1},{"name":"Moorham","x":1680,"y":3610,"attach":[1680.0,3610.0],"regio":1},{"name":"Grimscote","x":1680,"y":3620,"attach":[1680.0,3620.0],"regio":1},{"name":"Goldfield","x":1680,"y":3630,"attach":[1680.0,3630.0],"regio":1},{"name":"Pendale","x":1680,"y":3640,"attach":[1680.0,3640.0],"regio":1},{"name":"Warden","x":1680,"y":3650,"attach":[1680.0,3650.0],"regio":1},{"name":"Highbrook","x":1680,"y":3660,"attach":[1680.0,3660.0],"regio":1},{"name":"Medway Central","x":1410,"y":3450,"attach":[1410.0,3450.0]},{"name":"Silthorpe","x":1670,"y":3450,"attach":[1669.62,3450.0],"regio":1},{"name":"Sandham","x":1659,"y":3450,"attach":[1659.23,3450.0],"regio":1},{"name":"Goldley","x":1649,"y":3450,"attach":[1648.85,3450.0],"regio":1},{"name":"Thurlwell","x":1638,"y":3450,"attach":[1638.46,3450.0],"regio":1},{"name":"Malthwaite","x":1628,"y":3450,"attach":[1628.08,3450.0],"regio":1},{"name":"Stockden","x":1618,"y":3450,"attach":[1617.69,3450.0],"regio":1},{"name":"Langmore","x":1607,"y":3450,"attach":[1607.31,3450.0],"regio":1},{"name":"Bramby","x":1597,"y":3450,"attach":[1596.92,3450.0],"regio":1},{"name":"Westhwaite","x":1587,"y":3450,"attach":[1586.54,3450.0],"regio":1},{"name":"Woodford","x":1576,"y":3450,"attach":[1576.15,3450.0],"regio":1},{"name":"Heathstead","x":1566,"y":3450,"attach":[1565.77,3450.0],"regio":1},{"name":"Melmore","x":1555,"y":3450,"attach":[1555.38,3450.0],"regio":1},{"name":"Crowmere","x":1545,"y":3450,"attach":[1545.0,3450.0],"regio":1},{"name":"Highstead","x":1535,"y":3450,"attach":[1534.62,3450.0],"regio":1},{"name":"Wesbridge","x":1524,"y":3450,"attach":[1524.23,3450.0],"regio":1},{"name":"Warbrook","x":1514,"y":3450,"attach":[1513.85,3450.0],"regio":1},{"name":"Ormcombe","x":1503,"y":3450,"attach":[1503.46,3450.0],"regio":1},{"name":"Thurlholme","x":1493,"y":3450,"attach":[1493.08,3450.0],"regio":1},{"name":"Yarthorpe","x":1483,"y":3450,"attach":[1482.69,3450.0],"regio":1},{"name":"Oldwick","x":1472,"y":3450,"attach":[1472.31,3450.0],"regio":1},{"name":"Larkcote","x":1050,"y":2640,"attach":[1050,2640],"regio":1},{"name":"Mapleriver Central","x":990,"y":2700,"attach":[990.0,2700.0]},{"name":"Stockley","x":1042,"y":2648,"attach":[1042.5,2647.5],"regio":1},{"name":"Hunby","x":1035,"y":2655,"attach":[1035.0,2655.0],"regio":1},{"name":"Leaby","x":1200,"y":2640,"attach":[1200.0,2640.0],"regio":1},{"name":"Newport","x":1110,"y":2640,"attach":[1110.0,2640.0]},{"name":"Bradford","x":1120,"y":2640,"attach":[1120.0,2640.0],"regio":1},{"name":"Marmore","x":1130,"y":2640,"attach":[1130.0,2640.0],"regio":1},{"name":"Bradthorpe","x":1140,"y":2640,"attach":[1140.0,2640.0],"regio":1},{"name":"Brunswick","x":1830,"y":2400,"attach":[1830,2400]},{"name":"Springford","x":1793,"y":2333,"attach":[1793.41,2333.41]},{"name":"Ashton","x":1737,"y":2277,"attach":[1736.7,2276.7]},{"name":"Mareston","x":1810,"y":2450,"attach":[1810.1,2449.9]},{"name":"Maidstone","x":1770,"y":2490,"attach":[1770.08,2489.92]},{"name":"Bayarfort","x":1730,"y":2530,"attach":[1730.07,2529.93]},{"name":"Sulgen","x":1690,"y":2570,"attach":[1690.06,2569.94]},{"name":"Kingsbury","x":1650,"y":2610,"attach":[1650.04,2609.96]},{"name":"Valcourt","x":1610,"y":2650,"attach":[1610.03,2649.97]},{"name":"Cartier","x":1570,"y":2690,"attach":[1570.01,2689.99]},{"name":"Merlaut","x":1470,"y":2400,"attach":[1470.0,2400.0]},{"name":"Netherwood","x":1650,"y":2400,"attach":[1650.0,2400.0]},{"name":"Kirkgate","x":1650,"y":3780,"attach":[1650.0,3780.0],"regio":1},{"name":"Dunwick","x":1675,"y":3725,"attach":[1675.44,3724.56],"regio":1},{"name":"Yarham","x":1671,"y":3729,"attach":[1670.89,3729.11],"regio":1},{"name":"Bradley","x":1666,"y":3734,"attach":[1666.33,3733.67],"regio":1},{"name":"Southstead","x":1662,"y":3738,"attach":[1661.78,3738.22],"regio":1},{"name":"Wesstow","x":1658,"y":3743,"attach":[1657.54,3743.07],"regio":1},{"name":"Elmham","x":1674,"y":3726,"attach":[1674.04,3725.96],"regio":1},{"name":"Cherrybridge","x":1668,"y":3732,"attach":[1668.07,3731.93],"regio":1},{"name":"Rookfield","x":1662,"y":3738,"attach":[1662.39,3738.14],"regio":1},{"name":"Highsted","x":1657,"y":3745,"attach":[1657.36,3744.87],"regio":1},{"name":"Stowham","x":1654,"y":3752,"attach":[1653.51,3752.36],"regio":1},{"name":"Fairham","x":1651,"y":3760,"attach":[1651.1,3760.44],"regio":1},{"name":"Eastmore","x":1650,"y":3769,"attach":[1650.22,3768.81],"regio":1},{"name":"Sandmere","x":1650,"y":3777,"attach":[1650.0,3777.24],"regio":1},{"name":"Leacombe","x":1650,"y":3786,"attach":[1650.0,3785.67],"regio":1},{"name":"Northmore","x":1650,"y":3794,"attach":[1650.0,3794.1],"regio":1},{"name":"Swancombe","x":1650,"y":3803,"attach":[1650.0,3802.54],"regio":1},{"name":"Foxden","x":1650,"y":3811,"attach":[1650.0,3810.97],"regio":1},{"name":"Millcombe Junction","x":1650,"y":3819,"attach":[1650.0,3819.4],"regio":1},{"name":"Ravenstone","x":1110,"y":2520,"attach":[1110.0,2520.0]},{"name":"Batavie","x":1440,"y":2010,"attach":[1440.0,2010.0]},{"name":"Aéroport Parnay","x":1541,"y":2010,"attach":[1541.27,2009.7]},{"name":"Pinehurst","x":1800,"y":1950,"attach":[1800.0,1950.0]},{"name":"Bellerive","x":1590,"y":2100,"attach":[1590.0,2100.0]},{"name":"Melmere","x":1620,"y":3360,"attach":[1620,3360],"regio":1},{"name":"Whitden","x":1590,"y":3300,"attach":[1590.0,3300.0],"regio":1},{"name":"Penthwaite","x":1630,"y":3360,"attach":[1630.12,3360.0],"regio":1},{"name":"Marbridge","x":1620,"y":3352,"attach":[1620.0,3351.67],"regio":1},{"name":"Melbrook","x":1620,"y":3343,"attach":[1620.0,3343.33],"regio":1},{"name":"Coldwood","x":1620,"y":3335,"attach":[1620.0,3335.0],"regio":1},{"name":"Fenhurst","x":1620,"y":3327,"attach":[1620.0,3326.67],"regio":1},{"name":"Brentcote","x":1620,"y":3318,"attach":[1620.0,3318.33],"regio":1},{"name":"Reddale","x":1620,"y":3310,"attach":[1620.0,3310.0],"regio":1},{"name":"Hawgate","x":1620,"y":3302,"attach":[1620.0,3301.67],"regio":1},{"name":"Hawwick","x":1620,"y":3293,"attach":[1620.0,3293.33],"regio":1},{"name":"Netherbrook","x":1620,"y":3285,"attach":[1620.0,3285.0],"regio":1},{"name":"Cherrygate","x":1620,"y":3277,"attach":[1620.0,3276.67],"regio":1},{"name":"Hawden","x":1620,"y":3268,"attach":[1620.0,3268.33],"regio":1},{"name":"Cherryden","x":1620,"y":3260,"attach":[1620.0,3260.0],"regio":1},{"name":"Lockton","x":1110,"y":2190,"attach":[1110,2190]},{"name":"Norbourne","x":1110,"y":2355,"attach":[1110.0,2355.0]},{"name":"Belwich East","x":1008,"y":2190,"attach":[1008.33,2190.0]},{"name":"Amptonside Canal","x":912,"y":2172,"attach":[911.89,2171.89]},{"name":"Flancourt-Est","x":1470,"y":2190,"attach":[1470.0,2190.0]},{"name":"Grafton Central","x":1290,"y":2190,"attach":[1290.0,2190.0]},{"name":"Southend","x":1680,"y":4110,"attach":[1680.0,4110.0]},{"name":"Becksted","x":1661,"y":3941,"attach":[1661.21,3941.21],"regio":1},{"name":"Wescombe","x":1672,"y":3953,"attach":[1671.67,3953.09],"regio":1},{"name":"Fernsted","x":1678,"y":3968,"attach":[1678.03,3967.52],"regio":1},{"name":"Malton","x":1680,"y":3983,"attach":[1680.0,3983.18],"regio":1},{"name":"Crowmore","x":1680,"y":3999,"attach":[1680.0,3999.04],"regio":1},{"name":"Willowstow","x":1680,"y":4015,"attach":[1680.0,4014.89],"regio":1},{"name":"Willowstead","x":1655,"y":3935,"attach":[1654.83,3934.83],"regio":1},{"name":"Birchmere","x":1660,"y":3940,"attach":[1659.66,3939.66],"regio":1},{"name":"Millthorpe","x":1664,"y":3944,"attach":[1664.48,3944.48],"regio":1},{"name":"Newhurst","x":1669,"y":3949,"attach":[1669.31,3949.31],"regio":1},{"name":"Upper Brentbridge","x":1674,"y":3954,"attach":[1674.14,3954.14],"regio":1},{"name":"Walby","x":1679,"y":3959,"attach":[1678.97,3958.97],"regio":1},{"name":"Holmcote","x":1684,"y":3964,"attach":[1683.65,3963.93],"regio":1},{"name":"Newgate","x":1688,"y":3969,"attach":[1687.94,3969.23],"regio":1},{"name":"Chalworth","x":1691,"y":3975,"attach":[1691.25,3975.16],"regio":1},{"name":"Hazelstead","x":1694,"y":3981,"attach":[1693.76,3981.47],"regio":1},{"name":"Highmere","x":1695,"y":3988,"attach":[1695.12,3988.16],"regio":1},{"name":"Kirkley","x":1695,"y":3995,"attach":[1695.18,3994.96],"regio":1},{"name":"Melhurst","x":1695,"y":4002,"attach":[1694.76,4001.76],"regio":1},{"name":"Thurlmore","x":1694,"y":4009,"attach":[1693.84,4008.53],"regio":1},{"name":"Waterminster","x":1693,"y":4015,"attach":[1692.91,4015.29],"regio":1},{"name":"Todton","x":1692,"y":4022,"attach":[1691.99,4022.06],"regio":1},{"name":"Elmford","x":1691,"y":4029,"attach":[1691.07,4028.82],"regio":1},{"name":"Elmstead","x":1690,"y":4036,"attach":[1690.15,4035.59],"regio":1},{"name":"Fernham","x":1689,"y":4042,"attach":[1689.22,4042.35],"regio":1},{"name":"Saxebrook","x":1688,"y":4049,"attach":[1688.3,4049.12],"regio":1},{"name":"Wickstow","x":1687,"y":4056,"attach":[1687.38,4055.88],"regio":1},{"name":"Thurlbridge","x":1686,"y":4063,"attach":[1686.46,4062.65],"regio":1},{"name":"Clayworth","x":1686,"y":4069,"attach":[1685.53,4069.41],"regio":1},{"name":"Willowgate","x":1650,"y":3939,"attach":[1650.0,3939.38],"regio":1},{"name":"Larkstead","x":1650,"y":3949,"attach":[1650.0,3948.75],"regio":1},{"name":"Oakley","x":1650,"y":3958,"attach":[1650.0,3958.12],"regio":1},{"name":"Wakewick","x":1650,"y":3968,"attach":[1650.0,3967.5],"regio":1},{"name":"Barkminster","x":1650,"y":3977,"attach":[1650.0,3976.88],"regio":1},{"name":"Leasted","x":1650,"y":3986,"attach":[1650.0,3986.25],"regio":1},{"name":"Thurlthwaite","x":1650,"y":3996,"attach":[1650.0,3995.62],"regio":1},{"name":"Bradcombe","x":1650,"y":4005,"attach":[1650.0,4005.0],"regio":1},{"name":"Rookstow","x":1650,"y":4014,"attach":[1650.0,4014.38],"regio":1},{"name":"Coldmere","x":1650,"y":4024,"attach":[1650.0,4023.75],"regio":1},{"name":"Yuchow Central","x":1050,"y":1620,"attach":[1050.0,1620.0]},{"name":"Shihmen","x":1110,"y":1740,"attach":[1110.0,1740.0]},{"name":"Peiting New Town","x":1170,"y":1740,"attach":[1170.0,1740.0]},{"name":"Vindelle-Central","x":1530,"y":2820,"attach":[1530.0,2820.0]},{"name":"Saxeford","x":1200,"y":2850,"attach":[1200.0,2850.0],"regio":1},{"name":"Todham","x":1223,"y":2903,"attach":[1222.84,2902.84],"regio":1},{"name":"Wakestead","x":1230,"y":2917,"attach":[1230.0,2916.99],"regio":1},{"name":"Larkdale","x":1230,"y":2924,"attach":[1230.0,2923.97],"regio":1},{"name":"Marbury","x":1230,"y":2931,"attach":[1230.0,2930.96],"regio":1},{"name":"Cotgate","x":1230,"y":2938,"attach":[1230.0,2937.94],"regio":1},{"name":"Woodton","x":1230,"y":2945,"attach":[1230.0,2944.93],"regio":1},{"name":"Whitmere","x":1230,"y":2952,"attach":[1230.0,2951.91],"regio":1},{"name":"Beauvoir Docklands","x":1230,"y":2994,"attach":[1230.0,2993.82]},{"name":"Walwood","x":1230,"y":3001,"attach":[1230.0,3000.81],"regio":1},{"name":"Walcombe","x":1230,"y":3008,"attach":[1230.0,3007.79],"regio":1},{"name":"Lynthorpe","x":1231,"y":3015,"attach":[1230.62,3014.75],"regio":1},{"name":"Southley","x":1232,"y":3022,"attach":[1231.86,3021.59],"regio":1},{"name":"Winstow","x":1234,"y":3028,"attach":[1233.86,3028.28],"regio":1},{"name":"Netherby","x":1237,"y":3034,"attach":[1237.16,3034.44],"regio":1},{"name":"Millbridge","x":1241,"y":3040,"attach":[1241.08,3040.18],"regio":1},{"name":"Hartgate","x":1246,"y":3046,"attach":[1245.55,3045.55],"regio":1},{"name":"Quarrcombe","x":1250,"y":3050,"attach":[1250.49,3050.49],"regio":1},{"name":"Ulverley","x":1255,"y":3055,"attach":[1255.43,3055.43],"regio":1},{"name":"Oakbrook","x":1260,"y":3060,"attach":[1260.36,3060.36],"regio":1},{"name":"Heathworth","x":1225,"y":2905,"attach":[1224.6,2904.6],"regio":1},{"name":"Chalthorpe","x":1219,"y":2899,"attach":[1219.21,2899.21],"regio":1},{"name":"Langby","x":1214,"y":2894,"attach":[1213.93,2893.71],"regio":1},{"name":"Watersted","x":1209,"y":2888,"attach":[1209.05,2887.85],"regio":1},{"name":"Larkgate","x":1205,"y":2881,"attach":[1205.26,2881.24],"regio":1},{"name":"Cherrydale","x":1202,"y":2874,"attach":[1202.48,2874.18],"regio":1},{"name":"Blackminster","x":1201,"y":2867,"attach":[1200.73,2866.78],"regio":1},{"name":"Goldcombe","x":1200,"y":2859,"attach":[1200.04,2859.19],"regio":1},{"name":"Ashdale","x":1200,"y":2852,"attach":[1200.0,2851.56],"regio":1},{"name":"Longworth","x":1200,"y":2844,"attach":[1200.0,2843.93],"regio":1},{"name":"Oakton","x":1200,"y":2836,"attach":[1200.0,2836.3],"regio":1},{"name":"Woldminster","x":1200,"y":2829,"attach":[1200.0,2828.67],"regio":1},{"name":"Warstead","x":1200,"y":2821,"attach":[1200.0,2821.04],"regio":1},{"name":"Goldby","x":1200,"y":2813,"attach":[1200.0,2813.41],"regio":1},{"name":"Saxegate","x":1200,"y":2806,"attach":[1200.0,2805.78],"regio":1},{"name":"Ryestow","x":1358,"y":3480,"attach":[1357.87,3480.0],"regio":1},{"name":"Brooksted","x":1366,"y":3480,"attach":[1365.75,3479.93],"regio":1},{"name":"Langstead","x":1374,"y":3479,"attach":[1373.54,3478.95],"regio":1},{"name":"Southwood","x":1359,"y":3471,"attach":[1358.66,3471.34],"regio":1},{"name":"Quarrwick","x":1367,"y":3463,"attach":[1367.31,3462.69],"regio":1},{"name":"Bramworth","x":1376,"y":3454,"attach":[1375.97,3454.03],"regio":1},{"name":"Shepcote","x":1385,"y":3445,"attach":[1384.62,3445.38],"regio":1},{"name":"Brambridge","x":1393,"y":3437,"attach":[1393.28,3436.72],"regio":1},{"name":"Moorby","x":1401,"y":3427,"attach":[1401.22,3427.41],"regio":1},{"name":"Langgate","x":1407,"y":3416,"attach":[1406.67,3416.5],"regio":1},{"name":"Walthorpe","x":1409,"y":3405,"attach":[1409.39,3404.62],"regio":1},{"name":"Dunthwaite","x":1410,"y":3392,"attach":[1410.0,3392.41],"regio":1},{"name":"Swanfield","x":1410,"y":3380,"attach":[1410.0,3380.16],"regio":1},{"name":"Walwell","x":1410,"y":3368,"attach":[1410.0,3367.92],"regio":1},{"name":"Whitworth","x":1410,"y":3356,"attach":[1410.0,3355.68],"regio":1},{"name":"Beckden","x":1410,"y":3343,"attach":[1410.0,3343.44],"regio":1},{"name":"Heathwell","x":1414,"y":3454,"attach":[1413.58,3453.58],"regio":1},{"name":"Beckstow","x":1417,"y":3457,"attach":[1417.16,3457.16],"regio":1},{"name":"Thurlbrook","x":1421,"y":3461,"attach":[1420.74,3460.74],"regio":1},{"name":"Ryecombe","x":1424,"y":3464,"attach":[1424.32,3464.32],"regio":1},{"name":"Woldwood","x":1428,"y":3468,"attach":[1427.9,3467.9],"regio":1},{"name":"Hazelwood","x":1431,"y":3472,"attach":[1431.28,3471.66],"regio":1},{"name":"Heathgate","x":1434,"y":3476,"attach":[1434.39,3475.63],"regio":1},{"name":"Maldale","x":1437,"y":3480,"attach":[1436.8,3480.09],"regio":1},{"name":"Barkstow","x":1420,"y":3450,"attach":[1419.55,3450.0],"regio":1},{"name":"Willowsted","x":1429,"y":3450,"attach":[1429.09,3450.0],"regio":1},{"name":"Beckford","x":1439,"y":3450,"attach":[1438.64,3450.0],"regio":1},{"name":"Willowwood","x":1448,"y":3450,"attach":[1448.18,3450.0],"regio":1},{"name":"Fenley","x":1458,"y":3450,"attach":[1457.73,3450.0],"regio":1},{"name":"Shephurst","x":1467,"y":3450,"attach":[1467.27,3450.0],"regio":1},{"name":"Blackbridge","x":1477,"y":3450,"attach":[1476.82,3450.0],"regio":1},{"name":"Marcote","x":1486,"y":3450,"attach":[1486.36,3450.0],"regio":1},{"name":"Coldford","x":1496,"y":3450,"attach":[1495.91,3450.0],"regio":1},{"name":"Eaststead","x":1505,"y":3450,"attach":[1505.45,3450.0],"regio":1},{"name":"Fencote","x":1515,"y":3450,"attach":[1515.0,3450.0],"regio":1},{"name":"Swanden","x":1525,"y":3450,"attach":[1524.55,3450.0],"regio":1},{"name":"Walgate","x":1534,"y":3450,"attach":[1534.09,3450.0],"regio":1},{"name":"Chalsted","x":1544,"y":3450,"attach":[1543.64,3450.0],"regio":1},{"name":"Silfield","x":1553,"y":3450,"attach":[1553.18,3450.0],"regio":1},{"name":"Kirkthwaite","x":1563,"y":3450,"attach":[1562.73,3450.0],"regio":1},{"name":"Leastead","x":1410,"y":3442,"attach":[1410.0,3442.5],"regio":1},{"name":"Newby","x":1410,"y":3435,"attach":[1410.0,3435.0],"regio":1},{"name":"Clayby","x":1410,"y":3428,"attach":[1410.0,3427.5],"regio":1},{"name":"Kirkbridge","x":1410,"y":3420,"attach":[1410.0,3420.0],"regio":1},{"name":"Penthorpe","x":1410,"y":3412,"attach":[1410.0,3412.5],"regio":1},{"name":"Wooddale","x":1410,"y":3405,"attach":[1410.0,3405.0],"regio":1},{"name":"Oakstow","x":1410,"y":3398,"attach":[1410.0,3397.5],"regio":1},{"name":"Grimscombe","x":1410,"y":3390,"attach":[1410.0,3390.0],"regio":1},{"name":"Quarrmere","x":1410,"y":3382,"attach":[1410.0,3382.5],"regio":1},{"name":"Salmore","x":1410,"y":3375,"attach":[1410.0,3375.0],"regio":1},{"name":"Hartmere","x":1410,"y":3368,"attach":[1410.0,3367.5],"regio":1},{"name":"Beckwell","x":1410,"y":3360,"attach":[1410.0,3360.0],"regio":1},{"name":"Waterwell","x":1410,"y":3352,"attach":[1410.0,3352.5],"regio":1},{"name":"Shepminster","x":1410,"y":3345,"attach":[1410.0,3345.0],"regio":1},{"name":"Holmstead","x":1410,"y":3338,"attach":[1410.0,3337.5],"regio":1},{"name":"Northstow","x":1410,"y":3330,"attach":[1410.0,3330.0],"regio":1},{"name":"Lynmere","x":1410,"y":3322,"attach":[1410.0,3322.5],"regio":1},{"name":"Sandcombe","x":1410,"y":3315,"attach":[1410.0,3315.0],"regio":1},{"name":"Moorcombe","x":1410,"y":3810,"attach":[1410.0,3810.0],"regio":1},{"name":"Larkholme","x":1410,"y":3953,"attach":[1410.0,3953.18],"regio":1},{"name":"Warmore","x":1410,"y":3946,"attach":[1410.0,3946.36],"regio":1},{"name":"Rotherham","x":1410,"y":3905,"attach":[1410.0,3905.45]},{"name":"Brentwood","x":1410,"y":3899,"attach":[1410.0,3898.64],"regio":1},{"name":"Fenbury","x":1410,"y":3892,"attach":[1410.0,3891.82],"regio":1},{"name":"Todbrook","x":1410,"y":3885,"attach":[1410.0,3885.0],"regio":1},{"name":"Todsted","x":1410,"y":3878,"attach":[1410.0,3878.18],"regio":1},{"name":"Moorstow","x":1410,"y":3871,"attach":[1410.0,3871.36],"regio":1},{"name":"Cotfield","x":1410,"y":3865,"attach":[1410.0,3864.55],"regio":1},{"name":"Foxham","x":1410,"y":3858,"attach":[1410.0,3857.73],"regio":1},{"name":"Hartwell","x":1410,"y":3851,"attach":[1410.0,3850.91],"regio":1},{"name":"Moorworth","x":1413,"y":3951,"attach":[1412.72,3951.39],"regio":1},{"name":"Grimshurst","x":1415,"y":3943,"attach":[1415.44,3942.77],"regio":1},{"name":"Holmmore","x":1418,"y":3934,"attach":[1418.16,3934.16],"regio":1},{"name":"Northholme","x":1421,"y":3926,"attach":[1420.88,3925.54],"regio":1},{"name":"Wickcote","x":1423,"y":3917,"attach":[1423.17,3916.81],"regio":1},{"name":"Millworth","x":1425,"y":3908,"attach":[1424.68,3907.92],"regio":1},{"name":"Foxhurst","x":1425,"y":3899,"attach":[1425.28,3898.92],"regio":1},{"name":"Wakeley","x":1425,"y":3890,"attach":[1424.94,3889.91],"regio":1},{"name":"Saxeworth","x":1424,"y":3881,"attach":[1423.73,3880.95],"regio":1},{"name":"Crowton","x":1422,"y":3872,"attach":[1422.02,3872.08],"regio":1},{"name":"Salbridge","x":1420,"y":3863,"attach":[1420.3,3863.22],"regio":1},{"name":"Outrepont","x":1440,"y":2610,"attach":[1440.0,2610.0]},{"name":"Hunstow","x":1448,"y":4080,"attach":[1447.5,4080.0],"regio":1},{"name":"Saldale","x":1455,"y":4080,"attach":[1455.0,4080.0],"regio":1},{"name":"Goldgate","x":1462,"y":4080,"attach":[1462.5,4080.0],"regio":1},{"name":"Marminster","x":1470,"y":4080,"attach":[1470.0,4080.0],"regio":1},{"name":"Ryeworth","x":1478,"y":4080,"attach":[1477.5,4080.0],"regio":1},{"name":"Olddale","x":1485,"y":4080,"attach":[1485.0,4080.0],"regio":1},{"name":"Foxby","x":1492,"y":4080,"attach":[1492.5,4080.0],"regio":1},{"name":"Yarstead","x":1500,"y":4080,"attach":[1500.0,4080.0],"regio":1},{"name":"Wykegate","x":1508,"y":4080,"attach":[1507.5,4080.0],"regio":1},{"name":"Quarrmore","x":1515,"y":4080,"attach":[1515.0,4080.0],"regio":1},{"name":"Upper Thurlbury","x":1522,"y":4080,"attach":[1522.5,4080.0],"regio":1},{"name":"Millham","x":1530,"y":4080,"attach":[1530.0,4080.0],"regio":1},{"name":"Winholme","x":1538,"y":4080,"attach":[1537.5,4080.0],"regio":1},{"name":"Hazelton","x":1545,"y":4080,"attach":[1545.0,4080.0],"regio":1},{"name":"Eastham","x":1552,"y":4080,"attach":[1552.5,4080.0],"regio":1},{"name":"Oldmere","x":1560,"y":4080,"attach":[1560.0,4080.0],"regio":1},{"name":"Kirkminster","x":1568,"y":4080,"attach":[1567.5,4080.0],"regio":1},{"name":"Wickwick","x":1575,"y":4080,"attach":[1575.0,4080.0],"regio":1},{"name":"Fernbridge","x":1582,"y":4080,"attach":[1582.5,4080.0],"regio":1},{"name":"Willowley","x":1590,"y":4080,"attach":[1590.0,4080.0],"regio":1},{"name":"Wykeby","x":1598,"y":4080,"attach":[1597.5,4080.0],"regio":1},{"name":"Hazelgate","x":1605,"y":4080,"attach":[1605.0,4080.0],"regio":1},{"name":"Ormford","x":1451,"y":4082,"attach":[1450.52,4081.54],"regio":1},{"name":"Winbridge","x":1461,"y":4083,"attach":[1461.05,4083.08],"regio":1},{"name":"Marby","x":1472,"y":4085,"attach":[1471.57,4084.62],"regio":1},{"name":"Penton","x":1482,"y":4086,"attach":[1482.09,4086.16],"regio":1},{"name":"Sutthwaite","x":1493,"y":4088,"attach":[1492.61,4087.7],"regio":1},{"name":"Malley","x":1503,"y":4089,"attach":[1503.14,4089.24],"regio":1},{"name":"Burnham","x":1514,"y":4091,"attach":[1513.66,4090.78],"regio":1},{"name":"Fenfield","x":1524,"y":4092,"attach":[1524.18,4092.32],"regio":1},{"name":"Waterthwaite","x":1535,"y":4094,"attach":[1534.7,4093.86],"regio":1},{"name":"Northwood","x":1545,"y":4095,"attach":[1545.25,4095.23],"regio":1},{"name":"Moorhurst","x":1556,"y":4096,"attach":[1555.85,4095.98],"regio":1},{"name":"Oldden","x":1566,"y":4096,"attach":[1566.47,4095.83],"regio":1},{"name":"Waldale","x":1577,"y":4095,"attach":[1577.04,4094.76],"regio":1},{"name":"Saxewood","x":1588,"y":4093,"attach":[1587.52,4092.93],"regio":1},{"name":"Königstadt","x":780,"y":2343,"attach":[780.0,2343.18]},{"name":"Findel","x":780,"y":2447,"attach":[780.0,2446.59]},{"name":"Hiltsbury","x":823,"y":2175,"attach":[823.3,2174.65]},{"name":"Hawdale","x":1440,"y":3742,"attach":[1440.0,3742.11],"regio":1},{"name":"Woldden","x":1440,"y":3734,"attach":[1440.0,3734.21],"regio":1},{"name":"Foxminster","x":1440,"y":3726,"attach":[1440.0,3726.32],"regio":1},{"name":"Ulverwell","x":1440,"y":3718,"attach":[1440.0,3718.42],"regio":1},{"name":"Brookbrook","x":1440,"y":3711,"attach":[1440.0,3710.53],"regio":1},{"name":"Little Crowcote","x":1440,"y":3703,"attach":[1440.0,3702.63],"regio":1},{"name":"Stanton","x":1440,"y":3695,"attach":[1440.0,3694.74],"regio":1},{"name":"Woldham","x":1440,"y":3687,"attach":[1440.0,3686.84],"regio":1},{"name":"Stowford","x":1440,"y":3679,"attach":[1440.0,3678.95],"regio":1},{"name":"Bradminster","x":1440,"y":3671,"attach":[1440.0,3671.05],"regio":1},{"name":"Stowminster","x":1440,"y":3663,"attach":[1440.0,3663.16],"regio":1},{"name":"Wakebury Junction","x":1440,"y":3655,"attach":[1440.0,3655.26],"regio":1},{"name":"Saxebridge","x":1440,"y":3647,"attach":[1440.0,3647.37],"regio":1},{"name":"Shepford","x":1440,"y":3758,"attach":[1440.0,3757.87],"regio":1},{"name":"Beckfield","x":1440,"y":3766,"attach":[1439.93,3765.75],"regio":1},{"name":"Heathfield","x":1439,"y":3774,"attach":[1438.95,3773.54],"regio":1},{"name":"Johnston","x":890,"y":2710,"attach":[890.26,2709.73]},{"name":"Kelvinport","x":941,"y":2714,"attach":[940.91,2714.32]},{"name":"Brackenholt","x":893,"y":2717,"attach":[892.54,2717.04],"regio":1},{"name":"Linton","x":946,"y":2731,"attach":[945.63,2730.87],"regio":1},{"name":"Ribeauvillé","x":1230,"y":2640,"attach":[1230.0,2640.0]},{"name":"Netherley","x":1212,"y":2748,"attach":[1211.51,2748.49],"regio":1},{"name":"Warcote","x":1222,"y":2736,"attach":[1222.08,2736.16],"regio":1},{"name":"Yarwood","x":1200,"y":2770,"attach":[1200.0,2770.0],"regio":1},{"name":"Hazelminster","x":1200,"y":2780,"attach":[1200.0,2780.0],"regio":1},{"name":"Nethergate","x":1200,"y":2790,"attach":[1200.0,2790.0],"regio":1},{"name":"Westerhafen","x":690,"y":2550,"attach":[690.0,2550.0],"regio":1},{"name":"Beckminster","x":1620,"y":3202,"attach":[1620.0,3201.67],"regio":1},{"name":"Northhurst","x":1620,"y":3193,"attach":[1620.0,3193.33],"regio":1},{"name":"Lynbridge","x":1620,"y":3185,"attach":[1620.0,3185.0],"regio":1},{"name":"Penhurst","x":1620,"y":3177,"attach":[1620.0,3176.67],"regio":1},{"name":"Elmworth","x":1620,"y":3168,"attach":[1620.0,3168.33],"regio":1},{"name":"Saxefield","x":1620,"y":3160,"attach":[1620.0,3160.0],"regio":1},{"name":"Norththwaite","x":1620,"y":3152,"attach":[1620.0,3151.67],"regio":1},{"name":"Kirkmore","x":1620,"y":3143,"attach":[1620.0,3143.33],"regio":1},{"name":"Salwood","x":1620,"y":3135,"attach":[1620.0,3135.0],"regio":1},{"name":"Highthorpe","x":1620,"y":3127,"attach":[1620.0,3126.67],"regio":1},{"name":"Wicksted","x":1620,"y":3118,"attach":[1620.0,3118.33],"regio":1},{"name":"Sandhurst","x":1620,"y":3110,"attach":[1620.0,3110.0],"regio":1},{"name":"Waterworth","x":1620,"y":3220,"attach":[1620.0,3220.12],"regio":1},{"name":"Melford","x":1622,"y":3203,"attach":[1622.31,3202.68],"regio":1},{"name":"Silbridge","x":1625,"y":3195,"attach":[1624.62,3195.36],"regio":1},{"name":"Wakemere","x":1627,"y":3188,"attach":[1626.94,3188.03],"regio":1},{"name":"Chalcombe","x":1629,"y":3181,"attach":[1629.25,3180.71],"regio":1},{"name":"Langden","x":1632,"y":3173,"attach":[1631.53,3173.38],"regio":1},{"name":"Ormby","x":1633,"y":3166,"attach":[1633.39,3165.93],"regio":1},{"name":"Ashthwaite","x":1635,"y":3158,"attach":[1634.63,3158.36],"regio":1},{"name":"Sutdale","x":1635,"y":3151,"attach":[1635.29,3150.73],"regio":1},{"name":"Barkbridge","x":1635,"y":3143,"attach":[1635.24,3143.05],"regio":1},{"name":"Hartminster","x":1634,"y":3135,"attach":[1634.35,3135.43],"regio":1},{"name":"Willowhurst","x":1633,"y":3128,"attach":[1633.13,3127.85],"regio":1},{"name":"Stockminster","x":1632,"y":3120,"attach":[1631.67,3120.31],"regio":1},{"name":"Rookdale","x":1630,"y":3113,"attach":[1630.21,3112.77],"regio":1},{"name":"Crowsted","x":1629,"y":3105,"attach":[1628.75,3105.23],"regio":1},{"name":"Longstow","x":1590,"y":3150,"attach":[1590.0,3150.0],"regio":1},{"name":"Fernden","x":1433,"y":3607,"attach":[1433.23,3606.77],"regio":1},{"name":"Burncote","x":1426,"y":3614,"attach":[1426.46,3613.54],"regio":1},{"name":"Holmton","x":1420,"y":3621,"attach":[1420.2,3620.77],"regio":1},{"name":"Hawbury","x":1415,"y":3629,"attach":[1415.19,3628.89],"regio":1},{"name":"Sandgate","x":1412,"y":3638,"attach":[1411.88,3637.83],"regio":1},{"name":"Hartfield","x":1410,"y":3647,"attach":[1410.36,3647.24],"regio":1},{"name":"Crowthwaite","x":1410,"y":3657,"attach":[1410.0,3656.8],"regio":1},{"name":"Brentdale","x":1410,"y":3666,"attach":[1410.0,3666.37],"regio":1},{"name":"Shepthorpe","x":1410,"y":3676,"attach":[1410.0,3675.95],"regio":1},{"name":"Hazelwick","x":1410,"y":3686,"attach":[1410.0,3685.52],"regio":1},{"name":"Coldsted","x":1410,"y":3695,"attach":[1410.0,3695.1],"regio":1},{"name":"Toddale","x":1410,"y":3705,"attach":[1410.0,3704.67],"regio":1},{"name":"Newstow","x":1410,"y":3714,"attach":[1410.0,3714.25],"regio":1},{"name":"Heathby","x":1410,"y":3724,"attach":[1410.0,3723.82],"regio":1},{"name":"Longstead","x":1410,"y":3733,"attach":[1410.0,3733.4],"regio":1},{"name":"Stockstead","x":1410,"y":3743,"attach":[1410.0,3742.97],"regio":1},{"name":"Southminster","x":1410,"y":3753,"attach":[1410.0,3752.55],"regio":1},{"name":"Whitwick","x":1297,"y":3097,"attach":[1297.19,3097.19],"regio":1},{"name":"Brookford","x":1304,"y":3104,"attach":[1304.38,3104.38],"regio":1},{"name":"Salden","x":1312,"y":3112,"attach":[1311.57,3111.57],"regio":1},{"name":"Todley","x":1319,"y":3119,"attach":[1318.76,3118.76],"regio":1},{"name":"Rookbridge","x":1326,"y":3126,"attach":[1325.96,3125.96],"regio":1},{"name":"Stockcote","x":1333,"y":3133,"attach":[1333.15,3133.15],"regio":1},{"name":"Rookcombe","x":1340,"y":3140,"attach":[1340.34,3140.34],"regio":1},{"name":"Whitmore","x":1348,"y":3148,"attach":[1347.53,3147.53],"regio":1},{"name":"Elmden","x":1355,"y":3155,"attach":[1354.72,3154.72],"regio":1},{"name":"Birchworth","x":1362,"y":3162,"attach":[1361.91,3161.91],"regio":1},{"name":"Nethercote","x":1369,"y":3169,"attach":[1369.1,3169.1],"regio":1},{"name":"Salmere","x":1376,"y":3176,"attach":[1376.29,3176.29],"regio":1},{"name":"Crowhurst","x":1383,"y":3183,"attach":[1383.48,3183.48],"regio":1},{"name":"Eastton","x":1391,"y":3191,"attach":[1390.67,3190.67],"regio":1},{"name":"Marham","x":1398,"y":3198,"attach":[1397.87,3197.87],"regio":1},{"name":"Yarminster","x":1405,"y":3205,"attach":[1405.06,3205.06],"regio":1},{"name":"Walmore","x":1412,"y":3212,"attach":[1412.25,3212.25],"regio":1},{"name":"Stanham","x":1419,"y":3219,"attach":[1419.44,3219.44],"regio":1},{"name":"Larkmore","x":1427,"y":3227,"attach":[1426.63,3226.63],"regio":1},{"name":"Cotsted","x":1434,"y":3234,"attach":[1433.82,3233.82],"regio":1},{"name":"Winbrook","x":1441,"y":3241,"attach":[1441.01,3241.01],"regio":1},{"name":"Hazelley","x":1448,"y":3248,"attach":[1448.2,3248.2],"regio":1},{"name":"Penfield","x":1455,"y":3255,"attach":[1455.39,3255.39],"regio":1},{"name":"Salminster","x":1463,"y":3263,"attach":[1462.58,3262.58],"regio":1},{"name":"Marford","x":1470,"y":3270,"attach":[1469.78,3269.78],"regio":1},{"name":"Highbridge","x":1477,"y":3277,"attach":[1476.97,3276.97],"regio":1},{"name":"Redwick","x":1295,"y":3095,"attach":[1295.36,3095.36],"regio":1},{"name":"Bradstow","x":1301,"y":3101,"attach":[1300.72,3100.72],"regio":1},{"name":"Holmwood","x":1306,"y":3106,"attach":[1306.08,3106.08],"regio":1},{"name":"Newwood","x":1311,"y":3111,"attach":[1311.44,3111.44],"regio":1},{"name":"Swanhurst","x":1317,"y":3117,"attach":[1316.8,3116.8],"regio":1},{"name":"Fairwood","x":1322,"y":3122,"attach":[1322.16,3122.16],"regio":1},{"name":"Ulversted","x":1328,"y":3128,"attach":[1327.52,3127.52],"regio":1},{"name":"Sutcote","x":1333,"y":3133,"attach":[1332.88,3132.88],"regio":1},{"name":"Melbury","x":1338,"y":3138,"attach":[1338.24,3138.24],"regio":1},{"name":"Marton","x":1344,"y":3144,"attach":[1343.6,3143.6],"regio":1},{"name":"Rookton","x":1349,"y":3149,"attach":[1348.96,3148.96],"regio":1},{"name":"Thornford","x":1354,"y":3154,"attach":[1354.33,3154.33],"regio":1},{"name":"Cherrywick","x":1360,"y":3160,"attach":[1359.69,3159.69],"regio":1},{"name":"Fairthorpe","x":1365,"y":3165,"attach":[1365.05,3165.05],"regio":1},{"name":"Ulverstead","x":1370,"y":3170,"attach":[1370.41,3170.41],"regio":1},{"name":"Quarrwell","x":1376,"y":3176,"attach":[1375.77,3175.77],"regio":1},{"name":"Silsted","x":1381,"y":3181,"attach":[1381.13,3181.13],"regio":1},{"name":"Westhorpe","x":1386,"y":3186,"attach":[1386.49,3186.49],"regio":1},{"name":"Millford","x":1392,"y":3192,"attach":[1391.85,3191.85],"regio":1},{"name":"Redfield","x":1397,"y":3197,"attach":[1396.94,3197.45],"regio":1},{"name":"Malholme","x":1402,"y":3203,"attach":[1401.65,3203.37],"regio":1},{"name":"Dunbury","x":1405,"y":3210,"attach":[1405.26,3210.04],"regio":1},{"name":"Brentford","x":1408,"y":3217,"attach":[1407.76,3217.16],"regio":1},{"name":"Wakeford","x":1409,"y":3225,"attach":[1409.32,3224.55],"regio":1},{"name":"Melworth","x":1650,"y":3861,"attach":[1650.0,3861.0],"regio":1},{"name":"Salstow","x":1650,"y":3852,"attach":[1650.0,3852.0],"regio":1},{"name":"Elmthwaite","x":1650,"y":3843,"attach":[1650.0,3843.0],"regio":1},{"name":"Yarfield","x":1650,"y":3834,"attach":[1650.0,3834.0],"regio":1},{"name":"Larkby","x":1656,"y":3861,"attach":[1655.91,3861.13],"regio":1},{"name":"Burngate","x":1661,"y":3852,"attach":[1661.39,3852.0],"regio":1},{"name":"Wykecote","x":1665,"y":3842,"attach":[1664.66,3841.93],"regio":1},{"name":"Port-du-Roi","x":1560,"y":2910,"attach":[1560,2910]},{"name":"Elmgate","x":1551,"y":2901,"attach":[1551.14,2901.14],"regio":1},{"name":"Ulverbridge","x":1543,"y":2892,"attach":[1542.54,2892.05],"regio":1},{"name":"Fairmore","x":1560,"y":3000,"attach":[1560.0,3000.0],"regio":1},{"name":"Crowminster","x":1560,"y":2921,"attach":[1560.0,2921.25],"regio":1},{"name":"Shepwood","x":1560,"y":2932,"attach":[1560.0,2932.5],"regio":1},{"name":"Bradbridge","x":1547,"y":2910,"attach":[1547.14,2910.0],"regio":1},{"name":"Sandthwaite","x":1560,"y":2760,"attach":[1560.0,2760.0],"regio":1},{"name":"Coldbury Junction","x":1560,"y":2898,"attach":[1560.0,2898.46],"regio":1},{"name":"Brentgate","x":1560,"y":2887,"attach":[1560.0,2886.92],"regio":1},{"name":"Grimsby","x":1560,"y":2875,"attach":[1560.0,2875.38],"regio":1},{"name":"Dunley","x":1560,"y":2864,"attach":[1560.0,2863.85],"regio":1},{"name":"Millbrook","x":1560,"y":2852,"attach":[1560.0,2852.31],"regio":1},{"name":"Wessted","x":1560,"y":2841,"attach":[1560.0,2840.77],"regio":1},{"name":"Hartden","x":1560,"y":2829,"attach":[1560.0,2829.23],"regio":1},{"name":"Rossdale South","x":1885,"y":1855,"attach":[1884.59,1854.59]},{"name":"Chankow","x":1320,"y":1560,"attach":[1320,1560]},{"name":"Nouvelle-Touraine","x":1880,"y":1950,"attach":[1880.11,1950.0]},{"name":"Canterbury","x":1949,"y":1970,"attach":[1948.76,1970.03]},{"name":"Sandwick","x":1567,"y":3007,"attach":[1566.67,3006.67],"regio":1},{"name":"Ormgate","x":1573,"y":3013,"attach":[1573.33,3013.33],"regio":1},{"name":"Wolddale","x":1580,"y":3020,"attach":[1580.0,3020.0],"regio":1},{"name":"Highstow","x":1555,"y":2995,"attach":[1555.26,2995.26],"regio":1},{"name":"Sandbury","x":1551,"y":2991,"attach":[1550.53,2990.53],"regio":1},{"name":"Hartthwaite","x":1546,"y":2986,"attach":[1545.79,2985.79],"regio":1},{"name":"Elmton","x":1541,"y":2981,"attach":[1541.05,2981.05],"regio":1},{"name":"Rookford","x":1536,"y":2976,"attach":[1536.32,2976.32],"regio":1},{"name":"Larksted","x":1532,"y":2972,"attach":[1531.58,2971.58],"regio":1},{"name":"Langthwaite","x":1527,"y":2967,"attach":[1526.84,2966.84],"regio":1},{"name":"Rookmore","x":1522,"y":2962,"attach":[1522.11,2962.11],"regio":1},{"name":"Highbury","x":1517,"y":2957,"attach":[1517.37,2957.37],"regio":1},{"name":"Thornwick","x":1513,"y":2953,"attach":[1512.63,2952.63],"regio":1},{"name":"Fengate","x":1508,"y":2948,"attach":[1507.89,2947.89],"regio":1},{"name":"Stowby","x":1503,"y":2943,"attach":[1503.16,2943.16],"regio":1},{"name":"Eastmere","x":1498,"y":2938,"attach":[1498.42,2938.42],"regio":1},{"name":"Yungang","x":1890,"y":1350,"attach":[1890.0,1350.0]},{"name":"Chiangkou","x":1770,"y":1350,"attach":[1770.0,1350.0]},{"name":"Tunghai","x":1830,"y":1350,"attach":[1830.0,1350.0]},{"name":"Cranford Central","x":1830,"y":2100,"attach":[1830.0,2100.0]},{"name":"Cranford West","x":1750,"y":2150,"attach":[1750.06,2149.94]},{"name":"Fairden","x":1317,"y":2010,"attach":[1316.59,2010.0]},{"name":"Sancerre","x":1193,"y":2010,"attach":[1193.18,2010.0]},{"name":"Hollingford","x":1800,"y":2030,"attach":[1800.0,2030.11]},{"name":"Wesstead","x":1560,"y":2748,"attach":[1560.0,2748.34],"regio":1},{"name":"Penwell Junction","x":1559,"y":2737,"attach":[1559.04,2736.76],"regio":1},{"name":"Claystow","x":1555,"y":2726,"attach":[1554.61,2726.04],"regio":1},{"name":"Kirkton Junction","x":1547,"y":2717,"attach":[1547.15,2717.15],"regio":1},{"name":"Saxeton","x":1539,"y":2709,"attach":[1538.9,2708.9],"regio":1},{"name":"Hervilly","x":1489,"y":2659,"attach":[1489.45,2659.45]},{"name":"Crowholme","x":1655,"y":3275,"attach":[1655.42,3275.42],"regio":1},{"name":"Cosgrove","x":1679,"y":3313,"attach":[1679.29,3313.43]},{"name":"Fernminster","x":1680,"y":3321,"attach":[1679.99,3321.06],"regio":1},{"name":"Holmwick","x":1680,"y":3329,"attach":[1680.0,3328.72],"regio":1},{"name":"Fernby","x":1680,"y":3336,"attach":[1680.0,3336.38],"regio":1},{"name":"Beckby","x":1680,"y":3344,"attach":[1680.0,3344.04],"regio":1},{"name":"Holmley","x":1200,"y":2840,"attach":[1200.0,2840.45],"regio":1},{"name":"Brambury","x":1200,"y":2831,"attach":[1200.0,2830.91],"regio":1},{"name":"Brentstow","x":1200,"y":2821,"attach":[1200.0,2821.36],"regio":1},{"name":"Malsted","x":1200,"y":2812,"attach":[1200.0,2811.82],"regio":1},{"name":"Woodby","x":1200,"y":2802,"attach":[1200.0,2802.27],"regio":1},{"name":"Rookwick","x":1200,"y":2793,"attach":[1200.0,2792.73],"regio":1},{"name":"Whitbrook","x":1200,"y":2783,"attach":[1200.0,2783.18],"regio":1},{"name":"Stanfield","x":1200,"y":2774,"attach":[1200.0,2773.64],"regio":1},{"name":"Moorton","x":1200,"y":2764,"attach":[1200.0,2764.09],"regio":1},{"name":"Ryebrook","x":1200,"y":2755,"attach":[1200.0,2754.55],"regio":1},{"name":"Standen","x":1200,"y":2745,"attach":[1200.0,2745.0],"regio":1},{"name":"Brentbrook","x":1200,"y":2735,"attach":[1200.0,2735.45],"regio":1},{"name":"Silhurst","x":1200,"y":2726,"attach":[1200.0,2725.91],"regio":1},{"name":"Coldton","x":1200,"y":2716,"attach":[1200.0,2716.36],"regio":1},{"name":"Fairley","x":1200,"y":2707,"attach":[1200.0,2706.82],"regio":1},{"name":"Kirkmere","x":1200,"y":2697,"attach":[1200.0,2697.27],"regio":1},{"name":"Tongshan","x":1485,"y":1620,"attach":[1485.0,1620.0]},{"name":"Yuchow Airport","x":975,"y":1620,"attach":[975.0,1620.0]},{"name":"Hawbridge","x":1704,"y":3444,"attach":[1703.74,3443.74],"regio":1},{"name":"Grimston","x":1697,"y":3437,"attach":[1697.47,3437.47],"regio":1},{"name":"Walsted","x":1628,"y":3442,"attach":[1627.5,3442.5],"regio":1},{"name":"Southford","x":1635,"y":3435,"attach":[1635.0,3435.0],"regio":1},{"name":"Moorminster","x":1620,"y":3441,"attach":[1620.0,3440.57],"regio":1},{"name":"Cotminster","x":1620,"y":3431,"attach":[1620.0,3431.15],"regio":1},{"name":"Hawworth","x":1620,"y":3422,"attach":[1620.0,3421.72],"regio":1},{"name":"Brenthurst","x":1620,"y":3412,"attach":[1620.0,3412.3],"regio":1},{"name":"Woldmore","x":1620,"y":3403,"attach":[1620.0,3402.87],"regio":1},{"name":"Claybury","x":1620,"y":3393,"attach":[1620.0,3393.45],"regio":1},{"name":"Saxeholme","x":1620,"y":3384,"attach":[1620.0,3384.02],"regio":1},{"name":"Moorbridge","x":1620,"y":3375,"attach":[1620.0,3374.6],"regio":1},{"name":"Willowcote","x":1620,"y":3365,"attach":[1620.0,3365.17],"regio":1},{"name":"Blackgate","x":1620,"y":3356,"attach":[1620.0,3355.75],"regio":1},{"name":"Stowton","x":1620,"y":3346,"attach":[1619.55,3346.35],"regio":1},{"name":"Stockwick","x":1677,"y":4107,"attach":[1677.0,4107.0],"regio":1},{"name":"Saxemore","x":1674,"y":4104,"attach":[1674.0,4104.0],"regio":1},{"name":"Wickholme","x":1671,"y":4101,"attach":[1671.0,4101.0],"regio":1},{"name":"Woodthorpe","x":1668,"y":4098,"attach":[1668.0,4098.0],"regio":1},{"name":"Yarbridge","x":1203,"y":2640,"attach":[1203.33,2640.0],"regio":1},{"name":"Woldstow","x":1207,"y":2640,"attach":[1206.67,2640.0],"regio":1},{"name":"Quarrfield","x":1210,"y":2640,"attach":[1210.0,2640.0],"regio":1},{"name":"Chapelbridge","x":992,"y":2040,"attach":[992.48,2040.0]},{"name":"Rushmere","x":905,"y":2043,"attach":[905.26,2042.8]},{"name":"Burnden","x":1440,"y":3520,"attach":[1440.0,3519.69],"regio":1},{"name":"Lynwood Junction","x":1440,"y":3529,"attach":[1440.0,3529.39],"regio":1},{"name":"Leaden Junction","x":1440,"y":3539,"attach":[1440.0,3539.08],"regio":1},{"name":"Thurlstow","x":1440,"y":3549,"attach":[1440.0,3548.78],"regio":1},{"name":"Malby","x":1440,"y":3558,"attach":[1440.0,3558.47],"regio":1},{"name":"Whitcombe","x":1440,"y":3568,"attach":[1440.0,3568.17],"regio":1},{"name":"Crowwood","x":1440,"y":3578,"attach":[1440.0,3577.86],"regio":1},{"name":"Willowbrook","x":1440,"y":3588,"attach":[1440.0,3587.56],"regio":1},{"name":"Foxstow","x":1440,"y":3597,"attach":[1440.0,3597.25],"regio":1},{"name":"Bradwood","x":1440,"y":3607,"attach":[1440.0,3606.95],"regio":1},{"name":"Saxeby","x":1440,"y":3617,"attach":[1440.0,3616.64],"regio":1},{"name":"Birchstow","x":1440,"y":3626,"attach":[1440.0,3626.33],"regio":1},{"name":"Wickthorpe","x":1440,"y":3636,"attach":[1440.0,3636.03],"regio":1},{"name":"Hawstow","x":1440,"y":3646,"attach":[1440.0,3645.72],"regio":1},{"name":"Yarwell","x":1440,"y":3655,"attach":[1440.0,3655.42],"regio":1},{"name":"Wickwell","x":1440,"y":3665,"attach":[1440.0,3665.11],"regio":1},{"name":"Rookbury","x":1440,"y":3675,"attach":[1440.0,3674.81],"regio":1},{"name":"Fenwell","x":1440,"y":3685,"attach":[1440.0,3684.5],"regio":1},{"name":"Walham","x":1440,"y":3694,"attach":[1440.0,3694.2],"regio":1},{"name":"Sandley","x":1440,"y":3704,"attach":[1440.0,3703.89],"regio":1},{"name":"Holmfield","x":1440,"y":3714,"attach":[1440.0,3713.59],"regio":1},{"name":"Newmere","x":1440,"y":3723,"attach":[1440.0,3723.28],"regio":1},{"name":"Brentworth","x":1440,"y":3733,"attach":[1440.0,3732.97],"regio":1},{"name":"Wargate","x":1440,"y":3743,"attach":[1440.0,3742.67],"regio":1},{"name":"Brentstead","x":1440,"y":3752,"attach":[1440.0,3752.36],"regio":1},{"name":"Dunby","x":1440,"y":3762,"attach":[1439.7,3762.04],"regio":1},{"name":"Goldbridge","x":1510,"y":3320,"attach":[1510.12,3319.88],"regio":1}];
const GRAPH={"pts":[[1440,3540],[1440.0,3525.0],[1440.0,3510.0],[1440.0,3555.0],[1440.0,3570.0],[1440.0,3585.0],[1440.0,3600.0],[1447.1,3558.94],[1454.2,3577.87],[1455.3,3582.68],[1454.8,3586.97],[1452.7,3590.74],[1449.0,3594.0],[1320,3210],[1305.0,3195.0],[1298.44,3187.11],[1293.75,3178.45],[1290.94,3169.01],[1290.0,3158.79],[1290.0,3141.59],[1290.0,3124.39],[1290.0,3107.2],[1290.0,3090.0],[1320.0,3224.59],[1320.0,3239.17],[1320.0,3253.76],[1320.0,3268.34],[1320.0,3282.93],[1320.0,3297.51],[1320.0,3312.1],[1320.0,3326.69],[1320.0,3341.27],[1320.0,3355.86],[1320.0,3370.44],[1320.0,3385.03],[1320.0,3399.62],[1320.0,3414.2],[1320.0,3428.79],[1320.94,3439.01],[1323.75,3448.45],[1328.44,3457.11],[1335.0,3465.0],[1350.0,3480.0],[1332.35,3222.35],[1344.7,3234.7],[1357.05,3247.05],[1369.39,3259.39],[1374.97,3264.03],[1381.1,3267.35],[1387.77,3269.34],[1395.0,3270.0],[1410.0,3270.0],[1680,3570],[1680.0,3555.0],[1680.0,3540.0],[1680.0,3525.0],[1680.0,3510.0],[1680.0,3495.0],[1680.0,3480.0],[1680.0,3585.0],[1680.0,3600.0],[1680.0,3615.0],[1680.0,3630.0],[1680.0,3645.0],[1680.0,3660.0],[1680.0,3675.0],[1680.0,3690.0],[1680.0,3705.0],[1680.0,3720.0],[1680.0,3552.8],[1680.0,3535.61],[1680.0,3518.41],[1680.0,3501.21],[1680.94,3490.99],[1683.75,3481.55],[1688.44,3472.89],[1695.0,3465.0],[1710.0,3450.0],[1680.0,3465.0],[1680.0,3450.0],[1740,3210],[1730.06,3200.06],[1720.11,3190.11],[1710.17,3180.17],[1700.22,3170.22],[1690.28,3160.28],[1680.33,3150.33],[1670.39,3140.39],[1660.44,3130.44],[1650.5,3120.5],[1640.55,3110.55],[1630.61,3100.61],[1625.97,3095.03],[1622.65,3088.9],[1620.66,3082.23],[1620.0,3075.0],[1620.0,3060.0],[1728.89,3221.11],[1717.78,3232.22],[1706.67,3243.33],[1695.56,3254.44],[1688.75,3262.62],[1683.89,3271.61],[1680.97,3281.4],[1680.0,3292.0],[1680.0,3306.0],[1680.0,3320.0],[1680.0,3334.0],[1680.0,3348.0],[1680.0,3362.0],[1680.0,3376.0],[1680.0,3390.0],[1727.65,3222.35],[1715.3,3234.7],[1702.95,3247.05],[1690.61,3259.39],[1685.03,3264.03],[1678.9,3267.35],[1672.23,3269.34],[1665.0,3270.0],[1650.0,3270.0],[1725.0,3210.0],[1710.0,3210.0],[1695.0,3210.0],[1680.0,3210.0],[1665.0,3210.0],[1650.0,3210.0],[1635.0,3210.0],[1620.0,3210.0],[1718.22,3219.33],[1708.03,3222.82],[1697.7,3224.6],[1687.21,3224.68],[1676.56,3223.05],[1662.42,3219.79],[1648.28,3216.53],[1634.14,3213.26],[1680,1590],[1665.0,1590.0],[1657.77,1590.66],[1651.1,1592.65],[1644.97,1595.97],[1639.39,1600.61],[1620.0,1620.0],[1665.33,1590.0],[1650.65,1590.0],[1635.98,1590.0],[1621.31,1590.0],[1606.64,1590.0],[1591.96,1590.0],[1577.29,1590.0],[1562.62,1590.0],[1547.94,1590.0],[1533.27,1590.0],[1518.6,1590.0],[1503.92,1590.0],[1489.25,1590.0],[1474.58,1590.0],[1459.91,1590.0],[1445.23,1590.0],[1430.56,1590.0],[1415.89,1590.0],[1401.21,1590.0],[1390.99,1590.94],[1381.55,1593.75],[1372.89,1598.44],[1365.0,1605.0],[1350.0,1620.0],[1680.0,1575.48],[1680.0,1560.96],[1680.0,1546.43],[1680.0,1531.91],[1680.0,1517.39],[1680.0,1502.87],[1680.0,1488.35],[1680.0,1473.82],[1680.0,1459.3],[1680.0,1444.78],[1680.0,1430.26],[1680.0,1415.74],[1680.0,1401.21],[1680.94,1390.99],[1683.75,1381.55],[1688.44,1372.89],[1695.0,1365.0],[1710.0,1350.0],[1680.0,1570.61],[1680.0,1551.21],[1680.94,1540.99],[1683.75,1531.55],[1688.44,1522.89],[1695.0,1515.0],[1710.0,1500.0],[690,2100],[705.0,2100.0],[720.0,2100.0],[735.0,2100.0],[750.0,2100.0],[765.0,2100.0],[780.0,2100.0],[795.0,2100.0],[810.0,2100.0],[825.0,2100.0],[840.0,2100.0],[1620,3450],[1635.0,3450.0],[1650.0,3450.0],[1665.0,3450.0],[1695.0,3450.0],[1642.23,3450.66],[1648.9,3452.65],[1655.03,3455.97],[1660.61,3460.61],[1500,3090],[1486.0,3090.0],[1472.0,3090.0],[1458.0,3090.0],[1444.0,3090.0],[1430.0,3090.0],[1416.0,3090.0],[1402.0,3090.0],[1388.0,3090.0],[1374.0,3090.0],[1360.0,3090.0],[1346.0,3090.0],[1332.0,3090.0],[1318.0,3090.0],[1304.0,3090.0],[1517.2,3090.0],[1534.39,3090.0],[1551.59,3090.0],[1568.79,3090.0],[1579.01,3089.06],[1588.45,3086.25],[1597.11,3081.56],[1605.0,3075.0],[1500.0,3105.0],[1500.0,3120.0],[1500.0,3135.0],[1500.0,3150.0],[1500.0,3165.0],[1500.0,3180.0],[1500.0,3195.0],[1500.0,3210.0],[1500.0,3225.0],[1500.0,3240.0],[1502.76,3104.28],[1505.53,3118.56],[1508.29,3132.84],[1511.06,3147.12],[1513.82,3161.4],[1515.23,3172.16],[1515.3,3182.84],[1514.01,3193.45],[1511.38,3203.98],[1505.69,3221.99],[1710.0,1485.0],[1710.0,1470.0],[1710.0,1455.0],[1710.0,1440.0],[1710.0,1425.0],[1710.0,1410.0],[1710.0,1395.0],[1710.0,1380.0],[1710.0,1365.0],[1710.0,1515.0],[1709.34,1522.23],[1707.35,1528.9],[1704.03,1535.03],[1699.39,1540.61],[1689.47,1550.53],[1679.55,1560.45],[1669.62,1570.38],[1659.7,1580.3],[1649.77,1590.23],[1639.85,1600.15],[1629.92,1610.08],[1650,3960],[1650.0,3945.0],[1650.0,3930.0],[1650.0,3915.0],[1650.0,3900.0],[1650.0,3885.0],[1650.0,3870.0],[1650.0,3945.48],[1650.0,3930.96],[1650.0,3916.43],[1650.0,3901.91],[1650.0,3887.39],[1650.0,3872.87],[1650.0,3858.35],[1650.0,3843.82],[1650.0,3829.3],[1650.0,3814.78],[1650.0,3800.26],[1650.0,3785.74],[1650.0,3771.21],[1650.94,3760.99],[1653.75,3751.55],[1658.44,3742.89],[1665.0,3735.0],[1635.0,3960.0],[1620.0,3960.0],[1605.0,3960.0],[1590.0,3960.0],[1575.0,3960.0],[1560.0,3960.0],[1545.0,3960.0],[1530.0,3960.0],[1515.0,3960.0],[1500.0,3960.0],[1485.0,3960.0],[1470.0,3960.0],[1659.0,3946.5],[1662.66,3939.62],[1664.64,3932.47],[1664.93,3925.07],[1663.54,3917.4],[1659.03,3901.6],[1654.51,3885.8],[1320,2910],[1335.0,2910.0],[1350.0,2910.0],[1365.0,2910.0],[1380.0,2910.0],[1395.0,2910.0],[1410.0,2910.0],[1425.0,2910.0],[1440.0,2910.0],[1455.0,2910.0],[1470.0,2910.0],[1305.0,2910.0],[1290.0,2910.0],[1275.0,2910.0],[1260.0,2910.0],[1245.0,2910.0],[1230.0,2910.0],[1320.0,2895.0],[1319.34,2887.77],[1317.35,2881.1],[1314.03,2874.97],[1309.39,2869.39],[1299.45,2859.45],[1289.5,2849.5],[1279.56,2839.56],[1269.61,2829.61],[1259.67,2819.67],[1249.72,2809.72],[1239.78,2799.78],[1229.83,2789.83],[1219.89,2779.89],[1209.94,2769.94],[1200.0,2760.0],[1320.0,2924.31],[1320.0,2938.62],[1320.0,2952.93],[1320.0,2967.24],[1320.0,2981.55],[1320.0,2995.86],[1320.0,3010.17],[1320.0,3024.48],[1320.0,3038.79],[1319.06,3049.01],[1316.25,3058.45],[1311.56,3067.11],[1305.0,3075.0],[1321.57,2924.61],[1323.13,2939.23],[1324.7,2953.84],[1326.26,2968.45],[1327.83,2983.06],[1329.39,2997.68],[1330.96,3012.29],[1332.53,3026.9],[1334.09,3041.51],[1335.66,3056.13],[1335.35,3066.03],[1332.08,3073.87],[1325.85,3079.63],[1316.66,3083.34],[840,2580],[820.61,2560.61],[815.03,2555.97],[808.9,2552.65],[802.23,2550.66],[795.0,2550.0],[780.0,2550.0],[840.0,2595.0],[840.0,2610.0],[840.0,2625.0],[840.0,2640.0],[840.0,2655.0],[840.0,2670.0],[840.0,2685.0],[840.0,2700.0],[834.0,2574.0],[830.88,2571.19],[827.51,2568.76],[823.91,2566.7],[820.05,2565.02],[806.7,2560.01],[793.35,2555.01],[855.0,2580.0],[870.0,2580.0],[885.0,2580.0],[900.0,2580.0],[915.0,2580.0],[930.0,2580.0],[945.0,2580.0],[960.0,2580.0],[975.0,2580.0],[990.0,2580.0],[1455.0,3960.0],[1440.0,3960.0],[1425.0,3960.0],[1410.0,3960.0],[1455.0,3975.0],[1448.44,3982.89],[1443.75,3991.55],[1440.94,4000.99],[1440.0,4011.21],[1440.0,4028.41],[1440.0,4045.61],[1440.0,4062.8],[1440.0,4080.0],[1489.0,3960.0],[1508.0,3960.0],[1518.6,3960.97],[1528.39,3963.89],[1537.38,3968.75],[1545.56,3975.56],[1556.0,3986.0],[1566.45,3996.45],[1576.89,4006.89],[1587.33,4017.33],[1597.78,4027.78],[1608.22,4038.22],[1618.67,4048.67],[1629.11,4059.11],[1639.56,4069.56],[1650.0,4080.0],[1470.0,3945.56],[1470.0,3931.13],[1470.0,3916.69],[1470.0,3902.26],[1470.0,3887.82],[1470.0,3873.39],[1470.0,3858.95],[1470.0,3844.52],[1470.0,3830.08],[1470.0,3815.65],[1470.0,3801.21],[1469.06,3790.99],[1466.25,3781.55],[1461.56,3772.89],[1455.0,3765.0],[1440.0,3750.0],[1500.0,3255.0],[1500.0,3270.0],[1500.0,3285.0],[1500.0,3300.0],[1500.0,3315.0],[1500.0,3330.0],[1710,1830],[1725.0,1830.0],[1740.0,1830.0],[1755.0,1830.0],[1770.0,1830.0],[1785.0,1830.0],[1800.0,1830.0],[1695.0,1845.0],[1687.11,1851.56],[1678.45,1856.25],[1669.01,1859.06],[1658.79,1860.0],[1644.48,1860.0],[1630.17,1860.0],[1615.86,1860.0],[1601.55,1860.0],[1587.24,1860.0],[1572.93,1860.0],[1558.62,1860.0],[1544.31,1860.0],[1530.0,1860.0],[1710.0,1815.0],[1710.0,1800.0],[1710.0,1785.0],[1710.0,1770.0],[1710.0,1755.0],[1710.0,1740.0],[1710.0,1725.0],[1710.0,1710.0],[1710.0,1845.0],[1709.34,1852.23],[1707.35,1858.9],[1704.03,1865.03],[1699.39,1870.61],[1689.47,1880.53],[1679.55,1890.45],[1669.62,1900.38],[1659.7,1910.3],[1649.77,1920.23],[1639.85,1930.15],[1629.92,1940.08],[1620.0,1950.0],[1980,1890],[1970.0,1900.0],[1960.0,1910.0],[1950.0,1920.0],[2010,2010],[1995.0,2010.0],[1980.0,2010.0],[1965.0,2010.0],[1950.0,2010.0],[1935.0,2010.0],[1920.0,2010.0],[1050,1890],[1059.96,1880.04],[1069.91,1870.09],[1079.87,1860.13],[1089.83,1850.17],[1099.78,1840.22],[1109.74,1830.26],[1119.7,1820.3],[1129.65,1810.35],[1139.61,1800.39],[1149.57,1790.43],[1159.52,1780.48],[1169.48,1770.52],[1179.44,1760.56],[1189.39,1750.61],[1194.97,1745.97],[1201.1,1742.65],[1207.77,1740.66],[1215.0,1740.0],[1230.0,1740.0],[1050.0,1904.11],[1050.0,1918.22],[1050.0,1932.34],[1050.0,1946.45],[1050.0,1960.56],[1050.0,1974.67],[1050.0,1988.79],[1050.94,1999.01],[1053.75,2008.45],[1058.44,2017.11],[1065.0,2025.0],[1080.0,2040.0],[1050.0,1875.0],[1050.0,1860.0],[1050.0,1845.0],[1050.0,1830.0],[1050.0,1815.0],[1050.0,1800.0],[1050.0,1785.0],[1050.0,1770.0],[1050.0,1755.0],[1050.0,1740.0],[1040.0,1900.0],[1030.0,1910.0],[1020.0,1920.0],[1010.0,1930.0],[1000.0,1940.0],[990.0,1950.0],[980.0,1960.0],[970.0,1970.0],[960.0,1980.0],[950.0,1990.0],[940.0,2000.0],[930.0,2010.0],[920.0,2020.0],[910.0,2030.0],[900.0,2040.0],[890.0,2050.0],[880.0,2060.0],[870.0,2070.0],[860.0,2080.0],[850.0,2090.0],[1680.0,3464.21],[1680.0,3478.42],[1680.0,3492.63],[1680.0,3506.84],[1680.0,3521.05],[1680.0,3535.26],[1680.0,3549.47],[1680.0,3563.68],[1680.0,3577.89],[1680.0,3592.11],[1680.0,3606.32],[1680.0,3620.53],[1680.0,3634.74],[1680.0,3648.95],[1680.0,3663.16],[1680.0,3677.37],[1680.0,3691.58],[1680.0,3705.79],[1665.79,3450.0],[1651.58,3450.0],[1637.37,3450.0],[1623.16,3450.0],[1608.95,3450.0],[1594.74,3450.0],[1580.53,3450.0],[1566.32,3450.0],[1552.11,3450.0],[1537.89,3450.0],[1523.68,3450.0],[1509.47,3450.0],[1495.26,3450.0],[1481.05,3450.0],[1466.84,3450.0],[1452.63,3450.0],[1438.42,3450.0],[1424.21,3450.0],[1410.0,3450.0],[1050,2640],[1040.0,2650.0],[1030.0,2660.0],[1020.0,2670.0],[1010.0,2680.0],[1000.0,2690.0],[990.0,2700.0],[1065.0,2640.0],[1080.0,2640.0],[1095.0,2640.0],[1110.0,2640.0],[1125.0,2640.0],[1140.0,2640.0],[1155.0,2640.0],[1170.0,2640.0],[1185.0,2640.0],[1200.0,2640.0],[1040.0,2630.0],[1030.0,2620.0],[1020.0,2610.0],[1010.0,2600.0],[1000.0,2590.0],[1830,2400],[1830.0,2385.0],[1829.34,2377.77],[1827.35,2371.1],[1824.03,2364.97],[1819.39,2359.39],[1809.44,2349.44],[1799.48,2339.48],[1789.52,2329.52],[1779.57,2319.57],[1769.61,2309.61],[1759.65,2299.65],[1749.7,2289.7],[1739.74,2279.74],[1729.78,2269.78],[1719.83,2259.83],[1709.87,2249.87],[1699.91,2239.91],[1689.96,2229.96],[1680.0,2220.0],[1830.0,2415.0],[1829.34,2422.23],[1827.35,2428.9],[1824.03,2435.03],[1819.39,2440.61],[1809.41,2450.59],[1799.44,2460.56],[1789.46,2470.54],[1779.48,2480.52],[1769.5,2490.5],[1759.52,2500.48],[1749.54,2510.46],[1739.56,2520.44],[1729.58,2530.42],[1719.6,2540.4],[1709.62,2550.38],[1699.64,2560.36],[1689.67,2570.33],[1679.69,2580.31],[1669.71,2590.29],[1659.73,2600.27],[1649.75,2610.25],[1639.77,2620.23],[1629.79,2630.21],[1619.81,2640.19],[1609.83,2650.17],[1599.85,2660.15],[1589.87,2670.13],[1579.9,2680.1],[1569.92,2690.08],[1559.94,2700.06],[1549.96,2710.04],[1539.98,2720.02],[1530.0,2730.0],[1815.6,2400.0],[1801.2,2400.0],[1786.8,2400.0],[1772.4,2400.0],[1758.0,2400.0],[1743.6,2400.0],[1729.2,2400.0],[1714.8,2400.0],[1700.4,2400.0],[1686.0,2400.0],[1671.6,2400.0],[1657.2,2400.0],[1642.8,2400.0],[1628.4,2400.0],[1614.0,2400.0],[1599.6,2400.0],[1585.2,2400.0],[1570.8,2400.0],[1556.4,2400.0],[1542.0,2400.0],[1527.6,2400.0],[1513.2,2400.0],[1498.8,2400.0],[1484.4,2400.0],[1470.0,2400.0],[1660.61,3739.39],[1655.97,3744.97],[1652.65,3751.1],[1650.66,3757.77],[1650.0,3765.0],[1650.0,3780.0],[1650.0,3785.33],[1650.0,3799.44],[1650.0,3813.55],[1650.0,3827.66],[1650.0,3841.78],[1650.0,3855.89],[1009.0,2580.0],[1028.0,2580.0],[1038.6,2579.03],[1048.39,2576.11],[1057.38,2571.25],[1065.56,2564.44],[1076.67,2553.33],[1087.78,2542.22],[1098.89,2531.11],[1110.0,2520.0],[990.0,2595.0],[990.0,2610.0],[990.0,2625.0],[990.0,2640.0],[990.0,2655.0],[990.0,2670.0],[990.0,2685.0],[1608.89,1961.11],[1597.78,1972.22],[1586.67,1983.33],[1575.56,1994.44],[1567.38,2001.25],[1558.39,2006.11],[1548.6,2009.03],[1538.0,2010.0],[1524.0,2010.0],[1510.0,2010.0],[1496.0,2010.0],[1482.0,2010.0],[1468.0,2010.0],[1454.0,2010.0],[1440.0,2010.0],[1635.0,1950.0],[1650.0,1950.0],[1665.0,1950.0],[1680.0,1950.0],[1695.0,1950.0],[1710.0,1950.0],[1725.0,1950.0],[1740.0,1950.0],[1755.0,1950.0],[1770.0,1950.0],[1785.0,1950.0],[1800.0,1950.0],[1605.0,1965.0],[1598.44,1972.89],[1593.75,1981.55],[1590.94,1990.99],[1590.0,2001.21],[1590.0,2015.33],[1590.0,2029.44],[1590.0,2043.55],[1590.0,2057.66],[1590.0,2071.78],[1590.0,2085.89],[1590.0,2100.0],[1610.0,1940.0],[1600.0,1930.0],[1590.0,1920.0],[1580.0,1910.0],[1570.0,1900.0],[1560.0,1890.0],[1550.0,1880.0],[1540.0,1870.0],[1620,3360],[1600.61,3340.61],[1595.97,3335.03],[1592.65,3328.9],[1590.66,3322.23],[1590.0,3315.0],[1590.0,3300.0],[1635.0,3360.0],[1642.23,3360.66],[1648.9,3362.65],[1655.03,3365.97],[1660.61,3370.61],[1620.0,3345.0],[1620.0,3330.0],[1620.0,3315.0],[1620.0,3300.0],[1620.0,3285.0],[1620.0,3270.0],[1620.0,3255.0],[1620.0,3240.0],[1620.0,3225.0],[1110,2190],[1110.0,2204.35],[1110.0,2218.7],[1110.0,2233.04],[1110.0,2247.39],[1110.0,2261.74],[1110.0,2276.09],[1110.0,2290.43],[1110.0,2304.78],[1110.0,2319.13],[1110.0,2333.48],[1110.0,2347.83],[1110.0,2362.17],[1110.0,2376.52],[1110.0,2390.87],[1110.0,2405.22],[1110.0,2419.57],[1110.0,2433.91],[1110.0,2448.26],[1110.0,2462.61],[1110.0,2476.96],[1110.0,2491.3],[1110.0,2505.65],[1095.0,2175.0],[1088.44,2167.11],[1083.75,2158.45],[1080.94,2149.01],[1080.0,2138.79],[1080.0,2124.67],[1080.0,2110.56],[1080.0,2096.45],[1080.0,2082.34],[1080.0,2068.22],[1080.0,2054.11],[1095.64,2190.0],[1081.27,2190.0],[1066.91,2190.0],[1052.55,2190.0],[1038.18,2190.0],[1023.82,2190.0],[1009.45,2190.0],[995.09,2190.0],[980.73,2190.0],[966.36,2190.0],[952.0,2190.0],[941.4,2189.03],[931.61,2186.11],[922.62,2181.25],[914.44,2174.44],[903.81,2163.81],[893.17,2153.17],[882.54,2142.54],[871.9,2131.9],[861.27,2121.27],[850.63,2110.63],[1124.4,2190.0],[1138.8,2190.0],[1153.2,2190.0],[1167.6,2190.0],[1182.0,2190.0],[1196.4,2190.0],[1210.8,2190.0],[1225.2,2190.0],[1239.6,2190.0],[1254.0,2190.0],[1268.4,2190.0],[1282.8,2190.0],[1297.2,2190.0],[1311.6,2190.0],[1326.0,2190.0],[1340.4,2190.0],[1354.8,2190.0],[1369.2,2190.0],[1383.6,2190.0],[1398.0,2190.0],[1412.4,2190.0],[1426.8,2190.0],[1441.2,2190.0],[1455.6,2190.0],[1470.0,2190.0],[1665.0,3945.0],[1671.56,3952.89],[1676.25,3961.55],[1679.06,3970.99],[1680.0,3981.21],[1680.0,3995.52],[1680.0,4009.83],[1680.0,4024.14],[1680.0,4038.45],[1680.0,4052.76],[1680.0,4067.07],[1680.0,4081.38],[1680.0,4095.69],[1680.0,4110.0],[1660.81,3940.81],[1671.63,3951.63],[1682.44,3962.44],[1689.06,3970.61],[1693.37,3979.56],[1695.36,3989.29],[1695.03,3999.8],[1692.88,4015.54],[1690.73,4031.28],[1688.59,4047.03],[1686.44,4062.77],[1684.29,4078.51],[1682.15,4094.26],[1650.0,3975.0],[1650.0,3990.0],[1650.0,4005.0],[1650.0,4020.0],[1650.0,4035.0],[1650.0,4050.0],[1650.0,4065.0],[1050.0,1725.0],[1050.0,1710.0],[1050.0,1695.0],[1050.0,1680.0],[1050.0,1665.0],[1050.0,1650.0],[1050.0,1635.0],[1050.0,1620.0],[1065.0,1740.0],[1080.0,1740.0],[1095.0,1740.0],[1110.0,1740.0],[1125.0,1740.0],[1140.0,1740.0],[1155.0,1740.0],[1170.0,1740.0],[1185.0,1740.0],[1200.0,1740.0],[1530.0,2745.0],[1530.0,2760.0],[1530.0,2775.0],[1530.0,2790.0],[1530.0,2805.0],[1530.0,2820.0],[1534.51,2745.8],[1539.03,2761.6],[1543.54,2777.4],[1544.93,2785.07],[1544.64,2792.47],[1542.66,2799.62],[1539.0,2806.5],[1210.61,2890.61],[1205.97,2885.03],[1202.65,2878.9],[1200.66,2872.23],[1200.0,2865.0],[1200.0,2850.0],[1230.0,2924.0],[1230.0,2938.0],[1230.0,2952.0],[1230.0,2966.0],[1230.0,2980.0],[1230.0,2994.0],[1230.0,3008.0],[1230.97,3018.6],[1233.89,3028.39],[1238.75,3037.38],[1245.56,3045.56],[1256.67,3056.67],[1267.78,3067.78],[1278.89,3078.89],[1215.0,2895.0],[1208.44,2887.11],[1203.75,2878.45],[1200.94,2869.01],[1200.0,2858.79],[1200.0,2844.67],[1200.0,2830.56],[1200.0,2816.45],[1200.0,2802.34],[1200.0,2788.22],[1200.0,2774.11],[1365.0,3480.0],[1372.23,3479.34],[1378.9,3477.35],[1385.03,3474.03],[1390.61,3469.39],[1361.11,3468.89],[1372.22,3457.78],[1383.33,3446.67],[1394.44,3435.56],[1401.25,3427.38],[1406.11,3418.39],[1409.03,3408.6],[1410.0,3398.0],[1410.0,3383.78],[1410.0,3369.56],[1410.0,3355.33],[1410.0,3341.11],[1410.0,3326.89],[1410.0,3312.67],[1410.0,3298.44],[1410.0,3284.22],[1429.39,3469.39],[1434.03,3474.97],[1437.35,3481.1],[1439.34,3487.77],[1440.0,3495.0],[1424.0,3450.0],[1438.0,3450.0],[1452.0,3450.0],[1466.0,3450.0],[1480.0,3450.0],[1494.0,3450.0],[1508.0,3450.0],[1522.0,3450.0],[1536.0,3450.0],[1550.0,3450.0],[1564.0,3450.0],[1578.0,3450.0],[1592.0,3450.0],[1606.0,3450.0],[1410.0,3435.0],[1410.0,3420.0],[1410.0,3405.0],[1410.0,3390.0],[1410.0,3375.0],[1410.0,3360.0],[1410.0,3345.0],[1410.0,3330.0],[1410.0,3315.0],[1410.0,3300.0],[1410.0,3285.0],[1410.0,3945.0],[1410.0,3930.0],[1410.0,3915.0],[1410.0,3900.0],[1410.0,3885.0],[1410.0,3870.0],[1410.0,3855.0],[1410.0,3840.0],[1410.0,3825.0],[1410.0,3810.0],[1415.69,3941.99],[1421.38,3923.98],[1424.01,3913.45],[1425.3,3902.84],[1425.23,3892.16],[1423.82,3881.4],[1421.06,3867.12],[1418.29,3852.84],[1415.53,3838.56],[1412.76,3824.28],[1470.0,2386.0],[1470.0,2372.0],[1470.0,2358.0],[1470.0,2344.0],[1470.0,2330.0],[1470.0,2316.0],[1470.0,2302.0],[1470.0,2288.0],[1470.0,2274.0],[1470.0,2260.0],[1470.0,2246.0],[1470.0,2232.0],[1470.0,2218.0],[1470.0,2204.0],[1470.0,2414.44],[1470.0,2428.87],[1470.0,2443.31],[1470.0,2457.74],[1470.0,2472.18],[1470.0,2486.61],[1470.0,2501.05],[1470.0,2515.48],[1470.0,2529.92],[1470.0,2544.35],[1470.0,2558.79],[1469.06,2569.01],[1466.25,2578.45],[1461.56,2587.11],[1455.0,2595.0],[1440.0,2610.0],[1454.0,4080.0],[1468.0,4080.0],[1482.0,4080.0],[1496.0,4080.0],[1510.0,4080.0],[1524.0,4080.0],[1538.0,4080.0],[1552.0,4080.0],[1566.0,4080.0],[1580.0,4080.0],[1594.0,4080.0],[1608.0,4080.0],[1622.0,4080.0],[1636.0,4080.0],[1454.46,4082.12],[1468.92,4084.23],[1483.39,4086.35],[1497.85,4088.47],[1512.31,4090.58],[1526.77,4092.7],[1541.23,4094.81],[1552.1,4095.93],[1562.94,4096.09],[1573.76,4095.29],[1584.54,4093.54],[1600.91,4090.16],[1617.27,4086.77],[1633.64,4083.39],[810,2250],[810.0,2235.89],[810.0,2221.78],[810.0,2207.66],[810.0,2193.55],[810.0,2179.44],[810.0,2165.33],[810.0,2151.21],[810.94,2140.99],[813.75,2131.55],[818.44,2122.89],[825.0,2115.0],[795.0,2265.0],[788.44,2272.89],[783.75,2281.55],[780.94,2290.99],[780.0,2301.21],[780.0,2315.85],[780.0,2330.48],[780.0,2345.12],[780.0,2359.75],[780.0,2374.39],[780.0,2389.02],[780.0,2403.65],[780.0,2418.29],[780.0,2432.92],[780.0,2447.56],[780.0,2462.19],[780.0,2476.83],[780.0,2491.46],[780.0,2506.1],[780.0,2520.73],[780.0,2535.37],[812.84,2233.93],[815.67,2217.87],[818.51,2201.8],[821.34,2185.73],[824.18,2169.67],[826.18,2158.85],[828.38,2148.08],[830.76,2137.35],[833.34,2126.66],[1440.0,3735.0],[1440.0,3720.0],[1440.0,3705.0],[1440.0,3690.0],[1440.0,3675.0],[1440.0,3660.0],[1440.0,3645.0],[1440.0,3630.0],[1440.0,3615.0],[1440.0,3765.0],[1439.34,3772.23],[1437.35,3778.9],[1434.03,3785.03],[1429.39,3790.61],[855.0,2700.0],[870.0,2700.0],[885.0,2700.0],[900.0,2700.0],[915.0,2700.0],[930.0,2700.0],[945.0,2700.0],[960.0,2700.0],[975.0,2700.0],[854.28,2702.76],[868.56,2705.53],[882.84,2708.29],[897.12,2711.06],[911.4,2713.82],[922.16,2715.23],[932.84,2715.3],[943.45,2714.01],[953.98,2711.38],[971.99,2705.69],[855.01,2704.87],[870.02,2709.74],[885.04,2714.61],[900.05,2719.48],[915.06,2724.34],[930.07,2729.21],[940.24,2731.25],[949.81,2730.57],[958.79,2727.18],[967.17,2721.08],[978.58,2710.54],[1215.0,2745.0],[1221.56,2737.11],[1226.25,2728.45],[1229.06,2719.01],[1230.0,2708.79],[1230.0,2691.59],[1230.0,2674.39],[1230.0,2657.2],[1230.0,2640.0],[1200.0,2775.0],[1200.0,2790.0],[1200.0,2805.0],[1200.0,2820.0],[1200.0,2835.0],[765.0,2550.0],[750.0,2550.0],[735.0,2550.0],[720.0,2550.0],[705.0,2550.0],[690.0,2550.0],[1890,1830],[1875.0,1830.0],[1860.0,1830.0],[1845.0,1830.0],[1830.0,1830.0],[1815.0,1830.0],[1620.0,3195.0],[1620.0,3180.0],[1620.0,3165.0],[1620.0,3150.0],[1620.0,3135.0],[1620.0,3120.0],[1620.0,3105.0],[1620.0,3090.0],[1620.66,3232.23],[1622.65,3238.9],[1625.97,3245.03],[1630.61,3250.61],[1625.69,3191.99],[1631.38,3173.98],[1634.01,3163.45],[1635.3,3152.84],[1635.23,3142.16],[1633.82,3131.4],[1631.06,3117.12],[1628.29,3102.84],[1625.53,3088.56],[1622.76,3074.28],[1619.34,3187.77],[1617.35,3181.1],[1614.03,3174.97],[1609.39,3169.39],[1590.0,3150.0],[1425.0,3615.0],[1418.44,3622.89],[1413.75,3631.55],[1410.94,3640.99],[1410.0,3651.21],[1410.0,3665.65],[1410.0,3680.08],[1410.0,3694.52],[1410.0,3708.95],[1410.0,3723.39],[1410.0,3737.82],[1410.0,3752.26],[1410.0,3766.69],[1410.0,3781.13],[1410.0,3795.56],[1299.97,3099.97],[1309.94,3109.94],[1319.91,3119.91],[1329.88,3129.88],[1339.85,3139.85],[1349.82,3149.82],[1359.79,3159.79],[1369.76,3169.76],[1379.73,3179.73],[1389.7,3189.7],[1399.67,3199.67],[1409.64,3209.64],[1419.61,3219.61],[1429.58,3229.58],[1439.55,3239.55],[1449.51,3249.51],[1459.48,3259.48],[1469.45,3269.45],[1479.42,3279.42],[1489.39,3289.39],[1494.03,3294.97],[1497.35,3301.1],[1499.34,3307.77],[1300.44,3100.44],[1310.89,3110.89],[1321.33,3121.33],[1331.78,3131.78],[1342.22,3142.22],[1352.67,3152.67],[1363.11,3163.11],[1373.55,3173.55],[1384.0,3184.0],[1394.44,3194.44],[1401.25,3202.62],[1406.11,3211.61],[1409.03,3221.4],[1410.0,3232.0],[1410.0,3251.0],[1650.0,3855.0],[1650.0,3840.0],[1650.0,3825.0],[1650.0,3810.0],[1650.0,3795.0],[1659.0,3856.5],[1662.66,3849.62],[1664.64,3842.47],[1664.93,3835.07],[1663.54,3827.4],[1659.03,3811.6],[1654.51,3795.8],[1560,2910],[1545.0,2895.0],[1538.44,2887.11],[1533.75,2878.45],[1530.94,2869.01],[1530.0,2858.79],[1530.0,2839.39],[1560.0,2925.0],[1560.0,2940.0],[1560.0,2955.0],[1560.0,2970.0],[1560.0,2985.0],[1560.0,3000.0],[1545.0,2910.0],[1530.0,2910.0],[1515.0,2910.0],[1500.0,2910.0],[1485.0,2910.0],[1560.0,2895.0],[1560.0,2880.0],[1560.0,2865.0],[1560.0,2850.0],[1560.0,2835.0],[1560.0,2820.0],[1560.0,2805.0],[1560.0,2790.0],[1560.0,2775.0],[1560.0,2760.0],[1800.0,1845.0],[1800.0,1860.0],[1800.0,1875.0],[1800.0,1890.0],[1800.0,1905.0],[1800.0,1920.0],[1800.0,1935.0],[1800.0,1815.0],[1799.34,1807.77],[1797.35,1801.1],[1794.03,1794.97],[1789.39,1789.39],[1779.47,1779.47],[1769.55,1769.55],[1759.62,1759.62],[1749.7,1749.7],[1739.77,1739.77],[1729.85,1729.85],[1719.92,1719.92],[1819.0,1830.0],[1838.0,1830.0],[1848.6,1830.97],[1858.39,1833.89],[1867.38,1838.75],[1875.56,1845.56],[1886.19,1856.19],[1896.83,1866.83],[1907.46,1877.46],[1918.1,1888.1],[1928.73,1898.73],[1939.37,1909.37],[1320,1560],[1320.0,1575.0],[1320.66,1582.23],[1322.65,1588.9],[1325.97,1595.03],[1330.61,1600.61],[1935.0,1935.0],[1927.11,1941.56],[1918.45,1946.25],[1909.01,1949.06],[1898.79,1950.0],[1884.67,1950.0],[1870.56,1950.0],[1856.45,1950.0],[1842.34,1950.0],[1828.22,1950.0],[1814.11,1950.0],[1950.0,1939.39],[1950.0,1958.79],[1949.06,1969.01],[1946.25,1978.45],[1941.56,1987.11],[1935.0,1995.0],[1570.0,3010.0],[1580.0,3020.0],[1590.0,3030.0],[1600.0,3040.0],[1610.0,3050.0],[1550.0,2990.0],[1540.0,2980.0],[1530.0,2970.0],[1520.0,2960.0],[1510.0,2950.0],[1500.0,2940.0],[1490.0,2930.0],[1480.0,2920.0],[1725.0,1350.0],[1740.0,1350.0],[1755.0,1350.0],[1770.0,1350.0],[1785.0,1350.0],[1800.0,1350.0],[1815.0,1350.0],[1830.0,1350.0],[1845.0,1350.0],[1860.0,1350.0],[1875.0,1350.0],[1890.0,1350.0],[1680.0,2205.0],[1679.34,2197.77],[1677.35,2191.1],[1674.03,2184.97],[1669.39,2179.39],[1659.47,2169.47],[1649.55,2159.55],[1639.62,2149.62],[1629.7,2139.7],[1619.77,2129.77],[1609.85,2119.85],[1599.92,2109.92],[1665.0,2205.0],[1657.11,2198.44],[1648.45,2193.75],[1639.01,2190.94],[1628.79,2190.0],[1614.35,2190.0],[1599.92,2190.0],[1585.48,2190.0],[1571.05,2190.0],[1556.61,2190.0],[1542.18,2190.0],[1527.74,2190.0],[1513.31,2190.0],[1498.87,2190.0],[1484.44,2190.0],[1689.94,2210.06],[1699.89,2200.11],[1709.83,2190.17],[1719.78,2180.22],[1729.72,2170.28],[1739.67,2160.33],[1749.61,2150.39],[1759.56,2140.44],[1769.5,2130.5],[1779.45,2120.55],[1789.39,2110.61],[1794.97,2105.97],[1801.1,2102.65],[1807.77,2100.66],[1815.0,2100.0],[1830.0,2100.0],[1450.63,1999.37],[1461.27,1988.73],[1471.9,1978.1],[1482.54,1967.46],[1493.17,1956.83],[1503.81,1946.19],[1514.44,1935.56],[1521.25,1927.38],[1526.11,1918.39],[1529.03,1908.6],[1530.0,1898.0],[1530.0,1879.0],[1440.0,2024.31],[1440.0,2038.62],[1440.0,2052.93],[1440.0,2067.24],[1440.0,2081.55],[1440.0,2095.86],[1440.0,2110.17],[1440.0,2124.48],[1440.0,2138.79],[1440.94,2149.01],[1443.75,2158.45],[1448.44,2167.11],[1455.0,2175.0],[1425.96,2010.0],[1411.93,2010.0],[1397.89,2010.0],[1383.86,2010.0],[1369.82,2010.0],[1355.79,2010.0],[1341.75,2010.0],[1327.71,2010.0],[1313.68,2010.0],[1299.64,2010.0],[1285.61,2010.0],[1271.57,2010.0],[1257.54,2010.0],[1243.5,2010.0],[1229.46,2010.0],[1215.43,2010.0],[1201.39,2010.0],[1187.36,2010.0],[1173.32,2010.0],[1159.28,2010.0],[1145.25,2010.0],[1131.21,2010.0],[1120.99,2010.94],[1111.55,2013.75],[1102.89,2018.44],[1095.0,2025.0],[1800.0,1964.11],[1800.0,1978.22],[1800.0,1992.34],[1800.0,2006.45],[1800.0,2020.56],[1800.0,2034.67],[1800.0,2048.79],[1800.94,2059.01],[1803.75,2068.45],[1808.44,2077.11],[1815.0,2085.0],[1560.0,2745.0],[1559.34,2737.77],[1557.35,2731.1],[1554.03,2724.97],[1549.39,2719.39],[1539.45,2709.45],[1529.5,2699.5],[1519.56,2689.56],[1509.61,2679.61],[1499.67,2669.67],[1489.72,2659.72],[1479.78,2649.78],[1469.83,2639.83],[1459.89,2629.89],[1449.94,2619.94],[1559.34,2782.23],[1557.35,2788.9],[1554.03,2795.03],[1549.39,2800.61],[1665.0,3285.0],[1671.56,3292.89],[1676.25,3301.55],[1679.06,3310.99],[1680.0,3321.21],[1680.0,3338.41],[1680.0,3355.61],[1680.0,3372.8],[1200.0,2836.0],[1200.0,2822.0],[1200.0,2808.0],[1200.0,2794.0],[1200.0,2780.0],[1200.0,2766.0],[1200.0,2752.0],[1200.0,2738.0],[1200.0,2724.0],[1200.0,2710.0],[1200.0,2696.0],[1200.0,2682.0],[1200.0,2668.0],[1200.0,2654.0],[1120.0,2530.0],[1130.0,2540.0],[1140.0,2550.0],[1150.0,2560.0],[1160.0,2570.0],[1170.0,2580.0],[1180.0,2590.0],[1190.0,2600.0],[1200.0,2610.0],[1210.0,2620.0],[1220.0,2630.0],[1519.72,1849.72],[1509.44,1839.44],[1499.17,1829.17],[1488.89,1818.89],[1478.61,1808.61],[1468.33,1798.33],[1458.06,1788.06],[1447.78,1777.78],[1437.5,1767.5],[1427.22,1757.22],[1416.94,1746.94],[1406.67,1736.67],[1396.39,1726.39],[1386.11,1716.11],[1375.83,1705.83],[1365.56,1695.56],[1358.75,1687.38],[1353.89,1678.39],[1350.97,1668.6],[1350.0,1658.0],[1350.0,1639.0],[1575.0,2100.0],[1567.77,2100.66],[1561.1,2102.65],[1554.97,2105.97],[1549.39,2110.61],[1539.47,2120.53],[1529.55,2130.45],[1519.62,2140.38],[1509.7,2150.3],[1499.77,2160.23],[1489.85,2170.15],[1479.92,2180.08],[1690.0,3470.0],[1700.0,3460.0],[1630.0,1630.0],[1640.0,1640.0],[1650.0,1650.0],[1660.0,1660.0],[1670.0,1670.0],[1680.0,1680.0],[1690.0,1690.0],[1700.0,1700.0],[1605.79,1620.0],[1591.58,1620.0],[1577.37,1620.0],[1563.16,1620.0],[1548.95,1620.0],[1534.74,1620.0],[1520.53,1620.0],[1506.32,1620.0],[1492.11,1620.0],[1477.89,1620.0],[1463.68,1620.0],[1449.47,1620.0],[1435.26,1620.0],[1421.05,1620.0],[1406.84,1620.0],[1392.63,1620.0],[1378.42,1620.0],[1364.21,1620.0],[900,1620],[915.0,1620.0],[930.0,1620.0],[945.0,1620.0],[960.0,1620.0],[975.0,1620.0],[990.0,1620.0],[1005.0,1620.0],[1020.0,1620.0],[1035.0,1620.0],[1690.61,3430.61],[1685.97,3425.03],[1682.65,3418.9],[1680.66,3412.23],[1680.0,3405.0],[1630.0,3440.0],[1640.0,3430.0],[1650.0,3420.0],[1660.0,3410.0],[1670.0,3400.0],[1620.0,3435.89],[1620.0,3421.78],[1620.0,3407.66],[1620.0,3393.55],[1620.0,3379.44],[1620.0,3365.33],[1620.0,3351.21],[1619.06,3340.99],[1616.25,3331.55],[1611.56,3322.89],[1605.0,3315.0],[1425.56,2610.0],[1411.13,2610.0],[1396.69,2610.0],[1382.26,2610.0],[1367.82,2610.0],[1353.39,2610.0],[1338.95,2610.0],[1324.52,2610.0],[1310.08,2610.0],[1295.65,2610.0],[1281.21,2610.0],[1270.99,2610.94],[1261.55,2613.75],[1252.89,2618.44],[1245.0,2625.0],[1670.0,4100.0],[1660.0,4090.0],[1215.0,2640.0],[1340.0,1630.0],[1330.0,1640.0],[1320.0,1650.0],[1310.0,1660.0],[1300.0,1670.0],[1290.0,1680.0],[1280.0,1690.0],[1270.0,1700.0],[1260.0,1710.0],[1250.0,1720.0],[1240.0,1730.0],[1335.71,1620.0],[1321.43,1620.0],[1307.14,1620.0],[1292.86,1620.0],[1278.57,1620.0],[1264.29,1620.0],[1250.0,1620.0],[1235.71,1620.0],[1221.43,1620.0],[1207.14,1620.0],[1192.86,1620.0],[1178.57,1620.0],[1164.29,1620.0],[1150.0,1620.0],[1135.71,1620.0],[1121.43,1620.0],[1107.14,1620.0],[1092.86,1620.0],[1078.57,1620.0],[1064.29,1620.0],[1065.64,2040.0],[1051.27,2040.0],[1036.91,2040.0],[1022.55,2040.0],[1008.18,2040.0],[993.82,2040.0],[979.45,2040.0],[965.09,2040.0],[950.73,2040.0],[936.36,2040.0],[922.0,2040.0],[911.4,2040.97],[901.61,2043.89],[892.62,2048.75],[884.44,2055.56],[873.33,2066.67],[862.22,2077.78],[851.11,2088.89],[1440.0,3524.63],[1440.0,3539.27],[1440.0,3553.9],[1440.0,3568.54],[1440.0,3583.17],[1440.0,3597.81],[1440.0,3612.44],[1440.0,3627.08],[1440.0,3641.71],[1440.0,3656.35],[1440.0,3670.98],[1440.0,3685.61],[1440.0,3700.25],[1440.0,3714.88],[1440.0,3729.52],[1440.0,3744.15],[1440.0,3758.79],[1439.06,3769.01],[1436.25,3778.45],[1431.56,3787.11],[1425.0,3795.0],[1515.0,3315.0],[1522.89,3308.44],[1531.55,3303.75],[1540.99,3300.94],[1551.21,3300.0],[1570.61,3300.0],[1910.0,2020.0],[1900.0,2030.0],[1890.0,2040.0],[1880.0,2050.0],[1870.0,2060.0],[1860.0,2070.0],[1850.0,2080.0],[1840.0,2090.0]],"edges":[[0,1,0],[1,2,0],[0,3,0],[3,4,0],[4,5,0],[5,6,0],[0,7,2],[7,8,2],[8,9,2],[9,10,2],[10,11,2],[11,12,2],[12,6,2],[13,14,1],[14,15,1],[15,16,1],[16,17,1],[17,18,1],[18,19,1],[19,20,1],[20,21,1],[21,22,1],[13,23,1],[23,24,1],[24,25,1],[25,26,1],[26,27,1],[27,28,1],[28,29,1],[29,30,1],[30,31,1],[31,32,1],[32,33,1],[33,34,1],[34,35,1],[35,36,1],[36,37,1],[37,38,1],[38,39,1],[39,40,1],[40,41,1],[41,42,1],[13,43,2],[43,44,2],[44,45,2],[45,46,2],[46,47,2],[47,48,2],[48,49,2],[49,50,2],[50,51,2],[52,53,1],[53,54,1],[54,55,1],[55,56,1],[56,57,1],[57,58,1],[52,59,1],[59,60,1],[60,61,1],[61,62,1],[62,63,1],[63,64,1],[64,65,1],[65,66,1],[66,67,1],[67,68,1],[52,69,2],[69,70,2],[70,71,2],[71,72,2],[72,73,2],[73,74,2],[74,75,2],[75,76,2],[76,77,2],[52,53,2],[53,54,2],[54,55,2],[55,56,2],[56,57,2],[57,58,2],[58,78,2],[78,79,2],[80,81,1],[81,82,1],[82,83,1],[83,84,1],[84,85,1],[85,86,1],[86,87,1],[87,88,1],[88,89,1],[89,90,1],[90,91,1],[91,92,1],[92,93,1],[93,94,1],[94,95,1],[95,96,1],[80,97,0],[97,98,0],[98,99,0],[99,100,0],[100,101,0],[101,102,0],[102,103,0],[103,104,0],[104,105,0],[105,106,0],[106,107,0],[107,108,0],[108,109,0],[109,110,0],[110,111,0],[80,112,2],[112,113,2],[113,114,2],[114,115,2],[115,116,2],[116,117,2],[117,118,2],[118,119,2],[119,120,2],[80,121,2],[121,122,2],[122,123,2],[123,124,2],[124,125,2],[125,126,2],[126,127,2],[127,128,2],[80,129,2],[129,130,2],[130,131,2],[131,132,2],[132,133,2],[133,134,2],[134,135,2],[135,136,2],[136,128,2],[137,138,1],[138,139,1],[139,140,1],[140,141,1],[141,142,1],[142,143,1],[137,144,1],[144,145,1],[145,146,1],[146,147,1],[147,148,1],[148,149,1],[149,150,1],[150,151,1],[151,152,1],[152,153,1],[153,154,1],[154,155,1],[155,156,1],[156,157,1],[157,158,1],[158,159,1],[159,160,1],[160,161,1],[161,162,1],[162,163,1],[163,164,1],[164,165,1],[165,166,1],[166,167,1],[137,168,1],[168,169,1],[169,170,1],[170,171,1],[171,172,1],[172,173,1],[173,174,1],[174,175,1],[175,176,1],[176,177,1],[177,178,1],[178,179,1],[179,180,1],[180,181,1],[181,182,1],[182,183,1],[183,184,1],[184,185,1],[137,186,1],[186,187,1],[187,188,1],[188,189,1],[189,190,1],[190,191,1],[191,192,1],[193,194,1],[194,195,1],[195,196,1],[196,197,1],[197,198,1],[198,199,1],[199,200,1],[200,201,1],[201,202,1],[202,203,1],[204,205,2],[205,206,2],[206,207,2],[207,79,2],[79,208,2],[208,77,2],[204,205,2],[205,209,2],[209,210,2],[210,211,2],[211,212,2],[212,58,2],[213,214,0],[214,215,0],[215,216,0],[216,217,0],[217,218,0],[218,219,0],[219,220,0],[220,221,0],[221,222,0],[222,223,0],[223,224,0],[224,225,0],[225,226,0],[226,227,0],[227,22,0],[213,228,0],[228,229,0],[229,230,0],[230,231,0],[231,232,0],[232,233,0],[233,234,0],[234,235,0],[235,96,0],[213,236,2],[236,237,2],[237,238,2],[238,239,2],[239,240,2],[240,241,2],[241,242,2],[242,243,2],[243,244,2],[244,245,2],[213,246,2],[246,247,2],[247,248,2],[248,249,2],[249,250,2],[250,251,2],[251,252,2],[252,253,2],[253,254,2],[254,255,2],[255,245,2],[192,256,0],[256,257,0],[257,258,0],[258,259,0],[259,260,0],[260,261,0],[261,262,0],[262,263,0],[263,264,0],[264,185,0],[192,265,0],[265,266,0],[266,267,0],[267,268,0],[268,269,0],[269,270,0],[270,271,0],[271,272,0],[272,273,0],[273,274,0],[274,275,0],[275,276,0],[276,143,0],[277,278,1],[278,279,1],[279,280,1],[280,281,1],[281,282,1],[282,283,1],[277,278,1],[278,279,1],[277,284,2],[284,285,2],[285,286,2],[286,287,2],[287,288,2],[288,289,2],[289,290,2],[290,291,2],[291,292,2],[292,293,2],[293,294,2],[294,295,2],[295,296,2],[296,297,2],[297,298,2],[298,299,2],[299,300,2],[300,68,2],[277,301,2],[301,302,2],[302,303,2],[303,304,2],[304,305,2],[305,306,2],[306,307,2],[307,308,2],[308,309,2],[309,310,2],[310,311,2],[311,312,2],[277,313,2],[313,314,2],[314,315,2],[315,316,2],[316,317,2],[317,318,2],[318,319,2],[319,283,2],[320,321,0],[321,322,0],[322,323,0],[323,324,0],[324,325,0],[325,326,0],[326,327,0],[327,328,0],[328,329,0],[329,330,0],[320,331,0],[331,332,0],[332,333,0],[333,334,0],[334,335,0],[335,336,0],[320,337,2],[337,338,2],[338,339,2],[339,340,2],[340,341,2],[341,342,2],[342,343,2],[343,344,2],[344,345,2],[345,346,2],[346,347,2],[347,348,2],[348,349,2],[349,350,2],[350,351,2],[351,352,2],[320,353,2],[353,354,2],[354,355,2],[355,356,2],[356,357,2],[357,358,2],[358,359,2],[359,360,2],[360,361,2],[361,362,2],[362,363,2],[363,364,2],[364,365,2],[365,22,2],[320,366,2],[366,367,2],[367,368,2],[368,369,2],[369,370,2],[370,371,2],[371,372,2],[372,373,2],[373,374,2],[374,375,2],[375,376,2],[376,377,2],[377,378,2],[378,379,2],[379,22,2],[380,381,1],[381,382,1],[382,383,1],[383,384,1],[384,385,1],[385,386,1],[380,387,1],[387,388,1],[388,389,1],[389,390,1],[390,391,1],[391,392,1],[392,393,1],[393,394,1],[380,395,1],[395,396,1],[396,397,1],[397,398,1],[398,399,1],[399,400,1],[400,401,1],[401,386,1],[380,402,1],[402,403,1],[403,404,1],[404,405,1],[405,406,1],[406,407,1],[407,408,1],[408,409,1],[409,410,1],[410,411,1],[312,412,1],[412,413,1],[413,414,1],[414,415,1],[312,416,1],[416,417,1],[417,418,1],[418,419,1],[419,420,1],[420,421,1],[421,422,1],[422,423,1],[423,424,1],[312,425,2],[425,426,2],[426,427,2],[427,428,2],[428,429,2],[429,430,2],[430,431,2],[431,432,2],[432,433,2],[433,434,2],[434,435,2],[435,436,2],[436,437,2],[437,438,2],[438,439,2],[439,440,2],[312,441,2],[441,442,2],[442,443,2],[443,444,2],[444,445,2],[445,446,2],[446,447,2],[447,448,2],[448,449,2],[449,450,2],[450,451,2],[451,452,2],[452,453,2],[453,454,2],[454,455,2],[455,456,2],[245,457,2],[457,458,2],[458,459,2],[459,460,2],[460,461,2],[461,462,2],[463,464,1],[464,465,1],[465,466,1],[466,467,1],[467,468,1],[468,469,1],[463,470,0],[470,471,0],[471,472,0],[472,473,0],[473,474,0],[474,475,0],[475,476,0],[476,477,0],[477,478,0],[478,479,0],[479,480,0],[480,481,0],[481,482,0],[482,483,0],[463,484,1],[484,485,1],[485,486,1],[486,487,1],[487,488,1],[488,489,1],[489,490,1],[490,491,1],[463,492,1],[492,493,1],[493,494,1],[494,495,1],[495,496,1],[496,497,1],[497,498,1],[498,499,1],[499,500,1],[500,501,1],[501,502,1],[502,503,1],[503,504,1],[505,506,0],[506,507,0],[507,508,0],[509,510,1],[510,511,1],[511,512,1],[512,513,1],[513,514,1],[514,515,1],[516,517,1],[517,518,1],[518,519,1],[519,520,1],[520,521,1],[521,522,1],[522,523,1],[523,524,1],[524,525,1],[525,526,1],[526,527,1],[527,528,1],[528,529,1],[529,530,1],[530,531,1],[531,532,1],[532,533,1],[533,534,1],[534,535,1],[516,536,1],[536,537,1],[537,538,1],[538,539,1],[539,540,1],[540,541,1],[541,542,1],[542,543,1],[543,544,1],[544,545,1],[545,546,1],[546,547,1],[516,548,1],[548,549,1],[549,550,1],[550,551,1],[551,552,1],[552,553,1],[553,554,1],[554,555,1],[555,556,1],[556,557,1],[516,558,0],[558,559,0],[559,560,0],[560,561,0],[561,562,0],[562,563,0],[563,564,0],[564,565,0],[565,566,0],[566,567,0],[567,568,0],[568,569,0],[569,570,0],[570,571,0],[571,572,0],[572,573,0],[573,574,0],[574,575,0],[575,576,0],[576,577,0],[577,203,0],[79,578,2],[578,579,2],[579,580,2],[580,581,2],[581,582,2],[582,583,2],[583,584,2],[584,585,2],[585,586,2],[586,587,2],[587,588,2],[588,589,2],[589,590,2],[590,591,2],[591,592,2],[592,593,2],[593,594,2],[594,595,2],[595,68,2],[79,596,2],[596,597,2],[597,598,2],[598,599,2],[599,600,2],[600,601,2],[601,602,2],[602,603,2],[603,604,2],[604,605,2],[605,606,2],[606,607,2],[607,608,2],[608,609,2],[609,610,2],[610,611,2],[611,612,2],[612,613,2],[613,614,2],[615,616,0],[616,617,0],[617,618,0],[618,619,0],[619,620,0],[620,621,0],[615,622,0],[622,623,0],[623,624,0],[624,625,0],[625,626,0],[626,627,0],[627,628,0],[628,629,0],[629,630,0],[630,631,0],[615,632,0],[632,633,0],[633,634,0],[634,635,0],[635,636,0],[636,411,0],[637,638,1],[638,639,1],[639,640,1],[640,641,1],[641,642,1],[642,643,1],[643,644,1],[644,645,1],[645,646,1],[646,647,1],[647,648,1],[648,649,1],[649,650,1],[650,651,1],[651,652,1],[652,653,1],[653,654,1],[654,655,1],[655,656,1],[637,657,1],[657,658,1],[658,659,1],[659,660,1],[660,661,1],[661,662,1],[662,663,1],[663,664,1],[664,665,1],[665,666,1],[666,667,1],[667,668,1],[668,669,1],[669,670,1],[670,671,1],[671,672,1],[672,673,1],[673,674,1],[674,675,1],[675,676,1],[676,677,1],[677,678,1],[678,679,1],[679,680,1],[680,681,1],[681,682,1],[682,683,1],[683,684,1],[684,685,1],[685,686,1],[686,687,1],[687,688,1],[688,689,1],[689,690,1],[637,691,0],[691,692,0],[692,693,0],[693,694,0],[694,695,0],[695,696,0],[696,697,0],[697,698,0],[698,699,0],[699,700,0],[700,701,0],[701,702,0],[702,703,0],[703,704,0],[704,705,0],[705,706,0],[706,707,0],[707,708,0],[708,709,0],[709,710,0],[710,711,0],[711,712,0],[712,713,0],[713,714,0],[714,715,0],[68,716,1],[716,717,1],[717,718,1],[718,719,1],[719,720,1],[720,721,1],[68,300,2],[300,299,2],[299,298,2],[298,297,2],[297,296,2],[296,722,2],[722,723,2],[723,724,2],[724,725,2],[725,726,2],[726,727,2],[727,283,2],[411,728,1],[728,729,1],[729,730,1],[730,731,1],[731,732,1],[732,733,1],[733,734,1],[734,735,1],[735,736,1],[736,737,1],[411,738,1],[738,739,1],[739,740,1],[740,741,1],[741,742,1],[742,743,1],[743,744,1],[744,621,1],[504,745,1],[745,746,1],[746,747,1],[747,748,1],[748,749,1],[749,750,1],[750,751,1],[751,752,1],[752,753,1],[753,754,1],[754,755,1],[755,756,1],[756,757,1],[757,758,1],[758,759,1],[504,760,1],[760,761,1],[761,762,1],[762,763,1],[763,764,1],[764,765,1],[765,766,1],[766,767,1],[767,768,1],[768,769,1],[769,770,1],[770,771,1],[504,772,1],[772,773,1],[773,774,1],[774,775,1],[775,776,1],[776,777,1],[777,778,1],[778,779,1],[779,780,1],[780,781,1],[781,782,1],[782,783,1],[504,784,1],[784,785,1],[785,786,1],[786,787,1],[787,788,1],[788,789,1],[789,790,1],[790,791,1],[791,483,1],[792,793,1],[793,794,1],[794,795,1],[795,796,1],[796,797,1],[797,798,1],[792,799,1],[799,800,1],[800,801,1],[801,802,1],[802,803,1],[803,111,1],[792,804,2],[804,805,2],[805,806,2],[806,807,2],[807,808,2],[808,809,2],[809,810,2],[810,811,2],[811,812,2],[812,128,2],[813,814,1],[814,815,1],[815,816,1],[816,817,1],[817,818,1],[818,819,1],[819,820,1],[820,821,1],[821,822,1],[822,823,1],[823,824,1],[824,825,1],[825,826,1],[826,827,1],[827,828,1],[828,829,1],[829,830,1],[830,831,1],[831,832,1],[832,833,1],[833,834,1],[834,835,1],[835,737,1],[813,836,1],[836,837,1],[837,838,1],[838,839,1],[839,840,1],[840,841,1],[841,842,1],[842,843,1],[843,844,1],[844,845,1],[845,846,1],[846,547,1],[813,847,1],[847,848,1],[848,849,1],[849,850,1],[850,851,1],[851,852,1],[852,853,1],[853,854,1],[854,855,1],[855,856,1],[856,857,1],[857,858,1],[858,859,1],[859,860,1],[860,861,1],[861,862,1],[862,863,1],[863,864,1],[864,865,1],[865,866,1],[866,867,1],[867,203,1],[813,868,1],[868,869,1],[869,870,1],[870,871,1],[871,872,1],[872,873,1],[873,874,1],[874,875,1],[875,876,1],[876,877,1],[877,878,1],[878,879,1],[879,880,1],[880,881,1],[881,882,1],[882,883,1],[883,884,1],[884,885,1],[885,886,1],[886,887,1],[887,888,1],[888,889,1],[889,890,1],[890,891,1],[891,892,1],[279,893,1],[893,894,1],[894,895,1],[895,896,1],[896,897,1],[897,898,1],[898,899,1],[899,900,1],[900,901,1],[901,902,1],[902,903,1],[903,904,1],[904,905,1],[905,906,1],[279,907,2],[907,908,2],[908,909,2],[909,910,2],[910,911,2],[911,912,2],[912,913,2],[913,914,2],[914,915,2],[915,916,2],[916,917,2],[917,918,2],[918,919,2],[919,906,2],[279,278,2],[278,277,2],[277,920,2],[920,921,2],[921,922,2],[922,923,2],[923,924,2],[924,925,2],[925,926,2],[926,440,2],[557,927,1],[927,928,1],[928,929,1],[929,930,1],[930,931,1],[931,932,1],[932,933,1],[933,934,1],[557,935,1],[935,936,1],[936,937,1],[937,938,1],[938,939,1],[939,940,1],[940,941,1],[941,942,1],[942,943,1],[943,944,1],[944,534,1],[534,535,1],[690,945,1],[945,946,1],[946,947,1],[947,948,1],[948,949,1],[949,950,1],[690,951,0],[951,952,0],[952,953,0],[953,954,0],[954,955,0],[955,956,0],[956,957,0],[957,950,0],[336,958,1],[958,959,1],[959,960,1],[960,961,1],[961,962,1],[962,963,1],[336,964,1],[964,965,1],[965,966,1],[966,967,1],[967,968,1],[968,969,1],[969,970,1],[970,971,1],[971,972,1],[972,973,1],[973,974,1],[974,975,1],[975,976,1],[976,977,1],[977,22,1],[336,978,2],[978,979,2],[979,980,2],[980,981,2],[981,982,2],[982,983,2],[983,984,2],[984,985,2],[985,986,2],[986,987,2],[987,988,2],[988,352,2],[42,989,1],[989,990,1],[990,991,1],[991,992,1],[992,993,1],[993,614,1],[42,994,2],[994,995,2],[995,996,2],[996,997,2],[997,998,2],[998,999,2],[999,1000,2],[1000,1001,2],[1001,1002,2],[1002,1003,2],[1003,1004,2],[1004,1005,2],[1005,1006,2],[1006,1007,2],[1007,1008,2],[1008,1009,2],[1009,51,2],[614,1010,0],[1010,1011,0],[1011,1012,0],[1012,1013,0],[1013,1014,0],[1014,2,0],[614,1015,0],[1015,1016,0],[1016,1017,0],[1017,1018,0],[1018,1019,0],[1019,1020,0],[1020,1021,0],[1021,1022,0],[1022,1023,0],[1023,1024,0],[1024,1025,0],[1025,1026,0],[1026,1027,0],[1027,1028,0],[1028,204,0],[614,1029,2],[1029,1030,2],[1030,1031,2],[1031,1032,2],[1032,1033,2],[1033,1034,2],[1034,1035,2],[1035,1036,2],[1036,1037,2],[1037,1038,2],[1038,1039,2],[1039,51,2],[415,1040,0],[1040,1041,0],[1041,1042,0],[1042,1043,0],[1043,1044,0],[1044,1045,0],[1045,1046,0],[1046,1047,0],[1047,1048,0],[1048,1049,0],[415,1050,2],[1050,1051,2],[1051,1052,2],[1052,1053,2],[1053,1054,2],[1054,1055,2],[1055,1056,2],[1056,1057,2],[1057,1058,2],[1058,1059,2],[1059,1049,2],[715,1060,1],[1060,1061,1],[1061,1062,1],[1062,1063,1],[1063,1064,1],[1064,1065,1],[1065,1066,1],[1066,1067,1],[1067,1068,1],[1068,1069,1],[1069,1070,1],[1070,1071,1],[1071,1072,1],[1072,1073,1],[1073,892,1],[715,1074,1],[1074,1075,1],[1075,1076,1],[1076,1077,1],[1077,1078,1],[1078,1079,1],[1079,1080,1],[1080,1081,1],[1081,1082,1],[1082,1083,1],[1083,1084,1],[1084,1085,1],[1085,1086,1],[1086,1087,1],[1087,1088,1],[1088,1089,1],[424,1090,1],[1090,1091,1],[1091,1092,1],[1092,1093,1],[1093,1094,1],[1094,1095,1],[1095,1096,1],[1096,1097,1],[1097,1098,1],[1098,1099,1],[1099,1100,1],[1100,1101,1],[1101,1102,1],[1102,1103,1],[1103,440,1],[424,1104,2],[1104,1105,2],[1105,1106,2],[1106,1107,2],[1107,1108,2],[1108,1109,2],[1109,1110,2],[1110,1111,2],[1111,1112,2],[1112,1113,2],[1113,1114,2],[1114,1115,2],[1115,1116,2],[1116,1117,2],[1117,440,2],[1118,1119,1],[1119,1120,1],[1120,1121,1],[1121,1122,1],[1122,1123,1],[1123,1124,1],[1124,1125,1],[1125,1126,1],[1126,1127,1],[1127,1128,1],[1128,1129,1],[1129,203,1],[1118,1130,1],[1130,1131,1],[1131,1132,1],[1132,1133,1],[1133,1134,1],[1134,1135,1],[1135,1136,1],[1136,1137,1],[1137,1138,1],[1138,1139,1],[1139,1140,1],[1140,1141,1],[1141,1142,1],[1142,1143,1],[1143,1144,1],[1144,1145,1],[1145,1146,1],[1146,1147,1],[1147,1148,1],[1148,1149,1],[1149,1150,1],[1150,386,1],[1118,1151,1],[1151,1152,1],[1152,1153,1],[1153,1154,1],[1154,1155,1],[1155,1156,1],[1156,1157,1],[1157,1158,1],[1158,1159,1],[1159,203,1],[456,1160,2],[1160,1161,2],[1161,1162,2],[1162,1163,2],[1163,1164,2],[1164,1165,2],[1165,1166,2],[1166,1167,2],[1167,1168,2],[1168,6,2],[456,1169,2],[1169,1170,2],[1170,1171,2],[1171,1172,2],[1172,1173,2],[1173,1049,2],[394,1174,0],[1174,1175,0],[1175,1176,0],[1176,1177,0],[1177,1178,0],[1178,1179,0],[1179,1180,0],[1180,1181,0],[1181,1182,0],[1182,621,0],[394,1183,0],[1183,1184,0],[1184,1185,0],[1185,1186,0],[1186,1187,0],[1187,1188,0],[1188,1189,0],[1189,1190,0],[1190,1191,0],[1191,1192,0],[1192,621,0],[394,1193,1],[1193,1194,1],[1194,1195,1],[1195,1196,1],[1196,1197,1],[1197,1198,1],[1198,1199,1],[1199,1200,1],[1200,1201,1],[1201,1202,1],[1202,1203,1],[1203,621,1],[352,1204,1],[1204,1205,1],[1205,1206,1],[1206,1207,1],[1207,1208,1],[1208,1209,1],[1209,1210,1],[1210,1211,1],[1211,1212,1],[352,1213,1],[1213,1214,1],[1214,1215,1],[1215,1216,1],[1216,1217,1],[1217,963,1],[386,1218,1],[1218,1219,1],[1219,1220,1],[1220,1221,1],[1221,1222,1],[1222,1223,1],[1224,1225,0],[1225,1226,0],[1226,1227,0],[1227,1228,0],[1228,1229,0],[1229,469,0],[128,1230,1],[1230,1231,1],[1231,1232,1],[1232,1233,1],[1233,1234,1],[1234,1235,1],[1235,1236,1],[1236,1237,1],[1237,95,1],[95,96,1],[128,812,1],[812,1238,1],[1238,1239,1],[1239,1240,1],[1240,1241,1],[1241,120,1],[128,1242,2],[1242,1243,2],[1243,1244,2],[1244,1245,2],[1245,1246,2],[1246,1247,2],[1247,1248,2],[1248,1249,2],[1249,1250,2],[1250,1251,2],[1251,96,2],[128,1230,2],[1230,1252,2],[1252,1253,2],[1253,1254,2],[1254,1255,2],[1255,1256,2],[6,1257,0],[1257,1258,0],[1258,1259,0],[1259,1260,0],[1260,1261,0],[1261,1262,0],[1262,1263,0],[1263,1264,0],[1264,1265,0],[1265,1266,0],[1266,1267,0],[1267,1268,0],[1268,1269,0],[1269,1270,0],[1270,1271,0],[1271,1049,0],[22,1272,1],[1272,1273,1],[1273,1274,1],[1274,1275,1],[1275,1276,1],[1276,1277,1],[1277,1278,1],[1278,1279,1],[1279,1280,1],[1280,1281,1],[1281,1282,1],[1282,1283,1],[1283,1284,1],[1284,1285,1],[1285,1286,1],[1286,1287,1],[1287,1288,1],[1288,1289,1],[1289,1290,1],[1290,1291,1],[1291,1292,1],[1292,1293,1],[1293,1294,1],[1294,461,1],[461,462,1],[22,1295,2],[1295,1296,2],[1296,1297,2],[1297,1298,2],[1298,1299,2],[1299,1300,2],[1300,1301,2],[1301,1302,2],[1302,1303,2],[1303,1304,2],[1304,1305,2],[1305,1306,2],[1306,1307,2],[1307,1308,2],[1308,1309,2],[1309,51,2],[283,1310,1],[1310,1311,1],[1311,1312,1],[1312,1313,1],[1313,1314,1],[1314,721,1],[283,1315,2],[1315,1316,2],[1316,1317,2],[1317,1318,2],[1318,1319,2],[1319,1320,2],[1320,1321,2],[1321,721,2],[1322,1323,1],[1323,1324,1],[1324,1325,1],[1325,1326,1],[1326,1327,1],[1327,1328,1],[1328,950,1],[1322,1329,1],[1329,1330,1],[1330,1331,1],[1331,1332,1],[1332,1333,1],[1333,1334,1],[1322,1335,0],[1335,1336,0],[1336,1337,0],[1337,1338,0],[1338,1339,0],[1339,330,0],[1322,1340,2],[1340,1341,2],[1341,1342,2],[1342,1343,2],[1343,1344,2],[1344,1345,2],[1345,1346,2],[1346,1347,2],[1347,1348,2],[1348,1349,2],[469,1350,1],[1350,1351,1],[1351,1352,1],[1352,1353,1],[1353,1354,1],[1354,1355,1],[1355,1356,1],[1356,771,1],[469,1357,1],[1357,1358,1],[1358,1359,1],[1359,1360,1],[1360,1361,1],[1361,1362,1],[1362,1363,1],[1363,1364,1],[1364,1365,1],[1365,1366,1],[1366,1367,1],[1367,1368,1],[1368,491,1],[469,1369,1],[1369,1370,1],[1370,1371,1],[1371,1372,1],[1372,1373,1],[1373,1374,1],[1374,1375,1],[1375,1376,1],[1376,1377,1],[1377,1378,1],[1378,1379,1],[1379,1380,1],[1380,508,1],[1381,1382,1],[1382,1383,1],[1383,1384,1],[1384,1385,1],[1385,1386,1],[1386,167,1],[508,1387,1],[1387,1388,1],[1388,1389,1],[1389,1390,1],[1390,1391,1],[1391,1392,1],[1392,1393,1],[1393,1394,1],[1394,1395,1],[1395,1396,1],[1396,1397,1],[1397,771,1],[508,1398,1],[1398,1399,1],[1399,1400,1],[1400,1401,1],[1401,1402,1],[1402,1403,1],[1403,515,1],[1334,1404,1],[1404,1405,1],[1405,1406,1],[1406,1407,1],[1407,1408,1],[1408,96,1],[1334,1409,2],[1409,1410,2],[1410,1411,2],[1411,1412,2],[1412,1413,2],[1413,1414,2],[1414,1415,2],[1415,1416,2],[1416,330,2],[185,1417,1],[1417,1418,1],[1418,1419,1],[1419,1420,1],[1420,1421,1],[1421,1422,1],[1422,1423,1],[1423,1424,1],[1424,1425,1],[1425,1426,1],[1426,1427,1],[1427,1428,1],[656,1429,0],[1429,1430,0],[1430,1431,0],[1431,1432,0],[1432,1433,0],[1433,1434,0],[1434,1435,0],[1435,1436,0],[1436,1437,0],[1437,1438,0],[1438,1439,0],[1439,1440,0],[1440,783,0],[656,1441,1],[1441,1442,1],[1442,1443,1],[1443,1444,1],[1444,1445,1],[1445,1446,1],[1446,1447,1],[1447,1448,1],[1448,1449,1],[1449,1450,1],[1450,1451,1],[1451,1452,1],[1452,1453,1],[1453,1454,1],[1454,1455,1],[1455,892,1],[656,1456,1],[1456,1457,1],[1457,1458,1],[1458,1459,1],[1459,1460,1],[1460,1461,1],[1461,1462,1],[1462,1463,1],[1463,1464,1],[1464,1465,1],[1465,1466,1],[1466,1467,1],[1467,1468,1],[1468,1469,1],[1469,1470,1],[1470,1471,1],[759,1472,0],[1472,1473,0],[1473,1474,0],[1474,1475,0],[1475,1476,0],[1476,1477,0],[1477,1478,0],[1478,1479,0],[1479,1480,0],[1480,1481,0],[1481,1482,0],[1482,1483,0],[1483,483,0],[759,1484,0],[1484,1485,0],[1485,1486,0],[1486,1487,0],[1487,1488,0],[1488,1489,0],[1489,1490,0],[1490,1491,0],[1491,1492,0],[1492,1493,0],[1493,1494,0],[1494,1495,0],[1495,1496,0],[1496,892,0],[759,1497,1],[1497,1498,1],[1498,1499,1],[1499,1500,1],[1500,1501,1],[1501,1502,1],[1502,1503,1],[1503,1504,1],[1504,1505,1],[1505,1506,1],[1506,1507,1],[1507,1508,1],[1508,1509,1],[1509,1510,1],[1510,1511,1],[1511,1512,1],[1512,1513,1],[1513,1514,1],[1514,1515,1],[1515,1516,1],[1516,1517,1],[1517,1518,1],[1518,1519,1],[1519,1520,1],[1520,1521,1],[1521,1522,1],[1522,547,1],[771,1523,1],[1523,1524,1],[1524,1525,1],[1525,1526,1],[1526,1527,1],[1527,1528,1],[1528,1529,1],[1529,1530,1],[1530,1531,1],[1531,1532,1],[1532,1533,1],[1533,1471,1],[1349,1534,1],[1534,1535,1],[1535,1536,1],[1536,1537,1],[1537,1538,1],[1538,1539,1],[1539,1540,1],[1540,1541,1],[1541,1542,1],[1542,1543,1],[1543,1544,1],[1544,1545,1],[1545,1546,1],[1546,1547,1],[1547,1548,1],[1548,1089,1],[1349,1348,1],[1348,1549,1],[1549,1550,1],[1550,1551,1],[1551,1552,1],[1552,950,1],[120,1553,1],[1553,1554,1],[1554,1555,1],[1555,1556,1],[1556,1557,1],[1557,1558,1],[1558,1559,1],[1559,1560,1],[1560,111,1],[963,1561,2],[1561,1562,2],[1562,1563,2],[1563,1564,2],[1564,1565,2],[1565,1566,2],[1566,1567,2],[1567,1568,2],[1568,1569,2],[1569,1570,2],[1570,1571,2],[1571,1572,2],[1572,1573,2],[1573,1574,2],[1574,631,2],[737,1575,1],[1575,1576,1],[1576,1577,1],[1577,1578,1],[1578,1579,1],[1579,1580,1],[1580,1581,1],[1581,1582,1],[1582,1583,1],[1583,1584,1],[1584,1585,1],[1585,1212,1],[483,1586,1],[1586,1587,1],[1587,1588,1],[1588,1589,1],[1589,1590,1],[1590,1591,1],[1591,1592,1],[1592,1593,1],[1593,1594,1],[1594,1595,1],[1595,1596,1],[1596,1597,1],[1597,1598,1],[1598,1599,1],[1599,1600,1],[1600,1601,1],[1601,1602,1],[1602,1603,1],[1603,1604,1],[1604,1605,1],[1605,1606,1],[1606,167,1],[783,1607,1],[1607,1608,1],[1608,1609,1],[1609,1610,1],[1610,1611,1],[1611,1612,1],[1612,1613,1],[1613,1614,1],[1614,1615,1],[1615,1616,1],[1616,1617,1],[1617,1618,1],[1618,892,1],[58,1619,1],[1619,1620,1],[1620,77,1],[143,1621,1],[1621,1622,1],[1622,1623,1],[1623,1624,1],[1624,1625,1],[1625,1626,1],[1626,1627,1],[1627,1628,1],[1628,491,1],[143,1629,0],[1629,1630,0],[1630,1631,0],[1631,1632,0],[1632,1633,0],[1633,1634,0],[1634,1635,0],[1635,1636,0],[1636,1637,0],[1637,1638,0],[1638,1639,0],[1639,1640,0],[1640,1641,0],[1641,1642,0],[1642,1643,0],[1643,1644,0],[1644,1645,0],[1645,1646,0],[1646,167,0],[1647,1648,1],[1648,1649,1],[1649,1650,1],[1650,1651,1],[1651,1652,1],[1652,1653,1],[1653,1654,1],[1654,1655,1],[1655,1656,1],[1656,934,1],[77,1657,1],[1657,1658,1],[1658,1659,1],[1659,1660,1],[1660,1661,1],[1661,111,1],[204,1662,0],[1662,1663,0],[1663,1664,0],[1664,1665,0],[1665,1666,0],[1666,111,0],[204,1667,2],[1667,1668,2],[1668,1669,2],[1669,1670,2],[1670,1671,2],[1671,1672,2],[1672,1673,2],[1673,1674,2],[1674,1675,2],[1675,1676,2],[1676,1677,2],[1677,798,2],[1089,1678,1],[1678,1679,1],[1679,1680,1],[1680,1681,1],[1681,1682,1],[1682,1683,1],[1683,1684,1],[1684,1685,1],[1685,1686,1],[1686,1687,1],[1687,1688,1],[1688,1689,1],[1689,1690,1],[1690,1691,1],[1691,1692,1],[1692,1212,1],[906,1693,1],[1693,1694,1],[1694,440,1],[631,1695,0],[1695,1212,0],[167,1696,1],[1696,1697,1],[1697,1698,1],[1698,1699,1],[1699,1700,1],[1700,1701,1],[1701,1702,1],[1702,1703,1],[1703,1704,1],[1704,1705,1],[1705,1706,1],[1706,535,1],[167,1707,0],[1707,1708,0],[1708,1709,0],[1709,1710,0],[1710,1711,0],[1711,1712,0],[1712,1713,0],[1713,1714,0],[1714,1715,0],[1715,1716,0],[1716,1717,0],[1717,1718,0],[1718,1719,0],[1719,1720,0],[1720,1721,0],[1721,1722,0],[1722,1723,0],[1723,1724,0],[1724,1725,0],[1725,1726,0],[1726,934,0],[547,1727,1],[1727,1728,1],[1728,1729,1],[1729,1730,1],[1730,1731,1],[1731,1732,1],[1732,1733,1],[1733,1734,1],[1734,1735,1],[1735,1736,1],[1736,1737,1],[1737,1738,1],[1738,1739,1],[1739,1740,1],[1740,1741,1],[1741,1742,1],[1742,1743,1],[1743,1744,1],[1744,203,1],[2,1745,2],[1745,1746,2],[1746,1747,2],[1747,1748,2],[1748,1749,2],[1749,1750,2],[1750,1751,2],[1751,1752,2],[1752,1753,2],[1753,1754,2],[1754,1755,2],[1755,1756,2],[1756,1757,2],[1757,1758,2],[1758,1759,2],[1759,1760,2],[1760,1761,2],[1761,1762,2],[1762,1763,2],[1763,1764,2],[1764,1765,2],[1765,1049,2],[462,1766,1],[1766,1767,1],[1767,1768,1],[1768,1769,1],[1769,1770,1],[1770,1771,1],[1771,798,1],[515,1772,1],[1772,1773,1],[1773,1774,1],[1774,1775,1],[1775,1776,1],[1776,1777,1],[1777,1778,1],[1778,1779,1],[1779,1471,1]],"land":[[[1681.9,951.0],[1685.5,953.8],[1688.0,957.1],[1689.6,961.0],[1690.3,965.4],[1689.9,970.2],[1688.2,974.3],[1685.3,977.5],[1681.0,979.9],[1675.4,981.5],[1670.3,983.7],[1665.8,986.5],[1661.9,989.9],[1658.5,993.9],[1654.5,996.3],[1649.7,997.1],[1644.2,996.4],[1638.0,994.1],[1633.1,991.4],[1629.5,988.3],[1627.2,984.8],[1626.2,980.9],[1625.9,976.9],[1626.4,972.8],[1627.7,968.5],[1629.8,964.0],[1632.6,960.1],[1636.3,956.6],[1640.7,953.6],[1645.9,951.0],[1651.3,949.1],[1656.7,947.8],[1662.3,947.0],[1668.0,946.9],[1672.3,946.8],[1675.2,946.8],[1676.6,946.7],[1676.6,946.7],[1677.5,947.4],[1679.3,948.9]],[[1555.1,986.2],[1558.8,988.6],[1561.7,991.1],[1563.8,993.7],[1565.2,996.5],[1565.7,999.4],[1565.7,1002.4],[1565.2,1005.3],[1564.1,1008.2],[1562.4,1011.2],[1559.9,1013.6],[1556.6,1015.6],[1552.5,1017.2],[1547.5,1018.2],[1543.1,1017.5],[1539.1,1015.1],[1535.7,1011.0],[1532.7,1005.2],[1531.0,1000.1],[1530.6,995.8],[1531.5,992.1],[1533.6,989.2],[1536.0,986.8],[1538.7,985.1],[1541.6,983.9],[1544.8,983.4],[1547.1,983.0],[1548.7,982.8],[1549.5,982.6],[1549.5,982.6],[1550.4,983.2],[1552.3,984.4]],[[1955.3,1006.3],[1960.2,1012.4],[1963.5,1018.0],[1965.1,1022.9],[1965.1,1027.4],[1963.4,1031.2],[1960.8,1034.1],[1957.3,1035.8],[1952.9,1036.6],[1947.5,1036.2],[1943.1,1035.3],[1939.4,1033.7],[1936.6,1031.5],[1934.6,1028.7],[1933.3,1025.2],[1932.7,1020.9],[1932.9,1015.8],[1933.8,1010.0],[1935.2,1005.4],[1937.3,1002.0],[1939.9,999.8],[1943.1,998.7],[1945.5,998.0],[1947.1,997.4],[1947.9,997.2],[1947.9,997.2],[1949.1,998.7],[1951.6,1001.7]],[[1679.3,1019.1],[1682.4,1022.0],[1684.1,1026.4],[1684.5,1032.5],[1683.6,1040.2],[1681.4,1049.5],[1678.1,1055.5],[1674.0,1058.1],[1668.8,1057.2],[1662.7,1053.0],[1658.3,1048.3],[1655.5,1043.0],[1654.5,1037.1],[1655.1,1030.8],[1656.7,1025.6],[1659.3,1021.6],[1663.0,1018.8],[1667.7,1017.3],[1671.2,1016.1],[1673.5,1015.3],[1674.7,1014.9],[1674.7,1014.9],[1675.5,1015.6],[1677.0,1017.0]],[[1829.9,987.8],[1835.7,993.9],[1841.9,997.5],[1848.5,998.5],[1855.6,996.9],[1863.2,992.9],[1870.3,990.3],[1877.1,989.4],[1883.4,990.1],[1889.4,992.3],[1893.6,995.6],[1896.1,1000.1],[1896.9,1005.7],[1896.0,1012.4],[1894.3,1018.2],[1891.8,1023.0],[1888.5,1027.0],[1884.4,1030.0],[1880.6,1033.6],[1877.1,1037.8],[1873.9,1042.6],[1870.9,1047.9],[1865.9,1051.0],[1859.0,1051.7],[1849.9,1050.2],[1838.9,1046.3],[1828.4,1044.2],[1818.5,1043.8],[1809.1,1045.3],[1800.3,1048.6],[1791.0,1049.3],[1781.3,1047.5],[1771.1,1043.3],[1760.4,1036.5],[1752.5,1030.2],[1747.4,1024.4],[1745.1,1019.0],[1745.5,1014.2],[1746.9,1009.6],[1749.3,1005.1],[1752.6,1000.9],[1756.9,996.9],[1763.7,993.2],[1773.1,989.6],[1785.0,986.3],[1799.5,983.3],[1810.4,981.0],[1817.6,979.5],[1821.3,978.7],[1821.3,978.7],[1822.7,980.2],[1825.6,983.3]],[[1756.9,1080.5],[1760.9,1083.2],[1764.0,1086.3],[1766.1,1089.9],[1767.4,1093.8],[1767.7,1098.1],[1767.0,1102.1],[1765.1,1105.8],[1762.2,1109.2],[1758.3,1112.3],[1754.2,1114.7],[1750.0,1116.4],[1745.8,1117.3],[1741.5,1117.5],[1737.8,1117.1],[1734.8,1116.0],[1732.5,1114.3],[1730.9,1112.0],[1729.8,1109.2],[1729.1,1106.1],[1729.0,1102.6],[1729.3,1098.7],[1730.0,1095.0],[1731.0,1091.5],[1732.3,1088.3],[1733.9,1085.4],[1736.0,1082.8],[1738.6,1080.8],[1741.7,1079.2],[1745.4,1078.1],[1748.1,1077.2],[1750.0,1076.7],[1750.9,1076.4],[1750.9,1076.4],[1751.9,1077.1],[1753.9,1078.4]],[[2142.2,1046.6],[2148.6,1052.7],[2156.1,1057.0],[2165.0,1059.5],[2175.0,1060.3],[2186.3,1059.2],[2194.9,1060.9],[2200.7,1065.4],[2203.8,1072.6],[2204.1,1082.6],[2201.7,1090.0],[2196.4,1094.8],[2188.4,1097.0],[2177.5,1096.6],[2168.1,1097.1],[2160.1,1098.6],[2153.5,1101.0],[2148.2,1104.4],[2143.5,1106.8],[2139.2,1108.3],[2135.3,1108.8],[2131.9,1108.3],[2129.1,1106.1],[2126.7,1102.1],[2124.9,1096.3],[2123.6,1088.8],[2121.7,1081.8],[2119.1,1075.4],[2115.9,1069.7],[2112.0,1064.5],[2109.6,1059.6],[2108.8,1054.8],[2109.6,1050.3],[2111.9,1046.0],[2114.7,1042.6],[2118.0,1040.2],[2121.8,1038.7],[2126.2,1038.2],[2129.5,1037.8],[2131.7,1037.5],[2132.8,1037.4],[2132.8,1037.4],[2134.4,1038.9],[2137.5,1042.0]],[[1436.3,1026.2],[1440.6,1029.2],[1444.5,1032.8],[1448.0,1037.2],[1451.3,1042.3],[1454.2,1048.1],[1458.8,1052.4],[1465.0,1055.0],[1472.9,1056.1],[1482.3,1055.7],[1490.0,1056.5],[1496.0,1058.7],[1500.1,1062.2],[1502.6,1067.1],[1503.7,1071.5],[1503.7,1075.4],[1502.4,1078.8],[1499.8,1081.7],[1496.5,1084.1],[1492.6,1086.1],[1487.9,1087.5],[1482.6,1088.5],[1478.0,1090.9],[1474.1,1094.8],[1471.0,1100.2],[1468.7,1107.0],[1466.4,1112.4],[1464.2,1116.4],[1462.1,1119.1],[1460.1,1120.4],[1457.8,1123.0],[1455.2,1127.0],[1452.3,1132.4],[1449.0,1139.1],[1446.7,1144.1],[1445.1,1147.3],[1444.4,1148.9],[1444.6,1148.6],[1443.1,1144.0],[1440.0,1134.8],[1435.2,1121.2],[1428.7,1103.1],[1423.7,1088.5],[1420.2,1077.3],[1418.0,1069.7],[1417.3,1065.6],[1417.7,1060.5],[1419.0,1054.3],[1421.4,1047.2],[1424.7,1039.0],[1427.2,1032.5],[1429.0,1027.9],[1429.8,1024.9],[1429.9,1023.7],[1430.0,1022.8],[1430.0,1022.2],[1430.0,1021.9],[1430.0,1021.9],[1431.1,1022.6],[1433.2,1024.1]],[[1930.9,1080.3],[1932.6,1081.7],[1937.5,1082.2],[1945.8,1081.9],[1957.5,1080.8],[1972.5,1078.9],[1984.3,1078.4],[1993.0,1079.3],[1998.5,1081.6],[2000.8,1085.4],[2002.4,1089.4],[2003.3,1093.6],[2003.5,1098.1],[2002.9,1102.8],[2000.2,1106.8],[1995.5,1110.0],[1988.7,1112.5],[1979.8,1114.2],[1972.3,1116.2],[1966.3,1118.5],[1961.8,1121.1],[1958.7,1124.1],[1953.4,1126.2],[1945.8,1127.5],[1935.9,1127.9],[1923.9,1127.5],[1914.4,1126.8],[1907.7,1125.6],[1903.5,1124.2],[1902.1,1122.3],[1901.2,1118.9],[1900.9,1113.9],[1901.2,1107.3],[1902.1,1099.1],[1904.3,1092.5],[1907.9,1087.3],[1912.8,1083.6],[1919.1,1081.5],[1923.8,1079.8],[1927.0,1078.8],[1928.5,1078.2],[1928.5,1078.2],[1928.9,1078.6],[1929.7,1079.3]],[[2291.9,2214.2],[2290.2,2213.7],[2288.6,2214.2],[2286.9,2215.7],[2285.2,2218.3],[2283.5,2222.0],[2281.5,2225.3],[2279.1,2228.4],[2276.4,2231.1],[2273.4,2233.5],[2270.0,2235.4],[2266.3,2236.6],[2262.3,2237.3],[2258.0,2237.4],[2254.4,2237.0],[2251.6,2236.3],[2249.5,2235.2],[2248.2,2233.6],[2248.4,2231.8],[2250.1,2229.7],[2253.3,2227.3],[2258.1,2224.6],[2263.4,2222.2],[2269.5,2220.1],[2276.1,2218.4],[2283.4,2217.0],[2288.9,2216.0],[2292.5,2215.3],[2294.3,2215.0],[2294.3,2215.0],[2293.9,2214.8],[2293.1,2214.6]],[[2334.7,2237.9],[2342.8,2239.0],[2349.3,2240.6],[2354.2,2242.8],[2357.5,2245.5],[2359.2,2248.8],[2358.4,2250.9],[2355.1,2252.0],[2349.3,2252.1],[2341.0,2251.0],[2333.7,2250.5],[2327.3,2250.5],[2321.9,2251.1],[2317.5,2252.2],[2314.4,2253.6],[2312.7,2255.4],[2312.3,2257.5],[2313.3,2259.9],[2313.8,2260.8],[2314.0,2260.0],[2313.8,2257.6],[2313.1,2253.6],[2313.3,2249.9],[2314.3,2246.5],[2316.1,2243.4],[2318.7,2240.5],[2320.6,2238.4],[2321.9,2237.0],[2322.6,2236.3],[2322.6,2236.3],[2324.6,2236.5],[2328.6,2237.1]],[[2280.9,2273.7],[2278.4,2269.7],[2276.5,2267.3],[2275.0,2266.5],[2273.9,2267.2],[2273.4,2269.7],[2272.0,2271.7],[2270.0,2273.4],[2267.2,2274.8],[2263.6,2275.8],[2259.3,2275.7],[2254.1,2274.7],[2248.1,2272.6],[2241.4,2269.5],[2238.4,2268.2],[2239.3,2268.6],[2243.9,2270.9],[2252.4,2274.8],[2259.9,2277.7],[2266.6,2279.6],[2272.3,2280.4],[2277.2,2280.2],[2280.8,2280.0],[2283.3,2279.9],[2284.5,2279.8],[2284.5,2279.8],[2283.9,2278.8],[2282.7,2276.8]],[[2208.5,2253.9],[2210.5,2255.9],[2211.6,2258.6],[2211.9,2261.9],[2211.4,2265.8],[2210.0,2270.4],[2208.2,2273.4],[2206.1,2274.7],[2203.5,2274.5],[2200.6,2272.6],[2198.2,2271.8],[2196.4,2272.0],[2195.2,2273.2],[2194.5,2275.5],[2193.1,2277.7],[2190.7,2279.9],[2187.6,2282.1],[2183.7,2284.3],[2179.5,2285.5],[2175.2,2285.7],[2170.8,2284.9],[2166.2,2283.2],[2164.5,2282.1],[2165.7,2281.6],[2169.8,2281.7],[2176.9,2282.3],[2181.2,2281.8],[2182.8,2280.1],[2181.7,2277.1],[2177.9,2273.0],[2175.4,2269.2],[2174.2,2265.7],[2174.3,2262.6],[2175.8,2259.9],[2178.6,2257.5],[2182.8,2255.5],[2188.3,2253.9],[2195.2,2252.7],[2200.4,2251.8],[2203.8,2251.2],[2205.5,2250.9],[2205.5,2250.9],[2206.0,2251.4],[2207.0,2252.4]],[[2153.1,2310.6],[2157.2,2314.1],[2159.4,2316.1],[2159.6,2316.7],[2158.0,2315.8],[2154.5,2313.5],[2151.3,2312.0],[2148.4,2311.4],[2145.9,2311.7],[2143.7,2312.8],[2141.2,2313.6],[2138.2,2314.1],[2134.8,2314.4],[2131.1,2314.4],[2127.3,2313.8],[2123.5,2312.6],[2119.7,2310.8],[2115.9,2308.4],[2113.9,2306.9],[2113.8,2306.4],[2115.6,2306.9],[2119.2,2308.3],[2123.4,2309.0],[2128.0,2309.1],[2133.1,2308.5],[2138.6,2307.3],[2142.8,2306.3],[2145.6,2305.7],[2147.0,2305.4],[2147.0,2305.4],[2148.0,2306.3],[2150.0,2308.0]],[[2300.5,2306.7],[2307.5,2308.1],[2312.7,2309.9],[2316.2,2311.9],[2317.9,2314.2],[2317.8,2316.8],[2316.9,2319.2],[2315.2,2321.6],[2312.6,2323.9],[2309.2,2326.0],[2307.3,2327.2],[2306.7,2327.6],[2307.5,2327.2],[2309.7,2325.9],[2313.1,2325.3],[2317.7,2325.5],[2323.5,2326.4],[2330.5,2328.1],[2335.4,2332.0],[2338.0,2337.9],[2338.4,2346.1],[2336.7,2356.3],[2334.8,2364.4],[2332.9,2370.3],[2330.7,2374.0],[2328.5,2375.5],[2326.0,2376.7],[2323.4,2377.6],[2320.6,2378.2],[2317.5,2378.5],[2314.3,2378.2],[2311.0,2377.2],[2307.6,2375.7],[2303.9,2373.6],[2298.9,2372.3],[2292.5,2371.9],[2284.7,2372.3],[2275.5,2373.5],[2267.5,2373.4],[2260.6,2372.0],[2254.8,2369.3],[2250.2,2365.3],[2244.9,2361.9],[2239.1,2359.2],[2232.6,2357.2],[2225.5,2355.8],[2221.5,2352.4],[2220.5,2346.8],[2222.6,2339.2],[2227.7,2329.6],[2231.9,2323.2],[2235.2,2320.3],[2237.7,2320.7],[2239.1,2324.4],[2240.9,2325.6],[2243.0,2324.3],[2245.3,2320.5],[2247.9,2314.1],[2250.5,2310.5],[2253.0,2309.7],[2255.6,2311.6],[2258.2,2316.3],[2260.3,2319.1],[2261.9,2320.0],[2263.1,2319.1],[2263.8,2316.3],[2264.9,2313.8],[2266.5,2311.6],[2268.4,2309.6],[2270.8,2307.9],[2273.5,2306.6],[2276.7,2305.7],[2280.2,2305.1],[2284.1,2304.8],[2287.1,2304.7],[2289.0,2304.5],[2290.0,2304.5],[2290.0,2304.5],[2291.8,2304.9],[2295.3,2305.6]],[[2317.6,2457.2],[2320.4,2459.5],[2322.3,2462.3],[2323.2,2465.6],[2323.3,2469.5],[2322.3,2473.9],[2320.9,2477.8],[2318.8,2481.0],[2316.1,2483.7],[2312.9,2485.8],[2309.2,2487.3],[2305.1,2488.3],[2300.5,2488.7],[2295.4,2488.5],[2291.1,2487.8],[2287.7,2486.6],[2285.1,2484.9],[2283.3,2482.6],[2282.2,2479.7],[2281.8,2476.2],[2282.1,2472.0],[2283.1,2467.3],[2285.7,2463.3],[2289.8,2460.1],[2295.4,2457.7],[2302.6,2456.1],[2308.0,2455.0],[2311.6,2454.2],[2313.4,2453.8],[2313.4,2453.8],[2314.1,2454.4],[2315.5,2455.5]],[[2149.0,2436.2],[2153.5,2441.6],[2158.6,2446.0],[2164.1,2449.2],[2170.0,2451.3],[2176.5,2452.4],[2182.1,2454.5],[2187.0,2457.8],[2191.0,2462.3],[2194.3,2467.9],[2196.1,2473.0],[2196.4,2477.7],[2195.3,2481.9],[2192.7,2485.6],[2189.2,2488.5],[2184.7,2490.7],[2179.3,2492.0],[2173.0,2492.5],[2166.4,2494.2],[2159.7,2497.0],[2152.7,2500.9],[2145.6,2505.9],[2138.3,2509.0],[2131.0,2510.0],[2123.6,2509.1],[2116.1,2506.2],[2110.3,2500.7],[2106.4,2492.8],[2104.2,2482.4],[2103.8,2469.4],[2104.4,2458.6],[2105.9,2449.7],[2108.5,2442.9],[2112.1,2438.1],[2116.3,2434.4],[2121.2,2431.6],[2126.7,2429.9],[2132.9,2429.1],[2137.5,2428.6],[2140.6,2428.2],[2142.1,2428.0],[2142.1,2428.0],[2143.3,2429.4],[2145.5,2432.1]],[[2273.7,2579.6],[2279.1,2583.5],[2283.3,2587.6],[2286.1,2591.8],[2287.6,2596.2],[2287.9,2600.7],[2287.5,2604.6],[2286.5,2607.9],[2284.9,2610.6],[2282.6,2612.7],[2279.4,2614.5],[2275.1,2616.0],[2269.7,2617.2],[2263.4,2618.1],[2257.3,2617.5],[2251.7,2615.3],[2246.4,2611.6],[2241.5,2606.3],[2237.9,2601.2],[2235.6,2596.3],[2234.6,2591.7],[2235.0,2587.3],[2235.7,2583.6],[2236.7,2580.5],[2238.1,2578.2],[2239.8,2576.5],[2242.5,2575.3],[2246.3,2574.4],[2251.1,2573.9],[2256.8,2573.9],[2261.2,2573.8],[2264.1,2573.8],[2265.5,2573.8],[2265.5,2573.8],[2266.9,2574.7],[2269.6,2576.7]],[[2274.3,2694.0],[2278.9,2698.1],[2283.7,2701.3],[2288.6,2703.8],[2293.6,2705.4],[2298.8,2706.3],[2303.8,2708.3],[2308.4,2711.4],[2312.7,2715.7],[2316.7,2721.1],[2319.7,2726.1],[2321.7,2730.6],[2322.7,2734.8],[2322.6,2738.5],[2321.5,2742.1],[2319.3,2745.4],[2316.1,2748.6],[2311.9,2751.6],[2308.7,2754.5],[2306.6,2757.4],[2305.5,2760.3],[2305.5,2763.1],[2306.7,2766.6],[2309.3,2770.8],[2313.1,2775.7],[2318.3,2781.2],[2321.3,2787.0],[2322.3,2793.0],[2321.2,2799.2],[2318.1,2805.6],[2314.2,2809.7],[2309.5,2811.5],[2304.1,2811.0],[2297.8,2808.2],[2291.7,2803.5],[2285.8,2797.2],[2280.0,2789.0],[2274.3,2779.1],[2270.0,2770.6],[2267.2,2763.5],[2265.8,2757.9],[2265.9,2753.7],[2263.7,2750.7],[2259.2,2748.9],[2252.5,2748.3],[2243.5,2748.9],[2237.2,2748.0],[2233.5,2745.6],[2232.5,2741.7],[2234.2,2736.2],[2235.2,2730.3],[2235.6,2724.1],[2235.3,2717.4],[2234.4,2710.4],[2234.6,2704.5],[2235.8,2699.7],[2238.0,2696.1],[2241.3,2693.6],[2245.0,2691.6],[2249.3,2690.1],[2254.1,2689.2],[2259.4,2688.7],[2263.4,2688.3],[2266.1,2688.1],[2267.4,2687.9],[2267.4,2687.9],[2268.5,2689.0],[2270.8,2691.0]],[[1046.4,2695.9],[1044.2,2709.7],[1045.1,2723.8],[1049.0,2738.3],[1055.9,2753.2],[1065.9,2768.4],[1072.2,2781.0],[1074.8,2790.9],[1073.6,2798.1],[1068.7,2802.6],[1065.0,2807.4],[1062.7,2812.5],[1061.7,2817.8],[1062.0,2823.4],[1063.8,2829.0],[1066.9,2834.7],[1071.5,2840.3],[1077.6,2846.0],[1082.8,2852.4],[1087.2,2859.5],[1090.8,2867.4],[1093.6,2875.9],[1095.1,2883.0],[1095.3,2888.5],[1094.2,2892.5],[1091.8,2895.0],[1085.8,2894.3],[1076.3,2890.4],[1063.3,2883.3],[1046.7,2872.9],[1033.9,2863.6],[1024.8,2855.4],[1019.4,2848.2],[1017.8,2842.1],[1015.4,2835.8],[1012.5,2829.5],[1008.8,2823.1],[1004.5,2816.6],[1002.1,2810.1],[1001.8,2803.8],[1003.5,2797.6],[1007.1,2791.4],[1009.8,2788.7],[1011.5,2789.3],[1012.3,2793.4],[1012.0,2800.9],[1011.1,2804.4],[1009.5,2803.8],[1007.2,2799.1],[1004.2,2790.4],[1002.0,2783.1],[1000.4,2777.2],[999.7,2772.7],[999.6,2769.7],[999.1,2767.4],[998.4,2765.8],[997.2,2765.0],[995.7,2764.9],[994.3,2765.4],[993.0,2766.6],[991.8,2768.5],[990.7,2770.9],[990.1,2771.8],[990.0,2771.1],[990.4,2768.8],[991.2,2765.0],[991.7,2761.5],[991.9,2758.4],[991.7,2755.7],[991.1,2753.3],[989.9,2750.5],[987.9,2747.0],[985.2,2743.0],[981.8,2738.4],[979.7,2736.1],[979.0,2736.1],[979.6,2738.4],[981.4,2743.0],[980.9,2745.9],[978.0,2747.0],[972.8,2746.4],[965.1,2744.1],[958.4,2742.4],[952.6,2741.4],[947.8,2741.0],[943.9,2741.2],[939.7,2741.1],[935.3,2740.6],[930.6,2739.8],[925.6,2738.6],[920.9,2741.0],[916.3,2746.9],[912.0,2756.4],[907.8,2769.5],[904.3,2780.0],[901.5,2787.9],[899.4,2793.1],[897.9,2795.8],[895.8,2798.5],[892.9,2801.1],[889.3,2803.8],[885.0,2806.4],[881.5,2807.9],[878.9,2808.3],[877.1,2807.4],[876.2,2805.4],[876.0,2801.1],[876.5,2794.5],[877.8,2785.5],[879.8,2774.2],[880.4,2764.0],[879.7,2754.8],[877.5,2746.6],[873.9,2739.5],[871.4,2733.0],[869.9,2727.2],[869.3,2722.0],[869.8,2717.4],[869.6,2714.9],[868.7,2714.5],[867.1,2716.1],[864.8,2719.8],[860.3,2724.0],[853.7,2728.5],[844.8,2733.5],[833.9,2738.9],[825.2,2740.3],[818.9,2737.6],[814.9,2730.8],[813.3,2720.0],[812.8,2711.5],[813.6,2705.2],[815.6,2701.2],[818.8,2699.5],[821.2,2697.5],[822.7,2695.2],[823.4,2692.6],[823.3,2689.6],[822.0,2685.8],[819.3,2681.1],[815.5,2675.4],[810.4,2668.9],[807.3,2663.0],[806.4,2657.9],[807.5,2653.4],[810.7,2649.6],[812.8,2645.8],[813.8,2642.0],[813.7,2638.1],[812.5,2634.1],[812.1,2630.6],[812.5,2627.6],[813.8,2624.9],[815.9,2622.8],[817.9,2621.8],[819.9,2622.0],[821.7,2623.5],[823.4,2626.2],[825.8,2627.8],[828.8,2628.4],[832.5,2628.0],[836.8,2626.5],[840.0,2625.3],[842.1,2624.3],[843.1,2623.5],[843.0,2622.9],[842.4,2621.8],[841.3,2620.0],[839.9,2617.6],[837.9,2614.7],[836.7,2612.0],[836.3,2609.6],[836.6,2607.5],[837.6,2605.7],[838.8,2604.4],[840.0,2603.6],[841.4,2603.3],[842.8,2603.6],[843.8,2603.4],[844.2,2602.9],[844.2,2602.0],[843.7,2600.6],[843.1,2598.9],[842.4,2596.9],[841.6,2594.4],[840.6,2591.6],[839.9,2588.4],[839.4,2584.9],[839.3,2580.9],[839.4,2576.5],[839.2,2572.7],[838.8,2569.4],[838.1,2566.7],[837.2,2564.4],[836.7,2561.7],[836.8,2558.5],[837.3,2554.7],[838.4,2550.5],[839.3,2546.7],[840.1,2543.4],[840.8,2540.6],[841.4,2538.2],[841.9,2535.6],[842.2,2532.6],[842.5,2529.4],[842.6,2525.8],[841.2,2522.5],[838.3,2519.3],[833.8,2516.4],[827.9,2513.6],[823.0,2513.2],[819.3,2515.1],[816.6,2519.5],[815.1,2526.1],[814.3,2532.1],[814.3,2537.4],[815.2,2542.1],[816.8,2546.1],[815.3,2549.7],[810.7,2552.9],[803.1,2555.8],[792.4,2558.2],[784.1,2561.4],[778.2,2565.4],[774.7,2570.1],[773.7,2575.6],[771.3,2579.9],[767.4,2583.0],[762.0,2585.0],[755.2,2585.7],[750.0,2587.6],[746.4,2590.7],[744.4,2595.0],[744.0,2600.4],[743.0,2605.0],[741.5,2608.5],[739.5,2611.1],[737.0,2612.8],[734.6,2614.9],[732.4,2617.6],[730.4,2620.8],[728.6,2624.4],[726.8,2627.3],[725.1,2629.5],[723.3,2630.8],[721.6,2631.4],[719.9,2632.7],[718.1,2634.6],[716.3,2637.1],[714.4,2640.3],[712.4,2643.0],[710.2,2645.2],[707.9,2646.8],[705.5,2648.0],[701.4,2649.0],[695.7,2649.9],[688.3,2650.8],[679.4,2651.5],[672.5,2651.7],[667.8,2651.5],[665.1,2650.8],[664.6,2649.7],[665.5,2646.6],[667.8,2641.5],[671.6,2634.5],[676.9,2625.6],[679.2,2617.5],[678.6,2610.1],[675.0,2603.6],[668.5,2597.9],[664.1,2591.9],[661.9,2585.5],[661.8,2578.7],[664.0,2571.6],[664.4,2565.0],[663.1,2558.8],[660.0,2553.2],[655.3,2548.0],[651.4,2543.1],[648.4,2538.4],[646.2,2533.9],[644.9,2529.7],[644.3,2525.7],[644.5,2521.7],[645.5,2517.9],[647.3,2514.2],[647.8,2510.0],[647.0,2505.3],[645.1,2500.1],[641.8,2494.4],[640.5,2489.0],[641.2,2483.7],[643.8,2478.6],[648.3,2473.7],[650.7,2468.6],[650.9,2463.2],[649.0,2457.6],[644.9,2451.7],[641.9,2444.6],[640.0,2436.3],[639.0,2426.9],[639.1,2416.2],[640.2,2407.2],[642.2,2399.7],[645.1,2393.8],[648.9,2389.5],[650.4,2383.5],[649.4,2375.7],[646.0,2366.3],[640.2,2355.1],[636.4,2346.3],[634.6,2339.8],[634.8,2335.7],[637.0,2333.9],[640.4,2332.4],[645.0,2331.3],[650.9,2330.5],[657.9,2330.1],[663.5,2329.0],[667.7,2327.4],[670.5,2325.2],[671.9,2322.5],[671.6,2319.8],[669.6,2317.2],[665.9,2314.6],[660.6,2312.2],[655.0,2309.7],[649.3,2307.1],[643.3,2304.5],[637.1,2301.8],[631.7,2298.7],[627.0,2295.2],[623.1,2291.3],[619.9,2286.9],[617.9,2282.5],[617.2,2278.3],[617.6,2274.0],[619.3,2269.8],[622.2,2266.5],[626.3,2264.0],[631.6,2262.4],[638.0,2261.6],[644.1,2259.5],[649.9,2256.0],[655.3,2251.3],[660.3,2245.2],[663.7,2237.2],[665.3,2227.5],[665.2,2216.0],[663.3,2202.6],[664.3,2191.7],[668.0,2183.3],[674.5,2177.2],[683.9,2173.6],[691.2,2170.2],[696.6,2167.0],[700.1,2164.1],[701.6,2161.4],[702.3,2158.0],[702.0,2154.0],[700.9,2149.3],[699.0,2144.0],[696.4,2138.8],[693.3,2133.7],[689.6,2128.6],[685.3,2123.6],[682.8,2117.5],[682.3,2110.3],[683.6,2102.1],[686.8,2092.8],[693.4,2085.9],[703.3,2081.6],[716.5,2079.7],[733.1,2080.4],[745.9,2079.6],[755.0,2077.6],[760.3,2074.2],[761.9,2069.4],[762.3,2064.2],[761.4,2058.6],[759.3,2052.5],[755.9,2046.0],[753.6,2039.1],[752.3,2032.0],[751.9,2024.5],[752.6,2016.7],[752.6,2009.1],[751.9,2001.6],[750.5,1994.2],[748.4,1986.9],[748.6,1978.8],[751.2,1969.9],[756.2,1960.0],[763.6,1949.3],[769.4,1938.4],[773.7,1927.3],[776.3,1916.1],[777.3,1904.7],[777.2,1893.3],[776.0,1881.8],[773.6,1870.4],[770.1,1859.1],[771.2,1850.5],[776.8,1844.9],[787.1,1842.0],[801.9,1842.1],[815.0,1842.2],[826.3,1842.2],[835.9,1842.3],[843.7,1842.4],[851.0,1842.0],[857.8,1841.2],[864.2,1839.9],[870.1,1838.2],[873.2,1836.6],[873.5,1835.0],[870.9,1833.6],[865.6,1832.2],[861.2,1830.7],[857.9,1829.0],[855.5,1827.1],[854.2,1825.0],[854.2,1822.3],[855.7,1818.9],[858.5,1814.9],[862.8,1810.3],[866.4,1805.6],[869.4,1800.9],[871.9,1796.2],[873.7,1791.4],[874.2,1787.4],[873.6,1784.2],[871.7,1781.8],[868.6,1780.2],[864.6,1779.9],[859.4,1780.7],[853.3,1782.8],[846.2,1786.1],[839.7,1788.3],[833.7,1789.4],[828.4,1789.4],[823.7,1788.3],[820.8,1785.8],[819.7,1782.1],[820.5,1777.1],[823.2,1770.8],[823.6,1764.9],[821.7,1759.5],[817.6,1754.4],[811.2,1749.7],[806.9,1743.3],[804.7,1735.1],[804.5,1725.2],[806.5,1713.5],[806.8,1704.5],[805.7,1698.1],[803.0,1694.3],[798.7,1693.1],[795.1,1691.4],[792.1,1689.0],[789.8,1686.0],[788.1,1682.4],[786.6,1677.3],[785.4,1670.5],[784.4,1662.2],[783.7,1652.3],[782.8,1639.7],[781.9,1624.4],[780.9,1606.4],[779.8,1585.7],[780.0,1568.5],[781.5,1554.6],[784.4,1544.1],[788.5,1537.0],[789.2,1530.8],[786.5,1525.5],[780.3,1521.0],[770.6,1517.4],[762.8,1511.6],[756.7,1503.5],[752.5,1493.2],[750.1,1480.6],[750.1,1471.0],[752.7,1464.4],[757.6,1460.8],[765.1,1460.2],[771.2,1459.2],[776.1,1457.8],[779.6,1456.0],[781.8,1453.9],[784.4,1452.3],[787.3,1451.2],[790.6,1450.8],[794.3,1450.9],[798.2,1451.9],[802.3,1453.9],[806.6,1456.7],[811.1,1460.4],[816.9,1463.3],[824.1,1465.4],[832.6,1466.8],[842.4,1467.4],[850.9,1467.0],[858.2,1465.5],[864.2,1463.0],[868.9,1459.5],[873.2,1457.4],[877.3,1456.6],[881.0,1457.3],[884.4,1459.4],[887.6,1462.0],[890.4,1465.1],[892.9,1468.7],[895.2,1472.9],[898.3,1476.5],[902.2,1479.7],[907.0,1482.3],[912.6,1484.3],[918.0,1487.2],[923.2,1490.9],[928.2,1495.4],[933.0,1500.7],[937.7,1504.3],[942.4,1506.1],[946.9,1506.2],[951.4,1504.6],[956.2,1504.8],[961.4,1506.6],[967.0,1510.3],[973.1,1515.7],[978.7,1518.4],[984.0,1518.5],[988.9,1516.0],[993.4,1510.9],[997.4,1509.1],[1001.0,1510.7],[1004.0,1515.6],[1006.6,1523.9],[1008.2,1530.8],[1008.9,1536.3],[1008.7,1540.5],[1007.5,1543.2],[1007.0,1546.8],[1007.1,1551.1],[1007.8,1556.2],[1009.1,1562.1],[1009.6,1567.6],[1009.3,1572.7],[1008.3,1577.3],[1006.4,1581.4],[1005.4,1584.8],[1005.3,1587.4],[1006.1,1589.3],[1007.7,1590.3],[1010.5,1590.5],[1014.6,1589.8],[1019.9,1588.3],[1026.4,1585.9],[1033.0,1584.4],[1039.8,1583.9],[1046.8,1584.3],[1053.9,1585.7],[1059.0,1585.1],[1062.2,1582.6],[1063.3,1578.2],[1062.4,1571.8],[1062.3,1566.5],[1062.9,1562.4],[1064.3,1559.5],[1066.4,1557.7],[1067.9,1555.3],[1068.9,1552.3],[1069.4,1548.6],[1069.4,1544.4],[1069.9,1540.7],[1071.2,1537.6],[1073.0,1535.1],[1075.5,1533.1],[1077.1,1530.8],[1077.8,1528.1],[1077.5,1525.1],[1076.4,1521.6],[1075.8,1519.0],[1075.9,1517.2],[1076.6,1516.2],[1077.9,1516.0],[1079.3,1516.0],[1080.8,1516.3],[1082.3,1516.8],[1084.0,1517.6],[1085.6,1519.2],[1087.4,1521.8],[1089.1,1525.3],[1091.0,1529.7],[1092.7,1533.3],[1094.2,1536.2],[1095.6,1538.2],[1096.8,1539.5],[1098.3,1540.1],[1100.2,1540.0],[1102.3,1539.2],[1104.8,1537.8],[1105.8,1537.7],[1105.4,1538.7],[1103.5,1541.0],[1100.2,1544.6],[1098.1,1548.1],[1097.4,1551.4],[1097.9,1554.7],[1099.8,1557.9],[1101.5,1560.0],[1103.2,1561.0],[1104.8,1561.0],[1106.2,1559.8],[1108.0,1557.7],[1110.1,1554.6],[1112.5,1550.6],[1115.1,1545.5],[1116.9,1541.5],[1117.9,1538.6],[1118.1,1536.7],[1117.5,1535.9],[1118.3,1536.3],[1120.6,1537.9],[1124.3,1540.7],[1129.6,1544.7],[1134.0,1549.2],[1137.7,1554.2],[1140.6,1559.6],[1142.8,1565.6],[1146.2,1570.5],[1150.9,1574.2],[1156.8,1576.8],[1164.0,1578.3],[1170.3,1578.8],[1175.7,1578.4],[1180.2,1577.0],[1183.9,1574.7],[1186.6,1571.5],[1188.5,1567.5],[1189.6,1562.8],[1189.7,1557.2],[1191.2,1552.3],[1193.8,1547.9],[1197.7,1544.1],[1202.9,1540.9],[1208.1,1538.9],[1213.4,1538.0],[1218.7,1538.3],[1224.0,1539.8],[1229.0,1542.3],[1233.7,1545.8],[1238.0,1550.4],[1242.0,1556.1],[1246.5,1560.9],[1251.7,1564.9],[1257.5,1568.2],[1263.9,1570.6],[1269.7,1572.4],[1275.1,1573.6],[1279.9,1574.1],[1284.2,1574.0],[1288.3,1572.5],[1292.2,1569.6],[1296.0,1565.4],[1299.5,1559.7],[1303.8,1555.2],[1309.0,1551.9],[1315.0,1549.7],[1321.7,1548.8],[1327.9,1548.7],[1333.5,1549.5],[1338.6,1551.2],[1343.0,1553.7],[1348.9,1554.2],[1356.2,1552.7],[1364.9,1549.1],[1375.0,1543.5],[1385.2,1537.5],[1395.5,1531.1],[1405.8,1524.4],[1416.3,1517.2],[1424.3,1511.2],[1429.8,1506.3],[1433.0,1502.5],[1433.7,1499.9],[1436.2,1496.4],[1440.6,1492.0],[1446.8,1486.7],[1454.8,1480.6],[1462.1,1477.1],[1468.7,1476.3],[1474.5,1478.1],[1479.6,1482.5],[1484.9,1486.3],[1490.4,1489.5],[1496.1,1492.1],[1502.0,1494.1],[1506.6,1494.4],[1509.9,1493.1],[1511.8,1490.0],[1512.4,1485.3],[1513.4,1481.4],[1514.9,1478.3],[1516.8,1476.1],[1519.2,1474.7],[1522.9,1476.2],[1528.0,1480.4],[1534.4,1487.5],[1542.1,1497.3],[1548.2,1504.6],[1552.5,1509.4],[1555.0,1511.7],[1555.9,1511.4],[1556.7,1511.5],[1557.5,1512.0],[1558.1,1512.8],[1558.8,1514.1],[1559.5,1515.0],[1560.5,1515.7],[1561.6,1516.0],[1562.8,1516.0],[1564.4,1517.0],[1566.3,1519.0],[1568.6,1522.1],[1571.1,1526.2],[1572.6,1528.2],[1573.0,1528.0],[1572.3,1525.7],[1570.5,1521.3],[1569.9,1517.8],[1570.4,1515.1],[1572.1,1513.2],[1574.9,1512.1],[1577.1,1509.8],[1578.6,1506.3],[1579.5,1501.5],[1579.7,1495.4],[1580.3,1490.5],[1581.4,1486.7],[1582.9,1483.9],[1584.8,1482.3],[1589.0,1481.7],[1595.4,1482.0],[1604.1,1483.3],[1614.9,1485.6],[1624.1,1486.5],[1631.6,1486.0],[1637.5,1484.0],[1641.8,1480.7],[1644.9,1476.8],[1646.8,1472.4],[1647.6,1467.5],[1647.3,1462.0],[1648.3,1457.1],[1650.6,1452.6],[1654.3,1448.6],[1659.4,1445.1],[1661.8,1439.4],[1661.7,1431.7],[1659.0,1421.8],[1653.8,1409.8],[1651.6,1399.0],[1652.5,1389.4],[1656.5,1381.0],[1663.5,1373.8],[1669.4,1368.7],[1674.2,1365.6],[1677.9,1364.5],[1680.4,1365.5],[1681.4,1363.1],[1680.9,1357.1],[1678.9,1347.7],[1675.4,1334.9],[1673.5,1324.8],[1673.4,1317.4],[1674.9,1312.9],[1678.2,1311.1],[1681.5,1308.3],[1684.9,1304.4],[1688.3,1299.4],[1691.8,1293.4],[1695.7,1288.6],[1700.1,1285.1],[1704.9,1282.8],[1710.1,1281.8],[1714.0,1282.1],[1716.6,1283.6],[1717.9,1286.4],[1717.8,1290.5],[1718.3,1294.2],[1719.2,1297.4],[1720.7,1300.2],[1722.6,1302.5],[1723.7,1304.7],[1724.0,1306.9],[1723.4,1308.9],[1722.0,1310.9],[1722.2,1315.8],[1724.1,1323.7],[1727.7,1334.6],[1733.0,1348.4],[1737.4,1359.1],[1740.8,1366.5],[1743.3,1370.8],[1744.9,1372.0],[1746.3,1371.8],[1747.6,1370.2],[1748.7,1367.3],[1749.7,1363.0],[1750.7,1357.8],[1751.8,1351.5],[1752.9,1344.3],[1754.2,1336.1],[1755.5,1329.3],[1756.9,1323.7],[1758.5,1319.5],[1760.2,1316.5],[1761.4,1312.9],[1762.2,1308.4],[1762.6,1303.2],[1762.4,1297.2],[1763.1,1291.6],[1764.7,1286.5],[1767.1,1281.8],[1770.3,1277.5],[1772.9,1274.1],[1775.0,1271.7],[1776.5,1270.3],[1777.5,1269.8],[1778.5,1270.3],[1779.7,1271.7],[1780.9,1274.0],[1782.3,1277.3],[1784.3,1279.9],[1787.0,1282.0],[1790.3,1283.4],[1794.3,1284.3],[1797.3,1285.4],[1799.3,1286.8],[1800.4,1288.5],[1800.4,1290.5],[1801.0,1291.5],[1802.1,1291.5],[1803.7,1290.5],[1805.8,1288.5],[1809.2,1287.4],[1813.9,1287.1],[1819.9,1287.8],[1827.1,1289.3],[1835.5,1288.9],[1844.9,1286.5],[1855.4,1282.2],[1866.9,1275.9],[1876.6,1271.6],[1884.4,1269.1],[1890.3,1268.5],[1894.3,1269.9],[1898.9,1270.7],[1904.0,1270.9],[1909.7,1270.6],[1916.0,1269.8],[1920.4,1272.4],[1923.0,1278.3],[1923.7,1287.6],[1922.6,1300.2],[1922.5,1310.3],[1923.4,1317.8],[1925.2,1322.8],[1928.1,1325.1],[1930.0,1327.9],[1930.9,1331.1],[1930.8,1334.8],[1929.8,1339.0],[1928.4,1343.1],[1926.8,1347.3],[1924.8,1351.5],[1922.6,1355.7],[1919.7,1359.1],[1916.1,1361.6],[1912.0,1363.3],[1907.2,1364.1],[1901.8,1367.3],[1895.8,1373.0],[1889.2,1381.2],[1882.0,1391.7],[1876.6,1401.0],[1873.2,1409.1],[1871.5,1415.8],[1871.8,1421.3],[1872.6,1426.4],[1874.0,1430.9],[1876.0,1435.0],[1878.5,1438.6],[1881.5,1441.8],[1884.7,1444.4],[1888.4,1446.6],[1892.4,1448.4],[1895.8,1450.9],[1898.7,1454.3],[1900.9,1458.6],[1902.5,1463.7],[1904.4,1468.1],[1906.5,1472.0],[1908.8,1475.2],[1911.4,1477.8],[1913.0,1481.1],[1913.8,1485.2],[1913.6,1490.1],[1912.5,1495.8],[1912.1,1500.6],[1912.5,1504.5],[1913.7,1507.5],[1915.6,1509.7],[1917.1,1512.3],[1918.0,1515.2],[1918.5,1518.4],[1918.5,1522.0],[1917.2,1524.6],[1914.7,1526.3],[1910.8,1527.1],[1905.6,1526.9],[1901.1,1527.9],[1897.2,1530.0],[1894.1,1533.3],[1891.6,1537.7],[1888.8,1540.9],[1885.8,1542.7],[1882.4,1543.4],[1878.8,1542.7],[1875.3,1541.5],[1871.7,1539.8],[1868.1,1537.6],[1864.6,1534.9],[1860.3,1532.4],[1855.3,1530.4],[1849.5,1528.7],[1843.0,1527.3],[1838.4,1527.4],[1835.8,1528.9],[1835.1,1531.9],[1836.4,1536.3],[1836.6,1540.6],[1835.9,1544.9],[1834.1,1549.2],[1831.4,1553.4],[1827.4,1556.4],[1822.3,1558.3],[1815.9,1559.0],[1808.4,1558.6],[1802.4,1559.4],[1797.9,1561.5],[1794.8,1564.8],[1793.2,1569.4],[1793.5,1573.6],[1795.7,1577.3],[1799.7,1580.7],[1805.6,1583.6],[1810.7,1588.5],[1815.1,1595.6],[1818.8,1604.7],[1821.7,1615.9],[1825.0,1624.3],[1828.7,1629.8],[1832.8,1632.6],[1837.2,1632.6],[1843.3,1635.7],[1851.0,1641.7],[1860.4,1650.8],[1871.4,1662.9],[1880.8,1677.3],[1888.6,1694.0],[1894.9,1712.9],[1899.5,1734.2],[1901.7,1751.3],[1901.6,1764.4],[1899.1,1773.4],[1894.2,1778.4],[1890.4,1783.2],[1887.7,1787.8],[1886.1,1792.2],[1885.6,1796.5],[1886.4,1800.7],[1888.4,1804.9],[1891.8,1809.0],[1896.5,1813.1],[1900.2,1816.8],[1902.8,1820.2],[1904.3,1823.2],[1904.7,1825.9],[1903.9,1828.7],[1901.8,1831.6],[1898.3,1834.7],[1893.6,1837.8],[1890.1,1840.0],[1888.0,1841.3],[1887.1,1841.5],[1887.6,1840.9],[1890.6,1839.1],[1896.1,1836.4],[1904.2,1832.6],[1914.8,1827.7],[1923.0,1824.6],[1928.7,1823.1],[1932.0,1823.4],[1932.9,1825.3],[1934.1,1826.8],[1935.7,1827.9],[1937.5,1828.6],[1939.7,1828.7],[1942.6,1828.3],[1946.2,1827.2],[1950.4,1825.5],[1955.4,1823.1],[1960.1,1821.3],[1964.4,1820.0],[1968.4,1819.3],[1972.1,1819.2],[1974.1,1820.6],[1974.2,1823.5],[1972.6,1828.0],[1969.2,1834.0],[1967.9,1838.8],[1968.5,1842.3],[1971.2,1844.7],[1975.9,1845.8],[1979.8,1847.5],[1982.8,1849.8],[1984.9,1852.6],[1986.1,1856.1],[1987.2,1861.7],[1988.1,1869.3],[1988.9,1879.1],[1989.6,1891.0],[1989.4,1900.7],[1988.4,1908.5],[1986.6,1914.1],[1983.9,1917.6],[1981.7,1922.0],[1979.9,1927.3],[1978.6,1933.4],[1977.8,1940.3],[1978.7,1945.8],[1981.3,1949.8],[1985.6,1952.4],[1991.6,1953.5],[1996.1,1955.6],[1999.0,1958.5],[2000.5,1962.3],[2000.5,1967.1],[2001.7,1971.2],[2004.2,1974.6],[2008.0,1977.4],[2013.0,1979.6],[2017.4,1982.9],[2021.2,1987.3],[2024.3,1992.8],[2026.7,1999.4],[2030.5,2005.0],[2035.5,2009.5],[2041.8,2013.0],[2049.4,2015.5],[2053.9,2019.5],[2055.1,2025.1],[2053.2,2032.2],[2048.2,2040.9],[2045.3,2048.7],[2044.6,2055.7],[2046.0,2061.9],[2049.6,2067.2],[2052.7,2074.3],[2055.3,2083.3],[2057.4,2094.0],[2059.1,2106.6],[2059.4,2116.6],[2058.3,2124.1],[2055.8,2128.9],[2052.0,2131.1],[2047.0,2132.7],[2040.7,2133.7],[2033.3,2134.0],[2024.6,2133.6],[2017.0,2136.1],[2010.4,2141.3],[2004.7,2149.4],[2000.1,2160.3],[1995.9,2168.0],[1992.3,2172.6],[1989.1,2173.9],[1986.4,2172.0],[1983.5,2169.3],[1980.4,2165.7],[1977.0,2161.2],[1973.4,2155.9],[1970.1,2151.6],[1967.2,2148.1],[1964.7,2145.6],[1962.6,2143.9],[1959.8,2142.4],[1956.3,2140.9],[1952.2,2139.4],[1947.3,2138.0],[1942.9,2137.3],[1939.1,2137.3],[1935.8,2138.0],[1932.9,2139.4],[1929.6,2138.7],[1925.8,2135.7],[1921.6,2130.6],[1916.8,2123.3],[1912.7,2117.6],[1909.2,2113.6],[1906.3,2111.3],[1904.1,2110.6],[1901.8,2111.1],[1899.5,2112.7],[1897.1,2115.5],[1894.7,2119.4],[1891.0,2120.8],[1886.1,2119.7],[1880.0,2116.2],[1872.6,2110.1],[1866.4,2107.2],[1861.5,2107.5],[1857.8,2110.8],[1855.3,2117.3],[1852.3,2123.1],[1848.7,2128.3],[1844.4,2132.7],[1839.6,2136.5],[1835.9,2141.9],[1833.3,2148.9],[1831.8,2157.5],[1831.5,2167.7],[1828.8,2177.2],[1823.6,2186.2],[1816.0,2194.6],[1806.1,2202.3],[1795.9,2208.6],[1785.7,2213.3],[1775.3,2216.6],[1764.8,2218.3],[1756.7,2221.2],[1751.0,2225.1],[1747.8,2230.2],[1746.9,2236.5],[1747.5,2242.2],[1749.5,2247.5],[1753.0,2252.3],[1757.8,2256.6],[1761.2,2261.5],[1763.0,2267.1],[1763.3,2273.3],[1762.0,2280.3],[1761.6,2285.5],[1762.0,2288.9],[1763.3,2290.7],[1765.4,2290.7],[1768.2,2290.1],[1771.7,2288.8],[1775.9,2286.8],[1780.9,2284.1],[1785.3,2282.2],[1789.0,2281.1],[1792.2,2280.7],[1794.7,2281.2],[1795.1,2283.0],[1793.3,2286.1],[1789.5,2290.5],[1783.5,2296.2],[1778.0,2301.1],[1773.1,2305.2],[1768.7,2308.4],[1764.9,2310.9],[1764.5,2312.7],[1767.7,2313.7],[1774.4,2314.1],[1784.5,2313.7],[1793.7,2313.4],[1801.7,2313.3],[1808.7,2313.3],[1814.6,2313.3],[1819.1,2314.5],[1822.3,2316.8],[1824.0,2320.2],[1824.5,2324.7],[1826.0,2328.5],[1828.6,2331.6],[1832.2,2334.0],[1837.0,2335.7],[1840.1,2339.0],[1841.5,2343.7],[1841.4,2349.9],[1839.5,2357.6],[1838.6,2363.9],[1838.5,2368.7],[1839.2,2372.0],[1840.9,2373.8],[1843.7,2375.0],[1847.8,2375.4],[1853.0,2375.1],[1859.4,2374.1],[1865.0,2373.8],[1869.6,2374.3],[1873.3,2375.5],[1876.1,2377.4],[1878.0,2380.4],[1878.9,2384.5],[1878.9,2389.7],[1877.9,2396.0],[1876.9,2401.3],[1875.8,2405.8],[1874.8,2409.4],[1873.7,2412.0],[1871.7,2414.3],[1868.8,2416.1],[1865.0,2417.6],[1860.3,2418.6],[1855.1,2418.7],[1849.4,2417.9],[1843.3,2416.3],[1836.7,2413.8],[1833.6,2411.7],[1834.0,2410.2],[1838.0,2409.2],[1845.4,2408.7],[1850.7,2409.1],[1853.6,2410.5],[1854.4,2412.9],[1852.9,2416.2],[1852.2,2419.4],[1852.4,2422.6],[1853.4,2425.8],[1855.1,2428.9],[1855.7,2432.5],[1855.2,2436.7],[1853.4,2441.4],[1850.4,2446.7],[1848.5,2451.4],[1847.7,2455.6],[1848.1,2459.4],[1849.5,2462.6],[1849.1,2466.6],[1846.9,2471.4],[1842.9,2477.0],[1837.1,2483.4],[1834.3,2488.7],[1834.4,2493.0],[1837.6,2496.2],[1843.8,2498.3],[1848.1,2500.5],[1850.6,2502.8],[1851.2,2505.1],[1850.0,2507.4],[1847.6,2509.4],[1844.0,2511.2],[1839.3,2512.6],[1833.5,2513.8],[1828.1,2514.6],[1823.0,2515.0],[1818.3,2515.2],[1814.1,2515.0],[1807.1,2514.8],[1797.6,2514.6],[1785.4,2514.5],[1770.5,2514.4],[1760.0,2515.0],[1753.9,2516.3],[1752.1,2518.3],[1754.7,2521.0],[1756.6,2524.9],[1757.8,2529.8],[1758.4,2535.9],[1758.4,2543.1],[1760.3,2549.9],[1764.2,2556.5],[1770.1,2562.6],[1778.0,2568.5],[1784.8,2574.1],[1790.7,2579.7],[1795.5,2585.1],[1799.2,2590.4],[1801.6,2597.4],[1802.7,2606.2],[1802.4,2616.6],[1800.7,2628.8],[1800.3,2639.9],[1801.1,2649.8],[1803.3,2658.6],[1806.6,2666.2],[1805.9,2673.9],[1800.9,2681.8],[1791.7,2689.7],[1778.4,2697.8],[1767.0,2703.7],[1757.5,2707.4],[1749.9,2708.9],[1744.2,2708.4],[1737.8,2701.1],[1730.8,2687.2],[1723.2,2666.7],[1714.8,2639.5],[1706.9,2620.3],[1699.3,2609.0],[1692.1,2605.7],[1685.2,2610.3],[1680.4,2613.4],[1677.7,2615.0],[1677.0,2615.1],[1678.3,2613.8],[1678.6,2612.8],[1677.7,2612.3],[1675.8,2612.3],[1672.7,2612.7],[1669.0,2614.4],[1664.6,2617.4],[1659.6,2621.6],[1653.9,2627.2],[1648.7,2630.6],[1644.0,2631.6],[1639.8,2630.5],[1636.0,2627.0],[1633.3,2623.3],[1631.6,2619.4],[1631.0,2615.2],[1631.3,2610.7],[1631.4,2608.7],[1631.1,2609.2],[1630.4,2612.2],[1629.5,2617.6],[1628.7,2624.3],[1628.3,2632.4],[1628.0,2641.8],[1628.0,2652.6],[1627.6,2662.3],[1626.9,2671.0],[1625.9,2678.6],[1624.5,2685.1],[1627.0,2694.7],[1633.4,2707.2],[1643.7,2722.8],[1657.9,2741.4],[1668.1,2756.0],[1674.3,2766.6],[1676.5,2773.2],[1674.6,2775.9],[1672.1,2776.0],[1668.9,2773.8],[1665.0,2769.1],[1660.4,2762.0],[1655.2,2755.2],[1649.6,2748.7],[1643.4,2742.6],[1636.7,2736.8],[1630.9,2733.4],[1625.8,2732.3],[1621.6,2733.6],[1618.1,2737.2],[1613.5,2738.4],[1607.7,2737.3],[1600.6,2733.7],[1592.3,2727.8],[1587.3,2725.0],[1585.5,2725.2],[1587.0,2728.4],[1591.7,2734.7],[1595.3,2739.0],[1597.8,2741.3],[1599.2,2741.6],[1599.5,2739.9],[1600.5,2739.1],[1602.3,2739.2],[1604.8,2740.2],[1608.0,2742.1],[1610.4,2741.6],[1611.8,2738.6],[1612.3,2733.2],[1612.0,2725.5],[1611.5,2719.8],[1611.1,2716.2],[1610.6,2714.7],[1610.2,2715.3],[1609.7,2717.2],[1609.2,2720.4],[1608.6,2724.9],[1608.1,2730.8],[1607.2,2735.5],[1606.0,2739.3],[1604.3,2742.0],[1602.2,2743.7],[1600.9,2746.0],[1600.1,2748.9],[1600.0,2752.5],[1600.6,2756.6],[1600.9,2760.1],[1600.9,2762.8],[1600.7,2764.8],[1600.1,2766.1],[1601.3,2769.8],[1604.2,2776.0],[1608.8,2784.5],[1615.1,2795.5],[1619.5,2805.9],[1622.0,2815.6],[1622.6,2824.8],[1621.4,2833.5],[1619.3,2840.2],[1616.3,2845.2],[1612.4,2848.3],[1607.6,2849.6],[1602.6,2849.6],[1597.4,2848.2],[1592.0,2845.4],[1586.3,2841.3],[1580.2,2839.0],[1573.5,2838.5],[1566.3,2839.7],[1558.5,2842.8],[1553.8,2848.1],[1551.9,2855.6],[1553.1,2865.4],[1557.1,2877.5],[1560.9,2887.6],[1564.5,2895.7],[1567.7,2901.8],[1570.7,2905.9],[1572.3,2909.6],[1572.5,2912.9],[1571.3,2915.7],[1568.8,2918.1],[1567.1,2923.0],[1566.3,2930.2],[1566.2,2939.9],[1566.9,2952.1],[1567.9,2963.6],[1569.0,2974.5],[1570.3,2984.9],[1571.9,2994.7],[1573.7,3002.0],[1576.0,3007.0],[1578.6,3009.5],[1581.6,3009.6],[1587.1,3014.1],[1595.3,3022.8],[1606.1,3035.9],[1619.5,3053.2],[1632.3,3068.2],[1644.7,3080.8],[1656.6,3090.9],[1667.9,3098.6],[1676.8,3106.3],[1683.4,3114.0],[1687.5,3121.7],[1689.2,3129.4],[1691.8,3135.5],[1695.4,3140.1],[1699.8,3143.1],[1705.1,3144.6],[1709.3,3146.3],[1712.4,3148.2],[1714.2,3150.3],[1714.9,3152.6],[1716.9,3154.8],[1720.1,3157.0],[1724.6,3159.1],[1730.3,3161.1],[1734.9,3163.2],[1738.4,3165.5],[1740.7,3167.9],[1742.0,3170.4],[1742.3,3173.6],[1741.6,3177.4],[1740.0,3182.0],[1737.4,3187.3],[1736.8,3191.8],[1738.3,3195.6],[1741.8,3198.7],[1747.3,3201.1],[1750.6,3204.4],[1751.8,3208.6],[1750.8,3213.8],[1747.7,3219.9],[1746.8,3224.8],[1748.0,3228.6],[1751.3,3231.3],[1756.8,3232.9],[1760.4,3234.9],[1762.1,3237.3],[1761.9,3240.1],[1759.9,3243.4],[1755.9,3246.4],[1749.9,3249.2],[1741.9,3251.7],[1732.0,3254.0],[1724.3,3256.3],[1718.9,3258.5],[1715.7,3260.8],[1714.9,3263.1],[1712.3,3265.7],[1708.0,3268.7],[1702.0,3272.1],[1694.3,3275.8],[1688.9,3280.7],[1686.0,3286.7],[1685.4,3294.0],[1687.1,3302.4],[1688.9,3311.8],[1690.7,3322.3],[1692.6,3333.8],[1694.4,3346.4],[1695.0,3358.2],[1694.3,3369.3],[1692.3,3379.6],[1689.0,3389.3],[1687.8,3398.8],[1688.7,3408.2],[1691.7,3417.6],[1696.7,3426.8],[1700.8,3436.1],[1704.1,3445.4],[1706.5,3454.7],[1708.0,3464.0],[1708.7,3474.2],[1708.6,3485.3],[1707.6,3497.3],[1705.9,3510.1],[1703.5,3520.7],[1700.5,3529.1],[1697.0,3535.2],[1692.9,3539.0],[1690.4,3543.9],[1689.7,3550.0],[1690.7,3557.2],[1693.3,3565.5],[1695.0,3574.1],[1695.6,3582.9],[1695.1,3592.1],[1693.7,3601.5],[1692.8,3608.9],[1692.5,3614.3],[1692.9,3617.8],[1693.8,3619.3],[1694.7,3621.0],[1695.4,3623.0],[1696.1,3625.2],[1696.7,3627.6],[1696.8,3630.2],[1696.2,3633.0],[1695.2,3636.0],[1693.5,3639.2],[1692.6,3643.7],[1692.5,3649.5],[1693.2,3656.6],[1694.7,3665.0],[1695.9,3673.5],[1696.8,3681.9],[1697.4,3690.3],[1697.7,3698.7],[1696.0,3710.2],[1692.1,3725.0],[1686.0,3743.0],[1677.8,3764.2],[1672.2,3781.2],[1669.2,3794.1],[1668.8,3802.8],[1670.9,3807.4],[1672.8,3812.5],[1674.6,3818.3],[1676.1,3824.7],[1677.3,3831.8],[1677.6,3839.6],[1676.9,3848.2],[1675.1,3857.5],[1672.3,3867.7],[1669.7,3877.0],[1667.3,3885.6],[1665.2,3893.4],[1663.2,3900.4],[1662.0,3907.5],[1661.7,3914.6],[1662.3,3921.8],[1663.7,3929.1],[1665.4,3934.8],[1667.4,3938.9],[1669.8,3941.4],[1672.4,3942.3],[1676.1,3943.1],[1680.8,3943.7],[1686.4,3944.0],[1693.1,3944.2],[1699.1,3946.1],[1704.4,3949.8],[1709.0,3955.2],[1712.9,3962.3],[1714.9,3969.4],[1714.9,3976.5],[1713.0,3983.6],[1709.1,3990.7],[1706.8,3996.6],[1706.0,4001.2],[1706.8,4004.7],[1709.1,4006.9],[1710.7,4009.7],[1711.8,4013.2],[1712.1,4017.3],[1711.9,4021.9],[1711.2,4026.4],[1710.0,4030.7],[1708.4,4034.8],[1706.3,4038.7],[1704.0,4041.9],[1701.5,4044.4],[1698.9,4046.1],[1696.0,4047.1],[1693.4,4047.0],[1690.8,4046.0],[1688.4,4043.9],[1686.2,4040.7],[1684.7,4039.2],[1683.8,4039.2],[1683.7,4040.9],[1684.2,4044.2],[1684.9,4047.8],[1685.7,4051.7],[1686.7,4055.9],[1687.8,4060.4],[1688.4,4066.6],[1688.4,4074.5],[1687.7,4084.0],[1686.5,4095.1],[1684.2,4102.2],[1680.8,4105.2],[1676.3,4104.0],[1670.6,4098.8],[1664.9,4094.5],[1659.0,4091.4],[1653.1,4089.3],[1647.0,4088.2],[1642.6,4089.3],[1639.7,4092.6],[1638.4,4098.1],[1638.6,4105.7],[1637.5,4112.0],[1635.0,4117.0],[1631.2,4120.6],[1626.0,4123.0],[1620.7,4124.7],[1615.5,4125.7],[1610.2,4126.0],[1604.9,4125.6],[1596.8,4124.3],[1586.0,4122.0],[1572.5,4118.8],[1556.2,4114.5],[1543.4,4111.1],[1534.1,4108.5],[1528.3,4106.7],[1525.9,4105.7],[1524.2,4104.2],[1523.1,4102.2],[1522.6,4099.7],[1522.8,4096.8],[1521.5,4095.1],[1518.9,4094.9],[1514.9,4095.9],[1509.5,4098.3],[1504.7,4099.7],[1500.5,4100.1],[1496.8,4099.5],[1493.8,4098.0],[1491.4,4096.1],[1489.7,4093.9],[1488.8,4091.4],[1488.5,4088.6],[1485.9,4086.8],[1481.2,4086.0],[1474.2,4086.2],[1464.9,4087.3],[1455.6,4086.7],[1446.2,4084.1],[1436.8,4079.8],[1427.3,4073.6],[1420.3,4066.9],[1415.8,4059.9],[1413.8,4052.4],[1414.3,4044.5],[1416.5,4035.5],[1420.5,4025.6],[1426.2,4014.7],[1433.6,4002.8],[1438.1,3992.2],[1439.7,3982.8],[1438.4,3974.7],[1434.2,3967.9],[1429.3,3961.9],[1423.6,3956.7],[1417.2,3952.4],[1410.1,3948.9],[1404.0,3945.5],[1399.0,3942.2],[1395.1,3938.9],[1392.3,3935.6],[1391.1,3930.1],[1391.4,3922.4],[1393.4,3912.4],[1397.0,3900.2],[1398.9,3890.7],[1399.3,3883.8],[1398.1,3879.6],[1395.2,3878.1],[1393.6,3875.0],[1393.3,3870.4],[1394.2,3864.2],[1396.4,3856.5],[1400.1,3842.0],[1405.3,3820.6],[1412.0,3792.4],[1420.3,3757.4],[1425.4,3729.8],[1427.5,3709.8],[1426.4,3697.2],[1422.2,3692.1],[1419.0,3687.2],[1416.6,3682.5],[1415.1,3677.9],[1414.5,3673.5],[1414.8,3666.8],[1416.0,3657.8],[1418.1,3646.6],[1421.1,3633.2],[1423.9,3622.9],[1426.3,3615.9],[1428.5,3612.0],[1430.4,3611.5],[1432.1,3611.7],[1433.6,3612.7],[1434.9,3614.5],[1436.1,3617.1],[1436.6,3618.5],[1436.6,3618.7],[1436.0,3617.8],[1434.7,3615.7],[1433.6,3613.1],[1432.6,3610.1],[1431.6,3606.7],[1430.8,3602.8],[1429.6,3598.5],[1427.9,3593.5],[1425.9,3588.1],[1423.4,3582.2],[1422.4,3577.5],[1422.9,3574.1],[1424.8,3571.9],[1428.2,3571.1],[1430.9,3569.7],[1432.7,3567.9],[1433.7,3565.5],[1433.9,3562.7],[1433.5,3559.2],[1432.5,3554.9],[1430.8,3550.0],[1428.4,3544.3],[1425.7,3536.2],[1422.7,3525.6],[1419.4,3512.5],[1415.8,3496.9],[1413.7,3484.6],[1413.1,3475.5],[1414.0,3469.6],[1416.5,3467.0],[1416.4,3465.4],[1413.9,3464.9],[1408.8,3465.5],[1401.2,3467.2],[1394.2,3468.9],[1387.8,3470.7],[1382.0,3472.6],[1376.9,3474.6],[1371.4,3475.9],[1365.6,3476.7],[1359.6,3476.8],[1353.2,3476.4],[1346.8,3475.0],[1340.5,3472.6],[1334.1,3469.2],[1327.7,3464.9],[1323.1,3458.9],[1320.4,3451.3],[1319.6,3442.0],[1320.6,3431.0],[1321.2,3422.2],[1321.4,3415.5],[1321.2,3411.0],[1320.6,3408.7],[1320.0,3404.6],[1319.4,3398.7],[1318.8,3391.2],[1318.3,3381.9],[1316.1,3373.0],[1312.4,3364.6],[1307.2,3356.6],[1300.4,3349.0],[1296.8,3340.7],[1296.5,3331.7],[1299.5,3322.1],[1305.7,3311.9],[1309.3,3302.5],[1310.2,3293.9],[1308.5,3286.1],[1304.2,3279.2],[1301.1,3273.2],[1299.4,3267.9],[1298.9,3263.5],[1299.8,3260.0],[1301.2,3255.9],[1303.1,3251.4],[1305.6,3246.4],[1308.7,3240.9],[1311.0,3235.9],[1312.6,3231.4],[1313.4,3227.3],[1313.6,3223.8],[1312.1,3220.0],[1309.0,3215.9],[1304.3,3211.6],[1298.0,3207.0],[1293.3,3201.7],[1290.2,3195.6],[1288.7,3188.8],[1288.9,3181.2],[1288.4,3173.3],[1287.2,3165.0],[1285.3,3156.5],[1282.8,3147.5],[1280.1,3138.8],[1277.2,3130.2],[1274.0,3121.8],[1270.7,3113.5],[1267.4,3105.1],[1264.3,3096.7],[1261.2,3088.3],[1258.3,3079.7],[1256.1,3072.1],[1254.5,3065.4],[1253.7,3059.6],[1253.5,3054.7],[1252.9,3050.6],[1251.7,3047.1],[1250.1,3044.3],[1247.9,3042.2],[1244.8,3040.1],[1240.7,3037.9],[1235.6,3035.7],[1229.5,3033.4],[1225.4,3030.3],[1223.1,3026.4],[1222.8,3021.8],[1224.4,3016.5],[1225.1,3007.8],[1225.0,2996.0],[1224.1,2980.9],[1222.4,2962.6],[1218.2,2946.3],[1211.5,2932.0],[1202.3,2919.7],[1190.6,2909.4],[1181.5,2898.9],[1174.9,2888.0],[1170.8,2876.7],[1169.2,2865.2],[1168.1,2855.1],[1167.3,2846.4],[1167.0,2839.2],[1167.0,2833.4],[1168.0,2827.6],[1169.8,2821.7],[1172.5,2815.8],[1176.0,2809.9],[1178.4,2801.9],[1179.7,2792.0],[1179.8,2780.0],[1178.7,2766.1],[1175.4,2748.0],[1169.9,2725.8],[1162.2,2699.5],[1152.3,2669.1],[1142.9,2646.2],[1134.0,2630.7],[1125.7,2622.6],[1117.8,2622.1],[1109.2,2624.8],[1099.9,2631.0],[1089.8,2640.4],[1079.0,2653.2],[1070.1,2663.0],[1063.0,2669.8],[1057.9,2673.5],[1054.6,2674.2],[1052.1,2674.7],[1050.5,2675.1],[1049.7,2675.2],[1049.7,2675.2],[1049.1,2678.7],[1048.1,2685.6]],[[1406.5,4209.1],[1410.4,4208.6],[1412.7,4210.1],[1413.4,4213.4],[1412.6,4218.6],[1410.2,4225.8],[1406.9,4231.5],[1402.8,4235.5],[1397.9,4238.1],[1392.1,4239.1],[1387.0,4238.6],[1382.6,4236.5],[1379.0,4232.9],[1376.1,4227.7],[1375.7,4223.2],[1377.9,4219.3],[1382.6,4216.2],[1389.9,4213.7],[1395.3,4211.8],[1398.9,4210.5],[1400.7,4209.9],[1400.7,4209.9],[1401.7,4209.8],[1403.6,4209.5]],[[1134.1,4282.2],[1140.4,4284.3],[1144.5,4287.0],[1146.5,4290.5],[1146.3,4294.6],[1143.9,4299.4],[1141.2,4302.9],[1138.3,4305.1],[1135.2,4305.9],[1131.8,4305.4],[1128.9,4304.3],[1126.5,4302.4],[1124.5,4299.7],[1123.1,4296.4],[1120.7,4294.4],[1117.3,4293.9],[1112.9,4294.7],[1107.5,4296.9],[1104.2,4297.8],[1102.9,4297.6],[1103.7,4296.0],[1106.6,4293.3],[1109.6,4290.5],[1112.7,4287.9],[1116.0,4285.3],[1119.4,4282.8],[1122.0,4280.9],[1123.7,4279.6],[1124.6,4279.0],[1124.6,4279.0],[1126.1,4279.5],[1129.3,4280.6]],[[1727.3,4231.3],[1728.8,4234.2],[1731.1,4235.9],[1734.2,4236.5],[1738.2,4235.9],[1742.9,4234.1],[1746.9,4233.6],[1750.0,4234.1],[1752.3,4235.9],[1753.8,4238.8],[1756.3,4240.2],[1759.9,4240.2],[1764.6,4238.7],[1770.3,4235.8],[1774.9,4234.3],[1778.3,4234.3],[1780.4,4235.7],[1781.4,4238.6],[1783.4,4240.9],[1786.3,4242.6],[1790.1,4243.7],[1794.9,4244.2],[1798.3,4245.6],[1800.3,4248.0],[1800.8,4251.4],[1799.8,4255.8],[1798.2,4259.8],[1795.8,4263.5],[1792.7,4266.8],[1788.8,4269.7],[1783.1,4271.4],[1775.7,4271.8],[1766.4,4271.0],[1755.2,4268.9],[1746.6,4268.0],[1740.5,4268.4],[1736.9,4270.1],[1735.7,4273.0],[1734.5,4275.3],[1733.1,4277.1],[1731.5,4278.4],[1729.8,4279.1],[1728.0,4278.6],[1726.2,4276.8],[1724.3,4273.7],[1722.4,4269.4],[1719.7,4265.0],[1716.2,4260.7],[1712.0,4256.3],[1707.0,4251.9],[1703.8,4247.7],[1702.5,4243.7],[1703.0,4239.9],[1705.4,4236.4],[1708.2,4233.5],[1711.4,4231.2],[1715.0,4229.5],[1719.1,4228.5],[1722.1,4227.7],[1724.1,4227.2],[1725.1,4226.9],[1725.1,4226.9],[1725.5,4227.7],[1726.2,4229.1]],[[1243.9,4301.8],[1250.8,4303.3],[1255.2,4305.1],[1257.0,4307.1],[1256.2,4309.3],[1252.8,4311.7],[1250.0,4314.3],[1247.8,4317.2],[1246.3,4320.3],[1245.3,4323.7],[1243.2,4326.2],[1240.0,4327.8],[1235.6,4328.6],[1230.1,4328.5],[1226.2,4326.8],[1224.0,4323.6],[1223.3,4318.9],[1224.3,4312.7],[1225.5,4307.8],[1226.9,4304.2],[1228.6,4301.9],[1230.5,4300.9],[1232.0,4300.2],[1233.0,4299.7],[1233.4,4299.5],[1233.4,4299.5],[1235.2,4299.9],[1238.7,4300.6]],[[1425.7,4312.1],[1434.8,4319.8],[1441.5,4326.1],[1445.8,4331.2],[1447.7,4334.9],[1447.2,4337.3],[1445.9,4339.6],[1443.7,4341.8],[1440.7,4343.9],[1436.8,4345.8],[1433.7,4348.3],[1431.3,4351.2],[1429.6,4354.5],[1428.6,4358.4],[1426.0,4359.6],[1421.7,4358.2],[1415.7,4354.1],[1408.1,4347.4],[1400.7,4341.8],[1393.5,4337.2],[1386.6,4333.8],[1379.8,4331.4],[1375.6,4328.2],[1373.9,4324.1],[1374.8,4319.2],[1378.1,4313.4],[1382.5,4308.8],[1387.8,4305.4],[1394.1,4303.2],[1401.3,4302.2],[1406.7,4301.4],[1410.3,4300.9],[1412.1,4300.6],[1412.1,4300.6],[1414.4,4302.6],[1418.9,4306.4]],[[1746.8,4357.1],[1750.1,4361.0],[1752.5,4365.3],[1754.0,4370.1],[1754.5,4375.5],[1754.1,4381.3],[1752.0,4385.8],[1748.3,4389.1],[1742.9,4391.2],[1735.9,4392.0],[1730.4,4391.6],[1726.5,4390.1],[1724.0,4387.4],[1723.0,4383.6],[1722.5,4380.0],[1722.4,4376.6],[1722.7,4373.6],[1723.5,4370.7],[1724.5,4367.7],[1725.9,4364.4],[1727.5,4360.9],[1729.5,4357.1],[1731.5,4354.3],[1733.7,4352.4],[1735.9,4351.4],[1738.3,4351.4],[1740.0,4351.4],[1741.2,4351.4],[1741.8,4351.4],[1741.8,4351.4],[1742.6,4352.3],[1744.3,4354.2]],[[1624.8,4274.4],[1630.6,4275.8],[1635.1,4278.9],[1638.5,4283.5],[1640.7,4289.7],[1641.7,4297.4],[1643.6,4303.9],[1646.4,4309.2],[1650.2,4313.4],[1655.0,4316.3],[1658.5,4319.1],[1660.9,4321.7],[1662.2,4324.3],[1662.3,4326.7],[1662.2,4330.9],[1661.7,4336.9],[1661.0,4344.8],[1660.1,4354.5],[1658.8,4362.2],[1657.1,4368.0],[1655.0,4371.8],[1652.6,4373.8],[1651.2,4377.0],[1650.7,4381.6],[1651.2,4387.5],[1652.6,4394.8],[1652.7,4401.1],[1651.5,4406.4],[1649.0,4410.7],[1645.1,4414.1],[1640.9,4416.6],[1636.3,4418.3],[1631.4,4419.2],[1626.1,4419.2],[1620.4,4418.8],[1614.4,4418.1],[1608.0,4417.0],[1601.2,4415.5],[1595.9,4413.6],[1592.0,4411.2],[1589.6,4408.3],[1588.7,4404.9],[1585.8,4401.7],[1581.1,4398.8],[1574.5,4396.0],[1566.1,4393.5],[1559.6,4390.1],[1555.1,4385.9],[1552.7,4380.9],[1552.2,4375.1],[1551.2,4370.2],[1549.8,4366.1],[1547.8,4362.8],[1545.4,4360.4],[1544.1,4357.4],[1543.8,4353.8],[1544.7,4349.5],[1546.6,4344.7],[1547.8,4340.5],[1548.3,4336.8],[1548.1,4333.8],[1547.1,4331.4],[1544.9,4329.2],[1541.5,4327.3],[1537.0,4325.6],[1531.2,4324.2],[1526.9,4322.0],[1524.3,4319.1],[1523.2,4315.5],[1523.7,4311.2],[1523.4,4307.1],[1522.4,4303.4],[1520.5,4299.9],[1518.0,4296.7],[1517.9,4293.7],[1520.3,4290.8],[1525.2,4288.0],[1532.6,4285.3],[1538.7,4284.1],[1543.6,4284.2],[1547.3,4285.7],[1549.7,4288.6],[1552.4,4290.4],[1555.3,4291.1],[1558.4,4290.7],[1561.8,4289.3],[1566.2,4288.9],[1571.6,4289.7],[1578.1,4291.6],[1585.5,4294.7],[1592.4,4295.3],[1598.5,4293.4],[1604.0,4289.1],[1608.8,4282.3],[1612.4,4277.2],[1614.8,4273.9],[1616.0,4272.2],[1616.0,4272.2],[1617.5,4272.5],[1620.4,4273.3]]]};
/* Daily operations. The timetable is identical every day; what changes is
   the day's running: delays, cancellations and platform alterations. They are
   drawn from a seed made of the viewer's local date, so every visitor sees the
   same disruption on the same day and a new pattern tomorrow. Delays only show
   for trains that are running or due to leave soon, as they would on a real
   information screen. */
function rrDateKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
let RR_DAY_KEY=rrDateKey(new Date());
function rrNowMinutes(){const d=new Date();return d.getHours()*60+d.getMinutes()}
let RR_NOW=rrNowMinutes();
function rrHash(str){let h=2166136261;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function rrRandom(seed){let a=seed>>>0;return()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
// Relative minutes from `now` to an ordinal, wrapped into the next 24 hours.
function rrRelative(ordinal,now=RR_NOW,grace=0){let rel=ordinal-now;while(rel<-grace)rel+=1440;while(rel>=1440-grace)rel-=1440;return rel}
const RR_STATION_PLATFORMS=new Map();
for(const t of TRAINS){
 t.basePlatforms={...(t.platforms||{})};t.basePlat=t.plat;
 for(const [station,p] of Object.entries(t.platforms||{})){
  if(!/^\d+$/.test(p))continue;
  RR_STATION_PLATFORMS.set(station,Math.max(RR_STATION_PLATFORMS.get(station)||0,+p));
 }
}
function rrApplyDailyOperations(){
 const day=rrRandom(rrHash('day|'+RR_DAY_KEY));
 // Only 5% to 10% of trains have a problem on any day: some days run
 // smoothly, some are rougher. Each affected train has one problem.
 const share=.05+day()*.05,target=Math.round(TRAINS.length*share);
 const order=TRAINS.map(t=>{const r=rrRandom(rrHash(RR_DAY_KEY+'|'+t.id));return{t,r,k:r()}}).sort((a,b)=>a.k-b.k);
 order.forEach(({t,r},i)=>{
  t.dailyDelay=0;t.dailyCancelled=false;t.dailyProblem=null;
  t.platforms={...t.basePlatforms};t.plat=t.basePlat;t.platformChanged={};
  if(i>=target)return;
  const x=r();
  const stations=Object.keys(t.platforms).filter(s=>/^\d+$/.test(t.platforms[s])&&(RR_STATION_PLATFORMS.get(s)||0)>=3);
  if(x<.12){t.dailyCancelled=true;t.dailyProblem='cancel'}
  else if(x<.72||(x<.87&&!stations.length)){t.dailyDelay=Math.max(2,Math.round(2+Math.pow(r(),1.6)*38));t.dailyProblem='delay'}
  else if(x<.87){
   const s=stations[Math.floor(r()*stations.length)],max=RR_STATION_PLATFORMS.get(s),old=+t.platforms[s];
   let np=1+Math.floor(r()*(max-1));if(np>=old)np++;
   t.platforms[s]=String(np);t.platformChanged[s]=String(old);
   if(t.route[0][0]===s&&t.plat===String(old))t.plat=String(np);
   t.dailyProblem='platform';
  }
  else t.dailyProblem='notice';
 });
 rrRefreshLiveStatus();
}
// A delay becomes visible from 90 minutes before a train leaves its origin
// until 30 minutes after it reaches its destination.
function rrRefreshLiveStatus(){
 for(const t of TRAINS){
  if(t.dailyCancelled){t.status='Cancelled';continue}
  if(!t.dailyDelay){t.status='On time';continue}
  const start=timeOrdinal(t.route[0][1]),end=timeOrdinal(t.route[t.route.length-1][1])+t.dailyDelay;
  const live=[RR_NOW,RR_NOW+1440,RR_NOW-1440].some(n=>n>=start-90&&n<=end+30);
  t.status=live?`Expected +${t.dailyDelay} min`:'On time';
 }
}
function rrPlatformChangedFrom(t,station){return t.platformChanged?.[station]||''}
function rrBoardPlatform(t,station){
 const p=t.platforms?.[station]||t.plat||'–',old=rrPlatformChangedFrom(t,station);
 return old?`<span class="rr-plat-changed" title="Platform changed from ${old}" aria-label="Platform ${p}, changed from ${old}">${p}</span>`:p;
}
rrApplyDailyOperations();
/* RR Mainline Map, 8 November 2026: bold names and open larger circles. */
const LABELS=["Yuchow Central", "Peiting Central", "North Chungsia", "Yenchia Main", "Sianning", "Hantsin", "Somerfield St John", "Batavie", "Touraine-Central", "Prinsburg Central", "Cranford Central", "Amptonside Central", "Belwich East", "Farinport Central", "Havenbolme Hbf", "Binchester", "Mapleriver Central", "Grafton Central", "Ribeauvillé", "Brunswick", "Bayarfort", "Vindelle-Central", "Melbridge Central", "Victoria Central", "Southend", "Barton Central"];
const LABEL_HINTS={"Yuchow Central": [0, -24, "middle"], "Peiting Central": [0, 26, "middle"], "North Chungsia": [0, -24, "middle"], "Yenchia Main": [0, -24, "middle"], "Somerfield St John": [0, -24, "middle"], "Batavie": [0, -22, "middle"], "Touraine-Central": [0, -24, "middle"], "Prinsburg Central": [18, 0, "start"], "Cranford Central": [0, 26, "middle"], "Amptonside Central": [0, -24, "middle"], "Farinport Central": [-20, 0, "end"], "Havenbolme Hbf": [-18, 0, "end"], "Binchester": [0, 24, "middle"], "Mapleriver Central": [0, 28, "middle"], "Grafton Central": [0, 24, "middle"], "Ribeauvillé": [0, 26, "middle"], "Brunswick": [18, 0, "start"], "Bayarfort": [18, 0, "start"], "Vindelle-Central": [0, 26, "middle"], "Melbridge Central": [0, 28, "middle"], "Victoria Central": [18, 0, "start"], "Southend": [0, 28, "middle"], "Songqiao Airport": [18, 0, "start"], "Atlantic Airport": [18, 0, "start"]};

const RR_UI_CSS_COLOR=token=>getComputedStyle(document.documentElement).getPropertyValue(token).trim();
const C={Regio:RR_UI_CSS_COLOR('--rr-base-regio'),Max:RR_UI_CSS_COLOR('--rr-base-main'),VIA:RR_UI_CSS_COLOR('--rr-base-via'),InterCity:RR_UI_CSS_COLOR('--rr-base-main'),Nightline:RR_UI_CSS_COLOR('--rr-base-night')};
/* The actual light and dark accent colours are defined once in CSS :root.
   No on-the-fly tinting: every consumer uses the same per-system token. */
/* One accessible accent per service, shared by both panels and the map.
   Contrast is calculated on the lighter dark panel (the stricter background);
   travelled/passed colours remain an intentionally lighter separate palette. */
function rrServiceAccentToken(type){
 return ({Max:'--main',InterCity:'--main',VIA:'--via',Nightline:'--night',Regio:'--regio'})[type]||null;
}
function rrCssServiceAccent(type){
 const token=rrServiceAccentToken(type);
 return token?`var(${token})`:RR_UI_CSS_COLOR('--ink-strong');
}
function rrCssWhiteTextFill(type){
 // Only for a filled badge with white lettering. No change to the
 // theme's shared text, route, outline, marker or logo accent.
 const token=({Max:'--rr-fill-main',InterCity:'--rr-fill-main',
  VIA:'--rr-fill-via',Nightline:'--rr-fill-night',Regio:'--rr-fill-regio'})[type];
 return token?`var(${token})`:rrCssServiceAccent(type);
}
function rrCssTravelAccent(type){
 return `var(${({Max:'--travel-main',InterCity:'--travel-main',
  VIA:'--travel-via',Nightline:'--travel-night'})[type]||'--travel-main'})`;
}
function rrVisibleServiceAccent(color){
 // Map a source colour to exactly the same themed colour used by badges,
 // logos, buttons and call-point diagrams.
 if(color===C.Max)return RR_UI_CSS_COLOR('--main');
 if(color===C.VIA)return RR_UI_CSS_COLOR('--via');
 if(color===C.Nightline)return RR_UI_CSS_COLOR('--night');
 if(color===RR_TRAVELLED_C[C.Max])return RR_UI_CSS_COLOR('--travel-main');
 if(color===RR_TRAVELLED_C[C.VIA])return RR_UI_CSS_COLOR('--travel-via');
 if(color===RR_TRAVELLED_C[C.Nightline])return RR_UI_CSS_COLOR('--travel-night');
 return color;
}
function rrReadableRouteLabelColor(color){
 // Passed labels keep their separate, lighter travelled accent,
 // now identical to the corresponding route stroke within each mode.
 return rrVisibleServiceAccent(color);
}
const RR_TRAVELLED_C=Object.freeze({
 [C.Max]:RR_UI_CSS_COLOR('--rr-base-travel-main'),[C.VIA]:RR_UI_CSS_COLOR('--rr-base-travel-via'),
 [C.Nightline]:RR_UI_CSS_COLOR('--rr-base-travel-night')
});
function serviceName(type){return ({Max:'RR Max',VIA:'RR Via',InterCity:'RR InterCity',Nightline:'RR Nightline'})[type]||('RR '+type)}
function rrDetailsHeading(title,mark='rr-ui-train-information'){
 $('detailsTitle').textContent=title;
 $('detailsHeadingIcon').querySelector('use').setAttribute('href','#'+mark);
}
function rrServiceLabel(type){
 const c=C[type]||RR_UI_CSS_COLOR('--ink-strong');
 const contrastToken=rrServiceAccentToken(type);
 const readable=contrastToken?`var(${contrastToken})`:c;
 return `<span class="rr-service-identity" style="--rr-service-identity-color:${c};--rr-service-aa-color:${readable}"><svg class="rr-service-logo" viewBox="0 0 108 50" aria-hidden="true" focusable="false"><use href="#rr-service-mark"></use></svg><span>${serviceName(type)}</span></span>`;
}
function rrTrainLabel(t){return t.label||t.id}
function rrOutline(t){return t.type==='InterCity'||t.pattern==='RS'}
function isHighSpeed(train){return train.type==='Max'||train.type==='VIA'}
const P=GRAPH.pts, E=GRAPH.edges;
const $=id=>document.getElementById(id);
const app=$('app'), map=$('map'), board=$('board'), stationSelect=$('stationSelect');
const layer=$('stationLayer'), labels=$('labelLayer'), routeWorld=$('routeWorld'), world=$('world');
const detail=$('detailsBody'), container=$('mapContainer'), tooltip=$('tooltip');
const S=new Map(STATIONS.map(s=>[s.name,s]));
let currentStation='Mapleriver Central', selectedTrain=null, selectedPath=[], selectedNames=[], routeColor=C.Max, manualTrace=false;
let zoom=1, panX=0, panY=0, fit=1, offX=0, offY=0, W=0, H=0;
const minX=Math.min(...P.map(p=>p[0])),maxX=Math.max(...P.map(p=>p[0]));
const minY=Math.min(...P.map(p=>p[1])),maxY=Math.max(...P.map(p=>p[1]));
const graphWidth=maxX-minX,graphHeight=maxY-minY;
const svgNS='http://www.w3.org/2000/svg';
function se(name,attrs={}){const n=document.createElementNS(svgNS,name);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);return n}
const adj=Array.from({length:P.length},()=>[]);
for(const [a,b,t] of E){const w=Math.hypot(P[a][0]-P[b][0],P[a][1]-P[b][1]);adj[a].push([b,w,t]);adj[b].push([a,w,t])}
function nearestPoint(x,y){let best=0,dmin=Infinity;for(let i=0;i<P.length;i++){const d=(P[i][0]-x)**2+(P[i][1]-y)**2;if(d<dmin){dmin=d;best=i}}return best}
STATIONS.forEach(s=>{s.point=nearestPoint(s.attach[0],s.attach[1])});
function pathsByType(){const h=[],m=[];$('landShape').setAttribute('d',(GRAPH.land||[]).map(r=>'M'+r.map(p=>p[0]+' '+p[1]).join('L')+'Z').join(''));const g=[];for(const [a,b,t] of E){const d=`M${P[a][0]} ${P[a][1]}L${P[b][0]} ${P[b][1]}`;(t===2?g:t?h:m).push(d)}$('regioTrack').setAttribute('d',g.join(' '));$('hslTrack').setAttribute('d',h.join(' '));$('mlTrack').setAttribute('d',m.join(' '))}

// Binary heap Dijkstra. Schematic distance is for routing only, not timetable estimation.
function shortest(a,b,regio=true){if(a===b)return[a];const d=new Float64Array(P.length);d.fill(Infinity);d[a]=0;const prev=new Int32Array(P.length);prev.fill(-1);const heap=[[0,a]];
 function push(item){heap.push(item);let i=heap.length-1;while(i){const j=(i-1)>>1;if(heap[j][0]<=item[0])break;heap[i]=heap[j];i=j}heap[i]=item}
 function pop(){const root=heap[0],last=heap.pop();if(!heap.length)return root;let i=0;while(true){let j=i*2+1;if(j>=heap.length)break;if(j+1<heap.length&&heap[j+1][0]<heap[j][0])j++;if(heap[j][0]>=last[0])break;heap[i]=heap[j];i=j}heap[i]=last;return root}
 while(heap.length){const [dist,u]=pop();if(dist>d[u])continue;if(u===b)break;for(const [v,w,t] of adj[u]){if(t===2&&!regio)continue;const nd=dist+w;if(nd<d[v]){d[v]=nd;prev[v]=u;push([nd,v])}}}
 if(!isFinite(d[b]))return[];const result=[];for(let cur=b;cur!==-1;cur=prev[cur])result.push(cur);return result.reverse()}
const routeCache=new Map(),routeStopPathEnds=new Map();
function getTrainPath(t){
 if(routeCache.has(t.id))return routeCache.get(t.id);
 const r=[],ends=[0];
 for(let i=0;i<t.route.length-1;i++){
  const a=S.get(t.route[i][0]),b=S.get(t.route[i+1][0]);
  if(a&&b){
   let seg=shortest(a.point,b.point,t.type==='Regio');
   if(r.length)seg=seg.slice(1);
   r.push(...seg);
  }
  ends.push(Math.max(0,r.length-1));
 }
 routeCache.set(t.id,r);
 routeStopPathEnds.set(t.id,ends);
 return r;
}
function makePath(ids){if(!ids.length)return'';return ids.map((i,j)=>(j?'L':'M')+P[i][0]+' '+P[i][1]).join('')}

function stationList(){const names=[...S.keys()].sort((a,b)=>a.localeCompare(b));for(const id of ['stationSelect','from','to']){const el=$(id);el.replaceChildren(...names.map(name=>{const n=document.createElement('option');n.value=name;n.textContent=name;return n}))}stationSelect.value=currentStation;$('from').value='Mapleriver Central';$('to').value='Peiting Central'}
function statusTone(s){const v=String(s).toLowerCase();return v.startsWith('cancel')?'cancelled':v.startsWith('expected')||v.includes('delay')?'expected':v.startsWith('on time')?'on-time':'neutral'}
function statusTag(s){return `<span class="status-tag status-${statusTone(s)}">${s}</span>`}

// Three searchable selectors with listbox navigation; original selects remain the source of truth.
const pickerViews=new Map();
function setupSearchPicker(id){
 const select=$(id),nodes=[...select.options];
 const shell=document.createElement('div');shell.className='search-picker'+(id==='stationSelect'?' search-picker-main':'');
 const trigger=document.createElement('div');trigger.className='picker-control';
 const input=document.createElement('input');input.type='text';input.className='picker-input';
 input.id=id+'Input';input.autocomplete='off';input.spellcheck=false;
 input.setAttribute('role','combobox');input.setAttribute('aria-autocomplete','list');
 input.setAttribute('aria-haspopup','listbox');input.setAttribute('aria-expanded','false');
 input.setAttribute('aria-controls',id+'List');
 input.setAttribute('aria-label',id==='stationSelect'?'Current station':id==='from'?'From station':'To station');
 input.placeholder='Search station';
 const toggle=document.createElement('button');toggle.type='button';toggle.className='picker-toggle';toggle.setAttribute('aria-label','Browse stations');
 toggle.innerHTML='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3 6 5 5 5-5"/></svg>';
 const list=document.createElement('div');list.className='picker-list';list.id=id+'List';list.setAttribute('role','listbox');
 trigger.append(input,toggle);shell.append(trigger,list);select.parentElement.insertBefore(shell,select);select.classList.add('native-select');
 const names=nodes.map(o=>o.value),normalize=t=>String(t).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase().trim();
 let open=false,items=[],active=0;
 function sync(){input.value=select.value;input.title=select.value;}
 function shut(){open=false;list.classList.remove('open');shell.classList.remove('open');input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant');sync();}
 function closeOthers(){for(const [key,v] of pickerViews)if(key!==id)v.shut();}
 function choose(name){select.value=name;shut();select.dispatchEvent(new Event('change',{bubbles:true}));input.focus({preventScroll:true});}
 function mark(){const opts=[...list.querySelectorAll('.picker-option')];opts.forEach((opt,i)=>{opt.classList.toggle('active',i===active);opt.setAttribute('aria-selected',String(items[i]===select.value))});if(opts[active]){input.setAttribute('aria-activedescendant',opts[active].id);opts[active].scrollIntoView({block:'nearest'});}}
 function render(q=''){
  const term=normalize(q);items=names.filter(n=>normalize(n).includes(term));
  if(term){items.sort((a,b)=>Number(!normalize(a).startsWith(term))-Number(!normalize(b).startsWith(term))||a.localeCompare(b));}
  active=Math.max(0,items.indexOf(select.value));list.replaceChildren();
  if(!items.length){const empty=document.createElement('div');empty.className='picker-empty';empty.textContent='No matching stations';list.append(empty);return;}
  items.forEach((name,i)=>{const o=document.createElement('button');o.type='button';o.className='picker-option';o.id=id+'Opt'+i;o.setAttribute('role','option');o.textContent=name;o.addEventListener('pointerdown',e=>e.preventDefault());o.addEventListener('click',()=>choose(name));list.append(o)});mark();
 }
 function show(query=''){closeOthers();render(query);open=true;shell.classList.add('open');list.classList.add('open');input.setAttribute('aria-expanded','true');}
 input.addEventListener('focus',()=>{show('');input.select()});
 input.addEventListener('input',()=>{show(input.value);active=0;mark()});
 input.addEventListener('keydown',e=>{
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(!open)show('');else if(items.length){active=(active+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;mark()}}
  else if(e.key==='Enter'){e.preventDefault();if(!open){show('');return}if(items.length)choose(items[active]);else shut();}
  else if(e.key==='Escape'){e.preventDefault();shut();input.blur()}
  else if(e.key==='Tab')shut();
 });
 toggle.addEventListener('click',()=>{if(open){shut();input.blur()}else{input.focus();show('');input.select()}});
 select.addEventListener('change',sync);
 pickerViews.set(id,{shell,shut,sync});sync();
}
document.addEventListener('pointerdown',e=>{for(const {shell,shut} of pickerViews.values())if(!shell.contains(e.target))shut()});
function timeOrdinal(s){const m=String(s).match(/^(\d{1,2}):(\d{2})(?:\s*\+(\d+))?/);return m?(+m[1])*60+(+m[2])+(+(m[3]||0))*1440:0}
// Boards run as a rolling 24-hour window from the current time. Trains that
// have already gone today reappear at the end as tomorrow's services.
function rrWithBoardTime(t){
 const rel=rrRelative(stopOrdinal(t,t.hereIndex),RR_NOW,2);
 const tomorrow=RR_NOW+rel>=1440;
 // Tomorrow's running is not known yet: show it as planned.
 return tomorrow?{...t,boardRel:rel,tomorrow,status:'On time'}:{...t,boardRel:rel,tomorrow};
}
function rrBoardStatus(t,isArrival){
 const s=stopStatus(t,t.hereIndex);
 if(statusTone(s)==='cancelled'||t.tomorrow)return s;
 const rel=t.boardRel;
 if(!isArrival&&rel>=-2&&rel<=3)return 'Boarding';
 if(isArrival&&rel>=-2&&rel<=0)return 'Arriving';
 return s;
}
function upcoming(station){return TRAINS.map(t=>{const index=t.route.findIndex(s=>s[0]===station);if(index<0||index===t.route.length-1)return null;return{...t,hereTime:t.route[index][1],hereIndex:index}}).filter(Boolean).map(rrWithBoardTime).sort((a,b)=>a.boardRel-b.boardRel||a.id.localeCompare(b.id))}
function arriving(station){return TRAINS.map(t=>{const index=t.route.findIndex(s=>s[0]===station);if(index<=0)return null;return{...t,hereTime:t.route[index][1],hereIndex:index}}).filter(Boolean).map(rrWithBoardTime).sort((a,b)=>a.boardRel-b.boardRel||a.id.localeCompare(b.id))}
let departures=[];
function drawBoard(){
 if(viewMode==='journeys'){renderJourneyResults();return}
 const isArrival=viewMode==='arrivals';
 departures=isArrival?arriving(currentStation):upcoming(currentStation);
 board.replaceChildren();
 $('stationHeading').textContent=currentStation;
 $('stationBoardTitle').textContent=isArrival?'Arrivals':'Departures';
 $('boardRouteHeader').textContent=isArrival?'Origin':'Destination';
 if(!departures.length){board.innerHTML=`<div class="empty">No ${isArrival?'arrivals':'departures'}.</div>`;return}
 let dividerShown=false;
 for(const t of departures){
  if(t.tomorrow&&!dividerShown){dividerShown=true;const d=document.createElement('div');d.className='rr-day-divider';d.textContent='Tomorrow';board.append(d)}
  const row=document.createElement('button');
  row.type='button';
  row.className='trainrow'+(selectedTrain?.id===t.id?' selected':'');
  row.style.setProperty('--service-color',rrCssServiceAccent(t.type));
  row.style.setProperty('--rr-white-text-fill',rrCssWhiteTextFill(t.type));
  row.innerHTML=`<span class="row-time">${stopTimeMarkup(t,t.hereIndex)}</span><span class="service${rrOutline(t)?' rr-ic-outline':''}">${rrTrainLabel(t)}</span><span><span class="dest">${isArrival?t.origin:t.dest}</span><span class="rowstatus">${statusTag(rrBoardStatus(t,isArrival))}${rrAlertFlag(t)}</span></span><span class="platform">${rrBoardPlatform(t,currentStation)}</span>`;
  row.addEventListener('click',()=>chooseTrain(t));
  board.append(row);
 }
}
function setCurrentStation(name){
 viewMode=viewMode==='arrivals'?'arrivals':'departures';
 updateBoardTabs();
 selectedJourney=null;selectedLegPaths=[];currentStation=name;
 stationSelect.value=name;pickerViews.get('stationSelect')?.sync();
 selectedTrain=null;selectedPath=[];selectedNames=[name];manualTrace=false;
 routeWorld.replaceChildren();drawBoard();app.classList.remove('detail-open');
 requestAnimationFrame(resize);
 detail.innerHTML='<div class="empty">Select a train to view details.</div>';
 $('focusRoute').hidden=true;
 drawMap();
}

// SVG artwork supplied by the RR design team.
const ICONS={
 'Wi-Fi':'wifi','Power':'power','Café':'cafe','Dining':'restaurant',
 'Quiet':'quiet','Quiet Zone':'quiet','Accessible':'wheelchair',
 'Places for wheelchair users':'wheelchair','Luggage':'luggage',
 'Cycles':'cycle','Cabin':'sleeper','First Class':'first',
 'Seat':'reserved-seat','Reserved Seats':'reserved-seat',
 'Priority Seating':'priority-seat','Priority seats':'priority-seat',
 'Toilet':'toilet','Family':'family','Family Zone':'family',
 'Baby changing':'baby','Baby Changing':'baby','Shower':'shower',
 'Accessible Toilet':'accessible-toilet','Accessible toilet':'accessible-toilet',
 'Information':'info','Lift':'lift','Escalator':'escalator',
 'Airport':'airport','Interchange':'interchange',
 'Couchette':'couchette','Sleeper':'sleeper',
 'Deluxe Sleeper':'deluxe-sleeper','Parent-and-child compartment':'toddler',
 'Toddler Compartment':'toddler','Power Car':'power-car',
 'Duplex':'duplex'
};
const mapFacilityName={'Wi‑Fi':'Wi-Fi','Quiet':'Quiet Zone','Seat':'Reserved Seats','Baby changing':'Baby Changing'};
function facilityLabel(name){return mapFacilityName[name]||name;}

// Facilities reflect the relative scale of RR stations: large city terminals
// offer substantially more than small stops. Airport symbols are shown only
// where a station serves an airport.
const NATIONAL_HUBS=new Set([
 'Mapleriver Central','Peiting Central','Prinsburg Central','Vindelle-Central',
 'Victoria Central','Yenchia Main','Somerfield St John','Touraine-Central',
 'Amptonside Central','Havenbolme Hbf'
]);
// Share the PDF's exact major-station category with the schematic and facilities.
const MAJOR_STATIONS=new Set(LABELS);
const REGIONAL_INTERCHANGES=new Set([
 'Peiting New Town','Chankow','Chungsia','Yungang',
 'Canterbury','Chatham','Norbourne','Hiltsbury','Königstadt',
 'Medway Airport','Springford','Netherwood','Newport','Hervilly','Cartier',
 'Aéroport Parnay','Yuchow Airport','Songqiao Airport','Alderford Airport',
 'Atlantic Airport','Medway Central','Cosgrove'
]);
// Airport pictograms on the PDF, including the two unlabelled airport links.
const AIRPORT_STATIONS=new Set([
 'Yuchow Airport','Songqiao Airport','Alderford Airport','Newport',
 'Aéroport Parnay','Cartier','Cosgrove','Medway Airport','Atlantic Airport',
 'Findel','Chiangkou'
]);
function pictoItem(name){
 const kind=ICONS[name]||ICONS[facilityLabel(name)];if(!kind)return '';
 const label=({'Accessible Toilet':'Accessible toilet','Baby Changing':'Baby changing','Reserved Seats':'Reserved seats','Quiet Zone':'Quiet zone','First Class':'First class','Premium Class':'Premium class'})[name]||name;
 return `<div class="facility" title="${label}"><svg viewBox="0 0 32 32" aria-hidden="true"><use href="#rr-picto-${kind}"></use></svg><span>${label}</span></div>`;
}
const STATION_CORE=['Information','Accessible','Accessible Toilet','Toilet','Lift','Escalator'];
const STATION_AMENITIES={
 national:['Interchange','Café','Dining','Wi-Fi','Luggage','Cycles','Baby Changing','Family'],
 major:['Interchange','Café','Dining','Wi-Fi','Luggage','Cycles','Baby Changing','Family'],
 regional:['Interchange','Café','Wi-Fi','Luggage','Baby Changing'],
 local:['Café','Wi-Fi']
};
function stationFacilities(name){
 const airport=AIRPORT_STATIONS.has(name);
 // The PDF defines major stations; a generic "Central" suffix is not proof
 // of major status (e.g. Medway Central is a smaller station on this map).
 const tier=NATIONAL_HUBS.has(name)?'national':MAJOR_STATIONS.has(name)?'major':(REGIONAL_INTERCHANGES.has(name)||airport)?'regional':'local';
 const items=[...STATION_CORE,...STATION_AMENITIES[tier]];
 if(airport)for(const item of ['Airport','Interchange','Luggage','Baby Changing'])items.push(item);
 return [...new Set(items)];
}
function trainFacilities(train){
 const items=[...new Set(train.fac.map(facilityLabel))];
 if(items.includes('Accessible')&&items.includes('Toilet')&&!items.includes('Accessible Toilet'))items.push('Accessible Toilet');
 return items;
}
function fillStationInfo(name=currentStation, returnTrain=null, returnJourney=null){
 rrDetailsHeading('Station information','rr-ui-info');$('focusRoute').hidden=true;
 const facilities=stationFacilities(name);
 const additional=facilities.filter(f=>!STATION_CORE.includes(f));
 const backButton=returnTrain?`<button type="button" class="back-to-train" id="backToTrain" aria-label="Back to train ${rrTrainLabel(returnTrain.train)}"><span aria-hidden="true"><svg class="rr-arrow-icon" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><use href="#rr-picto-arrow-left"></use></svg></span><span>Back to</span><span class="service${rrOutline(returnTrain.train)?' rr-ic-outline':''}" style="--service-color:${rrCssServiceAccent(returnTrain.train.type)};--rr-white-text-fill:${rrCssWhiteTextFill(returnTrain.train.type)}">${rrTrainLabel(returnTrain.train)}</span></button>`:returnJourney?`<button type="button" class="back-to-train" id="backToJourney"><span aria-hidden="true"><svg class="rr-arrow-icon" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><use href="#rr-picto-arrow-left"></use></svg></span><span>Back to journey</span></button>`:'';
 detail.innerHTML=`<div class="station-name-band">${name}</div>
 ${backButton}<div class="facilities-heading">Standard facilities</div><div class="station-picto-grid">${STATION_CORE.map(pictoItem).join('')}</div>
 ${additional.length?`<div class="facilities-heading">Additional station facilities</div><div class="station-picto-grid">${additional.map(pictoItem).join('')}</div>`:''}
 `;
 if(returnTrain){
  $('backToTrain').addEventListener('click',()=>{
   viewMode=returnTrain.boardMode==='arrivals'?'arrivals':'departures';
   setCurrentStation(returnTrain.station);
   const stationTrains=viewMode==='arrivals'?arriving(returnTrain.station):upcoming(returnTrain.station);
   const restored=stationTrains.find(candidate=>candidate.id===returnTrain.train.id)||returnTrain.train;
   chooseTrain(restored,true);
  });
 }
 if(returnJourney){$('backToJourney').addEventListener('click',()=>{viewMode='journeys';updateBoardTabs();chooseJourney(returnJourney)})}
 detail.scrollTop=0;
 app.classList.add('detail-open');
 requestAnimationFrame(resize);
}

$('stationInfoLeft').addEventListener('click',()=>fillStationInfo(currentStation));

// RR coach formation · original RR pictograms, neutral carriages, route-colour direction arrows.
const RR_FORMATIONS={"M8":{"key":"M8","name":"RR Max · M8","category":"Max","desc":"Shorter high-speed formation · 8-car EMU","cars":[{"role":"Standard","features":["luggage","cycle"],"detail":"Driving cab · luggage and bicycle spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Step-free wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler","baby"],"detail":"Family area · toddler space"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Café","features":["cafe"],"detail":"Café counter"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["quiet","first"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"All cars carry passengers. Driving cabs are part of coaches 1 and 8.","highlight":7},"M12":{"key":"M12","name":"RR Max · M12","category":"Max","desc":"Long-distance high-speed formation · 12-car EMU","cars":[{"role":"Standard","features":["luggage","cycle"],"detail":"Driving cab · luggage and bicycle spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair and priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler","baby"],"detail":"Family area · toddler space"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Dining","features":["restaurant"],"detail":"Dining coach with restaurant seating"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first"],"detail":"First Class"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"No dedicated traction heads. The selected coach in the reference example is Coach 11.","highlight":10},"V8":{"key":"V8","name":"RR Via · V8","category":"Via","desc":"High-speed formation · 8-car EMU","cars":[{"role":"Standard","features":["luggage"],"detail":"Standard · driving cab"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair and priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler"],"detail":"Family area and toddler compartment"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Café","features":["cafe"],"detail":"Café"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"Via retains its own magenta identification; no non-passenger power head.","highlight":7},"V10":{"key":"V10","name":"RR Via · V10","category":"Via","desc":"Extended high-speed formation · 10-car EMU","cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Standard · driving cab, bicycle spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair and priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler"],"detail":"Family / toddler area"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Café","features":["cafe"],"detail":"Café"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"Long Via services can use V10 in place of V8.","highlight":9},"IC10":{"key":"IC10","name":"RR InterCity · IC10","category":"InterCity","desc":"Locomotive + 10 passenger coaches","cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Bicycles and luggage"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler"],"detail":"Family / toddler area"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Dining","features":["restaurant"],"detail":"Restaurant / dining"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first"],"detail":"First Class"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"}],"power":"LOCO","notes":"One separate locomotive, no passenger number; can work in reverse direction.","highlight":9},"IC10P":{"key":"IC10P","name":"RR InterCity · IC10-P","category":"InterCity","desc":"2 non-passenger power cars + 10 passenger coaches","cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Bicycle and luggage spaces"},{"role":"Standard","features":["wheelchair","accessible-toilet"],"detail":"Wheelchair accommodation · accessible toilet"},{"role":"Standard","features":["priority-seat"],"detail":"Priority seating"},{"role":"Standard","features":["family","toddler"],"detail":"Family / toddler area"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Café","features":["cafe"],"detail":"Café counter"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first"],"detail":"First Class"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"}],"power":"POWER","notes":"Two dedicated power heads are unnumbered and have no passenger amenities.","highlight":9},"NL11":{"key":"NL11","name":"RR Nightline · NL11","category":"Nightline","desc":"Locomotive + 11 passenger coaches","cars":[{"role":"Seated","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Accessible seated coach · priority seating"},{"role":"Seated","features":["quiet","reserved-seat"],"detail":"Reserved seats · Quiet Zone"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Café","features":["cafe"],"detail":"Night catering"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleepers with showers"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleepers with showers"}],"power":"LOCO","notes":"Seated accommodation, couchettes and sleeper classes remain distinct.","highlight":10},"NL9P":{"key":"NL9P","name":"RR Nightline · NL9-P","category":"Nightline","desc":"2 non-passenger power cars + 9 passenger coaches","cars":[{"role":"Seated","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Accessible seated coach · priority seating"},{"role":"Seated","features":["quiet","reserved-seat"],"detail":"Quiet seated coach"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleeper with shower"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleeper with shower"}],"power":"POWER","notes":"No separate locomotive: unnumbered power cars at both ends.","highlight":8},"RS3":{"key":"RS3","name":"RR Regio RS · RS3","category":"Regio","desc":"Regional Sprinter · 3-car single-deck EMU","power":"EMU","notes":"Fast-accelerating stopping train; works in pairs as RS6.","highlight":1,"cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · bicycle and luggage spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["cycle","family"],"detail":"Driving cab · bicycle spaces · family area"}]},"RS6":{"key":"RS6","name":"RR Regio RS · RS6","category":"Regio","desc":"Regional Sprinter · two coupled 3-car EMUs","power":"EMU","notes":"Two RS3 units in multiple; no gangway between units.","highlight":1,"cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · bicycle and luggage spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["cycle","family"],"detail":"Driving cab · bicycle spaces · family area"},{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · bicycle and luggage spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["cycle","family"],"detail":"Driving cab · bicycle spaces · family area"}]},"RX4D":{"key":"RX4D","name":"RR Regio RX · RX4D","category":"Regio","desc":"Regional Express · 4-car duplex EMU","power":"EMU","notes":"Double-deck throughout; First Class on the upper deck of car 1.","highlight":2,"cars":[{"role":"First","features":["first","quiet"],"detail":"Driving cab · First Class upper deck · quiet zone"},{"role":"Standard","features":["quiet"],"detail":"Quiet zone"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · bicycle and luggage spaces"}]},"RX8D":{"key":"RX8D","name":"RR Regio RX · RX8D","category":"Regio","desc":"Regional Express · two coupled 4-car duplex EMUs","power":"EMU","notes":"Two RX4D units in multiple at busy times.","highlight":2,"cars":[{"role":"First","features":["first","quiet"],"detail":"Driving cab · First Class upper deck · quiet zone"},{"role":"Standard","features":["quiet"],"detail":"Quiet zone"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · bicycle and luggage spaces"},{"role":"First","features":["first","quiet"],"detail":"Driving cab · First Class upper deck · quiet zone"},{"role":"Standard","features":["quiet"],"detail":"Quiet zone"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · bicycle and luggage spaces"}]}};
const RR_FACILITY_LABEL={
 'wheelchair':'Places for wheelchair users','accessible-toilet':'Accessible toilet',
 'priority-seat':'Priority seats','quiet':'Quiet zone','family':'Family zone',
 'toddler':'Parent-and-child compartment','baby':'Baby changing',
 'cycle':'Bicycle spaces','luggage':'Luggage','cafe':'Café','restaurant':'Dining',
 'sleeper':'Sleeper','deluxe-sleeper':'First Sleeper','first':'First Class seats','couchette':'Couchette',
 'shower':'Shower','reserved-seat':'Reserved seats','cabin':'Sleeper cabin',
 'power':'Power sockets','wifi':'Wi-Fi'
};
function rrFormationKey(t){
 const serial=Number((t.id.match(/\d+/)||['0'])[0]);
 if(t.type==='Max')return serial%3===0?'M8':'M12';
 if(t.type==='VIA')return serial%3===0?'V10':'V8';
 if(t.type==='InterCity')return serial%4===0?'IC10P':'IC10';
 if(t.type==='Nightline')return serial%3===0?'NL9P':'NL11';
 if(t.type==='Regio'){const run=Number((t.id.match(/-(\d+)/)||['0','0'])[1]);return t.pattern==='RX'?(run%4===1?'RX8D':'RX4D'):(run%4===2?'RS6':'RS3')}
 return 'IC10';
}
/* Daily service alerts, in the style of British station screens and journey
   planners. The 5–10% of trains with a problem each day explain it: the reason
   a train is cancelled or delayed, or an on-board notice. Like the delays, they come from
   the date seed, so everyone sees the same alerts today and new ones tomorrow. */
const RR_ALERT_FR=new Map();
const RR_ALERT_CAUSES=[
 ['a fault with the signalling system at {s}','un dérangement de la signalisation à {s}'],
 ['a points failure at {s}','une défaillance d’aiguillage à {s}'],
 ['a broken-down train at {s}','un train en panne à {s}'],
 ['a fault on this train','une panne sur ce train'],
 ['a shortage of train crew','un manque de personnel de bord'],
 ['a problem with the overhead electric wires between {a} and {b}','un incident sur la caténaire entre {a} et {b}'],
 ['trespassers on the railway near {s}','la présence de personnes sur les voies près de {s}'],
 ['an obstruction on the line near {s}','un obstacle sur la voie près de {s}'],
 ['a passenger being taken ill at {s}','un voyageur malade à {s}'],
 ['emergency engineering work near {s}','des travaux d’urgence près de {s}',true],
 ['a speed restriction over a defective rail near {s}','une limitation de vitesse due à un rail défectueux près de {s}',true],
 ['congestion caused by an earlier incident','une congestion due à un incident antérieur'],
 ['a late-running freight train','un train de fret en retard'],
 ['a fire alarm at {s} station','une alarme incendie en gare de {s}'],
 ['an animal on the line near {s}','un animal sur la voie près de {s}']
];
const RR_ALERT_SEASONAL={
 autumn:[['poor rail conditions caused by leaves on the line','une mauvaise adhérence due aux feuilles mortes sur les voies']],
 winter:[['frozen points at {s}','un aiguillage gelé à {s}'],['severe weather','des intempéries']],
 summer:[['a speed restriction because of high rail temperatures','une limitation de vitesse due à la chaleur']],
 spring:[]
};
function rrSeason(){const m=new Date().getMonth();return m>=8&&m<=10?'autumn':m===11||m<=1?'winter':m>=5&&m<=7?'summer':'spring'}
function rrAlertCause(t,r){
 const pool=[...RR_ALERT_CAUSES,...RR_ALERT_SEASONAL[rrSeason()],...RR_ALERT_SEASONAL[rrSeason()]];
 const [en,fr,works=false]=pool[Math.floor(r()*pool.length)];
 const names=t.route.map(s=>s[0]),i=Math.floor(r()*(names.length-1));
 const fill=x=>x.replace('{s}',names[i]).replace('{a}',names[i]).replace('{b}',names[i+1]);
 return [fill(en),fill(fr).replace(/\bde (?=[AEIOUYÉÈÂ])/g,'d’'),works];
}
function rrAlertNotices(t){
 const form=RR_FORMATIONS[rrFormationKey(t)],f=new Set((form?.cars||[]).flatMap(c=>c.features));const out=[];
 if(f.has('cafe'))out.push(['The café bar on this train is closed today.','La voiture-bar de ce train est fermée aujourd’hui.','Café bar closed','Voiture-bar fermée']);
 if(f.has('restaurant'))out.push(['The restaurant on this train is closed today.','Le restaurant de ce train est fermé aujourd’hui.','Restaurant closed','Restaurant fermé']);
 if((t.fac||[]).some(x=>/^Wi.Fi$/.test(x)))out.push(['Wi‑Fi is not available on this train today.','Le Wi‑Fi n’est pas disponible à bord de ce train aujourd’hui.','Wi‑Fi unavailable','Wi‑Fi indisponible']);
 if(f.has('accessible-toilet'))out.push(['The accessible toilet on this train is out of use.','Les toilettes accessibles de ce train sont hors service.','Accessible toilet out of use','Toilettes accessibles hors service']);
 out.push(['Seat reservations will not be shown on this train today.','Les réservations ne seront pas affichées dans ce train aujourd’hui.','Seat reservations not shown','Réservations non affichées']);
 out.push(['This train is expected to be very busy. Please allow extra time to board.','Ce train devrait être très fréquenté. Prévoyez plus de temps pour monter à bord.','Expected to be very busy','Forte affluence prévue']);
 return out;
}
function rrAssignDailyAlerts(){
 const add=(t,kind,en,fr,works=false)=>{t.dailyAlert={kind,en,works};RR_ALERT_FR.set(en,fr)};
 for(const t of TRAINS){
  t.dailyAlert=null;const r=rrRandom(rrHash('alert|'+RR_DAY_KEY+'|'+t.id));
  if(t.dailyProblem==='cancel'){const [en,fr,works]=rrAlertCause(t,r);add(t,'cancel',`This train has been cancelled because of ${en}.`,`Ce train est supprimé en raison ${rrFrDe(fr)}.`,works)}
  else if(t.dailyProblem==='delay'&&t.dailyDelay>=5){const [en,fr,works]=rrAlertCause(t,r);add(t,'delay',`This train has been delayed by ${en}.`,`Ce train est retardé en raison ${rrFrDe(fr)}.`,works)}
  else if(t.dailyProblem==='notice'){const list=rrAlertNotices(t);const [en,fr]=list[Math.floor(r()*list.length)];add(t,'notice',en,fr)}
 }
}
// “en raison de” contracts with the article that follows.
function rrFrDe(s){return s.replace(/^le /,'du ').replace(/^les /,'des ').replace(/^des (?=[aeiouéàâêîôûh])/i,'d’').replace(/^des /,'de ').replace(/^(?=[aeiouéàâêîôûh])/i,'d’').replace(/^(?!du |de |d’)/,'de ')}
// The alert to show now: delays only while the delay is on the screens.
function rrVisibleAlert(t){
 const a=t.dailyAlert;if(!a||t.tomorrow)return null;
 if(a.kind==='delay'&&!delayMinutes(t.status))return null;
 return a;
}
// Engineering work and track maintenance alerts show the construction icon;
// every other alert shows the warning icon.
const RR_WORKS_ICON='rr-picto-construction';
function rrAlertIconId(a){return a.works&&document.getElementById(RR_WORKS_ICON)?RR_WORKS_ICON:'rr-settings-warning'}
// On boards only a warning icon flags the train; the message is in its details.
function rrAlertFlag(t){
 const a=rrVisibleAlert(t);if(!a)return '';
 return `<svg class="rr-alert-flag rr-alert-${a.kind}" viewBox="0 0 32 32" role="img" aria-label="${a.works?'Engineering works':'Service alert'}" focusable="false"><use href="#${rrAlertIconId(a)}"></use></svg>`;
}
function rrAlertMarkup(t,cls='rr-alert-banner'){
 const a=rrVisibleAlert(t);if(!a)return '';
 return `<span class="${cls} rr-alert-${a.kind}"><svg class="rr-alert-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><use href="#${rrAlertIconId(a)}"></use></svg><span class="rr-alert-text">${a.en}</span></span>`;
}
rrAssignDailyAlerts();
function rrIcon(name,cls='rr-picto'){
 return `<svg class="${cls}" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><use href="#rr-picto-${name}"></use></svg>`;
}
function rrRole(t,car){
 if(car.role==='First sleeper')return 'First Sleeper';if(car.role==='First')return 'First Class';
 return ({Standard:'Standard',Café:'Café',Dining:'Dining',
  Seated:'Seated accommodation',Couchette:'Couchette',Sleeper:'Sleeper'})[car.role]||car.role;
}
function rrFirst(car){return car.role==='First'||car.role==='First sleeper'}
/* Passenger counts are not supplied, so high-frequency timetable corridors
   act as a demand proxy. A given Max, Via or InterCity service is ENTIRELY
   single-deck or ENTIRELY duplex, never a mixed composition. Facilities, stops
   and service categories are unchanged. */
const RR_SEGMENT_FREQUENCY=new Map();
function rrSegmentKey(a,b){return [a,b].sort().join('\u0000')}
for(const train of TRAINS){
 for(let i=1;i<train.route.length;i++){
  const key=rrSegmentKey(train.route[i-1][0],train.route[i][0]);
  RR_SEGMENT_FREQUENCY.set(key,(RR_SEGMENT_FREQUENCY.get(key)||0)+1);
 }
}
function rrHighPatronageProxy(train){
 if(!['Max','VIA','InterCity'].includes(train.type)||train.route.length<4)return false;
 const threshold={Max:78,VIA:70,InterCity:52}[train.type];
 let total=0;
 for(let i=1;i<train.route.length;i++)
  total+=RR_SEGMENT_FREQUENCY.get(rrSegmentKey(train.route[i-1][0],train.route[i][0]))||0;
 return total/(train.route.length-1)>=threshold;
}
const RR_DUPLEX_FORMATIONS=new Set(['M8','M12','V8','V10','IC10','IC10P']);
function rrIsDuplex(train,form,index){
 // The index is retained for older callers; every coach shares one deck type.
 return form.key.startsWith('RX')||(RR_DUPLEX_FORMATIONS.has(form.key)&&rrHighPatronageProxy(train));
}
function rrSelectedVehicleIcon(train,form,car,index){
 // A sleeper remains a sleeper in its facilities and coach drawing; the
 // heading beside the coach number identifies the actual vehicle body.
 return rrIsDuplex(train,form,index)?'duplex':'single';
}
// The ONLY in-coach symbols are accessible seating, bicycles, restaurant,
// cafe, couchette and sleeper; duplex/single is shown in the coach details.
function rrInCarIcon(car,train,form,index){
 if(car.features.includes('wheelchair'))return 'wheelchair';
 if(car.features.includes('cycle'))return 'cycle';
 if(car.role==='Couchette')return 'couchette';
 if(car.role==='Sleeper'||car.role==='First sleeper')return 'sleeper';
 if(car.role==='Dining'||car.features.includes('restaurant'))return 'restaurant';
 if(car.role==='Café'||car.features.includes('cafe'))return 'cafe';
 return null;
}
function rrTotalSections(n){return n>=11?6:n>=9?5:4}
/* A real train may stop at any position relative to equally long platform
   sections. Use a stable illustrative offset per service until actual stop
   position data is provided: no rerandomising when clicking a coach. */
function rrStoppingOffset(t,form){
 const seed=String(t.id)+'|'+form.key;
 let hash=2166136261;
 for(let i=0;i<seed.length;i++)hash=Math.imul(hash^seed.charCodeAt(i),16777619)>>>0;
 return 10+(((hash>>>16)^(hash&65535))%13); // stable 10-22 px offset
}
function rrCoachMetrics(form,t){
 const n=form.cars.length,coachWidth=40,gap=0;
 const hasFront=form.power!=='EMU',hasRear=form.power==='POWER';
 const totalVehicles=n+(hasFront?1:0)+(hasRear?1:0);
 const totalWidth=totalVehicles*coachWidth+(totalVehicles-1)*gap;
 const offset=rrStoppingOffset(t,form),count=rrTotalSections(n);
 const sectionWidth=Math.ceil((totalWidth+offset+8)/count);
 const sections=Array.from({length:count},(_,i)=>({
  letter:'ABCDEF'[i],width:sectionWidth,
  startX:-offset+i*sectionWidth,endX:-offset+(i+1)*sectionWidth
 }));
 const carRanges=Array.from({length:n},(_,i)=>{
  const vehicleIndex=i+(hasFront?1:0),start=vehicleIndex*(coachWidth+gap);
  return {start,end:start+coachWidth};
 });
 return {gap,coachWidth,offset,sections,sectionWidth,totalWidth,carRanges};
}
function rrSectionStopText(t,form,index){
 const metrics=rrCoachMetrics(form,t),car=metrics.carRanges[index];
 const touched=metrics.sections.filter(s=>s.startX<car.end-.01&&s.endX>car.start+.01);
 if(touched.length>1)return `Stops between sections ${touched[0].letter} and ${touched[touched.length-1].letter}`;
 return `Stops at section ${(touched[0]||metrics.sections[0]).letter}`;
}
function rrFacilities(car){
 const omit=new Set(['first','seat','reserved-seat','cabin']);
 const names=[...new Set(car.features.filter(x=>!omit.has(x)))];
 // First-class seated coaches show the provided first.svg icon among their facilities.
 if(car.role==='First')names.unshift('first');
 return names.map(name=>`<span class="rr-fac-item">${rrIcon(name)}<span>${RR_FACILITY_LABEL[name]||name}</span></span>`).join('');
}
function rrDirection(t,from=null,to=null){
 // The local travel direction follows adjacent calls on the schematic.
 const route=t.route||[];
 const i=route.findIndex(x=>x[0]===currentStation);
 if(!from||!to){
  const a=i>=0?i:0;
  const b=a<route.length-1?a+1:a;
  const p=b===a?Math.max(0,a-1):a;
  from=route[p]?.[0]||t.origin;
  to=route[b]?.[0]||t.dest;
 }
 const a=S.get(from),b=S.get(to);
 if(a&&b){
  const dx=b.x-a.x,dy=b.y-a.y;
  if(Math.abs(dx)>0.1)return dx>0?'right':'left';
  if(Math.abs(dy)>0.1)return dy>=0?'right':'left';
 }
 return 'right';
}
function rrCoachDetail(t,form,index){
 if(typeof index==='string'){
  const loco=form.power==='LOCO';
  return `<div class="rr-selected-information"><div class="rr-selected-main">${rrIcon('power-car','rr-selected-type')}<span class="rr-selected-role">${'Power car'}</span></div></div>`;
 }
 const car=form.cars[index],role=rrRole(t,car),fac=rrFacilities(car);
 const highlighted=car.role==='First'||car.role==='First sleeper';
 return `<div class="rr-selected-information">
  <div class="rr-selected-main">${rrIcon(rrSelectedVehicleIcon(t,form,car,index),'rr-selected-type')}<strong>${index+1}</strong><span class="rr-selected-role${highlighted?' rr-first-label':''}">${role}</span></div>
  <div class="rr-section-info">${rrSectionStopText(t,form,index)}</div>
  </div>${fac?`<div class="rr-facility-list">${fac}</div>`:''}`;
}
function rrCoachSelectionOutline(shape){
 // A uniform 2.25px clearance from the painted bounding box, INCLUDING
 // the yellow First Class stripe. The selector itself is a .65px stroke
 // (.52 SVG units at a 40px render size). All six shapes use a rectangle.
 // Sloping end shapes have a narrower physical ink envelope than mid-cars.
 const envelopes={
  'car':[2.5,37.5,31.25],
  'first-car':[2.5,37.5,36.25],
  'end-car-left':[3.75,37.5,31.25],
  'end-car-right':[2.5,36.25,31.25],
  'end-first-car-left':[2.5,37.5,36.25],
  'end-first-car-right':[2.5,37.5,36.25]
 };
 const [minX,maxX,maxY]=envelopes[shape]||envelopes.car;
 const gap=2.25,halfStroke=.325,scale=40/32;
 const x=(minX-gap+halfStroke)/scale,y=(4-gap+halfStroke)/scale;
 const w=(maxX-minX+2*(gap-halfStroke))/scale;
 const h=(maxY-4+2*(gap-halfStroke))/scale;
 return `<svg class="rr-car-selection-outline" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="0.7"/></svg>`;
}
function rrCoachFormation(t,fromStation=null,toStation=null){
 const form=RR_FORMATIONS[rrFormationKey(t)];if(!form)return '';
 const n=form.cars.length,initial=Math.min(form.highlight||0,n-1);
 const color=RR_UI_CSS_COLOR('--ink-soft');
 const leftHead=form.power!=='EMU',rightHead=form.power==='POWER';
 const cars=form.cars.map((car,i)=>{
  const isFirst=rrFirst(car);
  const edgeStart=i===0&&!leftHead,edgeEnd=i===n-1&&!rightHead;
  const outline=edgeStart?(isFirst?'end-first-car-left':'end-car-left'):edgeEnd?(isFirst?'end-first-car-right':'end-car-right'):isFirst?'first-car':'car';
  const icon=rrInCarIcon(car,t,form,i);
  return `<button class="rr-car${isFirst?' rr-class-first':''}${outline.endsWith('-left')?' rr-end-left':''}${outline.endsWith('-right')?' rr-end-right':''}" type="button" data-rr-coach="${i}" aria-label="${i+1}, ${rrRole(t,car)}" aria-pressed="${i===initial}">
   ${rrIcon(outline,'rr-car-outline')}
   ${rrCoachSelectionOutline(outline)}
   <span class="rr-car-content">${icon?rrIcon(icon,'rr-car-function'):`<span class="rr-car-number">${i+1}</span>`}</span>
  </button>`;
 }).join('');
 const head=leftHead?`<button class="rr-car rr-unpowered rr-end-left" type="button" data-rr-coach="front" aria-label="${'Power car'}" aria-pressed="false">${rrIcon('end-car-left','rr-car-outline')}${rrCoachSelectionOutline('end-car-left')}</button>`:'';
 const tail=rightHead?`<button class="rr-car rr-unpowered rr-end-right" type="button" data-rr-coach="rear" aria-label="Power car" aria-pressed="false">${rrIcon('end-car-right','rr-car-outline')}${rrCoachSelectionOutline('end-car-right')}</button>`:'';
 const metrics=rrCoachMetrics(form,t);
 const allCoachWidth=metrics.totalWidth;
 const widths=metrics.sections.map(({letter,width})=>
  `<span class="rr-section-cell" style="flex:0 0 ${width}px;width:${width}px">${letter}</span>`
 ).join('');
 const dir=rrDirection(t,fromStation,toStation);

 return `<section class="rr-formation" style="--rr-direction-color:${color}" data-rr-form="${form.key}" data-rr-train="${rrTrainLabel(t)}">
  <h3>Train formation</h3>
  <div class="rr-formation-scroll" tabindex="0" aria-label="Train formation">
   <div class="rr-formation-content">
    <div class="rr-section-guide"><span class="rr-section-leading" style="--rr-section-offset:${metrics.offset}px"></span><div class="rr-sections" style="flex:0 0 ${allCoachWidth}px;width:${allCoachWidth}px">${widths}</div></div>
    <div class="rr-car-line rr-direction-${dir}"><span class="rr-arrow-unit">${rrIcon(dir==='left'?'arrow-left':'arrow-right','rr-arrow')}</span>${head}${cars}${tail}<span class="rr-arrow-unit">${rrIcon(dir==='left'?'arrow-left':'arrow-right','rr-arrow')}</span></div>
   </div>
  </div>
  <div class="rr-selected-summary" aria-live="polite">${rrCoachDetail(t,form,initial)}</div>
 </section>`;
}
detail.addEventListener('click',event=>{
 const button=event.target.closest('.rr-car[data-rr-coach]');
 if(!button||!detail.contains(button))return;
 const wrap=button.closest('.rr-formation');
 const t=TRAINS.find(x=>x.id===wrap.dataset.rrTrain);
 const form=RR_FORMATIONS[wrap.dataset.rrForm];
 if(!form||!t)return;
 const selected=button.dataset.rrCoach;
 wrap.querySelectorAll('.rr-car').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 wrap.querySelector('.rr-selected-summary').innerHTML=rrCoachDetail(t,form,/^\d+$/.test(selected)?Number(selected):selected);
});
function rrEnsureCoachVisible(){
 detail.querySelectorAll('.rr-formation').forEach(w=>{
  const b=w.querySelector('.rr-car[aria-pressed="true"]'),sc=w.querySelector('.rr-formation-scroll');
  if(b&&sc)sc.scrollLeft=Math.max(0,b.offsetLeft-sc.offsetLeft-(sc.clientWidth-b.clientWidth)/2);
 });
}

function rrTrainProgressIndex(t){
 const index=Number.isInteger(t.hereIndex)?t.hereIndex:t.route.findIndex(([name])=>name===currentStation);
 return index>=0&&index<t.route.length?index:0;
}
function rrTraveledColor(color){
 // Fixed travelled-route palette, matching the actual service line.
 // RR Max and InterCity share blue, RR Via is pink, RR Nightline is purple.
 return RR_TRAVELLED_C[color]||color;
}
function fillDetails(t){rrDetailsHeading('Train details','rr-ui-train-information');$('focusRoute').hidden=!t;if(!t){detail.innerHTML='<div class="empty">Select a train.</div>';return}const c=C[t.type],here=rrTrainProgressIndex(t),isArrival=viewMode==='arrivals';
 const stops=t.route.map(([name,time],i)=>`<div class="stop${i===here?' current':''}${i<here?' travelled':''}"><div class="stop-marker"><span class="stop-icon"></span></div><div class="stop-time">${stopTimeMarkup(t,i)}</div><button class="stop-name stop-station" type="button" data-stop-index="${i}" title="View station information">${name}</button></div>`).join('');
 detail.innerHTML=`<div class="train-hero" style="--service-color:${rrCssServiceAccent(t.type)};--rr-white-text-fill:${rrCssWhiteTextFill(t.type)}"><div class="train-hero-top"><div class="service-title"><div class="train-number${rrOutline(t)?' rr-ic-outline':''}">${rrTrainLabel(t)}</div></div><div class="train-departure"><div class="depart-time">${stopTimeMarkup(t,here)}</div><div class="depart-label">${isArrival?'Arrival':'Departure'}</div></div></div><div class="destination-label">${isArrival?'From':'To'}</div><div class="service-dest">${isArrival?t.origin:t.dest}</div></div>${rrAlertMarkup(t,'rr-alert-banner')}<dl class="info-grid" aria-label="Train information"><div class="fact-row"><dt class="keylabel">Platform</dt><dd class="infoval">${rrBoardPlatform(t,currentStation)}</dd></div><div class="fact-row"><dt class="keylabel">Status</dt><dd class="infoval">${statusTag(stopStatus(t,here))}</dd></div><div class="fact-row"><dt class="keylabel">Service</dt><dd class="infoval">${rrServiceLabel(t.type)}</dd></div><div class="fact-row"><dt class="keylabel">Origin</dt><dd class="infoval">${t.origin}</dd></div></dl><div class="stops-heading">Calling at</div><div class="stop-list${here>0?' is-en-route':''}${delayMinutes(t.status)?' has-disruptions':''}" style="--route:${rrCssServiceAccent(t.type)};--route-travelled:${rrCssTravelAccent(t.type)}">${stops}</div>${rrCoachFormation(t)}`;
 requestAnimationFrame(rrEnsureCoachVisible);
 detail.querySelectorAll(".stop-station").forEach(btn=>btn.addEventListener("click",()=>{const station=t.route[Number(btn.dataset.stopIndex)][0];const returnTrain={train:t,station:currentStation,boardMode:viewMode};setCurrentStation(station);fillStationInfo(station,returnTrain)}));
}
function chooseTrain(t,openDrawer=true){selectedJourney=null;selectedLegPaths=[];selectedTrain=t;selectedPath=getTrainPath(t);selectedNames=t.route.map(r=>r[0]);routeColor=C[t.type];manualTrace=false;fillDetails(t);detail.scrollTop=0;drawBoard();drawRoute();drawMap();if(openDrawer){app.classList.add('detail-open');requestAnimationFrame(()=>{resize();focusRoute()})}}
function trace(){selectedLegPaths=[];const a=S.get($('from').value),b=S.get($('to').value);if(!a||!b)return;selectedTrain=null;selectedPath=shortest(a.point,b.point);selectedNames=[a.name,b.name];routeColor=C.Max;manualTrace=true;drawRoute();drawMap();drawBoard();$('focusRoute').hidden=false;rrDetailsHeading('Route','rr-ui-route');detail.innerHTML=`<div class="service-dest">${a.name}<span class="rr-arrow" aria-hidden="true"><svg class="rr-arrow-icon" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><use href="#rr-picto-arrow-right"></use></svg></span>${b.name}</div>`;app.classList.add('detail-open');requestAnimationFrame(()=>{resize();focusRoute()})}
function clear(){selectedJourney=null;selectedLegPaths=[];selectedTrain=null;selectedPath=[];selectedNames=[currentStation];manualTrace=false;routeWorld.replaceChildren();drawBoard();$('focusRoute').hidden=true;detail.innerHTML=`<div class="empty">Select ${viewMode==='arrivals'?'an arrival':'a departure'}.</div>`;app.classList.remove('detail-open');requestAnimationFrame(resize);drawMap()}
// Shared schematic edges get smooth, adjacent half-width colour bands using
// a single perpendicular gradient stroke; transfer-ring halves match these bands.
const RR_ROUTE_WIDTH=5.5;
let rrJourneyEdges=new Map(),rrRouteRenderedScale=null;
function rrTrackKey(a,b){return a<b?`${a}:${b}`:`${b}:${a}`}
function rrTrackNormal(a,b){
 const p=P[Math.min(a,b)],q=P[Math.max(a,b)];
 const dx=q[0]-p[0],dy=q[1]-p[1],len=Math.hypot(dx,dy)||1;
 return {x:-dy/len,y:dx/len};
}
function rrJourneyEdgeIndex(legs){
 const edges=new Map();
 for(const {path,color} of legs){
  for(let i=1;i<path.length;i++){
   const a=path[i-1],b=path[i];if(a===b)continue;
   const key=rrTrackKey(a,b);
   let edge=edges.get(key);
   if(!edge){edge={a:Math.min(a,b),b:Math.max(a,b),colors:[]};edges.set(key,edge)}
   if(!edge.colors.includes(color))edge.colors.push(color);
  }
 }
 return edges;
}
function rrLaneNormalAt(edge,color){
 if(!edge||edge.colors.length<2)return null;
 const i=edge.colors.indexOf(color);if(i<0)return null;
 const side=i-(edge.colors.length-1)/2;
 if(!side)return null;
 const n=rrTrackNormal(edge.a,edge.b),sign=Math.sign(side);
 return {x:n.x*sign,y:n.y*sign};
}
function drawRoute(){
 routeWorld.replaceChildren();rrRouteRenderedScale=fit*zoom;
 rrJourneyEdges=new Map();
 if(!selectedPath.length)return;
 if(selectedTrain){
  const here=rrTrainProgressIndex(selectedTrain);
  const boundary=routeStopPathEnds.get(selectedTrain.id)?.[here];
  if(here>0&&Number.isInteger(boundary)&&boundary>0&&boundary<selectedPath.length){
   // The boundary is recorded at the exact calling point, not the nearest
   // matching node elsewhere on a route that revisits the same tracks.
   routeWorld.append(
    se('path',{d:makePath(selectedPath),class:'rail-under'}),
    se('path',{d:makePath(selectedPath.slice(0,boundary+1)),class:'route-line',stroke:rrVisibleServiceAccent(rrTraveledColor(routeColor))}),
    se('path',{d:makePath(selectedPath.slice(boundary)),class:'route-line',stroke:rrVisibleServiceAccent(routeColor)})
   );
   return;
  }
 }
 const segments=selectedLegPaths.length?selectedLegPaths:[{path:selectedPath,color:routeColor}];
 if(!selectedJourney||segments.length<2){
  for(const {path,color} of segments){if(path.length<2)continue;
   routeWorld.append(se('path',{d:makePath(path),class:'rail-under'}),
    se('path',{d:makePath(path),class:'route-line',stroke:rrVisibleServiceAccent(color)}));}
  return;
 }
 rrJourneyEdges=rrJourneyEdgeIndex(segments);
 const sc=Math.max(1e-6,fit*zoom),back=[],coloured=[],gradients=se('defs');
 let gradientIndex=0;
 for(const edge of rrJourneyEdges.values()){
  const a=P[edge.a],b=P[edge.b],d=`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`;
  back.push(se('path',{d,class:'rail-under'}));
  const n=edge.colors.length;
  if(n===1){coloured.push(se('path',{d,class:'route-line',stroke:rrVisibleServiceAccent(edge.colors[0])}));continue;}
  // One full-width stroke, split into adjacent, equal-width colour bands.
  // Unlike independently offset short segments, a perpendicular hard-stop
  // gradient has no overlapping round caps or zigzag seams at graph nodes.
  const normal=rrTrackNormal(edge.a,edge.b),halfWidth=RR_ROUTE_WIDTH/(2*sc);
  const mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2;
  const id=`rr-shared-track-${gradientIndex++}`;
  const gradient=se('linearGradient',{id,gradientUnits:'userSpaceOnUse',
   x1:mx-normal.x*halfWidth,y1:my-normal.y*halfWidth,
   x2:mx+normal.x*halfWidth,y2:my+normal.y*halfWidth});
  for(let i=0;i<n;i++){
   const color=edge.colors[i];
   const start=100*i/n,end=100*(i+1)/n;
   gradient.append(se('stop',{offset:`${start}%`,'stop-color':rrVisibleServiceAccent(color)}),
    se('stop',{offset:`${end}%`,'stop-color':rrVisibleServiceAccent(color)}));
  }
  gradients.append(gradient);
  coloured.push(se('path',{d,class:'route-line',stroke:`url(#${id})`,
   'data-shared-colors':edge.colors.map(rrVisibleServiceAccent).join(',')}));
 }
 routeWorld.append(gradients,...back,...coloured);
}
function screen(x,y){const sc=fit*zoom;return{x:x*sc+offX,y:y*sc+offY}}
function resize(){W=container.clientWidth;H=container.clientHeight;if(!W||!H)return;map.setAttribute('viewBox',`0 0 ${W} ${H}`);fit=Math.max(0.001,Math.min((W-90)/graphWidth,(H-90)/graphHeight));updateWorld()}
// The initial fit is the minimum scale. Keep the railway in view at every zoom level.
// When the network fits within the viewport, centre that axis instead of letting it drift.
function clampPan(){
 const sc=fit*zoom, margin=32;
 const maxX=Math.max(0,(graphWidth*sc-W)/2+margin);
 const maxY=Math.max(0,(graphHeight*sc-H)/2+margin);
 panX=Math.min(maxX,Math.max(-maxX,panX));
 panY=Math.min(maxY,Math.max(-maxY,panY));
 if(zoom<=1.000001){panX=0;panY=0;}
}
function updateWorld(){clampPan();const sc=fit*zoom;offX=(W-(graphWidth*sc))/2-minX*sc+panX;offY=(H-(graphHeight*sc))/2-minY*sc+panY;world.setAttribute('transform',`translate(${offX} ${offY}) scale(${sc})`);if(selectedJourney&&selectedLegPaths.length>1&&Math.abs((rrRouteRenderedScale??0)-sc)>1e-6)drawRoute();drawMap();$('zoomOut').disabled=zoom<=1.000001;}
// Point and segment collision checks in screen pixels.
const ctx=document.createElement('canvas').getContext('2d');
function rectOverlap(a,b,g=5){return a.x-g<b.x+b.w && a.x+a.w+g>b.x && a.y-g<b.y+b.h && a.y+a.h+g>b.y}
function inRect(x,y,r){return x>=r.x&&x<=r.x+r.w&&y>=r.y&&y<=r.y+r.h}
function lineRect(x1,y1,x2,y2,r){
 let t0=0,t1=1;const dx=x2-x1,dy=y2-y1;
 for(const [p,q] of [[-dx,x1-r.x],[dx,r.x+r.w-x1],[-dy,y1-r.y],[dy,r.y+r.h-y1]]){if(Math.abs(p)<1e-8){if(q<0)return false}else{const t=q/p;if(p<0){if(t>t1)return false;t0=Math.max(t0,t)}else{if(t<t0)return false;t1=Math.min(t1,t)}}}return t0<=t1
}
// Two-line candidates are measured in screen pixels and attached to the actual dot.
function splitName(name){
 const parts=name.split(' ');
 if(parts.length<2)return [[name]];
 let best=null, score=Infinity;
 for(let i=1;i<parts.length;i++){
  const a=parts.slice(0,i).join(' '),b=parts.slice(i).join(' ');
  const diff=Math.abs(a.length-b.length), largest=Math.max(a.length,b.length);
  const rank=largest*2+diff;
  if(rank<score){score=rank;best=[a,b]}
 }
 const single=[name],two=best;
 return name.length>=13?[two,single]:[single,two];
}
// Calling-point dots follow their leg's service colour. Interchanges get
// white centres and service-coloured outlines, with split outlines for transfers
// between differently coloured services.
function journeyStationColors(journey){
 const byStation=new Map();
 if(!journey)return byStation;
 for(const leg of journey.legs){
  const color=C[leg.train.type]||C.Max;
  for(const [name] of leg.train.route.slice(leg.fromIdx,leg.toIdx+1)){
   const colors=byStation.get(name)||[];
   if(!colors.includes(color)){colors.push(color);byStation.set(name,colors)}
  }
 }
 return byStation;
}
// Derive split-ring orientation from the highlighted route geometry.
// Opposing/branching legs get one semicircle facing each line. If both legs
// overlap on the same track, the coloured semicircles instead face their
// corresponding half-width lanes, so a line never touches the wrong colour.
function rrJourneyLegOutwardTangent(path,atEnd){
 if(!path||path.length<2)return null;
 const at=atEnd?path.length-1:0,p=P[path[at]];
 for(let i=at+(atEnd?-1:1);i>=0&&i<path.length;i+=atEnd?-1:1){
  const q=P[path[i]],dx=q[0]-p[0],dy=q[1]-p[1],length=Math.hypot(dx,dy);
  if(length>1e-5)return {x:dx/length,y:dy/length};
 }
 return null;
}
function rrInterchangeStartAngle(inboundRay,outboundRay,sharedLaneNormal=null){
 if(sharedLaneNormal)return Math.atan2(sharedLaneNormal.y,sharedLaneNormal.x)-Math.PI/2;
 if(!inboundRay||!outboundRay)return Math.PI/2;
 const dx=inboundRay.x-outboundRay.x,dy=inboundRay.y-outboundRay.y;
 // The incoming semicircle faces the incoming line and the outgoing one
 // faces the outgoing line; never rotate the colours by a fixed angle.
 if(Math.hypot(dx,dy)>1e-5)return Math.atan2(dy,dx)-Math.PI/2;
 return Math.atan2(-inboundRay.y,inboundRay.x)-Math.PI/2;
}
function journeyInterchangeMarkers(journey){
 const interchanges=new Map();
 if(!journey)return interchanges;
 for(let i=0;i<journey.legs.length-1;i++){
  const inbound=journey.legs[i],outbound=journey.legs[i+1];
  if(inbound.to!==outbound.from)continue;
  const colorA=C[inbound.train.type]||C.Max,colorB=C[outbound.train.type]||C.Max;
  const aPath=selectedJourney===journey?selectedLegPaths[i]?.path:getSegmentPath(inbound.train,inbound.from,inbound.to);
  const bPath=selectedJourney===journey?selectedLegPaths[i+1]?.path:getSegmentPath(outbound.train,outbound.from,outbound.to);
  const inboundRay=rrJourneyLegOutwardTangent(aPath,true);
  const outboundRay=rrJourneyLegOutwardTangent(bPath,false);
  // A repeated edge immediately beside the transfer station means both
  // services touch the same side. Use the lane's actual side to orient the ring.
  const aNode=aPath?.at(-1),aPrev=aPath?.at(-2);
  const bNode=bPath?.[0],bNext=bPath?.[1];
  const sameEdge=aNode===bNode&&aPrev===bNext&&aPrev!==undefined;
  const edge=sameEdge?rrJourneyEdges.get(rrTrackKey(aNode,aPrev)):null;
  const sharedNormal=sameEdge&&colorA!==colorB?rrLaneNormalAt(edge,colorA):null;
  interchanges.set(inbound.to,{
   colors:colorA===colorB?[colorA]:[colorA,colorB],
   startAngle:rrInterchangeStartAngle(inboundRay,outboundRay,sharedNormal),
   inboundRay,outboundRay,sharedEdge:!!sharedNormal
  });
 }
 return interchanges;
}
// Draw two open, 180-degree strokes so the white centre has no dividing line.
// Both strokes sit within the existing station-dot outer diameter.
function appendInterchangeDot(group,x,y,r,marker){
 const colors=marker.colors.map(rrVisibleServiceAccent),edge=2,innerRadius=r-edge/2;
 group.append(se('circle',{cx:x,cy:y,r:innerRadius,fill:RR_UI_CSS_COLOR('--surface'),'pointer-events':'none'}));
 if(colors.length<2){
  group.append(se('circle',{cx:x,cy:y,r:innerRadius,fill:'none',
   stroke:colors[0]||rrVisibleServiceAccent(C.Max),'stroke-width':edge,'pointer-events':'none'}));
  return;
 }
 const a=marker.startAngle;
 const x1=x+innerRadius*Math.cos(a),y1=y+innerRadius*Math.sin(a);
 const x2=x+innerRadius*Math.cos(a+Math.PI),y2=y+innerRadius*Math.sin(a+Math.PI);
 group.append(se('path',{d:`M ${x1} ${y1} A ${innerRadius} ${innerRadius} 0 0 1 ${x2} ${y2}`,
  fill:'none',stroke:colors[0],'stroke-width':edge,'stroke-linecap':'butt',
  'data-ring-half':'incoming','pointer-events':'none'}));
 group.append(se('path',{d:`M ${x2} ${y2} A ${innerRadius} ${innerRadius} 0 0 1 ${x1} ${y1}`,
  fill:'none',stroke:colors[1],'stroke-width':edge,'stroke-linecap':'butt',
  'data-ring-half':'outgoing','pointer-events':'none'}));
}
// The translucent current-station halo uses the same angular split as the dot.
function appendStationDisc(group,x,y,r,colors,opacity=1,startAngle=Math.PI/2){
 colors=colors.map(rrVisibleServiceAccent);
 const attrs={'pointer-events':'none'};
 if(opacity!==1)attrs['fill-opacity']=opacity;
 if(colors.length===1){
  group.append(se('circle',{cx:x,cy:y,r,fill:colors[0],...attrs}));
  return;
 }
 const step=2*Math.PI/colors.length;
 for(let i=0;i<colors.length;i++){
  const start=startAngle+i*step,end=start+step;
  const x1=x+r*Math.cos(start),y1=y+r*Math.sin(start);
  const x2=x+r*Math.cos(end),y2=y+r*Math.sin(end);
  const d=`M ${x} ${y} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;
  group.append(se('path',{d,fill:colors[i],...attrs}));
 }
}
let rrPendingMapFocus=null;
function rrLabelAcross(s){
 // All 8 label positions, best first: the one with the widest open angle between the lines
 // that meet at this dot (across a plain line, into the free quadrant at a junction).
 const nb=adj[s.point];if(!nb.length)return null;
 const ang=nb.map(([v])=>Math.atan2(P[v][1]-P[s.point][1],P[v][0]-P[s.point][0]));
 const DIR={E:0,ES:45,S:90,WS:135,W:180,WN:225,N:270,EN:315};
 const clear=a=>Math.min(...ang.map(b=>{const d=Math.abs(((a*Math.PI/180-b)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI);return d}));
 return Object.keys(DIR).sort((x,y)=>clear(DIR[y])-clear(DIR[x])||(x.length-y.length));
}
function drawMap(){
 if(!W||!H)return;
 const focusedStation=document.activeElement?.classList?.contains('mapnode')?document.activeElement.getAttribute('aria-label'):rrPendingMapFocus;
 rrPendingMapFocus=null;
 layer.replaceChildren();labels.replaceChildren();tooltip.style.display='none';
 const sc=fit*zoom,visible=[];
 const selectedSet=new Set(selectedNames);
 const progressIndex=selectedTrain?rrTrainProgressIndex(selectedTrain):0;
 const passedStationNames=new Set(progressIndex>0?selectedTrain.route.slice(0,progressIndex).map(([name])=>name):[]);
 const passedTrainColor=progressIndex>0?rrTraveledColor(routeColor):null;
 const legStationColors=journeyStationColors(selectedJourney);
 const selectedLabelColors=new Map();
 const interchangeMarkers=journeyInterchangeMarkers(selectedJourney);
 for(const s of STATIONS){
  if(s.regio&&zoom<2.2&&!selectedSet.has(s.name)&&s.name!==currentStation)continue; // Regio halts appear when zoomed in
  const {x,y}=screen(s.x,s.y);
  if(x< -18||y< -18||x>W+18||y>H+18)continue;
  visible.push({...s,sx:x,sy:y});
  const selected=selectedSet.has(s.name),current=s.name===currentStation,important=LABELS.includes(s.name);
  const radius=selected?5.8:(important?4.7:(s.regio?2.2:3.2)),g=se('g',{'data-station':s.name});
  const colors=selectedJourney?legStationColors.get(s.name)||[]:[];
  const activeColors=selected&&selectedPath.length?(colors.length?colors:[passedTrainColor&&!current&&passedStationNames.has(s.name)?passedTrainColor:routeColor]):[];
  const transferMarker=selected&&selectedPath.length?interchangeMarkers.get(s.name):null;
  if(selected&&(selectedTrain||selectedJourney)&&activeColors.length){
   // A mixed-colour interchange has a neutral name; the split station ring
   // preserves each connecting service colour. Same-colour names stay coloured.
   const mixedServiceInterchange=transferMarker?.colors.length>1;
   selectedLabelColors.set(s.name,mixedServiceInterchange?RR_UI_CSS_COLOR('--ink'):rrReadableRouteLabelColor(activeColors.at(-1)));
  }
  if(activeColors.length)g.setAttribute('data-service-colors',activeColors.map(rrVisibleServiceAccent).join(','));
  if(transferMarker)g.setAttribute('data-interchange-colors',transferMarker.colors.map(rrVisibleServiceAccent).join(','));
  // Interchange stroke and current-station halo meet their actual leg's line.
  if(current){
   const markerColors=activeColors.length?activeColors:[C.Max];
   if(transferMarker){
    appendStationDisc(g,x,y,radius*5/3,transferMarker.colors,0.29,transferMarker.startAngle);
    appendInterchangeDot(g,x,y,radius,transferMarker);
   }else{
    appendStationDisc(g,x,y,radius*5/3,[markerColors[0]],0.29);
    appendStationDisc(g,x,y,radius,[markerColors[0]]);
   }
  }else if(transferMarker){
   appendInterchangeDot(g,x,y,radius,transferMarker);
  }else if(activeColors.length){
   appendStationDisc(g,x,y,radius,[activeColors[0]]);
  }else{
   g.append(se('circle',{cx:x,cy:y,r:radius,fill:important?RR_UI_CSS_COLOR('--surface'):RR_UI_CSS_COLOR('--muted'),stroke:important?RR_UI_CSS_COLOR('--muted-slate'):'none','stroke-width':1.4,'pointer-events':'none'}));
  }
  const hit=se('circle',{cx:x,cy:y,r:12,fill:'transparent',class:'mapnode',role:'button','aria-label':s.name,tabindex:0});
  hit.addEventListener('click',e=>{e.stopPropagation();setCurrentStation(s.name)});
  hit.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setCurrentStation(s.name)}});
  hit.addEventListener('mouseenter',()=>{tooltip.textContent=s.name;tooltip.style.display='block';tooltip.style.left=x+'px';tooltip.style.top=(y-13)+'px'});
  hit.addEventListener('mouseleave',()=>tooltip.style.display='none');
  hit.addEventListener('focus',()=>{tooltip.textContent=s.name;tooltip.style.display='block';tooltip.style.left=x+'px';tooltip.style.top=(y-13)+'px'});
  hit.addEventListener('blur',()=>tooltip.style.display='none');
  g.append(hit);layer.append(g);
  // Keep keyboard focus on the same station when the map redraws.
  if(focusedStation===s.name){rrPendingMapFocus=s.name;requestAnimationFrame(()=>{if(hit.isConnected){hit.focus({preventScroll:true});if(document.activeElement===hit)rrPendingMapFocus=null}})}
 }
 const byVisible=new Map(visible.map(v=>[v.name,v]));
 const priorities=[currentStation];
 for(const n of selectedNames)if(!priorities.includes(n))priorities.push(n);
 for(const n of LABELS)if(!priorities.includes(n))priorities.push(n);
 if(zoom>=1.30)for(const s of visible)if(!priorities.includes(s.name))priorities.push(s.name);
 // Avoid putting enlarged labels beneath the map legend or zoom controls.
 const mapBounds=container.getBoundingClientRect();
 const overlayRects=[...container.querySelectorAll('.map-legend,.zoom-control')]
  .map(el=>{const b=el.getBoundingClientRect();return {x:b.left-mapBounds.left,y:b.top-mapBounds.top,w:b.width,h:b.height}})
  .filter(r=>r.w>0&&r.h>0);
 const placed=[],segments=[];
 for(const [a,b] of E){
  const pa=P[a],pb=P[b];
  const x1=pa[0]*sc+offX,y1=pa[1]*sc+offY,x2=pb[0]*sc+offX,y2=pb[1]*sc+offY;
  if(Math.max(x1,x2)<-20||Math.min(x1,x2)>W+20||Math.max(y1,y2)<-20||Math.min(y1,y2)>H+20)continue;
  segments.push([x1,y1,x2,y2]);
 }
 for(const name of priorities){
  const s=byVisible.get(name);if(!s)continue;
  const important=LABELS.includes(name);
  const mixedServiceInterchange=!!(selectedJourney&&selectedPath.length&&selectedSet.has(name)&&interchangeMarkers.get(name)?.colors.length>1);
  const fontSize=15.625,weight=important||mixedServiceInterchange?700:500,lh=18.125;
  ctx.font=`${weight} ${fontSize}px Frutiger,Arial`;
  const splits=splitName(name);
  const hint=LABEL_HINTS[name]||[0,-16,'middle'];
  // Prefer a side label. Left-side labels are right-aligned; right-side labels are left-aligned.
  const preferredSide=s.sx>W*.68?'W':s.sx<W*.32?'E':hint[2]==='end'?'W':hint[2]==='start'?'E':s.sx<W/2?'E':'W';
  const opposing=preferredSide==='E'?'W':'E';
  // Tube-map convention: the name sits beside its own dot, across the line rather than along it,
  // so it never drifts towards the neighbouring station.
  const across=rrLabelAcross(s);
  const dirs=across||[preferredSide,opposing,preferredSide+'N',opposing+'N',preferredSide+'S',opposing+'S','N','S'];
  let chosen=null;
  for(const dir of dirs){
   if(chosen)break;
   for(const gap of (across?[2,5,9,14]:[7,10,14,19])){
    if(chosen)break;
    for(const lines of splits){
     const width=Math.ceil(Math.max(...lines.map(l=>ctx.measureText(l).width)))+2;
     const height=lines.length*lh+1;
     let x,y,anchor;
     const isLeft=dir.startsWith('W'),isRight=dir.startsWith('E');
     if(isRight){x=s.sx+gap+6;y=s.sy-height/2;anchor='start'}
     else if(isLeft){x=s.sx-gap-6-width;y=s.sy-height/2;anchor='end'}
     else if(dir==='N'){x=s.sx-width/2;y=s.sy-gap-5-height;anchor='middle'}
     else {x=s.sx-width/2;y=s.sy+gap+5;anchor='middle'}
     if(dir.endsWith('N')&&(isLeft||isRight))y=s.sy-gap-height+1;
     if(dir.endsWith('S')&&(isLeft||isRight))y=s.sy+gap-1;
     const r={x,y,w:width,h:height};
     // Collisions are tested at the current pixel zoom; no rectangles or label backplates are painted.
     if(x<12||y<12||x+width>W-12||y+height>H-12)continue;
     if(placed.some(p=>rectOverlap(r,p,5)))continue;
     if(overlayRects.some(p=>rectOverlap(r,p,3)))continue;
     if(visible.some(v=>v.name!==name&&v.sx>=x-9&&v.sx<=x+width+9&&v.sy>=y-9&&v.sy<=y+height+9))continue;
     const rr={x:x-2,y:y-2,w:width+4,h:height+4};
     if(segments.some(([a,b,c,d])=>lineRect(a,b,c,d,rr)))continue;
     chosen={...r,anchor,lines,lh,fontSize};break;
    }
   }
  }
  if(!chosen)continue;
  placed.push(chosen);
  const group=se('g',{class:'station-label',role:'button',tabindex:0,'aria-label':`Show departures at ${name}`});
  const textX=chosen.anchor==='end'?chosen.x+chosen.w:chosen.anchor==='middle'?chosen.x+chosen.w/2:chosen.x;
  const text=se('text',{x:textX,y:chosen.y+fontSize,'text-anchor':chosen.anchor,class:'label'+(important?' important':''),'pointer-events':'all'});
  const routeNameColor=selectedLabelColors.get(name);
  if(routeNameColor){
   text.style.fill=routeNameColor;
   if(mixedServiceInterchange){
    text.style.fontWeight='700';
    text.setAttribute('data-interchange-label','mixed');
   }
   text.setAttribute('data-route-label',selectedTrain&&passedStationNames.has(name)?'passed':'forthcoming');
  }
  chosen.lines.forEach((line,i)=>{const span=se('tspan',{x:textX,dy:i?chosen.lh:0});span.textContent=line;text.append(span)});
  group.append(text);
  group.addEventListener('click',e=>{e.stopPropagation();setCurrentStation(name)});
  group.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setCurrentStation(name)}});
  labels.append(group);
 }
}
function zoomAt(factor,px=W/2,py=H/2){
 const old=zoom,next=Math.max(1,Math.min(16,old*factor)); // deep zoom for dense Regio areas
 if(Math.abs(old-next)<0.000001)return;
 // Preserve the point beneath the cursor, but keep the fitted map centred on zoom-out.
 const previous=fit*old,ns=fit*next;
 const wx=(px-offX)/previous,wy=(py-offY)/previous;
 zoom=next;
 if(zoom===1){panX=panY=0;}
 else{
  const defaultX=(W-graphWidth*ns)/2-minX*ns;
  const defaultY=(H-graphHeight*ns)/2-minY*ns;
  panX=px-wx*ns-defaultX;panY=py-wy*ns-defaultY;
 }
 updateWorld();
}
function focusRoute(){
 if(!selectedPath.length||!W||!H)return;
 const coords=selectedPath.map(i=>P[i]);
 const left=Math.min(...coords.map(p=>p[0])),right=Math.max(...coords.map(p=>p[0]));
 const top=Math.min(...coords.map(p=>p[1])),bottom=Math.max(...coords.map(p=>p[1]));
 const targetScale=Math.min((W-96)/Math.max(125,right-left+90),(H-96)/Math.max(125,bottom-top+90));
 zoom=Math.max(1,Math.min(8,targetScale/fit));
 const sc=fit*zoom;
 const centreX=(left+right)/2,centreY=(top+bottom)/2;
 panX=(W/2-centreX*sc)-((W-graphWidth*sc)/2-minX*sc);
 panY=(H/2-centreY*sc)-((H-graphHeight*sc)/2-minY*sc);
 updateWorld();
 if(matchMedia('(max-width:750px)').matches)container.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// Phones: the list and the map each get the whole screen, switched by a
// floating button, instead of two small scrolling boxes stacked together.
function rrSetPhoneView(showMap,scroll=true){
 app.classList.toggle('phone-map',showMap);
 const btn=$('rrPhoneToggle');btn.setAttribute('aria-pressed',String(showMap));
 btn.querySelector('use').setAttribute('href',showMap?'#rr-ui-train-information':'#rr-ui-route');
 btn.querySelector('.rr-phone-toggle-text').textContent=showMap?'Timetable':'Map';
 if(scroll)window.scrollTo(0,0);
 if(showMap)requestAnimationFrame(()=>{resize();drawMap()});
}
$('rrPhoneToggle').addEventListener('click',()=>rrSetPhoneView(!app.classList.contains('phone-map')));
$('focusRoute').addEventListener('click',()=>{
 if(matchMedia('(max-width:750px)').matches){app.classList.remove('detail-open');rrSetPhoneView(true,false);requestAnimationFrame(()=>{resize();focusRoute()})}
 else focusRoute();
});

function fitMap(){zoom=1;panX=panY=0;updateWorld()}
// Pointer gestures: start on empty track, labels, or station dots.
// A short press selects a station; moving >5px pans without selecting text.
let dragging=false,lastX=0,lastY=0,startX=0,startY=0,moved=false,activePointer=null;
map.addEventListener('selectstart',e=>e.preventDefault());
map.addEventListener('dragstart',e=>e.preventDefault());
map.addEventListener('pointerdown',e=>{
 if(e.pointerType==='touch'||(e.pointerType==='mouse'&&e.button!==0)||e.isPrimary===false)return;
 dragging=true;moved=false;activePointer=e.pointerId;
 startX=lastX=e.clientX;startY=lastY=e.clientY;
 e.preventDefault(); // prevent native SVG text selection while keeping click/tap behavior
});
map.addEventListener('pointermove',e=>{
 if(!dragging||e.pointerId!==activePointer)return;
 const dx=e.clientX-lastX,dy=e.clientY-lastY;
 if(!moved&&Math.hypot(e.clientX-startX,e.clientY-startY)>5){
  moved=true;map.classList.add('drag');
  try{map.setPointerCapture(e.pointerId)}catch(_){}
 }
 if(moved){e.preventDefault();panX+=dx;panY+=dy;updateWorld()}
 lastX=e.clientX;lastY=e.clientY;
});
function finishPan(e){
 if(e.pointerId!==activePointer)return;
 dragging=false;activePointer=null;map.classList.remove('drag');
 if(map.hasPointerCapture(e.pointerId))try{map.releasePointerCapture(e.pointerId)}catch(_){}
}
map.addEventListener('pointerup',finishPan);
map.addEventListener('pointercancel',finishPan);
// On touchscreens, retain native one-finger page scrolling. Two fingers control
// the schematic map; their midpoint anchors zoom and their motion pans.
let touchGesture=null,blockGestureClickUntil=0;
function gesturePoint(touches){
 const a=touches[0],b=touches[1];
 return {x:(a.clientX+b.clientX)/2,y:(a.clientY+b.clientY)/2,
  distance:Math.max(1,Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY))};
}
map.addEventListener('touchstart',e=>{
 if(e.touches.length<2)return;
 touchGesture=gesturePoint(e.touches);
 blockGestureClickUntil=Date.now()+900;
 e.preventDefault();
},{passive:false});
map.addEventListener('touchmove',e=>{
 if(e.touches.length<2)return;
 const next=gesturePoint(e.touches);
 if(!touchGesture){touchGesture=next;blockGestureClickUntil=Date.now()+900;e.preventDefault();return}
 e.preventDefault();
 const rect=map.getBoundingClientRect();
 // Zoom at the previous midpoint, then follow the new two-finger midpoint.
 zoomAt(next.distance/touchGesture.distance,
  touchGesture.x-rect.left,touchGesture.y-rect.top);
 panX+=next.x-touchGesture.x;
 panY+=next.y-touchGesture.y;
 updateWorld();
 touchGesture=next;
 blockGestureClickUntil=Date.now()+900;
},{passive:false});
function endTouchGesture(e){
 if(e.touches.length>=2)touchGesture=gesturePoint(e.touches);
 else if(touchGesture){touchGesture=null;blockGestureClickUntil=Date.now()+900}
}
map.addEventListener('touchend',endTouchGesture,{passive:true});
map.addEventListener('touchcancel',endTouchGesture,{passive:true});
// A drag must never activate the station click underneath it.
map.addEventListener('click',e=>{
 if(moved||Date.now()<blockGestureClickUntil){e.preventDefault();e.stopImmediatePropagation()}
},true);
map.addEventListener('wheel',e=>{e.preventDefault();const r=map.getBoundingClientRect();zoomAt(e.deltaY<0?1.16:1/1.16,e.clientX-r.left,e.clientY-r.top)},{passive:false});
$('zoomIn').onclick=()=>zoomAt(1.25);$('zoomOut').onclick=()=>zoomAt(.8);$('zoomFit').onclick=fitMap;

// Passenger journey planning. A connection must be formed by trains actually
// calling at both stations in the correct order, with enough time to change.
let viewMode='departures',journeyResults=[],selectedJourney=null,journeyShown=12,selectedLegPaths=[],appliedJourneyQuery=null;
const JOURNEY_MAX_RESULTS=260;
function fmtDuration(n){const h=Math.floor(n/60),m=n%60;return h?`${h}h ${String(m).padStart(2,'0')}m`:`${m} min`}
function timeMarkup(s){
 const m=String(s).match(/^(\d{1,2}:\d{2})(?:\s*\+(\d+))?$/);
 // Keep time and the day-offset together as one non-wrapping unit.
 return m?`<span class="time-value"><span class="time-primary">${m[1]}</span>${m[2]?` <span class="day-offset" title="Day ${Number(m[2])+1}">+${m[2]}</span>`:''}</span>`:String(s);
}
function delayMinutes(status){const m=String(status||'').match(/Expected\s*\+(\d+)\s*min/i);return m?+m[1]:0}
// Existing calls keep their original delay; newly introduced major calls
// have interpolated delays. Only inserted stops have a third field (1).
function stopDelay(t,index){
 const base=delayMinutes(t.status);
 if(!base)return 0;
 const added=[];
 for(let i=0;i<t.route.length;i++)if(t.route[i][2]===1)added.push(i);
 const n=t.route.length-added.length,originalIndex=index-added.filter(i=>i<index).length;
 const serial=Number((t.id.match(/\d+/)||['0'])[0]);
 function originalDelay(i){
  if(i<=0||n<=1)return base;
  if(i>=n-1)return 0;
  const progress=i/(n-1),change=((serial+i*7)%5)-2;
  return Math.max(0,Math.min(base+2,Math.round(base*(1-.65*progress))+change));
 }
 if(t.route[index][2]!==1)return originalDelay(originalIndex);
 let prev=index-1,next=index+1;
 while(prev>=0&&t.route[prev][2]===1)prev--;
 while(next<t.route.length&&t.route[next][2]===1)next++;
 if(prev<0||next>=t.route.length)return originalDelay(originalIndex);
 const from=timeOrdinal(t.route[prev][1]),to=timeOrdinal(t.route[next][1]);
 const fraction=(timeOrdinal(t.route[index][1])-from)/Math.max(1,to-from);
 return Math.round(originalDelay(originalIndex-1)*(1-fraction)+originalDelay(originalIndex)*fraction);
}
function stopOrdinal(t,index){return timeOrdinal(t.route[index][1])+stopDelay(t,index)}
function stopStatus(t,index){
 if(!delayMinutes(t.status))return t.status;
 const delay=stopDelay(t,index);
 return delay?`Expected +${delay} min`:'On time';
}
function shiftTimeString(s,mins){
 const total=timeOrdinal(s)+(+mins||0),day=Math.floor(total/1440),h=String(Math.floor(total/60)%24).padStart(2,'0'),m=String(total%60).padStart(2,'0');
 return `${h}:${m}${day?` +${day}`:''}`;
}
function delayedTimeMarkup(s,status){
 const delay=delayMinutes(status);
 if(delay<=0)return timeMarkup(s);
 return `<span class="time-delayed" aria-label="Scheduled ${s}; revised ${shiftTimeString(s,delay)}"><span class="scheduled-time" aria-hidden="true">${timeMarkup(s)}</span> <span class="retime-box" aria-hidden="true">${timeMarkup(shiftTimeString(s,delay))}</span></span>`;
}
function clockText(v){const day=Math.floor(v/1440);return timeMarkup(String(Math.floor(v/60)%24).padStart(2,'0')+':'+String(v%60).padStart(2,'0')+(day?' +'+day:''))}
function clockTextDelayed(original,status){return delayedTimeMarkup(original,status)}
function stopTimeMarkup(t,index){return delayedTimeMarkup(t.route[index][1],stopStatus(t,index))}
function journeyLeg(t,a,b){
 const ia=t.route.findIndex(p=>p[0]===a),ib=t.route.findIndex(p=>p[0]===b);
 if(ia<0||ib<=ia)return null;
 const dep=stopOrdinal(t,ia),arr=stopOrdinal(t,ib);
 if(arr<=dep)return null;
 return {train:t,from:a,to:b,fromIdx:ia,toIdx:ib,dep,arr};
}
function findJourneys(from,to,highSpeedOnly=false){
 if(from===to)return [];
 const departures=[],arrivals=[],direct=[];
 for(const t of TRAINS){
  if(statusTone(t.status)==='cancelled'||(highSpeedOnly&&!isHighSpeed(t)))continue;
  const i=t.route.findIndex(p=>p[0]===from),j=t.route.findIndex(p=>p[0]===to);
  if(i>=0&&i<t.route.length-1){
   const dep=stopOrdinal(t,i);
   for(let k=i+1;k<t.route.length;k++){
    const arr=stopOrdinal(t,k);if(arr>dep&&arr-dep<=1440)departures.push({train:t,from,fromIdx:i,to:t.route[k][0],toIdx:k,dep,arr});
   }
   if(j>i){const leg=journeyLeg(t,from,to);if(leg)direct.push({key:t.id,legs:[leg],dep:leg.dep,arr:leg.arr,change:0})}
  }
  if(j>0){
   for(let k=0;k<j;k++){
    const dep=stopOrdinal(t,k),arr=stopOrdinal(t,j);
    if(arr>dep&&arr-dep<=1440)arrivals.push({train:t,from:t.route[k][0],fromIdx:k,to,toIdx:j,dep,arr});
   }
  }
 }
 // Only the earliest usable onward train at each interchange for each first leg.
 const onwardByOrigin=new Map();for(const a of arrivals){if(!onwardByOrigin.has(a.from))onwardByOrigin.set(a.from,[]);onwardByOrigin.get(a.from).push(a)}
 for(const list of onwardByOrigin.values())list.sort((a,b)=>a.dep-b.dep||a.arr-b.arr);
 const changes=[];
 for(const one of departures){
  if(one.to===to)continue;
  const onwards=onwardByOrigin.get(one.to)||[];
  let best=null;
  for(const two of onwards){
   if(two.train.id===one.train.id)continue;
   const wait=two.dep-one.arr;
   if(wait<12||wait>145)continue;
   if(two.arr-one.dep>1300)continue;
   if(!best||two.arr<best.arr)best=two;
  }
  if(best){
   const a={...one},b={...best};
   changes.push({key:a.train.id+'|'+b.train.id+'|'+a.to,legs:[a,b],dep:a.dep,arr:b.arr,change:1,interchange:a.to,wait:b.dep-a.arr});
  }
 }
 // Avoid near-identical results: at most one best change for each originating train.
 const bestByTrain=new Map();
 for(const result of changes){const id=result.legs[0].train.id,previous=bestByTrain.get(id);if(!previous||result.arr<previous.arr)bestByTrain.set(id,result)}
 let merged=[...direct,...bestByTrain.values()];
 // When a direct or one-change itinerary is unavailable, look for two sensible changes.
 if(!merged.length){
  const startingPoints=new Set(departures.map(l=>l.to));
  const middleByOrigin=new Map();
  for(const t of TRAINS){
   if(statusTone(t.status)==='cancelled'||(highSpeedOnly&&!isHighSpeed(t)))continue;
   for(let i=0;i<t.route.length-1;i++){
    const station=t.route[i][0];if(!startingPoints.has(station))continue;
    const dep=stopOrdinal(t,i);
    const legs=middleByOrigin.get(station)||[];
    for(let k=i+1;k<t.route.length;k++){
     const arr=stopOrdinal(t,k);
     if(arr>dep&&arr-dep<1100)legs.push({train:t,from:station,to:t.route[k][0],fromIdx:i,toIdx:k,dep,arr});
    }
    middleByOrigin.set(station,legs);
   }
  }
  const bestByInitial=new Map();
  for(const one of departures){
   const mids=middleByOrigin.get(one.to)||[];
   for(const two of mids){
    if(one.train.id===two.train.id||two.to===from)continue;
    const wait1=two.dep-one.arr;
    if(wait1<12||wait1>145)continue;
    const last=onwardByOrigin.get(two.to)||[];
    for(const three of last){
     if(three.train.id===one.train.id||three.train.id===two.train.id)continue;
     const wait2=three.dep-two.arr;
     if(wait2<12||wait2>145||three.arr-one.dep>1340)continue;
     const result={key:one.train.id+'|'+two.train.id+'|'+three.train.id,legs:[one,two,three],dep:one.dep,arr:three.arr,change:2};
     const previous=bestByInitial.get(one.train.id);
     if(!previous||result.arr<previous.arr)bestByInitial.set(one.train.id,result);
    }
   }
  }
  merged=[...bestByInitial.values()];
 }
 // Remove implausibly slow detours when much quicker journeys exist.
 if(merged.length){
  const bestDuration=Math.min(...merged.map(j=>j.arr-j.dep));
  const maxDuration=Math.min(1280,Math.max(bestDuration*1.45,bestDuration+80));
  merged=merged.filter(j=>j.arr-j.dep<=maxDuration);
 }
 // Drop journeys that another option beats outright: it leaves no earlier,
 // arrives no later and needs no more changes (and is better on at least one).
 merged=merged.filter(j=>!merged.some(k=>k!==j&&k.dep>=j.dep&&k.arr<=j.arr&&k.change<=j.change&&(k.dep>j.dep||k.arr<j.arr||k.change<j.change)));
 merged.sort((a,b)=>a.dep-b.dep||a.change-b.change||a.arr-b.arr||a.key.localeCompare(b.key));
 return merged.slice(0,JOURNEY_MAX_RESULTS);
}
function updateBoardTabs(){
 const journey=viewMode==='journeys',arrival=viewMode==='arrivals';
 app.classList.toggle('journey-mode',journey);
 $('journeyPanel').hidden=!journey;$('stationPanel').hidden=journey;
 for(const [id,active] of [['departuresTab',!journey&&!arrival],['arrivalsTab',arrival],['journeysTab',journey]]){
  $(id).classList.toggle('active',active);
  $(id).setAttribute('aria-selected',String(active));
 }
}
function setViewMode(mode){
 if(mode!=='journeys'){viewMode=mode;updateBoardTabs();setCurrentStation(currentStation);return}
 // Opening Journeys shows the last submitted search, without running another.
 selectedJourney=null;selectedTrain=null;selectedPath=[];selectedLegPaths=[];
 selectedNames=appliedJourneyQuery?[appliedJourneyQuery.from,appliedJourneyQuery.to]:[];
 manualTrace=false;viewMode='journeys';updateBoardTabs();renderJourneyResults();
 routeWorld.replaceChildren();drawMap();rrDetailsHeading('Journey details','rr-ui-info');
 detail.innerHTML='<div class="empty">Select a journey to see train-specific facilities.</div>';
 $('focusRoute').hidden=true;app.classList.remove('detail-open');
 requestAnimationFrame(resize);
}
function rrTimeInputMinutes(v){const m=String(v||'').match(/^(\d{1,2}):(\d{2})/);return m?(+m[1])*60+(+m[2]):RR_NOW}
function rrMinutesToInput(n){n=((n%1440)+1440)%1440;return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0')}
function rrJourneyWhen(){return{mode:$('journeyWhenMode').value,time:rrTimeInputMinutes($('journeyWhenTime').value)}}
// Order journeys around the chosen time. Depart after: from that time on,
// wrapping into tomorrow. Arrive by: the latest arrivals before that time first.
function rrJourneyWindow(list){
 const {mode,time}=rrJourneyWhen();
 if(mode==='arrive'){
  // Only journeys that arrive on the day by that time (trains leaving after
  // midnight count too); earlier days are not shown.
  return list.map(j=>({j,back:j.arr<=time?time-j.arr:j.dep>=1440&&j.arr-1440<=time?time-(j.arr-1440):-1}))
   .filter(x=>x.back>=0).sort((a,b)=>a.back-b.back||b.j.dep-a.j.dep).map(x=>Object.assign(x.j,{whenTomorrow:false}));
 }
 return list.map(j=>({j,rel:rrRelative(j.dep,time,0)}))
  .sort((a,b)=>a.rel-b.rel||a.j.change-b.j.change||a.j.arr-b.j.arr)
  .map(x=>Object.assign(x.j,{whenTomorrow:time+x.rel>=1440}));
}
function renderJourneyResults(){
 // The form is a draft. Results always reflect the last Find trains action.
 const query=appliedJourneyQuery;
 const from=query?.from??$('from').value,to=query?.to??$('to').value;
 $('journeyFromName').textContent=from;$('journeyToName').textContent=to;
 board.replaceChildren();
 if(!query){
  $('journeyCount').textContent='';
  board.innerHTML='<div class="empty">Choose stations, then press Find trains.</div>';
  return;
 }
 const onlyDirect=query.directOnly;
 const list=rrJourneyWindow(journeyResults.filter(j=>(!onlyDirect||j.change===0)&&(!query.highSpeedOnly||j.legs.every(l=>isHighSpeed(l.train)))));
 $('journeyCount').textContent=list.length+' '+(list.length===1?'journey':'journeys');
 if(from===to){board.innerHTML='<div class="empty">Choose two different stations.</div>';return}
 if(!list.length){board.innerHTML=`<div class="empty">No ${query.highSpeedOnly?'high-speed ':''}${onlyDirect?'direct ':''}journeys found between these stations in the current timetable.</div>`;return}
 const arriveBy=rrJourneyWhen().mode==='arrive';
 const shown=arriveBy?list.slice(0,journeyShown).reverse():list.slice(0,journeyShown);
 if(arriveBy&&journeyShown<list.length){const more=document.createElement('button');more.type='button';more.className='journey-more journey-earlier';more.textContent='Show earlier journeys';more.addEventListener('click',()=>{journeyShown+=12;renderJourneyResults()});board.append(more)}
 let dividerShown=false;
 for(const j of shown){
  if(j.whenTomorrow&&!dividerShown){dividerShown=true;const d=document.createElement('div');d.className='rr-day-divider';d.textContent='Tomorrow';board.append(d)}
  const el=document.createElement('button');el.type='button';el.className='journey-row'+(selectedJourney?.key===j.key?' selected':'');
  el.style.setProperty('--journey-color',rrCssServiceAccent(j.legs[0].train.type));
  const badges=j.legs.map(l=>`<span class="service${rrOutline(l.train)?' rr-ic-outline':''}" style="--service-color:${rrCssServiceAccent(l.train.type)};--rr-white-text-fill:${rrCssWhiteTextFill(l.train.type)}">${rrTrainLabel(l.train)}</span>`).join('');
  const depMarkup=stopTimeMarkup(j.legs[0].train,j.legs[0].fromIdx),arrLast=j.legs[j.legs.length-1],arrMarkup=stopTimeMarkup(arrLast.train,arrLast.toIdx);
  el.innerHTML=`<div class="journey-times"><span class="journey-clock">${depMarkup}</span><span class="journey-line"></span><span class="journey-clock">${arrMarkup}</span></div><div class="journey-row-meta">${badges}<span class="duration">${fmtDuration(j.arr-j.dep)}</span><span class="change">${j.change?`${j.change} ${j.change===1?'change':'changes'}`:'Direct'}</span></div>${j.change?`<div class="journey-via">${j.legs.slice(0,-1).map((l,i)=>`Change at ${l.to} · ${j.legs[i+1].dep-l.arr} min`).join(' · ')}</div>`:''}`;
  el.addEventListener('click',()=>chooseJourney(j));board.append(el);
 }
 if(!arriveBy&&journeyShown<list.length){const more=document.createElement('button');more.type='button';more.className='journey-more';more.textContent='Show more journeys';more.addEventListener('click',()=>{journeyShown+=12;renderJourneyResults()});board.append(more)}
}
function searchJourneys(autoSelect=false){
 appliedJourneyQuery={
  from:$('from').value,to:$('to').value,
  directOnly:$('directOnly').checked,highSpeedOnly:$('highSpeedOnly').checked
 };
 const query=appliedJourneyQuery;
 journeyResults=findJourneys(query.from,query.to,query.highSpeedOnly);
 journeyShown=12;setViewMode('journeys');board.scrollTop=0;
 const first=rrJourneyWindow(journeyResults.filter(j=>(!query.directOnly||j.change===0)&&(!query.highSpeedOnly||j.legs.every(l=>isHighSpeed(l.train)))))[0];
 if(autoSelect&&first)chooseJourney(first);
}
// Filters work immediately on the last submitted station pair. Changing the
// From/To form still requires Find trains before results switch to a new route.
function refreshJourneyFilters(){
 if(!appliedJourneyQuery)return;
 const query=appliedJourneyQuery;
 query.directOnly=$('directOnly').checked;
 query.highSpeedOnly=$('highSpeedOnly').checked;
 journeyResults=findJourneys(query.from,query.to,query.highSpeedOnly);
 journeyShown=12;
 const previous=selectedJourney;
 const stillAvailable=previous&&journeyResults.find(j=>
  j.key===previous.key&&(!query.directOnly||j.change===0)&&
  (!query.highSpeedOnly||j.legs.every(l=>isHighSpeed(l.train)))
 );
 if(previous&&!stillAvailable){
  selectedJourney=null;selectedTrain=null;selectedPath=[];selectedLegPaths=[];
  selectedNames=[query.from,query.to];manualTrace=false;
  routeWorld.replaceChildren();
  rrDetailsHeading('Journey details','rr-ui-info');
  detail.innerHTML='<div class="empty">Select a journey to see train-specific facilities.</div>';
  $('focusRoute').hidden=true;app.classList.remove('detail-open');
  drawMap();requestAnimationFrame(resize);
 }else if(stillAvailable)selectedJourney=stillAvailable;
 renderJourneyResults();board.scrollTop=0;
}
function getSegmentPath(t,a,b){
 const start=t.route.findIndex(p=>p[0]===a),end=t.route.findIndex(p=>p[0]===b);
 if(start<0||end<=start)return[];
 const pieces=[];
 for(let i=start;i<end;i++){
  const s=S.get(t.route[i][0]),d=S.get(t.route[i+1][0]);if(!s||!d)continue;
  const seg=shortest(s.point,d.point,t.type==='Regio');pieces.push(...(pieces.length?seg.slice(1):seg));
 }
 return pieces;
}
function chooseJourney(j){
 selectedJourney=j;selectedTrain=null;manualTrace=false;
 selectedLegPaths=j.legs.map(l=>({path:getSegmentPath(l.train,l.from,l.to),color:C[l.train.type]}));
 selectedPath=selectedLegPaths.flatMap((p,i)=>i?p.path.slice(1):p.path);
 selectedNames=[...new Set(j.legs.flatMap(l=>l.train.route.slice(l.fromIdx,l.toIdx+1).map(s=>s[0])))];
 routeColor=C[j.legs[0].train.type];
 fillJourneyDetails(j);detail.scrollTop=0;renderJourneyResults();drawRoute();drawMap();
 app.classList.add('detail-open');
 requestAnimationFrame(()=>{resize();focusRoute()});
}
function rrPlatformAt(t,station){return t.platforms?.[station]||t.plat||''}
function rrPlatformMarkup(p,old=''){return p?`<span class="jt-plat${old?' rr-plat-changed':''}" aria-label="Platform ${p}${old?`, changed from ${old}`:''}"${old?` title="Platform changed from ${old}"`:''}>Platform ${p}</span>`:'<span class="jt-plat"></span>'}
function rrJourneyNode(t,index,name,kind,spineIn,spineOut,legIndex){
 // kind: board | alight. spineIn/spineOut: none | solid | dot
 return `<li class="jt-row jt-node jt-${kind}"><div class="jt-time">${stopTimeMarkup(t,index)}</div><div class="jt-spine jt-in-${spineIn} jt-out-${spineOut}" aria-hidden="true"><span class="jt-dot"></span></div><button type="button" class="jt-station stop-station" data-leg="${legIndex}" data-name="${encodeURIComponent(name)}" title="View station">${name}</button>${rrPlatformMarkup(rrPlatformAt(t,name),rrPlatformChangedFrom(t,name))}</li>`;
}
function rrJourneyCoachSummary(t,fromStation,toStation){
 const form=RR_FORMATIONS[rrFormationKey(t)];if(!form)return '';
 const n=form.cars.length;
 return `<details class="jt-coach"><summary><span class="jt-coach-text"><span class="jt-coach-no">Train formation</span><span class="jt-coach-section">${n} coaches</span></span><span class="jt-chevron" aria-hidden="true"></span></summary>${rrCoachFormation(t,fromStation,toStation)}</details>`;
}
function fillJourneyDetails(j){
 rrDetailsHeading('Journey details','rr-ui-info');$('focusRoute').hidden=false;
 const from=j.legs[0].from,to=j.legs[j.legs.length-1].to;
 let rows='';
 j.legs.forEach((leg,index)=>{
  const t=leg.train,last=index===j.legs.length-1;
  const accent=`--leg:${rrCssServiceAccent(t.type)}`;
  const calls=t.route.slice(leg.fromIdx+1,leg.toIdx);
  const callsId=`jt-calls-${index}`;
  const stopsLabel=calls.length?`${calls.length} ${calls.length===1?'stop':'stops'}`:'Non-stop';
  rows+=`<li class="jt-leg" style="${accent}"><ol class="jt-leg-list">`;
  rows+=rrJourneyNode(t,leg.fromIdx,leg.from,'board',index?'dot':'none','solid',index);
  rows+=`<li class="jt-row jt-ride"><div class="jt-time"></div><div class="jt-spine jt-in-solid jt-out-solid" aria-hidden="true"></div><div class="jt-card">
   <h3 class="jt-card-head"><span class="service${rrOutline(t)?' rr-ic-outline':''}" style="--service-color:${rrCssServiceAccent(t.type)};--rr-white-text-fill:${rrCssWhiteTextFill(t.type)}">${rrTrainLabel(t)}</span><span class="jt-service">${rrServiceLabel(t.type)}</span>${statusTag(stopStatus(t,leg.fromIdx))}</h3>${rrAlertMarkup(t,'rr-alert-banner rr-alert-leg')}
   <div class="jt-towards"><span class="jt-towards-label">towards</span> <span>${t.dest}</span></div>
   <div class="jt-meta"><span>${fmtDuration(leg.arr-leg.dep)}</span><span class="jt-sep" aria-hidden="true">·</span>${calls.length?`<button type="button" class="jt-calls-toggle" aria-expanded="false" aria-controls="${callsId}"><span>${stopsLabel}</span><span class="jt-chevron" aria-hidden="true"></span></button>`:`<span>${stopsLabel}</span>`}</div>
   ${rrJourneyCoachSummary(t,leg.from,leg.to)}
  </div></li>`;
  if(calls.length){
   rows+=`<li class="jt-calls" id="${callsId}" hidden><ol class="jt-calls-list">${calls.map(([name],i)=>{
    const k=leg.fromIdx+1+i;
    return `<li class="jt-row jt-call"><div class="jt-time">${stopTimeMarkup(t,k)}</div><div class="jt-spine jt-in-solid jt-out-solid" aria-hidden="true"><span class="jt-tick"></span></div><button type="button" class="jt-station stop-station" data-leg="${index}" data-name="${encodeURIComponent(name)}" title="View station">${name}</button>${rrPlatformMarkup(t.platforms?.[name]||'',rrPlatformChangedFrom(t,name))}</li>`;
   }).join('')}</ol></li>`;
  }
  rows+=rrJourneyNode(t,leg.toIdx,leg.to,'alight','solid',last?'none':'dot',index);
  rows+=`</ol></li>`;
  if(!last){
   const next=j.legs[index+1],station=leg.to;
   const arrivalPlatform=rrPlatformAt(t,station)||'—',departurePlatform=rrPlatformAt(next.train,station)||'—';
   rows+=`<li class="jt-row jt-transfer"><div class="jt-time"></div><div class="jt-spine jt-in-dot jt-out-dot" aria-hidden="true"></div><div class="jt-transfer-box"><strong>Change at ${station}</strong><span class="transfer-detail">${next.dep-leg.arr} min · Arrive platform ${arrivalPlatform} · Depart platform ${departurePlatform}</span></div></li>`;
  }
 });
 const depFirst=j.legs[0],arrLast=j.legs[j.legs.length-1];
 detail.innerHTML=`<div class="journey-hero"><div class="journey-summary-time"><div><strong>${stopTimeMarkup(depFirst.train,depFirst.fromIdx)}</strong><small>Departs</small><span class="station">${from}</span></div><span class="arrow" aria-hidden="true"><svg class="rr-arrow-icon" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><use href="#rr-picto-arrow-right"></use></svg></span><div class="journey-arrival"><strong>${stopTimeMarkup(arrLast.train,arrLast.toIdx)}</strong><small>Arrives</small><span class="station">${to}</span></div></div><div class="journey-summary-sub">${fmtDuration(j.arr-j.dep)} · ${j.change?`${j.change} ${j.change===1?'change':'changes'}`:'Direct'}</div></div><ol class="jt-timeline" aria-label="Journey route">${rows}</ol>`;
 detail.querySelectorAll('.jt-calls-toggle').forEach(btn=>btn.addEventListener('click',()=>{
  const open=btn.getAttribute('aria-expanded')!=='true';
  btn.setAttribute('aria-expanded',String(open));
  document.getElementById(btn.getAttribute('aria-controls')).hidden=!open;
 }));
 detail.querySelectorAll('.jt-coach').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)requestAnimationFrame(rrEnsureCoachVisible)}));
 detail.querySelectorAll('.stop-station').forEach(btn=>btn.addEventListener('click',()=>{
  const name=decodeURIComponent(btn.dataset.name),returned=j;
  setCurrentStation(name);fillStationInfo(name,null,returned);
 }));
}
$('departuresTab').addEventListener('click',()=>setViewMode('departures'));
$('arrivalsTab').addEventListener('click',()=>setViewMode('arrivals'));
$('journeysTab').addEventListener('click',()=>setViewMode('journeys'));
// Filter existing results immediately; new stations still require Find trains.
$('directOnly').addEventListener('change',refreshJourneyFilters);
$('highSpeedOnly').addEventListener('change',refreshJourneyFilters);
$('journeyWhenTime').value=rrMinutesToInput(RR_NOW);
function rrJourneyWhenChanged(){if(!appliedJourneyQuery)return;journeyShown=12;renderJourneyResults();board.scrollTop=rrJourneyWhen().mode==='arrive'?board.scrollHeight:0}
$('journeyWhenMode').addEventListener('change',()=>rrJourneyWhenChanged());
$('journeyWhenTime').addEventListener('change',()=>rrJourneyWhenChanged());
$('journeyWhenNow').addEventListener('click',()=>{$('journeyWhenMode').value='depart';$('journeyWhenTime').value=rrMinutesToInput(rrNowMinutes());rrJourneyWhenChanged()});
// Keep the clock moving: refresh live status every minute, and start a new
// day's running pattern after midnight.
// Re-render an open train or journey panel when its live status changes,
// keeping the scroll position and any sections the viewer has opened.
function rrRefreshOpenDetails(){
 const top=detail.scrollTop;
 if(selectedTrain&&!selectedTrain.tomorrow&&detail.querySelector('.train-hero')){
  const live=TRAINS.find(x=>x.id===selectedTrain.id);if(live)selectedTrain.status=live.status;
  fillDetails(selectedTrain);
 }else if(selectedJourney&&detail.querySelector('.jt-timeline')){
  const calls=[...detail.querySelectorAll('.jt-calls-toggle')].map(b=>b.getAttribute('aria-expanded')==='true');
  const coaches=[...detail.querySelectorAll('.jt-coach')].map(d=>d.open);
  fillJourneyDetails(selectedJourney);
  detail.querySelectorAll('.jt-calls-toggle').forEach((b,i)=>{if(calls[i])b.click()});
  detail.querySelectorAll('.jt-coach').forEach((d,i)=>{if(coaches[i])d.open=true});
 }else return;
 detail.scrollTop=top;
}
setInterval(()=>{
 const before=TRAINS.map(t=>t.status).join('|');
 const key=rrDateKey(new Date());RR_NOW=rrNowMinutes();
 if(key!==RR_DAY_KEY){RR_DAY_KEY=key;rrApplyDailyOperations();rrAssignDailyAlerts()}else rrRefreshLiveStatus();
 if(viewMode!=='journeys'){const top=board.scrollTop;drawBoard();board.scrollTop=top}
 if(TRAINS.map(t=>t.status).join('|')!==before)rrRefreshOpenDetails();
},60000);
$('trace').onclick=()=>searchJourneys();
$('clear').onclick=()=>{
 appliedJourneyQuery=null;journeyResults=[];
 viewMode='departures';updateBoardTabs();selectedJourney=null;selectedLegPaths=[];clear();
};
// Swap the draft station values without changing the displayed results.
$('swapStations').addEventListener('click',()=>{
 const from=$('from'),to=$('to'),previousFrom=from.value;
 from.value=to.value;to.value=previousFrom;
 pickerViews.get('from')?.sync();
 pickerViews.get('to')?.sync();
});

stationSelect.addEventListener('change',e=>setCurrentStation(e.target.value));
$('collapse').onclick=()=>{
 app.classList.toggle('folded');
 const is=app.classList.contains('folded');
 const control=$('collapse');
 const action=is?'Expand departures':'Collapse departures';
 control.setAttribute('aria-label',action);
 control.setAttribute('aria-expanded',String(!is));
 control.title=action;
 setTimeout(resize,200);
};
$('closeDetail').onclick=()=>{app.classList.remove('detail-open');requestAnimationFrame(resize)};
const ro=new ResizeObserver(()=>resize());ro.observe(container);

/* v46: relocate the functional From/To planner under mobile timetable. */
const rrPlannerMobileQuery=window.matchMedia('(max-width:750px)');
const rrPlannerTools=document.querySelector('.map-tools');
const rrPlannerDesktopHome=document.querySelector('.map-header');
const rrPlannerMobileHome=document.getElementById('mobilePlannerSlot');
function rrPlacePlanner(){
 const parent=rrPlannerMobileQuery.matches?rrPlannerMobileHome:rrPlannerDesktopHome;
 if(rrPlannerTools.parentElement!==parent){
  pickerViews.get('from')?.shut();pickerViews.get('to')?.shut();
  parent.append(rrPlannerTools);
 }
}
rrPlacePlanner();
rrPlannerMobileQuery.addEventListener('change',()=>{rrPlacePlanner();requestAnimationFrame(resize)});

pathsByType();stationList();['stationSelect','from','to'].forEach(setupSearchPicker);updateBoardTabs();resize();setCurrentStation(currentStation);
// Recompute map-label collision positions once the hosted fonts are available.
if (document.fonts && document.fonts.load) {
  Promise.all([
    document.fonts.load('400 14px Frutiger'),
    document.fonts.load('500 15.625px Frutiger'),
    document.fonts.load('700 15.625px Frutiger')
  ]).then(()=>{if(W&&H)updateWorld()}).catch(()=>{});
}

/* Appearance is a site preference; System tracks OS changes even after load. */
const rrAppearanceKey='rr-info-appearance';
const rrAppearancePicker=document.getElementById('rrAppearancePicker');
const rrAppearanceToggle=document.getElementById('rrAppearanceToggle');
const rrAppearanceMenu=document.getElementById('rrAppearanceMenu');
const rrAppearanceMedia=window.matchMedia('(prefers-color-scheme: dark)');
function rrCloseAppearance(){
 rrAppearanceMenu.hidden=true;
 rrAppearanceToggle.setAttribute('aria-expanded','false');
}
function rrSetAppearance(selected,persist=false){
 const choice=['light','dark','system'].includes(selected)?selected:'system';
 const dark=choice==='dark'||(choice==='system'&&rrAppearanceMedia.matches);
 document.documentElement.dataset.appearance=choice;
 document.documentElement.dataset.theme=dark?'dark':'light';
 document.documentElement.style.colorScheme=dark?'dark':'light';
 rrAppearanceToggle.setAttribute('aria-label','Appearance: '+choice[0].toUpperCase()+choice.slice(1));
 rrAppearanceToggle.title='Appearance: '+choice[0].toUpperCase()+choice.slice(1);
 rrAppearanceMenu.querySelectorAll('[data-appearance-choice]').forEach(button=>{
   button.setAttribute('aria-pressed',String(button.dataset.appearanceChoice===choice));
 });
 const themeMeta=document.querySelector('meta[name="theme-color"]');
 if(themeMeta)themeMeta.content=RR_UI_CSS_COLOR('--surface');
 if(persist){try{localStorage.setItem(rrAppearanceKey,choice)}catch(_){}}
 if(W&&H){drawRoute();drawMap()} // Refresh all map route strokes and station colours.
}
rrAppearanceToggle.addEventListener('click',()=>{
 rrCloseLanguage();
 const opening=rrAppearanceMenu.hidden;
 rrAppearanceMenu.hidden=!opening;
 rrAppearanceToggle.setAttribute('aria-expanded',String(opening));
});
rrAppearanceMenu.querySelectorAll('[data-appearance-choice]').forEach(button=>{
 button.addEventListener('click',()=>{
  rrSetAppearance(button.dataset.appearanceChoice,true);
  rrCloseAppearance();
  rrAppearanceToggle.focus();
 });
});
document.addEventListener('pointerdown',event=>{
 if(!rrAppearanceMenu.hidden&&!rrAppearancePicker.contains(event.target))rrCloseAppearance();
});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&!rrAppearanceMenu.hidden){
  rrCloseAppearance();rrAppearanceToggle.focus();
 }
});
if(rrAppearanceMedia.addEventListener)rrAppearanceMedia.addEventListener('change',()=>{
 if(document.documentElement.dataset.appearance==='system')rrSetAppearance('system');
});
else rrAppearanceMedia.addListener(()=>{
 if(document.documentElement.dataset.appearance==='system')rrSetAppearance('system');
});
window.addEventListener('storage',event=>{
 if(event.key===rrAppearanceKey)rrSetAppearance(event.newValue||'system');
});
rrSetAppearance(document.documentElement.dataset.appearance||'system');


/* French (France) interface localisation. Station names, routes, map SVG
   and timetable datasets remain unchanged. Original English DOM strings are
   preserved for instantaneous, reversible language changes. */
let rrActiveLocale='en';
const rrEnglishText=new WeakMap();
const rrTranslatedText=new WeakMap();
const rrEnglishAttrs=new WeakMap();
const rrTranslatedAttrs=new WeakMap();
const rrUIRegions='.rr-phone-toggle,.side,.details,.map-tools,.map-legend,.zoom-control,.rr-site-settings,.mobile-site-footer,.desktop-site-footer';
const rrFrenchExact=Object.freeze({
 'Departures':'Départs','Arrivals':'Arrivées','Journeys':'Trajets',
 'Available journeys':'Trajets disponibles','Station information':'Informations sur la gare',
 'Train details':'Détails du train','Journey details':'Détails du trajet',
 'Train information':'Informations sur le train','View route':'Itinéraire',
 'Find trains':'Rechercher','Reset':'Effacer','From':'De','To':'À',
 'Direct only':'Sans correspondance','High-speed only':'Grande vitesse uniquement',
 'Time':'Heure','Train':'Train','Destination':'Destination',
 'Origin':'Provenance','Platform':'Voie','Status':'Statut','Service':'Type de train',
 'Departure':'Départ','Arrival':'Arrivée','Calling at':'Arrêts desservis',
 'On time':'À l’heure','Boarding':'Embarquement en cours','Cancelled':'Supprimé',
 'Direct':'Direct','Departs':'Départ','Arrives':'Arrivée',
 'Show more journeys':'Afficher plus de trajets',
 'No departures.':'Aucun départ.','No arrivals.':'Aucune arrivée.',
 'Select a departure.':'Sélectionnez un départ.',
 'Select a train.':'Sélectionnez un train.',
 'Select a train to view details.':'Sélectionnez un train pour voir les détails.',
 'Select a journey to see train-specific facilities.':'Sélectionnez un trajet pour consulter les équipements à bord.',
 'Choose two different stations.':'Choisissez deux gares différentes.',
 'Choose stations, then press Find trains.':'Choisissez les gares, puis cliquez sur Rechercher.',
 'No matching stations':'Aucune gare trouvée',
 'Standard facilities':'Équipements et services',
 'Additional station facilities':'Services complémentaires',
 'Coach formation & on-board facilities':'Composition du train et services à bord',
 'Train formation':'Composition du train',
 'Standard':'Classe Standard','First Class':'Première classe',
 'First Class seats':'Places de première classe','First Sleeper':'Voiture-lits Première','First sleeper':'Voiture-lits Première',
 'Seated accommodation':'Voiture à places assises',
 'Dining':'Voiture-restaurant','Café':'Café','Quiet Zone':'Espace calme',
 'Quiet zone':'Espace calme','Family Zone':'Espace famille','Family zone':'Espace famille',
 'Family':'Espace famille','Reserved seats':'Places réservées','Reserved Seats':'Places réservées',
 'Priority seats':'Places prioritaires','Priority Seating':'Places prioritaires',
 'Places for wheelchair users':'Emplacements pour fauteuils roulants',
 'Bicycle spaces':'Emplacements vélos','Power sockets':'Prises électriques',
 'Couchette':'Couchette','Sleeper':'Voiture-lits','Sleeper cabin':'Cabine-lit',
 'Shower':'Douche','Parent-and-child compartment':'Compartiment parents-enfants',
 'Locomotive':'Motrice','Power car':'Motrice',
 'Information':'Information','Accessible':'Accès PMR',
 'Accessible Toilet':'Toilettes accessibles','Accessible toilet':'Toilettes accessibles',
 'Toilet':'Toilettes','Lift':'Ascenseur','Escalator':'Escalier mécanique',
 'Interchange':'Correspondances','Luggage':'Bagages','Cycles':'Vélos',
 'Baby Changing':'Table à langer','Baby changing':'Table à langer',
 'Airport':'Aéroport','Power':'Prises électriques','Seat':'Places réservées',
 'Quiet':'Espace calme','Cabin':'Cabine-lit','First':'Première classe',
 'Light':'Clair','Dark':'Sombre','System':'Système','Appearance':'Apparence',
 'Language':'Langue','Site preferences':'Préférences du site',
 'Zoom in':'Zoom avant','Zoom out':'Zoom arrière','Fit map':'Ajuster la carte',
 'Close train details':'Fermer les détails du train',
 'Collapse departures':'Réduire le panneau','Expand departures':'Déployer le panneau',
 'Search station':'Rechercher une gare','Browse stations':'Parcourir les gares',
 'Current station':'Gare sélectionnée','From station':'Gare de départ',
 'To station':'Gare d’arrivée',
 'Swap From and To stations':'Inverser le départ et l’arrivée',
 'View station information':'Voir les informations sur la gare',
 'View station':'Voir la gare','Railway information':'Informations ferroviaires',
 'Journey planner':'Recherche de trajets',
 'Interactive RR Info railway map':'Carte ferroviaire interactive RR Info',
 'High-speed available':'Grande vitesse disponible','Mainline only':'Magistrale uniquement',
 'RR Mainline':'RR Magistrale','RR InterCity':'RR Intercités','RR Nightline':'RR Nocturne',
 'No journeys found between these stations in the current timetable.':'Aucun trajet trouvé entre ces gares dans les horaires disponibles.',
 'Back to journey':'Retour au trajet','Back to':'Retour au train','Engineering works':'Travaux',
 'Tomorrow':'Demain','Depart after':'Départ après','Arrive by':'Arrivée avant','Now':'Maintenant','Search by':'Rechercher par',
 'Map':'Carte','Timetable':'Horaires',
 'Show earlier journeys':'Afficher les trajets précédents','Arriving':'À l’approche',
 'Sleeper cabins':'Cabines-lits','Night catering':'Restauration de nuit',
 'Standard accommodation':'Places en classe Standard',
 'Dining coach with restaurant seating':'Voiture-restaurant avec places assises',
 'Café counter':'Espace café','Couchettes':'Couchettes',
 'First sleepers with showers':'Voitures-lits Première avec douches',
 'First sleeper with shower':'Voiture-lits Première avec douche',
 'First Class · Quiet Zone':'Première classe · Espace calme',
 'First Class · driving cab':'Première classe · cabine de conduite',
 'First Class':'Première classe',
 'Reserved seats · Quiet Zone':'Places réservées · Espace calme',
 'Accessible seated coach · priority seating':'Voiture accessible avec places prioritaires',
 'Bicycles and luggage':'Vélos et bagages',
 'Bicycle and luggage spaces':'Emplacements vélos et bagages',
 'Family area · toddler space':'Espace famille · espace jeunes enfants',
 'Wheelchair accommodation · accessible toilet':'Emplacement PMR · toilettes accessibles',
 'French edition in preparation':'Version française en préparation',
 'Soon':'Bientôt',
  '© Radelish Railways plc 2026':'© 2026 Société des chemins de fer de Radegne'
});
function rrFrenchText(source){
 if(!source || !source.trim())return source;
 const leading=source.match(/^\s*/)[0], trailing=source.match(/\s*$/)[0];
 let s=source.slice(leading.length,source.length-trailing.length);
 if(Object.prototype.hasOwnProperty.call(rrFrenchExact,s))return leading+rrFrenchExact[s]+trailing;
 if(RR_ALERT_FR.has(s))return leading+RR_ALERT_FR.get(s)+trailing;
 s=s
  .replace(/\bExpected \+(\d+) min\b/g,(_,n)=>'Retard +'+n+' min')
  .replace(/\b(\d+) journeys\b/g,(_,n)=>n+' trajets')
  .replace(/\b1 journey\b/g,'1 trajet')
  .replace(/\b(\d+) changes\b/g,(_,n)=>n+' correspondances')
  .replace(/\b1 change\b/g,'1 correspondance')
  .replace(/\bChange at ([^·]+?)(?=\s*·|$)/g,(_,name)=>'Correspondance à '+name.trim())
  .replace(/^towards$/,'direction')
  .replace(/^(\d+) stops$/,'$1 arrêts').replace(/^1 stop$/,'1 arrêt').replace(/^Non-stop$/,'Sans arrêt')
  .replace(/^Coach (\d+)$/,'Voiture $1')
  .replace(/^Platform (\S+)$/,'Voie $1')
  .replace(/^Journey route$/,'Itinéraire du trajet')
  .replace(/^(\d+) coaches$/,'$1 voitures')
  .replace(/^Platform changed from (\S+)$/,'Voie modifiée (initialement $1)')
  .replace(/^Platform (\S+), changed from (\S+)$/,'Voie $1, initialement $2')
  .replace(/\bArrive platform (\S+)/g,'Voie d’arrivée : $1')
  .replace(/\bDepart platform (\S+)/g,'Voie de départ : $1')
  .replace(/\bBack to journey\b/g,'Retour au trajet')
  .replace(/\bBack to train ([\w -]+)/g,'Retour au train $1')
  .replace(/\bBack to ([A-Z]{1,5}\s*\d+)\b/g,'Retour au train $1')
  .replace(/\bStops between sections ([A-F]) and ([A-F])\b/g,'Arrêt entre les secteurs $1 et $2')
  .replace(/\bStops at section ([A-F])\b/g,'Arrêt en secteur $1')
  .replace(/\bDay (\d+)\b/g,'Jour $1')
  .replace(/\bScheduled ([^;]+); revised (.+)/g,'Heure prévue : $1 ; heure estimée : $2')
  .replace(/\bShow departures at (.+)/g,'Afficher les départs de $1')
  .replace(/\bAppearance: (Light|Dark|System)\b/g,(_,v)=>'Apparence : '+rrFrenchExact[v])
  .replace(/\bLanguage: (English|Français)\b/g,(_,name)=>'Langue : '+name)
  .replace(/\b(\d+)h (\d{2})m\b/g,'$1 h $2')
  .replace(/\bNo (high-speed )?(direct )?journeys found between these stations in the current timetable\./g,
   (_,high,direct)=>'Aucun trajet'+(high?' à grande vitesse':'')+(direct?' sans correspondance':'')+' trouvé entre ces gares dans les horaires disponibles.')
  .replace(/\bRR InterCity\b/g,'RR Intercités')
  .replace(/\bRR Nightline\b/g,'RR Nocturne')
  .replace(/\bFirst Sleeper\b/g,'Voiture-lits Première')
  .replace(/\bFirst Class\b/g,'Première classe')
  .replace(/\bPower car\b/g,'Motrice')
  .replace(/\bLocomotive\b/g,'Motrice');
 return leading+s+trailing;
}
function rrLocalizeTextNode(node,reset=false){
 if(node.parentElement?.closest('script,style,svg,option[value]:not([data-rr-l10n])'))return;
 const current=node.nodeValue;
 const previous=rrTranslatedText.get(node);
 if(!reset&&previous!==undefined&&previous===current)return;
 if(!reset||!rrEnglishText.has(node)||(previous!==undefined&&previous!==current))rrEnglishText.set(node,current);
 const original=rrEnglishText.get(node);
 const wanted=rrActiveLocale==='fr'?rrFrenchText(original):original;
 rrTranslatedText.set(node,wanted);
 if(current!==wanted)node.nodeValue=wanted;
}
function rrLocalizeAttrs(el,reset=false){
 if(el.closest('svg,script,style'))return;
 for(const attr of ['aria-label','title','placeholder']){
  if(!el.hasAttribute(attr))continue;
  const current=el.getAttribute(attr),all=rrEnglishAttrs.get(el)||new Map(),last=rrTranslatedAttrs.get(el)||new Map();
  if(!reset&&last.has(attr)&&last.get(attr)===current)continue;
  if(!reset||!all.has(attr)||(last.has(attr)&&last.get(attr)!==current))all.set(attr,current);
  rrEnglishAttrs.set(el,all);
  const wanted=rrActiveLocale==='fr'?rrFrenchText(all.get(attr)):all.get(attr);
  last.set(attr,wanted);rrTranslatedAttrs.set(el,last);
  if(current!==wanted)el.setAttribute(attr,wanted);
 }
}
function rrLocalizeSubtree(root,reset=false){
 if(!root)return;
 if(root.nodeType===3){rrLocalizeTextNode(root,reset);return}
 if(root.nodeType!==1 || root.closest('svg,script,style'))return;
 rrLocalizeAttrs(root,reset);
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);
 let node;
 while((node=walker.nextNode())){
  if(node.nodeType===3)rrLocalizeTextNode(node,reset);
  else rrLocalizeAttrs(node,reset);
 }
}
const rrLocaleTargets=[...document.querySelectorAll(rrUIRegions)];
let rrLocaleObserver=null;
function rrRefreshBrand(code){
 const english=code!=='fr', light=english?'rr-mainline-long-light.svg':'rr-magistrale-long-light.svg';
 const dark=english?'rr-mainline-long-dark.svg':'rr-magistrale-long-dark.svg';
 const brand=document.querySelector('.longmark');
 if(brand){
  for(const img of brand.querySelectorAll('img')){
   const file=img.classList.contains('logo-dark')?dark:light;
   const path='./assets/branding/'+file;
   if(img.getAttribute('src')!==path)img.setAttribute('src',path);
   img.alt=english?'RR Mainline':'RR Magistrale';
   img.width=english?410:466;img.height=90;
  }
 }
}
function rrApplyLocale(code){
 rrActiveLocale=code==='fr'?'fr':'en';
 rrRefreshBrand(rrActiveLocale);
 if(rrLocaleObserver)rrLocaleObserver.disconnect();
 rrLocaleTargets.forEach(root=>rrLocalizeSubtree(root,true));
 if(rrLocaleObserver)rrLocaleTargets.forEach(root=>rrLocaleObserver.observe(root,{
  subtree:true,childList:true,characterData:true,attributes:true,
  attributeFilter:['title','aria-label','placeholder']
 }));
}
rrLocaleObserver=new MutationObserver(records=>{
 if(rrActiveLocale!=='fr')return;
 rrLocaleObserver.disconnect();
 for(const mutation of records){
  if(mutation.type==='characterData')rrLocalizeTextNode(mutation.target);
  else if(mutation.type==='attributes')rrLocalizeAttrs(mutation.target);
  else for(const child of mutation.addedNodes)rrLocalizeSubtree(child);
 }
 rrLocaleTargets.forEach(root=>rrLocaleObserver.observe(root,{
  subtree:true,childList:true,characterData:true,attributes:true,
  attributeFilter:['title','aria-label','placeholder']
 }));
});

/* Translation-ready language selection. French remains disabled until the
   full content, dynamic timetables and train details are translated. */
const rrLanguageKey='rr-info-language';
const rrLanguagePicker=document.getElementById('rrLanguagePicker');
const rrLanguageToggle=document.getElementById('rrLanguageToggle');
const rrLanguageMenu=document.getElementById('rrLanguageMenu');
const rrSupportedLanguages=Object.freeze({
 en:{label:'English',ready:true},
 fr:{label:'Français',ready:true}
});
function rrCloseLanguage(){
 rrLanguageMenu.hidden=true;
 rrLanguageToggle.setAttribute('aria-expanded','false');
}
function rrSetLanguage(code,persist=false){
 const chosen=rrSupportedLanguages[code]?.ready?code:'en';
 document.documentElement.lang=chosen;
 document.documentElement.dataset.language=chosen;
  rrApplyLocale(chosen);
 rrLanguageToggle.setAttribute('aria-label','Language: '+rrSupportedLanguages[chosen].label);
 rrLanguageMenu.querySelectorAll('[data-language-choice]').forEach(option=>{
   const locale=option.dataset.languageChoice;
   option.disabled=!rrSupportedLanguages[locale]?.ready;
   option.setAttribute('aria-pressed',String(chosen===locale));
 });
 if(persist){try{localStorage.setItem(rrLanguageKey,chosen)}catch(_){}}
}
rrLanguageToggle.addEventListener('click',()=>{
 rrCloseAppearance();
 const opening=rrLanguageMenu.hidden;
 rrLanguageMenu.hidden=!opening;
 rrLanguageToggle.setAttribute('aria-expanded',String(opening));
});
rrLanguageMenu.querySelectorAll('[data-language-choice]').forEach(button=>{
 button.addEventListener('click',()=>{
  if(button.disabled)return;
  rrSetLanguage(button.dataset.languageChoice,true);
  rrCloseLanguage();
  rrLanguageToggle.focus();
 });
});
document.addEventListener('pointerdown',event=>{
 if(!rrLanguageMenu.hidden&&!rrLanguagePicker.contains(event.target))rrCloseLanguage();
});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&!rrLanguageMenu.hidden){rrCloseLanguage();rrLanguageToggle.focus()}
});
window.addEventListener('storage',event=>{
 if(event.key===rrLanguageKey)rrSetLanguage(event.newValue||'en');
});
let rrInitialLanguage='en';
try{rrInitialLanguage=localStorage.getItem(rrLanguageKey)||'en'}catch(_){}
rrSetLanguage(rrInitialLanguage);


/* Shareable links. The address mirrors what is on screen:
   #departures/<station>, #arrivals/<station>, #train/<id>/<station>,
   #journey/<from>/<to>/<dep|arr>-<hhmm>[/<journey>]. Opening such a link
   restores that view. */
let rrApplyingHash=false;
function rrStateHash(){
 const e=encodeURIComponent;
 if(viewMode==='journeys'&&appliedJourneyQuery){
  const w=rrJourneyWhen(),t=rrMinutesToInput(w.time).replace(':','');
  let h=`#journey/${e(appliedJourneyQuery.from)}/${e(appliedJourneyQuery.to)}/${w.mode==='arrive'?'arr':'dep'}-${t}`;
  if(selectedJourney)h+='/'+e(selectedJourney.key);
  return h;
 }
 if(selectedTrain)return `#train/${e(selectedTrain.id)}/${e(currentStation)}`;
 return `#${viewMode==='arrivals'?'arrivals':'departures'}/${e(currentStation)}`;
}
function rrSyncHash(){
 if(rrApplyingHash)return;
 const h=rrStateHash();
 if(location.hash!==h)try{history.replaceState(null,'',h)}catch(_){}
}
function rrApplyHash(){
 let parts;try{parts=location.hash.replace(/^#/,'').split('/').map(decodeURIComponent)}catch(_){return}
 const [kind,a,b,c,d]=parts;if(!kind)return;
 rrApplyingHash=true;
 try{
  if((kind==='departures'||kind==='arrivals')&&S.has(a)){viewMode=kind;setCurrentStation(a)}
  else if(kind==='train'){
   const t=TRAINS.find(x=>x.id===a);
   if(t){
    viewMode='departures';
    setCurrentStation(b&&S.has(b)&&t.route.some(r=>r[0]===b)?b:t.route[0][0]);
    let row=departures.find(x=>x.id===t.id);
    if(!row){viewMode='arrivals';setCurrentStation(currentStation);row=departures.find(x=>x.id===t.id)}
    if(row)chooseTrain(row);
   }
  }
  else if(kind==='journey'&&S.has(a)&&S.has(b)&&a!==b){
   $('from').value=a;$('to').value=b;pickerViews.get('from')?.sync();pickerViews.get('to')?.sync();
   const m=String(c||'').match(/^(dep|arr)-(\d{2})(\d{2})$/);
   if(m&&+m[2]<24&&+m[3]<60){$('journeyWhenMode').value=m[1]==='arr'?'arrive':'depart';$('journeyWhenTime').value=m[2]+':'+m[3]}
   searchJourneys();
   if(d){const j=journeyResults.find(x=>x.key===d);if(j)chooseJourney(j)}
  }
 }finally{rrApplyingHash=false}
 rrSyncHash();
}
{const baseDrawMap=drawMap;drawMap=function(){const r=baseDrawMap.apply(this,arguments);rrSyncHash();return r}}
{const baseWhen=rrJourneyWhenChanged;rrJourneyWhenChanged=function(){baseWhen();rrSyncHash()}}
window.addEventListener('hashchange',rrApplyHash);
rrApplyHash();
rrSyncHash();

/* All six preference/swap SVG files now contain real vector outlines.
   Inline SVG symbols render across devices without any system-font probe. */
