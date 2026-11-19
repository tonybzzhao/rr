'use strict';
const STATIONS=[{"name":"Stanwell","x":1440,"y":3570,"attach":[1440,3570],"regio":1},{"name":"Medway Airport","x":1440,"y":3540,"attach":[1440.0,3540.0]},{"name":"Eastden","x":1440,"y":3555,"attach":[1440.0,3555.0],"regio":1},{"name":"Millholme Junction","x":1440,"y":3600,"attach":[1440.0,3600.0],"regio":1},{"name":"Holmford Junction","x":1440,"y":3585,"attach":[1440.0,3585.0],"regio":1},{"name":"Hawbrook Junction","x":1448,"y":3584,"attach":[1447.89,3584.46],"regio":1},{"name":"Birchsted","x":1455,"y":3599,"attach":[1454.86,3599.2],"regio":1},{"name":"Warley","x":1320,"y":3210,"attach":[1320,3210],"regio":1},{"name":"Melbridge Central","x":1290,"y":3120,"attach":[1290.0,3120.0]},{"name":"Melsted","x":1314,"y":3204,"attach":[1313.56,3203.56],"regio":1},{"name":"Thornworth","x":1307,"y":3197,"attach":[1307.11,3197.11],"regio":1},{"name":"Thurlthorpe","x":1301,"y":3190,"attach":[1301.09,3190.29],"regio":1},{"name":"Newthwaite","x":1296,"y":3183,"attach":[1296.07,3182.74],"regio":1},{"name":"Chalfield","x":1293,"y":3174,"attach":[1292.54,3174.39],"regio":1},{"name":"Goldwell","x":1291,"y":3166,"attach":[1290.62,3165.53],"regio":1},{"name":"Kirkford","x":1290,"y":3156,"attach":[1290.0,3156.45],"regio":1},{"name":"Larkhurst","x":1290,"y":3147,"attach":[1290.0,3147.33],"regio":1},{"name":"Sandcote","x":1290,"y":3138,"attach":[1290.0,3138.22],"regio":1},{"name":"Oakthwaite","x":1290,"y":3129,"attach":[1290.0,3129.11],"regio":1},{"name":"Stowsted","x":1380,"y":3480,"attach":[1380.0,3480.0],"regio":1},{"name":"Blackcote","x":1320,"y":3224,"attach":[1320.0,3223.92],"regio":1},{"name":"Dunstow","x":1320,"y":3238,"attach":[1320.0,3237.84],"regio":1},{"name":"Thorndale","x":1320,"y":3252,"attach":[1320.0,3251.77],"regio":1},{"name":"Warbridge","x":1320,"y":3266,"attach":[1320.0,3265.69],"regio":1},{"name":"Newminster","x":1320,"y":3280,"attach":[1320.0,3279.61],"regio":1},{"name":"Blackden","x":1320,"y":3294,"attach":[1320.0,3293.53],"regio":1},{"name":"Heaththorpe","x":1320,"y":3307,"attach":[1320.0,3307.45],"regio":1},{"name":"Highmore","x":1320,"y":3321,"attach":[1320.0,3321.38],"regio":1},{"name":"Grimsmore","x":1320,"y":3335,"attach":[1320.0,3335.3],"regio":1},{"name":"Ulverstow","x":1320,"y":3349,"attach":[1320.0,3349.22],"regio":1},{"name":"Cherrywell","x":1320,"y":3363,"attach":[1320.0,3363.14],"regio":1},{"name":"Elmstow","x":1320,"y":3377,"attach":[1320.0,3377.06],"regio":1},{"name":"Larkminster","x":1320,"y":3391,"attach":[1320.0,3390.99],"regio":1},{"name":"Saxethwaite","x":1321,"y":3405,"attach":[1320.81,3404.87],"regio":1},{"name":"Wakeholme","x":1324,"y":3418,"attach":[1324.28,3418.31],"regio":1},{"name":"Stowdale","x":1331,"y":3430,"attach":[1331.37,3430.24],"regio":1},{"name":"Swanford","x":1341,"y":3441,"attach":[1340.62,3440.62],"regio":1},{"name":"Leamore","x":1350,"y":3450,"attach":[1350.47,3450.47],"regio":1},{"name":"Brentwick","x":1360,"y":3460,"attach":[1360.31,3460.31],"regio":1},{"name":"Leadale","x":1370,"y":3470,"attach":[1370.16,3470.16],"regio":1},{"name":"Ashhurst","x":1410,"y":3270,"attach":[1410.0,3270.0],"regio":1},{"name":"Wickton","x":1326,"y":3216,"attach":[1326.16,3216.16],"regio":1},{"name":"Larkcombe","x":1332,"y":3222,"attach":[1332.33,3222.33],"regio":1},{"name":"Little Lynwick","x":1338,"y":3228,"attach":[1338.49,3228.49],"regio":1},{"name":"Silmere","x":1345,"y":3235,"attach":[1344.65,3234.65],"regio":1},{"name":"Redworth","x":1351,"y":3241,"attach":[1350.81,3240.81],"regio":1},{"name":"Thorngate","x":1357,"y":3247,"attach":[1356.98,3246.98],"regio":1},{"name":"Newbrook","x":1363,"y":3253,"attach":[1363.14,3253.14],"regio":1},{"name":"Fenmore","x":1369,"y":3259,"attach":[1369.3,3259.3],"regio":1},{"name":"Bramwick","x":1376,"y":3265,"attach":[1376.14,3264.67],"regio":1},{"name":"Ryested","x":1384,"y":3268,"attach":[1384.05,3268.23],"regio":1},{"name":"Millstow","x":1393,"y":3270,"attach":[1392.58,3269.78],"regio":1},{"name":"Blackton","x":1401,"y":3270,"attach":[1401.28,3270.0],"regio":1},{"name":"Wardour","x":1650,"y":3570,"attach":[1650,3570]},{"name":"Beckthorpe","x":1650,"y":3450,"attach":[1650.0,3450.0],"regio":1},{"name":"Holmden","x":1650,"y":3546,"attach":[1650.0,3546.0],"regio":1},{"name":"Quarrley","x":1650,"y":3522,"attach":[1650.0,3522.0],"regio":1},{"name":"Fernwood","x":1650,"y":3498,"attach":[1650.0,3498.0],"regio":1},{"name":"Hunford","x":1650,"y":3474,"attach":[1650.0,3474.0],"regio":1},{"name":"Eastthorpe","x":1650,"y":3720,"attach":[1650.0,3720.0],"regio":1},{"name":"Wingate","x":1650,"y":3579,"attach":[1650.0,3579.38],"regio":1},{"name":"Warham","x":1650,"y":3589,"attach":[1650.0,3588.75],"regio":1},{"name":"Swanwick","x":1650,"y":3598,"attach":[1650.0,3598.12],"regio":1},{"name":"Ryeby","x":1650,"y":3608,"attach":[1650.0,3607.5],"regio":1},{"name":"Moorwood","x":1650,"y":3617,"attach":[1650.0,3616.88],"regio":1},{"name":"Todfield","x":1650,"y":3626,"attach":[1650.0,3626.25],"regio":1},{"name":"Swanthwaite","x":1650,"y":3636,"attach":[1650.0,3635.62],"regio":1},{"name":"Hartwood","x":1650,"y":3645,"attach":[1650.0,3645.0],"regio":1},{"name":"Hawcote","x":1650,"y":3654,"attach":[1650.0,3654.38],"regio":1},{"name":"Fenholme","x":1650,"y":3664,"attach":[1650.0,3663.75],"regio":1},{"name":"Saxecote","x":1650,"y":3673,"attach":[1650.0,3673.12],"regio":1},{"name":"Walholme","x":1650,"y":3682,"attach":[1650.0,3682.5],"regio":1},{"name":"Burnbrook","x":1650,"y":3692,"attach":[1650.0,3691.88],"regio":1},{"name":"Beckthwaite","x":1650,"y":3701,"attach":[1650.0,3701.25],"regio":1},{"name":"Willowmere","x":1650,"y":3711,"attach":[1650.0,3710.62],"regio":1},{"name":"Crowfield Junction","x":1680,"y":3450,"attach":[1680.0,3450.0],"regio":1},{"name":"Highford","x":1650,"y":3559,"attach":[1650.0,3559.15],"regio":1},{"name":"Dundale","x":1650,"y":3548,"attach":[1650.0,3548.3],"regio":1},{"name":"Fernfield","x":1650,"y":3537,"attach":[1650.0,3537.44],"regio":1},{"name":"Walstead","x":1650,"y":3527,"attach":[1650.0,3526.59],"regio":1},{"name":"Brookbury","x":1650,"y":3516,"attach":[1650.0,3515.74],"regio":1},{"name":"Southmere","x":1650,"y":3505,"attach":[1650.0,3504.89],"regio":1},{"name":"Fairgate","x":1651,"y":3494,"attach":[1650.66,3494.07],"regio":1},{"name":"Longden","x":1653,"y":3484,"attach":[1653.16,3483.55],"regio":1},{"name":"Malmere","x":1658,"y":3474,"attach":[1657.92,3473.84],"regio":1},{"name":"Melby","x":1665,"y":3465,"attach":[1664.69,3465.38],"regio":1},{"name":"Longbrook","x":1672,"y":3458,"attach":[1672.33,3457.67],"regio":1},{"name":"Silcote","x":1650,"y":3480,"attach":[1650.0,3480.0],"regio":1},{"name":"Oakholme","x":1650,"y":3548,"attach":[1650.0,3547.5],"regio":1},{"name":"Longham","x":1650,"y":3525,"attach":[1650.0,3525.0],"regio":1},{"name":"Quarrbridge","x":1650,"y":3502,"attach":[1650.0,3502.5],"regio":1},{"name":"Ashcombe","x":1710,"y":3180,"attach":[1710,3180],"regio":1},{"name":"Oakmouth","x":1620,"y":3090,"attach":[1620.0,3090.0]},{"name":"Millsted","x":1704,"y":3174,"attach":[1704.38,3174.38],"regio":1},{"name":"Penstead","x":1699,"y":3169,"attach":[1698.75,3168.75],"regio":1},{"name":"Blackbrook","x":1693,"y":3163,"attach":[1693.12,3163.12],"regio":1},{"name":"Chalstead","x":1688,"y":3158,"attach":[1687.5,3157.5],"regio":1},{"name":"Millwood","x":1682,"y":3152,"attach":[1681.88,3151.88],"regio":1},{"name":"Woodstow","x":1676,"y":3146,"attach":[1676.25,3146.25],"regio":1},{"name":"Oldton","x":1671,"y":3141,"attach":[1670.62,3140.62],"regio":1},{"name":"Fenden","x":1665,"y":3135,"attach":[1665.0,3135.0],"regio":1},{"name":"Whitham","x":1659,"y":3129,"attach":[1659.38,3129.38],"regio":1},{"name":"Sutgate","x":1654,"y":3124,"attach":[1653.75,3123.75],"regio":1},{"name":"Fernstead","x":1648,"y":3118,"attach":[1648.12,3118.12],"regio":1},{"name":"Eastcombe","x":1642,"y":3112,"attach":[1642.5,3112.5],"regio":1},{"name":"Marwood","x":1637,"y":3107,"attach":[1636.88,3106.88],"regio":1},{"name":"Ashbrook","x":1631,"y":3101,"attach":[1631.25,3101.25],"regio":1},{"name":"Elmdale","x":1626,"y":3096,"attach":[1625.62,3095.62],"regio":1},{"name":"Victoria Central","x":1680,"y":3390,"attach":[1680.0,3390.0]},{"name":"Chalden","x":1691,"y":3200,"attach":[1690.96,3199.85],"regio":1},{"name":"Cherryminster","x":1681,"y":3225,"attach":[1680.58,3224.86],"regio":1},{"name":"Kirkcote","x":1680,"y":3252,"attach":[1680.0,3252.36],"regio":1},{"name":"Lower Ryested","x":1680,"y":3280,"attach":[1680.0,3279.89],"regio":1},{"name":"Blackholme","x":1680,"y":3307,"attach":[1680.0,3307.42],"regio":1},{"name":"Barkwell","x":1680,"y":3335,"attach":[1680.0,3334.94],"regio":1},{"name":"Kirkby","x":1680,"y":3362,"attach":[1680.0,3362.47],"regio":1},{"name":"Salbrook","x":1650,"y":3270,"attach":[1650.0,3270.0],"regio":1},{"name":"Leawood","x":1703,"y":3187,"attach":[1702.72,3187.28],"regio":1},{"name":"Warford","x":1695,"y":3195,"attach":[1695.43,3194.57],"regio":1},{"name":"Hartstow","x":1688,"y":3202,"attach":[1688.15,3201.85],"regio":1},{"name":"Faircote","x":1681,"y":3209,"attach":[1680.87,3209.13],"regio":1},{"name":"Hartwick","x":1674,"y":3216,"attach":[1673.59,3216.41],"regio":1},{"name":"Kirkdale","x":1666,"y":3224,"attach":[1666.3,3223.7],"regio":1},{"name":"Bradby","x":1659,"y":3231,"attach":[1659.17,3231.12],"regio":1},{"name":"Moorsted","x":1653,"y":3240,"attach":[1653.45,3239.62],"regio":1},{"name":"Fairbridge","x":1651,"y":3249,"attach":[1650.51,3249.42],"regio":1},{"name":"Leabury","x":1650,"y":3260,"attach":[1650.0,3259.7],"regio":1},{"name":"Longcombe","x":1620,"y":3210,"attach":[1620.0,3210.0],"regio":1},{"name":"Brookdale","x":1700,"y":3180,"attach":[1699.98,3180.0],"regio":1},{"name":"Grimsbury","x":1690,"y":3180,"attach":[1689.95,3180.0],"regio":1},{"name":"Bramthwaite","x":1680,"y":3180,"attach":[1679.93,3180.0],"regio":1},{"name":"Larkthwaite","x":1670,"y":3180,"attach":[1669.92,3180.12],"regio":1},{"name":"Yarford","x":1660,"y":3181,"attach":[1659.97,3181.24],"regio":1},{"name":"Oakgate","x":1650,"y":3184,"attach":[1650.47,3184.34],"regio":1},{"name":"Salcote","x":1642,"y":3189,"attach":[1641.81,3189.34],"regio":1},{"name":"Fenby","x":1634,"y":3196,"attach":[1634.17,3195.83],"regio":1},{"name":"Woldbury","x":1627,"y":3203,"attach":[1627.09,3202.91],"regio":1},{"name":"Millley","x":1707,"y":3192,"attach":[1707.08,3191.68],"regio":1},{"name":"Birchton","x":1704,"y":3203,"attach":[1704.16,3203.37],"regio":1},{"name":"Long Yarwood","x":1700,"y":3215,"attach":[1699.8,3214.58],"regio":1},{"name":"Wakebrook","x":1691,"y":3222,"attach":[1690.52,3221.82],"regio":1},{"name":"Thurlham","x":1679,"y":3223,"attach":[1678.76,3222.96],"regio":1},{"name":"Beckton","x":1667,"y":3221,"attach":[1666.94,3220.83],"regio":1},{"name":"Heathsted","x":1655,"y":3218,"attach":[1655.2,3218.12],"regio":1},{"name":"Brentwell","x":1643,"y":3215,"attach":[1643.47,3215.42],"regio":1},{"name":"Fairthwaite","x":1632,"y":3213,"attach":[1631.73,3212.71],"regio":1},{"name":"Chungsia","x":1710,"y":1500,"attach":[1710,1500]},{"name":"Hantsin","x":1710,"y":1560,"attach":[1710.0,1560.0]},{"name":"Peiting Central","x":1260,"y":1560,"attach":[1260.0,1560.0]},{"name":"Sianning","x":1592,"y":1500,"attach":[1591.91,1500.0]},{"name":"Songqiao Airport","x":1474,"y":1500,"attach":[1473.82,1500.0]},{"name":"Quanguan","x":1356,"y":1500,"attach":[1355.73,1500.0]},{"name":"Yenchia Main","x":1740,"y":1230,"attach":[1740.0,1230.0]},{"name":"North Chungsia","x":1710,"y":1430,"attach":[1710.0,1429.94]},{"name":"Pu’an","x":1710,"y":1360,"attach":[1710.0,1359.89]},{"name":"Linhai-Pu’an","x":1710,"y":1290,"attach":[1710.0,1289.83]},{"name":"Hengchu","x":1770,"y":1470,"attach":[1770.0,1470.0]},{"name":"Farinport Central","x":540,"y":2100,"attach":[540,2100]},{"name":"Amptonside Central","x":690,"y":2100,"attach":[690.0,2100.0]},{"name":"Alderford Airport","x":615,"y":2100,"attach":[615.0,2100.0]},{"name":"Willowbury","x":1590,"y":3450,"attach":[1590,3450],"regio":1},{"name":"Foxstead Junction","x":1590,"y":3450,"attach":[1590,3450],"regio":1},{"name":"Hunton","x":1620,"y":3450,"attach":[1620.0,3450.0],"regio":1},{"name":"Stockmere","x":1650,"y":3450,"attach":[1650.0,3450.0],"regio":1},{"name":"Kings Hawgate","x":1602,"y":3450,"attach":[1602.0,3450.0],"regio":1},{"name":"Thurlcote","x":1614,"y":3450,"attach":[1614.0,3450.0],"regio":1},{"name":"Birchcote","x":1626,"y":3450,"attach":[1626.0,3450.0],"regio":1},{"name":"Grimssted","x":1638,"y":3450,"attach":[1638.0,3450.0],"regio":1},{"name":"Salfield","x":1500,"y":3090,"attach":[1500,3090],"regio":1},{"name":"Burnminster Junction","x":1290,"y":3120,"attach":[1290.0,3120.0],"regio":1},{"name":"Cherrymore","x":1493,"y":3097,"attach":[1492.92,3097.08],"regio":1},{"name":"Fenmere","x":1486,"y":3104,"attach":[1485.84,3104.16],"regio":1},{"name":"Ulverholme","x":1478,"y":3111,"attach":[1478.22,3110.64],"regio":1},{"name":"Ulverthorpe","x":1470,"y":3116,"attach":[1469.58,3115.64],"regio":1},{"name":"Thornmere","x":1460,"y":3119,"attach":[1460.08,3118.74],"regio":1},{"name":"Crowbrook","x":1450,"y":3120,"attach":[1450.16,3119.87],"regio":1},{"name":"Willowwick","x":1440,"y":3120,"attach":[1440.15,3120.0],"regio":1},{"name":"Heathholme","x":1430,"y":3120,"attach":[1430.14,3120.0],"regio":1},{"name":"Ulverhurst","x":1420,"y":3120,"attach":[1420.13,3120.0],"regio":1},{"name":"Longcote","x":1410,"y":3120,"attach":[1410.12,3120.0],"regio":1},{"name":"Hawmore","x":1400,"y":3120,"attach":[1400.11,3120.0],"regio":1},{"name":"Barkton","x":1390,"y":3120,"attach":[1390.1,3120.0],"regio":1},{"name":"Newstead","x":1380,"y":3120,"attach":[1380.09,3120.0],"regio":1},{"name":"Claybrook","x":1370,"y":3120,"attach":[1370.08,3120.0],"regio":1},{"name":"Foxcote","x":1360,"y":3120,"attach":[1360.07,3120.0],"regio":1},{"name":"Chalminster","x":1350,"y":3120,"attach":[1350.06,3120.0],"regio":1},{"name":"Coldham","x":1340,"y":3120,"attach":[1340.05,3120.0],"regio":1},{"name":"Elmmere","x":1330,"y":3120,"attach":[1330.04,3120.0],"regio":1},{"name":"Goldsted","x":1320,"y":3120,"attach":[1320.03,3120.0],"regio":1},{"name":"Rookwell","x":1310,"y":3120,"attach":[1310.02,3120.0],"regio":1},{"name":"Hunwood","x":1300,"y":3120,"attach":[1300.01,3120.0],"regio":1},{"name":"Lynstow","x":1511,"y":3090,"attach":[1510.91,3090.0],"regio":1},{"name":"Woodhurst","x":1522,"y":3090,"attach":[1521.82,3090.0],"regio":1},{"name":"Rookhurst","x":1533,"y":3090,"attach":[1532.73,3090.0],"regio":1},{"name":"Leathwaite","x":1544,"y":3090,"attach":[1543.64,3090.0],"regio":1},{"name":"Todmere","x":1555,"y":3090,"attach":[1554.55,3090.0],"regio":1},{"name":"Beckdale","x":1565,"y":3090,"attach":[1565.45,3090.0],"regio":1},{"name":"Newthorpe","x":1576,"y":3090,"attach":[1576.36,3090.0],"regio":1},{"name":"Chalcote","x":1587,"y":3090,"attach":[1587.27,3090.0],"regio":1},{"name":"Goldbrook","x":1598,"y":3090,"attach":[1598.18,3090.0],"regio":1},{"name":"Ashfield","x":1609,"y":3090,"attach":[1609.09,3090.0],"regio":1},{"name":"Whitbury","x":1500,"y":3240,"attach":[1500.0,3240.0],"regio":1},{"name":"Wykebury","x":1500,"y":3102,"attach":[1500.0,3102.5],"regio":1},{"name":"Penby","x":1500,"y":3115,"attach":[1500.0,3115.0],"regio":1},{"name":"Swanstow","x":1500,"y":3128,"attach":[1500.0,3127.5],"regio":1},{"name":"Ryebridge","x":1500,"y":3140,"attach":[1500.0,3140.0],"regio":1},{"name":"Bradstead","x":1500,"y":3152,"attach":[1500.0,3152.5],"regio":1},{"name":"Silham","x":1500,"y":3165,"attach":[1500.0,3165.0],"regio":1},{"name":"Ormwick","x":1500,"y":3178,"attach":[1500.0,3177.5],"regio":1},{"name":"Kings Wickden","x":1500,"y":3190,"attach":[1500.0,3190.0],"regio":1},{"name":"Southham","x":1500,"y":3202,"attach":[1500.0,3202.5],"regio":1},{"name":"Ulverbury","x":1500,"y":3215,"attach":[1500.0,3215.0],"regio":1},{"name":"Heaththwaite","x":1500,"y":3228,"attach":[1500.0,3227.5],"regio":1},{"name":"Northwell","x":1503,"y":3105,"attach":[1502.92,3105.07],"regio":1},{"name":"Chalstow","x":1506,"y":3120,"attach":[1505.83,3120.14],"regio":1},{"name":"Hartstead","x":1509,"y":3135,"attach":[1508.75,3135.21],"regio":1},{"name":"Southcote","x":1512,"y":3150,"attach":[1511.67,3150.28],"regio":1},{"name":"Coldminster","x":1514,"y":3165,"attach":[1514.22,3165.41],"regio":1},{"name":"Ormmere","x":1515,"y":3181,"attach":[1515.04,3180.7],"regio":1},{"name":"Redby","x":1513,"y":3196,"attach":[1513.27,3195.92],"regio":1},{"name":"Netherthwaite","x":1509,"y":3211,"attach":[1509.24,3210.73],"regio":1},{"name":"Saxeminster","x":1505,"y":3225,"attach":[1504.62,3225.36],"regio":1},{"name":"Leaminster","x":1650,"y":3930,"attach":[1650,3930],"regio":1},{"name":"Marlbury","x":1650,"y":3870,"attach":[1650.0,3870.0]},{"name":"Cherrystow","x":1650,"y":3918,"attach":[1650.0,3918.0],"regio":1},{"name":"Stockbridge","x":1650,"y":3906,"attach":[1650.0,3906.0],"regio":1},{"name":"Elmbury","x":1650,"y":3894,"attach":[1650.0,3894.0],"regio":1},{"name":"Blackdale","x":1650,"y":3882,"attach":[1650.0,3882.0],"regio":1},{"name":"Atlantic Airport","x":1620,"y":3930,"attach":[1620.0,3930.0]},{"name":"Willowholme","x":1650,"y":3921,"attach":[1650.0,3921.25],"regio":1},{"name":"Claystead","x":1650,"y":3912,"attach":[1650.0,3912.5],"regio":1},{"name":"Brentmore","x":1650,"y":3904,"attach":[1650.0,3903.75],"regio":1},{"name":"Grimswick","x":1650,"y":3895,"attach":[1650.0,3895.0],"regio":1},{"name":"Ashcote","x":1650,"y":3886,"attach":[1650.0,3886.25],"regio":1},{"name":"Highham","x":1650,"y":3878,"attach":[1650.0,3877.5],"regio":1},{"name":"Yarby","x":1650,"y":3869,"attach":[1650.0,3868.75],"regio":1},{"name":"Silwick","x":1650,"y":3860,"attach":[1650.0,3860.0],"regio":1},{"name":"Redham","x":1650,"y":3851,"attach":[1650.0,3851.25],"regio":1},{"name":"Thornmore","x":1650,"y":3842,"attach":[1650.0,3842.5],"regio":1},{"name":"Long Crowwick","x":1650,"y":3834,"attach":[1650.0,3833.75],"regio":1},{"name":"Meldale","x":1650,"y":3825,"attach":[1650.0,3825.0],"regio":1},{"name":"Wakefield","x":1650,"y":3816,"attach":[1650.0,3816.25],"regio":1},{"name":"Sutmere","x":1650,"y":3808,"attach":[1650.0,3807.5],"regio":1},{"name":"Marfield","x":1650,"y":3799,"attach":[1650.0,3798.75],"regio":1},{"name":"Ormwell","x":1650,"y":3790,"attach":[1650.0,3790.0],"regio":1},{"name":"Holmholme","x":1650,"y":3781,"attach":[1650.0,3781.25],"regio":1},{"name":"Cherrycombe","x":1650,"y":3772,"attach":[1650.0,3772.5],"regio":1},{"name":"Redden","x":1650,"y":3764,"attach":[1650.0,3763.75],"regio":1},{"name":"Saxecombe","x":1650,"y":3755,"attach":[1650.0,3755.0],"regio":1},{"name":"Kirkfield","x":1650,"y":3746,"attach":[1650.0,3746.25],"regio":1},{"name":"Weswell","x":1650,"y":3738,"attach":[1650.0,3737.5],"regio":1},{"name":"Thurlden","x":1650,"y":3729,"attach":[1650.0,3728.75],"regio":1},{"name":"Swanbrook","x":1470,"y":3930,"attach":[1470.0,3930.0],"regio":1},{"name":"Elmwick","x":1640,"y":3930,"attach":[1640.0,3930.0],"regio":1},{"name":"Shepthwaite","x":1630,"y":3930,"attach":[1630.0,3930.0],"regio":1},{"name":"Great Foxley","x":1620,"y":3930,"attach":[1620.0,3930.0],"regio":1},{"name":"Oakdale","x":1610,"y":3930,"attach":[1610.0,3930.0],"regio":1},{"name":"Yarcote","x":1600,"y":3930,"attach":[1600.0,3930.0],"regio":1},{"name":"Ashford","x":1590,"y":3930,"attach":[1590.0,3930.0],"regio":1},{"name":"Hunwell","x":1580,"y":3930,"attach":[1580.0,3930.0],"regio":1},{"name":"Goldden","x":1570,"y":3930,"attach":[1570.0,3930.0],"regio":1},{"name":"Stockthwaite","x":1560,"y":3930,"attach":[1560.0,3930.0],"regio":1},{"name":"Kirkhurst","x":1550,"y":3930,"attach":[1550.0,3930.0],"regio":1},{"name":"Langfield","x":1540,"y":3930,"attach":[1540.0,3930.0],"regio":1},{"name":"Lynthwaite","x":1530,"y":3930,"attach":[1530.0,3930.0],"regio":1},{"name":"Clayfield","x":1520,"y":3930,"attach":[1520.0,3930.0],"regio":1},{"name":"Winton","x":1510,"y":3930,"attach":[1510.0,3930.0],"regio":1},{"name":"Bramsted","x":1500,"y":3930,"attach":[1500.0,3930.0],"regio":1},{"name":"Ormton","x":1490,"y":3930,"attach":[1490.0,3930.0],"regio":1},{"name":"Barkwick","x":1480,"y":3930,"attach":[1480.0,3930.0],"regio":1},{"name":"Chalbrook Junction","x":1650,"y":3870,"attach":[1650.0,3870.0],"regio":1},{"name":"Brentby","x":1656,"y":3926,"attach":[1656.45,3925.7],"regio":1},{"name":"Goldham","x":1663,"y":3921,"attach":[1662.52,3920.9],"regio":1},{"name":"Goldton","x":1665,"y":3914,"attach":[1665.17,3913.8],"regio":1},{"name":"Malden","x":1664,"y":3906,"attach":[1663.61,3906.29],"regio":1},{"name":"Highley","x":1661,"y":3899,"attach":[1660.89,3899.03],"regio":1},{"name":"Walbury","x":1658,"y":3892,"attach":[1658.17,3891.77],"regio":1},{"name":"Woodbrook","x":1655,"y":3885,"attach":[1655.44,3884.52],"regio":1},{"name":"Wykested","x":1653,"y":3877,"attach":[1652.72,3877.26],"regio":1},{"name":"Waketon","x":1320,"y":2940,"attach":[1320,2940],"regio":1},{"name":"Stockmore","x":1470,"y":2940,"attach":[1470.0,2940.0],"regio":1},{"name":"Northminster","x":1331,"y":2940,"attach":[1330.71,2940.0],"regio":1},{"name":"Hunhurst","x":1341,"y":2940,"attach":[1341.43,2940.0],"regio":1},{"name":"Melgate","x":1352,"y":2940,"attach":[1352.14,2940.0],"regio":1},{"name":"Yarmore","x":1363,"y":2940,"attach":[1362.86,2940.0],"regio":1},{"name":"Wakeham","x":1374,"y":2940,"attach":[1373.57,2940.0],"regio":1},{"name":"Leawell","x":1384,"y":2940,"attach":[1384.29,2940.0],"regio":1},{"name":"Brambrook","x":1395,"y":2940,"attach":[1395.0,2940.0],"regio":1},{"name":"Claycombe","x":1406,"y":2940,"attach":[1405.71,2940.0],"regio":1},{"name":"Eastminster","x":1416,"y":2940,"attach":[1416.43,2940.0],"regio":1},{"name":"Elmfield","x":1427,"y":2940,"attach":[1427.14,2940.0],"regio":1},{"name":"Longthwaite","x":1438,"y":2940,"attach":[1437.86,2940.0],"regio":1},{"name":"Bradgate","x":1449,"y":2940,"attach":[1448.57,2940.0],"regio":1},{"name":"Fenbridge","x":1459,"y":2940,"attach":[1459.29,2940.0],"regio":1},{"name":"Kingsferry","x":1230,"y":2940,"attach":[1230.0,2940.0]},{"name":"Grimswell","x":1311,"y":2940,"attach":[1311.0,2940.0],"regio":1},{"name":"Ryecote","x":1302,"y":2940,"attach":[1302.0,2940.0],"regio":1},{"name":"Oldwood","x":1293,"y":2940,"attach":[1293.0,2940.0],"regio":1},{"name":"Coldstead","x":1284,"y":2940,"attach":[1284.0,2940.0],"regio":1},{"name":"Coldstow","x":1275,"y":2940,"attach":[1275.0,2940.0],"regio":1},{"name":"Oakminster","x":1266,"y":2940,"attach":[1266.0,2940.0],"regio":1},{"name":"Stockwood","x":1257,"y":2940,"attach":[1257.0,2940.0],"regio":1},{"name":"Fairsted","x":1248,"y":2940,"attach":[1248.0,2940.0],"regio":1},{"name":"Malwell","x":1239,"y":2940,"attach":[1239.0,2940.0],"regio":1},{"name":"Bradbrook","x":1230,"y":2820,"attach":[1230.0,2820.0],"regio":1},{"name":"Oldcote","x":1320,"y":2933,"attach":[1320.0,2932.58],"regio":1},{"name":"Netherbury","x":1320,"y":2925,"attach":[1320.0,2925.17],"regio":1},{"name":"Elmby","x":1319,"y":2918,"attach":[1319.34,2917.78],"regio":1},{"name":"Grimsmere","x":1317,"y":2911,"attach":[1317.14,2910.71],"regio":1},{"name":"Southmore","x":1313,"y":2904,"attach":[1313.47,2904.29],"regio":1},{"name":"Ryestead","x":1309,"y":2899,"attach":[1308.65,2898.65],"regio":1},{"name":"Shepton","x":1303,"y":2893,"attach":[1303.41,2893.41],"regio":1},{"name":"Warthorpe","x":1298,"y":2888,"attach":[1298.17,2888.17],"regio":1},{"name":"Stockcombe","x":1293,"y":2883,"attach":[1292.92,2882.92],"regio":1},{"name":"Winthorpe","x":1288,"y":2878,"attach":[1287.68,2877.68],"regio":1},{"name":"Swanwood","x":1282,"y":2872,"attach":[1282.43,2872.43],"regio":1},{"name":"Sutstead","x":1277,"y":2867,"attach":[1277.19,2867.19],"regio":1},{"name":"Netherfield","x":1272,"y":2862,"attach":[1271.95,2861.95],"regio":1},{"name":"Eastfield","x":1267,"y":2857,"attach":[1266.7,2856.7],"regio":1},{"name":"Eastwick","x":1261,"y":2851,"attach":[1261.46,2851.46],"regio":1},{"name":"Woodminster","x":1256,"y":2846,"attach":[1256.22,2846.22],"regio":1},{"name":"Crowford","x":1251,"y":2841,"attach":[1250.97,2840.97],"regio":1},{"name":"Oldminster","x":1246,"y":2836,"attach":[1245.73,2835.73],"regio":1},{"name":"Wakewood","x":1240,"y":2830,"attach":[1240.49,2830.49],"regio":1},{"name":"Langham","x":1235,"y":2825,"attach":[1235.24,2825.24],"regio":1},{"name":"Wykethorpe","x":1320,"y":2951,"attach":[1320.0,2950.57],"regio":1},{"name":"Thornham","x":1320,"y":2961,"attach":[1320.0,2961.14],"regio":1},{"name":"Melton","x":1320,"y":2972,"attach":[1320.0,2971.7],"regio":1},{"name":"Walbridge","x":1320,"y":2982,"attach":[1320.0,2982.27],"regio":1},{"name":"Grimsstead","x":1320,"y":2993,"attach":[1320.0,2992.84],"regio":1},{"name":"Rookgate","x":1320,"y":3003,"attach":[1320.0,3003.41],"regio":1},{"name":"Marwick","x":1320,"y":3014,"attach":[1320.0,3013.98],"regio":1},{"name":"Moorford","x":1320,"y":3025,"attach":[1320.0,3024.54],"regio":1},{"name":"Quarrthwaite","x":1320,"y":3035,"attach":[1320.0,3035.11],"regio":1},{"name":"Langcote","x":1320,"y":3046,"attach":[1320.0,3045.68],"regio":1},{"name":"Melcote","x":1320,"y":3056,"attach":[1320.0,3056.25],"regio":1},{"name":"Melminster","x":1320,"y":3067,"attach":[1320.0,3066.82],"regio":1},{"name":"Shepwick","x":1319,"y":3077,"attach":[1319.21,3077.35],"regio":1},{"name":"Cotham","x":1317,"y":3088,"attach":[1316.52,3087.54],"regio":1},{"name":"Waterbridge","x":1312,"y":3097,"attach":[1311.67,3096.91],"regio":1},{"name":"Saxehurst","x":1305,"y":3105,"attach":[1304.95,3105.05],"regio":1},{"name":"Warwood","x":1297,"y":3113,"attach":[1297.47,3112.53],"regio":1},{"name":"Stanbrook","x":1321,"y":2954,"attach":[1321.5,2953.96],"regio":1},{"name":"Moorley","x":1323,"y":2968,"attach":[1322.99,2967.92],"regio":1},{"name":"Swanbury","x":1324,"y":2982,"attach":[1324.49,2981.88],"regio":1},{"name":"Longmore","x":1326,"y":2996,"attach":[1325.98,2995.84],"regio":1},{"name":"Wykethwaite","x":1327,"y":3010,"attach":[1327.48,3009.79],"regio":1},{"name":"Quarrthorpe","x":1329,"y":3024,"attach":[1328.97,3023.75],"regio":1},{"name":"Langbury","x":1330,"y":3038,"attach":[1330.47,3037.71],"regio":1},{"name":"Millminster","x":1332,"y":3052,"attach":[1331.96,3051.67],"regio":1},{"name":"Swanwell","x":1333,"y":3066,"attach":[1333.46,3065.63],"regio":1},{"name":"Warstow","x":1335,"y":3080,"attach":[1334.96,3079.59],"regio":1},{"name":"Barkwood","x":1335,"y":3094,"attach":[1335.15,3093.6],"regio":1},{"name":"Woodley","x":1329,"y":3106,"attach":[1329.02,3105.82],"regio":1},{"name":"Highwood","x":1317,"y":3113,"attach":[1317.13,3112.85],"regio":1},{"name":"Woldworth","x":1304,"y":3117,"attach":[1303.62,3116.6],"regio":1},{"name":"Havenbolme Hbf","x":660,"y":2610,"attach":[660.0,2610.0]},{"name":"Binchester","x":750,"y":2820,"attach":[750.0,2820.0]},{"name":"Whitehurst","x":990,"y":2610,"attach":[990.0,2610.0]},{"name":"Longmere","x":1440,"y":3930,"attach":[1440.0,3930.0],"regio":1},{"name":"Beckham","x":1440,"y":4050,"attach":[1440.0,4050.0],"regio":1},{"name":"Wykemore","x":1455,"y":3945,"attach":[1454.69,3945.38],"regio":1},{"name":"Melholme","x":1443,"y":3964,"attach":[1443.16,3963.55],"regio":1},{"name":"Winden","x":1440,"y":3985,"attach":[1440.0,3984.89],"regio":1},{"name":"Holmstow","x":1440,"y":4007,"attach":[1440.0,4006.59],"regio":1},{"name":"Ulverton","x":1440,"y":4028,"attach":[1440.0,4028.3],"regio":1},{"name":"Waterwick","x":1650,"y":4050,"attach":[1650.0,4050.0],"regio":1},{"name":"Kirkcombe","x":1482,"y":3930,"attach":[1481.96,3930.0],"regio":1},{"name":"Ryeham","x":1494,"y":3930,"attach":[1493.92,3930.0],"regio":1},{"name":"Northham","x":1506,"y":3930,"attach":[1505.88,3930.0],"regio":1},{"name":"Birchthorpe","x":1518,"y":3931,"attach":[1517.78,3931.13],"regio":1},{"name":"Crowworth","x":1529,"y":3935,"attach":[1529.16,3934.74],"regio":1},{"name":"Birchby","x":1539,"y":3941,"attach":[1539.47,3940.73],"regio":1},{"name":"Hunwick","x":1549,"y":3949,"attach":[1548.53,3948.53],"regio":1},{"name":"Grimsfield","x":1557,"y":3957,"attach":[1556.98,3956.98],"regio":1},{"name":"Holmthwaite","x":1565,"y":3965,"attach":[1565.44,3965.44],"regio":1},{"name":"Redthorpe","x":1574,"y":3974,"attach":[1573.9,3973.9],"regio":1},{"name":"Highfield","x":1582,"y":3982,"attach":[1582.35,3982.35],"regio":1},{"name":"Sutley","x":1591,"y":3991,"attach":[1590.81,3990.81],"regio":1},{"name":"Heathcombe","x":1599,"y":3999,"attach":[1599.26,3999.26],"regio":1},{"name":"Saxestead","x":1608,"y":4008,"attach":[1607.72,4007.72],"regio":1},{"name":"Chalby","x":1616,"y":4016,"attach":[1616.18,4016.18],"regio":1},{"name":"Woodcombe","x":1625,"y":4025,"attach":[1624.63,4024.63],"regio":1},{"name":"Waterfield","x":1633,"y":4033,"attach":[1633.09,4033.09],"regio":1},{"name":"Burnstead","x":1642,"y":4042,"attach":[1641.54,4041.54],"regio":1},{"name":"Brentley","x":1440,"y":3750,"attach":[1440.0,3750.0],"regio":1},{"name":"Heathden","x":1470,"y":3919,"attach":[1470.0,3919.43],"regio":1},{"name":"Northton","x":1470,"y":3909,"attach":[1470.0,3908.86],"regio":1},{"name":"Burnmore","x":1470,"y":3898,"attach":[1470.0,3898.3],"regio":1},{"name":"Hazeldale","x":1470,"y":3888,"attach":[1470.0,3887.73],"regio":1},{"name":"Thurlbury","x":1470,"y":3877,"attach":[1470.0,3877.16],"regio":1},{"name":"Cherrysted","x":1470,"y":3867,"attach":[1470.0,3866.59],"regio":1},{"name":"Silworth","x":1470,"y":3856,"attach":[1470.0,3856.02],"regio":1},{"name":"Cherrybury","x":1470,"y":3845,"attach":[1470.0,3845.46],"regio":1},{"name":"Heathstow","x":1470,"y":3835,"attach":[1470.0,3834.89],"regio":1},{"name":"Sandfield","x":1470,"y":3824,"attach":[1470.0,3824.32],"regio":1},{"name":"Kirkden","x":1470,"y":3814,"attach":[1470.0,3813.75],"regio":1},{"name":"Newmore","x":1470,"y":3803,"attach":[1470.0,3803.18],"regio":1},{"name":"Willowdale","x":1469,"y":3793,"attach":[1469.21,3792.65],"regio":1},{"name":"Stanmere","x":1467,"y":3782,"attach":[1466.52,3782.46],"regio":1},{"name":"Nethersted","x":1462,"y":3773,"attach":[1461.67,3773.09],"regio":1},{"name":"Barkholme","x":1455,"y":3765,"attach":[1454.95,3764.95],"regio":1},{"name":"Longbridge","x":1447,"y":3757,"attach":[1447.47,3757.47],"regio":1},{"name":"Northden","x":1500,"y":3330,"attach":[1500.0,3330.0],"regio":1},{"name":"Woodfield","x":1500,"y":3262,"attach":[1500.0,3262.5],"regio":1},{"name":"Moorwell","x":1500,"y":3285,"attach":[1500.0,3285.0],"regio":1},{"name":"Hazelthwaite","x":1500,"y":3308,"attach":[1500.0,3307.5],"regio":1},{"name":"Ellesmere","x":1770,"y":1770,"attach":[1770,1770]},{"name":"Barton Central","x":1890,"y":1770,"attach":[1890.0,1770.0]},{"name":"Fukow","x":1770,"y":1620,"attach":[1770.0,1620.0]},{"name":"Zhennanguan","x":1770,"y":1695,"attach":[1770.0,1695.0]},{"name":"Touraine-Central","x":1650,"y":1950,"attach":[1650.0,1950.0]},{"name":"Prinsburg Central","x":2070,"y":1920,"attach":[2070.0,1920.0]},{"name":"Chatham","x":2160,"y":2010,"attach":[2160,2010]},{"name":"Meiyin","x":960,"y":1830,"attach":[960,1830]},{"name":"Tsingshui","x":1080,"y":1710,"attach":[1080.0,1710.0]},{"name":"Somerfield St John","x":1020,"y":2040,"attach":[1020.0,2040.0]},{"name":"Millstead","x":825,"y":1965,"attach":[825.0,1965.0]},{"name":"Swanley","x":1650,"y":3491,"attach":[1650.0,3490.91],"regio":1},{"name":"Weswick","x":1650,"y":3502,"attach":[1650.0,3501.82],"regio":1},{"name":"Thurldale","x":1650,"y":3513,"attach":[1650.0,3512.73],"regio":1},{"name":"Brookworth","x":1650,"y":3524,"attach":[1650.0,3523.64],"regio":1},{"name":"Millmore","x":1650,"y":3535,"attach":[1650.0,3534.55],"regio":1},{"name":"Blackby","x":1650,"y":3545,"attach":[1650.0,3545.45],"regio":1},{"name":"Yarstow","x":1650,"y":3556,"attach":[1650.0,3556.36],"regio":1},{"name":"Walley","x":1650,"y":3567,"attach":[1650.0,3567.27],"regio":1},{"name":"Brookholme","x":1650,"y":3578,"attach":[1650.0,3578.18],"regio":1},{"name":"Willowden","x":1650,"y":3589,"attach":[1650.0,3589.09],"regio":1},{"name":"Waterhurst","x":1650,"y":3600,"attach":[1650.0,3600.0],"regio":1},{"name":"Southgate","x":1650,"y":3611,"attach":[1650.0,3610.91],"regio":1},{"name":"Hazelbury","x":1650,"y":3622,"attach":[1650.0,3621.82],"regio":1},{"name":"Beckholme","x":1650,"y":3633,"attach":[1650.0,3632.73],"regio":1},{"name":"Wykeford","x":1650,"y":3644,"attach":[1650.0,3643.64],"regio":1},{"name":"Moorham","x":1650,"y":3655,"attach":[1650.0,3654.55],"regio":1},{"name":"Grimscote","x":1650,"y":3665,"attach":[1650.0,3665.45],"regio":1},{"name":"Goldfield","x":1650,"y":3676,"attach":[1650.0,3676.36],"regio":1},{"name":"Pendale","x":1650,"y":3687,"attach":[1650.0,3687.27],"regio":1},{"name":"Warden","x":1650,"y":3698,"attach":[1650.0,3698.18],"regio":1},{"name":"Highbrook","x":1650,"y":3709,"attach":[1650.0,3709.09],"regio":1},{"name":"Medway Central","x":1410,"y":3480,"attach":[1410.0,3480.0]},{"name":"Silthorpe","x":1639,"y":3480,"attach":[1638.57,3480.0],"regio":1},{"name":"Sandham","x":1627,"y":3480,"attach":[1627.14,3480.0],"regio":1},{"name":"Goldley","x":1616,"y":3480,"attach":[1615.71,3480.0],"regio":1},{"name":"Thurlwell","x":1604,"y":3480,"attach":[1604.29,3480.0],"regio":1},{"name":"Malthwaite","x":1593,"y":3480,"attach":[1592.86,3480.0],"regio":1},{"name":"Stockden","x":1581,"y":3480,"attach":[1581.43,3480.0],"regio":1},{"name":"Langmore","x":1570,"y":3480,"attach":[1570.0,3480.0],"regio":1},{"name":"Bramby","x":1559,"y":3480,"attach":[1558.57,3480.0],"regio":1},{"name":"Westhwaite","x":1547,"y":3480,"attach":[1547.14,3480.0],"regio":1},{"name":"Woodford","x":1536,"y":3480,"attach":[1535.71,3480.0],"regio":1},{"name":"Heathstead","x":1524,"y":3480,"attach":[1524.29,3480.0],"regio":1},{"name":"Melmore","x":1513,"y":3480,"attach":[1512.86,3480.0],"regio":1},{"name":"Crowmere","x":1501,"y":3480,"attach":[1501.43,3480.0],"regio":1},{"name":"Highstead","x":1490,"y":3480,"attach":[1490.0,3480.0],"regio":1},{"name":"Wesbridge","x":1479,"y":3480,"attach":[1478.57,3480.0],"regio":1},{"name":"Warbrook","x":1467,"y":3480,"attach":[1467.14,3480.0],"regio":1},{"name":"Ormcombe","x":1456,"y":3480,"attach":[1455.71,3480.0],"regio":1},{"name":"Thurlholme","x":1444,"y":3480,"attach":[1444.29,3480.0],"regio":1},{"name":"Yarthorpe","x":1433,"y":3480,"attach":[1432.86,3480.0],"regio":1},{"name":"Oldwick","x":1421,"y":3480,"attach":[1421.43,3480.0],"regio":1},{"name":"Larkcote","x":1080,"y":2730,"attach":[1080,2730],"regio":1},{"name":"Mapleriver Central","x":1020,"y":2820,"attach":[1020.0,2820.0]},{"name":"Stockley","x":1073,"y":2766,"attach":[1073.02,2766.24],"regio":1},{"name":"Hunby","x":1047,"y":2793,"attach":[1046.7,2793.3],"regio":1},{"name":"Leaby","x":1200,"y":2730,"attach":[1200.0,2730.0],"regio":1},{"name":"Newport","x":1104,"y":2730,"attach":[1104.0,2730.0]},{"name":"Bradford","x":1128,"y":2730,"attach":[1128.0,2730.0],"regio":1},{"name":"Marmore","x":1152,"y":2730,"attach":[1152.0,2730.0],"regio":1},{"name":"Bradthorpe","x":1176,"y":2730,"attach":[1176.0,2730.0],"regio":1},{"name":"Brunswick","x":2010,"y":2460,"attach":[2010,2460]},{"name":"Springford","x":1930,"y":2380,"attach":[1930.0,2380.0]},{"name":"Ashton","x":1850,"y":2300,"attach":[1850.0,2300.0]},{"name":"Mareston","x":1965,"y":2505,"attach":[1965.0,2505.0]},{"name":"Maidstone","x":1920,"y":2550,"attach":[1920.0,2550.0]},{"name":"Bayarfort","x":1875,"y":2595,"attach":[1875.0,2595.0]},{"name":"Sulgen","x":1830,"y":2640,"attach":[1830.0,2640.0]},{"name":"Kingsbury","x":1785,"y":2685,"attach":[1785.0,2685.0]},{"name":"Valcourt","x":1740,"y":2730,"attach":[1740.0,2730.0]},{"name":"Cartier","x":1695,"y":2775,"attach":[1695.0,2775.0]},{"name":"Merlaut","x":1470,"y":2460,"attach":[1470.0,2460.0]},{"name":"Netherwood","x":1740,"y":2460,"attach":[1740.0,2460.0]},{"name":"Kirkgate","x":1650,"y":3780,"attach":[1650.0,3780.0],"regio":1},{"name":"Dunwick","x":1650,"y":3730,"attach":[1650.0,3730.0],"regio":1},{"name":"Yarham","x":1650,"y":3740,"attach":[1650.0,3740.0],"regio":1},{"name":"Bradley","x":1650,"y":3750,"attach":[1650.0,3750.0],"regio":1},{"name":"Southstead","x":1650,"y":3760,"attach":[1650.0,3760.0],"regio":1},{"name":"Wesstow","x":1650,"y":3770,"attach":[1650.0,3770.0],"regio":1},{"name":"Elmham","x":1650,"y":3731,"attach":[1650.0,3730.71],"regio":1},{"name":"Cherrybridge","x":1650,"y":3741,"attach":[1650.0,3741.43],"regio":1},{"name":"Rookfield","x":1650,"y":3752,"attach":[1650.0,3752.14],"regio":1},{"name":"Highsted","x":1650,"y":3763,"attach":[1650.0,3762.86],"regio":1},{"name":"Stowham","x":1650,"y":3774,"attach":[1650.0,3773.57],"regio":1},{"name":"Fairham","x":1650,"y":3784,"attach":[1650.0,3784.29],"regio":1},{"name":"Eastmore","x":1650,"y":3795,"attach":[1650.0,3795.0],"regio":1},{"name":"Sandmere","x":1650,"y":3806,"attach":[1650.0,3805.71],"regio":1},{"name":"Leacombe","x":1650,"y":3816,"attach":[1650.0,3816.43],"regio":1},{"name":"Northmore","x":1650,"y":3827,"attach":[1650.0,3827.14],"regio":1},{"name":"Swancombe","x":1650,"y":3838,"attach":[1650.0,3837.86],"regio":1},{"name":"Foxden","x":1650,"y":3849,"attach":[1650.0,3848.57],"regio":1},{"name":"Millcombe Junction","x":1650,"y":3859,"attach":[1650.0,3859.29],"regio":1},{"name":"Ravenstone","x":1080,"y":2610,"attach":[1080.0,2610.0]},{"name":"Batavie","x":1470,"y":2010,"attach":[1470.0,2010.0]},{"name":"Aéroport Parnay","x":1549,"y":1950,"attach":[1548.84,1950.47]},{"name":"Pinehurst","x":1890,"y":1920,"attach":[1890.0,1920.0]},{"name":"Bellerive","x":1620,"y":2040,"attach":[1620.0,2040.0]},{"name":"Melmere","x":1620,"y":3360,"attach":[1620,3360],"regio":1},{"name":"Whitden","x":1590,"y":3300,"attach":[1590.0,3300.0],"regio":1},{"name":"Penthwaite","x":1654,"y":3366,"attach":[1654.37,3365.61],"regio":1},{"name":"Marbridge","x":1620,"y":3348,"attach":[1620.0,3348.46],"regio":1},{"name":"Melbrook","x":1620,"y":3337,"attach":[1620.0,3336.92],"regio":1},{"name":"Coldwood","x":1620,"y":3325,"attach":[1620.0,3325.38],"regio":1},{"name":"Fenhurst","x":1620,"y":3314,"attach":[1620.0,3313.85],"regio":1},{"name":"Brentcote","x":1620,"y":3302,"attach":[1620.0,3302.31],"regio":1},{"name":"Reddale","x":1620,"y":3291,"attach":[1620.0,3290.77],"regio":1},{"name":"Hawgate","x":1620,"y":3279,"attach":[1620.0,3279.23],"regio":1},{"name":"Hawwick","x":1620,"y":3268,"attach":[1620.0,3267.69],"regio":1},{"name":"Netherbrook","x":1620,"y":3256,"attach":[1620.0,3256.15],"regio":1},{"name":"Cherrygate","x":1620,"y":3245,"attach":[1620.0,3244.62],"regio":1},{"name":"Hawden","x":1620,"y":3233,"attach":[1620.0,3233.08],"regio":1},{"name":"Cherryden","x":1620,"y":3222,"attach":[1620.0,3221.54],"regio":1},{"name":"Lockton","x":1050,"y":2160,"attach":[1050,2160]},{"name":"Norbourne","x":1080,"y":2380,"attach":[1080.0,2379.89]},{"name":"Belwich East","x":923,"y":2160,"attach":[922.55,2160.0]},{"name":"Amptonside Canal","x":795,"y":2160,"attach":[795.09,2160.0]},{"name":"Flancourt-Est","x":1470,"y":2190,"attach":[1470.0,2190.0]},{"name":"Grafton Central","x":1255,"y":2190,"attach":[1254.89,2190.0]},{"name":"Southend","x":1620,"y":4050,"attach":[1620.0,4050.0]},{"name":"Becksted","x":1620,"y":3947,"attach":[1620.0,3947.14],"regio":1},{"name":"Wescombe","x":1620,"y":3964,"attach":[1620.0,3964.29],"regio":1},{"name":"Fernsted","x":1620,"y":3981,"attach":[1620.0,3981.43],"regio":1},{"name":"Malton","x":1620,"y":3999,"attach":[1620.0,3998.57],"regio":1},{"name":"Crowmore","x":1620,"y":4016,"attach":[1620.0,4015.71],"regio":1},{"name":"Willowstow","x":1620,"y":4033,"attach":[1620.0,4032.86],"regio":1},{"name":"Willowstead","x":1621,"y":3935,"attach":[1621.16,3935.04],"regio":1},{"name":"Birchmere","x":1622,"y":3940,"attach":[1622.33,3940.08],"regio":1},{"name":"Millthorpe","x":1623,"y":3945,"attach":[1623.49,3945.13],"regio":1},{"name":"Newhurst","x":1625,"y":3950,"attach":[1624.65,3950.17],"regio":1},{"name":"Upper Brentbridge","x":1626,"y":3955,"attach":[1625.82,3955.21],"regio":1},{"name":"Walby","x":1627,"y":3960,"attach":[1626.98,3960.25],"regio":1},{"name":"Holmcote","x":1628,"y":3965,"attach":[1628.15,3965.3],"regio":1},{"name":"Newgate","x":1629,"y":3970,"attach":[1629.31,3970.34],"regio":1},{"name":"Chalworth","x":1630,"y":3975,"attach":[1630.47,3975.38],"regio":1},{"name":"Hazelstead","x":1632,"y":3980,"attach":[1631.64,3980.42],"regio":1},{"name":"Highmere","x":1633,"y":3985,"attach":[1632.8,3985.47],"regio":1},{"name":"Kirkley","x":1634,"y":3991,"attach":[1633.6,3990.58],"regio":1},{"name":"Melhurst","x":1634,"y":3996,"attach":[1634.38,3995.69],"regio":1},{"name":"Thurlmore","x":1635,"y":4001,"attach":[1634.52,4000.86],"regio":1},{"name":"Waterminster","x":1634,"y":4006,"attach":[1634.48,4006.03],"regio":1},{"name":"Todton","x":1634,"y":4011,"attach":[1633.87,4011.16],"regio":1},{"name":"Elmford","x":1633,"y":4016,"attach":[1632.99,4016.26],"regio":1},{"name":"Elmstead","x":1632,"y":4021,"attach":[1631.65,4021.24],"regio":1},{"name":"Fernham","x":1630,"y":4026,"attach":[1629.98,4026.14],"regio":1},{"name":"Saxebrook","x":1628,"y":4031,"attach":[1628.15,4030.97],"regio":1},{"name":"Wickstow","x":1626,"y":4036,"attach":[1626.12,4035.73],"regio":1},{"name":"Thurlbridge","x":1624,"y":4040,"attach":[1624.08,4040.49],"regio":1},{"name":"Clayworth","x":1622,"y":4045,"attach":[1622.04,4045.24],"regio":1},{"name":"Willowgate","x":1620,"y":3942,"attach":[1620.0,3941.84],"regio":1},{"name":"Larkstead","x":1620,"y":3954,"attach":[1620.0,3953.68],"regio":1},{"name":"Oakley","x":1620,"y":3966,"attach":[1620.0,3965.52],"regio":1},{"name":"Wakewick","x":1620,"y":3977,"attach":[1620.0,3977.35],"regio":1},{"name":"Barkminster","x":1620,"y":3989,"attach":[1620.0,3989.19],"regio":1},{"name":"Leasted","x":1620,"y":4001,"attach":[1620.21,4001.02],"regio":1},{"name":"Thurlthwaite","x":1622,"y":4013,"attach":[1622.03,4012.67],"regio":1},{"name":"Bradcombe","x":1627,"y":4024,"attach":[1626.51,4023.56],"regio":1},{"name":"Rookstow","x":1633,"y":4033,"attach":[1633.42,4033.11],"regio":1},{"name":"Coldmere","x":1642,"y":4042,"attach":[1641.63,4041.63],"regio":1},{"name":"Yuchow Central","x":840,"y":1560,"attach":[840.0,1560.0]},{"name":"Shihmen","x":1040,"y":1590,"attach":[1040.0,1590.0]},{"name":"Peiting New Town","x":1120,"y":1590,"attach":[1120.0,1590.0]},{"name":"Vindelle-Central","x":1590,"y":2880,"attach":[1590.0,2880.0]},{"name":"Saxeford","x":1230,"y":2910,"attach":[1230.0,2910.0],"regio":1},{"name":"Todham","x":1230,"y":2925,"attach":[1230.0,2925.0],"regio":1},{"name":"Wakestead","x":1230,"y":2951,"attach":[1230.0,2950.65],"regio":1},{"name":"Larkdale","x":1230,"y":2961,"attach":[1230.0,2961.3],"regio":1},{"name":"Marbury","x":1230,"y":2972,"attach":[1230.0,2971.95],"regio":1},{"name":"Cotgate","x":1230,"y":2983,"attach":[1230.0,2982.6],"regio":1},{"name":"Woodton","x":1230,"y":2993,"attach":[1230.0,2993.25],"regio":1},{"name":"Whitmere","x":1230,"y":3004,"attach":[1230.0,3003.9],"regio":1},{"name":"Beauvoir Docklands","x":1230,"y":3015,"attach":[1230.0,3014.55]},{"name":"Walwood","x":1230,"y":3025,"attach":[1230.0,3025.21],"regio":1},{"name":"Walcombe","x":1230,"y":3036,"attach":[1230.0,3035.86],"regio":1},{"name":"Lynthorpe","x":1231,"y":3046,"attach":[1230.96,3046.46],"regio":1},{"name":"Southley","x":1234,"y":3057,"attach":[1233.79,3056.71],"regio":1},{"name":"Winstow","x":1239,"y":3066,"attach":[1238.55,3066.21],"regio":1},{"name":"Netherby","x":1245,"y":3075,"attach":[1245.02,3074.62],"regio":1},{"name":"Millbridge","x":1252,"y":3082,"attach":[1252.34,3082.34],"regio":1},{"name":"Hartgate","x":1260,"y":3090,"attach":[1259.88,3089.88],"regio":1},{"name":"Quarrcombe","x":1267,"y":3097,"attach":[1267.41,3097.41],"regio":1},{"name":"Ulverley","x":1275,"y":3105,"attach":[1274.94,3104.94],"regio":1},{"name":"Oakbrook","x":1282,"y":3112,"attach":[1282.47,3112.47],"regio":1},{"name":"Heathworth","x":1230,"y":2932,"attach":[1230.0,2932.5],"regio":1},{"name":"Chalthorpe","x":1230,"y":2925,"attach":[1230.0,2925.0],"regio":1},{"name":"Langby","x":1230,"y":2918,"attach":[1230.0,2917.5],"regio":1},{"name":"Watersted","x":1230,"y":2910,"attach":[1230.0,2910.0],"regio":1},{"name":"Larkgate","x":1230,"y":2902,"attach":[1230.0,2902.5],"regio":1},{"name":"Cherrydale","x":1230,"y":2895,"attach":[1230.0,2895.0],"regio":1},{"name":"Blackminster","x":1230,"y":2888,"attach":[1230.0,2887.5],"regio":1},{"name":"Goldcombe","x":1230,"y":2880,"attach":[1230.0,2880.0],"regio":1},{"name":"Ashdale","x":1230,"y":2872,"attach":[1230.0,2872.5],"regio":1},{"name":"Longworth","x":1230,"y":2865,"attach":[1230.0,2865.0],"regio":1},{"name":"Oakton","x":1230,"y":2858,"attach":[1230.0,2857.5],"regio":1},{"name":"Woldminster","x":1230,"y":2850,"attach":[1230.0,2850.0],"regio":1},{"name":"Warstead","x":1230,"y":2842,"attach":[1230.0,2842.5],"regio":1},{"name":"Goldby","x":1230,"y":2835,"attach":[1230.0,2835.0],"regio":1},{"name":"Saxegate","x":1230,"y":2828,"attach":[1230.0,2827.5],"regio":1},{"name":"Ryestow","x":1388,"y":3480,"attach":[1387.5,3480.0],"regio":1},{"name":"Brooksted","x":1395,"y":3480,"attach":[1395.0,3480.0],"regio":1},{"name":"Langstead","x":1402,"y":3480,"attach":[1402.5,3480.0],"regio":1},{"name":"Southwood","x":1391,"y":3469,"attach":[1391.12,3468.88],"regio":1},{"name":"Quarrwick","x":1402,"y":3457,"attach":[1401.55,3457.12],"regio":1},{"name":"Bramworth","x":1408,"y":3443,"attach":[1407.92,3442.83],"regio":1},{"name":"Shepcote","x":1410,"y":3427,"attach":[1410.0,3427.3],"regio":1},{"name":"Brambridge","x":1410,"y":3412,"attach":[1410.0,3411.57],"regio":1},{"name":"Moorby","x":1410,"y":3396,"attach":[1410.0,3395.84],"regio":1},{"name":"Langgate","x":1410,"y":3380,"attach":[1410.0,3380.11],"regio":1},{"name":"Walthorpe","x":1410,"y":3364,"attach":[1410.0,3364.38],"regio":1},{"name":"Dunthwaite","x":1410,"y":3349,"attach":[1410.0,3348.65],"regio":1},{"name":"Swanfield","x":1410,"y":3333,"attach":[1410.0,3332.92],"regio":1},{"name":"Walwell","x":1410,"y":3317,"attach":[1410.0,3317.19],"regio":1},{"name":"Whitworth","x":1410,"y":3301,"attach":[1410.0,3301.46],"regio":1},{"name":"Beckden","x":1410,"y":3286,"attach":[1410.0,3285.73],"regio":1},{"name":"Heathwell","x":1416,"y":3486,"attach":[1415.57,3485.57],"regio":1},{"name":"Beckstow","x":1421,"y":3491,"attach":[1421.14,3491.14],"regio":1},{"name":"Thurlbrook","x":1427,"y":3497,"attach":[1426.7,3496.7],"regio":1},{"name":"Ryecombe","x":1432,"y":3503,"attach":[1432.0,3502.52],"regio":1},{"name":"Woldwood","x":1436,"y":3509,"attach":[1436.27,3509.1],"regio":1},{"name":"Hazelwood","x":1439,"y":3516,"attach":[1438.95,3516.46],"regio":1},{"name":"Heathgate","x":1440,"y":3524,"attach":[1439.93,3524.25],"regio":1},{"name":"Maldale","x":1440,"y":3532,"attach":[1440.0,3532.13],"regio":1},{"name":"Barkstow","x":1418,"y":3472,"attach":[1417.91,3472.09],"regio":1},{"name":"Willowsted","x":1426,"y":3464,"attach":[1425.9,3464.25],"regio":1},{"name":"Beckford","x":1435,"y":3457,"attach":[1434.73,3457.44],"regio":1},{"name":"Willowwood","x":1445,"y":3453,"attach":[1444.84,3452.77],"regio":1},{"name":"Fenley","x":1456,"y":3451,"attach":[1455.75,3450.5],"regio":1},{"name":"Shephurst","x":1467,"y":3450,"attach":[1466.91,3450.0],"regio":1},{"name":"Blackbridge","x":1478,"y":3450,"attach":[1478.1,3450.0],"regio":1},{"name":"Marcote","x":1489,"y":3450,"attach":[1489.29,3450.0],"regio":1},{"name":"Coldford","x":1500,"y":3450,"attach":[1500.48,3450.0],"regio":1},{"name":"Eaststead","x":1512,"y":3450,"attach":[1511.67,3450.0],"regio":1},{"name":"Fencote","x":1523,"y":3450,"attach":[1522.86,3450.0],"regio":1},{"name":"Swanden","x":1534,"y":3450,"attach":[1534.05,3450.0],"regio":1},{"name":"Walgate","x":1545,"y":3450,"attach":[1545.24,3450.0],"regio":1},{"name":"Chalsted","x":1556,"y":3450,"attach":[1556.43,3450.0],"regio":1},{"name":"Silfield","x":1568,"y":3450,"attach":[1567.62,3450.0],"regio":1},{"name":"Kirkthwaite","x":1579,"y":3450,"attach":[1578.81,3450.0],"regio":1},{"name":"Leastead","x":1410,"y":3469,"attach":[1410.0,3468.95],"regio":1},{"name":"Newby","x":1410,"y":3458,"attach":[1410.0,3457.89],"regio":1},{"name":"Clayby","x":1410,"y":3447,"attach":[1410.0,3446.84],"regio":1},{"name":"Kirkbridge","x":1410,"y":3436,"attach":[1410.0,3435.79],"regio":1},{"name":"Penthorpe","x":1410,"y":3425,"attach":[1410.0,3424.74],"regio":1},{"name":"Wooddale","x":1410,"y":3414,"attach":[1410.0,3413.68],"regio":1},{"name":"Oakstow","x":1410,"y":3403,"attach":[1410.0,3402.63],"regio":1},{"name":"Grimscombe","x":1410,"y":3392,"attach":[1410.0,3391.58],"regio":1},{"name":"Quarrmere","x":1410,"y":3381,"attach":[1410.0,3380.53],"regio":1},{"name":"Salmore","x":1410,"y":3369,"attach":[1410.0,3369.47],"regio":1},{"name":"Hartmere","x":1410,"y":3358,"attach":[1410.0,3358.42],"regio":1},{"name":"Beckwell","x":1410,"y":3347,"attach":[1410.0,3347.37],"regio":1},{"name":"Waterwell","x":1410,"y":3336,"attach":[1410.0,3336.32],"regio":1},{"name":"Shepminster","x":1410,"y":3325,"attach":[1410.0,3325.26],"regio":1},{"name":"Holmstead","x":1410,"y":3314,"attach":[1410.0,3314.21],"regio":1},{"name":"Northstow","x":1410,"y":3303,"attach":[1410.0,3303.16],"regio":1},{"name":"Lynmere","x":1410,"y":3292,"attach":[1410.0,3292.11],"regio":1},{"name":"Sandcombe","x":1410,"y":3281,"attach":[1410.0,3281.05],"regio":1},{"name":"Moorcombe","x":1440,"y":3780,"attach":[1440.0,3780.0],"regio":1},{"name":"Larkholme","x":1440,"y":3918,"attach":[1440.0,3917.5],"regio":1},{"name":"Warmore","x":1440,"y":3905,"attach":[1440.0,3905.0],"regio":1},{"name":"Rotherham","x":1440,"y":3892,"attach":[1440.0,3892.5]},{"name":"Brentwood","x":1440,"y":3880,"attach":[1440.0,3880.0],"regio":1},{"name":"Fenbury","x":1440,"y":3868,"attach":[1440.0,3867.5],"regio":1},{"name":"Todbrook","x":1440,"y":3855,"attach":[1440.0,3855.0],"regio":1},{"name":"Todsted","x":1440,"y":3842,"attach":[1440.0,3842.5],"regio":1},{"name":"Moorstow","x":1440,"y":3830,"attach":[1440.0,3830.0],"regio":1},{"name":"Cotfield","x":1440,"y":3818,"attach":[1440.0,3817.5],"regio":1},{"name":"Foxham","x":1440,"y":3805,"attach":[1440.0,3805.0],"regio":1},{"name":"Hartwell","x":1440,"y":3792,"attach":[1440.0,3792.5],"regio":1},{"name":"Moorworth","x":1444,"y":3918,"attach":[1443.85,3917.8],"regio":1},{"name":"Grimshurst","x":1448,"y":3906,"attach":[1447.7,3905.61],"regio":1},{"name":"Holmmore","x":1451,"y":3893,"attach":[1451.4,3893.37],"regio":1},{"name":"Northholme","x":1454,"y":3881,"attach":[1454.08,3880.88],"regio":1},{"name":"Wickcote","x":1455,"y":3868,"attach":[1455.02,3868.15],"regio":1},{"name":"Millworth","x":1454,"y":3855,"attach":[1454.22,3855.41],"regio":1},{"name":"Foxhurst","x":1452,"y":3843,"attach":[1452.15,3842.79],"regio":1},{"name":"Wakeley","x":1450,"y":3830,"attach":[1449.72,3830.23],"regio":1},{"name":"Saxeworth","x":1447,"y":3818,"attach":[1447.29,3817.67],"regio":1},{"name":"Crowton","x":1445,"y":3805,"attach":[1444.86,3805.12],"regio":1},{"name":"Salbridge","x":1442,"y":3793,"attach":[1442.43,3792.56],"regio":1},{"name":"Outrepont","x":1440,"y":2700,"attach":[1440.0,2700.0]},{"name":"Hunstow","x":1449,"y":4050,"attach":[1449.13,4050.0],"regio":1},{"name":"Saldale","x":1458,"y":4050,"attach":[1458.26,4050.0],"regio":1},{"name":"Goldgate","x":1467,"y":4050,"attach":[1467.39,4050.0],"regio":1},{"name":"Marminster","x":1477,"y":4050,"attach":[1476.52,4050.0],"regio":1},{"name":"Ryeworth","x":1486,"y":4050,"attach":[1485.65,4050.0],"regio":1},{"name":"Olddale","x":1495,"y":4050,"attach":[1494.78,4050.0],"regio":1},{"name":"Foxby","x":1504,"y":4050,"attach":[1503.91,4050.0],"regio":1},{"name":"Yarstead","x":1513,"y":4050,"attach":[1513.04,4050.0],"regio":1},{"name":"Wykegate","x":1522,"y":4050,"attach":[1522.17,4050.0],"regio":1},{"name":"Quarrmore","x":1531,"y":4050,"attach":[1531.3,4050.0],"regio":1},{"name":"Upper Thurlbury","x":1540,"y":4050,"attach":[1540.43,4050.0],"regio":1},{"name":"Millham","x":1550,"y":4050,"attach":[1549.57,4050.0],"regio":1},{"name":"Winholme","x":1559,"y":4050,"attach":[1558.7,4050.0],"regio":1},{"name":"Hazelton","x":1568,"y":4050,"attach":[1567.83,4050.0],"regio":1},{"name":"Eastham","x":1577,"y":4050,"attach":[1576.96,4050.0],"regio":1},{"name":"Oldmere","x":1586,"y":4050,"attach":[1586.09,4050.0],"regio":1},{"name":"Kirkminster","x":1595,"y":4050,"attach":[1595.22,4050.0],"regio":1},{"name":"Wickwick","x":1604,"y":4050,"attach":[1604.35,4050.0],"regio":1},{"name":"Fernbridge","x":1613,"y":4050,"attach":[1613.48,4050.0],"regio":1},{"name":"Willowley","x":1623,"y":4050,"attach":[1622.61,4050.0],"regio":1},{"name":"Wykeby","x":1632,"y":4050,"attach":[1631.74,4050.0],"regio":1},{"name":"Hazelgate","x":1641,"y":4050,"attach":[1640.87,4050.0],"regio":1},{"name":"Ormford","x":1454,"y":4052,"attach":[1454.03,4052.05],"regio":1},{"name":"Winbridge","x":1468,"y":4054,"attach":[1468.05,4054.11],"regio":1},{"name":"Marby","x":1482,"y":4056,"attach":[1482.08,4056.16],"regio":1},{"name":"Penton","x":1496,"y":4058,"attach":[1496.11,4058.21],"regio":1},{"name":"Sutthwaite","x":1510,"y":4060,"attach":[1510.14,4060.26],"regio":1},{"name":"Malley","x":1524,"y":4062,"attach":[1524.16,4062.32],"regio":1},{"name":"Burnham","x":1538,"y":4064,"attach":[1538.19,4064.37],"regio":1},{"name":"Fenfield","x":1552,"y":4066,"attach":[1552.29,4065.76],"regio":1},{"name":"Waterthwaite","x":1566,"y":4066,"attach":[1566.46,4065.66],"regio":1},{"name":"Northwood","x":1581,"y":4064,"attach":[1580.54,4064.11],"regio":1},{"name":"Moorhurst","x":1594,"y":4061,"attach":[1594.47,4061.49],"regio":1},{"name":"Oldden","x":1608,"y":4059,"attach":[1608.35,4058.62],"regio":1},{"name":"Waldale","x":1622,"y":4056,"attach":[1622.23,4055.74],"regio":1},{"name":"Saxewood","x":1636,"y":4053,"attach":[1636.12,4052.87],"regio":1},{"name":"Königstadt","x":660,"y":2343,"attach":[660.0,2343.18]},{"name":"Findel","x":660,"y":2477,"attach":[660.0,2476.59]},{"name":"Hiltsbury","x":704,"y":2161,"attach":[703.6,2160.58]},{"name":"Hawdale","x":1440,"y":3739,"attach":[1440.0,3739.29],"regio":1},{"name":"Woldden","x":1440,"y":3729,"attach":[1440.0,3728.57],"regio":1},{"name":"Foxminster","x":1440,"y":3718,"attach":[1440.0,3717.86],"regio":1},{"name":"Ulverwell","x":1440,"y":3707,"attach":[1440.0,3707.14],"regio":1},{"name":"Brookbrook","x":1440,"y":3696,"attach":[1440.0,3696.43],"regio":1},{"name":"Little Crowcote","x":1440,"y":3686,"attach":[1440.0,3685.71],"regio":1},{"name":"Stanton","x":1440,"y":3675,"attach":[1440.0,3675.0],"regio":1},{"name":"Woldham","x":1440,"y":3664,"attach":[1440.0,3664.29],"regio":1},{"name":"Stowford","x":1440,"y":3654,"attach":[1440.0,3653.57],"regio":1},{"name":"Bradminster","x":1440,"y":3643,"attach":[1440.0,3642.86],"regio":1},{"name":"Stowminster","x":1440,"y":3632,"attach":[1440.0,3632.14],"regio":1},{"name":"Wakebury Junction","x":1440,"y":3621,"attach":[1440.0,3621.43],"regio":1},{"name":"Saxebridge","x":1440,"y":3611,"attach":[1440.0,3610.71],"regio":1},{"name":"Shepford","x":1440,"y":3758,"attach":[1440.0,3757.5],"regio":1},{"name":"Beckfield","x":1440,"y":3765,"attach":[1440.0,3765.0],"regio":1},{"name":"Heathfield","x":1440,"y":3772,"attach":[1440.0,3772.5],"regio":1},{"name":"Johnston","x":840,"y":2831,"attach":[840.09,2830.6]},{"name":"Kelvinport","x":930,"y":2834,"attach":[930.34,2833.79]},{"name":"Brackenholt","x":841,"y":2839,"attach":[840.95,2839.15],"regio":1},{"name":"Linton","x":932,"y":2851,"attach":[932.41,2851.02],"regio":1},{"name":"Ribeauvillé","x":1230,"y":2730,"attach":[1230.0,2730.0]},{"name":"Netherley","x":1230,"y":2790,"attach":[1230.0,2790.0],"regio":1},{"name":"Warcote","x":1230,"y":2760,"attach":[1230.0,2760.0],"regio":1},{"name":"Yarwood","x":1230,"y":2842,"attach":[1230.0,2842.5],"regio":1},{"name":"Hazelminster","x":1230,"y":2865,"attach":[1230.0,2865.0],"regio":1},{"name":"Nethergate","x":1230,"y":2888,"attach":[1230.0,2887.5],"regio":1},{"name":"Westerhafen","x":480,"y":2610,"attach":[480.0,2610.0],"regio":1},{"name":"Beckminster","x":1620,"y":3201,"attach":[1620.0,3200.77],"regio":1},{"name":"Northhurst","x":1620,"y":3192,"attach":[1620.0,3191.54],"regio":1},{"name":"Lynbridge","x":1620,"y":3182,"attach":[1620.0,3182.31],"regio":1},{"name":"Penhurst","x":1620,"y":3173,"attach":[1620.0,3173.08],"regio":1},{"name":"Elmworth","x":1620,"y":3164,"attach":[1620.0,3163.85],"regio":1},{"name":"Saxefield","x":1620,"y":3155,"attach":[1620.0,3154.62],"regio":1},{"name":"Norththwaite","x":1620,"y":3145,"attach":[1620.0,3145.38],"regio":1},{"name":"Kirkmore","x":1620,"y":3136,"attach":[1620.0,3136.15],"regio":1},{"name":"Salwood","x":1620,"y":3127,"attach":[1620.0,3126.92],"regio":1},{"name":"Highthorpe","x":1620,"y":3118,"attach":[1620.0,3117.69],"regio":1},{"name":"Wicksted","x":1620,"y":3108,"attach":[1620.0,3108.46],"regio":1},{"name":"Sandhurst","x":1620,"y":3099,"attach":[1620.0,3099.23],"regio":1},{"name":"Waterworth","x":1626,"y":3244,"attach":[1625.61,3244.37],"regio":1},{"name":"Melford","x":1623,"y":3202,"attach":[1623.26,3202.39],"regio":1},{"name":"Silbridge","x":1627,"y":3195,"attach":[1626.52,3194.78],"regio":1},{"name":"Wakemere","x":1630,"y":3187,"attach":[1629.64,3187.11],"regio":1},{"name":"Chalcombe","x":1632,"y":3179,"attach":[1632.32,3179.28],"regio":1},{"name":"Langden","x":1634,"y":3171,"attach":[1633.87,3171.16],"regio":1},{"name":"Ormby","x":1635,"y":3163,"attach":[1634.5,3162.93],"regio":1},{"name":"Ashthwaite","x":1634,"y":3155,"attach":[1634.22,3154.67],"regio":1},{"name":"Sutdale","x":1633,"y":3146,"attach":[1632.98,3146.49],"regio":1},{"name":"Barkbridge","x":1631,"y":3138,"attach":[1631.17,3138.41],"regio":1},{"name":"Hartminster","x":1629,"y":3130,"attach":[1629.31,3130.34],"regio":1},{"name":"Willowhurst","x":1627,"y":3122,"attach":[1627.45,3122.27],"regio":1},{"name":"Stockminster","x":1626,"y":3114,"attach":[1625.59,3114.2],"regio":1},{"name":"Rookdale","x":1624,"y":3106,"attach":[1623.72,3106.14],"regio":1},{"name":"Crowsted","x":1622,"y":3098,"attach":[1621.86,3098.07],"regio":1},{"name":"Longstow","x":1590,"y":3150,"attach":[1590.0,3150.0],"regio":1},{"name":"Fernden","x":1440,"y":3610,"attach":[1440.0,3610.0],"regio":1},{"name":"Burncote","x":1440,"y":3620,"attach":[1440.0,3620.0],"regio":1},{"name":"Holmton","x":1440,"y":3630,"attach":[1440.0,3630.0],"regio":1},{"name":"Hawbury","x":1440,"y":3640,"attach":[1440.0,3640.0],"regio":1},{"name":"Sandgate","x":1440,"y":3650,"attach":[1440.0,3650.0],"regio":1},{"name":"Hartfield","x":1440,"y":3660,"attach":[1440.0,3660.0],"regio":1},{"name":"Crowthwaite","x":1440,"y":3670,"attach":[1440.0,3670.0],"regio":1},{"name":"Brentdale","x":1440,"y":3680,"attach":[1440.0,3680.0],"regio":1},{"name":"Shepthorpe","x":1440,"y":3690,"attach":[1440.0,3690.0],"regio":1},{"name":"Hazelwick","x":1440,"y":3700,"attach":[1440.0,3700.0],"regio":1},{"name":"Coldsted","x":1440,"y":3710,"attach":[1440.0,3710.0],"regio":1},{"name":"Toddale","x":1440,"y":3720,"attach":[1440.0,3720.0],"regio":1},{"name":"Newstow","x":1440,"y":3730,"attach":[1440.0,3730.0],"regio":1},{"name":"Heathby","x":1440,"y":3740,"attach":[1440.0,3740.0],"regio":1},{"name":"Longstead","x":1440,"y":3750,"attach":[1440.0,3750.0],"regio":1},{"name":"Stockstead","x":1440,"y":3760,"attach":[1440.0,3760.0],"regio":1},{"name":"Southminster","x":1440,"y":3770,"attach":[1440.0,3770.0],"regio":1},{"name":"Whitwick","x":1298,"y":3128,"attach":[1297.78,3127.78],"regio":1},{"name":"Brookford","x":1306,"y":3136,"attach":[1305.56,3135.56],"regio":1},{"name":"Salden","x":1313,"y":3143,"attach":[1313.33,3143.33],"regio":1},{"name":"Todley","x":1321,"y":3151,"attach":[1321.11,3151.11],"regio":1},{"name":"Rookbridge","x":1329,"y":3159,"attach":[1328.89,3158.89],"regio":1},{"name":"Stockcote","x":1337,"y":3167,"attach":[1336.67,3166.67],"regio":1},{"name":"Rookcombe","x":1344,"y":3174,"attach":[1344.44,3174.44],"regio":1},{"name":"Whitmore","x":1352,"y":3182,"attach":[1352.22,3182.22],"regio":1},{"name":"Elmden","x":1360,"y":3190,"attach":[1360.0,3190.0],"regio":1},{"name":"Birchworth","x":1368,"y":3198,"attach":[1367.78,3197.78],"regio":1},{"name":"Nethercote","x":1376,"y":3206,"attach":[1375.56,3205.56],"regio":1},{"name":"Salmere","x":1383,"y":3213,"attach":[1383.33,3213.33],"regio":1},{"name":"Crowhurst","x":1391,"y":3221,"attach":[1391.11,3221.11],"regio":1},{"name":"Eastton","x":1399,"y":3229,"attach":[1398.89,3228.89],"regio":1},{"name":"Marham","x":1407,"y":3237,"attach":[1406.67,3236.67],"regio":1},{"name":"Yarminster","x":1414,"y":3244,"attach":[1414.44,3244.44],"regio":1},{"name":"Walmore","x":1422,"y":3252,"attach":[1422.22,3252.22],"regio":1},{"name":"Stanham","x":1430,"y":3260,"attach":[1430.0,3260.0],"regio":1},{"name":"Larkmore","x":1438,"y":3268,"attach":[1437.78,3267.78],"regio":1},{"name":"Cotsted","x":1446,"y":3276,"attach":[1445.56,3275.56],"regio":1},{"name":"Winbrook","x":1453,"y":3283,"attach":[1453.33,3283.33],"regio":1},{"name":"Hazelley","x":1461,"y":3291,"attach":[1461.11,3291.11],"regio":1},{"name":"Penfield","x":1469,"y":3299,"attach":[1468.89,3298.89],"regio":1},{"name":"Salminster","x":1477,"y":3307,"attach":[1476.67,3306.67],"regio":1},{"name":"Marford","x":1484,"y":3314,"attach":[1484.44,3314.44],"regio":1},{"name":"Highbridge","x":1492,"y":3322,"attach":[1492.22,3322.22],"regio":1},{"name":"Redwick","x":1296,"y":3126,"attach":[1295.6,3125.6],"regio":1},{"name":"Bradstow","x":1301,"y":3131,"attach":[1301.21,3131.21],"regio":1},{"name":"Holmwood","x":1307,"y":3137,"attach":[1306.81,3136.81],"regio":1},{"name":"Newwood","x":1312,"y":3142,"attach":[1312.42,3142.42],"regio":1},{"name":"Swanhurst","x":1318,"y":3148,"attach":[1318.02,3148.02],"regio":1},{"name":"Fairwood","x":1324,"y":3154,"attach":[1323.63,3153.63],"regio":1},{"name":"Ulversted","x":1329,"y":3159,"attach":[1329.23,3159.23],"regio":1},{"name":"Sutcote","x":1335,"y":3165,"attach":[1334.84,3164.84],"regio":1},{"name":"Melbury","x":1340,"y":3170,"attach":[1340.44,3170.44],"regio":1},{"name":"Marton","x":1346,"y":3176,"attach":[1346.05,3176.05],"regio":1},{"name":"Rookton","x":1352,"y":3182,"attach":[1351.65,3181.65],"regio":1},{"name":"Thornford","x":1357,"y":3187,"attach":[1357.25,3187.25],"regio":1},{"name":"Cherrywick","x":1363,"y":3193,"attach":[1362.86,3192.86],"regio":1},{"name":"Fairthorpe","x":1368,"y":3198,"attach":[1368.46,3198.46],"regio":1},{"name":"Ulverstead","x":1374,"y":3204,"attach":[1374.07,3204.07],"regio":1},{"name":"Quarrwell","x":1380,"y":3210,"attach":[1379.67,3209.67],"regio":1},{"name":"Silsted","x":1385,"y":3215,"attach":[1385.28,3215.28],"regio":1},{"name":"Westhorpe","x":1391,"y":3221,"attach":[1390.88,3220.88],"regio":1},{"name":"Millford","x":1396,"y":3226,"attach":[1396.49,3226.49],"regio":1},{"name":"Redfield","x":1402,"y":3232,"attach":[1401.83,3232.33],"regio":1},{"name":"Malholme","x":1406,"y":3239,"attach":[1406.17,3238.92],"regio":1},{"name":"Dunbury","x":1409,"y":3246,"attach":[1408.9,3246.32],"regio":1},{"name":"Brentford","x":1410,"y":3254,"attach":[1409.92,3254.15],"regio":1},{"name":"Wakeford","x":1410,"y":3262,"attach":[1410.0,3262.07],"regio":1},{"name":"Melworth","x":1650,"y":3852,"attach":[1650.0,3852.0],"regio":1},{"name":"Salstow","x":1650,"y":3834,"attach":[1650.0,3834.0],"regio":1},{"name":"Elmthwaite","x":1650,"y":3816,"attach":[1650.0,3816.0],"regio":1},{"name":"Yarfield","x":1650,"y":3798,"attach":[1650.0,3798.0],"regio":1},{"name":"Larkby","x":1663,"y":3850,"attach":[1662.64,3849.65],"regio":1},{"name":"Burngate","x":1663,"y":3826,"attach":[1663.18,3826.12],"regio":1},{"name":"Wykecote","x":1657,"y":3803,"attach":[1656.59,3803.06],"regio":1},{"name":"Port-du-Roi","x":1560,"y":2940,"attach":[1560,2940]},{"name":"Elmgate","x":1561,"y":2916,"attach":[1561.05,2916.46],"regio":1},{"name":"Ulverbridge","x":1573,"y":2897,"attach":[1573.3,2896.7],"regio":1},{"name":"Fairmore","x":1560,"y":3030,"attach":[1560.0,3030.0],"regio":1},{"name":"Crowminster","x":1560,"y":2970,"attach":[1560.0,2970.0],"regio":1},{"name":"Shepwood","x":1560,"y":3000,"attach":[1560.0,3000.0],"regio":1},{"name":"Bradbridge","x":1515,"y":2940,"attach":[1515.0,2940.0],"regio":1},{"name":"Sandthwaite","x":1560,"y":2820,"attach":[1560.0,2820.0],"regio":1},{"name":"Coldbury Junction","x":1560,"y":2925,"attach":[1560.0,2925.0],"regio":1},{"name":"Brentgate","x":1560,"y":2910,"attach":[1560.0,2910.0],"regio":1},{"name":"Grimsby","x":1560,"y":2895,"attach":[1560.0,2895.0],"regio":1},{"name":"Dunley","x":1560,"y":2880,"attach":[1560.0,2880.0],"regio":1},{"name":"Millbrook","x":1560,"y":2865,"attach":[1560.0,2865.0],"regio":1},{"name":"Wessted","x":1560,"y":2850,"attach":[1560.0,2850.0],"regio":1},{"name":"Hartden","x":1560,"y":2835,"attach":[1560.0,2835.0],"regio":1},{"name":"Rossdale South","x":1975,"y":1855,"attach":[1975.06,1855.06]},{"name":"Chankow","x":1260,"y":1440,"attach":[1260,1440]},{"name":"Nouvelle-Touraine","x":1980,"y":1920,"attach":[1980.0,1920.0]},{"name":"Canterbury","x":2069,"y":1970,"attach":[2068.76,1970.03]},{"name":"Sandwick","x":1575,"y":3045,"attach":[1575.0,3045.0],"regio":1},{"name":"Ormgate","x":1590,"y":3060,"attach":[1590.0,3060.0],"regio":1},{"name":"Wolddale","x":1605,"y":3075,"attach":[1605.0,3075.0],"regio":1},{"name":"Highstow","x":1554,"y":3024,"attach":[1553.57,3023.57],"regio":1},{"name":"Sandbury","x":1547,"y":3017,"attach":[1547.14,3017.14],"regio":1},{"name":"Hartthwaite","x":1541,"y":3011,"attach":[1540.71,3010.71],"regio":1},{"name":"Elmton","x":1534,"y":3004,"attach":[1534.29,3004.29],"regio":1},{"name":"Rookford","x":1528,"y":2998,"attach":[1527.86,2997.86],"regio":1},{"name":"Larksted","x":1521,"y":2991,"attach":[1521.43,2991.43],"regio":1},{"name":"Langthwaite","x":1515,"y":2985,"attach":[1515.0,2985.0],"regio":1},{"name":"Rookmore","x":1509,"y":2979,"attach":[1508.57,2978.57],"regio":1},{"name":"Highbury","x":1502,"y":2972,"attach":[1502.14,2972.14],"regio":1},{"name":"Thornwick","x":1496,"y":2966,"attach":[1495.71,2965.71],"regio":1},{"name":"Fengate","x":1489,"y":2959,"attach":[1489.29,2959.29],"regio":1},{"name":"Stowby","x":1483,"y":2953,"attach":[1482.86,2952.86],"regio":1},{"name":"Eastmere","x":1476,"y":2946,"attach":[1476.43,2946.43],"regio":1},{"name":"Yungang","x":2040,"y":1230,"attach":[2040.0,1230.0]},{"name":"Chiangkou","x":1840,"y":1230,"attach":[1840.0,1230.0]},{"name":"Tunghai","x":1940,"y":1230,"attach":[1940.0,1230.0]},{"name":"Cranford Central","x":1890,"y":2130,"attach":[1890.0,2130.0]},{"name":"Cranford West","x":1835,"y":2185,"attach":[1834.94,2185.06]},{"name":"Fairden","x":1317,"y":2010,"attach":[1316.59,2010.0]},{"name":"Sancerre","x":1163,"y":2010,"attach":[1163.18,2010.0]},{"name":"Hollingford","x":1890,"y":2025,"attach":[1890.0,2025.0]},{"name":"Wesstead","x":1543,"y":2803,"attach":[1542.86,2802.86],"regio":1},{"name":"Penwell Junction","x":1526,"y":2786,"attach":[1525.71,2785.71],"regio":1},{"name":"Claystow","x":1509,"y":2769,"attach":[1508.57,2768.57],"regio":1},{"name":"Kirkton Junction","x":1491,"y":2751,"attach":[1491.43,2751.43],"regio":1},{"name":"Saxeton","x":1474,"y":2734,"attach":[1474.29,2734.29],"regio":1},{"name":"Hervilly","x":1457,"y":2717,"attach":[1457.14,2717.14]},{"name":"Crowholme","x":1663,"y":3283,"attach":[1663.15,3283.15],"regio":1},{"name":"Cosgrove","x":1674,"y":3298,"attach":[1674.29,3297.93]},{"name":"Fernminster","x":1679,"y":3316,"attach":[1679.49,3315.61],"regio":1},{"name":"Holmwick","x":1680,"y":3334,"attach":[1680.0,3334.19],"regio":1},{"name":"Fernby","x":1680,"y":3353,"attach":[1680.0,3352.79],"regio":1},{"name":"Beckby","x":1680,"y":3371,"attach":[1680.0,3371.4],"regio":1},{"name":"Holmley","x":1222,"y":2902,"attach":[1222.09,2902.09],"regio":1},{"name":"Brambury","x":1214,"y":2894,"attach":[1214.25,2894.1],"regio":1},{"name":"Brentstow","x":1207,"y":2885,"attach":[1207.44,2885.27],"regio":1},{"name":"Malsted","x":1203,"y":2875,"attach":[1202.77,2875.16],"regio":1},{"name":"Woodby","x":1201,"y":2864,"attach":[1200.5,2864.25],"regio":1},{"name":"Rookwick","x":1200,"y":2853,"attach":[1200.0,2853.09],"regio":1},{"name":"Whitbrook","x":1200,"y":2842,"attach":[1200.0,2841.9],"regio":1},{"name":"Stanfield","x":1200,"y":2831,"attach":[1200.0,2830.71],"regio":1},{"name":"Moorton","x":1200,"y":2820,"attach":[1200.0,2819.52],"regio":1},{"name":"Ryebrook","x":1200,"y":2808,"attach":[1200.0,2808.33],"regio":1},{"name":"Standen","x":1200,"y":2797,"attach":[1200.0,2797.14],"regio":1},{"name":"Brentbrook","x":1200,"y":2786,"attach":[1200.0,2785.95],"regio":1},{"name":"Silhurst","x":1200,"y":2775,"attach":[1200.0,2774.76],"regio":1},{"name":"Coldton","x":1200,"y":2764,"attach":[1200.0,2763.57],"regio":1},{"name":"Fairley","x":1200,"y":2752,"attach":[1200.0,2752.38],"regio":1},{"name":"Kirkmere","x":1200,"y":2741,"attach":[1200.0,2741.19],"regio":1},{"name":"Tongshan","x":1485,"y":1560,"attach":[1485.0,1560.0]},{"name":"Yuchow Airport","x":735,"y":1560,"attach":[735.0,1560.0]},{"name":"Hawbridge","x":1680,"y":3430,"attach":[1680.0,3430.0],"regio":1},{"name":"Grimston","x":1680,"y":3410,"attach":[1680.0,3410.0],"regio":1},{"name":"Walsted","x":1617,"y":3423,"attach":[1616.7,3423.3],"regio":1},{"name":"Southford","x":1644,"y":3397,"attach":[1643.76,3396.98],"regio":1},{"name":"Moorminster","x":1590,"y":3438,"attach":[1590.0,3437.5],"regio":1},{"name":"Cotminster","x":1590,"y":3425,"attach":[1590.0,3425.0],"regio":1},{"name":"Hawworth","x":1590,"y":3412,"attach":[1590.0,3412.5],"regio":1},{"name":"Brenthurst","x":1590,"y":3400,"attach":[1590.0,3400.0],"regio":1},{"name":"Woldmore","x":1590,"y":3388,"attach":[1590.0,3387.5],"regio":1},{"name":"Claybury","x":1590,"y":3375,"attach":[1590.0,3375.0],"regio":1},{"name":"Saxeholme","x":1590,"y":3362,"attach":[1590.0,3362.5],"regio":1},{"name":"Moorbridge","x":1590,"y":3350,"attach":[1590.0,3350.0],"regio":1},{"name":"Willowcote","x":1590,"y":3338,"attach":[1590.0,3337.5],"regio":1},{"name":"Blackgate","x":1590,"y":3325,"attach":[1590.0,3325.0],"regio":1},{"name":"Stowton","x":1590,"y":3312,"attach":[1590.0,3312.5],"regio":1},{"name":"Stockwick","x":1626,"y":4050,"attach":[1626.0,4050.0],"regio":1},{"name":"Saxemore","x":1632,"y":4050,"attach":[1632.0,4050.0],"regio":1},{"name":"Wickholme","x":1638,"y":4050,"attach":[1638.0,4050.0],"regio":1},{"name":"Woodthorpe","x":1644,"y":4050,"attach":[1644.0,4050.0],"regio":1},{"name":"Yarbridge","x":1208,"y":2730,"attach":[1207.5,2730.0],"regio":1},{"name":"Woldstow","x":1215,"y":2730,"attach":[1215.0,2730.0],"regio":1},{"name":"Quarrfield","x":1222,"y":2730,"attach":[1222.5,2730.0],"regio":1},{"name":"Chapelbridge","x":903,"y":2040,"attach":[902.55,2040.0]},{"name":"Rushmere","x":785,"y":2040,"attach":[785.09,2040.0]},{"name":"Burnden","x":1440,"y":3549,"attach":[1440.0,3548.89],"regio":1},{"name":"Lynwood Junction","x":1440,"y":3558,"attach":[1440.0,3557.78],"regio":1},{"name":"Leaden Junction","x":1440,"y":3567,"attach":[1440.0,3566.67],"regio":1},{"name":"Thurlstow","x":1440,"y":3576,"attach":[1440.0,3575.56],"regio":1},{"name":"Malby","x":1440,"y":3584,"attach":[1440.0,3584.44],"regio":1},{"name":"Whitcombe","x":1440,"y":3593,"attach":[1440.0,3593.33],"regio":1},{"name":"Crowwood","x":1440,"y":3602,"attach":[1440.0,3602.22],"regio":1},{"name":"Willowbrook","x":1440,"y":3611,"attach":[1440.0,3611.11],"regio":1},{"name":"Foxstow","x":1440,"y":3620,"attach":[1440.0,3620.0],"regio":1},{"name":"Bradwood","x":1440,"y":3629,"attach":[1440.0,3628.89],"regio":1},{"name":"Saxeby","x":1440,"y":3638,"attach":[1440.0,3637.78],"regio":1},{"name":"Birchstow","x":1440,"y":3647,"attach":[1440.0,3646.67],"regio":1},{"name":"Wickthorpe","x":1440,"y":3656,"attach":[1440.0,3655.56],"regio":1},{"name":"Hawstow","x":1440,"y":3664,"attach":[1440.0,3664.44],"regio":1},{"name":"Yarwell","x":1440,"y":3673,"attach":[1440.0,3673.33],"regio":1},{"name":"Wickwell","x":1440,"y":3682,"attach":[1440.0,3682.22],"regio":1},{"name":"Rookbury","x":1440,"y":3691,"attach":[1440.0,3691.11],"regio":1},{"name":"Fenwell","x":1440,"y":3700,"attach":[1440.0,3700.0],"regio":1},{"name":"Walham","x":1440,"y":3709,"attach":[1440.0,3708.89],"regio":1},{"name":"Sandley","x":1440,"y":3718,"attach":[1440.0,3717.78],"regio":1},{"name":"Holmfield","x":1440,"y":3727,"attach":[1440.0,3726.67],"regio":1},{"name":"Newmere","x":1440,"y":3736,"attach":[1440.0,3735.56],"regio":1},{"name":"Brentworth","x":1440,"y":3744,"attach":[1440.0,3744.44],"regio":1},{"name":"Wargate","x":1440,"y":3753,"attach":[1440.0,3753.33],"regio":1},{"name":"Brentstead","x":1440,"y":3762,"attach":[1440.0,3762.22],"regio":1},{"name":"Dunby","x":1440,"y":3771,"attach":[1440.0,3771.11],"regio":1},{"name":"Goldbridge","x":1540,"y":3301,"attach":[1539.97,3301.24],"regio":1}];
const GRAPH={"pts":[[1440,3570],[1440.0,3555.0],[1440.0,3540.0],[1440.0,3585.0],[1440.0,3600.0],[1446.82,3582.49],[1453.63,3594.99],[1454.98,3598.4],[1454.66,3600.62],[1452.66,3601.66],[1449.0,3601.5],[1320,3210],[1305.0,3195.0],[1298.44,3187.11],[1293.75,3178.45],[1290.94,3169.01],[1290.0,3158.79],[1290.0,3139.39],[1290.0,3120.0],[1320.0,3224.31],[1320.0,3238.62],[1320.0,3252.92],[1320.0,3267.23],[1320.0,3281.54],[1320.0,3295.85],[1320.0,3310.15],[1320.0,3324.46],[1320.0,3338.77],[1320.0,3353.08],[1320.0,3367.38],[1320.0,3381.69],[1320.0,3396.0],[1321.06,3407.56],[1324.24,3418.24],[1329.55,3428.05],[1336.97,3436.97],[1347.73,3447.73],[1358.49,3458.49],[1369.24,3469.24],[1380.0,3480.0],[1332.35,3222.35],[1344.7,3234.7],[1357.05,3247.05],[1369.39,3259.39],[1374.97,3264.03],[1381.1,3267.35],[1387.77,3269.34],[1395.0,3270.0],[1410.0,3270.0],[1650,3570],[1650.0,3555.0],[1650.0,3540.0],[1650.0,3525.0],[1650.0,3510.0],[1650.0,3495.0],[1650.0,3480.0],[1650.0,3465.0],[1650.0,3450.0],[1650.0,3585.0],[1650.0,3600.0],[1650.0,3615.0],[1650.0,3630.0],[1650.0,3645.0],[1650.0,3660.0],[1650.0,3675.0],[1650.0,3690.0],[1650.0,3705.0],[1650.0,3720.0],[1650.0,3552.8],[1650.0,3535.61],[1650.0,3518.41],[1650.0,3501.21],[1650.94,3490.99],[1653.75,3481.55],[1658.44,3472.89],[1665.0,3465.0],[1680.0,3450.0],[1710,3180],[1700.0,3170.0],[1690.0,3160.0],[1680.0,3150.0],[1670.0,3140.0],[1660.0,3130.0],[1650.0,3120.0],[1640.0,3110.0],[1630.0,3100.0],[1620.0,3090.0],[1695.0,3195.0],[1688.44,3202.89],[1683.75,3211.55],[1680.94,3220.99],[1680.0,3231.21],[1680.0,3245.65],[1680.0,3260.08],[1680.0,3274.52],[1680.0,3288.95],[1680.0,3303.39],[1680.0,3317.82],[1680.0,3332.26],[1680.0,3346.69],[1680.0,3361.13],[1680.0,3375.56],[1680.0,3390.0],[1697.65,3192.35],[1685.3,3204.7],[1672.95,3217.05],[1660.61,3229.39],[1655.97,3234.97],[1652.65,3241.1],[1650.66,3247.77],[1650.0,3255.0],[1650.0,3270.0],[1690.61,3180.0],[1671.21,3180.0],[1660.99,3180.94],[1651.55,3183.75],[1642.89,3188.44],[1635.0,3195.0],[1620.0,3210.0],[1703.82,3204.72],[1699.81,3214.57],[1693.61,3220.83],[1685.21,3223.51],[1674.61,3222.6],[1660.96,3219.45],[1647.31,3216.3],[1633.65,3213.15],[1710,1500],[1710.0,1515.0],[1710.0,1530.0],[1710.0,1545.0],[1710.0,1560.0],[1695.92,1500.0],[1681.85,1500.0],[1667.77,1500.0],[1653.69,1500.0],[1639.62,1500.0],[1625.54,1500.0],[1611.46,1500.0],[1597.38,1500.0],[1583.31,1500.0],[1569.23,1500.0],[1555.15,1500.0],[1541.08,1500.0],[1527.0,1500.0],[1512.92,1500.0],[1498.85,1500.0],[1484.77,1500.0],[1470.69,1500.0],[1456.62,1500.0],[1442.54,1500.0],[1428.46,1500.0],[1414.38,1500.0],[1400.31,1500.0],[1386.23,1500.0],[1372.15,1500.0],[1358.08,1500.0],[1344.0,1500.0],[1332.44,1501.06],[1321.76,1504.24],[1311.95,1509.55],[1303.03,1516.97],[1292.27,1527.73],[1281.51,1538.49],[1270.76,1549.24],[1260.0,1560.0],[1710.0,1485.41],[1710.0,1470.83],[1710.0,1456.24],[1710.0,1441.66],[1710.0,1427.07],[1710.0,1412.49],[1710.0,1397.9],[1710.0,1383.31],[1710.0,1368.73],[1710.0,1354.14],[1710.0,1339.56],[1710.0,1324.97],[1710.0,1310.38],[1710.0,1295.8],[1710.0,1281.21],[1710.94,1270.99],[1713.75,1261.55],[1718.44,1252.89],[1725.0,1245.0],[1740.0,1230.0],[1729.39,1480.61],[1734.97,1475.97],[1741.1,1472.65],[1747.77,1470.66],[1755.0,1470.0],[1770.0,1470.0],[540,2100],[555.0,2100.0],[570.0,2100.0],[585.0,2100.0],[600.0,2100.0],[615.0,2100.0],[630.0,2100.0],[645.0,2100.0],[660.0,2100.0],[675.0,2100.0],[690.0,2100.0],[1590,3450],[1605.0,3450.0],[1620.0,3450.0],[1635.0,3450.0],[1665.0,3450.0],[1500,3090],[1485.0,3105.0],[1477.11,3111.56],[1468.45,3116.25],[1459.01,3119.06],[1448.79,3120.0],[1434.35,3120.0],[1419.92,3120.0],[1405.48,3120.0],[1391.05,3120.0],[1376.61,3120.0],[1362.18,3120.0],[1347.74,3120.0],[1333.31,3120.0],[1318.87,3120.0],[1304.44,3120.0],[1515.0,3090.0],[1530.0,3090.0],[1545.0,3090.0],[1560.0,3090.0],[1575.0,3090.0],[1590.0,3090.0],[1605.0,3090.0],[1500.0,3105.0],[1500.0,3120.0],[1500.0,3135.0],[1500.0,3150.0],[1500.0,3165.0],[1500.0,3180.0],[1500.0,3195.0],[1500.0,3210.0],[1500.0,3225.0],[1500.0,3240.0],[1502.69,3103.89],[1505.38,3117.77],[1508.06,3131.66],[1510.75,3145.55],[1513.44,3159.44],[1514.98,3171.18],[1515.05,3182.83],[1513.65,3194.4],[1510.77,3205.89],[1505.39,3222.94],[1770.0,1455.48],[1770.0,1440.96],[1770.0,1426.43],[1770.0,1411.91],[1770.0,1397.39],[1770.0,1382.87],[1770.0,1368.35],[1770.0,1353.82],[1770.0,1339.3],[1770.0,1324.78],[1770.0,1310.26],[1770.0,1295.74],[1770.0,1281.21],[1769.06,1270.99],[1766.25,1261.55],[1761.56,1252.89],[1755.0,1245.0],[1770.0,1485.0],[1769.34,1492.23],[1767.35,1498.9],[1764.03,1505.03],[1759.39,1510.61],[1747.05,1522.95],[1734.7,1535.3],[1722.35,1547.65],[1650,3930],[1650.0,3915.0],[1650.0,3900.0],[1650.0,3885.0],[1650.0,3870.0],[1635.0,3930.0],[1620.0,3930.0],[1650.0,3916.0],[1650.0,3902.0],[1650.0,3888.0],[1650.0,3874.0],[1650.0,3860.0],[1650.0,3846.0],[1650.0,3832.0],[1650.0,3818.0],[1650.0,3804.0],[1650.0,3790.0],[1650.0,3776.0],[1650.0,3762.0],[1650.0,3748.0],[1650.0,3734.0],[1605.0,3930.0],[1590.0,3930.0],[1575.0,3930.0],[1560.0,3930.0],[1545.0,3930.0],[1530.0,3930.0],[1515.0,3930.0],[1500.0,3930.0],[1485.0,3930.0],[1470.0,3930.0],[1659.0,3924.0],[1662.7,3920.74],[1664.8,3916.97],[1665.3,3912.68],[1664.2,3907.87],[1657.1,3888.94],[1320,2940],[1335.0,2940.0],[1350.0,2940.0],[1365.0,2940.0],[1380.0,2940.0],[1395.0,2940.0],[1410.0,2940.0],[1425.0,2940.0],[1440.0,2940.0],[1455.0,2940.0],[1470.0,2940.0],[1305.0,2940.0],[1290.0,2940.0],[1275.0,2940.0],[1260.0,2940.0],[1245.0,2940.0],[1230.0,2940.0],[1320.0,2925.0],[1319.34,2917.77],[1317.35,2911.1],[1314.03,2904.97],[1309.39,2899.39],[1299.47,2889.47],[1289.55,2879.55],[1279.62,2869.62],[1269.7,2859.7],[1259.77,2849.77],[1249.85,2839.85],[1239.92,2829.92],[1230.0,2820.0],[1320.0,2954.31],[1320.0,2968.62],[1320.0,2982.93],[1320.0,2997.24],[1320.0,3011.55],[1320.0,3025.86],[1320.0,3040.17],[1320.0,3054.48],[1320.0,3068.79],[1319.06,3079.01],[1316.25,3088.45],[1311.56,3097.11],[1305.0,3105.0],[1321.54,2954.41],[1323.09,2968.83],[1324.63,2983.24],[1326.18,2997.65],[1327.72,3012.07],[1329.27,3026.48],[1330.81,3040.9],[1332.35,3055.31],[1333.9,3069.72],[1335.44,3084.14],[1335.11,3094.94],[1331.54,3103.49],[1324.74,3109.78],[1314.72,3113.82],[750,2610],[735.0,2610.0],[720.0,2610.0],[705.0,2610.0],[690.0,2610.0],[675.0,2610.0],[660.0,2610.0],[750.0,2624.0],[750.0,2638.0],[750.0,2652.0],[750.0,2666.0],[750.0,2680.0],[750.0,2694.0],[750.0,2708.0],[750.0,2722.0],[750.0,2736.0],[750.0,2750.0],[750.0,2764.0],[750.0,2778.0],[750.0,2792.0],[750.0,2806.0],[750.0,2820.0],[736.5,2619.0],[729.62,2622.66],[722.47,2624.64],[715.07,2624.93],[707.4,2623.54],[691.6,2619.03],[675.8,2614.51],[764.12,2610.0],[778.24,2610.0],[792.35,2610.0],[806.47,2610.0],[820.59,2610.0],[834.71,2610.0],[848.82,2610.0],[862.94,2610.0],[877.06,2610.0],[891.18,2610.0],[905.29,2610.0],[919.41,2610.0],[933.53,2610.0],[947.65,2610.0],[961.76,2610.0],[975.88,2610.0],[990.0,2610.0],[1455.0,3930.0],[1440.0,3930.0],[1455.0,3945.0],[1448.44,3952.89],[1443.75,3961.55],[1440.94,3970.99],[1440.0,3981.21],[1440.0,3998.41],[1440.0,4015.61],[1440.0,4032.8],[1440.0,4050.0],[1488.0,3930.0],[1506.0,3930.0],[1517.56,3931.06],[1528.24,3934.24],[1538.05,3939.55],[1546.97,3946.97],[1557.27,3957.27],[1567.58,3967.58],[1577.88,3977.88],[1588.18,3988.18],[1598.49,3998.49],[1608.79,4008.79],[1619.09,4019.09],[1629.39,4029.39],[1639.7,4039.7],[1650.0,4050.0],[1470.0,3915.69],[1470.0,3901.38],[1470.0,3887.07],[1470.0,3872.76],[1470.0,3858.45],[1470.0,3844.14],[1470.0,3829.83],[1470.0,3815.52],[1470.0,3801.21],[1469.06,3790.99],[1466.25,3781.55],[1461.56,3772.89],[1455.0,3765.0],[1440.0,3750.0],[1500.0,3255.0],[1500.0,3270.0],[1500.0,3285.0],[1500.0,3300.0],[1500.0,3315.0],[1500.0,3330.0],[1770,1770],[1785.0,1770.0],[1800.0,1770.0],[1815.0,1770.0],[1830.0,1770.0],[1845.0,1770.0],[1860.0,1770.0],[1875.0,1770.0],[1890.0,1770.0],[1759.7,1780.3],[1749.39,1790.61],[1739.09,1800.91],[1728.79,1811.21],[1718.49,1821.51],[1708.18,1831.82],[1697.88,1842.12],[1687.58,1852.42],[1677.27,1862.73],[1666.97,1873.03],[1658.05,1880.45],[1648.24,1885.76],[1637.56,1888.94],[1626.0,1890.0],[1608.0,1890.0],[1590.0,1890.0],[1770.0,1755.0],[1770.0,1740.0],[1770.0,1725.0],[1770.0,1710.0],[1770.0,1695.0],[1770.0,1680.0],[1770.0,1665.0],[1770.0,1650.0],[1770.0,1635.0],[1770.0,1620.0],[1770.0,1788.0],[1770.0,1806.0],[1768.94,1817.56],[1765.76,1828.24],[1760.45,1838.05],[1753.03,1846.97],[1742.73,1857.27],[1732.42,1867.58],[1722.12,1877.88],[1711.82,1888.18],[1701.51,1898.49],[1691.21,1908.79],[1680.91,1919.09],[1670.61,1929.39],[1660.3,1939.7],[1650.0,1950.0],[2100,1890],[2090.0,1900.0],[2080.0,1910.0],[2070.0,1920.0],[2160,2010],[2145.0,2010.0],[2130.0,2010.0],[2115.0,2010.0],[2100.0,2010.0],[2085.0,2010.0],[2070.0,2010.0],[2055.0,2010.0],[2040.0,2010.0],[960,1830],[970.0,1820.0],[980.0,1810.0],[990.0,1800.0],[1000.0,1790.0],[1010.0,1780.0],[1020.0,1770.0],[1030.0,1760.0],[1040.0,1750.0],[1050.0,1740.0],[1060.0,1730.0],[1070.0,1720.0],[1080.0,1710.0],[1090.0,1700.0],[1100.0,1690.0],[1110.0,1680.0],[1120.0,1670.0],[1130.0,1660.0],[1140.0,1650.0],[1150.0,1640.0],[1160.0,1630.0],[1170.0,1620.0],[1180.0,1610.0],[1190.0,1600.0],[1200.0,1590.0],[960.0,1844.0],[960.0,1858.0],[960.0,1872.0],[960.0,1886.0],[960.0,1900.0],[960.0,1914.0],[960.0,1928.0],[960.0,1942.0],[960.0,1956.0],[961.06,1967.56],[964.24,1978.24],[969.55,1988.05],[976.97,1996.97],[987.73,2007.73],[998.49,2018.49],[1009.24,2029.24],[1020.0,2040.0],[960.0,1815.88],[960.0,1801.76],[960.0,1787.65],[960.0,1773.53],[960.0,1759.41],[960.0,1745.29],[960.0,1731.18],[960.0,1717.06],[960.0,1702.94],[960.0,1688.82],[960.0,1674.71],[960.0,1660.59],[960.0,1646.47],[960.0,1632.35],[960.0,1618.24],[960.0,1604.12],[960.0,1590.0],[950.0,1840.0],[940.0,1850.0],[930.0,1860.0],[920.0,1870.0],[910.0,1880.0],[900.0,1890.0],[890.0,1900.0],[880.0,1910.0],[870.0,1920.0],[860.0,1930.0],[850.0,1940.0],[840.0,1950.0],[830.0,1960.0],[820.0,1970.0],[810.0,1980.0],[800.0,1990.0],[790.0,2000.0],[780.0,2010.0],[770.0,2020.0],[760.0,2030.0],[750.0,2040.0],[740.0,2050.0],[730.0,2060.0],[720.0,2070.0],[710.0,2080.0],[700.0,2090.0],[1650.0,3494.12],[1650.0,3508.24],[1650.0,3522.35],[1650.0,3536.47],[1650.0,3550.59],[1650.0,3564.71],[1650.0,3578.82],[1650.0,3592.94],[1650.0,3607.06],[1650.0,3621.18],[1650.0,3635.29],[1650.0,3649.41],[1650.0,3663.53],[1650.0,3677.65],[1650.0,3691.76],[1650.0,3705.88],[1635.88,3480.0],[1621.76,3480.0],[1607.65,3480.0],[1593.53,3480.0],[1579.41,3480.0],[1565.29,3480.0],[1551.18,3480.0],[1537.06,3480.0],[1522.94,3480.0],[1508.82,3480.0],[1494.71,3480.0],[1480.59,3480.0],[1466.47,3480.0],[1452.35,3480.0],[1438.24,3480.0],[1424.12,3480.0],[1410.0,3480.0],[1080,2730],[1080.0,2745.0],[1079.34,2752.23],[1077.35,2758.9],[1074.03,2765.03],[1069.39,2770.61],[1057.05,2782.95],[1044.7,2795.3],[1032.35,2807.65],[1020.0,2820.0],[1095.0,2730.0],[1110.0,2730.0],[1125.0,2730.0],[1140.0,2730.0],[1155.0,2730.0],[1170.0,2730.0],[1185.0,2730.0],[1200.0,2730.0],[1080.0,2715.0],[1079.34,2707.77],[1077.35,2701.1],[1074.03,2694.97],[1069.39,2689.39],[1059.47,2679.47],[1049.55,2669.55],[1039.62,2659.62],[1029.7,2649.7],[1019.77,2639.77],[1009.85,2629.85],[999.92,2619.92],[2010,2460],[2000.0,2450.0],[1990.0,2440.0],[1980.0,2430.0],[1970.0,2420.0],[1960.0,2410.0],[1950.0,2400.0],[1940.0,2390.0],[1930.0,2380.0],[1920.0,2370.0],[1910.0,2360.0],[1900.0,2350.0],[1890.0,2340.0],[1880.0,2330.0],[1870.0,2320.0],[1860.0,2310.0],[1850.0,2300.0],[1840.0,2290.0],[1830.0,2280.0],[1820.0,2270.0],[1810.0,2260.0],[1800.0,2250.0],[1790.0,2240.0],[1780.0,2230.0],[1770.0,2220.0],[2000.0,2470.0],[1990.0,2480.0],[1980.0,2490.0],[1970.0,2500.0],[1960.0,2510.0],[1950.0,2520.0],[1940.0,2530.0],[1930.0,2540.0],[1920.0,2550.0],[1910.0,2560.0],[1900.0,2570.0],[1890.0,2580.0],[1880.0,2590.0],[1870.0,2600.0],[1860.0,2610.0],[1850.0,2620.0],[1840.0,2630.0],[1830.0,2640.0],[1820.0,2650.0],[1810.0,2660.0],[1800.0,2670.0],[1790.0,2680.0],[1780.0,2690.0],[1770.0,2700.0],[1760.0,2710.0],[1750.0,2720.0],[1740.0,2730.0],[1730.0,2740.0],[1720.0,2750.0],[1710.0,2760.0],[1700.0,2770.0],[1690.0,2780.0],[1680.0,2790.0],[1670.0,2800.0],[1660.0,2810.0],[1650.0,2820.0],[1995.79,2460.0],[1981.58,2460.0],[1967.37,2460.0],[1953.16,2460.0],[1938.95,2460.0],[1924.74,2460.0],[1910.53,2460.0],[1896.32,2460.0],[1882.11,2460.0],[1867.89,2460.0],[1853.68,2460.0],[1839.47,2460.0],[1825.26,2460.0],[1811.05,2460.0],[1796.84,2460.0],[1782.63,2460.0],[1768.42,2460.0],[1754.21,2460.0],[1740.0,2460.0],[1725.79,2460.0],[1711.58,2460.0],[1697.37,2460.0],[1683.16,2460.0],[1668.95,2460.0],[1654.74,2460.0],[1640.53,2460.0],[1626.32,2460.0],[1612.11,2460.0],[1597.89,2460.0],[1583.68,2460.0],[1569.47,2460.0],[1555.26,2460.0],[1541.05,2460.0],[1526.84,2460.0],[1512.63,2460.0],[1498.42,2460.0],[1484.21,2460.0],[1470.0,2460.0],[1650.0,3735.0],[1650.0,3750.0],[1650.0,3765.0],[1650.0,3780.0],[1650.0,3795.0],[1650.0,3810.0],[1650.0,3825.0],[1650.0,3840.0],[1650.0,3855.0],[1005.0,2610.0],[1020.0,2610.0],[1035.0,2610.0],[1050.0,2610.0],[1065.0,2610.0],[1080.0,2610.0],[990.0,2624.44],[990.0,2638.87],[990.0,2653.31],[990.0,2667.74],[990.0,2682.18],[990.0,2696.61],[990.0,2711.05],[990.0,2725.48],[990.0,2739.92],[990.0,2754.35],[990.0,2768.79],[990.94,2779.01],[993.75,2788.45],[998.44,2797.11],[1005.0,2805.0],[1634.0,1950.0],[1618.0,1950.0],[1602.0,1950.0],[1586.0,1950.0],[1570.0,1950.0],[1554.0,1950.0],[1542.44,1951.06],[1531.76,1954.24],[1521.95,1959.55],[1513.03,1966.97],[1502.27,1977.73],[1491.51,1988.49],[1480.76,1999.24],[1470.0,2010.0],[1664.52,1950.0],[1679.04,1950.0],[1693.57,1950.0],[1708.09,1950.0],[1722.61,1950.0],[1737.13,1950.0],[1751.65,1950.0],[1766.18,1950.0],[1780.7,1950.0],[1795.22,1950.0],[1809.74,1950.0],[1824.26,1950.0],[1838.79,1950.0],[1849.01,1949.06],[1858.45,1946.25],[1867.11,1941.56],[1875.0,1935.0],[1890.0,1920.0],[1635.0,1965.0],[1628.44,1972.89],[1623.75,1981.55],[1620.94,1990.99],[1620.0,2001.21],[1620.0,2020.61],[1620.0,2040.0],[1640.0,1940.0],[1630.0,1930.0],[1620.0,1920.0],[1610.0,1910.0],[1600.0,1900.0],[1620,3360],[1600.61,3340.61],[1595.97,3335.03],[1592.65,3328.9],[1590.66,3322.23],[1590.0,3315.0],[1590.0,3300.0],[1635.0,3360.0],[1642.23,3360.66],[1648.9,3362.65],[1655.03,3365.97],[1660.61,3370.61],[1620.0,3345.0],[1620.0,3330.0],[1620.0,3315.0],[1620.0,3300.0],[1620.0,3285.0],[1620.0,3270.0],[1620.0,3255.0],[1620.0,3240.0],[1620.0,3225.0],[1050,2160],[1065.0,2175.0],[1071.56,2182.89],[1076.25,2191.55],[1079.06,2200.99],[1080.0,2211.21],[1080.0,2225.46],[1080.0,2239.7],[1080.0,2253.94],[1080.0,2268.18],[1080.0,2282.43],[1080.0,2296.67],[1080.0,2310.91],[1080.0,2325.15],[1080.0,2339.39],[1080.0,2353.64],[1080.0,2367.88],[1080.0,2382.12],[1080.0,2396.36],[1080.0,2410.61],[1080.0,2424.85],[1080.0,2439.09],[1080.0,2453.33],[1080.0,2467.58],[1080.0,2481.82],[1080.0,2496.06],[1080.0,2510.3],[1080.0,2524.55],[1080.0,2538.79],[1080.0,2553.03],[1080.0,2567.27],[1080.0,2581.52],[1080.0,2595.76],[1035.0,2145.0],[1028.44,2137.11],[1023.75,2128.45],[1020.94,2119.01],[1020.0,2108.79],[1020.0,2091.59],[1020.0,2074.39],[1020.0,2057.2],[1035.47,2160.0],[1020.95,2160.0],[1006.42,2160.0],[991.89,2160.0],[977.37,2160.0],[962.84,2160.0],[948.32,2160.0],[933.79,2160.0],[919.26,2160.0],[904.74,2160.0],[890.21,2160.0],[875.68,2160.0],[861.16,2160.0],[846.63,2160.0],[832.11,2160.0],[817.58,2160.0],[803.05,2160.0],[788.53,2160.0],[774.0,2160.0],[762.44,2158.94],[751.76,2155.76],[741.95,2150.45],[733.03,2143.03],[722.27,2132.27],[711.51,2121.51],[700.76,2110.76],[1072.89,2181.56],[1081.55,2186.25],[1090.99,2189.06],[1101.21,2190.0],[1115.4,2190.0],[1129.58,2190.0],[1143.77,2190.0],[1157.95,2190.0],[1172.13,2190.0],[1186.32,2190.0],[1200.5,2190.0],[1214.69,2190.0],[1228.87,2190.0],[1243.05,2190.0],[1257.24,2190.0],[1271.42,2190.0],[1285.61,2190.0],[1299.79,2190.0],[1313.97,2190.0],[1328.16,2190.0],[1342.34,2190.0],[1356.53,2190.0],[1370.71,2190.0],[1384.9,2190.0],[1399.08,2190.0],[1413.26,2190.0],[1427.45,2190.0],[1441.63,2190.0],[1455.82,2190.0],[1470.0,2190.0],[1620.0,3945.0],[1620.0,3960.0],[1620.0,3975.0],[1620.0,3990.0],[1620.0,4005.0],[1620.0,4020.0],[1620.0,4035.0],[1620.0,4050.0],[1623.22,3943.93],[1626.43,3957.87],[1629.65,3971.8],[1632.86,3985.74],[1634.55,3996.79],[1634.47,4007.68],[1632.62,4018.42],[1629.0,4029.0],[1620.0,3947.2],[1620.0,3964.39],[1620.0,3981.59],[1620.0,3998.79],[1620.94,4009.01],[1623.75,4018.45],[1628.44,4027.11],[1635.0,4035.0],[942.8,1590.0],[925.61,1590.0],[908.41,1590.0],[891.21,1590.0],[880.99,1589.06],[871.55,1586.25],[862.89,1581.56],[855.0,1575.0],[840.0,1560.0],[974.12,1590.0],[988.24,1590.0],[1002.35,1590.0],[1016.47,1590.0],[1030.59,1590.0],[1044.71,1590.0],[1058.82,1590.0],[1072.94,1590.0],[1087.06,1590.0],[1101.18,1590.0],[1115.29,1590.0],[1129.41,1590.0],[1143.53,1590.0],[1157.65,1590.0],[1171.76,1590.0],[1185.88,1590.0],[1640.0,2830.0],[1630.0,2840.0],[1620.0,2850.0],[1610.0,2860.0],[1600.0,2870.0],[1590.0,2880.0],[1643.82,2844.72],[1639.82,2855.27],[1633.63,2863.63],[1625.27,2869.82],[1614.72,2873.82],[1230.0,2925.0],[1230.0,2910.0],[1230.0,2956.0],[1230.0,2972.0],[1230.0,2988.0],[1230.0,3004.0],[1230.0,3020.0],[1230.0,3036.0],[1231.06,3047.56],[1234.24,3058.24],[1239.55,3068.05],[1246.97,3076.97],[1257.73,3087.73],[1268.49,3098.49],[1279.24,3109.24],[1230.0,2895.0],[1230.0,2880.0],[1230.0,2865.0],[1230.0,2850.0],[1230.0,2835.0],[1395.0,3480.0],[1395.0,3465.0],[1401.56,3457.11],[1406.25,3448.45],[1409.06,3439.01],[1410.0,3428.79],[1410.0,3414.35],[1410.0,3399.92],[1410.0,3385.48],[1410.0,3371.05],[1410.0,3356.61],[1410.0,3342.18],[1410.0,3327.74],[1410.0,3313.31],[1410.0,3298.87],[1410.0,3284.44],[1429.39,3499.39],[1434.03,3504.97],[1437.35,3511.1],[1439.34,3517.77],[1440.0,3525.0],[1425.0,3465.0],[1432.89,3458.44],[1441.55,3453.75],[1450.99,3450.94],[1461.21,3450.0],[1475.52,3450.0],[1489.83,3450.0],[1504.14,3450.0],[1518.45,3450.0],[1532.76,3450.0],[1547.07,3450.0],[1561.38,3450.0],[1575.69,3450.0],[1410.0,3466.0],[1410.0,3452.0],[1410.0,3438.0],[1410.0,3424.0],[1410.0,3410.0],[1410.0,3396.0],[1410.0,3382.0],[1410.0,3368.0],[1410.0,3354.0],[1410.0,3340.0],[1410.0,3326.0],[1410.0,3312.0],[1410.0,3298.0],[1410.0,3284.0],[1440.0,3915.0],[1440.0,3900.0],[1440.0,3885.0],[1440.0,3870.0],[1440.0,3855.0],[1440.0,3840.0],[1440.0,3825.0],[1440.0,3810.0],[1440.0,3795.0],[1440.0,3780.0],[1445.39,3912.94],[1450.77,3895.89],[1453.65,3884.4],[1455.05,3872.83],[1454.98,3861.18],[1453.44,3849.44],[1450.75,3835.55],[1448.06,3821.66],[1445.38,3807.77],[1442.69,3793.89],[1470.0,2445.79],[1470.0,2431.58],[1470.0,2417.37],[1470.0,2403.16],[1470.0,2388.95],[1470.0,2374.74],[1470.0,2360.53],[1470.0,2346.32],[1470.0,2332.11],[1470.0,2317.89],[1470.0,2303.68],[1470.0,2289.47],[1470.0,2275.26],[1470.0,2261.05],[1470.0,2246.84],[1470.0,2232.63],[1470.0,2218.42],[1470.0,2204.21],[1470.0,2474.52],[1470.0,2489.04],[1470.0,2503.57],[1470.0,2518.09],[1470.0,2532.61],[1470.0,2547.13],[1470.0,2561.65],[1470.0,2576.18],[1470.0,2590.7],[1470.0,2605.22],[1470.0,2619.74],[1470.0,2634.26],[1470.0,2648.79],[1469.06,2659.01],[1466.25,2668.45],[1461.56,2677.11],[1455.0,2685.0],[1440.0,2700.0],[1454.0,4050.0],[1468.0,4050.0],[1482.0,4050.0],[1496.0,4050.0],[1510.0,4050.0],[1524.0,4050.0],[1538.0,4050.0],[1552.0,4050.0],[1566.0,4050.0],[1580.0,4050.0],[1594.0,4050.0],[1608.0,4050.0],[1622.0,4050.0],[1636.0,4050.0],[1454.18,4052.07],[1468.36,4054.15],[1482.54,4056.22],[1496.72,4058.3],[1510.89,4060.37],[1525.07,4062.45],[1539.25,4064.52],[1551.11,4065.74],[1562.94,4065.92],[1574.74,4065.05],[1586.5,4063.14],[1602.38,4059.85],[1618.25,4056.57],[1634.13,4053.28],[690,2220],[690.0,2205.0],[690.0,2190.0],[690.0,2175.0],[690.0,2160.0],[690.0,2145.0],[690.0,2130.0],[690.0,2115.0],[675.0,2235.0],[668.44,2242.89],[663.75,2251.55],[660.94,2260.99],[660.0,2271.21],[660.0,2285.33],[660.0,2299.45],[660.0,2313.56],[660.0,2327.68],[660.0,2341.79],[660.0,2355.91],[660.0,2370.03],[660.0,2384.14],[660.0,2398.26],[660.0,2412.37],[660.0,2426.49],[660.0,2440.61],[660.0,2454.72],[660.0,2468.84],[660.0,2482.95],[660.0,2497.07],[660.0,2511.19],[660.0,2525.3],[660.0,2539.42],[660.0,2553.54],[660.0,2567.65],[660.0,2581.77],[660.0,2595.88],[699.0,2199.0],[702.62,2188.42],[704.47,2177.68],[704.55,2166.79],[702.86,2155.74],[699.65,2141.8],[696.43,2127.87],[693.22,2113.93],[1440.0,3735.0],[1440.0,3720.0],[1440.0,3705.0],[1440.0,3690.0],[1440.0,3675.0],[1440.0,3660.0],[1440.0,3645.0],[1440.0,3630.0],[1440.0,3615.0],[1440.0,3765.0],[764.21,2820.0],[778.42,2820.0],[792.63,2820.0],[806.84,2820.0],[821.05,2820.0],[835.26,2820.0],[849.47,2820.0],[863.68,2820.0],[877.89,2820.0],[892.11,2820.0],[906.32,2820.0],[920.53,2820.0],[934.74,2820.0],[948.95,2820.0],[963.16,2820.0],[977.37,2820.0],[991.58,2820.0],[1005.79,2820.0],[764.35,2821.69],[778.7,2823.38],[793.05,2825.07],[807.41,2826.75],[821.76,2828.44],[836.11,2830.13],[850.46,2831.82],[864.81,2833.51],[879.16,2835.2],[891.08,2836.19],[902.97,2836.39],[914.85,2835.77],[926.72,2834.35],[942.27,2831.96],[957.81,2829.57],[973.36,2827.18],[988.91,2824.78],[1004.45,2822.39],[764.75,2823.11],[779.5,2826.21],[794.25,2829.32],[809.01,2832.42],[823.76,2835.53],[838.51,2838.63],[853.26,2841.74],[868.01,2844.84],[882.76,2847.95],[897.51,2851.06],[909.2,2852.71],[920.77,2852.71],[932.22,2851.08],[943.56,2847.8],[958.84,2842.24],[974.13,2836.68],[989.42,2831.12],[1004.71,2825.56],[1230.0,2805.0],[1230.0,2790.0],[1230.0,2775.0],[1230.0,2760.0],[1230.0,2745.0],[1230.0,2730.0],[645.0,2610.0],[630.0,2610.0],[615.0,2610.0],[600.0,2610.0],[585.0,2610.0],[570.0,2610.0],[555.0,2610.0],[540.0,2610.0],[525.0,2610.0],[510.0,2610.0],[495.0,2610.0],[480.0,2610.0],[1980,1770],[1965.0,1770.0],[1950.0,1770.0],[1935.0,1770.0],[1920.0,1770.0],[1905.0,1770.0],[1620.0,3195.0],[1620.0,3180.0],[1620.0,3165.0],[1620.0,3150.0],[1620.0,3135.0],[1620.0,3120.0],[1620.0,3105.0],[1620.66,3232.23],[1622.65,3238.9],[1625.97,3245.03],[1630.61,3250.61],[1629.0,3189.0],[1632.62,3178.42],[1634.47,3167.68],[1634.55,3156.79],[1632.86,3145.74],[1629.65,3131.8],[1626.43,3117.87],[1623.22,3103.93],[1619.34,3187.77],[1617.35,3181.1],[1614.03,3174.97],[1609.39,3169.39],[1590.0,3150.0],[1300.0,3130.0],[1310.0,3140.0],[1320.0,3150.0],[1330.0,3160.0],[1340.0,3170.0],[1350.0,3180.0],[1360.0,3190.0],[1370.0,3200.0],[1380.0,3210.0],[1390.0,3220.0],[1400.0,3230.0],[1410.0,3240.0],[1420.0,3250.0],[1430.0,3260.0],[1440.0,3270.0],[1450.0,3280.0],[1460.0,3290.0],[1470.0,3300.0],[1480.0,3310.0],[1490.0,3320.0],[1299.94,3129.94],[1309.89,3139.89],[1319.83,3149.83],[1329.78,3159.78],[1339.72,3169.72],[1349.67,3179.67],[1359.61,3189.61],[1369.56,3199.56],[1379.5,3209.5],[1389.45,3219.45],[1399.39,3229.39],[1404.03,3234.97],[1407.35,3241.1],[1409.34,3247.77],[1410.0,3255.0],[1659.0,3856.5],[1662.66,3849.62],[1664.64,3842.47],[1664.93,3835.07],[1663.54,3827.4],[1659.03,3811.6],[1654.51,3795.8],[1560,2940],[1560.0,2925.0],[1560.66,2917.77],[1562.65,2911.1],[1565.97,2904.97],[1570.61,2899.39],[1560.0,2955.0],[1560.0,2970.0],[1560.0,2985.0],[1560.0,3000.0],[1560.0,3015.0],[1560.0,3030.0],[1545.0,2940.0],[1530.0,2940.0],[1515.0,2940.0],[1500.0,2940.0],[1485.0,2940.0],[1560.0,2910.0],[1560.0,2895.0],[1560.0,2880.0],[1560.0,2865.0],[1560.0,2850.0],[1560.0,2835.0],[1560.0,2820.0],[1890.0,1785.0],[1890.0,1800.0],[1890.0,1815.0],[1890.0,1830.0],[1890.0,1845.0],[1890.0,1860.0],[1890.0,1875.0],[1890.0,1890.0],[1890.0,1905.0],[1890.0,1755.0],[1889.34,1747.77],[1887.35,1741.1],[1884.03,1734.97],[1879.39,1729.39],[1869.45,1719.45],[1859.5,1709.5],[1849.56,1699.56],[1839.61,1689.61],[1829.67,1679.67],[1819.72,1669.72],[1809.78,1659.78],[1799.83,1649.83],[1789.89,1639.89],[1779.94,1629.94],[1899.96,1779.96],[1909.91,1789.91],[1919.87,1799.87],[1929.83,1809.83],[1939.78,1819.78],[1949.74,1829.74],[1959.7,1839.7],[1969.65,1849.65],[1979.61,1859.61],[1989.57,1869.57],[1999.52,1879.52],[2009.48,1889.48],[2019.44,1899.44],[2029.39,1909.39],[2034.97,1914.03],[2041.1,1917.35],[2047.77,1919.34],[2055.0,1920.0],[1260,1440],[1260.0,1455.0],[1260.0,1470.0],[1260.0,1485.0],[1260.0,1500.0],[1260.0,1515.0],[1260.0,1530.0],[1260.0,1545.0],[2040.0,1920.0],[2025.0,1920.0],[2010.0,1920.0],[1995.0,1920.0],[1980.0,1920.0],[1965.0,1920.0],[1950.0,1920.0],[1935.0,1920.0],[1920.0,1920.0],[1905.0,1920.0],[2070.0,1939.39],[2070.0,1958.79],[2069.06,1969.01],[2066.25,1978.45],[2061.56,1987.11],[2055.0,1995.0],[1570.0,3040.0],[1580.0,3050.0],[1590.0,3060.0],[1600.0,3070.0],[1610.0,3080.0],[1550.0,3020.0],[1540.0,3010.0],[1530.0,3000.0],[1520.0,2990.0],[1510.0,2980.0],[1500.0,2970.0],[1490.0,2960.0],[1480.0,2950.0],[1754.29,1230.0],[1768.57,1230.0],[1782.86,1230.0],[1797.14,1230.0],[1811.43,1230.0],[1825.71,1230.0],[1840.0,1230.0],[1854.29,1230.0],[1868.57,1230.0],[1882.86,1230.0],[1897.14,1230.0],[1911.43,1230.0],[1925.71,1230.0],[1940.0,1230.0],[1954.29,1230.0],[1968.57,1230.0],[1982.86,1230.0],[1997.14,1230.0],[2011.43,1230.0],[2025.71,1230.0],[2040.0,1230.0],[1770.0,2205.0],[1769.34,2197.77],[1767.35,2191.1],[1764.03,2184.97],[1759.39,2179.39],[1749.44,2169.44],[1739.48,2159.48],[1729.52,2149.52],[1719.57,2139.57],[1709.61,2129.61],[1699.65,2119.65],[1689.7,2109.7],[1679.74,2099.74],[1669.78,2089.78],[1659.83,2079.83],[1649.87,2069.87],[1639.91,2059.91],[1629.96,2049.96],[1755.0,2205.0],[1747.11,2198.44],[1738.45,2193.75],[1729.01,2190.94],[1718.79,2190.0],[1704.15,2190.0],[1689.52,2190.0],[1674.88,2190.0],[1660.25,2190.0],[1645.61,2190.0],[1630.98,2190.0],[1616.35,2190.0],[1601.71,2190.0],[1587.08,2190.0],[1572.44,2190.0],[1557.81,2190.0],[1543.17,2190.0],[1528.54,2190.0],[1513.9,2190.0],[1499.27,2190.0],[1484.63,2190.0],[1785.0,2220.0],[1792.23,2219.34],[1798.9,2217.35],[1805.03,2214.03],[1810.61,2209.39],[1820.53,2199.47],[1830.45,2189.55],[1840.38,2179.62],[1850.3,2169.7],[1860.23,2159.77],[1870.15,2149.85],[1880.08,2139.92],[1890.0,2130.0],[1480.0,2000.0],[1490.0,1990.0],[1500.0,1980.0],[1510.0,1970.0],[1520.0,1960.0],[1530.0,1950.0],[1540.0,1940.0],[1550.0,1930.0],[1560.0,1920.0],[1570.0,1910.0],[1580.0,1900.0],[1470.0,2025.0],[1470.0,2040.0],[1470.0,2055.0],[1470.0,2070.0],[1470.0,2085.0],[1470.0,2100.0],[1470.0,2115.0],[1470.0,2130.0],[1470.0,2145.0],[1470.0,2160.0],[1470.0,2175.0],[1455.76,2010.0],[1441.52,2010.0],[1427.27,2010.0],[1413.03,2010.0],[1398.79,2010.0],[1384.55,2010.0],[1370.3,2010.0],[1356.06,2010.0],[1341.82,2010.0],[1327.58,2010.0],[1313.33,2010.0],[1299.09,2010.0],[1284.85,2010.0],[1270.61,2010.0],[1256.36,2010.0],[1242.12,2010.0],[1227.88,2010.0],[1213.64,2010.0],[1199.39,2010.0],[1185.15,2010.0],[1170.91,2010.0],[1156.67,2010.0],[1142.43,2010.0],[1128.18,2010.0],[1113.94,2010.0],[1099.7,2010.0],[1085.46,2010.0],[1071.21,2010.0],[1060.99,2010.94],[1051.55,2013.75],[1042.89,2018.44],[1035.0,2025.0],[1890.0,1934.0],[1890.0,1948.0],[1890.0,1962.0],[1890.0,1976.0],[1890.0,1990.0],[1890.0,2004.0],[1890.0,2018.0],[1890.0,2032.0],[1890.0,2046.0],[1890.0,2060.0],[1890.0,2074.0],[1890.0,2088.0],[1890.0,2102.0],[1890.0,2116.0],[1550.0,2810.0],[1540.0,2800.0],[1530.0,2790.0],[1520.0,2780.0],[1510.0,2770.0],[1500.0,2760.0],[1490.0,2750.0],[1480.0,2740.0],[1470.0,2730.0],[1460.0,2720.0],[1450.0,2710.0],[1579.39,2839.39],[1584.03,2844.97],[1587.35,2851.1],[1589.34,2857.77],[1590.0,2865.0],[1665.0,3285.0],[1671.56,3292.89],[1676.25,3301.55],[1679.06,3310.99],[1680.0,3321.21],[1680.0,3338.41],[1680.0,3355.61],[1680.0,3372.8],[1215.0,2895.0],[1208.44,2887.11],[1203.75,2878.45],[1200.94,2869.01],[1200.0,2858.79],[1200.0,2844.48],[1200.0,2830.17],[1200.0,2815.86],[1200.0,2801.55],[1200.0,2787.24],[1200.0,2772.93],[1200.0,2758.62],[1200.0,2744.31],[1089.94,2619.94],[1099.89,2629.89],[1109.83,2639.83],[1119.78,2649.78],[1129.72,2659.72],[1139.67,2669.67],[1149.61,2679.61],[1159.56,2689.56],[1169.5,2699.5],[1179.45,2709.45],[1189.39,2719.39],[1194.97,2724.03],[1201.1,2727.35],[1207.77,2729.34],[1215.0,2730.0],[1580.0,1880.0],[1570.0,1870.0],[1560.0,1860.0],[1550.0,1850.0],[1540.0,1840.0],[1530.0,1830.0],[1520.0,1820.0],[1510.0,1810.0],[1500.0,1800.0],[1490.0,1790.0],[1480.0,1780.0],[1470.0,1770.0],[1460.0,1760.0],[1450.0,1750.0],[1440.0,1740.0],[1430.0,1730.0],[1420.0,1720.0],[1410.0,1710.0],[1400.0,1700.0],[1390.0,1690.0],[1380.0,1680.0],[1370.0,1670.0],[1360.0,1660.0],[1350.0,1650.0],[1340.0,1640.0],[1330.0,1630.0],[1320.0,1620.0],[1310.0,1610.0],[1300.0,1600.0],[1290.0,1590.0],[1280.0,1580.0],[1270.0,1570.0],[1610.0,2050.0],[1600.0,2060.0],[1590.0,2070.0],[1580.0,2080.0],[1570.0,2090.0],[1560.0,2100.0],[1550.0,2110.0],[1540.0,2120.0],[1530.0,2130.0],[1520.0,2140.0],[1510.0,2150.0],[1500.0,2160.0],[1490.0,2170.0],[1480.0,2180.0],[1720.0,1570.0],[1730.0,1580.0],[1740.0,1590.0],[1750.0,1600.0],[1760.0,1610.0],[1695.94,1560.0],[1681.88,1560.0],[1667.81,1560.0],[1653.75,1560.0],[1639.69,1560.0],[1625.62,1560.0],[1611.56,1560.0],[1597.5,1560.0],[1583.44,1560.0],[1569.38,1560.0],[1555.31,1560.0],[1541.25,1560.0],[1527.19,1560.0],[1513.12,1560.0],[1499.06,1560.0],[1485.0,1560.0],[1470.94,1560.0],[1456.88,1560.0],[1442.81,1560.0],[1428.75,1560.0],[1414.69,1560.0],[1400.62,1560.0],[1386.56,1560.0],[1372.5,1560.0],[1358.44,1560.0],[1344.38,1560.0],[1330.31,1560.0],[1316.25,1560.0],[1302.19,1560.0],[1288.12,1560.0],[1274.06,1560.0],[630,1560],[644.0,1560.0],[658.0,1560.0],[672.0,1560.0],[686.0,1560.0],[700.0,1560.0],[714.0,1560.0],[728.0,1560.0],[742.0,1560.0],[756.0,1560.0],[770.0,1560.0],[784.0,1560.0],[798.0,1560.0],[812.0,1560.0],[826.0,1560.0],[1680.0,3435.0],[1680.0,3420.0],[1680.0,3405.0],[1602.35,3437.65],[1614.7,3425.3],[1627.05,3412.95],[1639.39,3400.61],[1644.97,3395.97],[1651.1,3392.65],[1657.77,3390.66],[1665.0,3390.0],[1590.0,3435.0],[1590.0,3420.0],[1590.0,3405.0],[1590.0,3390.0],[1590.0,3375.0],[1590.0,3360.0],[1590.0,3345.0],[1590.0,3330.0],[1425.56,2700.0],[1411.13,2700.0],[1396.69,2700.0],[1382.26,2700.0],[1367.82,2700.0],[1353.39,2700.0],[1338.95,2700.0],[1324.52,2700.0],[1310.08,2700.0],[1295.65,2700.0],[1281.21,2700.0],[1270.99,2700.94],[1261.55,2703.75],[1252.89,2708.44],[1245.0,2715.0],[1635.0,4050.0],[1245.0,1560.0],[1237.77,1560.66],[1231.1,1562.65],[1224.97,1565.97],[1219.39,1570.61],[1246.0,1560.0],[1232.0,1560.0],[1218.0,1560.0],[1204.0,1560.0],[1190.0,1560.0],[1176.0,1560.0],[1162.0,1560.0],[1148.0,1560.0],[1134.0,1560.0],[1120.0,1560.0],[1106.0,1560.0],[1092.0,1560.0],[1078.0,1560.0],[1064.0,1560.0],[1050.0,1560.0],[1036.0,1560.0],[1022.0,1560.0],[1008.0,1560.0],[994.0,1560.0],[980.0,1560.0],[966.0,1560.0],[952.0,1560.0],[938.0,1560.0],[924.0,1560.0],[910.0,1560.0],[896.0,1560.0],[882.0,1560.0],[868.0,1560.0],[854.0,1560.0],[1005.53,2040.0],[991.06,2040.0],[976.59,2040.0],[962.12,2040.0],[947.65,2040.0],[933.18,2040.0],[918.71,2040.0],[904.24,2040.0],[889.76,2040.0],[875.29,2040.0],[860.82,2040.0],[846.35,2040.0],[831.88,2040.0],[817.41,2040.0],[802.94,2040.0],[788.47,2040.0],[774.0,2040.0],[762.44,2041.06],[751.76,2044.24],[741.95,2049.55],[733.03,2056.97],[722.27,2067.73],[711.51,2078.49],[700.76,2089.24],[1440.0,3554.12],[1440.0,3568.24],[1440.0,3582.35],[1440.0,3596.47],[1440.0,3610.59],[1440.0,3624.71],[1440.0,3638.82],[1440.0,3652.94],[1440.0,3667.06],[1440.0,3681.18],[1440.0,3695.29],[1440.0,3709.41],[1440.0,3723.53],[1440.0,3737.65],[1440.0,3751.76],[1440.0,3765.88],[1515.0,3315.0],[1522.89,3308.44],[1531.55,3303.75],[1540.99,3300.94],[1551.21,3300.0],[1570.61,3300.0],[2025.0,2010.0],[2017.77,2010.66],[2011.1,2012.65],[2004.97,2015.97],[1999.39,2020.61],[1989.45,2030.55],[1979.5,2040.5],[1969.56,2050.44],[1959.61,2060.39],[1949.67,2070.33],[1939.72,2080.28],[1929.78,2090.22],[1919.83,2100.17],[1909.89,2110.11],[1899.94,2120.06]],"edges":[[0,1,0],[1,2,0],[0,3,0],[3,4,0],[0,5,2],[5,6,2],[6,7,2],[7,8,2],[8,9,2],[9,10,2],[10,4,2],[11,12,1],[12,13,1],[13,14,1],[14,15,1],[15,16,1],[16,17,1],[17,18,1],[11,19,1],[19,20,1],[20,21,1],[21,22,1],[22,23,1],[23,24,1],[24,25,1],[25,26,1],[26,27,1],[27,28,1],[28,29,1],[29,30,1],[30,31,1],[31,32,1],[32,33,1],[33,34,1],[34,35,1],[35,36,1],[36,37,1],[37,38,1],[38,39,1],[11,40,2],[40,41,2],[41,42,2],[42,43,2],[43,44,2],[44,45,2],[45,46,2],[46,47,2],[47,48,2],[49,50,1],[50,51,1],[51,52,1],[52,53,1],[53,54,1],[54,55,1],[55,56,1],[56,57,1],[49,58,1],[58,59,1],[59,60,1],[60,61,1],[61,62,1],[62,63,1],[63,64,1],[64,65,1],[65,66,1],[66,67,1],[49,68,2],[68,69,2],[69,70,2],[70,71,2],[71,72,2],[72,73,2],[73,74,2],[74,75,2],[75,76,2],[49,50,2],[50,51,2],[51,52,2],[52,53,2],[53,54,2],[54,55,2],[77,78,1],[78,79,1],[79,80,1],[80,81,1],[81,82,1],[82,83,1],[83,84,1],[84,85,1],[85,86,1],[77,87,0],[87,88,0],[88,89,0],[89,90,0],[90,91,0],[91,92,0],[92,93,0],[93,94,0],[94,95,0],[95,96,0],[96,97,0],[97,98,0],[98,99,0],[99,100,0],[100,101,0],[101,102,0],[77,103,2],[103,104,2],[104,105,2],[105,106,2],[106,107,2],[107,108,2],[108,109,2],[109,110,2],[110,111,2],[77,112,2],[112,113,2],[113,114,2],[114,115,2],[115,116,2],[116,117,2],[117,118,2],[77,119,2],[119,120,2],[120,121,2],[121,122,2],[122,123,2],[123,124,2],[124,125,2],[125,126,2],[126,118,2],[127,128,1],[128,129,1],[129,130,1],[130,131,1],[127,132,1],[132,133,1],[133,134,1],[134,135,1],[135,136,1],[136,137,1],[137,138,1],[138,139,1],[139,140,1],[140,141,1],[141,142,1],[142,143,1],[143,144,1],[144,145,1],[145,146,1],[146,147,1],[147,148,1],[148,149,1],[149,150,1],[150,151,1],[151,152,1],[152,153,1],[153,154,1],[154,155,1],[155,156,1],[156,157,1],[157,158,1],[158,159,1],[159,160,1],[160,161,1],[161,162,1],[162,163,1],[163,164,1],[164,165,1],[127,166,1],[166,167,1],[167,168,1],[168,169,1],[169,170,1],[170,171,1],[171,172,1],[172,173,1],[173,174,1],[174,175,1],[175,176,1],[176,177,1],[177,178,1],[178,179,1],[179,180,1],[180,181,1],[181,182,1],[182,183,1],[183,184,1],[184,185,1],[127,186,1],[186,187,1],[187,188,1],[188,189,1],[189,190,1],[190,191,1],[192,193,1],[193,194,1],[194,195,1],[195,196,1],[196,197,1],[197,198,1],[198,199,1],[199,200,1],[200,201,1],[201,202,1],[203,204,2],[204,205,2],[205,206,2],[206,57,2],[57,207,2],[207,76,2],[203,204,2],[204,205,2],[205,206,2],[206,57,2],[208,209,0],[209,210,0],[210,211,0],[211,212,0],[212,213,0],[213,214,0],[214,215,0],[215,216,0],[216,217,0],[217,218,0],[218,219,0],[219,220,0],[220,221,0],[221,222,0],[222,223,0],[223,18,0],[208,224,0],[224,225,0],[225,226,0],[226,227,0],[227,228,0],[228,229,0],[229,230,0],[230,86,0],[208,231,2],[231,232,2],[232,233,2],[233,234,2],[234,235,2],[235,236,2],[236,237,2],[237,238,2],[238,239,2],[239,240,2],[208,241,2],[241,242,2],[242,243,2],[243,244,2],[244,245,2],[245,246,2],[246,247,2],[247,248,2],[248,249,2],[249,250,2],[250,240,2],[191,251,0],[251,252,0],[252,253,0],[253,254,0],[254,255,0],[255,256,0],[256,257,0],[257,258,0],[258,259,0],[259,260,0],[260,261,0],[261,262,0],[262,263,0],[263,264,0],[264,265,0],[265,266,0],[266,267,0],[267,185,0],[191,268,0],[268,269,0],[269,270,0],[270,271,0],[271,272,0],[272,273,0],[273,274,0],[274,275,0],[275,131,0],[276,277,1],[277,278,1],[278,279,1],[279,280,1],[276,281,1],[281,282,1],[276,283,2],[283,284,2],[284,285,2],[285,286,2],[286,287,2],[287,288,2],[288,289,2],[289,290,2],[290,291,2],[291,292,2],[292,293,2],[293,294,2],[294,295,2],[295,296,2],[296,67,2],[276,281,2],[281,282,2],[282,297,2],[297,298,2],[298,299,2],[299,300,2],[300,301,2],[301,302,2],[302,303,2],[303,304,2],[304,305,2],[305,306,2],[276,307,2],[307,308,2],[308,309,2],[309,310,2],[310,311,2],[311,312,2],[312,280,2],[313,314,0],[314,315,0],[315,316,0],[316,317,0],[317,318,0],[318,319,0],[319,320,0],[320,321,0],[321,322,0],[322,323,0],[313,324,0],[324,325,0],[325,326,0],[326,327,0],[327,328,0],[328,329,0],[313,330,2],[330,331,2],[331,332,2],[332,333,2],[333,334,2],[334,335,2],[335,336,2],[336,337,2],[337,338,2],[338,339,2],[339,340,2],[340,341,2],[341,342,2],[313,343,2],[343,344,2],[344,345,2],[345,346,2],[346,347,2],[347,348,2],[348,349,2],[349,350,2],[350,351,2],[351,352,2],[352,353,2],[353,354,2],[354,355,2],[355,18,2],[313,356,2],[356,357,2],[357,358,2],[358,359,2],[359,360,2],[360,361,2],[361,362,2],[362,363,2],[363,364,2],[364,365,2],[365,366,2],[366,367,2],[367,368,2],[368,369,2],[369,18,2],[370,371,1],[371,372,1],[372,373,1],[373,374,1],[374,375,1],[375,376,1],[370,377,1],[377,378,1],[378,379,1],[379,380,1],[380,381,1],[381,382,1],[382,383,1],[383,384,1],[384,385,1],[385,386,1],[386,387,1],[387,388,1],[388,389,1],[389,390,1],[390,391,1],[370,392,1],[392,393,1],[393,394,1],[394,395,1],[395,396,1],[396,397,1],[397,398,1],[398,376,1],[370,399,1],[399,400,1],[400,401,1],[401,402,1],[402,403,1],[403,404,1],[404,405,1],[405,406,1],[406,407,1],[407,408,1],[408,409,1],[409,410,1],[410,411,1],[411,412,1],[412,413,1],[413,414,1],[414,415,1],[306,416,1],[416,417,1],[306,418,1],[418,419,1],[419,420,1],[420,421,1],[421,422,1],[422,423,1],[423,424,1],[424,425,1],[425,426,1],[306,427,2],[427,428,2],[428,429,2],[429,430,2],[430,431,2],[431,432,2],[432,433,2],[433,434,2],[434,435,2],[435,436,2],[436,437,2],[437,438,2],[438,439,2],[439,440,2],[440,441,2],[441,442,2],[306,443,2],[443,444,2],[444,445,2],[445,446,2],[446,447,2],[447,448,2],[448,449,2],[449,450,2],[450,451,2],[451,452,2],[452,453,2],[453,454,2],[454,455,2],[455,456,2],[240,457,2],[457,458,2],[458,459,2],[459,460,2],[460,461,2],[461,462,2],[463,464,1],[464,465,1],[465,466,1],[466,467,1],[467,468,1],[468,469,1],[469,470,1],[470,471,1],[463,472,0],[472,473,0],[473,474,0],[474,475,0],[475,476,0],[476,477,0],[477,478,0],[478,479,0],[479,480,0],[480,481,0],[481,482,0],[482,483,0],[483,484,0],[484,485,0],[485,486,0],[486,487,0],[463,488,1],[488,489,1],[489,490,1],[490,491,1],[491,492,1],[492,493,1],[493,494,1],[494,495,1],[495,496,1],[496,497,1],[463,498,1],[498,499,1],[499,500,1],[500,501,1],[501,502,1],[502,503,1],[503,504,1],[504,505,1],[505,506,1],[506,507,1],[507,508,1],[508,509,1],[509,510,1],[510,511,1],[511,512,1],[512,513,1],[514,515,0],[515,516,0],[516,517,0],[518,519,1],[519,520,1],[520,521,1],[521,522,1],[522,523,1],[523,524,1],[524,525,1],[525,526,1],[527,528,1],[528,529,1],[529,530,1],[530,531,1],[531,532,1],[532,533,1],[533,534,1],[534,535,1],[535,536,1],[536,537,1],[537,538,1],[538,539,1],[539,540,1],[540,541,1],[541,542,1],[542,543,1],[543,544,1],[544,545,1],[545,546,1],[546,547,1],[547,548,1],[548,549,1],[549,550,1],[550,551,1],[527,552,1],[552,553,1],[553,554,1],[554,555,1],[555,556,1],[556,557,1],[557,558,1],[558,559,1],[559,560,1],[560,561,1],[561,562,1],[562,563,1],[563,564,1],[564,565,1],[565,566,1],[566,567,1],[567,568,1],[527,569,1],[569,570,1],[570,571,1],[571,572,1],[572,573,1],[573,574,1],[574,575,1],[575,576,1],[576,577,1],[577,578,1],[578,579,1],[579,580,1],[580,581,1],[581,582,1],[582,583,1],[583,584,1],[584,585,1],[527,586,0],[586,587,0],[587,588,0],[588,589,0],[589,590,0],[590,591,0],[591,592,0],[592,593,0],[593,594,0],[594,595,0],[595,596,0],[596,597,0],[597,598,0],[598,599,0],[599,600,0],[600,601,0],[601,602,0],[602,603,0],[603,604,0],[604,605,0],[605,606,0],[606,607,0],[607,608,0],[608,609,0],[609,610,0],[610,611,0],[611,202,0],[55,612,2],[612,613,2],[613,614,2],[614,615,2],[615,616,2],[616,617,2],[617,618,2],[618,619,2],[619,620,2],[620,621,2],[621,622,2],[622,623,2],[623,624,2],[624,625,2],[625,626,2],[626,627,2],[627,67,2],[55,628,2],[628,629,2],[629,630,2],[630,631,2],[631,632,2],[632,633,2],[633,634,2],[634,635,2],[635,636,2],[636,637,2],[637,638,2],[638,639,2],[639,640,2],[640,641,2],[641,642,2],[642,643,2],[643,644,2],[645,646,0],[646,647,0],[647,648,0],[648,649,0],[649,650,0],[650,651,0],[651,652,0],[652,653,0],[653,654,0],[645,655,0],[655,656,0],[656,657,0],[657,658,0],[658,659,0],[659,660,0],[660,661,0],[661,662,0],[645,663,0],[663,664,0],[664,665,0],[665,666,0],[666,667,0],[667,668,0],[668,669,0],[669,670,0],[670,671,0],[671,672,0],[672,673,0],[673,674,0],[674,415,0],[675,676,1],[676,677,1],[677,678,1],[678,679,1],[679,680,1],[680,681,1],[681,682,1],[682,683,1],[683,684,1],[684,685,1],[685,686,1],[686,687,1],[687,688,1],[688,689,1],[689,690,1],[690,691,1],[691,692,1],[692,693,1],[693,694,1],[694,695,1],[695,696,1],[696,697,1],[697,698,1],[698,699,1],[675,700,1],[700,701,1],[701,702,1],[702,703,1],[703,704,1],[704,705,1],[705,706,1],[706,707,1],[707,708,1],[708,709,1],[709,710,1],[710,711,1],[711,712,1],[712,713,1],[713,714,1],[714,715,1],[715,716,1],[716,717,1],[717,718,1],[718,719,1],[719,720,1],[720,721,1],[721,722,1],[722,723,1],[723,724,1],[724,725,1],[725,726,1],[726,727,1],[727,728,1],[728,729,1],[729,730,1],[730,731,1],[731,732,1],[732,733,1],[733,734,1],[734,735,1],[675,736,0],[736,737,0],[737,738,0],[738,739,0],[739,740,0],[740,741,0],[741,742,0],[742,743,0],[743,744,0],[744,745,0],[745,746,0],[746,747,0],[747,748,0],[748,749,0],[749,750,0],[750,751,0],[751,752,0],[752,753,0],[753,754,0],[754,755,0],[755,756,0],[756,757,0],[757,758,0],[758,759,0],[759,760,0],[760,761,0],[761,762,0],[762,763,0],[763,764,0],[764,765,0],[765,766,0],[766,767,0],[767,768,0],[768,769,0],[769,770,0],[770,771,0],[771,772,0],[772,773,0],[67,774,1],[774,775,1],[775,776,1],[776,777,1],[67,774,2],[774,775,2],[775,776,2],[776,777,2],[777,778,2],[778,779,2],[779,780,2],[780,781,2],[781,782,2],[782,280,2],[415,783,1],[783,784,1],[784,785,1],[785,786,1],[786,787,1],[787,788,1],[415,789,1],[789,790,1],[790,791,1],[791,792,1],[792,793,1],[793,794,1],[794,795,1],[795,796,1],[796,797,1],[797,798,1],[798,799,1],[799,800,1],[800,801,1],[801,802,1],[802,803,1],[803,654,1],[513,804,1],[804,805,1],[805,806,1],[806,807,1],[807,808,1],[808,809,1],[809,810,1],[810,811,1],[811,812,1],[812,813,1],[813,814,1],[814,815,1],[815,816,1],[816,817,1],[513,818,1],[818,819,1],[819,820,1],[820,821,1],[821,822,1],[822,823,1],[823,824,1],[824,825,1],[825,826,1],[826,827,1],[827,828,1],[828,829,1],[829,830,1],[830,831,1],[831,832,1],[832,833,1],[833,834,1],[834,835,1],[513,836,1],[836,837,1],[837,838,1],[838,839,1],[839,840,1],[840,841,1],[841,842,1],[513,843,1],[843,844,1],[844,845,1],[845,846,1],[846,847,1],[847,487,1],[848,849,1],[849,850,1],[850,851,1],[851,852,1],[852,853,1],[853,854,1],[848,855,1],[855,856,1],[856,857,1],[857,858,1],[858,859,1],[859,102,1],[848,860,2],[860,861,2],[861,862,2],[862,863,2],[863,864,2],[864,865,2],[865,866,2],[866,867,2],[867,868,2],[868,118,2],[869,870,1],[870,871,1],[871,872,1],[872,873,1],[873,874,1],[874,875,1],[875,876,1],[876,877,1],[877,878,1],[878,879,1],[879,880,1],[880,881,1],[881,882,1],[882,883,1],[883,884,1],[884,885,1],[885,886,1],[886,887,1],[887,888,1],[888,889,1],[889,890,1],[890,891,1],[891,892,1],[892,893,1],[893,894,1],[894,895,1],[895,896,1],[896,897,1],[897,898,1],[898,899,1],[899,900,1],[900,901,1],[901,788,1],[869,902,1],[902,903,1],[903,904,1],[904,905,1],[905,906,1],[906,907,1],[907,908,1],[908,909,1],[909,568,1],[869,910,1],[910,911,1],[911,912,1],[912,913,1],[913,914,1],[914,915,1],[915,916,1],[916,917,1],[917,918,1],[918,919,1],[919,920,1],[920,921,1],[921,922,1],[922,923,1],[923,924,1],[924,925,1],[925,926,1],[926,927,1],[927,928,1],[928,929,1],[929,930,1],[930,931,1],[931,932,1],[932,933,1],[933,934,1],[934,935,1],[935,202,1],[869,870,1],[870,936,1],[936,937,1],[937,938,1],[938,939,1],[939,940,1],[940,941,1],[941,942,1],[942,943,1],[943,944,1],[944,945,1],[945,946,1],[946,947,1],[947,948,1],[948,949,1],[949,950,1],[950,951,1],[951,952,1],[952,953,1],[953,954,1],[954,955,1],[955,956,1],[956,957,1],[957,958,1],[958,959,1],[959,960,1],[960,961,1],[961,962,1],[962,963,1],[963,964,1],[964,965,1],[282,966,1],[966,967,1],[967,968,1],[968,969,1],[969,970,1],[970,971,1],[971,972,1],[972,973,1],[282,974,2],[974,975,2],[975,976,2],[976,977,2],[977,978,2],[978,979,2],[979,980,2],[980,981,2],[981,973,2],[282,982,2],[982,983,2],[983,984,2],[984,985,2],[985,986,2],[986,987,2],[987,988,2],[988,989,2],[989,442,2],[585,990,1],[990,991,1],[991,992,1],[992,993,1],[993,994,1],[994,995,1],[995,996,1],[996,997,1],[997,998,1],[585,999,1],[999,1000,1],[1000,1001,1],[1001,1002,1],[1002,1003,1],[1003,1004,1],[1004,1005,1],[1005,1006,1],[1006,1007,1],[1007,1008,1],[1008,1009,1],[1009,1010,1],[1010,1011,1],[1011,1012,1],[1012,1013,1],[1013,1014,1],[1014,551,1],[735,1015,1],[1015,1016,1],[1016,1017,1],[1017,1018,1],[1018,1019,1],[1019,1020,1],[735,1021,0],[1021,1022,0],[1022,1023,0],[1023,1024,0],[1024,1025,0],[1025,1020,0],[329,1026,1],[1026,1027,1],[329,1028,1],[1028,1029,1],[1029,1030,1],[1030,1031,1],[1031,1032,1],[1032,1033,1],[1033,1034,1],[1034,1035,1],[1035,1036,1],[1036,1037,1],[1037,1038,1],[1038,1039,1],[1039,1040,1],[1040,18,1],[329,1026,2],[1026,1027,2],[1027,1041,2],[1041,1042,2],[1042,1043,2],[1043,1044,2],[1044,1045,2],[1045,342,2],[39,1046,1],[1046,644,1],[39,1047,2],[1047,1048,2],[1048,1049,2],[1049,1050,2],[1050,1051,2],[1051,1052,2],[1052,1053,2],[1053,1054,2],[1054,1055,2],[1055,1056,2],[1056,1057,2],[1057,1058,2],[1058,1059,2],[1059,1060,2],[1060,1061,2],[1061,48,2],[644,1062,0],[1062,1063,0],[1063,1064,0],[1064,1065,0],[1065,1066,0],[1066,2,0],[644,1067,0],[1067,1068,0],[1068,1069,0],[1069,1070,0],[1070,1071,0],[1071,1072,0],[1072,1073,0],[1073,1074,0],[1074,1075,0],[1075,1076,0],[1076,1077,0],[1077,1078,0],[1078,1079,0],[1079,203,0],[644,1080,2],[1080,1081,2],[1081,1082,2],[1082,1083,2],[1083,1084,2],[1084,1085,2],[1085,1086,2],[1086,1087,2],[1087,1088,2],[1088,1089,2],[1089,1090,2],[1090,1091,2],[1091,1092,2],[1092,1093,2],[1093,48,2],[417,1094,0],[1094,1095,0],[1095,1096,0],[1096,1097,0],[1097,1098,0],[1098,1099,0],[1099,1100,0],[1100,1101,0],[1101,1102,0],[1102,1103,0],[417,1104,2],[1104,1105,2],[1105,1106,2],[1106,1107,2],[1107,1108,2],[1108,1109,2],[1109,1110,2],[1110,1111,2],[1111,1112,2],[1112,1113,2],[1113,1103,2],[773,1114,1],[1114,1115,1],[1115,1116,1],[1116,1117,1],[1117,1118,1],[1118,1119,1],[1119,1120,1],[1120,1121,1],[1121,1122,1],[1122,1123,1],[1123,1124,1],[1124,1125,1],[1125,1126,1],[1126,1127,1],[1127,1128,1],[1128,1129,1],[1129,1130,1],[1130,1131,1],[1131,965,1],[773,1132,1],[1132,1133,1],[1133,1134,1],[1134,1135,1],[1135,1136,1],[1136,1137,1],[1137,1138,1],[1138,1139,1],[1139,1140,1],[1140,1141,1],[1141,1142,1],[1142,1143,1],[1143,1144,1],[1144,1145,1],[1145,1146,1],[1146,1147,1],[1147,1148,1],[1148,1149,1],[426,1150,1],[1150,1151,1],[1151,1152,1],[1152,1153,1],[1153,1154,1],[1154,1155,1],[1155,1156,1],[1156,1157,1],[1157,1158,1],[1158,1159,1],[1159,1160,1],[1160,1161,1],[1161,1162,1],[1162,1163,1],[1163,442,1],[426,1164,2],[1164,1165,2],[1165,1166,2],[1166,1167,2],[1167,1168,2],[1168,1169,2],[1169,1170,2],[1170,1171,2],[1171,1172,2],[1172,1173,2],[1173,1174,2],[1174,1175,2],[1175,1176,2],[1176,1177,2],[1177,442,2],[1178,1179,1],[1179,1180,1],[1180,1181,1],[1181,1182,1],[1182,1183,1],[1183,1184,1],[1184,1185,1],[1185,202,1],[1178,1186,1],[1186,1187,1],[1187,1188,1],[1188,1189,1],[1189,1190,1],[1190,1191,1],[1191,1192,1],[1192,1193,1],[1193,1194,1],[1194,1195,1],[1195,1196,1],[1196,1197,1],[1197,1198,1],[1198,1199,1],[1199,1200,1],[1200,1201,1],[1201,1202,1],[1202,1203,1],[1203,1204,1],[1204,1205,1],[1205,1206,1],[1206,1207,1],[1207,1208,1],[1208,1209,1],[1209,1210,1],[1210,1211,1],[1211,1212,1],[1212,1213,1],[1213,376,1],[1178,1214,1],[1214,1215,1],[1215,1216,1],[1216,1217,1],[1217,1218,1],[1218,1219,1],[1219,1220,1],[1220,1221,1],[1221,202,1],[456,1222,2],[1222,1223,2],[1223,1224,2],[1224,1225,2],[1225,1226,2],[1226,1227,2],[1227,1228,2],[1228,1229,2],[1229,1230,2],[1230,4,2],[456,1231,2],[1231,1103,2],[391,1232,0],[1232,1233,0],[1233,1234,0],[1234,1235,0],[1235,1236,0],[1236,1237,0],[1237,1238,0],[1238,1239,0],[1239,1240,0],[1240,1241,0],[1241,1242,0],[1242,1243,0],[1243,1244,0],[1244,1245,0],[1245,1246,0],[1246,1247,0],[1247,1248,0],[1248,1249,0],[1249,654,0],[391,1250,0],[1250,1251,0],[1251,1252,0],[1252,1253,0],[1253,1254,0],[1254,1255,0],[1255,1256,0],[1256,1257,0],[1257,1258,0],[1258,1259,0],[1259,1260,0],[1260,1261,0],[1261,1262,0],[1262,1263,0],[1263,1264,0],[1264,1265,0],[1265,1266,0],[1266,1267,0],[1267,654,0],[391,1268,1],[1268,1269,1],[1269,1270,1],[1270,1271,1],[1271,1272,1],[1272,1273,1],[1273,1274,1],[1274,1275,1],[1275,1276,1],[1276,1277,1],[1277,1278,1],[1278,1279,1],[1279,1280,1],[1280,1281,1],[1281,1282,1],[1282,1283,1],[1283,1284,1],[1284,1285,1],[1285,654,1],[342,1286,1],[1286,1287,1],[1287,1288,1],[1288,1289,1],[1289,1290,1],[1290,1291,1],[342,1045,1],[1045,1044,1],[1044,1043,1],[1043,1042,1],[1042,1041,1],[1041,1027,1],[376,1292,1],[1292,1293,1],[1293,1294,1],[1294,1295,1],[1295,1296,1],[1296,1297,1],[1297,1298,1],[1298,1299,1],[1299,1300,1],[1300,1301,1],[1301,1302,1],[1302,1303,1],[1304,1305,0],[1305,1306,0],[1306,1307,0],[1307,1308,0],[1308,1309,0],[1309,471,0],[118,1310,1],[1310,1311,1],[1311,1312,1],[1312,1313,1],[1313,1314,1],[1314,1315,1],[1315,1316,1],[1316,86,1],[118,868,1],[868,1317,1],[1317,1318,1],[1318,1319,1],[1319,1320,1],[1320,111,1],[118,1321,2],[1321,1322,2],[1322,1323,2],[1323,1324,2],[1324,1325,2],[1325,1326,2],[1326,1327,2],[1327,1328,2],[1328,86,2],[118,1310,2],[1310,1329,2],[1329,1330,2],[1330,1331,2],[1331,1332,2],[1332,1333,2],[4,1230,0],[1230,1229,0],[1229,1228,0],[1228,1227,0],[1227,1226,0],[1226,1225,0],[1225,1224,0],[1224,1223,0],[1223,1222,0],[1222,456,0],[456,1231,0],[1231,1103,0],[18,1334,1],[1334,1335,1],[1335,1336,1],[1336,1337,1],[1337,1338,1],[1338,1339,1],[1339,1340,1],[1340,1341,1],[1341,1342,1],[1342,1343,1],[1343,1344,1],[1344,1345,1],[1345,1346,1],[1346,1347,1],[1347,1348,1],[1348,1349,1],[1349,1350,1],[1350,1351,1],[1351,1352,1],[1352,1353,1],[1353,462,1],[18,1354,2],[1354,1355,2],[1355,1356,2],[1356,1357,2],[1357,1358,2],[1358,1359,2],[1359,1360,2],[1360,1361,2],[1361,1362,2],[1362,1363,2],[1363,1364,2],[1364,1365,2],[1365,1366,2],[1366,1367,2],[1367,1368,2],[1368,48,2],[280,782,1],[782,781,1],[781,780,1],[780,779,1],[779,778,1],[778,777,1],[280,1369,2],[1369,1370,2],[1370,1371,2],[1371,1372,2],[1372,1373,2],[1373,1374,2],[1374,1375,2],[1375,777,2],[1376,1377,1],[1377,1378,1],[1378,1379,1],[1379,1380,1],[1380,1381,1],[1381,1020,1],[1376,1382,1],[1382,1383,1],[1383,1384,1],[1384,1385,1],[1385,1386,1],[1386,1387,1],[1376,1388,0],[1388,1389,0],[1389,1390,0],[1390,1391,0],[1391,1392,0],[1392,323,0],[1376,1377,2],[1377,1393,2],[1393,1394,2],[1394,1395,2],[1395,1396,2],[1396,1397,2],[1397,1398,2],[1398,1399,2],[471,1400,1],[1400,1401,1],[1401,1402,1],[1402,1403,1],[1403,1404,1],[1404,1405,1],[1405,1406,1],[1406,1407,1],[1407,1408,1],[1408,835,1],[471,1409,1],[1409,1410,1],[1410,1411,1],[1411,1412,1],[1412,1413,1],[1413,1414,1],[1414,1415,1],[1415,1416,1],[1416,1417,1],[1417,1418,1],[1418,1419,1],[1419,1420,1],[1420,1421,1],[1421,1422,1],[1422,1423,1],[1423,497,1],[471,1424,1],[1424,1425,1],[1425,1426,1],[1426,1427,1],[1427,1428,1],[1428,1429,1],[1429,1430,1],[1430,1431,1],[1431,1432,1],[1432,1433,1],[1433,1434,1],[1434,1435,1],[1435,1436,1],[1436,1437,1],[1437,1438,1],[1438,1439,1],[1439,1440,1],[1440,1441,1],[1441,517,1],[1442,1443,1],[1443,1444,1],[1444,1445,1],[1445,1446,1],[1446,1447,1],[1447,1448,1],[1448,1449,1],[1449,165,1],[517,1441,1],[1441,1450,1],[1450,1451,1],[1451,1452,1],[1452,1453,1],[1453,1454,1],[1454,1455,1],[1455,1456,1],[1456,1457,1],[1457,1458,1],[1458,1459,1],[1459,835,1],[517,1460,1],[1460,1461,1],[1461,1462,1],[1462,1463,1],[1463,1464,1],[1464,1465,1],[1465,526,1],[1387,1466,1],[1466,1467,1],[1467,1468,1],[1468,1469,1],[1469,1470,1],[1470,86,1],[1387,1471,2],[1471,1472,2],[1472,1473,2],[1473,1474,2],[1474,1475,2],[1475,1476,2],[1476,1477,2],[1477,1478,2],[1478,323,2],[185,1479,1],[1479,1480,1],[1480,1481,1],[1481,1482,1],[1482,1483,1],[1483,1484,1],[1484,1485,1],[1485,1486,1],[1486,1487,1],[1487,1488,1],[1488,1489,1],[1489,1490,1],[1490,1491,1],[1491,1492,1],[1492,1493,1],[1493,1494,1],[1494,1495,1],[1495,1496,1],[1496,1497,1],[1497,1498,1],[1498,1499,1],[699,1500,0],[1500,1501,0],[1501,1502,0],[1502,1503,0],[1503,1504,0],[1504,1505,0],[1505,1506,0],[1506,1507,0],[1507,1508,0],[1508,1509,0],[1509,1510,0],[1510,1511,0],[1511,1512,0],[1512,1513,0],[1513,1514,0],[1514,1515,0],[1515,1516,0],[1516,1517,0],[1517,842,0],[699,1518,1],[1518,1519,1],[1519,1520,1],[1520,1521,1],[1521,1522,1],[1522,1523,1],[1523,1524,1],[1524,1525,1],[1525,1526,1],[1526,1527,1],[1527,1528,1],[1528,1529,1],[1529,1530,1],[1530,1531,1],[1531,1532,1],[1532,1533,1],[1533,1534,1],[1534,1535,1],[1535,1536,1],[1536,1537,1],[1537,1538,1],[1538,965,1],[699,1539,1],[1539,1540,1],[1540,1541,1],[1541,1542,1],[1542,1543,1],[1543,1544,1],[1544,1545,1],[1545,1546,1],[1546,1547,1],[1547,1548,1],[1548,1549,1],[1549,1550,1],[1550,1551,1],[817,1552,0],[1552,1553,0],[1553,1554,0],[1554,1555,0],[1555,1556,0],[1556,1557,0],[1557,1558,0],[1558,1559,0],[1559,1560,0],[1560,1561,0],[1561,1562,0],[1562,487,0],[817,1563,0],[1563,1564,0],[1564,1565,0],[1565,1566,0],[1566,1567,0],[1567,1568,0],[1568,1569,0],[1569,1570,0],[1570,1571,0],[1571,1572,0],[1572,1573,0],[1573,965,0],[817,1574,1],[1574,1575,1],[1575,1576,1],[1576,1577,1],[1577,1578,1],[1578,1579,1],[1579,1580,1],[1580,1581,1],[1581,1582,1],[1582,1583,1],[1583,1584,1],[1584,1585,1],[1585,1586,1],[1586,1587,1],[1587,1588,1],[1588,1589,1],[1589,1590,1],[1590,1591,1],[1591,1592,1],[1592,1593,1],[1593,1594,1],[1594,1595,1],[1595,1596,1],[1596,1597,1],[1597,1598,1],[1598,1599,1],[1599,1600,1],[1600,1601,1],[1601,1602,1],[1602,1603,1],[1603,1604,1],[1604,1605,1],[1605,568,1],[835,1606,1],[1606,1607,1],[1607,1608,1],[1608,1609,1],[1609,1610,1],[1610,1611,1],[1611,1612,1],[1612,1613,1],[1613,1614,1],[1614,1615,1],[1615,1616,1],[1616,1617,1],[1617,1618,1],[1618,1619,1],[1619,1551,1],[1399,1620,1],[1620,1621,1],[1621,1622,1],[1622,1623,1],[1623,1624,1],[1624,1625,1],[1625,1626,1],[1626,1627,1],[1627,1628,1],[1628,1629,1],[1629,1630,1],[1630,1149,1],[1399,1631,1],[1631,1632,1],[1632,1633,1],[1633,1634,1],[1634,1635,1],[1635,1020,1],[111,1636,1],[1636,1637,1],[1637,1638,1],[1638,1639,1],[1639,1640,1],[1640,1641,1],[1641,1642,1],[1642,1643,1],[1643,102,1],[1027,1644,2],[1644,1645,2],[1645,1646,2],[1646,1647,2],[1647,1648,2],[1648,1649,2],[1649,1650,2],[1650,1651,2],[1651,1652,2],[1652,1653,2],[1653,1654,2],[1654,1655,2],[1655,1656,2],[1656,662,2],[788,1657,1],[1657,1658,1],[1658,1659,1],[1659,1660,1],[1660,1661,1],[1661,1662,1],[1662,1663,1],[1663,1664,1],[1664,1665,1],[1665,1666,1],[1666,1667,1],[1667,1668,1],[1668,1669,1],[1669,1670,1],[1670,1671,1],[1671,1291,1],[487,1672,1],[1672,1673,1],[1673,1674,1],[1674,1675,1],[1675,1676,1],[1676,1677,1],[1677,1678,1],[1678,1679,1],[1679,1680,1],[1680,1681,1],[1681,1682,1],[1682,1683,1],[1683,1684,1],[1684,1685,1],[1685,1686,1],[1686,1687,1],[1687,1688,1],[1688,1689,1],[1689,1690,1],[1690,1691,1],[1691,1692,1],[1692,1693,1],[1693,1694,1],[1694,1695,1],[1695,1696,1],[1696,1697,1],[1697,1698,1],[1698,1699,1],[1699,1700,1],[1700,1701,1],[1701,1702,1],[1702,1703,1],[1703,165,1],[842,1704,1],[1704,1705,1],[1705,1706,1],[1706,1707,1],[1707,1708,1],[1708,1709,1],[1709,1710,1],[1710,1711,1],[1711,1712,1],[1712,1713,1],[1713,1714,1],[1714,1715,1],[1715,1716,1],[1716,1717,1],[1717,965,1],[57,207,1],[207,76,1],[131,1718,1],[1718,1719,1],[1719,1720,1],[1720,1721,1],[1721,1722,1],[1722,497,1],[131,1723,0],[1723,1724,0],[1724,1725,0],[1725,1726,0],[1726,1727,0],[1727,1728,0],[1728,1729,0],[1729,1730,0],[1730,1731,0],[1731,1732,0],[1732,1733,0],[1733,1734,0],[1734,1735,0],[1735,1736,0],[1736,1737,0],[1737,1738,0],[1738,1739,0],[1739,1740,0],[1740,1741,0],[1741,1742,0],[1742,1743,0],[1743,1744,0],[1744,1745,0],[1745,1746,0],[1746,1747,0],[1747,1748,0],[1748,1749,0],[1749,1750,0],[1750,1751,0],[1751,1752,0],[1752,1753,0],[1753,165,0],[1754,1755,1],[1755,1756,1],[1756,1757,1],[1757,1758,1],[1758,1759,1],[1759,1760,1],[1760,1761,1],[1761,1762,1],[1762,1763,1],[1763,1764,1],[1764,1765,1],[1765,1766,1],[1766,1767,1],[1767,1768,1],[1768,998,1],[76,1769,1],[1769,1770,1],[1770,1771,1],[1771,102,1],[203,1772,0],[1772,1773,0],[1773,1774,0],[1774,1775,0],[1775,1776,0],[1776,1777,0],[1777,1778,0],[1778,1779,0],[1779,102,0],[203,1780,2],[1780,1781,2],[1781,1782,2],[1782,1783,2],[1783,1784,2],[1784,1785,2],[1785,1786,2],[1786,1787,2],[1787,853,2],[853,854,2],[1149,1788,1],[1788,1789,1],[1789,1790,1],[1790,1791,1],[1791,1792,1],[1792,1793,1],[1793,1794,1],[1794,1795,1],[1795,1796,1],[1796,1797,1],[1797,1798,1],[1798,1799,1],[1799,1800,1],[1800,1801,1],[1801,1802,1],[1802,1291,1],[973,1803,1],[1803,442,1],[662,1671,0],[1671,1291,0],[165,1804,1],[1804,1805,1],[1805,1806,1],[1806,1807,1],[1807,1808,1],[1808,551,1],[165,1809,0],[1809,1810,0],[1810,1811,0],[1811,1812,0],[1812,1813,0],[1813,1814,0],[1814,1815,0],[1815,1816,0],[1816,1817,0],[1817,1818,0],[1818,1819,0],[1819,1820,0],[1820,1821,0],[1821,1822,0],[1822,1823,0],[1823,1824,0],[1824,1825,0],[1825,1826,0],[1826,1827,0],[1827,1828,0],[1828,1829,0],[1829,1830,0],[1830,1831,0],[1831,1832,0],[1832,1833,0],[1833,1834,0],[1834,1835,0],[1835,1836,0],[1836,1837,0],[1837,998,0],[568,1838,1],[1838,1839,1],[1839,1840,1],[1840,1841,1],[1841,1842,1],[1842,1843,1],[1843,1844,1],[1844,1845,1],[1845,1846,1],[1846,1847,1],[1847,1848,1],[1848,1849,1],[1849,1850,1],[1850,1851,1],[1851,1852,1],[1852,1853,1],[1853,1854,1],[1854,1855,1],[1855,1856,1],[1856,1857,1],[1857,1858,1],[1858,1859,1],[1859,1860,1],[1860,1861,1],[1861,202,1],[2,1862,2],[1862,1863,2],[1863,1864,2],[1864,1865,2],[1865,1866,2],[1866,1867,2],[1867,1868,2],[1868,1869,2],[1869,1870,2],[1870,1871,2],[1871,1872,2],[1872,1873,2],[1873,1874,2],[1874,1875,2],[1875,1876,2],[1876,1877,2],[1877,1103,2],[462,1878,1],[1878,1879,1],[1879,1880,1],[1880,1881,1],[1881,1882,1],[1882,1883,1],[1883,854,1],[526,1884,1],[1884,1885,1],[1885,1886,1],[1886,1887,1],[1887,1888,1],[1888,1889,1],[1889,1890,1],[1890,1891,1],[1891,1892,1],[1892,1893,1],[1893,1894,1],[1894,1895,1],[1895,1896,1],[1896,1897,1],[1897,1898,1],[1898,1551,1]]};
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
