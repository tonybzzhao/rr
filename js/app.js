'use strict';
const STATIONS=[{"name":"Stanwell","x":1440,"y":3480,"attach":[1440,3480],"regio":1,"sys":"R"},{"name":"Medway Airport","x":1470,"y":3450,"attach":[1470.0,3450.0],"sys":"MR"},{"name":"Eastden","x":1446,"y":3474,"attach":[1446.0,3474.0],"regio":1,"sys":"R"},{"name":"Millholme Junction","x":1440,"y":3540,"attach":[1440.0,3540.0],"regio":1,"sys":"R"},{"name":"Holmford Junction","x":1440,"y":3492,"attach":[1440.0,3492.0],"regio":1,"sys":"R"},{"name":"Hawbrook Junction","x":1432,"y":3488,"attach":[1431.8,3488.34],"regio":1,"sys":"R"},{"name":"Birchsted","x":1426,"y":3498,"attach":[1426.09,3498.41],"regio":1,"sys":"R"},{"name":"Warley","x":1320,"y":3210,"attach":[1320,3210],"regio":1,"sys":"R"},{"name":"Melbridge Central","x":1170,"y":3090,"attach":[1170.0,3090.0],"sys":"MR"},{"name":"Melsted","x":1306,"y":3210,"attach":[1305.85,3210.0],"regio":1,"sys":"R"},{"name":"Thornworth","x":1292,"y":3208,"attach":[1291.98,3207.61],"regio":1,"sys":"R"},{"name":"Thurlthorpe","x":1280,"y":3200,"attach":[1280.15,3200.02],"regio":1,"sys":"R"},{"name":"Newthwaite","x":1270,"y":3190,"attach":[1270.08,3190.08],"regio":1,"sys":"R"},{"name":"Chalfield","x":1260,"y":3180,"attach":[1260.07,3180.07],"regio":1,"sys":"R"},{"name":"Goldwell","x":1250,"y":3170,"attach":[1250.06,3170.06],"regio":1,"sys":"R"},{"name":"Kirkford","x":1240,"y":3160,"attach":[1240.06,3160.06],"regio":1,"sys":"R"},{"name":"Larkhurst","x":1230,"y":3150,"attach":[1230.05,3150.05],"regio":1,"sys":"R"},{"name":"Sandcote","x":1220,"y":3140,"attach":[1220.04,3140.04],"regio":1,"sys":"R"},{"name":"Oakthwaite","x":1210,"y":3130,"attach":[1210.03,3130.03],"regio":1,"sys":"R"},{"name":"Stowsted","x":1350,"y":3600,"attach":[1350.0,3600.0],"regio":1,"sys":"R"},{"name":"Blackcote","x":1332,"y":3222,"attach":[1331.79,3221.79],"regio":1,"sys":"R"},{"name":"Dunstow","x":1342,"y":3235,"attach":[1342.46,3234.54],"regio":1,"sys":"R"},{"name":"Thorndale","x":1349,"y":3250,"attach":[1348.73,3249.89],"regio":1,"sys":"R"},{"name":"Warbridge","x":1350,"y":3266,"attach":[1350.0,3266.48],"regio":1,"sys":"R"},{"name":"Newminster","x":1350,"y":3283,"attach":[1350.0,3283.15],"regio":1,"sys":"R"},{"name":"Blackden","x":1350,"y":3300,"attach":[1350.0,3299.83],"regio":1,"sys":"R"},{"name":"Heaththorpe","x":1350,"y":3317,"attach":[1350.0,3316.51],"regio":1,"sys":"R"},{"name":"Highmore","x":1350,"y":3333,"attach":[1350.0,3333.18],"regio":1,"sys":"R"},{"name":"Grimsmore","x":1350,"y":3350,"attach":[1350.0,3349.86],"regio":1,"sys":"R"},{"name":"Ulverstow","x":1350,"y":3367,"attach":[1350.0,3366.54],"regio":1,"sys":"R"},{"name":"Cherrywell","x":1350,"y":3383,"attach":[1350.0,3383.21],"regio":1,"sys":"R"},{"name":"Elmstow","x":1350,"y":3400,"attach":[1350.0,3399.89],"regio":1,"sys":"R"},{"name":"Larkminster","x":1350,"y":3417,"attach":[1350.0,3416.56],"regio":1,"sys":"R"},{"name":"Saxethwaite","x":1350,"y":3433,"attach":[1350.0,3433.24],"regio":1,"sys":"R"},{"name":"Wakeholme","x":1350,"y":3450,"attach":[1350.0,3449.92],"regio":1,"sys":"R"},{"name":"Stowdale","x":1350,"y":3467,"attach":[1350.0,3466.59],"regio":1,"sys":"R"},{"name":"Swanford","x":1350,"y":3491,"attach":[1350.0,3491.27],"regio":1,"sys":"R"},{"name":"Leamore","x":1350,"y":3500,"attach":[1350.0,3499.94],"regio":1,"sys":"R"},{"name":"Brentwick","x":1350,"y":3517,"attach":[1350.0,3516.62],"regio":1,"sys":"R"},{"name":"Leadale","x":1350,"y":3533,"attach":[1350.0,3533.3],"regio":1,"sys":"R"},{"name":"Ashhurst","x":1380,"y":3300,"attach":[1380.0,3300.0],"regio":1,"sys":"R"},{"name":"Wickton","x":1320,"y":3217,"attach":[1320.0,3217.08],"regio":1,"sys":"R"},{"name":"Larkcombe","x":1320,"y":3224,"attach":[1320.0,3224.16],"regio":1,"sys":"R"},{"name":"Little Lynwick","x":1321,"y":3231,"attach":[1320.57,3231.22],"regio":1,"sys":"R"},{"name":"Silmere","x":1322,"y":3238,"attach":[1322.4,3238.04],"regio":1,"sys":"R"},{"name":"Redworth","x":1326,"y":3244,"attach":[1325.59,3244.34],"regio":1,"sys":"R"},{"name":"Thorngate","x":1330,"y":3250,"attach":[1329.99,3249.87],"regio":1,"sys":"R"},{"name":"Newbrook","x":1335,"y":3255,"attach":[1334.94,3254.94],"regio":1,"sys":"R"},{"name":"Fenmore","x":1340,"y":3260,"attach":[1339.94,3259.94],"regio":1,"sys":"R"},{"name":"Bramwick","x":1370,"y":3290,"attach":[1370.41,3290.41],"regio":1,"sys":"R"},{"name":"Ryested","x":1350,"y":3270,"attach":[1349.96,3269.96],"regio":1,"sys":"R"},{"name":"Millstow","x":1355,"y":3275,"attach":[1354.96,3274.96],"regio":1,"sys":"R"},{"name":"Blackton","x":1360,"y":3280,"attach":[1359.97,3279.97],"regio":1,"sys":"R"},{"name":"Wardour","x":1680,"y":3540,"attach":[1680,3540],"sys":"MR"},{"name":"Beckthorpe","x":1680,"y":3450,"attach":[1680.0,3450.0],"regio":1,"sys":"R"},{"name":"Holmden","x":1680,"y":3529,"attach":[1680.0,3528.75],"regio":1,"sys":"R"},{"name":"Quarrley","x":1680,"y":3518,"attach":[1680.0,3517.5],"regio":1,"sys":"R"},{"name":"Fernwood","x":1680,"y":3506,"attach":[1680.0,3506.25],"regio":1,"sys":"R"},{"name":"Hunford","x":1680,"y":3495,"attach":[1680.0,3495.0],"regio":1,"sys":"R"},{"name":"Eastthorpe","x":1680,"y":3720,"attach":[1680.0,3720.0],"regio":1,"sys":"R"},{"name":"Wingate","x":1680,"y":3549,"attach":[1680.0,3549.47],"regio":1,"sys":"R"},{"name":"Warham","x":1680,"y":3559,"attach":[1680.0,3558.95],"regio":1,"sys":"R"},{"name":"Swanwick","x":1680,"y":3568,"attach":[1680.0,3568.42],"regio":1,"sys":"R"},{"name":"Ryeby","x":1680,"y":3578,"attach":[1680.0,3577.89],"regio":1,"sys":"R"},{"name":"Moorwood","x":1680,"y":3587,"attach":[1680.0,3587.37],"regio":1,"sys":"R"},{"name":"Todfield","x":1680,"y":3597,"attach":[1680.0,3596.84],"regio":1,"sys":"R"},{"name":"Swanthwaite","x":1680,"y":3606,"attach":[1680.0,3606.32],"regio":1,"sys":"R"},{"name":"Hartwood","x":1680,"y":3616,"attach":[1680.0,3615.79],"regio":1,"sys":"R"},{"name":"Hawcote","x":1680,"y":3625,"attach":[1680.0,3625.26],"regio":1,"sys":"R"},{"name":"Fenholme","x":1680,"y":3635,"attach":[1680.0,3634.74],"regio":1,"sys":"R"},{"name":"Saxecote","x":1680,"y":3644,"attach":[1680.0,3644.21],"regio":1,"sys":"R"},{"name":"Walholme","x":1680,"y":3654,"attach":[1680.0,3653.68],"regio":1,"sys":"R"},{"name":"Burnbrook","x":1680,"y":3663,"attach":[1680.0,3663.16],"regio":1,"sys":"R"},{"name":"Beckthwaite","x":1680,"y":3673,"attach":[1680.0,3672.63],"regio":1,"sys":"R"},{"name":"Willowmere","x":1680,"y":3682,"attach":[1680.0,3682.11],"regio":1,"sys":"R"},{"name":"Crowfield Junction","x":1680,"y":3390,"attach":[1680.0,3390.0],"regio":1,"sys":"R"},{"name":"Highford","x":1680,"y":3530,"attach":[1680.0,3530.0],"regio":1,"sys":"R"},{"name":"Dundale","x":1680,"y":3520,"attach":[1680.0,3520.0],"regio":1,"sys":"R"},{"name":"Fernfield","x":1680,"y":3510,"attach":[1680.0,3510.0],"regio":1,"sys":"R"},{"name":"Walstead","x":1680,"y":3500,"attach":[1680.0,3500.0],"regio":1,"sys":"R"},{"name":"Brookbury","x":1680,"y":3490,"attach":[1680.0,3490.0],"regio":1,"sys":"R"},{"name":"Southmere","x":1680,"y":3480,"attach":[1680.0,3480.0],"regio":1,"sys":"R"},{"name":"Fairgate","x":1680,"y":3470,"attach":[1680.0,3470.0],"regio":1,"sys":"R"},{"name":"Longden","x":1680,"y":3460,"attach":[1680.0,3460.0],"regio":1,"sys":"R"},{"name":"Malmere","x":1680,"y":3422,"attach":[1680.0,3422.0],"regio":1,"sys":"R"},{"name":"Melby","x":1680,"y":3440,"attach":[1680.0,3440.0],"regio":1,"sys":"R"},{"name":"Longbrook","x":1680,"y":3410,"attach":[1680.0,3410.0],"regio":1,"sys":"R"},{"name":"Silcote","x":1710,"y":3420,"attach":[1710.0,3420.0],"regio":1,"sys":"R"},{"name":"Oakholme","x":1693,"y":3527,"attach":[1693.15,3526.85],"regio":1,"sys":"R"},{"name":"Longham","x":1704,"y":3512,"attach":[1704.29,3512.07],"regio":1,"sys":"R"},{"name":"Quarrbridge","x":1709,"y":3494,"attach":[1709.49,3494.39],"regio":1,"sys":"R"},{"name":"Ashcombe","x":1800,"y":3150,"attach":[1800,3150],"regio":1,"sys":"R"},{"name":"Oakmouth","x":1620,"y":2910,"attach":[1620.0,2910.0],"sys":"MR"},{"name":"Millsted","x":1800,"y":3134,"attach":[1800.0,3133.56],"regio":1,"sys":"R"},{"name":"Penstead","x":1800,"y":3117,"attach":[1800.0,3117.13],"regio":1,"sys":"R"},{"name":"Blackbrook","x":1799,"y":3101,"attach":[1798.84,3100.77],"regio":1,"sys":"R"},{"name":"Chalstead","x":1793,"y":3086,"attach":[1792.84,3085.56],"regio":1,"sys":"R"},{"name":"Millwood","x":1783,"y":3073,"attach":[1782.7,3072.7],"regio":1,"sys":"R"},{"name":"Woodstow","x":1771,"y":3061,"attach":[1771.08,3061.08],"regio":1,"sys":"R"},{"name":"Oldton","x":1759,"y":3049,"attach":[1759.46,3049.46],"regio":1,"sys":"R"},{"name":"Fenden","x":1748,"y":3038,"attach":[1747.84,3037.84],"regio":1,"sys":"R"},{"name":"Whitham","x":1736,"y":3026,"attach":[1736.22,3026.22],"regio":1,"sys":"R"},{"name":"Sutgate","x":1725,"y":3015,"attach":[1724.6,3014.6],"regio":1,"sys":"R"},{"name":"Fernstead","x":1713,"y":3003,"attach":[1712.97,3002.97],"regio":1,"sys":"R"},{"name":"Eastcombe","x":1701,"y":2991,"attach":[1701.35,2991.35],"regio":1,"sys":"R"},{"name":"Marwood","x":1690,"y":2980,"attach":[1689.73,2979.73],"regio":1,"sys":"R"},{"name":"Ashbrook","x":1678,"y":2968,"attach":[1678.11,2968.11],"regio":1,"sys":"R"},{"name":"Elmdale","x":1666,"y":2956,"attach":[1666.49,2956.49],"regio":1,"sys":"R"},{"name":"Victoria Central","x":1710,"y":3390,"attach":[1710.0,3390.0],"sys":"MR"},{"name":"Chalden","x":1782,"y":3168,"attach":[1782.32,3167.68],"regio":1,"sys":"R"},{"name":"Cherryminster","x":1765,"y":3185,"attach":[1764.65,3185.35],"regio":1,"sys":"R"},{"name":"Kirkcote","x":1747,"y":3203,"attach":[1746.97,3203.03],"regio":1,"sys":"R"},{"name":"Lower Ryested","x":1729,"y":3221,"attach":[1729.29,3220.71],"regio":1,"sys":"R"},{"name":"Blackholme","x":1714,"y":3241,"attach":[1714.43,3240.61],"regio":1,"sys":"R"},{"name":"Barkwell","x":1710,"y":3265,"attach":[1710.0,3265.0],"regio":1,"sys":"R"},{"name":"Kirkby","x":1710,"y":3290,"attach":[1710.0,3290.0],"regio":1,"sys":"R"},{"name":"Salbrook","x":1650,"y":3240,"attach":[1650.0,3240.0],"regio":1,"sys":"R"},{"name":"Leawood","x":1787,"y":3150,"attach":[1786.79,3150.0],"regio":1,"sys":"R"},{"name":"Warford","x":1774,"y":3150,"attach":[1773.57,3150.0],"regio":1,"sys":"R"},{"name":"Hartstow","x":1760,"y":3150,"attach":[1760.36,3150.15],"regio":1,"sys":"R"},{"name":"Faircote","x":1747,"y":3152,"attach":[1747.36,3152.18],"regio":1,"sys":"R"},{"name":"Hartwick","x":1735,"y":3157,"attach":[1735.27,3157.32],"regio":1,"sys":"R"},{"name":"Kirkdale","x":1725,"y":3165,"attach":[1724.78,3165.28],"regio":1,"sys":"R"},{"name":"Bradby","x":1715,"y":3175,"attach":[1715.41,3174.59],"regio":1,"sys":"R"},{"name":"Moorsted","x":1706,"y":3184,"attach":[1706.06,3183.94],"regio":1,"sys":"R"},{"name":"Fairbridge","x":1697,"y":3193,"attach":[1696.72,3193.28],"regio":1,"sys":"R"},{"name":"Leabury","x":1687,"y":3203,"attach":[1687.38,3202.62],"regio":1,"sys":"R"},{"name":"Longcombe","x":1620,"y":3150,"attach":[1620.0,3150.0],"regio":1,"sys":"R"},{"name":"Brookdale","x":1786,"y":3150,"attach":[1786.15,3150.0],"regio":1,"sys":"R"},{"name":"Grimsbury","x":1772,"y":3150,"attach":[1772.31,3150.0],"regio":1,"sys":"R"},{"name":"Bramthwaite","x":1758,"y":3150,"attach":[1758.46,3150.0],"regio":1,"sys":"R"},{"name":"Larkthwaite","x":1745,"y":3150,"attach":[1744.62,3150.0],"regio":1,"sys":"R"},{"name":"Yarford","x":1731,"y":3150,"attach":[1730.77,3150.0],"regio":1,"sys":"R"},{"name":"Oakgate","x":1717,"y":3150,"attach":[1716.92,3150.0],"regio":1,"sys":"R"},{"name":"Salcote","x":1703,"y":3150,"attach":[1703.08,3150.0],"regio":1,"sys":"R"},{"name":"Fenby","x":1689,"y":3150,"attach":[1689.23,3150.0],"regio":1,"sys":"R"},{"name":"Woldbury","x":1675,"y":3150,"attach":[1675.38,3150.0],"regio":1,"sys":"R"},{"name":"Millley","x":1789,"y":3140,"attach":[1789.4,3139.93],"regio":1,"sys":"R"},{"name":"Birchton","x":1776,"y":3135,"attach":[1775.84,3135.13],"regio":1,"sys":"R"},{"name":"Long Yarwood","x":1761,"y":3135,"attach":[1761.21,3135.0],"regio":1,"sys":"R"},{"name":"Wakebrook","x":1747,"y":3135,"attach":[1746.58,3135.0],"regio":1,"sys":"R"},{"name":"Thurlham","x":1732,"y":3135,"attach":[1731.95,3135.0],"regio":1,"sys":"R"},{"name":"Beckton","x":1717,"y":3135,"attach":[1717.32,3135.0],"regio":1,"sys":"R"},{"name":"Heathsted","x":1703,"y":3135,"attach":[1702.68,3135.0],"regio":1,"sys":"R"},{"name":"Brentwell","x":1688,"y":3135,"attach":[1688.05,3135.0],"regio":1,"sys":"R"},{"name":"Fairthwaite","x":1673,"y":3135,"attach":[1673.42,3135.0],"regio":1,"sys":"R"},{"name":"Chungsia","x":1680,"y":1560,"attach":[1680,1560],"sys":"M"},{"name":"Hantsin","x":1620,"y":1590,"attach":[1620.0,1590.0],"sys":"M"},{"name":"Peiting Central","x":1320,"y":1620,"attach":[1320.0,1620.0],"sys":"M"},{"name":"Sianning","x":1607,"y":1619,"attach":[1606.89,1619.18],"sys":"M"},{"name":"Songqiao Airport","x":1511,"y":1620,"attach":[1511.29,1620.0],"sys":"M"},{"name":"Quanguan","x":1416,"y":1620,"attach":[1415.64,1620.0],"sys":"M"},{"name":"Yenchia Main","x":1710,"y":1320,"attach":[1710.0,1320.0],"sys":"M"},{"name":"North Chungsia","x":1680,"y":1497,"attach":[1680.0,1497.44],"sys":"M"},{"name":"Pu’an","x":1680,"y":1435,"attach":[1680.0,1434.89],"sys":"M"},{"name":"Linhai-Pu’an","x":1680,"y":1372,"attach":[1680.0,1372.33],"sys":"M"},{"name":"Hengchu","x":1740,"y":1500,"attach":[1740.0,1500.0],"sys":"M"},{"name":"Farinport Central","x":660,"y":2100,"attach":[660,2100],"sys":"M"},{"name":"Amptonside Central","x":810,"y":2100,"attach":[810.0,2100.0],"sys":"M"},{"name":"Alderford Airport","x":735,"y":2100,"attach":[735.0,2100.0],"sys":"M"},{"name":"Willowbury","x":1620,"y":3360,"attach":[1620,3360],"regio":1,"sys":"R"},{"name":"Foxstead Junction","x":1650,"y":3480,"attach":[1650.0,3480.0],"regio":1,"sys":"R"},{"name":"Hunton","x":1628,"y":3368,"attach":[1628.35,3368.35],"regio":1,"sys":"R"},{"name":"Stockmere","x":1637,"y":3377,"attach":[1636.7,3376.7],"regio":1,"sys":"R"},{"name":"Kings Hawgate","x":1620,"y":3374,"attach":[1620.0,3374.16],"regio":1,"sys":"R"},{"name":"Thurlcote","x":1622,"y":3388,"attach":[1622.4,3388.04],"regio":1,"sys":"R"},{"name":"Birchcote","x":1630,"y":3400,"attach":[1629.99,3399.87],"regio":1,"sys":"R"},{"name":"Grimssted","x":1640,"y":3410,"attach":[1639.94,3409.94],"regio":1,"sys":"R"},{"name":"Salfield","x":1590,"y":3120,"attach":[1590,3120],"regio":1,"sys":"R"},{"name":"Burnminster Junction","x":1230,"y":3150,"attach":[1230.0,3150.0],"regio":1,"sys":"R"},{"name":"Cherrymore","x":1575,"y":3120,"attach":[1575.19,3120.0],"regio":1,"sys":"R"},{"name":"Fenmere","x":1560,"y":3120,"attach":[1560.38,3120.0],"regio":1,"sys":"R"},{"name":"Ulverholme","x":1546,"y":3120,"attach":[1545.57,3120.0],"regio":1,"sys":"R"},{"name":"Ulverthorpe","x":1531,"y":3120,"attach":[1530.76,3120.0],"regio":1,"sys":"R"},{"name":"Thornmere","x":1516,"y":3120,"attach":[1515.95,3120.0],"regio":1,"sys":"R"},{"name":"Crowbrook","x":1501,"y":3120,"attach":[1501.15,3120.0],"regio":1,"sys":"R"},{"name":"Willowwick","x":1486,"y":3120,"attach":[1486.34,3120.0],"regio":1,"sys":"R"},{"name":"Heathholme","x":1472,"y":3120,"attach":[1471.53,3120.0],"regio":1,"sys":"R"},{"name":"Ulverhurst","x":1457,"y":3120,"attach":[1456.72,3120.0],"regio":1,"sys":"R"},{"name":"Longcote","x":1442,"y":3120,"attach":[1441.91,3120.0],"regio":1,"sys":"R"},{"name":"Hawmore","x":1427,"y":3120,"attach":[1427.1,3120.0],"regio":1,"sys":"R"},{"name":"Barkton","x":1412,"y":3120,"attach":[1412.29,3120.0],"regio":1,"sys":"R"},{"name":"Newstead","x":1397,"y":3120,"attach":[1397.48,3120.0],"regio":1,"sys":"R"},{"name":"Claybrook","x":1383,"y":3120,"attach":[1382.67,3120.0],"regio":1,"sys":"R"},{"name":"Foxcote","x":1368,"y":3120,"attach":[1367.86,3120.0],"regio":1,"sys":"R"},{"name":"Chalminster","x":1353,"y":3120,"attach":[1353.06,3120.0],"regio":1,"sys":"R"},{"name":"Coldham","x":1338,"y":3120,"attach":[1338.25,3120.0],"regio":1,"sys":"R"},{"name":"Elmmere","x":1323,"y":3120,"attach":[1323.44,3120.0],"regio":1,"sys":"R"},{"name":"Goldsted","x":1309,"y":3120,"attach":[1308.63,3120.0],"regio":1,"sys":"R"},{"name":"Rookwell","x":1294,"y":3120,"attach":[1293.82,3120.0],"regio":1,"sys":"R"},{"name":"Hunwood","x":1279,"y":3120,"attach":[1279.02,3120.2],"regio":1,"sys":"R"},{"name":"Lynstow","x":1601,"y":3109,"attach":[1601.12,3108.88],"regio":1,"sys":"R"},{"name":"Woodhurst","x":1612,"y":3097,"attach":[1611.55,3097.12],"regio":1,"sys":"R"},{"name":"Rookhurst","x":1618,"y":3083,"attach":[1617.92,3082.83],"regio":1,"sys":"R"},{"name":"Leathwaite","x":1620,"y":3067,"attach":[1620.0,3067.3],"regio":1,"sys":"R"},{"name":"Todmere","x":1620,"y":3052,"attach":[1620.0,3051.57],"regio":1,"sys":"R"},{"name":"Beckdale","x":1620,"y":3036,"attach":[1620.0,3035.84],"regio":1,"sys":"R"},{"name":"Newthorpe","x":1620,"y":3020,"attach":[1620.0,3020.11],"regio":1,"sys":"R"},{"name":"Chalcote","x":1620,"y":3004,"attach":[1620.0,3004.38],"regio":1,"sys":"R"},{"name":"Goldbrook","x":1620,"y":2989,"attach":[1620.0,2988.65],"regio":1,"sys":"R"},{"name":"Ashfield","x":1620,"y":2973,"attach":[1620.0,2972.92],"regio":1,"sys":"R"},{"name":"Whitbury","x":1590,"y":3330,"attach":[1590.0,3330.0],"regio":1,"sys":"R"},{"name":"Wykebury","x":1590,"y":3134,"attach":[1590.0,3134.0],"regio":1,"sys":"R"},{"name":"Penby","x":1590,"y":3148,"attach":[1590.0,3148.0],"regio":1,"sys":"R"},{"name":"Swanstow","x":1590,"y":3162,"attach":[1590.0,3162.0],"regio":1,"sys":"R"},{"name":"Ryebridge","x":1590,"y":3176,"attach":[1590.0,3176.0],"regio":1,"sys":"R"},{"name":"Bradstead","x":1590,"y":3190,"attach":[1590.0,3190.0],"regio":1,"sys":"R"},{"name":"Silham","x":1590,"y":3204,"attach":[1590.0,3204.0],"regio":1,"sys":"R"},{"name":"Ormwick","x":1590,"y":3218,"attach":[1590.0,3218.0],"regio":1,"sys":"R"},{"name":"Kings Wickden","x":1590,"y":3232,"attach":[1590.0,3232.0],"regio":1,"sys":"R"},{"name":"Southham","x":1590,"y":3246,"attach":[1590.0,3246.0],"regio":1,"sys":"R"},{"name":"Ulverbury","x":1590,"y":3260,"attach":[1590.0,3260.0],"regio":1,"sys":"R"},{"name":"Heaththwaite","x":1590,"y":3274,"attach":[1590.0,3274.0],"regio":1,"sys":"R"},{"name":"Northwell","x":1579,"y":3133,"attach":[1578.65,3132.5],"regio":1,"sys":"R"},{"name":"Chalstow","x":1575,"y":3149,"attach":[1575.0,3148.77],"regio":1,"sys":"R"},{"name":"Hartstead","x":1575,"y":3166,"attach":[1575.0,3165.71],"regio":1,"sys":"R"},{"name":"Southcote","x":1575,"y":3183,"attach":[1575.0,3182.65],"regio":1,"sys":"R"},{"name":"Coldminster","x":1575,"y":3200,"attach":[1575.0,3199.59],"regio":1,"sys":"R"},{"name":"Ormmere","x":1575,"y":3217,"attach":[1575.0,3216.53],"regio":1,"sys":"R"},{"name":"Redby","x":1575,"y":3233,"attach":[1575.0,3233.47],"regio":1,"sys":"R"},{"name":"Netherthwaite","x":1575,"y":3250,"attach":[1575.0,3250.41],"regio":1,"sys":"R"},{"name":"Saxeminster","x":1575,"y":3267,"attach":[1575.0,3267.35],"regio":1,"sys":"R"},{"name":"Leaminster","x":1710,"y":4050,"attach":[1710,4050],"regio":1,"sys":"R"},{"name":"Marlbury","x":1710,"y":3960,"attach":[1710.0,3960.0],"sys":"MR"},{"name":"Cherrystow","x":1710,"y":4039,"attach":[1710.0,4038.75],"regio":1,"sys":"R"},{"name":"Stockbridge","x":1710,"y":4028,"attach":[1710.0,4027.5],"regio":1,"sys":"R"},{"name":"Elmbury","x":1710,"y":4016,"attach":[1710.0,4016.25],"regio":1,"sys":"R"},{"name":"Blackdale","x":1710,"y":4005,"attach":[1710.0,4005.0],"regio":1,"sys":"R"},{"name":"Atlantic Airport","x":1680,"y":3960,"attach":[1680.0,3960.0],"sys":"MR"},{"name":"Willowholme","x":1710,"y":4037,"attach":[1710.0,4037.4],"regio":1,"sys":"R"},{"name":"Claystead","x":1710,"y":4025,"attach":[1710.0,4024.8],"regio":1,"sys":"R"},{"name":"Brentmore","x":1710,"y":4012,"attach":[1710.0,4012.2],"regio":1,"sys":"R"},{"name":"Grimswick","x":1710,"y":4000,"attach":[1710.0,3999.6],"regio":1,"sys":"R"},{"name":"Ashcote","x":1710,"y":3987,"attach":[1710.0,3987.0],"regio":1,"sys":"R"},{"name":"Highham","x":1710,"y":3974,"attach":[1710.0,3974.39],"regio":1,"sys":"R"},{"name":"Yarby","x":1710,"y":3962,"attach":[1710.0,3961.79],"regio":1,"sys":"R"},{"name":"Silwick","x":1710,"y":3949,"attach":[1710.0,3949.19],"regio":1,"sys":"R"},{"name":"Redham","x":1710,"y":3937,"attach":[1710.0,3936.59],"regio":1,"sys":"R"},{"name":"Thornmore","x":1710,"y":3924,"attach":[1710.0,3923.99],"regio":1,"sys":"R"},{"name":"Long Crowwick","x":1710,"y":3911,"attach":[1710.0,3911.39],"regio":1,"sys":"R"},{"name":"Meldale","x":1710,"y":3899,"attach":[1710.0,3898.79],"regio":1,"sys":"R"},{"name":"Wakefield","x":1710,"y":3886,"attach":[1710.0,3886.19],"regio":1,"sys":"R"},{"name":"Sutmere","x":1710,"y":3874,"attach":[1710.0,3873.59],"regio":1,"sys":"R"},{"name":"Marfield","x":1710,"y":3861,"attach":[1710.0,3860.99],"regio":1,"sys":"R"},{"name":"Ormwell","x":1710,"y":3848,"attach":[1710.0,3848.38],"regio":1,"sys":"R"},{"name":"Holmholme","x":1710,"y":3836,"attach":[1710.0,3835.78],"regio":1,"sys":"R"},{"name":"Cherrycombe","x":1710,"y":3823,"attach":[1710.0,3823.18],"regio":1,"sys":"R"},{"name":"Redden","x":1710,"y":3811,"attach":[1710.0,3810.58],"regio":1,"sys":"R"},{"name":"Saxecombe","x":1710,"y":3798,"attach":[1710.0,3797.98],"regio":1,"sys":"R"},{"name":"Kirkfield","x":1710,"y":3785,"attach":[1710.0,3785.38],"regio":1,"sys":"R"},{"name":"Weswell","x":1710,"y":3773,"attach":[1710.0,3772.78],"regio":1,"sys":"R"},{"name":"Thurlden","x":1709,"y":3760,"attach":[1708.84,3760.25],"regio":1,"sys":"R"},{"name":"Swanbrook","x":1410,"y":4020,"attach":[1410.0,4020.0],"regio":1,"sys":"R"},{"name":"Elmwick","x":1695,"y":4050,"attach":[1695.23,4050.0],"regio":1,"sys":"R"},{"name":"Shepthwaite","x":1680,"y":4050,"attach":[1680.45,4050.0],"regio":1,"sys":"R"},{"name":"Great Foxley","x":1666,"y":4050,"attach":[1665.68,4050.0],"regio":1,"sys":"R"},{"name":"Oakdale","x":1651,"y":4050,"attach":[1650.91,4050.0],"regio":1,"sys":"R"},{"name":"Yarcote","x":1636,"y":4050,"attach":[1636.14,4050.0],"regio":1,"sys":"R"},{"name":"Ashford","x":1621,"y":4050,"attach":[1621.36,4050.0],"regio":1,"sys":"R"},{"name":"Hunwell","x":1607,"y":4050,"attach":[1606.59,4050.0],"regio":1,"sys":"R"},{"name":"Goldden","x":1592,"y":4050,"attach":[1591.82,4050.0],"regio":1,"sys":"R"},{"name":"Stockthwaite","x":1577,"y":4050,"attach":[1577.05,4050.0],"regio":1,"sys":"R"},{"name":"Kirkhurst","x":1562,"y":4050,"attach":[1562.27,4050.0],"regio":1,"sys":"R"},{"name":"Langfield","x":1548,"y":4050,"attach":[1547.5,4050.0],"regio":1,"sys":"R"},{"name":"Lynthwaite","x":1533,"y":4050,"attach":[1532.73,4050.0],"regio":1,"sys":"R"},{"name":"Clayfield","x":1518,"y":4050,"attach":[1517.96,4050.0],"regio":1,"sys":"R"},{"name":"Winton","x":1503,"y":4050,"attach":[1503.18,4050.0],"regio":1,"sys":"R"},{"name":"Bramsted","x":1488,"y":4050,"attach":[1488.41,4050.0],"regio":1,"sys":"R"},{"name":"Ormton","x":1474,"y":4050,"attach":[1473.64,4050.0],"regio":1,"sys":"R"},{"name":"Barkwick","x":1459,"y":4050,"attach":[1458.87,4049.79],"regio":1,"sys":"R"},{"name":"Chalbrook Junction","x":1680,"y":3900,"attach":[1680.0,3900.0],"regio":1,"sys":"R"},{"name":"Brentby","x":1701,"y":4041,"attach":[1700.56,4040.56],"regio":1,"sys":"R"},{"name":"Goldham","x":1691,"y":4031,"attach":[1691.49,4030.78],"regio":1,"sys":"R"},{"name":"Goldton","x":1684,"y":4020,"attach":[1684.35,4019.56],"regio":1,"sys":"R"},{"name":"Malden","x":1681,"y":4007,"attach":[1680.73,4006.78],"regio":1,"sys":"R"},{"name":"Highley","x":1680,"y":3993,"attach":[1680.0,3993.46],"regio":1,"sys":"R"},{"name":"Walbury","x":1680,"y":3980,"attach":[1680.0,3980.11],"regio":1,"sys":"R"},{"name":"Woodbrook","x":1680,"y":3939,"attach":[1680.0,3938.76],"regio":1,"sys":"R"},{"name":"Wykested","x":1680,"y":3925,"attach":[1680.0,3925.41],"regio":1,"sys":"R"},{"name":"Waketon","x":1260,"y":2850,"attach":[1260,2850],"regio":1,"sys":"R"},{"name":"Stockmore","x":1470,"y":2880,"attach":[1470.0,2880.0],"regio":1,"sys":"R"},{"name":"Northminster","x":1273,"y":2850,"attach":[1272.95,2850.0],"regio":1,"sys":"R"},{"name":"Hunhurst","x":1286,"y":2850,"attach":[1285.91,2850.0],"regio":1,"sys":"R"},{"name":"Melgate","x":1299,"y":2850,"attach":[1298.86,2850.0],"regio":1,"sys":"R"},{"name":"Yarmore","x":1312,"y":2850,"attach":[1311.82,2850.0],"regio":1,"sys":"R"},{"name":"Wakeham","x":1325,"y":2850,"attach":[1324.77,2850.0],"regio":1,"sys":"R"},{"name":"Leawell","x":1338,"y":2850,"attach":[1337.73,2850.0],"regio":1,"sys":"R"},{"name":"Brambrook","x":1351,"y":2850,"attach":[1350.68,2850.0],"regio":1,"sys":"R"},{"name":"Claycombe","x":1364,"y":2850,"attach":[1363.64,2850.0],"regio":1,"sys":"R"},{"name":"Eastminster","x":1377,"y":2850,"attach":[1376.59,2850.0],"regio":1,"sys":"R"},{"name":"Elmfield","x":1390,"y":2850,"attach":[1389.54,2850.0],"regio":1,"sys":"R"},{"name":"Longthwaite","x":1402,"y":2850,"attach":[1402.5,2850.0],"regio":1,"sys":"R"},{"name":"Bradgate","x":1415,"y":2850,"attach":[1415.45,2850.0],"regio":1,"sys":"R"},{"name":"Fenbridge","x":1428,"y":2851,"attach":[1428.37,2850.88],"regio":1,"sys":"R"},{"name":"Kingsferry","x":1140,"y":2850,"attach":[1140.0,2850.0],"sys":"MR"},{"name":"Grimswell","x":1251,"y":2850,"attach":[1250.77,2850.0],"regio":1,"sys":"R"},{"name":"Ryecote","x":1242,"y":2850,"attach":[1241.54,2850.0],"regio":1,"sys":"R"},{"name":"Oldwood","x":1232,"y":2850,"attach":[1232.31,2850.0],"regio":1,"sys":"R"},{"name":"Coldstead","x":1223,"y":2850,"attach":[1223.08,2850.0],"regio":1,"sys":"R"},{"name":"Coldstow","x":1214,"y":2850,"attach":[1213.85,2850.0],"regio":1,"sys":"R"},{"name":"Oakminster","x":1205,"y":2850,"attach":[1204.62,2850.0],"regio":1,"sys":"R"},{"name":"Stockwood","x":1195,"y":2850,"attach":[1195.38,2850.0],"regio":1,"sys":"R"},{"name":"Fairsted","x":1186,"y":2850,"attach":[1186.15,2850.0],"regio":1,"sys":"R"},{"name":"Malwell","x":1177,"y":2850,"attach":[1176.92,2850.0],"regio":1,"sys":"R"},{"name":"Bradbrook","x":1110,"y":2670,"attach":[1110.0,2670.0],"regio":1,"sys":"R"},{"name":"Oldcote","x":1260,"y":2840,"attach":[1260.0,2839.98],"regio":1,"sys":"R"},{"name":"Netherbury","x":1260,"y":2830,"attach":[1259.54,2829.97],"regio":1,"sys":"R"},{"name":"Elmby","x":1257,"y":2820,"attach":[1256.94,2820.35],"regio":1,"sys":"R"},{"name":"Grimsmere","x":1252,"y":2812,"attach":[1251.53,2811.97],"regio":1,"sys":"R"},{"name":"Southmore","x":1245,"y":2805,"attach":[1244.67,2804.67],"regio":1,"sys":"R"},{"name":"Ryestead","x":1238,"y":2798,"attach":[1237.58,2797.58],"regio":1,"sys":"R"},{"name":"Shepton","x":1230,"y":2790,"attach":[1230.5,2790.5],"regio":1,"sys":"R"},{"name":"Warthorpe","x":1223,"y":2783,"attach":[1223.41,2783.41],"regio":1,"sys":"R"},{"name":"Stockcombe","x":1216,"y":2776,"attach":[1216.32,2776.32],"regio":1,"sys":"R"},{"name":"Winthorpe","x":1209,"y":2769,"attach":[1209.23,2769.23],"regio":1,"sys":"R"},{"name":"Swanwood","x":1202,"y":2762,"attach":[1202.14,2762.14],"regio":1,"sys":"R"},{"name":"Sutstead","x":1195,"y":2755,"attach":[1195.06,2755.06],"regio":1,"sys":"R"},{"name":"Netherfield","x":1188,"y":2748,"attach":[1187.97,2747.97],"regio":1,"sys":"R"},{"name":"Eastfield","x":1181,"y":2741,"attach":[1180.88,2740.88],"regio":1,"sys":"R"},{"name":"Eastwick","x":1174,"y":2734,"attach":[1173.79,2733.79],"regio":1,"sys":"R"},{"name":"Woodminster","x":1167,"y":2727,"attach":[1166.7,2726.7],"regio":1,"sys":"R"},{"name":"Crowford","x":1160,"y":2720,"attach":[1159.62,2719.62],"regio":1,"sys":"R"},{"name":"Oldminster","x":1153,"y":2713,"attach":[1152.53,2712.53],"regio":1,"sys":"R"},{"name":"Wakewood","x":1145,"y":2705,"attach":[1145.44,2705.44],"regio":1,"sys":"R"},{"name":"Langham","x":1138,"y":2698,"attach":[1138.35,2698.35],"regio":1,"sys":"R"},{"name":"Wykethorpe","x":1250,"y":2860,"attach":[1249.55,2860.45],"regio":1,"sys":"R"},{"name":"Thornham","x":1240,"y":2871,"attach":[1239.67,2871.41],"regio":1,"sys":"R"},{"name":"Melton","x":1233,"y":2884,"attach":[1232.9,2884.42],"regio":1,"sys":"R"},{"name":"Walbridge","x":1230,"y":2899,"attach":[1230.21,2898.87],"regio":1,"sys":"R"},{"name":"Grimsstead","x":1230,"y":2914,"attach":[1230.0,2913.64],"regio":1,"sys":"R"},{"name":"Rookgate","x":1230,"y":2928,"attach":[1230.0,2928.41],"regio":1,"sys":"R"},{"name":"Marwick","x":1230,"y":2943,"attach":[1230.0,2943.18],"regio":1,"sys":"R"},{"name":"Moorford","x":1230,"y":2958,"attach":[1230.0,2957.96],"regio":1,"sys":"R"},{"name":"Quarrthwaite","x":1230,"y":2973,"attach":[1230.0,2972.73],"regio":1,"sys":"R"},{"name":"Langcote","x":1230,"y":2988,"attach":[1230.0,2987.5],"regio":1,"sys":"R"},{"name":"Melcote","x":1230,"y":3002,"attach":[1230.0,3002.27],"regio":1,"sys":"R"},{"name":"Melminster","x":1230,"y":3017,"attach":[1230.0,3017.05],"regio":1,"sys":"R"},{"name":"Shepwick","x":1230,"y":3032,"attach":[1230.0,3031.82],"regio":1,"sys":"R"},{"name":"Cotham","x":1230,"y":3047,"attach":[1230.0,3046.59],"regio":1,"sys":"R"},{"name":"Waterbridge","x":1230,"y":3061,"attach":[1230.0,3061.36],"regio":1,"sys":"R"},{"name":"Saxehurst","x":1230,"y":3076,"attach":[1230.0,3076.14],"regio":1,"sys":"R"},{"name":"Warwood","x":1230,"y":3091,"attach":[1230.0,3090.91],"regio":1,"sys":"R"},{"name":"Stanbrook","x":1260,"y":2865,"attach":[1260.0,2865.28],"regio":1,"sys":"R"},{"name":"Moorley","x":1260,"y":2881,"attach":[1260.0,2880.56],"regio":1,"sys":"R"},{"name":"Swanbury","x":1260,"y":2896,"attach":[1260.0,2895.83],"regio":1,"sys":"R"},{"name":"Longmore","x":1260,"y":2911,"attach":[1260.0,2911.11],"regio":1,"sys":"R"},{"name":"Wykethwaite","x":1260,"y":2926,"attach":[1260.0,2926.39],"regio":1,"sys":"R"},{"name":"Quarrthorpe","x":1260,"y":2942,"attach":[1260.0,2941.67],"regio":1,"sys":"R"},{"name":"Langbury","x":1260,"y":2957,"attach":[1260.0,2956.94],"regio":1,"sys":"R"},{"name":"Millminster","x":1260,"y":2972,"attach":[1260.0,2972.22],"regio":1,"sys":"R"},{"name":"Swanwell","x":1259,"y":2987,"attach":[1259.13,2987.46],"regio":1,"sys":"R"},{"name":"Warstow","x":1254,"y":3002,"attach":[1254.25,3001.83],"regio":1,"sys":"R"},{"name":"Barkwood","x":1246,"y":3014,"attach":[1245.51,3014.28],"regio":1,"sys":"R"},{"name":"Woodley","x":1235,"y":3025,"attach":[1234.82,3025.18],"regio":1,"sys":"R"},{"name":"Highwood","x":1204,"y":3056,"attach":[1204.22,3055.78],"regio":1,"sys":"R"},{"name":"Woldworth","x":1213,"y":3047,"attach":[1213.21,3046.79],"regio":1,"sys":"R"},{"name":"Havenbolme Hbf","x":750,"y":2550,"attach":[750.0,2550.0],"sys":"M"},{"name":"Binchester","x":810,"y":2700,"attach":[810.0,2700.0],"sys":"M"},{"name":"Whitehurst","x":960,"y":2550,"attach":[960.0,2550.0],"sys":"M"},{"name":"Longmere","x":1440,"y":4110,"attach":[1440.0,4110.0],"regio":1,"sys":"R"},{"name":"Beckham","x":1380,"y":4200,"attach":[1380.0,4200.0],"regio":1,"sys":"R"},{"name":"Wykemore","x":1395,"y":4035,"attach":[1395.05,4034.95],"regio":1,"sys":"R"},{"name":"Melholme","x":1383,"y":4052,"attach":[1383.48,4052.46],"regio":1,"sys":"R"},{"name":"Winden","x":1380,"y":4073,"attach":[1380.0,4073.18],"regio":1,"sys":"R"},{"name":"Holmstow","x":1380,"y":4094,"attach":[1380.0,4094.32],"regio":1,"sys":"R"},{"name":"Ulverton","x":1380,"y":4115,"attach":[1380.0,4115.46],"regio":1,"sys":"R"},{"name":"Waterwick","x":1680,"y":4200,"attach":[1680.0,4200.0],"regio":1,"sys":"R"},{"name":"Kirkcombe","x":1426,"y":4020,"attach":[1425.56,4020.0],"regio":1,"sys":"R"},{"name":"Ryeham","x":1441,"y":4020,"attach":[1441.12,4020.0],"regio":1,"sys":"R"},{"name":"Northham","x":1457,"y":4020,"attach":[1456.67,4020.0],"regio":1,"sys":"R"},{"name":"Birchthorpe","x":1472,"y":4020,"attach":[1472.23,4020.0],"regio":1,"sys":"R"},{"name":"Crowworth","x":1488,"y":4021,"attach":[1487.75,4020.89],"regio":1,"sys":"R"},{"name":"Birchby","x":1502,"y":4026,"attach":[1502.34,4026.03],"regio":1,"sys":"R"},{"name":"Hunwick","x":1515,"y":4035,"attach":[1514.93,4035.04],"regio":1,"sys":"R"},{"name":"Grimsfield","x":1526,"y":4046,"attach":[1525.98,4045.98],"regio":1,"sys":"R"},{"name":"Holmthwaite","x":1537,"y":4057,"attach":[1536.98,4056.98],"regio":1,"sys":"R"},{"name":"Redthorpe","x":1548,"y":4068,"attach":[1547.99,4067.99],"regio":1,"sys":"R"},{"name":"Highfield","x":1559,"y":4079,"attach":[1558.99,4078.99],"regio":1,"sys":"R"},{"name":"Sutley","x":1570,"y":4090,"attach":[1569.99,4089.99],"regio":1,"sys":"R"},{"name":"Heathcombe","x":1581,"y":4101,"attach":[1580.99,4100.99],"regio":1,"sys":"R"},{"name":"Saxestead","x":1592,"y":4112,"attach":[1591.99,4111.99],"regio":1,"sys":"R"},{"name":"Chalby","x":1603,"y":4123,"attach":[1602.99,4122.99],"regio":1,"sys":"R"},{"name":"Woodcombe","x":1614,"y":4134,"attach":[1613.99,4133.99],"regio":1,"sys":"R"},{"name":"Waterfield","x":1625,"y":4145,"attach":[1624.99,4144.99],"regio":1,"sys":"R"},{"name":"Burnstead","x":1636,"y":4156,"attach":[1636.0,4156.0],"regio":1,"sys":"R"},{"name":"Brentley","x":1440,"y":3750,"attach":[1440.0,3750.0],"regio":1,"sys":"R"},{"name":"Heathden","x":1410,"y":4007,"attach":[1410.0,4006.66],"regio":1,"sys":"R"},{"name":"Northton","x":1410,"y":3993,"attach":[1410.0,3993.31],"regio":1,"sys":"R"},{"name":"Burnmore","x":1410,"y":3980,"attach":[1410.0,3979.97],"regio":1,"sys":"R"},{"name":"Hazeldale","x":1410,"y":3967,"attach":[1410.0,3966.62],"regio":1,"sys":"R"},{"name":"Thurlbury","x":1410,"y":3953,"attach":[1410.0,3953.28],"regio":1,"sys":"R"},{"name":"Cherrysted","x":1410,"y":3940,"attach":[1410.0,3939.94],"regio":1,"sys":"R"},{"name":"Silworth","x":1410,"y":3927,"attach":[1410.0,3926.59],"regio":1,"sys":"R"},{"name":"Cherrybury","x":1410,"y":3913,"attach":[1410.0,3913.25],"regio":1,"sys":"R"},{"name":"Heathstow","x":1410,"y":3900,"attach":[1410.0,3899.9],"regio":1,"sys":"R"},{"name":"Sandfield","x":1410,"y":3887,"attach":[1410.0,3886.56],"regio":1,"sys":"R"},{"name":"Kirkden","x":1410,"y":3873,"attach":[1410.0,3873.22],"regio":1,"sys":"R"},{"name":"Newmore","x":1410,"y":3860,"attach":[1410.0,3859.87],"regio":1,"sys":"R"},{"name":"Willowdale","x":1410,"y":3847,"attach":[1410.0,3846.53],"regio":1,"sys":"R"},{"name":"Stanmere","x":1410,"y":3833,"attach":[1410.0,3833.18],"regio":1,"sys":"R"},{"name":"Nethersted","x":1410,"y":3820,"attach":[1410.0,3819.84],"regio":1,"sys":"R"},{"name":"Barkholme","x":1410,"y":3806,"attach":[1410.0,3806.49],"regio":1,"sys":"R"},{"name":"Longbridge","x":1411,"y":3793,"attach":[1410.74,3793.18],"regio":1,"sys":"R"},{"name":"Northden","x":1560,"y":3420,"attach":[1560.0,3420.0],"regio":1,"sys":"R"},{"name":"Woodfield","x":1580,"y":3340,"attach":[1579.88,3340.12],"regio":1,"sys":"R"},{"name":"Moorwell","x":1570,"y":3351,"attach":[1570.25,3350.71],"regio":1,"sys":"R"},{"name":"Hazelthwaite","x":1563,"y":3363,"attach":[1563.29,3363.11],"regio":1,"sys":"R"},{"name":"Ellesmere","x":1710,"y":1830,"attach":[1710,1830],"sys":"M"},{"name":"Barton Central","x":1830,"y":1800,"attach":[1830.0,1800.0],"sys":"M"},{"name":"Fukow","x":1710,"y":1680,"attach":[1710.0,1680.0],"sys":"M"},{"name":"Zhennanguan","x":1710,"y":1755,"attach":[1710.0,1755.0],"sys":"M"},{"name":"Touraine-Central","x":1620,"y":1950,"attach":[1620.0,1950.0],"sys":"M"},{"name":"Prinsburg Central","x":1950,"y":1920,"attach":[1950.0,1920.0],"sys":"M"},{"name":"Chatham","x":2040,"y":2010,"attach":[2040,2010],"sys":"M"},{"name":"Meiyin","x":1050,"y":1890,"attach":[1050,1890],"sys":"M"},{"name":"Tsingshui","x":1140,"y":1800,"attach":[1140.0,1800.0],"sys":"M"},{"name":"Somerfield St John","x":1080,"y":2040,"attach":[1080.0,2040.0],"sys":"M"},{"name":"Millstead","x":935,"y":2005,"attach":[934.94,2005.06],"sys":"M"},{"name":"Swanley","x":1710,"y":3432,"attach":[1710.0,3432.41],"regio":1,"sys":"R"},{"name":"Weswick","x":1710,"y":3445,"attach":[1710.0,3444.82],"regio":1,"sys":"R"},{"name":"Thurldale","x":1710,"y":3457,"attach":[1710.0,3457.23],"regio":1,"sys":"R"},{"name":"Brookworth","x":1710,"y":3470,"attach":[1710.0,3469.64],"regio":1,"sys":"R"},{"name":"Millmore","x":1710,"y":3482,"attach":[1710.0,3482.05],"regio":1,"sys":"R"},{"name":"Blackby","x":1710,"y":3494,"attach":[1710.0,3494.45],"regio":1,"sys":"R"},{"name":"Yarstow","x":1710,"y":3507,"attach":[1710.0,3506.86],"regio":1,"sys":"R"},{"name":"Walley","x":1710,"y":3519,"attach":[1710.0,3519.27],"regio":1,"sys":"R"},{"name":"Brookholme","x":1710,"y":3532,"attach":[1710.0,3531.68],"regio":1,"sys":"R"},{"name":"Willowden","x":1710,"y":3544,"attach":[1710.0,3544.09],"regio":1,"sys":"R"},{"name":"Waterhurst","x":1710,"y":3556,"attach":[1710.0,3556.5],"regio":1,"sys":"R"},{"name":"Southgate","x":1710,"y":3569,"attach":[1710.0,3568.91],"regio":1,"sys":"R"},{"name":"Hazelbury","x":1710,"y":3581,"attach":[1710.0,3581.32],"regio":1,"sys":"R"},{"name":"Beckholme","x":1710,"y":3594,"attach":[1710.0,3593.73],"regio":1,"sys":"R"},{"name":"Wykeford","x":1710,"y":3606,"attach":[1710.0,3606.14],"regio":1,"sys":"R"},{"name":"Moorham","x":1710,"y":3619,"attach":[1710.0,3618.54],"regio":1,"sys":"R"},{"name":"Grimscote","x":1710,"y":3631,"attach":[1710.0,3630.95],"regio":1,"sys":"R"},{"name":"Goldfield","x":1710,"y":3643,"attach":[1710.0,3643.36],"regio":1,"sys":"R"},{"name":"Pendale","x":1710,"y":3656,"attach":[1710.0,3655.77],"regio":1,"sys":"R"},{"name":"Warden","x":1710,"y":3668,"attach":[1710.0,3668.18],"regio":1,"sys":"R"},{"name":"Highbrook","x":1709,"y":3680,"attach":[1708.62,3680.48],"regio":1,"sys":"R"},{"name":"Medway Central","x":1350,"y":3480,"attach":[1350.0,3480.0],"sys":"MR"},{"name":"Silthorpe","x":1699,"y":3431,"attach":[1698.73,3431.27],"regio":1,"sys":"R"},{"name":"Sandham","x":1687,"y":3443,"attach":[1687.46,3442.54],"regio":1,"sys":"R"},{"name":"Goldley","x":1676,"y":3454,"attach":[1676.19,3453.81],"regio":1,"sys":"R"},{"name":"Thurlwell","x":1665,"y":3465,"attach":[1664.86,3465.02],"regio":1,"sys":"R"},{"name":"Malthwaite","x":1652,"y":3474,"attach":[1651.92,3474.2],"regio":1,"sys":"R"},{"name":"Stockden","x":1637,"y":3479,"attach":[1636.89,3479.18],"regio":1,"sys":"R"},{"name":"Langmore","x":1621,"y":3480,"attach":[1620.99,3480.0],"regio":1,"sys":"R"},{"name":"Bramby","x":1605,"y":3480,"attach":[1605.05,3480.0],"regio":1,"sys":"R"},{"name":"Westhwaite","x":1589,"y":3480,"attach":[1589.11,3480.0],"regio":1,"sys":"R"},{"name":"Woodford","x":1573,"y":3480,"attach":[1573.17,3480.0],"regio":1,"sys":"R"},{"name":"Heathstead","x":1557,"y":3480,"attach":[1557.23,3480.0],"regio":1,"sys":"R"},{"name":"Melmore","x":1541,"y":3480,"attach":[1541.29,3480.0],"regio":1,"sys":"R"},{"name":"Crowmere","x":1525,"y":3480,"attach":[1525.34,3480.0],"regio":1,"sys":"R"},{"name":"Highstead","x":1509,"y":3480,"attach":[1509.4,3480.0],"regio":1,"sys":"R"},{"name":"Wesbridge","x":1493,"y":3480,"attach":[1493.46,3480.0],"regio":1,"sys":"R"},{"name":"Warbrook","x":1478,"y":3480,"attach":[1477.52,3480.0],"regio":1,"sys":"R"},{"name":"Ormcombe","x":1462,"y":3480,"attach":[1461.58,3480.0],"regio":1,"sys":"R"},{"name":"Thurlholme","x":1446,"y":3480,"attach":[1445.64,3480.0],"regio":1,"sys":"R"},{"name":"Yarthorpe","x":1430,"y":3480,"attach":[1429.7,3480.0],"regio":1,"sys":"R"},{"name":"Oldwick","x":1414,"y":3480,"attach":[1413.76,3480.0],"regio":1,"sys":"R"},{"name":"Larkcote","x":1020,"y":2640,"attach":[1020,2640],"regio":1,"sys":"R"},{"name":"Mapleriver Central","x":960,"y":2700,"attach":[960.0,2700.0],"sys":"MR"},{"name":"Stockley","x":1010,"y":2650,"attach":[1010.0,2650.0],"regio":1,"sys":"R"},{"name":"Hunby","x":1000,"y":2660,"attach":[1000.0,2660.0],"regio":1,"sys":"R"},{"name":"Leaby","x":1140,"y":2610,"attach":[1140.0,2610.0],"regio":1,"sys":"R"},{"name":"Newport","x":1067,"y":2640,"attach":[1067.35,2640.0],"sys":"MR"},{"name":"Bradford","x":1079,"y":2640,"attach":[1079.19,2640.0],"regio":1,"sys":"R"},{"name":"Marmore","x":1091,"y":2640,"attach":[1091.02,2639.79],"regio":1,"sys":"R"},{"name":"Bradthorpe","x":1103,"y":2638,"attach":[1102.67,2637.97],"regio":1,"sys":"R"},{"name":"Brunswick","x":1860,"y":2400,"attach":[1860,2400],"sys":"M"},{"name":"Springford","x":1813,"y":2323,"attach":[1813.41,2323.41],"sys":"M"},{"name":"Ashton","x":1747,"y":2257,"attach":[1746.7,2256.7],"sys":"M"},{"name":"Mareston","x":1836,"y":2454,"attach":[1836.35,2453.65],"sys":"M"},{"name":"Maidstone","x":1793,"y":2497,"attach":[1792.58,2497.42],"sys":"M"},{"name":"Bayarfort","x":1749,"y":2541,"attach":[1748.82,2541.18],"sys":"M"},{"name":"Sulgen","x":1705,"y":2585,"attach":[1705.06,2584.94],"sys":"M"},{"name":"Kingsbury","x":1661,"y":2629,"attach":[1661.29,2628.71],"sys":"M"},{"name":"Valcourt","x":1618,"y":2672,"attach":[1617.53,2672.47],"sys":"M"},{"name":"Cartier","x":1574,"y":2716,"attach":[1573.76,2716.24],"sys":"M"},{"name":"Merlaut","x":1470,"y":2400,"attach":[1470.0,2400.0],"sys":"M"},{"name":"Netherwood","x":1665,"y":2400,"attach":[1665.0,2400.0],"sys":"M"},{"name":"Kirkgate","x":1680,"y":3810,"attach":[1680.0,3810.0],"regio":1,"sys":"R"},{"name":"Dunwick","x":1680,"y":3730,"attach":[1680.0,3730.0],"regio":1,"sys":"R"},{"name":"Yarham","x":1680,"y":3740,"attach":[1680.0,3740.0],"regio":1,"sys":"R"},{"name":"Bradley","x":1680,"y":3750,"attach":[1680.0,3750.0],"regio":1,"sys":"R"},{"name":"Southstead","x":1680,"y":3760,"attach":[1680.0,3760.0],"regio":1,"sys":"R"},{"name":"Wesstow","x":1680,"y":3770,"attach":[1680.0,3770.0],"regio":1,"sys":"R"},{"name":"Elmham","x":1680,"y":3735,"attach":[1680.0,3734.72],"regio":1,"sys":"R"},{"name":"Cherrybridge","x":1680,"y":3749,"attach":[1680.0,3749.44],"regio":1,"sys":"R"},{"name":"Rookfield","x":1680,"y":3764,"attach":[1680.0,3764.16],"regio":1,"sys":"R"},{"name":"Highsted","x":1680,"y":3779,"attach":[1680.0,3778.88],"regio":1,"sys":"R"},{"name":"Stowham","x":1680,"y":3794,"attach":[1680.0,3793.6],"regio":1,"sys":"R"},{"name":"Fairham","x":1680,"y":3808,"attach":[1680.0,3808.31],"regio":1,"sys":"R"},{"name":"Eastmore","x":1680,"y":3823,"attach":[1680.0,3823.03],"regio":1,"sys":"R"},{"name":"Sandmere","x":1680,"y":3838,"attach":[1680.0,3837.75],"regio":1,"sys":"R"},{"name":"Leacombe","x":1680,"y":3852,"attach":[1680.0,3852.47],"regio":1,"sys":"R"},{"name":"Northmore","x":1680,"y":3867,"attach":[1680.0,3867.19],"regio":1,"sys":"R"},{"name":"Swancombe","x":1680,"y":3882,"attach":[1680.0,3881.91],"regio":1,"sys":"R"},{"name":"Foxden","x":1686,"y":3932,"attach":[1685.52,3931.73],"regio":1,"sys":"R"},{"name":"Millcombe Junction","x":1680,"y":3911,"attach":[1680.23,3911.34],"regio":1,"sys":"R"},{"name":"Ravenstone","x":1110,"y":2520,"attach":[1110.0,2520.0],"sys":"M"},{"name":"Batavie","x":1440,"y":1980,"attach":[1440.0,1980.0],"sys":"M"},{"name":"Aéroport Parnay","x":1535,"y":1980,"attach":[1535.11,1980.0],"sys":"M"},{"name":"Pinehurst","x":1800,"y":1920,"attach":[1800.0,1920.0],"sys":"M"},{"name":"Bellerive","x":1590,"y":2100,"attach":[1590.0,2100.0],"sys":"M"},{"name":"Melmere","x":1620,"y":3390,"attach":[1620,3390],"regio":1,"sys":"R"},{"name":"Whitden","x":1620,"y":3300,"attach":[1620.0,3300.0],"regio":1,"sys":"R"},{"name":"Penthwaite","x":1638,"y":3390,"attach":[1638.0,3390.0],"regio":1,"sys":"R"},{"name":"Marbridge","x":1620,"y":3375,"attach":[1620.0,3375.0],"regio":1,"sys":"R"},{"name":"Melbrook","x":1620,"y":3360,"attach":[1620.0,3360.0],"regio":1,"sys":"R"},{"name":"Coldwood","x":1620,"y":3345,"attach":[1620.0,3345.0],"regio":1,"sys":"R"},{"name":"Fenhurst","x":1620,"y":3330,"attach":[1620.0,3330.0],"regio":1,"sys":"R"},{"name":"Brentcote","x":1620,"y":3315,"attach":[1620.0,3315.0],"regio":1,"sys":"R"},{"name":"Reddale","x":1620,"y":3300,"attach":[1620.0,3300.0],"regio":1,"sys":"R"},{"name":"Hawgate","x":1620,"y":3285,"attach":[1620.0,3285.0],"regio":1,"sys":"R"},{"name":"Hawwick","x":1620,"y":3270,"attach":[1620.0,3270.0],"regio":1,"sys":"R"},{"name":"Netherbrook","x":1620,"y":3255,"attach":[1620.0,3255.0],"regio":1,"sys":"R"},{"name":"Cherrygate","x":1620,"y":3240,"attach":[1620.0,3240.0],"regio":1,"sys":"R"},{"name":"Hawden","x":1620,"y":3225,"attach":[1620.0,3225.0],"regio":1,"sys":"R"},{"name":"Cherryden","x":1620,"y":3210,"attach":[1620.0,3210.0],"regio":1,"sys":"R"},{"name":"Lockton","x":1110,"y":2160,"attach":[1110,2160],"sys":"M"},{"name":"Norbourne","x":1110,"y":2340,"attach":[1110.0,2340.0],"sys":"M"},{"name":"Belwich East","x":1002,"y":2160,"attach":[1002.48,2160.0],"sys":"M"},{"name":"Amptonside Canal","x":895,"y":2160,"attach":[894.95,2160.0],"sys":"M"},{"name":"Flancourt-Est","x":1470,"y":2190,"attach":[1470.0,2190.0],"sys":"M"},{"name":"Grafton Central","x":1285,"y":2190,"attach":[1284.89,2190.0],"sys":"M"},{"name":"Southend","x":1680,"y":4290,"attach":[1680.0,4290.0],"sys":"MR"},{"name":"Becksted","x":1680,"y":3993,"attach":[1680.0,3993.0],"regio":1,"sys":"R"},{"name":"Wescombe","x":1680,"y":4026,"attach":[1680.0,4026.0],"regio":1,"sys":"R"},{"name":"Fernsted","x":1680,"y":4059,"attach":[1680.0,4059.0],"regio":1,"sys":"R"},{"name":"Malton","x":1680,"y":4092,"attach":[1680.0,4092.0],"regio":1,"sys":"R"},{"name":"Crowmore","x":1680,"y":4125,"attach":[1680.0,4125.0],"regio":1,"sys":"R"},{"name":"Willowstow","x":1680,"y":4158,"attach":[1680.0,4158.0],"regio":1,"sys":"R"},{"name":"Willowstead","x":1671,"y":3969,"attach":[1671.22,3969.03],"regio":1,"sys":"R"},{"name":"Birchmere","x":1666,"y":3980,"attach":[1665.58,3980.13],"regio":1,"sys":"R"},{"name":"Millthorpe","x":1665,"y":3993,"attach":[1665.0,3992.69],"regio":1,"sys":"R"},{"name":"Newhurst","x":1665,"y":4005,"attach":[1665.0,4005.29],"regio":1,"sys":"R"},{"name":"Upper Brentbridge","x":1665,"y":4018,"attach":[1665.0,4017.89],"regio":1,"sys":"R"},{"name":"Walby","x":1665,"y":4030,"attach":[1665.0,4030.49],"regio":1,"sys":"R"},{"name":"Holmcote","x":1665,"y":4043,"attach":[1665.0,4043.09],"regio":1,"sys":"R"},{"name":"Newgate","x":1665,"y":4056,"attach":[1665.0,4055.69],"regio":1,"sys":"R"},{"name":"Chalworth","x":1665,"y":4068,"attach":[1665.0,4068.3],"regio":1,"sys":"R"},{"name":"Hazelstead","x":1665,"y":4081,"attach":[1665.0,4080.9],"regio":1,"sys":"R"},{"name":"Highmere","x":1665,"y":4093,"attach":[1665.0,4093.5],"regio":1,"sys":"R"},{"name":"Kirkley","x":1665,"y":4106,"attach":[1665.0,4106.1],"regio":1,"sys":"R"},{"name":"Melhurst","x":1665,"y":4119,"attach":[1665.0,4118.7],"regio":1,"sys":"R"},{"name":"Thurlmore","x":1665,"y":4131,"attach":[1665.0,4131.3],"regio":1,"sys":"R"},{"name":"Waterminster","x":1665,"y":4144,"attach":[1665.0,4143.9],"regio":1,"sys":"R"},{"name":"Todton","x":1665,"y":4157,"attach":[1665.0,4156.5],"regio":1,"sys":"R"},{"name":"Elmford","x":1665,"y":4169,"attach":[1665.0,4169.1],"regio":1,"sys":"R"},{"name":"Elmstead","x":1665,"y":4182,"attach":[1665.0,4181.7],"regio":1,"sys":"R"},{"name":"Fernham","x":1665,"y":4194,"attach":[1665.0,4194.31],"regio":1,"sys":"R"},{"name":"Saxebrook","x":1665,"y":4207,"attach":[1665.0,4206.91],"regio":1,"sys":"R"},{"name":"Wickstow","x":1665,"y":4220,"attach":[1665.0,4219.51],"regio":1,"sys":"R"},{"name":"Thurlbridge","x":1665,"y":4232,"attach":[1665.0,4232.11],"regio":1,"sys":"R"},{"name":"Clayworth","x":1665,"y":4245,"attach":[1665.0,4244.71],"regio":1,"sys":"R"},{"name":"Willowgate","x":1680,"y":3969,"attach":[1680.0,3969.14],"regio":1,"sys":"R"},{"name":"Larkstead","x":1680,"y":3994,"attach":[1680.0,3994.29],"regio":1,"sys":"R"},{"name":"Oakley","x":1680,"y":4011,"attach":[1680.0,4011.43],"regio":1,"sys":"R"},{"name":"Wakewick","x":1680,"y":4029,"attach":[1680.0,4028.57],"regio":1,"sys":"R"},{"name":"Barkminster","x":1680,"y":4038,"attach":[1680.0,4037.71],"regio":1,"sys":"R"},{"name":"Leasted","x":1680,"y":4071,"attach":[1680.0,4070.86],"regio":1,"sys":"R"},{"name":"Thurlthwaite","x":1680,"y":4080,"attach":[1680.0,4080.0],"regio":1,"sys":"R"},{"name":"Bradcombe","x":1680,"y":4105,"attach":[1680.0,4105.14],"regio":1,"sys":"R"},{"name":"Rookstow","x":1680,"y":4114,"attach":[1680.0,4114.29],"regio":1,"sys":"R"},{"name":"Coldmere","x":1680,"y":4139,"attach":[1680.0,4139.43],"regio":1,"sys":"R"},{"name":"Yuchow Central","x":1050,"y":1620,"attach":[1050.0,1620.0],"sys":"M"},{"name":"Shihmen","x":1090,"y":1710,"attach":[1090.0,1710.0],"sys":"M"},{"name":"Peiting New Town","x":1160,"y":1710,"attach":[1160.0,1710.0],"sys":"M"},{"name":"Vindelle-Central","x":1560,"y":2820,"attach":[1560.0,2820.0],"sys":"MR"},{"name":"Saxeford","x":1140,"y":2910,"attach":[1140.0,2910.0],"regio":1,"sys":"R"},{"name":"Todham","x":1140,"y":2862,"attach":[1140.0,2862.0],"regio":1,"sys":"R"},{"name":"Wakestead","x":1147,"y":2857,"attach":[1147.08,2857.08],"regio":1,"sys":"R"},{"name":"Larkdale","x":1154,"y":2864,"attach":[1154.15,2864.15],"regio":1,"sys":"R"},{"name":"Marbury","x":1161,"y":2872,"attach":[1160.64,2871.78],"regio":1,"sys":"R"},{"name":"Cotgate","x":1166,"y":2880,"attach":[1165.64,2880.42],"regio":1,"sys":"R"},{"name":"Woodton","x":1169,"y":2890,"attach":[1168.74,2889.91],"regio":1,"sys":"R"},{"name":"Whitmere","x":1170,"y":2900,"attach":[1169.87,2899.83],"regio":1,"sys":"R"},{"name":"Beauvoir Docklands","x":1170,"y":2940,"attach":[1170.0,2939.86],"sys":"MR"},{"name":"Walwood","x":1170,"y":2950,"attach":[1170.0,2949.87],"regio":1,"sys":"R"},{"name":"Walcombe","x":1170,"y":2960,"attach":[1170.0,2959.88],"regio":1,"sys":"R"},{"name":"Lynthorpe","x":1170,"y":2970,"attach":[1170.0,2969.89],"regio":1,"sys":"R"},{"name":"Southley","x":1170,"y":2980,"attach":[1170.0,2979.9],"regio":1,"sys":"R"},{"name":"Winstow","x":1170,"y":2990,"attach":[1170.0,2989.91],"regio":1,"sys":"R"},{"name":"Netherby","x":1170,"y":3000,"attach":[1170.0,2999.92],"regio":1,"sys":"R"},{"name":"Millbridge","x":1170,"y":3010,"attach":[1170.0,3009.93],"regio":1,"sys":"R"},{"name":"Hartgate","x":1170,"y":3020,"attach":[1170.0,3019.94],"regio":1,"sys":"R"},{"name":"Quarrcombe","x":1170,"y":3030,"attach":[1170.0,3029.95],"regio":1,"sys":"R"},{"name":"Ulverley","x":1170,"y":3040,"attach":[1170.0,3039.95],"regio":1,"sys":"R"},{"name":"Oakbrook","x":1170,"y":3050,"attach":[1170.0,3049.96],"regio":1,"sys":"R"},{"name":"Heathworth","x":1133,"y":2843,"attach":[1132.92,2842.92],"regio":1,"sys":"R"},{"name":"Chalthorpe","x":1126,"y":2836,"attach":[1125.84,2835.84],"regio":1,"sys":"R"},{"name":"Langby","x":1119,"y":2828,"attach":[1119.36,2828.22],"regio":1,"sys":"R"},{"name":"Watersted","x":1114,"y":2820,"attach":[1114.36,2819.57],"regio":1,"sys":"R"},{"name":"Larkgate","x":1111,"y":2810,"attach":[1111.26,2810.08],"regio":1,"sys":"R"},{"name":"Cherrydale","x":1110,"y":2800,"attach":[1110.12,2800.15],"regio":1,"sys":"R"},{"name":"Blackminster","x":1110,"y":2790,"attach":[1110.0,2790.14],"regio":1,"sys":"R"},{"name":"Goldcombe","x":1110,"y":2780,"attach":[1110.0,2780.13],"regio":1,"sys":"R"},{"name":"Ashdale","x":1110,"y":2770,"attach":[1110.0,2770.12],"regio":1,"sys":"R"},{"name":"Longworth","x":1110,"y":2760,"attach":[1110.0,2760.11],"regio":1,"sys":"R"},{"name":"Oakton","x":1110,"y":2750,"attach":[1110.0,2750.1],"regio":1,"sys":"R"},{"name":"Woldminster","x":1110,"y":2740,"attach":[1110.0,2740.08],"regio":1,"sys":"R"},{"name":"Warstead","x":1110,"y":2730,"attach":[1110.0,2730.07],"regio":1,"sys":"R"},{"name":"Goldby","x":1110,"y":2720,"attach":[1110.0,2720.06],"regio":1,"sys":"R"},{"name":"Saxegate","x":1110,"y":2710,"attach":[1110.0,2710.05],"regio":1,"sys":"R"},{"name":"Ryestow","x":1350,"y":3583,"attach":[1350.0,3582.86],"regio":1,"sys":"R"},{"name":"Brooksted","x":1350,"y":3566,"attach":[1350.0,3565.71],"regio":1,"sys":"R"},{"name":"Langstead","x":1350,"y":3549,"attach":[1350.0,3548.57],"regio":1,"sys":"R"},{"name":"Southwood","x":1363,"y":3587,"attach":[1362.9,3587.1],"regio":1,"sys":"R"},{"name":"Quarrwick","x":1374,"y":3573,"attach":[1373.95,3572.69],"regio":1,"sys":"R"},{"name":"Bramworth","x":1379,"y":3555,"attach":[1379.39,3555.45],"regio":1,"sys":"R"},{"name":"Shepcote","x":1380,"y":3537,"attach":[1380.0,3537.23],"regio":1,"sys":"R"},{"name":"Brambridge","x":1380,"y":3519,"attach":[1380.0,3518.98],"regio":1,"sys":"R"},{"name":"Moorby","x":1380,"y":3501,"attach":[1380.0,3500.73],"regio":1,"sys":"R"},{"name":"Langgate","x":1380,"y":3482,"attach":[1380.0,3482.49],"regio":1,"sys":"R"},{"name":"Walthorpe","x":1380,"y":3464,"attach":[1380.0,3464.24],"regio":1,"sys":"R"},{"name":"Dunthwaite","x":1380,"y":3446,"attach":[1380.0,3445.99],"regio":1,"sys":"R"},{"name":"Swanfield","x":1380,"y":3428,"attach":[1380.0,3427.74],"regio":1,"sys":"R"},{"name":"Walwell","x":1380,"y":3409,"attach":[1380.0,3409.49],"regio":1,"sys":"R"},{"name":"Whitworth","x":1380,"y":3391,"attach":[1380.0,3391.24],"regio":1,"sys":"R"},{"name":"Beckden","x":1380,"y":3373,"attach":[1380.0,3372.99],"regio":1,"sys":"R"},{"name":"Heathwell","x":1358,"y":3472,"attach":[1357.67,3472.33],"regio":1,"sys":"R"},{"name":"Beckstow","x":1365,"y":3465,"attach":[1365.38,3464.69],"regio":1,"sys":"R"},{"name":"Thurlbrook","x":1374,"y":3458,"attach":[1373.84,3457.92],"regio":1,"sys":"R"},{"name":"Ryecombe","x":1384,"y":3453,"attach":[1383.55,3453.16],"regio":1,"sys":"R"},{"name":"Woldwood","x":1394,"y":3451,"attach":[1394.07,3450.66],"regio":1,"sys":"R"},{"name":"Hazelwood","x":1405,"y":3450,"attach":[1404.89,3450.0],"regio":1,"sys":"R"},{"name":"Heathgate","x":1416,"y":3450,"attach":[1415.74,3450.0],"regio":1,"sys":"R"},{"name":"Maldale","x":1427,"y":3450,"attach":[1426.59,3450.0],"regio":1,"sys":"R"},{"name":"Barkstow","x":1365,"y":3480,"attach":[1365.0,3480.0],"regio":1,"sys":"R"},{"name":"Willowsted","x":1380,"y":3480,"attach":[1380.0,3480.0],"regio":1,"sys":"R"},{"name":"Beckford","x":1395,"y":3480,"attach":[1395.0,3480.0],"regio":1,"sys":"R"},{"name":"Willowwood","x":1410,"y":3480,"attach":[1410.0,3480.0],"regio":1,"sys":"R"},{"name":"Fenley","x":1425,"y":3480,"attach":[1425.0,3480.0],"regio":1,"sys":"R"},{"name":"Shephurst","x":1440,"y":3480,"attach":[1440.0,3480.0],"regio":1,"sys":"R"},{"name":"Blackbridge","x":1455,"y":3480,"attach":[1455.0,3480.0],"regio":1,"sys":"R"},{"name":"Marcote","x":1470,"y":3480,"attach":[1470.0,3480.0],"regio":1,"sys":"R"},{"name":"Coldford","x":1485,"y":3480,"attach":[1485.0,3480.0],"regio":1,"sys":"R"},{"name":"Eaststead","x":1500,"y":3480,"attach":[1500.0,3480.0],"regio":1,"sys":"R"},{"name":"Fencote","x":1515,"y":3480,"attach":[1515.0,3480.0],"regio":1,"sys":"R"},{"name":"Swanden","x":1530,"y":3480,"attach":[1530.0,3480.0],"regio":1,"sys":"R"},{"name":"Walgate","x":1545,"y":3480,"attach":[1545.0,3480.0],"regio":1,"sys":"R"},{"name":"Chalsted","x":1560,"y":3480,"attach":[1560.0,3480.0],"regio":1,"sys":"R"},{"name":"Silfield","x":1575,"y":3480,"attach":[1575.0,3480.0],"regio":1,"sys":"R"},{"name":"Kirkthwaite","x":1590,"y":3480,"attach":[1590.0,3480.0],"regio":1,"sys":"R"},{"name":"Leastead","x":1350,"y":3471,"attach":[1350.0,3471.35],"regio":1,"sys":"R"},{"name":"Newby","x":1350,"y":3463,"attach":[1350.0,3462.71],"regio":1,"sys":"R"},{"name":"Clayby","x":1350,"y":3454,"attach":[1350.0,3454.06],"regio":1,"sys":"R"},{"name":"Kirkbridge","x":1350,"y":3445,"attach":[1350.0,3445.41],"regio":1,"sys":"R"},{"name":"Penthorpe","x":1350,"y":3437,"attach":[1350.0,3436.77],"regio":1,"sys":"R"},{"name":"Wooddale","x":1350,"y":3428,"attach":[1350.0,3428.12],"regio":1,"sys":"R"},{"name":"Oakstow","x":1350,"y":3419,"attach":[1350.0,3419.47],"regio":1,"sys":"R"},{"name":"Grimscombe","x":1350,"y":3411,"attach":[1350.0,3410.83],"regio":1,"sys":"R"},{"name":"Quarrmere","x":1350,"y":3402,"attach":[1350.0,3402.18],"regio":1,"sys":"R"},{"name":"Salmore","x":1350,"y":3394,"attach":[1350.0,3393.53],"regio":1,"sys":"R"},{"name":"Hartmere","x":1350,"y":3385,"attach":[1350.0,3384.89],"regio":1,"sys":"R"},{"name":"Beckwell","x":1350,"y":3376,"attach":[1350.0,3376.24],"regio":1,"sys":"R"},{"name":"Waterwell","x":1350,"y":3368,"attach":[1350.0,3367.59],"regio":1,"sys":"R"},{"name":"Shepminster","x":1350,"y":3359,"attach":[1350.0,3358.95],"regio":1,"sys":"R"},{"name":"Holmstead","x":1371,"y":3309,"attach":[1371.14,3308.86],"regio":1,"sys":"R"},{"name":"Northstow","x":1351,"y":3342,"attach":[1350.87,3341.69],"regio":1,"sys":"R"},{"name":"Lynmere","x":1364,"y":3317,"attach":[1363.71,3316.55],"regio":1,"sys":"R"},{"name":"Sandcombe","x":1357,"y":3326,"attach":[1356.96,3325.63],"regio":1,"sys":"R"},{"name":"Moorcombe","x":1440,"y":3870,"attach":[1440.0,3870.0],"regio":1,"sys":"R"},{"name":"Larkholme","x":1440,"y":4097,"attach":[1440.0,4096.67],"regio":1,"sys":"R"},{"name":"Warmore","x":1440,"y":4083,"attach":[1440.0,4083.33],"regio":1,"sys":"R"},{"name":"Rotherham","x":1440,"y":4030,"attach":[1440.0,4030.0],"sys":"MR"},{"name":"Brentwood","x":1440,"y":4045,"attach":[1440.0,4044.67],"regio":1,"sys":"R"},{"name":"Fenbury","x":1440,"y":4003,"attach":[1440.0,4003.33],"regio":1,"sys":"R"},{"name":"Todbrook","x":1440,"y":3990,"attach":[1440.0,3990.0],"regio":1,"sys":"R"},{"name":"Todsted","x":1440,"y":3977,"attach":[1440.0,3976.67],"regio":1,"sys":"R"},{"name":"Moorstow","x":1440,"y":3963,"attach":[1440.0,3963.33],"regio":1,"sys":"R"},{"name":"Cotfield","x":1440,"y":3950,"attach":[1440.0,3950.0],"regio":1,"sys":"R"},{"name":"Foxham","x":1440,"y":3937,"attach":[1440.0,3936.67],"regio":1,"sys":"R"},{"name":"Hartwell","x":1440,"y":3923,"attach":[1440.0,3923.33],"regio":1,"sys":"R"},{"name":"Moorworth","x":1451,"y":4098,"attach":[1451.23,4097.73],"regio":1,"sys":"R"},{"name":"Grimshurst","x":1455,"y":4082,"attach":[1455.0,4081.75],"regio":1,"sys":"R"},{"name":"Holmmore","x":1455,"y":4065,"attach":[1455.0,4065.07],"regio":1,"sys":"R"},{"name":"Northholme","x":1455,"y":4040,"attach":[1455.0,4040.39],"regio":1,"sys":"R"},{"name":"Wickcote","x":1455,"y":4032,"attach":[1455.0,4031.7],"regio":1,"sys":"R"},{"name":"Millworth","x":1455,"y":4007,"attach":[1455.0,4007.02],"regio":1,"sys":"R"},{"name":"Foxhurst","x":1455,"y":3998,"attach":[1455.0,3998.34],"regio":1,"sys":"R"},{"name":"Wakeley","x":1455,"y":3982,"attach":[1455.0,3981.66],"regio":1,"sys":"R"},{"name":"Saxeworth","x":1455,"y":3965,"attach":[1455.0,3964.98],"regio":1,"sys":"R"},{"name":"Crowton","x":1455,"y":3948,"attach":[1455.0,3948.3],"regio":1,"sys":"R"},{"name":"Salbridge","x":1455,"y":3932,"attach":[1455.0,3931.61],"regio":1,"sys":"R"},{"name":"Outrepont","x":1440,"y":2580,"attach":[1440.0,2580.0],"sys":"M"},{"name":"Hunstow","x":1392,"y":4200,"attach":[1391.54,4200.0],"regio":1,"sys":"R"},{"name":"Saldale","x":1403,"y":4200,"attach":[1403.08,4200.0],"regio":1,"sys":"R"},{"name":"Goldgate","x":1415,"y":4200,"attach":[1414.62,4200.0],"regio":1,"sys":"R"},{"name":"Marminster","x":1426,"y":4200,"attach":[1426.15,4200.0],"regio":1,"sys":"R"},{"name":"Ryeworth","x":1438,"y":4200,"attach":[1437.69,4200.0],"regio":1,"sys":"R"},{"name":"Olddale","x":1449,"y":4200,"attach":[1449.23,4200.0],"regio":1,"sys":"R"},{"name":"Foxby","x":1461,"y":4200,"attach":[1460.77,4200.0],"regio":1,"sys":"R"},{"name":"Yarstead","x":1472,"y":4200,"attach":[1472.31,4200.0],"regio":1,"sys":"R"},{"name":"Wykegate","x":1484,"y":4200,"attach":[1483.85,4200.0],"regio":1,"sys":"R"},{"name":"Quarrmore","x":1495,"y":4200,"attach":[1495.38,4200.0],"regio":1,"sys":"R"},{"name":"Upper Thurlbury","x":1507,"y":4200,"attach":[1506.92,4200.0],"regio":1,"sys":"R"},{"name":"Millham","x":1518,"y":4200,"attach":[1518.46,4200.0],"regio":1,"sys":"R"},{"name":"Winholme","x":1530,"y":4200,"attach":[1530.0,4200.0],"regio":1,"sys":"R"},{"name":"Hazelton","x":1542,"y":4200,"attach":[1541.54,4200.0],"regio":1,"sys":"R"},{"name":"Eastham","x":1553,"y":4200,"attach":[1553.08,4200.0],"regio":1,"sys":"R"},{"name":"Oldmere","x":1565,"y":4200,"attach":[1564.62,4200.0],"regio":1,"sys":"R"},{"name":"Kirkminster","x":1576,"y":4200,"attach":[1576.15,4200.0],"regio":1,"sys":"R"},{"name":"Wickwick","x":1588,"y":4200,"attach":[1587.69,4200.0],"regio":1,"sys":"R"},{"name":"Fernbridge","x":1599,"y":4200,"attach":[1599.23,4200.0],"regio":1,"sys":"R"},{"name":"Willowley","x":1611,"y":4200,"attach":[1610.77,4200.0],"regio":1,"sys":"R"},{"name":"Wykeby","x":1622,"y":4200,"attach":[1622.31,4200.0],"regio":1,"sys":"R"},{"name":"Hazelgate","x":1634,"y":4200,"attach":[1633.85,4200.0],"regio":1,"sys":"R"},{"name":"Ormford","x":1393,"y":4211,"attach":[1392.76,4211.49],"regio":1,"sys":"R"},{"name":"Winbridge","x":1409,"y":4215,"attach":[1409.36,4215.0],"regio":1,"sys":"R"},{"name":"Marby","x":1427,"y":4215,"attach":[1426.59,4215.0],"regio":1,"sys":"R"},{"name":"Penton","x":1444,"y":4215,"attach":[1443.83,4215.0],"regio":1,"sys":"R"},{"name":"Sutthwaite","x":1461,"y":4215,"attach":[1461.06,4215.0],"regio":1,"sys":"R"},{"name":"Malley","x":1478,"y":4215,"attach":[1478.3,4215.0],"regio":1,"sys":"R"},{"name":"Burnham","x":1496,"y":4215,"attach":[1495.53,4215.0],"regio":1,"sys":"R"},{"name":"Fenfield","x":1513,"y":4215,"attach":[1512.77,4215.0],"regio":1,"sys":"R"},{"name":"Waterthwaite","x":1530,"y":4215,"attach":[1530.0,4215.0],"regio":1,"sys":"R"},{"name":"Northwood","x":1547,"y":4215,"attach":[1547.23,4215.0],"regio":1,"sys":"R"},{"name":"Moorhurst","x":1564,"y":4215,"attach":[1564.47,4215.0],"regio":1,"sys":"R"},{"name":"Oldden","x":1582,"y":4215,"attach":[1581.7,4215.0],"regio":1,"sys":"R"},{"name":"Waldale","x":1599,"y":4215,"attach":[1598.94,4215.0],"regio":1,"sys":"R"},{"name":"Saxewood","x":1616,"y":4215,"attach":[1616.17,4215.0],"regio":1,"sys":"R"},{"name":"Königstadt","x":750,"y":2343,"attach":[750.0,2343.18],"sys":"M"},{"name":"Findel","x":750,"y":2447,"attach":[750.0,2446.59],"sys":"M"},{"name":"Hiltsbury","x":780,"y":2170,"attach":[780.0,2169.89],"sys":"M"},{"name":"Hawdale","x":1440,"y":3738,"attach":[1440.0,3737.65],"regio":1,"sys":"R"},{"name":"Woldden","x":1440,"y":3725,"attach":[1440.0,3725.29],"regio":1,"sys":"R"},{"name":"Foxminster","x":1440,"y":3713,"attach":[1440.0,3712.94],"regio":1,"sys":"R"},{"name":"Ulverwell","x":1440,"y":3701,"attach":[1440.0,3700.59],"regio":1,"sys":"R"},{"name":"Brookbrook","x":1440,"y":3688,"attach":[1440.0,3688.24],"regio":1,"sys":"R"},{"name":"Little Crowcote","x":1440,"y":3676,"attach":[1440.0,3675.88],"regio":1,"sys":"R"},{"name":"Stanton","x":1440,"y":3664,"attach":[1440.0,3663.53],"regio":1,"sys":"R"},{"name":"Woldham","x":1440,"y":3651,"attach":[1440.0,3651.18],"regio":1,"sys":"R"},{"name":"Stowford","x":1440,"y":3639,"attach":[1440.0,3638.82],"regio":1,"sys":"R"},{"name":"Bradminster","x":1440,"y":3626,"attach":[1440.0,3626.47],"regio":1,"sys":"R"},{"name":"Stowminster","x":1440,"y":3614,"attach":[1440.0,3614.12],"regio":1,"sys":"R"},{"name":"Wakebury Junction","x":1440,"y":3602,"attach":[1440.0,3601.76],"regio":1,"sys":"R"},{"name":"Saxebridge","x":1440,"y":3589,"attach":[1440.0,3589.41],"regio":1,"sys":"R"},{"name":"Shepford","x":1440,"y":3767,"attach":[1440.0,3767.14],"regio":1,"sys":"R"},{"name":"Beckfield","x":1440,"y":3784,"attach":[1440.0,3784.29],"regio":1,"sys":"R"},{"name":"Heathfield","x":1440,"y":3801,"attach":[1440.0,3801.43],"regio":1,"sys":"R"},{"name":"Johnston","x":858,"y":2715,"attach":[858.3,2715.0],"sys":"M"},{"name":"Kelvinport","x":912,"y":2715,"attach":[911.7,2715.0],"sys":"M"},{"name":"Brackenholt","x":857,"y":2730,"attach":[856.61,2729.58],"regio":1,"sys":"M"},{"name":"Linton","x":913,"y":2730,"attach":[913.39,2729.58],"regio":1,"sys":"M"},{"name":"Ribeauvillé","x":1230,"y":2610,"attach":[1230.0,2610.0],"sys":"MR"},{"name":"Netherley","x":1134,"y":2670,"attach":[1133.76,2670.0],"regio":1,"sys":"R"},{"name":"Warcote","x":1157,"y":2669,"attach":[1157.48,2669.13],"regio":1,"sys":"R"},{"name":"Yarwood","x":1129,"y":2690,"attach":[1129.18,2690.02],"regio":1,"sys":"R"},{"name":"Hazelminster","x":1140,"y":2731,"attach":[1140.0,2731.27],"regio":1,"sys":"R"},{"name":"Nethergate","x":1140,"y":2767,"attach":[1140.0,2767.01],"regio":1,"sys":"R"},{"name":"Westerhafen","x":660,"y":2550,"attach":[660.0,2550.0],"regio":1,"sys":"M"},{"name":"Beckminster","x":1620,"y":3135,"attach":[1620.0,3135.0],"regio":1,"sys":"R"},{"name":"Northhurst","x":1620,"y":3120,"attach":[1620.0,3120.0],"regio":1,"sys":"R"},{"name":"Lynbridge","x":1620,"y":3105,"attach":[1620.0,3105.0],"regio":1,"sys":"R"},{"name":"Penhurst","x":1620,"y":3090,"attach":[1620.0,3090.0],"regio":1,"sys":"R"},{"name":"Elmworth","x":1620,"y":3075,"attach":[1620.0,3075.0],"regio":1,"sys":"R"},{"name":"Saxefield","x":1620,"y":3060,"attach":[1620.0,3060.0],"regio":1,"sys":"R"},{"name":"Norththwaite","x":1620,"y":3045,"attach":[1620.0,3045.0],"regio":1,"sys":"R"},{"name":"Kirkmore","x":1620,"y":3030,"attach":[1620.0,3030.0],"regio":1,"sys":"R"},{"name":"Salwood","x":1620,"y":3015,"attach":[1620.0,3015.0],"regio":1,"sys":"R"},{"name":"Highthorpe","x":1620,"y":2952,"attach":[1620.0,2952.0],"regio":1,"sys":"R"},{"name":"Wicksted","x":1620,"y":2937,"attach":[1620.0,2937.0],"regio":1,"sys":"R"},{"name":"Sandhurst","x":1620,"y":2962,"attach":[1620.0,2962.0],"regio":1,"sys":"R"},{"name":"Waterworth","x":1634,"y":3164,"attach":[1634.17,3164.17],"regio":1,"sys":"R"},{"name":"Melford","x":1630,"y":3140,"attach":[1629.61,3139.97],"regio":1,"sys":"R"},{"name":"Silbridge","x":1635,"y":3127,"attach":[1634.73,3127.3],"regio":1,"sys":"R"},{"name":"Wakemere","x":1635,"y":3113,"attach":[1635.0,3113.41],"regio":1,"sys":"R"},{"name":"Chalcombe","x":1635,"y":3100,"attach":[1635.0,3099.51],"regio":1,"sys":"R"},{"name":"Langden","x":1635,"y":3086,"attach":[1635.0,3085.61],"regio":1,"sys":"R"},{"name":"Ormby","x":1635,"y":3072,"attach":[1635.0,3071.7],"regio":1,"sys":"R"},{"name":"Ashthwaite","x":1635,"y":3058,"attach":[1635.0,3057.8],"regio":1,"sys":"R"},{"name":"Sutdale","x":1635,"y":3044,"attach":[1635.0,3043.9],"regio":1,"sys":"R"},{"name":"Barkbridge","x":1635,"y":3030,"attach":[1635.0,3030.0],"regio":1,"sys":"R"},{"name":"Hartminster","x":1635,"y":3016,"attach":[1635.0,3016.1],"regio":1,"sys":"R"},{"name":"Willowhurst","x":1635,"y":3002,"attach":[1635.0,3002.2],"regio":1,"sys":"R"},{"name":"Stockminster","x":1635,"y":2988,"attach":[1635.0,2988.3],"regio":1,"sys":"R"},{"name":"Rookdale","x":1635,"y":2974,"attach":[1635.0,2974.39],"regio":1,"sys":"R"},{"name":"Crowsted","x":1635,"y":2960,"attach":[1635.0,2960.49],"regio":1,"sys":"R"},{"name":"Longstow","x":1560,"y":3120,"attach":[1560.0,3120.0],"regio":1,"sys":"R"},{"name":"Fernden","x":1440,"y":3556,"attach":[1440.0,3555.71],"regio":1,"sys":"R"},{"name":"Burncote","x":1440,"y":3571,"attach":[1440.0,3571.43],"regio":1,"sys":"R"},{"name":"Holmton","x":1440,"y":3587,"attach":[1440.0,3587.14],"regio":1,"sys":"R"},{"name":"Hawbury","x":1440,"y":3603,"attach":[1440.0,3602.86],"regio":1,"sys":"R"},{"name":"Sandgate","x":1440,"y":3619,"attach":[1440.0,3618.57],"regio":1,"sys":"R"},{"name":"Hartfield","x":1440,"y":3634,"attach":[1440.0,3634.29],"regio":1,"sys":"R"},{"name":"Crowthwaite","x":1440,"y":3650,"attach":[1440.0,3650.0],"regio":1,"sys":"R"},{"name":"Brentdale","x":1440,"y":3666,"attach":[1440.0,3665.71],"regio":1,"sys":"R"},{"name":"Shepthorpe","x":1440,"y":3681,"attach":[1440.0,3681.43],"regio":1,"sys":"R"},{"name":"Hazelwick","x":1440,"y":3697,"attach":[1440.0,3697.14],"regio":1,"sys":"R"},{"name":"Coldsted","x":1440,"y":3713,"attach":[1440.0,3712.86],"regio":1,"sys":"R"},{"name":"Toddale","x":1440,"y":3729,"attach":[1440.0,3728.57],"regio":1,"sys":"R"},{"name":"Newstow","x":1440,"y":3744,"attach":[1440.0,3744.29],"regio":1,"sys":"R"},{"name":"Heathby","x":1440,"y":3760,"attach":[1440.0,3760.0],"regio":1,"sys":"R"},{"name":"Longstead","x":1440,"y":3776,"attach":[1440.0,3775.71],"regio":1,"sys":"R"},{"name":"Stockstead","x":1440,"y":3819,"attach":[1440.0,3819.43],"regio":1,"sys":"R"},{"name":"Southminster","x":1440,"y":3793,"attach":[1440.0,3793.14],"regio":1,"sys":"R"},{"name":"Whitwick","x":1187,"y":3090,"attach":[1187.48,3090.0],"regio":1,"sys":"R"},{"name":"Brookford","x":1205,"y":3090,"attach":[1204.96,3090.0],"regio":1,"sys":"R"},{"name":"Salden","x":1214,"y":3091,"attach":[1214.41,3090.59],"regio":1,"sys":"R"},{"name":"Todley","x":1238,"y":3099,"attach":[1238.03,3099.29],"regio":1,"sys":"R"},{"name":"Rookbridge","x":1251,"y":3111,"attach":[1250.99,3110.99],"regio":1,"sys":"R"},{"name":"Stockcote","x":1263,"y":3123,"attach":[1263.35,3123.35],"regio":1,"sys":"R"},{"name":"Rookcombe","x":1276,"y":3136,"attach":[1275.71,3135.71],"regio":1,"sys":"R"},{"name":"Whitmore","x":1288,"y":3148,"attach":[1288.07,3148.07],"regio":1,"sys":"R"},{"name":"Elmden","x":1300,"y":3160,"attach":[1300.43,3160.43],"regio":1,"sys":"R"},{"name":"Birchworth","x":1313,"y":3173,"attach":[1312.79,3172.79],"regio":1,"sys":"R"},{"name":"Nethercote","x":1325,"y":3185,"attach":[1325.15,3185.15],"regio":1,"sys":"R"},{"name":"Salmere","x":1338,"y":3198,"attach":[1337.51,3197.51],"regio":1,"sys":"R"},{"name":"Crowhurst","x":1350,"y":3210,"attach":[1349.87,3209.87],"regio":1,"sys":"R"},{"name":"Eastton","x":1362,"y":3222,"attach":[1362.23,3222.23],"regio":1,"sys":"R"},{"name":"Marham","x":1375,"y":3235,"attach":[1374.59,3234.59],"regio":1,"sys":"R"},{"name":"Yarminster","x":1387,"y":3247,"attach":[1386.95,3246.95],"regio":1,"sys":"R"},{"name":"Walmore","x":1399,"y":3259,"attach":[1399.31,3259.31],"regio":1,"sys":"R"},{"name":"Stanham","x":1412,"y":3272,"attach":[1411.67,3271.67],"regio":1,"sys":"R"},{"name":"Larkmore","x":1424,"y":3284,"attach":[1424.04,3284.04],"regio":1,"sys":"R"},{"name":"Cotsted","x":1436,"y":3296,"attach":[1436.4,3296.4],"regio":1,"sys":"R"},{"name":"Winbrook","x":1449,"y":3309,"attach":[1448.76,3308.76],"regio":1,"sys":"R"},{"name":"Hazelley","x":1461,"y":3321,"attach":[1461.12,3321.12],"regio":1,"sys":"R"},{"name":"Penfield","x":1473,"y":3333,"attach":[1473.48,3333.48],"regio":1,"sys":"R"},{"name":"Salminster","x":1486,"y":3346,"attach":[1485.84,3345.84],"regio":1,"sys":"R"},{"name":"Marford","x":1498,"y":3358,"attach":[1498.2,3358.2],"regio":1,"sys":"R"},{"name":"Highbridge","x":1511,"y":3371,"attach":[1510.56,3370.56],"regio":1,"sys":"R"},{"name":"Redwick","x":1178,"y":3098,"attach":[1177.5,3097.5],"regio":1,"sys":"R"},{"name":"Bradstow","x":1185,"y":3105,"attach":[1185.0,3105.0],"regio":1,"sys":"R"},{"name":"Holmwood","x":1192,"y":3112,"attach":[1192.5,3112.5],"regio":1,"sys":"R"},{"name":"Newwood","x":1200,"y":3120,"attach":[1200.0,3120.0],"regio":1,"sys":"R"},{"name":"Swanhurst","x":1208,"y":3128,"attach":[1207.5,3127.5],"regio":1,"sys":"R"},{"name":"Fairwood","x":1215,"y":3135,"attach":[1215.0,3135.0],"regio":1,"sys":"R"},{"name":"Ulversted","x":1222,"y":3142,"attach":[1222.5,3142.5],"regio":1,"sys":"R"},{"name":"Sutcote","x":1230,"y":3150,"attach":[1230.0,3150.0],"regio":1,"sys":"R"},{"name":"Melbury","x":1238,"y":3158,"attach":[1237.5,3157.5],"regio":1,"sys":"R"},{"name":"Marton","x":1245,"y":3165,"attach":[1245.0,3165.0],"regio":1,"sys":"R"},{"name":"Rookton","x":1252,"y":3172,"attach":[1252.5,3172.5],"regio":1,"sys":"R"},{"name":"Thornford","x":1260,"y":3180,"attach":[1260.0,3180.0],"regio":1,"sys":"R"},{"name":"Cherrywick","x":1268,"y":3188,"attach":[1267.5,3187.5],"regio":1,"sys":"R"},{"name":"Fairthorpe","x":1275,"y":3195,"attach":[1275.0,3195.0],"regio":1,"sys":"R"},{"name":"Ulverstead","x":1282,"y":3202,"attach":[1282.5,3202.5],"regio":1,"sys":"R"},{"name":"Quarrwell","x":1290,"y":3210,"attach":[1290.0,3210.0],"regio":1,"sys":"R"},{"name":"Silsted","x":1298,"y":3218,"attach":[1297.5,3217.5],"regio":1,"sys":"R"},{"name":"Westhorpe","x":1305,"y":3225,"attach":[1305.0,3225.0],"regio":1,"sys":"R"},{"name":"Millford","x":1312,"y":3232,"attach":[1312.5,3232.5],"regio":1,"sys":"R"},{"name":"Redfield","x":1320,"y":3240,"attach":[1320.0,3240.0],"regio":1,"sys":"R"},{"name":"Malholme","x":1328,"y":3248,"attach":[1327.5,3247.5],"regio":1,"sys":"R"},{"name":"Dunbury","x":1335,"y":3255,"attach":[1335.0,3255.0],"regio":1,"sys":"R"},{"name":"Brentford","x":1342,"y":3262,"attach":[1342.5,3262.5],"regio":1,"sys":"R"},{"name":"Wakeford","x":1350,"y":3270,"attach":[1350.0,3270.0],"regio":1,"sys":"R"},{"name":"Melworth","x":1680,"y":3889,"attach":[1680.0,3888.75],"regio":1,"sys":"R"},{"name":"Salstow","x":1680,"y":3878,"attach":[1680.0,3877.5],"regio":1,"sys":"R"},{"name":"Elmthwaite","x":1680,"y":3866,"attach":[1680.0,3866.25],"regio":1,"sys":"R"},{"name":"Yarfield","x":1680,"y":3855,"attach":[1680.0,3855.0],"regio":1,"sys":"R"},{"name":"Larkby","x":1690,"y":3890,"attach":[1689.87,3889.65],"regio":1,"sys":"R"},{"name":"Burngate","x":1695,"y":3876,"attach":[1694.81,3876.47],"regio":1,"sys":"R"},{"name":"Wykecote","x":1695,"y":3862,"attach":[1695.0,3862.16],"regio":1,"sys":"R"},{"name":"Port-du-Roi","x":1590,"y":2910,"attach":[1590,2910],"sys":"MR"},{"name":"Elmgate","x":1578,"y":2898,"attach":[1578.19,2898.19],"regio":1,"sys":"R"},{"name":"Ulverbridge","x":1568,"y":2885,"attach":[1567.52,2885.41],"regio":1,"sys":"R"},{"name":"Fairmore","x":1590,"y":3030,"attach":[1590.0,3030.0],"regio":1,"sys":"R"},{"name":"Crowminster","x":1590,"y":2930,"attach":[1590.0,2930.0],"regio":1,"sys":"R"},{"name":"Shepwood","x":1590,"y":2950,"attach":[1590.0,2950.0],"regio":1,"sys":"R"},{"name":"Bradbridge","x":1564,"y":2910,"attach":[1563.95,2910.0],"regio":1,"sys":"R"},{"name":"Sandthwaite","x":1560,"y":2730,"attach":[1560.0,2730.0],"regio":1,"sys":"R"},{"name":"Coldbury Junction","x":1590,"y":2893,"attach":[1590.0,2892.71],"regio":1,"sys":"R"},{"name":"Brentgate","x":1590,"y":2875,"attach":[1590.0,2875.41],"regio":1,"sys":"R"},{"name":"Grimsby","x":1590,"y":2858,"attach":[1590.0,2858.12],"regio":1,"sys":"R"},{"name":"Dunley","x":1590,"y":2841,"attach":[1590.0,2840.83],"regio":1,"sys":"R"},{"name":"Millbrook","x":1590,"y":2824,"attach":[1590.0,2823.53],"regio":1,"sys":"R"},{"name":"Wessted","x":1590,"y":2806,"attach":[1590.0,2806.24],"regio":1,"sys":"R"},{"name":"Hartden","x":1590,"y":2789,"attach":[1590.0,2788.95],"regio":1,"sys":"R"},{"name":"Rossdale South","x":1890,"y":1860,"attach":[1890.0,1860.0],"sys":"M"},{"name":"Chankow","x":1320,"y":1530,"attach":[1320,1530],"sys":"M"},{"name":"Nouvelle-Touraine","x":1875,"y":1920,"attach":[1875.0,1920.0],"sys":"M"},{"name":"Canterbury","x":1950,"y":1965,"attach":[1950.0,1965.0],"sys":"M"},{"name":"Sandwick","x":1603,"y":3017,"attach":[1603.15,3016.85],"regio":1,"sys":"R"},{"name":"Ormgate","x":1617,"y":2997,"attach":[1616.79,2996.64],"regio":1,"sys":"R"},{"name":"Wolddale","x":1609,"y":3010,"attach":[1609.22,3009.93],"regio":1,"sys":"R"},{"name":"Highstow","x":1582,"y":3022,"attach":[1581.76,3021.76],"regio":1,"sys":"R"},{"name":"Sandbury","x":1574,"y":3014,"attach":[1573.52,3013.52],"regio":1,"sys":"R"},{"name":"Hartthwaite","x":1565,"y":3005,"attach":[1565.27,3005.27],"regio":1,"sys":"R"},{"name":"Elmton","x":1557,"y":2997,"attach":[1557.03,2997.03],"regio":1,"sys":"R"},{"name":"Rookford","x":1549,"y":2989,"attach":[1548.79,2988.79],"regio":1,"sys":"R"},{"name":"Larksted","x":1541,"y":2981,"attach":[1540.55,2980.55],"regio":1,"sys":"R"},{"name":"Langthwaite","x":1532,"y":2972,"attach":[1532.31,2972.31],"regio":1,"sys":"R"},{"name":"Rookmore","x":1524,"y":2964,"attach":[1524.06,2964.06],"regio":1,"sys":"R"},{"name":"Highbury","x":1516,"y":2956,"attach":[1515.82,2955.82],"regio":1,"sys":"R"},{"name":"Thornwick","x":1508,"y":2948,"attach":[1507.58,2947.58],"regio":1,"sys":"R"},{"name":"Fengate","x":1499,"y":2939,"attach":[1499.34,2939.34],"regio":1,"sys":"R"},{"name":"Stowby","x":1491,"y":2931,"attach":[1491.1,2931.1],"regio":1,"sys":"R"},{"name":"Eastmere","x":1483,"y":2923,"attach":[1482.85,2922.85],"regio":1,"sys":"R"},{"name":"Yungang","x":1950,"y":1320,"attach":[1950.0,1320.0],"sys":"M"},{"name":"Chiangkou","x":1790,"y":1320,"attach":[1790.0,1320.0],"sys":"M"},{"name":"Tunghai","x":1870,"y":1320,"attach":[1870.0,1320.0],"sys":"M"},{"name":"Cranford Central","x":1830,"y":2100,"attach":[1830.0,2100.0],"sys":"M"},{"name":"Cranford West","x":1765,"y":2165,"attach":[1764.59,2165.41],"sys":"M"},{"name":"Fairden","x":1312,"y":1980,"attach":[1312.48,1980.0],"sys":"M"},{"name":"Sancerre","x":1185,"y":1980,"attach":[1184.95,1980.0],"sys":"M"},{"name":"Hollingford","x":1800,"y":2015,"attach":[1800.0,2015.11],"sys":"M"},{"name":"Wesstead","x":1560,"y":2715,"attach":[1559.98,2714.76],"regio":1,"sys":"R"},{"name":"Penwell Junction","x":1557,"y":2700,"attach":[1556.75,2699.99],"regio":1,"sys":"R"},{"name":"Claystow","x":1548,"y":2688,"attach":[1547.78,2687.78],"regio":1,"sys":"R"},{"name":"Kirkton Junction","x":1537,"y":2677,"attach":[1537.0,2677.0],"regio":1,"sys":"R"},{"name":"Saxeton","x":1526,"y":2666,"attach":[1526.22,2666.22],"regio":1,"sys":"R"},{"name":"Hervilly","x":1483,"y":2623,"attach":[1483.11,2623.11],"sys":"MR"},{"name":"Crowholme","x":1650,"y":3253,"attach":[1650.0,3253.27],"regio":1,"sys":"R"},{"name":"Cosgrove","x":1650,"y":3306,"attach":[1650.0,3306.37],"sys":"MR"},{"name":"Fernminster","x":1651,"y":3320,"attach":[1651.26,3319.56],"regio":1,"sys":"R"},{"name":"Holmwick","x":1656,"y":3332,"attach":[1655.82,3331.96],"regio":1,"sys":"R"},{"name":"Fernby","x":1663,"y":3343,"attach":[1663.3,3342.85],"regio":1,"sys":"R"},{"name":"Beckby","x":1672,"y":3352,"attach":[1672.45,3352.45],"regio":1,"sys":"R"},{"name":"Holmley","x":1140,"y":2895,"attach":[1140.0,2895.0],"regio":1,"sys":"R"},{"name":"Brambury","x":1140,"y":2880,"attach":[1140.0,2880.0],"regio":1,"sys":"R"},{"name":"Brentstow","x":1140,"y":2865,"attach":[1140.0,2865.0],"regio":1,"sys":"R"},{"name":"Malsted","x":1140,"y":2850,"attach":[1140.0,2850.0],"regio":1,"sys":"R"},{"name":"Woodby","x":1140,"y":2835,"attach":[1140.0,2835.0],"regio":1,"sys":"R"},{"name":"Rookwick","x":1140,"y":2820,"attach":[1140.0,2820.0],"regio":1,"sys":"R"},{"name":"Whitbrook","x":1140,"y":2805,"attach":[1140.0,2805.0],"regio":1,"sys":"R"},{"name":"Stanfield","x":1140,"y":2790,"attach":[1140.0,2790.0],"regio":1,"sys":"R"},{"name":"Moorton","x":1140,"y":2775,"attach":[1140.0,2775.0],"regio":1,"sys":"R"},{"name":"Ryebrook","x":1140,"y":2760,"attach":[1140.0,2760.0],"regio":1,"sys":"R"},{"name":"Standen","x":1140,"y":2745,"attach":[1140.0,2745.0],"regio":1,"sys":"R"},{"name":"Brentbrook","x":1140,"y":2730,"attach":[1140.0,2730.0],"regio":1,"sys":"R"},{"name":"Silhurst","x":1140,"y":2715,"attach":[1140.0,2715.0],"regio":1,"sys":"R"},{"name":"Coldton","x":1140,"y":2636,"attach":[1140.0,2636.0],"regio":1,"sys":"R"},{"name":"Fairley","x":1140,"y":2685,"attach":[1140.0,2685.0],"regio":1,"sys":"R"},{"name":"Kirkmere","x":1140,"y":2662,"attach":[1140.0,2662.0],"regio":1,"sys":"R"},{"name":"Tongshan","x":1465,"y":1590,"attach":[1464.89,1590.0],"sys":"M"},{"name":"Yuchow Airport","x":960,"y":1620,"attach":[960.0,1620.0],"sys":"M"},{"name":"Hawbridge","x":1699,"y":3390,"attach":[1699.0,3390.0],"regio":1,"sys":"R"},{"name":"Grimston","x":1690,"y":3390,"attach":[1690.0,3390.0],"regio":1,"sys":"R"},{"name":"Walsted","x":1650,"y":3461,"attach":[1650.35,3461.13],"regio":1,"sys":"R"},{"name":"Southford","x":1657,"y":3444,"attach":[1656.98,3443.76],"regio":1,"sys":"R"},{"name":"Moorminster","x":1650,"y":3467,"attach":[1650.0,3467.32],"regio":1,"sys":"R"},{"name":"Cotminster","x":1650,"y":3455,"attach":[1650.0,3454.64],"regio":1,"sys":"R"},{"name":"Hawworth","x":1650,"y":3442,"attach":[1650.0,3441.95],"regio":1,"sys":"R"},{"name":"Brenthurst","x":1650,"y":3429,"attach":[1650.0,3429.27],"regio":1,"sys":"R"},{"name":"Woldmore","x":1650,"y":3417,"attach":[1650.0,3416.59],"regio":1,"sys":"R"},{"name":"Claybury","x":1650,"y":3404,"attach":[1650.0,3403.91],"regio":1,"sys":"R"},{"name":"Saxeholme","x":1650,"y":3391,"attach":[1650.0,3391.23],"regio":1,"sys":"R"},{"name":"Moorbridge","x":1650,"y":3379,"attach":[1650.0,3378.55],"regio":1,"sys":"R"},{"name":"Willowcote","x":1650,"y":3366,"attach":[1650.0,3365.86],"regio":1,"sys":"R"},{"name":"Blackgate","x":1650,"y":3353,"attach":[1650.0,3353.18],"regio":1,"sys":"R"},{"name":"Stowton","x":1649,"y":3341,"attach":[1648.93,3340.56],"regio":1,"sys":"R"},{"name":"Stockwick","x":1680,"y":4279,"attach":[1680.0,4278.75],"regio":1,"sys":"R"},{"name":"Saxemore","x":1680,"y":4268,"attach":[1680.0,4267.5],"regio":1,"sys":"R"},{"name":"Wickholme","x":1680,"y":4256,"attach":[1680.0,4256.25],"regio":1,"sys":"R"},{"name":"Woodthorpe","x":1680,"y":4245,"attach":[1680.0,4245.0],"regio":1,"sys":"R"},{"name":"Yarbridge","x":1153,"y":2610,"attach":[1152.86,2610.0],"regio":1,"sys":"R"},{"name":"Woldstow","x":1166,"y":2610,"attach":[1165.71,2610.0],"regio":1,"sys":"R"},{"name":"Quarrfield","x":1179,"y":2610,"attach":[1178.57,2610.0],"regio":1,"sys":"R"},{"name":"Chapelbridge","x":982,"y":2040,"attach":[982.48,2040.0],"sys":"M"},{"name":"Rushmere","x":885,"y":2041,"attach":[884.98,2040.64],"sys":"M"},{"name":"Burnden","x":1470,"y":3464,"attach":[1470.0,3464.34],"regio":1,"sys":"R"},{"name":"Lynwood Junction","x":1470,"y":3479,"attach":[1470.0,3478.68],"regio":1,"sys":"R"},{"name":"Leaden Junction","x":1470,"y":3493,"attach":[1470.0,3493.02],"regio":1,"sys":"R"},{"name":"Thurlstow","x":1470,"y":3507,"attach":[1470.0,3507.36],"regio":1,"sys":"R"},{"name":"Malby","x":1470,"y":3522,"attach":[1470.0,3521.7],"regio":1,"sys":"R"},{"name":"Whitcombe","x":1470,"y":3536,"attach":[1470.0,3536.05],"regio":1,"sys":"R"},{"name":"Crowwood","x":1470,"y":3550,"attach":[1470.0,3550.39],"regio":1,"sys":"R"},{"name":"Willowbrook","x":1470,"y":3565,"attach":[1470.0,3564.73],"regio":1,"sys":"R"},{"name":"Foxstow","x":1470,"y":3579,"attach":[1470.0,3579.07],"regio":1,"sys":"R"},{"name":"Bradwood","x":1470,"y":3593,"attach":[1470.0,3593.41],"regio":1,"sys":"R"},{"name":"Saxeby","x":1470,"y":3608,"attach":[1470.0,3607.75],"regio":1,"sys":"R"},{"name":"Birchstow","x":1470,"y":3622,"attach":[1470.0,3622.09],"regio":1,"sys":"R"},{"name":"Wickthorpe","x":1470,"y":3636,"attach":[1470.0,3636.43],"regio":1,"sys":"R"},{"name":"Hawstow","x":1470,"y":3651,"attach":[1470.0,3650.77],"regio":1,"sys":"R"},{"name":"Yarwell","x":1470,"y":3665,"attach":[1470.0,3665.11],"regio":1,"sys":"R"},{"name":"Wickwell","x":1470,"y":3679,"attach":[1470.0,3679.45],"regio":1,"sys":"R"},{"name":"Rookbury","x":1470,"y":3694,"attach":[1470.0,3693.79],"regio":1,"sys":"R"},{"name":"Fenwell","x":1470,"y":3708,"attach":[1470.0,3708.14],"regio":1,"sys":"R"},{"name":"Walham","x":1470,"y":3722,"attach":[1470.0,3722.48],"regio":1,"sys":"R"},{"name":"Sandley","x":1470,"y":3737,"attach":[1470.0,3736.82],"regio":1,"sys":"R"},{"name":"Holmfield","x":1470,"y":3751,"attach":[1470.0,3751.16],"regio":1,"sys":"R"},{"name":"Newmere","x":1470,"y":3765,"attach":[1470.0,3765.5],"regio":1,"sys":"R"},{"name":"Brentworth","x":1470,"y":3780,"attach":[1470.0,3779.84],"regio":1,"sys":"R"},{"name":"Wargate","x":1470,"y":3794,"attach":[1470.0,3794.18],"regio":1,"sys":"R"},{"name":"Brentstead","x":1470,"y":3809,"attach":[1470.0,3808.52],"regio":1,"sys":"R"},{"name":"Dunby","x":1470,"y":3823,"attach":[1469.63,3822.85],"regio":1,"sys":"R"},{"name":"Goldbridge","x":1580,"y":3400,"attach":[1580.16,3399.84],"regio":1,"sys":"R"}];
const GRAPH={"pts":[[1440,3480],[1450.0,3470.0],[1460.0,3460.0],[1470.0,3450.0],[1440.0,3495.0],[1440.0,3510.0],[1440.0,3525.0],[1440.0,3540.0],[1432.5,3487.5],[1429.22,3491.44],[1426.88,3495.78],[1425.47,3500.5],[1425.0,3505.61],[1425.0,3514.39],[1425.47,3519.5],[1426.88,3524.22],[1429.22,3528.56],[1432.5,3532.5],[1320,3210],[1305.0,3210.0],[1297.77,3209.34],[1291.1,3207.35],[1284.97,3204.03],[1279.39,3199.39],[1269.45,3189.45],[1259.5,3179.5],[1249.56,3169.56],[1239.61,3159.61],[1229.67,3149.67],[1219.72,3139.72],[1209.78,3129.78],[1199.83,3119.83],[1189.89,3109.89],[1179.94,3099.94],[1170.0,3090.0],[1335.0,3225.0],[1341.56,3232.89],[1346.25,3241.55],[1349.06,3250.99],[1350.0,3261.21],[1350.0,3275.33],[1350.0,3289.45],[1350.0,3303.56],[1350.0,3317.68],[1350.0,3331.79],[1350.0,3345.91],[1350.0,3360.03],[1350.0,3374.14],[1350.0,3388.26],[1350.0,3402.37],[1350.0,3416.49],[1350.0,3430.61],[1350.0,3444.72],[1350.0,3458.84],[1350.0,3472.95],[1350.0,3487.07],[1350.0,3501.19],[1350.0,3515.3],[1350.0,3529.42],[1350.0,3543.54],[1350.0,3557.65],[1350.0,3571.77],[1350.0,3585.88],[1350.0,3600.0],[1320.0,3225.0],[1320.66,3232.23],[1322.65,3238.9],[1325.97,3245.03],[1330.61,3250.61],[1342.95,3262.95],[1355.3,3275.3],[1367.65,3287.65],[1380.0,3300.0],[1680,3540],[1680.0,3525.0],[1680.0,3510.0],[1680.0,3495.0],[1680.0,3480.0],[1680.0,3465.0],[1680.0,3450.0],[1680.0,3555.0],[1680.0,3570.0],[1680.0,3585.0],[1680.0,3600.0],[1680.0,3615.0],[1680.0,3630.0],[1680.0,3645.0],[1680.0,3660.0],[1680.0,3675.0],[1680.0,3690.0],[1680.0,3705.0],[1680.0,3720.0],[1680.0,3435.0],[1680.0,3420.0],[1680.0,3405.0],[1680.0,3390.0],[1695.0,3525.0],[1701.56,3517.11],[1706.25,3508.45],[1709.06,3499.01],[1710.0,3488.79],[1710.0,3471.59],[1710.0,3454.39],[1710.0,3437.2],[1710.0,3420.0],[1800,3150],[1800.0,3131.0],[1800.0,3112.0],[1799.03,3101.4],[1796.11,3091.61],[1791.25,3082.62],[1784.44,3074.44],[1774.17,3064.17],[1763.89,3053.89],[1753.61,3043.61],[1743.33,3033.33],[1733.06,3023.06],[1722.78,3012.78],[1712.5,3002.5],[1702.22,2992.22],[1691.94,2981.94],[1681.67,2971.67],[1671.39,2961.39],[1661.11,2951.11],[1650.83,2940.83],[1640.56,2930.56],[1630.28,2920.28],[1620.0,2910.0],[1789.37,3160.63],[1778.73,3171.27],[1768.1,3181.9],[1757.46,3192.54],[1746.83,3203.17],[1736.19,3213.81],[1725.56,3224.44],[1718.75,3232.62],[1713.89,3241.61],[1710.97,3251.4],[1710.0,3262.0],[1710.0,3276.22],[1710.0,3290.44],[1710.0,3304.67],[1710.0,3318.89],[1710.0,3333.11],[1710.0,3347.33],[1710.0,3361.56],[1710.0,3375.78],[1710.0,3390.0],[1781.0,3150.0],[1762.0,3150.0],[1751.4,3150.97],[1741.61,3153.89],[1732.62,3158.75],[1724.44,3165.56],[1713.81,3176.19],[1703.17,3186.83],[1692.54,3197.46],[1681.9,3208.1],[1671.27,3218.73],[1660.63,3229.37],[1650.0,3240.0],[1785.0,3150.0],[1770.0,3150.0],[1755.0,3150.0],[1740.0,3150.0],[1725.0,3150.0],[1710.0,3150.0],[1695.0,3150.0],[1680.0,3150.0],[1665.0,3150.0],[1650.0,3150.0],[1635.0,3150.0],[1620.0,3150.0],[1792.5,3142.5],[1788.56,3139.22],[1784.22,3136.88],[1779.5,3135.47],[1774.39,3135.0],[1760.08,3135.0],[1745.77,3135.0],[1731.46,3135.0],[1717.15,3135.0],[1702.85,3135.0],[1688.54,3135.0],[1674.23,3135.0],[1659.92,3135.0],[1645.61,3135.0],[1640.5,3135.47],[1635.78,3136.88],[1631.44,3139.22],[1627.5,3142.5],[1680,1560],[1665.0,1560.0],[1657.77,1560.66],[1651.1,1562.65],[1644.97,1565.97],[1639.39,1570.61],[1620.0,1590.0],[1668.89,1571.11],[1657.78,1582.22],[1646.67,1593.33],[1635.56,1604.44],[1627.38,1611.25],[1618.39,1616.11],[1608.6,1619.03],[1598.0,1620.0],[1583.37,1620.0],[1568.74,1620.0],[1554.11,1620.0],[1539.47,1620.0],[1524.84,1620.0],[1510.21,1620.0],[1495.58,1620.0],[1480.95,1620.0],[1466.32,1620.0],[1451.68,1620.0],[1437.05,1620.0],[1422.42,1620.0],[1407.79,1620.0],[1393.16,1620.0],[1378.53,1620.0],[1363.89,1620.0],[1349.26,1620.0],[1334.63,1620.0],[1320.0,1620.0],[1680.0,1545.48],[1680.0,1530.96],[1680.0,1516.43],[1680.0,1501.91],[1680.0,1487.39],[1680.0,1472.87],[1680.0,1458.35],[1680.0,1443.82],[1680.0,1429.3],[1680.0,1414.78],[1680.0,1400.26],[1680.0,1385.74],[1680.0,1371.21],[1680.94,1360.99],[1683.75,1351.55],[1688.44,1342.89],[1695.0,1335.0],[1710.0,1320.0],[1690.0,1550.0],[1700.0,1540.0],[1710.0,1530.0],[1720.0,1520.0],[1730.0,1510.0],[1740.0,1500.0],[660,2100],[675.0,2100.0],[690.0,2100.0],[705.0,2100.0],[720.0,2100.0],[735.0,2100.0],[750.0,2100.0],[765.0,2100.0],[780.0,2100.0],[795.0,2100.0],[810.0,2100.0],[1620,3360],[1620.0,3377.2],[1620.0,3394.39],[1620.0,3411.59],[1620.0,3428.79],[1620.94,3439.01],[1623.75,3448.45],[1628.44,3457.11],[1635.0,3465.0],[1650.0,3480.0],[1639.39,3379.39],[1644.97,3384.03],[1651.1,3387.35],[1657.77,3389.34],[1665.0,3390.0],[1620.0,3375.0],[1620.66,3382.23],[1622.65,3388.9],[1625.97,3395.03],[1630.61,3400.61],[1642.95,3412.95],[1655.3,3425.3],[1667.65,3437.65],[1590,3120],[1575.96,3120.0],[1561.93,3120.0],[1547.89,3120.0],[1533.86,3120.0],[1519.82,3120.0],[1505.79,3120.0],[1491.75,3120.0],[1477.71,3120.0],[1463.68,3120.0],[1449.64,3120.0],[1435.61,3120.0],[1421.57,3120.0],[1407.54,3120.0],[1393.5,3120.0],[1379.46,3120.0],[1365.43,3120.0],[1351.39,3120.0],[1337.36,3120.0],[1323.32,3120.0],[1309.28,3120.0],[1295.25,3120.0],[1281.21,3120.0],[1270.99,3120.94],[1261.55,3123.75],[1252.89,3128.44],[1245.0,3135.0],[1230.0,3150.0],[1605.0,3105.0],[1611.56,3097.11],[1616.25,3088.45],[1619.06,3079.01],[1620.0,3068.79],[1620.0,3054.35],[1620.0,3039.92],[1620.0,3025.48],[1620.0,3011.05],[1620.0,2996.61],[1620.0,2982.18],[1620.0,2967.74],[1620.0,2953.31],[1620.0,2938.87],[1620.0,2924.44],[1590.0,3134.0],[1590.0,3148.0],[1590.0,3162.0],[1590.0,3176.0],[1590.0,3190.0],[1590.0,3204.0],[1590.0,3218.0],[1590.0,3232.0],[1590.0,3246.0],[1590.0,3260.0],[1590.0,3274.0],[1590.0,3288.0],[1590.0,3302.0],[1590.0,3316.0],[1590.0,3330.0],[1582.5,3127.5],[1579.22,3131.44],[1576.88,3135.78],[1575.47,3140.5],[1575.0,3145.61],[1575.0,3160.04],[1575.0,3174.48],[1575.0,3188.91],[1575.0,3203.35],[1575.0,3217.78],[1575.0,3232.22],[1575.0,3246.65],[1575.0,3261.09],[1575.0,3275.52],[1575.0,3289.96],[1575.0,3304.39],[1575.47,3309.5],[1576.88,3314.22],[1579.22,3318.56],[1582.5,3322.5],[1740.0,1485.69],[1740.0,1471.38],[1740.0,1457.07],[1740.0,1442.76],[1740.0,1428.45],[1740.0,1414.14],[1740.0,1399.83],[1740.0,1385.52],[1740.0,1371.21],[1739.06,1360.99],[1736.25,1351.55],[1731.56,1342.89],[1725.0,1335.0],[1725.0,1500.0],[1717.77,1500.66],[1711.1,1502.65],[1704.97,1505.97],[1699.39,1510.61],[1689.47,1520.53],[1679.55,1530.45],[1669.62,1540.38],[1659.7,1550.3],[1649.77,1560.23],[1639.85,1570.15],[1629.92,1580.08],[1710,4050],[1710.0,4035.0],[1710.0,4020.0],[1710.0,4005.0],[1710.0,3990.0],[1710.0,3975.0],[1710.0,3960.0],[1695.0,4035.0],[1688.44,4027.11],[1683.75,4018.45],[1680.94,4009.01],[1680.0,3998.79],[1680.0,3979.39],[1680.0,3960.0],[1710.0,4035.33],[1710.0,4020.65],[1710.0,4005.98],[1710.0,3991.31],[1710.0,3976.64],[1710.0,3961.96],[1710.0,3947.29],[1710.0,3932.62],[1710.0,3917.94],[1710.0,3903.27],[1710.0,3888.6],[1710.0,3873.92],[1710.0,3859.25],[1710.0,3844.58],[1710.0,3829.91],[1710.0,3815.23],[1710.0,3800.56],[1710.0,3785.89],[1710.0,3771.21],[1709.06,3760.99],[1706.25,3751.55],[1701.56,3742.89],[1695.0,3735.0],[1695.37,4050.0],[1680.73,4050.0],[1666.1,4050.0],[1651.46,4050.0],[1636.83,4050.0],[1622.19,4050.0],[1607.56,4050.0],[1592.92,4050.0],[1578.29,4050.0],[1563.65,4050.0],[1549.02,4050.0],[1534.39,4050.0],[1519.75,4050.0],[1505.12,4050.0],[1490.48,4050.0],[1475.85,4050.0],[1461.21,4050.0],[1450.99,4049.06],[1441.55,4046.25],[1432.89,4041.56],[1425.0,4035.0],[1410.0,4020.0],[1680.0,3984.67],[1680.0,3970.56],[1680.0,3956.45],[1680.0,3942.34],[1680.0,3928.22],[1680.0,3914.11],[1680.0,3900.0],[1260,2850],[1274.44,2850.0],[1288.87,2850.0],[1303.31,2850.0],[1317.74,2850.0],[1332.18,2850.0],[1346.61,2850.0],[1361.05,2850.0],[1375.48,2850.0],[1389.92,2850.0],[1404.35,2850.0],[1418.79,2850.0],[1429.01,2850.94],[1438.45,2853.75],[1447.11,2858.44],[1455.0,2865.0],[1470.0,2880.0],[1245.0,2850.0],[1230.0,2850.0],[1215.0,2850.0],[1200.0,2850.0],[1185.0,2850.0],[1170.0,2850.0],[1155.0,2850.0],[1140.0,2850.0],[1260.0,2835.0],[1259.34,2827.77],[1257.35,2821.1],[1254.03,2814.97],[1249.39,2809.39],[1239.44,2799.44],[1229.48,2789.48],[1219.52,2779.52],[1209.57,2769.57],[1199.61,2759.61],[1189.65,2749.65],[1179.7,2739.7],[1169.74,2729.74],[1159.78,2719.78],[1149.83,2709.83],[1139.87,2699.87],[1129.91,2689.91],[1119.96,2679.96],[1110.0,2670.0],[1245.0,2865.0],[1238.44,2872.89],[1233.75,2881.55],[1230.94,2890.99],[1230.0,2901.21],[1230.0,2915.85],[1230.0,2930.48],[1230.0,2945.12],[1230.0,2959.75],[1230.0,2974.39],[1230.0,2989.02],[1230.0,3003.65],[1230.0,3018.29],[1230.0,3032.92],[1230.0,3047.56],[1230.0,3062.19],[1230.0,3076.83],[1230.0,3091.46],[1230.0,3106.1],[1230.0,3120.73],[1230.0,3135.37],[1260.0,2864.22],[1260.0,2878.44],[1260.0,2892.67],[1260.0,2906.89],[1260.0,2921.11],[1260.0,2935.33],[1260.0,2949.56],[1260.0,2963.78],[1260.0,2978.0],[1259.03,2988.6],[1256.11,2998.39],[1251.25,3007.38],[1244.44,3015.56],[1233.81,3026.19],[1223.17,3036.83],[1212.54,3047.46],[1201.9,3058.1],[1191.27,3068.73],[1180.63,3079.37],[810,2580],[790.61,2560.61],[785.03,2555.97],[778.9,2552.65],[772.23,2550.66],[765.0,2550.0],[750.0,2550.0],[810.0,2595.0],[810.0,2610.0],[810.0,2625.0],[810.0,2640.0],[810.0,2655.0],[810.0,2670.0],[810.0,2685.0],[810.0,2700.0],[824.11,2580.0],[838.22,2580.0],[852.34,2580.0],[866.45,2580.0],[880.56,2580.0],[894.67,2580.0],[908.79,2580.0],[919.01,2579.06],[928.45,2576.25],[937.11,2571.56],[945.0,2565.0],[960.0,2550.0],[1410.0,4039.39],[1410.0,4058.79],[1410.94,4069.01],[1413.75,4078.45],[1418.44,4087.11],[1425.0,4095.0],[1440.0,4110.0],[1395.0,4035.0],[1388.44,4042.89],[1383.75,4051.55],[1380.94,4060.99],[1380.0,4071.21],[1380.0,4085.52],[1380.0,4099.83],[1380.0,4114.14],[1380.0,4128.45],[1380.0,4142.76],[1380.0,4157.07],[1380.0,4171.38],[1380.0,4185.69],[1380.0,4200.0],[1427.0,4020.0],[1444.0,4020.0],[1461.0,4020.0],[1478.0,4020.0],[1488.6,4020.97],[1498.39,4023.89],[1507.38,4028.75],[1515.56,4035.56],[1525.83,4045.83],[1536.11,4056.11],[1546.39,4066.39],[1556.67,4076.67],[1566.94,4086.94],[1577.22,4097.22],[1587.5,4107.5],[1597.78,4117.78],[1608.06,4128.06],[1618.33,4138.33],[1628.61,4148.61],[1638.89,4158.89],[1649.17,4169.17],[1659.44,4179.44],[1669.72,4189.72],[1680.0,4200.0],[1410.0,4005.41],[1410.0,3990.83],[1410.0,3976.24],[1410.0,3961.66],[1410.0,3947.07],[1410.0,3932.49],[1410.0,3917.9],[1410.0,3903.31],[1410.0,3888.73],[1410.0,3874.14],[1410.0,3859.56],[1410.0,3844.97],[1410.0,3830.38],[1410.0,3815.8],[1410.0,3801.21],[1410.94,3790.99],[1413.75,3781.55],[1418.44,3772.89],[1425.0,3765.0],[1440.0,3750.0],[1575.0,3345.0],[1568.44,3352.89],[1563.75,3361.55],[1560.94,3370.99],[1560.0,3381.21],[1560.0,3400.61],[1560.0,3420.0],[1710,1830],[1727.2,1830.0],[1744.39,1830.0],[1761.59,1830.0],[1778.79,1830.0],[1789.01,1829.06],[1798.45,1826.25],[1807.11,1821.56],[1815.0,1815.0],[1830.0,1800.0],[1695.0,1830.0],[1680.0,1830.0],[1665.0,1830.0],[1650.0,1830.0],[1635.0,1830.0],[1620.0,1830.0],[1605.0,1830.0],[1590.0,1830.0],[1575.0,1830.0],[1560.0,1830.0],[1545.0,1830.0],[1530.0,1830.0],[1710.0,1815.0],[1710.0,1800.0],[1710.0,1785.0],[1710.0,1770.0],[1710.0,1755.0],[1710.0,1740.0],[1710.0,1725.0],[1710.0,1710.0],[1710.0,1695.0],[1710.0,1680.0],[1710.0,1845.0],[1709.34,1852.23],[1707.35,1858.9],[1704.03,1865.03],[1699.39,1870.61],[1689.47,1880.53],[1679.55,1890.45],[1669.62,1900.38],[1659.7,1910.3],[1649.77,1920.23],[1639.85,1930.15],[1629.92,1940.08],[1620.0,1950.0],[2010,1860],[2000.0,1870.0],[1990.0,1880.0],[1980.0,1890.0],[1970.0,1900.0],[1960.0,1910.0],[1950.0,1920.0],[2040,2010],[2025.0,2010.0],[2010.0,2010.0],[1995.0,2010.0],[1980.0,2010.0],[1965.0,2010.0],[1950.0,2010.0],[1050,1890],[1060.0,1880.0],[1070.0,1870.0],[1080.0,1860.0],[1090.0,1850.0],[1100.0,1840.0],[1110.0,1830.0],[1120.0,1820.0],[1130.0,1810.0],[1140.0,1800.0],[1150.0,1790.0],[1160.0,1780.0],[1170.0,1770.0],[1180.0,1760.0],[1190.0,1750.0],[1200.0,1740.0],[1210.0,1730.0],[1220.0,1720.0],[1230.0,1710.0],[1050.0,1904.11],[1050.0,1918.22],[1050.0,1932.34],[1050.0,1946.45],[1050.0,1960.56],[1050.0,1974.67],[1050.0,1988.79],[1050.94,1999.01],[1053.75,2008.45],[1058.44,2017.11],[1065.0,2025.0],[1080.0,2040.0],[1050.0,1875.69],[1050.0,1861.38],[1050.0,1847.07],[1050.0,1832.76],[1050.0,1818.45],[1050.0,1804.14],[1050.0,1789.83],[1050.0,1775.52],[1050.0,1761.21],[1049.06,1750.99],[1046.25,1741.55],[1041.56,1732.89],[1035.0,1725.0],[1020.0,1710.0],[1040.03,1899.97],[1030.06,1909.94],[1020.09,1919.91],[1010.12,1929.88],[1000.15,1939.85],[990.18,1949.82],[980.21,1959.79],[970.24,1969.76],[960.27,1979.73],[950.3,1989.7],[940.33,1999.67],[930.36,2009.64],[920.39,2019.61],[910.42,2029.58],[900.45,2039.55],[890.49,2049.51],[880.52,2059.48],[870.55,2069.45],[860.58,2079.42],[850.61,2089.39],[845.03,2094.03],[838.9,2097.35],[832.23,2099.34],[825.0,2100.0],[1710.0,3434.63],[1710.0,3449.27],[1710.0,3463.9],[1710.0,3478.54],[1710.0,3493.17],[1710.0,3507.81],[1710.0,3522.44],[1710.0,3537.08],[1710.0,3551.71],[1710.0,3566.35],[1710.0,3580.98],[1710.0,3595.61],[1710.0,3610.25],[1710.0,3624.88],[1710.0,3639.52],[1710.0,3654.15],[1710.0,3668.79],[1709.06,3679.01],[1706.25,3688.45],[1701.56,3697.11],[1695.0,3705.0],[1698.89,3431.11],[1687.78,3442.22],[1676.67,3453.33],[1665.56,3464.44],[1657.38,3471.25],[1648.39,3476.11],[1638.6,3479.03],[1628.0,3480.0],[1613.37,3480.0],[1598.74,3480.0],[1584.11,3480.0],[1569.47,3480.0],[1554.84,3480.0],[1540.21,3480.0],[1525.58,3480.0],[1510.95,3480.0],[1496.32,3480.0],[1481.68,3480.0],[1467.05,3480.0],[1452.42,3480.0],[1437.79,3480.0],[1423.16,3480.0],[1408.53,3480.0],[1393.89,3480.0],[1379.26,3480.0],[1364.63,3480.0],[1350.0,3480.0],[1020,2640],[1010.0,2650.0],[1000.0,2660.0],[990.0,2670.0],[980.0,2680.0],[970.0,2690.0],[960.0,2700.0],[1037.2,2640.0],[1054.39,2640.0],[1071.59,2640.0],[1088.79,2640.0],[1099.01,2639.06],[1108.45,2636.25],[1117.11,2631.56],[1125.0,2625.0],[1140.0,2610.0],[1020.0,2625.0],[1019.34,2617.77],[1017.35,2611.1],[1014.03,2604.97],[1009.39,2599.39],[997.05,2587.05],[984.7,2574.7],[972.35,2562.35],[1860,2400],[1860.0,2385.0],[1859.34,2377.77],[1857.35,2371.1],[1854.03,2364.97],[1849.39,2359.39],[1839.43,2349.43],[1829.46,2339.46],[1819.5,2329.5],[1809.54,2319.54],[1799.57,2309.57],[1789.61,2299.61],[1779.64,2289.64],[1769.68,2279.68],[1759.71,2269.71],[1749.75,2259.75],[1739.79,2249.79],[1729.82,2239.82],[1719.86,2229.86],[1709.89,2219.89],[1699.93,2209.93],[1689.96,2199.96],[1680.0,2190.0],[1860.0,2415.0],[1859.34,2422.23],[1857.35,2428.9],[1854.03,2435.03],[1849.39,2440.61],[1839.41,2450.59],[1829.43,2460.57],[1819.45,2470.55],[1809.47,2480.53],[1799.49,2490.51],[1789.51,2500.49],[1779.53,2510.47],[1769.55,2520.45],[1759.56,2530.44],[1749.58,2540.42],[1739.6,2550.4],[1729.62,2560.38],[1719.64,2570.36],[1709.66,2580.34],[1699.68,2590.32],[1689.7,2600.3],[1679.72,2610.28],[1669.73,2620.27],[1659.75,2630.25],[1649.77,2640.23],[1639.79,2650.21],[1629.81,2660.19],[1619.83,2670.17],[1609.85,2680.15],[1599.87,2690.13],[1589.89,2700.11],[1579.91,2710.09],[1569.92,2720.08],[1559.94,2730.06],[1549.96,2740.04],[1539.98,2750.02],[1530.0,2760.0],[1845.56,2400.0],[1831.11,2400.0],[1816.67,2400.0],[1802.22,2400.0],[1787.78,2400.0],[1773.33,2400.0],[1758.89,2400.0],[1744.44,2400.0],[1730.0,2400.0],[1715.56,2400.0],[1701.11,2400.0],[1686.67,2400.0],[1672.22,2400.0],[1657.78,2400.0],[1643.33,2400.0],[1628.89,2400.0],[1614.44,2400.0],[1600.0,2400.0],[1585.56,2400.0],[1571.11,2400.0],[1556.67,2400.0],[1542.22,2400.0],[1527.78,2400.0],[1513.33,2400.0],[1498.89,2400.0],[1484.44,2400.0],[1470.0,2400.0],[1680.0,3735.0],[1680.0,3750.0],[1680.0,3765.0],[1680.0,3780.0],[1680.0,3795.0],[1680.0,3810.0],[1680.0,3734.52],[1680.0,3749.04],[1680.0,3763.57],[1680.0,3778.09],[1680.0,3792.61],[1680.0,3807.13],[1680.0,3821.65],[1680.0,3836.18],[1680.0,3850.7],[1680.0,3865.22],[1680.0,3879.74],[1680.0,3894.26],[1680.0,3908.79],[1680.94,3919.01],[1683.75,3928.45],[1688.44,3937.11],[1695.0,3945.0],[974.11,2550.0],[988.22,2550.0],[1002.34,2550.0],[1016.45,2550.0],[1030.56,2550.0],[1044.67,2550.0],[1058.79,2550.0],[1069.01,2549.06],[1078.45,2546.25],[1087.11,2541.56],[1095.0,2535.0],[1110.0,2520.0],[960.0,2565.0],[960.0,2580.0],[960.0,2595.0],[960.0,2610.0],[960.0,2625.0],[960.0,2640.0],[960.0,2655.0],[960.0,2670.0],[960.0,2685.0],[1605.0,1965.0],[1597.11,1971.56],[1588.45,1976.25],[1579.01,1979.06],[1568.79,1980.0],[1554.48,1980.0],[1540.17,1980.0],[1525.86,1980.0],[1511.55,1980.0],[1497.24,1980.0],[1482.93,1980.0],[1468.62,1980.0],[1454.31,1980.0],[1440.0,1980.0],[1634.31,1950.0],[1648.62,1950.0],[1662.93,1950.0],[1677.24,1950.0],[1691.55,1950.0],[1705.86,1950.0],[1720.17,1950.0],[1734.48,1950.0],[1748.79,1950.0],[1759.01,1949.06],[1768.45,1946.25],[1777.11,1941.56],[1785.0,1935.0],[1800.0,1920.0],[1620.0,1964.11],[1620.0,1978.22],[1620.0,1992.34],[1620.0,2006.45],[1620.0,2020.56],[1620.0,2034.67],[1620.0,2048.79],[1619.06,2059.01],[1616.25,2068.45],[1611.56,2077.11],[1605.0,2085.0],[1590.0,2100.0],[1620.0,1935.0],[1619.34,1927.77],[1617.35,1921.1],[1614.03,1914.97],[1609.39,1909.39],[1599.47,1899.47],[1589.55,1889.55],[1579.62,1879.62],[1569.7,1869.7],[1559.77,1859.77],[1549.85,1849.85],[1539.92,1839.92],[1620,3390],[1620.0,3345.0],[1620.0,3330.0],[1620.0,3315.0],[1620.0,3300.0],[1635.0,3390.0],[1650.0,3390.0],[1695.0,3390.0],[1620.0,3375.88],[1620.0,3361.76],[1620.0,3347.65],[1620.0,3333.53],[1620.0,3319.41],[1620.0,3305.29],[1620.0,3291.18],[1620.0,3277.06],[1620.0,3262.94],[1620.0,3248.82],[1620.0,3234.71],[1620.0,3220.59],[1620.0,3206.47],[1620.0,3192.35],[1620.0,3178.24],[1620.0,3164.12],[1110,2160],[1110.0,2174.4],[1110.0,2188.8],[1110.0,2203.2],[1110.0,2217.6],[1110.0,2232.0],[1110.0,2246.4],[1110.0,2260.8],[1110.0,2275.2],[1110.0,2289.6],[1110.0,2304.0],[1110.0,2318.4],[1110.0,2332.8],[1110.0,2347.2],[1110.0,2361.6],[1110.0,2376.0],[1110.0,2390.4],[1110.0,2404.8],[1110.0,2419.2],[1110.0,2433.6],[1110.0,2448.0],[1110.0,2462.4],[1110.0,2476.8],[1110.0,2491.2],[1110.0,2505.6],[1095.0,2145.0],[1088.44,2137.11],[1083.75,2128.45],[1080.94,2119.01],[1080.0,2108.79],[1080.0,2091.59],[1080.0,2074.39],[1080.0,2057.2],[1095.47,2160.0],[1080.93,2160.0],[1066.4,2160.0],[1051.87,2160.0],[1037.33,2160.0],[1022.8,2160.0],[1008.27,2160.0],[993.73,2160.0],[979.2,2160.0],[964.67,2160.0],[950.13,2160.0],[935.6,2160.0],[921.07,2160.0],[906.53,2160.0],[892.0,2160.0],[881.4,2159.03],[871.61,2156.11],[862.62,2151.25],[854.44,2144.44],[843.33,2133.33],[832.22,2122.22],[821.11,2111.11],[1125.0,2175.0],[1132.89,2181.56],[1141.55,2186.25],[1150.99,2189.06],[1161.21,2190.0],[1175.25,2190.0],[1189.28,2190.0],[1203.32,2190.0],[1217.36,2190.0],[1231.39,2190.0],[1245.43,2190.0],[1259.46,2190.0],[1273.5,2190.0],[1287.54,2190.0],[1301.57,2190.0],[1315.61,2190.0],[1329.64,2190.0],[1343.68,2190.0],[1357.71,2190.0],[1371.75,2190.0],[1385.79,2190.0],[1399.82,2190.0],[1413.86,2190.0],[1427.89,2190.0],[1441.93,2190.0],[1455.96,2190.0],[1470.0,2190.0],[1680.0,3974.35],[1680.0,3988.7],[1680.0,4003.04],[1680.0,4017.39],[1680.0,4031.74],[1680.0,4046.09],[1680.0,4060.43],[1680.0,4074.78],[1680.0,4089.13],[1680.0,4103.48],[1680.0,4117.83],[1680.0,4132.17],[1680.0,4146.52],[1680.0,4160.87],[1680.0,4175.22],[1680.0,4189.57],[1680.0,4203.91],[1680.0,4218.26],[1680.0,4232.61],[1680.0,4246.96],[1680.0,4261.3],[1680.0,4275.65],[1680.0,4290.0],[1672.5,3967.5],[1669.22,3971.44],[1666.88,3975.78],[1665.47,3980.5],[1665.0,3985.61],[1665.0,4000.28],[1665.0,4014.95],[1665.0,4029.63],[1665.0,4044.3],[1665.0,4058.97],[1665.0,4073.64],[1665.0,4088.32],[1665.0,4102.99],[1665.0,4117.66],[1665.0,4132.34],[1665.0,4147.01],[1665.0,4161.68],[1665.0,4176.36],[1665.0,4191.03],[1665.0,4205.7],[1665.0,4220.37],[1665.0,4235.05],[1665.0,4249.72],[1665.0,4264.39],[1665.47,4269.5],[1666.88,4274.22],[1669.22,4278.56],[1672.5,4282.5],[1680.0,3974.12],[1680.0,3988.24],[1680.0,4002.35],[1680.0,4016.47],[1680.0,4030.59],[1680.0,4044.71],[1680.0,4058.82],[1680.0,4072.94],[1680.0,4087.06],[1680.0,4101.18],[1680.0,4115.29],[1680.0,4129.41],[1680.0,4143.53],[1680.0,4157.65],[1680.0,4171.76],[1680.0,4185.88],[1020.0,1690.61],[1020.0,1671.21],[1020.94,1660.99],[1023.75,1651.55],[1028.44,1642.89],[1035.0,1635.0],[1050.0,1620.0],[1034.0,1710.0],[1048.0,1710.0],[1062.0,1710.0],[1076.0,1710.0],[1090.0,1710.0],[1104.0,1710.0],[1118.0,1710.0],[1132.0,1710.0],[1146.0,1710.0],[1160.0,1710.0],[1174.0,1710.0],[1188.0,1710.0],[1202.0,1710.0],[1216.0,1710.0],[1549.39,2779.39],[1554.03,2784.97],[1557.35,2791.1],[1559.34,2797.77],[1560.0,2805.0],[1560.0,2820.0],[1140.0,2865.0],[1140.0,2880.0],[1140.0,2895.0],[1140.0,2910.0],[1155.0,2865.0],[1161.56,2872.89],[1166.25,2881.55],[1169.06,2890.99],[1170.0,2901.21],[1170.0,2915.74],[1170.0,2930.26],[1170.0,2944.78],[1170.0,2959.3],[1170.0,2973.82],[1170.0,2988.35],[1170.0,3002.87],[1170.0,3017.39],[1170.0,3031.91],[1170.0,3046.43],[1170.0,3060.96],[1170.0,3075.48],[1125.0,2835.0],[1118.44,2827.11],[1113.75,2818.45],[1110.94,2809.01],[1110.0,2798.79],[1110.0,2784.48],[1110.0,2770.17],[1110.0,2755.86],[1110.0,2741.55],[1110.0,2727.24],[1110.0,2712.93],[1110.0,2698.62],[1110.0,2684.31],[1350.0,3585.0],[1350.0,3570.0],[1350.0,3555.0],[1350.0,3540.0],[1350.0,3525.0],[1350.0,3510.0],[1350.0,3495.0],[1365.0,3585.0],[1371.56,3577.11],[1376.25,3568.45],[1379.06,3559.01],[1380.0,3548.79],[1380.0,3534.15],[1380.0,3519.52],[1380.0,3504.88],[1380.0,3490.25],[1380.0,3475.61],[1380.0,3460.98],[1380.0,3446.35],[1380.0,3431.71],[1380.0,3417.08],[1380.0,3402.44],[1380.0,3387.81],[1380.0,3373.17],[1380.0,3358.54],[1380.0,3343.9],[1380.0,3329.27],[1380.0,3314.63],[1365.0,3465.0],[1372.89,3458.44],[1381.55,3453.75],[1390.99,3450.94],[1401.21,3450.0],[1418.41,3450.0],[1435.61,3450.0],[1452.8,3450.0],[1364.29,3480.0],[1378.57,3480.0],[1392.86,3480.0],[1407.14,3480.0],[1421.43,3480.0],[1435.71,3480.0],[1450.0,3480.0],[1464.29,3480.0],[1478.57,3480.0],[1492.86,3480.0],[1507.14,3480.0],[1521.43,3480.0],[1535.71,3480.0],[1550.0,3480.0],[1564.29,3480.0],[1578.57,3480.0],[1592.86,3480.0],[1607.14,3480.0],[1621.43,3480.0],[1635.71,3480.0],[1350.0,3465.69],[1350.0,3451.38],[1350.0,3437.07],[1350.0,3422.76],[1350.0,3408.45],[1350.0,3394.14],[1350.0,3379.83],[1350.0,3365.52],[1350.0,3351.21],[1350.94,3340.99],[1353.75,3331.55],[1358.44,3322.89],[1365.0,3315.0],[1440.0,4095.88],[1440.0,4081.76],[1440.0,4067.65],[1440.0,4053.53],[1440.0,4039.41],[1440.0,4025.29],[1440.0,4011.18],[1440.0,3997.06],[1440.0,3982.94],[1440.0,3968.82],[1440.0,3954.71],[1440.0,3940.59],[1440.0,3926.47],[1440.0,3912.35],[1440.0,3898.24],[1440.0,3884.12],[1440.0,3870.0],[1447.5,4102.5],[1450.78,4098.56],[1453.12,4094.22],[1454.53,4089.5],[1455.0,4084.39],[1455.0,4069.87],[1455.0,4055.35],[1455.0,4040.83],[1455.0,4026.31],[1455.0,4011.78],[1455.0,3997.26],[1455.0,3982.74],[1455.0,3968.22],[1455.0,3953.69],[1455.0,3939.17],[1455.0,3924.65],[1455.0,3910.13],[1455.0,3895.61],[1454.53,3890.5],[1453.12,3885.78],[1450.78,3881.44],[1447.5,3877.5],[1470.0,2386.0],[1470.0,2372.0],[1470.0,2358.0],[1470.0,2344.0],[1470.0,2330.0],[1470.0,2316.0],[1470.0,2302.0],[1470.0,2288.0],[1470.0,2274.0],[1470.0,2260.0],[1470.0,2246.0],[1470.0,2232.0],[1470.0,2218.0],[1470.0,2204.0],[1470.0,2414.31],[1470.0,2428.62],[1470.0,2442.93],[1470.0,2457.24],[1470.0,2471.55],[1470.0,2485.86],[1470.0,2500.17],[1470.0,2514.48],[1470.0,2528.79],[1469.06,2539.01],[1466.25,2548.45],[1461.56,2557.11],[1455.0,2565.0],[1440.0,2580.0],[1394.29,4200.0],[1408.57,4200.0],[1422.86,4200.0],[1437.14,4200.0],[1451.43,4200.0],[1465.71,4200.0],[1480.0,4200.0],[1494.29,4200.0],[1508.57,4200.0],[1522.86,4200.0],[1537.14,4200.0],[1551.43,4200.0],[1565.71,4200.0],[1580.0,4200.0],[1594.29,4200.0],[1608.57,4200.0],[1622.86,4200.0],[1637.14,4200.0],[1651.43,4200.0],[1665.71,4200.0],[1387.5,4207.5],[1391.44,4210.78],[1395.78,4213.12],[1400.5,4214.53],[1405.61,4215.0],[1420.24,4215.0],[1434.88,4215.0],[1449.51,4215.0],[1464.14,4215.0],[1478.78,4215.0],[1493.41,4215.0],[1508.05,4215.0],[1522.68,4215.0],[1537.32,4215.0],[1551.95,4215.0],[1566.59,4215.0],[1581.22,4215.0],[1595.86,4215.0],[1610.49,4215.0],[1625.12,4215.0],[1639.76,4215.0],[1654.39,4215.0],[1659.5,4214.53],[1664.22,4213.12],[1668.56,4210.78],[1672.5,4207.5],[780,2250],[780.0,2235.89],[780.0,2221.78],[780.0,2207.66],[780.0,2193.55],[780.0,2179.44],[780.0,2165.33],[780.0,2151.21],[780.94,2140.99],[783.75,2131.55],[788.44,2122.89],[795.0,2115.0],[765.0,2265.0],[758.44,2272.89],[753.75,2281.55],[750.94,2290.99],[750.0,2301.21],[750.0,2315.85],[750.0,2330.48],[750.0,2345.12],[750.0,2359.75],[750.0,2374.39],[750.0,2389.02],[750.0,2403.65],[750.0,2418.29],[750.0,2432.92],[750.0,2447.56],[750.0,2462.19],[750.0,2476.83],[750.0,2491.46],[750.0,2506.1],[750.0,2520.73],[750.0,2535.37],[1440.0,3736.0],[1440.0,3722.0],[1440.0,3708.0],[1440.0,3694.0],[1440.0,3680.0],[1440.0,3666.0],[1440.0,3652.0],[1440.0,3638.0],[1440.0,3624.0],[1440.0,3610.0],[1440.0,3596.0],[1440.0,3582.0],[1440.0,3568.0],[1440.0,3554.0],[1440.0,3765.0],[1440.0,3780.0],[1440.0,3795.0],[1440.0,3810.0],[1440.0,3825.0],[1440.0,3840.0],[1440.0,3855.0],[825.0,2700.0],[840.0,2700.0],[855.0,2700.0],[870.0,2700.0],[885.0,2700.0],[900.0,2700.0],[915.0,2700.0],[930.0,2700.0],[945.0,2700.0],[817.5,2707.5],[821.44,2710.78],[825.78,2713.12],[830.5,2714.53],[835.61,2715.0],[849.72,2715.0],[863.83,2715.0],[877.94,2715.0],[892.06,2715.0],[906.17,2715.0],[920.28,2715.0],[934.39,2715.0],[939.5,2714.53],[944.22,2713.12],[948.56,2710.78],[952.5,2707.5],[825.0,2715.0],[832.89,2721.56],[841.55,2726.25],[850.99,2729.06],[861.21,2730.0],[877.07,2730.0],[892.93,2730.0],[908.79,2730.0],[919.01,2729.06],[928.45,2726.25],[937.11,2721.56],[945.0,2715.0],[1129.0,2670.0],[1148.0,2670.0],[1158.6,2669.03],[1168.39,2666.11],[1177.38,2661.25],[1185.56,2654.44],[1196.67,2643.33],[1207.78,2632.22],[1218.89,2621.11],[1230.0,2610.0],[1125.0,2685.0],[1131.56,2692.89],[1136.25,2701.55],[1139.06,2710.99],[1140.0,2721.21],[1140.0,2735.74],[1140.0,2750.26],[1140.0,2764.78],[1140.0,2779.3],[1140.0,2793.82],[1140.0,2808.35],[1140.0,2822.87],[1140.0,2837.39],[1140.0,2851.91],[1140.0,2866.43],[1140.0,2880.96],[1140.0,2895.48],[735.0,2550.0],[720.0,2550.0],[705.0,2550.0],[690.0,2550.0],[675.0,2550.0],[660.0,2550.0],[1920,1800],[1905.0,1800.0],[1890.0,1800.0],[1875.0,1800.0],[1860.0,1800.0],[1845.0,1800.0],[1620.0,3135.88],[1620.0,3121.76],[1620.0,3107.65],[1620.0,3093.53],[1620.0,3079.41],[1620.0,3065.29],[1620.0,3051.18],[1620.0,3037.06],[1620.0,3022.94],[1620.0,3008.82],[1620.0,2994.71],[1620.0,2980.59],[1620.0,2966.47],[1620.0,2952.35],[1620.0,2938.24],[1620.0,2924.12],[1635.0,3165.0],[1641.56,3172.89],[1646.25,3181.55],[1649.06,3190.99],[1650.0,3201.21],[1650.0,3220.61],[1630.78,3138.56],[1633.12,3134.22],[1634.53,3129.5],[1635.0,3124.39],[1635.0,3109.87],[1635.0,3095.35],[1635.0,3080.83],[1635.0,3066.31],[1635.0,3051.78],[1635.0,3037.26],[1635.0,3022.74],[1635.0,3008.22],[1635.0,2993.69],[1635.0,2979.17],[1635.0,2964.65],[1635.0,2950.13],[1635.0,2935.61],[1634.53,2930.5],[1633.12,2925.78],[1630.78,2921.44],[1627.5,2917.5],[1600.61,3130.61],[1595.03,3125.97],[1588.9,3122.65],[1582.23,3120.66],[1575.0,3120.0],[1560.0,3120.0],[1440.0,3554.35],[1440.0,3568.7],[1440.0,3583.04],[1440.0,3597.39],[1440.0,3611.74],[1440.0,3626.09],[1440.0,3640.43],[1440.0,3654.78],[1440.0,3669.13],[1440.0,3683.48],[1440.0,3697.83],[1440.0,3712.17],[1440.0,3726.52],[1440.0,3740.87],[1440.0,3755.22],[1440.0,3769.57],[1440.0,3783.91],[1440.0,3798.26],[1440.0,3812.61],[1440.0,3826.96],[1440.0,3841.3],[1440.0,3855.65],[1189.0,3090.0],[1208.0,3090.0],[1218.6,3090.97],[1228.39,3093.89],[1237.38,3098.75],[1245.56,3105.56],[1255.7,3115.7],[1265.84,3125.84],[1275.99,3135.99],[1286.13,3146.13],[1296.27,3156.27],[1306.42,3166.42],[1316.56,3176.56],[1326.7,3186.7],[1336.85,3196.85],[1346.99,3206.99],[1357.13,3217.13],[1367.28,3227.28],[1377.42,3237.42],[1387.56,3247.56],[1397.71,3257.71],[1407.85,3267.85],[1417.99,3277.99],[1428.14,3288.14],[1438.28,3298.28],[1448.42,3308.42],[1458.57,3318.57],[1468.71,3328.71],[1478.85,3338.85],[1489.0,3349.0],[1499.14,3359.14],[1509.28,3369.28],[1519.43,3379.43],[1529.57,3389.57],[1539.71,3399.71],[1549.86,3409.86],[1180.0,3100.0],[1190.0,3110.0],[1200.0,3120.0],[1210.0,3130.0],[1220.0,3140.0],[1240.0,3160.0],[1250.0,3170.0],[1260.0,3180.0],[1270.0,3190.0],[1280.0,3200.0],[1290.0,3210.0],[1300.0,3220.0],[1310.0,3230.0],[1320.0,3240.0],[1330.0,3250.0],[1340.0,3260.0],[1350.0,3270.0],[1360.0,3280.0],[1370.0,3290.0],[1680.0,3885.0],[1680.0,3870.0],[1680.0,3855.0],[1680.0,3840.0],[1680.0,3825.0],[1699.39,3919.39],[1704.03,3924.97],[1707.35,3931.1],[1709.34,3937.77],[1710.0,3945.0],[1687.5,3892.5],[1690.78,3888.56],[1693.12,3884.22],[1694.53,3879.5],[1695.0,3874.39],[1695.0,3855.0],[1695.0,3835.61],[1694.53,3830.5],[1693.12,3825.78],[1690.78,3821.44],[1687.5,3817.5],[1590,2910],[1575.0,2895.0],[1568.44,2887.11],[1563.75,2878.45],[1560.94,2869.01],[1560.0,2858.79],[1560.0,2839.39],[1590.0,2925.0],[1590.0,2940.0],[1590.0,2955.0],[1590.0,2970.0],[1590.0,2985.0],[1590.0,3000.0],[1590.0,3015.0],[1590.0,3030.0],[1572.8,2910.0],[1555.61,2910.0],[1538.41,2910.0],[1521.21,2910.0],[1510.99,2909.06],[1501.55,2906.25],[1492.89,2901.56],[1485.0,2895.0],[1590.0,2895.69],[1590.0,2881.38],[1590.0,2867.07],[1590.0,2852.76],[1590.0,2838.45],[1590.0,2824.14],[1590.0,2809.83],[1590.0,2795.52],[1590.0,2781.21],[1589.06,2770.99],[1586.25,2761.55],[1581.56,2752.89],[1575.0,2745.0],[1560.0,2730.0],[1830.0,1817.2],[1830.0,1834.39],[1830.0,1851.59],[1830.0,1868.79],[1829.06,1879.01],[1826.25,1888.45],[1821.56,1897.11],[1815.0,1905.0],[1820.0,1790.0],[1810.0,1780.0],[1800.0,1770.0],[1790.0,1760.0],[1780.0,1750.0],[1770.0,1740.0],[1760.0,1730.0],[1750.0,1720.0],[1740.0,1710.0],[1730.0,1700.0],[1720.0,1690.0],[1840.0,1810.0],[1850.0,1820.0],[1860.0,1830.0],[1870.0,1840.0],[1880.0,1850.0],[1890.0,1860.0],[1900.0,1870.0],[1910.0,1880.0],[1920.0,1890.0],[1930.0,1900.0],[1940.0,1910.0],[1320,1530],[1320.0,1545.0],[1320.0,1560.0],[1320.0,1575.0],[1320.0,1590.0],[1320.0,1605.0],[1935.0,1920.0],[1920.0,1920.0],[1905.0,1920.0],[1890.0,1920.0],[1875.0,1920.0],[1860.0,1920.0],[1845.0,1920.0],[1830.0,1920.0],[1815.0,1920.0],[1950.0,1935.0],[1950.0,1950.0],[1950.0,1965.0],[1950.0,1980.0],[1950.0,1995.0],[1605.0,3015.0],[1611.56,3007.11],[1616.25,2998.45],[1619.06,2989.01],[1620.0,2978.79],[1620.0,2961.59],[1620.0,2944.39],[1620.0,2927.2],[1580.06,3020.06],[1570.11,3010.11],[1560.17,3000.17],[1550.22,2990.22],[1540.28,2980.28],[1530.33,2970.33],[1520.39,2960.39],[1510.44,2950.44],[1500.5,2940.5],[1490.55,2930.55],[1480.61,2920.61],[1475.97,2915.03],[1472.65,2908.9],[1470.66,2902.23],[1470.0,2895.0],[1724.12,1320.0],[1738.24,1320.0],[1752.35,1320.0],[1766.47,1320.0],[1780.59,1320.0],[1794.71,1320.0],[1808.82,1320.0],[1822.94,1320.0],[1837.06,1320.0],[1851.18,1320.0],[1865.29,1320.0],[1879.41,1320.0],[1893.53,1320.0],[1907.65,1320.0],[1921.76,1320.0],[1935.88,1320.0],[1950.0,1320.0],[1670.0,2180.0],[1660.0,2170.0],[1650.0,2160.0],[1640.0,2150.0],[1630.0,2140.0],[1620.0,2130.0],[1610.0,2120.0],[1600.0,2110.0],[1666.0,2190.0],[1652.0,2190.0],[1638.0,2190.0],[1624.0,2190.0],[1610.0,2190.0],[1596.0,2190.0],[1582.0,2190.0],[1568.0,2190.0],[1554.0,2190.0],[1540.0,2190.0],[1526.0,2190.0],[1512.0,2190.0],[1498.0,2190.0],[1484.0,2190.0],[1699.0,2190.0],[1718.0,2190.0],[1728.6,2189.03],[1738.39,2186.11],[1747.38,2181.25],[1755.56,2174.44],[1766.19,2163.81],[1776.83,2153.17],[1787.46,2142.54],[1798.1,2131.9],[1808.73,2121.27],[1819.37,2110.63],[1830.0,2100.0],[1450.63,1969.37],[1461.27,1958.73],[1471.9,1948.1],[1482.54,1937.46],[1493.17,1926.83],[1503.81,1916.19],[1514.44,1905.56],[1521.25,1897.38],[1526.11,1888.39],[1529.03,1878.6],[1530.0,1868.0],[1530.0,1849.0],[1440.0,1994.44],[1440.0,2008.87],[1440.0,2023.31],[1440.0,2037.74],[1440.0,2052.18],[1440.0,2066.61],[1440.0,2081.05],[1440.0,2095.48],[1440.0,2109.92],[1440.0,2124.35],[1440.0,2138.79],[1440.94,2149.01],[1443.75,2158.45],[1448.44,2167.11],[1455.0,2175.0],[1425.37,1980.0],[1410.74,1980.0],[1396.11,1980.0],[1381.47,1980.0],[1366.84,1980.0],[1352.21,1980.0],[1337.58,1980.0],[1322.95,1980.0],[1308.32,1980.0],[1293.68,1980.0],[1279.05,1980.0],[1264.42,1980.0],[1249.79,1980.0],[1235.16,1980.0],[1220.53,1980.0],[1205.89,1980.0],[1191.26,1980.0],[1176.63,1980.0],[1162.0,1980.0],[1151.4,1980.97],[1141.61,1983.89],[1132.62,1988.75],[1124.44,1995.56],[1113.33,2006.67],[1102.22,2017.78],[1091.11,2028.89],[1800.0,1934.31],[1800.0,1948.62],[1800.0,1962.93],[1800.0,1977.24],[1800.0,1991.55],[1800.0,2005.86],[1800.0,2020.17],[1800.0,2034.48],[1800.0,2048.79],[1800.94,2059.01],[1803.75,2068.45],[1808.44,2077.11],[1815.0,2085.0],[1560.0,2715.0],[1559.34,2707.77],[1557.35,2701.1],[1554.03,2694.97],[1549.39,2689.39],[1539.45,2679.45],[1529.5,2669.5],[1519.56,2659.56],[1509.61,2649.61],[1499.67,2639.67],[1489.72,2629.72],[1479.78,2619.78],[1469.83,2609.83],[1459.89,2599.89],[1449.94,2589.94],[1560.0,2745.0],[1560.0,2760.0],[1560.0,2775.0],[1560.0,2790.0],[1650.0,3257.0],[1650.0,3274.0],[1650.0,3291.0],[1650.0,3308.0],[1650.97,3318.6],[1653.89,3328.39],[1658.75,3337.38],[1665.56,3345.56],[1676.67,3356.67],[1687.78,3367.78],[1698.89,3378.89],[1140.0,2895.71],[1140.0,2881.43],[1140.0,2867.14],[1140.0,2852.86],[1140.0,2838.57],[1140.0,2824.29],[1140.0,2810.0],[1140.0,2795.71],[1140.0,2781.43],[1140.0,2767.14],[1140.0,2752.86],[1140.0,2738.57],[1140.0,2724.29],[1140.0,2710.0],[1140.0,2695.71],[1140.0,2681.43],[1140.0,2667.14],[1140.0,2652.86],[1140.0,2638.57],[1140.0,2624.29],[1119.92,2529.92],[1129.85,2539.85],[1139.77,2549.77],[1149.7,2559.7],[1159.62,2569.62],[1169.55,2579.55],[1179.47,2589.47],[1189.39,2599.39],[1194.97,2604.03],[1201.1,2607.35],[1207.77,2609.34],[1215.0,2610.0],[1520.0,1820.0],[1510.0,1810.0],[1500.0,1800.0],[1490.0,1790.0],[1480.0,1780.0],[1470.0,1770.0],[1460.0,1760.0],[1450.0,1750.0],[1440.0,1740.0],[1430.0,1730.0],[1420.0,1720.0],[1410.0,1710.0],[1400.0,1700.0],[1390.0,1690.0],[1380.0,1680.0],[1370.0,1670.0],[1360.0,1660.0],[1350.0,1650.0],[1340.0,1640.0],[1330.0,1630.0],[1575.0,2100.0],[1567.77,2100.66],[1561.1,2102.65],[1554.97,2105.97],[1549.39,2110.61],[1539.47,2120.53],[1529.55,2130.45],[1519.62,2140.38],[1509.7,2150.3],[1499.77,2160.23],[1489.85,2170.15],[1479.92,2180.08],[1630.0,1600.0],[1640.0,1610.0],[1650.0,1620.0],[1660.0,1630.0],[1670.0,1640.0],[1680.0,1650.0],[1690.0,1660.0],[1700.0,1670.0],[1605.37,1590.0],[1590.73,1590.0],[1576.1,1590.0],[1561.46,1590.0],[1546.83,1590.0],[1532.19,1590.0],[1517.56,1590.0],[1502.92,1590.0],[1488.29,1590.0],[1473.65,1590.0],[1459.02,1590.0],[1444.39,1590.0],[1429.75,1590.0],[1415.12,1590.0],[1400.48,1590.0],[1385.85,1590.0],[1371.21,1590.0],[1360.99,1590.94],[1351.55,1593.75],[1342.89,1598.44],[1335.0,1605.0],[870,1620],[885.0,1620.0],[900.0,1620.0],[915.0,1620.0],[930.0,1620.0],[945.0,1620.0],[960.0,1620.0],[975.0,1620.0],[990.0,1620.0],[1005.0,1620.0],[1020.0,1620.0],[1035.0,1620.0],[1650.0,3465.0],[1650.66,3457.77],[1652.65,3451.1],[1655.97,3444.97],[1660.61,3439.39],[1672.95,3427.05],[1685.3,3414.7],[1697.65,3402.35],[1650.0,3465.69],[1650.0,3451.38],[1650.0,3437.07],[1650.0,3422.76],[1650.0,3408.45],[1650.0,3394.14],[1650.0,3379.83],[1650.0,3365.52],[1650.0,3351.21],[1649.06,3340.99],[1646.25,3331.55],[1641.56,3322.89],[1635.0,3315.0],[1425.56,2580.0],[1411.13,2580.0],[1396.69,2580.0],[1382.26,2580.0],[1367.82,2580.0],[1353.39,2580.0],[1338.95,2580.0],[1324.52,2580.0],[1310.08,2580.0],[1295.65,2580.0],[1281.21,2580.0],[1270.99,2580.94],[1261.55,2583.75],[1252.89,2588.44],[1245.0,2595.0],[1680.0,4275.0],[1680.0,4260.0],[1680.0,4245.0],[1680.0,4230.0],[1680.0,4215.0],[1155.0,2610.0],[1170.0,2610.0],[1185.0,2610.0],[1200.0,2610.0],[1310.0,1630.0],[1300.0,1640.0],[1290.0,1650.0],[1280.0,1660.0],[1270.0,1670.0],[1260.0,1680.0],[1250.0,1690.0],[1240.0,1700.0],[1305.79,1620.0],[1291.58,1620.0],[1277.37,1620.0],[1263.16,1620.0],[1248.95,1620.0],[1234.74,1620.0],[1220.53,1620.0],[1206.32,1620.0],[1192.11,1620.0],[1177.89,1620.0],[1163.68,1620.0],[1149.47,1620.0],[1135.26,1620.0],[1121.05,1620.0],[1106.84,1620.0],[1092.63,1620.0],[1078.42,1620.0],[1064.21,1620.0],[1065.54,2040.0],[1051.08,2040.0],[1036.62,2040.0],[1022.15,2040.0],[1007.69,2040.0],[993.23,2040.0],[978.77,2040.0],[964.31,2040.0],[949.85,2040.0],[935.38,2040.0],[920.92,2040.0],[906.46,2040.0],[892.0,2040.0],[881.4,2040.97],[871.61,2043.89],[862.62,2048.75],[854.44,2055.56],[843.33,2066.67],[832.22,2077.78],[821.11,2088.89],[1470.0,3464.18],[1470.0,3478.37],[1470.0,3492.55],[1470.0,3506.74],[1470.0,3520.92],[1470.0,3535.1],[1470.0,3549.29],[1470.0,3563.47],[1470.0,3577.66],[1470.0,3591.84],[1470.0,3606.03],[1470.0,3620.21],[1470.0,3634.39],[1470.0,3648.58],[1470.0,3662.76],[1470.0,3676.95],[1470.0,3691.13],[1470.0,3705.31],[1470.0,3719.5],[1470.0,3733.68],[1470.0,3747.87],[1470.0,3762.05],[1470.0,3776.23],[1470.0,3790.42],[1470.0,3804.6],[1470.0,3818.79],[1469.06,3829.01],[1466.25,3838.45],[1461.56,3847.11],[1455.0,3855.0],[1571.11,3408.89],[1582.22,3397.78],[1593.33,3386.67],[1604.44,3375.56],[1611.25,3367.38],[1616.11,3358.39],[1619.03,3348.6],[1620.0,3338.0],[1620.0,3319.0],[1935.0,2010.0],[1927.77,2010.66],[1921.1,2012.65],[1914.97,2015.97],[1909.39,2020.61],[1899.47,2030.53],[1889.55,2040.45],[1879.62,2050.38],[1869.7,2060.3],[1859.77,2070.23],[1849.85,2080.15],[1839.92,2090.08]],"edges":[[0,1,0,1],[1,2,0,1],[2,3,0,1],[0,4,0,1],[4,5,0,1],[5,6,0,1],[6,7,0,1],[0,8,2,0],[8,9,2,0],[9,10,2,0],[10,11,2,0],[11,12,2,0],[12,13,2,0],[13,14,2,0],[14,15,2,0],[15,16,2,0],[16,17,2,0],[17,7,2,0],[18,19,1,1],[19,20,1,1],[20,21,1,1],[21,22,1,1],[22,23,1,1],[23,24,1,1],[24,25,1,1],[25,26,1,1],[26,27,1,1],[27,28,1,1],[28,29,1,1],[29,30,1,1],[30,31,1,1],[31,32,1,1],[32,33,1,1],[33,34,1,1],[18,35,1,1],[35,36,1,1],[36,37,1,1],[37,38,1,1],[38,39,1,1],[39,40,1,1],[40,41,1,1],[41,42,1,1],[42,43,1,1],[43,44,1,1],[44,45,1,1],[45,46,1,1],[46,47,1,1],[47,48,1,1],[48,49,1,1],[49,50,1,1],[50,51,1,1],[51,52,1,1],[52,53,1,1],[53,54,1,1],[54,55,1,1],[55,56,1,1],[56,57,1,1],[57,58,1,1],[58,59,1,1],[59,60,1,1],[60,61,1,1],[61,62,1,1],[62,63,1,1],[18,64,2,0],[64,65,2,0],[65,66,2,0],[66,67,2,0],[67,68,2,0],[68,69,2,0],[69,70,2,0],[70,71,2,0],[71,72,2,0],[73,74,1,1],[74,75,1,1],[75,76,1,1],[76,77,1,1],[77,78,1,1],[78,79,1,1],[73,80,1,1],[80,81,1,1],[81,82,1,1],[82,83,1,1],[83,84,1,1],[84,85,1,1],[85,86,1,1],[86,87,1,1],[87,88,1,1],[88,89,1,1],[89,90,1,1],[90,91,1,1],[73,74,2,0],[74,75,2,0],[75,76,2,0],[76,77,2,0],[77,78,2,0],[78,79,2,0],[79,92,2,0],[92,93,2,0],[93,94,2,0],[94,95,2,0],[73,96,2,0],[96,97,2,0],[97,98,2,0],[98,99,2,0],[99,100,2,0],[100,101,2,0],[101,102,2,0],[102,103,2,0],[103,104,2,0],[105,106,1,1],[106,107,1,1],[107,108,1,1],[108,109,1,1],[109,110,1,1],[110,111,1,1],[111,112,1,1],[112,113,1,1],[113,114,1,1],[114,115,1,1],[115,116,1,1],[116,117,1,1],[117,118,1,1],[118,119,1,1],[119,120,1,1],[120,121,1,1],[121,122,1,1],[122,123,1,1],[123,124,1,1],[124,125,1,1],[125,126,1,1],[126,127,1,1],[105,128,0,1],[128,129,0,1],[129,130,0,1],[130,131,0,1],[131,132,0,1],[132,133,0,1],[133,134,0,1],[134,135,0,1],[135,136,0,1],[136,137,0,1],[137,138,0,1],[138,139,0,1],[139,140,0,1],[140,141,0,1],[141,142,0,1],[142,143,0,1],[143,144,0,1],[144,145,0,1],[145,146,0,1],[146,147,0,1],[105,148,2,0],[148,149,2,0],[149,150,2,0],[150,151,2,0],[151,152,2,0],[152,153,2,0],[153,154,2,0],[154,155,2,0],[155,156,2,0],[156,157,2,0],[157,158,2,0],[158,159,2,0],[159,160,2,0],[105,161,2,0],[161,162,2,0],[162,163,2,0],[163,164,2,0],[164,165,2,0],[165,166,2,0],[166,167,2,0],[167,168,2,0],[168,169,2,0],[169,170,2,0],[170,171,2,0],[171,172,2,0],[105,173,2,0],[173,174,2,0],[174,175,2,0],[175,176,2,0],[176,177,2,0],[177,178,2,0],[178,179,2,0],[179,180,2,0],[180,181,2,0],[181,182,2,0],[182,183,2,0],[183,184,2,0],[184,185,2,0],[185,186,2,0],[186,187,2,0],[187,188,2,0],[188,189,2,0],[189,190,2,0],[190,172,2,0],[191,192,1,0],[192,193,1,0],[193,194,1,0],[194,195,1,0],[195,196,1,0],[196,197,1,0],[191,198,1,0],[198,199,1,0],[199,200,1,0],[200,201,1,0],[201,202,1,0],[202,203,1,0],[203,204,1,0],[204,205,1,0],[205,206,1,0],[206,207,1,0],[207,208,1,0],[208,209,1,0],[209,210,1,0],[210,211,1,0],[211,212,1,0],[212,213,1,0],[213,214,1,0],[214,215,1,0],[215,216,1,0],[216,217,1,0],[217,218,1,0],[218,219,1,0],[219,220,1,0],[220,221,1,0],[221,222,1,0],[222,223,1,0],[223,224,1,0],[191,225,1,0],[225,226,1,0],[226,227,1,0],[227,228,1,0],[228,229,1,0],[229,230,1,0],[230,231,1,0],[231,232,1,0],[232,233,1,0],[233,234,1,0],[234,235,1,0],[235,236,1,0],[236,237,1,0],[237,238,1,0],[238,239,1,0],[239,240,1,0],[240,241,1,0],[241,242,1,0],[191,243,1,0],[243,244,1,0],[244,245,1,0],[245,246,1,0],[246,247,1,0],[247,248,1,0],[249,250,1,0],[250,251,1,0],[251,252,1,0],[252,253,1,0],[253,254,1,0],[254,255,1,0],[255,256,1,0],[256,257,1,0],[257,258,1,0],[258,259,1,0],[260,261,2,0],[261,262,2,0],[262,263,2,0],[263,264,2,0],[264,265,2,0],[265,266,2,0],[266,267,2,0],[267,268,2,0],[268,269,2,0],[260,270,2,0],[270,271,2,0],[271,272,2,0],[272,273,2,0],[273,274,2,0],[274,95,2,0],[260,275,2,0],[275,276,2,0],[276,277,2,0],[277,278,2,0],[278,279,2,0],[279,280,2,0],[280,281,2,0],[281,282,2,0],[282,79,2,0],[283,284,0,1],[284,285,0,1],[285,286,0,1],[286,287,0,1],[287,288,0,1],[288,289,0,1],[289,290,0,1],[290,291,0,1],[291,292,0,1],[292,293,0,1],[293,294,0,1],[294,295,0,1],[295,296,0,1],[296,297,0,1],[297,298,0,1],[298,299,0,1],[299,300,0,1],[300,301,0,1],[301,302,0,1],[302,303,0,1],[303,304,0,1],[304,305,0,1],[305,306,0,1],[306,307,0,1],[307,308,0,1],[308,309,0,1],[309,310,0,1],[283,311,0,1],[311,312,0,1],[312,313,0,1],[313,314,0,1],[314,315,0,1],[315,316,0,1],[316,317,0,1],[317,318,0,1],[318,319,0,1],[319,320,0,1],[320,321,0,1],[321,322,0,1],[322,323,0,1],[323,324,0,1],[324,325,0,1],[325,127,0,1],[283,326,2,0],[326,327,2,0],[327,328,2,0],[328,329,2,0],[329,330,2,0],[330,331,2,0],[331,332,2,0],[332,333,2,0],[333,334,2,0],[334,335,2,0],[335,336,2,0],[336,337,2,0],[337,338,2,0],[338,339,2,0],[339,340,2,0],[283,341,2,0],[341,342,2,0],[342,343,2,0],[343,344,2,0],[344,345,2,0],[345,346,2,0],[346,347,2,0],[347,348,2,0],[348,349,2,0],[349,350,2,0],[350,351,2,0],[351,352,2,0],[352,353,2,0],[353,354,2,0],[354,355,2,0],[355,356,2,0],[356,357,2,0],[357,358,2,0],[358,359,2,0],[359,360,2,0],[360,340,2,0],[248,361,0,0],[361,362,0,0],[362,363,0,0],[363,364,0,0],[364,365,0,0],[365,366,0,0],[366,367,0,0],[367,368,0,0],[368,369,0,0],[369,370,0,0],[370,371,0,0],[371,372,0,0],[372,373,0,0],[373,242,0,0],[248,374,0,0],[374,375,0,0],[375,376,0,0],[376,377,0,0],[377,378,0,0],[378,379,0,0],[379,380,0,0],[380,381,0,0],[381,382,0,0],[382,383,0,0],[383,384,0,0],[384,385,0,0],[385,197,0,0],[386,387,1,1],[387,388,1,1],[388,389,1,1],[389,390,1,1],[390,391,1,1],[391,392,1,1],[386,393,1,1],[393,394,1,1],[394,395,1,1],[395,396,1,1],[396,397,1,1],[397,398,1,1],[398,399,1,1],[386,400,2,0],[400,401,2,0],[401,402,2,0],[402,403,2,0],[403,404,2,0],[404,405,2,0],[405,406,2,0],[406,407,2,0],[407,408,2,0],[408,409,2,0],[409,410,2,0],[410,411,2,0],[411,412,2,0],[412,413,2,0],[413,414,2,0],[414,415,2,0],[415,416,2,0],[416,417,2,0],[417,418,2,0],[418,419,2,0],[419,420,2,0],[420,421,2,0],[421,422,2,0],[422,91,2,0],[386,423,2,0],[423,424,2,0],[424,425,2,0],[425,426,2,0],[426,427,2,0],[427,428,2,0],[428,429,2,0],[429,430,2,0],[430,431,2,0],[431,432,2,0],[432,433,2,0],[433,434,2,0],[434,435,2,0],[435,436,2,0],[436,437,2,0],[437,438,2,0],[438,439,2,0],[439,440,2,0],[440,441,2,0],[441,442,2,0],[442,443,2,0],[443,444,2,0],[386,393,2,0],[393,394,2,0],[394,395,2,0],[395,396,2,0],[396,397,2,0],[397,445,2,0],[445,446,2,0],[446,447,2,0],[447,448,2,0],[448,449,2,0],[449,450,2,0],[450,451,2,0],[452,453,0,1],[453,454,0,1],[454,455,0,1],[455,456,0,1],[456,457,0,1],[457,458,0,1],[458,459,0,1],[459,460,0,1],[460,461,0,1],[461,462,0,1],[462,463,0,1],[463,464,0,1],[464,465,0,1],[465,466,0,1],[466,467,0,1],[467,468,0,1],[452,469,0,1],[469,470,0,1],[470,471,0,1],[471,472,0,1],[472,473,0,1],[473,474,0,1],[474,475,0,1],[475,476,0,1],[452,477,2,0],[477,478,2,0],[478,479,2,0],[479,480,2,0],[480,481,2,0],[481,482,2,0],[482,483,2,0],[483,484,2,0],[484,485,2,0],[485,486,2,0],[486,487,2,0],[487,488,2,0],[488,489,2,0],[489,490,2,0],[490,491,2,0],[491,492,2,0],[492,493,2,0],[493,494,2,0],[494,495,2,0],[452,496,2,0],[496,497,2,0],[497,498,2,0],[498,499,2,0],[499,500,2,0],[500,501,2,0],[501,502,2,0],[502,503,2,0],[503,504,2,0],[504,505,2,0],[505,506,2,0],[506,507,2,0],[507,508,2,0],[508,509,2,0],[509,510,2,0],[510,511,2,0],[511,512,2,0],[512,513,2,0],[513,514,2,0],[514,515,2,0],[515,516,2,0],[516,310,2,0],[452,517,2,0],[517,518,2,0],[518,519,2,0],[519,520,2,0],[520,521,2,0],[521,522,2,0],[522,523,2,0],[523,524,2,0],[524,525,2,0],[525,526,2,0],[526,527,2,0],[527,528,2,0],[528,529,2,0],[529,530,2,0],[530,531,2,0],[531,532,2,0],[532,533,2,0],[533,534,2,0],[534,535,2,0],[535,34,2,0],[536,537,1,0],[537,538,1,0],[538,539,1,0],[539,540,1,0],[540,541,1,0],[541,542,1,0],[536,543,1,0],[543,544,1,0],[544,545,1,0],[545,546,1,0],[546,547,1,0],[547,548,1,0],[548,549,1,0],[549,550,1,0],[536,537,1,0],[537,538,1,0],[538,539,1,0],[539,540,1,0],[540,541,1,0],[541,542,1,0],[536,551,1,0],[551,552,1,0],[552,553,1,0],[553,554,1,0],[554,555,1,0],[555,556,1,0],[556,557,1,0],[557,558,1,0],[558,559,1,0],[559,560,1,0],[560,561,1,0],[561,562,1,0],[444,563,1,1],[563,564,1,1],[564,565,1,1],[565,566,1,1],[566,567,1,1],[567,568,1,1],[568,569,1,1],[444,570,1,1],[570,571,1,1],[571,572,1,1],[572,573,1,1],[573,574,1,1],[574,575,1,1],[575,576,1,1],[576,577,1,1],[577,578,1,1],[578,579,1,1],[579,580,1,1],[580,581,1,1],[581,582,1,1],[582,583,1,1],[444,584,2,0],[584,585,2,0],[585,586,2,0],[586,587,2,0],[587,588,2,0],[588,589,2,0],[589,590,2,0],[590,591,2,0],[591,592,2,0],[592,593,2,0],[593,594,2,0],[594,595,2,0],[595,596,2,0],[596,597,2,0],[597,598,2,0],[598,599,2,0],[599,600,2,0],[600,601,2,0],[601,602,2,0],[602,603,2,0],[603,604,2,0],[604,605,2,0],[605,606,2,0],[606,607,2,0],[444,608,2,0],[608,609,2,0],[609,610,2,0],[610,611,2,0],[611,612,2,0],[612,613,2,0],[613,614,2,0],[614,615,2,0],[615,616,2,0],[616,617,2,0],[617,618,2,0],[618,619,2,0],[619,620,2,0],[620,621,2,0],[621,622,2,0],[622,623,2,0],[623,624,2,0],[624,625,2,0],[625,626,2,0],[626,627,2,0],[340,628,2,0],[628,629,2,0],[629,630,2,0],[630,631,2,0],[631,632,2,0],[632,633,2,0],[633,634,2,0],[635,636,1,0],[636,637,1,0],[637,638,1,0],[638,639,1,0],[639,640,1,0],[640,641,1,0],[641,642,1,0],[642,643,1,0],[643,644,1,0],[635,645,0,0],[645,646,0,0],[646,647,0,0],[647,648,0,0],[648,649,0,0],[649,650,0,0],[650,651,0,0],[651,652,0,0],[652,653,0,0],[653,654,0,0],[654,655,0,0],[655,656,0,0],[635,657,1,0],[657,658,1,0],[658,659,1,0],[659,660,1,0],[660,661,1,0],[661,662,1,0],[662,663,1,0],[663,664,1,0],[664,665,1,0],[665,666,1,0],[635,667,1,0],[667,668,1,0],[668,669,1,0],[669,670,1,0],[670,671,1,0],[671,672,1,0],[672,673,1,0],[673,674,1,0],[674,675,1,0],[675,676,1,0],[676,677,1,0],[677,678,1,0],[678,679,1,0],[680,681,0,0],[681,682,0,0],[682,683,0,0],[683,684,0,0],[684,685,0,0],[685,686,0,0],[687,688,1,0],[688,689,1,0],[689,690,1,0],[690,691,1,0],[691,692,1,0],[692,693,1,0],[694,695,1,0],[695,696,1,0],[696,697,1,0],[697,698,1,0],[698,699,1,0],[699,700,1,0],[700,701,1,0],[701,702,1,0],[702,703,1,0],[703,704,1,0],[704,705,1,0],[705,706,1,0],[706,707,1,0],[707,708,1,0],[708,709,1,0],[709,710,1,0],[710,711,1,0],[711,712,1,0],[694,713,1,0],[713,714,1,0],[714,715,1,0],[715,716,1,0],[716,717,1,0],[717,718,1,0],[718,719,1,0],[719,720,1,0],[720,721,1,0],[721,722,1,0],[722,723,1,0],[723,724,1,0],[694,725,1,0],[725,726,1,0],[726,727,1,0],[727,728,1,0],[728,729,1,0],[729,730,1,0],[730,731,1,0],[731,732,1,0],[732,733,1,0],[733,734,1,0],[734,735,1,0],[735,736,1,0],[736,737,1,0],[737,738,1,0],[694,739,0,0],[739,740,0,0],[740,741,0,0],[741,742,0,0],[742,743,0,0],[743,744,0,0],[744,745,0,0],[745,746,0,0],[746,747,0,0],[747,748,0,0],[748,749,0,0],[749,750,0,0],[750,751,0,0],[751,752,0,0],[752,753,0,0],[753,754,0,0],[754,755,0,0],[755,756,0,0],[756,757,0,0],[757,758,0,0],[758,759,0,0],[759,760,0,0],[760,761,0,0],[761,762,0,0],[762,259,0,0],[104,763,2,0],[763,764,2,0],[764,765,2,0],[765,766,2,0],[766,767,2,0],[767,768,2,0],[768,769,2,0],[769,770,2,0],[770,771,2,0],[771,772,2,0],[772,773,2,0],[773,774,2,0],[774,775,2,0],[775,776,2,0],[776,777,2,0],[777,778,2,0],[778,779,2,0],[779,780,2,0],[780,781,2,0],[781,782,2,0],[782,783,2,0],[783,91,2,0],[104,784,2,0],[784,785,2,0],[785,786,2,0],[786,787,2,0],[787,788,2,0],[788,789,2,0],[789,790,2,0],[790,791,2,0],[791,792,2,0],[792,793,2,0],[793,794,2,0],[794,795,2,0],[795,796,2,0],[796,797,2,0],[797,798,2,0],[798,799,2,0],[799,800,2,0],[800,801,2,0],[801,802,2,0],[802,803,2,0],[803,804,2,0],[804,805,2,0],[805,806,2,0],[806,807,2,0],[807,808,2,0],[808,809,2,0],[809,810,2,0],[811,812,0,1],[812,813,0,1],[813,814,0,1],[814,815,0,1],[815,816,0,1],[816,817,0,1],[811,818,0,1],[818,819,0,1],[819,820,0,1],[820,821,0,1],[821,822,0,1],[822,823,0,1],[823,824,0,1],[824,825,0,1],[825,826,0,1],[811,827,0,0],[827,828,0,0],[828,829,0,0],[829,830,0,0],[830,831,0,0],[831,832,0,0],[832,833,0,0],[833,834,0,0],[834,562,0,0],[835,836,1,0],[836,837,1,0],[837,838,1,0],[838,839,1,0],[839,840,1,0],[840,841,1,0],[841,842,1,0],[842,843,1,0],[843,844,1,0],[844,845,1,0],[845,846,1,0],[846,847,1,0],[847,848,1,0],[848,849,1,0],[849,850,1,0],[850,851,1,0],[851,852,1,0],[852,853,1,0],[853,854,1,0],[854,855,1,0],[855,856,1,0],[856,857,1,0],[835,858,1,0],[858,859,1,0],[859,860,1,0],[860,861,1,0],[861,862,1,0],[862,863,1,0],[863,864,1,0],[864,865,1,0],[865,866,1,0],[866,867,1,0],[867,868,1,0],[868,869,1,0],[869,870,1,0],[870,871,1,0],[871,872,1,0],[872,873,1,0],[873,874,1,0],[874,875,1,0],[875,876,1,0],[876,877,1,0],[877,878,1,0],[878,879,1,0],[879,880,1,0],[880,881,1,0],[881,882,1,0],[882,883,1,0],[883,884,1,0],[884,885,1,0],[885,886,1,0],[886,887,1,0],[887,888,1,0],[888,889,1,0],[889,890,1,0],[890,891,1,0],[891,892,1,0],[892,893,1,0],[893,894,1,0],[835,895,0,0],[895,896,0,0],[896,897,0,0],[897,898,0,0],[898,899,0,0],[899,900,0,0],[900,901,0,0],[901,902,0,0],[902,903,0,0],[903,904,0,0],[904,905,0,0],[905,906,0,0],[906,907,0,0],[907,908,0,0],[908,909,0,0],[909,910,0,0],[910,911,0,0],[911,912,0,0],[912,913,0,0],[913,914,0,0],[914,915,0,0],[915,916,0,0],[916,917,0,0],[917,918,0,0],[918,919,0,0],[919,920,0,0],[920,921,0,0],[91,922,1,1],[922,923,1,1],[923,924,1,1],[924,925,1,1],[925,926,1,1],[926,927,1,1],[91,928,2,0],[928,929,2,0],[929,930,2,0],[930,931,2,0],[931,932,2,0],[932,933,2,0],[933,934,2,0],[934,935,2,0],[935,936,2,0],[936,937,2,0],[937,938,2,0],[938,939,2,0],[939,940,2,0],[940,941,2,0],[941,942,2,0],[942,943,2,0],[943,944,2,0],[944,392,2,0],[562,945,1,0],[945,946,1,0],[946,947,1,0],[947,948,1,0],[948,949,1,0],[949,950,1,0],[950,951,1,0],[951,952,1,0],[952,953,1,0],[953,954,1,0],[954,955,1,0],[955,956,1,0],[562,957,1,0],[957,958,1,0],[958,959,1,0],[959,960,1,0],[960,961,1,0],[961,962,1,0],[962,963,1,0],[963,964,1,0],[964,965,1,0],[965,817,1,0],[679,966,1,0],[966,967,1,0],[967,968,1,0],[968,969,1,0],[969,970,1,0],[970,971,1,0],[971,972,1,0],[972,973,1,0],[973,974,1,0],[974,975,1,0],[975,976,1,0],[976,977,1,0],[977,978,1,0],[978,979,1,0],[679,980,1,0],[980,981,1,0],[981,982,1,0],[982,983,1,0],[983,984,1,0],[984,985,1,0],[985,986,1,0],[986,987,1,0],[987,988,1,0],[988,989,1,0],[989,990,1,0],[990,991,1,0],[991,992,1,0],[992,993,1,0],[679,994,1,0],[994,995,1,0],[995,996,1,0],[996,997,1,0],[997,998,1,0],[998,999,1,0],[999,1000,1,0],[1000,1001,1,0],[1001,1002,1,0],[1002,1003,1,0],[1003,1004,1,0],[1004,1005,1,0],[679,1006,1,0],[1006,1007,1,0],[1007,1008,1,0],[1008,1009,1,0],[1009,1010,1,0],[1010,1011,1,0],[1011,1012,1,0],[1012,1013,1,0],[1013,1014,1,0],[1014,1015,1,0],[1015,1016,1,0],[1016,1017,1,0],[1017,656,1,0],[1018,275,1,1],[275,260,1,1],[260,1019,1,1],[1019,1020,1,1],[1020,1021,1,1],[1021,1022,1,1],[1018,1023,1,1],[1023,1024,1,1],[1024,274,1,1],[274,95,1,1],[95,1025,1,1],[1025,147,1,1],[1018,1026,2,0],[1026,1027,2,0],[1027,1028,2,0],[1028,1029,2,0],[1029,1030,2,0],[1030,1031,2,0],[1031,1032,2,0],[1032,1033,2,0],[1033,1034,2,0],[1034,1035,2,0],[1035,1036,2,0],[1036,1037,2,0],[1037,1038,2,0],[1038,1039,2,0],[1039,1040,2,0],[1040,1041,2,0],[1041,172,2,0],[1042,1043,1,0],[1043,1044,1,0],[1044,1045,1,0],[1045,1046,1,0],[1046,1047,1,0],[1047,1048,1,0],[1048,1049,1,0],[1049,1050,1,0],[1050,1051,1,0],[1051,1052,1,0],[1052,1053,1,0],[1053,1054,1,0],[1054,1055,1,0],[1055,1056,1,0],[1056,1057,1,0],[1057,1058,1,0],[1058,1059,1,0],[1059,1060,1,0],[1060,1061,1,0],[1061,1062,1,0],[1062,1063,1,0],[1063,1064,1,0],[1064,1065,1,0],[1065,1066,1,0],[1066,956,1,0],[1042,1067,1,0],[1067,1068,1,0],[1068,1069,1,0],[1069,1070,1,0],[1070,1071,1,0],[1071,1072,1,0],[1072,1073,1,0],[1073,1074,1,0],[1074,724,1,0],[1042,1075,1,0],[1075,1076,1,0],[1076,1077,1,0],[1077,1078,1,0],[1078,1079,1,0],[1079,1080,1,0],[1080,1081,1,0],[1081,1082,1,0],[1082,1083,1,0],[1083,1084,1,0],[1084,1085,1,0],[1085,1086,1,0],[1086,1087,1,0],[1087,1088,1,0],[1088,1089,1,0],[1089,1090,1,0],[1090,1091,1,0],[1091,1092,1,0],[1092,1093,1,0],[1093,1094,1,0],[1094,1095,1,0],[1095,1096,1,0],[1096,259,1,0],[1042,1097,1,0],[1097,1098,1,0],[1098,1099,1,0],[1099,1100,1,0],[1100,1101,1,0],[1101,1102,1,0],[1102,1103,1,0],[1103,1104,1,0],[1104,1105,1,0],[1105,1106,1,0],[1106,1107,1,0],[1107,1108,1,0],[1108,1109,1,0],[1109,1110,1,0],[1110,1111,1,0],[1111,1112,1,0],[1112,1113,1,0],[1113,1114,1,0],[1114,1115,1,0],[1115,1116,1,0],[1116,1117,1,0],[1117,1118,1,0],[1118,1119,1,0],[1119,1120,1,0],[1120,1121,1,0],[1121,1122,1,0],[1122,1123,1,0],[399,1124,1,1],[1124,1125,1,1],[1125,1126,1,1],[1126,1127,1,1],[1127,1128,1,1],[1128,1129,1,1],[1129,1130,1,1],[1130,1131,1,1],[1131,1132,1,1],[1132,1133,1,1],[1133,1134,1,1],[1134,1135,1,1],[1135,1136,1,1],[1136,1137,1,1],[1137,1138,1,1],[1138,1139,1,1],[1139,1140,1,1],[1140,1141,1,1],[1141,1142,1,1],[1142,1143,1,1],[1143,1144,1,1],[1144,1145,1,1],[1145,1146,1,1],[399,1147,2,0],[1147,1148,2,0],[1148,1149,2,0],[1149,1150,2,0],[1150,1151,2,0],[1151,1152,2,0],[1152,1153,2,0],[1153,1154,2,0],[1154,1155,2,0],[1155,1156,2,0],[1156,1157,2,0],[1157,1158,2,0],[1158,1159,2,0],[1159,1160,2,0],[1160,1161,2,0],[1161,1162,2,0],[1162,1163,2,0],[1163,1164,2,0],[1164,1165,2,0],[1165,1166,2,0],[1166,1167,2,0],[1167,1168,2,0],[1168,1169,2,0],[1169,1170,2,0],[1170,1171,2,0],[1171,1172,2,0],[1172,1173,2,0],[1173,1174,2,0],[1174,1146,2,0],[399,1175,2,0],[1175,1176,2,0],[1176,1177,2,0],[1177,1178,2,0],[1178,1179,2,0],[1179,1180,2,0],[1180,1181,2,0],[1181,1182,2,0],[1182,1183,2,0],[1183,1184,2,0],[1184,1185,2,0],[1185,1186,2,0],[1186,1187,2,0],[1187,1188,2,0],[1188,1189,2,0],[1189,1190,2,0],[1190,607,2,0],[738,1191,1,0],[1191,1192,1,0],[1192,1193,1,0],[1193,1194,1,0],[1194,1195,1,0],[1195,1196,1,0],[1196,1197,1,0],[738,1198,1,0],[1198,1199,1,0],[1199,1200,1,0],[1200,1201,1,0],[1201,1202,1,0],[1202,1203,1,0],[1203,1204,1,0],[1204,1205,1,0],[1205,1206,1,0],[1206,1207,1,0],[1207,1208,1,0],[1208,1209,1,0],[1209,1210,1,0],[1210,1211,1,0],[1211,712,1,0],[894,1212,1,0],[1212,1213,1,0],[1213,1214,1,0],[1214,1215,1,0],[1215,1216,1,0],[1216,1217,1,0],[894,1212,0,0],[1212,1213,0,0],[1213,1214,0,0],[1214,1215,0,0],[1215,1216,0,0],[1216,1217,0,0],[476,1218,1,1],[1218,1219,1,1],[1219,1220,1,1],[1220,1221,1,1],[476,1222,1,1],[1222,1223,1,1],[1223,1224,1,1],[1224,1225,1,1],[1225,1226,1,1],[1226,1227,1,1],[1227,1228,1,1],[1228,1229,1,1],[1229,1230,1,1],[1230,1231,1,1],[1231,1232,1,1],[1232,1233,1,1],[1233,1234,1,1],[1234,1235,1,1],[1235,1236,1,1],[1236,1237,1,1],[1237,1238,1,1],[1238,34,1,1],[476,1239,2,0],[1239,1240,2,0],[1240,1241,2,0],[1241,1242,2,0],[1242,1243,2,0],[1243,1244,2,0],[1244,1245,2,0],[1245,1246,2,0],[1246,1247,2,0],[1247,1248,2,0],[1248,1249,2,0],[1249,1250,2,0],[1250,1251,2,0],[1251,495,2,0],[63,1252,1,1],[1252,1253,1,1],[1253,1254,1,1],[1254,1255,1,1],[1255,1256,1,1],[1256,1257,1,1],[1257,1258,1,1],[1258,810,1,1],[63,1259,2,0],[1259,1260,2,0],[1260,1261,2,0],[1261,1262,2,0],[1262,1263,2,0],[1263,1264,2,0],[1264,1265,2,0],[1265,1266,2,0],[1266,1267,2,0],[1267,1268,2,0],[1268,1269,2,0],[1269,1270,2,0],[1270,1271,2,0],[1271,1272,2,0],[1272,1273,2,0],[1273,1274,2,0],[1274,1275,2,0],[1275,1276,2,0],[1276,1277,2,0],[1277,1278,2,0],[1278,1279,2,0],[1279,72,2,0],[810,1280,0,1],[1280,1281,0,1],[1281,1282,0,1],[1282,1283,0,1],[1283,1284,0,1],[1284,1285,0,1],[1285,1286,0,1],[1286,1287,0,1],[1287,3,0,1],[810,1288,0,1],[1288,1289,0,1],[1289,1290,0,1],[1290,1291,0,1],[1291,1292,0,1],[1292,1293,0,1],[1293,1294,0,1],[1294,1295,0,1],[1295,1296,0,1],[1296,1297,0,1],[1297,1298,0,1],[1298,1299,0,1],[1299,1300,0,1],[1300,1301,0,1],[1301,1302,0,1],[1302,1303,0,1],[1303,1304,0,1],[1304,1305,0,1],[1305,1306,0,1],[1306,1307,0,1],[1307,269,0,1],[810,1308,2,0],[1308,1309,2,0],[1309,1310,2,0],[1310,1311,2,0],[1311,1312,2,0],[1312,1313,2,0],[1313,1314,2,0],[1314,1315,2,0],[1315,1316,2,0],[1316,1317,2,0],[1317,1318,2,0],[1318,1319,2,0],[1319,1320,2,0],[1320,72,2,0],[569,1321,0,1],[1321,1322,0,1],[1322,1323,0,1],[1323,1324,0,1],[1324,1325,0,1],[1325,1326,0,1],[1326,1327,0,1],[1327,1328,0,1],[1328,1329,0,1],[1329,1330,0,1],[1330,1331,0,1],[1331,1332,0,1],[1332,1333,0,1],[1333,1334,0,1],[1334,1335,0,1],[1335,1336,0,1],[1336,1337,0,1],[569,1338,2,0],[1338,1339,2,0],[1339,1340,2,0],[1340,1341,2,0],[1341,1342,2,0],[1342,1343,2,0],[1343,1344,2,0],[1344,1345,2,0],[1345,1346,2,0],[1346,1347,2,0],[1347,1348,2,0],[1348,1349,2,0],[1349,1350,2,0],[1350,1351,2,0],[1351,1352,2,0],[1352,1353,2,0],[1353,1354,2,0],[1354,1355,2,0],[1355,1356,2,0],[1356,1357,2,0],[1357,1358,2,0],[1358,1359,2,0],[1359,1337,2,0],[921,1360,1,0],[1360,1361,1,0],[1361,1362,1,0],[1362,1363,1,0],[1363,1364,1,0],[1364,1365,1,0],[1365,1366,1,0],[1366,1367,1,0],[1367,1368,1,0],[1368,1369,1,0],[1369,1370,1,0],[1370,1371,1,0],[1371,1372,1,0],[1372,1373,1,0],[1373,1123,1,0],[921,1374,1,0],[1374,1375,1,0],[1375,1376,1,0],[1376,1377,1,0],[1377,1378,1,0],[1378,1379,1,0],[1379,1380,1,0],[1380,1381,1,0],[1381,1382,1,0],[1382,1383,1,0],[1383,1384,1,0],[1384,1385,1,0],[1385,1386,1,0],[1386,1387,1,0],[583,1388,1,1],[1388,1389,1,1],[1389,1390,1,1],[1390,1391,1,1],[1391,1392,1,1],[1392,1393,1,1],[1393,1394,1,1],[1394,1395,1,1],[1395,1396,1,1],[1396,1397,1,1],[1397,1398,1,1],[1398,1399,1,1],[1399,1400,1,1],[1400,1401,1,1],[1401,1402,1,1],[1402,1403,1,1],[1403,1404,1,1],[1404,1405,1,1],[1405,1406,1,1],[1406,1407,1,1],[1407,607,1,1],[583,1408,2,0],[1408,1409,2,0],[1409,1410,2,0],[1410,1411,2,0],[1411,1412,2,0],[1412,1413,2,0],[1413,1414,2,0],[1414,1415,2,0],[1415,1416,2,0],[1416,1417,2,0],[1417,1418,2,0],[1418,1419,2,0],[1419,1420,2,0],[1420,1421,2,0],[1421,1422,2,0],[1422,1423,2,0],[1423,1424,2,0],[1424,1425,2,0],[1425,1426,2,0],[1426,1427,2,0],[1427,1428,2,0],[1428,1429,2,0],[1429,1430,2,0],[1430,1431,2,0],[1431,1432,2,0],[1432,1433,2,0],[1433,607,2,0],[1434,1435,1,0],[1435,1436,1,0],[1436,1437,1,0],[1437,1438,1,0],[1438,1439,1,0],[1439,1440,1,0],[1440,1441,1,0],[1441,1442,1,0],[1442,1443,1,0],[1443,1444,1,0],[1444,1445,1,0],[1445,259,1,0],[1434,1446,1,0],[1446,1447,1,0],[1447,1448,1,0],[1448,1449,1,0],[1449,1450,1,0],[1450,1451,1,0],[1451,1452,1,0],[1452,1453,1,0],[1453,1454,1,0],[1454,1455,1,0],[1455,1456,1,0],[1456,1457,1,0],[1457,1458,1,0],[1458,1459,1,0],[1459,1460,1,0],[1460,1461,1,0],[1461,1462,1,0],[1462,1463,1,0],[1463,1464,1,0],[1464,1465,1,0],[1465,1466,1,0],[1466,542,1,0],[1434,1435,1,0],[1435,1436,1,0],[1436,1437,1,0],[1437,1438,1,0],[1438,1439,1,0],[1439,1440,1,0],[1440,1441,1,0],[1441,1442,1,0],[1442,1443,1,0],[1443,1444,1,0],[1444,1445,1,0],[1445,259,1,0],[627,1467,2,0],[1467,1468,2,0],[1468,1469,2,0],[1469,1470,2,0],[1470,1471,2,0],[1471,1472,2,0],[1472,1473,2,0],[1473,1474,2,0],[1474,1475,2,0],[1475,1476,2,0],[1476,1477,2,0],[1477,1478,2,0],[1478,1479,2,0],[1479,1480,2,0],[1480,7,2,0],[627,1481,2,0],[1481,1482,2,0],[1482,1483,2,0],[1483,1484,2,0],[1484,1485,2,0],[1485,1486,2,0],[1486,1487,2,0],[1487,1337,2,0],[550,1488,0,0],[1488,1489,0,0],[1489,1490,0,0],[1490,1491,0,0],[1491,1492,0,0],[1492,1493,0,0],[1493,1494,0,0],[1494,1495,0,0],[1495,1496,0,0],[1496,817,0,0],[550,1497,0,0],[1497,1498,0,0],[1498,1499,0,0],[1499,1500,0,0],[1500,1501,0,0],[1501,1502,0,0],[1502,1503,0,0],[1503,1504,0,0],[1504,1505,0,0],[1505,1506,0,0],[1506,1507,0,0],[1507,1508,0,0],[1508,1509,0,0],[1509,1510,0,0],[1510,1511,0,0],[1511,1512,0,0],[1512,817,0,0],[550,1513,1,0],[1513,1514,1,0],[1514,1515,1,0],[1515,1516,1,0],[1516,1517,1,0],[1517,1518,1,0],[1518,1519,1,0],[1519,1520,1,0],[1520,1521,1,0],[1521,1522,1,0],[1522,1523,1,0],[1523,1524,1,0],[1524,817,1,0],[495,1525,1,1],[1525,1526,1,1],[1526,1527,1,1],[1527,1528,1,1],[1528,1529,1,1],[1529,1530,1,1],[1530,1531,1,1],[1531,1532,1,1],[1532,1533,1,1],[1533,1534,1,1],[495,1535,1,1],[1535,1536,1,1],[1536,1537,1,1],[1537,1538,1,1],[1538,1539,1,1],[1539,1540,1,1],[1540,1541,1,1],[1541,1542,1,1],[1542,1543,1,1],[1543,1544,1,1],[1544,1545,1,1],[1545,1546,1,1],[1546,1547,1,1],[1547,1548,1,1],[1548,1549,1,1],[1549,1550,1,1],[1550,1551,1,1],[1551,1221,1,1],[542,1552,1,0],[1552,1553,1,0],[1553,1554,1,0],[1554,1555,1,0],[1555,1556,1,0],[1556,1557,1,0],[1558,1559,0,0],[1559,1560,0,0],[1560,1561,0,0],[1561,1562,0,0],[1562,1563,0,0],[1563,644,0,0],[172,1564,1,1],[1564,1565,1,1],[1565,1566,1,1],[1566,1567,1,1],[1567,1568,1,1],[1568,1569,1,1],[1569,1570,1,1],[1570,1571,1,1],[1571,1572,1,1],[1572,1573,1,1],[1573,1574,1,1],[1574,1575,1,1],[1575,1576,1,1],[1576,1577,1,1],[1577,1578,1,1],[1578,1579,1,1],[1579,127,1,1],[172,1580,1,1],[1580,1581,1,1],[1581,1582,1,1],[1582,1583,1,1],[1583,1584,1,1],[1584,1585,1,1],[1585,160,1,1],[172,190,2,0],[190,1586,2,0],[1586,1587,2,0],[1587,1588,2,0],[1588,1589,2,0],[1589,1590,2,0],[1590,1591,2,0],[1591,1592,2,0],[1592,1593,2,0],[1593,1594,2,0],[1594,1595,2,0],[1595,1596,2,0],[1596,1597,2,0],[1597,1598,2,0],[1598,1599,2,0],[1599,1600,2,0],[1600,1601,2,0],[1601,1602,2,0],[1602,1603,2,0],[1603,1604,2,0],[1604,1605,2,0],[1605,1606,2,0],[1606,127,2,0],[172,1607,2,0],[1607,1608,2,0],[1608,1609,2,0],[1609,1610,2,0],[1610,1611,2,0],[1611,1612,2,0],[7,1613,0,1],[1613,1614,0,1],[1614,1615,0,1],[1615,1616,0,1],[1616,1617,0,1],[1617,1618,0,1],[1618,1619,0,1],[1619,1620,0,1],[1620,1621,0,1],[1621,1622,0,1],[1622,1623,0,1],[1623,1624,0,1],[1624,1625,0,1],[1625,1626,0,1],[1626,1627,0,1],[1627,1628,0,1],[1628,1629,0,1],[1629,1630,0,1],[1630,1631,0,1],[1631,1632,0,1],[1632,1633,0,1],[1633,1634,0,1],[1634,1337,0,1],[34,1635,1,1],[1635,1636,1,1],[1636,1637,1,1],[1637,1638,1,1],[1638,1639,1,1],[1639,1640,1,1],[1640,1641,1,1],[1641,1642,1,1],[1642,1643,1,1],[1643,1644,1,1],[1644,1645,1,1],[1645,1646,1,1],[1646,1647,1,1],[1647,1648,1,1],[1648,1649,1,1],[1649,1650,1,1],[1650,1651,1,1],[1651,1652,1,1],[1652,1653,1,1],[1653,1654,1,1],[1654,1655,1,1],[1655,1656,1,1],[1656,1657,1,1],[1657,1658,1,1],[1658,1659,1,1],[1659,1660,1,1],[1660,1661,1,1],[1661,1662,1,1],[1662,1663,1,1],[1663,1664,1,1],[1664,1665,1,1],[1665,1666,1,1],[1666,1667,1,1],[1667,1668,1,1],[1668,1669,1,1],[1669,1670,1,1],[1670,634,1,1],[34,1671,0,1],[1671,1672,0,1],[1672,1673,0,1],[1673,1674,0,1],[1674,1675,0,1],[1675,310,0,1],[34,1671,2,0],[1671,1672,2,0],[1672,1673,2,0],[1673,1674,2,0],[1674,1675,2,0],[1675,310,2,0],[310,1676,2,0],[1676,1677,2,0],[1677,1678,2,0],[1678,1679,2,0],[1679,1680,2,0],[1680,1681,2,0],[1681,1682,2,0],[1682,1683,2,0],[1683,1684,2,0],[1684,1685,2,0],[1685,1686,2,0],[1686,1687,2,0],[1687,1688,2,0],[1688,1689,2,0],[1689,72,2,0],[451,1690,1,1],[1690,1691,1,1],[1691,1692,1,1],[1692,1693,1,1],[1693,1694,1,1],[1694,927,1,1],[451,1695,1,1],[1695,1696,1,1],[1696,1697,1,1],[1697,1698,1,1],[1698,1699,1,1],[1699,392,1,1],[451,1700,2,0],[1700,1701,2,0],[1701,1702,2,0],[1702,1703,2,0],[1703,1704,2,0],[1704,1705,2,0],[1705,1706,2,0],[1706,1707,2,0],[1707,1708,2,0],[1708,1709,2,0],[1709,1710,2,0],[1710,927,2,0],[1711,1712,1,1],[1712,1713,1,1],[1713,1714,1,1],[1714,1715,1,1],[1715,1716,1,1],[1716,1717,1,1],[1717,1217,1,1],[1711,1718,1,1],[1718,1719,1,1],[1719,1720,1,1],[1720,1721,1,1],[1721,1722,1,1],[1722,1723,1,1],[1723,1724,1,1],[1724,1725,1,1],[1711,1726,0,1],[1726,1727,0,1],[1727,1728,0,1],[1728,1729,0,1],[1729,1730,0,1],[1730,1731,0,1],[1731,1732,0,1],[1732,1733,0,1],[1733,468,0,1],[1711,1734,2,0],[1734,1735,2,0],[1735,1736,2,0],[1736,1737,2,0],[1737,1738,2,0],[1738,1739,2,0],[1739,1740,2,0],[1740,1741,2,0],[1741,1742,2,0],[1742,1743,2,0],[1743,1744,2,0],[1744,1745,2,0],[1745,1746,2,0],[1746,1747,2,0],[644,1748,1,0],[1748,1749,1,0],[1749,1750,1,0],[1750,1751,1,0],[1751,1752,1,0],[1752,1753,1,0],[1753,1754,1,0],[1754,1755,1,0],[1755,993,1,0],[644,1756,1,0],[1756,1757,1,0],[1757,1758,1,0],[1758,1759,1,0],[1759,1760,1,0],[1760,1761,1,0],[1761,1762,1,0],[1762,1763,1,0],[1763,1764,1,0],[1764,1765,1,0],[1765,1766,1,0],[1766,666,1,0],[644,1767,1,0],[1767,1768,1,0],[1768,1769,1,0],[1769,1770,1,0],[1770,1771,1,0],[1771,1772,1,0],[1772,1773,1,0],[1773,1774,1,0],[1774,1775,1,0],[1775,1776,1,0],[1776,1777,1,0],[1777,686,1,0],[1778,1779,1,0],[1779,1780,1,0],[1780,1781,1,0],[1781,1782,1,0],[1782,1783,1,0],[1783,224,1,0],[686,1784,1,0],[1784,1785,1,0],[1785,1786,1,0],[1786,1787,1,0],[1787,1788,1,0],[1788,1789,1,0],[1789,1790,1,0],[1790,1791,1,0],[1791,1792,1,0],[1792,993,1,0],[686,1793,1,0],[1793,1794,1,0],[1794,1795,1,0],[1795,1796,1,0],[1796,1797,1,0],[1797,693,1,0],[1725,1798,1,1],[1798,1799,1,1],[1799,1800,1,1],[1800,1801,1,1],[1801,1802,1,1],[1802,1803,1,1],[1803,1804,1,1],[1804,1805,1,1],[1805,127,1,1],[1725,1806,2,0],[1806,1807,2,0],[1807,1808,2,0],[1808,1809,2,0],[1809,1810,2,0],[1810,1811,2,0],[1811,1812,2,0],[1812,1813,2,0],[1813,1814,2,0],[1814,1815,2,0],[1815,1816,2,0],[1816,1817,2,0],[1817,1818,2,0],[1818,1819,2,0],[1819,1820,2,0],[1820,468,2,0],[242,1821,1,0],[1821,1822,1,0],[1822,1823,1,0],[1823,1824,1,0],[1824,1825,1,0],[1825,1826,1,0],[1826,1827,1,0],[1827,1828,1,0],[1828,1829,1,0],[1829,1830,1,0],[1830,1831,1,0],[1831,1832,1,0],[1832,1833,1,0],[1833,1834,1,0],[1834,1835,1,0],[1835,1836,1,0],[1836,1837,1,0],[857,1838,0,0],[1838,1839,0,0],[1839,1840,0,0],[1840,1841,0,0],[1841,1842,0,0],[1842,1843,0,0],[1843,1844,0,0],[1844,1845,0,0],[1845,1005,0,0],[857,1846,1,0],[1846,1847,1,0],[1847,1848,1,0],[1848,1849,1,0],[1849,1850,1,0],[1850,1851,1,0],[1851,1852,1,0],[1852,1853,1,0],[1853,1854,1,0],[1854,1855,1,0],[1855,1856,1,0],[1856,1857,1,0],[1857,1858,1,0],[1858,1859,1,0],[1859,1123,1,0],[857,1860,1,0],[1860,1861,1,0],[1861,1862,1,0],[1862,1863,1,0],[1863,1864,1,0],[1864,1865,1,0],[1865,1866,1,0],[1866,1867,1,0],[1867,1868,1,0],[1868,1869,1,0],[1869,1870,1,0],[1870,1871,1,0],[1871,1872,1,0],[979,1873,0,0],[1873,1874,0,0],[1874,1875,0,0],[1875,1876,0,0],[1876,1877,0,0],[1877,1878,0,0],[1878,1879,0,0],[1879,1880,0,0],[1880,1881,0,0],[1881,1882,0,0],[1882,1883,0,0],[1883,1884,0,0],[1884,656,0,0],[979,1885,0,0],[1885,1886,0,0],[1886,1887,0,0],[1887,1888,0,0],[1888,1889,0,0],[1889,1890,0,0],[1890,1891,0,0],[1891,1892,0,0],[1892,1893,0,0],[1893,1894,0,0],[1894,1895,0,0],[1895,1896,0,0],[1896,1897,0,0],[1897,1898,0,0],[1898,1899,0,0],[1899,1123,0,0],[979,1900,1,0],[1900,1901,1,0],[1901,1902,1,0],[1902,1903,1,0],[1903,1904,1,0],[1904,1905,1,0],[1905,1906,1,0],[1906,1907,1,0],[1907,1908,1,0],[1908,1909,1,0],[1909,1910,1,0],[1910,1911,1,0],[1911,1912,1,0],[1912,1913,1,0],[1913,1914,1,0],[1914,1915,1,0],[1915,1916,1,0],[1916,1917,1,0],[1917,1918,1,0],[1918,1919,1,0],[1919,1920,1,0],[1920,1921,1,0],[1921,1922,1,0],[1922,1923,1,0],[1923,1924,1,0],[1924,1925,1,0],[1925,724,1,0],[993,1926,1,0],[1926,1927,1,0],[1927,1928,1,0],[1928,1929,1,0],[1929,1930,1,0],[1930,1931,1,0],[1931,1932,1,0],[1932,1933,1,0],[1933,1934,1,0],[1934,1935,1,0],[1935,1936,1,0],[1936,1937,1,0],[1937,1938,1,0],[1938,1872,1,0],[1747,1939,1,1],[1939,1940,1,1],[1940,1941,1,1],[1941,1942,1,1],[1942,1943,1,1],[1943,1944,1,1],[1944,1945,1,1],[1945,1946,1,1],[1946,1947,1,1],[1947,1948,1,1],[1948,1949,1,1],[1949,1950,1,1],[1950,1951,1,1],[1951,1952,1,1],[1952,1953,1,1],[1953,1387,1,1],[1747,1954,1,0],[1954,1955,1,0],[1955,1956,1,0],[1956,1957,1,0],[1957,1216,1,0],[1216,1217,1,0],[160,1958,1,1],[1958,1959,1,1],[1959,1960,1,1],[1960,1961,1,1],[1961,1962,1,1],[1962,1963,1,1],[1963,1964,1,1],[1964,1965,1,1],[1965,1966,1,1],[1966,1967,1,1],[1967,1968,1,1],[1968,147,1,1],[1221,1969,2,0],[1969,1970,2,0],[1970,1971,2,0],[1971,1972,2,0],[1972,1973,2,0],[1973,1974,2,0],[1974,1975,2,0],[1975,1976,2,0],[1976,1977,2,0],[1977,1978,2,0],[1978,1979,2,0],[1979,1980,2,0],[1980,1981,2,0],[1981,1982,2,0],[1982,1983,2,0],[1983,1984,2,0],[1984,1985,2,0],[1985,1986,2,0],[1986,1987,2,0],[1987,1988,2,0],[1988,826,2,0],[956,1989,1,0],[1989,1990,1,0],[1990,1991,1,0],[1991,1992,1,0],[1992,1993,1,0],[1993,1994,1,0],[1994,1995,1,0],[1995,1996,1,0],[1996,1997,1,0],[1997,1998,1,0],[1998,1999,1,0],[1999,2000,1,0],[2000,1534,1,0],[656,2001,1,0],[2001,2002,1,0],[2002,2003,1,0],[2003,2004,1,0],[2004,2005,1,0],[2005,2006,1,0],[2006,2007,1,0],[2007,2008,1,0],[2008,2009,1,0],[2009,2010,1,0],[2010,2011,1,0],[2011,2012,1,0],[2012,2013,1,0],[2013,2014,1,0],[2014,2015,1,0],[2015,2016,1,0],[2016,2017,1,0],[2017,2018,1,0],[2018,2019,1,0],[2019,2020,1,0],[2020,224,1,0],[1005,2021,1,0],[2021,2022,1,0],[2022,2023,1,0],[2023,2024,1,0],[2024,2025,1,0],[2025,2026,1,0],[2026,2027,1,0],[2027,2028,1,0],[2028,2029,1,0],[2029,2030,1,0],[2030,2031,1,0],[2031,2032,1,0],[2032,1123,1,0],[79,92,1,1],[92,93,1,1],[93,94,1,1],[94,95,1,1],[197,2033,1,0],[2033,2034,1,0],[2034,2035,1,0],[2035,2036,1,0],[2036,2037,1,0],[2037,2038,1,0],[2038,2039,1,0],[2039,2040,1,0],[2040,666,1,0],[197,2041,0,0],[2041,2042,0,0],[2042,2043,0,0],[2043,2044,0,0],[2044,2045,0,0],[2045,2046,0,0],[2046,2047,0,0],[2047,2048,0,0],[2048,2049,0,0],[2049,2050,0,0],[2050,2051,0,0],[2051,2052,0,0],[2052,2053,0,0],[2053,2054,0,0],[2054,2055,0,0],[2055,2056,0,0],[2056,2057,0,0],[2057,2058,0,0],[2058,2059,0,0],[2059,2060,0,0],[2060,2061,0,0],[2061,224,0,0],[2062,2063,1,0],[2063,2064,1,0],[2064,2065,1,0],[2065,2066,1,0],[2066,2067,1,0],[2067,2068,1,0],[2068,2069,1,0],[2069,2070,1,0],[2070,2071,1,0],[2071,2072,1,0],[2072,2073,1,0],[2073,1197,1,0],[95,1025,1,1],[1025,147,1,1],[269,2074,0,1],[2074,2075,0,1],[2075,2076,0,1],[2076,2077,0,1],[2077,2078,0,1],[2078,2079,0,1],[2079,2080,0,1],[2080,2081,0,1],[2081,147,0,1],[269,2082,2,0],[2082,2083,2,0],[2083,2084,2,0],[2084,2085,2,0],[2085,2086,2,0],[2086,2087,2,0],[2087,2088,2,0],[2088,2089,2,0],[2089,2090,2,0],[2090,2091,2,0],[2091,2092,2,0],[2092,2093,2,0],[2093,2094,2,0],[2094,1022,2,0],[1387,2095,1,0],[2095,2096,1,0],[2096,2097,1,0],[2097,2098,1,0],[2098,2099,1,0],[2099,2100,1,0],[2100,2101,1,0],[2101,2102,1,0],[2102,2103,1,0],[2103,2104,1,0],[2104,2105,1,0],[2105,2106,1,0],[2106,2107,1,0],[2107,2108,1,0],[2108,2109,1,0],[2109,1534,1,0],[1146,2110,1,1],[2110,2111,1,1],[2111,2112,1,1],[2112,2113,1,1],[2113,2114,1,1],[2114,607,1,1],[826,2115,0,1],[2115,2116,0,1],[2116,2117,0,1],[2117,2118,0,1],[2118,2000,0,1],[2000,1534,0,1],[224,2119,1,0],[2119,2120,1,0],[2120,2121,1,0],[2121,2122,1,0],[2122,2123,1,0],[2123,2124,1,0],[2124,2125,1,0],[2125,2126,1,0],[2126,712,1,0],[224,2127,0,0],[2127,2128,0,0],[2128,2129,0,0],[2129,2130,0,0],[2130,2131,0,0],[2131,2132,0,0],[2132,2133,0,0],[2133,2134,0,0],[2134,2135,0,0],[2135,2136,0,0],[2136,2137,0,0],[2137,2138,0,0],[2138,2139,0,0],[2139,2140,0,0],[2140,2141,0,0],[2141,2142,0,0],[2142,2143,0,0],[2143,2144,0,0],[2144,1197,0,0],[724,2145,1,0],[2145,2146,1,0],[2146,2147,1,0],[2147,2148,1,0],[2148,2149,1,0],[2149,2150,1,0],[2150,2151,1,0],[2151,2152,1,0],[2152,2153,1,0],[2153,2154,1,0],[2154,2155,1,0],[2155,2156,1,0],[2156,2157,1,0],[2157,2158,1,0],[2158,2159,1,0],[2159,2160,1,0],[2160,2161,1,0],[2161,2162,1,0],[2162,2163,1,0],[2163,2164,1,0],[2164,259,1,0],[3,2165,2,0],[2165,2166,2,0],[2166,2167,2,0],[2167,2168,2,0],[2168,2169,2,0],[2169,2170,2,0],[2170,2171,2,0],[2171,2172,2,0],[2172,2173,2,0],[2173,2174,2,0],[2174,2175,2,0],[2175,2176,2,0],[2176,2177,2,0],[2177,2178,2,0],[2178,2179,2,0],[2179,2180,2,0],[2180,2181,2,0],[2181,2182,2,0],[2182,2183,2,0],[2183,2184,2,0],[2184,2185,2,0],[2185,2186,2,0],[2186,2187,2,0],[2187,2188,2,0],[2188,2189,2,0],[2189,2190,2,0],[2190,2191,2,0],[2191,2192,2,0],[2192,2193,2,0],[2193,2194,2,0],[2194,1337,2,0],[634,2195,1,1],[2195,2196,1,1],[2196,2197,1,1],[2197,2198,1,1],[2198,2199,1,1],[2199,2200,1,1],[2200,2201,1,1],[2201,2202,1,1],[2202,2203,1,1],[2203,1022,1,1],[693,2204,1,0],[2204,2205,1,0],[2205,2206,1,0],[2206,2207,1,0],[2207,2208,1,0],[2208,2209,1,0],[2209,2210,1,0],[2210,2211,1,0],[2211,2212,1,0],[2212,2213,1,0],[2213,2214,1,0],[2214,2215,1,0],[2215,1872,1,0]],"land":[[[2196.0,2280.0],[2184.1,2279.0],[2177.0,2275.9],[2174.9,2270.8],[2177.7,2263.7],[2185.5,2254.5],[2194.5,2245.5],[2205.1,2236.3],[2216.6,2229.2],[2228.9,2224.1],[2242.0,2221.0],[2256.0,2220.0],[2364.0,2220.0],[2375.9,2221.0],[2383.0,2224.1],[2385.1,2229.2],[2382.3,2236.3],[2374.5,2245.5],[2365.5,2254.5],[2354.9,2263.7],[2343.4,2270.8],[2331.1,2275.9],[2318.0,2279.0],[2304.0,2280.0]],[[2245.5,2314.5],[2237.3,2324.7],[2233.2,2334.9],[2233.2,2345.1],[2237.3,2355.3],[2245.5,2365.5],[2258.8,2378.8],[2267.6,2386.4],[2277.2,2392.4],[2287.4,2396.6],[2298.4,2399.2],[2310.0,2400.0],[2310.0,2400.0],[2321.6,2399.2],[2332.6,2396.6],[2342.8,2392.4],[2352.4,2386.4],[2361.2,2378.8],[2374.5,2365.5],[2382.7,2355.3],[2386.8,2345.1],[2386.8,2334.9],[2382.7,2324.7],[2374.5,2314.5],[2361.2,2301.2],[2352.4,2293.6],[2342.8,2287.6],[2332.6,2283.4],[2321.6,2280.8],[2310.0,2280.0],[2310.0,2280.0],[2298.4,2280.8],[2287.4,2283.4],[2277.2,2287.6],[2267.6,2293.6],[2258.8,2301.2]],[[2245.5,2734.5],[2237.3,2744.7],[2233.2,2754.9],[2233.2,2765.1],[2237.3,2775.3],[2245.5,2785.5],[2258.8,2798.8],[2267.6,2806.4],[2277.2,2812.4],[2287.4,2816.6],[2298.4,2819.2],[2310.0,2820.0],[2310.0,2820.0],[2320.8,2818.8],[2329.2,2815.2],[2335.2,2809.2],[2338.8,2800.8],[2340.0,2790.0],[2340.0,2730.0],[2338.8,2719.2],[2335.2,2710.8],[2329.2,2704.8],[2320.8,2701.2],[2310.0,2700.0],[2310.0,2700.0],[2298.4,2700.8],[2287.4,2703.4],[2277.2,2707.6],[2267.6,2713.6],[2258.8,2721.2]],[[2250.0,2640.0],[2240.0,2639.2],[2234.2,2636.6],[2232.4,2632.4],[2234.8,2626.4],[2241.2,2618.8],[2258.8,2601.2],[2267.6,2593.6],[2277.2,2587.6],[2287.4,2583.4],[2298.4,2580.8],[2310.0,2580.0],[2310.0,2580.0],[2320.0,2580.8],[2325.8,2583.4],[2327.6,2587.6],[2325.2,2593.6],[2318.8,2601.2],[2301.2,2618.8],[2292.4,2626.4],[2282.8,2632.4],[2272.6,2636.6],[2261.6,2639.2],[2250.0,2640.0]],[[2136.0,1020.0],[2124.1,1021.0],[2117.0,1024.1],[2114.9,1029.2],[2117.7,1036.3],[2125.5,1045.5],[2134.5,1054.5],[2145.1,1063.7],[2156.6,1070.8],[2168.9,1075.9],[2182.0,1079.0],[2196.0,1080.0],[2244.0,1080.0],[2255.9,1079.0],[2263.0,1075.9],[2265.1,1070.8],[2262.3,1063.7],[2254.5,1054.5],[2245.5,1045.5],[2234.9,1036.3],[2223.4,1029.2],[2211.1,1024.1],[2198.0,1021.0],[2184.0,1020.0]],[[2100.0,2490.0],[2101.2,2500.8],[2104.8,2509.2],[2110.8,2515.2],[2119.2,2518.8],[2130.0,2520.0],[2130.0,2520.0],[2141.6,2519.2],[2152.6,2516.6],[2162.8,2512.4],[2172.4,2506.4],[2181.2,2498.8],[2194.5,2485.5],[2202.7,2475.3],[2206.8,2465.1],[2206.8,2454.9],[2202.7,2444.7],[2194.5,2434.5],[2185.5,2425.5],[2175.3,2417.3],[2165.1,2413.2],[2154.9,2413.2],[2144.7,2417.3],[2134.5,2425.5],[2121.2,2438.8],[2113.6,2447.6],[2107.6,2457.2],[2103.4,2467.4],[2100.8,2478.4],[2100.0,2490.0]],[[540.0,2244.0],[541.0,2258.0],[544.1,2271.1],[549.2,2283.4],[556.3,2294.9],[565.5,2305.5],[574.5,2314.5],[583.7,2325.1],[590.8,2336.6],[595.9,2348.9],[599.0,2362.0],[600.0,2376.0],[600.0,2604.0],[601.4,2617.0],[605.8,2627.0],[613.0,2634.2],[623.0,2638.6],[636.0,2640.0],[684.0,2640.0],[698.0,2641.0],[711.1,2644.1],[723.4,2649.2],[734.9,2656.3],[745.5,2665.5],[818.8,2738.8],[826.4,2747.6],[832.4,2757.2],[836.6,2767.4],[839.2,2778.4],[840.0,2790.0],[840.0,2790.0],[840.8,2800.0],[843.4,2805.8],[847.6,2807.6],[853.6,2805.2],[861.2,2798.8],[878.8,2781.2],[887.6,2773.6],[897.2,2767.6],[907.4,2763.4],[918.4,2760.8],[930.0,2760.0],[930.0,2760.0],[940.8,2761.2],[949.2,2764.8],[955.2,2770.8],[958.8,2779.2],[960.0,2790.0],[960.0,2844.0],[961.0,2855.9],[964.1,2863.0],[969.2,2865.1],[976.3,2862.3],[985.5,2854.5],[994.5,2845.5],[1004.7,2837.3],[1014.9,2833.2],[1025.1,2833.2],[1035.3,2837.3],[1045.5,2845.5],[1054.5,2854.5],[1063.7,2865.1],[1070.8,2876.6],[1075.9,2888.9],[1079.0,2902.0],[1080.0,2916.0],[1080.0,3084.0],[1081.0,3098.0],[1084.1,3111.1],[1089.2,3123.4],[1096.3,3134.9],[1105.5,3145.5],[1234.5,3274.5],[1243.7,3285.1],[1250.8,3296.6],[1255.9,3308.9],[1259.0,3322.0],[1260.0,3336.0],[1260.0,3564.0],[1261.0,3578.0],[1264.1,3591.1],[1269.2,3603.4],[1276.3,3614.9],[1285.5,3625.5],[1298.8,3638.8],[1307.6,3646.4],[1317.2,3652.4],[1327.4,3656.6],[1338.4,3659.2],[1350.0,3660.0],[1350.0,3660.0],[1360.0,3660.8],[1365.8,3663.4],[1367.6,3667.6],[1365.2,3673.6],[1358.8,3681.2],[1345.5,3694.5],[1336.3,3705.1],[1329.2,3716.6],[1324.1,3728.9],[1321.0,3742.0],[1320.0,3756.0],[1320.0,4164.0],[1321.0,4178.0],[1324.1,4191.1],[1329.2,4203.4],[1336.3,4214.9],[1345.5,4225.5],[1354.5,4234.5],[1365.1,4243.7],[1376.6,4250.8],[1388.9,4255.9],[1402.0,4259.0],[1416.0,4260.0],[1584.0,4260.0],[1598.0,4261.0],[1611.1,4264.1],[1623.4,4269.2],[1634.9,4276.3],[1645.5,4285.5],[1718.8,4358.8],[1726.4,4367.6],[1732.4,4377.2],[1736.6,4387.4],[1739.2,4398.4],[1740.0,4410.0],[1740.0,4410.0],[1740.8,4420.0],[1743.4,4425.8],[1747.6,4427.6],[1753.6,4425.2],[1761.2,4418.8],[1774.5,4405.5],[1783.7,4394.9],[1790.8,4383.4],[1795.9,4371.1],[1799.0,4358.0],[1800.0,4344.0],[1800.0,3276.0],[1801.0,3262.0],[1804.1,3248.9],[1809.2,3236.6],[1816.3,3225.1],[1825.5,3214.5],[1838.8,3201.2],[1846.4,3192.4],[1852.4,3182.8],[1856.6,3172.6],[1859.2,3161.6],[1860.0,3150.0],[1860.0,3150.0],[1859.2,3138.4],[1856.6,3127.4],[1852.4,3117.2],[1846.4,3107.6],[1838.8,3098.8],[1705.5,2965.5],[1696.3,2954.9],[1689.2,2943.4],[1684.1,2931.1],[1681.0,2918.0],[1680.0,2904.0],[1680.0,2796.0],[1681.0,2782.0],[1684.1,2768.9],[1689.2,2756.6],[1696.3,2745.1],[1705.5,2734.5],[1718.8,2721.2],[1726.4,2714.8],[1732.4,2712.4],[1736.6,2714.2],[1739.2,2720.0],[1740.0,2730.0],[1740.0,2730.0],[1740.8,2740.0],[1743.4,2745.8],[1747.6,2747.6],[1753.6,2745.2],[1761.2,2738.8],[1778.8,2721.2],[1787.6,2713.6],[1797.2,2707.6],[1807.4,2703.4],[1818.4,2700.8],[1830.0,2700.0],[1830.0,2700.0],[1840.0,2699.2],[1845.8,2696.6],[1847.6,2692.4],[1845.2,2686.4],[1838.8,2678.8],[1821.2,2661.2],[1813.6,2652.4],[1807.6,2642.8],[1803.4,2632.6],[1800.8,2621.6],[1800.0,2610.0],[1800.0,2610.0],[1800.8,2598.4],[1803.4,2587.4],[1807.6,2577.2],[1813.6,2567.6],[1821.2,2558.8],[1894.5,2485.5],[1902.7,2475.3],[1906.8,2465.1],[1906.8,2454.9],[1902.7,2444.7],[1894.5,2434.5],[1825.5,2365.5],[1816.3,2354.9],[1809.2,2343.4],[1804.1,2331.1],[1801.0,2318.0],[1800.0,2304.0],[1800.0,2256.0],[1801.0,2242.0],[1804.1,2228.9],[1809.2,2216.6],[1816.3,2205.1],[1825.5,2194.5],[1894.5,2125.5],[1904.7,2117.3],[1914.9,2113.2],[1925.1,2113.2],[1935.3,2117.3],[1945.5,2125.5],[1958.8,2138.8],[1967.6,2146.4],[1977.2,2152.4],[1987.4,2156.6],[1998.4,2159.2],[2010.0,2160.0],[2010.0,2160.0],[2021.6,2159.2],[2032.6,2156.6],[2042.8,2152.4],[2052.4,2146.4],[2061.2,2138.8],[2074.5,2125.5],[2083.7,2114.9],[2090.8,2103.4],[2095.9,2091.1],[2099.0,2078.0],[2100.0,2064.0],[2100.0,2016.0],[2099.0,2002.0],[2095.9,1988.9],[2090.8,1976.6],[2083.7,1965.1],[2074.5,1954.5],[2065.5,1945.5],[2057.3,1935.3],[2053.2,1925.1],[2053.2,1914.9],[2057.3,1904.7],[2065.5,1894.5],[2074.5,1885.5],[2082.7,1875.3],[2086.8,1865.1],[2086.8,1854.9],[2082.7,1844.7],[2074.5,1834.5],[1881.2,1641.2],[1873.6,1632.4],[1867.6,1622.8],[1863.4,1612.6],[1860.8,1601.6],[1860.0,1590.0],[1860.0,1590.0],[1860.8,1578.4],[1863.4,1567.4],[1867.6,1557.2],[1873.6,1547.6],[1881.2,1538.8],[1898.8,1521.2],[1907.6,1513.6],[1917.2,1507.6],[1927.4,1503.4],[1938.4,1500.8],[1950.0,1500.0],[1950.0,1500.0],[1960.8,1498.8],[1969.2,1495.2],[1975.2,1489.2],[1978.8,1480.8],[1980.0,1470.0],[1980.0,1296.0],[1978.6,1283.0],[1974.2,1273.0],[1967.0,1265.8],[1957.0,1261.4],[1944.0,1260.0],[1716.0,1260.0],[1702.0,1261.0],[1688.9,1264.1],[1676.6,1269.2],[1665.1,1276.3],[1654.5,1285.5],[1585.5,1354.5],[1576.3,1365.1],[1569.2,1376.6],[1564.1,1388.9],[1561.0,1402.0],[1560.0,1416.0],[1560.0,1464.0],[1559.0,1475.9],[1555.9,1483.0],[1550.8,1485.1],[1543.7,1482.3],[1534.5,1474.5],[1525.5,1465.5],[1514.9,1456.3],[1503.4,1449.2],[1491.1,1444.1],[1478.0,1441.0],[1464.0,1440.0],[1356.0,1440.0],[1342.0,1441.0],[1328.9,1444.1],[1316.6,1449.2],[1305.1,1456.3],[1294.5,1465.5],[1221.2,1538.8],[1212.4,1546.4],[1202.8,1552.4],[1192.6,1556.6],[1181.6,1559.2],[1170.0,1560.0],[1170.0,1560.0],[1158.4,1559.2],[1147.4,1556.6],[1137.2,1552.4],[1127.6,1546.4],[1118.8,1538.8],[1105.5,1525.5],[1095.3,1517.3],[1085.1,1513.2],[1074.9,1513.2],[1064.7,1517.3],[1054.5,1525.5],[1045.5,1534.5],[1035.3,1542.7],[1025.1,1546.8],[1014.9,1546.8],[1004.7,1542.7],[994.5,1534.5],[925.5,1465.5],[914.9,1456.3],[903.4,1449.2],[891.1,1444.1],[878.0,1441.0],[864.0,1440.0],[756.0,1440.0],[744.1,1441.0],[737.0,1444.1],[734.9,1449.2],[737.7,1456.3],[745.5,1465.5],[754.5,1474.5],[763.7,1485.1],[770.8,1496.6],[775.9,1508.9],[779.0,1522.0],[780.0,1536.0],[780.0,1704.0],[781.0,1718.0],[784.1,1731.1],[789.2,1743.4],[796.3,1754.9],[805.5,1765.5],[818.8,1778.8],[826.4,1787.6],[832.4,1797.2],[836.6,1807.4],[839.2,1818.4],[840.0,1830.0],[840.0,1830.0],[838.8,1840.8],[835.2,1849.2],[829.2,1855.2],[820.8,1858.8],[810.0,1860.0],[756.0,1860.0],[742.0,1861.0],[728.9,1864.1],[716.6,1869.2],[705.1,1876.3],[694.5,1885.5],[565.5,2014.5],[556.3,2025.1],[549.2,2036.6],[544.1,2048.9],[541.0,2062.0],[540.0,2076.0]],[[1920.0,1050.0],[1921.2,1060.8],[1924.8,1069.2],[1930.8,1075.2],[1939.2,1078.8],[1950.0,1080.0],[2010.0,1080.0],[2020.8,1078.8],[2029.2,1075.2],[2035.2,1069.2],[2038.8,1060.8],[2040.0,1050.0],[2040.0,1050.0],[2038.8,1039.2],[2035.2,1030.8],[2029.2,1024.8],[2020.8,1021.2],[2010.0,1020.0],[1950.0,1020.0],[1939.2,1021.2],[1930.8,1024.8],[1924.8,1030.8],[1921.2,1039.2],[1920.0,1050.0]],[[1950.0,1020.0],[1940.0,1019.2],[1934.2,1016.6],[1932.4,1012.4],[1934.8,1006.4],[1941.2,998.8],[1958.8,981.2],[1967.6,973.6],[1977.2,967.6],[1987.4,963.4],[1998.4,960.8],[2010.0,960.0],[2010.0,960.0],[2020.0,960.8],[2025.8,963.4],[2027.6,967.6],[2025.2,973.6],[2018.8,981.2],[2001.2,998.8],[1992.4,1006.4],[1982.8,1012.4],[1972.6,1016.6],[1961.6,1019.2],[1950.0,1020.0]],[[1740.0,1050.0],[1740.8,1060.0],[1743.4,1065.8],[1747.6,1067.6],[1753.6,1065.2],[1761.2,1058.8],[1774.5,1045.5],[1785.1,1036.3],[1796.6,1029.2],[1808.9,1024.1],[1822.0,1021.0],[1836.0,1020.0],[1890.0,1020.0],[1900.8,1018.8],[1909.2,1015.2],[1915.2,1009.2],[1918.8,1000.8],[1920.0,990.0],[1920.0,990.0],[1918.8,979.2],[1915.2,970.8],[1909.2,964.8],[1900.8,961.2],[1890.0,960.0],[1836.0,960.0],[1822.0,961.0],[1808.9,964.1],[1796.6,969.2],[1785.1,976.3],[1774.5,985.5],[1761.2,998.8],[1753.6,1007.6],[1747.6,1017.2],[1743.4,1027.4],[1740.8,1038.4],[1740.0,1050.0]],[[1766.8,4511.0],[1746.6,4531.2],[1718.1,4531.2],[1697.9,4511.0],[1697.9,4482.5],[1718.1,4462.3],[1746.6,4462.3],[1766.8,4482.5]],[[1650.0,960.0],[1640.0,960.8],[1634.2,963.4],[1632.4,967.6],[1634.8,973.6],[1641.2,981.2],[1654.5,994.5],[1664.7,1002.7],[1674.9,1006.8],[1685.1,1006.8],[1695.3,1002.7],[1705.5,994.5],[1718.8,981.2],[1726.4,972.4],[1732.4,962.8],[1736.6,952.6],[1739.2,941.6],[1740.0,930.0],[1740.0,930.0],[1739.2,920.0],[1736.6,914.2],[1732.4,912.4],[1726.4,914.8],[1718.8,921.2],[1701.2,938.8],[1692.4,946.4],[1682.8,952.4],[1672.6,956.6],[1661.6,959.2],[1650.0,960.0]],[[1536.0,4380.0],[1524.1,4381.0],[1517.0,4384.1],[1514.9,4389.2],[1517.7,4396.3],[1525.5,4405.5],[1538.8,4418.8],[1546.4,4427.6],[1552.4,4437.2],[1556.6,4447.4],[1559.2,4458.4],[1560.0,4470.0],[1560.0,4470.0],[1560.8,4481.6],[1563.4,4492.6],[1567.6,4502.8],[1573.6,4512.4],[1581.2,4521.2],[1598.8,4538.8],[1607.6,4546.4],[1617.2,4552.4],[1627.4,4556.6],[1638.4,4559.2],[1650.0,4560.0],[1650.0,4560.0],[1660.8,4558.8],[1669.2,4555.2],[1675.2,4549.2],[1678.8,4540.8],[1680.0,4530.0],[1680.0,4416.0],[1678.6,4403.0],[1674.2,4393.0],[1667.0,4385.8],[1657.0,4381.4],[1644.0,4380.0]],[[1595.9,983.7],[1576.3,1003.3],[1548.6,1003.3],[1529.0,983.7],[1529.0,956.0],[1548.6,936.4],[1576.3,936.4],[1595.9,956.0]],[[1380.0,1050.0],[1380.8,1061.6],[1383.4,1072.6],[1387.6,1082.8],[1393.6,1092.4],[1401.2,1101.2],[1414.5,1114.5],[1424.7,1122.7],[1434.9,1126.8],[1445.1,1126.8],[1455.3,1122.7],[1465.5,1114.5],[1478.8,1101.2],[1486.4,1092.4],[1492.4,1082.8],[1496.6,1072.6],[1499.2,1061.6],[1500.0,1050.0],[1500.0,1050.0],[1499.2,1038.4],[1496.6,1027.4],[1492.4,1017.2],[1486.4,1007.6],[1478.8,998.8],[1465.5,985.5],[1455.3,977.3],[1445.1,973.2],[1434.9,973.2],[1424.7,977.3],[1414.5,985.5],[1401.2,998.8],[1393.6,1007.6],[1387.6,1017.2],[1383.4,1027.4],[1380.8,1038.4],[1380.0,1050.0]],[[1356.0,4440.0],[1344.1,4441.0],[1337.0,4444.1],[1334.9,4449.2],[1337.7,4456.3],[1345.5,4465.5],[1358.8,4478.8],[1367.6,4486.4],[1377.2,4492.4],[1387.4,4496.6],[1398.4,4499.2],[1410.0,4500.0],[1410.0,4500.0],[1420.8,4498.8],[1429.2,4495.2],[1435.2,4489.2],[1438.8,4480.8],[1440.0,4470.0],[1440.0,4470.0],[1438.8,4459.2],[1435.2,4450.8],[1429.2,4444.8],[1420.8,4441.2],[1410.0,4440.0]],[[1350.0,4380.0],[1340.0,4379.2],[1334.2,4376.6],[1332.4,4372.4],[1334.8,4366.4],[1341.2,4358.8],[1358.8,4341.2],[1367.6,4333.6],[1377.2,4327.6],[1387.4,4323.4],[1398.4,4320.8],[1410.0,4320.0],[1410.0,4320.0],[1420.0,4320.8],[1425.8,4323.4],[1427.6,4327.6],[1425.2,4333.6],[1418.8,4341.2],[1401.2,4358.8],[1392.4,4366.4],[1382.8,4372.4],[1372.6,4376.6],[1361.6,4379.2],[1350.0,4380.0]],[[1822.0,2273.2],[1809.5,2271.5],[1797.1,2273.2],[1785.5,2278.0],[1775.6,2285.6],[1768.0,2295.5],[1763.2,2307.1],[1761.5,2319.5],[1763.2,2332.0],[1768.0,2343.5],[1775.6,2353.5],[1781.2,2357.8],[1785.6,2363.4],[1791.2,2367.8],[1795.5,2373.4],[1801.2,2377.7],[1805.5,2383.4],[1811.1,2387.7],[1812.6,2389.6],[1813.0,2392.5],[1812.0,2400.0],[1813.6,2412.4],[1818.4,2424.0],[1826.1,2433.9],[1836.0,2441.6],[1847.6,2446.4],[1860.0,2448.0],[1872.4,2446.4],[1884.0,2441.6],[1893.9,2433.9],[1901.6,2424.0],[1906.4,2412.4],[1908.0,2400.0],[1907.0,2392.5],[1908.0,2385.0],[1907.2,2378.9],[1907.3,2377.8],[1905.7,2365.3],[1904.1,2361.4],[1903.7,2358.7],[1898.9,2347.1],[1897.2,2344.9],[1895.6,2341.0],[1888.0,2331.0],[1887.1,2330.4],[1883.3,2325.4],[1877.7,2321.1],[1873.4,2315.5],[1867.7,2311.2],[1863.4,2305.5],[1857.8,2301.2],[1853.4,2295.6],[1847.8,2291.2],[1843.5,2285.6],[1833.5,2278.0]]]};
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
  VIA:'--travel-via',Nightline:'--travel-night',Regio:'--travel-regio'})[type]||'--travel-main'})`;
}
function rrVisibleServiceAccent(color){
 // Map a source colour to exactly the same themed colour used by badges,
 // logos, buttons and call-point diagrams.
 if(color===C.Max)return RR_UI_CSS_COLOR('--main');
 if(color===C.VIA)return RR_UI_CSS_COLOR('--via');
 if(color===C.Nightline)return RR_UI_CSS_COLOR('--night');
 if(color===C.Regio)return RR_UI_CSS_COLOR('--regio');
 if(color===RR_TRAVELLED_C[C.Regio])return RR_UI_CSS_COLOR('--travel-regio');
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
 [C.Nightline]:RR_UI_CSS_COLOR('--rr-base-travel-night'),[C.Regio]:RR_UI_CSS_COLOR('--rr-base-travel-regio')
});
function serviceName(type){return ({Max:'RR Max',VIA:'RR Via',InterCity:'RR InterCity',Nightline:'RR Nightline',Regio:'RR Regio'})[type]||('RR '+type)}
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
function pathsByType(){const h=[],m=[];$('landShape').setAttribute('d',(GRAPH.land||[]).map(r=>'M'+r.map(p=>p[0]+' '+p[1]).join('L')+'Z').join(''));const g=[],sh=[];for(const [a,b,t,shared] of E){const d=`M${P[a][0]} ${P[a][1]}L${P[b][0]} ${P[b][1]}`;(t===2?g:t?h:m).push(d);if(shared)sh.push(d)}$('regioShared').setAttribute('d',sh.join(' '));$('regioTrack').setAttribute('d',g.join(' '));$('hslTrack').setAttribute('d',h.join(' '));$('mlTrack').setAttribute('d',m.join(' '))}

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
let serviceFilter='all';
const RR_MAINLINE_TYPES=new Set(['Max','VIA','InterCity','Nightline']);
function rrMatchesFilter(t){
 if(serviceFilter==='all')return true;
 if(serviceFilter==='mainline')return RR_MAINLINE_TYPES.has(t.type);
 if(serviceFilter==='regio')return t.type==='Regio';
 return t.type==='Local';
}
document.querySelectorAll('.service-chip').forEach(b=>b.addEventListener('click',()=>{
 serviceFilter=b.dataset.filter;
 document.querySelectorAll('.service-chip').forEach(x=>{const on=x===b;x.classList.toggle('active',on);x.setAttribute('aria-checked',String(on))});
 drawBoard();
}));
function drawBoard(){
 if(viewMode==='journeys'){renderJourneyResults();return}
 const isArrival=viewMode==='arrivals';
 departures=(isArrival?arriving(currentStation):upcoming(currentStation)).filter(rrMatchesFilter);
 board.replaceChildren();
 $('stationHeading').textContent=currentStation;
 $('stationBoardTitle').textContent=isArrival?'Arrivals':'Departures';
 $('boardRouteHeader').textContent=isArrival?'Origin':'Destination';
 if(!departures.length){board.innerHTML=serviceFilter==='local'?'<div class="empty">No Local services yet.</div>':`<div class="empty">No ${isArrival?'arrivals':'departures'}.</div>`;return}
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
 const sc=fit*zoom, margin=Math.max(32,Math.min(W,H)*0.45);
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
   const sysColor=s.sys==='M'?RR_UI_CSS_COLOR('--main'):s.sys==='R'?RR_UI_CSS_COLOR('--regio'):RR_UI_CSS_COLOR('--muted');
   g.append(se('circle',{cx:x,cy:y,r:radius,fill:important?RR_UI_CSS_COLOR('--surface'):sysColor,stroke:important?(s.sys==='MR'?RR_UI_CSS_COLOR('--muted-slate'):sysColor):'none','stroke-width':important?1.8:1.4,'pointer-events':'none'}));
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
  const minor=!!byVisible.get(name)?.regio&&!important;
  const fontSize=minor?12.5:15.625,weight=important||mixedServiceInterchange?700:500,lh=minor?14.5:18.125;
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
 const old=zoom,next=Math.max(1,Math.min(28,old*factor)); // deep zoom for dense Regio areas
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
 const list=rrJourneyWindow(journeyResults.filter(j=>(!onlyDirect||j.change===0)&&(!query.highSpeedOnly||j.legs.every(l=>isHighSpeed(l.train)))&&j.legs.every(l=>rrMatchesFilter(l.train))));
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
 'Regio (trial: South Radeland)':'Régional (essai : Radeland-Sud)','Regio on Mainline track':'Régional sur voie de magistrale',
 'All':'Tous','Mainline':'Magistrale','Regio':'Régional','Local':'Banlieue','Service type':'Type de service',
 'No Local services yet.':'Aucun service de banlieue pour le moment.',
 'Regional Sprinter · 3-car single-deck EMU':'Régional omnibus · automotrice à un niveau, 3 voitures',
 'Regional Sprinter · two coupled 3-car EMUs':'Régional omnibus · deux automotrices de 3 voitures en unités multiples',
 'Regional Express · 4-car duplex EMU':'Régional express · automotrice à deux niveaux, 4 voitures',
 'Regional Express · two coupled 4-car duplex EMUs':'Régional express · deux automotrices à deux niveaux de 4 voitures',
 'Fast-accelerating stopping train; works in pairs as RS6.':'Train omnibus à forte accélération ; circule aussi en RS6 (deux unités).',
 'Two RS3 units in multiple; no gangway between units.':'Deux unités RS3 en unités multiples ; pas d’intercirculation entre les unités.',
 'Double-deck throughout; First Class on the upper deck of car 1.':'Entièrement à deux niveaux ; Première classe à l’étage de la voiture 1.',
 'Two RX4D units in multiple at busy times.':'Deux unités RX4D en unités multiples aux heures chargées.',
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
  .replace(/\bRR Regio\b/g,'RR Régional')
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
