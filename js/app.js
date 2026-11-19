'use strict';
const STATIONS=[{"name":"Stanwell","x":1440,"y":3570,"attach":[1440,3570],"regio":1,"sys":"R"},{"name":"Medway Airport","x":1440,"y":3540,"attach":[1440.0,3540.0],"regio":1,"sys":"R"},{"name":"Eastden","x":1440,"y":3560,"attach":[1440.0,3559.77],"regio":1,"sys":"R"},{"name":"Millholme Junction","x":1440,"y":3600,"attach":[1440.0,3600.0],"regio":1,"sys":"R"},{"name":"Holmford Junction","x":1440,"y":3587,"attach":[1440.0,3587.32],"regio":1,"sys":"R"},{"name":"Hawbrook Junction","x":1432,"y":3591,"attach":[1431.52,3591.19],"regio":1,"sys":"R"},{"name":"Birchsted","x":1430,"y":3581,"attach":[1430.09,3580.71],"regio":1,"sys":"R"},{"name":"Warley","x":1350,"y":3210,"attach":[1350,3210],"regio":1,"sys":"R"},{"name":"Melbridge Central","x":1260,"y":3120,"attach":[1260.0,3120.0],"sys":"MR"},{"name":"Melsted","x":1343,"y":3203,"attach":[1343.38,3203.38],"regio":1,"sys":"R"},{"name":"Thornworth","x":1338,"y":3198,"attach":[1337.73,3197.73],"regio":1,"sys":"R"},{"name":"Thurlthorpe","x":1331,"y":3191,"attach":[1331.3,3191.3],"regio":1,"sys":"R"},{"name":"Newthwaite","x":1324,"y":3184,"attach":[1324.0,3184.0],"regio":1,"sys":"R"},{"name":"Chalfield","x":1318,"y":3178,"attach":[1317.74,3177.74],"regio":1,"sys":"R"},{"name":"Goldwell","x":1311,"y":3171,"attach":[1310.63,3170.63],"regio":1,"sys":"R"},{"name":"Kirkford","x":1304,"y":3164,"attach":[1303.55,3163.55],"regio":1,"sys":"R"},{"name":"Larkhurst","x":1297,"y":3157,"attach":[1297.18,3157.18],"regio":1,"sys":"R"},{"name":"Sandcote","x":1290,"y":3150,"attach":[1289.68,3149.68],"regio":1,"sys":"R"},{"name":"Oakthwaite","x":1283,"y":3143,"attach":[1282.82,3142.82],"regio":1,"sys":"R"},{"name":"Stowsted","x":1380,"y":3480,"attach":[1380.0,3480.0],"regio":1,"sys":"R"},{"name":"Blackcote","x":1350,"y":3223,"attach":[1350.0,3222.66],"regio":1,"sys":"R"},{"name":"Dunstow","x":1350,"y":3254,"attach":[1350.0,3253.8],"regio":1,"sys":"R"},{"name":"Thorndale","x":1350,"y":3265,"attach":[1350.0,3264.92],"regio":1,"sys":"R"},{"name":"Warbridge","x":1350,"y":3277,"attach":[1350.0,3277.09],"regio":1,"sys":"R"},{"name":"Newminster","x":1350,"y":3291,"attach":[1350.0,3290.61],"regio":1,"sys":"R"},{"name":"Blackden","x":1350,"y":3303,"attach":[1350.0,3302.67],"regio":1,"sys":"R"},{"name":"Heaththorpe","x":1350,"y":3314,"attach":[1350.0,3314.36],"regio":1,"sys":"R"},{"name":"Highmore","x":1350,"y":3327,"attach":[1350.0,3326.72],"regio":1,"sys":"R"},{"name":"Grimsmore","x":1350,"y":3338,"attach":[1350.0,3337.9],"regio":1,"sys":"R"},{"name":"Ulverstow","x":1350,"y":3350,"attach":[1350.0,3350.22],"regio":1,"sys":"R"},{"name":"Cherrywell","x":1350,"y":3361,"attach":[1350.0,3361.0],"regio":1,"sys":"R"},{"name":"Elmstow","x":1350,"y":3372,"attach":[1350.0,3371.86],"regio":1,"sys":"R"},{"name":"Larkminster","x":1350,"y":3381,"attach":[1350.0,3381.44],"regio":1,"sys":"R"},{"name":"Saxethwaite","x":1350,"y":3392,"attach":[1350.0,3392.32],"regio":1,"sys":"R"},{"name":"Wakeholme","x":1350,"y":3405,"attach":[1350.0,3404.82],"regio":1,"sys":"R"},{"name":"Stowdale","x":1350,"y":3415,"attach":[1350.0,3415.11],"regio":1,"sys":"R"},{"name":"Swanford","x":1350,"y":3426,"attach":[1350.0,3426.3],"regio":1,"sys":"R"},{"name":"Leamore","x":1351,"y":3438,"attach":[1350.83,3437.79],"regio":1,"sys":"R"},{"name":"Brentwick","x":1354,"y":3449,"attach":[1354.01,3448.93],"regio":1,"sys":"R"},{"name":"Leadale","x":1359,"y":3458,"attach":[1359.38,3458.24],"regio":1,"sys":"R"},{"name":"Ashhurst","x":1440,"y":3330,"attach":[1440.0,3330.0],"regio":1,"sys":"R"},{"name":"Wickton","x":1358,"y":3218,"attach":[1357.65,3217.65],"regio":1,"sys":"R"},{"name":"Larkcombe","x":1365,"y":3225,"attach":[1365.42,3225.42],"regio":1,"sys":"R"},{"name":"Little Lynwick","x":1373,"y":3233,"attach":[1372.91,3232.91],"regio":1,"sys":"R"},{"name":"Silmere","x":1381,"y":3241,"attach":[1381.07,3241.07],"regio":1,"sys":"R"},{"name":"Redworth","x":1389,"y":3249,"attach":[1389.24,3249.24],"regio":1,"sys":"R"},{"name":"Thorngate","x":1396,"y":3256,"attach":[1395.99,3255.99],"regio":1,"sys":"R"},{"name":"Newbrook","x":1404,"y":3264,"attach":[1403.92,3263.92],"regio":1,"sys":"R"},{"name":"Fenmore","x":1411,"y":3271,"attach":[1410.89,3270.89],"regio":1,"sys":"R"},{"name":"Bramwick","x":1420,"y":3280,"attach":[1419.87,3279.87],"regio":1,"sys":"R"},{"name":"Ryested","x":1428,"y":3288,"attach":[1427.61,3287.61],"regio":1,"sys":"R"},{"name":"Millstow","x":1434,"y":3295,"attach":[1433.95,3294.87],"regio":1,"sys":"R"},{"name":"Blackton","x":1439,"y":3306,"attach":[1438.68,3305.57],"regio":1,"sys":"R"},{"name":"Wardour","x":1650,"y":3570,"attach":[1650,3570],"sys":"MR"},{"name":"Beckthorpe","x":1650,"y":3450,"attach":[1650.0,3450.0],"regio":1,"sys":"R"},{"name":"Holmden","x":1650,"y":3549,"attach":[1650.0,3549.46],"regio":1,"sys":"R"},{"name":"Quarrley","x":1650,"y":3526,"attach":[1650.0,3525.74],"regio":1,"sys":"R"},{"name":"Fernwood","x":1650,"y":3514,"attach":[1650.0,3513.66],"regio":1,"sys":"R"},{"name":"Hunford","x":1650,"y":3494,"attach":[1650.0,3494.24],"regio":1,"sys":"R"},{"name":"Eastthorpe","x":1650,"y":3720,"attach":[1650.0,3720.0],"regio":1,"sys":"R"},{"name":"Wingate","x":1650,"y":3578,"attach":[1650.0,3578.4],"regio":1,"sys":"R"},{"name":"Warham","x":1650,"y":3586,"attach":[1650.0,3585.91],"regio":1,"sys":"R"},{"name":"Swanwick","x":1650,"y":3594,"attach":[1650.0,3593.53],"regio":1,"sys":"R"},{"name":"Ryeby","x":1650,"y":3601,"attach":[1650.0,3600.97],"regio":1,"sys":"R"},{"name":"Moorwood","x":1650,"y":3608,"attach":[1650.0,3608.26],"regio":1,"sys":"R"},{"name":"Todfield","x":1650,"y":3616,"attach":[1650.0,3616.33],"regio":1,"sys":"R"},{"name":"Swanthwaite","x":1650,"y":3625,"attach":[1650.0,3625.32],"regio":1,"sys":"R"},{"name":"Hartwood","x":1650,"y":3633,"attach":[1650.0,3633.42],"regio":1,"sys":"R"},{"name":"Hawcote","x":1650,"y":3643,"attach":[1650.0,3642.56],"regio":1,"sys":"R"},{"name":"Fenholme","x":1650,"y":3651,"attach":[1650.0,3651.1],"regio":1,"sys":"R"},{"name":"Saxecote","x":1650,"y":3659,"attach":[1650.0,3659.22],"regio":1,"sys":"R"},{"name":"Walholme","x":1650,"y":3668,"attach":[1650.0,3667.56],"regio":1,"sys":"R"},{"name":"Burnbrook","x":1650,"y":3676,"attach":[1650.0,3676.12],"regio":1,"sys":"R"},{"name":"Beckthwaite","x":1650,"y":3684,"attach":[1650.0,3684.04],"regio":1,"sys":"R"},{"name":"Willowmere","x":1650,"y":3693,"attach":[1650.0,3692.71],"regio":1,"sys":"R"},{"name":"Crowfield Junction","x":1680,"y":3450,"attach":[1680.0,3450.0],"regio":1,"sys":"R"},{"name":"Highford","x":1656,"y":3564,"attach":[1656.16,3563.84],"regio":1,"sys":"R"},{"name":"Dundale","x":1662,"y":3558,"attach":[1662.11,3557.89],"regio":1,"sys":"R"},{"name":"Fernfield","x":1668,"y":3551,"attach":[1668.36,3550.96],"regio":1,"sys":"R"},{"name":"Walstead","x":1674,"y":3543,"attach":[1673.66,3543.24],"regio":1,"sys":"R"},{"name":"Brookbury","x":1677,"y":3536,"attach":[1677.09,3535.64],"regio":1,"sys":"R"},{"name":"Southmere","x":1679,"y":3527,"attach":[1679.24,3527.06],"regio":1,"sys":"R"},{"name":"Fairgate","x":1680,"y":3519,"attach":[1679.98,3518.99],"regio":1,"sys":"R"},{"name":"Longden","x":1680,"y":3503,"attach":[1680.0,3502.62],"regio":1,"sys":"R"},{"name":"Malmere","x":1680,"y":3494,"attach":[1680.0,3494.13],"regio":1,"sys":"R"},{"name":"Melby","x":1680,"y":3458,"attach":[1680.0,3458.2],"regio":1,"sys":"R"},{"name":"Longbrook","x":1680,"y":3472,"attach":[1680.0,3472.03],"regio":1,"sys":"R"},{"name":"Silcote","x":1650,"y":3480,"attach":[1650.0,3480.0],"regio":1,"sys":"R"},{"name":"Oakholme","x":1650,"y":3543,"attach":[1650.0,3542.94],"regio":1,"sys":"R"},{"name":"Longham","x":1650,"y":3528,"attach":[1650.0,3528.04],"regio":1,"sys":"R"},{"name":"Quarrbridge","x":1650,"y":3515,"attach":[1650.0,3514.91],"regio":1,"sys":"R"},{"name":"Ashcombe","x":1710,"y":3180,"attach":[1710,3180],"regio":1,"sys":"R"},{"name":"Oakmouth","x":1620,"y":3060,"attach":[1620.0,3060.0],"sys":"MR"},{"name":"Millsted","x":1700,"y":3170,"attach":[1699.73,3169.73],"regio":1,"sys":"R"},{"name":"Penstead","x":1693,"y":3163,"attach":[1693.47,3163.47],"regio":1,"sys":"R"},{"name":"Blackbrook","x":1687,"y":3157,"attach":[1687.2,3157.2],"regio":1,"sys":"R"},{"name":"Chalstead","x":1681,"y":3151,"attach":[1680.62,3150.62],"regio":1,"sys":"R"},{"name":"Millwood","x":1673,"y":3143,"attach":[1672.56,3142.56],"regio":1,"sys":"R"},{"name":"Woodstow","x":1666,"y":3136,"attach":[1666.4,3136.4],"regio":1,"sys":"R"},{"name":"Oldton","x":1661,"y":3131,"attach":[1661.04,3131.04],"regio":1,"sys":"R"},{"name":"Fenden","x":1656,"y":3126,"attach":[1655.55,3125.55],"regio":1,"sys":"R"},{"name":"Whitham","x":1650,"y":3120,"attach":[1649.85,3119.85],"regio":1,"sys":"R"},{"name":"Sutgate","x":1644,"y":3114,"attach":[1643.84,3113.84],"regio":1,"sys":"R"},{"name":"Fernstead","x":1638,"y":3108,"attach":[1638.06,3108.06],"regio":1,"sys":"R"},{"name":"Eastcombe","x":1631,"y":3101,"attach":[1631.5,3101.5],"regio":1,"sys":"R"},{"name":"Marwood","x":1620,"y":3069,"attach":[1620.0,3068.7],"regio":1,"sys":"R"},{"name":"Ashbrook","x":1622,"y":3088,"attach":[1622.45,3088.21],"regio":1,"sys":"R"},{"name":"Elmdale","x":1620,"y":3080,"attach":[1620.48,3080.21],"regio":1,"sys":"R"},{"name":"Victoria Central","x":1680,"y":3360,"attach":[1680.0,3360.0],"sys":"MR"},{"name":"Chalden","x":1710,"y":3196,"attach":[1710.0,3196.28],"regio":1,"sys":"R"},{"name":"Cherryminster","x":1710,"y":3220,"attach":[1710.0,3220.23],"regio":1,"sys":"R"},{"name":"Kirkcote","x":1710,"y":3236,"attach":[1710.0,3235.83],"regio":1,"sys":"R"},{"name":"Lower Ryested","x":1710,"y":3269,"attach":[1710.0,3268.86],"regio":1,"sys":"R"},{"name":"Blackholme","x":1710,"y":3289,"attach":[1710.0,3289.36],"regio":1,"sys":"R"},{"name":"Barkwell","x":1710,"y":3303,"attach":[1710.0,3302.8],"regio":1,"sys":"R"},{"name":"Kirkby","x":1707,"y":3327,"attach":[1706.58,3327.35],"regio":1,"sys":"R"},{"name":"Salbrook","x":1650,"y":3240,"attach":[1650.0,3240.0],"regio":1,"sys":"R"},{"name":"Leawood","x":1705,"y":3185,"attach":[1704.61,3185.39],"regio":1,"sys":"R"},{"name":"Warford","x":1700,"y":3190,"attach":[1699.8,3190.2],"regio":1,"sys":"R"},{"name":"Hartstow","x":1695,"y":3195,"attach":[1695.0,3195.0],"regio":1,"sys":"R"},{"name":"Faircote","x":1690,"y":3200,"attach":[1690.23,3199.77],"regio":1,"sys":"R"},{"name":"Hartwick","x":1685,"y":3205,"attach":[1684.85,3205.15],"regio":1,"sys":"R"},{"name":"Kirkdale","x":1680,"y":3210,"attach":[1679.97,3210.03],"regio":1,"sys":"R"},{"name":"Bradby","x":1676,"y":3214,"attach":[1675.51,3214.49],"regio":1,"sys":"R"},{"name":"Moorsted","x":1671,"y":3219,"attach":[1670.63,3219.37],"regio":1,"sys":"R"},{"name":"Fairbridge","x":1666,"y":3224,"attach":[1665.8,3224.2],"regio":1,"sys":"R"},{"name":"Leabury","x":1661,"y":3229,"attach":[1661.19,3228.81],"regio":1,"sys":"R"},{"name":"Longcombe","x":1620,"y":3210,"attach":[1620.0,3210.0],"regio":1,"sys":"R"},{"name":"Brookdale","x":1701,"y":3180,"attach":[1701.1,3180.0],"regio":1,"sys":"R"},{"name":"Grimsbury","x":1692,"y":3180,"attach":[1692.1,3180.0],"regio":1,"sys":"R"},{"name":"Bramthwaite","x":1682,"y":3180,"attach":[1682.18,3180.0],"regio":1,"sys":"R"},{"name":"Larkthwaite","x":1674,"y":3180,"attach":[1674.07,3180.0],"regio":1,"sys":"R"},{"name":"Yarford","x":1665,"y":3181,"attach":[1665.26,3180.55],"regio":1,"sys":"R"},{"name":"Oakgate","x":1657,"y":3182,"attach":[1657.34,3182.03],"regio":1,"sys":"R"},{"name":"Salcote","x":1650,"y":3185,"attach":[1649.73,3184.73],"regio":1,"sys":"R"},{"name":"Fenby","x":1642,"y":3189,"attach":[1641.94,3189.23],"regio":1,"sys":"R"},{"name":"Woldbury","x":1635,"y":3195,"attach":[1635.11,3194.9],"regio":1,"sys":"R"},{"name":"Millley","x":1701,"y":3180,"attach":[1701.29,3180.0],"regio":1,"sys":"R"},{"name":"Birchton","x":1693,"y":3180,"attach":[1692.82,3180.0],"regio":1,"sys":"R"},{"name":"Long Yarwood","x":1684,"y":3180,"attach":[1684.01,3180.0],"regio":1,"sys":"R"},{"name":"Wakebrook","x":1674,"y":3180,"attach":[1674.07,3180.0],"regio":1,"sys":"R"},{"name":"Thurlham","x":1665,"y":3181,"attach":[1665.32,3180.54],"regio":1,"sys":"R"},{"name":"Beckton","x":1628,"y":3202,"attach":[1628.16,3201.84],"regio":1,"sys":"R"},{"name":"Heathsted","x":1649,"y":3185,"attach":[1648.85,3185.21],"regio":1,"sys":"R"},{"name":"Brentwell","x":1642,"y":3189,"attach":[1641.69,3189.43],"regio":1,"sys":"R"},{"name":"Fairthwaite","x":1635,"y":3195,"attach":[1635.01,3194.99],"regio":1,"sys":"R"},{"name":"Chungsia","x":1710,"y":1410,"attach":[1710,1410],"sys":"M"},{"name":"Hantsin","x":1740,"y":1530,"attach":[1740.0,1530.0],"sys":"M"},{"name":"Peiting Central","x":1230,"y":1530,"attach":[1230.0,1530.0],"sys":"M"},{"name":"Sianning","x":1522,"y":1410,"attach":[1521.93,1410.0],"sys":"M"},{"name":"Songqiao Airport","x":1398,"y":1410,"attach":[1397.76,1410.0],"sys":"M"},{"name":"Quanguan","x":1304,"y":1456,"attach":[1304.08,1455.92],"sys":"M"},{"name":"Linhai-Pu’an","x":1710,"y":1170,"attach":[1710.0,1170.0],"sys":"M"},{"name":"North Chungsia","x":1710,"y":1334,"attach":[1710.0,1333.8],"sys":"M"},{"name":"Pu’an","x":1710,"y":1269,"attach":[1710.0,1269.16],"sys":"M"},{"name":"Hengchu","x":1860,"y":1410,"attach":[1860.0,1410.0],"sys":"M"},{"name":"Farinport Central","x":540,"y":2130,"attach":[540,2130],"sys":"M"},{"name":"Amptonside Central","x":660,"y":2100,"attach":[660.0,2100.0],"sys":"M"},{"name":"Alderford Airport","x":576,"y":2102,"attach":[576.37,2102.32],"sys":"M"},{"name":"Willowbury","x":1590,"y":3420,"attach":[1590,3420],"regio":1,"sys":"R"},{"name":"Foxstead Junction","x":1620,"y":3450,"attach":[1620.0,3450.0],"regio":1,"sys":"R"},{"name":"Hunton","x":1615,"y":3420,"attach":[1614.53,3420.0],"regio":1,"sys":"R"},{"name":"Stockmere","x":1635,"y":3421,"attach":[1635.01,3420.57],"regio":1,"sys":"R"},{"name":"Kings Hawgate","x":1601,"y":3431,"attach":[1600.61,3430.61],"regio":1,"sys":"R"},{"name":"Thurlcote","x":1611,"y":3440,"attach":[1610.61,3440.4],"regio":1,"sys":"R"},{"name":"Birchcote","x":1637,"y":3450,"attach":[1637.5,3450.0],"regio":1,"sys":"R"},{"name":"Grimssted","x":1627,"y":3449,"attach":[1626.94,3449.09],"regio":1,"sys":"R"},{"name":"Salfield","x":1530,"y":3090,"attach":[1530,3090],"regio":1,"sys":"R"},{"name":"Burnminster Junction","x":1290,"y":3120,"attach":[1290.0,3120.0],"regio":1,"sys":"R"},{"name":"Cherrymore","x":1519,"y":3090,"attach":[1518.93,3090.0],"regio":1,"sys":"R"},{"name":"Fenmere","x":1509,"y":3090,"attach":[1509.09,3090.0],"regio":1,"sys":"R"},{"name":"Ulverholme","x":1498,"y":3090,"attach":[1498.12,3090.0],"regio":1,"sys":"R"},{"name":"Ulverthorpe","x":1486,"y":3090,"attach":[1486.43,3090.0],"regio":1,"sys":"R"},{"name":"Thornmere","x":1476,"y":3090,"attach":[1475.58,3090.0],"regio":1,"sys":"R"},{"name":"Crowbrook","x":1464,"y":3090,"attach":[1463.94,3090.0],"regio":1,"sys":"R"},{"name":"Willowwick","x":1453,"y":3090,"attach":[1452.79,3090.0],"regio":1,"sys":"R"},{"name":"Heathholme","x":1442,"y":3090,"attach":[1441.71,3090.0],"regio":1,"sys":"R"},{"name":"Ulverhurst","x":1431,"y":3090,"attach":[1431.36,3090.0],"regio":1,"sys":"R"},{"name":"Longcote","x":1419,"y":3090,"attach":[1419.44,3090.0],"regio":1,"sys":"R"},{"name":"Hawmore","x":1409,"y":3090,"attach":[1408.8,3090.0],"regio":1,"sys":"R"},{"name":"Barkton","x":1398,"y":3090,"attach":[1397.94,3090.0],"regio":1,"sys":"R"},{"name":"Newstead","x":1386,"y":3090,"attach":[1385.53,3090.0],"regio":1,"sys":"R"},{"name":"Claybrook","x":1376,"y":3090,"attach":[1375.53,3090.0],"regio":1,"sys":"R"},{"name":"Foxcote","x":1364,"y":3090,"attach":[1363.92,3090.0],"regio":1,"sys":"R"},{"name":"Chalminster","x":1354,"y":3090,"attach":[1354.49,3090.0],"regio":1,"sys":"R"},{"name":"Coldham","x":1344,"y":3090,"attach":[1344.16,3090.0],"regio":1,"sys":"R"},{"name":"Elmmere","x":1335,"y":3091,"attach":[1334.82,3090.59],"regio":1,"sys":"R"},{"name":"Goldsted","x":1324,"y":3093,"attach":[1324.36,3092.91],"regio":1,"sys":"R"},{"name":"Rookwell","x":1316,"y":3097,"attach":[1316.18,3096.65],"regio":1,"sys":"R"},{"name":"Hunwood","x":1308,"y":3102,"attach":[1308.24,3102.3],"regio":1,"sys":"R"},{"name":"Lynstow","x":1535,"y":3085,"attach":[1535.09,3084.91],"regio":1,"sys":"R"},{"name":"Woodhurst","x":1541,"y":3079,"attach":[1540.63,3079.37],"regio":1,"sys":"R"},{"name":"Rookhurst","x":1547,"y":3074,"attach":[1546.56,3073.7],"regio":1,"sys":"R"},{"name":"Leathwaite","x":1556,"y":3067,"attach":[1556.23,3066.63],"regio":1,"sys":"R"},{"name":"Todmere","x":1564,"y":3063,"attach":[1563.6,3063.14],"regio":1,"sys":"R"},{"name":"Beckdale","x":1570,"y":3061,"attach":[1570.44,3061.1],"regio":1,"sys":"R"},{"name":"Newthorpe","x":1578,"y":3060,"attach":[1578.08,3060.29],"regio":1,"sys":"R"},{"name":"Chalcote","x":1586,"y":3060,"attach":[1585.59,3060.0],"regio":1,"sys":"R"},{"name":"Goldbrook","x":1594,"y":3060,"attach":[1593.99,3060.0],"regio":1,"sys":"R"},{"name":"Ashfield","x":1610,"y":3060,"attach":[1609.78,3060.0],"regio":1,"sys":"R"},{"name":"Whitbury","x":1530,"y":3240,"attach":[1530.0,3240.0],"regio":1,"sys":"R"},{"name":"Wykebury","x":1530,"y":3100,"attach":[1530.0,3100.17],"regio":1,"sys":"R"},{"name":"Penby","x":1530,"y":3112,"attach":[1530.0,3112.06],"regio":1,"sys":"R"},{"name":"Swanstow","x":1530,"y":3122,"attach":[1530.0,3122.24],"regio":1,"sys":"R"},{"name":"Ryebridge","x":1530,"y":3133,"attach":[1530.0,3132.66],"regio":1,"sys":"R"},{"name":"Bradstead","x":1530,"y":3143,"attach":[1530.0,3143.02],"regio":1,"sys":"R"},{"name":"Silham","x":1530,"y":3154,"attach":[1530.0,3154.29],"regio":1,"sys":"R"},{"name":"Ormwick","x":1530,"y":3168,"attach":[1530.0,3167.87],"regio":1,"sys":"R"},{"name":"Kings Wickden","x":1530,"y":3179,"attach":[1530.0,3178.88],"regio":1,"sys":"R"},{"name":"Southham","x":1530,"y":3189,"attach":[1530.0,3188.93],"regio":1,"sys":"R"},{"name":"Ulverbury","x":1530,"y":3200,"attach":[1530.0,3200.37],"regio":1,"sys":"R"},{"name":"Heaththwaite","x":1530,"y":3212,"attach":[1530.0,3211.5],"regio":1,"sys":"R"},{"name":"Northwell","x":1521,"y":3100,"attach":[1520.73,3099.62],"regio":1,"sys":"R"},{"name":"Chalstow","x":1515,"y":3112,"attach":[1515.32,3112.1],"regio":1,"sys":"R"},{"name":"Hartstead","x":1515,"y":3124,"attach":[1515.0,3124.49],"regio":1,"sys":"R"},{"name":"Southcote","x":1515,"y":3137,"attach":[1515.0,3136.66],"regio":1,"sys":"R"},{"name":"Coldminster","x":1515,"y":3150,"attach":[1515.0,3149.77],"regio":1,"sys":"R"},{"name":"Ormmere","x":1515,"y":3164,"attach":[1515.0,3164.31],"regio":1,"sys":"R"},{"name":"Redby","x":1515,"y":3177,"attach":[1515.0,3176.96],"regio":1,"sys":"R"},{"name":"Netherthwaite","x":1515,"y":3190,"attach":[1515.0,3189.85],"regio":1,"sys":"R"},{"name":"Saxeminster","x":1515,"y":3203,"attach":[1515.0,3202.77],"regio":1,"sys":"R"},{"name":"Yenchia Main","x":1830,"y":1170,"attach":[1830.0,1170.0],"sys":"M"},{"name":"Leaminster","x":1650,"y":3960,"attach":[1650,3960],"regio":1,"sys":"R"},{"name":"Marlbury","x":1650,"y":3870,"attach":[1650.0,3870.0],"sys":"MR"},{"name":"Cherrystow","x":1650,"y":3940,"attach":[1650.0,3940.27],"regio":1,"sys":"R"},{"name":"Stockbridge","x":1650,"y":3921,"attach":[1650.0,3920.98],"regio":1,"sys":"R"},{"name":"Elmbury","x":1650,"y":3910,"attach":[1650.0,3909.86],"regio":1,"sys":"R"},{"name":"Blackdale","x":1650,"y":3899,"attach":[1650.0,3898.57],"regio":1,"sys":"R"},{"name":"Atlantic Airport","x":1650,"y":3930,"attach":[1650.0,3930.0],"sys":"MR"},{"name":"Willowholme","x":1650,"y":3950,"attach":[1650.0,3949.79],"regio":1,"sys":"R"},{"name":"Claystead","x":1650,"y":3936,"attach":[1650.0,3936.24],"regio":1,"sys":"R"},{"name":"Brentmore","x":1650,"y":3921,"attach":[1650.0,3921.03],"regio":1,"sys":"R"},{"name":"Grimswick","x":1650,"y":3912,"attach":[1650.0,3911.95],"regio":1,"sys":"R"},{"name":"Ashcote","x":1650,"y":3901,"attach":[1650.0,3901.43],"regio":1,"sys":"R"},{"name":"Highham","x":1650,"y":3892,"attach":[1650.0,3891.8],"regio":1,"sys":"R"},{"name":"Yarby","x":1650,"y":3883,"attach":[1650.0,3882.99],"regio":1,"sys":"R"},{"name":"Silwick","x":1650,"y":3873,"attach":[1650.0,3872.7],"regio":1,"sys":"R"},{"name":"Redham","x":1650,"y":3864,"attach":[1650.0,3863.55],"regio":1,"sys":"R"},{"name":"Thornmore","x":1650,"y":3854,"attach":[1650.0,3853.95],"regio":1,"sys":"R"},{"name":"Long Crowwick","x":1650,"y":3845,"attach":[1650.0,3845.24],"regio":1,"sys":"R"},{"name":"Meldale","x":1650,"y":3837,"attach":[1650.0,3836.57],"regio":1,"sys":"R"},{"name":"Wakefield","x":1650,"y":3829,"attach":[1650.0,3828.6],"regio":1,"sys":"R"},{"name":"Sutmere","x":1650,"y":3820,"attach":[1650.0,3820.4],"regio":1,"sys":"R"},{"name":"Marfield","x":1650,"y":3812,"attach":[1650.0,3812.4],"regio":1,"sys":"R"},{"name":"Ormwell","x":1650,"y":3804,"attach":[1650.0,3804.36],"regio":1,"sys":"R"},{"name":"Holmholme","x":1650,"y":3795,"attach":[1650.0,3795.35],"regio":1,"sys":"R"},{"name":"Cherrycombe","x":1650,"y":3786,"attach":[1650.0,3786.5],"regio":1,"sys":"R"},{"name":"Redden","x":1650,"y":3778,"attach":[1650.0,3777.9],"regio":1,"sys":"R"},{"name":"Saxecombe","x":1650,"y":3769,"attach":[1650.0,3769.25],"regio":1,"sys":"R"},{"name":"Kirkfield","x":1650,"y":3760,"attach":[1650.0,3760.44],"regio":1,"sys":"R"},{"name":"Weswell","x":1650,"y":3752,"attach":[1650.0,3752.44],"regio":1,"sys":"R"},{"name":"Thurlden","x":1650,"y":3743,"attach":[1650.0,3742.81],"regio":1,"sys":"R"},{"name":"Swanbrook","x":1440,"y":3930,"attach":[1440.0,3930.0],"regio":1,"sys":"R"},{"name":"Elmwick","x":1643,"y":3953,"attach":[1642.54,3952.54],"regio":1,"sys":"R"},{"name":"Shepthwaite","x":1634,"y":3944,"attach":[1633.67,3943.89],"regio":1,"sys":"R"},{"name":"Great Foxley","x":1626,"y":3938,"attach":[1625.84,3937.75],"regio":1,"sys":"R"},{"name":"Oakdale","x":1616,"y":3933,"attach":[1616.17,3933.07],"regio":1,"sys":"R"},{"name":"Yarcote","x":1607,"y":3931,"attach":[1606.7,3930.73],"regio":1,"sys":"R"},{"name":"Ashford","x":1595,"y":3930,"attach":[1594.69,3930.0],"regio":1,"sys":"R"},{"name":"Hunwell","x":1585,"y":3930,"attach":[1584.53,3930.0],"regio":1,"sys":"R"},{"name":"Goldden","x":1572,"y":3930,"attach":[1572.21,3930.0],"regio":1,"sys":"R"},{"name":"Stockthwaite","x":1562,"y":3930,"attach":[1561.8,3930.0],"regio":1,"sys":"R"},{"name":"Kirkhurst","x":1553,"y":3930,"attach":[1552.56,3930.0],"regio":1,"sys":"R"},{"name":"Langfield","x":1542,"y":3930,"attach":[1541.75,3930.0],"regio":1,"sys":"R"},{"name":"Lynthwaite","x":1529,"y":3930,"attach":[1529.35,3930.0],"regio":1,"sys":"R"},{"name":"Clayfield","x":1517,"y":3930,"attach":[1517.11,3930.0],"regio":1,"sys":"R"},{"name":"Winton","x":1506,"y":3930,"attach":[1505.84,3930.0],"regio":1,"sys":"R"},{"name":"Bramsted","x":1495,"y":3930,"attach":[1495.3,3930.0],"regio":1,"sys":"R"},{"name":"Ormton","x":1483,"y":3930,"attach":[1482.9,3930.0],"regio":1,"sys":"R"},{"name":"Barkwick","x":1458,"y":3930,"attach":[1458.03,3930.0],"regio":1,"sys":"R"},{"name":"Chalbrook Junction","x":1650,"y":3840,"attach":[1650.0,3840.0],"regio":1,"sys":"R"},{"name":"Brentby","x":1650,"y":3950,"attach":[1650.0,3950.12],"regio":1,"sys":"R"},{"name":"Goldham","x":1650,"y":3939,"attach":[1650.0,3939.08],"regio":1,"sys":"R"},{"name":"Goldton","x":1650,"y":3929,"attach":[1650.0,3929.0],"regio":1,"sys":"R"},{"name":"Malden","x":1650,"y":3917,"attach":[1650.0,3917.43],"regio":1,"sys":"R"},{"name":"Highley","x":1650,"y":3905,"attach":[1650.0,3904.84],"regio":1,"sys":"R"},{"name":"Walbury","x":1650,"y":3893,"attach":[1650.0,3893.19],"regio":1,"sys":"R"},{"name":"Woodbrook","x":1650,"y":3882,"attach":[1650.0,3882.38],"regio":1,"sys":"R"},{"name":"Wykested","x":1650,"y":3871,"attach":[1650.0,3870.87],"regio":1,"sys":"R"},{"name":"Waketon","x":1320,"y":2970,"attach":[1320,2970],"regio":1,"sys":"R"},{"name":"Stockmore","x":1500,"y":2940,"attach":[1500.0,2940.0],"regio":1,"sys":"R"},{"name":"Northminster","x":1331,"y":2970,"attach":[1331.28,2970.0],"regio":1,"sys":"R"},{"name":"Hunhurst","x":1343,"y":2970,"attach":[1343.13,2970.0],"regio":1,"sys":"R"},{"name":"Melgate","x":1354,"y":2970,"attach":[1353.99,2970.0],"regio":1,"sys":"R"},{"name":"Yarmore","x":1367,"y":2970,"attach":[1366.61,2970.0],"regio":1,"sys":"R"},{"name":"Wakeham","x":1378,"y":2970,"attach":[1378.06,2970.0],"regio":1,"sys":"R"},{"name":"Leawell","x":1389,"y":2970,"attach":[1388.96,2970.0],"regio":1,"sys":"R"},{"name":"Brambrook","x":1401,"y":2970,"attach":[1401.3,2970.0],"regio":1,"sys":"R"},{"name":"Claycombe","x":1412,"y":2970,"attach":[1412.49,2970.0],"regio":1,"sys":"R"},{"name":"Eastminster","x":1424,"y":2970,"attach":[1423.84,2970.0],"regio":1,"sys":"R"},{"name":"Elmfield","x":1436,"y":2970,"attach":[1436.12,2970.0],"regio":1,"sys":"R"},{"name":"Longthwaite","x":1446,"y":2970,"attach":[1446.45,2970.0],"regio":1,"sys":"R"},{"name":"Bradgate","x":1458,"y":2969,"attach":[1457.64,2969.19],"regio":1,"sys":"R"},{"name":"Fenbridge","x":1469,"y":2966,"attach":[1469.32,2965.77],"regio":1,"sys":"R"},{"name":"Kingsferry","x":1200,"y":2970,"attach":[1200.0,2970.0],"sys":"MR"},{"name":"Grimswell","x":1302,"y":2970,"attach":[1302.26,2970.0],"regio":1,"sys":"R"},{"name":"Ryecote","x":1293,"y":2970,"attach":[1292.6,2970.0],"regio":1,"sys":"R"},{"name":"Oldwood","x":1283,"y":2970,"attach":[1282.69,2970.0],"regio":1,"sys":"R"},{"name":"Coldstead","x":1272,"y":2970,"attach":[1272.22,2970.0],"regio":1,"sys":"R"},{"name":"Coldstow","x":1263,"y":2970,"attach":[1262.84,2970.0],"regio":1,"sys":"R"},{"name":"Oakminster","x":1252,"y":2970,"attach":[1252.22,2970.0],"regio":1,"sys":"R"},{"name":"Stockwood","x":1243,"y":2970,"attach":[1243.15,2970.0],"regio":1,"sys":"R"},{"name":"Fairsted","x":1233,"y":2970,"attach":[1232.63,2970.0],"regio":1,"sys":"R"},{"name":"Malwell","x":1224,"y":2970,"attach":[1223.93,2970.0],"regio":1,"sys":"R"},{"name":"Bradbrook","x":1200,"y":2820,"attach":[1200.0,2820.0],"regio":1,"sys":"R"},{"name":"Oldcote","x":1320,"y":2960,"attach":[1320.0,2960.46],"regio":1,"sys":"R"},{"name":"Netherbury","x":1320,"y":2951,"attach":[1319.66,2951.33],"regio":1,"sys":"R"},{"name":"Elmby","x":1318,"y":2943,"attach":[1317.77,2942.53],"regio":1,"sys":"R"},{"name":"Grimsmere","x":1314,"y":2934,"attach":[1313.54,2934.37],"regio":1,"sys":"R"},{"name":"Southmore","x":1308,"y":2928,"attach":[1308.44,2928.44],"regio":1,"sys":"R"},{"name":"Ryestead","x":1302,"y":2922,"attach":[1301.54,2921.54],"regio":1,"sys":"R"},{"name":"Shepton","x":1295,"y":2915,"attach":[1295.11,2915.11],"regio":1,"sys":"R"},{"name":"Warthorpe","x":1289,"y":2909,"attach":[1288.98,2908.98],"regio":1,"sys":"R"},{"name":"Stockcombe","x":1282,"y":2902,"attach":[1282.05,2902.05],"regio":1,"sys":"R"},{"name":"Winthorpe","x":1276,"y":2896,"attach":[1275.93,2895.93],"regio":1,"sys":"R"},{"name":"Swanwood","x":1270,"y":2890,"attach":[1269.62,2889.62],"regio":1,"sys":"R"},{"name":"Sutstead","x":1264,"y":2884,"attach":[1264.44,2884.44],"regio":1,"sys":"R"},{"name":"Netherfield","x":1259,"y":2879,"attach":[1258.75,2878.75],"regio":1,"sys":"R"},{"name":"Eastfield","x":1253,"y":2873,"attach":[1253.49,2873.49],"regio":1,"sys":"R"},{"name":"Eastwick","x":1246,"y":2866,"attach":[1246.21,2866.21],"regio":1,"sys":"R"},{"name":"Woodminster","x":1240,"y":2860,"attach":[1239.78,2859.78],"regio":1,"sys":"R"},{"name":"Crowford","x":1233,"y":2853,"attach":[1233.46,2853.46],"regio":1,"sys":"R"},{"name":"Oldminster","x":1208,"y":2828,"attach":[1208.16,2828.16],"regio":1,"sys":"R"},{"name":"Wakewood","x":1221,"y":2841,"attach":[1221.28,2841.28],"regio":1,"sys":"R"},{"name":"Langham","x":1215,"y":2835,"attach":[1214.96,2834.96],"regio":1,"sys":"R"},{"name":"Wykethorpe","x":1313,"y":2977,"attach":[1313.43,2976.57],"regio":1,"sys":"R"},{"name":"Thornham","x":1307,"y":2983,"attach":[1307.18,2982.82],"regio":1,"sys":"R"},{"name":"Melton","x":1302,"y":2989,"attach":[1301.85,2988.78],"regio":1,"sys":"R"},{"name":"Walbridge","x":1297,"y":2996,"attach":[1296.9,2995.72],"regio":1,"sys":"R"},{"name":"Grimsstead","x":1293,"y":3004,"attach":[1292.92,3004.36],"regio":1,"sys":"R"},{"name":"Rookgate","x":1291,"y":3011,"attach":[1290.92,3011.17],"regio":1,"sys":"R"},{"name":"Marwick","x":1290,"y":3019,"attach":[1290.25,3018.53],"regio":1,"sys":"R"},{"name":"Moorford","x":1290,"y":3027,"attach":[1290.0,3026.52],"regio":1,"sys":"R"},{"name":"Quarrthwaite","x":1290,"y":3034,"attach":[1290.0,3033.5],"regio":1,"sys":"R"},{"name":"Langcote","x":1290,"y":3041,"attach":[1290.0,3040.82],"regio":1,"sys":"R"},{"name":"Melcote","x":1290,"y":3049,"attach":[1290.0,3048.69],"regio":1,"sys":"R"},{"name":"Melminster","x":1290,"y":3058,"attach":[1290.0,3057.51],"regio":1,"sys":"R"},{"name":"Shepwick","x":1290,"y":3065,"attach":[1290.0,3064.68],"regio":1,"sys":"R"},{"name":"Cotham","x":1290,"y":3073,"attach":[1290.0,3073.36],"regio":1,"sys":"R"},{"name":"Waterbridge","x":1290,"y":3082,"attach":[1290.0,3082.13],"regio":1,"sys":"R"},{"name":"Saxehurst","x":1290,"y":3091,"attach":[1290.0,3090.84],"regio":1,"sys":"R"},{"name":"Warwood","x":1290,"y":3099,"attach":[1290.0,3099.08],"regio":1,"sys":"R"},{"name":"Stanbrook","x":1320,"y":2980,"attach":[1320.0,2980.04],"regio":1,"sys":"R"},{"name":"Moorley","x":1320,"y":2990,"attach":[1320.0,2990.49],"regio":1,"sys":"R"},{"name":"Swanbury","x":1320,"y":3000,"attach":[1320.0,3000.47],"regio":1,"sys":"R"},{"name":"Longmore","x":1320,"y":3010,"attach":[1320.0,3009.66],"regio":1,"sys":"R"},{"name":"Wykethwaite","x":1320,"y":3020,"attach":[1320.0,3020.08],"regio":1,"sys":"R"},{"name":"Quarrthorpe","x":1320,"y":3030,"attach":[1320.0,3030.37],"regio":1,"sys":"R"},{"name":"Langbury","x":1320,"y":3042,"attach":[1319.6,3042.34],"regio":1,"sys":"R"},{"name":"Millminster","x":1318,"y":3053,"attach":[1317.84,3052.59],"regio":1,"sys":"R"},{"name":"Swanwell","x":1314,"y":3062,"attach":[1314.07,3062.16],"regio":1,"sys":"R"},{"name":"Warstow","x":1308,"y":3071,"attach":[1307.98,3071.3],"regio":1,"sys":"R"},{"name":"Barkwood","x":1301,"y":3079,"attach":[1300.96,3079.04],"regio":1,"sys":"R"},{"name":"Woodley","x":1292,"y":3088,"attach":[1291.77,3088.23],"regio":1,"sys":"R"},{"name":"Highwood","x":1270,"y":3110,"attach":[1270.28,3109.72],"regio":1,"sys":"R"},{"name":"Woldworth","x":1277,"y":3103,"attach":[1277.29,3102.71],"regio":1,"sys":"R"},{"name":"Havenbolme Hbf","x":600,"y":2580,"attach":[600.0,2580.0],"sys":"M"},{"name":"Binchester","x":720,"y":2910,"attach":[720.0,2910.0],"regio":1,"sys":"M"},{"name":"Whitehurst","x":1020,"y":2670,"attach":[1020.0,2670.0],"sys":"M"},{"name":"Longmere","x":1470,"y":3930,"attach":[1470.0,3930.0],"regio":1,"sys":"R"},{"name":"Beckham","x":1440,"y":4020,"attach":[1440.0,4020.0],"regio":1,"sys":"R"},{"name":"Wykemore","x":1440,"y":3943,"attach":[1440.0,3943.11],"regio":1,"sys":"R"},{"name":"Melholme","x":1440,"y":3957,"attach":[1440.0,3956.62],"regio":1,"sys":"R"},{"name":"Winden","x":1440,"y":3969,"attach":[1440.0,3969.35],"regio":1,"sys":"R"},{"name":"Holmstow","x":1440,"y":3981,"attach":[1440.0,3981.0],"regio":1,"sys":"R"},{"name":"Ulverton","x":1440,"y":3992,"attach":[1440.0,3991.97],"regio":1,"sys":"R"},{"name":"Waterwick","x":1620,"y":4050,"attach":[1620.0,4050.0],"regio":1,"sys":"R"},{"name":"Kirkcombe","x":1448,"y":3938,"attach":[1448.2,3938.2],"regio":1,"sys":"R"},{"name":"Ryeham","x":1456,"y":3946,"attach":[1456.23,3946.23],"regio":1,"sys":"R"},{"name":"Northham","x":1465,"y":3955,"attach":[1464.96,3954.96],"regio":1,"sys":"R"},{"name":"Birchthorpe","x":1473,"y":3963,"attach":[1473.3,3963.3],"regio":1,"sys":"R"},{"name":"Crowworth","x":1480,"y":3970,"attach":[1480.04,3970.04],"regio":1,"sys":"R"},{"name":"Birchby","x":1487,"y":3977,"attach":[1487.28,3977.28],"regio":1,"sys":"R"},{"name":"Hunwick","x":1495,"y":3985,"attach":[1494.65,3984.65],"regio":1,"sys":"R"},{"name":"Grimsfield","x":1502,"y":3992,"attach":[1502.28,3992.28],"regio":1,"sys":"R"},{"name":"Holmthwaite","x":1511,"y":4001,"attach":[1510.73,4000.73],"regio":1,"sys":"R"},{"name":"Redthorpe","x":1519,"y":4009,"attach":[1518.57,4008.57],"regio":1,"sys":"R"},{"name":"Highfield","x":1526,"y":4016,"attach":[1525.64,4015.64],"regio":1,"sys":"R"},{"name":"Sutley","x":1533,"y":4023,"attach":[1532.66,4022.66],"regio":1,"sys":"R"},{"name":"Heathcombe","x":1540,"y":4030,"attach":[1540.46,4030.46],"regio":1,"sys":"R"},{"name":"Saxestead","x":1548,"y":4037,"attach":[1548.02,4037.42],"regio":1,"sys":"R"},{"name":"Chalby","x":1556,"y":4043,"attach":[1556.13,4043.15],"regio":1,"sys":"R"},{"name":"Woodcombe","x":1566,"y":4047,"attach":[1565.97,4047.41],"regio":1,"sys":"R"},{"name":"Waterfield","x":1577,"y":4050,"attach":[1577.32,4049.57],"regio":1,"sys":"R"},{"name":"Burnstead","x":1594,"y":4050,"attach":[1593.9,4050.0],"regio":1,"sys":"R"},{"name":"Brentley","x":1470,"y":3750,"attach":[1470.0,3750.0],"regio":1,"sys":"R"},{"name":"Heathden","x":1448,"y":3922,"attach":[1447.54,3922.46],"regio":1,"sys":"R"},{"name":"Northton","x":1454,"y":3916,"attach":[1454.25,3915.75],"regio":1,"sys":"R"},{"name":"Burnmore","x":1461,"y":3907,"attach":[1461.26,3907.47],"regio":1,"sys":"R"},{"name":"Hazeldale","x":1465,"y":3900,"attach":[1465.29,3900.22],"regio":1,"sys":"R"},{"name":"Thurlbury","x":1468,"y":3892,"attach":[1468.11,3892.19],"regio":1,"sys":"R"},{"name":"Cherrysted","x":1470,"y":3882,"attach":[1469.66,3882.49],"regio":1,"sys":"R"},{"name":"Silworth","x":1470,"y":3873,"attach":[1470.0,3872.9],"regio":1,"sys":"R"},{"name":"Cherrybury","x":1470,"y":3863,"attach":[1470.0,3863.01],"regio":1,"sys":"R"},{"name":"Heathstow","x":1470,"y":3853,"attach":[1470.0,3853.09],"regio":1,"sys":"R"},{"name":"Sandfield","x":1470,"y":3844,"attach":[1470.0,3843.84],"regio":1,"sys":"R"},{"name":"Kirkden","x":1470,"y":3833,"attach":[1470.0,3832.85],"regio":1,"sys":"R"},{"name":"Newmore","x":1470,"y":3823,"attach":[1470.0,3823.01],"regio":1,"sys":"R"},{"name":"Willowdale","x":1470,"y":3813,"attach":[1470.0,3813.3],"regio":1,"sys":"R"},{"name":"Stanmere","x":1470,"y":3803,"attach":[1470.0,3803.4],"regio":1,"sys":"R"},{"name":"Nethersted","x":1470,"y":3792,"attach":[1470.0,3792.33],"regio":1,"sys":"R"},{"name":"Barkholme","x":1470,"y":3782,"attach":[1470.0,3782.21],"regio":1,"sys":"R"},{"name":"Longbridge","x":1470,"y":3773,"attach":[1470.0,3773.17],"regio":1,"sys":"R"},{"name":"Northden","x":1530,"y":3330,"attach":[1530.0,3330.0],"regio":1,"sys":"R"},{"name":"Woodfield","x":1530,"y":3266,"attach":[1530.0,3265.73],"regio":1,"sys":"R"},{"name":"Moorwell","x":1530,"y":3277,"attach":[1530.0,3276.76],"regio":1,"sys":"R"},{"name":"Hazelthwaite","x":1530,"y":3289,"attach":[1530.0,3288.54],"regio":1,"sys":"R"},{"name":"Ellesmere","x":1770,"y":1770,"attach":[1770,1770],"sys":"M"},{"name":"Barton Central","x":1920,"y":1740,"attach":[1920.0,1740.0],"sys":"M"},{"name":"Fukow","x":1800,"y":1620,"attach":[1800.0,1620.0],"sys":"M"},{"name":"Zhennanguan","x":1800,"y":1711,"attach":[1800.0,1711.46],"sys":"M"},{"name":"Touraine-Central","x":1680,"y":1920,"attach":[1680.0,1920.0],"sys":"M"},{"name":"Prinsburg Central","x":2100,"y":1920,"attach":[2100.0,1920.0],"sys":"M"},{"name":"Valcourt","x":1890,"y":2820,"attach":[1890,2820],"sys":"M"},{"name":"Sulgen","x":2070,"y":3000,"attach":[2070.0,3000.0],"sys":"M"},{"name":"Kingsbury","x":1996,"y":2926,"attach":[1995.51,2925.51],"sys":"M"},{"name":"Cartier","x":1818,"y":2820,"attach":[1818.37,2820.0],"sys":"M"},{"name":"Chatham","x":2190,"y":2040,"attach":[2190,2040],"regio":1,"sys":"M"},{"name":"Meiyin","x":930,"y":1860,"attach":[930,1860],"sys":"M"},{"name":"Tsingshui","x":1087,"y":1703,"attach":[1087.17,1702.83],"sys":"M"},{"name":"Somerfield St John","x":960,"y":2040,"attach":[960.0,2040.0],"sys":"M"},{"name":"Millstead","x":750,"y":2010,"attach":[749.87,2010.13],"regio":1,"sys":"M"},{"name":"Swanley","x":1650,"y":3491,"attach":[1650.0,3491.24],"regio":1,"sys":"R"},{"name":"Weswick","x":1650,"y":3502,"attach":[1650.0,3501.52],"regio":1,"sys":"R"},{"name":"Thurldale","x":1650,"y":3513,"attach":[1650.0,3513.47],"regio":1,"sys":"R"},{"name":"Brookworth","x":1650,"y":3523,"attach":[1650.0,3523.31],"regio":1,"sys":"R"},{"name":"Millmore","x":1650,"y":3534,"attach":[1650.0,3533.75],"regio":1,"sys":"R"},{"name":"Blackby","x":1650,"y":3544,"attach":[1650.0,3543.73],"regio":1,"sys":"R"},{"name":"Yarstow","x":1650,"y":3555,"attach":[1650.0,3555.28],"regio":1,"sys":"R"},{"name":"Walley","x":1650,"y":3565,"attach":[1650.0,3565.47],"regio":1,"sys":"R"},{"name":"Brookholme","x":1650,"y":3574,"attach":[1650.0,3573.86],"regio":1,"sys":"R"},{"name":"Willowden","x":1650,"y":3584,"attach":[1650.0,3583.97],"regio":1,"sys":"R"},{"name":"Waterhurst","x":1650,"y":3594,"attach":[1650.0,3593.77],"regio":1,"sys":"R"},{"name":"Southgate","x":1650,"y":3604,"attach":[1650.0,3604.38],"regio":1,"sys":"R"},{"name":"Hazelbury","x":1650,"y":3613,"attach":[1650.0,3613.47],"regio":1,"sys":"R"},{"name":"Beckholme","x":1650,"y":3624,"attach":[1650.0,3623.85],"regio":1,"sys":"R"},{"name":"Wykeford","x":1650,"y":3634,"attach":[1650.0,3633.53],"regio":1,"sys":"R"},{"name":"Moorham","x":1650,"y":3642,"attach":[1650.0,3642.34],"regio":1,"sys":"R"},{"name":"Grimscote","x":1650,"y":3652,"attach":[1650.0,3652.32],"regio":1,"sys":"R"},{"name":"Goldfield","x":1650,"y":3703,"attach":[1650.0,3702.61],"regio":1,"sys":"R"},{"name":"Pendale","x":1650,"y":3674,"attach":[1650.0,3674.32],"regio":1,"sys":"R"},{"name":"Warden","x":1650,"y":3712,"attach":[1650.0,3711.92],"regio":1,"sys":"R"},{"name":"Highbrook","x":1650,"y":3694,"attach":[1650.0,3694.37],"regio":1,"sys":"R"},{"name":"Medway Central","x":1410,"y":3480,"attach":[1410.0,3480.0],"sys":"MR"},{"name":"Silthorpe","x":1636,"y":3480,"attach":[1635.71,3480.0],"regio":1,"sys":"R"},{"name":"Sandham","x":1623,"y":3480,"attach":[1622.9,3480.0],"regio":1,"sys":"R"},{"name":"Goldley","x":1614,"y":3480,"attach":[1614.16,3480.0],"regio":1,"sys":"R"},{"name":"Thurlwell","x":1604,"y":3480,"attach":[1604.16,3480.0],"regio":1,"sys":"R"},{"name":"Malthwaite","x":1595,"y":3480,"attach":[1594.98,3480.0],"regio":1,"sys":"R"},{"name":"Stockden","x":1585,"y":3480,"attach":[1584.68,3480.0],"regio":1,"sys":"R"},{"name":"Langmore","x":1576,"y":3480,"attach":[1575.73,3480.0],"regio":1,"sys":"R"},{"name":"Bramby","x":1564,"y":3480,"attach":[1564.11,3480.0],"regio":1,"sys":"R"},{"name":"Westhwaite","x":1554,"y":3480,"attach":[1554.34,3480.0],"regio":1,"sys":"R"},{"name":"Woodford","x":1543,"y":3480,"attach":[1543.44,3480.0],"regio":1,"sys":"R"},{"name":"Heathstead","x":1533,"y":3480,"attach":[1532.77,3480.0],"regio":1,"sys":"R"},{"name":"Melmore","x":1521,"y":3480,"attach":[1521.22,3480.0],"regio":1,"sys":"R"},{"name":"Crowmere","x":1511,"y":3480,"attach":[1510.56,3480.0],"regio":1,"sys":"R"},{"name":"Highstead","x":1499,"y":3480,"attach":[1499.01,3480.0],"regio":1,"sys":"R"},{"name":"Wesbridge","x":1489,"y":3480,"attach":[1489.2,3480.0],"regio":1,"sys":"R"},{"name":"Warbrook","x":1477,"y":3480,"attach":[1477.43,3480.0],"regio":1,"sys":"R"},{"name":"Ormcombe","x":1468,"y":3480,"attach":[1467.53,3480.0],"regio":1,"sys":"R"},{"name":"Thurlholme","x":1456,"y":3480,"attach":[1456.4,3480.0],"regio":1,"sys":"R"},{"name":"Yarthorpe","x":1446,"y":3480,"attach":[1446.03,3480.0],"regio":1,"sys":"R"},{"name":"Oldwick","x":1435,"y":3480,"attach":[1435.09,3480.0],"regio":1,"sys":"R"},{"name":"Larkcote","x":1080,"y":2760,"attach":[1080,2760],"regio":1,"sys":"R"},{"name":"Mapleriver Central","x":990,"y":2850,"attach":[990.0,2850.0],"sys":"MR"},{"name":"Stockley","x":1065,"y":2775,"attach":[1064.93,2775.07],"regio":1,"sys":"R"},{"name":"Hunby","x":1029,"y":2811,"attach":[1029.35,2810.65],"regio":1,"sys":"R"},{"name":"Leaby","x":1200,"y":2760,"attach":[1200.0,2760.0],"regio":1,"sys":"R"},{"name":"Newport","x":1106,"y":2760,"attach":[1106.39,2760.0],"sys":"MR"},{"name":"Bradford","x":1143,"y":2760,"attach":[1142.89,2760.0],"regio":1,"sys":"R"},{"name":"Marmore","x":1156,"y":2760,"attach":[1156.45,2760.0],"regio":1,"sys":"R"},{"name":"Bradthorpe","x":1170,"y":2760,"attach":[1169.83,2760.0],"regio":1,"sys":"R"},{"name":"Kelvinport","x":930,"y":3120,"attach":[930,3120],"regio":1,"sys":"M"},{"name":"Johnston","x":826,"y":3016,"attach":[825.82,3015.82],"regio":1,"sys":"M"},{"name":"Brunswick","x":2040,"y":2520,"attach":[2040,2520],"sys":"M"},{"name":"Springford","x":1955,"y":2435,"attach":[1955.26,2435.26],"sys":"M"},{"name":"Ashton","x":1847,"y":2327,"attach":[1846.72,2326.72],"sys":"M"},{"name":"Bayarfort","x":2130,"y":2910,"attach":[2130.0,2910.0],"sys":"M"},{"name":"Mareston","x":2130,"y":2664,"attach":[2130.0,2664.13],"sys":"M"},{"name":"Maidstone","x":2130,"y":2759,"attach":[2130.0,2758.57],"sys":"M"},{"name":"Merlaut","x":1470,"y":2490,"attach":[1470.0,2490.0],"sys":"M"},{"name":"Netherwood","x":1736,"y":2520,"attach":[1736.42,2520.0],"sys":"M"},{"name":"Kirkgate","x":1650,"y":3780,"attach":[1650.0,3780.0],"regio":1,"sys":"R"},{"name":"Dunwick","x":1650,"y":3734,"attach":[1650.0,3733.98],"regio":1,"sys":"R"},{"name":"Yarham","x":1650,"y":3741,"attach":[1650.0,3741.0],"regio":1,"sys":"R"},{"name":"Bradley","x":1650,"y":3749,"attach":[1650.0,3748.63],"regio":1,"sys":"R"},{"name":"Southstead","x":1650,"y":3755,"attach":[1650.0,3755.36],"regio":1,"sys":"R"},{"name":"Wesstow","x":1650,"y":3763,"attach":[1650.0,3763.26],"regio":1,"sys":"R"},{"name":"Elmham","x":1650,"y":3729,"attach":[1650.0,3729.01],"regio":1,"sys":"R"},{"name":"Cherrybridge","x":1650,"y":3737,"attach":[1650.0,3737.31],"regio":1,"sys":"R"},{"name":"Rookfield","x":1650,"y":3747,"attach":[1650.0,3746.54],"regio":1,"sys":"R"},{"name":"Highsted","x":1650,"y":3756,"attach":[1650.0,3755.91],"regio":1,"sys":"R"},{"name":"Stowham","x":1650,"y":3764,"attach":[1650.0,3764.35],"regio":1,"sys":"R"},{"name":"Fairham","x":1650,"y":3772,"attach":[1650.0,3772.26],"regio":1,"sys":"R"},{"name":"Eastmore","x":1650,"y":3781,"attach":[1650.0,3781.26],"regio":1,"sys":"R"},{"name":"Sandmere","x":1650,"y":3791,"attach":[1650.0,3791.0],"regio":1,"sys":"R"},{"name":"Leacombe","x":1650,"y":3800,"attach":[1650.0,3799.8],"regio":1,"sys":"R"},{"name":"Northmore","x":1650,"y":3809,"attach":[1650.0,3809.44],"regio":1,"sys":"R"},{"name":"Swancombe","x":1650,"y":3819,"attach":[1650.0,3819.16],"regio":1,"sys":"R"},{"name":"Foxden","x":1650,"y":3829,"attach":[1650.0,3829.22],"regio":1,"sys":"R"},{"name":"Millcombe Junction","x":1650,"y":3848,"attach":[1650.0,3848.29],"regio":1,"sys":"R"},{"name":"Waterminster","x":1770,"y":4050,"attach":[1770,4050],"regio":1,"sys":"R"},{"name":"Thurlmore","x":1763,"y":4043,"attach":[1762.86,4042.86],"regio":1,"sys":"R"},{"name":"Melhurst","x":1756,"y":4036,"attach":[1755.7,4035.7],"regio":1,"sys":"R"},{"name":"Kirkley","x":1748,"y":4028,"attach":[1748.43,4028.43],"regio":1,"sys":"R"},{"name":"Highmere","x":1741,"y":4021,"attach":[1740.82,4020.82],"regio":1,"sys":"R"},{"name":"Hazelstead","x":1734,"y":4014,"attach":[1734.0,4014.0],"regio":1,"sys":"R"},{"name":"Chalworth","x":1727,"y":4007,"attach":[1727.04,4007.04],"regio":1,"sys":"R"},{"name":"Newgate","x":1720,"y":4000,"attach":[1720.36,4000.36],"regio":1,"sys":"R"},{"name":"Holmcote","x":1714,"y":3994,"attach":[1713.87,3993.87],"regio":1,"sys":"R"},{"name":"Walby","x":1705,"y":3985,"attach":[1704.64,3984.64],"regio":1,"sys":"R"},{"name":"Upper Brentbridge","x":1697,"y":3977,"attach":[1697.06,3977.06],"regio":1,"sys":"R"},{"name":"Newhurst","x":1690,"y":3970,"attach":[1689.56,3969.56],"regio":1,"sys":"R"},{"name":"Millthorpe","x":1681,"y":3961,"attach":[1681.2,3961.2],"regio":1,"sys":"R"},{"name":"Birchmere","x":1674,"y":3954,"attach":[1673.85,3953.85],"regio":1,"sys":"R"},{"name":"Willowstead","x":1667,"y":3947,"attach":[1667.29,3947.29],"regio":1,"sys":"R"},{"name":"Southend","x":1650,"y":4050,"attach":[1650.0,4050.0],"sys":"MR"},{"name":"Todton","x":1759,"y":4050,"attach":[1759.09,4050.0],"regio":1,"sys":"R"},{"name":"Elmford","x":1748,"y":4050,"attach":[1748.04,4050.0],"regio":1,"sys":"R"},{"name":"Elmstead","x":1737,"y":4050,"attach":[1737.06,4050.0],"regio":1,"sys":"R"},{"name":"Fernham","x":1726,"y":4050,"attach":[1725.88,4050.0],"regio":1,"sys":"R"},{"name":"Saxebrook","x":1714,"y":4050,"attach":[1713.93,4050.0],"regio":1,"sys":"R"},{"name":"Wickstow","x":1703,"y":4050,"attach":[1702.95,4050.0],"regio":1,"sys":"R"},{"name":"Thurlbridge","x":1690,"y":4050,"attach":[1689.55,4050.0],"regio":1,"sys":"R"},{"name":"Clayworth","x":1679,"y":4050,"attach":[1678.65,4050.0],"regio":1,"sys":"R"},{"name":"Ravenstone","x":1080,"y":2640,"attach":[1080.0,2640.0],"sys":"M"},{"name":"Batavie","x":1470,"y":2010,"attach":[1470.0,2010.0],"sys":"M"},{"name":"Aéroport Parnay","x":1569,"y":1922,"attach":[1569.31,1921.6],"sys":"M"},{"name":"Pinehurst","x":1890,"y":1920,"attach":[1890.0,1920.0],"sys":"M"},{"name":"Bellerive","x":1650,"y":2010,"attach":[1650.0,2010.0],"sys":"M"},{"name":"Melmere","x":1620,"y":3330,"attach":[1620,3330],"regio":1,"sys":"R"},{"name":"Whitden","x":1590,"y":3300,"attach":[1590.0,3300.0],"regio":1,"sys":"R"},{"name":"Penthwaite","x":1649,"y":3333,"attach":[1649.12,3332.77],"regio":1,"sys":"R"},{"name":"Marbridge","x":1620,"y":3319,"attach":[1620.0,3318.61],"regio":1,"sys":"R"},{"name":"Melbrook","x":1620,"y":3311,"attach":[1620.0,3311.03],"regio":1,"sys":"R"},{"name":"Coldwood","x":1620,"y":3302,"attach":[1620.0,3302.24],"regio":1,"sys":"R"},{"name":"Fenhurst","x":1620,"y":3295,"attach":[1620.0,3295.1],"regio":1,"sys":"R"},{"name":"Brentcote","x":1620,"y":3287,"attach":[1620.0,3287.49],"regio":1,"sys":"R"},{"name":"Reddale","x":1620,"y":3279,"attach":[1620.0,3279.15],"regio":1,"sys":"R"},{"name":"Hawgate","x":1620,"y":3271,"attach":[1620.0,3271.13],"regio":1,"sys":"R"},{"name":"Hawwick","x":1620,"y":3264,"attach":[1620.0,3263.77],"regio":1,"sys":"R"},{"name":"Netherbrook","x":1620,"y":3221,"attach":[1620.0,3220.64],"regio":1,"sys":"R"},{"name":"Cherrygate","x":1620,"y":3249,"attach":[1620.0,3249.04],"regio":1,"sys":"R"},{"name":"Hawden","x":1620,"y":3240,"attach":[1620.0,3239.72],"regio":1,"sys":"R"},{"name":"Cherryden","x":1620,"y":3233,"attach":[1620.0,3232.65],"regio":1,"sys":"R"},{"name":"Lockton","x":1020,"y":2160,"attach":[1020,2160],"sys":"M"},{"name":"Norbourne","x":1080,"y":2325,"attach":[1080.0,2324.94],"sys":"M"},{"name":"Belwich East","x":892,"y":2160,"attach":[891.53,2160.0],"sys":"M"},{"name":"Amptonside Canal","x":742,"y":2160,"attach":[742.35,2160.0],"sys":"M"},{"name":"Flancourt-Est","x":1470,"y":2220,"attach":[1470.0,2220.0],"sys":"M"},{"name":"Grafton Central","x":1170,"y":2160,"attach":[1169.87,2160.0],"sys":"M"},{"name":"Becksted","x":1650,"y":3944,"attach":[1650.0,3944.03],"regio":1,"sys":"R"},{"name":"Wescombe","x":1650,"y":3968,"attach":[1650.0,3968.24],"regio":1,"sys":"R"},{"name":"Fernsted","x":1650,"y":3977,"attach":[1650.0,3976.79],"regio":1,"sys":"R"},{"name":"Malton","x":1650,"y":3990,"attach":[1650.0,3989.57],"regio":1,"sys":"R"},{"name":"Crowmore","x":1650,"y":4002,"attach":[1650.0,4002.09],"regio":1,"sys":"R"},{"name":"Willowstow","x":1650,"y":4017,"attach":[1650.0,4017.47],"regio":1,"sys":"R"},{"name":"Willowgate","x":1642,"y":3938,"attach":[1642.41,3937.59],"regio":1,"sys":"R"},{"name":"Larkstead","x":1634,"y":3946,"attach":[1634.34,3945.79],"regio":1,"sys":"R"},{"name":"Oakley","x":1627,"y":3955,"attach":[1627.49,3954.64],"regio":1,"sys":"R"},{"name":"Wakewick","x":1623,"y":3963,"attach":[1623.27,3963.18],"regio":1,"sys":"R"},{"name":"Barkminster","x":1621,"y":3973,"attach":[1620.76,3972.94],"regio":1,"sys":"R"},{"name":"Leasted","x":1620,"y":3984,"attach":[1620.0,3983.56],"regio":1,"sys":"R"},{"name":"Thurlthwaite","x":1620,"y":3995,"attach":[1620.0,3994.62],"regio":1,"sys":"R"},{"name":"Bradcombe","x":1620,"y":4005,"attach":[1620.0,4004.71],"regio":1,"sys":"R"},{"name":"Rookstow","x":1620,"y":4014,"attach":[1620.0,4014.42],"regio":1,"sys":"R"},{"name":"Coldmere","x":1620,"y":4025,"attach":[1620.0,4025.32],"regio":1,"sys":"R"},{"name":"Yuchow Central","x":750,"y":1560,"attach":[750.0,1560.0],"sys":"M"},{"name":"Shihmen","x":1050,"y":1650,"attach":[1050.0,1650.0],"sys":"M"},{"name":"Vindelle-Central","x":1620,"y":2880,"attach":[1620.0,2880.0],"sys":"MR"},{"name":"Saxeford","x":1200,"y":2940,"attach":[1200.0,2940.0],"regio":1,"sys":"R"},{"name":"Todham","x":1200,"y":2959,"attach":[1200.0,2959.09],"regio":1,"sys":"R"},{"name":"Wakestead","x":1205,"y":2975,"attach":[1204.86,2974.86],"regio":1,"sys":"R"},{"name":"Larkdale","x":1210,"y":2980,"attach":[1209.83,2979.83],"regio":1,"sys":"R"},{"name":"Marbury","x":1216,"y":2986,"attach":[1215.97,2985.97],"regio":1,"sys":"R"},{"name":"Cotgate","x":1222,"y":2992,"attach":[1221.62,2991.62],"regio":1,"sys":"R"},{"name":"Woodton","x":1227,"y":2997,"attach":[1226.81,2996.81],"regio":1,"sys":"R"},{"name":"Whitmere","x":1237,"y":3007,"attach":[1236.84,3006.84],"regio":1,"sys":"R"},{"name":"Beauvoir Docklands","x":1244,"y":3014,"attach":[1243.81,3013.81],"sys":"MR"},{"name":"Walwood","x":1249,"y":3020,"attach":[1249.09,3020.03],"regio":1,"sys":"R"},{"name":"Walcombe","x":1254,"y":3028,"attach":[1254.12,3027.94],"regio":1,"sys":"R"},{"name":"Lynthorpe","x":1257,"y":3035,"attach":[1257.13,3035.02],"regio":1,"sys":"R"},{"name":"Southley","x":1259,"y":3044,"attach":[1259.24,3043.72],"regio":1,"sys":"R"},{"name":"Winstow","x":1260,"y":3052,"attach":[1259.96,3051.57],"regio":1,"sys":"R"},{"name":"Netherby","x":1260,"y":3061,"attach":[1260.0,3060.89],"regio":1,"sys":"R"},{"name":"Millbridge","x":1260,"y":3068,"attach":[1260.0,3068.49],"regio":1,"sys":"R"},{"name":"Hartgate","x":1260,"y":3078,"attach":[1260.0,3078.25],"regio":1,"sys":"R"},{"name":"Quarrcombe","x":1260,"y":3086,"attach":[1260.0,3086.2],"regio":1,"sys":"R"},{"name":"Ulverley","x":1260,"y":3095,"attach":[1260.0,3094.56],"regio":1,"sys":"R"},{"name":"Oakbrook","x":1260,"y":3110,"attach":[1260.0,3109.97],"regio":1,"sys":"R"},{"name":"Heathworth","x":1200,"y":2961,"attach":[1200.0,2961.39],"regio":1,"sys":"R"},{"name":"Chalthorpe","x":1200,"y":2951,"attach":[1200.0,2951.48],"regio":1,"sys":"R"},{"name":"Langby","x":1200,"y":2942,"attach":[1200.0,2942.35],"regio":1,"sys":"R"},{"name":"Watersted","x":1200,"y":2934,"attach":[1200.0,2933.91],"regio":1,"sys":"R"},{"name":"Larkgate","x":1200,"y":2925,"attach":[1200.0,2924.79],"regio":1,"sys":"R"},{"name":"Cherrydale","x":1200,"y":2916,"attach":[1200.0,2916.4],"regio":1,"sys":"R"},{"name":"Blackminster","x":1200,"y":2908,"attach":[1200.0,2908.1],"regio":1,"sys":"R"},{"name":"Goldcombe","x":1200,"y":2899,"attach":[1200.0,2899.41],"regio":1,"sys":"R"},{"name":"Ashdale","x":1200,"y":2892,"attach":[1200.0,2892.37],"regio":1,"sys":"R"},{"name":"Longworth","x":1200,"y":2884,"attach":[1200.0,2883.67],"regio":1,"sys":"R"},{"name":"Oakton","x":1200,"y":2873,"attach":[1200.0,2872.92],"regio":1,"sys":"R"},{"name":"Woldminster","x":1200,"y":2865,"attach":[1200.0,2865.45],"regio":1,"sys":"R"},{"name":"Warstead","x":1200,"y":2857,"attach":[1200.0,2856.93],"regio":1,"sys":"R"},{"name":"Goldby","x":1200,"y":2849,"attach":[1200.0,2849.2],"regio":1,"sys":"R"},{"name":"Saxegate","x":1200,"y":2841,"attach":[1200.0,2841.03],"regio":1,"sys":"R"},{"name":"Ryestow","x":1386,"y":3480,"attach":[1386.19,3480.0],"regio":1,"sys":"R"},{"name":"Brooksted","x":1392,"y":3480,"attach":[1391.59,3480.0],"regio":1,"sys":"R"},{"name":"Langstead","x":1398,"y":3480,"attach":[1397.87,3480.0],"regio":1,"sys":"R"},{"name":"Southwood","x":1380,"y":3469,"attach":[1380.0,3469.02],"regio":1,"sys":"R"},{"name":"Quarrwick","x":1380,"y":3459,"attach":[1380.0,3458.99],"regio":1,"sys":"R"},{"name":"Bramworth","x":1380,"y":3449,"attach":[1380.0,3448.97],"regio":1,"sys":"R"},{"name":"Shepcote","x":1380,"y":3438,"attach":[1380.0,3438.15],"regio":1,"sys":"R"},{"name":"Brambridge","x":1380,"y":3425,"attach":[1380.0,3425.23],"regio":1,"sys":"R"},{"name":"Moorby","x":1380,"y":3414,"attach":[1380.0,3414.21],"regio":1,"sys":"R"},{"name":"Langgate","x":1381,"y":3400,"attach":[1381.3,3400.32],"regio":1,"sys":"R"},{"name":"Walthorpe","x":1385,"y":3390,"attach":[1384.96,3389.62],"regio":1,"sys":"R"},{"name":"Dunthwaite","x":1392,"y":3379,"attach":[1391.69,3379.1],"regio":1,"sys":"R"},{"name":"Swanfield","x":1400,"y":3370,"attach":[1399.51,3370.49],"regio":1,"sys":"R"},{"name":"Walwell","x":1407,"y":3363,"attach":[1406.55,3363.45],"regio":1,"sys":"R"},{"name":"Whitworth","x":1413,"y":3357,"attach":[1413.25,3356.75],"regio":1,"sys":"R"},{"name":"Beckden","x":1421,"y":3349,"attach":[1421.41,3348.59],"regio":1,"sys":"R"},{"name":"Heathwell","x":1415,"y":3485,"attach":[1415.18,3485.18],"regio":1,"sys":"R"},{"name":"Beckstow","x":1420,"y":3490,"attach":[1420.15,3490.15],"regio":1,"sys":"R"},{"name":"Thurlbrook","x":1425,"y":3495,"attach":[1425.31,3495.31],"regio":1,"sys":"R"},{"name":"Ryecombe","x":1430,"y":3501,"attach":[1430.37,3500.56],"regio":1,"sys":"R"},{"name":"Woldwood","x":1434,"y":3506,"attach":[1434.36,3505.58],"regio":1,"sys":"R"},{"name":"Hazelwood","x":1437,"y":3511,"attach":[1437.38,3511.2],"regio":1,"sys":"R"},{"name":"Heathgate","x":1439,"y":3517,"attach":[1439.18,3517.25],"regio":1,"sys":"R"},{"name":"Maldale","x":1440,"y":3525,"attach":[1439.96,3524.55],"regio":1,"sys":"R"},{"name":"Barkstow","x":1422,"y":3468,"attach":[1422.03,3467.97],"regio":1,"sys":"R"},{"name":"Willowsted","x":1431,"y":3460,"attach":[1431.24,3459.81],"regio":1,"sys":"R"},{"name":"Beckford","x":1441,"y":3454,"attach":[1440.69,3454.22],"regio":1,"sys":"R"},{"name":"Willowwood","x":1450,"y":3451,"attach":[1450.45,3451.1],"regio":1,"sys":"R"},{"name":"Fenley","x":1463,"y":3450,"attach":[1463.16,3450.0],"regio":1,"sys":"R"},{"name":"Shephurst","x":1475,"y":3450,"attach":[1474.95,3450.0],"regio":1,"sys":"R"},{"name":"Blackbridge","x":1486,"y":3450,"attach":[1485.96,3450.0],"regio":1,"sys":"R"},{"name":"Marcote","x":1499,"y":3450,"attach":[1499.48,3450.0],"regio":1,"sys":"R"},{"name":"Coldford","x":1511,"y":3450,"attach":[1510.52,3450.0],"regio":1,"sys":"R"},{"name":"Eaststead","x":1524,"y":3450,"attach":[1524.19,3450.0],"regio":1,"sys":"R"},{"name":"Fencote","x":1536,"y":3450,"attach":[1536.34,3450.0],"regio":1,"sys":"R"},{"name":"Swanden","x":1547,"y":3450,"attach":[1546.96,3450.0],"regio":1,"sys":"R"},{"name":"Walgate","x":1560,"y":3450,"attach":[1559.9,3450.0],"regio":1,"sys":"R"},{"name":"Chalsted","x":1572,"y":3450,"attach":[1572.23,3450.0],"regio":1,"sys":"R"},{"name":"Silfield","x":1582,"y":3450,"attach":[1582.23,3450.0],"regio":1,"sys":"R"},{"name":"Kirkthwaite","x":1592,"y":3450,"attach":[1592.47,3450.0],"regio":1,"sys":"R"},{"name":"Leastead","x":1416,"y":3474,"attach":[1415.77,3474.23],"regio":1,"sys":"R"},{"name":"Newby","x":1422,"y":3468,"attach":[1421.81,3468.19],"regio":1,"sys":"R"},{"name":"Clayby","x":1428,"y":3462,"attach":[1427.76,3461.68],"regio":1,"sys":"R"},{"name":"Kirkbridge","x":1432,"y":3456,"attach":[1432.02,3456.27],"regio":1,"sys":"R"},{"name":"Penthorpe","x":1435,"y":3450,"attach":[1435.37,3450.08],"regio":1,"sys":"R"},{"name":"Wooddale","x":1438,"y":3442,"attach":[1438.05,3442.42],"regio":1,"sys":"R"},{"name":"Oakstow","x":1440,"y":3434,"attach":[1439.5,3434.2],"regio":1,"sys":"R"},{"name":"Grimscombe","x":1440,"y":3426,"attach":[1440.0,3426.02],"regio":1,"sys":"R"},{"name":"Quarrmere","x":1440,"y":3418,"attach":[1440.0,3418.08],"regio":1,"sys":"R"},{"name":"Salmore","x":1440,"y":3411,"attach":[1440.0,3410.59],"regio":1,"sys":"R"},{"name":"Hartmere","x":1440,"y":3402,"attach":[1440.0,3402.4],"regio":1,"sys":"R"},{"name":"Beckwell","x":1440,"y":3395,"attach":[1440.0,3395.23],"regio":1,"sys":"R"},{"name":"Waterwell","x":1440,"y":3387,"attach":[1440.0,3386.96],"regio":1,"sys":"R"},{"name":"Shepminster","x":1440,"y":3380,"attach":[1440.0,3379.82],"regio":1,"sys":"R"},{"name":"Holmstead","x":1440,"y":3373,"attach":[1440.0,3372.53],"regio":1,"sys":"R"},{"name":"Northstow","x":1440,"y":3365,"attach":[1440.0,3365.01],"regio":1,"sys":"R"},{"name":"Lynmere","x":1440,"y":3357,"attach":[1440.0,3357.35],"regio":1,"sys":"R"},{"name":"Sandcombe","x":1440,"y":3348,"attach":[1440.0,3348.44],"regio":1,"sys":"R"},{"name":"Moorcombe","x":1440,"y":3780,"attach":[1440.0,3780.0],"regio":1,"sys":"R"},{"name":"Larkholme","x":1462,"y":3922,"attach":[1462.36,3922.36],"regio":1,"sys":"R"},{"name":"Warmore","x":1456,"y":3916,"attach":[1455.79,3915.79],"regio":1,"sys":"R"},{"name":"Rotherham","x":1443,"y":3896,"attach":[1443.0,3895.93],"regio":1,"sys":"R"},{"name":"Brentwood","x":1441,"y":3888,"attach":[1440.8,3887.5],"regio":1,"sys":"R"},{"name":"Fenbury","x":1440,"y":3877,"attach":[1440.0,3877.4],"regio":1,"sys":"R"},{"name":"Todbrook","x":1440,"y":3866,"attach":[1440.0,3865.61],"regio":1,"sys":"R"},{"name":"Todsted","x":1440,"y":3854,"attach":[1440.0,3854.07],"regio":1,"sys":"R"},{"name":"Moorstow","x":1440,"y":3844,"attach":[1440.0,3843.63],"regio":1,"sys":"R"},{"name":"Cotfield","x":1440,"y":3831,"attach":[1440.0,3830.58],"regio":1,"sys":"R"},{"name":"Foxham","x":1440,"y":3820,"attach":[1440.0,3820.26],"regio":1,"sys":"R"},{"name":"Hartwell","x":1440,"y":3808,"attach":[1440.0,3808.29],"regio":1,"sys":"R"},{"name":"Moorworth","x":1461,"y":3921,"attach":[1461.13,3921.13],"regio":1,"sys":"R"},{"name":"Grimshurst","x":1453,"y":3913,"attach":[1453.43,3913.11],"regio":1,"sys":"R"},{"name":"Holmmore","x":1447,"y":3905,"attach":[1447.3,3905.01],"regio":1,"sys":"R"},{"name":"Northholme","x":1443,"y":3895,"attach":[1442.64,3894.73],"regio":1,"sys":"R"},{"name":"Wickcote","x":1440,"y":3884,"attach":[1440.46,3883.81],"regio":1,"sys":"R"},{"name":"Millworth","x":1440,"y":3873,"attach":[1440.0,3873.23],"regio":1,"sys":"R"},{"name":"Foxhurst","x":1440,"y":3862,"attach":[1440.0,3861.64],"regio":1,"sys":"R"},{"name":"Wakeley","x":1440,"y":3850,"attach":[1440.0,3849.72],"regio":1,"sys":"R"},{"name":"Saxeworth","x":1440,"y":3798,"attach":[1440.0,3798.41],"regio":1,"sys":"R"},{"name":"Crowton","x":1440,"y":3823,"attach":[1440.0,3822.57],"regio":1,"sys":"R"},{"name":"Salbridge","x":1440,"y":3790,"attach":[1440.0,3789.6],"regio":1,"sys":"R"},{"name":"Outrepont","x":1410,"y":2700,"attach":[1410.0,2700.0],"sys":"M"},{"name":"Hunstow","x":1447,"y":4020,"attach":[1447.3,4020.0],"regio":1,"sys":"R"},{"name":"Saldale","x":1455,"y":4020,"attach":[1455.01,4020.0],"regio":1,"sys":"R"},{"name":"Goldgate","x":1463,"y":4020,"attach":[1463.25,4020.0],"regio":1,"sys":"R"},{"name":"Marminster","x":1471,"y":4020,"attach":[1471.07,4020.0],"regio":1,"sys":"R"},{"name":"Ryeworth","x":1479,"y":4020,"attach":[1479.26,4020.0],"regio":1,"sys":"R"},{"name":"Olddale","x":1488,"y":4020,"attach":[1488.0,4020.0],"regio":1,"sys":"R"},{"name":"Foxby","x":1497,"y":4020,"attach":[1496.62,4020.0],"regio":1,"sys":"R"},{"name":"Yarstead","x":1504,"y":4020,"attach":[1504.29,4020.0],"regio":1,"sys":"R"},{"name":"Wykegate","x":1513,"y":4020,"attach":[1513.1,4020.0],"regio":1,"sys":"R"},{"name":"Quarrmore","x":1521,"y":4020,"attach":[1520.97,4020.0],"regio":1,"sys":"R"},{"name":"Upper Thurlbury","x":1528,"y":4020,"attach":[1527.5,4020.0],"regio":1,"sys":"R"},{"name":"Millham","x":1536,"y":4020,"attach":[1535.54,4020.0],"regio":1,"sys":"R"},{"name":"Winholme","x":1543,"y":4020,"attach":[1542.93,4020.0],"regio":1,"sys":"R"},{"name":"Hazelton","x":1551,"y":4020,"attach":[1550.52,4020.0],"regio":1,"sys":"R"},{"name":"Eastham","x":1558,"y":4020,"attach":[1557.67,4020.0],"regio":1,"sys":"R"},{"name":"Oldmere","x":1566,"y":4020,"attach":[1566.22,4020.0],"regio":1,"sys":"R"},{"name":"Kirkminster","x":1614,"y":4044,"attach":[1613.78,4043.78],"regio":1,"sys":"R"},{"name":"Wickwick","x":1581,"y":4022,"attach":[1580.9,4021.5],"regio":1,"sys":"R"},{"name":"Fernbridge","x":1587,"y":4023,"attach":[1587.33,4023.42],"regio":1,"sys":"R"},{"name":"Willowley","x":1594,"y":4027,"attach":[1593.67,4026.58],"regio":1,"sys":"R"},{"name":"Wykeby","x":1601,"y":4031,"attach":[1600.59,4031.33],"regio":1,"sys":"R"},{"name":"Hazelgate","x":1607,"y":4037,"attach":[1606.6,4036.6],"regio":1,"sys":"R"},{"name":"Ormford","x":1451,"y":4020,"attach":[1451.42,4020.0],"regio":1,"sys":"R"},{"name":"Winbridge","x":1463,"y":4020,"attach":[1462.67,4020.0],"regio":1,"sys":"R"},{"name":"Marby","x":1475,"y":4020,"attach":[1474.51,4020.0],"regio":1,"sys":"R"},{"name":"Penton","x":1487,"y":4020,"attach":[1486.78,4020.0],"regio":1,"sys":"R"},{"name":"Sutthwaite","x":1498,"y":4020,"attach":[1498.31,4020.0],"regio":1,"sys":"R"},{"name":"Malley","x":1510,"y":4020,"attach":[1510.44,4020.0],"regio":1,"sys":"R"},{"name":"Burnham","x":1523,"y":4020,"attach":[1523.05,4020.0],"regio":1,"sys":"R"},{"name":"Fenfield","x":1535,"y":4020,"attach":[1534.91,4020.0],"regio":1,"sys":"R"},{"name":"Waterthwaite","x":1547,"y":4020,"attach":[1547.41,4020.0],"regio":1,"sys":"R"},{"name":"Northwood","x":1559,"y":4020,"attach":[1559.24,4020.0],"regio":1,"sys":"R"},{"name":"Moorhurst","x":1569,"y":4020,"attach":[1569.34,4020.05],"regio":1,"sys":"R"},{"name":"Oldden","x":1580,"y":4021,"attach":[1579.83,4021.18],"regio":1,"sys":"R"},{"name":"Waldale","x":1590,"y":4024,"attach":[1589.79,4024.47],"regio":1,"sys":"R"},{"name":"Saxewood","x":1599,"y":4030,"attach":[1599.21,4030.18],"regio":1,"sys":"R"},{"name":"Königstadt","x":660,"y":2380,"attach":[660.0,2379.91],"sys":"M"},{"name":"Findel","x":660,"y":2491,"attach":[660.0,2491.34],"sys":"M"},{"name":"Hiltsbury","x":600,"y":2190,"attach":[600.0,2190.0],"regio":1,"sys":"M"},{"name":"Hawdale","x":1463,"y":3743,"attach":[1462.6,3742.6],"regio":1,"sys":"R"},{"name":"Woldden","x":1455,"y":3735,"attach":[1455.09,3735.09],"regio":1,"sys":"R"},{"name":"Foxminster","x":1449,"y":3728,"attach":[1448.91,3727.67],"regio":1,"sys":"R"},{"name":"Ulverwell","x":1444,"y":3719,"attach":[1443.93,3718.77],"regio":1,"sys":"R"},{"name":"Brookbrook","x":1441,"y":3709,"attach":[1441.02,3709.27],"regio":1,"sys":"R"},{"name":"Little Crowcote","x":1440,"y":3699,"attach":[1440.01,3698.87],"regio":1,"sys":"R"},{"name":"Stanton","x":1440,"y":3688,"attach":[1440.0,3688.3],"regio":1,"sys":"R"},{"name":"Woldham","x":1440,"y":3679,"attach":[1440.0,3678.89],"regio":1,"sys":"R"},{"name":"Stowford","x":1440,"y":3669,"attach":[1440.0,3668.86],"regio":1,"sys":"R"},{"name":"Bradminster","x":1440,"y":3658,"attach":[1440.0,3658.12],"regio":1,"sys":"R"},{"name":"Stowminster","x":1440,"y":3649,"attach":[1440.0,3648.88],"regio":1,"sys":"R"},{"name":"Wakebury Junction","x":1440,"y":3636,"attach":[1440.0,3636.49],"regio":1,"sys":"R"},{"name":"Saxebridge","x":1440,"y":3628,"attach":[1440.0,3628.06],"regio":1,"sys":"R"},{"name":"Shepford","x":1462,"y":3758,"attach":[1462.23,3757.77],"regio":1,"sys":"R"},{"name":"Beckfield","x":1457,"y":3763,"attach":[1456.73,3763.27],"regio":1,"sys":"R"},{"name":"Heathfield","x":1446,"y":3774,"attach":[1446.14,3773.86],"regio":1,"sys":"R"},{"name":"Linton","x":870,"y":2940,"attach":[870.0,2940.0],"regio":1,"sys":"M"},{"name":"Brackenholt","x":793,"y":2910,"attach":[793.02,2910.0],"regio":1,"sys":"M"},{"name":"Ribeauvillé","x":1230,"y":2730,"attach":[1230.0,2730.0],"sys":"MR"},{"name":"Netherley","x":1220,"y":2799,"attach":[1219.62,2799.45],"regio":1,"sys":"R"},{"name":"Warcote","x":1229,"y":2780,"attach":[1228.87,2779.66],"regio":1,"sys":"R"},{"name":"Yarwood","x":1200,"y":2843,"attach":[1200.0,2843.48],"regio":1,"sys":"R"},{"name":"Hazelminster","x":1200,"y":2869,"attach":[1200.0,2868.64],"regio":1,"sys":"R"},{"name":"Nethergate","x":1200,"y":2887,"attach":[1200.0,2886.9],"regio":1,"sys":"R"},{"name":"Westerhafen","x":420,"y":2610,"attach":[420.0,2610.0],"regio":1,"sys":"M"},{"name":"Beckminster","x":1620,"y":3200,"attach":[1620.0,3200.0],"regio":1,"sys":"R"},{"name":"Northhurst","x":1620,"y":3190,"attach":[1620.0,3189.91],"regio":1,"sys":"R"},{"name":"Lynbridge","x":1620,"y":3181,"attach":[1620.0,3180.69],"regio":1,"sys":"R"},{"name":"Penhurst","x":1620,"y":3171,"attach":[1620.0,3170.76],"regio":1,"sys":"R"},{"name":"Elmworth","x":1620,"y":3161,"attach":[1620.0,3161.13],"regio":1,"sys":"R"},{"name":"Saxefield","x":1620,"y":3151,"attach":[1620.0,3151.06],"regio":1,"sys":"R"},{"name":"Norththwaite","x":1620,"y":3141,"attach":[1620.0,3141.38],"regio":1,"sys":"R"},{"name":"Kirkmore","x":1620,"y":3131,"attach":[1620.0,3130.85],"regio":1,"sys":"R"},{"name":"Salwood","x":1620,"y":3120,"attach":[1620.0,3119.97],"regio":1,"sys":"R"},{"name":"Highthorpe","x":1620,"y":3110,"attach":[1620.0,3110.43],"regio":1,"sys":"R"},{"name":"Wicksted","x":1620,"y":3099,"attach":[1620.0,3099.01],"regio":1,"sys":"R"},{"name":"Sandhurst","x":1620,"y":3089,"attach":[1620.0,3088.89],"regio":1,"sys":"R"},{"name":"Waterworth","x":1629,"y":3219,"attach":[1629.42,3219.42],"regio":1,"sys":"R"},{"name":"Melford","x":1633,"y":3195,"attach":[1632.63,3195.14],"regio":1,"sys":"R"},{"name":"Silbridge","x":1635,"y":3186,"attach":[1634.88,3185.73],"regio":1,"sys":"R"},{"name":"Wakemere","x":1635,"y":3176,"attach":[1635.0,3176.1],"regio":1,"sys":"R"},{"name":"Chalcombe","x":1635,"y":3168,"attach":[1635.0,3167.53],"regio":1,"sys":"R"},{"name":"Langden","x":1635,"y":3158,"attach":[1635.0,3158.33],"regio":1,"sys":"R"},{"name":"Ormby","x":1635,"y":3149,"attach":[1635.0,3148.67],"regio":1,"sys":"R"},{"name":"Ashthwaite","x":1635,"y":3140,"attach":[1635.0,3140.0],"regio":1,"sys":"R"},{"name":"Sutdale","x":1635,"y":3131,"attach":[1635.0,3131.2],"regio":1,"sys":"R"},{"name":"Barkbridge","x":1635,"y":3123,"attach":[1635.0,3122.87],"regio":1,"sys":"R"},{"name":"Hartminster","x":1628,"y":3068,"attach":[1628.01,3068.11],"regio":1,"sys":"R"},{"name":"Willowhurst","x":1635,"y":3106,"attach":[1635.0,3105.55],"regio":1,"sys":"R"},{"name":"Stockminster","x":1635,"y":3096,"attach":[1635.0,3095.91],"regio":1,"sys":"R"},{"name":"Rookdale","x":1635,"y":3086,"attach":[1635.0,3086.12],"regio":1,"sys":"R"},{"name":"Crowsted","x":1634,"y":3077,"attach":[1633.63,3077.46],"regio":1,"sys":"R"},{"name":"Longstow","x":1590,"y":3180,"attach":[1590.0,3180.0],"regio":1,"sys":"R"},{"name":"Fernden","x":1440,"y":3609,"attach":[1440.0,3609.4],"regio":1,"sys":"R"},{"name":"Burncote","x":1440,"y":3622,"attach":[1440.0,3621.94],"regio":1,"sys":"R"},{"name":"Holmton","x":1440,"y":3632,"attach":[1440.0,3631.53],"regio":1,"sys":"R"},{"name":"Hawbury","x":1440,"y":3640,"attach":[1440.0,3640.08],"regio":1,"sys":"R"},{"name":"Sandgate","x":1440,"y":3649,"attach":[1440.0,3649.11],"regio":1,"sys":"R"},{"name":"Hartfield","x":1440,"y":3657,"attach":[1440.0,3657.33],"regio":1,"sys":"R"},{"name":"Crowthwaite","x":1440,"y":3665,"attach":[1440.0,3665.43],"regio":1,"sys":"R"},{"name":"Brentdale","x":1440,"y":3674,"attach":[1440.0,3674.15],"regio":1,"sys":"R"},{"name":"Shepthorpe","x":1440,"y":3683,"attach":[1440.0,3683.36],"regio":1,"sys":"R"},{"name":"Hazelwick","x":1440,"y":3692,"attach":[1440.0,3692.15],"regio":1,"sys":"R"},{"name":"Coldsted","x":1440,"y":3701,"attach":[1440.0,3701.05],"regio":1,"sys":"R"},{"name":"Toddale","x":1440,"y":3709,"attach":[1440.0,3708.98],"regio":1,"sys":"R"},{"name":"Newstow","x":1440,"y":3719,"attach":[1440.0,3718.95],"regio":1,"sys":"R"},{"name":"Heathby","x":1440,"y":3729,"attach":[1440.0,3729.07],"regio":1,"sys":"R"},{"name":"Longstead","x":1440,"y":3738,"attach":[1440.0,3737.72],"regio":1,"sys":"R"},{"name":"Stockstead","x":1440,"y":3747,"attach":[1440.0,3746.79],"regio":1,"sys":"R"},{"name":"Southminster","x":1440,"y":3755,"attach":[1440.0,3754.97],"regio":1,"sys":"R"},{"name":"Whitwick","x":1279,"y":3120,"attach":[1279.18,3120.0],"regio":1,"sys":"R"},{"name":"Brookford","x":1271,"y":3120,"attach":[1271.04,3120.0],"regio":1,"sys":"R"},{"name":"Salden","x":1304,"y":3121,"attach":[1303.62,3120.52],"regio":1,"sys":"R"},{"name":"Todley","x":1315,"y":3123,"attach":[1315.13,3122.92],"regio":1,"sys":"R"},{"name":"Rookbridge","x":1327,"y":3129,"attach":[1327.49,3128.85],"regio":1,"sys":"R"},{"name":"Stockcote","x":1337,"y":3137,"attach":[1336.83,3136.83],"regio":1,"sys":"R"},{"name":"Rookcombe","x":1344,"y":3144,"attach":[1344.26,3144.26],"regio":1,"sys":"R"},{"name":"Whitmore","x":1353,"y":3153,"attach":[1352.83,3152.83],"regio":1,"sys":"R"},{"name":"Elmden","x":1360,"y":3160,"attach":[1360.35,3160.35],"regio":1,"sys":"R"},{"name":"Birchworth","x":1369,"y":3169,"attach":[1368.93,3168.93],"regio":1,"sys":"R"},{"name":"Nethercote","x":1377,"y":3177,"attach":[1376.91,3176.91],"regio":1,"sys":"R"},{"name":"Salmere","x":1386,"y":3186,"attach":[1385.66,3185.66],"regio":1,"sys":"R"},{"name":"Crowhurst","x":1395,"y":3195,"attach":[1394.85,3194.85],"regio":1,"sys":"R"},{"name":"Eastton","x":1404,"y":3204,"attach":[1403.57,3203.57],"regio":1,"sys":"R"},{"name":"Marham","x":1413,"y":3213,"attach":[1412.64,3212.64],"regio":1,"sys":"R"},{"name":"Yarminster","x":1421,"y":3221,"attach":[1420.54,3220.54],"regio":1,"sys":"R"},{"name":"Walmore","x":1429,"y":3229,"attach":[1429.13,3229.13],"regio":1,"sys":"R"},{"name":"Stanham","x":1438,"y":3238,"attach":[1437.9,3237.9],"regio":1,"sys":"R"},{"name":"Larkmore","x":1447,"y":3247,"attach":[1447.49,3247.49],"regio":1,"sys":"R"},{"name":"Cotsted","x":1456,"y":3256,"attach":[1456.23,3256.23],"regio":1,"sys":"R"},{"name":"Winbrook","x":1464,"y":3264,"attach":[1464.22,3264.22],"regio":1,"sys":"R"},{"name":"Hazelley","x":1473,"y":3273,"attach":[1473.18,3273.18],"regio":1,"sys":"R"},{"name":"Penfield","x":1482,"y":3282,"attach":[1481.9,3281.9],"regio":1,"sys":"R"},{"name":"Salminster","x":1491,"y":3291,"attach":[1490.82,3290.82],"regio":1,"sys":"R"},{"name":"Marford","x":1500,"y":3300,"attach":[1499.9,3299.9],"regio":1,"sys":"R"},{"name":"Highbridge","x":1508,"y":3308,"attach":[1508.15,3308.15],"regio":1,"sys":"R"},{"name":"Redwick","x":1260,"y":3132,"attach":[1260.0,3131.99],"regio":1,"sys":"R"},{"name":"Bradstow","x":1265,"y":3154,"attach":[1265.32,3153.84],"regio":1,"sys":"R"},{"name":"Holmwood","x":1273,"y":3163,"attach":[1272.71,3162.71],"regio":1,"sys":"R"},{"name":"Newwood","x":1280,"y":3170,"attach":[1279.68,3169.68],"regio":1,"sys":"R"},{"name":"Swanhurst","x":1287,"y":3177,"attach":[1286.6,3176.6],"regio":1,"sys":"R"},{"name":"Fairwood","x":1294,"y":3184,"attach":[1294.5,3184.5],"regio":1,"sys":"R"},{"name":"Ulversted","x":1303,"y":3193,"attach":[1302.59,3192.59],"regio":1,"sys":"R"},{"name":"Sutcote","x":1310,"y":3200,"attach":[1310.28,3200.28],"regio":1,"sys":"R"},{"name":"Melbury","x":1317,"y":3207,"attach":[1316.61,3206.61],"regio":1,"sys":"R"},{"name":"Marton","x":1324,"y":3214,"attach":[1323.73,3213.73],"regio":1,"sys":"R"},{"name":"Rookton","x":1331,"y":3221,"attach":[1330.54,3220.54],"regio":1,"sys":"R"},{"name":"Thornford","x":1338,"y":3228,"attach":[1338.45,3228.45],"regio":1,"sys":"R"},{"name":"Cherrywick","x":1345,"y":3235,"attach":[1345.07,3235.07],"regio":1,"sys":"R"},{"name":"Fairthorpe","x":1352,"y":3242,"attach":[1351.6,3241.6],"regio":1,"sys":"R"},{"name":"Ulverstead","x":1359,"y":3249,"attach":[1359.2,3249.2],"regio":1,"sys":"R"},{"name":"Quarrwell","x":1366,"y":3256,"attach":[1365.63,3255.63],"regio":1,"sys":"R"},{"name":"Silsted","x":1373,"y":3263,"attach":[1373.21,3263.21],"regio":1,"sys":"R"},{"name":"Westhorpe","x":1381,"y":3271,"attach":[1380.93,3270.93],"regio":1,"sys":"R"},{"name":"Millford","x":1387,"y":3277,"attach":[1387.45,3277.45],"regio":1,"sys":"R"},{"name":"Redfield","x":1395,"y":3285,"attach":[1395.22,3285.22],"regio":1,"sys":"R"},{"name":"Malholme","x":1402,"y":3292,"attach":[1401.69,3291.69],"regio":1,"sys":"R"},{"name":"Dunbury","x":1409,"y":3299,"attach":[1408.66,3298.66],"regio":1,"sys":"R"},{"name":"Brentford","x":1416,"y":3306,"attach":[1415.75,3305.75],"regio":1,"sys":"R"},{"name":"Wakeford","x":1422,"y":3312,"attach":[1421.96,3311.96],"regio":1,"sys":"R"},{"name":"Melworth","x":1650,"y":3829,"attach":[1650.0,3829.28],"regio":1,"sys":"R"},{"name":"Salstow","x":1650,"y":3821,"attach":[1650.0,3821.4],"regio":1,"sys":"R"},{"name":"Elmthwaite","x":1650,"y":3814,"attach":[1650.0,3813.75],"regio":1,"sys":"R"},{"name":"Yarfield","x":1650,"y":3805,"attach":[1650.0,3805.42],"regio":1,"sys":"R"},{"name":"Larkby","x":1659,"y":3789,"attach":[1658.57,3788.79],"regio":1,"sys":"R"},{"name":"Burngate","x":1664,"y":3820,"attach":[1664.43,3819.83],"regio":1,"sys":"R"},{"name":"Wykecote","x":1665,"y":3800,"attach":[1664.5,3800.4],"regio":1,"sys":"R"},{"name":"Port-du-Roi","x":1560,"y":2940,"attach":[1560,2940],"sys":"MR"},{"name":"Elmgate","x":1572,"y":2928,"attach":[1572.37,2927.63],"regio":1,"sys":"R"},{"name":"Ulverbridge","x":1585,"y":2915,"attach":[1585.36,2914.64],"regio":1,"sys":"R"},{"name":"Fairmore","x":1560,"y":3000,"attach":[1560.0,3000.0],"regio":1,"sys":"R"},{"name":"Crowminster","x":1560,"y":2954,"attach":[1560.0,2954.38],"regio":1,"sys":"R"},{"name":"Shepwood","x":1560,"y":2968,"attach":[1560.0,2967.71],"regio":1,"sys":"R"},{"name":"Bradbridge","x":1536,"y":2940,"attach":[1535.56,2940.0],"regio":1,"sys":"R"},{"name":"Sandthwaite","x":1560,"y":2820,"attach":[1560.0,2820.0],"regio":1,"sys":"R"},{"name":"Coldbury Junction","x":1560,"y":2928,"attach":[1560.0,2928.11],"regio":1,"sys":"R"},{"name":"Brentgate","x":1560,"y":2913,"attach":[1560.0,2912.57],"regio":1,"sys":"R"},{"name":"Grimsby","x":1560,"y":2902,"attach":[1560.0,2901.73],"regio":1,"sys":"R"},{"name":"Dunley","x":1560,"y":2892,"attach":[1560.0,2891.54],"regio":1,"sys":"R"},{"name":"Millbrook","x":1560,"y":2881,"attach":[1560.0,2880.65],"regio":1,"sys":"R"},{"name":"Wessted","x":1560,"y":2870,"attach":[1560.0,2870.16],"regio":1,"sys":"R"},{"name":"Hartden","x":1560,"y":2860,"attach":[1560.0,2860.13],"regio":1,"sys":"R"},{"name":"Rossdale South","x":2015,"y":1835,"attach":[2014.83,1834.83],"sys":"M"},{"name":"Chankow","x":1230,"y":1410,"attach":[1230,1410],"sys":"M"},{"name":"Nouvelle-Touraine","x":1987,"y":1920,"attach":[1987.05,1920.0],"sys":"M"},{"name":"Canterbury","x":2100,"y":1960,"attach":[2100.0,1960.17],"sys":"M"},{"name":"Sandwick","x":1570,"y":3010,"attach":[1569.65,3009.65],"regio":1,"sys":"R"},{"name":"Ormgate","x":1586,"y":3026,"attach":[1585.76,3025.76],"regio":1,"sys":"R"},{"name":"Wolddale","x":1595,"y":3035,"attach":[1594.8,3034.8],"regio":1,"sys":"R"},{"name":"Highstow","x":1556,"y":2996,"attach":[1555.51,2995.51],"regio":1,"sys":"R"},{"name":"Sandbury","x":1547,"y":2987,"attach":[1547.1,2987.1],"regio":1,"sys":"R"},{"name":"Hartthwaite","x":1544,"y":2984,"attach":[1543.7,2983.7],"regio":1,"sys":"R"},{"name":"Elmton","x":1541,"y":2981,"attach":[1540.77,2980.77],"regio":1,"sys":"R"},{"name":"Rookford","x":1537,"y":2977,"attach":[1537.5,2977.5],"regio":1,"sys":"R"},{"name":"Larksted","x":1535,"y":2975,"attach":[1534.53,2974.53],"regio":1,"sys":"R"},{"name":"Langthwaite","x":1531,"y":2971,"attach":[1531.13,2971.13],"regio":1,"sys":"R"},{"name":"Rookmore","x":1528,"y":2968,"attach":[1527.97,2967.97],"regio":1,"sys":"R"},{"name":"Highbury","x":1524,"y":2964,"attach":[1524.36,2964.36],"regio":1,"sys":"R"},{"name":"Thornwick","x":1521,"y":2961,"attach":[1520.94,2960.94],"regio":1,"sys":"R"},{"name":"Fengate","x":1517,"y":2957,"attach":[1517.35,2957.35],"regio":1,"sys":"R"},{"name":"Stowby","x":1512,"y":2952,"attach":[1512.33,2952.33],"regio":1,"sys":"R"},{"name":"Eastmere","x":1509,"y":2949,"attach":[1508.59,2948.59],"regio":1,"sys":"R"},{"name":"Yungang","x":2100,"y":1170,"attach":[2100.0,1170.0],"sys":"M"},{"name":"Chiangkou","x":1932,"y":1170,"attach":[1932.43,1170.0],"sys":"M"},{"name":"Tunghai","x":2013,"y":1170,"attach":[2012.65,1170.0],"sys":"M"},{"name":"Cranford Central","x":1920,"y":2160,"attach":[1920.0,2160.0],"sys":"M"},{"name":"Cranford West","x":1866,"y":2213,"attach":[1866.21,2213.05],"sys":"M"},{"name":"Fairden","x":1305,"y":2040,"attach":[1304.97,2040.0],"sys":"M"},{"name":"Sancerre","x":1152,"y":2040,"attach":[1152.38,2040.0],"sys":"M"},{"name":"Hollingford","x":1890,"y":2071,"attach":[1890.0,2070.98],"sys":"M"},{"name":"Wesstead","x":1549,"y":2809,"attach":[1548.73,2808.73],"regio":1,"sys":"R"},{"name":"Penwell Junction","x":1538,"y":2798,"attach":[1537.71,2797.71],"regio":1,"sys":"R"},{"name":"Claystow","x":1528,"y":2788,"attach":[1527.98,2787.98],"regio":1,"sys":"R"},{"name":"Kirkton Junction","x":1520,"y":2780,"attach":[1519.72,2779.72],"regio":1,"sys":"R"},{"name":"Saxeton","x":1512,"y":2772,"attach":[1511.64,2771.64],"regio":1,"sys":"R"},{"name":"Hervilly","x":1480,"y":2740,"attach":[1480.16,2740.16],"sys":"MR"},{"name":"Crowholme","x":1662,"y":3252,"attach":[1661.58,3251.58],"regio":1,"sys":"R"},{"name":"Cosgrove","x":1678,"y":3277,"attach":[1678.02,3277.48],"sys":"MR"},{"name":"Fernminster","x":1680,"y":3294,"attach":[1680.0,3294.22],"regio":1,"sys":"R"},{"name":"Holmwick","x":1680,"y":3315,"attach":[1680.0,3315.5],"regio":1,"sys":"R"},{"name":"Fernby","x":1680,"y":3325,"attach":[1680.0,3325.49],"regio":1,"sys":"R"},{"name":"Beckby","x":1680,"y":3335,"attach":[1680.0,3335.14],"regio":1,"sys":"R"},{"name":"Holmley","x":1200,"y":2927,"attach":[1200.0,2926.68],"regio":1,"sys":"R"},{"name":"Brambury","x":1200,"y":2918,"attach":[1200.0,2917.81],"regio":1,"sys":"R"},{"name":"Brentstow","x":1200,"y":2909,"attach":[1200.0,2909.43],"regio":1,"sys":"R"},{"name":"Malsted","x":1200,"y":2900,"attach":[1200.0,2899.73],"regio":1,"sys":"R"},{"name":"Woodby","x":1200,"y":2891,"attach":[1200.0,2890.64],"regio":1,"sys":"R"},{"name":"Rookwick","x":1200,"y":2881,"attach":[1200.0,2881.07],"regio":1,"sys":"R"},{"name":"Whitbrook","x":1200,"y":2871,"attach":[1200.0,2871.11],"regio":1,"sys":"R"},{"name":"Stanfield","x":1200,"y":2862,"attach":[1200.0,2861.61],"regio":1,"sys":"R"},{"name":"Moorton","x":1200,"y":2851,"attach":[1200.0,2851.22],"regio":1,"sys":"R"},{"name":"Ryebrook","x":1200,"y":2840,"attach":[1200.0,2839.64],"regio":1,"sys":"R"},{"name":"Standen","x":1200,"y":2829,"attach":[1200.0,2828.85],"regio":1,"sys":"R"},{"name":"Brentbrook","x":1200,"y":2771,"attach":[1200.0,2770.87],"regio":1,"sys":"R"},{"name":"Silhurst","x":1200,"y":2809,"attach":[1200.0,2809.11],"regio":1,"sys":"R"},{"name":"Coldton","x":1200,"y":2801,"attach":[1200.0,2800.62],"regio":1,"sys":"R"},{"name":"Fairley","x":1200,"y":2792,"attach":[1200.0,2791.99],"regio":1,"sys":"R"},{"name":"Kirkmere","x":1200,"y":2782,"attach":[1200.0,2782.45],"regio":1,"sys":"R"},{"name":"Tongshan","x":1500,"y":1500,"attach":[1500.0,1500.0],"sys":"M"},{"name":"Yuchow Airport","x":629,"y":1560,"attach":[628.57,1560.0],"sys":"M"},{"name":"Hawbridge","x":1680,"y":3437,"attach":[1680.0,3436.68],"regio":1,"sys":"R"},{"name":"Grimston","x":1680,"y":3419,"attach":[1680.0,3418.81],"regio":1,"sys":"R"},{"name":"Walsted","x":1621,"y":3429,"attach":[1620.53,3429.22],"regio":1,"sys":"R"},{"name":"Southford","x":1627,"y":3414,"attach":[1626.93,3413.82],"regio":1,"sys":"R"},{"name":"Moorminster","x":1609,"y":3439,"attach":[1609.33,3439.33],"regio":1,"sys":"R"},{"name":"Cotminster","x":1601,"y":3430,"attach":[1601.08,3430.29],"regio":1,"sys":"R"},{"name":"Hawworth","x":1595,"y":3421,"attach":[1595.38,3421.47],"regio":1,"sys":"R"},{"name":"Brenthurst","x":1591,"y":3409,"attach":[1591.06,3409.42],"regio":1,"sys":"R"},{"name":"Woldmore","x":1590,"y":3398,"attach":[1590.0,3397.86],"regio":1,"sys":"R"},{"name":"Claybury","x":1590,"y":3387,"attach":[1590.0,3387.1],"regio":1,"sys":"R"},{"name":"Saxeholme","x":1590,"y":3374,"attach":[1590.0,3374.22],"regio":1,"sys":"R"},{"name":"Moorbridge","x":1590,"y":3363,"attach":[1590.0,3363.42],"regio":1,"sys":"R"},{"name":"Willowcote","x":1590,"y":3351,"attach":[1590.0,3351.34],"regio":1,"sys":"R"},{"name":"Blackgate","x":1590,"y":3340,"attach":[1590.0,3339.7],"regio":1,"sys":"R"},{"name":"Stowton","x":1590,"y":3328,"attach":[1590.0,3327.52],"regio":1,"sys":"R"},{"name":"Stockwick","x":1646,"y":4050,"attach":[1645.91,4050.0],"regio":1,"sys":"R"},{"name":"Saxemore","x":1642,"y":4050,"attach":[1641.55,4050.0],"regio":1,"sys":"R"},{"name":"Wickholme","x":1637,"y":4050,"attach":[1636.95,4050.0],"regio":1,"sys":"R"},{"name":"Woodthorpe","x":1633,"y":4050,"attach":[1633.0,4050.0],"regio":1,"sys":"R"},{"name":"Yarbridge","x":1206,"y":2754,"attach":[1205.7,2754.3],"regio":1,"sys":"R"},{"name":"Woldstow","x":1215,"y":2745,"attach":[1215.47,2744.53],"regio":1,"sys":"R"},{"name":"Quarrfield","x":1220,"y":2740,"attach":[1219.77,2740.23],"regio":1,"sys":"R"},{"name":"Chapelbridge","x":881,"y":2100,"attach":[881.22,2099.7],"sys":"M"},{"name":"Rushmere","x":790,"y":2100,"attach":[789.57,2100.0],"sys":"M"},{"name":"Burnden","x":1440,"y":3549,"attach":[1440.0,3548.61],"regio":1,"sys":"R"},{"name":"Lynwood Junction","x":1440,"y":3564,"attach":[1440.0,3564.1],"regio":1,"sys":"R"},{"name":"Leaden Junction","x":1440,"y":3570,"attach":[1440.0,3569.93],"regio":1,"sys":"R"},{"name":"Thurlstow","x":1440,"y":3579,"attach":[1440.0,3578.98],"regio":1,"sys":"R"},{"name":"Malby","x":1440,"y":3587,"attach":[1440.0,3587.29],"regio":1,"sys":"R"},{"name":"Whitcombe","x":1440,"y":3596,"attach":[1440.0,3595.8],"regio":1,"sys":"R"},{"name":"Crowwood","x":1440,"y":3605,"attach":[1440.0,3604.6],"regio":1,"sys":"R"},{"name":"Willowbrook","x":1440,"y":3613,"attach":[1440.0,3612.89],"regio":1,"sys":"R"},{"name":"Foxstow","x":1440,"y":3621,"attach":[1440.0,3621.1],"regio":1,"sys":"R"},{"name":"Bradwood","x":1440,"y":3629,"attach":[1440.0,3629.17],"regio":1,"sys":"R"},{"name":"Saxeby","x":1440,"y":3638,"attach":[1440.0,3637.99],"regio":1,"sys":"R"},{"name":"Birchstow","x":1440,"y":3646,"attach":[1440.0,3646.46],"regio":1,"sys":"R"},{"name":"Wickthorpe","x":1440,"y":3655,"attach":[1440.0,3654.65],"regio":1,"sys":"R"},{"name":"Hawstow","x":1440,"y":3663,"attach":[1440.0,3662.81],"regio":1,"sys":"R"},{"name":"Yarwell","x":1440,"y":3670,"attach":[1440.0,3669.59],"regio":1,"sys":"R"},{"name":"Wickwell","x":1440,"y":3678,"attach":[1440.0,3677.67],"regio":1,"sys":"R"},{"name":"Rookbury","x":1440,"y":3686,"attach":[1440.0,3685.62],"regio":1,"sys":"R"},{"name":"Fenwell","x":1440,"y":3693,"attach":[1440.0,3692.59],"regio":1,"sys":"R"},{"name":"Walham","x":1440,"y":3700,"attach":[1440.0,3700.12],"regio":1,"sys":"R"},{"name":"Sandley","x":1440,"y":3709,"attach":[1440.0,3709.41],"regio":1,"sys":"R"},{"name":"Holmfield","x":1440,"y":3717,"attach":[1440.0,3716.84],"regio":1,"sys":"R"},{"name":"Newmere","x":1440,"y":3726,"attach":[1440.0,3726.42],"regio":1,"sys":"R"},{"name":"Brentworth","x":1440,"y":3735,"attach":[1440.0,3734.79],"regio":1,"sys":"R"},{"name":"Wargate","x":1440,"y":3743,"attach":[1440.0,3742.92],"regio":1,"sys":"R"},{"name":"Brentstead","x":1440,"y":3752,"attach":[1440.0,3752.04],"regio":1,"sys":"R"},{"name":"Dunby","x":1440,"y":3768,"attach":[1440.0,3768.29],"regio":1,"sys":"R"},{"name":"Goldbridge","x":1541,"y":3319,"attach":[1540.86,3319.14],"regio":1,"sys":"R"},{"name":"Peiting New Town","x":1142,"y":1618,"attach":[1141.79,1618.21],"sys":"M"}];
const GRAPH={"pts":[[1440,3570],[1440.0,3555.0],[1440.0,3540.0],[1440.0,3585.0],[1440.0,3600.0],[1432.5,3577.5],[1429.69,3581.25],[1428.75,3585.0],[1429.69,3588.75],[1432.5,3592.5],[1350,3210],[1340.0,3200.0],[1330.0,3190.0],[1320.0,3180.0],[1310.0,3170.0],[1300.0,3160.0],[1290.0,3150.0],[1280.0,3140.0],[1270.0,3130.0],[1260.0,3120.0],[1350.0,3224.59],[1350.0,3239.17],[1350.0,3253.76],[1350.0,3268.34],[1350.0,3282.93],[1350.0,3297.51],[1350.0,3312.1],[1350.0,3326.69],[1350.0,3341.27],[1350.0,3355.86],[1350.0,3370.44],[1350.0,3385.03],[1350.0,3399.62],[1350.0,3414.2],[1350.0,3428.79],[1350.94,3439.01],[1353.75,3448.45],[1358.44,3457.11],[1365.0,3465.0],[1380.0,3480.0],[1359.92,3219.92],[1369.85,3229.85],[1379.77,3239.77],[1389.7,3249.7],[1399.62,3259.62],[1409.55,3269.55],[1419.47,3279.47],[1429.39,3289.39],[1434.03,3294.97],[1437.35,3301.1],[1439.34,3307.77],[1440.0,3315.0],[1440.0,3330.0],[1650,3570],[1650.0,3555.0],[1650.0,3540.0],[1650.0,3525.0],[1650.0,3510.0],[1650.0,3495.0],[1650.0,3480.0],[1650.0,3465.0],[1650.0,3450.0],[1650.0,3585.0],[1650.0,3600.0],[1650.0,3615.0],[1650.0,3630.0],[1650.0,3645.0],[1650.0,3660.0],[1650.0,3675.0],[1650.0,3690.0],[1650.0,3705.0],[1650.0,3720.0],[1665.0,3555.0],[1671.56,3547.11],[1676.25,3538.45],[1679.06,3529.01],[1680.0,3518.79],[1680.0,3501.59],[1680.0,3484.39],[1680.0,3467.2],[1680.0,3450.0],[1710,3180],[1700.08,3170.08],[1690.15,3160.15],[1680.23,3150.23],[1670.3,3140.3],[1660.38,3130.38],[1650.45,3120.45],[1640.53,3110.53],[1630.61,3100.61],[1625.97,3095.03],[1622.65,3088.9],[1620.66,3082.23],[1620.0,3075.0],[1620.0,3060.0],[1710.0,3194.31],[1710.0,3208.62],[1710.0,3222.93],[1710.0,3237.24],[1710.0,3251.55],[1710.0,3265.86],[1710.0,3280.17],[1710.0,3294.48],[1710.0,3308.79],[1709.06,3319.01],[1706.25,3328.45],[1701.56,3337.11],[1695.0,3345.0],[1680.0,3360.0],[1700.0,3190.0],[1690.0,3200.0],[1680.0,3210.0],[1670.0,3220.0],[1660.0,3230.0],[1650.0,3240.0],[1690.61,3180.0],[1671.21,3180.0],[1660.99,3180.94],[1651.55,3183.75],[1642.89,3188.44],[1635.0,3195.0],[1620.0,3210.0],[1710,1410],[1725.0,1425.0],[1731.56,1432.89],[1736.25,1441.55],[1739.06,1450.99],[1740.0,1461.21],[1740.0,1478.41],[1740.0,1495.61],[1740.0,1512.8],[1740.0,1530.0],[1695.92,1410.0],[1681.83,1410.0],[1667.75,1410.0],[1653.67,1410.0],[1639.58,1410.0],[1625.5,1410.0],[1611.42,1410.0],[1597.33,1410.0],[1583.25,1410.0],[1569.17,1410.0],[1555.08,1410.0],[1541.0,1410.0],[1526.92,1410.0],[1512.83,1410.0],[1498.75,1410.0],[1484.67,1410.0],[1470.58,1410.0],[1456.5,1410.0],[1442.42,1410.0],[1428.33,1410.0],[1414.25,1410.0],[1400.17,1410.0],[1386.08,1410.0],[1372.0,1410.0],[1361.4,1410.97],[1351.61,1413.89],[1342.62,1418.75],[1334.44,1425.56],[1324.0,1436.0],[1313.55,1446.45],[1303.11,1456.89],[1292.67,1467.33],[1282.22,1477.78],[1271.78,1488.22],[1261.33,1498.67],[1250.89,1509.11],[1240.44,1519.56],[1230.0,1530.0],[1710.0,1395.88],[1710.0,1381.76],[1710.0,1367.65],[1710.0,1353.53],[1710.0,1339.41],[1710.0,1325.29],[1710.0,1311.18],[1710.0,1297.06],[1710.0,1282.94],[1710.0,1268.82],[1710.0,1254.71],[1710.0,1240.59],[1710.0,1226.47],[1710.0,1212.35],[1710.0,1198.24],[1710.0,1184.12],[1710.0,1170.0],[1725.0,1410.0],[1740.0,1410.0],[1755.0,1410.0],[1770.0,1410.0],[1785.0,1410.0],[1800.0,1410.0],[1815.0,1410.0],[1830.0,1410.0],[1845.0,1410.0],[1860.0,1410.0],[540,2130],[555.0,2115.0],[562.89,2108.44],[571.55,2103.75],[580.99,2100.94],[591.21,2100.0],[608.41,2100.0],[625.61,2100.0],[642.8,2100.0],[660.0,2100.0],[1590,3420],[1600.0,3430.0],[1610.0,3440.0],[1620.0,3450.0],[1609.39,3420.0],[1628.79,3420.0],[1639.01,3420.94],[1648.45,3423.75],[1657.11,3428.44],[1665.0,3435.0],[1609.39,3439.39],[1614.97,3444.03],[1621.1,3447.35],[1627.77,3449.34],[1635.0,3450.0],[1530,3090],[1515.48,3090.0],[1500.96,3090.0],[1486.43,3090.0],[1471.91,3090.0],[1457.39,3090.0],[1442.87,3090.0],[1428.35,3090.0],[1413.82,3090.0],[1399.3,3090.0],[1384.78,3090.0],[1370.26,3090.0],[1355.74,3090.0],[1341.21,3090.0],[1330.99,3090.94],[1321.55,3093.75],[1312.89,3098.44],[1305.0,3105.0],[1290.0,3120.0],[1545.0,3075.0],[1552.89,3068.44],[1561.55,3063.75],[1570.99,3060.94],[1581.21,3060.0],[1600.61,3060.0],[1530.0,3105.0],[1530.0,3120.0],[1530.0,3135.0],[1530.0,3150.0],[1530.0,3165.0],[1530.0,3180.0],[1530.0,3195.0],[1530.0,3210.0],[1530.0,3225.0],[1530.0,3240.0],[1522.5,3097.5],[1519.22,3101.44],[1516.88,3105.78],[1515.47,3110.5],[1515.0,3115.61],[1515.0,3129.72],[1515.0,3143.83],[1515.0,3157.94],[1515.0,3172.06],[1515.0,3186.17],[1515.0,3200.28],[1515.0,3214.39],[1515.47,3219.5],[1516.88,3224.22],[1519.22,3228.56],[1522.5,3232.5],[1845.0,1395.0],[1838.44,1387.11],[1833.75,1378.45],[1830.94,1369.01],[1830.0,1358.79],[1830.0,1344.26],[1830.0,1329.74],[1830.0,1315.22],[1830.0,1300.7],[1830.0,1286.18],[1830.0,1271.65],[1830.0,1257.13],[1830.0,1242.61],[1830.0,1228.09],[1830.0,1213.57],[1830.0,1199.04],[1830.0,1184.52],[1830.0,1170.0],[1850.0,1420.0],[1840.0,1430.0],[1830.0,1440.0],[1820.0,1450.0],[1810.0,1460.0],[1800.0,1470.0],[1790.0,1480.0],[1780.0,1490.0],[1770.0,1500.0],[1760.0,1510.0],[1750.0,1520.0],[1650,3960],[1650.0,3945.0],[1650.0,3930.0],[1650.0,3915.0],[1650.0,3900.0],[1650.0,3885.0],[1650.0,3870.0],[1650.0,3945.88],[1650.0,3931.76],[1650.0,3917.65],[1650.0,3903.53],[1650.0,3889.41],[1650.0,3875.29],[1650.0,3861.18],[1650.0,3847.06],[1650.0,3832.94],[1650.0,3818.82],[1650.0,3804.71],[1650.0,3790.59],[1650.0,3776.47],[1650.0,3762.35],[1650.0,3748.24],[1650.0,3734.12],[1635.0,3945.0],[1627.11,3938.44],[1618.45,3933.75],[1609.01,3930.94],[1598.79,3930.0],[1584.35,3930.0],[1569.92,3930.0],[1555.48,3930.0],[1541.05,3930.0],[1526.61,3930.0],[1512.18,3930.0],[1497.74,3930.0],[1483.31,3930.0],[1468.87,3930.0],[1454.44,3930.0],[1440.0,3930.0],[1650.0,3855.0],[1650.0,3840.0],[1320,2970],[1334.31,2970.0],[1348.62,2970.0],[1362.93,2970.0],[1377.24,2970.0],[1391.55,2970.0],[1405.86,2970.0],[1420.17,2970.0],[1434.48,2970.0],[1448.79,2970.0],[1459.01,2969.06],[1468.45,2966.25],[1477.11,2961.56],[1485.0,2955.0],[1500.0,2940.0],[1305.0,2970.0],[1290.0,2970.0],[1275.0,2970.0],[1260.0,2970.0],[1245.0,2970.0],[1230.0,2970.0],[1215.0,2970.0],[1200.0,2970.0],[1320.0,2955.0],[1319.34,2947.77],[1317.35,2941.1],[1314.03,2934.97],[1309.39,2929.39],[1299.45,2919.45],[1289.5,2909.5],[1279.56,2899.56],[1269.61,2889.61],[1259.67,2879.67],[1249.72,2869.72],[1239.78,2859.78],[1229.83,2849.83],[1219.89,2839.89],[1209.94,2829.94],[1200.0,2820.0],[1305.0,2985.0],[1298.44,2992.89],[1293.75,3001.55],[1290.94,3010.99],[1290.0,3021.21],[1290.0,3035.33],[1290.0,3049.44],[1290.0,3063.55],[1290.0,3077.66],[1290.0,3091.78],[1290.0,3105.89],[1320.0,2987.0],[1320.0,3004.0],[1320.0,3021.0],[1320.0,3038.0],[1319.03,3048.6],[1316.11,3058.39],[1311.25,3067.38],[1304.44,3075.56],[1293.33,3086.67],[1282.22,3097.78],[1271.11,3108.89],[750,2610],[735.0,2595.0],[727.11,2588.44],[718.45,2583.75],[709.01,2580.94],[698.79,2580.0],[684.67,2580.0],[670.56,2580.0],[656.45,2580.0],[642.34,2580.0],[628.22,2580.0],[614.11,2580.0],[600.0,2580.0],[750.0,2624.63],[750.0,2639.27],[750.0,2653.9],[750.0,2668.54],[750.0,2683.17],[750.0,2697.81],[750.0,2712.44],[750.0,2727.08],[750.0,2741.71],[750.0,2756.35],[750.0,2770.98],[750.0,2785.61],[750.0,2800.25],[750.0,2814.88],[750.0,2829.52],[750.0,2844.15],[750.0,2858.79],[749.06,2869.01],[746.25,2878.45],[741.56,2887.11],[735.0,2895.0],[720.0,2910.0],[764.46,2610.0],[778.92,2610.0],[793.38,2610.0],[807.85,2610.0],[822.31,2610.0],[836.77,2610.0],[851.23,2610.0],[865.69,2610.0],[880.15,2610.0],[894.62,2610.0],[909.08,2610.0],[923.54,2610.0],[938.0,2610.0],[948.6,2610.97],[958.39,2613.89],[967.38,2618.75],[975.56,2625.56],[986.67,2636.67],[997.78,2647.78],[1008.89,2658.89],[1020.0,2670.0],[1455.0,3930.0],[1470.0,3930.0],[1440.0,3945.0],[1440.0,3960.0],[1440.0,3975.0],[1440.0,3990.0],[1440.0,4005.0],[1440.0,4020.0],[1450.44,3940.44],[1460.89,3950.89],[1471.33,3961.33],[1481.78,3971.78],[1492.22,3982.22],[1502.67,3992.67],[1513.11,4003.11],[1523.55,4013.55],[1534.0,4024.0],[1544.44,4034.44],[1552.62,4041.25],[1561.61,4046.11],[1571.4,4049.03],[1582.0,4050.0],[1601.0,4050.0],[1620.0,4050.0],[1455.0,3915.0],[1461.56,3907.11],[1466.25,3898.45],[1469.06,3889.01],[1470.0,3878.79],[1470.0,3864.48],[1470.0,3850.17],[1470.0,3835.86],[1470.0,3821.55],[1470.0,3807.24],[1470.0,3792.93],[1470.0,3778.62],[1470.0,3764.31],[1470.0,3750.0],[1530.0,3255.0],[1530.0,3270.0],[1530.0,3285.0],[1530.0,3300.0],[1530.0,3315.0],[1530.0,3330.0],[1770,1770],[1784.11,1770.0],[1798.22,1770.0],[1812.34,1770.0],[1826.45,1770.0],[1840.56,1770.0],[1854.67,1770.0],[1868.79,1770.0],[1879.01,1769.06],[1888.45,1766.25],[1897.11,1761.56],[1905.0,1755.0],[1920.0,1740.0],[1760.06,1779.94],[1750.11,1789.89],[1740.17,1799.83],[1730.22,1809.78],[1720.28,1819.72],[1710.33,1829.67],[1700.39,1839.61],[1690.44,1849.56],[1680.5,1859.5],[1670.55,1869.45],[1660.61,1879.39],[1655.03,1884.03],[1648.9,1887.35],[1642.23,1889.34],[1635.0,1890.0],[1620.0,1890.0],[1785.0,1755.0],[1791.56,1747.11],[1796.25,1738.45],[1799.06,1729.01],[1800.0,1718.79],[1800.0,1704.67],[1800.0,1690.56],[1800.0,1676.45],[1800.0,1662.34],[1800.0,1648.22],[1800.0,1634.11],[1800.0,1620.0],[1770.0,1789.0],[1770.0,1808.0],[1769.03,1818.6],[1766.11,1828.39],[1761.25,1837.38],[1754.44,1845.56],[1743.81,1856.19],[1733.17,1866.83],[1722.54,1877.46],[1711.9,1888.1],[1701.27,1898.73],[1690.63,1909.37],[1680.0,1920.0],[2130,1890],[2120.0,1900.0],[2110.0,1910.0],[2100.0,1920.0],[1890,2820],[1900.0,2830.0],[1910.0,2840.0],[1920.0,2850.0],[1930.0,2860.0],[1940.0,2870.0],[1950.0,2880.0],[1960.0,2890.0],[1970.0,2900.0],[1980.0,2910.0],[1990.0,2920.0],[2000.0,2930.0],[2010.0,2940.0],[2020.0,2950.0],[2030.0,2960.0],[2040.0,2970.0],[2050.0,2980.0],[2060.0,2990.0],[2070.0,3000.0],[1876.0,2820.0],[1862.0,2820.0],[1848.0,2820.0],[1834.0,2820.0],[1820.0,2820.0],[1806.0,2820.0],[1792.0,2820.0],[1778.0,2820.0],[1764.0,2820.0],[1750.0,2820.0],[1736.0,2820.0],[1722.0,2820.0],[1708.0,2820.0],[1694.0,2820.0],[1680.0,2820.0],[2190,2040],[2175.0,2025.0],[2167.11,2018.44],[2158.45,2013.75],[2149.01,2010.94],[2138.79,2010.0],[2119.39,2010.0],[2100.0,2010.0],[930,1860],[939.97,1850.03],[949.95,1840.05],[959.92,1830.08],[969.89,1820.11],[979.87,1810.13],[989.84,1800.16],[999.82,1790.18],[1009.79,1780.21],[1019.76,1770.24],[1029.74,1760.26],[1039.71,1750.29],[1049.68,1740.32],[1059.66,1730.34],[1069.63,1720.37],[1079.6,1710.4],[1089.58,1700.42],[1099.55,1690.45],[1109.53,1680.47],[1119.5,1670.5],[1129.47,1660.53],[1139.45,1650.55],[1149.42,1640.58],[1159.39,1630.61],[1164.03,1625.03],[1167.35,1618.9],[1169.34,1612.23],[1170.0,1605.0],[1170.0,1590.0],[930.0,1874.31],[930.0,1888.62],[930.0,1902.93],[930.0,1917.24],[930.0,1931.55],[930.0,1945.86],[930.0,1960.17],[930.0,1974.48],[930.0,1988.79],[930.94,1999.01],[933.75,2008.45],[938.44,2017.11],[945.0,2025.0],[960.0,2040.0],[918.89,1848.89],[907.78,1837.78],[896.67,1826.67],[885.56,1815.56],[878.75,1807.38],[873.89,1798.39],[870.97,1788.6],[870.0,1778.0],[870.0,1763.64],[870.0,1749.27],[870.0,1734.91],[870.0,1720.55],[870.0,1706.18],[870.0,1691.82],[870.0,1677.45],[870.0,1663.09],[870.0,1648.73],[870.0,1634.36],[870.0,1620.0],[915.0,1860.0],[907.77,1860.66],[901.1,1862.65],[894.97,1865.97],[889.39,1870.61],[879.42,1880.58],[869.45,1890.55],[859.47,1900.53],[849.5,1910.5],[839.53,1920.47],[829.55,1930.45],[819.58,1940.42],[809.6,1950.4],[799.63,1960.37],[789.66,1970.34],[779.68,1980.32],[769.71,1990.29],[759.74,2000.26],[749.76,2010.24],[739.79,2020.21],[729.82,2030.18],[719.84,2040.16],[709.87,2050.13],[699.89,2060.11],[689.92,2070.08],[679.95,2080.05],[669.97,2090.03],[1650.0,3494.12],[1650.0,3508.24],[1650.0,3522.35],[1650.0,3536.47],[1650.0,3550.59],[1650.0,3564.71],[1650.0,3578.82],[1650.0,3592.94],[1650.0,3607.06],[1650.0,3621.18],[1650.0,3635.29],[1650.0,3649.41],[1650.0,3663.53],[1650.0,3677.65],[1650.0,3691.76],[1650.0,3705.88],[1635.88,3480.0],[1621.76,3480.0],[1607.65,3480.0],[1593.53,3480.0],[1579.41,3480.0],[1565.29,3480.0],[1551.18,3480.0],[1537.06,3480.0],[1522.94,3480.0],[1508.82,3480.0],[1494.71,3480.0],[1480.59,3480.0],[1466.47,3480.0],[1452.35,3480.0],[1438.24,3480.0],[1424.12,3480.0],[1410.0,3480.0],[1080,2760],[1070.0,2770.0],[1060.0,2780.0],[1050.0,2790.0],[1040.0,2800.0],[1030.0,2810.0],[1020.0,2820.0],[1010.0,2830.0],[1000.0,2840.0],[990.0,2850.0],[1095.0,2760.0],[1110.0,2760.0],[1125.0,2760.0],[1140.0,2760.0],[1155.0,2760.0],[1170.0,2760.0],[1185.0,2760.0],[1200.0,2760.0],[1080.0,2745.0],[1079.34,2737.77],[1077.35,2731.1],[1074.03,2724.97],[1069.39,2719.39],[1057.05,2707.05],[1044.7,2694.7],[1032.35,2682.35],[930,3120],[930.0,3105.54],[930.0,3091.08],[930.0,3076.62],[930.0,3062.15],[930.0,3047.69],[930.0,3033.23],[930.0,3018.77],[930.0,3004.31],[930.0,2989.85],[930.0,2975.38],[930.0,2960.92],[930.0,2946.46],[930.0,2932.0],[930.97,2921.4],[933.89,2911.61],[938.75,2902.62],[945.56,2894.44],[956.67,2883.33],[967.78,2872.22],[978.89,2861.11],[920.0,3110.0],[910.0,3100.0],[900.0,3090.0],[890.0,3080.0],[880.0,3070.0],[870.0,3060.0],[860.0,3050.0],[850.0,3040.0],[840.0,3030.0],[830.0,3020.0],[820.0,3010.0],[810.0,3000.0],[800.0,2990.0],[790.0,2980.0],[780.0,2970.0],[770.0,2960.0],[760.0,2950.0],[750.0,2940.0],[740.0,2930.0],[730.0,2920.0],[2040,2520],[2029.77,2509.77],[2019.53,2499.53],[2009.3,2489.3],[1999.06,2479.06],[1988.83,2468.83],[1978.6,2458.6],[1968.36,2448.36],[1958.13,2438.13],[1947.9,2427.9],[1937.66,2417.66],[1927.43,2407.43],[1917.19,2397.19],[1906.96,2386.96],[1896.73,2376.73],[1886.49,2366.49],[1876.26,2356.26],[1866.02,2346.02],[1855.79,2335.79],[1845.56,2325.56],[1838.75,2317.38],[1833.89,2308.39],[1830.97,2298.6],[1830.0,2288.0],[1830.0,2271.0],[1830.0,2254.0],[1830.0,2237.0],[1830.0,2220.0],[2050.63,2530.63],[2061.27,2541.27],[2071.9,2551.9],[2082.54,2562.54],[2093.17,2573.17],[2103.81,2583.81],[2114.44,2594.44],[2121.25,2602.62],[2126.11,2611.61],[2129.03,2621.4],[2130.0,2632.0],[2130.0,2646.63],[2130.0,2661.26],[2130.0,2675.89],[2130.0,2690.53],[2130.0,2705.16],[2130.0,2719.79],[2130.0,2734.42],[2130.0,2749.05],[2130.0,2763.68],[2130.0,2778.32],[2130.0,2792.95],[2130.0,2807.58],[2130.0,2822.21],[2130.0,2836.84],[2130.0,2851.47],[2130.0,2866.11],[2130.0,2880.74],[2130.0,2895.37],[2130.0,2910.0],[2025.98,2520.0],[2011.96,2520.0],[1997.94,2520.0],[1983.91,2520.0],[1969.89,2520.0],[1955.87,2520.0],[1941.85,2520.0],[1927.83,2520.0],[1913.81,2520.0],[1899.79,2520.0],[1885.77,2520.0],[1871.74,2520.0],[1857.72,2520.0],[1843.7,2520.0],[1829.68,2520.0],[1815.66,2520.0],[1801.64,2520.0],[1787.62,2520.0],[1773.6,2520.0],[1759.57,2520.0],[1745.55,2520.0],[1731.53,2520.0],[1717.51,2520.0],[1703.49,2520.0],[1689.47,2520.0],[1675.45,2520.0],[1661.43,2520.0],[1647.4,2520.0],[1633.38,2520.0],[1619.36,2520.0],[1605.34,2520.0],[1591.32,2520.0],[1577.3,2520.0],[1563.28,2520.0],[1549.26,2520.0],[1535.23,2520.0],[1521.21,2520.0],[1510.99,2519.06],[1501.55,2516.25],[1492.89,2511.56],[1485.0,2505.0],[1470.0,2490.0],[1650.0,3735.0],[1650.0,3750.0],[1650.0,3765.0],[1650.0,3780.0],[1650.0,3795.0],[1650.0,3810.0],[1650.0,3825.0],[1770,4050],[1760.0,4040.0],[1750.0,4030.0],[1740.0,4020.0],[1730.0,4010.0],[1720.0,4000.0],[1710.0,3990.0],[1700.0,3980.0],[1690.0,3970.0],[1680.0,3960.0],[1670.0,3950.0],[1660.0,3940.0],[1755.0,4050.0],[1740.0,4050.0],[1725.0,4050.0],[1710.0,4050.0],[1695.0,4050.0],[1680.0,4050.0],[1665.0,4050.0],[1650.0,4050.0],[1035.0,2670.0],[1042.23,2669.34],[1048.9,2667.35],[1055.03,2664.03],[1060.61,2659.39],[1080.0,2640.0],[1005.0,2685.0],[998.44,2692.89],[993.75,2701.55],[990.94,2710.99],[990.0,2721.21],[990.0,2735.52],[990.0,2749.83],[990.0,2764.14],[990.0,2778.45],[990.0,2792.76],[990.0,2807.07],[990.0,2821.38],[990.0,2835.69],[1666.0,1920.0],[1652.0,1920.0],[1638.0,1920.0],[1624.0,1920.0],[1610.0,1920.0],[1596.0,1920.0],[1582.0,1920.0],[1571.4,1920.97],[1561.61,1923.89],[1552.62,1928.75],[1544.44,1935.56],[1533.81,1946.19],[1523.17,1956.83],[1512.54,1967.46],[1501.9,1978.1],[1491.27,1988.73],[1480.63,1999.37],[1470.0,2010.0],[1694.0,1920.0],[1708.0,1920.0],[1722.0,1920.0],[1736.0,1920.0],[1750.0,1920.0],[1764.0,1920.0],[1778.0,1920.0],[1792.0,1920.0],[1806.0,1920.0],[1820.0,1920.0],[1834.0,1920.0],[1848.0,1920.0],[1862.0,1920.0],[1876.0,1920.0],[1890.0,1920.0],[1665.0,1935.0],[1658.44,1942.89],[1653.75,1951.55],[1650.94,1960.99],[1650.0,1971.21],[1650.0,1990.61],[1650.0,2010.0],[1665.0,1920.0],[1657.77,1919.34],[1651.1,1917.35],[1644.97,1914.03],[1639.39,1909.39],[1620,3330],[1610.0,3320.0],[1600.0,3310.0],[1590.0,3300.0],[1635.0,3330.0],[1642.23,3330.66],[1648.9,3332.65],[1655.03,3335.97],[1660.61,3340.61],[1620.0,3315.0],[1620.0,3300.0],[1620.0,3285.0],[1620.0,3270.0],[1620.0,3255.0],[1620.0,3240.0],[1620.0,3225.0],[1020,2160],[1031.11,2171.11],[1042.22,2182.22],[1053.33,2193.33],[1064.44,2204.44],[1071.25,2212.62],[1076.11,2221.61],[1079.03,2231.4],[1080.0,2242.0],[1080.0,2256.21],[1080.0,2270.43],[1080.0,2284.64],[1080.0,2298.86],[1080.0,2313.07],[1080.0,2327.29],[1080.0,2341.5],[1080.0,2355.71],[1080.0,2369.93],[1080.0,2384.14],[1080.0,2398.36],[1080.0,2412.57],[1080.0,2426.79],[1080.0,2441.0],[1080.0,2455.21],[1080.0,2469.43],[1080.0,2483.64],[1080.0,2497.86],[1080.0,2512.07],[1080.0,2526.29],[1080.0,2540.5],[1080.0,2554.71],[1080.0,2568.93],[1080.0,2583.14],[1080.0,2597.36],[1080.0,2611.57],[1080.0,2625.79],[1020.0,2141.0],[1020.0,2122.0],[1019.03,2111.4],[1016.11,2101.61],[1011.25,2092.62],[1004.44,2084.44],[993.33,2073.33],[982.22,2062.22],[971.11,2051.11],[1005.37,2160.0],[990.74,2160.0],[976.11,2160.0],[961.47,2160.0],[946.84,2160.0],[932.21,2160.0],[917.58,2160.0],[902.95,2160.0],[888.32,2160.0],[873.68,2160.0],[859.05,2160.0],[844.42,2160.0],[829.79,2160.0],[815.16,2160.0],[800.53,2160.0],[785.89,2160.0],[771.26,2160.0],[756.63,2160.0],[742.0,2160.0],[731.4,2159.03],[721.61,2156.11],[712.62,2151.25],[704.44,2144.44],[693.33,2133.33],[682.22,2122.22],[671.11,2111.11],[1034.15,2160.0],[1048.31,2160.0],[1062.46,2160.0],[1076.62,2160.0],[1090.77,2160.0],[1104.92,2160.0],[1119.08,2160.0],[1133.23,2160.0],[1147.38,2160.0],[1161.54,2160.0],[1175.69,2160.0],[1189.85,2160.0],[1204.0,2160.0],[1218.15,2160.0],[1232.31,2160.0],[1246.46,2160.0],[1260.62,2160.0],[1274.77,2160.0],[1288.92,2160.0],[1303.08,2160.0],[1317.23,2160.0],[1331.38,2160.0],[1345.54,2160.0],[1359.69,2160.0],[1373.85,2160.0],[1388.0,2160.0],[1398.6,2160.97],[1408.39,2163.89],[1417.38,2168.75],[1425.56,2175.56],[1436.67,2186.67],[1447.78,2197.78],[1458.89,2208.89],[1470.0,2220.0],[1650.0,3975.0],[1650.0,3990.0],[1650.0,4005.0],[1650.0,4020.0],[1650.0,4035.0],[1628.44,3952.89],[1623.75,3961.55],[1620.94,3970.99],[1620.0,3981.21],[1620.0,3998.41],[1620.0,4015.61],[1620.0,4032.8],[858.89,1608.89],[847.78,1597.78],[836.67,1586.67],[825.56,1575.56],[817.38,1568.75],[808.39,1563.89],[798.6,1560.97],[788.0,1560.0],[769.0,1560.0],[750.0,1560.0],[885.0,1635.0],[892.89,1641.56],[901.55,1646.25],[910.99,1649.06],[921.21,1650.0],[935.52,1650.0],[949.83,1650.0],[964.14,1650.0],[978.45,1650.0],[992.76,1650.0],[1007.07,1650.0],[1021.38,1650.0],[1035.69,1650.0],[1050.0,1650.0],[1670.0,2830.0],[1660.0,2840.0],[1650.0,2850.0],[1640.0,2860.0],[1630.0,2870.0],[1620.0,2880.0],[1669.39,2820.0],[1664.28,2820.47],[1659.56,2821.88],[1655.23,2824.22],[1651.29,2827.5],[1639.39,2839.39],[1627.5,2851.29],[1624.22,2855.23],[1621.88,2859.56],[1620.47,2864.28],[1620.0,2869.39],[1200.0,2955.0],[1200.0,2940.0],[1211.11,2981.11],[1222.22,2992.22],[1233.33,3003.33],[1244.44,3014.44],[1251.25,3022.62],[1256.11,3031.61],[1259.03,3041.4],[1260.0,3052.0],[1260.0,3069.0],[1260.0,3086.0],[1260.0,3103.0],[1200.0,2925.0],[1200.0,2910.0],[1200.0,2895.0],[1200.0,2880.0],[1200.0,2865.0],[1200.0,2850.0],[1200.0,2835.0],[1395.0,3480.0],[1380.0,3463.0],[1380.0,3446.0],[1380.0,3429.0],[1380.0,3412.0],[1380.97,3401.4],[1383.89,3391.61],[1388.75,3382.62],[1395.56,3374.44],[1406.67,3363.33],[1417.78,3352.22],[1428.89,3341.11],[1429.39,3499.39],[1434.03,3504.97],[1437.35,3511.1],[1439.34,3517.77],[1440.0,3525.0],[1425.0,3465.0],[1432.89,3458.44],[1441.55,3453.75],[1450.99,3450.94],[1461.21,3450.0],[1475.65,3450.0],[1490.08,3450.0],[1504.52,3450.0],[1518.95,3450.0],[1533.39,3450.0],[1547.82,3450.0],[1562.26,3450.0],[1576.69,3450.0],[1591.13,3450.0],[1605.56,3450.0],[1431.56,3457.11],[1436.25,3448.45],[1439.06,3439.01],[1440.0,3428.79],[1440.0,3414.67],[1440.0,3400.56],[1440.0,3386.45],[1440.0,3372.34],[1440.0,3358.22],[1440.0,3344.11],[1448.44,3907.11],[1443.75,3898.45],[1440.94,3889.01],[1440.0,3878.79],[1440.0,3864.67],[1440.0,3850.56],[1440.0,3836.45],[1440.0,3822.34],[1440.0,3808.22],[1440.0,3794.11],[1440.0,3780.0],[1470.0,2475.79],[1470.0,2461.58],[1470.0,2447.37],[1470.0,2433.16],[1470.0,2418.95],[1470.0,2404.74],[1470.0,2390.53],[1470.0,2376.32],[1470.0,2362.11],[1470.0,2347.89],[1470.0,2333.68],[1470.0,2319.47],[1470.0,2305.26],[1470.0,2291.05],[1470.0,2276.84],[1470.0,2262.63],[1470.0,2248.42],[1470.0,2234.21],[1470.0,2504.22],[1470.0,2518.44],[1470.0,2532.67],[1470.0,2546.89],[1470.0,2561.11],[1470.0,2575.33],[1470.0,2589.56],[1470.0,2603.78],[1470.0,2618.0],[1469.03,2628.6],[1466.11,2638.39],[1461.25,2647.38],[1454.44,2655.56],[1443.33,2666.67],[1432.22,2677.78],[1421.11,2688.89],[1410.0,2700.0],[1454.31,4020.0],[1468.62,4020.0],[1482.93,4020.0],[1497.24,4020.0],[1511.55,4020.0],[1525.86,4020.0],[1540.17,4020.0],[1554.48,4020.0],[1568.79,4020.0],[1579.01,4020.94],[1588.45,4023.75],[1597.11,4028.44],[1605.0,4035.0],[660,2190],[660.0,2175.0],[660.0,2160.0],[660.0,2145.0],[660.0,2130.0],[660.0,2115.0],[660.0,2204.0],[660.0,2218.0],[660.0,2232.0],[660.0,2246.0],[660.0,2260.0],[660.0,2274.0],[660.0,2288.0],[660.0,2302.0],[660.0,2316.0],[660.0,2330.0],[660.0,2344.0],[660.0,2358.0],[660.0,2372.0],[660.0,2386.0],[660.0,2400.0],[660.0,2414.0],[660.0,2428.0],[660.0,2442.0],[660.0,2456.0],[660.0,2470.0],[660.0,2484.0],[660.0,2498.0],[659.03,2508.6],[656.11,2518.39],[651.25,2527.38],[644.44,2535.56],[633.33,2546.67],[622.22,2557.78],[611.11,2568.89],[645.0,2190.0],[630.0,2190.0],[615.0,2190.0],[600.0,2190.0],[2130.0,2925.0],[2129.34,2932.23],[2127.35,2938.9],[2124.03,2945.03],[2119.39,2950.61],[2107.05,2962.95],[2094.7,2975.3],[2082.35,2987.65],[1455.0,3735.0],[1448.44,3727.11],[1443.75,3718.45],[1440.94,3709.01],[1440.0,3698.79],[1440.0,3684.67],[1440.0,3670.56],[1440.0,3656.45],[1440.0,3642.34],[1440.0,3628.22],[1440.0,3614.11],[1460.0,3760.0],[1450.0,3770.0],[731.11,2898.89],[742.22,2887.78],[753.33,2876.67],[764.44,2865.56],[772.62,2858.75],[781.61,2853.89],[791.4,2850.97],[802.0,2850.0],[816.46,2850.0],[830.92,2850.0],[845.38,2850.0],[859.85,2850.0],[874.31,2850.0],[888.77,2850.0],[903.23,2850.0],[917.69,2850.0],[932.15,2850.0],[946.62,2850.0],[961.08,2850.0],[975.54,2850.0],[734.11,2910.0],[748.22,2910.0],[762.34,2910.0],[776.45,2910.0],[790.56,2910.0],[804.67,2910.0],[818.79,2910.0],[829.01,2910.94],[838.45,2913.75],[847.11,2918.44],[855.0,2925.0],[870.0,2940.0],[1215.0,2805.0],[1221.56,2797.11],[1226.25,2788.45],[1229.06,2779.01],[1230.0,2768.79],[1230.0,2749.39],[1230.0,2730.0],[585.69,2580.0],[571.38,2580.0],[557.07,2580.0],[542.76,2580.0],[528.45,2580.0],[514.14,2580.0],[499.83,2580.0],[485.52,2580.0],[471.21,2580.0],[460.99,2580.94],[451.55,2583.75],[442.89,2588.44],[435.0,2595.0],[420.0,2610.0],[2010,1740],[1995.0,1740.0],[1980.0,1740.0],[1965.0,1740.0],[1950.0,1740.0],[1935.0,1740.0],[1620.0,3195.0],[1620.0,3180.0],[1620.0,3165.0],[1620.0,3150.0],[1620.0,3135.0],[1620.0,3120.0],[1620.0,3105.0],[1620.0,3090.0],[1630.0,3220.0],[1640.0,3230.0],[1627.5,3202.5],[1630.78,3198.56],[1633.12,3194.22],[1634.53,3189.5],[1635.0,3184.39],[1635.0,3170.28],[1635.0,3156.17],[1635.0,3142.06],[1635.0,3127.94],[1635.0,3113.83],[1635.0,3099.72],[1635.0,3085.61],[1634.53,3080.5],[1633.12,3075.78],[1630.78,3071.44],[1627.5,3067.5],[1610.0,3200.0],[1600.0,3190.0],[1590.0,3180.0],[1440.0,3615.0],[1440.0,3630.0],[1440.0,3645.0],[1440.0,3660.0],[1440.0,3675.0],[1440.0,3690.0],[1440.0,3705.0],[1440.0,3720.0],[1440.0,3735.0],[1440.0,3750.0],[1440.0,3765.0],[1279.0,3120.0],[1298.0,3120.0],[1308.6,3120.97],[1318.39,3123.89],[1327.38,3128.75],[1335.56,3135.56],[1345.79,3145.79],[1356.02,3156.02],[1366.26,3166.26],[1376.49,3176.49],[1386.73,3186.73],[1396.96,3196.96],[1407.19,3207.19],[1417.43,3217.43],[1427.66,3227.66],[1437.9,3237.9],[1448.13,3248.13],[1458.36,3258.36],[1468.6,3268.6],[1478.83,3278.83],[1489.06,3289.06],[1499.3,3299.3],[1509.53,3309.53],[1519.77,3319.77],[1275.0,3120.0],[1260.0,3135.0],[1260.66,3142.23],[1262.65,3148.9],[1265.97,3155.03],[1270.61,3160.61],[1280.57,3170.57],[1290.54,3180.54],[1300.5,3190.5],[1310.46,3200.46],[1320.43,3210.43],[1330.39,3220.39],[1340.36,3230.36],[1350.32,3240.32],[1360.29,3250.29],[1370.25,3260.25],[1380.21,3270.21],[1390.18,3280.18],[1400.14,3290.14],[1410.11,3300.11],[1420.07,3310.07],[1430.04,3320.04],[1657.5,3832.5],[1660.78,3828.56],[1663.12,3824.22],[1664.53,3819.5],[1665.0,3814.39],[1665.0,3805.61],[1664.53,3800.5],[1663.12,3795.78],[1660.78,3791.44],[1657.5,3787.5],[1560,2940],[1570.0,2930.0],[1580.0,2920.0],[1590.0,2910.0],[1600.0,2900.0],[1610.0,2890.0],[1560.0,2955.0],[1560.0,2970.0],[1560.0,2985.0],[1560.0,3000.0],[1545.0,2940.0],[1530.0,2940.0],[1515.0,2940.0],[1560.0,2925.0],[1560.0,2910.0],[1560.0,2895.0],[1560.0,2880.0],[1560.0,2865.0],[1560.0,2850.0],[1560.0,2835.0],[1560.0,2820.0],[1920.0,1754.31],[1920.0,1768.62],[1920.0,1782.93],[1920.0,1797.24],[1920.0,1811.55],[1920.0,1825.86],[1920.0,1840.17],[1920.0,1854.48],[1920.0,1868.79],[1919.06,1879.01],[1916.25,1888.45],[1911.56,1897.11],[1905.0,1905.0],[1910.0,1730.0],[1900.0,1720.0],[1890.0,1710.0],[1880.0,1700.0],[1870.0,1690.0],[1860.0,1680.0],[1850.0,1670.0],[1840.0,1660.0],[1830.0,1650.0],[1820.0,1640.0],[1810.0,1630.0],[1930.0,1750.0],[1940.0,1760.0],[1950.0,1770.0],[1960.0,1780.0],[1970.0,1790.0],[1980.0,1800.0],[1990.0,1810.0],[2000.0,1820.0],[2010.0,1830.0],[2020.0,1840.0],[2030.0,1850.0],[2040.0,1860.0],[2050.0,1870.0],[2060.0,1880.0],[2070.0,1890.0],[2080.0,1900.0],[2090.0,1910.0],[1230,1410],[1230.0,1425.0],[1230.0,1440.0],[1230.0,1455.0],[1230.0,1470.0],[1230.0,1485.0],[1230.0,1500.0],[1230.0,1515.0],[2086.0,1920.0],[2072.0,1920.0],[2058.0,1920.0],[2044.0,1920.0],[2030.0,1920.0],[2016.0,1920.0],[2002.0,1920.0],[1988.0,1920.0],[1974.0,1920.0],[1960.0,1920.0],[1946.0,1920.0],[1932.0,1920.0],[1918.0,1920.0],[1904.0,1920.0],[2100.0,1935.0],[2100.0,1950.0],[2100.0,1965.0],[2100.0,1980.0],[2100.0,1995.0],[1570.0,3010.0],[1580.0,3020.0],[1590.0,3030.0],[1600.0,3040.0],[1610.0,3050.0],[1550.0,2990.0],[1540.0,2980.0],[1530.0,2970.0],[1520.0,2960.0],[1510.0,2950.0],[1815.0,1170.0],[1800.0,1170.0],[1785.0,1170.0],[1770.0,1170.0],[1755.0,1170.0],[1740.0,1170.0],[1725.0,1170.0],[1844.21,1170.0],[1858.42,1170.0],[1872.63,1170.0],[1886.84,1170.0],[1901.05,1170.0],[1915.26,1170.0],[1929.47,1170.0],[1943.68,1170.0],[1957.89,1170.0],[1972.11,1170.0],[1986.32,1170.0],[2000.53,1170.0],[2014.74,1170.0],[2028.95,1170.0],[2043.16,1170.0],[2057.37,1170.0],[2071.58,1170.0],[2085.79,1170.0],[2100.0,1170.0],[1830.0,2205.0],[1829.34,2197.77],[1827.35,2191.1],[1824.03,2184.97],[1819.39,2179.39],[1809.43,2169.43],[1799.46,2159.46],[1789.5,2149.5],[1779.54,2139.54],[1769.57,2129.57],[1759.61,2119.61],[1749.64,2109.64],[1739.68,2099.68],[1729.71,2089.71],[1719.75,2079.75],[1709.79,2069.79],[1699.82,2059.82],[1689.86,2049.86],[1679.89,2039.89],[1669.93,2029.93],[1659.96,2019.96],[1815.6,2220.0],[1801.2,2220.0],[1786.8,2220.0],[1772.4,2220.0],[1758.0,2220.0],[1743.6,2220.0],[1729.2,2220.0],[1714.8,2220.0],[1700.4,2220.0],[1686.0,2220.0],[1671.6,2220.0],[1657.2,2220.0],[1642.8,2220.0],[1628.4,2220.0],[1614.0,2220.0],[1599.6,2220.0],[1585.2,2220.0],[1570.8,2220.0],[1556.4,2220.0],[1542.0,2220.0],[1527.6,2220.0],[1513.2,2220.0],[1498.8,2220.0],[1484.4,2220.0],[1845.0,2220.0],[1852.23,2219.34],[1858.9,2217.35],[1865.03,2214.03],[1870.61,2209.39],[1882.95,2197.05],[1895.3,2184.7],[1907.65,2172.35],[1920.0,2160.0],[1485.0,2010.0],[1492.23,2009.34],[1498.9,2007.35],[1505.03,2004.03],[1510.61,1999.39],[1520.55,1989.45],[1530.5,1979.5],[1540.44,1969.56],[1550.39,1959.61],[1560.33,1949.67],[1570.28,1939.72],[1580.22,1929.78],[1590.17,1919.83],[1600.11,1909.89],[1610.06,1899.94],[1470.0,2024.0],[1470.0,2038.0],[1470.0,2052.0],[1470.0,2066.0],[1470.0,2080.0],[1470.0,2094.0],[1470.0,2108.0],[1470.0,2122.0],[1470.0,2136.0],[1470.0,2150.0],[1470.0,2164.0],[1470.0,2178.0],[1470.0,2192.0],[1470.0,2206.0],[1455.0,2025.0],[1447.11,2031.56],[1438.45,2036.25],[1429.01,2039.06],[1418.79,2040.0],[1404.45,2040.0],[1390.11,2040.0],[1375.78,2040.0],[1361.44,2040.0],[1347.1,2040.0],[1332.76,2040.0],[1318.43,2040.0],[1304.09,2040.0],[1289.75,2040.0],[1275.42,2040.0],[1261.08,2040.0],[1246.74,2040.0],[1232.4,2040.0],[1218.07,2040.0],[1203.73,2040.0],[1189.39,2040.0],[1175.06,2040.0],[1160.72,2040.0],[1146.38,2040.0],[1132.05,2040.0],[1117.71,2040.0],[1103.37,2040.0],[1089.03,2040.0],[1074.7,2040.0],[1060.36,2040.0],[1046.02,2040.0],[1031.69,2040.0],[1017.35,2040.0],[1003.01,2040.0],[988.67,2040.0],[974.34,2040.0],[1890.0,1934.52],[1890.0,1949.04],[1890.0,1963.57],[1890.0,1978.09],[1890.0,1992.61],[1890.0,2007.13],[1890.0,2021.65],[1890.0,2036.18],[1890.0,2050.7],[1890.0,2065.22],[1890.0,2079.74],[1890.0,2094.26],[1890.0,2108.79],[1890.94,2119.01],[1893.75,2128.45],[1898.44,2137.11],[1905.0,2145.0],[1550.06,2810.06],[1540.11,2800.11],[1530.17,2790.17],[1520.22,2780.22],[1510.28,2770.28],[1500.33,2760.33],[1490.39,2750.39],[1480.44,2740.44],[1470.5,2730.5],[1460.55,2720.55],[1450.61,2710.61],[1445.03,2705.97],[1438.9,2702.65],[1432.23,2700.66],[1425.0,2700.0],[1570.0,2830.0],[1580.0,2840.0],[1590.0,2850.0],[1600.0,2860.0],[1610.0,2870.0],[1665.0,3255.0],[1671.56,3262.89],[1676.25,3271.55],[1679.06,3280.99],[1680.0,3291.21],[1680.0,3308.41],[1680.0,3325.61],[1680.0,3342.8],[1200.0,2805.0],[1200.0,2790.0],[1200.0,2775.0],[975.0,2850.0],[967.77,2850.66],[961.1,2852.65],[954.97,2855.97],[949.39,2860.61],[939.47,2870.53],[929.55,2880.45],[919.62,2890.38],[909.7,2900.3],[899.77,2910.23],[889.85,2920.15],[879.92,2930.08],[1090.63,2650.63],[1101.27,2661.27],[1111.9,2671.9],[1122.54,2682.54],[1133.17,2693.17],[1143.81,2703.81],[1154.44,2714.44],[1162.62,2721.25],[1171.61,2726.11],[1181.4,2729.03],[1192.0,2730.0],[1211.0,2730.0],[1610.02,1880.02],[1600.03,1870.03],[1590.05,1860.05],[1580.07,1850.07],[1570.09,1840.09],[1560.1,1830.1],[1550.12,1820.12],[1540.14,1810.14],[1530.16,1800.16],[1520.17,1790.17],[1510.19,1780.19],[1500.21,1770.21],[1490.23,1760.23],[1480.24,1750.24],[1470.26,1740.26],[1460.28,1730.28],[1450.29,1720.29],[1440.31,1710.31],[1430.33,1700.33],[1420.35,1690.35],[1410.36,1680.36],[1400.38,1670.38],[1390.4,1660.4],[1380.42,1650.42],[1370.43,1640.43],[1360.45,1630.45],[1350.47,1620.47],[1340.49,1610.49],[1330.5,1600.5],[1320.52,1590.52],[1310.54,1580.54],[1300.55,1570.55],[1290.57,1560.57],[1280.59,1550.59],[1270.61,1540.61],[1265.03,1535.97],[1258.9,1532.65],[1252.23,1530.66],[1245.0,1530.0],[1650.0,2025.0],[1649.34,2032.23],[1647.35,2038.9],[1644.03,2045.03],[1639.39,2050.61],[1629.43,2060.57],[1619.46,2070.54],[1609.5,2080.5],[1599.54,2090.46],[1589.57,2100.43],[1579.61,2110.39],[1569.64,2120.36],[1559.68,2130.32],[1549.71,2140.29],[1539.75,2150.25],[1529.79,2160.21],[1519.82,2170.18],[1509.86,2180.14],[1499.89,2190.11],[1489.93,2200.07],[1479.96,2210.04],[1665.0,3450.0],[1752.35,1542.35],[1764.7,1554.7],[1777.05,1567.05],[1789.39,1579.39],[1794.03,1584.97],[1797.35,1591.1],[1799.34,1597.77],[1800.0,1605.0],[1725.0,1515.0],[1717.11,1508.44],[1708.45,1503.75],[1699.01,1500.94],[1688.79,1500.0],[1674.26,1500.0],[1659.74,1500.0],[1645.22,1500.0],[1630.7,1500.0],[1616.18,1500.0],[1601.65,1500.0],[1587.13,1500.0],[1572.61,1500.0],[1558.09,1500.0],[1543.57,1500.0],[1529.04,1500.0],[1514.52,1500.0],[1500.0,1500.0],[1485.0,1515.0],[1477.11,1521.56],[1468.45,1526.25],[1459.01,1529.06],[1448.79,1530.0],[1434.2,1530.0],[1419.62,1530.0],[1405.03,1530.0],[1390.44,1530.0],[1375.86,1530.0],[1361.27,1530.0],[1346.69,1530.0],[1332.1,1530.0],[1317.51,1530.0],[1302.93,1530.0],[1288.34,1530.0],[1273.76,1530.0],[1259.17,1530.0],[1244.59,1530.0],[540,1560],[554.0,1560.0],[568.0,1560.0],[582.0,1560.0],[596.0,1560.0],[610.0,1560.0],[624.0,1560.0],[638.0,1560.0],[652.0,1560.0],[666.0,1560.0],[680.0,1560.0],[694.0,1560.0],[708.0,1560.0],[722.0,1560.0],[736.0,1560.0],[1680.0,3435.0],[1680.0,3420.0],[1680.0,3405.0],[1680.0,3390.0],[1680.0,3375.0],[1620.0,3435.0],[1620.66,3427.77],[1622.65,3421.1],[1625.97,3414.97],[1630.61,3409.39],[1642.95,3397.05],[1655.3,3384.7],[1667.65,3372.35],[1605.0,3435.0],[1598.44,3427.11],[1593.75,3418.45],[1590.94,3409.01],[1590.0,3398.79],[1590.0,3384.67],[1590.0,3370.56],[1590.0,3356.45],[1590.0,3342.34],[1590.0,3328.22],[1590.0,3314.11],[1395.69,2700.0],[1381.38,2700.0],[1367.07,2700.0],[1352.76,2700.0],[1338.45,2700.0],[1324.14,2700.0],[1309.83,2700.0],[1295.52,2700.0],[1281.21,2700.0],[1270.99,2700.94],[1261.55,2703.75],[1252.89,2708.44],[1245.0,2715.0],[1635.0,4050.0],[1210.0,2750.0],[1220.0,2740.0],[1220.0,1540.0],[1210.0,1550.0],[1200.0,1560.0],[1190.0,1570.0],[1180.0,1580.0],[1215.71,1530.0],[1201.41,1530.0],[1187.12,1530.0],[1172.83,1530.0],[1158.54,1530.0],[1144.24,1530.0],[1129.95,1530.0],[1115.66,1530.0],[1101.36,1530.0],[1087.07,1530.0],[1072.78,1530.0],[1058.49,1530.0],[1044.19,1530.0],[1029.9,1530.0],[1015.61,1530.0],[1001.31,1530.0],[987.02,1530.0],[972.73,1530.0],[958.44,1530.0],[944.14,1530.0],[929.85,1530.0],[915.56,1530.0],[901.26,1530.0],[886.97,1530.0],[872.68,1530.0],[858.38,1530.0],[844.09,1530.0],[829.8,1530.0],[815.51,1530.0],[801.21,1530.0],[790.99,1530.94],[781.55,1533.75],[772.89,1538.44],[765.0,1545.0],[948.89,2051.11],[937.78,2062.22],[926.67,2073.33],[915.56,2084.44],[907.38,2091.25],[898.39,2096.11],[888.6,2099.03],[878.0,2100.0],[863.47,2100.0],[848.93,2100.0],[834.4,2100.0],[819.87,2100.0],[805.33,2100.0],[790.8,2100.0],[776.27,2100.0],[761.73,2100.0],[747.2,2100.0],[732.67,2100.0],[718.13,2100.0],[703.6,2100.0],[689.07,2100.0],[674.53,2100.0],[1440.0,3554.12],[1440.0,3568.24],[1440.0,3582.35],[1440.0,3596.47],[1440.0,3610.59],[1440.0,3624.71],[1440.0,3638.82],[1440.0,3652.94],[1440.0,3667.06],[1440.0,3681.18],[1440.0,3695.29],[1440.0,3709.41],[1440.0,3723.53],[1440.0,3737.65],[1440.0,3751.76],[1440.0,3765.88],[1549.39,3310.61],[1554.97,3305.97],[1561.1,3302.65],[1567.77,3300.66],[1575.0,3300.0],[1158.89,1601.11],[1147.78,1612.22],[1136.67,1623.33],[1125.56,1634.44],[1117.38,1641.25],[1108.39,1646.11],[1098.6,1649.03],[1088.0,1650.0],[1069.0,1650.0],[2090.04,2019.96],[2080.09,2029.91],[2070.13,2039.87],[2060.17,2049.83],[2050.22,2059.78],[2040.26,2069.74],[2030.3,2079.7],[2020.35,2089.65],[2010.39,2099.61],[2000.43,2109.57],[1990.48,2119.52],[1980.52,2129.48],[1970.56,2139.44],[1960.61,2149.39],[1955.03,2154.03],[1948.9,2157.35],[1942.23,2159.34],[1935.0,2160.0],[600.0,2175.0],[600.66,2167.77],[602.65,2161.1],[605.97,2154.97],[610.61,2149.39],[622.95,2137.05],[635.3,2124.7],[647.65,2112.35]],"edges":[[0,1,0,1],[1,2,0,1],[0,3,0,1],[3,4,0,1],[0,5,2,0],[5,6,2,0],[6,7,2,0],[7,8,2,0],[8,9,2,0],[9,4,2,0],[10,11,1,1],[11,12,1,1],[12,13,1,1],[13,14,1,1],[14,15,1,1],[15,16,1,1],[16,17,1,1],[17,18,1,1],[18,19,1,1],[10,20,1,1],[20,21,1,1],[21,22,1,1],[22,23,1,1],[23,24,1,1],[24,25,1,1],[25,26,1,1],[26,27,1,1],[27,28,1,1],[28,29,1,1],[29,30,1,1],[30,31,1,1],[31,32,1,1],[32,33,1,1],[33,34,1,1],[34,35,1,1],[35,36,1,1],[36,37,1,1],[37,38,1,1],[38,39,1,1],[10,40,2,0],[40,41,2,0],[41,42,2,0],[42,43,2,0],[43,44,2,0],[44,45,2,0],[45,46,2,0],[46,47,2,0],[47,48,2,0],[48,49,2,0],[49,50,2,0],[50,51,2,0],[51,52,2,0],[53,54,1,1],[54,55,1,1],[55,56,1,1],[56,57,1,1],[57,58,1,1],[58,59,1,1],[59,60,1,1],[60,61,1,1],[53,62,1,1],[62,63,1,1],[63,64,1,1],[64,65,1,1],[65,66,1,1],[66,67,1,1],[67,68,1,1],[68,69,1,1],[69,70,1,1],[70,71,1,1],[53,72,2,0],[72,73,2,0],[73,74,2,0],[74,75,2,0],[75,76,2,0],[76,77,2,0],[77,78,2,0],[78,79,2,0],[79,80,2,0],[53,54,2,0],[54,55,2,0],[55,56,2,0],[56,57,2,0],[57,58,2,0],[58,59,2,0],[81,82,1,1],[82,83,1,1],[83,84,1,1],[84,85,1,1],[85,86,1,1],[86,87,1,1],[87,88,1,1],[88,89,1,1],[89,90,1,1],[90,91,1,1],[91,92,1,1],[92,93,1,1],[93,94,1,1],[81,95,0,1],[95,96,0,1],[96,97,0,1],[97,98,0,1],[98,99,0,1],[99,100,0,1],[100,101,0,1],[101,102,0,1],[102,103,0,1],[103,104,0,1],[104,105,0,1],[105,106,0,1],[106,107,0,1],[107,108,0,1],[81,109,2,0],[109,110,2,0],[110,111,2,0],[111,112,2,0],[112,113,2,0],[113,114,2,0],[81,115,2,0],[115,116,2,0],[116,117,2,0],[117,118,2,0],[118,119,2,0],[119,120,2,0],[120,121,2,0],[81,115,2,0],[115,116,2,0],[116,117,2,0],[117,118,2,0],[118,119,2,0],[119,120,2,0],[120,121,2,0],[122,123,1,0],[123,124,1,0],[124,125,1,0],[125,126,1,0],[126,127,1,0],[127,128,1,0],[128,129,1,0],[129,130,1,0],[130,131,1,0],[122,132,1,0],[132,133,1,0],[133,134,1,0],[134,135,1,0],[135,136,1,0],[136,137,1,0],[137,138,1,0],[138,139,1,0],[139,140,1,0],[140,141,1,0],[141,142,1,0],[142,143,1,0],[143,144,1,0],[144,145,1,0],[145,146,1,0],[146,147,1,0],[147,148,1,0],[148,149,1,0],[149,150,1,0],[150,151,1,0],[151,152,1,0],[152,153,1,0],[153,154,1,0],[154,155,1,0],[155,156,1,0],[156,157,1,0],[157,158,1,0],[158,159,1,0],[159,160,1,0],[160,161,1,0],[161,162,1,0],[162,163,1,0],[163,164,1,0],[164,165,1,0],[165,166,1,0],[166,167,1,0],[167,168,1,0],[168,169,1,0],[122,170,1,0],[170,171,1,0],[171,172,1,0],[172,173,1,0],[173,174,1,0],[174,175,1,0],[175,176,1,0],[176,177,1,0],[177,178,1,0],[178,179,1,0],[179,180,1,0],[180,181,1,0],[181,182,1,0],[182,183,1,0],[183,184,1,0],[184,185,1,0],[185,186,1,0],[122,187,1,0],[187,188,1,0],[188,189,1,0],[189,190,1,0],[190,191,1,0],[191,192,1,0],[192,193,1,0],[193,194,1,0],[194,195,1,0],[195,196,1,0],[197,198,1,0],[198,199,1,0],[199,200,1,0],[200,201,1,0],[201,202,1,0],[202,203,1,0],[203,204,1,0],[204,205,1,0],[205,206,1,0],[207,208,2,0],[208,209,2,0],[209,210,2,0],[207,211,2,0],[211,212,2,0],[212,213,2,0],[213,214,2,0],[214,215,2,0],[215,216,2,0],[216,80,2,0],[207,217,2,0],[217,218,2,0],[218,219,2,0],[219,220,2,0],[220,221,2,0],[221,61,2,0],[222,223,0,1],[223,224,0,1],[224,225,0,1],[225,226,0,1],[226,227,0,1],[227,228,0,1],[228,229,0,1],[229,230,0,1],[230,231,0,1],[231,232,0,1],[232,233,0,1],[233,234,0,1],[234,235,0,1],[235,236,0,1],[236,237,0,1],[237,238,0,1],[238,239,0,1],[239,240,0,1],[222,241,0,1],[241,242,0,1],[242,243,0,1],[243,244,0,1],[244,245,0,1],[245,246,0,1],[246,94,0,1],[222,247,2,0],[247,248,2,0],[248,249,2,0],[249,250,2,0],[250,251,2,0],[251,252,2,0],[252,253,2,0],[253,254,2,0],[254,255,2,0],[255,256,2,0],[222,257,2,0],[257,258,2,0],[258,259,2,0],[259,260,2,0],[260,261,2,0],[261,262,2,0],[262,263,2,0],[263,264,2,0],[264,265,2,0],[265,266,2,0],[266,267,2,0],[267,268,2,0],[268,269,2,0],[269,270,2,0],[270,271,2,0],[271,272,2,0],[272,256,2,0],[196,273,0,0],[273,274,0,0],[274,275,0,0],[275,276,0,0],[276,277,0,0],[277,278,0,0],[278,279,0,0],[279,280,0,0],[280,281,0,0],[281,282,0,0],[282,283,0,0],[283,284,0,0],[284,285,0,0],[285,286,0,0],[286,287,0,0],[287,288,0,0],[288,289,0,0],[289,290,0,0],[196,291,0,0],[291,292,0,0],[292,293,0,0],[293,294,0,0],[294,295,0,0],[295,296,0,0],[296,297,0,0],[297,298,0,0],[298,299,0,0],[299,300,0,0],[300,301,0,0],[301,131,0,0],[302,303,1,1],[303,304,1,1],[304,305,1,1],[305,306,1,1],[306,307,1,1],[307,308,1,1],[302,303,1,1],[303,304,1,1],[302,309,2,0],[309,310,2,0],[310,311,2,0],[311,312,2,0],[312,313,2,0],[313,314,2,0],[314,315,2,0],[315,316,2,0],[316,317,2,0],[317,318,2,0],[318,319,2,0],[319,320,2,0],[320,321,2,0],[321,322,2,0],[322,323,2,0],[323,324,2,0],[324,71,2,0],[302,325,2,0],[325,326,2,0],[326,327,2,0],[327,328,2,0],[328,329,2,0],[329,330,2,0],[330,331,2,0],[331,332,2,0],[332,333,2,0],[333,334,2,0],[334,335,2,0],[335,336,2,0],[336,337,2,0],[337,338,2,0],[338,339,2,0],[339,340,2,0],[302,303,2,0],[303,304,2,0],[304,305,2,0],[305,306,2,0],[306,307,2,0],[307,308,2,0],[308,341,2,0],[341,342,2,0],[343,344,0,1],[344,345,0,1],[345,346,0,1],[346,347,0,1],[347,348,0,1],[348,349,0,1],[349,350,0,1],[350,351,0,1],[351,352,0,1],[352,353,0,1],[353,354,0,1],[354,355,0,1],[355,356,0,1],[356,357,0,1],[343,358,0,1],[358,359,0,1],[359,360,0,1],[360,361,0,1],[361,362,0,1],[362,363,0,1],[363,364,0,1],[364,365,0,1],[343,366,2,0],[366,367,2,0],[367,368,2,0],[368,369,2,0],[369,370,2,0],[370,371,2,0],[371,372,2,0],[372,373,2,0],[373,374,2,0],[374,375,2,0],[375,376,2,0],[376,377,2,0],[377,378,2,0],[378,379,2,0],[379,380,2,0],[380,381,2,0],[343,382,2,0],[382,383,2,0],[383,384,2,0],[384,385,2,0],[385,386,2,0],[386,387,2,0],[387,388,2,0],[388,389,2,0],[389,390,2,0],[390,391,2,0],[391,392,2,0],[392,240,2,0],[343,393,2,0],[393,394,2,0],[394,395,2,0],[395,396,2,0],[396,397,2,0],[397,398,2,0],[398,399,2,0],[399,400,2,0],[400,401,2,0],[401,402,2,0],[402,403,2,0],[403,19,2,0],[404,405,1,0],[405,406,1,0],[406,407,1,0],[407,408,1,0],[408,409,1,0],[409,410,1,0],[410,411,1,0],[411,412,1,0],[412,413,1,0],[413,414,1,0],[414,415,1,0],[415,416,1,0],[404,417,1,0],[417,418,1,0],[418,419,1,0],[419,420,1,0],[420,421,1,0],[421,422,1,0],[422,423,1,0],[423,424,1,0],[424,425,1,0],[425,426,1,0],[426,427,1,0],[427,428,1,0],[428,429,1,0],[429,430,1,0],[430,431,1,0],[431,432,1,0],[432,433,1,0],[433,434,1,0],[434,435,1,0],[435,436,1,0],[436,437,1,0],[437,438,1,0],[404,405,1,0],[405,406,1,0],[406,407,1,0],[407,408,1,0],[408,409,1,0],[409,410,1,0],[410,411,1,0],[411,412,1,0],[412,413,1,0],[413,414,1,0],[414,415,1,0],[415,416,1,0],[404,439,1,0],[439,440,1,0],[440,441,1,0],[441,442,1,0],[442,443,1,0],[443,444,1,0],[444,445,1,0],[445,446,1,0],[446,447,1,0],[447,448,1,0],[448,449,1,0],[449,450,1,0],[450,451,1,0],[451,452,1,0],[452,453,1,0],[453,454,1,0],[454,455,1,0],[455,456,1,0],[456,457,1,0],[457,458,1,0],[458,459,1,0],[340,460,1,1],[460,461,1,1],[340,462,1,1],[462,463,1,1],[463,464,1,1],[464,465,1,1],[465,466,1,1],[466,467,1,1],[340,468,2,0],[468,469,2,0],[469,470,2,0],[470,471,2,0],[471,472,2,0],[472,473,2,0],[473,474,2,0],[474,475,2,0],[475,476,2,0],[476,477,2,0],[477,478,2,0],[478,479,2,0],[479,480,2,0],[480,481,2,0],[481,482,2,0],[482,483,2,0],[340,484,2,0],[484,485,2,0],[485,486,2,0],[486,487,2,0],[487,488,2,0],[488,489,2,0],[489,490,2,0],[490,491,2,0],[491,492,2,0],[492,493,2,0],[493,494,2,0],[494,495,2,0],[495,496,2,0],[496,497,2,0],[256,498,2,0],[498,499,2,0],[499,500,2,0],[500,501,2,0],[501,502,2,0],[502,503,2,0],[504,505,1,0],[505,506,1,0],[506,507,1,0],[507,508,1,0],[508,509,1,0],[509,510,1,0],[510,511,1,0],[511,512,1,0],[512,513,1,0],[513,514,1,0],[514,515,1,0],[515,516,1,0],[504,517,0,0],[517,518,0,0],[518,519,0,0],[519,520,0,0],[520,521,0,0],[521,522,0,0],[522,523,0,0],[523,524,0,0],[524,525,0,0],[525,526,0,0],[526,527,0,0],[527,528,0,0],[528,529,0,0],[529,530,0,0],[530,531,0,0],[531,532,0,0],[504,533,1,0],[533,534,1,0],[534,535,1,0],[535,536,1,0],[536,537,1,0],[537,538,1,0],[538,539,1,0],[539,540,1,0],[540,541,1,0],[541,542,1,0],[542,543,1,0],[543,544,1,0],[504,545,1,0],[545,546,1,0],[546,547,1,0],[547,548,1,0],[548,549,1,0],[549,550,1,0],[550,551,1,0],[551,552,1,0],[552,553,1,0],[553,554,1,0],[554,555,1,0],[555,556,1,0],[556,557,1,0],[558,559,0,0],[559,560,0,0],[560,561,0,0],[562,563,1,0],[563,564,1,0],[564,565,1,0],[565,566,1,0],[566,567,1,0],[567,568,1,0],[568,569,1,0],[569,570,1,0],[570,571,1,0],[571,572,1,0],[572,573,1,0],[573,574,1,0],[574,575,1,0],[575,576,1,0],[576,577,1,0],[577,578,1,0],[578,579,1,0],[579,580,1,0],[562,581,1,0],[581,582,1,0],[582,583,1,0],[583,584,1,0],[584,585,1,0],[585,586,1,0],[586,587,1,0],[587,588,1,0],[588,589,1,0],[589,590,1,0],[590,591,1,0],[591,592,1,0],[592,593,1,0],[593,594,1,0],[594,595,1,0],[596,597,1,0],[597,598,1,0],[598,599,1,0],[599,600,1,0],[600,601,1,0],[601,602,1,0],[602,603,1,0],[604,605,1,0],[605,606,1,0],[606,607,1,0],[607,608,1,0],[608,609,1,0],[609,610,1,0],[610,611,1,0],[611,612,1,0],[612,613,1,0],[613,614,1,0],[614,615,1,0],[615,616,1,0],[616,617,1,0],[617,618,1,0],[618,619,1,0],[619,620,1,0],[620,621,1,0],[621,622,1,0],[622,623,1,0],[623,624,1,0],[624,625,1,0],[625,626,1,0],[626,627,1,0],[627,628,1,0],[628,629,1,0],[629,630,1,0],[630,631,1,0],[631,632,1,0],[604,633,1,0],[633,634,1,0],[634,635,1,0],[635,636,1,0],[636,637,1,0],[637,638,1,0],[638,639,1,0],[639,640,1,0],[640,641,1,0],[641,642,1,0],[642,643,1,0],[643,644,1,0],[644,645,1,0],[645,646,1,0],[604,647,1,0],[647,648,1,0],[648,649,1,0],[649,650,1,0],[650,651,1,0],[651,652,1,0],[652,653,1,0],[653,654,1,0],[654,655,1,0],[655,656,1,0],[656,657,1,0],[657,658,1,0],[658,659,1,0],[659,660,1,0],[660,661,1,0],[661,662,1,0],[662,663,1,0],[663,664,1,0],[664,665,1,0],[604,666,0,0],[666,667,0,0],[667,668,0,0],[668,669,0,0],[669,670,0,0],[670,671,0,0],[671,672,0,0],[672,673,0,0],[673,674,0,0],[674,675,0,0],[675,676,0,0],[676,677,0,0],[677,678,0,0],[678,679,0,0],[679,680,0,0],[680,681,0,0],[681,682,0,0],[682,683,0,0],[683,684,0,0],[684,685,0,0],[685,686,0,0],[686,687,0,0],[687,688,0,0],[688,689,0,0],[689,690,0,0],[690,691,0,0],[691,692,0,0],[692,206,0,0],[59,693,2,0],[693,694,2,0],[694,695,2,0],[695,696,2,0],[696,697,2,0],[697,698,2,0],[698,699,2,0],[699,700,2,0],[700,701,2,0],[701,702,2,0],[702,703,2,0],[703,704,2,0],[704,705,2,0],[705,706,2,0],[706,707,2,0],[707,708,2,0],[708,71,2,0],[59,709,2,0],[709,710,2,0],[710,711,2,0],[711,712,2,0],[712,713,2,0],[713,714,2,0],[714,715,2,0],[715,716,2,0],[716,717,2,0],[717,718,2,0],[718,719,2,0],[719,720,2,0],[720,721,2,0],[721,722,2,0],[722,723,2,0],[723,724,2,0],[724,725,2,0],[726,727,0,1],[727,728,0,1],[728,729,0,1],[729,730,0,1],[730,731,0,1],[731,732,0,1],[732,733,0,1],[733,734,0,1],[734,735,0,1],[726,736,0,1],[736,737,0,1],[737,738,0,1],[738,739,0,1],[739,740,0,1],[740,741,0,1],[741,742,0,1],[742,743,0,1],[726,744,0,0],[744,745,0,0],[745,746,0,0],[746,747,0,0],[747,748,0,0],[748,749,0,0],[749,750,0,0],[750,751,0,0],[751,459,0,0],[752,753,0,0],[753,754,0,0],[754,755,0,0],[755,756,0,0],[756,757,0,0],[757,758,0,0],[758,759,0,0],[759,760,0,0],[760,761,0,0],[761,762,0,0],[762,763,0,0],[763,764,0,0],[764,765,0,0],[765,766,0,0],[766,767,0,0],[767,768,0,0],[768,769,0,0],[769,770,0,0],[770,771,0,0],[771,772,0,0],[772,735,0,0],[752,773,1,0],[773,774,1,0],[774,775,1,0],[775,776,1,0],[776,777,1,0],[777,778,1,0],[778,779,1,0],[779,780,1,0],[780,781,1,0],[781,782,1,0],[782,783,1,0],[783,784,1,0],[784,785,1,0],[785,786,1,0],[786,787,1,0],[787,788,1,0],[788,789,1,0],[789,790,1,0],[790,791,1,0],[791,792,1,0],[792,438,1,0],[793,794,1,0],[794,795,1,0],[795,796,1,0],[796,797,1,0],[797,798,1,0],[798,799,1,0],[799,800,1,0],[800,801,1,0],[801,802,1,0],[802,803,1,0],[803,804,1,0],[804,805,1,0],[805,806,1,0],[806,807,1,0],[807,808,1,0],[808,809,1,0],[809,810,1,0],[810,811,1,0],[811,812,1,0],[812,813,1,0],[813,814,1,0],[814,815,1,0],[815,816,1,0],[816,817,1,0],[817,818,1,0],[818,819,1,0],[819,820,1,0],[793,821,1,0],[821,822,1,0],[822,823,1,0],[823,824,1,0],[824,825,1,0],[825,826,1,0],[826,827,1,0],[827,828,1,0],[828,829,1,0],[829,830,1,0],[830,831,1,0],[831,832,1,0],[832,833,1,0],[833,834,1,0],[834,835,1,0],[835,836,1,0],[836,837,1,0],[837,838,1,0],[838,839,1,0],[839,840,1,0],[840,841,1,0],[841,842,1,0],[842,843,1,0],[843,844,1,0],[844,845,1,0],[845,846,1,0],[846,847,1,0],[847,848,1,0],[848,849,1,0],[849,850,1,0],[793,851,0,0],[851,852,0,0],[852,853,0,0],[853,854,0,0],[854,855,0,0],[855,856,0,0],[856,857,0,0],[857,858,0,0],[858,859,0,0],[859,860,0,0],[860,861,0,0],[861,862,0,0],[862,863,0,0],[863,864,0,0],[864,865,0,0],[865,866,0,0],[866,867,0,0],[867,868,0,0],[868,869,0,0],[869,870,0,0],[870,871,0,0],[871,872,0,0],[872,873,0,0],[873,874,0,0],[874,875,0,0],[875,876,0,0],[876,877,0,0],[877,878,0,0],[878,879,0,0],[879,880,0,0],[880,881,0,0],[881,882,0,0],[882,883,0,0],[883,884,0,0],[884,885,0,0],[885,886,0,0],[886,887,0,0],[887,888,0,0],[888,889,0,0],[889,890,0,0],[890,891,0,0],[891,892,0,0],[71,893,1,1],[893,894,1,1],[894,895,1,1],[895,896,1,1],[71,893,2,0],[893,894,2,0],[894,895,2,0],[895,896,2,0],[896,897,2,0],[897,898,2,0],[898,899,2,0],[899,342,2,0],[342,341,2,0],[341,308,2,0],[900,901,2,0],[901,902,2,0],[902,903,2,0],[903,904,2,0],[904,905,2,0],[905,906,2,0],[906,907,2,0],[907,908,2,0],[908,909,2,0],[909,910,2,0],[910,911,2,0],[911,304,2,0],[900,912,2,0],[912,913,2,0],[913,914,2,0],[914,915,2,0],[915,916,2,0],[916,917,2,0],[917,918,2,0],[918,919,2,0],[459,920,1,0],[920,921,1,0],[921,922,1,0],[922,923,1,0],[923,924,1,0],[924,925,1,0],[459,926,1,0],[926,927,1,0],[927,928,1,0],[928,929,1,0],[929,930,1,0],[930,931,1,0],[931,932,1,0],[932,933,1,0],[933,934,1,0],[934,935,1,0],[935,936,1,0],[936,937,1,0],[937,938,1,0],[938,735,1,0],[557,939,1,0],[939,940,1,0],[940,941,1,0],[941,942,1,0],[942,943,1,0],[943,944,1,0],[944,945,1,0],[945,946,1,0],[946,947,1,0],[947,948,1,0],[948,949,1,0],[949,950,1,0],[950,951,1,0],[951,952,1,0],[952,953,1,0],[953,954,1,0],[954,955,1,0],[955,956,1,0],[557,957,1,0],[957,958,1,0],[958,959,1,0],[959,960,1,0],[960,961,1,0],[961,962,1,0],[962,963,1,0],[963,964,1,0],[964,965,1,0],[965,966,1,0],[966,967,1,0],[967,968,1,0],[968,969,1,0],[969,970,1,0],[970,971,1,0],[557,972,1,0],[972,973,1,0],[973,974,1,0],[974,975,1,0],[975,976,1,0],[976,977,1,0],[977,978,1,0],[557,979,1,0],[979,980,1,0],[980,981,1,0],[981,982,1,0],[982,983,1,0],[983,532,1,0],[984,985,1,1],[985,986,1,1],[986,987,1,1],[984,988,1,1],[988,989,1,1],[989,990,1,1],[990,991,1,1],[991,992,1,1],[992,108,1,1],[984,993,2,0],[993,994,2,0],[994,995,2,0],[995,996,2,0],[996,997,2,0],[997,998,2,0],[998,999,2,0],[999,121,2,0],[1000,1001,1,0],[1001,1002,1,0],[1002,1003,1,0],[1003,1004,1,0],[1004,1005,1,0],[1005,1006,1,0],[1006,1007,1,0],[1007,1008,1,0],[1008,1009,1,0],[1009,1010,1,0],[1010,1011,1,0],[1011,1012,1,0],[1012,1013,1,0],[1013,1014,1,0],[1014,1015,1,0],[1015,1016,1,0],[1016,1017,1,0],[1017,1018,1,0],[1018,1019,1,0],[1019,1020,1,0],[1020,1021,1,0],[1021,1022,1,0],[1022,1023,1,0],[1023,1024,1,0],[1024,1025,1,0],[1025,1026,1,0],[1026,1027,1,0],[1027,1028,1,0],[1028,1029,1,0],[1029,1030,1,0],[1030,1031,1,0],[1031,1032,1,0],[1032,1033,1,0],[1033,1034,1,0],[1034,1035,1,0],[1035,925,1,0],[1000,1036,1,0],[1036,1037,1,0],[1037,1038,1,0],[1038,1039,1,0],[1039,1040,1,0],[1040,1041,1,0],[1041,1042,1,0],[1042,1043,1,0],[1043,1044,1,0],[1044,646,1,0],[1000,1045,1,0],[1045,1046,1,0],[1046,1047,1,0],[1047,1048,1,0],[1048,1049,1,0],[1049,1050,1,0],[1050,1051,1,0],[1051,1052,1,0],[1052,1053,1,0],[1053,1054,1,0],[1054,1055,1,0],[1055,1056,1,0],[1056,1057,1,0],[1057,1058,1,0],[1058,1059,1,0],[1059,1060,1,0],[1060,1061,1,0],[1061,1062,1,0],[1062,1063,1,0],[1063,1064,1,0],[1064,1065,1,0],[1065,1066,1,0],[1066,1067,1,0],[1067,1068,1,0],[1068,1069,1,0],[1069,1070,1,0],[1070,206,1,0],[1000,1071,1,0],[1071,1072,1,0],[1072,1073,1,0],[1073,1074,1,0],[1074,1075,1,0],[1075,1076,1,0],[1076,1077,1,0],[1077,1078,1,0],[1078,1079,1,0],[1079,1080,1,0],[1080,1081,1,0],[1081,1082,1,0],[1082,1083,1,0],[1083,1084,1,0],[1084,1085,1,0],[1085,1086,1,0],[1086,1087,1,0],[1087,1088,1,0],[1088,1089,1,0],[1089,1090,1,0],[1090,1091,1,0],[1091,1092,1,0],[1092,1093,1,0],[1093,1094,1,0],[1094,1095,1,0],[1095,1096,1,0],[1096,1097,1,0],[1097,1098,1,0],[1098,1099,1,0],[1099,1100,1,0],[1100,1101,1,0],[1101,1102,1,0],[1102,1103,1,0],[1103,1104,1,0],[304,303,1,1],[303,302,1,1],[302,1105,1,1],[1105,1106,1,1],[1106,1107,1,1],[1107,1108,1,1],[1108,1109,1,1],[1109,919,1,1],[304,325,2,0],[325,1110,2,0],[1110,1111,2,0],[1111,1112,2,0],[1112,1113,2,0],[1113,1114,2,0],[1114,1115,2,0],[1115,1116,2,0],[1116,483,2,0],[665,1117,1,0],[1117,1118,1,0],[1118,1119,1,0],[1119,1120,1,0],[1120,1121,1,0],[1121,1122,1,0],[1122,1123,1,0],[1123,1124,1,0],[1124,1125,1,0],[1125,1126,1,0],[665,1127,1,0],[1127,1128,1,0],[1128,1129,1,0],[1129,1130,1,0],[1130,1131,1,0],[1131,1132,1,0],[1132,1133,1,0],[1133,1134,1,0],[1134,1135,1,0],[1135,1136,1,0],[1136,1137,1,0],[1137,1138,1,0],[1138,1139,1,0],[1139,1140,1,0],[595,1141,1,0],[1141,1142,1,0],[1142,1143,1,0],[1143,1144,1,0],[1144,1145,1,0],[1145,1146,1,0],[595,1147,0,0],[1147,1148,0,0],[1148,1149,0,0],[1149,1150,0,0],[1150,1151,0,0],[1151,1152,0,0],[1152,1153,0,0],[1153,1154,0,0],[1154,1155,0,0],[1155,1156,0,0],[1156,1157,0,0],[1157,1146,0,0],[365,1158,1,1],[1158,1159,1,1],[365,1160,1,1],[1160,1161,1,1],[1161,1162,1,1],[1162,1163,1,1],[1163,1164,1,1],[1164,1165,1,1],[1165,1166,1,1],[1166,1167,1,1],[1167,1168,1,1],[1168,1169,1,1],[1169,1170,1,1],[1170,19,1,1],[365,1158,2,0],[1158,1159,2,0],[1159,1171,2,0],[1171,1172,2,0],[1172,1173,2,0],[1173,1174,2,0],[1174,1175,2,0],[1175,1176,2,0],[1176,1177,2,0],[1177,381,2,0],[39,1178,1,1],[1178,725,1,1],[39,1179,2,0],[1179,1180,2,0],[1180,1181,2,0],[1181,1182,2,0],[1182,1183,2,0],[1183,1184,2,0],[1184,1185,2,0],[1185,1186,2,0],[1186,1187,2,0],[1187,1188,2,0],[1188,1189,2,0],[1189,52,2,0],[725,1190,0,1],[1190,1191,0,1],[1191,1192,0,1],[1192,1193,0,1],[1193,1194,0,1],[1194,2,0,1],[725,1195,0,1],[1195,1196,0,1],[1196,1197,0,1],[1197,1198,0,1],[1198,1199,0,1],[1199,1200,0,1],[1200,1201,0,1],[1201,1202,0,1],[1202,1203,0,1],[1203,1204,0,1],[1204,1205,0,1],[1205,1206,0,1],[1206,1207,0,1],[1207,1208,0,1],[1208,1209,0,1],[1209,210,0,1],[725,1195,2,0],[1195,1210,2,0],[1210,1211,2,0],[1211,1212,2,0],[1212,1213,2,0],[1213,1214,2,0],[1214,1215,2,0],[1215,1216,2,0],[1216,1217,2,0],[1217,1218,2,0],[1218,1219,2,0],[1219,52,2,0],[461,484,0,1],[484,1220,0,1],[1220,1221,0,1],[1221,1222,0,1],[1222,1223,0,1],[1223,1224,0,1],[1224,1225,0,1],[1225,1226,0,1],[1226,1227,0,1],[1227,1228,0,1],[1228,1229,0,1],[1229,1230,0,1],[461,484,2,0],[484,1220,2,0],[1220,1221,2,0],[1221,1222,2,0],[1222,1223,2,0],[1223,1224,2,0],[1224,1225,2,0],[1225,1226,2,0],[1226,1227,2,0],[1227,1228,2,0],[1228,1229,2,0],[1229,1230,2,0],[892,1231,1,0],[1231,1232,1,0],[1232,1233,1,0],[1233,1234,1,0],[1234,1235,1,0],[1235,1236,1,0],[1236,1237,1,0],[1237,1238,1,0],[1238,1239,1,0],[1239,1240,1,0],[1240,1241,1,0],[1241,1242,1,0],[1242,1243,1,0],[1243,1244,1,0],[1244,1245,1,0],[1245,1246,1,0],[1246,1247,1,0],[1247,1248,1,0],[1248,1104,1,0],[892,1249,1,0],[1249,1250,1,0],[1250,1251,1,0],[1251,1252,1,0],[1252,1253,1,0],[1253,1254,1,0],[1254,1255,1,0],[1255,1256,1,0],[1256,1257,1,0],[1257,1258,1,0],[1258,1259,1,0],[1259,1260,1,0],[1260,1261,1,0],[1261,1262,1,0],[1262,1263,1,0],[1263,1264,1,0],[1264,1265,1,0],[467,1266,1,1],[1266,1267,1,1],[1267,1268,1,1],[1268,1269,1,1],[1269,1270,1,1],[1270,1271,1,1],[1271,1272,1,1],[1272,1273,1,1],[1273,1274,1,1],[1274,1275,1,1],[1275,1276,1,1],[1276,1277,1,1],[1277,1278,1,1],[1278,483,1,1],[467,1266,2,0],[1266,1267,2,0],[1267,1268,2,0],[1268,1269,2,0],[1269,1270,2,0],[1270,1271,2,0],[1271,1272,2,0],[1272,1273,2,0],[1273,1274,2,0],[1274,1275,2,0],[1275,1276,2,0],[1276,1277,2,0],[1277,1278,2,0],[1278,483,2,0],[1279,1280,1,0],[1280,1281,1,0],[1281,1282,1,0],[1282,1283,1,0],[1283,1284,1,0],[1284,206,1,0],[1279,1285,1,0],[1285,1286,1,0],[1286,1287,1,0],[1287,1288,1,0],[1288,1289,1,0],[1289,1290,1,0],[1290,1291,1,0],[1291,1292,1,0],[1292,1293,1,0],[1293,1294,1,0],[1294,1295,1,0],[1295,1296,1,0],[1296,1297,1,0],[1297,1298,1,0],[1298,1299,1,0],[1299,1300,1,0],[1300,1301,1,0],[1301,1302,1,0],[1302,1303,1,0],[1303,1304,1,0],[1304,1305,1,0],[1305,1306,1,0],[1306,1307,1,0],[1307,1308,1,0],[1308,1309,1,0],[1309,1310,1,0],[1310,1311,1,0],[1311,1312,1,0],[1312,1313,1,0],[1313,416,1,0],[1279,1314,1,0],[1314,1315,1,0],[1315,1316,1,0],[1316,1317,1,0],[850,1318,1,0],[1318,1319,1,0],[1319,1320,1,0],[1320,1321,1,0],[1321,1322,1,0],[1322,1323,1,0],[1323,1324,1,0],[1324,1325,1,0],[1325,580,1,0],[497,1326,2,0],[1326,1327,2,0],[1327,1328,2,0],[1328,1329,2,0],[1329,1330,2,0],[1330,1331,2,0],[1331,1332,2,0],[1332,1333,2,0],[1333,1334,2,0],[1334,1335,2,0],[1335,1336,2,0],[1336,4,2,0],[497,1337,2,0],[1337,1338,2,0],[1338,1230,2,0],[438,1339,0,0],[1339,1340,0,0],[1340,1341,0,0],[1341,1342,0,0],[1342,1343,0,0],[1343,1344,0,0],[1344,1345,0,0],[1345,1346,0,0],[1346,1347,0,0],[1347,1348,0,0],[1348,1349,0,0],[1349,1350,0,0],[1350,1351,0,0],[1351,1352,0,0],[1352,1353,0,0],[1353,1354,0,0],[1354,1355,0,0],[1355,1356,0,0],[1356,1357,0,0],[1357,1358,0,0],[1358,735,0,0],[438,1359,1,0],[1359,1360,1,0],[1360,1361,1,0],[1361,1362,1,0],[1362,1363,1,0],[1363,1364,1,0],[1364,1365,1,0],[1365,1366,1,0],[1366,1367,1,0],[1367,1368,1,0],[1368,1369,1,0],[1369,1370,1,0],[381,1371,1,1],[1371,1372,1,1],[1372,1373,1,1],[1373,1374,1,1],[1374,1375,1,1],[1375,1376,1,1],[1376,1377,1,1],[381,1177,1,1],[1177,1176,1,1],[1176,1175,1,1],[1175,1174,1,1],[1174,1173,1,1],[1173,1172,1,1],[1172,1171,1,1],[1171,1159,1,1],[416,1378,1,0],[1378,1379,1,0],[1379,1380,1,0],[1380,1381,1,0],[1381,1382,1,0],[1382,1383,1,0],[1383,1384,1,0],[1384,1385,1,0],[1385,1386,1,0],[1386,1387,1,0],[1387,1388,1,0],[1388,1389,1,0],[1389,1390,1,0],[1390,1391,1,0],[1392,1393,0,0],[1393,1394,0,0],[1394,1395,0,0],[1395,1396,0,0],[1396,1397,0,0],[1397,516,0,0],[121,1398,1,1],[1398,1399,1,1],[1399,1400,1,1],[1400,1401,1,1],[1401,1402,1,1],[1402,1403,1,1],[1403,1404,1,1],[1404,1405,1,1],[1405,93,1,1],[93,94,1,1],[121,1406,1,1],[1406,1407,1,1],[1407,114,1,1],[121,1408,2,0],[1408,1409,2,0],[1409,1410,2,0],[1410,1411,2,0],[1411,1412,2,0],[1412,1413,2,0],[1413,1414,2,0],[1414,1415,2,0],[1415,1416,2,0],[1416,1417,2,0],[1417,1418,2,0],[1418,1419,2,0],[1419,1420,2,0],[1420,1421,2,0],[1421,1422,2,0],[1422,1423,2,0],[1423,94,2,0],[121,1424,2,0],[1424,1425,2,0],[1425,1426,2,0],[4,1427,0,1],[1427,1428,0,1],[1428,1429,0,1],[1429,1430,0,1],[1430,1431,0,1],[1431,1432,0,1],[1432,1433,0,1],[1433,1434,0,1],[1434,1435,0,1],[1435,1436,0,1],[1436,1437,0,1],[1437,1230,0,1],[19,1438,1,1],[1438,1439,1,1],[1439,1440,1,1],[1440,1441,1,1],[1441,1442,1,1],[1442,1443,1,1],[1443,1444,1,1],[1444,1445,1,1],[1445,1446,1,1],[1446,1447,1,1],[1447,1448,1,1],[1448,1449,1,1],[1449,1450,1,1],[1450,1451,1,1],[1451,1452,1,1],[1452,1453,1,1],[1453,1454,1,1],[1454,1455,1,1],[1455,1456,1,1],[1456,1457,1,1],[1457,1458,1,1],[1458,1459,1,1],[1459,1460,1,1],[1460,1461,1,1],[1461,503,1,1],[19,1462,0,1],[1462,240,0,1],[19,1463,2,0],[1463,1464,2,0],[1464,1465,2,0],[1465,1466,2,0],[1466,1467,2,0],[1467,1468,2,0],[1468,1469,2,0],[1469,1470,2,0],[1470,1471,2,0],[1471,1472,2,0],[1472,1473,2,0],[1473,1474,2,0],[1474,1475,2,0],[1475,1476,2,0],[1476,1477,2,0],[1477,1478,2,0],[1478,1479,2,0],[1479,1480,2,0],[1480,1481,2,0],[1481,1482,2,0],[1482,1483,2,0],[1483,52,2,0],[342,899,1,1],[899,898,1,1],[898,897,1,1],[897,896,1,1],[342,341,1,1],[341,308,1,1],[342,1484,2,0],[1484,1485,2,0],[1485,1486,2,0],[1486,1487,2,0],[1487,1488,2,0],[1488,1489,2,0],[1489,1490,2,0],[1490,1491,2,0],[1491,1492,2,0],[1492,1493,2,0],[1493,896,2,0],[1494,1495,1,1],[1495,1496,1,1],[1496,1497,1,1],[1497,1498,1,1],[1498,1499,1,1],[1499,1146,1,1],[1494,1500,1,1],[1500,1501,1,1],[1501,1502,1,1],[1502,1503,1,1],[1494,1504,0,1],[1504,1505,0,1],[1505,1506,0,1],[1506,357,0,1],[1494,1507,2,0],[1507,1508,2,0],[1508,1509,2,0],[1509,1510,2,0],[1510,1511,2,0],[1511,1512,2,0],[1512,1513,2,0],[1513,1514,2,0],[516,1515,1,0],[1515,1516,1,0],[1516,1517,1,0],[1517,1518,1,0],[1518,1519,1,0],[1519,1520,1,0],[1520,1521,1,0],[1521,1522,1,0],[1522,1523,1,0],[1523,1524,1,0],[1524,1525,1,0],[1525,1526,1,0],[1526,1527,1,0],[1527,971,1,0],[516,1528,1,0],[1528,1529,1,0],[1529,1530,1,0],[1530,1531,1,0],[1531,1532,1,0],[1532,1533,1,0],[1533,1534,1,0],[1534,1535,1,0],[1535,1536,1,0],[1536,1537,1,0],[1537,1538,1,0],[1538,544,1,0],[516,1539,1,0],[1539,1540,1,0],[1540,1541,1,0],[1541,1542,1,0],[1542,1543,1,0],[1543,1544,1,0],[1544,1545,1,0],[1545,1546,1,0],[1546,1547,1,0],[1547,1548,1,0],[1548,1549,1,0],[1549,1550,1,0],[1550,1551,1,0],[1551,1552,1,0],[1552,1553,1,0],[1553,1554,1,0],[1554,1555,1,0],[1555,561,1,0],[1556,1557,1,0],[1557,1558,1,0],[1558,1559,1,0],[1559,1560,1,0],[1560,1561,1,0],[1561,1562,1,0],[1562,1563,1,0],[1563,169,1,0],[561,1564,1,0],[1564,1565,1,0],[1565,1566,1,0],[1566,1567,1,0],[1567,1568,1,0],[1568,1569,1,0],[1569,1570,1,0],[1570,1571,1,0],[1571,1572,1,0],[1572,1573,1,0],[1573,1574,1,0],[1574,1575,1,0],[1575,1576,1,0],[1576,1577,1,0],[1577,971,1,0],[561,1578,1,0],[1578,1579,1,0],[1579,1580,1,0],[1580,1581,1,0],[1581,1582,1,0],[1582,603,1,0],[1503,1583,1,1],[1583,1584,1,1],[1584,1585,1,1],[1585,1586,1,1],[1586,1587,1,1],[1587,94,1,1],[1503,1588,2,0],[1588,1589,2,0],[1589,1590,2,0],[1590,1591,2,0],[1591,1592,2,0],[1592,357,2,0],[290,1593,1,0],[1593,1594,1,0],[1594,1595,1,0],[1595,1596,1,0],[1596,1597,1,0],[1597,1598,1,0],[1598,1599,1,0],[1599,186,1,0],[290,1600,1,0],[1600,1601,1,0],[1601,1602,1,0],[1602,1603,1,0],[1603,1604,1,0],[1604,1605,1,0],[1605,1606,1,0],[1606,1607,1,0],[1607,1608,1,0],[1608,1609,1,0],[1609,1610,1,0],[1610,1611,1,0],[1611,1612,1,0],[1612,1613,1,0],[1613,1614,1,0],[1614,1615,1,0],[1615,1616,1,0],[1616,1617,1,0],[1617,1618,1,0],[820,1619,0,0],[1619,1620,0,0],[1620,1621,0,0],[1621,1622,0,0],[1622,1623,0,0],[1623,1624,0,0],[1624,1625,0,0],[1625,1626,0,0],[1626,1627,0,0],[1627,1628,0,0],[1628,1629,0,0],[1629,1630,0,0],[1630,1631,0,0],[1631,1632,0,0],[1632,1633,0,0],[1633,1634,0,0],[1634,1635,0,0],[1635,1636,0,0],[1636,1637,0,0],[1637,1638,0,0],[1638,1639,0,0],[1639,978,0,0],[820,1640,1,0],[1640,1641,1,0],[1641,1642,1,0],[1642,1643,1,0],[1643,1644,1,0],[1644,1645,1,0],[1645,1646,1,0],[1646,1647,1,0],[1647,1648,1,0],[1648,1649,1,0],[1649,1650,1,0],[1650,1651,1,0],[1651,1652,1,0],[1652,1653,1,0],[1653,1654,1,0],[1654,1655,1,0],[1655,1656,1,0],[1656,1657,1,0],[1657,1658,1,0],[1658,1659,1,0],[1659,1660,1,0],[1660,1661,1,0],[1661,1662,1,0],[1662,1663,1,0],[1663,1104,1,0],[820,1664,1,0],[1664,1665,1,0],[1665,1666,1,0],[1666,1667,1,0],[1667,1668,1,0],[1668,1669,1,0],[1669,1670,1,0],[1670,1671,1,0],[1671,1672,1,0],[956,1673,0,0],[1673,1674,0,0],[1674,1675,0,0],[1675,1676,0,0],[1676,1677,0,0],[1677,1678,0,0],[1678,1679,0,0],[1679,1680,0,0],[1680,1681,0,0],[1681,1682,0,0],[1682,1683,0,0],[1683,1684,0,0],[1684,1685,0,0],[1685,1686,0,0],[1686,1687,0,0],[1687,532,0,0],[956,1688,0,0],[1688,1689,0,0],[1689,1690,0,0],[1690,1691,0,0],[1691,1692,0,0],[1692,1693,0,0],[1693,1694,0,0],[1694,1695,0,0],[1695,1696,0,0],[1696,1697,0,0],[1697,1698,0,0],[1698,1699,0,0],[1699,1700,0,0],[1700,1701,0,0],[1701,1104,0,0],[956,1702,1,0],[1702,1703,1,0],[1703,1704,1,0],[1704,1705,1,0],[1705,1706,1,0],[1706,1707,1,0],[1707,1708,1,0],[1708,1709,1,0],[1709,1710,1,0],[1710,1711,1,0],[1711,1712,1,0],[1712,1713,1,0],[1713,1714,1,0],[1714,1715,1,0],[1715,1716,1,0],[1716,1717,1,0],[1717,1718,1,0],[1718,1719,1,0],[1719,1720,1,0],[1720,1721,1,0],[1721,1722,1,0],[1722,1723,1,0],[1723,1724,1,0],[1724,1725,1,0],[1725,1726,1,0],[1726,1727,1,0],[1727,1728,1,0],[1728,1729,1,0],[1729,1730,1,0],[1730,1731,1,0],[1731,1732,1,0],[1732,1733,1,0],[1733,1734,1,0],[1734,1735,1,0],[1735,1736,1,0],[1736,1737,1,0],[1737,646,1,0],[971,1738,1,0],[1738,1739,1,0],[1739,1740,1,0],[1740,1741,1,0],[1741,1742,1,0],[1742,1743,1,0],[1743,1744,1,0],[1744,1745,1,0],[1745,1746,1,0],[1746,1747,1,0],[1747,1748,1,0],[1748,1749,1,0],[1749,1750,1,0],[1750,1751,1,0],[1751,1752,1,0],[1752,1753,1,0],[1753,1754,1,0],[1754,1672,1,0],[1514,1755,1,1],[1755,1756,1,1],[1756,1757,1,1],[1757,1758,1,1],[1758,1759,1,1],[1759,1760,1,1],[1760,1761,1,1],[1761,1762,1,1],[1762,1763,1,1],[1763,1764,1,1],[1764,1765,1,1],[1765,1766,1,1],[1766,1767,1,1],[1767,1768,1,1],[1768,1769,1,1],[1769,1265,1,1],[1514,1770,1,0],[1770,1771,1,0],[1771,1772,1,0],[1772,1773,1,0],[1773,1774,1,0],[1774,1146,1,0],[114,1775,1,1],[1775,1776,1,1],[1776,1777,1,1],[1777,1778,1,1],[1778,1779,1,1],[1779,1780,1,1],[1780,1781,1,1],[1781,1782,1,1],[1782,108,1,1],[1159,1171,2,0],[1171,1172,2,0],[1172,1173,2,0],[1173,1174,2,0],[1174,1175,2,0],[1175,1176,2,0],[1176,1177,2,0],[1177,381,2,0],[381,1783,2,0],[1783,1784,2,0],[1784,1785,2,0],[1785,743,2,0],[735,1786,1,0],[1786,1787,1,0],[1787,1788,1,0],[1788,1789,1,0],[1789,1790,1,0],[1790,1791,1,0],[1791,1792,1,0],[1792,1793,1,0],[1793,1794,1,0],[1794,1795,1,0],[1795,1796,1,0],[1796,1797,1,0],[1797,1370,1,0],[925,1798,1,0],[1798,1799,1,0],[1799,1800,1,0],[1800,1801,1,0],[1801,1802,1,0],[1802,1803,1,0],[1803,1804,1,0],[1804,1805,1,0],[1805,1806,1,0],[1806,1807,1,0],[1807,1808,1,0],[1808,1809,1,0],[1809,1377,1,0],[532,1810,1,0],[1810,1811,1,0],[1811,1812,1,0],[1812,1813,1,0],[1813,1814,1,0],[1814,1815,1,0],[1815,1816,1,0],[1816,1817,1,0],[1817,1818,1,0],[1818,1819,1,0],[1819,1820,1,0],[1820,1821,1,0],[1821,1822,1,0],[1822,1823,1,0],[1823,1824,1,0],[1824,1825,1,0],[1825,1826,1,0],[1826,1827,1,0],[1827,1828,1,0],[1828,1829,1,0],[1829,1830,1,0],[1830,1831,1,0],[1831,1832,1,0],[1832,1833,1,0],[1833,1834,1,0],[1834,1835,1,0],[1835,1836,1,0],[1836,1837,1,0],[1837,1838,1,0],[1838,1839,1,0],[1839,1840,1,0],[1840,1841,1,0],[1841,1842,1,0],[1842,1843,1,0],[1843,1844,1,0],[1844,1845,1,0],[1845,1846,1,0],[1846,1847,1,0],[1847,1848,1,0],[1848,169,1,0],[978,1849,1,0],[1849,1850,1,0],[1850,1851,1,0],[1851,1852,1,0],[1852,1853,1,0],[1853,1854,1,0],[1854,1855,1,0],[1855,1856,1,0],[1856,1857,1,0],[1857,1858,1,0],[1858,1859,1,0],[1859,1860,1,0],[1860,1861,1,0],[1861,1862,1,0],[1862,1863,1,0],[1863,1864,1,0],[1864,1865,1,0],[1865,1866,1,0],[1866,1867,1,0],[1867,1868,1,0],[1868,1869,1,0],[1869,1104,1,0],[61,1870,1,1],[1870,80,1,1],[131,1871,1,0],[1871,1872,1,0],[1872,1873,1,0],[1873,1874,1,0],[1874,1875,1,0],[1875,1876,1,0],[1876,1877,1,0],[1877,1878,1,0],[1878,544,1,0],[131,1879,0,0],[1879,1880,0,0],[1880,1881,0,0],[1881,1882,0,0],[1882,1883,0,0],[1883,1884,0,0],[1884,1885,0,0],[1885,1886,0,0],[1886,1887,0,0],[1887,1888,0,0],[1888,1889,0,0],[1889,1890,0,0],[1890,1891,0,0],[1891,1892,0,0],[1892,1893,0,0],[1893,1894,0,0],[1894,1895,0,0],[1895,1896,0,0],[1896,1897,0,0],[1897,1898,0,0],[1898,1899,0,0],[1899,1900,0,0],[1900,1901,0,0],[1901,1902,0,0],[1902,1903,0,0],[1903,1904,0,0],[1904,1905,0,0],[1905,1906,0,0],[1906,1907,0,0],[1907,1908,0,0],[1908,1909,0,0],[1909,1910,0,0],[1910,1911,0,0],[1911,1912,0,0],[1912,1913,0,0],[1913,1914,0,0],[1914,1915,0,0],[1915,169,0,0],[1916,1917,1,0],[1917,1918,1,0],[1918,1919,1,0],[1919,1920,1,0],[1920,1921,1,0],[1921,1922,1,0],[1922,1923,1,0],[1923,1924,1,0],[1924,1925,1,0],[1925,1926,1,0],[1926,1927,1,0],[1927,1928,1,0],[1928,1929,1,0],[1929,1930,1,0],[1930,1126,1,0],[80,1931,1,1],[1931,1932,1,1],[1932,1933,1,1],[1933,1934,1,1],[1934,1935,1,1],[1935,108,1,1],[210,1936,0,1],[1936,1937,0,1],[1937,1938,0,1],[1938,1939,0,1],[1939,1940,0,1],[1940,1941,0,1],[1941,1942,0,1],[1942,1943,0,1],[1943,108,0,1],[210,1944,2,0],[1944,1945,2,0],[1945,1946,2,0],[1946,1947,2,0],[1947,1948,2,0],[1948,1949,2,0],[1949,1950,2,0],[1950,1951,2,0],[1951,1952,2,0],[1952,1953,2,0],[1953,1954,2,0],[1954,987,2,0],[1265,1955,1,0],[1955,1956,1,0],[1956,1957,1,0],[1957,1958,1,0],[1958,1959,1,0],[1959,1960,1,0],[1960,1961,1,0],[1961,1962,1,0],[1962,1963,1,0],[1963,1964,1,0],[1964,1965,1,0],[1965,1966,1,0],[1966,1967,1,0],[1967,1377,1,0],[919,1968,1,1],[1968,483,1,1],[743,1969,0,1],[1969,1970,0,1],[1970,1377,0,1],[169,1971,1,0],[1971,1972,1,0],[1972,1973,1,0],[1973,1974,1,0],[1974,1975,1,0],[1975,632,1,0],[169,1976,0,0],[1976,1977,0,0],[1977,1978,0,0],[1978,1979,0,0],[1979,1980,0,0],[1980,1981,0,0],[1981,1982,0,0],[1982,1983,0,0],[1983,1984,0,0],[1984,1985,0,0],[1985,1986,0,0],[1986,1987,0,0],[1987,1988,0,0],[1988,1989,0,0],[1989,1990,0,0],[1990,1991,0,0],[1991,1992,0,0],[1992,1993,0,0],[1993,1994,0,0],[1994,1995,0,0],[1995,1996,0,0],[1996,1997,0,0],[1997,1998,0,0],[1998,1999,0,0],[1999,2000,0,0],[2000,2001,0,0],[2001,2002,0,0],[2002,2003,0,0],[2003,2004,0,0],[2004,2005,0,0],[2005,2006,0,0],[2006,2007,0,0],[2007,2008,0,0],[2008,2009,0,0],[2009,1126,0,0],[646,2010,1,0],[2010,2011,1,0],[2011,2012,1,0],[2012,2013,1,0],[2013,2014,1,0],[2014,2015,1,0],[2015,2016,1,0],[2016,2017,1,0],[2017,2018,1,0],[2018,2019,1,0],[2019,2020,1,0],[2020,2021,1,0],[2021,2022,1,0],[2022,2023,1,0],[2023,2024,1,0],[2024,2025,1,0],[2025,2026,1,0],[2026,2027,1,0],[2027,2028,1,0],[2028,2029,1,0],[2029,2030,1,0],[2030,2031,1,0],[2031,206,1,0],[2,2032,2,0],[2032,2033,2,0],[2033,2034,2,0],[2034,2035,2,0],[2035,2036,2,0],[2036,2037,2,0],[2037,2038,2,0],[2038,2039,2,0],[2039,2040,2,0],[2040,2041,2,0],[2041,2042,2,0],[2042,2043,2,0],[2043,2044,2,0],[2044,2045,2,0],[2045,2046,2,0],[2046,2047,2,0],[2047,1230,2,0],[503,2048,1,1],[2048,2049,1,1],[2049,2050,1,1],[2050,2051,1,1],[2051,2052,1,1],[2052,987,1,1],[632,2053,1,0],[2053,2054,1,0],[2054,2055,1,0],[2055,2056,1,0],[2056,2057,1,0],[2057,2058,1,0],[2058,2059,1,0],[2059,2060,1,0],[2060,2061,1,0],[2061,1140,1,0],[603,2062,1,0],[2062,2063,1,0],[2063,2064,1,0],[2064,2065,1,0],[2065,2066,1,0],[2066,2067,1,0],[2067,2068,1,0],[2068,2069,1,0],[2069,2070,1,0],[2070,2071,1,0],[2071,2072,1,0],[2072,2073,1,0],[2073,2074,1,0],[2074,2075,1,0],[2075,2076,1,0],[2076,2077,1,0],[2077,2078,1,0],[2078,2079,1,0],[2079,1672,1,0],[1317,2080,1,0],[2080,2081,1,0],[2081,2082,1,0],[2082,2083,1,0],[2083,2084,1,0],[2084,2085,1,0],[2085,2086,1,0],[2086,2087,1,0],[2087,206,1,0]],"land":[[[390.0,2550.0],[390.8,2561.6],[393.4,2572.6],[397.6,2582.8],[403.6,2592.4],[411.2,2601.2],[424.5,2614.5],[433.7,2625.1],[440.8,2636.6],[445.9,2648.9],[449.0,2662.0],[450.0,2676.0],[450.0,2700.0],[451.2,2710.8],[454.8,2719.2],[460.8,2725.2],[469.2,2728.8],[480.0,2730.0],[480.0,2730.0],[491.6,2729.2],[502.6,2726.6],[512.8,2722.4],[522.4,2716.4],[531.2,2708.8],[589.4,2650.6],[593.2,2646.2],[596.2,2641.4],[598.3,2636.3],[599.6,2630.8],[600.0,2625.0],[600.0,2625.0],[600.4,2619.2],[601.7,2613.7],[603.8,2608.6],[606.8,2603.8],[610.6,2599.4],[615.0,2595.0],[621.2,2589.6],[628.0,2585.4],[635.2,2582.4],[643.0,2580.6],[651.2,2580.0],[668.8,2580.0],[677.0,2580.6],[684.8,2582.4],[692.0,2585.4],[698.8,2589.6],[705.0,2595.0],[705.0,2595.0],[710.4,2601.2],[714.6,2608.0],[717.6,2615.2],[719.4,2623.0],[720.0,2631.2],[720.0,2655.0],[719.4,2660.4],[717.6,2664.6],[714.6,2667.6],[710.4,2669.4],[705.0,2670.0],[705.0,2670.0],[699.6,2670.6],[695.4,2672.4],[692.4,2675.4],[690.6,2679.6],[690.0,2685.0],[690.0,2888.8],[690.6,2897.0],[692.4,2904.8],[695.4,2912.0],[699.6,2918.8],[705.0,2925.0],[709.4,2929.4],[713.2,2933.8],[716.2,2938.6],[718.3,2943.7],[719.6,2949.2],[720.0,2955.0],[720.0,2955.0],[720.4,2960.8],[721.7,2966.3],[723.8,2971.4],[726.8,2976.2],[730.6,2980.6],[735.0,2985.0],[741.2,2990.4],[748.0,2994.6],[755.2,2997.6],[763.0,2999.4],[771.2,3000.0],[780.0,3000.0],[790.8,3001.2],[799.2,3004.8],[805.2,3010.8],[808.8,3019.2],[810.0,3030.0],[810.0,3068.8],[810.6,3077.0],[812.4,3084.8],[815.4,3092.0],[819.6,3098.8],[825.0,3105.0],[829.4,3109.4],[833.8,3113.2],[838.6,3116.2],[843.7,3118.3],[849.2,3119.6],[855.0,3120.0],[855.0,3120.0],[860.8,3120.4],[866.3,3121.7],[871.4,3123.8],[876.2,3126.8],[880.6,3130.6],[889.4,3139.4],[893.8,3143.2],[898.6,3146.2],[903.7,3148.3],[909.2,3149.6],[915.0,3150.0],[915.0,3150.0],[920.8,3149.6],[926.3,3148.3],[931.4,3146.2],[936.2,3143.2],[940.6,3139.4],[945.0,3135.0],[950.4,3128.8],[954.6,3122.0],[957.6,3114.8],[959.4,3107.0],[960.0,3098.8],[960.0,3015.0],[960.6,3009.6],[962.4,3005.4],[965.4,3002.4],[969.6,3000.6],[975.0,3000.0],[975.0,3000.0],[980.4,2999.4],[984.6,2997.6],[987.6,2994.6],[989.4,2990.4],[990.0,2985.0],[990.0,2985.0],[990.6,2979.6],[992.4,2975.4],[995.4,2972.4],[999.6,2970.6],[1005.0,2970.0],[1058.8,2970.0],[1065.8,2969.4],[1070.0,2967.6],[1071.2,2964.6],[1069.6,2960.4],[1065.0,2955.0],[1065.0,2955.0],[1059.6,2948.8],[1055.4,2942.0],[1052.4,2934.8],[1050.6,2927.0],[1050.0,2918.8],[1050.0,2856.0],[1051.0,2842.0],[1054.1,2828.9],[1059.2,2816.6],[1066.3,2805.1],[1075.5,2794.5],[1088.8,2781.2],[1097.6,2773.6],[1107.2,2767.6],[1117.4,2763.4],[1128.4,2760.8],[1140.0,2760.0],[1140.0,2760.0],[1150.8,2761.2],[1159.2,2764.8],[1165.2,2770.8],[1168.8,2779.2],[1170.0,2790.0],[1170.0,2858.8],[1169.4,2867.0],[1167.6,2874.8],[1164.6,2882.0],[1160.4,2888.8],[1155.0,2895.0],[1155.0,2895.0],[1149.6,2901.2],[1145.4,2908.0],[1142.4,2915.2],[1140.6,2923.0],[1140.0,2931.2],[1140.0,2940.0],[1140.8,2951.6],[1143.4,2962.6],[1147.6,2972.8],[1153.6,2982.4],[1161.2,2991.2],[1189.4,3019.4],[1193.8,3023.2],[1198.6,3026.2],[1203.7,3028.3],[1209.2,3029.6],[1215.0,3030.0],[1215.0,3030.0],[1220.8,3030.4],[1226.3,3031.7],[1231.4,3033.8],[1236.2,3036.8],[1240.6,3040.6],[1245.0,3045.0],[1250.4,3051.2],[1254.6,3058.0],[1257.6,3065.2],[1259.4,3073.0],[1260.0,3081.2],[1260.0,3114.0],[1261.0,3128.0],[1264.1,3141.1],[1269.2,3153.4],[1276.3,3164.9],[1285.5,3175.5],[1335.0,3225.0],[1339.8,3231.0],[1342.2,3237.0],[1342.2,3243.0],[1339.8,3249.0],[1335.0,3255.0],[1335.0,3255.0],[1329.6,3261.2],[1325.4,3268.0],[1322.4,3275.2],[1320.6,3283.0],[1320.0,3291.2],[1320.0,3338.8],[1320.6,3347.0],[1322.4,3354.8],[1325.4,3362.0],[1329.6,3368.8],[1335.0,3375.0],[1335.0,3375.0],[1340.4,3381.2],[1344.6,3388.0],[1347.6,3395.2],[1349.4,3403.0],[1350.0,3411.2],[1350.0,3458.8],[1350.6,3467.0],[1352.4,3474.8],[1355.4,3482.0],[1359.6,3488.8],[1365.0,3495.0],[1369.4,3499.4],[1373.8,3503.2],[1378.6,3506.2],[1383.7,3508.3],[1389.2,3509.6],[1395.0,3510.0],[1395.0,3510.0],[1400.4,3510.6],[1404.6,3512.4],[1407.6,3515.4],[1409.4,3519.6],[1410.0,3525.0],[1410.0,3984.0],[1411.0,3998.0],[1414.1,4011.1],[1419.2,4023.4],[1426.3,4034.9],[1435.5,4045.5],[1444.5,4054.5],[1455.1,4063.7],[1466.6,4070.8],[1478.9,4075.9],[1492.0,4079.0],[1506.0,4080.0],[1734.0,4080.0],[1747.0,4078.6],[1757.0,4074.2],[1764.2,4067.0],[1768.6,4057.0],[1770.0,4044.0],[1770.0,4026.0],[1769.0,4012.0],[1765.9,3998.9],[1760.8,3986.6],[1753.7,3975.1],[1744.5,3964.5],[1690.6,3910.6],[1686.2,3906.8],[1681.4,3903.8],[1676.3,3901.7],[1670.8,3900.4],[1665.0,3900.0],[1665.0,3900.0],[1660.0,3899.6],[1657.1,3898.3],[1656.2,3896.2],[1657.4,3893.2],[1660.6,3889.4],[1665.0,3885.0],[1670.4,3878.8],[1674.6,3872.0],[1677.6,3864.8],[1679.4,3857.0],[1680.0,3848.8],[1680.0,3741.2],[1679.4,3733.0],[1677.6,3725.2],[1674.6,3718.0],[1670.4,3711.2],[1665.0,3705.0],[1665.0,3705.0],[1659.6,3698.8],[1655.4,3692.0],[1652.4,3684.8],[1650.6,3677.0],[1650.0,3668.8],[1650.0,3660.0],[1650.8,3648.4],[1653.4,3637.4],[1657.6,3627.2],[1663.6,3617.6],[1671.2,3608.8],[1684.5,3595.5],[1693.7,3584.9],[1700.8,3573.4],[1705.9,3561.1],[1709.0,3548.0],[1710.0,3534.0],[1710.0,3471.2],[1709.4,3463.0],[1707.6,3455.2],[1704.6,3448.0],[1700.4,3441.2],[1695.0,3435.0],[1690.6,3430.6],[1686.8,3426.2],[1683.8,3421.4],[1681.7,3416.3],[1680.4,3410.8],[1680.0,3405.0],[1680.0,3405.0],[1680.4,3399.2],[1681.7,3393.7],[1683.8,3388.6],[1686.8,3383.8],[1690.6,3379.4],[1714.5,3355.5],[1723.7,3344.9],[1730.8,3333.4],[1735.9,3321.1],[1739.0,3308.0],[1740.0,3294.0],[1740.0,3231.2],[1739.4,3223.0],[1737.6,3215.2],[1734.6,3208.0],[1730.4,3201.2],[1725.0,3195.0],[1725.0,3195.0],[1719.6,3188.8],[1715.4,3182.0],[1712.4,3174.8],[1710.6,3167.0],[1710.0,3158.8],[1710.0,3150.0],[1709.2,3138.4],[1706.6,3127.4],[1702.4,3117.2],[1696.4,3107.6],[1688.8,3098.8],[1570.6,2980.6],[1566.8,2976.2],[1563.8,2971.4],[1561.7,2966.3],[1560.4,2960.8],[1560.0,2955.0],[1560.0,2955.0],[1560.4,2949.2],[1561.7,2943.7],[1563.8,2938.6],[1566.8,2933.8],[1570.6,2929.4],[1575.0,2925.0],[1581.2,2919.6],[1588.0,2915.4],[1595.2,2912.4],[1603.0,2910.6],[1611.2,2910.0],[1658.8,2910.0],[1667.0,2909.4],[1674.8,2907.6],[1682.0,2904.6],[1688.8,2900.4],[1695.0,2895.0],[1695.0,2895.0],[1700.4,2888.8],[1704.6,2882.0],[1707.6,2874.8],[1709.4,2867.0],[1710.0,2858.8],[1710.0,2835.0],[1710.6,2829.6],[1712.4,2825.4],[1715.4,2822.4],[1719.6,2820.6],[1725.0,2820.0],[1725.0,2820.0],[1730.8,2820.4],[1736.3,2821.7],[1741.4,2823.8],[1746.2,2826.8],[1750.6,2830.6],[1778.8,2858.8],[1787.6,2866.4],[1797.2,2872.4],[1807.4,2876.6],[1818.4,2879.2],[1830.0,2880.0],[1838.8,2880.0],[1847.0,2880.6],[1854.8,2882.4],[1862.0,2885.4],[1868.8,2889.6],[1875.0,2895.0],[1879.4,2899.4],[1883.2,2903.8],[1886.2,2908.6],[1888.3,2913.7],[1889.6,2919.2],[1890.0,2925.0],[1890.0,2925.0],[1890.4,2930.0],[1891.7,2932.9],[1893.8,2933.8],[1896.8,2932.6],[1900.6,2929.4],[1905.0,2925.0],[1911.2,2919.6],[1918.0,2915.4],[1925.2,2912.4],[1933.0,2910.6],[1941.2,2910.0],[1950.0,2910.0],[1961.6,2910.8],[1972.6,2913.4],[1982.8,2917.6],[1992.4,2923.6],[2001.2,2931.2],[2044.5,2974.5],[2053.7,2985.1],[2060.8,2996.6],[2065.9,3008.9],[2069.0,3022.0],[2070.0,3036.0],[2070.0,3054.0],[2071.0,3065.9],[2074.1,3073.0],[2079.2,3075.1],[2086.3,3072.3],[2095.5,3064.5],[2119.4,3040.6],[2123.8,3036.8],[2128.6,3033.8],[2133.7,3031.7],[2139.2,3030.4],[2145.0,3030.0],[2145.0,3030.0],[2150.8,3029.6],[2156.3,3028.3],[2161.4,3026.2],[2166.2,3023.2],[2170.6,3019.4],[2179.4,3010.6],[2183.2,3006.2],[2186.2,3001.4],[2188.3,2996.3],[2189.6,2990.8],[2190.0,2985.0],[2190.0,2985.0],[2189.6,2979.2],[2188.3,2973.7],[2186.2,2968.6],[2183.2,2963.8],[2179.4,2959.4],[2140.6,2920.6],[2136.8,2916.2],[2133.8,2911.4],[2131.7,2906.3],[2130.4,2900.8],[2130.0,2895.0],[2130.0,2895.0],[2130.4,2889.2],[2131.7,2883.7],[2133.8,2878.6],[2136.8,2873.8],[2140.6,2869.4],[2168.8,2841.2],[2176.4,2832.4],[2182.4,2822.8],[2186.6,2812.6],[2189.2,2801.6],[2190.0,2790.0],[2190.0,2781.2],[2189.4,2773.0],[2187.6,2765.2],[2184.6,2758.0],[2180.4,2751.2],[2175.0,2745.0],[2175.0,2745.0],[2169.6,2738.8],[2165.4,2732.0],[2162.4,2724.8],[2160.6,2717.0],[2160.0,2708.8],[2160.0,2676.0],[2159.0,2662.0],[2155.9,2648.9],[2150.8,2636.6],[2143.7,2625.1],[2134.5,2614.5],[2125.5,2605.5],[2116.3,2594.9],[2109.2,2583.4],[2104.1,2571.1],[2101.0,2558.0],[2100.0,2544.0],[2100.0,2520.0],[2098.8,2509.2],[2095.2,2500.8],[2089.2,2494.8],[2080.8,2491.2],[2070.0,2490.0],[2070.0,2490.0],[2058.4,2489.2],[2047.4,2486.6],[2037.2,2482.4],[2027.6,2476.4],[2018.8,2468.8],[1990.6,2440.6],[1986.8,2436.2],[1983.8,2431.4],[1981.7,2426.3],[1980.4,2420.8],[1980.0,2415.0],[1980.0,2415.0],[1979.4,2409.6],[1977.6,2405.4],[1974.6,2402.4],[1970.4,2400.6],[1965.0,2400.0],[1965.0,2400.0],[1959.2,2399.6],[1953.7,2398.3],[1948.6,2396.2],[1943.8,2393.2],[1939.4,2389.4],[1930.6,2380.6],[1926.8,2376.2],[1923.8,2371.4],[1921.7,2366.3],[1920.4,2360.8],[1920.0,2355.0],[1920.0,2355.0],[1919.4,2349.6],[1917.6,2345.4],[1914.6,2342.4],[1910.4,2340.6],[1905.0,2340.0],[1905.0,2340.0],[1899.2,2339.6],[1893.7,2338.3],[1888.6,2336.2],[1883.8,2333.2],[1879.4,2329.4],[1870.6,2320.6],[1866.8,2316.2],[1863.8,2311.4],[1861.7,2306.3],[1860.4,2300.8],[1860.0,2295.0],[1860.0,2295.0],[1860.4,2289.2],[1861.7,2283.7],[1863.8,2278.6],[1866.8,2273.8],[1870.6,2269.4],[1875.0,2265.0],[1881.2,2259.6],[1888.0,2255.4],[1895.2,2252.4],[1903.0,2250.6],[1911.2,2250.0],[1928.8,2250.0],[1935.8,2249.4],[1940.0,2247.6],[1941.2,2244.6],[1939.6,2240.4],[1935.0,2235.0],[1930.6,2230.6],[1926.8,2226.2],[1923.8,2221.4],[1921.7,2216.3],[1920.4,2210.8],[1920.0,2205.0],[1920.0,2205.0],[1920.4,2199.2],[1921.7,2193.7],[1923.8,2188.6],[1926.8,2183.8],[1930.6,2179.4],[1935.0,2175.0],[1941.2,2169.6],[1948.0,2165.4],[1955.2,2162.4],[1963.0,2160.6],[1971.2,2160.0],[2025.0,2160.0],[2030.4,2160.6],[2034.6,2162.4],[2037.6,2165.4],[2039.4,2169.6],[2040.0,2175.0],[2040.0,2175.0],[2040.4,2180.0],[2041.7,2182.9],[2043.8,2183.8],[2046.8,2182.6],[2050.6,2179.4],[2059.4,2170.6],[2063.8,2166.8],[2068.6,2163.8],[2073.7,2161.7],[2079.2,2160.4],[2085.0,2160.0],[2085.0,2160.0],[2090.8,2160.4],[2096.3,2161.7],[2101.4,2163.8],[2106.2,2166.8],[2110.6,2170.6],[2115.0,2175.0],[2121.0,2179.8],[2127.0,2182.2],[2133.0,2182.2],[2139.0,2179.8],[2145.0,2175.0],[2179.4,2140.6],[2183.8,2136.8],[2188.6,2133.8],[2193.7,2131.7],[2199.2,2130.4],[2205.0,2130.0],[2205.0,2130.0],[2210.8,2129.6],[2216.3,2128.3],[2221.4,2126.2],[2226.2,2123.2],[2230.6,2119.4],[2235.0,2115.0],[2240.4,2108.8],[2244.6,2102.0],[2247.6,2094.8],[2249.4,2087.0],[2250.0,2078.8],[2250.0,2070.0],[2249.2,2058.4],[2246.6,2047.4],[2242.4,2037.2],[2236.4,2027.6],[2228.8,2018.8],[2170.6,1960.6],[2166.2,1956.8],[2161.4,1953.8],[2156.3,1951.7],[2150.8,1950.4],[2145.0,1950.0],[2145.0,1950.0],[2139.6,1949.4],[2135.4,1947.6],[2132.4,1944.6],[2130.6,1940.4],[2130.0,1935.0],[2130.0,1821.2],[2129.4,1813.0],[2127.6,1805.2],[2124.6,1798.0],[2120.4,1791.2],[2115.0,1785.0],[2115.0,1785.0],[2108.8,1779.6],[2102.0,1775.4],[2094.8,1772.4],[2087.0,1770.6],[2078.8,1770.0],[2031.2,1770.0],[2024.2,1769.4],[2020.0,1767.6],[2018.8,1764.6],[2020.4,1760.4],[2025.0,1755.0],[2025.0,1755.0],[2029.8,1749.0],[2032.2,1743.0],[2032.2,1737.0],[2029.8,1731.0],[2025.0,1725.0],[2025.0,1725.0],[2019.6,1718.8],[2015.4,1712.0],[2012.4,1704.8],[2010.6,1697.0],[2010.0,1688.8],[2010.0,1626.0],[2009.0,1612.0],[2005.9,1598.9],[2000.8,1586.6],[1993.7,1575.1],[1984.5,1564.5],[1930.6,1510.6],[1926.8,1506.2],[1923.8,1501.4],[1921.7,1496.3],[1920.4,1490.8],[1920.0,1485.0],[1920.0,1485.0],[1920.4,1479.2],[1921.7,1473.7],[1923.8,1468.6],[1926.8,1463.8],[1930.6,1459.4],[1958.8,1431.2],[1967.6,1423.6],[1977.2,1417.6],[1987.4,1413.4],[1998.4,1410.8],[2010.0,1410.0],[2018.8,1410.0],[2027.0,1409.4],[2034.8,1407.6],[2042.0,1404.6],[2048.8,1400.4],[2055.0,1395.0],[2059.4,1390.6],[2063.8,1386.8],[2068.6,1383.8],[2073.7,1381.7],[2079.2,1380.4],[2085.0,1380.0],[2085.0,1380.0],[2090.4,1379.4],[2094.6,1377.6],[2097.6,1374.6],[2099.4,1370.4],[2100.0,1365.0],[2100.0,1341.2],[2099.4,1333.0],[2097.6,1325.2],[2094.6,1318.0],[2090.4,1311.2],[2085.0,1305.0],[2080.6,1300.6],[2076.8,1296.2],[2073.8,1291.4],[2071.7,1286.3],[2070.4,1280.8],[2070.0,1275.0],[2070.0,1275.0],[2070.4,1269.2],[2071.7,1263.7],[2073.8,1258.6],[2076.8,1253.8],[2080.6,1249.4],[2104.5,1225.5],[2113.7,1214.9],[2120.8,1203.4],[2125.9,1191.1],[2129.0,1178.0],[2130.0,1164.0],[2130.0,1101.2],[2129.4,1094.2],[2127.6,1090.0],[2124.6,1088.8],[2120.4,1090.4],[2115.0,1095.0],[2115.0,1095.0],[2108.8,1100.4],[2102.0,1104.6],[2094.8,1107.6],[2087.0,1109.4],[2078.8,1110.0],[2031.2,1110.0],[2023.0,1109.4],[2015.2,1107.6],[2008.0,1104.6],[2001.2,1100.4],[1995.0,1095.0],[1995.0,1095.0],[1988.8,1089.6],[1982.0,1085.4],[1974.8,1082.4],[1967.0,1080.6],[1958.8,1080.0],[1941.2,1080.0],[1933.0,1080.6],[1925.2,1082.4],[1918.0,1085.4],[1911.2,1089.6],[1905.0,1095.0],[1905.0,1095.0],[1899.6,1101.2],[1895.4,1108.0],[1892.4,1115.2],[1890.6,1123.0],[1890.0,1131.2],[1890.0,1155.0],[1889.4,1160.4],[1887.6,1164.6],[1884.6,1167.6],[1880.4,1169.4],[1875.0,1170.0],[1875.0,1170.0],[1869.2,1169.6],[1863.7,1168.3],[1858.6,1166.2],[1853.8,1163.2],[1849.4,1159.4],[1845.0,1155.0],[1839.6,1148.8],[1835.4,1142.0],[1832.4,1134.8],[1830.6,1127.0],[1830.0,1118.8],[1830.0,1095.0],[1829.4,1089.6],[1827.6,1085.4],[1824.6,1082.4],[1820.4,1080.6],[1815.0,1080.0],[1815.0,1080.0],[1809.2,1080.4],[1803.7,1081.7],[1798.6,1083.8],[1793.8,1086.8],[1789.4,1090.6],[1780.6,1099.4],[1776.2,1103.2],[1771.4,1106.2],[1766.3,1108.3],[1760.8,1109.6],[1755.0,1110.0],[1755.0,1110.0],[1749.6,1110.6],[1745.4,1112.4],[1742.4,1115.4],[1740.6,1119.6],[1740.0,1125.0],[1740.0,1125.0],[1739.4,1130.4],[1737.6,1134.6],[1734.6,1137.6],[1730.4,1139.4],[1725.0,1140.0],[1725.0,1140.0],[1719.2,1140.4],[1713.7,1141.7],[1708.6,1143.8],[1703.8,1146.8],[1699.4,1150.6],[1695.0,1155.0],[1690.2,1161.0],[1687.8,1167.0],[1687.8,1173.0],[1690.2,1179.0],[1695.0,1185.0],[1699.4,1189.4],[1703.2,1193.8],[1706.2,1198.6],[1708.3,1203.7],[1709.6,1209.2],[1710.0,1215.0],[1710.0,1215.0],[1709.6,1220.8],[1708.3,1226.3],[1706.2,1231.4],[1703.2,1236.2],[1699.4,1240.6],[1690.6,1249.4],[1686.8,1253.8],[1683.8,1258.6],[1681.7,1263.7],[1680.4,1269.2],[1680.0,1275.0],[1680.0,1275.0],[1679.4,1280.4],[1677.6,1284.6],[1674.6,1287.6],[1670.4,1289.4],[1665.0,1290.0],[1641.2,1290.0],[1633.0,1290.6],[1625.2,1292.4],[1618.0,1295.4],[1611.2,1299.6],[1605.0,1305.0],[1600.6,1309.4],[1596.8,1313.8],[1593.8,1318.6],[1591.7,1323.7],[1590.4,1329.2],[1590.0,1335.0],[1590.0,1335.0],[1589.6,1340.0],[1588.3,1342.9],[1586.2,1343.8],[1583.2,1342.6],[1579.4,1339.4],[1551.2,1311.2],[1542.4,1303.6],[1532.8,1297.6],[1522.6,1293.4],[1511.6,1290.8],[1500.0,1290.0],[1491.2,1290.0],[1483.0,1290.6],[1475.2,1292.4],[1468.0,1295.4],[1461.2,1299.6],[1455.0,1305.0],[1450.6,1309.4],[1446.8,1313.8],[1443.8,1318.6],[1441.7,1323.7],[1440.4,1329.2],[1440.0,1335.0],[1440.0,1335.0],[1439.6,1340.0],[1438.3,1342.9],[1436.2,1343.8],[1433.2,1342.6],[1429.4,1339.4],[1420.6,1330.6],[1416.2,1326.8],[1411.4,1323.8],[1406.3,1321.7],[1400.8,1320.4],[1395.0,1320.0],[1395.0,1320.0],[1389.2,1320.4],[1383.7,1321.7],[1378.6,1323.8],[1373.8,1326.8],[1369.4,1330.6],[1330.6,1369.4],[1326.2,1373.2],[1321.4,1376.2],[1316.3,1378.3],[1310.8,1379.6],[1305.0,1380.0],[1305.0,1380.0],[1299.2,1380.4],[1293.7,1381.7],[1288.6,1383.8],[1283.8,1386.8],[1279.4,1390.6],[1270.6,1399.4],[1266.2,1403.2],[1261.4,1406.2],[1256.3,1408.3],[1250.8,1409.6],[1245.0,1410.0],[1245.0,1410.0],[1239.2,1410.4],[1233.7,1411.7],[1228.6,1413.8],[1223.8,1416.8],[1219.4,1420.6],[1210.6,1429.4],[1206.2,1433.2],[1201.4,1436.2],[1196.3,1438.3],[1190.8,1439.6],[1185.0,1440.0],[1185.0,1440.0],[1179.2,1439.6],[1173.7,1438.3],[1168.6,1436.2],[1163.8,1433.2],[1159.4,1429.4],[1150.6,1420.6],[1146.2,1416.8],[1141.4,1413.8],[1136.3,1411.7],[1130.8,1410.4],[1125.0,1410.0],[1125.0,1410.0],[1119.2,1410.4],[1113.7,1411.7],[1108.6,1413.8],[1103.8,1416.8],[1099.4,1420.6],[1095.0,1425.0],[1089.0,1429.8],[1083.0,1432.2],[1077.0,1432.2],[1071.0,1429.8],[1065.0,1425.0],[1060.6,1420.6],[1056.2,1416.8],[1051.4,1413.8],[1046.3,1411.7],[1040.8,1410.4],[1035.0,1410.0],[1035.0,1410.0],[1029.2,1410.4],[1023.7,1411.7],[1018.6,1413.8],[1013.8,1416.8],[1009.4,1420.6],[1005.0,1425.0],[998.8,1430.4],[992.0,1434.6],[984.8,1437.6],[977.0,1439.4],[968.8,1440.0],[876.0,1440.0],[862.0,1441.0],[848.9,1444.1],[836.6,1449.2],[825.1,1456.3],[814.5,1465.5],[790.6,1489.4],[786.8,1493.8],[783.8,1498.6],[781.7,1503.7],[780.4,1509.2],[780.0,1515.0],[780.0,1515.0],[779.4,1520.4],[777.6,1524.6],[774.6,1527.6],[770.4,1529.4],[765.0,1530.0],[750.0,1530.0],[739.2,1528.8],[730.8,1525.2],[724.8,1519.2],[721.2,1510.8],[720.0,1500.0],[720.0,1476.0],[718.6,1463.0],[714.2,1453.0],[707.0,1445.8],[697.0,1441.4],[684.0,1440.0],[666.0,1440.0],[652.0,1439.0],[638.9,1435.9],[626.6,1430.8],[615.1,1423.7],[604.5,1414.5],[595.5,1405.5],[584.9,1396.3],[573.4,1389.2],[561.1,1384.1],[548.0,1381.0],[534.0,1380.0],[486.0,1380.0],[473.0,1381.4],[463.0,1385.8],[455.8,1393.0],[451.4,1403.0],[450.0,1416.0],[450.0,1584.0],[451.0,1598.0],[454.1,1611.1],[459.2,1623.4],[466.3,1634.9],[475.5,1645.5],[529.4,1699.4],[533.2,1703.8],[536.2,1708.6],[538.3,1713.7],[539.6,1719.2],[540.0,1725.0],[540.0,1725.0],[540.6,1730.4],[542.4,1734.6],[545.4,1737.6],[549.6,1739.4],[555.0,1740.0],[585.0,1740.0],[590.4,1740.6],[594.6,1742.4],[597.6,1745.4],[599.4,1749.6],[600.0,1755.0],[600.0,1755.0],[600.4,1760.8],[601.7,1766.3],[603.8,1771.4],[606.8,1776.2],[610.6,1780.6],[615.0,1785.0],[619.8,1791.0],[622.2,1797.0],[622.2,1803.0],[619.8,1809.0],[615.0,1815.0],[615.0,1815.0],[609.6,1821.2],[605.4,1828.0],[602.4,1835.2],[600.6,1843.0],[600.0,1851.2],[600.0,1928.8],[599.4,1937.0],[597.6,1944.8],[594.6,1952.0],[590.4,1958.8],[585.0,1965.0],[585.0,1965.0],[579.6,1971.2],[575.4,1978.0],[572.4,1985.2],[570.6,1993.0],[570.0,2001.2],[570.0,2048.8],[569.4,2057.0],[567.6,2064.8],[564.6,2072.0],[560.4,2078.8],[555.0,2085.0],[555.0,2085.0],[549.6,2091.2],[545.4,2098.0],[542.4,2105.2],[540.6,2113.0],[540.0,2121.2],[540.0,2138.8],[539.4,2147.0],[537.6,2154.8],[534.6,2162.0],[530.4,2168.8],[525.0,2175.0],[520.6,2179.4],[516.2,2183.2],[511.4,2186.2],[506.3,2188.3],[500.8,2189.6],[495.0,2190.0],[495.0,2190.0],[489.6,2190.6],[485.4,2192.4],[482.4,2195.4],[480.6,2199.6],[480.0,2205.0],[480.0,2228.8],[479.4,2237.0],[477.6,2244.8],[474.6,2252.0],[470.4,2258.8],[465.0,2265.0],[460.6,2269.4],[456.8,2273.8],[453.8,2278.6],[451.7,2283.7],[450.4,2289.2],[450.0,2295.0],[450.0,2295.0],[450.4,2300.8],[451.7,2306.3],[453.8,2311.4],[456.8,2316.2],[460.6,2320.6],[488.8,2348.8],[495.2,2356.4],[497.6,2362.4],[495.8,2366.6],[490.0,2369.2],[480.0,2370.0],[471.2,2370.0],[464.2,2370.6],[460.0,2372.4],[458.8,2375.4],[460.4,2379.6],[465.0,2385.0],[469.4,2389.4],[473.2,2393.8],[476.2,2398.6],[478.3,2403.7],[479.6,2409.2],[480.0,2415.0],[480.0,2415.0],[479.6,2420.8],[478.3,2426.3],[476.2,2431.4],[473.2,2436.2],[469.4,2440.6],[411.2,2498.8],[403.6,2507.6],[397.6,2517.2],[393.4,2527.4],[390.8,2538.4],[390.0,2550.0]],[[1243.5,1386.6],[1237.0,1383.9],[1230.0,1383.0],[1223.0,1383.9],[1216.5,1386.6],[1210.9,1390.9],[1206.6,1396.5],[1203.9,1403.0],[1203.0,1410.0],[1203.9,1417.0],[1206.6,1423.5],[1210.9,1429.1],[1216.5,1433.4],[1223.0,1436.1],[1230.0,1437.0],[1237.0,1436.1],[1243.5,1433.4],[1249.1,1429.1],[1253.4,1423.5],[1256.1,1417.0],[1257.0,1410.0],[1256.1,1403.0],[1253.4,1396.5],[1249.1,1390.9]],[[670.0,2556.6],[663.4,2553.9],[656.5,2553.0],[649.5,2553.9],[643.0,2556.6],[637.4,2560.9],[633.1,2566.5],[630.4,2573.0],[629.5,2580.0],[630.4,2587.0],[633.1,2593.5],[637.4,2599.1],[643.0,2603.4],[649.5,2606.1],[656.5,2607.0],[663.4,2606.1],[670.0,2603.4],[675.5,2599.1],[679.8,2593.5],[682.5,2587.0],[683.5,2580.0],[682.5,2573.0],[679.8,2566.5],[675.5,2560.9]],[[433.5,2586.6],[427.0,2583.9],[420.0,2583.0],[413.0,2583.9],[406.5,2586.6],[400.9,2590.9],[396.6,2596.5],[393.9,2603.0],[393.0,2610.0],[393.9,2617.0],[396.6,2623.5],[400.9,2629.1],[406.5,2633.4],[413.0,2636.1],[420.0,2637.0],[427.0,2636.1],[433.5,2633.4],[439.1,2629.1],[443.4,2623.5],[446.1,2617.0],[447.0,2610.0],[446.1,2603.0],[443.4,2596.5],[439.1,2590.9]],[[1273.5,3096.6],[1267.0,3093.9],[1260.0,3093.0],[1253.0,3093.9],[1246.5,3096.6],[1240.9,3100.9],[1236.6,3106.5],[1233.9,3113.0],[1233.0,3120.0],[1233.9,3127.0],[1234.1,3127.5],[1233.9,3128.0],[1233.0,3135.0],[1233.8,3141.1],[1233.7,3142.2],[1234.6,3149.2],[1236.2,3153.2],[1236.6,3155.9],[1239.3,3162.4],[1241.0,3164.6],[1242.6,3168.5],[1246.9,3174.1],[1247.7,3174.8],[1251.5,3179.7],[1257.1,3184.0],[1257.2,3184.0],[1257.2,3184.1],[1261.5,3189.7],[1267.1,3194.0],[1273.6,3196.6],[1280.6,3197.6],[1287.6,3196.6],[1294.1,3194.0],[1299.7,3189.7],[1304.0,3184.1],[1306.6,3177.6],[1307.6,3170.6],[1306.6,3163.6],[1304.0,3157.1],[1299.7,3151.5],[1294.1,3147.2],[1294.0,3147.2],[1294.0,3147.1],[1289.7,3141.5],[1288.8,3140.8],[1287.7,3139.3],[1287.1,3138.0],[1286.9,3136.1],[1287.0,3135.0],[1286.1,3128.0],[1285.9,3127.5],[1286.1,3127.0],[1287.0,3120.0],[1286.1,3113.0],[1283.4,3106.5],[1279.1,3100.9]],[[2143.5,1866.6],[2137.0,1863.9],[2130.0,1863.0],[2123.0,1863.9],[2116.5,1866.6],[2110.9,1870.9],[2106.6,1876.5],[2103.9,1883.0],[2103.0,1890.0],[2103.9,1897.0],[2106.6,1903.5],[2110.9,1909.1],[2116.5,1913.4],[2123.0,1916.1],[2130.0,1917.0],[2137.0,1916.1],[2143.5,1913.4],[2149.1,1909.1],[2153.4,1903.5],[2156.1,1897.0],[2157.0,1890.0],[2156.1,1883.0],[2153.4,1876.5],[2149.1,1870.9]],[[2023.5,2916.6],[2017.0,2913.9],[2010.0,2913.0],[2003.0,2913.9],[1996.5,2916.6],[1990.9,2920.9],[1986.6,2926.5],[1983.9,2933.0],[1983.0,2940.0],[1983.9,2947.0],[1986.6,2953.5],[1990.9,2959.1],[1996.5,2963.4],[1996.6,2963.4],[1996.6,2963.5],[2000.9,2969.1],[2006.5,2973.4],[2013.0,2976.1],[2020.0,2977.0],[2027.0,2976.1],[2033.5,2973.4],[2039.1,2969.1],[2043.4,2963.5],[2046.1,2957.0],[2047.0,2950.0],[2046.1,2943.0],[2043.4,2936.5],[2039.1,2930.9],[2033.5,2926.6],[2033.4,2926.6],[2033.4,2926.5],[2029.1,2920.9]],[[1573.5,2931.6],[1567.0,2928.9],[1560.0,2928.0],[1553.0,2928.9],[1546.5,2931.6],[1540.9,2935.9],[1536.6,2941.5],[1533.9,2948.0],[1533.0,2955.0],[1533.9,2962.0],[1536.6,2968.5],[1540.9,2974.1],[1546.5,2978.4],[1553.0,2981.1],[1560.0,2982.0],[1567.0,2981.1],[1573.5,2978.4],[1579.1,2974.1],[1583.4,2968.5],[1586.1,2962.0],[1587.0,2955.0],[1586.1,2948.0],[1583.4,2941.5],[1579.1,2935.9]],[[1693.5,3381.6],[1687.0,3378.9],[1680.0,3378.0],[1673.0,3378.9],[1666.5,3381.6],[1660.9,3385.9],[1656.6,3391.5],[1653.9,3398.0],[1653.0,3405.0],[1653.9,3412.0],[1656.6,3418.5],[1660.9,3424.1],[1666.5,3428.4],[1673.0,3431.1],[1680.0,3432.0],[1687.0,3431.1],[1693.5,3428.4],[1699.1,3424.1],[1703.4,3418.5],[1706.1,3412.0],[1707.0,3405.0],[1706.1,3398.0],[1703.4,3391.5],[1699.1,3385.9]],[[1663.5,3636.6],[1657.0,3633.9],[1650.0,3633.0],[1643.0,3633.9],[1636.5,3636.6],[1630.9,3640.9],[1626.6,3646.5],[1623.9,3653.0],[1623.0,3660.0],[1623.2,3661.8],[1623.0,3663.5],[1623.9,3670.5],[1626.6,3677.0],[1630.9,3682.6],[1636.5,3686.9],[1643.0,3689.6],[1650.0,3690.5],[1657.0,3689.6],[1663.5,3686.9],[1669.1,3682.6],[1673.4,3677.0],[1676.1,3670.5],[1677.0,3663.5],[1676.8,3661.8],[1677.0,3660.0],[1676.1,3653.0],[1673.4,3646.5],[1669.1,3640.9]],[[1777.0,4023.9],[1770.0,4023.0],[1763.0,4023.9],[1756.5,4026.6],[1750.9,4030.9],[1746.6,4036.5],[1743.9,4043.0],[1743.0,4050.0],[1743.9,4057.0],[1746.6,4063.5],[1750.9,4069.1],[1756.5,4073.4],[1763.0,4076.1],[1770.0,4077.0],[1777.0,4076.1],[1783.5,4073.4],[1789.1,4069.1],[1793.4,4063.5],[1796.1,4057.0],[1797.0,4050.0],[1796.1,4043.0],[1793.4,4036.5],[1789.1,4030.9],[1783.5,4026.6]]]};
/* Daily operations. The timetable is identical every day; what changes is
   the day's running: delays, cancellations and platform alterations. They are
   drawn from a seed made of the viewer's local date, so every visitor sees the
   same disruption on the same day and a new pattern tomorrow. Delays only show
   for trains that are running or due to leave soon, as they would on a real
   information screen. */
/* Radeland time, one zone nationwide: Radelish Standard Time (RST, UTC−1); Radelish Daylight Time (RDT, UTC±0) from the
   last Sunday of March to the last Sunday of October, changing at 01:00 UTC.
   Timetables and opening hours are written in Radeland local time, and "now" is Radeland's clock. Every time shown
   is converted to the visitor's own time zone (RR_SHOW_SHIFT minutes). */
function rrLastSunday(y,m){const d=new Date(Date.UTC(y,m+1,0,1));d.setUTCDate(d.getUTCDate()-d.getUTCDay());return d.getTime()}
function rrRadelandOffset(ms=Date.now()){const y=new Date(ms).getUTCFullYear();return ms>=rrLastSunday(y,2)&&ms<rrLastSunday(y,9)?0:-60}
function rrNow(){const ms=Date.now(),d=new Date(ms);return new Date(ms+(rrRadelandOffset(ms)+d.getTimezoneOffset())*60000)}   // local getters read Radeland wall-clock time
const RR_SHOW_SHIFT=-new Date().getTimezoneOffset()-rrRadelandOffset();
function rrShowMinutes(m){return m+RR_SHOW_SHIFT}
// How many of the visitor's calendar days ahead something is that happens rel minutes from now.
function rrLocalDayOff(rel){return Math.round((rrDay(0,new Date(Date.now()+rel*60000))-rrDay(0))/864e5)}
function rrToRadeland(m){return m-RR_SHOW_SHIFT}
function rrDateKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
let RR_DAY_KEY=rrDateKey(rrNow());
function rrNowMinutes(){const d=rrNow();return d.getHours()*60+d.getMinutes()}
// Dates: long form "Wednesday, 18/11/2026", short form "Wed, 18/11" (French: "mercredi 18/11/2026", "mer. 18/11").
const RR_DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function rrDay(offset=0,base=new Date()){/* dates shown follow the visitor's calendar */const d=new Date(base);d.setHours(12,0,0,0);d.setDate(d.getDate()+offset);return d}
function rrIsoDate(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function rrFmtDate(d,long=true){const dd=String(d.getDate()).padStart(2,'0'),mm=String(d.getMonth()+1).padStart(2,'0'),wd=RR_DAYS[d.getDay()];
 return long?`${wd}, ${dd}/${mm}/${d.getFullYear()}`:`${wd.slice(0,3)}, ${dd}/${mm}`}
function rrDayLabel(offset){const d=rrFmtDate(rrDay(offset));return offset===1?'Tomorrow · '+d:d}
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
function rrServiceLabel(type,network=''){
 const c=C[type]||RR_UI_CSS_COLOR('--ink-strong');
 const contrastToken=rrServiceAccentToken(type);
 const readable=contrastToken?`var(${contrastToken})`:c;
 return `<span class="rr-service-identity" style="--rr-service-identity-color:${c};--rr-service-aa-color:${readable}"><svg class="rr-service-logo" viewBox="0 0 108 50" aria-hidden="true" focusable="false"><use href="#rr-service-mark"></use></svg><span>${serviceName(type)}${network?` <span class="rr-network">${network}</span>`:''}</span></span>`;
}
function rrTrainLabel(t){return t.label||t.id}
function rrOutline(t){return t.type==='InterCity'||t.pattern==='RS'}
// The one train badge: service colour, outline for InterCity and Regio RS, label (Regio shows the line, e.g. RX 37).
function rrBadge(t){return `<span class="service${rrOutline(t)?' rr-ic-outline':''}" style="--service-color:${rrCssServiceAccent(t.type)};--rr-white-text-fill:${rrCssWhiteTextFill(t.type)}">${rrTrainLabel(t)}</span>`}
function isHighSpeed(train){return train.type==='Max'||train.type==='VIA'}
const P=GRAPH.pts, E=GRAPH.edges;
const $=id=>document.getElementById(id);
const app=$('app'), map=$('map'), board=$('board'), stationSelect=$('stationSelect');
const layer=$('stationLayer'), labels=$('labelLayer'), routeWorld=$('routeWorld'), world=$('world');
const detail=$('detailsBody'), container=$('mapContainer'), tooltip=$('tooltip');
const S=new Map(STATIONS.map(s=>[s.name,s]));
let currentStation=null, selectedTrain=null, selectedPath=[], selectedNames=[], routeColor=C.Max, manualTrace=false;
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
// Shared Mainline/Regio track is drawn as two parallel lines. Chains of shared edges get per-vertex normals once;
// the offset is re-applied in screen pixels at every zoom so the pair stays the same width on screen.
let RR_SHARED_CHAINS=null;
function rrSharedChains(){
 if(RR_SHARED_CHAINS)return RR_SHARED_CHAINS;
 const adj=new Map(),add=(a,b)=>{if(!adj.has(a))adj.set(a,[]);adj.get(a).push(b)};
 for(const [a,b,,sh] of E)if(sh){add(a,b);add(b,a)}
 const seen=new Set(),key=(a,b)=>a<b?a+'_'+b:b+'_'+a,chains=[];
 const walk=(s,n)=>{const c=[s,n];seen.add(key(s,n));let prev=s,cur=n;while(adj.get(cur).length===2){const nx=adj.get(cur).find(x=>x!==prev);if(nx===undefined||seen.has(key(cur,nx)))break;seen.add(key(cur,nx));c.push(nx);prev=cur;cur=nx}return c};
 for(const pass of [0,1])for(const [v,ns] of adj)if(pass||ns.length!==2)for(const n of ns)if(!seen.has(key(v,n)))chains.push(walk(v,n));
 return RR_SHARED_CHAINS=chains.map(c=>{
  const a=P[c[0]],b=P[c.at(-1)];if(b[0]-a[0]<0||(b[0]===a[0]&&b[1]<a[1]))c.reverse();   // Regio keeps to one side of each chain
  const pts=c.map(i=>P[i]);
  return {pts,ns:pts.map((p,i)=>{const q=pts[Math.max(0,i-1)],r=pts[Math.min(pts.length-1,i+1)],dx=r[0]-q[0],dy=r[1]-q[1],l=Math.hypot(dx,dy)||1;return[-dy/l,dx/l]})};
 });
}
function rrSharedPath(o){return rrSharedChains().map(({pts,ns})=>'M'+pts.map((p,i)=>(p[0]+ns[i][0]*o).toFixed(2)+' '+(p[1]+ns[i][1]*o).toFixed(2)).join('L')).join('')}
function rrDrawShared(sc){if(sc===rrDrawShared.sc)return;rrDrawShared.sc=sc;const o=1.6/sc;$('mlShared').setAttribute('d',rrSharedPath(-o));$('regioShared').setAttribute('d',rrSharedPath(o))}
function pathsByType(){const h=[],m=[];$('landShape').setAttribute('d',(GRAPH.land||[]).map(r=>'M'+r.map(p=>p[0]+' '+p[1]).join('L')+'Z').join(''));const g=[],sh=[];for(const [a,b,t,shared] of E){const d=`M${P[a][0]} ${P[a][1]}L${P[b][0]} ${P[b][1]}`;if(shared)continue;(t===2?g:t?h:m).push(d)}$('regioTrack').setAttribute('d',g.join(' '));$('hslTrack').setAttribute('d',h.join(' '));$('mlTrack').setAttribute('d',m.join(' '))}

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

function stationList(){const names=[...S.keys()].sort((a,b)=>a.localeCompare(b));for(const id of ['stationSelect','from','to']){const el=$(id);el.replaceChildren(...names.map(name=>{const n=document.createElement('option');n.value=name;n.textContent=name;return n}))}stationSelect.value=currentStation;for(const id of ['from','to']){const blank=document.createElement('option');blank.value='';blank.textContent='Choose station';$(id).prepend(blank);$(id).value=''}}   // journeys start empty
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
let serviceFilter='all',rrStationNetwork=null,rrBoardShown=15,rrBoardKey='';
const RR_BOARD_PAGE=15;
function rrNetworkAt(station){const c=new Map();for(const t of TRAINS)if(t.type==='Regio'&&t.network&&t.route.some(r=>r[0]===station))c.set(t.network,(c.get(t.network)||0)+1);let best=null,n=0;for(const [k,v] of c)if(v>n){best=k;n=v}return best}
new MutationObserver(()=>{if(typeof drawMap==='function'){drawMap();if(typeof drawRoute==='function'&&(selectedTrain||selectedJourney||selectedPath.length))drawRoute()}}).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
const RR_MAINLINE_TYPES=new Set(['Max','VIA','InterCity','Nightline']);
function rrMatchesFilter(t){
 if(serviceFilter==='all')return true;
 if(serviceFilter==='mainline')return RR_MAINLINE_TYPES.has(t.type);
 if(serviceFilter==='regio')return t.type==='Regio'&&(!rrStationNetwork||t.network===rrStationNetwork);
 return t.type==='Local';
}
document.querySelectorAll('.service-chip').forEach(b=>b.addEventListener('click',()=>{
 serviceFilter=b.dataset.filter;app.dataset.sysFocus=serviceFilter;
 document.querySelectorAll('.service-chip').forEach(x=>{const on=x===b;x.classList.toggle('active',on);x.setAttribute('aria-checked',String(on))});
 drawBoard();drawMap();
}));
function drawBoard(){
 if(viewMode==='journeys'){renderJourneyResults();return}
 const isArrival=viewMode==='arrivals';
 app.classList.toggle('no-station',!currentStation);
 $('stationBoardTitle').textContent=isArrival?'Arrivals':'Departures';
 if(!currentStation){
  // Home: no station is assumed. The passenger picks one, or starts from a major station.
  $('stationHeading').textContent='Choose a station';
  board.innerHTML=`<div class="rr-home"><div class="rr-home-title">Major stations</div>${[...LABELS].sort((a,b)=>a.localeCompare(b)).map(n=>`<button type="button" class="rr-home-station" data-station="${n}"><span>${n}</span><span class="jt-chevron" aria-hidden="true"></span></button>`).join('')}</div>`;
  board.querySelectorAll('.rr-home-station').forEach(b=>b.addEventListener('click',()=>setCurrentStation(b.dataset.station)));
  return;
 }
 rrStationNetwork=rrNetworkAt(currentStation);
 departures=(isArrival?arriving(currentStation):upcoming(currentStation)).filter(rrMatchesFilter);
 board.replaceChildren();
 $('stationHeading').textContent=currentStation;
 $('stationBoardTitle').textContent=isArrival?'Arrivals':'Departures';
 $('boardRouteHeader').textContent=isArrival?'Origin':'Destination';
 if(!departures.length){board.innerHTML=serviceFilter==='local'?'<div class="empty">No Local services yet.</div>':`<div class="empty">No ${isArrival?'arrivals':'departures'}.</div>`;return}
 // Like journeys: a page of trains, then "Show more trains" (no endless scroll).
 const boardKey=currentStation+'|'+viewMode+'|'+serviceFilter;
 if(boardKey!==rrBoardKey){rrBoardKey=boardKey;rrBoardShown=RR_BOARD_PAGE}
 const selIndex=selectedTrain?departures.findIndex(t=>t.id===selectedTrain.id):-1;
 if(selIndex>=rrBoardShown)rrBoardShown=Math.ceil((selIndex+1)/RR_BOARD_PAGE)*RR_BOARD_PAGE;   // keep the chosen train visible
 let dividerShown=false;
 for(const t of departures.slice(0,rrBoardShown)){
  if(rrLocalDayOff(t.boardRel)>0&&!dividerShown){dividerShown=true;const d=document.createElement('div');d.className='rr-day-divider';d.textContent=rrDayLabel(1);board.append(d)}
  const row=document.createElement('button');
  row.type='button';
  row.className='trainrow'+(selectedTrain?.id===t.id?' selected':'');
  row.style.setProperty('--service-color',rrCssServiceAccent(t.type));
  row.style.setProperty('--rr-white-text-fill',rrCssWhiteTextFill(t.type));
  row.innerHTML=`<span class="row-time">${stopTimeMarkup(t,t.hereIndex)}</span><span class="service${rrOutline(t)?' rr-ic-outline':''}">${rrTrainLabel(t)}</span><span><span class="dest">${isArrival?t.origin:t.dest}</span><span class="rowstatus">${statusTag(rrBoardStatus(t,isArrival))}${rrAlertFlag(t)}</span></span><span class="platform">${rrBoardPlatform(t,currentStation)}</span>`;
  row.addEventListener('click',()=>selectedTrain?.id===t.id?clear():chooseTrain(t));   // a second click deselects: map back to default
  board.append(row);
 }
 if(rrBoardShown<departures.length){
  const more=document.createElement('button');more.type='button';more.className='journey-more';more.textContent='Show more trains';
  more.addEventListener('click',()=>{const y=board.scrollTop;rrBoardShown+=RR_BOARD_PAGE;drawBoard();board.scrollTop=y});
  board.append(more);
 }
}
function setCurrentStation(name){
 viewMode=viewMode==='arrivals'?'arrivals':'departures';
 updateBoardTabs();
 selectedJourney=null;selectedLegPaths=[];currentStation=name;
 stationSelect.value=name||'';pickerViews.get('stationSelect')?.sync();
 selectedTrain=null;selectedPath=[];selectedNames=name?[name]:[];manualTrace=false;
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
 'Duplex':'duplex','Police':'police','First Class lounge':'lounge','Lost property':'lost-property','Mobility assistance':'mobility'
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
// Staffed services and facilities with opening hours, by station tier (minutes past midnight; null = closed that day).
const RR_H=(a,b)=>[a*60,b*60];
const RR_DAILY=(a,b)=>({wk:RR_H(a,b),sat:RR_H(a,b),sun:RR_H(a,b)});
const STATION_HOURS={
 national:{'RR Services':RR_DAILY(5.5,23.5),'Police':RR_DAILY(0,24),'Mobility assistance':RR_DAILY(5,24),'First Class lounge':{wk:RR_H(5.5,22),sat:RR_H(6,22),sun:RR_H(6,22)},
  'Lost property':{wk:RR_H(8,19),sat:RR_H(9,17),sun:null},'Café':{wk:RR_H(5.5,22),sat:RR_H(6,22),sun:RR_H(7,21)},'Luggage':{wk:RR_H(6,23),sat:RR_H(6,23),sun:RR_H(7,22)}},
 major:{'RR Services':{wk:RR_H(6,22),sat:RR_H(7,21),sun:RR_H(7,21)},'Police':{wk:RR_H(7,23),sat:RR_H(7,23),sun:RR_H(8,22)},'Mobility assistance':{wk:RR_H(6,22),sat:RR_H(7,21),sun:RR_H(7,21)},
  'Lost property':{wk:RR_H(9,17),sat:null,sun:null},'Café':{wk:RR_H(6,21),sat:RR_H(7,20),sun:RR_H(8,20)},'Luggage':{wk:RR_H(7,21),sat:RR_H(8,20),sun:RR_H(8,20)}},
 regional:{'RR Services':{wk:RR_H(6.5,19.5),sat:RR_H(8,16),sun:null},'Café':{wk:RR_H(6.5,19),sat:RR_H(8,17),sun:null}},
 local:{'Café':{wk:RR_H(7,14),sat:null,sun:null}}
};
const STATION_HELP=['RR Services','Police','Mobility assistance','First Class lounge','Lost property'];
const RR_FAC_NOTE={'RR Services':'Tickets, travel advice and help with your journey','Police':'Run by the Federal Police','Mobility assistance':'Help getting on and off trains',
 'First Class lounge':'For First Class ticket holders','Lost property':'Items found on trains and at the station','Café':'Food and drinks','Luggage':'Left luggage'};
function rrStationTier(name){return NATIONAL_HUBS.has(name)?'national':MAJOR_STATIONS.has(name)?'major':(REGIONAL_INTERCHANGES.has(name)||AIRPORT_STATIONS.has(name))?'regional':'local'}
function rrHoursOn(h,day){return day===0?h.sun:day===6?h.sat:h.wk}
function rrClock(m){return m>=1440&&!RR_SHOW_SHIFT?'24:00':rrMinutesToInput(rrShowMinutes(m))}
function rrOpenStatus(h){
 const d=rrNow(),day=d.getDay(),now=d.getHours()*60+d.getMinutes(),t=rrHoursOn(h,day);
 if(t&&t[0]===0&&t[1]>=1440)return{open:true,text:'Open 24 hours'};
 if(t&&now>=t[0]&&now<t[1])return{open:true,text:'Open now · closes '+rrClock(t[1])};
 for(let k=0;k<8;k++){const dd=(day+k)%7,tt=rrHoursOn(h,dd);if(!tt||(k===0&&now>=tt[0]))continue;
  return{open:false,text:'Closed · opens '+(k===0?'':k===1?'tomorrow ':RR_DAYS[dd].slice(0,3)+' ')+rrClock(tt[0])}}
 return{open:false,text:'Closed'};
}
function rrHoursRows(h){
 const f=t=>!t?'Closed':t[0]===0&&t[1]>=1440?'24 hours':rrClock(t[0])+'–'+rrClock(t[1]),wk=f(h.wk),sat=f(h.sat),sun=f(h.sun);
 return wk===sat&&sat===sun?[['Daily',wk]]:[['Mon–Fri',wk],['Saturday',sat],['Sunday',sun]];
}
function rrFacilityIcon(name){
 if(name==='RR Services')return `<svg class="fac-rr" viewBox="0 0 108 50" aria-hidden="true"><use href="#rr-service-mark"></use></svg>`;
 const kind=ICONS[name]||ICONS[facilityLabel(name)];return kind?`<svg viewBox="0 0 32 32" aria-hidden="true"><use href="#rr-picto-${kind}"></use></svg>`:'';
}
// A facility with opening hours is a button: its dot shows open/closed now, and a tap opens the hours under its row.
function rrFacilityTile(name,hours){
 if(!hours)return pictoItem(name);
 const st=rrOpenStatus(hours);
 return `<button type="button" class="facility has-hours" data-fac="${name}" aria-expanded="false"><span class="fac-icon">${rrFacilityIcon(name)}<i class="fac-dot${st.open?' open':''}" aria-hidden="true"></i></span><span>${name}</span></button>`;
}
function rrFacilityDetail(name,hours){
 const st=rrOpenStatus(hours);
 return `<div class="fac-detail"><div class="fac-detail-head"><span class="fac-detail-icon">${rrFacilityIcon(name)}</span><div><strong>${name}</strong><span class="fac-status${st.open?' open':''}">${st.text}</span></div></div>${RR_FAC_NOTE[name]?`<p class="fac-note">${RR_FAC_NOTE[name]}</p>`:''}<dl class="fac-hours">${rrHoursRows(hours).map(([d,t])=>`<div><dt>${d}</dt><dd>${t}</dd></div>`).join('')}</dl></div>`;
}
function rrWireFacilityHours(root,hoursOf){
 root.querySelectorAll('.facility.has-hours').forEach(btn=>btn.addEventListener('click',()=>{
  const grid=btn.parentElement,open=btn.getAttribute('aria-expanded')==='true';
  grid.querySelectorAll('.fac-detail').forEach(x=>x.remove());grid.querySelectorAll('.has-hours').forEach(b=>b.setAttribute('aria-expanded','false'));
  if(open)return;
  const tiles=[...grid.children],row=tiles.filter(t=>t.offsetTop===btn.offsetTop),last=row[row.length-1];
  last.insertAdjacentHTML('afterend',rrFacilityDetail(btn.dataset.fac,hoursOf(btn.dataset.fac)));btn.setAttribute('aria-expanded','true');
 }));
}
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
 const tier=rrStationTier(name);
 const items=[...STATION_CORE,...STATION_AMENITIES[tier]];
 if(airport)for(const item of ['Airport','Interchange','Luggage','Baby Changing'])items.push(item);
 return [...new Set(items)];
}
function trainFacilities(train){
 const items=[...new Set(train.fac.map(facilityLabel))];
 if(items.includes('Accessible')&&items.includes('Toilet')&&!items.includes('Accessible Toilet'))items.push('Accessible Toilet');
 return items;
}
// Services calling at a station: one row per service (Regio per network). Regio rows open to list their lines; Mainline numbers are not routes, so they are not listed.
function rrStationServices(name){
 const m=new Map(),order=['Max','VIA','InterCity','Nightline','Regio'];
 for(const t of TRAINS){const i=t.route.findIndex(r=>r[0]===name);if(i<0)continue;
  const k=t.type+'|'+(t.network||'');if(!m.has(k))m.set(k,{type:t.type,network:t.network||'',badges:new Map()});
  const e=m.get(k),l=rrTrainLabel(t);if(t.type==='Regio'&&!e.badges.has(l))e.badges.set(l,t)}
 return [...m.values()].sort((a,b)=>order.indexOf(a.type)-order.indexOf(b.type));
}
function fillStationInfo(name=currentStation, returnTrain=null, returnJourney=null){
 rrDetailsHeading('Station information','rr-ui-info');$('focusRoute').hidden=true;
 const facilities=stationFacilities(name);
 const additional=facilities.filter(f=>!STATION_CORE.includes(f));
 const hours=STATION_HOURS[rrStationTier(name)],help=STATION_HELP.filter(f=>hours[f]);
 const backButton=returnTrain?`<button type="button" class="back-to-train" id="backToTrain" aria-label="Back to train ${rrTrainLabel(returnTrain.train)}"><span aria-hidden="true"><svg class="rr-arrow-icon" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><use href="#rr-picto-arrow-left"></use></svg></span><span>Back to</span>${rrBadge(returnTrain.train)}</button>`:returnJourney?`<button type="button" class="back-to-train" id="backToJourney"><span aria-hidden="true"><svg class="rr-arrow-icon" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><use href="#rr-picto-arrow-left"></use></svg></span><span>Back to journey</span></button>`:'';
 const svc=rrStationServices(name),plats=new Set(TRAINS.map(t=>t.platforms?.[name]).filter(Boolean));
 detail.innerHTML=`${backButton}<div class="train-hero station-hero" data-station="${name}"><div class="station-name-band">${name}</div><div class="station-actions">${[['departures','Departures'],['arrivals','Arrivals'],['from','Journey from here'],['to','Journey to here']].map(([k,l])=>`<button type="button" class="station-action" data-action="${k}"><span>${l}</span><svg class="rr-arrow-icon" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><use href="#rr-picto-arrow-right"></use></svg></button>`).join('')}</div></div>
 <section class="rr-card"><h3 class="rr-card-title">Services</h3><div class="station-services">${svc.map(s=>s.type!=='Regio'?`<div class="station-svc"><div class="station-svc-row"><span class="station-svc-name">${rrServiceLabel(s.type,s.network)}</span></div></div>`:`<details class="station-svc"><summary><span class="station-svc-name">${rrServiceLabel(s.type,s.network)}</span><span class="jt-chevron" aria-hidden="true"></span></summary><div class="station-svc-lines">${[...s.badges.entries()].sort((a,b)=>a[0].localeCompare(b[0],undefined,{numeric:true})).map(([,t])=>rrBadge(t)).join('')}</div></details>`).join('')}</div>${plats.size?`<div class="station-svc-foot">${plats.size} platforms</div>`:''}</section>
 <section class="rr-card"><h3 class="rr-card-title">Facilities</h3>${help.length?`<h4 class="rr-card-sub">Help and services</h4><div class="station-picto-grid">${help.map(f=>rrFacilityTile(f,hours[f])).join('')}</div>`:''}<h4 class="rr-card-sub" data-rr-fr="Standard">Standard</h4><div class="station-picto-grid">${STATION_CORE.map(pictoItem).join('')}</div>
 ${additional.length?`<h4 class="rr-card-sub" data-rr-fr="Supplémentaires">Additional</h4><div class="station-picto-grid">${additional.map(f=>rrFacilityTile(f,hours[f])).join('')}</div>`:''}</section>`;
 rrWireFacilityHours(detail,f=>hours[f]);
 detail.querySelectorAll('.station-action').forEach(b=>b.addEventListener('click',()=>{
  const k=b.dataset.action;
  if(k==='departures'||k==='arrivals'){viewMode=k;setCurrentStation(name);return}
  $(k).value=name;pickerViews.get(k)?.sync();setViewMode('journeys');
 }));
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
 rrSyncHash();
}

$('stationInfoLeft').addEventListener('click',()=>fillStationInfo(currentStation));

// RR coach formation · original RR pictograms, neutral carriages, route-colour direction arrows.
const RR_FORMATIONS={"M8":{"key":"M8","name":"RR Max · M8","category":"Max","desc":"Shorter high-speed formation · 8-car EMU","cars":[{"role":"Standard","features":["luggage","cycle"],"detail":"Driving cab · luggage and bicycle spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Step-free wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler","baby"],"detail":"Family area · toddler space"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Café","features":["cafe"],"detail":"Café counter"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["quiet","first"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"All cars carry passengers. Driving cabs are part of coaches 1 and 8.","highlight":7},"M12":{"key":"M12","name":"RR Max · M12","category":"Max","desc":"Long-distance high-speed formation · 12-car EMU","cars":[{"role":"Standard","features":["luggage","cycle"],"detail":"Driving cab · luggage and bicycle spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair and priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler","baby"],"detail":"Family area · toddler space"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Dining","features":["restaurant"],"detail":"Dining coach with restaurant seating"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first"],"detail":"First Class"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"No dedicated traction heads. The selected coach in the reference example is Coach 11.","highlight":10},"V8":{"key":"V8","name":"RR Via · V8","category":"Via","desc":"High-speed formation · 8-car EMU","cars":[{"role":"Standard","features":["luggage"],"detail":"Standard · driving cab"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair and priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler"],"detail":"Family area and toddler compartment"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Café","features":["cafe"],"detail":"Café"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"Via retains its own magenta identification; no non-passenger power head.","highlight":7},"V10":{"key":"V10","name":"RR Via · V10","category":"Via","desc":"Extended high-speed formation · 10-car EMU","cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Standard · driving cab, bicycle spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair and priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler"],"detail":"Family / toddler area"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Café","features":["cafe"],"detail":"Café"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"Long Via services can use V10 in place of V8.","highlight":9},"IC10":{"key":"IC10","name":"RR InterCity · IC10","category":"InterCity","desc":"Locomotive + 10 passenger coaches","cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Bicycles and luggage"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler"],"detail":"Family / toddler area"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Dining","features":["restaurant"],"detail":"Restaurant / dining"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first"],"detail":"First Class"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"}],"power":"LOCO","notes":"One separate locomotive, no passenger number; can work in reverse direction.","highlight":9},"IC10P":{"key":"IC10P","name":"RR InterCity · IC10-P","category":"InterCity","desc":"2 non-passenger power cars + 10 passenger coaches","cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Bicycle and luggage spaces"},{"role":"Standard","features":["wheelchair","accessible-toilet"],"detail":"Wheelchair accommodation · accessible toilet"},{"role":"Standard","features":["priority-seat"],"detail":"Priority seating"},{"role":"Standard","features":["family","toddler"],"detail":"Family / toddler area"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Café","features":["cafe"],"detail":"Café counter"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first"],"detail":"First Class"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"}],"power":"POWER","notes":"Two dedicated power heads are unnumbered and have no passenger amenities.","highlight":9},"NL11":{"key":"NL11","name":"RR Nightline · NL11","category":"Nightline","desc":"Locomotive + 11 passenger coaches","cars":[{"role":"Seated","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Accessible seated coach · priority seating"},{"role":"Seated","features":["quiet","reserved-seat"],"detail":"Reserved seats · Quiet Zone"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Café","features":["cafe"],"detail":"Night catering"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleepers with showers"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleepers with showers"}],"power":"LOCO","notes":"Seated accommodation, couchettes and sleeper classes remain distinct.","highlight":10},"NL9P":{"key":"NL9P","name":"RR Nightline · NL9-P","category":"Nightline","desc":"2 non-passenger power cars + 9 passenger coaches","cars":[{"role":"Seated","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Accessible seated coach · priority seating"},{"role":"Seated","features":["quiet","reserved-seat"],"detail":"Quiet seated coach"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleeper with shower"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleeper with shower"}],"power":"POWER","notes":"No separate locomotive: unnumbered power cars at both ends.","highlight":8},"RS3":{"key":"RS3","name":"RR Regio RS · RS3","category":"Regio","desc":"Regional Sprinter · 3-car low-floor EMU","power":"EMU","notes":"Stops at every station. Level boarding at all doors.","highlight":1,"cars":[{"role":"Standard","features":["cycle","wheelchair","priority-seat"],"detail":"Driving cab · multi-purpose area for bicycles, pushchairs and wheelchairs · priority seats"},{"role":"Standard","features":["accessible-toilet","wheelchair","family"],"detail":"Level boarding · wheelchair spaces · accessible toilet · family area"},{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · multi-purpose area for bicycles and luggage"}]},"RS6":{"key":"RS6","name":"RR Regio RS · RS6","category":"Regio","desc":"Regional Sprinter · two coupled 3-car EMUs","power":"EMU","notes":"Two RS3 units at busy times; you can walk through each unit but not between them.","highlight":1,"cars":[{"role":"Standard","features":["cycle","wheelchair","priority-seat"],"detail":"Driving cab · multi-purpose area for bicycles, pushchairs and wheelchairs · priority seats"},{"role":"Standard","features":["accessible-toilet","wheelchair","family"],"detail":"Level boarding · wheelchair spaces · accessible toilet · family area"},{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · multi-purpose area for bicycles and luggage"},{"role":"Standard","features":["cycle","wheelchair","priority-seat"],"detail":"Driving cab · multi-purpose area for bicycles, pushchairs and wheelchairs · priority seats"},{"role":"Standard","features":["accessible-toilet","wheelchair","family"],"detail":"Level boarding · wheelchair spaces · accessible toilet · family area"},{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · multi-purpose area for bicycles and luggage"}]},"RX4D":{"key":"RX4D","name":"RR Regio RX · RX4D","category":"Regio","desc":"Regional Express · 4-car double-deck EMU","power":"EMU","notes":"Limited stops. First Class is on the upper deck of car 1.","highlight":2,"cars":[{"role":"First","features":["first","quiet","cycle"],"detail":"Driving cab · First Class on the upper deck · multi-purpose area on the lower deck"},{"role":"Standard","features":["quiet","power"],"detail":"Quiet zone on the upper deck · power sockets"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Level boarding · wheelchair spaces · priority seats · accessible toilet"},{"role":"Standard","features":["cycle","luggage","toilet"],"detail":"Driving cab · bicycle and luggage area on the lower deck · toilet"}]},"RX8D":{"key":"RX8D","name":"RR Regio RX · RX8D","category":"Regio","desc":"Regional Express · two coupled 4-car double-deck EMUs","power":"EMU","notes":"Two RX4D units at peak times; you cannot walk between the units, so check your car number.","highlight":2,"cars":[{"role":"First","features":["first","quiet","cycle"],"detail":"Driving cab · First Class on the upper deck · multi-purpose area on the lower deck"},{"role":"Standard","features":["quiet","power"],"detail":"Quiet zone on the upper deck · power sockets"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Level boarding · wheelchair spaces · priority seats · accessible toilet"},{"role":"Standard","features":["cycle","luggage","toilet"],"detail":"Driving cab · bicycle and luggage area on the lower deck · toilet"},{"role":"First","features":["first","quiet","cycle"],"detail":"Driving cab · First Class on the upper deck · multi-purpose area on the lower deck"},{"role":"Standard","features":["quiet","power"],"detail":"Quiet zone on the upper deck · power sockets"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Level boarding · wheelchair spaces · priority seats · accessible toilet"},{"role":"Standard","features":["cycle","luggage","toilet"],"detail":"Driving cab · bicycle and luggage area on the lower deck · toilet"}]},"RX6D":{"key":"RX6D","name":"RR Regio RX · RX6D","category":"Regio","desc":"Regional Express · 6-car double-deck EMU","power":"EMU","notes":"The usual RX train. First Class is on the upper deck of car 1.","highlight":3,"cars":[{"role":"First","features":["first","quiet","cycle"],"detail":"Driving cab · First Class on the upper deck · multi-purpose area on the lower deck"},{"role":"Standard","features":["quiet","power"],"detail":"Quiet zone on the upper deck · power sockets"},{"role":"Standard","features":["power"],"detail":"Power sockets at every seat"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Level boarding · wheelchair spaces · priority seats · accessible toilet"},{"role":"Standard","features":["family","priority-seat"],"detail":"Family area · priority seats"},{"role":"Standard","features":["cycle","luggage","toilet"],"detail":"Driving cab · bicycle and luggage area on the lower deck · toilet"}]}};
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
 if(t.type==='Regio'){const hh=Number((t.id.match(/-\d(\d\d)$/)||['0','0'])[1]),peak=(hh>=6&&hh<=8)||(hh>=16&&hh<=18);   // the run id ends in its starting hour
  return t.pattern==='RX'?(peak?'RX8D':hh>=19?'RX4D':'RX6D'):(peak?'RS6':'RS3')}
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
function rrSeason(){const m=rrNow().getMonth();return m>=8&&m<=10?'autumn':m===11||m<=1?'winter':m>=5&&m<=7?'summer':'spring'}
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
 // Painted ink of every coach shape (2-unit strokes included) spans x 2-30, y 3-25; First Class adds the stripe down to y 29.
 // The selector keeps one clearance on all four sides.
 const y1=shape.includes('first')?29:25,pad=1.2+.45;   // clearance + half of the .9-unit stroke
 return `<svg class="rr-car-selection-outline" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect x="${2-pad}" y="${3-pad}" width="${28+2*pad}" height="${y1-3+2*pad}" rx="1.4"/></svg>`;
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
 detail.innerHTML=`<div class="train-hero" style="--service-color:${rrCssServiceAccent(t.type)};--rr-white-text-fill:${rrCssWhiteTextFill(t.type)}"><div class="train-hero-top"><div class="service-title"><div class="train-number${rrOutline(t)?' rr-ic-outline':''}">${rrTrainLabel(t)}</div></div><div class="train-departure"><div class="depart-time">${stopTimeMarkup(t,here)}</div><div class="depart-label">${isArrival?'Arrival':'Departure'}</div><div class="depart-date">${rrLocalDayOff(t.boardRel||0)>0?'Tomorrow':'Today'} · ${rrFmtDate(rrDay(rrLocalDayOff(t.boardRel||0)),false)}</div></div></div><div class="destination-label">${isArrival?'From':'To'}</div><div class="service-dest">${isArrival?t.origin:t.dest}</div></div>${rrAlertMarkup(t,'rr-alert-banner')}<dl class="info-grid" aria-label="Train information"><div class="fact-row"><dt class="keylabel">Platform</dt><dd class="infoval">${rrBoardPlatform(t,currentStation)}</dd></div><div class="fact-row"><dt class="keylabel">Status</dt><dd class="infoval">${statusTag(stopStatus(t,here))}</dd></div><div class="fact-row"><dt class="keylabel">Operator</dt><dd class="infoval">${rrServiceLabel(t.type,t.network)}</dd></div><div class="fact-row"><dt class="keylabel">Origin</dt><dd class="infoval">${t.origin}</dd></div></dl><div class="stops-heading">Calling at</div><div class="stop-list${here>0?' is-en-route':''}${delayMinutes(t.status)?' has-disruptions':''}" style="--route:${rrCssServiceAccent(t.type)};--route-travelled:var(--passed)">${stops}</div>${rrCoachFormation(t)}`;
 requestAnimationFrame(rrEnsureCoachVisible);
 detail.querySelectorAll(".stop-station").forEach(btn=>btn.addEventListener("click",()=>{const station=t.route[Number(btn.dataset.stopIndex)][0];const returnTrain={train:t,station:currentStation,boardMode:viewMode};setCurrentStation(station);fillStationInfo(station,returnTrain)}));
}
function chooseTrain(t,openDrawer=true){selectedJourney=null;selectedLegPaths=[];selectedTrain=t;selectedPath=getTrainPath(t);selectedNames=t.route.map(r=>r[0]);routeColor=C[t.type];manualTrace=false;fillDetails(t);detail.scrollTop=0;drawBoard();drawRoute();drawMap();if(openDrawer){app.classList.add('detail-open');requestAnimationFrame(()=>{resize();focusRoute()})}}
function trace(){selectedLegPaths=[];const a=S.get($('from').value),b=S.get($('to').value);if(!a||!b)return;selectedTrain=null;selectedPath=shortest(a.point,b.point);selectedNames=[a.name,b.name];routeColor=RR_UI_CSS_COLOR('--ui');manualTrace=true;drawRoute();drawMap();drawBoard();$('focusRoute').hidden=false;rrDetailsHeading('Route','rr-ui-route');detail.innerHTML=`<div class="service-dest">${a.name}<span class="rr-arrow" aria-hidden="true"><svg class="rr-arrow-icon" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><use href="#rr-picto-arrow-right"></use></svg></span>${b.name}</div>`;app.classList.add('detail-open');requestAnimationFrame(()=>{resize();focusRoute()})}
function clear(){selectedJourney=null;selectedLegPaths=[];selectedTrain=null;selectedPath=[];selectedNames=currentStation?[currentStation]:[];manualTrace=false;routeWorld.replaceChildren();drawBoard();$('focusRoute').hidden=true;detail.innerHTML=`<div class="empty">Select ${viewMode==='arrivals'?'an arrival':'a departure'}.</div>`;app.classList.remove('detail-open');requestAnimationFrame(resize);drawMap()}
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
    se('path',{d:makePath(selectedPath.slice(0,boundary+1)),class:'route-line',stroke:RR_UI_CSS_COLOR('--passed')}),
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
function updateWorld(){clampPan();const sc=fit*zoom;rrDrawShared(sc);offX=(W-(graphWidth*sc))/2-minX*sc+panX;offY=(H-(graphHeight*sc))/2-minY*sc+panY;world.setAttribute('transform',`translate(${offX} ${offY}) scale(${sc})`);if(selectedJourney&&selectedLegPaths.length>1&&Math.abs((rrRouteRenderedScale??0)-sc)>1e-6)drawRoute();drawMap();$('zoomOut').disabled=zoom<=1.000001;}
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
   stroke:colors[0]||RR_UI_CSS_COLOR('--ui'),'stroke-width':edge,'pointer-events':'none'}));
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
function rrTripFocus(){
 if(!(selectedTrain||selectedJourney))return null;
 const calls=new Set(selectedNames),key=new Map(),changes=new Set();
 const tm=(t,i)=>String(t.route[i][1]).split(' ')[0];
 if(selectedJourney){
  const L=selectedJourney.legs;
  key.set(L[0].from,tm(L[0].train,L[0].fromIdx));
  key.set(L[L.length-1].to,tm(L[L.length-1].train,L[L.length-1].toIdx));
  for(let i=0;i<L.length-1;i++){changes.add(L[i].to);key.set(L[i].to,tm(L[i].train,L[i].toIdx)+' – '+tm(L[i+1].train,L[i+1].fromIdx))}
 }else{
  const t=selectedTrain,r=t.route;
  key.set(r[0][0],tm(t,0));key.set(r[r.length-1][0],tm(t,r.length-1));
  const h=r.findIndex(x=>x[0]===currentStation);if(h>=0)key.set(currentStation,tm(t,h));
 }
 const onPath=new Set(selectedPath);
 const through=new Set(STATIONS.filter(s=>onPath.has(s.point)&&!calls.has(s.name)).map(s=>s.name));
 return {calls,key,changes,through};
}
function drawMap(){
 if(!W||!H)return;
 const focusedStation=document.activeElement?.classList?.contains('mapnode')?document.activeElement.getAttribute('aria-label'):rrPendingMapFocus;
 rrPendingMapFocus=null;
 layer.replaceChildren();labels.replaceChildren();tooltip.style.display='none';
 const sc=fit*zoom,visible=[];
 const rrTrip=rrTripFocus();app.classList.toggle('trip-focus',!!rrTrip);
 const selectedSet=new Set(selectedNames);
 const progressIndex=selectedTrain?rrTrainProgressIndex(selectedTrain):0;
 const passedStationNames=new Set(progressIndex>0?selectedTrain.route.slice(0,progressIndex).map(([name])=>name):[]);
 const passedTrainColor=progressIndex>0?rrTraveledColor(routeColor):null;
 const legStationColors=journeyStationColors(selectedJourney);
 const selectedLabelColors=new Map();
 const interchangeMarkers=journeyInterchangeMarkers(selectedJourney);
 if(!window.RR_DOT_ORDER){const rank=s=>LABELS.includes(s.name)?0:s.sys==='MR'?1:!s.regio?2:3;window.RR_DOT_ORDER=[...STATIONS].sort((a,b)=>rank(a)-rank(b))}
 const rrDotGrid=new Map(),RR_DOT_GAP=10;
 const rrDotFree=(x,y)=>{const gx=Math.floor(x/RR_DOT_GAP),gy=Math.floor(y/RR_DOT_GAP);for(let i=-1;i<=1;i++)for(let j=-1;j<=1;j++)for(const [px,py] of rrDotGrid.get((gx+i)+','+(gy+j))||[])if(Math.hypot(px-x,py-y)<RR_DOT_GAP)return false;return true};
 const rrDotTake=(x,y)=>{const k=Math.floor(x/RR_DOT_GAP)+','+Math.floor(y/RR_DOT_GAP);if(!rrDotGrid.has(k))rrDotGrid.set(k,[]);rrDotGrid.get(k).push([x,y])};
 for(const s of RR_DOT_ORDER){
  if(s.regio&&zoom<2.2&&!selectedSet.has(s.name)&&s.name!==currentStation)continue; // Regio halts appear when zoomed in
  const tripRole=rrTrip?(rrTrip.calls.has(s.name)||s.name===currentStation?'call':rrTrip.through.has(s.name)?'through':LABELS.includes(s.name)?'hub':null):null;
  if(rrTrip&&(!tripRole||tripRole==='through'))continue;   // a selected trip hides unrelated stations and those it only passes through                       // a selected trip hides stations it has nothing to do with
  const {x,y}=screen(s.x,s.y);
  if(x< -18||y< -18||x>W+18||y>H+18)continue;
  const focus=viewMode==='journeys'?'all':serviceFilter,pinned=selectedSet.has(s.name)||s.name===currentStation;
  if(!pinned&&((focus==='mainline'&&s.sys==='R')||(focus==='regio'&&s.sys==='M'&&!LABELS.includes(s.name))||(focus==='local'&&!LABELS.includes(s.name))))continue;
  const keep=pinned||LABELS.includes(s.name)||s.sys==='MR';
  if(!keep&&!rrDotFree(x,y))continue;                // too close to a dot already drawn at this zoom
  rrDotTake(x,y);
  visible.push({...s,sx:x,sy:y});
  const selected=selectedSet.has(s.name),current=s.name===currentStation,important=LABELS.includes(s.name);
  const radius=selected?5.8:(important?4.7:(s.regio?2.2:3.2)),g=se('g',{'data-station':s.name});
  const colors=selectedJourney?legStationColors.get(s.name)||[]:[];
  const activeColors=selected&&selectedPath.length?(colors.length?colors:[passedTrainColor&&!current&&passedStationNames.has(s.name)?RR_UI_CSS_COLOR('--passed'):routeColor]):[];
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
   const markerColors=activeColors.length?activeColors:[RR_UI_CSS_COLOR('--ui')];
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
   g.append(se('circle',{cx:x,cy:y,r:radius-1.2,fill:RR_UI_CSS_COLOR('--surface'),stroke:rrVisibleServiceAccent(activeColors[0]),'stroke-width':2.4,'pointer-events':'none'}));
  }else{
   const ring=s.sys==='MR'?RR_UI_CSS_COLOR('--muted-slate'):s.sys==='R'?RR_UI_CSS_COLOR('--rail-regio'):RR_UI_CSS_COLOR('--rail');
   const r=important?5:s.sys==='MR'?3.9:s.regio?2.7:3.4;
   g.append(se('circle',{cx:x,cy:y,r,fill:RR_UI_CSS_COLOR('--surface'),stroke:ring,'stroke-width':important?2.2:s.regio?1.4:1.7,'pointer-events':'none'}));
  }
  const hit=se('circle',{cx:x,cy:y,r:12,fill:'transparent',class:'mapnode',role:'button','aria-label':s.name,tabindex:0});
  hit.addEventListener('click',e=>{e.stopPropagation();if(app.classList.contains('folded'))rrSetFolded(false);setCurrentStation(s.name)});
  hit.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setCurrentStation(s.name)}});
  hit.addEventListener('mouseenter',()=>{tooltip.textContent=s.name;tooltip.style.display='block';tooltip.style.left=x+'px';tooltip.style.top=(y-13)+'px'});
  hit.addEventListener('mouseleave',()=>tooltip.style.display='none');
  hit.addEventListener('focus',()=>{tooltip.textContent=s.name;tooltip.style.display='block';tooltip.style.left=x+'px';tooltip.style.top=(y-13)+'px'});
  hit.addEventListener('blur',()=>tooltip.style.display='none');
  if(tripRole==='hub')g.querySelectorAll('circle:not(.mapnode)').forEach(c=>{c.setAttribute('stroke',RR_UI_CSS_COLOR('--hub-faded'));c.setAttribute('fill',RR_UI_CSS_COLOR('--surface'))});   // solid faded ring, not transparency
  g.append(hit);layer.append(g);
  // Keep keyboard focus on the same station when the map redraws.
  if(focusedStation===s.name){rrPendingMapFocus=s.name;requestAnimationFrame(()=>{if(hit.isConnected){hit.focus({preventScroll:true});if(document.activeElement===hit)rrPendingMapFocus=null}})}
 }
 const byVisible=new Map(visible.map(v=>[v.name,v]));
 const priorities=currentStation?[currentStation]:[];
 for(const n of selectedNames)if(!priorities.includes(n))priorities.push(n);
 for(const n of LABELS)if(!priorities.includes(n))priorities.push(n);
 if(rrTrip){
  priorities.length=0;
  const add=n=>{if(n&&!priorities.includes(n))priorities.push(n)};
  rrTrip.key.forEach((_,n)=>add(n));rrTrip.changes.forEach(add);rrTrip.calls.forEach(add);
  for(const n of LABELS)add(n);
  for(let i=priorities.length-1;i>=0;i--)if(rrTrip.through.has(priorities[i]))priorities.splice(i,1);
 }else if(zoom>=1.30)for(const s of visible)if(!priorities.includes(s.name))priorities.push(s.name);
 // Avoid putting enlarged labels beneath the map legend or zoom controls.
 const mapBounds=container.getBoundingClientRect();
 const overlayRects=[...container.querySelectorAll('.map-legend,.zoom-control')]
  .map(el=>{const b=el.getBoundingClientRect();return {x:b.left-mapBounds.left,y:b.top-mapBounds.top,w:b.width,h:b.height}})
  .filter(r=>r.w>0&&r.h>0);
 const placed=[],segments=[];
 // During a trip only the trip's own line blocks names; the faded network behind it does not.
 const segEdges=rrTrip?selectedPath.slice(1).map((b,i)=>[selectedPath[i],b]):E;
 for(const [a,b] of segEdges){
  const pa=P[a],pb=P[b];
  const x1=pa[0]*sc+offX,y1=pa[1]*sc+offY,x2=pb[0]*sc+offX,y2=pb[1]*sc+offY;
  if(Math.max(x1,x2)<-20||Math.min(x1,x2)>W+20||Math.max(y1,y2)<-20||Math.min(y1,y2)>H+20)continue;
  segments.push([x1,y1,x2,y2]);
 }
 for(const name of priorities){
  const s=byVisible.get(name);if(!s)continue;
  const tripKey=!!rrTrip&&(rrTrip.key.has(name)||rrTrip.changes.has(name)),tripHub=!!rrTrip&&!rrTrip.calls.has(name)&&name!==currentStation;
  const important=rrTrip?tripKey:LABELS.includes(name);
  const mixedServiceInterchange=!!(selectedJourney&&selectedPath.length&&selectedSet.has(name)&&interchangeMarkers.get(name)?.colors.length>1);
  const minor=(!!byVisible.get(name)?.regio&&!important)||tripHub;
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
  const text=se('text',{x:textX,y:chosen.y+fontSize,'text-anchor':chosen.anchor,style:`font-size:${fontSize}px`,class:'label'+(important?' important':''),'pointer-events':'all'});
  const routeNameColor=selectedLabelColors.get(name);
  if(routeNameColor){
   text.style.fill=routeNameColor;
   if(mixedServiceInterchange){
    text.style.fontWeight='700';
    text.setAttribute('data-interchange-label','mixed');
   }
   text.setAttribute('data-route-label',selectedTrain&&passedStationNames.has(name)?'passed':'forthcoming');
  }
  if(tripHub)text.setAttribute('data-trip','hub');
  if(selectedTrain&&passedStationNames.has(name)&&name!==currentStation)text.setAttribute('data-trip','passed');
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
function fmtDuration(n){const h=Math.floor(n/60),m=n%60;return h?(m?`${h}h ${String(m).padStart(2,'0')}m`:`${h}h`):`${m} min`}
function timeMarkup(s){
 if(!/^\d{1,2}:\d{2}(\s*\+\d+)?$/.test(String(s)))return String(s);
 const total=rrShowMinutes(timeOrdinal(s)),day=Math.floor(total/1440),hm=rrMinutesToInput(total);   // shown in the visitor's time zone
 // Keep time and the day-offset together as one non-wrapping unit.
 return `<span class="time-value"><span class="time-primary">${hm}</span>${day?` <span class="day-offset">${day>0?'+':'−'}${Math.abs(day)}</span>`:''}</span>`;
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
 if(!journey)document.querySelector('.journey-results-head').hidden=true;
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
function rrTimeInputMinutes(v){const m=String(v||'').match(/^(\d{1,2}):(\d{2})/);return m?(+m[1])*60+(+m[2]):rrShowMinutes(RR_NOW)}
function rrMinutesToInput(n){n=((n%1440)+1440)%1440;return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0')}
function rrJourneyDate(){const v=$('journeyWhenDate').value,m=v.match(/^(\d{4})-(\d\d)-(\d\d)$/);return m?new Date(+m[1],+m[2]-1,+m[3],12):rrDay(0)}
function rrJourneyDayOffset(){return Math.max(0,Math.round((rrJourneyDate()-rrDay(0))/864e5))}
function rrJourneyDayLabel(extra){const off=rrJourneyDayOffset()+extra;return rrDayLabel(off)}
function rrSyncWhenTabs(){const v=$('journeyWhenMode').value;document.querySelectorAll('.rr-when-tab').forEach(b=>{const on=b.dataset.when===v;b.classList.toggle('active',on);b.setAttribute('aria-selected',on)})}
function rrSyncWhenDate(){rrSyncWhenTabs();$('journeyWhenDateLabel').textContent=rrJourneyDayOffset()===0?'Today':rrFmtDate(rrJourneyDate(),false)}
function rrJourneyWhen(){return{mode:$('journeyWhenMode').value,time:(rrToRadeland(rrTimeInputMinutes($('journeyWhenTime').value))%1440+1440)%1440}}   // the field is in the visitor's time
// Order journeys around the chosen time. Depart after: from that time on,
// wrapping into tomorrow. Arrive by: the latest arrivals before that time first.
function rrJourneyWindow(list){
 const {mode,time}=rrJourneyWhen();
 if(mode==='arrive'){
  // Only journeys that arrive on the day by that time (trains leaving after
  // midnight count too); earlier days are not shown.
  return list.map(j=>({j,back:j.arr<=time?time-j.arr:j.dep>=1440&&j.arr-1440<=time?time-(j.arr-1440):-1}))
   .filter(x=>x.back>=0).sort((a,b)=>a.back-b.back||b.j.dep-a.j.dep).map(x=>Object.assign(x.j,{whenTomorrow:false})).map(rrJourneyPlanned);
 }
 return list.map(j=>({j,rel:rrRelative(j.dep,time,0)}))
  .sort((a,b)=>a.rel-b.rel||a.j.change-b.j.change||a.j.arr-b.j.arr)
  .map(x=>Object.assign(x.j,{whenTomorrow:((rrShowMinutes(time)%1440+1440)%1440)+x.rel>=1440}))   // the visitor's midnight
  .map(rrJourneyPlanned);
}
// Live running is only known for today: journeys on another day show the plan.
function rrJourneyPlanned(j){j.liveLegs=j.liveLegs||j.legs;const planned=rrJourneyDayOffset()>0||j.whenTomorrow;
 j.legs=planned?j.liveLegs.map(l=>({...l,train:{...l.train,status:'On time',tomorrow:true}})):j.liveLegs;return j}
function renderJourneyResults(){
 // The form is a draft. Results always reflect the last Find trains action.
 const query=appliedJourneyQuery;
 const from=query?.from??$('from').value,to=query?.to??$('to').value;
 $('journeyFromName').textContent=from;$('journeyToName').textContent=to;
 document.querySelector('.journey-results-head').hidden=!query||!from||!to||from===to;   // the summary appears once a search has run
 board.replaceChildren();
 if(!query){
  $('journeyCount').textContent='';
  // nothing to show until a search has run
  return;
 }
 if(!from||!to){$('journeyCount').textContent='';board.innerHTML='<div class="empty">Choose a From and a To station.</div>';return}
 const onlyDirect=query.directOnly;
 const list=rrJourneyWindow(journeyResults.filter(j=>(!onlyDirect||j.change===0)&&(!query.highSpeedOnly||j.legs.every(l=>isHighSpeed(l.train)))));
 {const w=rrJourneyWhen(),off=rrJourneyDayOffset();$('journeyCount').innerHTML=`<span>${list.length} ${list.length===1?'journey':'journeys'}</span><span class="jr-sep">·</span><span>${w.mode==='arrive'?'Arrive by':'Depart after'}</span> <span class="jr-time">${rrMinutesToInput(rrShowMinutes(w.time))}</span><span class="jr-sep">·</span><span>${off===0?'Today':off===1?'Tomorrow':rrFmtDate(rrJourneyDate(),false)}</span>`}
 if(from===to){board.innerHTML='<div class="empty">Choose two different stations.</div>';return}
 if(!list.length){board.innerHTML=`<div class="empty">No ${query.highSpeedOnly?'high-speed ':''}${onlyDirect?'direct ':''}journeys found between these stations in the current timetable.</div>`;return}
 const arriveBy=rrJourneyWhen().mode==='arrive';
 const shown=arriveBy?list.slice(0,journeyShown).reverse():list.slice(0,journeyShown);
 if(arriveBy&&journeyShown<list.length){const more=document.createElement('button');more.type='button';more.className='journey-more journey-earlier';more.textContent='Show earlier journeys';more.addEventListener('click',()=>{journeyShown+=12;renderJourneyResults()});board.append(more)}
 let dividerShown=false;
 if(rrJourneyDayOffset()>0&&shown.length&&!shown[0].whenTomorrow){const d=document.createElement('div');d.className='rr-day-divider';d.textContent=rrJourneyDayLabel(0);board.append(d)}
 for(const j of shown){
  if(j.whenTomorrow&&!dividerShown){dividerShown=true;const d=document.createElement('div');d.className='rr-day-divider';d.textContent=rrJourneyDayLabel(1);board.append(d)}
  const el=document.createElement('button');el.type='button';el.className='journey-row'+(selectedJourney?.key===j.key?' selected':'');
  el.style.setProperty('--journey-color',rrCssServiceAccent(j.legs[0].train.type));
  const badges=j.legs.map(l=>`${rrBadge(l.train)}`).join('');
  const depMarkup=stopTimeMarkup(j.legs[0].train,j.legs[0].fromIdx),arrLast=j.legs[j.legs.length-1],arrMarkup=stopTimeMarkup(arrLast.train,arrLast.toIdx);
  el.innerHTML=`<div class="journey-times"><span class="journey-clock">${depMarkup}</span><span class="journey-line"></span><span class="journey-clock">${arrMarkup}</span></div><div class="journey-row-meta">${badges}<span class="duration">${fmtDuration(j.arr-j.dep)}</span><span class="change">${j.change?`${j.change} ${j.change===1?'change':'changes'}`:'Direct'}</span></div>${j.change?`<div class="journey-via">${j.legs.slice(0,-1).map((l,i)=>`Change at ${l.to} · ${j.legs[i+1].dep-l.arr} min`).join(' · ')}</div>`:''}`;
  el.addEventListener('click',()=>selectedJourney?.key===j.key?clear():chooseJourney(j));board.append(el);
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
function rrPlatformMarkup(p,old=''){return p?`<span class="jt-plat${old?' rr-plat-changed':''}" aria-label="Platform ${p}${old?`, changed from ${old}`:''}"${old?` title="Platform changed from ${old}"`:''}><span class="pl-long">Platform ${p}</span><span class="pl-short" aria-hidden="true">Pl. ${p}</span></span>`:'<span class="jt-plat"></span>'}
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
   <h3 class="jt-card-head">${rrBadge(t)}<span class="jt-service">${rrServiceLabel(t.type,t.network)}</span>${statusTag(stopStatus(t,leg.fromIdx))}</h3>${rrAlertMarkup(t,'rr-alert-banner rr-alert-leg')}
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
$('journeyWhenTime').value=rrMinutesToInput(rrShowMinutes(RR_NOW));
$('journeyWhenDate').value=$('journeyWhenDate').min=rrIsoDate(rrDay(0));rrSyncWhenDate();
$('journeyWhenDate').addEventListener('change',()=>{if(!$('journeyWhenDate').value||$('journeyWhenDate').value<$('journeyWhenDate').min)$('journeyWhenDate').value=$('journeyWhenDate').min;rrSyncWhenDate();rrJourneyWhenChanged()});
$('journeyWhenDate').addEventListener('click',e=>{try{e.target.showPicker()}catch(_){}});
function rrJourneyWhenChanged(){if(!appliedJourneyQuery)return;journeyShown=12;renderJourneyResults();board.scrollTop=rrJourneyWhen().mode==='arrive'?board.scrollHeight:0}
$('journeyWhenMode').addEventListener('change',()=>{rrSyncWhenTabs();rrJourneyWhenChanged()});
document.querySelectorAll('.rr-when-tab').forEach(b=>b.addEventListener('click',()=>{if($('journeyWhenMode').value===b.dataset.when)return;$('journeyWhenMode').value=b.dataset.when;$('journeyWhenMode').dispatchEvent(new Event('change'))}));
$('journeyWhenTime').addEventListener('change',()=>rrJourneyWhenChanged());
$('journeyWhenNow').addEventListener('click',()=>{$('journeyWhenMode').value='depart';$('journeyWhenDate').value=rrIsoDate(rrDay(0));rrSyncWhenDate();$('journeyWhenTime').value=rrMinutesToInput(rrShowMinutes(rrNowMinutes()));rrJourneyWhenChanged()});
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
 const key=rrDateKey(rrNow());RR_NOW=rrNowMinutes();
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
function rrSetFolded(is,persist=true){
 app.classList.toggle('folded',is);
 const control=$('collapse');
 const action=is?'Expand departures':'Collapse departures';
 control.setAttribute('aria-label',action);
 control.setAttribute('aria-expanded',String(!is));
 control.title=action+' ( [ )';
 if(persist){try{localStorage.setItem('rrSidebarFolded',is?'1':'0')}catch(e){}}
 setTimeout(resize,220);
}
$('collapse').onclick=()=>rrSetFolded(!app.classList.contains('folded'));
try{if(localStorage.getItem('rrSidebarFolded')==='1'&&!window.matchMedia('(max-width:750px)').matches)rrSetFolded(true,false)}catch(e){}
document.addEventListener('keydown',e=>{
 if(e.key!=='['||e.metaKey||e.ctrlKey||e.altKey)return;
 const t=e.target;if(t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)))return;
 e.preventDefault();rrSetFolded(!app.classList.contains('folded'));
});
$('closeDetail').onclick=()=>{app.classList.remove('detail-open');requestAnimationFrame(resize)};
const ro=new ResizeObserver(()=>resize());ro.observe(container);

/* v46: relocate the functional From/To planner under mobile timetable. */
const rrPlannerMobileQuery=window.matchMedia('(max-width:750px)');
const rrPlannerTools=document.querySelector('.map-tools');
function rrPlacePlanner(){
 const parent=document.getElementById('journeyPlannerSlot');   // the planner belongs to the Journeys tab on every screen size
 const actions=rrPlannerTools.querySelector('.map-actions')||document.querySelector('.map-actions');
 const actionsHome=document.getElementById('journeyActionsSlot');
 if(actions&&actionsHome&&actions.parentElement!==actionsHome)actionsHome.append(actions);
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
 'Regional Sprinter · 3-car low-floor EMU':'Régional omnibus · automotrice à plancher bas, 3 voitures',
 'Regional Sprinter · two coupled 3-car EMUs':'Régional omnibus · deux automotrices de 3 voitures en unités multiples',
 'Regional Express · 4-car double-deck EMU':'Régional express · automotrice à deux niveaux, 4 voitures',
 'Regional Express · 6-car double-deck EMU':'Régional express · automotrice à deux niveaux, 6 voitures',
 'Regional Express · two coupled 4-car double-deck EMUs':'Régional express · deux automotrices à deux niveaux de 4 voitures',
 'Stops at every station. Level boarding at all doors.':'Dessert toutes les gares. Accès de plain-pied à toutes les portes.',
 'Two RS3 units at busy times; you can walk through each unit but not between them.':'Deux unités RS3 aux heures chargées ; pas d’intercirculation entre les unités.',
 'Limited stops. First Class is on the upper deck of car 1.':'Arrêts limités. La Première classe se trouve à l’étage de la voiture 1.',
 'The usual RX train. First Class is on the upper deck of car 1.':'Composition RX habituelle. La Première classe se trouve à l’étage de la voiture 1.',
 'Two RX4D units at peak times; you cannot walk between the units, so check your car number.':'Deux unités RX4D aux heures de pointe ; pas d’intercirculation entre les unités : vérifiez votre numéro de voiture.',
 'Driving cab · multi-purpose area for bicycles, pushchairs and wheelchairs · priority seats':'Cabine de conduite · espace multifonction pour vélos, poussettes et fauteuils roulants · places prioritaires',
 'Level boarding · wheelchair spaces · accessible toilet · family area':'Accès de plain-pied · emplacements PMR · toilettes accessibles · espace famille',
 'Driving cab · multi-purpose area for bicycles and luggage':'Cabine de conduite · espace multifonction pour vélos et bagages',
 'Driving cab · First Class on the upper deck · multi-purpose area on the lower deck':'Cabine de conduite · Première classe à l’étage · espace multifonction en salle basse',
 'Quiet zone on the upper deck · power sockets':'Espace calme à l’étage · prises électriques',
 'Level boarding · wheelchair spaces · priority seats · accessible toilet':'Accès de plain-pied · emplacements PMR · places prioritaires · toilettes accessibles',
 'Driving cab · bicycle and luggage area on the lower deck · toilet':'Cabine de conduite · espace vélos et bagages en salle basse · toilettes',
 'Power sockets at every seat':'Prises électriques à chaque place',
 'Family area · priority seats':'Espace famille · places prioritaires',
 'Show more trains':'Afficher plus de trains',
 'Choose station':'Choisir une gare',
 'RR Regio Southern':'RR Régional Sud','RR Regio Cathian':'RR Régional Cathien','RR Regio Marenian':'RR Régional Marénien','RR Regio Frisian':'RR Régional Frison','RR Regio Sylvan':'RR Régional Sylvain','RR Regio Novanglian':'RR Régional Novanglien',
 'South Radeland':'Radeland-Sud','Southern':'Sud','Cathian':'cathien','Marenian':'marénien','Frisian':'frison','Sylvan':'sylvain','Novanglian':'novanglien',
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
 'Find trains':'Rechercher','Reset':'Effacer','From':'Départ','To':'Arrivée',
 'Direct only':'Trajets directs uniquement','High-speed only':'Grande vitesse uniquement',
 'Time':'Heure','Train':'Train','Destination':'Destination',
 'Origin':'Provenance','Platform':'Voie','Status':'État','Service':'Type de train','Help and services':'Aide et services','RR Services':'Services RR','Police':'Police','Mobility assistance':'Assistance PMR','First Class lounge':'Salon Première classe','Lost property':'Objets trouvés','Open 24 hours':'Ouvert 24 h/24','Closed':'Fermé','Daily':'Tous les jours','24 hours':'24 h/24','Mon–Fri':'Lun–ven','Saturday':'Samedi','Sunday':'Dimanche','Tickets, travel advice and help with your journey':'Billets, conseils et aide pour votre voyage','Run by the Federal Police':'Assuré par la Police fédérale','Help getting on and off trains':'Aide à la montée et à la descente des trains','For First Class ticket holders':'Réservé aux titulaires d’un billet de Première classe','Items found on trains and at the station':'Objets trouvés dans les trains et en gare','Food and drinks':'Restauration','Left luggage':'Consigne à bagages','Journey from here':'Trajet depuis cette gare','Journey to here':'Trajet vers cette gare','Choose a station':'Choisissez une gare','Major stations':'Grandes gares','Operator':'Transporteur','Services':'Services','Facilities':'Équipements','Choose a From and a To station.':'Choisissez une gare de départ et une gare d’arrivée.',
 'Departure':'Départ','Arrival':'Arrivée','Calling at':'Gares desservies',
 'On time':'À l’heure','Boarding':'À quai','Cancelled':'Supprimé',
 'Direct':'Direct','Departs':'Départ','Arrives':'Arrivée',
 'Show more journeys':'Afficher plus de trajets',
 'No departures.':'Aucun départ.','No arrivals.':'Aucune arrivée.',
 'Select a departure.':'Sélectionnez un départ.',
 'Select a train.':'Sélectionnez un train.',
 'Select a train to view details.':'Sélectionnez un train pour voir les détails.',
 'Select a journey to see train-specific facilities.':'Sélectionnez un trajet pour consulter les équipements à bord.',
 'Choose two different stations.':'Choisissez deux gares différentes.',
  'No matching stations':'Aucune gare trouvée',
 'Standard facilities':'Équipements et services',
 'Additional station facilities':'Services complémentaires',
 'Coach formation & on-board facilities':'Composition du train et services à bord',
 'Train formation':'Composition du train',
 'Standard':'Classe Standard','First Class':'Première classe',
 'First Class seats':'Places de première classe','First Sleeper':'Voiture-lits Première','First sleeper':'Voiture-lits Première',
 'Seated accommodation':'Voiture à places assises',
 'Dining':'Voiture-restaurant','Café':'Bar','Quiet Zone':'Espace calme',
 'Quiet zone':'Espace calme','Family Zone':'Espace famille','Family zone':'Espace famille',
 'Family':'Espace famille','Reserved seats':'Places réservées','Reserved Seats':'Places réservées',
 'Priority seats':'Places prioritaires','Priority Seating':'Places prioritaires',
 'Places for wheelchair users':'Emplacements pour fauteuils roulants',
 'Bicycle spaces':'Emplacements vélos','Power sockets':'Prises électriques',
 'Couchette':'Couchette','Sleeper':'Voiture-lits','Sleeper cabin':'Cabine-lit',
 'Shower':'Douche','Parent-and-child compartment':'Compartiment parents-enfants',
 'Locomotive':'Locomotive','Power car':'Motrice',
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
 'Tomorrow':'Demain','Today':'Aujourd’hui','Depart after':'Partir après','Arrive by':'Arriver avant','Now':'Maintenant','Search by':'Rechercher par',
 'Map':'Carte','Timetable':'Horaires',
 'Show earlier journeys':'Afficher les trajets précédents','Arriving':'À l’approche',
 'Sleeper cabins':'Cabines-lits','Night catering':'Restauration de nuit',
 'Standard accommodation':'Places en classe Standard',
 'Dining coach with restaurant seating':'Voiture-restaurant avec places assises',
 'Café counter':'Bar','Couchettes':'Couchettes',
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
const RR_DAYS_FR=['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
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
  .replace(/\b(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday), (\d\d\/\d\d\/\d{4})/g,(_,d,n)=>RR_DAYS_FR[RR_DAYS.indexOf(d)]+' '+n)
  .replace(/\b(Sun|Mon|Tue|Wed|Thu|Fri|Sat), (\d\d\/\d\d)\b/g,(_,d,n)=>RR_DAYS_FR[RR_DAYS.findIndex(x=>x.startsWith(d))].slice(0,3)+'. '+n)
  .replace(/^Tomorrow · /,'Demain · ').replace(/^Today · /,'Aujourd’hui · ')
  .replace(/^(\d+) departures a day$/,'$1 départs par jour').replace(/^1 departure a day$/,'1 départ par jour').replace(/^(\d+) platforms$/,'$1 voies')
  .replace(/^Open now · closes (\S+)$/,'Ouvert · ferme à $1').replace(/^Closed · opens tomorrow (\S+)$/,'Fermé · ouvre demain à $1').replace(/^Closed · opens (\d\d:\d\d)$/,'Fermé · ouvre à $1')
  .replace(/^Closed · opens (Sun|Mon|Tue|Wed|Thu|Fri|Sat) (\S+)$/,(_,d,t)=>'Fermé · ouvre '+RR_DAYS_FR[RR_DAYS.findIndex(x=>x.startsWith(d))]+' à '+t)
  .replace(/^Coach (\d+)$/,'Voiture $1')
  .replace(/^Platform (\S+)$/,'Voie $1')
  .replace(/^Pl\. (\S+)$/,'Voie $1')   // French keeps the full word: 'Voie 1' is already short; 'V.' is not standard
  .replace(/^Journey route$/,'Itinéraire du trajet')
  .replace(/^(\d+) coaches$/,'$1 voitures')
  .replace(/^Platform changed from (\S+)$/,'Voie modifiée (initialement $1)')
  .replace(/^Platform (\S+), changed from (\S+)$/,'Voie $1, initialement $2')
  .replace(/\bArrive platform (\S+)/g,'Voie d’arrivée : $1')
  .replace(/\bDepart platform (\S+)/g,'Voie de départ : $1')
  .replace(/\bBack to journey\b/g,'Retour au trajet')
  .replace(/\bBack to train ([\w -]+)/g,'Retour au train $1')
  .replace(/\bBack to ([A-Z]{1,5}\s*\d+)\b/g,'Retour au train $1')
  .replace(/\bStops between sections ([A-F]) and ([A-F])\b/g,'Arrêt entre les repères $1 et $2')
  .replace(/\bStops at section ([A-F])\b/g,'Arrêt au repère $1')
  .replace(/\bDay (\d+)\b/g,'Jour $1')
  .replace(/\bScheduled ([^;]+); revised (.+)/g,'Heure prévue : $1 ; heure estimée : $2')
  .replace(/\bShow departures at (.+)/g,'Afficher les départs de $1')
  .replace(/\bAppearance: (Light|Dark|System)\b/g,(_,v)=>'Apparence : '+rrFrenchExact[v])
  .replace(/\bLanguage: (English|Français)\b/g,(_,name)=>'Langue : '+name)
  .replace(/\b(\d+)h (\d{2})m\b/g,'$1 h $2')
  .replace(/\b(\d+)h\b/g,'$1 h')
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
 const fr=node.parentElement?.dataset?.rrFr;   // a context-specific French string wins over the shared dictionary
 const wanted=rrActiveLocale==='fr'?(fr??rrFrenchText(original)):original;
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
 // One RR Info logo for every language.
 const english=true, light='rr-info-long-light.svg', dark='rr-info-long-dark.svg';
 const brand=document.querySelector('.longmark');
 if(brand){
  for(const img of brand.querySelectorAll('img')){
   const file=img.classList.contains('logo-dark')?dark:light;
   const path='./assets/branding/'+file;
   if(img.getAttribute('src')!==path)img.setAttribute('src',path);
   img.alt='RR Info';
   img.width=257;img.height=90;
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
   #departures/<station>, #arrivals/<station>, #station/<station>, #train/<id>/<station>,
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
 const info=app.classList.contains('detail-open')&&detail.querySelector('.station-hero')?.dataset.station;
 if(info)return `#station/${e(info)}`;
 if(selectedTrain)return `#train/${e(selectedTrain.id)}/${e(currentStation)}`;
 if(!currentStation)return '';   // home has a clean address: the logo link
 return `#${viewMode==='arrivals'?'arrivals':'departures'}/${e(currentStation)}`;
}
function rrSyncHash(){
 if(rrApplyingHash)return;
 const h=rrStateHash();
 if(location.hash!==h)try{history.replaceState(null,'',h||location.pathname+location.search)}catch(_){}
}
function rrApplyHash(){
 let parts;try{parts=location.hash.replace(/^#/,'').split('/').map(decodeURIComponent)}catch(_){return}
 const [kind,a,b,c,d]=parts;if(!kind)return;
 rrApplyingHash=true;
 try{
  if((kind==='departures'||kind==='arrivals')&&S.has(a)){viewMode=kind;setCurrentStation(a)}
  else if(kind==='station'&&S.has(a)){viewMode='departures';setCurrentStation(a);fillStationInfo(a)}
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
   if(m&&+m[2]<24&&+m[3]<60){$('journeyWhenMode').value=m[1]==='arr'?'arrive':'depart';rrSyncWhenTabs();$('journeyWhenTime').value=rrMinutesToInput(rrShowMinutes(+m[2]*60+(+m[3])))}
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
