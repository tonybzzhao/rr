'use strict';
const STATIONS=[{"name":"Stanwell","x":1452,"y":3588,"attach":[1452.0,3588.0],"regio":1},{"name":"Eastden","x":1452,"y":3576,"attach":[1452.0,3576.43],"regio":1},{"name":"Medway Airport","x":1452,"y":3564,"attach":[1452.0,3564.0]},{"name":"Holmford Junction","x":1463,"y":3611,"attach":[1463.09,3611.09],"regio":1},{"name":"Millholme Junction","x":1464,"y":3612,"attach":[1464.0,3612.0],"regio":1},{"name":"Hawbrook Junction","x":1455,"y":3593,"attach":[1454.63,3592.6],"regio":1},{"name":"Birchsted","x":1459,"y":3601,"attach":[1459.5,3601.12],"regio":1},{"name":"Warley","x":1332,"y":3240,"attach":[1332.0,3240.0],"regio":1},{"name":"Melsted","x":1332,"y":3230,"attach":[1332.0,3230.09],"regio":1},{"name":"Thornworth","x":1332,"y":3223,"attach":[1332.0,3222.98],"regio":1},{"name":"Thurlthorpe","x":1332,"y":3214,"attach":[1332.0,3213.64],"regio":1},{"name":"Newthwaite","x":1331,"y":3202,"attach":[1331.25,3201.79],"regio":1},{"name":"Chalfield","x":1329,"y":3193,"attach":[1328.8,3193.28],"regio":1},{"name":"Goldwell","x":1323,"y":3184,"attach":[1322.89,3183.62],"regio":1},{"name":"Kirkford","x":1315,"y":3175,"attach":[1315.33,3175.33],"regio":1},{"name":"Larkhurst","x":1309,"y":3169,"attach":[1308.83,3168.83],"regio":1},{"name":"Sandcote","x":1300,"y":3160,"attach":[1300.02,3160.02],"regio":1},{"name":"Oakthwaite","x":1292,"y":3152,"attach":[1292.5,3152.5],"regio":1},{"name":"Melbridge Central","x":1272,"y":3132,"attach":[1272.0,3132.0]},{"name":"Blackcote","x":1332,"y":3252,"attach":[1332.0,3251.87],"regio":1},{"name":"Dunstow","x":1332,"y":3296,"attach":[1332.0,3295.93],"regio":1},{"name":"Thorndale","x":1332,"y":3305,"attach":[1332.0,3305.14],"regio":1},{"name":"Warbridge","x":1332,"y":3316,"attach":[1332.0,3316.15],"regio":1},{"name":"Newminster","x":1332,"y":3330,"attach":[1332.0,3329.53],"regio":1},{"name":"Blackden","x":1332,"y":3340,"attach":[1332.0,3340.37],"regio":1},{"name":"Heaththorpe","x":1332,"y":3351,"attach":[1332.0,3350.55],"regio":1},{"name":"Highmore","x":1332,"y":3362,"attach":[1332.0,3361.9],"regio":1},{"name":"Grimsmore","x":1332,"y":3371,"attach":[1332.48,3371.18],"regio":1},{"name":"Ulverstow","x":1335,"y":3382,"attach":[1335.02,3382.14],"regio":1},{"name":"Cherrywell","x":1339,"y":3390,"attach":[1339.0,3389.74],"regio":1},{"name":"Elmstow","x":1345,"y":3397,"attach":[1344.54,3396.51],"regio":1},{"name":"Larkminster","x":1349,"y":3401,"attach":[1349.13,3401.13],"regio":1},{"name":"Saxethwaite","x":1355,"y":3407,"attach":[1355.33,3407.33],"regio":1},{"name":"Wakeholme","x":1364,"y":3416,"attach":[1363.53,3415.53],"regio":1},{"name":"Stowdale","x":1369,"y":3421,"attach":[1369.02,3421.02],"regio":1},{"name":"Swanford","x":1376,"y":3428,"attach":[1375.61,3427.61],"regio":1},{"name":"Leamore","x":1383,"y":3435,"attach":[1382.61,3434.61],"regio":1},{"name":"Brentwick","x":1390,"y":3442,"attach":[1389.74,3441.74],"regio":1},{"name":"Leadale","x":1396,"y":3448,"attach":[1395.81,3447.81],"regio":1},{"name":"Stowsted","x":1404,"y":3456,"attach":[1404.0,3456.0],"regio":1},{"name":"Wickton","x":1338,"y":3246,"attach":[1338.42,3246.42],"regio":1},{"name":"Larkcombe","x":1345,"y":3253,"attach":[1345.03,3253.03],"regio":1},{"name":"Little Lynwick","x":1351,"y":3259,"attach":[1351.21,3259.21],"regio":1},{"name":"Silmere","x":1358,"y":3266,"attach":[1358.4,3266.4],"regio":1},{"name":"Redworth","x":1366,"y":3274,"attach":[1365.61,3273.61],"regio":1},{"name":"Thorngate","x":1371,"y":3279,"attach":[1370.67,3278.67],"regio":1},{"name":"Newbrook","x":1378,"y":3286,"attach":[1377.51,3285.51],"regio":1},{"name":"Fenmore","x":1383,"y":3291,"attach":[1382.91,3290.91],"regio":1},{"name":"Bramwick","x":1391,"y":3299,"attach":[1391.35,3299.35],"regio":1},{"name":"Ryested","x":1398,"y":3306,"attach":[1397.92,3305.92],"regio":1},{"name":"Millstow","x":1403,"y":3311,"attach":[1403.06,3311.06],"regio":1},{"name":"Blackton","x":1411,"y":3319,"attach":[1410.51,3318.51],"regio":1},{"name":"Ashhurst","x":1416,"y":3324,"attach":[1416.0,3324.0],"regio":1},{"name":"Wardour","x":1668,"y":3552,"attach":[1668.0,3552.0]},{"name":"Holmden","x":1668,"y":3528,"attach":[1668.0,3528.31],"regio":1},{"name":"Quarrley","x":1666,"y":3499,"attach":[1666.5,3498.96],"regio":1},{"name":"Fernwood","x":1664,"y":3491,"attach":[1663.66,3491.18],"regio":1},{"name":"Hunford","x":1650,"y":3474,"attach":[1650.3,3474.3],"regio":1},{"name":"Beckthorpe","x":1632,"y":3456,"attach":[1632.0,3456.0],"regio":1},{"name":"Wingate","x":1668,"y":3562,"attach":[1668.0,3561.97],"regio":1},{"name":"Warham","x":1668,"y":3570,"attach":[1668.0,3569.95],"regio":1},{"name":"Swanwick","x":1668,"y":3578,"attach":[1668.0,3578.18],"regio":1},{"name":"Ryeby","x":1668,"y":3586,"attach":[1668.0,3586.01],"regio":1},{"name":"Moorwood","x":1668,"y":3593,"attach":[1668.0,3593.49],"regio":1},{"name":"Todfield","x":1668,"y":3603,"attach":[1668.0,3602.73],"regio":1},{"name":"Swanthwaite","x":1668,"y":3614,"attach":[1668.0,3614.02],"regio":1},{"name":"Hartwood","x":1668,"y":3623,"attach":[1668.0,3623.33],"regio":1},{"name":"Hawcote","x":1668,"y":3635,"attach":[1668.0,3634.96],"regio":1},{"name":"Fenholme","x":1668,"y":3645,"attach":[1668.0,3645.23],"regio":1},{"name":"Saxecote","x":1668,"y":3655,"attach":[1668.0,3654.59],"regio":1},{"name":"Walholme","x":1668,"y":3664,"attach":[1668.0,3664.43],"regio":1},{"name":"Burnbrook","x":1668,"y":3675,"attach":[1668.0,3674.76],"regio":1},{"name":"Beckthwaite","x":1668,"y":3684,"attach":[1668.0,3683.65],"regio":1},{"name":"Willowmere","x":1668,"y":3694,"attach":[1668.0,3694.25],"regio":1},{"name":"Eastthorpe","x":1668,"y":3720,"attach":[1668.0,3720.0],"regio":1},{"name":"Highford","x":1668,"y":3544,"attach":[1668.0,3543.87],"regio":1},{"name":"Dundale","x":1668,"y":3536,"attach":[1668.0,3536.29],"regio":1},{"name":"Fernfield","x":1668,"y":3527,"attach":[1668.0,3527.0],"regio":1},{"name":"Walstead","x":1668,"y":3518,"attach":[1668.0,3517.58],"regio":1},{"name":"Brookbury","x":1668,"y":3510,"attach":[1668.0,3510.07],"regio":1},{"name":"Southmere","x":1668,"y":3502,"attach":[1668.0,3501.65],"regio":1},{"name":"Fairgate","x":1668,"y":3495,"attach":[1667.69,3494.67],"regio":1},{"name":"Longden","x":1661,"y":3474,"attach":[1660.66,3473.74],"regio":1},{"name":"Malmere","x":1656,"y":3468,"attach":[1655.73,3467.82],"regio":1},{"name":"Melby","x":1651,"y":3463,"attach":[1651.05,3463.05],"regio":1},{"name":"Longbrook","x":1638,"y":3450,"attach":[1638.14,3450.14],"regio":1},{"name":"Crowfield Junction","x":1632,"y":3444,"attach":[1632.0,3444.0],"regio":1},{"name":"Oakholme","x":1649,"y":3534,"attach":[1649.37,3533.89],"regio":1},{"name":"Longham","x":1640,"y":3529,"attach":[1639.91,3529.17],"regio":1},{"name":"Quarrbridge","x":1632,"y":3528,"attach":[1631.58,3528.0],"regio":1},{"name":"Silcote","x":1620,"y":3528,"attach":[1620.0,3528.0],"regio":1},{"name":"REG-VIC-02","x":1704,"y":3180,"attach":[1704.0,3180.0],"regio":1},{"name":"Millsted","x":1689,"y":3165,"attach":[1689.0,3165.0],"regio":1},{"name":"Penstead","x":1682,"y":3158,"attach":[1682.14,3158.14],"regio":1},{"name":"Blackbrook","x":1675,"y":3151,"attach":[1675.28,3151.28],"regio":1},{"name":"Chalstead","x":1668,"y":3144,"attach":[1667.79,3143.79],"regio":1},{"name":"Millwood","x":1657,"y":3133,"attach":[1657.26,3133.26],"regio":1},{"name":"Woodstow","x":1651,"y":3127,"attach":[1650.64,3126.64],"regio":1},{"name":"Oldton","x":1646,"y":3122,"attach":[1645.61,3121.61],"regio":1},{"name":"Fenden","x":1640,"y":3116,"attach":[1640.34,3116.34],"regio":1},{"name":"Whitham","x":1635,"y":3111,"attach":[1634.64,3110.64],"regio":1},{"name":"Sutgate","x":1628,"y":3104,"attach":[1628.3,3104.3],"regio":1},{"name":"Fernstead","x":1622,"y":3098,"attach":[1622.42,3098.42],"regio":1},{"name":"Eastcombe","x":1615,"y":3091,"attach":[1615.11,3090.83],"regio":1},{"name":"Marwood","x":1611,"y":3084,"attach":[1610.73,3084.25],"regio":1},{"name":"Ashbrook","x":1608,"y":3076,"attach":[1608.39,3076.29],"regio":1},{"name":"Elmdale","x":1608,"y":3068,"attach":[1608.0,3067.81],"regio":1},{"name":"Oakmouth","x":1608,"y":3060,"attach":[1608.0,3060.0]},{"name":"Chalden","x":1704,"y":3196,"attach":[1704.0,3195.9],"regio":1},{"name":"Cherryminster","x":1704,"y":3228,"attach":[1704.0,3227.74],"regio":1},{"name":"Kirkcote","x":1704,"y":3242,"attach":[1704.0,3242.22],"regio":1},{"name":"Lower Ryested","x":1704,"y":3293,"attach":[1704.0,3293.0],"regio":1},{"name":"Blackholme","x":1698,"y":3316,"attach":[1697.68,3316.48],"regio":1},{"name":"Barkwell","x":1692,"y":3324,"attach":[1691.58,3324.35],"regio":1},{"name":"Kirkby","x":1668,"y":3348,"attach":[1667.61,3348.39],"regio":1},{"name":"Victoria Central","x":1656,"y":3360,"attach":[1656.0,3360.0]},{"name":"Leawood","x":1697,"y":3187,"attach":[1696.63,3187.37],"regio":1},{"name":"Warford","x":1691,"y":3193,"attach":[1690.58,3193.42],"regio":1},{"name":"Hartstow","x":1685,"y":3199,"attach":[1684.56,3199.44],"regio":1},{"name":"Faircote","x":1679,"y":3205,"attach":[1678.6,3205.4],"regio":1},{"name":"Hartwick","x":1671,"y":3213,"attach":[1671.27,3212.73],"regio":1},{"name":"Kirkdale","x":1665,"y":3219,"attach":[1665.04,3218.96],"regio":1},{"name":"Bradby","x":1660,"y":3224,"attach":[1659.78,3224.22],"regio":1},{"name":"Moorsted","x":1654,"y":3230,"attach":[1653.58,3230.42],"regio":1},{"name":"Fairbridge","x":1647,"y":3236,"attach":[1647.43,3236.43],"regio":1},{"name":"Leabury","x":1640,"y":3240,"attach":[1640.38,3239.78],"regio":1},{"name":"Salbrook","x":1632,"y":3240,"attach":[1632.0,3240.0],"regio":1},{"name":"Brookdale","x":1696,"y":3180,"attach":[1696.34,3180.0],"regio":1},{"name":"Grimsbury","x":1689,"y":3180,"attach":[1688.52,3180.0],"regio":1},{"name":"Bramthwaite","x":1679,"y":3180,"attach":[1679.31,3180.0],"regio":1},{"name":"Larkthwaite","x":1673,"y":3180,"attach":[1672.85,3180.0],"regio":1},{"name":"Yarford","x":1665,"y":3180,"attach":[1665.3,3180.0],"regio":1},{"name":"Oakgate","x":1659,"y":3180,"attach":[1658.85,3180.0],"regio":1},{"name":"Salcote","x":1652,"y":3180,"attach":[1652.4,3180.01],"regio":1},{"name":"Fenby","x":1645,"y":3181,"attach":[1644.73,3181.47],"regio":1},{"name":"Woldbury","x":1638,"y":3186,"attach":[1638.41,3185.66],"regio":1},{"name":"Longcombe","x":1632,"y":3192,"attach":[1632.0,3192.0],"regio":1},{"name":"Millley","x":1705,"y":3189,"attach":[1705.35,3189.42],"regio":1},{"name":"Birchton","x":1706,"y":3198,"attach":[1706.01,3198.41],"regio":1},{"name":"Long Yarwood","x":1700,"y":3205,"attach":[1700.49,3205.31],"regio":1},{"name":"Wakebrook","x":1689,"y":3204,"attach":[1688.74,3203.94],"regio":1},{"name":"Thurlham","x":1679,"y":3202,"attach":[1679.31,3201.96],"regio":1},{"name":"Beckton","x":1671,"y":3200,"attach":[1671.4,3200.3],"regio":1},{"name":"Heathsted","x":1661,"y":3198,"attach":[1660.99,3198.1],"regio":1},{"name":"Brentwell","x":1652,"y":3196,"attach":[1652.4,3196.29],"regio":1},{"name":"Fairthwaite","x":1643,"y":3194,"attach":[1643.13,3194.34],"regio":1},{"name":"Chungsia","x":1716,"y":1368,"attach":[1716.0,1368.0]},{"name":"Hantsin","x":1740,"y":1524,"attach":[1740.0,1524.0]},{"name":"Sianning","x":1488,"y":1428,"attach":[1488.0,1428.0]},{"name":"North Chungsia","x":1692,"y":1308,"attach":[1692.0,1308.0]},{"name":"Hengchu","x":1884,"y":1404,"attach":[1884.0,1404.0]},{"name":"Farinport Central","x":528,"y":2136,"attach":[528.0,2136.0]},{"name":"Alderford Airport","x":552,"y":2112,"attach":[552.0,2112.0]},{"name":"Willowbury","x":1608,"y":3420,"attach":[1608.0,3420.0],"regio":1},{"name":"Foxstead Junction","x":1620,"y":3420,"attach":[1620.0,3420.0],"regio":1},{"name":"Hunton","x":1616,"y":3428,"attach":[1615.75,3427.75],"regio":1},{"name":"Stockmere","x":1622,"y":3434,"attach":[1621.57,3433.57],"regio":1},{"name":"Kings Hawgate","x":1610,"y":3433,"attach":[1609.93,3433.17],"regio":1},{"name":"Thurlcote","x":1618,"y":3442,"attach":[1618.18,3442.18],"regio":1},{"name":"Birchcote","x":1623,"y":3447,"attach":[1622.63,3446.63],"regio":1},{"name":"Grimssted","x":1627,"y":3451,"attach":[1627.11,3451.11],"regio":1},{"name":"Salfield","x":1512,"y":3108,"attach":[1512.0,3108.0],"regio":1},{"name":"Cherrymore","x":1501,"y":3108,"attach":[1500.55,3108.0],"regio":1},{"name":"Fenmere","x":1491,"y":3108,"attach":[1491.43,3108.0],"regio":1},{"name":"Ulverholme","x":1480,"y":3108,"attach":[1480.15,3108.0],"regio":1},{"name":"Ulverthorpe","x":1468,"y":3108,"attach":[1467.54,3108.0],"regio":1},{"name":"Thornmere","x":1457,"y":3108,"attach":[1456.51,3108.0],"regio":1},{"name":"Crowbrook","x":1444,"y":3108,"attach":[1443.98,3108.0],"regio":1},{"name":"Willowwick","x":1432,"y":3108,"attach":[1432.39,3108.0],"regio":1},{"name":"Heathholme","x":1421,"y":3108,"attach":[1420.91,3108.0],"regio":1},{"name":"Ulverhurst","x":1411,"y":3108,"attach":[1410.82,3108.0],"regio":1},{"name":"Longcote","x":1398,"y":3108,"attach":[1397.77,3108.0],"regio":1},{"name":"Hawmore","x":1387,"y":3108,"attach":[1387.12,3108.0],"regio":1},{"name":"Barkton","x":1376,"y":3108,"attach":[1376.07,3108.0],"regio":1},{"name":"Newstead","x":1362,"y":3108,"attach":[1362.1,3108.0],"regio":1},{"name":"Claybrook","x":1353,"y":3108,"attach":[1352.66,3108.0],"regio":1},{"name":"Foxcote","x":1340,"y":3108,"attach":[1340.2,3108.0],"regio":1},{"name":"Chalminster","x":1332,"y":3108,"attach":[1331.84,3108.0],"regio":1},{"name":"Coldham","x":1322,"y":3108,"attach":[1321.81,3108.29],"regio":1},{"name":"Elmmere","x":1314,"y":3110,"attach":[1313.72,3109.66],"regio":1},{"name":"Goldsted","x":1304,"y":3114,"attach":[1303.79,3113.95],"regio":1},{"name":"Rookwell","x":1298,"y":3119,"attach":[1297.75,3118.54],"regio":1},{"name":"Hunwood","x":1291,"y":3125,"attach":[1291.23,3124.77],"regio":1},{"name":"Burnminster Junction","x":1284,"y":3132,"attach":[1284.0,3132.0],"regio":1},{"name":"Lynstow","x":1518,"y":3102,"attach":[1517.82,3102.18],"regio":1},{"name":"Woodhurst","x":1525,"y":3095,"attach":[1524.66,3095.34],"regio":1},{"name":"Rookhurst","x":1532,"y":3088,"attach":[1532.13,3087.87],"regio":1},{"name":"Leathwaite","x":1546,"y":3074,"attach":[1545.72,3074.28],"regio":1},{"name":"Todmere","x":1554,"y":3067,"attach":[1553.63,3067.44],"regio":1},{"name":"Beckdale","x":1561,"y":3064,"attach":[1560.7,3063.51],"regio":1},{"name":"Newthorpe","x":1570,"y":3061,"attach":[1569.63,3060.77],"regio":1},{"name":"Chalcote","x":1579,"y":3060,"attach":[1578.57,3060.0],"regio":1},{"name":"Goldbrook","x":1590,"y":3060,"attach":[1589.54,3060.0],"regio":1},{"name":"Ashfield","x":1599,"y":3060,"attach":[1599.12,3060.0],"regio":1},{"name":"Wykebury","x":1518,"y":3114,"attach":[1518.15,3114.15],"regio":1},{"name":"Penby","x":1526,"y":3122,"attach":[1526.33,3122.33],"regio":1},{"name":"Swanstow","x":1532,"y":3128,"attach":[1532.48,3128.48],"regio":1},{"name":"Ryebridge","x":1539,"y":3135,"attach":[1538.92,3134.92],"regio":1},{"name":"Bradstead","x":1545,"y":3141,"attach":[1545.29,3141.29],"regio":1},{"name":"Silham","x":1552,"y":3149,"attach":[1552.21,3149.21],"regio":1},{"name":"Ormwick","x":1558,"y":3162,"attach":[1558.27,3162.19],"regio":1},{"name":"Kings Wickden","x":1560,"y":3172,"attach":[1559.83,3172.11],"regio":1},{"name":"Southham","x":1560,"y":3181,"attach":[1560.0,3180.59],"regio":1},{"name":"Ulverbury","x":1560,"y":3191,"attach":[1560.0,3191.43],"regio":1},{"name":"Heaththwaite","x":1560,"y":3202,"attach":[1560.0,3201.72],"regio":1},{"name":"Whitbury","x":1560,"y":3216,"attach":[1560.0,3216.0],"regio":1},{"name":"Northwell","x":1514,"y":3119,"attach":[1514.26,3118.73],"regio":1},{"name":"Chalstow","x":1517,"y":3130,"attach":[1516.66,3130.15],"regio":1},{"name":"Hartstead","x":1519,"y":3139,"attach":[1518.62,3139.44],"regio":1},{"name":"Southcote","x":1521,"y":3148,"attach":[1520.5,3148.39],"regio":1},{"name":"Coldminster","x":1523,"y":3159,"attach":[1522.68,3158.74],"regio":1},{"name":"Ormmere","x":1526,"y":3171,"attach":[1525.64,3171.13],"regio":1},{"name":"Redby","x":1529,"y":3180,"attach":[1529.15,3180.32],"regio":1},{"name":"Netherthwaite","x":1534,"y":3189,"attach":[1534.33,3189.12],"regio":1},{"name":"Saxeminster","x":1541,"y":3197,"attach":[1540.97,3196.97],"regio":1},{"name":"Grafton Central","x":1056,"y":2124,"attach":[1056.0,2124.0]},{"name":"Lockton","x":996,"y":2148,"attach":[996.0,2148.0]},{"name":"Flancourt-Est","x":1440,"y":2220,"attach":[1440.0,2220.0]},{"name":"Yenchia Main","x":1812,"y":1152,"attach":[1812.0,1152.0]},{"name":"Leaminster","x":1644,"y":3924,"attach":[1644.0,3924.0],"regio":1},{"name":"Cherrystow","x":1644,"y":3904,"attach":[1644.0,3903.91],"regio":1},{"name":"Stockbridge","x":1644,"y":3884,"attach":[1644.0,3884.45],"regio":1},{"name":"Elmbury","x":1645,"y":3877,"attach":[1645.45,3876.79],"regio":1},{"name":"Blackdale","x":1650,"y":3870,"attach":[1649.89,3870.13],"regio":1},{"name":"Marlbury","x":1656,"y":3864,"attach":[1656.0,3864.0]},{"name":"Atlantic Airport","x":1644,"y":3948,"attach":[1644.0,3948.0]},{"name":"Willowholme","x":1651,"y":3917,"attach":[1651.21,3916.79],"regio":1},{"name":"Claystead","x":1662,"y":3905,"attach":[1661.78,3904.71],"regio":1},{"name":"Brentmore","x":1668,"y":3887,"attach":[1667.65,3886.83],"regio":1},{"name":"Grimswick","x":1668,"y":3879,"attach":[1668.0,3878.66],"regio":1},{"name":"Ashcote","x":1668,"y":3868,"attach":[1668.0,3867.91],"regio":1},{"name":"Highham","x":1668,"y":3859,"attach":[1668.0,3858.74],"regio":1},{"name":"Yarby","x":1668,"y":3851,"attach":[1668.0,3851.03],"regio":1},{"name":"Silwick","x":1668,"y":3841,"attach":[1668.0,3840.69],"regio":1},{"name":"Redham","x":1668,"y":3832,"attach":[1668.0,3832.37],"regio":1},{"name":"Thornmore","x":1668,"y":3823,"attach":[1668.0,3823.25],"regio":1},{"name":"Long Crowwick","x":1668,"y":3816,"attach":[1668.0,3815.72],"regio":1},{"name":"Meldale","x":1668,"y":3808,"attach":[1668.0,3808.25],"regio":1},{"name":"Wakefield","x":1668,"y":3802,"attach":[1668.0,3802.0],"regio":1},{"name":"Sutmere","x":1668,"y":3795,"attach":[1668.0,3795.37],"regio":1},{"name":"Marfield","x":1668,"y":3789,"attach":[1668.0,3789.08],"regio":1},{"name":"Ormwell","x":1668,"y":3783,"attach":[1668.0,3782.72],"regio":1},{"name":"Holmholme","x":1668,"y":3775,"attach":[1668.0,3774.64],"regio":1},{"name":"Cherrycombe","x":1668,"y":3767,"attach":[1668.0,3766.85],"regio":1},{"name":"Redden","x":1668,"y":3760,"attach":[1668.0,3759.51],"regio":1},{"name":"Saxecombe","x":1668,"y":3752,"attach":[1668.0,3752.07],"regio":1},{"name":"Kirkfield","x":1668,"y":3744,"attach":[1668.0,3744.35],"regio":1},{"name":"Weswell","x":1668,"y":3738,"attach":[1668.0,3738.06],"regio":1},{"name":"Thurlden","x":1668,"y":3729,"attach":[1668.0,3728.89],"regio":1},{"name":"Elmwick","x":1638,"y":3918,"attach":[1637.71,3917.76],"regio":1},{"name":"Shepthwaite","x":1627,"y":3912,"attach":[1627.24,3912.34],"regio":1},{"name":"Great Foxley","x":1619,"y":3912,"attach":[1619.34,3912.0],"regio":1},{"name":"Oakdale","x":1610,"y":3912,"attach":[1610.09,3912.0],"regio":1},{"name":"Yarcote","x":1602,"y":3912,"attach":[1602.5,3912.0],"regio":1},{"name":"Ashford","x":1591,"y":3912,"attach":[1591.12,3912.0],"regio":1},{"name":"Hunwell","x":1583,"y":3912,"attach":[1582.9,3912.0],"regio":1},{"name":"Goldden","x":1571,"y":3912,"attach":[1571.07,3912.0],"regio":1},{"name":"Stockthwaite","x":1562,"y":3912,"attach":[1562.43,3912.0],"regio":1},{"name":"Kirkhurst","x":1556,"y":3912,"attach":[1555.75,3912.0],"regio":1},{"name":"Langfield","x":1546,"y":3912,"attach":[1546.45,3912.0],"regio":1},{"name":"Lynthwaite","x":1534,"y":3912,"attach":[1534.48,3912.0],"regio":1},{"name":"Clayfield","x":1523,"y":3912,"attach":[1522.78,3912.0],"regio":1},{"name":"Winton","x":1513,"y":3912,"attach":[1512.72,3912.0],"regio":1},{"name":"Bramsted","x":1504,"y":3912,"attach":[1503.86,3912.0],"regio":1},{"name":"Ormton","x":1492,"y":3912,"attach":[1491.89,3912.0],"regio":1},{"name":"Barkwick","x":1482,"y":3912,"attach":[1482.49,3912.0],"regio":1},{"name":"Swanbrook","x":1464,"y":3912,"attach":[1464.0,3912.0],"regio":1},{"name":"Brentby","x":1644,"y":3918,"attach":[1644.0,3917.81],"regio":1},{"name":"Goldham","x":1644,"y":3910,"attach":[1644.0,3910.15],"regio":1},{"name":"Goldton","x":1644,"y":3904,"attach":[1644.0,3903.7],"regio":1},{"name":"Malden","x":1644,"y":3895,"attach":[1644.0,3895.37],"regio":1},{"name":"Highley","x":1644,"y":3886,"attach":[1644.0,3885.76],"regio":1},{"name":"Walbury","x":1644,"y":3877,"attach":[1644.0,3877.32],"regio":1},{"name":"Woodbrook","x":1644,"y":3870,"attach":[1644.23,3869.96],"regio":1},{"name":"Wykested","x":1647,"y":3862,"attach":[1646.81,3862.21],"regio":1},{"name":"Chalbrook Junction","x":1656,"y":3852,"attach":[1656.0,3852.0],"regio":1},{"name":"Waketon","x":1320,"y":2988,"attach":[1320.0,2988.0],"regio":1},{"name":"Northminster","x":1332,"y":2988,"attach":[1331.55,2988.0],"regio":1},{"name":"Hunhurst","x":1344,"y":2988,"attach":[1344.24,2988.0],"regio":1},{"name":"Melgate","x":1355,"y":2988,"attach":[1354.91,2988.0],"regio":1},{"name":"Yarmore","x":1369,"y":2988,"attach":[1369.18,2988.0],"regio":1},{"name":"Wakeham","x":1381,"y":2988,"attach":[1381.06,2988.0],"regio":1},{"name":"Leawell","x":1392,"y":2988,"attach":[1391.83,2988.0],"regio":1},{"name":"Brambrook","x":1406,"y":2988,"attach":[1405.52,2988.0],"regio":1},{"name":"Claycombe","x":1417,"y":2988,"attach":[1416.87,2988.0],"regio":1},{"name":"Eastminster","x":1429,"y":2988,"attach":[1428.57,2988.0],"regio":1},{"name":"Elmfield","x":1442,"y":2988,"attach":[1442.13,2988.0],"regio":1},{"name":"Longthwaite","x":1452,"y":2987,"attach":[1451.71,2987.48],"regio":1},{"name":"Bradgate","x":1463,"y":2985,"attach":[1462.77,2984.77],"regio":1},{"name":"Fenbridge","x":1474,"y":2978,"attach":[1474.02,2977.52],"regio":1},{"name":"Stockmore","x":1500,"y":2952,"attach":[1500.0,2952.0],"regio":1},{"name":"Grimswell","x":1292,"y":2988,"attach":[1291.96,2988.0],"regio":1},{"name":"Ryecote","x":1281,"y":2988,"attach":[1281.18,2988.0],"regio":1},{"name":"Oldwood","x":1270,"y":2988,"attach":[1269.86,2988.0],"regio":1},{"name":"Coldstead","x":1257,"y":2988,"attach":[1257.37,2988.0],"regio":1},{"name":"Coldstow","x":1247,"y":2988,"attach":[1247.18,2988.0],"regio":1},{"name":"Oakminster","x":1234,"y":2987,"attach":[1234.38,2987.4],"regio":1},{"name":"Stockwood","x":1225,"y":2985,"attach":[1225.2,2984.98],"regio":1},{"name":"Fairsted","x":1215,"y":2978,"attach":[1214.64,2978.19],"regio":1},{"name":"Malwell","x":1208,"y":2972,"attach":[1208.25,2972.25],"regio":1},{"name":"REG-MBR-01","x":1200,"y":2964,"attach":[1200.0,2964.0]},{"name":"Oldcote","x":1320,"y":2977,"attach":[1320.0,2977.42],"regio":1},{"name":"Netherbury","x":1320,"y":2968,"attach":[1320.0,2967.58],"regio":1},{"name":"Elmby","x":1320,"y":2958,"attach":[1320.0,2957.97],"regio":1},{"name":"Grimsmere","x":1320,"y":2948,"attach":[1320.0,2947.98],"regio":1},{"name":"Southmore","x":1320,"y":2941,"attach":[1319.52,2940.76],"regio":1},{"name":"Ryestead","x":1317,"y":2930,"attach":[1317.04,2930.05],"regio":1},{"name":"Shepton","x":1312,"y":2922,"attach":[1312.48,2921.53],"regio":1},{"name":"Warthorpe","x":1307,"y":2915,"attach":[1306.73,2914.73],"regio":1},{"name":"Stockcombe","x":1299,"y":2907,"attach":[1298.9,2906.9],"regio":1},{"name":"Winthorpe","x":1293,"y":2901,"attach":[1292.62,2900.62],"regio":1},{"name":"Swanwood","x":1286,"y":2894,"attach":[1285.99,2893.99],"regio":1},{"name":"Sutstead","x":1282,"y":2890,"attach":[1281.56,2889.56],"regio":1},{"name":"Netherfield","x":1276,"y":2884,"attach":[1276.14,2884.14],"regio":1},{"name":"Eastfield","x":1272,"y":2880,"attach":[1271.57,2879.57],"regio":1},{"name":"Eastwick","x":1263,"y":2871,"attach":[1263.03,2871.03],"regio":1},{"name":"Woodminster","x":1256,"y":2864,"attach":[1256.14,2864.14],"regio":1},{"name":"Crowford","x":1249,"y":2857,"attach":[1249.5,2857.5],"regio":1},{"name":"Oldminster","x":1244,"y":2852,"attach":[1244.44,2852.44],"regio":1},{"name":"Wakewood","x":1237,"y":2845,"attach":[1237.09,2845.09],"regio":1},{"name":"Langham","x":1230,"y":2838,"attach":[1230.42,2838.42],"regio":1},{"name":"Bradbrook","x":1224,"y":2832,"attach":[1224.0,2832.0],"regio":1},{"name":"Wykethorpe","x":1320,"y":2999,"attach":[1320.0,2998.72],"regio":1},{"name":"Thornham","x":1320,"y":3009,"attach":[1320.0,3008.58],"regio":1},{"name":"Melton","x":1320,"y":3017,"attach":[1320.0,3016.8],"regio":1},{"name":"Walbridge","x":1320,"y":3026,"attach":[1320.0,3026.1],"regio":1},{"name":"Grimsstead","x":1320,"y":3037,"attach":[1320.0,3037.35],"regio":1},{"name":"Rookgate","x":1320,"y":3044,"attach":[1320.0,3043.79],"regio":1},{"name":"Marwick","x":1320,"y":3051,"attach":[1320.0,3050.81],"regio":1},{"name":"Moorford","x":1320,"y":3059,"attach":[1320.0,3059.02],"regio":1},{"name":"Quarrthwaite","x":1320,"y":3065,"attach":[1320.0,3065.23],"regio":1},{"name":"Langcote","x":1320,"y":3072,"attach":[1320.0,3072.08],"regio":1},{"name":"Melcote","x":1320,"y":3080,"attach":[1319.81,3080.02],"regio":1},{"name":"Melminster","x":1318,"y":3090,"attach":[1318.31,3089.69],"regio":1},{"name":"Shepwick","x":1316,"y":3096,"attach":[1316.17,3095.88],"regio":1},{"name":"Cotham","x":1311,"y":3104,"attach":[1311.22,3103.98],"regio":1},{"name":"Waterbridge","x":1305,"y":3111,"attach":[1304.77,3111.23],"regio":1},{"name":"Saxehurst","x":1298,"y":3118,"attach":[1297.98,3118.02],"regio":1},{"name":"Warwood","x":1292,"y":3124,"attach":[1291.85,3124.15],"regio":1},{"name":"Stanbrook","x":1313,"y":2995,"attach":[1313.04,2994.96],"regio":1},{"name":"Moorley","x":1306,"y":3002,"attach":[1305.53,3002.47],"regio":1},{"name":"Swanbury","x":1299,"y":3009,"attach":[1298.63,3009.37],"regio":1},{"name":"Longmore","x":1293,"y":3015,"attach":[1292.81,3015.19],"regio":1},{"name":"Wykethwaite","x":1285,"y":3023,"attach":[1285.34,3022.66],"regio":1},{"name":"Quarrthorpe","x":1279,"y":3031,"attach":[1278.79,3030.64],"regio":1},{"name":"Langbury","x":1273,"y":3043,"attach":[1273.5,3042.98],"regio":1},{"name":"Millminster","x":1272,"y":3053,"attach":[1272.05,3053.46],"regio":1},{"name":"Swanwell","x":1272,"y":3064,"attach":[1272.0,3063.88],"regio":1},{"name":"Warstow","x":1272,"y":3076,"attach":[1272.0,3075.6],"regio":1},{"name":"Barkwood","x":1272,"y":3086,"attach":[1272.0,3086.24],"regio":1},{"name":"Woodley","x":1272,"y":3102,"attach":[1272.0,3101.63],"regio":1},{"name":"Highwood","x":1272,"y":3112,"attach":[1272.0,3112.16],"regio":1},{"name":"Woldworth","x":1272,"y":3122,"attach":[1272.0,3122.09],"regio":1},{"name":"Havenbolme Hbf","x":564,"y":2568,"attach":[564.0,2568.0]},{"name":"Binchester","x":660,"y":2916,"attach":[660.0,2916.0]},{"name":"Whitehurst","x":1020,"y":2688,"attach":[1020.0,2688.0]},{"name":"Longmere","x":1464,"y":3888,"attach":[1464.0,3888.0],"regio":1},{"name":"Wykemore","x":1464,"y":3924,"attach":[1464.0,3923.55],"regio":1},{"name":"Melholme","x":1464,"y":3936,"attach":[1464.0,3935.68],"regio":1},{"name":"Winden","x":1464,"y":3947,"attach":[1464.0,3946.68],"regio":1},{"name":"Holmstow","x":1465,"y":3956,"attach":[1464.53,3956.11],"regio":1},{"name":"Ulverton","x":1468,"y":3964,"attach":[1468.11,3963.73],"regio":1},{"name":"Beckham","x":1476,"y":3972,"attach":[1476.0,3972.0],"regio":1},{"name":"Kirkcombe","x":1471,"y":3919,"attach":[1471.23,3919.23],"regio":1},{"name":"Ryeham","x":1478,"y":3926,"attach":[1478.2,3926.2],"regio":1},{"name":"Northham","x":1486,"y":3934,"attach":[1486.29,3934.29],"regio":1},{"name":"Birchthorpe","x":1494,"y":3942,"attach":[1493.74,3941.74],"regio":1},{"name":"Crowworth","x":1499,"y":3947,"attach":[1498.67,3946.67],"regio":1},{"name":"Birchby","x":1504,"y":3952,"attach":[1504.37,3952.37],"regio":1},{"name":"Hunwick","x":1510,"y":3958,"attach":[1510.29,3958.29],"regio":1},{"name":"Grimsfield","x":1517,"y":3965,"attach":[1516.62,3964.62],"regio":1},{"name":"Holmthwaite","x":1524,"y":3972,"attach":[1524.26,3972.26],"regio":1},{"name":"Redthorpe","x":1531,"y":3979,"attach":[1530.92,3978.92],"regio":1},{"name":"Highfield","x":1536,"y":3984,"attach":[1536.36,3984.36],"regio":1},{"name":"Sutley","x":1542,"y":3990,"attach":[1541.72,3989.72],"regio":1},{"name":"Heathcombe","x":1548,"y":3996,"attach":[1548.31,3996.31],"regio":1},{"name":"Saxestead","x":1554,"y":4002,"attach":[1554.08,4002.08],"regio":1},{"name":"Chalby","x":1559,"y":4007,"attach":[1559.49,4007.49],"regio":1},{"name":"Woodcombe","x":1566,"y":4014,"attach":[1565.81,4013.81],"regio":1},{"name":"Waterfield","x":1573,"y":4021,"attach":[1573.06,4021.06],"regio":1},{"name":"Burnstead","x":1587,"y":4032,"attach":[1587.36,4031.76],"regio":1},{"name":"Waterwick","x":1596,"y":4032,"attach":[1596.0,4032.0],"regio":1},{"name":"Heathden","x":1457,"y":3905,"attach":[1456.83,3904.59],"regio":1},{"name":"Northton","x":1453,"y":3897,"attach":[1452.89,3897.33],"regio":1},{"name":"Burnmore","x":1452,"y":3887,"attach":[1452.0,3886.78],"regio":1},{"name":"Hazeldale","x":1452,"y":3880,"attach":[1452.0,3880.42],"regio":1},{"name":"Thurlbury","x":1452,"y":3874,"attach":[1452.0,3873.66],"regio":1},{"name":"Cherrysted","x":1452,"y":3865,"attach":[1452.0,3864.67],"regio":1},{"name":"Silworth","x":1452,"y":3856,"attach":[1452.0,3856.14],"regio":1},{"name":"Cherrybury","x":1452,"y":3847,"attach":[1452.0,3847.11],"regio":1},{"name":"Heathstow","x":1452,"y":3838,"attach":[1452.0,3838.04],"regio":1},{"name":"Sandfield","x":1452,"y":3830,"attach":[1452.0,3830.08],"regio":1},{"name":"Kirkden","x":1452,"y":3819,"attach":[1452.0,3819.22],"regio":1},{"name":"Newmore","x":1452,"y":3810,"attach":[1452.0,3810.28],"regio":1},{"name":"Willowdale","x":1452,"y":3802,"attach":[1452.0,3801.55],"regio":1},{"name":"Stanmere","x":1452,"y":3793,"attach":[1452.0,3792.51],"regio":1},{"name":"Nethersted","x":1452,"y":3782,"attach":[1452.0,3781.5],"regio":1},{"name":"Barkholme","x":1452,"y":3772,"attach":[1452.0,3772.1],"regio":1},{"name":"Longbridge","x":1452,"y":3765,"attach":[1452.0,3764.51],"regio":1},{"name":"Brentley","x":1452,"y":3756,"attach":[1452.0,3756.0],"regio":1},{"name":"Woodfield","x":1560,"y":3250,"attach":[1559.69,3250.38],"regio":1},{"name":"Moorwell","x":1558,"y":3258,"attach":[1558.29,3258.42],"regio":1},{"name":"Hazelthwaite","x":1555,"y":3267,"attach":[1554.62,3267.16],"regio":1},{"name":"Northden","x":1536,"y":3288,"attach":[1536.0,3288.0],"regio":1},{"name":"REG-ACA-02","x":1776,"y":1788,"attach":[1776.0,1788.0]},{"name":"Barton Central","x":1908,"y":1728,"attach":[1908.0,1728.0]},{"name":"Zhennanguan","x":1800,"y":1716,"attach":[1800.0,1716.0]},{"name":"Touraine-Central","x":1680,"y":1920,"attach":[1680.0,1920.0]},{"name":"Prinsburg Central","x":2100,"y":1944,"attach":[2100.0,1944.0]},{"name":"Newport","x":1116,"y":2772,"attach":[1116.0,2772.0]},{"name":"Larkcote","x":1104,"y":2772,"attach":[1104.0,2772.0],"regio":1},{"name":"Bradford","x":1150,"y":2772,"attach":[1149.61,2772.0],"regio":1},{"name":"Marmore","x":1158,"y":2772,"attach":[1158.38,2772.0],"regio":1},{"name":"Bradthorpe","x":1167,"y":2772,"attach":[1166.96,2772.0],"regio":1},{"name":"Leaby","x":1176,"y":2772,"attach":[1176.0,2772.0],"regio":1},{"name":"REG-VDL-01","x":1872,"y":2808,"attach":[1872.0,2808.0]},{"name":"Kingsbury","x":2040,"y":2976,"attach":[2040.0,2976.0]},{"name":"Cartier","x":1824,"y":2808,"attach":[1824.0,2808.0]},{"name":"Chatham","x":2208,"y":2028,"attach":[2208.0,2028.0]},{"name":"Meiyin","x":912,"y":1848,"attach":[912.0,1848.0]},{"name":"REG-CHA-02","x":1152,"y":1692,"attach":[1152.0,1692.0]},{"name":"Somerfield St John","x":960,"y":2052,"attach":[960.0,2052.0]},{"name":"Millstead","x":696,"y":2052,"attach":[696.0,2052.0]},{"name":"Swanley","x":1628,"y":3536,"attach":[1627.97,3535.97],"regio":1},{"name":"Weswick","x":1635,"y":3543,"attach":[1634.75,3542.75],"regio":1},{"name":"Thurldale","x":1644,"y":3552,"attach":[1643.6,3551.6],"regio":1},{"name":"Brookworth","x":1650,"y":3558,"attach":[1649.83,3557.83],"regio":1},{"name":"Millmore","x":1657,"y":3565,"attach":[1656.67,3564.96],"regio":1},{"name":"Blackby","x":1662,"y":3572,"attach":[1662.05,3572.21],"regio":1},{"name":"Yarstow","x":1667,"y":3583,"attach":[1666.53,3583.06],"regio":1},{"name":"Walley","x":1668,"y":3592,"attach":[1667.85,3592.37],"regio":1},{"name":"Brookholme","x":1668,"y":3599,"attach":[1668.0,3598.65],"regio":1},{"name":"Willowden","x":1668,"y":3608,"attach":[1668.0,3607.93],"regio":1},{"name":"Waterhurst","x":1668,"y":3617,"attach":[1668.0,3616.68],"regio":1},{"name":"Southgate","x":1668,"y":3627,"attach":[1668.0,3626.86],"regio":1},{"name":"Hazelbury","x":1668,"y":3634,"attach":[1668.0,3634.37],"regio":1},{"name":"Beckholme","x":1668,"y":3644,"attach":[1668.0,3644.13],"regio":1},{"name":"Wykeford","x":1668,"y":3653,"attach":[1668.0,3652.66],"regio":1},{"name":"Moorham","x":1668,"y":3660,"attach":[1668.0,3659.69],"regio":1},{"name":"Grimscote","x":1668,"y":3669,"attach":[1668.0,3668.76],"regio":1},{"name":"Goldfield","x":1668,"y":3678,"attach":[1668.0,3678.37],"regio":1},{"name":"Pendale","x":1668,"y":3690,"attach":[1668.0,3690.46],"regio":1},{"name":"Warden","x":1668,"y":3699,"attach":[1668.0,3698.86],"regio":1},{"name":"Highbrook","x":1668,"y":3709,"attach":[1668.0,3708.74],"regio":1},{"name":"Silthorpe","x":1609,"y":3517,"attach":[1609.43,3517.43],"regio":1},{"name":"Sandham","x":1601,"y":3509,"attach":[1600.55,3508.55],"regio":1},{"name":"Goldley","x":1596,"y":3504,"attach":[1596.26,3504.34],"regio":1},{"name":"Thurlwell","x":1590,"y":3499,"attach":[1590.08,3499.2],"regio":1},{"name":"Malthwaite","x":1584,"y":3496,"attach":[1584.16,3495.98],"regio":1},{"name":"Stockden","x":1576,"y":3493,"attach":[1576.13,3493.23],"regio":1},{"name":"Langmore","x":1570,"y":3492,"attach":[1569.85,3492.35],"regio":1},{"name":"Bramby","x":1559,"y":3492,"attach":[1559.21,3492.0],"regio":1},{"name":"Westhwaite","x":1552,"y":3492,"attach":[1551.55,3492.0],"regio":1},{"name":"Woodford","x":1542,"y":3492,"attach":[1542.05,3492.0],"regio":1},{"name":"Heathstead","x":1533,"y":3492,"attach":[1532.94,3492.0],"regio":1},{"name":"Melmore","x":1522,"y":3492,"attach":[1522.4,3492.0],"regio":1},{"name":"Crowmere","x":1513,"y":3492,"attach":[1513.3,3492.0],"regio":1},{"name":"Highstead","x":1503,"y":3492,"attach":[1502.76,3492.0],"regio":1},{"name":"Wesbridge","x":1495,"y":3492,"attach":[1495.02,3492.0],"regio":1},{"name":"Warbrook","x":1484,"y":3492,"attach":[1484.12,3492.0],"regio":1},{"name":"Ormcombe","x":1476,"y":3492,"attach":[1476.24,3492.0],"regio":1},{"name":"Thurlholme","x":1466,"y":3492,"attach":[1466.39,3492.0],"regio":1},{"name":"Yarthorpe","x":1458,"y":3492,"attach":[1457.75,3492.0],"regio":1},{"name":"Oldwick","x":1448,"y":3492,"attach":[1448.19,3492.0],"regio":1},{"name":"Medway Central","x":1440,"y":3492,"attach":[1440.0,3492.0]},{"name":"Stockley","x":1089,"y":2772,"attach":[1088.77,2772.3],"regio":1},{"name":"Hunby","x":1045,"y":2807,"attach":[1045.32,2806.68],"regio":1},{"name":"Mapleriver Central","x":1032,"y":2820,"attach":[1032.0,2820.0]},{"name":"Kelvinport","x":876,"y":3144,"attach":[876.0,3144.0]},{"name":"Johnston","x":732,"y":3060,"attach":[732.0,3060.0]},{"name":"Brunswick","x":2028,"y":2556,"attach":[2028.0,2556.0]},{"name":"Springford","x":1944,"y":2484,"attach":[1944.0,2484.0]},{"name":"REG-BAY-01","x":2148,"y":2724,"attach":[2148.0,2724.0]},{"name":"Netherwood","x":1728,"y":2556,"attach":[1728.0,2556.0]},{"name":"Dunwick","x":1668,"y":3747,"attach":[1668.0,3747.01],"regio":1},{"name":"Yarham","x":1668,"y":3756,"attach":[1668.0,3756.36],"regio":1},{"name":"Bradley","x":1668,"y":3767,"attach":[1668.0,3767.26],"regio":1},{"name":"Southstead","x":1668,"y":3776,"attach":[1667.56,3775.84],"regio":1},{"name":"Wesstow","x":1662,"y":3786,"attach":[1662.09,3785.89],"regio":1},{"name":"Kirkgate","x":1656,"y":3792,"attach":[1656.0,3792.0],"regio":1},{"name":"Elmham","x":1662,"y":3726,"attach":[1661.63,3726.45],"regio":1},{"name":"Cherrybridge","x":1657,"y":3733,"attach":[1657.44,3732.84],"regio":1},{"name":"Rookfield","x":1656,"y":3742,"attach":[1656.0,3742.18],"regio":1},{"name":"Highsted","x":1656,"y":3752,"attach":[1656.0,3751.97],"regio":1},{"name":"Stowham","x":1656,"y":3760,"attach":[1656.0,3759.93],"regio":1},{"name":"Fairham","x":1656,"y":3767,"attach":[1656.0,3766.84],"regio":1},{"name":"Eastmore","x":1656,"y":3776,"attach":[1656.0,3775.89],"regio":1},{"name":"Sandmere","x":1656,"y":3786,"attach":[1656.0,3786.41],"regio":1},{"name":"Leacombe","x":1656,"y":3795,"attach":[1656.0,3795.08],"regio":1},{"name":"Northmore","x":1656,"y":3805,"attach":[1656.0,3805.4],"regio":1},{"name":"Swancombe","x":1656,"y":3816,"attach":[1656.0,3815.89],"regio":1},{"name":"Foxden","x":1656,"y":3827,"attach":[1656.0,3827.03],"regio":1},{"name":"Millcombe Junction","x":1656,"y":3856,"attach":[1656.0,3855.97],"regio":1},{"name":"Ravenstone","x":1116,"y":2652,"attach":[1116.0,2652.0]},{"name":"Hervilly","x":1500,"y":2760,"attach":[1500.0,2760.0]},{"name":"Outrepont","x":1380,"y":2712,"attach":[1380.0,2712.0]},{"name":"Saxeton","x":1522,"y":2782,"attach":[1521.55,2781.55],"regio":1},{"name":"Kirkton Junction","x":1527,"y":2787,"attach":[1527.4,2787.4],"regio":1},{"name":"Claystow","x":1534,"y":2794,"attach":[1533.63,2793.63],"regio":1},{"name":"Penwell Junction","x":1543,"y":2803,"attach":[1543.05,2803.05],"regio":1},{"name":"Wesstead","x":1555,"y":2815,"attach":[1555.28,2815.28],"regio":1},{"name":"Sandthwaite","x":1572,"y":2820,"attach":[1572.0,2820.0],"regio":1},{"name":"Merlaut","x":1476,"y":2508,"attach":[1476.0,2508.0]},{"name":"Aéroport Parnay","x":1596,"y":1944,"attach":[1596.0,1944.0]},{"name":"Pinehurst","x":1872,"y":1908,"attach":[1872.0,1908.0]},{"name":"REG-ACA-01","x":1644,"y":1992,"attach":[1644.0,1992.0]},{"name":"Melmere","x":1620,"y":3336,"attach":[1620.0,3336.0],"regio":1},{"name":"Whitden","x":1572,"y":3300,"attach":[1572.0,3300.0],"regio":1},{"name":"Penthwaite","x":1644,"y":3348,"attach":[1644.2,3348.2],"regio":1},{"name":"Marbridge","x":1631,"y":3321,"attach":[1631.16,3321.16],"regio":1},{"name":"Melbrook","x":1632,"y":3312,"attach":[1632.0,3311.77],"regio":1},{"name":"Coldwood","x":1632,"y":3299,"attach":[1632.0,3299.33],"regio":1},{"name":"Fenhurst","x":1632,"y":3291,"attach":[1632.0,3290.97],"regio":1},{"name":"Brentcote","x":1632,"y":3281,"attach":[1632.0,3281.45],"regio":1},{"name":"Reddale","x":1632,"y":3270,"attach":[1632.0,3270.11],"regio":1},{"name":"Hawgate","x":1632,"y":3260,"attach":[1632.0,3259.58],"regio":1},{"name":"Hawwick","x":1632,"y":3251,"attach":[1632.0,3250.68],"regio":1},{"name":"Netherbrook","x":1632,"y":3242,"attach":[1632.0,3242.34],"regio":1},{"name":"Cherrygate","x":1632,"y":3233,"attach":[1632.0,3232.82],"regio":1},{"name":"Hawden","x":1632,"y":3219,"attach":[1632.0,3219.07],"regio":1},{"name":"Cherryden","x":1632,"y":3211,"attach":[1632.0,3210.87],"regio":1},{"name":"Norbourne","x":960,"y":2280,"attach":[960.0,2280.0]},{"name":"Belwich East","x":876,"y":2148,"attach":[876.0,2148.0]},{"name":"Becksted","x":1644,"y":3958,"attach":[1644.0,3957.63],"regio":1},{"name":"Wescombe","x":1644,"y":3970,"attach":[1644.0,3969.88],"regio":1},{"name":"Fernsted","x":1644,"y":3983,"attach":[1644.0,3982.55],"regio":1},{"name":"Malton","x":1644,"y":3991,"attach":[1644.0,3990.68],"regio":1},{"name":"Crowmore","x":1644,"y":3999,"attach":[1644.0,3998.51],"regio":1},{"name":"Willowstow","x":1644,"y":4010,"attach":[1644.0,4009.76],"regio":1},{"name":"Southend","x":1644,"y":4020,"attach":[1644.0,4020.0]},{"name":"Willowstead","x":1645,"y":3952,"attach":[1644.7,3951.88],"regio":1},{"name":"Birchmere","x":1645,"y":3955,"attach":[1645.28,3955.04],"regio":1},{"name":"Millthorpe","x":1646,"y":3959,"attach":[1646.0,3958.98],"regio":1},{"name":"Newhurst","x":1647,"y":3964,"attach":[1646.89,3963.91],"regio":1},{"name":"Upper Brentbridge","x":1648,"y":3968,"attach":[1647.63,3967.99],"regio":1},{"name":"Walby","x":1648,"y":3972,"attach":[1648.39,3972.16],"regio":1},{"name":"Holmcote","x":1649,"y":3978,"attach":[1649.44,3977.93],"regio":1},{"name":"Newgate","x":1650,"y":3981,"attach":[1650.01,3981.03],"regio":1},{"name":"Chalworth","x":1651,"y":3984,"attach":[1650.6,3984.31],"regio":1},{"name":"Hazelstead","x":1651,"y":3988,"attach":[1651.25,3987.87],"regio":1},{"name":"Highmere","x":1652,"y":3991,"attach":[1651.87,3991.28],"regio":1},{"name":"Kirkley","x":1653,"y":3995,"attach":[1652.63,3995.47],"regio":1},{"name":"Melhurst","x":1653,"y":3999,"attach":[1653.33,3999.34],"regio":1},{"name":"Thurlmore","x":1654,"y":4003,"attach":[1654.01,4003.08],"regio":1},{"name":"Waterminster","x":1655,"y":4007,"attach":[1654.69,4006.82],"regio":1},{"name":"Todton","x":1655,"y":4011,"attach":[1655.45,4010.96],"regio":1},{"name":"Elmford","x":1656,"y":4015,"attach":[1656.22,4015.2],"regio":1},{"name":"Elmstead","x":1657,"y":4019,"attach":[1656.98,4019.39],"regio":1},{"name":"Fernham","x":1658,"y":4024,"attach":[1657.77,4023.73],"regio":1},{"name":"Saxebrook","x":1658,"y":4029,"attach":[1658.31,4028.65],"regio":1},{"name":"Wickstow","x":1656,"y":4031,"attach":[1656.01,4030.93],"regio":1},{"name":"Thurlbridge","x":1651,"y":4027,"attach":[1651.33,4027.33],"regio":1},{"name":"Clayworth","x":1648,"y":4024,"attach":[1648.36,4024.36],"regio":1},{"name":"Willowgate","x":1637,"y":3955,"attach":[1637.26,3954.74],"regio":1},{"name":"Larkstead","x":1630,"y":3962,"attach":[1629.66,3962.34],"regio":1},{"name":"Oakley","x":1622,"y":3970,"attach":[1622.38,3969.62],"regio":1},{"name":"Wakewick","x":1617,"y":3975,"attach":[1616.95,3975.05],"regio":1},{"name":"Barkminster","x":1611,"y":3981,"attach":[1610.9,3981.1],"regio":1},{"name":"Leasted","x":1605,"y":3988,"attach":[1604.68,3988.14],"regio":1},{"name":"Thurlthwaite","x":1600,"y":3997,"attach":[1599.51,3996.71],"regio":1},{"name":"Bradcombe","x":1597,"y":4005,"attach":[1596.95,4004.82],"regio":1},{"name":"Rookstow","x":1596,"y":4013,"attach":[1596.12,4012.69],"regio":1},{"name":"Coldmere","x":1596,"y":4022,"attach":[1596.0,4022.48],"regio":1},{"name":"Yuchow Central","x":708,"y":1548,"attach":[708.0,1548.0]},{"name":"REG-CHA-01","x":1020,"y":1692,"attach":[1020.0,1692.0]},{"name":"Amptonside Canal","x":732,"y":2136,"attach":[732.0,2136.0]},{"name":"Amptonside Central","x":672,"y":2124,"attach":[672.0,2124.0]},{"name":"Vindelle-Central","x":1608,"y":2880,"attach":[1608.0,2880.0]},{"name":"Todham","x":1212,"y":2941,"attach":[1212.0,2940.61],"regio":1},{"name":"Saxeford","x":1212,"y":2916,"attach":[1212.0,2916.0],"regio":1},{"name":"Wakestead","x":1205,"y":2969,"attach":[1205.01,2969.01],"regio":1},{"name":"Larkdale","x":1210,"y":2974,"attach":[1210.23,2974.23],"regio":1},{"name":"Marbury","x":1218,"y":2982,"attach":[1217.63,2982.06],"regio":1},{"name":"Cotgate","x":1222,"y":2990,"attach":[1222.25,2990.14],"regio":1},{"name":"Woodton","x":1224,"y":2998,"attach":[1223.82,2998.0],"regio":1},{"name":"Whitmere","x":1224,"y":3004,"attach":[1224.0,3003.63],"regio":1},{"name":"Beauvoir Docklands","x":1224,"y":3012,"attach":[1224.0,3012.0]},{"name":"Heathworth","x":1206,"y":2958,"attach":[1206.16,2957.84],"regio":1},{"name":"Chalthorpe","x":1214,"y":2950,"attach":[1213.85,2949.77],"regio":1},{"name":"Langby","x":1219,"y":2942,"attach":[1219.32,2941.86],"regio":1},{"name":"Watersted","x":1222,"y":2934,"attach":[1222.39,2934.08],"regio":1},{"name":"Larkgate","x":1224,"y":2925,"attach":[1223.86,2924.56],"regio":1},{"name":"Cherrydale","x":1224,"y":2916,"attach":[1224.0,2916.26],"regio":1},{"name":"Blackminster","x":1224,"y":2908,"attach":[1224.0,2908.13],"regio":1},{"name":"Goldcombe","x":1224,"y":2899,"attach":[1224.0,2899.27],"regio":1},{"name":"Ashdale","x":1224,"y":2893,"attach":[1224.0,2893.48],"regio":1},{"name":"Longworth","x":1224,"y":2885,"attach":[1224.0,2884.61],"regio":1},{"name":"Oakton","x":1224,"y":2872,"attach":[1224.0,2871.88],"regio":1},{"name":"Woldminster","x":1224,"y":2865,"attach":[1224.0,2865.31],"regio":1},{"name":"Warstead","x":1224,"y":2857,"attach":[1224.0,2856.76],"regio":1},{"name":"Goldby","x":1224,"y":2850,"attach":[1224.0,2849.69],"regio":1},{"name":"Saxegate","x":1224,"y":2842,"attach":[1224.0,2841.79],"regio":1},{"name":"Ryestow","x":1414,"y":3466,"attach":[1413.71,3465.71],"regio":1},{"name":"Brooksted","x":1422,"y":3474,"attach":[1421.52,3473.52],"regio":1},{"name":"Langstead","x":1431,"y":3483,"attach":[1431.46,3483.46],"regio":1},{"name":"Southwood","x":1404,"y":3447,"attach":[1404.0,3446.69],"regio":1},{"name":"Quarrwick","x":1404,"y":3439,"attach":[1404.0,3438.87],"regio":1},{"name":"Bramworth","x":1404,"y":3431,"attach":[1404.0,3431.08],"regio":1},{"name":"Shepcote","x":1404,"y":3422,"attach":[1404.0,3422.01],"regio":1},{"name":"Brambridge","x":1404,"y":3410,"attach":[1404.0,3409.64],"regio":1},{"name":"Moorby","x":1404,"y":3400,"attach":[1404.0,3400.27],"regio":1},{"name":"Langgate","x":1404,"y":3386,"attach":[1404.0,3386.21],"regio":1},{"name":"Walthorpe","x":1404,"y":3376,"attach":[1404.0,3376.33],"regio":1},{"name":"Dunthwaite","x":1404,"y":3365,"attach":[1404.0,3364.54],"regio":1},{"name":"Swanfield","x":1404,"y":3354,"attach":[1404.0,3354.2],"regio":1},{"name":"Walwell","x":1404,"y":3346,"attach":[1404.0,3346.5],"regio":1},{"name":"Whitworth","x":1405,"y":3340,"attach":[1404.61,3339.61],"regio":1},{"name":"Beckden","x":1409,"y":3331,"attach":[1409.39,3330.73],"regio":1},{"name":"Heathwell","x":1447,"y":3499,"attach":[1446.58,3498.69],"regio":1},{"name":"Beckstow","x":1451,"y":3506,"attach":[1450.96,3506.17],"regio":1},{"name":"Thurlbrook","x":1452,"y":3515,"attach":[1452.0,3515.39],"regio":1},{"name":"Ryecombe","x":1452,"y":3525,"attach":[1452.0,3524.71],"regio":1},{"name":"Woldwood","x":1452,"y":3532,"attach":[1452.0,3532.15],"regio":1},{"name":"Hazelwood","x":1452,"y":3540,"attach":[1452.0,3539.53],"regio":1},{"name":"Heathgate","x":1452,"y":3547,"attach":[1452.0,3546.74],"regio":1},{"name":"Maldale","x":1452,"y":3556,"attach":[1452.0,3556.18],"regio":1},{"name":"Barkstow","x":1454,"y":3478,"attach":[1454.49,3477.51],"regio":1},{"name":"Willowsted","x":1463,"y":3469,"attach":[1463.06,3468.94],"regio":1},{"name":"Beckford","x":1470,"y":3462,"attach":[1469.98,3462.02],"regio":1},{"name":"Willowwood","x":1476,"y":3456,"attach":[1475.98,3456.02],"regio":1},{"name":"Fenley","x":1485,"y":3447,"attach":[1485.12,3446.88],"regio":1},{"name":"Shephurst","x":1493,"y":3439,"attach":[1493.03,3438.97],"regio":1},{"name":"Blackbridge","x":1500,"y":3432,"attach":[1500.01,3432.11],"regio":1},{"name":"Marcote","x":1512,"y":3424,"attach":[1511.7,3424.06],"regio":1},{"name":"Coldford","x":1521,"y":3421,"attach":[1521.0,3420.89],"regio":1},{"name":"Eaststead","x":1535,"y":3420,"attach":[1535.47,3420.0],"regio":1},{"name":"Fencote","x":1547,"y":3420,"attach":[1547.29,3420.0],"regio":1},{"name":"Swanden","x":1556,"y":3420,"attach":[1556.4,3420.0],"regio":1},{"name":"Walgate","x":1570,"y":3420,"attach":[1569.64,3420.0],"regio":1},{"name":"Chalsted","x":1582,"y":3420,"attach":[1581.77,3420.0],"regio":1},{"name":"Silfield","x":1590,"y":3420,"attach":[1589.78,3420.0],"regio":1},{"name":"Kirkthwaite","x":1598,"y":3420,"attach":[1598.2,3420.0],"regio":1},{"name":"Leastead","x":1440,"y":3482,"attach":[1440.0,3482.08],"regio":1},{"name":"Newby","x":1440,"y":3471,"attach":[1440.0,3471.3],"regio":1},{"name":"Clayby","x":1440,"y":3460,"attach":[1440.0,3459.88],"regio":1},{"name":"Kirkbridge","x":1440,"y":3453,"attach":[1440.0,3452.7],"regio":1},{"name":"Penthorpe","x":1440,"y":3445,"attach":[1440.0,3445.25],"regio":1},{"name":"Wooddale","x":1440,"y":3435,"attach":[1440.0,3435.34],"regio":1},{"name":"Oakstow","x":1440,"y":3425,"attach":[1440.0,3424.9],"regio":1},{"name":"Grimscombe","x":1440,"y":3415,"attach":[1440.0,3414.87],"regio":1},{"name":"Quarrmere","x":1440,"y":3405,"attach":[1440.0,3405.41],"regio":1},{"name":"Salmore","x":1440,"y":3397,"attach":[1440.0,3396.95],"regio":1},{"name":"Hartmere","x":1440,"y":3387,"attach":[1440.0,3386.95],"regio":1},{"name":"Beckwell","x":1440,"y":3379,"attach":[1440.0,3379.19],"regio":1},{"name":"Waterwell","x":1440,"y":3369,"attach":[1440.0,3369.02],"regio":1},{"name":"Shepminster","x":1440,"y":3361,"attach":[1439.67,3361.34],"regio":1},{"name":"Holmstead","x":1438,"y":3353,"attach":[1438.26,3353.48],"regio":1},{"name":"Northstow","x":1435,"y":3346,"attach":[1435.05,3345.63],"regio":1},{"name":"Lynmere","x":1430,"y":3338,"attach":[1430.0,3338.4],"regio":1},{"name":"Sandcombe","x":1422,"y":3330,"attach":[1422.03,3330.03],"regio":1},{"name":"Larkholme","x":1451,"y":3888,"attach":[1450.73,3888.0],"regio":1},{"name":"Warmore","x":1441,"y":3888,"attach":[1440.64,3888.0],"regio":1},{"name":"Rotherham","x":1428,"y":3888,"attach":[1428.0,3888.0]},{"name":"Moorworth","x":1464,"y":3877,"attach":[1464.0,3876.66],"regio":1},{"name":"Grimshurst","x":1464,"y":3868,"attach":[1464.0,3867.57],"regio":1},{"name":"Holmmore","x":1464,"y":3860,"attach":[1464.0,3859.93],"regio":1},{"name":"Northholme","x":1464,"y":3850,"attach":[1464.0,3850.49],"regio":1},{"name":"Wickcote","x":1464,"y":3841,"attach":[1463.57,3841.32],"regio":1},{"name":"Millworth","x":1462,"y":3833,"attach":[1461.99,3833.24],"regio":1},{"name":"Foxhurst","x":1458,"y":3824,"attach":[1458.09,3824.27],"regio":1},{"name":"Wakeley","x":1452,"y":3816,"attach":[1451.9,3816.03],"regio":1},{"name":"Saxeworth","x":1441,"y":3805,"attach":[1440.87,3804.87],"regio":1},{"name":"Crowton","x":1434,"y":3798,"attach":[1433.64,3797.64],"regio":1},{"name":"Salbridge","x":1425,"y":3789,"attach":[1425.16,3789.16],"regio":1},{"name":"Moorcombe","x":1416,"y":3780,"attach":[1416.0,3780.0],"regio":1},{"name":"Hunstow","x":1480,"y":3976,"attach":[1479.88,3975.88],"regio":1},{"name":"Saldale","x":1484,"y":3980,"attach":[1484.18,3980.18],"regio":1},{"name":"Goldgate","x":1489,"y":3985,"attach":[1489.05,3985.05],"regio":1},{"name":"Marminster","x":1493,"y":3989,"attach":[1493.48,3989.48],"regio":1},{"name":"Ryeworth","x":1498,"y":3994,"attach":[1498.29,3994.29],"regio":1},{"name":"Olddale","x":1504,"y":4000,"attach":[1503.69,3999.69],"regio":1},{"name":"Foxby","x":1509,"y":4005,"attach":[1508.96,4004.96],"regio":1},{"name":"Yarstead","x":1513,"y":4009,"attach":[1513.23,4009.23],"regio":1},{"name":"Wykegate","x":1519,"y":4015,"attach":[1518.71,4014.71],"regio":1},{"name":"Quarrmore","x":1523,"y":4019,"attach":[1523.18,4019.18],"regio":1},{"name":"Upper Thurlbury","x":1527,"y":4022,"attach":[1526.5,4021.96],"regio":1},{"name":"Millham","x":1532,"y":4026,"attach":[1531.8,4025.83],"regio":1},{"name":"Winholme","x":1537,"y":4028,"attach":[1536.72,4028.5],"regio":1},{"name":"Hazelton","x":1542,"y":4030,"attach":[1542.34,4030.31],"regio":1},{"name":"Eastham","x":1547,"y":4031,"attach":[1547.45,4031.4],"regio":1},{"name":"Oldmere","x":1555,"y":4032,"attach":[1554.77,4032.0],"regio":1},{"name":"Kirkminster","x":1560,"y":4032,"attach":[1560.11,4032.0],"regio":1},{"name":"Wickwick","x":1566,"y":4032,"attach":[1566.03,4032.0],"regio":1},{"name":"Fernbridge","x":1571,"y":4032,"attach":[1570.61,4032.0],"regio":1},{"name":"Willowley","x":1576,"y":4032,"attach":[1575.81,4032.0],"regio":1},{"name":"Wykeby","x":1583,"y":4032,"attach":[1582.98,4032.0],"regio":1},{"name":"Hazelgate","x":1590,"y":4032,"attach":[1589.5,4032.0],"regio":1},{"name":"Ormford","x":1485,"y":3974,"attach":[1484.76,3973.84],"regio":1},{"name":"Winbridge","x":1493,"y":3976,"attach":[1493.29,3975.64],"regio":1},{"name":"Marby","x":1503,"y":3978,"attach":[1502.66,3977.61],"regio":1},{"name":"Penton","x":1513,"y":3980,"attach":[1512.64,3979.71],"regio":1},{"name":"Sutthwaite","x":1522,"y":3982,"attach":[1521.57,3981.59],"regio":1},{"name":"Malley","x":1531,"y":3984,"attach":[1531.35,3983.65],"regio":1},{"name":"Burnham","x":1542,"y":3986,"attach":[1541.69,3986.37],"regio":1},{"name":"Fenfield","x":1551,"y":3990,"attach":[1550.5,3990.13],"regio":1},{"name":"Waterthwaite","x":1559,"y":3996,"attach":[1559.26,3995.97],"regio":1},{"name":"Northwood","x":1566,"y":4002,"attach":[1566.36,4002.36],"regio":1},{"name":"Moorhurst","x":1571,"y":4007,"attach":[1571.33,4007.33],"regio":1},{"name":"Oldden","x":1577,"y":4013,"attach":[1576.78,4012.78],"regio":1},{"name":"Waldale","x":1582,"y":4018,"attach":[1582.18,4018.18],"regio":1},{"name":"Saxewood","x":1588,"y":4024,"attach":[1588.14,4024.14],"regio":1},{"name":"Königstadt","x":612,"y":2400,"attach":[612.0,2400.0]},{"name":"Hiltsbury","x":588,"y":2184,"attach":[588.0,2184.0]},{"name":"Bayarfort","x":2208,"y":2916,"attach":[2208.0,2916.0]},{"name":"Maidstone","x":2160,"y":2772,"attach":[2160.0,2772.0]},{"name":"Sulgen","x":2124,"y":3012,"attach":[2124.0,3012.0]},{"name":"Hawdale","x":1459,"y":3748,"attach":[1459.38,3748.35],"regio":1},{"name":"Woldden","x":1464,"y":3739,"attach":[1463.73,3738.51],"regio":1},{"name":"Foxminster","x":1464,"y":3729,"attach":[1464.0,3729.4],"regio":1},{"name":"Ulverwell","x":1464,"y":3719,"attach":[1464.0,3719.22],"regio":1},{"name":"Brookbrook","x":1464,"y":3710,"attach":[1464.0,3709.55],"regio":1},{"name":"Little Crowcote","x":1464,"y":3699,"attach":[1464.0,3698.95],"regio":1},{"name":"Stanton","x":1464,"y":3688,"attach":[1464.0,3688.12],"regio":1},{"name":"Woldham","x":1464,"y":3679,"attach":[1464.0,3679.44],"regio":1},{"name":"Stowford","x":1464,"y":3670,"attach":[1464.0,3669.61],"regio":1},{"name":"Bradminster","x":1464,"y":3658,"attach":[1464.0,3658.45],"regio":1},{"name":"Stowminster","x":1464,"y":3650,"attach":[1464.0,3650.08],"regio":1},{"name":"Wakebury Junction","x":1464,"y":3636,"attach":[1464.0,3635.9],"regio":1},{"name":"Saxebridge","x":1464,"y":3629,"attach":[1464.0,3629.02],"regio":1},{"name":"Shepford","x":1440,"y":3768,"attach":[1439.98,3768.02],"regio":1},{"name":"Beckfield","x":1433,"y":3775,"attach":[1432.81,3775.19],"regio":1},{"name":"Heathfield","x":1426,"y":3779,"attach":[1425.71,3779.49],"regio":1},{"name":"Brackenholt","x":732,"y":2964,"attach":[732.0,2964.0],"regio":1},{"name":"Netherley","x":1236,"y":2806,"attach":[1236.0,2805.59],"regio":1},{"name":"Warcote","x":1236,"y":2785,"attach":[1236.0,2784.78],"regio":1},{"name":"Ribeauvillé","x":1236,"y":2760,"attach":[1236.0,2760.0]},{"name":"Yarwood","x":1224,"y":2854,"attach":[1224.0,2853.88],"regio":1},{"name":"Hazelminster","x":1224,"y":2878,"attach":[1224.0,2878.24],"regio":1},{"name":"Nethergate","x":1224,"y":2892,"attach":[1224.0,2892.47],"regio":1},{"name":"Songqiao Airport","x":1380,"y":1488,"attach":[1380.0,1488.0]},{"name":"Quanguan","x":1308,"y":1500,"attach":[1308.0,1500.0]},{"name":"Findel","x":588,"y":2484,"attach":[588.0,2484.0]},{"name":"REG-NFR-02","x":384,"y":2616,"attach":[384.0,2616.0],"regio":1},{"name":"Beckminster","x":1625,"y":3185,"attach":[1624.97,3184.97],"regio":1},{"name":"Northhurst","x":1618,"y":3178,"attach":[1618.04,3177.65],"regio":1},{"name":"Lynbridge","x":1613,"y":3171,"attach":[1613.17,3170.77],"regio":1},{"name":"Penhurst","x":1610,"y":3162,"attach":[1609.51,3161.74],"regio":1},{"name":"Elmworth","x":1608,"y":3153,"attach":[1608.15,3152.64],"regio":1},{"name":"Saxefield","x":1608,"y":3143,"attach":[1608.0,3142.59],"regio":1},{"name":"Norththwaite","x":1608,"y":3133,"attach":[1608.0,3133.25],"regio":1},{"name":"Kirkmore","x":1608,"y":3122,"attach":[1608.0,3122.33],"regio":1},{"name":"Salwood","x":1608,"y":3111,"attach":[1608.0,3110.76],"regio":1},{"name":"Highthorpe","x":1608,"y":3102,"attach":[1608.0,3101.69],"regio":1},{"name":"Wicksted","x":1608,"y":3089,"attach":[1608.0,3089.11],"regio":1},{"name":"Sandhurst","x":1608,"y":3079,"attach":[1608.0,3078.96],"regio":1},{"name":"Waterworth","x":1632,"y":3213,"attach":[1632.0,3212.53],"regio":1},{"name":"Melford","x":1622,"y":3169,"attach":[1622.1,3169.28],"regio":1},{"name":"Silbridge","x":1621,"y":3160,"attach":[1620.95,3160.35],"regio":1},{"name":"Wakemere","x":1620,"y":3152,"attach":[1619.82,3151.63],"regio":1},{"name":"Chalcombe","x":1619,"y":3145,"attach":[1618.93,3144.7],"regio":1},{"name":"Langden","x":1618,"y":3137,"attach":[1617.9,3136.7],"regio":1},{"name":"Ormby","x":1617,"y":3128,"attach":[1616.77,3127.94],"regio":1},{"name":"Ashthwaite","x":1616,"y":3121,"attach":[1615.85,3120.85],"regio":1},{"name":"Sutdale","x":1615,"y":3114,"attach":[1614.91,3113.52],"regio":1},{"name":"Barkbridge","x":1614,"y":3107,"attach":[1614.06,3107.0],"regio":1},{"name":"Hartminster","x":1613,"y":3100,"attach":[1613.17,3100.04],"regio":1},{"name":"Willowhurst","x":1612,"y":3093,"attach":[1612.23,3092.82],"regio":1},{"name":"Stockminster","x":1611,"y":3084,"attach":[1611.11,3084.09],"regio":1},{"name":"Rookdale","x":1610,"y":3075,"attach":[1609.95,3075.11],"regio":1},{"name":"Crowsted","x":1609,"y":3068,"attach":[1609.0,3067.77],"regio":1},{"name":"Longstow","x":1608,"y":3168,"attach":[1608.0,3168.0],"regio":1},{"name":"Fernden","x":1457,"y":3619,"attach":[1456.52,3619.48],"regio":1},{"name":"Burncote","x":1444,"y":3632,"attach":[1444.47,3631.53],"regio":1},{"name":"Holmton","x":1437,"y":3639,"attach":[1436.72,3639.28],"regio":1},{"name":"Hawbury","x":1430,"y":3646,"attach":[1430.48,3645.52],"regio":1},{"name":"Sandgate","x":1424,"y":3653,"attach":[1424.04,3652.9],"regio":1},{"name":"Hartfield","x":1420,"y":3660,"attach":[1419.95,3659.9],"regio":1},{"name":"Crowthwaite","x":1417,"y":3667,"attach":[1417.39,3667.34],"regio":1},{"name":"Brentdale","x":1416,"y":3676,"attach":[1416.15,3676.39],"regio":1},{"name":"Shepthorpe","x":1416,"y":3687,"attach":[1416.0,3686.56],"regio":1},{"name":"Hazelwick","x":1416,"y":3696,"attach":[1416.0,3695.87],"regio":1},{"name":"Coldsted","x":1416,"y":3705,"attach":[1416.0,3705.4],"regio":1},{"name":"Toddale","x":1416,"y":3713,"attach":[1416.0,3712.94],"regio":1},{"name":"Newstow","x":1416,"y":3725,"attach":[1416.0,3724.69],"regio":1},{"name":"Heathby","x":1416,"y":3737,"attach":[1416.0,3736.75],"regio":1},{"name":"Longstead","x":1416,"y":3746,"attach":[1416.0,3745.76],"regio":1},{"name":"Stockstead","x":1416,"y":3756,"attach":[1416.0,3755.65],"regio":1},{"name":"Southminster","x":1416,"y":3764,"attach":[1416.0,3763.69],"regio":1},{"name":"Brentwood","x":1423,"y":3883,"attach":[1422.6,3882.6],"regio":1},{"name":"Fenbury","x":1417,"y":3874,"attach":[1417.15,3874.19],"regio":1},{"name":"Todbrook","x":1416,"y":3861,"attach":[1416.0,3861.22],"regio":1},{"name":"Todsted","x":1416,"y":3849,"attach":[1416.0,3848.58],"regio":1},{"name":"Moorstow","x":1416,"y":3838,"attach":[1416.0,3837.9],"regio":1},{"name":"Cotfield","x":1416,"y":3823,"attach":[1416.0,3822.57],"regio":1},{"name":"Foxham","x":1416,"y":3812,"attach":[1416.0,3812.11],"regio":1},{"name":"Hartwell","x":1416,"y":3799,"attach":[1416.0,3798.69],"regio":1},{"name":"Sancerre","x":1176,"y":2016,"attach":[1176.0,2016.0]},{"name":"Fairden","x":1296,"y":2064,"attach":[1296.0,2064.0]},{"name":"REG-CRA-01","x":1884,"y":2112,"attach":[1884.0,2112.0]},{"name":"Cranford Central","x":1920,"y":2184,"attach":[1920.0,2184.0]},{"name":"Cranford West","x":1848,"y":2220,"attach":[1848.0,2220.0]},{"name":"Oakbrook","x":1272,"y":3122,"attach":[1272.0,3122.09],"regio":1},{"name":"Ulverley","x":1272,"y":3113,"attach":[1272.0,3112.81],"regio":1},{"name":"Quarrcombe","x":1272,"y":3101,"attach":[1272.0,3101.3],"regio":1},{"name":"Hartgate","x":1272,"y":3091,"attach":[1272.0,3090.73],"regio":1},{"name":"Millbridge","x":1272,"y":3076,"attach":[1271.81,3075.95],"regio":1},{"name":"Netherby","x":1270,"y":3066,"attach":[1270.32,3066.37],"regio":1},{"name":"Winstow","x":1265,"y":3054,"attach":[1264.75,3053.86],"regio":1},{"name":"Southley","x":1258,"y":3046,"attach":[1257.99,3045.99],"regio":1},{"name":"Lynthorpe","x":1249,"y":3037,"attach":[1248.81,3036.81],"regio":1},{"name":"Walcombe","x":1242,"y":3030,"attach":[1241.7,3029.7],"regio":1},{"name":"Walwood","x":1232,"y":3020,"attach":[1231.81,3019.81],"regio":1},{"name":"Whitwick","x":1296,"y":3132,"attach":[1296.45,3132.0],"regio":1},{"name":"Brookford","x":1307,"y":3132,"attach":[1307.41,3132.0],"regio":1},{"name":"Salden","x":1320,"y":3132,"attach":[1319.72,3132.0],"regio":1},{"name":"Todley","x":1331,"y":3132,"attach":[1330.61,3132.0],"regio":1},{"name":"Rookbridge","x":1345,"y":3132,"attach":[1345.08,3132.0],"regio":1},{"name":"Stockcote","x":1357,"y":3132,"attach":[1356.83,3132.0],"regio":1},{"name":"Rookcombe","x":1365,"y":3132,"attach":[1365.29,3132.3],"regio":1},{"name":"Whitmore","x":1376,"y":3135,"attach":[1376.47,3134.52],"regio":1},{"name":"Elmden","x":1384,"y":3138,"attach":[1384.28,3138.21],"regio":1},{"name":"Birchworth","x":1393,"y":3145,"attach":[1393.28,3145.28],"regio":1},{"name":"Nethercote","x":1400,"y":3152,"attach":[1400.29,3152.29],"regio":1},{"name":"Salmere","x":1409,"y":3161,"attach":[1408.71,3160.71],"regio":1},{"name":"Crowhurst","x":1418,"y":3170,"attach":[1417.93,3169.93],"regio":1},{"name":"Eastton","x":1426,"y":3178,"attach":[1426.3,3178.3],"regio":1},{"name":"Marham","x":1435,"y":3187,"attach":[1435.29,3187.29],"regio":1},{"name":"Yarminster","x":1442,"y":3194,"attach":[1442.15,3194.15],"regio":1},{"name":"Walmore","x":1450,"y":3202,"attach":[1450.28,3202.28],"regio":1},{"name":"Stanham","x":1459,"y":3211,"attach":[1458.74,3210.74],"regio":1},{"name":"Larkmore","x":1469,"y":3221,"attach":[1468.69,3220.69],"regio":1},{"name":"Cotsted","x":1477,"y":3229,"attach":[1477.11,3229.11],"regio":1},{"name":"Winbrook","x":1484,"y":3236,"attach":[1484.12,3236.12],"regio":1},{"name":"Hazelley","x":1493,"y":3245,"attach":[1492.92,3244.92],"regio":1},{"name":"Penfield","x":1501,"y":3253,"attach":[1501.29,3253.29],"regio":1},{"name":"Salminster","x":1510,"y":3262,"attach":[1510.03,3262.03],"regio":1},{"name":"Marford","x":1519,"y":3271,"attach":[1519.05,3271.05],"regio":1},{"name":"Highbridge","x":1527,"y":3279,"attach":[1526.55,3278.55],"regio":1},{"name":"Redwick","x":1281,"y":3141,"attach":[1280.66,3140.66],"regio":1},{"name":"Bradstow","x":1303,"y":3163,"attach":[1302.86,3162.86],"regio":1},{"name":"Holmwood","x":1311,"y":3171,"attach":[1311.02,3171.02],"regio":1},{"name":"Newwood","x":1317,"y":3177,"attach":[1317.02,3177.02],"regio":1},{"name":"Swanhurst","x":1323,"y":3183,"attach":[1322.92,3182.92],"regio":1},{"name":"Fairwood","x":1331,"y":3191,"attach":[1330.55,3190.55],"regio":1},{"name":"Ulversted","x":1339,"y":3199,"attach":[1338.53,3198.53],"regio":1},{"name":"Sutcote","x":1346,"y":3206,"attach":[1345.79,3205.79],"regio":1},{"name":"Melbury","x":1351,"y":3211,"attach":[1350.66,3210.66],"regio":1},{"name":"Marton","x":1357,"y":3217,"attach":[1356.93,3216.93],"regio":1},{"name":"Rookton","x":1363,"y":3223,"attach":[1362.63,3222.63],"regio":1},{"name":"Thornford","x":1370,"y":3230,"attach":[1370.3,3230.3],"regio":1},{"name":"Cherrywick","x":1376,"y":3236,"attach":[1375.66,3235.66],"regio":1},{"name":"Fairthorpe","x":1381,"y":3241,"attach":[1380.88,3240.88],"regio":1},{"name":"Ulverstead","x":1388,"y":3248,"attach":[1388.0,3248.0],"regio":1},{"name":"Quarrwell","x":1393,"y":3253,"attach":[1393.04,3253.04],"regio":1},{"name":"Silsted","x":1400,"y":3260,"attach":[1400.12,3260.12],"regio":1},{"name":"Westhorpe","x":1407,"y":3268,"attach":[1407.03,3267.78],"regio":1},{"name":"Millford","x":1411,"y":3274,"attach":[1411.0,3273.95],"regio":1},{"name":"Redfield","x":1415,"y":3284,"attach":[1414.72,3283.69],"regio":1},{"name":"Malholme","x":1416,"y":3291,"attach":[1415.71,3290.82],"regio":1},{"name":"Dunbury","x":1416,"y":3299,"attach":[1416.0,3299.29],"regio":1},{"name":"Brentford","x":1416,"y":3308,"attach":[1416.0,3308.06],"regio":1},{"name":"Wakeford","x":1416,"y":3315,"attach":[1416.0,3314.66],"regio":1},{"name":"Batavie","x":1464,"y":1992,"attach":[1464.0,1992.0]},{"name":"Melworth","x":1656,"y":3838,"attach":[1656.0,3838.05],"regio":1},{"name":"Salstow","x":1656,"y":3830,"attach":[1656.0,3829.81],"regio":1},{"name":"Elmthwaite","x":1656,"y":3822,"attach":[1656.0,3822.0],"regio":1},{"name":"Yarfield","x":1656,"y":3813,"attach":[1656.0,3812.83],"regio":1},{"name":"Larkby","x":1659,"y":3843,"attach":[1659.21,3843.16],"regio":1},{"name":"Burngate","x":1666,"y":3825,"attach":[1665.93,3824.69],"regio":1},{"name":"Wykecote","x":1663,"y":3799,"attach":[1663.32,3799.32],"regio":1},{"name":"Yuchow Airport","x":576,"y":1488,"attach":[576.0,1488.0]},{"name":"Port-du-Roi","x":1548,"y":2940,"attach":[1548.0,2940.0]},{"name":"Elmgate","x":1563,"y":2925,"attach":[1562.74,2925.26],"regio":1},{"name":"Ulverbridge","x":1579,"y":2909,"attach":[1578.72,2909.28],"regio":1},{"name":"Crowminster","x":1548,"y":2964,"attach":[1548.0,2963.8],"regio":1},{"name":"Shepwood","x":1548,"y":2985,"attach":[1548.0,2984.91],"regio":1},{"name":"Fairmore","x":1536,"y":3012,"attach":[1536.0,3012.0],"regio":1},{"name":"Bradbridge","x":1520,"y":2952,"attach":[1520.07,2952.0],"regio":1},{"name":"Coldbury Junction","x":1548,"y":2926,"attach":[1548.0,2926.25],"regio":1},{"name":"Brentgate","x":1548,"y":2905,"attach":[1548.0,2904.7],"regio":1},{"name":"Grimsby","x":1548,"y":2893,"attach":[1548.0,2893.21],"regio":1},{"name":"Dunley","x":1548,"y":2883,"attach":[1548.0,2883.09],"regio":1},{"name":"Millbrook","x":1548,"y":2871,"attach":[1548.0,2871.47],"regio":1},{"name":"Wessted","x":1548,"y":2861,"attach":[1548.02,2860.71],"regio":1},{"name":"Hartden","x":1549,"y":2851,"attach":[1549.27,2851.05],"regio":1},{"name":"REG-CHB-01","x":1824,"y":1596,"attach":[1824.0,1596.0]},{"name":"Rossdale South","x":2016,"y":1848,"attach":[2016.0,1848.0]},{"name":"Chankow","x":1224,"y":1404,"attach":[1224.0,1404.0]},{"name":"Peiting Central","x":1236,"y":1548,"attach":[1236.0,1548.0]},{"name":"Nouvelle-Touraine","x":1968,"y":1920,"attach":[1968.0,1920.0]},{"name":"Canterbury","x":2112,"y":1968,"attach":[2112.0,1968.0]},{"name":"Sandwick","x":1552,"y":3012,"attach":[1552.18,3012.38],"regio":1},{"name":"Ormgate","x":1581,"y":3033,"attach":[1580.63,3032.63],"regio":1},{"name":"Wolddale","x":1591,"y":3043,"attach":[1590.78,3042.78],"regio":1},{"name":"Highstow","x":1531,"y":3007,"attach":[1531.27,3007.27],"regio":1},{"name":"Sandbury","x":1520,"y":2996,"attach":[1519.72,2995.72],"regio":1},{"name":"Hartthwaite","x":1517,"y":2993,"attach":[1516.9,2992.9],"regio":1},{"name":"Elmton","x":1515,"y":2991,"attach":[1514.87,2990.87],"regio":1},{"name":"Rookford","x":1512,"y":2988,"attach":[1512.25,2988.25],"regio":1},{"name":"Larksted","x":1510,"y":2986,"attach":[1510.16,2986.16],"regio":1},{"name":"Langthwaite","x":1507,"y":2983,"attach":[1507.44,2983.23],"regio":1},{"name":"Rookmore","x":1505,"y":2981,"attach":[1505.25,2980.59],"regio":1},{"name":"Highbury","x":1503,"y":2977,"attach":[1502.96,2976.67],"regio":1},{"name":"Thornwick","x":1501,"y":2973,"attach":[1501.46,2972.92],"regio":1},{"name":"Fengate","x":1500,"y":2969,"attach":[1500.42,2968.58],"regio":1},{"name":"Stowby","x":1500,"y":2961,"attach":[1500.0,2960.6],"regio":1},{"name":"Eastmere","x":1500,"y":2956,"attach":[1500.0,2955.76],"regio":1},{"name":"Linhai-Pu’an","x":1704,"y":1176,"attach":[1704.0,1176.0]},{"name":"Chiangkou","x":1932,"y":1164,"attach":[1932.0,1164.0]},{"name":"Ashton","x":1860,"y":2328,"attach":[1860.0,2328.0]},{"name":"Crowholme","x":1644,"y":3262,"attach":[1644.0,3262.28],"regio":1},{"name":"Cosgrove","x":1644,"y":3288,"attach":[1644.0,3288.0]},{"name":"Holmley","x":1201,"y":2905,"attach":[1201.12,2905.12],"regio":1},{"name":"Brambury","x":1196,"y":2900,"attach":[1195.72,2899.72],"regio":1},{"name":"Brentstow","x":1191,"y":2895,"attach":[1190.94,2894.94],"regio":1},{"name":"Malsted","x":1185,"y":2888,"attach":[1184.92,2888.15],"regio":1},{"name":"Woodby","x":1181,"y":2881,"attach":[1180.66,2881.42],"regio":1},{"name":"Rookwick","x":1178,"y":2873,"attach":[1177.54,2873.18],"regio":1},{"name":"Whitbrook","x":1176,"y":2864,"attach":[1176.16,2863.79],"regio":1},{"name":"Stanfield","x":1176,"y":2855,"attach":[1176.0,2855.07],"regio":1},{"name":"Moorton","x":1176,"y":2845,"attach":[1176.0,2844.79],"regio":1},{"name":"Ryebrook","x":1176,"y":2832,"attach":[1176.0,2832.45],"regio":1},{"name":"Standen","x":1176,"y":2821,"attach":[1176.0,2821.47],"regio":1},{"name":"Brentbrook","x":1176,"y":2812,"attach":[1176.0,2811.9],"regio":1},{"name":"Silhurst","x":1176,"y":2803,"attach":[1176.0,2802.73],"regio":1},{"name":"Coldton","x":1176,"y":2796,"attach":[1176.0,2795.76],"regio":1},{"name":"Fairley","x":1176,"y":2789,"attach":[1176.0,2788.57],"regio":1},{"name":"Kirkmere","x":1176,"y":2780,"attach":[1176.0,2779.77],"regio":1},{"name":"Linton","x":864,"y":2988,"attach":[864.0,2988.0],"regio":1},{"name":"Pu’an","x":1680,"y":1260,"attach":[1680.0,1260.0]},{"name":"Chapelbridge","x":876,"y":2064,"attach":[876.0,2064.0]},{"name":"Rushmere","x":804,"y":2076,"attach":[804.0,2076.0]},{"name":"Yungang","x":2112,"y":1188,"attach":[2112.0,1188.0]},{"name":"REG-CHB-03","x":2016,"y":1152,"attach":[2016.0,1152.0]},{"name":"Tongshan","x":1512,"y":1500,"attach":[1512.0,1500.0]},{"name":"Hawbridge","x":1640,"y":3436,"attach":[1640.43,3435.57],"regio":1},{"name":"Grimston","x":1653,"y":3419,"attach":[1653.03,3418.66],"regio":1},{"name":"Walsted","x":1619,"y":3409,"attach":[1619.24,3408.76],"regio":1},{"name":"Southford","x":1627,"y":3401,"attach":[1626.61,3401.39],"regio":1},{"name":"Moorminster","x":1597,"y":3409,"attach":[1596.55,3408.55],"regio":1},{"name":"Cotminster","x":1588,"y":3400,"attach":[1588.44,3400.44],"regio":1},{"name":"Hawworth","x":1583,"y":3394,"attach":[1582.55,3394.11],"regio":1},{"name":"Brenthurst","x":1576,"y":3384,"attach":[1575.75,3383.73],"regio":1},{"name":"Woldmore","x":1573,"y":3374,"attach":[1572.71,3373.79],"regio":1},{"name":"Claybury","x":1572,"y":3365,"attach":[1572.0,3364.82],"regio":1},{"name":"Saxeholme","x":1572,"y":3352,"attach":[1572.0,3352.3],"regio":1},{"name":"Moorbridge","x":1572,"y":3343,"attach":[1572.0,3343.23],"regio":1},{"name":"Willowcote","x":1572,"y":3332,"attach":[1572.0,3332.04],"regio":1},{"name":"Blackgate","x":1572,"y":3322,"attach":[1572.0,3321.59],"regio":1},{"name":"Stowton","x":1572,"y":3310,"attach":[1572.0,3310.22],"regio":1},{"name":"Beckby","x":1656,"y":3351,"attach":[1656.0,3351.39],"regio":1},{"name":"Fernby","x":1656,"y":3343,"attach":[1656.0,3343.11],"regio":1},{"name":"Holmwick","x":1656,"y":3334,"attach":[1656.0,3334.22],"regio":1},{"name":"Fernminster","x":1656,"y":3305,"attach":[1655.7,3305.2],"regio":1},{"name":"Stockwick","x":1639,"y":4025,"attach":[1638.55,4025.45],"regio":1},{"name":"Saxemore","x":1632,"y":4030,"attach":[1631.55,4030.41],"regio":1},{"name":"Wickholme","x":1622,"y":4032,"attach":[1622.3,4032.0],"regio":1},{"name":"Woodthorpe","x":1615,"y":4032,"attach":[1615.11,4032.0],"regio":1},{"name":"Yarbridge","x":1191,"y":2772,"attach":[1191.21,2772.0],"regio":1},{"name":"Woldstow","x":1224,"y":2770,"attach":[1223.56,2770.4],"regio":1},{"name":"Quarrfield","x":1231,"y":2765,"attach":[1230.98,2765.02],"regio":1},{"name":"Peiting New Town","x":1176,"y":1596,"attach":[1176.0,1596.0]},{"name":"Burnden","x":1435,"y":3581,"attach":[1434.98,3581.02],"regio":1},{"name":"Lynwood Junction","x":1430,"y":3586,"attach":[1430.27,3585.73],"regio":1},{"name":"Leaden Junction","x":1428,"y":3588,"attach":[1427.89,3588.28],"regio":1},{"name":"Thurlstow","x":1422,"y":3596,"attach":[1422.09,3595.94],"regio":1},{"name":"Malby","x":1419,"y":3603,"attach":[1418.58,3603.34],"regio":1},{"name":"Whitcombe","x":1417,"y":3612,"attach":[1416.58,3611.68],"regio":1},{"name":"Crowwood","x":1416,"y":3621,"attach":[1416.0,3620.82],"regio":1},{"name":"Willowbrook","x":1416,"y":3629,"attach":[1416.0,3628.99],"regio":1},{"name":"Foxstow","x":1416,"y":3637,"attach":[1416.0,3637.04],"regio":1},{"name":"Bradwood","x":1416,"y":3645,"attach":[1416.0,3644.8],"regio":1},{"name":"Saxeby","x":1416,"y":3654,"attach":[1416.0,3654.02],"regio":1},{"name":"Birchstow","x":1416,"y":3663,"attach":[1416.0,3662.53],"regio":1},{"name":"Wickthorpe","x":1416,"y":3671,"attach":[1416.0,3670.53],"regio":1},{"name":"Hawstow","x":1416,"y":3678,"attach":[1416.0,3678.47],"regio":1},{"name":"Yarwell","x":1416,"y":3684,"attach":[1416.0,3683.78],"regio":1},{"name":"Wickwell","x":1416,"y":3692,"attach":[1416.0,3691.57],"regio":1},{"name":"Rookbury","x":1416,"y":3699,"attach":[1416.0,3699.12],"regio":1},{"name":"Fenwell","x":1416,"y":3705,"attach":[1416.0,3704.77],"regio":1},{"name":"Walham","x":1416,"y":3712,"attach":[1416.0,3711.52],"regio":1},{"name":"Sandley","x":1416,"y":3722,"attach":[1416.0,3721.61],"regio":1},{"name":"Holmfield","x":1416,"y":3728,"attach":[1416.0,3728.16],"regio":1},{"name":"Newmere","x":1416,"y":3739,"attach":[1416.0,3738.81],"regio":1},{"name":"Brentworth","x":1416,"y":3747,"attach":[1416.0,3747.16],"regio":1},{"name":"Wargate","x":1416,"y":3755,"attach":[1416.0,3755.03],"regio":1},{"name":"Brentstead","x":1416,"y":3765,"attach":[1416.0,3764.81],"regio":1},{"name":"Dunby","x":1416,"y":3773,"attach":[1416.0,3772.92],"regio":1},{"name":"Goldbridge","x":1545,"y":3288,"attach":[1545.36,3288.0],"regio":1}];
const GRAPH={"pts":[[1452,3588],[1452.0,3564.0],[1452.0,3594.0],[1452.27,3596.89],[1453.06,3599.56],[1454.39,3602.01],[1456.24,3604.24],[1464.0,3612.0],[1459.3,3600.77],[1466.6,3613.54],[1467.09,3614.49],[1467.15,3614.89],[1466.79,3614.72],[1466.0,3614.0],[1332,3240],[1332.0,3225.0],[1332.0,3210.0],[1331.2,3201.33],[1328.82,3193.32],[1324.84,3185.97],[1319.27,3179.27],[1307.45,3167.45],[1295.64,3155.64],[1283.82,3143.82],[1272.0,3132.0],[1332.0,3254.0],[1332.0,3268.0],[1332.0,3282.0],[1332.0,3296.0],[1332.0,3310.0],[1332.0,3324.0],[1332.0,3338.0],[1332.0,3352.0],[1332.0,3366.0],[1332.8,3374.67],[1335.18,3382.68],[1339.16,3390.03],[1344.73,3396.73],[1356.58,3408.58],[1368.44,3420.44],[1380.29,3432.29],[1392.15,3444.15],[1404.0,3456.0],[1342.5,3250.5],[1353.0,3261.0],[1363.5,3271.5],[1374.0,3282.0],[1384.5,3292.5],[1395.0,3303.0],[1405.5,3313.5],[1416.0,3324.0],[1668,3552],[1668.0,3538.0],[1668.0,3524.0],[1668.0,3510.0],[1667.2,3501.33],[1664.82,3493.32],[1660.84,3485.97],[1655.27,3479.27],[1643.64,3467.64],[1632.0,3456.0],[1668.0,3566.0],[1668.0,3580.0],[1668.0,3594.0],[1668.0,3608.0],[1668.0,3622.0],[1668.0,3636.0],[1668.0,3650.0],[1668.0,3664.0],[1668.0,3678.0],[1668.0,3692.0],[1668.0,3706.0],[1668.0,3720.0],[1668.0,3534.0],[1668.0,3516.0],[1668.0,3498.0],[1667.2,3489.33],[1664.82,3481.32],[1660.84,3473.97],[1655.27,3467.27],[1643.64,3455.64],[1632.0,3444.0],[1652.49,3536.49],[1648.02,3532.77],[1643.12,3530.12],[1637.78,3528.53],[1632.0,3528.0],[1620.0,3528.0],[1704,3180],[1693.06,3169.06],[1682.12,3158.12],[1671.18,3147.18],[1660.24,3136.24],[1649.3,3125.3],[1638.36,3114.36],[1627.42,3103.42],[1616.49,3092.49],[1612.77,3088.02],[1610.12,3083.12],[1608.53,3077.78],[1608.0,3072.0],[1608.0,3060.0],[1704.0,3194.25],[1704.0,3208.5],[1704.0,3222.75],[1704.0,3237.0],[1704.0,3251.25],[1704.0,3265.5],[1704.0,3279.75],[1704.0,3294.0],[1703.2,3302.67],[1700.82,3310.68],[1696.84,3318.03],[1691.27,3324.73],[1679.51,3336.49],[1667.76,3348.24],[1656.0,3360.0],[1692.85,3191.15],[1681.7,3202.3],[1670.55,3213.45],[1659.39,3224.61],[1648.24,3235.76],[1646.01,3237.61],[1643.56,3238.94],[1640.89,3239.73],[1638.0,3240.0],[1632.0,3240.0],[1686.83,3180.0],[1669.66,3180.0],[1652.49,3180.0],[1648.4,3180.38],[1644.62,3181.5],[1641.16,3183.38],[1638.0,3186.0],[1632.0,3192.0],[1706.0,3194.0],[1706.01,3199.94],[1704.04,3203.77],[1700.09,3205.49],[1694.16,3205.09],[1678.62,3201.81],[1663.08,3198.54],[1647.54,3195.27],[1716,1368],[1728.0,1380.0],[1733.25,1386.31],[1737.0,1393.24],[1739.25,1400.8],[1740.0,1408.97],[1740.0,1423.35],[1740.0,1437.73],[1740.0,1452.11],[1740.0,1466.49],[1740.0,1480.86],[1740.0,1495.24],[1740.0,1509.62],[1740.0,1524.0],[1701.0,1368.0],[1686.0,1368.0],[1671.0,1368.0],[1656.0,1368.0],[1641.0,1368.0],[1626.0,1368.0],[1611.0,1368.0],[1596.0,1368.0],[1581.0,1368.0],[1566.0,1368.0],[1557.33,1368.8],[1549.32,1371.18],[1541.97,1375.16],[1535.27,1380.73],[1523.45,1392.55],[1511.64,1404.36],[1499.82,1416.18],[1488.0,1428.0],[1704.0,1356.0],[1698.75,1349.69],[1695.0,1342.76],[1692.75,1335.2],[1692.0,1327.03],[1692.0,1308.0],[1727.64,1379.64],[1739.27,1391.27],[1745.97,1396.84],[1753.32,1400.82],[1761.33,1403.2],[1770.0,1404.0],[1784.25,1404.0],[1798.5,1404.0],[1812.75,1404.0],[1827.0,1404.0],[1841.25,1404.0],[1855.5,1404.0],[1869.75,1404.0],[1884.0,1404.0],[528,2136],[540.0,2124.0],[552.0,2112.0],[1608,3420],[1620.0,3420.0],[1620.0,3432.0],[1608.0,3426.0],[1608.27,3428.89],[1609.06,3431.56],[1610.39,3434.01],[1612.24,3436.24],[1512,3108],[1497.61,3108.0],[1483.23,3108.0],[1468.84,3108.0],[1454.45,3108.0],[1440.07,3108.0],[1425.68,3108.0],[1411.29,3108.0],[1396.9,3108.0],[1382.52,3108.0],[1368.13,3108.0],[1353.74,3108.0],[1339.36,3108.0],[1324.97,3108.0],[1316.8,3108.75],[1309.24,3111.0],[1302.31,3114.75],[1296.0,3120.0],[1284.0,3132.0],[1523.76,3096.24],[1535.51,3084.49],[1547.27,3072.73],[1553.97,3067.16],[1561.32,3063.18],[1569.33,3060.8],[1578.0,3060.0],[1593.0,3060.0],[1523.76,3119.76],[1535.51,3131.51],[1547.27,3143.27],[1552.84,3149.97],[1556.82,3157.32],[1559.2,3165.33],[1560.0,3174.0],[1560.0,3188.0],[1560.0,3202.0],[1560.0,3216.0],[1515.07,3122.6],[1518.15,3137.19],[1521.22,3151.79],[1524.29,3166.39],[1526.71,3174.89],[1530.25,3182.78],[1534.93,3190.06],[1540.73,3196.73],[1056,2124],[1036.97,2124.0],[1028.8,2124.75],[1021.24,2127.0],[1014.31,2130.75],[1008.0,2136.0],[996.0,2148.0],[1066.41,2134.41],[1076.82,2144.82],[1087.23,2155.23],[1097.64,2165.64],[1108.05,2176.05],[1118.45,2186.45],[1128.86,2196.86],[1139.27,2207.27],[1145.97,2212.84],[1153.32,2216.82],[1161.33,2219.2],[1170.0,2220.0],[1184.21,2220.0],[1198.42,2220.0],[1212.63,2220.0],[1226.84,2220.0],[1241.05,2220.0],[1255.26,2220.0],[1269.47,2220.0],[1283.68,2220.0],[1297.89,2220.0],[1312.11,2220.0],[1326.32,2220.0],[1340.53,2220.0],[1354.74,2220.0],[1368.95,2220.0],[1383.16,2220.0],[1397.37,2220.0],[1411.58,2220.0],[1425.79,2220.0],[1440.0,2220.0],[1872.15,1392.15],[1860.29,1380.29],[1848.44,1368.44],[1836.58,1356.58],[1824.73,1344.73],[1819.16,1338.03],[1815.18,1330.68],[1812.8,1322.67],[1812.0,1314.0],[1812.0,1299.27],[1812.0,1284.55],[1812.0,1269.82],[1812.0,1255.09],[1812.0,1240.36],[1812.0,1225.64],[1812.0,1210.91],[1812.0,1196.18],[1812.0,1181.45],[1812.0,1166.73],[1812.0,1152.0],[1873.86,1414.14],[1863.72,1424.28],[1853.59,1434.41],[1843.45,1444.55],[1833.31,1454.69],[1823.17,1464.83],[1813.04,1474.96],[1802.9,1485.1],[1792.76,1495.24],[1782.62,1505.38],[1772.49,1515.51],[1768.02,1519.23],[1763.12,1521.88],[1757.78,1523.47],[1752.0,1524.0],[1644,3924],[1644.0,3904.24],[1644.0,3884.49],[1644.38,3880.4],[1645.5,3876.62],[1647.38,3873.16],[1650.0,3870.0],[1656.0,3864.0],[1644.0,3948.0],[1656.0,3912.0],[1661.25,3905.69],[1665.0,3898.76],[1667.25,3891.2],[1668.0,3883.03],[1668.0,3868.21],[1668.0,3853.39],[1668.0,3838.57],[1668.0,3823.75],[1668.0,3808.93],[1668.0,3794.1],[1668.0,3779.28],[1668.0,3764.46],[1668.0,3749.64],[1668.0,3734.82],[1638.0,3918.0],[1634.84,3915.38],[1631.38,3913.5],[1627.6,3912.38],[1623.51,3912.0],[1609.01,3912.0],[1594.51,3912.0],[1580.01,3912.0],[1565.51,3912.0],[1551.01,3912.0],[1536.51,3912.0],[1522.01,3912.0],[1507.5,3912.0],[1493.0,3912.0],[1478.5,3912.0],[1464.0,3912.0],[1644.0,3906.83],[1644.0,3889.66],[1644.0,3872.49],[1644.38,3868.4],[1645.5,3864.62],[1647.38,3861.16],[1650.0,3858.0],[1656.0,3852.0],[1320,2988],[1334.0,2988.0],[1348.0,2988.0],[1362.0,2988.0],[1376.0,2988.0],[1390.0,2988.0],[1404.0,2988.0],[1418.0,2988.0],[1432.0,2988.0],[1446.0,2988.0],[1454.67,2987.2],[1462.68,2984.82],[1470.03,2980.84],[1476.73,2975.27],[1488.36,2963.64],[1500.0,2952.0],[1304.19,2988.0],[1288.39,2988.0],[1272.58,2988.0],[1256.78,2988.0],[1240.97,2988.0],[1232.8,2987.25],[1225.24,2985.0],[1218.31,2981.25],[1212.0,2976.0],[1200.0,2964.0],[1320.0,2974.0],[1320.0,2960.0],[1320.0,2946.0],[1319.2,2937.33],[1316.82,2929.32],[1312.84,2921.97],[1307.27,2915.27],[1296.86,2904.86],[1286.45,2894.45],[1276.05,2884.05],[1265.64,2873.64],[1255.23,2863.23],[1244.82,2852.82],[1234.41,2842.41],[1224.0,2832.0],[1320.0,3003.0],[1320.0,3018.0],[1320.0,3033.0],[1320.0,3048.0],[1320.0,3063.0],[1320.0,3078.0],[1319.2,3086.67],[1316.82,3094.68],[1312.84,3102.03],[1307.27,3108.73],[1295.64,3120.36],[1308.24,2999.76],[1296.49,3011.51],[1284.73,3023.27],[1279.16,3029.97],[1275.18,3037.32],[1272.8,3045.33],[1272.0,3054.0],[1272.0,3069.6],[1272.0,3085.2],[1272.0,3100.8],[1272.0,3116.4],[756,2604],[744.36,2592.36],[732.73,2580.73],[726.03,2575.16],[718.68,2571.18],[710.67,2568.8],[702.0,2568.0],[686.67,2568.0],[671.33,2568.0],[656.0,2568.0],[640.67,2568.0],[625.33,2568.0],[610.0,2568.0],[594.67,2568.0],[579.33,2568.0],[564.0,2568.0],[745.59,2614.41],[735.18,2624.82],[724.77,2635.23],[714.36,2645.64],[703.95,2656.05],[693.55,2666.45],[683.14,2676.86],[672.73,2687.27],[667.16,2693.97],[663.18,2701.32],[660.8,2709.33],[660.0,2718.0],[660.0,2732.14],[660.0,2746.29],[660.0,2760.43],[660.0,2774.57],[660.0,2788.71],[660.0,2802.86],[660.0,2817.0],[660.0,2831.14],[660.0,2845.29],[660.0,2859.43],[660.0,2873.57],[660.0,2887.71],[660.0,2901.86],[660.0,2916.0],[740.74,2605.74],[725.47,2607.49],[710.21,2609.23],[694.94,2610.98],[679.68,2612.72],[664.41,2614.47],[649.15,2616.21],[633.88,2617.96],[625.26,2618.05],[617.29,2616.31],[609.96,2612.71],[603.27,2607.27],[590.18,2594.18],[577.09,2581.09],[770.73,2604.0],[785.45,2604.0],[800.18,2604.0],[814.91,2604.0],[829.64,2604.0],[844.36,2604.0],[859.09,2604.0],[873.82,2604.0],[888.55,2604.0],[903.27,2604.0],[918.0,2604.0],[926.67,2604.8],[934.68,2607.18],[942.03,2611.16],[948.73,2616.73],[958.91,2626.91],[969.09,2637.09],[979.27,2647.27],[989.45,2657.45],[999.64,2667.64],[1009.82,2677.82],[1020.0,2688.0],[1464.0,3888.0],[1464.0,3931.76],[1464.0,3951.51],[1464.38,3955.6],[1465.5,3959.38],[1467.38,3962.84],[1470.0,3966.0],[1476.0,3972.0],[1474.52,3922.52],[1485.05,3933.05],[1495.57,3943.57],[1506.09,3954.09],[1516.62,3964.62],[1527.14,3975.14],[1537.66,3985.66],[1548.19,3996.19],[1558.71,4006.71],[1569.23,4017.23],[1579.76,4027.76],[1581.99,4029.61],[1584.44,4030.94],[1587.11,4031.73],[1590.0,4032.0],[1596.0,4032.0],[1458.0,3906.0],[1455.38,3902.84],[1453.5,3899.38],[1452.38,3895.6],[1452.0,3891.51],[1452.0,3876.46],[1452.0,3861.4],[1452.0,3846.34],[1452.0,3831.29],[1452.0,3816.23],[1452.0,3801.17],[1452.0,3786.11],[1452.0,3771.06],[1452.0,3756.0],[1560.0,3231.51],[1560.0,3247.03],[1559.25,3255.2],[1557.0,3262.76],[1553.25,3269.69],[1548.0,3276.0],[1536.0,3288.0],[1776,1788],[1794.0,1788.0],[1812.0,1788.0],[1830.0,1788.0],[1838.67,1787.2],[1846.68,1784.82],[1854.03,1780.84],[1860.73,1775.27],[1872.55,1763.45],[1884.36,1751.64],[1896.18,1739.82],[1908.0,1728.0],[1765.59,1798.41],[1755.18,1808.82],[1744.77,1819.23],[1734.36,1829.64],[1723.95,1840.05],[1713.55,1850.45],[1703.14,1860.86],[1692.73,1871.27],[1686.03,1876.84],[1678.68,1880.82],[1670.67,1883.2],[1662.0,1884.0],[1647.0,1884.0],[1632.0,1884.0],[1788.0,1776.0],[1793.25,1769.69],[1797.0,1762.76],[1799.25,1755.2],[1800.0,1747.03],[1800.0,1731.51],[1800.0,1716.0],[1687.16,1877.97],[1683.18,1885.32],[1680.8,1893.33],[1680.0,1902.0],[1680.0,1920.0],[2136,1908],[2124.0,1920.0],[2112.0,1932.0],[2100.0,1944.0],[1116,2772],[1104.0,2772.0],[1131.0,2772.0],[1146.0,2772.0],[1161.0,2772.0],[1176.0,2772.0],[1872,2808],[1882.5,2818.5],[1893.0,2829.0],[1903.5,2839.5],[1914.0,2850.0],[1924.5,2860.5],[1935.0,2871.0],[1945.5,2881.5],[1956.0,2892.0],[1966.5,2902.5],[1977.0,2913.0],[1987.5,2923.5],[1998.0,2934.0],[2008.5,2944.5],[2019.0,2955.0],[2029.5,2965.5],[2040.0,2976.0],[1856.0,2808.0],[1840.0,2808.0],[1824.0,2808.0],[2208,2028],[2192.12,2028.0],[2176.24,2028.0],[2160.36,2028.0],[2144.49,2028.0],[2140.4,2027.62],[2136.62,2026.5],[2133.16,2024.62],[2130.0,2022.0],[2124.0,2016.0],[912,1848],[922.23,1837.77],[932.47,1827.53],[942.7,1817.3],[952.93,1807.07],[963.17,1796.83],[973.4,1786.6],[983.64,1776.36],[993.87,1766.13],[1004.1,1755.9],[1014.34,1745.66],[1024.57,1735.43],[1034.8,1725.2],[1045.04,1714.96],[1055.27,1704.73],[1061.97,1699.16],[1069.32,1695.18],[1077.33,1692.8],[1086.0,1692.0],[1102.5,1692.0],[1119.0,1692.0],[1135.5,1692.0],[1152.0,1692.0],[912.0,1863.33],[912.0,1878.67],[912.0,1894.0],[912.0,1909.33],[912.0,1924.67],[912.0,1940.0],[912.0,1955.33],[912.0,1970.67],[912.0,1986.0],[912.8,1994.67],[915.18,2002.68],[919.16,2010.03],[924.73,2016.73],[936.49,2028.49],[948.24,2040.24],[960.0,2052.0],[901.82,1837.82],[891.64,1827.64],[881.45,1817.45],[871.27,1807.27],[861.09,1797.09],[850.91,1786.91],[840.73,1776.73],[835.16,1770.03],[831.18,1762.68],[828.8,1754.67],[828.0,1746.0],[828.0,1730.67],[828.0,1715.33],[828.0,1700.0],[828.0,1684.67],[828.0,1669.33],[828.0,1654.0],[828.0,1638.67],[828.0,1623.33],[828.0,1608.0],[906.0,1848.0],[903.11,1848.27],[900.44,1849.06],[897.99,1850.39],[895.76,1852.24],[885.77,1862.23],[875.78,1872.22],[865.79,1882.21],[855.81,1892.19],[845.82,1902.18],[835.83,1912.17],[825.84,1922.16],[815.85,1932.15],[805.87,1942.13],[795.88,1952.12],[785.89,1962.11],[775.9,1972.1],[765.92,1982.08],[755.93,1992.07],[745.94,2002.06],[735.95,2012.05],[725.96,2022.04],[715.98,2032.02],[705.99,2042.01],[696.0,2052.0],[1631.76,3539.76],[1643.51,3551.51],[1655.27,3563.27],[1660.84,3569.97],[1664.82,3577.32],[1667.2,3585.33],[1608.36,3516.36],[1596.73,3504.73],[1590.03,3499.16],[1582.68,3495.18],[1574.67,3492.8],[1566.0,3492.0],[1552.0,3492.0],[1538.0,3492.0],[1524.0,3492.0],[1510.0,3492.0],[1496.0,3492.0],[1482.0,3492.0],[1468.0,3492.0],[1454.0,3492.0],[1440.0,3492.0],[1092.0,2772.0],[1086.22,2772.53],[1080.88,2774.12],[1075.98,2776.77],[1071.51,2780.49],[1058.34,2793.66],[1045.17,2806.83],[1032.0,2820.0],[1093.5,2761.5],[1083.0,2751.0],[1072.5,2740.5],[1062.0,2730.0],[1051.5,2719.5],[1041.0,2709.0],[1030.5,2698.5],[876,3144],[886.23,3133.77],[896.47,3123.53],[906.7,3113.3],[916.93,3103.07],[927.17,3092.83],[937.4,3082.6],[947.64,3072.36],[957.87,3062.13],[968.1,3051.9],[978.34,3041.66],[988.57,3031.43],[998.8,3021.2],[1009.04,3010.96],[1019.27,3000.73],[1024.84,2994.03],[1028.82,2986.68],[1031.2,2978.67],[1032.0,2970.0],[1032.0,2955.0],[1032.0,2940.0],[1032.0,2925.0],[1032.0,2910.0],[1032.0,2895.0],[1032.0,2880.0],[1032.0,2865.0],[1032.0,2850.0],[1032.0,2835.0],[862.0,3144.0],[848.0,3144.0],[834.0,3144.0],[825.33,3143.2],[817.32,3140.82],[809.97,3136.84],[803.27,3131.27],[793.09,3121.09],[782.91,3110.91],[772.73,3100.73],[762.55,3090.55],[752.36,3080.36],[742.18,3070.18],[732.0,3060.0],[2028,2556],[2022.0,2556.0],[2019.11,2555.73],[2016.44,2554.94],[2013.99,2553.61],[2011.76,2551.76],[2000.46,2540.46],[1989.17,2529.17],[1977.88,2517.88],[1966.59,2506.59],[1955.29,2495.29],[1944.0,2484.0],[2038.73,2566.73],[2049.45,2577.45],[2060.18,2588.18],[2070.91,2598.91],[2081.64,2609.64],[2092.36,2620.36],[2103.09,2631.09],[2113.82,2641.82],[2124.54,2652.54],[2135.27,2663.27],[2140.84,2669.97],[2144.82,2677.32],[2147.2,2685.33],[2148.0,2694.0],[2148.0,2709.0],[2148.0,2724.0],[2013.71,2556.0],[1999.43,2556.0],[1985.14,2556.0],[1970.86,2556.0],[1956.57,2556.0],[1942.29,2556.0],[1928.0,2556.0],[1913.71,2556.0],[1899.43,2556.0],[1885.14,2556.0],[1870.86,2556.0],[1856.57,2556.0],[1842.29,2556.0],[1828.0,2556.0],[1813.71,2556.0],[1799.43,2556.0],[1785.14,2556.0],[1770.86,2556.0],[1756.57,2556.0],[1742.29,2556.0],[1728.0,2556.0],[1668.0,3737.17],[1668.0,3754.34],[1668.0,3771.51],[1667.62,3775.6],[1666.5,3779.38],[1664.62,3782.84],[1662.0,3786.0],[1656.0,3792.0],[1662.0,3726.0],[1659.38,3729.16],[1657.5,3732.62],[1656.38,3736.4],[1656.0,3740.49],[1656.0,3755.92],[1656.0,3771.36],[1656.0,3786.8],[1656.0,3802.24],[1656.0,3817.68],[1656.0,3833.12],[1656.0,3848.56],[1031.64,2676.36],[1043.27,2664.73],[1049.97,2659.16],[1057.32,2655.18],[1065.33,2652.8],[1074.0,2652.0],[1088.0,2652.0],[1102.0,2652.0],[1116.0,2652.0],[1020.0,2703.93],[1020.0,2719.86],[1020.0,2735.79],[1020.0,2751.72],[1020.0,2767.65],[1020.0,2783.58],[1020.0,2799.51],[1020.38,2803.6],[1021.5,2807.38],[1023.38,2810.84],[1026.0,2814.0],[1500,2760],[1482.0,2760.0],[1464.0,2760.0],[1446.0,2760.0],[1437.33,2759.2],[1429.32,2756.82],[1421.97,2752.84],[1415.27,2747.27],[1403.51,2735.51],[1391.76,2723.76],[1380.0,2712.0],[1511.15,2771.15],[1522.3,2782.3],[1533.45,2793.45],[1544.61,2804.61],[1555.76,2815.76],[1557.99,2817.61],[1560.44,2818.94],[1563.11,2819.73],[1566.0,2820.0],[1572.0,2820.0],[1713.69,2556.0],[1699.38,2556.0],[1685.08,2556.0],[1670.77,2556.0],[1656.46,2556.0],[1642.15,2556.0],[1627.85,2556.0],[1613.54,2556.0],[1599.23,2556.0],[1584.92,2556.0],[1570.62,2556.0],[1556.31,2556.0],[1542.0,2556.0],[1533.33,2555.2],[1525.32,2552.82],[1517.97,2548.84],[1511.27,2543.27],[1499.51,2531.51],[1487.76,2519.76],[1476.0,2508.0],[1665.66,1920.0],[1651.31,1920.0],[1636.97,1920.0],[1628.8,1920.75],[1621.24,1923.0],[1614.31,1926.75],[1608.0,1932.0],[1596.0,1944.0],[1694.29,1920.0],[1708.59,1920.0],[1722.88,1920.0],[1737.17,1920.0],[1751.46,1920.0],[1765.76,1920.0],[1780.05,1920.0],[1794.34,1920.0],[1808.64,1920.0],[1822.93,1920.0],[1837.22,1920.0],[1851.51,1920.0],[1855.6,1919.62],[1859.38,1918.5],[1862.84,1916.62],[1866.0,1914.0],[1872.0,1908.0],[1668.36,1931.64],[1656.73,1943.27],[1651.16,1949.97],[1647.18,1957.32],[1644.8,1965.33],[1644.0,1974.0],[1644.0,1992.0],[1674.0,1920.0],[1671.11,1919.73],[1668.44,1918.94],[1665.99,1917.61],[1663.76,1915.76],[1653.17,1905.17],[1642.59,1894.59],[1620,3336],[1609.41,3325.41],[1598.83,3314.83],[1588.24,3304.24],[1586.01,3302.39],[1583.56,3301.06],[1580.89,3300.27],[1578.0,3300.0],[1572.0,3300.0],[1626.0,3336.0],[1628.89,3336.27],[1631.56,3337.06],[1634.01,3338.39],[1636.24,3340.24],[1626.0,3330.0],[1628.62,3326.84],[1630.5,3323.38],[1631.62,3319.6],[1632.0,3315.51],[1632.0,3300.08],[1632.0,3284.64],[1632.0,3269.2],[1632.0,3253.76],[1632.0,3238.32],[1632.0,3222.88],[1632.0,3207.44],[984.36,2159.64],[972.73,2171.27],[967.16,2177.97],[963.18,2185.32],[960.8,2193.33],[960.0,2202.0],[960.0,2217.6],[960.0,2233.2],[960.0,2248.8],[960.0,2264.4],[960.0,2280.0],[996.0,2134.0],[996.0,2120.0],[996.0,2106.0],[995.2,2097.33],[992.82,2089.32],[988.84,2081.97],[983.27,2075.27],[971.64,2063.64],[981.0,2148.0],[966.0,2148.0],[951.0,2148.0],[936.0,2148.0],[921.0,2148.0],[906.0,2148.0],[891.0,2148.0],[876.0,2148.0],[1644.0,3962.4],[1644.0,3976.8],[1644.0,3991.2],[1644.0,4005.6],[1644.0,4020.0],[1646.8,3963.37],[1649.59,3978.75],[1652.39,3994.12],[1655.18,4009.5],[1657.98,4024.87],[1658.36,4029.24],[1657.49,4031.22],[1655.37,4030.8],[1652.0,4028.0],[1632.24,3959.76],[1620.49,3971.51],[1608.73,3983.27],[1603.16,3989.97],[1599.18,3997.32],[1596.8,4005.33],[1596.0,4014.0],[816.18,1596.18],[804.36,1584.36],[792.55,1572.55],[780.73,1560.73],[774.03,1555.16],[766.68,1551.18],[758.67,1548.8],[750.0,1548.0],[736.0,1548.0],[722.0,1548.0],[708.0,1548.0],[838.18,1618.18],[848.36,1628.36],[858.55,1638.55],[868.73,1648.73],[878.91,1658.91],[889.09,1669.09],[899.27,1679.27],[905.97,1684.84],[913.32,1688.82],[921.33,1691.2],[930.0,1692.0],[945.0,1692.0],[960.0,1692.0],[975.0,1692.0],[990.0,1692.0],[1005.0,1692.0],[1020.0,1692.0],[732,2136],[726.0,2130.0],[722.84,2127.38],[719.38,2125.5],[715.6,2124.38],[711.51,2124.0],[691.76,2124.0],[672.0,2124.0],[747.44,2136.0],[762.88,2136.0],[778.32,2136.0],[793.76,2136.0],[809.2,2136.0],[824.64,2136.0],[840.08,2136.0],[855.51,2136.0],[859.6,2136.38],[863.38,2137.5],[866.84,2139.38],[870.0,2142.0],[1656,2832],[1668.0,2820.0],[1674.31,2814.75],[1681.24,2811.0],[1688.8,2808.75],[1696.97,2808.0],[1711.08,2808.0],[1725.2,2808.0],[1739.31,2808.0],[1753.43,2808.0],[1767.54,2808.0],[1781.66,2808.0],[1795.77,2808.0],[1809.89,2808.0],[1644.0,2844.0],[1632.0,2856.0],[1620.0,2868.0],[1608.0,2880.0],[1649.26,2845.47],[1642.53,2858.94],[1635.79,2872.41],[1629.06,2885.88],[1626.35,2889.81],[1623.26,2891.47],[1619.82,2890.87],[1616.0,2888.0],[1206.0,2958.0],[1208.62,2954.84],[1210.5,2951.38],[1211.62,2947.6],[1212.0,2943.51],[1212.0,2916.0],[1215.51,2979.51],[1219.23,2983.98],[1221.88,2988.88],[1223.47,2994.22],[1224.0,3000.0],[1224.0,3012.0],[1212.0,2952.0],[1217.25,2945.69],[1221.0,2938.76],[1223.25,2931.2],[1224.0,2923.03],[1224.0,2907.86],[1224.0,2892.69],[1224.0,2877.51],[1224.0,2862.34],[1224.0,2847.17],[1416.0,3468.0],[1428.0,3480.0],[1404.0,3440.07],[1404.0,3424.14],[1404.0,3408.21],[1404.0,3392.28],[1404.0,3376.35],[1404.0,3360.42],[1404.0,3344.49],[1404.38,3340.4],[1405.5,3336.62],[1407.38,3333.16],[1410.0,3330.0],[1446.0,3498.0],[1448.62,3501.16],[1450.5,3504.62],[1451.62,3508.4],[1452.0,3512.49],[1452.0,3529.66],[1452.0,3546.83],[1451.85,3480.15],[1463.71,3468.29],[1475.56,3456.44],[1487.42,3444.58],[1499.27,3432.73],[1505.97,3427.16],[1513.32,3423.18],[1521.33,3420.8],[1530.0,3420.0],[1545.6,3420.0],[1561.2,3420.0],[1576.8,3420.0],[1592.4,3420.0],[1440.0,3477.89],[1440.0,3463.77],[1440.0,3449.66],[1440.0,3435.54],[1440.0,3421.43],[1440.0,3407.31],[1440.0,3393.2],[1440.0,3379.08],[1440.0,3364.97],[1439.25,3356.8],[1437.0,3349.24],[1433.25,3342.31],[1428.0,3336.0],[1446.0,3888.0],[1428.0,3888.0],[1464.0,3874.0],[1464.0,3860.0],[1464.0,3846.0],[1463.2,3837.33],[1460.82,3829.32],[1456.84,3821.97],[1451.27,3815.27],[1439.51,3803.51],[1427.76,3791.76],[1416.0,3780.0],[1464.36,2496.36],[1452.73,2484.73],[1447.16,2478.03],[1443.18,2470.68],[1440.8,2462.67],[1440.0,2454.0],[1440.0,2439.38],[1440.0,2424.75],[1440.0,2410.12],[1440.0,2395.5],[1440.0,2380.88],[1440.0,2366.25],[1440.0,2351.62],[1440.0,2337.0],[1440.0,2322.38],[1440.0,2307.75],[1440.0,2293.12],[1440.0,2278.5],[1440.0,2263.88],[1440.0,2249.25],[1440.0,2234.62],[1465.59,2518.41],[1455.18,2528.82],[1444.77,2539.23],[1434.36,2549.64],[1423.95,2560.05],[1413.55,2570.45],[1403.14,2580.86],[1392.73,2591.27],[1387.16,2597.97],[1383.18,2605.32],[1380.8,2613.33],[1380.0,2622.0],[1380.0,2637.0],[1380.0,2652.0],[1380.0,2667.0],[1380.0,2682.0],[1380.0,2697.0],[1487.82,3983.82],[1499.64,3995.64],[1511.45,4007.45],[1523.27,4019.27],[1529.97,4024.84],[1537.32,4028.82],[1545.33,4031.2],[1554.0,4032.0],[1568.0,4032.0],[1582.0,4032.0],[1490.6,3975.07],[1505.19,3978.15],[1519.79,3981.22],[1534.39,3984.29],[1542.89,3986.71],[1550.78,3990.25],[1558.06,3994.93],[1564.73,4000.73],[1575.15,4011.15],[1585.58,4021.58],[684,2184],[684.0,2164.24],[684.0,2144.49],[683.62,2140.4],[682.5,2136.62],[680.62,2133.16],[678.0,2130.0],[684.0,2198.0],[684.0,2212.0],[684.0,2226.0],[684.0,2240.0],[684.0,2254.0],[684.0,2268.0],[684.0,2282.0],[684.0,2296.0],[684.0,2310.0],[683.2,2318.67],[680.82,2326.68],[676.84,2334.03],[671.27,2340.73],[659.42,2352.58],[647.56,2364.44],[635.71,2376.29],[623.85,2388.15],[612.0,2400.0],[668.0,2184.0],[652.0,2184.0],[636.0,2184.0],[620.0,2184.0],[604.0,2184.0],[588.0,2184.0],[2208,2916],[2208.0,2900.4],[2208.0,2884.8],[2208.0,2869.2],[2208.0,2853.6],[2208.0,2838.0],[2207.2,2829.33],[2204.82,2821.32],[2200.84,2813.97],[2195.27,2807.27],[2183.51,2795.51],[2171.76,2783.76],[2160.0,2772.0],[2208.0,2922.0],[2207.73,2924.89],[2206.94,2927.56],[2205.61,2930.01],[2203.76,2932.24],[2193.79,2942.21],[2183.82,2952.18],[2173.85,2962.15],[2163.88,2972.12],[2153.91,2982.09],[2143.94,2992.06],[2133.97,3002.03],[2124.0,3012.0],[1458.0,3750.0],[1460.62,3746.84],[1462.5,3743.38],[1463.62,3739.6],[1464.0,3735.51],[1464.0,3720.08],[1464.0,3704.64],[1464.0,3689.2],[1464.0,3673.76],[1464.0,3658.32],[1464.0,3642.88],[1464.0,3627.44],[1432.24,3775.76],[1430.01,3777.61],[1427.56,3778.94],[1424.89,3779.73],[1422.0,3780.0],[670.41,2905.59],[680.82,2895.18],[691.23,2884.77],[701.64,2874.36],[712.05,2863.95],[722.45,2853.55],[732.86,2843.14],[743.27,2832.73],[749.97,2827.16],[757.32,2823.18],[765.33,2820.8],[774.0,2820.0],[788.33,2820.0],[802.67,2820.0],[817.0,2820.0],[831.33,2820.0],[845.67,2820.0],[860.0,2820.0],[874.33,2820.0],[888.67,2820.0],[903.0,2820.0],[917.33,2820.0],[931.67,2820.0],[946.0,2820.0],[960.33,2820.0],[974.67,2820.0],[989.0,2820.0],[1003.33,2820.0],[1017.67,2820.0],[660.0,2934.0],[660.0,2952.0],[660.0,2970.0],[660.8,2978.67],[663.18,2986.68],[667.16,2994.03],[672.73,3000.73],[684.58,3012.58],[696.44,3024.44],[708.29,3036.29],[720.15,3048.15],[673.17,2929.17],[686.34,2942.34],[699.51,2955.51],[703.98,2959.23],[708.88,2961.88],[714.22,2963.47],[720.0,2964.0],[732.0,2964.0],[1230.0,2826.0],[1232.62,2822.84],[1234.5,2819.38],[1235.62,2815.6],[1236.0,2811.51],[1236.0,2794.34],[1236.0,2777.17],[1236.0,2760.0],[1224.0,2847.88],[1224.0,2863.76],[1224.0,2879.64],[1224.0,2895.51],[1223.62,2899.6],[1222.5,2903.38],[1220.62,2906.84],[1218.0,2910.0],[1380,1488],[1362.83,1488.0],[1345.66,1488.0],[1328.49,1488.0],[1324.4,1488.38],[1320.62,1489.5],[1317.16,1491.38],[1314.0,1494.0],[1308.0,1500.0],[1395.0,1488.0],[1410.0,1488.0],[1418.67,1487.2],[1426.68,1484.82],[1434.03,1480.84],[1440.73,1475.27],[1452.55,1463.45],[1464.36,1451.64],[1476.18,1439.82],[564.0,2553.66],[564.0,2539.31],[564.0,2524.97],[564.75,2516.8],[567.0,2509.24],[570.75,2502.31],[576.0,2496.0],[588.0,2484.0],[552.24,2579.76],[540.49,2591.51],[528.73,2603.27],[522.03,2608.84],[514.68,2612.82],[506.67,2615.2],[498.0,2616.0],[483.75,2616.0],[469.5,2616.0],[455.25,2616.0],[441.0,2616.0],[426.75,2616.0],[412.5,2616.0],[398.25,2616.0],[384.0,2616.0],[1992,1704],[1980.0,1716.0],[1973.69,1721.25],[1966.76,1725.0],[1959.2,1727.25],[1951.03,1728.0],[1936.69,1728.0],[1922.34,1728.0],[1620.0,3180.0],[1614.75,3173.69],[1611.0,3166.76],[1608.75,3159.2],[1608.0,3151.03],[1608.0,3135.86],[1608.0,3120.69],[1608.0,3105.51],[1608.0,3090.34],[1608.0,3075.17],[1632.0,3208.0],[1632.0,3224.0],[1628.0,3188.0],[1626.2,3185.9],[1624.82,3183.6],[1623.84,3181.09],[1623.28,3178.39],[1621.37,3163.59],[1619.46,3148.79],[1617.55,3133.99],[1615.64,3119.19],[1613.73,3104.4],[1611.82,3089.6],[1609.91,3074.8],[1608.0,3168.0],[588.0,2469.66],[588.0,2455.31],[588.0,2440.97],[588.75,2432.8],[591.0,2425.24],[594.75,2418.31],[600.0,2412.0],[1452.24,3623.76],[1440.49,3635.51],[1428.73,3647.27],[1423.16,3653.97],[1419.18,3661.32],[1416.8,3669.33],[1416.0,3678.0],[1416.0,3692.57],[1416.0,3707.14],[1416.0,3721.71],[1416.0,3736.29],[1416.0,3750.86],[1416.0,3765.43],[1422.0,3882.0],[1419.38,3878.84],[1417.5,3875.38],[1416.38,3871.6],[1416.0,3867.51],[1416.0,3852.93],[1416.0,3838.34],[1416.0,3823.76],[1416.0,3809.17],[1416.0,3794.59],[1176,2016],[1164.36,2027.64],[1152.73,2039.27],[1146.03,2044.84],[1138.68,2048.82],[1130.67,2051.2],[1122.0,2052.0],[1107.27,2052.0],[1092.55,2052.0],[1077.82,2052.0],[1063.09,2052.0],[1048.36,2052.0],[1033.64,2052.0],[1018.91,2052.0],[1004.18,2052.0],[989.45,2052.0],[974.73,2052.0],[1194.0,2016.0],[1212.0,2016.0],[1230.0,2016.0],[1238.67,2016.8],[1246.68,2019.18],[1254.03,2023.16],[1260.73,2028.73],[1272.49,2040.49],[1284.24,2052.24],[1296.0,2064.0],[1884,2112],[1884.0,2097.88],[1884.0,2083.77],[1884.0,2069.65],[1884.0,2055.53],[1884.0,2041.42],[1884.0,2027.3],[1884.0,2013.18],[1884.0,1999.07],[1884.0,1984.95],[1884.0,1970.83],[1884.0,1956.72],[1884.0,1942.6],[1884.0,1928.49],[1883.62,1924.4],[1882.5,1920.62],[1880.62,1917.16],[1878.0,1914.0],[1884.0,2130.0],[1884.8,2138.67],[1887.18,2146.68],[1891.16,2154.03],[1896.73,2160.73],[1908.36,2172.36],[1920.0,2184.0],[2154.0,2730.0],[2156.62,2733.16],[2158.5,2736.62],[2159.62,2740.4],[2160.0,2744.49],[1848,2220],[1836.0,2232.0],[1866.0,2220.0],[1874.67,2219.2],[1882.68,2216.82],[1890.03,2212.84],[1896.73,2207.27],[1908.36,2195.64],[970.23,2290.23],[980.47,2300.47],[990.7,2310.7],[1000.93,2320.93],[1011.17,2331.17],[1021.4,2341.4],[1031.64,2351.64],[1041.87,2361.87],[1052.1,2372.1],[1062.34,2382.34],[1072.57,2392.57],[1082.8,2402.8],[1093.04,2413.04],[1103.27,2423.27],[1108.84,2429.97],[1112.82,2437.32],[1115.2,2445.33],[1116.0,2454.0],[1116.0,2468.14],[1116.0,2482.29],[1116.0,2496.43],[1116.0,2510.57],[1116.0,2524.71],[1116.0,2538.86],[1116.0,2553.0],[1116.0,2567.14],[1116.0,2581.29],[1116.0,2595.43],[1116.0,2609.57],[1116.0,2623.71],[1116.0,2637.86],[1272.0,3114.0],[1272.0,3096.0],[1272.0,3078.0],[1271.2,3069.33],[1268.82,3061.32],[1264.84,3053.97],[1259.27,3047.27],[1247.51,3035.51],[1235.76,3023.76],[1287.0,3132.0],[1302.0,3132.0],[1317.0,3132.0],[1332.0,3132.0],[1347.0,3132.0],[1362.0,3132.0],[1370.67,3132.8],[1378.68,3135.18],[1386.03,3139.16],[1392.73,3144.73],[1402.96,3154.96],[1413.2,3165.2],[1423.43,3175.43],[1433.66,3185.66],[1443.9,3195.9],[1454.13,3206.13],[1464.36,3216.36],[1474.6,3226.6],[1484.83,3236.83],[1495.07,3247.07],[1505.3,3257.3],[1515.53,3267.53],[1525.77,3277.77],[1282.1,3142.1],[1292.2,3152.2],[1302.29,3162.29],[1312.39,3172.39],[1322.49,3182.49],[1332.59,3192.59],[1342.68,3202.68],[1352.78,3212.78],[1362.88,3222.88],[1372.98,3232.98],[1383.08,3243.08],[1393.17,3253.17],[1403.27,3263.27],[1408.84,3269.97],[1412.82,3277.32],[1415.2,3285.33],[1416.0,3294.0],[1416.0,3309.0],[1311.6,2064.0],[1327.2,2064.0],[1342.8,2064.0],[1358.4,2064.0],[1374.0,2064.0],[1382.67,2063.2],[1390.68,2060.82],[1398.03,2056.84],[1404.73,2051.27],[1416.58,2039.42],[1428.44,2027.56],[1440.29,2015.71],[1452.15,2003.85],[1464.0,1992.0],[1656.0,3837.0],[1656.0,3822.0],[1656.0,3807.0],[1662.07,3835.32],[1668.13,3818.63],[1669.33,3813.48],[1669.03,3808.66],[1667.26,3804.16],[1664.0,3800.0],[576,1488],[560.49,1488.0],[544.97,1488.0],[536.8,1488.75],[529.24,1491.0],[522.31,1494.75],[516.0,1500.0],[504.0,1512.0],[594.0,1488.0],[612.0,1488.0],[630.0,1488.0],[638.67,1488.8],[646.68,1491.18],[654.03,1495.16],[660.73,1500.73],[672.55,1512.55],[684.36,1524.36],[696.18,1536.18],[558.0,2118.0],[561.16,2120.62],[564.62,2122.5],[568.4,2123.62],[572.49,2124.0],[586.7,2124.0],[600.92,2124.0],[615.13,2124.0],[629.35,2124.0],[643.57,2124.0],[657.78,2124.0],[1548,2940],[1558.0,2930.0],[1568.0,2920.0],[1578.0,2910.0],[1588.0,2900.0],[1598.0,2890.0],[1548.0,2957.17],[1548.0,2974.34],[1548.0,2991.51],[1547.62,2995.6],[1546.5,2999.38],[1544.62,3002.84],[1542.0,3006.0],[1536.0,3012.0],[1542.0,2946.0],[1538.84,2948.62],[1535.38,2950.5],[1531.6,2951.62],[1527.51,2952.0],[1548.0,2924.19],[1548.0,2908.39],[1548.0,2892.58],[1548.0,2876.78],[1548.0,2860.97],[1548.75,2852.8],[1551.0,2845.24],[1554.75,2838.31],[1560.0,2832.0],[1908.0,1742.0],[1908.0,1756.0],[1908.0,1770.0],[1908.0,1784.0],[1908.0,1798.0],[1908.0,1812.0],[1908.0,1826.0],[1908.0,1840.0],[1908.0,1854.0],[1907.2,1862.67],[1904.82,1870.68],[1900.84,1878.03],[1895.27,1884.73],[1883.64,1896.36],[1908.0,1713.0],[1908.0,1698.0],[1907.2,1689.33],[1904.82,1681.32],[1900.84,1673.97],[1895.27,1667.27],[1885.09,1657.09],[1874.91,1646.91],[1864.73,1636.73],[1854.55,1626.55],[1844.36,1616.36],[1834.18,1606.18],[1824.0,1596.0],[1908.0,1734.0],[1908.27,1736.89],[1909.06,1739.56],[1910.39,1742.01],[1912.24,1744.24],[1922.62,1754.62],[1932.99,1764.99],[1943.37,1775.37],[1953.75,1785.75],[1964.12,1796.12],[1974.5,1806.5],[1984.87,1816.87],[1995.25,1827.25],[2005.62,1837.62],[2016.0,1848.0],[1224,1404],[1230.0,1410.0],[1232.62,1413.16],[1234.5,1416.62],[1235.62,1420.4],[1236.0,1424.49],[1236.0,1439.92],[1236.0,1455.36],[1236.0,1470.8],[1236.0,1486.24],[1236.0,1501.68],[1236.0,1517.12],[1236.0,1532.56],[1236.0,1548.0],[1968,1920],[1962.0,1914.0],[1958.84,1911.38],[1955.38,1909.5],[1951.6,1908.38],[1947.51,1908.0],[1932.41,1908.0],[1917.31,1908.0],[1902.21,1908.0],[1887.1,1908.0],[1980.0,1932.0],[1986.31,1937.25],[1993.24,1941.0],[2000.8,1943.25],[2008.97,1944.0],[2024.14,1944.0],[2039.31,1944.0],[2054.49,1944.0],[2069.66,1944.0],[2084.83,1944.0],[2100.0,1938.0],[2099.73,1935.11],[2098.94,1932.44],[2097.61,1929.99],[2095.76,1927.76],[2085.79,1917.79],[2075.82,1907.82],[2065.85,1897.85],[2055.88,1887.88],[2045.91,1877.91],[2035.94,1867.94],[2025.97,1857.97],[2107.76,1951.76],[2109.61,1953.99],[2110.94,1956.44],[2111.73,1959.11],[2112.0,1962.0],[2112.0,1968.0],[1548.0,3012.0],[1553.78,3012.53],[1559.12,3014.12],[1564.02,3016.77],[1568.49,3020.49],[1581.66,3033.66],[1594.83,3046.83],[1522.24,2998.24],[1508.49,2984.49],[1504.77,2980.02],[1502.12,2975.12],[1500.53,2969.78],[1500.0,2964.0],[1795.24,1152.0],[1778.49,1152.0],[1761.73,1152.0],[1744.97,1152.0],[1736.8,1152.75],[1729.24,1155.0],[1722.31,1158.75],[1716.0,1164.0],[1704.0,1176.0],[1818.0,1158.0],[1821.16,1160.62],[1824.62,1162.5],[1828.4,1163.62],[1832.49,1164.0],[1846.7,1164.0],[1860.92,1164.0],[1875.13,1164.0],[1889.35,1164.0],[1903.57,1164.0],[1917.78,1164.0],[1932.0,1164.0],[1836.0,2217.0],[1836.0,2202.0],[1835.2,2193.33],[1832.82,2185.32],[1828.84,2177.97],[1823.27,2171.27],[1813.31,2161.31],[1803.35,2151.35],[1793.39,2141.39],[1783.43,2131.43],[1773.47,2121.47],[1763.51,2111.51],[1753.56,2101.56],[1743.6,2091.6],[1733.64,2081.64],[1723.68,2071.68],[1713.72,2061.72],[1703.76,2051.76],[1693.8,2041.8],[1683.84,2031.84],[1673.88,2021.88],[1663.92,2011.92],[1653.96,2001.96],[1836.0,2250.34],[1836.0,2268.69],[1836.0,2287.03],[1836.75,2295.2],[1839.0,2302.76],[1842.75,2309.69],[1848.0,2316.0],[1860.0,2328.0],[1821.56,2232.0],[1807.11,2232.0],[1792.67,2232.0],[1778.23,2232.0],[1763.79,2232.0],[1749.34,2232.0],[1734.9,2232.0],[1720.46,2232.0],[1706.01,2232.0],[1691.57,2232.0],[1677.13,2232.0],[1662.69,2232.0],[1648.24,2232.0],[1633.8,2232.0],[1619.36,2232.0],[1604.91,2232.0],[1590.47,2232.0],[1576.03,2232.0],[1561.59,2232.0],[1547.14,2232.0],[1532.7,2232.0],[1518.26,2232.0],[1503.81,2232.0],[1489.37,2232.0],[1474.93,2232.0],[1460.49,2232.0],[1456.4,2231.62],[1452.62,2230.5],[1449.16,2228.62],[1446.0,2226.0],[1296.0,1500.0],[1290.22,1500.53],[1284.88,1502.12],[1279.98,1504.77],[1275.51,1508.49],[1262.34,1521.66],[1249.17,1534.83],[1474.59,1981.41],[1485.17,1970.83],[1495.76,1960.24],[1506.34,1949.66],[1516.93,1939.07],[1527.51,1928.49],[1538.1,1917.9],[1548.69,1907.31],[1559.27,1896.73],[1565.97,1891.16],[1573.32,1887.18],[1581.33,1884.8],[1590.0,1884.0],[1604.0,1884.0],[1618.0,1884.0],[1464.0,2006.39],[1464.0,2020.77],[1464.0,2035.16],[1464.0,2049.55],[1464.0,2063.93],[1464.0,2078.32],[1464.0,2092.71],[1464.0,2107.1],[1464.0,2121.48],[1464.0,2135.87],[1464.0,2150.26],[1464.0,2164.64],[1464.0,2179.03],[1463.25,2187.2],[1461.0,2194.76],[1457.25,2201.69],[1452.0,2208.0],[1480.5,1992.0],[1497.0,1992.0],[1513.5,1992.0],[1530.0,1992.0],[1538.67,1991.2],[1546.68,1988.82],[1554.03,1984.84],[1560.73,1979.27],[1572.49,1967.51],[1584.24,1955.76],[1572.0,2832.0],[1572.53,2837.78],[1574.12,2843.12],[1576.77,2848.02],[1580.49,2852.49],[1594.24,2866.24],[2055.0,2976.0],[2070.0,2976.0],[2078.67,2976.8],[2086.68,2979.18],[2094.03,2983.16],[2100.73,2988.73],[2112.36,3000.36],[1638.0,3246.0],[1640.62,3249.16],[1642.5,3252.62],[1643.62,3256.4],[1644.0,3260.49],[1644.0,3288.0],[1200.36,2904.36],[1188.73,2892.73],[1183.16,2886.03],[1179.18,2878.68],[1176.8,2870.67],[1176.0,2862.0],[1176.0,2847.0],[1176.0,2832.0],[1176.0,2817.0],[1176.0,2802.0],[1176.0,2787.0],[1021.5,2830.5],[1011.0,2841.0],[1000.5,2851.5],[990.0,2862.0],[979.5,2872.5],[969.0,2883.0],[958.5,2893.5],[948.0,2904.0],[937.5,2914.5],[927.0,2925.0],[916.5,2935.5],[906.0,2946.0],[895.5,2956.5],[885.0,2967.0],[874.5,2977.5],[864.0,2988.0],[1686.0,1302.0],[1683.38,1298.84],[1681.5,1295.38],[1680.38,1291.6],[1680.0,1287.51],[1680.0,1260.0],[1122.0,2652.0],[1124.89,2652.27],[1127.56,2653.06],[1130.01,2654.39],[1132.24,2656.24],[1142.62,2666.62],[1152.99,2676.99],[1163.37,2687.37],[1173.75,2697.75],[1184.12,2708.12],[1194.5,2718.5],[1204.87,2728.87],[1215.25,2739.25],[1225.62,2749.62],[876,2064],[870.0,2070.0],[866.84,2072.62],[863.38,2074.5],[859.6,2075.62],[855.51,2076.0],[838.34,2076.0],[821.17,2076.0],[804.0,2076.0],[891.88,2064.0],[907.76,2064.0],[923.64,2064.0],[939.51,2064.0],[943.6,2063.62],[947.38,2062.5],[950.84,2060.62],[954.0,2058.0],[1621.9,1873.9],[1611.8,1863.8],[1601.69,1853.69],[1591.59,1843.59],[1581.49,1833.49],[1571.39,1823.39],[1561.28,1813.28],[1551.18,1803.18],[1541.08,1793.08],[1530.98,1782.98],[1520.88,1772.88],[1510.77,1762.77],[1500.67,1752.67],[1490.57,1742.57],[1480.47,1732.47],[1470.36,1722.36],[1460.26,1712.26],[1450.16,1702.16],[1440.06,1692.06],[1429.95,1681.95],[1419.85,1671.85],[1409.75,1661.75],[1399.65,1651.65],[1389.55,1641.55],[1379.44,1631.44],[1369.34,1621.34],[1359.24,1611.24],[1349.14,1601.14],[1339.03,1591.03],[1328.93,1580.93],[1318.83,1570.83],[1308.73,1560.73],[1302.03,1555.16],[1294.68,1551.18],[1286.67,1548.8],[1278.0,1548.0],[1264.0,1548.0],[1250.0,1548.0],[1164.0,1680.0],[1169.25,1673.69],[1173.0,1666.76],[1175.25,1659.2],[1176.0,1651.03],[1176.0,1632.69],[1176.0,1614.34],[1176.0,1596.0],[2112,1188],[2100.36,1176.36],[2088.73,1164.73],[2082.03,1159.16],[2074.68,1155.18],[2066.67,1152.8],[2058.0,1152.0],[2044.0,1152.0],[2030.0,1152.0],[2016.0,1152.0],[1860.0,2346.0],[1860.0,2364.0],[1860.0,2382.0],[1860.8,2390.67],[1863.18,2398.68],[1867.16,2406.03],[1872.73,2412.73],[1882.91,2422.91],[1893.09,2433.09],[1903.27,2443.27],[1913.45,2453.45],[1923.64,2463.64],[1933.82,2473.82],[1633.71,2002.29],[1623.42,2012.58],[1613.13,2022.87],[1602.84,2033.16],[1592.55,2043.45],[1582.26,2053.74],[1571.97,2064.03],[1561.68,2074.32],[1551.39,2084.61],[1541.1,2094.9],[1530.81,2105.19],[1520.52,2115.48],[1510.23,2125.77],[1499.94,2136.06],[1489.65,2146.35],[1479.36,2156.64],[1469.07,2166.93],[1458.78,2177.22],[1448.49,2187.51],[1444.77,2191.98],[1442.12,2196.88],[1440.53,2202.22],[1440.0,2208.0],[1746.0,1524.0],[1748.89,1524.27],[1751.56,1525.06],[1754.01,1526.39],[1756.24,1528.24],[1767.54,1539.54],[1778.83,1550.83],[1790.12,1562.12],[1801.41,1573.41],[1812.71,1584.71],[1728.0,1512.0],[1721.69,1506.75],[1714.76,1503.0],[1707.2,1500.75],[1699.03,1500.0],[1684.64,1500.0],[1670.26,1500.0],[1655.87,1500.0],[1641.48,1500.0],[1627.1,1500.0],[1612.71,1500.0],[1598.32,1500.0],[1583.93,1500.0],[1569.55,1500.0],[1555.16,1500.0],[1540.77,1500.0],[1526.39,1500.0],[1512.0,1500.0],[1824.0,1611.81],[1824.0,1627.61],[1824.0,1643.42],[1824.0,1659.22],[1824.0,1675.03],[1823.25,1683.2],[1821.0,1690.76],[1817.25,1697.69],[1812.0,1704.0],[1500.24,1511.76],[1488.49,1523.51],[1476.73,1535.27],[1470.03,1540.84],[1462.68,1544.82],[1454.67,1547.2],[1446.0,1548.0],[1432.0,1548.0],[1418.0,1548.0],[1404.0,1548.0],[1390.0,1548.0],[1376.0,1548.0],[1362.0,1548.0],[1348.0,1548.0],[1334.0,1548.0],[1320.0,1548.0],[1306.0,1548.0],[1292.0,1548.0],[1644.0,3432.0],[1649.25,3425.69],[1653.0,3418.76],[1655.25,3411.2],[1656.0,3403.03],[1656.0,3388.69],[1656.0,3374.34],[787.5,2076.0],[771.0,2076.0],[754.5,2076.0],[738.0,2076.0],[729.33,2076.8],[721.32,2079.18],[713.97,2083.16],[707.27,2088.73],[695.51,2100.49],[683.76,2112.24],[1618.94,3409.06],[1629.88,3398.12],[1640.82,3387.18],[1651.76,3376.24],[1653.61,3374.01],[1654.94,3371.56],[1655.73,3368.89],[1656.0,3366.0],[1596.36,3408.36],[1584.73,3396.73],[1579.16,3390.03],[1575.18,3382.68],[1572.8,3374.67],[1572.0,3366.0],[1572.0,3349.5],[1572.0,3333.0],[1572.0,3316.5],[1364.4,2712.0],[1348.8,2712.0],[1333.2,2712.0],[1317.6,2712.0],[1302.0,2712.0],[1293.33,2712.8],[1285.32,2715.18],[1277.97,2719.16],[1271.27,2724.73],[1259.51,2736.49],[1247.76,2748.24],[1656.0,3342.83],[1656.0,3325.66],[1656.0,3308.49],[1655.62,3304.4],[1654.5,3300.62],[1652.62,3297.16],[1650.0,3294.0],[2010.0,1158.0],[2006.84,1160.62],[2003.38,1162.5],[1999.6,1163.62],[1995.51,1164.0],[1979.64,1164.0],[1963.76,1164.0],[1947.88,1164.0],[1692.0,1248.0],[1697.25,1241.69],[1701.0,1234.76],[1703.25,1227.2],[1704.0,1219.03],[1704.0,1204.69],[1704.0,1190.34],[1638.0,4026.0],[1634.84,4028.62],[1631.38,4030.5],[1627.6,4031.62],[1623.51,4032.0],[1195.76,2772.0],[1215.51,2772.0],[1219.6,2771.62],[1223.38,2770.5],[1226.84,2768.62],[1230.0,2766.0],[1225.06,1558.94],[1214.12,1569.88],[1203.18,1580.82],[1192.24,1591.76],[1190.01,1593.61],[1187.56,1594.94],[1184.89,1595.73],[1182.0,1596.0],[1221.73,1548.0],[1207.46,1548.0],[1193.19,1548.0],[1178.92,1548.0],[1164.65,1548.0],[1150.38,1548.0],[1136.11,1548.0],[1121.84,1548.0],[1107.57,1548.0],[1093.3,1548.0],[1079.03,1548.0],[1064.76,1548.0],[1050.49,1548.0],[1036.22,1548.0],[1021.95,1548.0],[1007.68,1548.0],[993.41,1548.0],[979.14,1548.0],[964.86,1548.0],[950.59,1548.0],[936.32,1548.0],[922.05,1548.0],[907.78,1548.0],[893.51,1548.0],[879.24,1548.0],[864.97,1548.0],[850.7,1548.0],[836.43,1548.0],[822.16,1548.0],[807.89,1548.0],[793.62,1548.0],[779.35,1548.0],[765.08,1548.0],[750.81,1548.0],[736.54,1548.0],[722.27,1548.0],[1162.0,1596.0],[1148.0,1596.0],[1134.0,1596.0],[1125.33,1596.8],[1117.32,1599.18],[1109.97,1603.16],[1103.27,1608.73],[1092.86,1619.14],[1082.45,1629.55],[1072.05,1639.95],[1061.64,1650.36],[1051.23,1660.77],[1040.82,1671.18],[1030.41,1681.59],[1188.0,1596.0],[1440.36,3575.64],[1428.73,3587.27],[1423.16,3593.97],[1419.18,3601.32],[1416.8,3609.33],[1416.0,3618.0],[1416.0,3632.73],[1416.0,3647.45],[1416.0,3662.18],[1416.0,3676.91],[1416.0,3691.64],[1416.0,3706.36],[1416.0,3721.09],[1416.0,3735.82],[1416.0,3750.55],[1416.0,3765.27],[684.0,2064.0],[678.75,2070.31],[675.0,2077.24],[672.75,2084.8],[672.0,2092.97],[672.0,2108.49],[1551.51,3288.0],[1555.6,3288.38],[1559.38,3289.5],[1562.84,3291.38],[1566.0,3294.0],[2113.65,2026.35],[2103.3,2036.7],[2092.95,2047.05],[2082.59,2057.41],[2072.24,2067.76],[2061.89,2078.11],[2051.54,2088.46],[2041.19,2098.81],[2030.84,2109.16],[2020.49,2119.51],[2010.13,2129.87],[1999.78,2140.22],[1989.43,2150.57],[1979.08,2160.92],[1968.73,2171.27],[1962.03,2176.84],[1954.68,2180.82],[1946.67,2183.2],[1938.0,2184.0],[2124.0,1988.49],[2123.62,1984.4],[2122.5,1980.62],[2120.62,1977.16],[2118.0,1974.0],[600.0,2184.0],[605.78,2183.47],[611.12,2181.88],[616.02,2179.23],[620.49,2175.51],[630.79,2165.21],[641.09,2154.91],[651.39,2144.61],[661.7,2134.3],[747.17,2964.0],[762.34,2964.0],[777.51,2964.0],[792.69,2964.0],[807.86,2964.0],[823.03,2964.0],[831.2,2964.75],[838.76,2967.0],[845.69,2970.75],[852.0,2976.0]],"edges":[[0,1,0],[0,2,0],[2,3,0],[3,4,0],[4,5,0],[5,6,0],[6,7,0],[0,8,2],[8,9,2],[9,10,2],[10,11,2],[11,12,2],[12,13,2],[13,7,2],[14,15,1],[15,16,1],[16,17,1],[17,18,1],[18,19,1],[19,20,1],[20,21,1],[21,22,1],[22,23,1],[23,24,1],[14,25,1],[25,26,1],[26,27,1],[27,28,1],[28,29,1],[29,30,1],[30,31,1],[31,32,1],[32,33,1],[33,34,1],[34,35,1],[35,36,1],[36,37,1],[37,38,1],[38,39,1],[39,40,1],[40,41,1],[41,42,1],[14,43,2],[43,44,2],[44,45,2],[45,46,2],[46,47,2],[47,48,2],[48,49,2],[49,50,2],[51,52,1],[52,53,1],[53,54,1],[54,55,1],[55,56,1],[56,57,1],[57,58,1],[58,59,1],[59,60,1],[51,61,1],[61,62,1],[62,63,1],[63,64,1],[64,65,1],[65,66,1],[66,67,1],[67,68,1],[68,69,1],[69,70,1],[70,71,1],[71,72,1],[51,73,2],[73,74,2],[74,75,2],[75,76,2],[76,77,2],[77,78,2],[78,79,2],[79,80,2],[80,81,2],[51,82,2],[82,83,2],[83,84,2],[84,85,2],[85,86,2],[86,87,2],[88,89,1],[89,90,1],[90,91,1],[91,92,1],[92,93,1],[93,94,1],[94,95,1],[95,96,1],[96,97,1],[97,98,1],[98,99,1],[99,100,1],[100,101,1],[88,102,0],[102,103,0],[103,104,0],[104,105,0],[105,106,0],[106,107,0],[107,108,0],[108,109,0],[109,110,0],[110,111,0],[111,112,0],[112,113,0],[113,114,0],[114,115,0],[115,116,0],[88,117,2],[117,118,2],[118,119,2],[119,120,2],[120,121,2],[121,122,2],[122,123,2],[123,124,2],[124,125,2],[125,126,2],[88,127,2],[127,128,2],[128,129,2],[129,130,2],[130,131,2],[131,132,2],[132,133,2],[133,134,2],[88,135,2],[135,136,2],[136,137,2],[137,138,2],[138,139,2],[139,140,2],[140,141,2],[141,142,2],[142,134,2],[143,144,1],[144,145,1],[145,146,1],[146,147,1],[147,148,1],[148,149,1],[149,150,1],[150,151,1],[151,152,1],[152,153,1],[153,154,1],[154,155,1],[155,156,1],[143,157,1],[157,158,1],[158,159,1],[159,160,1],[160,161,1],[161,162,1],[162,163,1],[163,164,1],[164,165,1],[165,166,1],[166,167,1],[167,168,1],[168,169,1],[169,170,1],[170,171,1],[171,172,1],[172,173,1],[173,174,1],[143,175,1],[175,176,1],[176,177,1],[177,178,1],[178,179,1],[179,180,1],[143,181,1],[181,182,1],[182,183,1],[183,184,1],[184,185,1],[185,186,1],[186,187,1],[187,188,1],[188,189,1],[189,190,1],[190,191,1],[191,192,1],[192,193,1],[193,194,1],[195,196,1],[196,197,1],[198,199,2],[198,200,2],[200,81,2],[198,201,2],[201,202,2],[202,203,2],[203,204,2],[204,205,2],[205,60,2],[206,207,0],[207,208,0],[208,209,0],[209,210,0],[210,211,0],[211,212,0],[212,213,0],[213,214,0],[214,215,0],[215,216,0],[216,217,0],[217,218,0],[218,219,0],[219,220,0],[220,221,0],[221,222,0],[222,223,0],[223,224,0],[206,225,0],[225,226,0],[226,227,0],[227,228,0],[228,229,0],[229,230,0],[230,231,0],[231,232,0],[232,101,0],[206,233,2],[233,234,2],[234,235,2],[235,236,2],[236,237,2],[237,238,2],[238,239,2],[239,240,2],[240,241,2],[241,242,2],[206,243,2],[243,244,2],[244,245,2],[245,246,2],[246,247,2],[247,248,2],[248,249,2],[249,250,2],[250,242,2],[251,252,1],[252,253,1],[253,254,1],[254,255,1],[255,256,1],[256,257,1],[251,258,1],[258,259,1],[259,260,1],[260,261,1],[261,262,1],[262,263,1],[263,264,1],[264,265,1],[265,266,1],[266,267,1],[267,268,1],[268,269,1],[269,270,1],[270,271,1],[271,272,1],[272,273,1],[273,274,1],[274,275,1],[275,276,1],[276,277,1],[277,278,1],[278,279,1],[279,280,1],[280,281,1],[281,282,1],[282,283,1],[283,284,1],[284,285,1],[285,286,1],[286,287,1],[287,288,1],[194,289,0],[289,290,0],[290,291,0],[291,292,0],[292,293,0],[293,294,0],[294,295,0],[295,296,0],[296,297,0],[297,298,0],[298,299,0],[299,300,0],[300,301,0],[301,302,0],[302,303,0],[303,304,0],[304,305,0],[305,306,0],[306,307,0],[307,308,0],[194,309,0],[309,310,0],[310,311,0],[311,312,0],[312,313,0],[313,314,0],[314,315,0],[315,316,0],[316,317,0],[317,318,0],[318,319,0],[319,320,0],[320,321,0],[321,322,0],[322,323,0],[323,156,0],[324,325,1],[325,326,1],[326,327,1],[327,328,1],[328,329,1],[329,330,1],[330,331,1],[324,332,1],[324,333,2],[333,334,2],[334,335,2],[335,336,2],[336,337,2],[337,338,2],[338,339,2],[339,340,2],[340,341,2],[341,342,2],[342,343,2],[343,344,2],[344,345,2],[345,346,2],[346,347,2],[347,72,2],[324,348,2],[348,349,2],[349,350,2],[350,351,2],[351,352,2],[352,353,2],[353,354,2],[354,355,2],[355,356,2],[356,357,2],[357,358,2],[358,359,2],[359,360,2],[360,361,2],[361,362,2],[362,363,2],[324,364,2],[364,365,2],[365,366,2],[366,367,2],[367,368,2],[368,369,2],[369,370,2],[370,371,2],[372,373,0],[373,374,0],[374,375,0],[375,376,0],[376,377,0],[377,378,0],[378,379,0],[379,380,0],[380,381,0],[381,382,0],[382,383,0],[383,384,0],[384,385,0],[385,386,0],[386,387,0],[372,388,0],[388,389,0],[389,390,0],[390,391,0],[391,392,0],[392,393,0],[393,394,0],[394,395,0],[395,396,0],[396,397,0],[372,398,2],[398,399,2],[399,400,2],[400,401,2],[401,402,2],[402,403,2],[403,404,2],[404,405,2],[405,406,2],[406,407,2],[407,408,2],[408,409,2],[409,410,2],[410,411,2],[411,412,2],[372,413,2],[413,414,2],[414,415,2],[415,416,2],[416,417,2],[417,418,2],[418,419,2],[419,420,2],[420,421,2],[421,422,2],[422,423,2],[423,224,2],[372,424,2],[424,425,2],[425,426,2],[426,427,2],[427,428,2],[428,429,2],[429,430,2],[430,431,2],[431,432,2],[432,433,2],[433,434,2],[434,24,2],[435,436,1],[436,437,1],[437,438,1],[438,439,1],[439,440,1],[440,441,1],[441,442,1],[442,443,1],[443,444,1],[444,445,1],[445,446,1],[446,447,1],[447,448,1],[448,449,1],[449,450,1],[435,451,1],[451,452,1],[452,453,1],[453,454,1],[454,455,1],[455,456,1],[456,457,1],[457,458,1],[458,459,1],[459,460,1],[460,461,1],[461,462,1],[462,463,1],[463,464,1],[464,465,1],[465,466,1],[466,467,1],[467,468,1],[468,469,1],[469,470,1],[470,471,1],[471,472,1],[472,473,1],[473,474,1],[474,475,1],[475,476,1],[435,477,1],[477,478,1],[478,479,1],[479,480,1],[480,481,1],[481,482,1],[482,483,1],[483,484,1],[484,485,1],[485,486,1],[486,487,1],[487,488,1],[488,489,1],[489,490,1],[490,450,1],[435,491,1],[491,492,1],[492,493,1],[493,494,1],[494,495,1],[495,496,1],[496,497,1],[497,498,1],[498,499,1],[499,500,1],[500,501,1],[501,502,1],[502,503,1],[503,504,1],[504,505,1],[505,506,1],[506,507,1],[507,508,1],[508,509,1],[509,510,1],[510,511,1],[511,512,1],[363,513,1],[363,514,1],[514,515,1],[515,516,1],[516,517,1],[517,518,1],[518,519,1],[519,520,1],[363,521,2],[521,522,2],[522,523,2],[523,524,2],[524,525,2],[525,526,2],[526,527,2],[527,528,2],[528,529,2],[529,530,2],[530,531,2],[531,532,2],[532,533,2],[533,534,2],[534,535,2],[535,536,2],[363,537,2],[537,538,2],[538,539,2],[539,540,2],[540,541,2],[541,542,2],[542,543,2],[543,544,2],[544,545,2],[545,546,2],[546,547,2],[547,548,2],[548,549,2],[549,550,2],[242,551,2],[551,552,2],[552,553,2],[553,554,2],[554,555,2],[555,556,2],[556,557,2],[558,559,1],[559,560,1],[560,561,1],[561,562,1],[562,563,1],[563,564,1],[564,565,1],[565,566,1],[566,567,1],[567,568,1],[568,569,1],[558,570,0],[570,571,0],[571,572,0],[572,573,0],[573,574,0],[574,575,0],[575,576,0],[576,577,0],[577,578,0],[578,579,0],[579,580,0],[580,581,0],[581,582,0],[582,583,0],[558,584,1],[584,585,1],[585,586,1],[586,587,1],[587,588,1],[588,589,1],[589,590,1],[558,570,1],[570,571,1],[571,572,1],[572,573,1],[573,574,1],[574,575,1],[575,576,1],[576,577,1],[577,591,1],[591,592,1],[592,593,1],[593,594,1],[594,595,1],[596,597,0],[597,598,0],[598,599,0],[600,601,0],[600,602,0],[602,603,0],[603,604,0],[604,605,0],[606,607,1],[607,608,1],[608,609,1],[609,610,1],[610,611,1],[611,612,1],[612,613,1],[613,614,1],[614,615,1],[615,616,1],[616,617,1],[617,618,1],[618,619,1],[619,620,1],[620,621,1],[621,622,1],[606,623,1],[623,624,1],[624,625,1],[626,627,1],[627,628,1],[628,629,1],[629,630,1],[630,631,1],[631,632,1],[632,633,1],[633,634,1],[634,635,1],[636,637,1],[637,638,1],[638,639,1],[639,640,1],[640,641,1],[641,642,1],[642,643,1],[643,644,1],[644,645,1],[645,646,1],[646,647,1],[647,648,1],[648,649,1],[649,650,1],[650,651,1],[651,652,1],[652,653,1],[653,654,1],[654,655,1],[655,656,1],[656,657,1],[657,658,1],[636,659,1],[659,660,1],[660,661,1],[661,662,1],[662,663,1],[663,664,1],[664,665,1],[665,666,1],[666,667,1],[667,668,1],[668,669,1],[669,670,1],[670,671,1],[671,672,1],[672,673,1],[673,674,1],[636,675,1],[675,676,1],[676,677,1],[677,678,1],[678,679,1],[679,680,1],[680,681,1],[681,682,1],[682,683,1],[683,684,1],[684,685,1],[685,686,1],[686,687,1],[687,688,1],[688,689,1],[689,690,1],[690,691,1],[691,692,1],[692,693,1],[693,694,1],[636,695,0],[695,696,0],[696,697,0],[697,698,0],[698,699,0],[699,700,0],[700,701,0],[701,702,0],[702,703,0],[703,704,0],[704,705,0],[705,706,0],[706,707,0],[707,708,0],[708,709,0],[709,710,0],[710,711,0],[711,712,0],[712,713,0],[713,714,0],[714,715,0],[715,716,0],[716,717,0],[717,718,0],[718,719,0],[87,720,2],[720,721,2],[721,722,2],[722,723,2],[723,724,2],[724,725,2],[725,63,2],[63,64,2],[64,65,2],[65,66,2],[66,67,2],[67,68,2],[68,69,2],[69,70,2],[70,71,2],[71,72,2],[87,726,2],[726,727,2],[727,728,2],[728,729,2],[729,730,2],[730,731,2],[731,732,2],[732,733,2],[733,734,2],[734,735,2],[735,736,2],[736,737,2],[737,738,2],[738,739,2],[739,740,2],[601,741,0],[741,742,0],[742,743,0],[743,744,0],[744,745,0],[745,746,0],[746,747,0],[747,748,0],[601,749,0],[749,750,0],[750,751,0],[751,752,0],[752,753,0],[753,754,0],[754,755,0],[755,512,0],[756,757,0],[757,758,0],[758,759,0],[759,760,0],[760,761,0],[761,762,0],[762,763,0],[763,764,0],[764,765,0],[765,766,0],[766,767,0],[767,768,0],[768,769,0],[769,770,0],[770,771,0],[771,772,0],[772,773,0],[773,774,0],[774,775,0],[775,776,0],[776,777,0],[777,778,0],[778,779,0],[779,780,0],[780,781,0],[781,782,0],[782,783,0],[783,748,0],[756,784,1],[784,785,1],[785,786,1],[786,787,1],[787,788,1],[788,789,1],[789,790,1],[790,791,1],[791,792,1],[792,793,1],[793,794,1],[794,795,1],[795,796,1],[796,797,1],[798,799,1],[799,800,1],[800,801,1],[801,802,1],[802,803,1],[803,804,1],[804,805,1],[805,806,1],[806,807,1],[807,808,1],[808,809,1],[798,810,1],[810,811,1],[811,812,1],[812,813,1],[813,814,1],[814,815,1],[815,816,1],[816,817,1],[817,818,1],[818,819,1],[819,820,1],[820,821,1],[821,822,1],[822,823,1],[823,824,1],[824,825,1],[798,826,0],[826,827,0],[827,828,0],[828,829,0],[829,830,0],[830,831,0],[831,832,0],[832,833,0],[833,834,0],[834,835,0],[835,836,0],[836,837,0],[837,838,0],[838,839,0],[839,840,0],[840,841,0],[841,842,0],[842,843,0],[843,844,0],[844,845,0],[845,846,0],[72,847,1],[847,848,1],[848,849,1],[849,850,1],[850,851,1],[851,852,1],[852,853,1],[853,854,1],[72,855,2],[855,856,2],[856,857,2],[857,858,2],[858,859,2],[859,860,2],[860,861,2],[861,862,2],[862,863,2],[863,864,2],[864,865,2],[865,866,2],[866,331,2],[512,867,1],[867,868,1],[868,869,1],[869,870,1],[870,871,1],[871,872,1],[872,873,1],[873,874,1],[874,875,1],[512,876,1],[876,877,1],[877,878,1],[878,879,1],[879,880,1],[880,881,1],[881,882,1],[882,883,1],[883,884,1],[884,885,1],[885,886,1],[886,748,1],[887,888,1],[888,889,1],[889,890,1],[890,891,1],[891,892,1],[892,893,1],[893,894,1],[894,895,1],[895,896,1],[896,897,1],[887,898,1],[898,899,1],[899,900,1],[900,901,1],[901,902,1],[902,903,1],[903,904,1],[904,905,1],[905,906,1],[906,907,1],[846,908,0],[908,909,0],[909,910,0],[910,911,0],[911,912,0],[912,913,0],[913,914,0],[914,915,0],[915,916,0],[916,917,0],[917,918,0],[918,919,0],[919,920,0],[920,921,0],[921,922,0],[922,923,0],[923,924,0],[924,925,0],[925,926,0],[926,927,0],[595,928,1],[928,929,1],[929,930,1],[930,931,1],[931,932,1],[932,933,1],[933,934,1],[934,935,1],[595,936,1],[936,937,1],[937,938,1],[938,939,1],[939,940,1],[940,941,1],[941,942,1],[942,943,1],[943,944,1],[944,945,1],[945,946,1],[946,947,1],[947,948,1],[948,949,1],[949,950,1],[950,951,1],[951,952,1],[595,953,1],[953,954,1],[954,955,1],[955,956,1],[956,957,1],[957,958,1],[958,959,1],[595,960,1],[960,961,1],[961,962,1],[962,963,1],[963,964,1],[964,965,1],[965,966,1],[966,583,1],[967,968,1],[968,969,1],[969,970,1],[970,971,1],[971,972,1],[972,973,1],[973,974,1],[974,975,1],[967,976,1],[976,977,1],[977,978,1],[978,979,1],[979,980,1],[980,116,1],[967,981,2],[981,982,2],[982,983,2],[983,984,2],[984,985,2],[985,986,2],[986,987,2],[987,988,2],[988,989,2],[989,990,2],[990,991,2],[991,992,2],[992,134,2],[257,993,1],[993,994,1],[994,995,1],[995,996,1],[996,997,1],[997,998,1],[998,999,1],[999,1000,1],[1000,1001,1],[1001,1002,1],[1002,1003,1],[257,1004,1],[1004,1005,1],[1005,1006,1],[1006,1007,1],[1007,1008,1],[1008,1009,1],[1009,1010,1],[1010,1011,1],[1011,674,1],[257,1012,1],[1012,1013,1],[1013,1014,1],[1014,1015,1],[1015,1016,1],[1016,1017,1],[1017,1018,1],[1018,1019,1],[332,1020,1],[1020,1021,1],[1021,1022,1],[1022,1023,1],[1023,1024,1],[332,1025,2],[1025,1026,2],[1026,1027,2],[1027,1028,2],[1028,1029,2],[1029,1030,2],[1030,1031,2],[1031,1032,2],[1032,1033,2],[1033,1024,2],[332,1034,2],[1034,1035,2],[1035,1036,2],[1036,1037,2],[1037,1038,2],[1038,1039,2],[1039,1040,2],[1040,536,2],[694,1041,1],[1041,1042,1],[1042,1043,1],[1043,1044,1],[1044,1045,1],[1045,1046,1],[1046,1047,1],[1047,1048,1],[1048,1049,1],[1049,1050,1],[1050,1051,1],[694,1052,1],[1052,1053,1],[1053,1054,1],[1054,1055,1],[1055,1056,1],[1056,1057,1],[1057,1058,1],[1058,1059,1],[1059,1060,1],[1060,1061,1],[1061,1062,1],[1062,1063,1],[1063,1064,1],[1064,1065,1],[1065,1066,1],[1066,1067,1],[1067,1068,1],[1069,1070,1],[1070,1071,1],[1071,1072,1],[1072,1073,1],[1073,1074,1],[1074,1075,1],[1075,1076,1],[1069,1077,1],[1077,1078,1],[1078,1079,1],[1079,1080,1],[1080,1081,1],[1081,1082,1],[1082,1083,1],[1083,1084,1],[1084,1085,1],[1085,1086,1],[1086,1087,1],[1087,1088,1],[1088,1019,1],[1089,1090,1],[1090,1091,1],[1091,1092,1],[1092,1093,1],[1093,1094,1],[1094,1095,1],[1095,1096,1],[1096,1097,1],[1097,1098,1],[1098,1099,1],[1099,1100,1],[1100,1101,1],[1101,1102,1],[1102,625,1],[1089,1103,1],[1103,1104,1],[1104,1105,1],[1105,1106,1],[1089,1107,0],[1107,1108,0],[1108,1109,0],[1109,1110,0],[1110,1111,0],[1111,1112,0],[1112,1113,0],[1113,1114,0],[1114,1106,0],[397,1115,1],[1115,1116,1],[1116,1117,1],[1117,1118,1],[1118,1119,1],[1119,1120,1],[397,1121,1],[1121,1122,1],[1122,1123,1],[1123,1124,1],[1124,1125,1],[1125,1126,1],[397,1127,2],[1127,1128,2],[1128,1129,2],[1129,1130,2],[1130,1131,2],[1131,1132,2],[1132,1133,2],[1133,1134,2],[1134,1135,2],[1135,1136,2],[1136,412,2],[42,1137,1],[1137,1138,1],[1138,740,1],[42,1139,2],[1139,1140,2],[1140,1141,2],[1141,1142,2],[1142,1143,2],[1143,1144,2],[1144,1145,2],[1145,1146,2],[1146,1147,2],[1147,1148,2],[1148,1149,2],[1149,50,2],[740,1150,0],[1150,1151,0],[1151,1152,0],[1152,1153,0],[1153,1154,0],[1154,1155,0],[1155,1156,0],[1156,1,0],[740,1157,0],[1157,1158,0],[1158,1159,0],[1159,1160,0],[1160,1161,0],[1161,1162,0],[1162,1163,0],[1163,1164,0],[1164,1165,0],[1165,1166,0],[1166,1167,0],[1167,1168,0],[1168,1169,0],[1169,198,0],[740,1170,2],[1170,1171,2],[1171,1172,2],[1172,1173,2],[1173,1174,2],[1174,1175,2],[1175,1176,2],[1176,1177,2],[1177,1178,2],[1178,1179,2],[1179,1180,2],[1180,1181,2],[1181,1182,2],[1182,50,2],[513,1183,1],[1183,1184,1],[513,1185,2],[1185,1186,2],[1186,1187,2],[1187,1188,2],[1188,1189,2],[1189,1190,2],[1190,1191,2],[1191,1192,2],[1192,1193,2],[1193,1194,2],[927,1195,1],[1195,1196,1],[1196,1197,1],[1197,1198,1],[1198,1199,1],[1199,1200,1],[1200,1201,1],[1201,1202,1],[1202,1203,1],[1203,1204,1],[1204,1205,1],[1205,1206,1],[1206,1207,1],[1207,1208,1],[1208,1209,1],[1209,1210,1],[1210,1211,1],[1211,1212,1],[1212,1213,1],[1213,1214,1],[1214,1215,1],[1215,288,1],[927,1216,1],[1216,1217,1],[1217,1218,1],[1218,1219,1],[1219,1220,1],[1220,1221,1],[1221,1222,1],[1222,1223,1],[1223,1224,1],[1224,1225,1],[1225,1226,1],[1226,1227,1],[1227,1228,1],[1228,1229,1],[1229,1230,1],[1230,1231,1],[1231,1232,1],[1232,897,1],[520,1233,1],[1233,1234,1],[1234,1235,1],[1235,1236,1],[1236,1237,1],[1237,1238,1],[1238,1239,1],[1239,1240,1],[1240,1241,1],[1241,1242,1],[1242,536,1],[520,1243,2],[1243,1244,2],[1244,1245,2],[1245,1246,2],[1246,1247,2],[1247,1248,2],[1248,1249,2],[1249,1250,2],[1250,1251,2],[1251,1252,2],[1252,536,2],[1253,1254,1],[1254,1255,1],[1255,1256,1],[1256,1257,1],[1257,1258,1],[1258,1259,1],[1259,1076,1],[1253,1260,1],[1260,1261,1],[1261,1262,1],[1262,1263,1],[1263,1264,1],[1264,1265,1],[1265,1266,1],[1266,1267,1],[1267,1268,1],[1268,1269,1],[1269,1270,1],[1270,1271,1],[1271,1272,1],[1272,1273,1],[1273,1274,1],[1274,1275,1],[1275,1276,1],[1276,1277,1],[1253,1278,1],[1278,1279,1],[1279,1280,1],[1280,1281,1],[1281,1282,1],[1282,1283,1],[1284,1285,1],[1285,1286,1],[1286,1287,1],[1287,1288,1],[1288,1289,1],[1289,1290,1],[1290,1291,1],[1291,1292,1],[1292,1293,1],[1293,1294,1],[1294,1295,1],[1295,1296,1],[1284,1297,1],[1297,1298,1],[1298,1299,1],[1299,1300,1],[1300,1301,1],[1301,1302,1],[1302,1303,1],[1303,1304,1],[1304,1305,1],[1305,1306,1],[1306,1307,1],[1307,1308,1],[1308,1309,1],[550,1310,2],[1310,1311,2],[1311,1312,2],[1312,1313,2],[1313,1314,2],[1314,1315,2],[1315,1316,2],[1316,1317,2],[1317,1318,2],[1318,1319,2],[1319,1320,2],[1320,1321,2],[1321,7,2],[550,1322,2],[1322,1323,2],[1323,1324,2],[1324,1325,2],[1325,1326,2],[1326,1194,2],[476,1327,0],[1327,1328,0],[1328,1329,0],[1329,1330,0],[1330,1331,0],[1331,1332,0],[1332,1333,0],[1333,1334,0],[1334,1335,0],[1335,1336,0],[1336,1337,0],[1337,1338,0],[1338,1339,0],[1339,1340,0],[1340,1341,0],[1341,1342,0],[1342,1343,0],[1343,1344,0],[1344,1345,0],[1345,1346,0],[1346,1347,0],[1347,1348,0],[1348,1349,0],[1349,1350,0],[1350,1351,0],[1351,1352,0],[1352,1353,0],[1353,1354,0],[1354,1355,0],[1355,748,0],[476,1356,1],[1356,1357,1],[1357,1358,1],[1358,1359,1],[1359,1360,1],[1360,1361,1],[1361,1362,1],[1362,1363,1],[1363,1364,1],[1364,1365,1],[1365,1366,1],[1366,797,1],[476,1367,1],[1367,1368,1],[1368,1369,1],[1369,1370,1],[1370,1371,1],[1371,1372,1],[1372,1373,1],[1373,1374,1],[412,1375,1],[1375,1376,1],[1376,1377,1],[1377,1378,1],[1378,1379,1],[1379,1380,1],[1380,1381,1],[1381,1382,1],[412,1383,1],[1383,1384,1],[1384,1385,1],[1385,1386,1],[1386,1387,1],[1387,1388,1],[1388,1389,1],[1389,1390,1],[1390,1120,1],[1391,1392,1],[1392,1393,1],[1393,1394,1],[1394,1395,1],[1395,1396,1],[1396,1397,1],[1397,1398,1],[1398,1399,1],[1391,1400,1],[1400,1401,1],[1401,1402,1],[1402,1403,1],[1403,1404,1],[1404,1405,1],[1405,1406,1],[1406,1407,1],[1407,1408,1],[1408,174,1],[450,1409,1],[1409,1410,1],[1410,1411,1],[1411,1412,1],[1412,1413,1],[1413,1414,1],[1414,1415,1],[1415,1416,1],[450,1417,1],[1417,1418,1],[1418,1419,1],[1419,1420,1],[1420,1421,1],[1421,1422,1],[1422,1423,1],[1423,1424,1],[1424,1425,1],[1425,1426,1],[1426,1427,1],[1427,1428,1],[1428,1429,1],[1429,1430,1],[1430,1431,1],[1432,1433,0],[1433,1434,0],[1434,1435,0],[1435,1436,0],[1436,1437,0],[1437,1438,0],[1438,1439,0],[1439,569,0],[134,1440,1],[1440,1441,1],[1441,1442,1],[1442,1443,1],[1443,1444,1],[1444,1445,1],[1445,1446,1],[1446,1447,1],[1447,1448,1],[1448,1449,1],[1449,101,1],[134,1450,1],[1450,1451,1],[1451,126,1],[134,1452,2],[1452,1453,2],[1453,1454,2],[1454,1455,2],[1455,1456,2],[1456,1457,2],[1457,1458,2],[1458,1459,2],[1459,1460,2],[1460,1461,2],[1461,1462,2],[1462,1463,2],[1463,101,2],[134,1440,2],[1440,1464,2],[1416,1465,1],[1465,1466,1],[1466,1467,1],[1467,1468,1],[1468,1469,1],[1469,1470,1],[1470,1471,1],[1471,1277,1],[7,1472,0],[1472,1473,0],[1473,1474,0],[1474,1475,0],[1475,1476,0],[1476,1477,0],[1477,1478,0],[1478,1479,0],[1479,1480,0],[1480,1481,0],[1481,1482,0],[1482,1483,0],[1483,1484,0],[1484,1194,0],[1184,1485,0],[1485,1486,0],[1486,1487,0],[1487,1488,0],[1488,1489,0],[1489,1490,0],[1490,1491,0],[1491,1492,0],[1492,1493,0],[1493,1494,0],[1494,1194,0],[1495,1496,1],[1496,1497,1],[1497,1498,1],[1498,1499,1],[1499,1500,1],[1500,1501,1],[1501,1502,1],[1502,1503,1],[1503,1504,1],[1504,1505,1],[1505,1506,1],[1506,1507,1],[1507,1508,1],[1508,1509,1],[1509,1510,1],[1510,1511,1],[1511,674,1],[1495,1512,1],[1512,1513,1],[1513,1514,1],[1514,1515,1],[1515,1516,1],[1516,1517,1],[1517,1518,1],[1518,1519,1],[1519,1520,1],[1520,1521,1],[1522,1523,1],[1523,1524,1],[1524,1525,1],[1525,1526,1],[1526,1527,1],[1527,1528,1],[1528,1529,1],[1529,1530,1],[1530,1531,1],[1531,1532,1],[1532,1533,1],[1533,1534,1],[1534,1535,1],[1535,1536,1],[1536,1537,1],[1537,1538,1],[1538,1539,1],[1539,952,1],[1522,1540,1],[1540,1541,1],[1541,1542,1],[1542,1543,1],[1543,1544,1],[1544,1545,1],[1545,1546,1],[825,1547,1],[1547,1548,1],[1548,1549,1],[1549,1550,1],[1550,1551,1],[1551,1296,1],[1552,1553,1],[1552,1554,1],[1554,1555,1],[1555,1556,1],[1556,1557,1],[1557,1558,1],[1558,1559,1],[1559,1546,1],[1003,1560,1],[1560,1561,1],[1561,1562,1],[1562,1563,1],[1563,1564,1],[1564,1565,1],[1565,1566,1],[1566,1567,1],[1567,1568,1],[1568,1569,1],[1569,1570,1],[1570,1571,1],[1571,1572,1],[1572,1573,1],[1573,1574,1],[1574,1575,1],[1575,1576,1],[1576,1577,1],[1577,1578,1],[1578,1579,1],[1579,1580,1],[1580,1581,1],[1581,1582,1],[1582,1583,1],[1583,1584,1],[1584,1585,1],[1585,1586,1],[1586,1587,1],[1587,1588,1],[1588,1589,1],[1589,1590,1],[1590,875,1],[24,1591,1],[1591,1592,1],[1592,1593,1],[1593,1594,1],[1594,1595,1],[1595,1596,1],[1596,1597,1],[1597,1598,1],[1598,1599,1],[1599,1126,1],[24,1600,1],[1600,1601,1],[1601,1602,1],[1602,1603,1],[1603,1604,1],[1604,1605,1],[1605,1606,1],[1606,1607,1],[1607,1608,1],[1608,1609,1],[1609,1610,1],[1610,1611,1],[1611,1612,1],[1612,1613,1],[1613,1614,1],[1614,1615,1],[1615,1616,1],[1616,1617,1],[1617,1618,1],[1618,1619,1],[1619,1620,1],[1620,1621,1],[1621,1622,1],[1622,557,1],[24,224,0],[24,1623,2],[1623,1624,2],[1624,1625,2],[1625,1626,2],[1626,1627,2],[1627,1628,2],[1628,1629,2],[1629,1630,2],[1630,1631,2],[1631,1632,2],[1632,1633,2],[1633,1634,2],[1634,1635,2],[1635,1636,2],[1636,1637,2],[1637,1638,2],[1638,1639,2],[1639,1640,2],[1640,50,2],[1521,1641,1],[1641,1642,1],[1642,1643,1],[1643,1644,1],[1644,1645,1],[1645,1646,1],[1646,1647,1],[1647,1648,1],[1648,1649,1],[1649,1650,1],[1650,1651,1],[1651,1652,1],[1652,1653,1],[1653,1654,1],[371,1655,1],[1655,1656,1],[1656,1657,1],[1657,854,1],[371,331,1],[371,1658,2],[1658,1659,2],[1659,1660,2],[1660,1661,2],[1661,1662,2],[1662,1663,2],[1663,854,2],[1664,1665,0],[1665,1666,0],[1666,1667,0],[1667,1668,0],[1668,1669,0],[1669,1670,0],[1670,1671,0],[1664,1672,1],[1672,1673,1],[1673,1674,1],[1674,1675,1],[1675,1676,1],[1676,1677,1],[1677,1678,1],[1678,1679,1],[1679,1680,1],[1680,1681,1],[1681,1051,1],[197,1682,1],[1682,1683,1],[1683,1684,1],[1684,1685,1],[1685,1686,1],[1686,1687,1],[1687,1688,1],[1688,1689,1],[1689,1690,1],[1690,1691,1],[1691,1692,1],[1692,1076,1],[1693,1694,1],[1694,1695,1],[1695,1696,1],[1696,1697,1],[1697,1698,1],[1698,1106,1],[1693,1699,1],[1699,1700,1],[1700,1701,1],[1701,1702,1],[1702,1703,1],[1703,1704,1],[1704,1705,1],[1705,1706,1],[1693,1707,0],[1707,1708,0],[1708,1709,0],[1709,1710,0],[1710,1711,0],[1711,387,0],[1693,1712,2],[1712,1713,2],[1713,1714,2],[1714,1715,2],[1715,1716,2],[1716,1717,2],[1717,1718,2],[1718,1719,2],[1719,1720,2],[1720,907,2],[569,1721,1],[1721,1722,1],[1722,1723,1],[1723,1724,1],[1724,1725,1],[1725,1726,1],[1726,1727,1],[1727,1728,1],[1728,1729,1],[1729,1730,1],[1730,1731,1],[1731,1732,1],[1732,1733,1],[1733,1734,1],[1734,952,1],[569,1735,1],[1735,1736,1],[1736,1737,1],[1737,1738,1],[1738,1739,1],[1739,1740,1],[1740,1741,1],[1741,1742,1],[1742,1743,1],[1743,1744,1],[1744,1745,1],[1745,1746,1],[1746,1747,1],[569,1748,1],[1748,1749,1],[1749,1750,1],[1750,1751,1],[1751,1752,1],[1752,1753,1],[1753,1754,1],[1754,1755,1],[1755,1756,1],[1756,1757,1],[1757,1758,1],[1758,1759,1],[1759,1760,1],[1760,1761,1],[1761,1762,1],[1763,1764,1],[1764,1765,1],[1765,1766,1],[1766,1767,1],[1767,1768,1],[1768,1769,1],[1769,1770,1],[1770,1771,1],[1771,1772,1],[1772,1773,1],[1773,1774,1],[1774,1775,1],[1775,1776,1],[1777,1778,1],[1778,1779,1],[1779,1780,1],[1780,1781,1],[1781,1782,1],[1782,1783,1],[1783,1784,1],[1784,1785,1],[1785,1786,1],[1786,952,1],[1777,1787,1],[1787,1788,1],[1788,1789,1],[1789,1790,1],[1790,1791,1],[1791,1792,1],[1792,1793,1],[1793,1794,1],[1794,1795,1],[1795,1796,1],[1796,599,1],[599,1797,1],[1797,1798,1],[1798,1799,1],[1799,1800,1],[1800,1801,1],[1801,1802,1],[1802,1803,1],[1803,1804,1],[1804,1805,1],[1805,1806,1],[1806,1807,1],[1807,1808,1],[1808,1762,1],[599,1809,1],[1809,1810,1],[1810,1811,1],[1811,1812,1],[1812,1813,1],[1813,1814,1],[1706,1815,1],[1815,1816,1],[1816,1817,1],[1817,1818,1],[1818,1819,1],[1819,1820,1],[1820,1821,1],[1821,101,1],[1706,1822,2],[1822,1823,2],[1823,1824,2],[1824,1825,2],[1825,1826,2],[1826,1827,2],[1827,387,2],[308,1828,1],[1828,1829,1],[1829,1830,1],[1830,1831,1],[1831,1832,1],[1832,1833,1],[1833,1834,1],[1834,1835,1],[1835,1836,1],[308,1837,1],[1837,1838,1],[1838,1839,1],[1839,1840,1],[1840,1841,1],[1841,1842,1],[1842,1843,1],[1843,1844,1],[1844,1845,1],[1845,1846,1],[1846,1847,1],[1847,1848,1],[1553,1849,0],[1849,1850,0],[1850,1851,0],[1851,1852,0],[1852,1853,0],[1853,1854,0],[1854,1855,0],[1855,1856,0],[1856,1857,0],[1857,1858,0],[1858,1859,0],[1859,1860,0],[1860,1861,0],[1861,1862,0],[1862,1863,0],[1863,1864,0],[1864,1865,0],[1865,1866,0],[1866,1867,0],[1867,1868,0],[1868,1869,0],[1869,1870,0],[1870,1871,0],[1871,959,0],[1553,1872,1],[1872,1873,1],[1873,1874,1],[1874,1875,1],[1875,1876,1],[1876,1877,1],[1877,1878,1],[1878,1879,1],[1553,1880,1],[1880,1881,1],[1881,1882,1],[1882,1883,1],[1883,1884,1],[1884,1885,1],[1885,1886,1],[1886,1887,1],[1887,1888,1],[1888,1889,1],[1889,1890,1],[1890,1891,1],[1891,1892,1],[1892,1893,1],[1893,1894,1],[1894,1895,1],[1895,1896,1],[1896,1897,1],[1897,1898,1],[1898,1899,1],[1899,1900,1],[1900,1901,1],[1901,1902,1],[1902,1903,1],[1903,1904,1],[1904,1905,1],[1905,1906,1],[1906,1907,1],[1907,1908,1],[1908,1909,1],[1909,288,1],[1399,1910,1],[1910,1911,1],[1911,1912,1],[1912,1913,1],[1913,1914,1],[1914,1915,1],[1915,1916,1],[1916,1776,1],[1654,1917,0],[1917,1918,0],[1918,1919,0],[1919,1920,0],[1920,1921,0],[1921,1922,0],[1922,1923,0],[1923,1924,0],[1924,1925,0],[1925,1926,0],[1926,1927,0],[1927,1928,0],[1928,1929,0],[1929,1930,0],[1930,1931,0],[1931,583,0],[1654,1932,0],[1932,1933,0],[1933,1934,0],[1934,1935,0],[1935,1936,0],[1936,1937,0],[1937,1938,0],[1938,1939,0],[1939,1940,0],[1940,1941,0],[1941,1942,0],[1942,1943,0],[1943,1944,0],[1944,1945,0],[1945,1946,0],[1946,1947,0],[1947,1948,0],[1948,288,0],[1654,1949,1],[1949,1950,1],[1950,1951,1],[1951,1952,1],[1952,1953,1],[1953,1954,1],[1954,1955,1],[1955,1956,1],[1956,1957,1],[1957,1958,1],[1958,935,1],[907,1959,1],[1959,1960,1],[1960,1961,1],[1961,1962,1],[1962,1963,1],[1963,1964,1],[1964,1106,1],[622,1965,1],[1965,1966,1],[1966,1967,1],[1967,1968,1],[1968,1969,1],[1969,1970,1],[1970,1971,1],[1971,1309,1],[126,1972,1],[1972,1973,1],[1973,1974,1],[1974,1975,1],[1975,1976,1],[1976,1977,1],[1120,1978,2],[1978,1979,2],[1979,1980,2],[1980,1981,2],[1981,1982,2],[1982,1983,2],[1983,1984,2],[1984,1985,2],[1985,1986,2],[1986,1987,2],[1987,1988,2],[1988,605,2],[748,1989,1],[1989,1990,1],[1990,1991,1],[1991,1992,1],[1992,1993,1],[1993,1994,1],[1994,1995,1],[1995,1996,1],[1996,1997,1],[1997,1998,1],[1998,1999,1],[1999,2000,1],[2000,2001,1],[2001,2002,1],[2002,2003,1],[2003,2004,1],[180,2005,1],[2005,2006,1],[2006,2007,1],[2007,2008,1],[2008,2009,1],[2009,2010,1],[875,2011,1],[2011,2012,1],[2012,2013,1],[2013,2014,1],[2014,2015,1],[2015,2016,1],[2016,2017,1],[2017,2018,1],[2018,2019,1],[2019,2020,1],[2020,2021,1],[2021,2022,1],[2022,2023,1],[2023,2024,1],[2024,1382,1],[2025,2026,1],[2026,2027,1],[2027,2028,1],[2028,2029,1],[2029,2030,1],[2030,2031,1],[2031,2032,1],[2032,2033,1],[2025,2034,1],[2034,2035,1],[2035,2036,1],[2036,2037,1],[2037,2038,1],[2038,2039,1],[2039,2040,1],[2040,2041,1],[2041,674,1],[583,2042,1],[2042,2043,1],[2043,2044,1],[2044,2045,1],[2045,2046,1],[2046,2047,1],[2047,2048,1],[2048,2049,1],[2049,2050,1],[2050,2051,1],[2051,2052,1],[2052,2053,1],[2053,2054,1],[2054,2055,1],[2055,2056,1],[2056,2057,1],[2057,2058,1],[2058,2059,1],[2059,2060,1],[2060,2061,1],[2061,2062,1],[2062,2063,1],[2063,2064,1],[2064,2065,1],[2065,2066,1],[2066,2067,1],[2067,2068,1],[2068,2069,1],[2069,2070,1],[2070,2071,1],[2071,2072,1],[2072,2073,1],[2073,2074,1],[2074,2075,1],[2075,2076,1],[2076,2077,1],[2077,2078,1],[2078,2079,1],[2079,1776,1],[658,2080,1],[2080,2081,1],[2081,2082,1],[2082,2083,1],[2083,2084,1],[2084,2085,1],[2085,2086,1],[2086,2087,1],[2088,2089,1],[2089,2090,1],[2090,2091,1],[2091,2092,1],[2092,2093,1],[2093,2094,1],[2094,2095,1],[2095,2096,1],[2096,2097,1],[1879,2098,1],[2098,2099,1],[2099,2100,1],[2100,2101,1],[2101,2102,1],[2102,2103,1],[2103,2104,1],[2104,2105,1],[2105,2106,1],[2106,2107,1],[2107,2108,1],[2108,2109,1],[2109,2110,1],[2110,809,1],[959,2111,1],[2111,2112,1],[2112,2113,1],[2113,2114,1],[2114,2115,1],[2115,2116,1],[2116,2117,1],[2117,2118,1],[2118,2119,1],[2119,2120,1],[2120,2121,1],[2121,2122,1],[2122,2123,1],[2123,2124,1],[2124,2125,1],[2125,2126,1],[2126,2127,1],[2127,2128,1],[2128,2129,1],[2129,2130,1],[2130,2131,1],[2131,2132,1],[2132,2133,1],[2133,288,1],[60,81,1],[156,2134,1],[2134,2135,1],[2135,2136,1],[2136,2137,1],[2137,2138,1],[2138,2139,1],[2139,2140,1],[2140,2141,1],[2141,2142,1],[2142,2143,1],[2143,1747,1],[156,2144,0],[2144,2145,0],[2145,2146,0],[2146,2147,0],[2147,2148,0],[2148,2149,0],[2149,2150,0],[2150,2151,0],[2151,2152,0],[2152,2153,0],[2153,2154,0],[2154,2155,0],[2155,2156,0],[2156,2157,0],[2157,2158,0],[2158,2159,0],[2159,2160,0],[2160,2161,0],[1747,2162,1],[2162,2163,1],[2163,2164,1],[2164,2165,1],[2165,2166,1],[2166,2167,1],[2167,2168,1],[2168,2169,1],[2169,2170,1],[2170,590,1],[2161,2171,0],[2171,2172,0],[2172,2173,0],[2173,2174,0],[2174,2175,0],[2175,2176,0],[2176,2177,0],[2177,2178,0],[2178,2179,0],[2179,2180,0],[2180,2181,0],[2181,2182,0],[2182,2183,0],[2183,2184,0],[2184,2185,0],[2185,2186,0],[2186,2187,0],[2187,2188,0],[2188,2077,0],[2077,2078,0],[2078,2079,0],[2079,1776,0],[81,2189,1],[2189,2190,1],[2190,2191,1],[2191,2192,1],[2192,2193,1],[2193,2194,1],[2194,2195,1],[2195,116,1],[2033,2196,1],[2196,2197,1],[2197,2198,1],[2198,2199,1],[2199,2200,1],[2200,2201,1],[2201,2202,1],[2202,2203,1],[2203,2204,1],[2204,2205,1],[2205,1076,1],[198,2206,0],[2206,2207,0],[2207,2208,0],[2208,2209,0],[2209,2210,0],[2210,2211,0],[2211,2212,0],[2212,2213,0],[2213,116,0],[198,2214,2],[2214,2215,2],[2215,2216,2],[2216,2217,2],[2217,2218,2],[2218,2219,2],[2219,2220,2],[2220,2221,2],[2221,2222,2],[2222,975,2],[897,2223,1],[2223,2224,1],[2224,2225,1],[2225,2226,1],[2226,2227,1],[2227,2228,1],[2228,2229,1],[2229,2230,1],[2230,2231,1],[2231,2232,1],[2232,2233,1],[2233,1382,1],[116,2234,1],[2234,2235,1],[2235,2236,1],[2236,2237,1],[2237,2238,1],[2238,2239,1],[2239,2240,1],[2240,1977,1],[2097,2241,1],[2241,2242,1],[2242,2243,1],[2243,2244,1],[2244,2245,1],[2245,2246,1],[2246,2247,1],[2247,2248,1],[2248,1848,1],[2010,2249,1],[2249,2250,1],[2250,2251,1],[2251,2252,1],[2252,2253,1],[2253,2254,1],[2254,2255,1],[2255,1836,1],[1024,2256,1],[2256,2257,1],[2257,2258,1],[2258,2259,1],[2259,2260,1],[2260,536,1],[605,2261,0],[2261,2262,0],[2262,2263,0],[2263,2264,0],[2264,2265,0],[2265,2266,0],[2266,1382,0],[1776,2267,1],[2267,2268,1],[2268,2269,1],[2269,2270,1],[2270,2271,1],[2271,2272,1],[2272,2273,1],[2273,2274,1],[2274,2087,1],[1776,2275,0],[2275,2276,0],[2276,2277,0],[2277,2278,0],[2278,2279,0],[2279,2280,0],[2280,2281,0],[2281,2282,0],[2282,2283,0],[2283,2284,0],[2284,2285,0],[2285,2286,0],[2286,2287,0],[2287,2288,0],[2288,2289,0],[2289,2290,0],[2290,2291,0],[2291,2292,0],[2292,2293,0],[2293,2294,0],[2294,2295,0],[2295,2296,0],[2296,2297,0],[2297,2298,0],[2298,2299,0],[2299,2300,0],[2300,2301,0],[2301,2302,0],[2302,2303,0],[2303,2304,0],[2304,2305,0],[2305,2306,0],[2306,2307,0],[2307,2308,0],[2308,2309,0],[2309,2310,0],[2310,1051,0],[2087,2311,1],[2311,2312,1],[2312,2313,1],[2313,2314,1],[2314,2315,1],[2315,2316,1],[2316,2317,1],[2317,2318,1],[2318,2319,1],[2319,2320,1],[2320,2321,1],[2321,2322,1],[2322,2323,1],[2323,2324,1],[2324,1068,1],[2087,2325,1],[1,2326,2],[2326,2327,2],[2327,2328,2],[2328,2329,2],[2329,2330,2],[2330,2331,2],[2331,2332,2],[2332,2333,2],[2333,2334,2],[2334,2335,2],[2335,2336,2],[2336,2337,2],[2337,2338,2],[2338,2339,2],[2339,2340,2],[2340,2341,2],[2341,1194,2],[719,2342,1],[2342,2343,1],[2343,2344,1],[2344,2345,1],[2345,2346,1],[2346,2347,1],[2347,1076,1],[557,2348,1],[2348,2349,1],[2349,2350,1],[2350,2351,1],[2351,2352,1],[2352,975,1],[635,2353,1],[2353,2354,1],[2354,2355,1],[2355,2356,1],[2356,2357,1],[2357,2358,1],[2358,2359,1],[2359,2360,1],[2360,2361,1],[2361,2362,1],[2362,2363,1],[2363,2364,1],[2364,2365,1],[2365,2366,1],[2366,2367,1],[2367,2368,1],[2368,2369,1],[2369,2370,1],[2370,2371,1],[2371,1546,1],[635,2372,1],[2372,2373,1],[2373,2374,1],[2374,2375,1],[2375,2376,1],[2376,1814,1],[1283,2377,1],[2377,2378,1],[2378,2379,1],[2379,2380,1],[2380,2381,1],[2381,2382,1],[2382,2383,1],[2383,2384,1],[2384,2385,1],[2385,1076,1],[1374,2386,1],[2386,2387,1],[2387,2388,1],[2388,2389,1],[2389,2390,1],[2390,2391,1],[2391,2392,1],[2392,2393,1],[2393,2394,1],[2394,2395,1],[2395,2004,1]]};
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
 return ({Max:'--main',InterCity:'--main',VIA:'--via',Nightline:'--night'})[type]||null;
}
function rrCssServiceAccent(type){
 const token=rrServiceAccentToken(type);
 return token?`var(${token})`:RR_UI_CSS_COLOR('--ink-strong');
}
function rrCssWhiteTextFill(type){
 // Only for a filled badge with white lettering. No change to the
 // theme's shared text, route, outline, marker or logo accent.
 const token=({Max:'--rr-fill-main',InterCity:'--rr-fill-main',
  VIA:'--rr-fill-via',Nightline:'--rr-fill-night'})[type];
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
function pathsByType(){const h=[],m=[];const g=[];for(const [a,b,t] of E){const d=`M${P[a][0]} ${P[a][1]}L${P[b][0]} ${P[b][1]}`;(t===2?g:t?h:m).push(d)}$('regioTrack').setAttribute('d',g.join(' '));$('hslTrack').setAttribute('d',h.join(' '));$('mlTrack').setAttribute('d',m.join(' '))}

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
  row.innerHTML=`<span class="row-time">${stopTimeMarkup(t,t.hereIndex)}</span><span class="service${t.type==='InterCity'?' rr-ic-outline':''}">${t.id}</span><span><span class="dest">${isArrival?t.origin:t.dest}</span><span class="rowstatus">${statusTag(rrBoardStatus(t,isArrival))}${rrAlertFlag(t)}</span></span><span class="platform">${rrBoardPlatform(t,currentStation)}</span>`;
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
 const backButton=returnTrain?`<button type="button" class="back-to-train" id="backToTrain" aria-label="Back to train ${returnTrain.train.id}"><span aria-hidden="true"><svg class="rr-arrow-icon" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><use href="#rr-picto-arrow-left"></use></svg></span><span>Back to</span><span class="service${returnTrain.train.type==='InterCity'?' rr-ic-outline':''}" style="--service-color:${rrCssServiceAccent(returnTrain.train.type)};--rr-white-text-fill:${rrCssWhiteTextFill(returnTrain.train.type)}">${returnTrain.train.id}</span></button>`:returnJourney?`<button type="button" class="back-to-train" id="backToJourney"><span aria-hidden="true"><svg class="rr-arrow-icon" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><use href="#rr-picto-arrow-left"></use></svg></span><span>Back to journey</span></button>`:'';
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
const RR_FORMATIONS={"M8":{"key":"M8","name":"RR Max · M8","category":"Max","desc":"Shorter high-speed formation · 8-car EMU","cars":[{"role":"Standard","features":["luggage","cycle"],"detail":"Driving cab · luggage and bicycle spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Step-free wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler","baby"],"detail":"Family area · toddler space"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Café","features":["cafe"],"detail":"Café counter"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["quiet","first"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"All cars carry passengers. Driving cabs are part of coaches 1 and 8.","highlight":7},"M12":{"key":"M12","name":"RR Max · M12","category":"Max","desc":"Long-distance high-speed formation · 12-car EMU","cars":[{"role":"Standard","features":["luggage","cycle"],"detail":"Driving cab · luggage and bicycle spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair and priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler","baby"],"detail":"Family area · toddler space"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Dining","features":["restaurant"],"detail":"Dining coach with restaurant seating"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first"],"detail":"First Class"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"No dedicated traction heads. The selected coach in the reference example is Coach 11.","highlight":10},"V8":{"key":"V8","name":"RR Via · V8","category":"Via","desc":"High-speed formation · 8-car EMU","cars":[{"role":"Standard","features":["luggage"],"detail":"Standard · driving cab"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair and priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler"],"detail":"Family area and toddler compartment"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Café","features":["cafe"],"detail":"Café"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"Via retains its own magenta identification; no non-passenger power head.","highlight":7},"V10":{"key":"V10","name":"RR Via · V10","category":"Via","desc":"Extended high-speed formation · 10-car EMU","cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Standard · driving cab, bicycle spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair and priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler"],"detail":"Family / toddler area"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Café","features":["cafe"],"detail":"Café"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"Long Via services can use V10 in place of V8.","highlight":9},"IC10":{"key":"IC10","name":"RR InterCity · IC10","category":"InterCity","desc":"Locomotive + 10 passenger coaches","cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Bicycles and luggage"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler"],"detail":"Family / toddler area"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Dining","features":["restaurant"],"detail":"Restaurant / dining"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first"],"detail":"First Class"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"}],"power":"LOCO","notes":"One separate locomotive, no passenger number; can work in reverse direction.","highlight":9},"IC10P":{"key":"IC10P","name":"RR InterCity · IC10-P","category":"InterCity","desc":"2 non-passenger power cars + 10 passenger coaches","cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Bicycle and luggage spaces"},{"role":"Standard","features":["wheelchair","accessible-toilet"],"detail":"Wheelchair accommodation · accessible toilet"},{"role":"Standard","features":["priority-seat"],"detail":"Priority seating"},{"role":"Standard","features":["family","toddler"],"detail":"Family / toddler area"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Café","features":["cafe"],"detail":"Café counter"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first"],"detail":"First Class"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"}],"power":"POWER","notes":"Two dedicated power heads are unnumbered and have no passenger amenities.","highlight":9},"NL11":{"key":"NL11","name":"RR Nightline · NL11","category":"Nightline","desc":"Locomotive + 11 passenger coaches","cars":[{"role":"Seated","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Accessible seated coach · priority seating"},{"role":"Seated","features":["quiet","reserved-seat"],"detail":"Reserved seats · Quiet Zone"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Café","features":["cafe"],"detail":"Night catering"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleepers with showers"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleepers with showers"}],"power":"LOCO","notes":"Seated accommodation, couchettes and sleeper classes remain distinct.","highlight":10},"NL9P":{"key":"NL9P","name":"RR Nightline · NL9-P","category":"Nightline","desc":"2 non-passenger power cars + 9 passenger coaches","cars":[{"role":"Seated","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Accessible seated coach · priority seating"},{"role":"Seated","features":["quiet","reserved-seat"],"detail":"Quiet seated coach"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleeper with shower"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleeper with shower"}],"power":"POWER","notes":"No separate locomotive: unnumbered power cars at both ends.","highlight":8}};
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
 return RR_DUPLEX_FORMATIONS.has(form.key)&&rrHighPatronageProxy(train);
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

 return `<section class="rr-formation" style="--rr-direction-color:${color}" data-rr-form="${form.key}" data-rr-train="${t.id}">
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
 detail.innerHTML=`<div class="train-hero" style="--service-color:${rrCssServiceAccent(t.type)};--rr-white-text-fill:${rrCssWhiteTextFill(t.type)}"><div class="train-hero-top"><div class="service-title"><div class="train-number${t.type==='InterCity'?' rr-ic-outline':''}">${t.id}</div></div><div class="train-departure"><div class="depart-time">${stopTimeMarkup(t,here)}</div><div class="depart-label">${isArrival?'Arrival':'Departure'}</div></div></div><div class="destination-label">${isArrival?'From':'To'}</div><div class="service-dest">${isArrival?t.origin:t.dest}</div></div>${rrAlertMarkup(t,'rr-alert-banner')}<dl class="info-grid" aria-label="Train information"><div class="fact-row"><dt class="keylabel">Platform</dt><dd class="infoval">${rrBoardPlatform(t,currentStation)}</dd></div><div class="fact-row"><dt class="keylabel">Status</dt><dd class="infoval">${statusTag(stopStatus(t,here))}</dd></div><div class="fact-row"><dt class="keylabel">Service</dt><dd class="infoval">${rrServiceLabel(t.type)}</dd></div><div class="fact-row"><dt class="keylabel">Origin</dt><dd class="infoval">${t.origin}</dd></div></dl><div class="stops-heading">Calling at</div><div class="stop-list${here>0?' is-en-route':''}${delayMinutes(t.status)?' has-disruptions':''}" style="--route:${rrCssServiceAccent(t.type)};--route-travelled:${rrCssTravelAccent(t.type)}">${stops}</div>${rrCoachFormation(t)}`;
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
  const radius=selected?5.8:(important?4.7:3.2),g=se('g',{'data-station':s.name});
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
  const dirs=[preferredSide,opposing,preferredSide+'N',opposing+'N',preferredSide+'S',opposing+'S','N','S'];
  let chosen=null;
  for(const gap of [7,10,14,19]){
   if(chosen)break;
   for(const dir of dirs){
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
 const old=zoom,next=Math.max(1,Math.min(4.5,old*factor));
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
 zoom=Math.max(1,Math.min(4.5,targetScale/fit));
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
  const badges=j.legs.map(l=>`<span class="service${l.train.type==='InterCity'?' rr-ic-outline':''}" style="--service-color:${rrCssServiceAccent(l.train.type)};--rr-white-text-fill:${rrCssWhiteTextFill(l.train.type)}">${l.train.id}</span>`).join('');
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
   <h3 class="jt-card-head"><span class="service${t.type==='InterCity'?' rr-ic-outline':''}" style="--service-color:${rrCssServiceAccent(t.type)};--rr-white-text-fill:${rrCssWhiteTextFill(t.type)}">${t.id}</span><span class="jt-service">${rrServiceLabel(t.type)}</span>${statusTag(stopStatus(t,leg.fromIdx))}</h3>${rrAlertMarkup(t,'rr-alert-banner rr-alert-leg')}
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
