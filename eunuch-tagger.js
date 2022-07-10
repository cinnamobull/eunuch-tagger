(function () {
    'use strict';

    // 使用沙盒模式只能自己穿透注入xhook，否则xhook无法初始化
    if (!unsafeWindow.xhook) {
        const xhookScriptEl = document.createElement('script');
        xhookScriptEl.type = 'text/javascript';
        xhookScriptEl.src = 'https://unpkg.com/xhook@1.4.9/dist/xhook.min.js';

        // script 标签加载完成后添加钩子
        xhookScriptEl.onload = () => {
            addXHRHooks();
        }
        unsafeWindow.document.head.appendChild(xhookScriptEl);
    } else {
        // 如果其他插件注入了脚本就不用自己插入了
        addXHRHooks();
    }

    var eunuchList = [6203, 12034, 47537, 53205, 63188, 79669, 96353, 99322, 131246, 443691, 479962, 608676, 760214, 828987, 1604442, 1734797, 2288191, 3376629, 3897000, 4043958, 4081521, 4348451, 4599697, 4657135, 4941537, 5181978, 5657077, 5724717, 7001435, 7063520, 7115927, 7560353, 7645009, 7796923, 8317527, 8350379, 8686985, 8961353, 9623308, 10085804, 10136834, 10196494, 10291163, 10927590, 11529024, 11705419, 11810907, 12170558, 12313634, 12751010, 13606645, 13942162, 15611019, 16527816, 17456235, 19886747, 20403390, 21539690, 21552268, 21642548, 22467187, 23156775, 23313914, 23725348, 24161189, 24408670, 25630237, 25637342, 25694263, 26982592, 27543674, 29639617, 30703137, 31939066, 34704280, 34711222, 34762827, 34832452, 35206599, 36425969, 36633803, 37428260, 39099322, 39238428, 39377047, 43640115, 53883402, 55014069, 59920238, 62977316, 65168291, 66996433, 74216133, 74223427, 81794200, 88467544, 91122235, 91392221, 94822778, 102286732, 102488992, 106322132, 128883830, 131296174, 148668528, 152281160, 156305480, 158696653, 161851549, 168847493, 171428761, 177770910, 180847402, 183830504, 189087587, 201698680, 228248853, 230180514, 252037666, 258850184, 259851861, 259966897, 263839510, 263865603, 270372008, 279203225, 283390468, 286920768, 287054639, 287461327, 288596720, 289056725, 295539533, 311473835, 314904804, 314904873, 326227329, 326983127, 331240133, 336784363, 348059155, 351927469, 362519718, 367475654, 369153349, 372331711, 379356351, 385424359, 386426185, 393695495, 393796674, 399105580, 399593269, 400092968, 400693560, 403478871, 407415932, 407558680, 413194726, 416102643, 416792565, 421774624, 424765200, 432350965, 434191288, 437274579, 438227494, 439118578, 439717026, 440898132, 442288292, 448758854, 456165754, 456558447, 457870337, 470104036, 476082943, 481332418, 481389045, 482147959, 484706966, 486190888, 486903753, 490127097, 491475897, 503255316, 503655684, 510859320, 515896173, 524089785, 525024148, 535183289, 539727473, 543740090, 544918551, 557647226, 589725549, 603121845, 628329428, 631781298, 635845775, 651343028, 660513317, 671148097, 674678449, 675130522, 678406436, 678813990, 679603714, 697651991, 1003260863, 1005041279, 1008414018, 1014352496, 1017680120, 1024075450, 1030175169, 1031897555, 1046395067, 1049469248, 1051537652, 1060719559, 1063221326, 1094303149, 1101366872, 1125446384, 1162595137, 1163171909, 1172042877, 1188344763, 1197229058, 1201586866, 1203290281, 1209757039, 1226938749, 1268071187, 1270263608, 1275775027, 1287729757, 1294714344, 1297561297, 1311157064, 1312853575, 1315533492, 1321142481, 1333320692, 1346649458, 1352457979, 1387847433, 1388454660, 1410400912, 1425163160, 1428339326, 1443844522, 1474491041, 1479169313, 1486527543, 1497153993, 1508202413, 1511634471, 1529814632, 1541411420, 1551541336, 1577110770, 1578676347, 1580367101, 1609646451, 1649357995, 1658455796, 1663722445, 1673300055, 1679033118, 1689934062, 1693728348, 1704234121, 1704276716, 1719530738, 1738930096, 1739364222, 1742004147, 1780776063, 1785950067, 1790580530, 1791404676, 1791820352, 1791927792, 1795428091, 1804289394, 1808987493, 1814656047, 1823187026, 1849764278, 1870237644, 1884443901, 1886215198, 1891226432, 1899277184, 1901766794, 1927833550, 1927880859, 1933659658, 1934917694, 1944964664, 1951528780, 1958452537, 1975656941, 1981847511, 1982141116, 2001389957, 2008569783, 2012804860, 2020506401, 2033652543, 2047721918, 2053970655, 2081048319, 2083290722, 2093075437, 2095165744, 2108758078, 2128830845, 2131214205, 2134268078, 2140228954, 2146482713, 3461562945768260, 3461562945768268];
    var eunuchAvatar = "https://s2.loli.net/2022/07/10/LcniJT8ACRdyt69.png";
    // GM_setValue('eunuchList', eunuchList)

    function injectDynamicItem(item) {
        const uid = item?.modules?.module_author?.mid;

        if (uid == 33605910) {
            item.modules.module_author.name = "33老公";
            return;
        }

        if (!eunuchList.includes(uid)) return;

        item.modules.module_author.face = eunuchAvatar;
        item.modules.module_author.name = "太监 - " + item.modules.module_author.name;
    }

    function addXHRHooks() {
        // 动态直接通过 Hook XHR 响应完成
        unsafeWindow.xhook.after(function (request, response) {
            if (request.url.includes('//api.bilibili.com/x/polymer/web-dynamic/v1/detail')) {
                if (request.url.includes('timezone_offset')) {
                    // 动态详情页
                    let response_json = JSON.parse(response.text);
                    injectDynamicItem(response_json?.data?.item);
                    response.text = JSON.stringify(response_json);
                }
            } else if (
                request.url.includes('//api.bilibili.com/x/polymer/web-dynamic/v1/feed/space') ||
                request.url.includes('//api.bilibili.com/x/polymer/web-dynamic/v1/feed/all')
            ) {
                // 主时间线和个人主页
                let response_json = JSON.parse(response.text);
                for (let i in response_json.data.items) {
                    injectDynamicItem(response_json.data.items[i]);
                }
                response.text = JSON.stringify(response_json);
            } else if (request.url.includes('//app.bilibili.com/x/topic/web/details/cards')) {
                // 话题页
                let response_json = JSON.parse(response.text);
                for (let i in response_json.data.topic_card_list.items) {
                    let item = response_json.data.topic_card_list.items[i]
                    if (item.topic_type == 'DYNAMIC') {
                        injectDynamicItem(item.dynamic_card_item);
                    }
                }
                response.text = JSON.stringify(response_json);
            }
        });
    }

    function modifyUserName(replies) {
        replies = replies ?? [];
        for (let i = 0; i < replies.length; i++) {
            const memberData = replies[i]?.member;
            if (!memberData) continue;
            if (eunuchList.includes(+memberData.mid)) {
                memberData.uname = "太监 - " + memberData.uname;
                memberData.avatar = eunuchAvatar;
            }
            if (memberData.mid == 33605910) {
                memberData.uname = "33老公";
            }
        }
    }

    const jsonpMutation = new MutationObserver((mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === 'childList') {
                if (mutation.addedNodes.length > 0) {
                    for (const node of mutation.addedNodes) {
                        if (node.localName === 'script' && node.src.includes('//api.bilibili.com/x/v2/reply/main')) {
                            const callbackName = node.src.match(/callback=(.*?)&/)[1];
                            const originFunc = unsafeWindow[callbackName];
                            unsafeWindow[callbackName] = (value) => {
                                modifyUserName(value.data.replies);
                                originFunc(value);
                            }
                        }
                    }
                }
            }
        }
    });
    jsonpMutation.observe(unsafeWindow.document.head, { childList: true, subtree: true });
})();