// from https://github.com/aqiu384/aqiu384.github.io/blob/master/p5-tool/js/full_skills.js
var skillMap = {
    "Absorb Bless": {
        "effect": "Absorb Bless attacks.",
        "element": "passive",
        "personas": {
            "西布莉": 77
        }
    },
    "Absorb Curse": {
        "effect": "Absorb Curse attacks.",
        "element": "passive",
        "personas": {
            "阿提斯": 86,
            "ツキヨミ": 0,
            "ツキヨミ 贼神": 0
        }
    },
    "Absorb Elec": {
        "effect": "Absorb Electric attacks.",
        "element": "passive",
        "personas": {}
    },
    "Absorb Fire": {
        "effect": "Absorb Fire attacks.",
        "element": "passive",
        "personas": {
            "摩洛": 64
        }
    },
    "Absorb Ice": {
        "effect": "Absorb Ice attacks.",
        "element": "passive",
        "personas": {
            "撒旦": 98
        }
    },
    "Absorb Nuke": {
        "effect": "Absorb Nuclear attacks.",
        "element": "passive",
        "personas": {
            "迦梨": 82
        }
    },
    "Absorb Phys": {
        "effect": "Absorb Phys attacks.",
        "element": "passive",
        "personas": {
            "阿巴顿": 79,
            "路西法": 99,
            "メサイア": 85
        }
    },
    "Absorb Psy": {
        "effect": "Absorb Psy attacks.",
        "element": "passive",
        "personas": {
            "蚩尤": 90
        }
    },
    "Absorb Wind": {
        "effect": "Absorb Wind attacks.",
        "element": "passive",
        "personas": {
            "伊丝塔": 0
        }
    },
    "Adverse Resolve": {
        "effect": "Increase critical rate when being ambushed.",
        "element": "passive",
        "personas": {
            "亚森": 7,
            "持国天": 31,
            "罗刹": 30,
            "拉斐尔": 82,
            "塔纳托斯 贼神": 73,
            "八岐大蛇": 67
        },
        "talk": "罗刹"
    },
    "Agi": {
        "cost": 400,
        "effect": "Deal weak Fire damage to 1 foe.",
        "element": "fire",
        "personas": {
            "花魄": 0,
            "杰克灯笼": 0,
            "阴摩罗鬼": 13,
            "女梦魇": 8
        },
        "talk": "杰克灯笼"
    },
    "Agidyne": {
        "cost": 1200,
        "effect": "Deal heavy Fire damage to 1 foe.",
        "element": "fire",
        "fuse": ["克鲁贝洛斯", "俄耳甫斯 贼神"],
        "personas": {
            "巴风特": 0,
            "贝利亚": 0,
            "克鲁贝洛斯": 0,
            "大帝的护符": 0,
            "摩陀": 0,
            "摩洛": 62,
            "俄耳甫斯 贼神": 32,
            "妖精女王": 48,
            "赛特": 0,
            "斯尔特": 0,
            "八咫鸟": 0
        },
        "talk": "贝利亚"
    },
    "Agilao": {
        "cost": 800,
        "effect": "Deal medium Fire damage to 1 foe.",
        "element": "fire",
        "fuse": "花魄",
        "personas": {
            "单卡拉比": 0,
            "地狱天使": 0,
            "伊西丝": 0,
            "拉弥亚": 0,
            "俄耳甫斯": 0,
            "欧特鲁斯": 0,
            "命运之石": 0
        },
        "talk": "花魄"
    },
    "Agneyastra": {
        "cost": 24,
        "effect": "Deal 1 to 3 times medium Phys damage to all foes.",
        "element": "phys",
        "fuse": "阿尔达",
        "personas": {
            "阿尔达": 87,
            "メサイア 贼神": 0,
            "隐形鬼": 81
        }
    },
    "Ailment Boost": {
        "effect": "Increase chance of inflicting all ailments.",
        "element": "passive",
        "personas": {
            "狄俄尼索斯": 63,
            "白骑士": 45
        },
        "talk": "狄俄尼索斯"
    },
    "Ali Dance": {
        "effect": "Half hit rate of all incoming attacks.",
        "element": "passive",
        "personas": {
            "经津主": 0,
            "加百列": 79,
            "毗湿奴": 0
        }
    },
    "Almighty Amp": {
        "effect": "Strengthen Almighty attacks by 50%.",
        "element": "passive",
        "personas": {},
        "note": "Available from Network Fusion"
    },
    "Almighty Boost": {
        "effect": "Strengthen Almighty attacks by 25%.",
        "element": "passive",
        "personas": {
            "メサイア": 87,
            "メサイア 贼神": 96
        },
        "note": "Also available from Network Fusion"
    },
    "Ambient Aid": {
        "effect": "Greatly increase inflicting rate of all status effects under rainy day or special weather warning.",
        "element": "passive",
        "personas": {
            "黑软泥怪": 31,
            "黑骑士": 60,
            "天蛾人": 36,
            "纳西瑟斯": 55,
            "帕祖祖": 45,
            "山灵": 20
        }
    },
    "Amrita Drop": {
        "cost": 600,
        "effect": "Cure all ailments of 1 ally except for unique status.",
        "element": "healing",
        "fuse": "青龙",
        "personas": {
            "福图纳": 50,
            "默基瑟德": 65,
            "诺伦": 55,
            "青龙": 66
        }
    },
    "Amrita Shower": {
        "cost": 1200,
        "effect": "Cure all ailments of party except for unique status.",
        "element": "healing",
        "personas": {
            "狄俄尼索斯": 66,
            "迦楼罗": 0,
            "辉夜": 18,
            "辉夜 贼神": 27,
            "奇稻田姬": 47,
            "吉祥天": 72,
            "摩陀": 88,
            "圣达芬": 0,
            "斯拉欧加": 84
        },
        "talk": "斯卡哈"
    },
    "Angelic Grace": {
        "effect": "Double evasion against Fire/Ice/Elec/Wind/Nuke/Psy/Bless/Curse attacks.",
        "element": "passive",
        "fuse": "圣达芬",
        "personas": {
            "圣达芬": 77,
            "斯拉欧加": 83,
            "尤利尔": 85
        }
    },
    "Apt Pupil": {
        "effect": "Increase critical rate.",
        "element": "passive",
        "personas": {
            "安德拉斯": 13,
            "アリアドネ": 0,
            "アリアドネ 贼神": 0,
            "双角兽": 8,
            "经津主": 80,
            "山灵": 22
        },
        "talk": "安德拉斯"
    },
    "Arms Master": {
        "effect": "Half HP cost for physical skills.",
        "element": "passive",
        "fuse": "蚩尤",
        "personas": {
            "隐形鬼": 77,
            "拉斐尔": 83,
            "ツキヨミ": 56
        }
    },
    "Assault Dive": {
        "cost": 13,
        "effect": "Deal heavy Phys damage to 1 foe.",
        "element": "phys",
        "personas": {
            "安祖": 27,
            "佛劳洛斯": 29,
            "广目天": 0,
            "鵺": 25,
            "建御名方": 0,
            "独角兽": 0
        },
        "talk": "建御名方"
    },
    "Atomic Flare": {
        "cost": 4800,
        "effect": "Deal severe Nuclear damage to 1 foe.",
        "element": "nuclear",
        "personas": {
            "阿修罗王": 0
        }
    },
    "Attack Master": {
        "effect": "Automatic Tarukaja at the start of battle.",
        "element": "passive",
        "personas": {
            "アリアドネ": 31,
            "广目天": 51,
            "祸津伊邪纳岐": 48,
            "斯卡哈": 49,
            "托尔": 70,
            "女武神": 45,
            "母夜叉": 23,
            "增长天": 36
        }
    },
    "Auto-Maraku": {
        "effect": "Automatic Marakukaja at the start of battle. (Overwrites Defense Master)",
        "element": "passive",
        "personas": {
            "西布莉": 76,
            "希望钻石": 0,
            "座天使": 76
        }
    },
    "Auto-Masuku": {
        "effect": "Automatic Masukukaja at the start of battle. (Overwrites Speed Master)",
        "element": "passive",
        "personas": {
            "阿尔达": 88,
            "アステリオス 贼神": 63,
            "希望钻石": 0
        }
    },
    "Auto-Mataru": {
        "effect": "Automatic Matarukaja at the start of battle. (Overwrites Attack Master)",
        "element": "passive",
        "personas": {
            "アリアドネ 贼神": 43,
            "アステリオス": 57,
            "阿修罗王": 78,
            "巴古斯": 51,
            "希望钻石": 0,
            "霜精之王": 64,
            "湿婆": 87,
            "齐格菲": 72
        },
        fuse: "アリアドネ 贼神"
    },
    "Bad Beat": {
        "cost": 21,
        "effect": "Deal medium Phys damage and inflict Despair (low odds) to all foes.",
        "element": "phys",
        "fuse": "黑骑士",
        "personas": {
            "茶枳尼": 0,
            "金鬼": 30,
            "帕祖祖": 47
        }
    },
    "Baisudi": {
        "cost": 400,
        "effect": "Cure Burn/Freeze/Shock of 1 ally.",
        "element": "healing",
        "fuse": "天使",
        "personas": {
            "阿珈席翁": 0,
            "天使": 14,
            "杰克霜精": 0,
            "和魂": 0
        }
    },
    "Abysmal Surge": {
        "cost": 1200,
        "effect": "Inflict Despair (medium odds) to all foes.",
        "element": "ailment",
        "personas": {
            "阿难陀": 45,
            "荒霸吐": 0,
            "狄俄尼索斯": 0,
            "苍白骑士": 0,
            "毕舍遮": 32,
            "吹号者": 0,
            "藏王权现": 0
        },
        "talk": "荒霸吐"
    },
    "Black Viper": {
        "cost": 4800,
        "effect": "Deal severe Almighty damage to 1 foe.",
        "element": "almighty",
        "personas": {
            "撒旦": 94
        },
        "unique": "撒旦"
    },
    "Bless Amp": {
        "effect": "Strengthen (non instant death) Bless attacks by 50%.",
        "element": "passive",
        "personas": {
            "西布莉": 74,
            "梅塔特隆": 94,
            "座天使": 74
        }
    },
    "Bless Boost": {
        "effect": "Strengthen (non instant death) Bless attacks by 25%.",
        "element": "passive",
        "personas": {
            "大僧正": 44,
            "密特拉": 36,
            "权天使": 34
        }
    },
    "Nocturnal Flash": {
        "cost": 1200,
        "effect": "Inflict Dizzy (medium odds) to all foes.",
        "element": "ailment",
        "personas": {
            "主天使": 0,
            "诃梨帝母": 42,
            "纳西瑟斯": 0,
            "诺伦": 0
        },
        "talk": "纳西瑟斯"
    },
    "Bloodbath": {
        "cost": 19,
        "effect": "Deal heavy Phys damage and inflict Fear (low odds) to all foes.",
        "element": "phys",
        "fuse": "兰达",
        "personas": {
            "黑骑士": 61,
            "切尔诺伯格": 0,
            "祸津伊邪纳岐": 46,
            "祸津伊邪纳岐 贼神": 50,
            "兰达": 0,
            "尤利尔": 0
        },
        "talk": "切尔诺伯格"
    },
    "Life Drain": {
        "cost": 300,
        "effect": "Drains HP from 1 foe.",
        "element": "almighty",
        "personas": {
            "克伦佐": 0,
            "男梦魇": 0,
            "恶灵军团": 0,
            "ツキヨミ": 0
        },
        "talk": "男梦魇"
    },
    "Brain Buster": {
        "cost": 21,
        "effect": "Deal heavy Phys damage and inflict Brainwash (low odds) to all foes.",
        "element": "phys",
        "personas": {
            "鞍马天狗": 0,
            "吹号者": 0
        },
        "talk": "鞍马天狗"
    },
    "Brain Jack": {
        "cost": 1200,
        "effect": "Inflict Brainwash (medium odds) to all foes.",
        "element": "ailment",
        "personas": {
            "黑软泥怪": 34,
            "奥伯隆": 0,
            "婆苏古": 0,
            "虹蛇": 0
        }
    },
    "Brain Shake": {
        "cost": 9,
        "effect": "Deal medium Phys damage and inflict Brainwash (medium odds) to 1 foe.",
        "element": "phys",
        "fuse": "犬神",
        "personas": {
            "犬神": 18,
            "苍白骑士": 0
        },
        "talk": "犬神"
    },
    "Brainwash Boost": {
        "effect": "Increase chance of inflicting Brainwash.",
        "element": "passive",
        "personas": {
            "女梦魇": 11,
            "婆苏古": 72
        },
        "talk": "女梦魇"
    },
    "Brave Blade": {
        "cost": 24,
        "effect": "Deal grave Phys damage to 1 foe.",
        "element": "phys",
        "fuse": "经津主",
        "personas": {
            "经津主": 82,
            "义经": 0
        }
    },
    "Bufu": {
        "cost": 400,
        "effect": "Deal weak Ice damage to 1 foe.",
        "element": "ice",
        "fuse": "克鲁波克鲁",
        "personas": {
            "安德拉斯": 0,
            "飞天": 0,
            "玄武": 0,
            "杰克霜精": 0,
            "克鲁波克鲁": 0,
            "奇魂": 0,
            "幸魂": 0,
            "希路奇": 0
        },
        "talk": "杰克霜精"
    },
    "Bufudyne": {
        "cost": 1200,
        "effect": "Deal heavy Ice damage to 1 foe.",
        "element": "ice",
        "personas": {
            "巴风特": 59,
            "白虎": 55,
            "大帝的护符": 0,
            "霜精之王": 0,
            "吉祥天": 0,
            "青龙": 0,
            "丝卡蒂": 58
        },
        "talk": "霜精之王"
    },
    "Bufula": {
        "cost": 800,
        "effect": "Deal medium Ice damage to 1 foe.",
        "element": "ice",
        "personas": {
            "天钿女命": 0,
            "贝尔芬格": 0,
            "拉克西斯": 0,
            "莉莉姆": 0,
            "命运之石": 0,
            "水鬼": 0
        },
        "talk": "贝尔芬格"
    },
    "Burn Boost": {
        "effect": "Increase chance of inflicting Burn.",
        "element": "passive",
        "fuse": "欧特鲁斯",
        "personas": {
            "アステリオス": 0,
            "アステリオス 贼神": 0,
            "巴风特": 0,
            "花魄": 15,
            "摩陀": 0,
            "欧特鲁斯": 22
        }
    },
    "Cadenza": {
        "cost": 2400,
        "effect": "Restore 50% HP of party and increase evasion rate.",
        "element": "healing",
        "personas": {
            "俄耳甫斯": 0,
            "俄耳甫斯 贼神": 0
        },
        "unique": "俄耳甫斯"
    },
    "Cleave": {
        "cost": 6,
        "effect": "Deal weak Phys damage to 1 foe.",
        "element": "phys",
        "fuse": "比列",
        "personas": {
            "亚森": 2,
            "比列": 0
        },
        "talk": "比列"
    },
    "Life Aid": {
        "effect": "Recover 8% HP and SP after a successful battle.",
        "element": "passive",
        "fuse": "吉祥天",
        "personas": {
            "黄龙": 78,
            "吉祥天": 74,
            "メサイア 贼神": 93,
            "吹号者": 64
        }
    },
    "Cosmic Flare": {
        "cost": 5400,
        "effect": "Deal severe Nuclear damage to all foes.",
        "element": "nuclear",
        "personas": {
            "阿尔达": 0,
            "米迦勒": 92,
            "撒旦耶尔": 96
        }
    },
    "Counter": {
        "effect": "10% chance of reflecting Phys attacks.",
        "element": "passive",
        "fuse": "瑟斯特",
        "personas": {
            "一本踏鞴": 18,
            "持国天": 28,
            "鬼": 0,
            "瑟斯特": 0,
            "母夜叉": 0
        }
    },
    "Counterstrike": {
        "effect": "15% chance of reflecting Phys attacks.",
        "element": "passive",
        "personas": {
            "白虎": 0,
            "辉夜": 0,
            "金鬼": 31,
            "欧赛": 0,
            "罗刹": 28,
            "兰达": 0,
            "女武神": 0
        },
        "talk": "女武神"
    },
    "Cross Slash": {
        "cost": 20,
        "dlc": true,
        "effect": "Deal 2 times heavy Phys damage to 1 foe. High accuracy.",
        "element": "phys",
        "personas": {
            "伊邪纳岐": 0,
            "伊邪纳岐 贼神": 0
        },
        "unique": "伊邪纳岐"
    },
    "Curse Amp": {
        "effect": "Strengthen (non instant death) Curse attacks by 50%.",
        "element": "passive",
        "personas": {
            "别西卜": 85,
            "奈比洛斯": 65,
            "塔纳托斯": 66,
            "ツキヨミ": 53,
            "ツキヨミ 贼神": 58
        }
    },
    "Curse Boost": {
        "effect": "Strengthen (non instant death) Curse attacks by 25%.",
        "element": "passive",
        "personas": {
            "克伦佐": 32,
            "鵺": 26,
            "苍白骑士": 55
        }
    },
    "Sword Dance": {
        "cost": 21,
        "effect": "Deal grave Phys damage to 1 foe.",
        "element": "phys",
        "personas": {
            "梅塔特隆": 0,
            "米迦勒": 89,
            "拉斐尔": 0,
            "圣达芬": 79
        }
    },
    "Dazzler": {
        "cost": 500,
        "effect": "Inflict Dizzy (high odds) to 1 foe.",
        "element": "ailment",
        "fuse": "大天使",
        "personas": {
            "天使": 0,
            "大天使": 0,
            "杰克灯笼": 5,
            "恶灵": 0,
            "娜迦": 27
        }
    },
    "Deadly Fury": {
        "cost": 18,
        "effect": "Deal severe Phys damage to 1 foe. More powerful under Baton Pass .",
        "element": "phys",
        "fuse": "切尔诺伯格",
        "personas": {
            "昆沙门天": 68,
            "切尔诺伯格": 0,
            "库夫林": 0,
            "广目天": 55
        }
    },
    "Deathbound": {
        "cost": 22,
        "effect": "Deal 1 to 2 times medium Phys damage to all foes.",
        "element": "phys",
        "fuse": "茶枳尼",
        "personas": {
            "阿巴顿": 0,
            "切尔诺伯格": 64,
            "茶枳尼": 53,
            "哈奴曼": 65,
            "苍白骑士": 58,
            "尤利尔": 0,
            "女武神": 46,
            "八岐大蛇": 0
        }
    },
    "Debilitate": {
        "cost": 3000,
        "effect": "Decrease 1 foe's Attack, Defense and Agility for 3 turns.",
        "element": "support",
        "fuse": "吹号者",
        "personas": {
            "米迦勒": 0,
            "巴比伦大荡妇": 85,
            "斯拉欧加": 85,
            "吹号者": 65
        }
    },
    "Defense Master": {
        "effect": "Automatic Rakukaja at the start of battle.",
        "element": "passive",
        "personas": {
            "阿难陀": 0,
            "荒霸吐": 39,
            "玄武": 12,
            "持国天": 0,
            "猫将军": 34,
            "建御名方": 32
        }
    },
    "Dekaja": {
        "cost": 1000,
        "effect": "Negate all -kaja buff effects of all foes.",
        "element": "support",
        "fuse": "安祖",
        "personas": {
            "安祖": 28,
            "佛劳洛斯": 0,
            "鸠槃荼": 45,
            "背负怪": 12,
            "欧若博司": 0,
            "拉斐尔": 0,
            "妙音天女": 52,
            "式王子": 24,
            "女梦魇": 10
        }
    },
    "Dekunda": {
        "cost": 1000,
        "effect": "Negate all -nda debuff effects of party.",
        "element": "support",
        "fuse": "恶灵",
        "personas": {
            "爱丽丝": 0,
            "天使": 17,
            "阿努比斯": 40,
            "库夫林": 70,
            "持国天": 27,
            "密特拉": 35,
            "恶灵": 14,
            "独角兽": 0,
            "八咫鸟": 0
        }
    },
    "Devil Smile": {
        "cost": 1200,
        "effect": "Inflict Fear (medium odds) to all foes.",
        "element": "ailment",
        "personas": {
            "别西卜": 0,
            "单卡拉比": 37,
            "莉莉姆": 0,
            "摩洛": 0,
            "帕祖祖": 46
        },
        "talk": "单卡拉比"
    },
    "Evil Touch": {
        "cost": 500,
        "effect": "Inflict Fear (high odds) to 1 foe.",
        "element": "ailment",
        "personas": {
            "黑软泥怪": 0,
            "男梦魇": 0,
            "木灵": 13,
            "猫怪": 0,
            "丝卡蒂": 0,
            "软泥怪": 0,
            "白骑士": 0
        },
        "talk": "黑软泥怪"
    },
    "Dia": {
        "cost": 300,
        "effect": "Slightly restore 1 ally's HP.",
        "element": "healing",
        "fuse": "皮克希",
        "personas": {
            "阿珈席翁": 0,
            "天使": 0,
            "皮克希": 0,
            "希路奇": 7
        },
        "talk": "皮克希"
    },
    "Diamond Dust": {
        "cost": 4800,
        "effect": "Deal severe Ice damage to 1 foe.",
        "element": "ice",
        "personas": {
            "邪恶霜精": 72,
            "撒旦": 0
        }
    },
    "Diarahan": {
        "cost": 1800,
        "effect": "Fully restore 1 ally's HP.",
        "element": "healing",
        "fuse": ["诺伦", "辉夜 贼神"],
        "personas": {
            "昆沙门天": 0,
            "大僧正": 45,
            "辉夜": 21,
            "辉夜 贼神": 30,
            "吉祥天": 0,
            "诺伦": 54,
            "帕尔瓦蒂": 58,
            "妙音天女": 54,
            "青龙": 0
        },
        "talk": "诺伦"
    },
    "Diarama": {
        "cost": 600,
        "effect": "Moderately restore 1 ally's HP.",
        "element": "healing",
        "fuse": "高等皮克希",
        "personas": {
            "天钿女命": 0,
            "凤凰": 23,
            "高等皮克希": 18,
            "荷鲁斯": 0,
            "伊西丝": 0,
            "密特拉": 0,
            "猫将军": 0,
            "帕尔瓦蒂": 0,
            "能天使": 44
        },
        "talk": "高等皮克希"
    },
    "Die For Me!": {
        "cost": 4400,
        "effect": "High chance of instantly killing all foes.",
        "element": "curse",
        "personas": {
            "爱丽丝": 81
        },
        "unique": "爱丽丝"
    },
    "Despair Boost": {
        "effect": "Increase chance of inflicting Despair.",
        "element": "passive",
        "fuse": "拉弥亚",
        "personas": {
            "拉弥亚": 31,
            "毕舍遮": 33
        }
    },
    "Divine Grace": {
        "effect": "Effects of healing magic are increased by 50%.",
        "element": "passive",
        "fuse": "菊理媛",
        "personas": {
            "天钿女命": 32,
            "辉夜": 17,
            "辉夜 贼神": 26,
            "菊理媛": 45,
            "和魂": 22
        }
    },
    "Divine 审判": {
        "cost": 4800,
        "effect": "Half remaining HP of 1 foe.",
        "element": "bless",
        "personas": {
            "加百列": 78,
            "梅塔特隆": 95,
            "米迦勒": 0
        }
    },
    "Dizzy Boost": {
        "effect": "Increase chance of inflicting Dizzy.",
        "element": "passive",
        "personas": {
            "诃梨帝母": 45,
            "纳西瑟斯": 53
        }
    },
    "Dodge Bless": {
        "effect": "Double evasion rate against (non instant death) Bless attacks.",
        "element": "passive",
        "personas": {
            "柯·伊·诺尔": 0,
            "莉莉姆": 35
        }
    },
    "Dodge Curse": {
        "effect": "Double evasion rate against (non instant death) Curse attacks.",
        "element": "passive",
        "personas": {
            "天使": 15,
            "男梦魇": 9,
            "柯·伊·诺尔": 0,
            "狮爷": 20
        }
    },
    "Dodge Elec": {
        "effect": "Double evasion rate against Electric attacks.",
        "element": "passive",
        "personas": {
            "阿珈席翁": 8,
            "克伦佐": 30,
            "柯·伊·诺尔": 0,
            "真神": 20,
            "恶灵": 13,
            "猫怪": 22,
            "狮爷": 21
        }
    },
    "Dodge Fire": {
        "effect": "Double evasion rate against Fire attacks.",
        "element": "passive",
        "personas": {
            "阿特罗波斯": 44,
            "贝尔芬格": 0,
            "比列": 11,
            "柯·伊·诺尔": 0,
            "水鬼": 29
        }
    },
    "Dodge Ice": {
        "effect": "Double evasion rate against Ice attacks.",
        "element": "passive",
        "personas": {
            "柯·伊·诺尔": 0,
            "克鲁波克鲁": 11,
            "欧特鲁斯": 0
        }
    },
    "Dodge Nuke": {
        "effect": "Double evasion rate against Nuclear attacks.",
        "element": "passive",
        "personas": {
            "柯·伊·诺尔": 0
        }
    },
    "Dodge Physical": {
        "effect": "Double evasion rate against Phys attacks.",
        "element": "passive",
        "personas": {
            "佛劳洛斯": 26,
            "伊邪纳岐": 22,
            "女武神": 49
        }
    },
    "Dodge Psy": {
        "effect": "Double evasion rate against Psy attacks.",
        "element": "passive",
        "personas": {
            "佳塔由": 33,
            "金鬼": 27,
            "柯·伊·诺尔": 0
        }
    },
    "Dodge Wind": {
        "effect": "Double evasion rate against Wind attacks.",
        "element": "passive",
        "personas": {
            "风鬼": 26,
            "柯·伊·诺尔": 0
        }
    },
    "Door of Hades": {
        "cost": 3200,
        "dlc": true,
        "effect": "Deal heavy Almighty damage to all foes with medium chance of instant kill.",
        "element": "almighty",
        "personas": {
            "塔纳托斯": 0,
            "塔纳托斯 贼神": 0
        },
        "unique": "塔纳托斯"
    },
    "Dormin Rush": {
        "cost": 16,
        "effect": "Deal medium Phys damage and inflict Sleep (low odds) to all foes.",
        "element": "phys",
        "fuse": "式王子",
        "personas": {
            "佛劳洛斯": 0,
            "睡魔": 0,
            "瑟斯特": 0
        }
    },
    "Dormina": {
        "cost": 500,
        "effect": "Inflict Sleep (high odds) to 1 foe.",
        "element": "ailment",
        "personas": {
            "高等皮克希": 0,
            "花魄": 0,
            "睡魔": 0,
            "希路奇": 0
        },
        "talk": "睡魔"
    },
    "Double Fangs": {
        "cost": 10,
        "effect": "Deal 2 times medium Phys damage to 1 foe.",
        "element": "phys",
        "personas": {
            "比列": 10,
            "埃力格": 18,
            "真神": 0,
            "娜迦": 0,
            "欧特鲁斯": 0,
            "狮爷": 0
        },
        "talk": "欧特鲁斯"
    },
    "Dream Needle": {
        "cost": 8,
        "effect": "Deal medium Phys damage and inflict Sleep (medium odds) to 1 foe.",
        "element": "phys",
        "fuse": "男梦魇",
        "personas": {
            "亚森": 5,
            "凤凰": 0,
            "犬神": 15,
            "毕舍遮": 0
        }
    },
    "Eiga": {
        "cost": 800,
        "effect": "Deal medium Curse damage to 1 foe.",
        "element": "curse",
        "personas": {
            "阿努比斯": 43,
            "克伦佐": 31,
            "菈南希": 23,
            "命运之石": 0
        },
        "talk": "克伦佐"
    },
    "Eigaon": {
        "cost": 1200,
        "effect": "Deal heavy Curse damage to 1 foe.",
        "element": "curse",
        "fuse": "奈比洛斯",
        "personas": {
            "大帝的护符": 0,
            "奈比洛斯": 0,
            "苍白骑士": 0,
            "帕祖祖": 48,
            "兰达": 49
        },
        "talk": "奈比洛斯"
    },
    "Eiha": {
        "cost": 400,
        "effect": "Deal weak Curse damage to 1 foe.",
        "element": "curse",
        "personas": {
            "亚森": 1,
            "男梦魇": 7,
            "软泥怪": 11
        }
    },
    "Wild Thunder": {
        "cost": 5400,
        "effect": "Deal severe Electric damage to all foes.",
        "element": "electric",
        "personas": {
            "奥丁": 84
        }
    },
    "Elec Amp": {
        "effect": "Strengthen Electric attacks by 50%.",
        "element": "passive",
        "fuse": "奥伯隆",
        "personas": {
            "奥伯隆": 72,
            "奥丁": 87,
            "托尔": 66,
            "义经": 84
        }
    },
    "Elec Boost": {
        "effect": "Strengthen Electric attacks by 25%.",
        "element": "passive",
        "fuse": "娜迦",
        "personas": {
            "阿特罗波斯": 43,
            "娜迦": 26,
            "建御名方": 34,
            "虹蛇": 48
        }
    },
    "Elec Break": {
        "cost": 1500,
        "effect": "Negate Electric resistances of all foes.",
        "element": "support",
        "personas": {
            "阿特罗波斯": 0,
            "巴隆": 0,
            "蛇龙王": 0,
            "建御名方": 0,
            "虹蛇": 45
        }
    },
    "Elec Wall": {
        "cost": 1800,
        "effect": "Create a shield on 1 ally to reduce damage of Electric attacks for 3 turns.",
        "element": "support",
        "personas": {
            "阿难陀": 0,
            "飞天": 14,
            "拉克西斯": 36,
            "猫怪": 21
        },
        "talk": "飞天"
    },
    "Endure": {
        "effect": "Survive one fatal blow with 1 HP remaining.",
        "element": "passive",
        "fuse": "百臂巨人",
        "personas": {
            "象头神": 56,
            "百臂巨人": 43,
            "希望钻石": 0,
            "俄耳甫斯": 27,
            "俄耳甫斯 贼神": 30,
            "斯卡哈": 50
        }
    },
    "Enduring Soul": {
        "effect": "Survive one fatal blow with HP completely recovered.",
        "element": "passive",
        "fuse": "阿提斯",
        "personas": {
            "阿提斯": 84,
            "克鲁贝洛斯": 60,
            "库夫林": 72,
            "广目天": 54,
            "摩陀": 90,
            "メサイア": 83,
            "メサイア 贼神": 92,
            "湿婆": 0,
            "塔纳托斯": 70,
            "塔纳托斯 贼神": 74,
            "藏王权现": 83
        }
    },
    "Energy Drop": {
        "cost": 400,
        "effect": "Cure Confuse/Fear/Despair/Rage/Brainwash of 1 ally.",
        "element": "healing",
        "fuse": "曼陀罗",
        "personas": {
            "菊理媛": 0,
            "真神": 0,
            "曼陀罗": 0,
            "纳西瑟斯": 0,
            "幸魂": 0
        }
    },
    "Energy Shower": {
        "cost": 800,
        "effect": "Cure Confuse/Fear/Despair/Rage/Brainwash of party.",
        "element": "healing",
        "personas": {
            "克罗索": 30,
            "诃梨帝母": 0,
            "帕尔瓦蒂": 57
        },
        "talk": "帕尔瓦蒂"
    },
    "Evade Bless": {
        "effect": "Triple evasion rate against (non instant death) Bless attacks.",
        "element": "passive",
        "personas": {
            "奈比洛斯": 66,
            "苍白骑士": 57
        }
    },
    "Evade Curse": {
        "effect": "Triple evasion rate against (non instant death) Curse attacks.",
        "element": "passive",
        "personas": {
            "主天使": 73,
            "加百列": 80,
            "座天使": 75
        }
    },
    "Evade Elec": {
        "effect": "Triple evasion rate against Electric attacks.",
        "element": "passive",
        "personas": {
            "福图纳": 51,
            "迦楼罗": 55
        }
    },
    "Evade Fire": {
        "effect": "Triple evasion rate against Fire attacks.",
        "element": "passive",
        "personas": {
            "巴风特": 0,
            "白虎": 52
        }
    },
    "Evade Ice": {
        "effect": "Triple evasion rate against Ice attacks.",
        "element": "passive",
        "personas": {
            "迦梨": 79
        }
    },
    "Evade Nuke": {
        "effect": "Triple evasion rate against Nuclear attacks.",
        "element": "passive",
        "personas": {
            "大国主": 47
        }
    },
    "Evade Physical": {
        "effect": "Triple evasion rate against Phys attacks.",
        "element": "passive",
        "personas": {
            "アリアドネ": 34,
            "アリアドネ 贼神": 46,
            "巴古斯": 54,
            "藏王权现": 82
        }
    },
    "Evade Psy": {
        "effect": "Triple evasion rate against Psy attacks.",
        "element": "passive",
        "personas": {
            "佛钮司": 68
        }
    },
    "Evade Wind": {
        "effect": "Triple evasion rate against Wind attacks.",
        "element": "passive",
        "personas": {
            "蛇龙王": 60,
            "婆苏古": 70
        }
    },
    "Demonic Decree": {
        "cost": 4800,
        "effect": "Half remaining HP of 1 foe.",
        "element": "curse",
        "personas": {
            "别西卜": 87
        }
    },
    "Fast Heal": {
        "effect": "Half the time needed to recover from ailments.",
        "element": "passive",
        "fuse": "福图纳",
        "personas": {
            "巴古斯": 55,
            "希望钻石": 0,
            "奥丁": 86,
            "义经": 82
        }
    },
    "Fear Boost": {
        "effect": "Increase chance of inflicting Fear.",
        "element": "passive",
        "fuse": "木灵",
        "personas": {
            "切尔诺伯格": 66,
            "木灵": 15
        }
    },
    "Fire Amp": {
        "effect": "Strengthen Fire attacks by 50%.",
        "element": "passive",
        "fuse": "斯尔特",
        "personas": {
            "アステリオス": 59,
            "アステリオス 贼神": 65,
            "摩陀": 0
        }
    },
    "Fire Boost": {
        "effect": "Strengthen Fire attacks by 25%.",
        "element": "passive",
        "fuse": "单卡拉比",
        "personas": {
            "单卡拉比": 35,
            "地狱天使": 40,
            "俄耳甫斯": 32,
            "俄耳甫斯 贼神": 35
        }
    },
    "Fire Break": {
        "cost": 1500,
        "effect": "Negate Fire resistances of all foes.",
        "element": "support",
        "personas": {
            "欧若博司": 20,
            "赛特": 54,
            "斯尔特": 0
        },
        "talk": "欧若博司"
    },
    "Fire Wall": {
        "cost": 1800,
        "effect": "Create a shield on 1 ally to reduce damage of Fire attacks for 3 turns.",
        "element": "support",
        "personas": {
            "阿特罗波斯": 0,
            "克鲁波克鲁": 13,
            "软泥怪": 13
        },
        "talk": "克鲁波克鲁"
    },
    "Firm Stance": {
        "effect": "Half all incoming damage by sacrificing evasion completely.",
        "element": "passive",
        "personas": {
            "经津主": 81,
            "Mara": 78,
            "メサイア 贼神": 94,
            "隐形鬼": 79
        }
    },
    "Flash Bomb": {
        "cost": 19,
        "effect": "Deal medium Phys damage and inflict Dizzy (low odds) to all foes.",
        "element": "phys",
        "fuse": "佳塔由",
        "personas": {
            "黑软泥怪": 35,
            "黑骑士": 0,
            "佳塔由": 0
        }
    },
    "Forget Boost": {
        "effect": "Increase chance of inflicting Forget.",
        "element": "passive",
        "fuse": "奇魂",
        "personas": {
            "迦温": 37,
            "奇魂": 18
        }
    },
    "Foul Breath": {
        "cost": 800,
        "effect": "Increase susceptibility to all ailments of 1 foe.",
        "element": "almighty",
        "fuse": "天蛾人",
        "personas": {
            "基力梅卡拉": 46,
            "百臂巨人": 45,
            "拉弥亚": 28,
            "白骑士": 44
        }
    },
    "Freeze Boost": {
        "effect": "Increase chance of inflicting Freeze.",
        "element": "passive",
        "fuse": "飞天",
        "personas": {
            "巴风特": 63,
            "杰克霜精": 15,
            "霜精之王": 62,
            "莉莉姆": 34
        },
        "talk": "巴风特"
    },
    "Frei": {
        "cost": 400,
        "effect": "Deal weak Nuclear damage to 1 foe.",
        "element": "nuclear",
        "personas": {
            "真神": 0,
            "朱雀": 0
        },
        "talk": "真神"
    },
    "Freidyne": {
        "cost": 1200,
        "effect": "Deal heavy Nuclear damage to 1 foe.",
        "element": "nuclear",
        "personas": {
            "阿难陀": 48,
            "昆沙门天": 0,
            "大帝的护符": 0,
            "米特拉斯": 45,
            "蒂坦妮亚": 0
        },
        "talk": "蒂坦妮亚"
    },
    "Freila": {
        "cost": 800,
        "effect": "Deal medium Nuclear damage to 1 foe.",
        "element": "nuclear",
        "fuse": "荒魂",
        "personas": {
            "荒魂": 0,
            "凤凰": 0,
            "命运之石": 0,
            "图特": 0
        }
    },
    "Garu": {
        "cost": 300,
        "effect": "Deal weak Wind damage to 1 foe.",
        "element": "wind",
        "fuse": "双角兽",
        "personas": {
            "双角兽": 6,
            "高等皮克希": 0,
            "凯尔皮": 0,
            "木灵": 0,
            "木叶天狗": 0,
            "奇魂": 0
        },
        "talk": "凯尔皮"
    },
    "Garudyne": {
        "cost": 1000,
        "effect": "Deal heavy Wind damage to 1 foe.",
        "element": "wind",
        "fuse": "鞍马天狗",
        "personas": {
            "大帝的护符": 0,
            "福图纳": 47,
            "迦楼罗": 0,
            "鞍马天狗": 57,
            "诺伦": 0,
            "羽蛇神": 0
        },
        "talk": "迦楼罗"
    },
    "Garula": {
        "cost": 600,
        "effect": "Deal medium Wind damage to 1 foe.",
        "element": "wind",
        "fuse": "斗牛士",
        "personas": {
            "安祖": 0,
            "风鬼": 0,
            "伊西丝": 30,
            "佳塔由": 0,
            "斗牛士": 23,
            "睡魔": 0,
            "命运之石": 0,
            "山灵": 23
        },
        "talk": "伊西丝"
    },
    "Ghastly Wail": {
        "cost": 2800,
        "effect": "Instantly kill all foes under Fear.",
        "element": "almighty",
        "personas": {
            "黑骑士": 63,
            "祸津伊邪纳岐": 0,
            "祸津伊邪纳岐 贼神": 0,
            "摩洛": 63,
            "丝卡蒂": 56
        },
        "talk": "丝卡蒂"
    },
    "Giant Slice": {
        "cost": 9,
        "effect": "Deal medium Phys damage to 1 foe.",
        "element": "phys",
        "fuse": "女武神",
        "personas": {
            "茶枳尼": 0,
            "佛劳洛斯": 0,
            "象头神": 0,
            "犬神": 0,
            "鬼": 21,
            "罗刹": 0,
            "瑟斯特": 0,
            "增长天": 0
        }
    },
    "Gigantomachia": {
        "cost": 25,
        "effect": "Deal grave Phys damage to all foes.",
        "element": "phys",
        "personas": {
            "阿巴顿": 80,
            "アステリオス": 62,
            "アステリオス 贼神": 68,
            "蚩尤": 0,
            "路西法": 0
        },
        fuse: "アステリオス 贼神"
    },
    "God's Hand": {
        "cost": 25,
        "effect": "Deal grave Phys damage to 1 foe.",
        "element": "phys",
        "fuse": "藏王权现",
        "personas": {
            "阿尔达": 0,
            "昆沙门天": 73,
            "默基瑟德": 67,
            "メサイア": 0,
            "藏王权现": 0
        }
    },
    "Growth 1": {
        "effect": "Persona gains 1/4 EXP while inactive.",
        "element": "passive",
        "fuse": "木叶天狗",
        "personas": {
            "木叶天狗": 12,
            "幸魂": 7
        }
    },
    "Growth 2": {
        "effect": "Persona gains 1/2 EXP while inactive.",
        "element": "passive",
        "fuse": "图特",
        "personas": {
            "阿难陀": 46,
            "拉克西斯": 0,
            "图特": 42
        }
    },
    "Growth 3": {
        "effect": "Persona gains full EXP even while inactive.",
        "element": "passive",
        "fuse": "伊邪纳岐 贼神",
        "personas": {
            "伊邪纳岐": 25,
            "伊邪纳岐 贼神": 28,
            "鞍马天狗": 58,
            "纳西瑟斯": 52,
            "羽蛇神": 65,
            "拉斐尔": 81
        }
    },
    "Hama": {
        "cost": 800,
        "effect": "Small chance of instantly killing 1 foe.",
        "element": "bless",
        "personas": {
            "天使": 0,
            "大天使": 0
        },
        "talk": "天使"
    },
    "Hama Boost": {
        "effect": "Increase success rate of instant death by Bless skills.",
        "element": "passive",
        "personas": {
            "主天使": 71,
            "荷鲁斯": 54,
            "默基瑟德": 61,
            "梅塔特隆": 92,
            "帕尔瓦蒂": 61,
            "斯拉欧加": 0,
            "座天使": 0
        }
    },
    "Hamaon": {
        "cost": 1500,
        "effect": "Medium chance of instantly killing 1 foe.",
        "element": "bless",
        "personas": {
            "阿努比斯": 0,
            "主天使": 0,
            "荷鲁斯": 53,
            "默基瑟德": 0,
            "帕尔瓦蒂": 0,
            "能天使": 0,
            "独角兽": 44
        },
        "talk": "阿努比斯"
    },
    "Hassou Tobi": {
        "cost": 25,
        "effect": "Deal 8 times weak Phys damage to all foes.",
        "element": "phys",
        "personas": {
            "义经": 86
        },
        "unique": "义经"
    },
    "Headbutt": {
        "cost": 9,
        "effect": "Deal medium Phys damage and inflict Forget (medium odds) to 1 foe.",
        "element": "phys",
        "fuse": "软泥怪",
        "personas": {
            "黑软泥怪": 32,
            "软泥怪": 14,
            "水鬼": 0
        }
    },
    "Heat Riser": {
        "cost": 3000,
        "effect": "Increase 1 ally's Attack, Defense and Agility for 3 turns.",
        "element": "support",
        "fuse": ["拉斐尔", "祸津伊邪纳岐 贼神"],
        "personas": {
            "路西法": 96,
            "祸津伊邪纳岐": 50,
            "祸津伊邪纳岐 贼神": 54,
            "拉斐尔": 80,
            "撒旦耶尔": 97
        }
    },
    "Heat Up": {
        "effect": "Recover 5% HP and 10 SP at the start of preemptive turn.",
        "element": "passive",
        "personas": {
            "アリアドネ 贼神": 44,
            "贝利亚": 72,
            "佛劳洛斯": 30,
            "Mara": 77,
            "托尔": 68
        }
    },
    "Heat Wave": {
        "cost": 20,
        "effect": "Deal heavy Phys damage to all foes.",
        "element": "phys",
        "personas": {
            "狄俄尼索斯": 0,
            "迦楼罗": 0,
            "鞍马天狗": 0,
            "奥伯隆": 0,
            "大国主": 49,
            "欧赛": 47
        }
    },
    "High Counter": {
        "effect": "20% chance of reflecting Phys attacks.",
        "element": "passive",
        "personas": {
            "阿修罗王": 80,
            "克鲁贝洛斯": 57,
            "茶枳尼": 52,
            "希望钻石": 0,
            "辉夜 贼神": 0,
            "迦梨": 80,
            "齐格菲": 0,
            "斯尔特": 61,
            "托尔": 0
        },
        "talk": "迦梨"
    },
    "Fortified Moxy": {
        "effect": "Increase critical rate when beginning battle with preemptive turn.",
        "element": "passive",
        "personas": {
            "阿尔达": 89,
            "アリアドネ": 32,
            "百臂巨人": 46,
            "路西法": 97,
            "猫将军": 36,
            "塔纳托斯": 69
        }
    },
    "Hysterical Slap": {
        "cost": 9,
        "effect": "Deal medium Phys damage and inflict Rage (medium odds) to 1 foe.",
        "element": "phys",
        "personas": {
            "鸠槃荼": 0,
            "奇稻田姬": 0,
            "猫怪": 18,
            "母夜叉": 0
        },
        "talk": "鸠槃荼"
    },
    "Ice Age": {
        "cost": 5400,
        "effect": "Deal severe Ice damage to all foes.",
        "element": "ice",
        "personas": {
            "巴比伦大荡妇": 81,
            "撒旦": 0
        }
    },
    "Ice Amp": {
        "effect": "Strengthen Ice attacks by 50%.",
        "element": "passive",
        "personas": {
            "邪恶霜精": 70,
            "加百列": 82,
            "霜精之王": 67,
            "巴比伦大荡妇": 82
        }
    },
    "Ice Boost": {
        "effect": "Strengthen Ice attacks by 25%.",
        "element": "passive",
        "fuse": "拉克西斯",
        "personas": {
            "白虎": 51,
            "拉克西斯": 40
        }
    },
    "Ice Break": {
        "cost": 1500,
        "effect": "Negate Ice resistances of all foes.",
        "element": "support",
        "fuse": "安德拉斯",
        "personas": {
            "安德拉斯": 15,
            "贝尔芬格": 39,
            "杰克霜精": 0,
            "霜精之王": 0
        }
    },
    "Ice Wall": {
        "cost": 1800,
        "effect": "Create a shield on 1 ally to reduce damage of Ice attacks for 3 turns.",
        "element": "support",
        "personas": {
            "飞天": 0,
            "双角兽": 7,
            "库夫林": 0,
            "阴摩罗鬼": 0
        },
        "talk": "阴摩罗鬼"
    },
    "Blazing Hell": {
        "cost": 5400,
        "effect": "Deal severe Fire damage to all foes.",
        "element": "fire",
        "personas": {
            "阿提斯": 88,
            "路西法": 0,
            "摩陀": 87,
            "藏王权现": 86
        }
    },
    "Inferno": {
        "cost": 4800,
        "effect": "Deal severe Fire damage to 1 foe.",
        "element": "fire",
        "personas": {
            "斯尔特": 64
        }
    },
    "Insta-Heal": {
        "effect": "Recover from an ailment in 1 turn.",
        "element": "passive",
        "personas": {
            "伊丝塔": 87,
            "路西法": 98,
            "メサイア 贼神": 91
        },
        fuse: "メサイア 贼神"
    },
    "Invigorate 1": {
        "effect": "Recover 3 SP each turn in battle.",
        "element": "passive",
        "fuse": "克罗索",
        "personas": {
            "克罗索": 32,
            "猫将军": 31
        }
    },
    "Invigorate 2": {
        "effect": "Recover 5 SP each turn in battle.",
        "element": "passive",
        "fuse": "巴隆",
        "personas": {
            "巴隆": 54,
            "希望钻石": 0
        }
    },
    "Invigorate 3": {
        "effect": "Recover 7 SP each turn in battle.",
        "element": "passive",
        "fuse": "座天使",
        "personas": {
            "阿尔达": 0,
            "メサイア": 84,
            "撒旦": 95,
            "座天使": 0
        }
    },
    "Kouga": {
        "cost": 800,
        "effect": "Deal medium Bless damage to 1 foe.",
        "element": "bless",
        "personas": {
            "密特拉": 0,
            "命运之石": 0,
            "独角兽": 43
        },
        "talk": "独角兽"
    },
    "Kougaon": {
        "cost": 1200,
        "effect": "Deal heavy Bless damage to 1 foe.",
        "element": "bless",
        "fuse": "荷鲁斯",
        "personas": {
            "主天使": 0,
            "大帝的护符": 0,
            "荷鲁斯": 0,
            "斯拉欧加": 0
        }
    },
    "Kouha": {
        "cost": 400,
        "effect": "Deal weak Bless damage to 1 foe.",
        "element": "bless",
        "personas": {
            "天使": 13
        },
        "talk": "大天使"
    },
    "Lucky Punch": {
        "cost": 6,
        "effect": "Deal minuscule Phys damage to 1 foe. High critical rate.",
        "element": "phys",
        "fuse": "背负怪",
        "personas": {
            "犬神": 17,
            "背负怪": 9,
            "山灵": 0
        }
    },
    "Lullaby": {
        "cost": 1200,
        "effect": "Inflict Sleep (medium odds) to all foes.",
        "element": "ailment",
        "fuse": "莉莉姆",
        "personas": {
            "菊理媛": 0,
            "吉祥天": 0,
            "蒂坦妮亚": 0
        }
    },
    "Lunge": {
        "cost": 5,
        "effect": "Deal weak Phys damage to 1 foe.",
        "element": "phys",
        "personas": {
            "阿珈席翁": 4,
            "双角兽": 0,
            "凯尔皮": 0,
            "曼陀罗": 4,
            "软泥怪": 0
        },
        "talk": "双角兽"
    },
    "Mabaisudi": {
        "cost": 800,
        "effect": "Cure Burn/Freeze/Shock of party.",
        "element": "healing",
        "personas": {
            "诃梨帝母": 0,
            "拉克西斯": 0,
            "权天使": 32
        }
    },
    "Mabufu": {
        "cost": 1000,
        "effect": "Deal weak Ice damage to all foes.",
        "element": "ice",
        "fuse": "水鬼",
        "personas": {
            "安德拉斯": 14,
            "玄武": 10,
            "杰克霜精": 12,
            "克鲁波克鲁": 14,
            "摄政者": 0,
            "水鬼": 0
        },
        "talk": "水鬼"
    },
    "Mabufudyne": {
        "cost": 2200,
        "effect": "Deal heavy Ice damage to all foes.",
        "element": "ice",
        "fuse": "加百列, 莉莉丝",
        "personas": {
            "邪恶霜精": 0,
            "水晶骷髅": 0,
            "加百列": 0,
            "莉莉丝": 0,
            "米迦勒": 0,
            "巴比伦大荡妇": 0,
            "青龙": 65,
            "八岐大蛇": 0
        },
        "talk": "八岐大蛇"
    },
    "Mabufula": {
        "cost": 1600,
        "effect": "Deal medium Ice damage to all foes.",
        "element": "ice",
        "fuse": "贝尔芬格",
        "personas": {
            "贝尔芬格": 41,
            "白虎": 0,
            "奇稻田姬": 0,
            "拉克西斯": 38,
            "莉莉姆": 37,
            "欧鲁罗芙": 0,
            "丝卡蒂": 0,
            "水鬼": 28
        },
        "talk": "奇稻田姬"
    },
    "Maeiga": {
        "cost": 1600,
        "effect": "Deal medium Curse damage to all foes.",
        "element": "curse",
        "fuse": "帕祖祖",
        "personas": {
            "荒霸吐": 38,
            "欧鲁罗芙": 0,
            "帕祖祖": 0,
            "白骑士": 42
        }
    },
    "Maeigaon": {
        "cost": 2200,
        "effect": "Deal heavy Curse damage to all foes.",
        "element": "curse",
        "fuse": "塔纳托斯 贼神",
        "personas": {
            "别西卜": 0,
            "黑骑士": 0,
            "水晶骷髅": 0,
            "Mara": 76,
            "奈比洛斯": 64,
            "撒旦耶尔": 0,
            "塔纳托斯": 0,
            "塔纳托斯 贼神": 0
        },
        "talk": "Mara"
    },
    "Maeiha": {
        "cost": 1000,
        "effect": "Deal weak Curse damage to all foes.",
        "element": "curse",
        "fuse": "克伦佐",
        "personas": {
            "克伦佐": 29,
            "鵺": 0,
            "摄政者": 0
        }
    },
    "Mafrei": {
        "cost": 1000,
        "effect": "Deal weak Nuclear damage to all foes.",
        "element": "nuclear",
        "fuse": "朱雀",
        "personas": {
            "真神": 17,
            "摄政者": 0,
            "朱雀": 22
        }
    },
    "Mafreidyne": {
        "cost": 2200,
        "effect": "Deal heavy Nuclear damage to all foes.",
        "element": "nuclear",
        "fuse": "昆沙门天",
        "personas": {
            "阿修罗王": 79,
            "昆沙门天": 69,
            "水晶骷髅": 0,
            "蒂坦妮亚": 58,
            "吹号者": 0
        }
    },
    "Mafreila": {
        "cost": 1600,
        "effect": "Deal medium Nuclear damage to all foes.",
        "element": "nuclear",
        "personas": {
            "阿难陀": 0,
            "米特拉斯": 0,
            "欧鲁罗芙": 0,
            "图特": 40
        },
        "talk": "米特拉斯"
    },
    "Magaru": {
        "cost": 800,
        "effect": "Deal small Wind damage to all foes.",
        "element": "wind",
        "fuse": "山灵",
        "personas": {
            "高等皮克希": 20,
            "猫怪": 0,
            "摄政者": 0,
            "山灵": 0
        }
    },
    "Magarudyne": {
        "cost": 2000,
        "effect": "Deal heavy Wind damage to all foes.",
        "element": "wind",
        "personas": {
            "巴尔": 0,
            "水晶骷髅": 0,
            "迦楼罗": 57,
            "鞍马天狗": 60,
            "莉莉丝": 62,
            "祸津伊邪纳岐 贼神": 49,
            "羽蛇神": 67,
            "毗湿奴": 0
        },
        "talk": "巴尔"
    },
    "Magarula": {
        "cost": 1400,
        "effect": "Deal medium Wind damage to all foes.",
        "element": "wind",
        "personas": {
            "福图纳": 0,
            "纳西瑟斯": 0,
            "欧鲁罗芙": 0,
            "羽蛇神": 0,
            "睡魔": 28,
            "斯卡哈": 0
        },
        "talk": "风鬼"
    },
    "祸津 Mandala": {
        "cost": 3000,
        "dlc": true,
        "effect": "Deal heavy Curse damage to all foes and inflict Confuse/Fear/Despair (medium odds).",
        "element": "curse",
        "personas": {
            "祸津伊邪纳岐": 0,
            "祸津伊邪纳岐 贼神": 0
        },
        "unique": "祸津伊邪纳岐"
    },
    "Magic Ability": {
        "effect": "Strengthen all magical attacks by 25%.",
        "element": "passive",
        "personas": {},
        "note": "Available from Network Fusion"
    },
    "Mahama": {
        "cost": 1800,
        "effect": "Small chance of instantly killing all foes.",
        "element": "bless",
        "personas": {
            "克罗索": 0,
            "密特拉": 0,
            "独角兽": 0
        },
        "talk": "能天使"
    },
    "Mahamaon": {
        "cost": 3400,
        "effect": "medium chance of instantly killing all foes.",
        "element": "bless",
        "fuse": "默基瑟德",
        "personas": {
            "阿修罗王": 0,
            "主天使": 72,
            "默基瑟德": 64,
            "梅塔特隆": 0,
            "米迦勒": 90,
            "圣达芬": 0,
            "斯拉欧加": 0,
            "座天使": 0,
            "婆苏古": 0
        }
    },
    "Makajam": {
        "cost": 500,
        "effect": "Inflict Forget (high odds) to 1 foe.",
        "element": "ailment",
        "fuse": "真神",
        "personas": {
            "克罗索": 0,
            "迦温": 0,
            "克鲁波克鲁": 0,
            "奇魂": 0,
            "真神": 18
        }
    },
    "Makajamon": {
        "cost": 1200,
        "effect": "Inflict Forget (medium odds) to all foes.",
        "element": "ailment",
        "personas": {
            "克罗索": 29,
            "迦温": 39,
            "天蛾人": 37,
            "隐形鬼": 0,
            "欧若博司": 21,
            "权天使": 0,
            "妖精女王": 0
        },
        "talk": "天蛾人"
    },
    "Makara Break": {
        "cost": 1800,
        "effect": "Remove magic-repellent shields from all foes.",
        "element": "support",
        "personas": {
            "莉莉丝": 0,
            "妖精女王": 46,
            "蒂坦妮亚": 0,
            "八咫鸟": 0
        }
    },
    "Makarakarn": {
        "cost": 3600,
        "effect": "Create a shield on 1 ally to repel 1 magical attack.",
        "element": "support",
        "fuse": "阿巴顿",
        "personas": {
            "阿巴顿": 0,
            "荒霸吐": 0,
            "アステリオス 贼神": 66,
            "伊西丝": 32,
            "蛇龙王": 58,
            "青龙": 67,
            "婆苏古": 73
        }
    },
    "Makouga": {
        "cost": 1600,
        "effect": "Deal medium Bless damage to all foes.",
        "element": "bless",
        "fuse": "大僧正",
        "personas": {
            "大僧正": 0,
            "密特拉": 34,
            "欧鲁罗芙": 0,
            "能天使": 43,
            "权天使": 0
        }
    },
    "Makougaon": {
        "cost": 2200,
        "effect": "Deal heavy Bless damage to all foes.",
        "element": "bless",
        "fuse": "主天使",
        "personas": {
            "水晶骷髅": 0,
            "西布莉": 0,
            "主天使": 70,
            "梅塔特隆": 0,
            "斯拉欧加": 81,
            "座天使": 73
        },
        "talk": "主天使"
    },
    "Makouha": {
        "cost": 1000,
        "effect": "Deal weak Bless damage to all foes.",
        "element": "bless",
        "fuse": "阿努比斯",
        "personas": {
            "阿努比斯": 0,
            "大天使": 19,
            "和魂": 0,
            "摄政者": 0
        }
    },
    "Mamudo": {
        "cost": 1800,
        "effect": "Small chance of instantly killing all foes.",
        "element": "curse",
        "personas": {
            "菈南希": 21,
            "鵺": 24,
            "毕舍遮": 30
        }
    },
    "Mamudoon": {
        "cost": 3400,
        "effect": "medium chance of instantly killing all foes.",
        "element": "curse",
        "fuse": "爱丽丝",
        "personas": {
            "爱丽丝": 0,
            "别西卜": 0,
            "贝利亚": 0,
            "黑骑士": 0,
            "地狱天使": 44,
            "莉莉丝": 64,
            "巴比伦大荡妇": 0,
            "奈比洛斯": 0,
            "塔纳托斯": 0,
            "塔纳托斯 贼神": 0
        }
    },
    "Mapsi": {
        "cost": 1000,
        "effect": "Deal weak Psy damage to all foes.",
        "element": "psy",
        "personas": {
            "菈南希": 22,
            "摄政者": 0,
            "式王子": 22
        },
        "talk": "式王子"
    },
    "Mapsiodyne": {
        "cost": 2200,
        "effect": "Deal heavy Psy damage to all foes.",
        "element": "psy",
        "personas": {
            "水晶骷髅": 0,
            "佛钮司": 67,
            "迦梨": 81,
            "黄龙": 0,
            "帕尔瓦蒂": 59
        },
        "talk": "佛钮司"
    },
    "Mapsio": {
        "cost": 1600,
        "effect": "Deal medium Psy damage to all foes.",
        "element": "psy",
        "fuse": "迦温",
        "personas": {
            "迦温": 40,
            "大国主": 0,
            "欧鲁罗芙": 0,
            "红骑士": 0
        }
    },
    "Maragi": {
        "cost": 1000,
        "effect": "Deal weak Fire damage to all foes.",
        "element": "fire",
        "fuse": "欧若博司",
        "personas": {
            "埃力格": 0,
            "花魄": 13,
            "欧若博司": 0,
            "摄政者": 0
        }
    },
    "Maragidyne": {
        "cost": 2200,
        "effect": "Deal heavy Fire damage to all foes.",
        "element": "fire",
        "fuse": "Mara, 俄耳甫斯 贼神",
        "personas": {
            "アステリオス": 0,
            "アステリオス 贼神": 0,
            "阿提斯": 0,
            "贝利亚": 71,
            "水晶骷髅": 0,
            "狄俄尼索斯": 65,
            "莉莉丝": 65,
            "Mara": 0,
            "斯尔特": 60,
            "藏王权现": 0
        },
        "talk": "莉莉丝"
    },
    "Maragion": {
        "cost": 1600,
        "effect": "Deal medium Fire damage to all foes.",
        "element": "fire",
        "fuse": "贝利亚",
        "personas": {
            "单卡拉比": 33,
            "地狱天使": 42,
            "拉弥亚": 30,
            "欧鲁罗芙": 0,
            "俄耳甫斯": 29,
            "俄耳甫斯 贼神": 0,
            "斯卡哈": 46
        }
    },
    "Marakukaja": {
        "cost": 2400,
        "effect": "Increase party's Defense for 3 turns.",
        "element": "support",
        "personas": {
            "阿难陀": 47,
            "阿修罗王": 0,
            "菊理媛": 0,
            "拉克西斯": 35,
            "娜迦": 29,
            "奥丁": 0,
            "俄耳甫斯": 30,
            "青龙": 0
        },
        "talk": "妙音天女"
    },
    "Marakunda": {
        "cost": 2400,
        "effect": "Decrease all foes' Defense for 3 turns.",
        "element": "support",
        "fuse": "基力梅卡拉",
        "personas": {
            "荒魂": 33,
            "基力梅卡拉": 0,
            "迦温": 41,
            "欧若博司": 19
        }
    },
    "Marin Karin": {
        "cost": 500,
        "effect": "Inflict Brainwash (high odds) to 1 foe.",
        "element": "ailment",
        "personas": {
            "佛钮司": 0,
            "菈南希": 20,
            "恶灵": 11,
            "奈比洛斯": 0,
            "女梦魇": 0,
            "朱雀": 0
        },
        "talk": "莉莉姆"
    },
    "Masukukaja": {
        "cost": 2400,
        "effect": "Increase party's Agility for 3 turns.",
        "element": "support",
        "fuse": "能天使",
        "personas": {
            "安祖": 0,
            "福图纳": 0,
            "迦楼罗": 54,
            "荷鲁斯": 52,
            "佳塔由": 0,
            "猫将军": 0,
            "能天使": 45,
            "赛特": 0,
            "齐格菲": 0,
            "白骑士": 43
        },
        "talk": "默基瑟德"
    },
    "Masukunda": {
        "cost": 2400,
        "effect": "Decrease all foes' Agility for 3 turns.",
        "element": "support",
        "fuse": "佛钮司",
        "personas": {
            "巴古斯": 0,
            "佛钮司": 0,
            "象头神": 57,
            "鞍马天狗": 0,
            "莉莉姆": 0,
            "图特": 0
        }
    },
    "Matarukaja": {
        "cost": 2400,
        "effect": "Increase party's Attack power for 3 turns.",
        "element": "support",
        "fuse": "欧赛",
        "personas": {
            "巴尔": 0,
            "库夫林": 69,
            "经津主": 0,
            "持国天": 30,
            "广目天": 52,
            "奇稻田姬": 44,
            "莫特": 0,
            "奥伯隆": 68,
            "大国主": 0,
            "俄耳甫斯 贼神": 33,
            "欧特鲁斯": 26,
            "欧赛": 45,
            "斯卡哈": 48,
            "女武神": 47
        }
    },
    "Matarunda": {
        "cost": 2400,
        "effect": "Decrease all foes' Attack power for 3 turns.",
        "element": "support",
        "personas": {
            "贝利亚": 0,
            "黑软泥怪": 0,
            "哈奴曼": 0,
            "俄耳甫斯 贼神": 0,
            "妖精女王": 44,
            "兰达": 51,
            "妙音天女": 53,
            "朱雀": 24
        },
        "talk": "兰达"
    },
    "Mazio": {
        "cost": 1000,
        "effect": "Deal weak Electric damage to all foes.",
        "element": "electric",
        "fuse": "狮爷",
        "personas": {
            "天钿女命": 0,
            "摄政者": 0
        }
    },
    "Maziodyne": {
        "cost": 2200,
        "effect": "Deal heavy Electric damage to all foes.",
        "element": "electric",
        "personas": {
            "巴隆": 57,
            "水晶骷髅": 0,
            "加百列": 0,
            "伊丝塔": 88,
            "祸津伊邪纳岐": 45,
            "莫特": 0,
            "奥伯隆": 69,
            "蛇龙王": 59,
            "湿婆": 0,
            "托尔": 67
        },
        "talk": "托尔"
    },
    "Mazionga": {
        "cost": 1600,
        "effect": "Deal medium Electric damage to all foes.",
        "element": "electric",
        "fuse": "阿特罗波斯",
        "personas": {
            "阿特罗波斯": 0,
            "伊邪纳岐": 24,
            "伊邪纳岐 贼神": 27,
            "天蛾人": 0,
            "娜迦": 28,
            "欧鲁罗芙": 0,
            "妖精女王": 0,
            "建御名方": 30,
            "虹蛇": 0
        },
        "talk": "妖精女王"
    },
    "Me Patra": {
        "cost": 800,
        "effect": "Cure Dizzy/Forget/Sleep/Hunger of party.",
        "element": "healing",
        "fuse": "和魂",
        "personas": {
            "克罗索": 0,
            "大僧正": 46,
            "和魂": 23,
            "妙音天女": 0
        }
    },
    "Media": {
        "cost": 700,
        "effect": "Slightly restore party's HP.",
        "element": "healing",
        "personas": {
            "飞天": 13,
            "高等皮克希": 0,
            "奇魂": 0,
            "和魂": 0,
            "女王的首饰": 0
        }
    },
    "Mediarahan": {
        "cost": 3000,
        "effect": "Fully restore party's HP.",
        "element": "healing",
        "fuse": "蒂坦妮亚",
        "personas": {
            "西布莉": 0,
            "伊丝塔": 0,
            "黄龙": 0,
            "吉祥天": 70,
            "蒂坦妮亚": 61,
            "八咫鸟": 59
        }
    },
    "Mediarama": {
        "cost": 1200,
        "effect": "Moderately restore party's HP.",
        "element": "healing",
        "fuse": "妙音天女",
        "personas": {
            "阿特罗波斯": 41,
            "诃梨帝母": 44,
            "辉夜": 0,
            "辉夜 贼神": 0,
            "菊理媛": 41,
            "奇稻田姬": 0,
            "纳西瑟斯": 54,
            "权天使": 31,
            "妙音天女": 0
        },
        "talk": "菊理媛"
    },
    "Megaton Raid": {
        "cost": 16,
        "effect": "Deal severe Phys damage to 1 foe.",
        "element": "phys",
        "personas": {
            "克鲁贝洛斯": 0,
            "霜精之王": 0,
            "默基瑟德": 0,
            "齐格菲": 0,
            "斯尔特": 0,
            "托尔": 0
        },
        "talk": "克鲁贝洛斯"
    },
    "Megido": {
        "cost": 1500,
        "effect": "Deal medium Almighty damage to all foes.",
        "element": "almighty",
        "personas": {
            "荷鲁斯": 0,
            "图特": 37,
            "虹蛇": 0
        },
        "talk": "图特"
    },
    "Megidola": {
        "cost": 2400,
        "effect": "Deal heavy Almighty damage to all foes.",
        "element": "almighty",
        "fuse": "苍白骑士",
        "personas": {
            "黑骑士": 64,
            "祸津伊邪纳岐": 0,
            "祸津伊邪纳岐 贼神": 0,
            "莫特": 0,
            "苍白骑士": 54
        }
    },
    "Megidolaon": {
        "cost": 3800,
        "effect": "Deal severe Almighty damage to all foes.",
        "element": "almighty",
        "personas": {
            "爱丽丝": 82,
            "别西卜": 89,
            "メサイア": 0,
            "メサイア 贼神": 0,
            "梅塔特隆": 91,
            "米迦勒": 91,
            "莫特": 76,
            "奈比洛斯": 68,
            "撒旦耶尔": 0,
            "湿婆": 86,
            "尤利尔": 84,
            "毗湿奴": 0
        },
        "talk": "莫特"
    },
    "Memory Blow": {
        "cost": 15,
        "effect": "Deal light Phys damage and inflict Forget (low odds) to all foes.",
        "element": "phys",
        "fuse": "持国天",
        "personas": {
            "埃力格": 20,
            "持国天": 0,
            "娜迦": 0,
            "鬼": 23,
            "羽蛇神": 0
        }
    },
    "Concentrate": {
        "cost": 1500,
        "effect": "Multiply user's next magical attack damage by 2.5.",
        "element": "support",
        "fuse": "莫特",
        "personas": {
            "爱丽丝": 83,
            "阿特罗波斯": 45,
            "别西卜": 86,
            "贝尔芬格": 44,
            "蚩尤": 92,
            "黄龙": 79,
            "梅塔特隆": 93,
            "莫特": 74,
            "奥丁": 85,
            "撒旦": 97
        }
    },
    "Mind Slice": {
        "cost": 19,
        "effect": "Deal medium Phys damage and inflict Confuse (low odds) to all foes.",
        "element": "phys",
        "fuse": "罗刹",
        "personas": {
            "罗刹": 27
        }
    },
    "Miracle Punch": {
        "cost": 8,
        "effect": "Deal medium Phys damage to 1 foe. High critical rate.",
        "element": "phys",
        "fuse": "象头神",
        "personas": {
            "荒魂": 0,
            "アリアドネ": 0,
            "アリアドネ 贼神": 0,
            "邪恶霜精": 0,
            "巴古斯": 0,
            "象头神": 0
        },
        "talk": "象头神"
    },
    "Morning 星星": {
        "cost": 5400,
        "effect": "Deal severe Almighty damage to all foes.",
        "element": "almighty",
        "personas": {
            "路西法": 94
        },
        "unique": "路西法"
    },
    "Mudo": {
        "cost": 800,
        "effect": "Small chance of instantly killing 1 foe.",
        "element": "curse",
        "personas": {
            "鵺": 21,
            "阴摩罗鬼": 0,
            "女梦魇": 12
        },
        "talk": "鵺"
    },
    "Mudo Boost": {
        "effect": "Increase success rate of instant death by Curse skills.",
        "element": "passive",
        "personas": {
            "爱丽丝": 0,
            "巴比伦大荡妇": 0,
            "塔纳托斯 贼神": 70
        }
    },
    "Mudoon": {
        "cost": 1500,
        "effect": "medium chance of instantly killing 1 foe.",
        "element": "curse",
        "personas": {
            "阿努比斯": 0,
            "切尔诺伯格": 0,
            "基力梅卡拉": 0,
            "地狱天使": 0,
            "莉莉丝": 0,
            "帕祖祖": 0,
            "毕舍遮": 34,
            "兰达": 53
        },
        "talk": "基力梅卡拉"
    },
    "Negative Pile": {
        "cost": 12,
        "effect": "Deal heavy Phys damage and inflict Despair (medium odds) to 1 foe.",
        "element": "phys",
        "personas": {
            "恶灵军团": 0,
            "红骑士": 42
        },
        "talk": "拉弥亚"
    },
    "Nuke Amp": {
        "effect": "Strengthen Nuclear attacks by 50%.",
        "element": "passive",
        "fuse": "摩洛",
        "personas": {
            "昆沙门天": 71,
            "摩洛": 65,
            "蒂坦妮亚": 60
        }
    },
    "Nuke Boost": {
        "effect": "Strengthen Nuclear attacks by 25%.",
        "element": "passive",
        "fuse": "凤凰",
        "personas": {
            "阿难陀": 49,
            "凤凰": 27
        }
    },
    "Nuke Break": {
        "cost": 1500,
        "effect": "Negate Nuclear resistances of all foes.",
        "element": "support",
        "personas": {
            "米特拉斯": 42
        }
    },
    "Nuke Wall": {
        "cost": 1800,
        "effect": "Create a shield on 1 ally to reduce damage of Nuclear attacks for 3 turns.",
        "element": "support",
        "personas": {
            "广目天": 53
        }
    },
    "Null Bless": {
        "effect": "Impart immunity against Bless attacks.",
        "element": "passive",
        "personas": {
            "巴比伦大荡妇": 83
        }
    },
    "Null Brainwash": {
        "effect": "Impart immunity against Brainwash.",
        "element": "passive",
        "personas": {
            "荒霸吐": 0
        }
    },
    "Null Curse": {
        "effect": "Impart immunity against Curse attacks.",
        "element": "passive",
        "personas": {
            "能天使": 46
        }
    },
    "Null Despair": {
        "effect": "Impart immunity against Despair.",
        "element": "passive",
        "personas": {
            "霜精之王": 65,
            "丝卡蒂": 0
        }
    },
    "Null Dizzy": {
        "effect": "Impart immunity against Dizzy.",
        "element": "passive",
        "personas": {
            "恶灵军团": 42,
            "斗牛士": 0
        }
    },
    "Null Elec": {
        "effect": "Impart immunity against Electric attacks.",
        "element": "passive",
        "personas": {
            "巴隆": 55
        }
    },
    "Null Fear": {
        "effect": "Impart immunity against Fear.",
        "element": "passive",
        "personas": {
            "阿努比斯": 39
        }
    },
    "Null Fire": {
        "effect": "Impart immunity against Fire attacks.",
        "element": "passive",
        "personas": {
            "单卡拉比": 36
        }
    },
    "Null Forget": {
        "effect": "Impart immunity against Forget.",
        "element": "passive",
        "personas": {
            "安祖": 29
        }
    },
    "Null Ice": {
        "effect": "Impart immunity against Ice attacks.",
        "element": "passive",
        "personas": {}
    },
    "Null Nuke": {
        "effect": "Impart immunity against Nuclear attacks.",
        "element": "passive",
        "personas": {
            "水鬼": 26
        }
    },
    "Null Confuse": {
        "effect": "Impart immunity against Confuse.",
        "element": "passive",
        "personas": {}
    },
    "Null Phys": {
        "effect": "Impart immunity against Phys attacks.",
        "element": "passive",
        "personas": {
            "伊邪纳岐 贼神": 25
        }
    },
    "Null Psy": {
        "effect": "Impart immunity against Psy attacks.",
        "element": "passive",
        "personas": {}
    },
    "Null Rage": {
        "effect": "Impart immunity against Rage.",
        "element": "passive",
        "personas": {
            "贝尔芬格": 38,
            "白虎": 54,
            "大僧正": 47
        }
    },
    "Null Sleep": {
        "effect": "Impart immunity against Sleep.",
        "element": "passive",
        "personas": {
            "奇稻田姬": 45,
            "睡魔": 27,
            "妙音天女": 51
        }
    },
    "Null Wind": {
        "effect": "Impart immunity against Wind attacks.",
        "element": "passive",
        "personas": {
            "八咫鸟": 62
        }
    },
    "One-shot Kill": {
        "cost": 17,
        "effect": "Deal severe Gun damage to 1 foe. High critical rate.",
        "element": "gun",
        "fuse": "赛特",
        "personas": {
            "邪恶霜精": 0,
            "Mara": 0,
            "赛特": 0,
            "塔纳托斯": 68,
            "塔纳托斯 贼神": 72
        }
    },
    "Oni Kagura": {
        "cost": 16,
        "effect": "Deal medium Phys damage and inflict Rage (low odds) to all foes.",
        "element": "phys",
        "fuse": "八岐大蛇",
        "personas": {
            "库夫林": 0,
            "欧赛": 0,
            "式王子": 27,
            "白骑士": 0,
            "母夜叉": 22,
            "八岐大蛇": 0
        },
        "talk": "欧赛"
    },
    "Oratorio": {
        "cost": 3800,
        "effect": "Fully restore party's HP and negate all -nda debuffs.",
        "element": "healing",
        "personas": {
            "メサイア": 0,
            "メサイア 贼神": 0
        },
        "unique": "メサイア"
    },
    "Confuse Boost": {
        "effect": "Increase chance of inflicting Confuse.",
        "element": "passive",
        "fuse": "阴摩罗鬼",
        "personas": {
            "犬神": 19,
            "阴摩罗鬼": 15
        }
    },
    "Panta Rhei": {
        "cost": 4200,
        "effect": "Deal severe Wind damage to 1 foe",
        "element": "wind",
        "personas": {
            "巴尔": 77
        }
    },
    "Patra": {
        "cost": 400,
        "effect": "Cure Dizzy/Forget/Sleep/Hunger of 1 ally.",
        "element": "healing",
        "fuse": "玄武",
        "personas": {
            "玄武": 8,
            "皮克希": 3,
            "希路奇": 9
        },
        "talk": "希路奇"
    },
    "Charge": {
        "cost": 1500,
        "effect": "Multiply user's next Phys attack damage by 2.5.",
        "element": "support",
        "fuse": "库夫林",
        "personas": {
            "アリアドネ": 36,
            "アリアドネ 贼神": 48,
            "巴尔": 79,
            "库夫林": 71,
            "茶枳尼": 55,
            "经津主": 78,
            "象头神": 60,
            "百臂巨人": 48,
            "Mara": 74,
            "拉斐尔": 0,
            "瑟斯特": 34,
            "齐格菲": 70,
            "毗湿奴": 86,
            "义经": 0
        }
    },
    "Pressing Stance": {
        "effect": "Reduce hit rate by 2/3 of all incoming attack when being ambushed.",
        "element": "passive",
        "personas": {
            "隐形鬼": 0,
            "红骑士": 45,
            "八咫鸟": 60,
            "义经": 81
        }
    },
    "Psi": {
        "cost": 400,
        "effect": "Deal weak Psy damage to 1 foe.",
        "element": "psy",
        "personas": {
            "大天使": 0,
            "木灵": 12,
            "斗牛士": 0
        },
        "talk": "木灵"
    },
    "Psy Amp": {
        "effect": "Strengthen Psy attacks by 50%.",
        "element": "passive",
        "personas": {
            "黄龙": 80
        }
    },
    "Psy Boost": {
        "effect": "Strengthen Psy attacks by 25%.",
        "element": "passive",
        "personas": {
            "大国主": 45
        }
    },
    "Psy Break": {
        "cost": 1500,
        "effect": "Negate Psy resistances of all foes.",
        "element": "support",
        "fuse": "红骑士",
        "personas": {
            "大国主": 46,
            "红骑士": 0
        }
    },
    "Psy Wall": {
        "cost": 1800,
        "effect": "Create a shield on 1 ally to reduce damage of Psy attacks for 3 turns.",
        "element": "support",
        "personas": {
            "奥伯隆": 70,
            "图特": 39
        },
        "talk": "奥伯隆"
    },
    "Psycho Blast": {
        "cost": 5400,
        "effect": "Deal severe Psy damage to all foes.",
        "element": "psy",
        "personas": {
            "蚩尤": 89,
            "湿婆": 88
        }
    },
    "Psycho Force": {
        "cost": 4800,
        "effect": "Deal severe Psy damage to 1 foe.",
        "element": "psy",
        "personas": {
            "蚩尤": 0,
            "黄龙": 0,
            "湿婆": 0
        }
    },
    "Psiodyne": {
        "cost": 1200,
        "effect": "Deal heavy Psy damage to 1 foe.",
        "element": "psy",
        "fuse": "帕尔瓦蒂",
        "personas": {
            "巴古斯": 0,
            "狄俄尼索斯": 0,
            "大帝的护符": 0,
            "佛钮司": 0,
            "迦梨": 0,
            "摩洛": 0,
            "帕尔瓦蒂": 0
        },
        "talk": "摩洛"
    },
    "Psio": {
        "cost": 800,
        "effect": "Deal medium Psy damage to 1 foe.",
        "element": "psy",
        "personas": {
            "迦温": 0,
            "菈南希": 0,
            "恶灵军团": 39,
            "猫将军": 0,
            "式王子": 26,
            "命运之石": 0
        },
        "talk": "迦温"
    },
    "Pulinpa": {
        "cost": 500,
        "effect": "Inflict Confuse (high odds) to 1 foe.",
        "element": "ailment",
        "personas": {
            "克伦佐": 0,
            "犬神": 0,
            "曼陀罗": 0,
            "鵺": 22,
            "阴摩罗鬼": 14
        },
        "talk": "曼陀罗"
    },
    "Abyssal Wings": {
        "cost": 3000,
        "dlc": true,
        "effect": "Deal severe Curse damage to all foes.",
        "element": "curse",
        "personas": {
            "ツキヨミ": 0,
            "ツキヨミ 贼神": 0
        },
        "unique": "ツキヨミ"
    },
    "Rage Boost": {
        "effect": "Increase chance of inflicting Rage.",
        "element": "passive",
        "fuse": "鸠槃荼",
        "personas": {
            "荒魂": 35,
            "木叶天狗": 14,
            "鸠槃荼": 46,
            "红骑士": 46
        }
    },
    "Myriad Slashes": {
        "cost": 20,
        "effect": "Deal 2 to 3 times medium Phys damage to 1 foe.",
        "element": "phys",
        "fuse": "隐形鬼",
        "personas": {
            "贝利亚": 74,
            "切尔诺伯格": 67,
            "经津主": 0,
            "奥丁": 0,
            "隐形鬼": 0,
            "ツキヨミ": 0,
            "ツキヨミ 贼神": 0,
            "尤利尔": 0
        }
    },
    "Rainy Play": {
        "effect": "Greatly increase evasion under rainy day or special weather warning.",
        "element": "passive",
        "personas": {
            "克伦佐": 33,
            "佳塔由": 36,
            "吉祥天": 71,
            "和魂": 24
        }
    },
    "Rakukaja": {
        "cost": 800,
        "effect": "Increase 1 ally's Defense for 3 turns.",
        "element": "support",
        "fuse": "幸魂",
        "personas": {
            "阿珈席翁": 6,
            "比列": 0,
            "伊邪纳岐 贼神": 0,
            "金鬼": 0,
            "拉弥亚": 0,
            "女王的首饰": 0,
            "幸魂": 8
        },
        "talk": "阿珈席翁"
    },
    "Rakunda": {
        "cost": 800,
        "effect": "Decrease 1 foe's Defense for 3 turns.",
        "element": "support",
        "personas": {
            "安德拉斯": 0,
            "玄武": 0,
            "杰克霜精": 13,
            "杰克灯笼": 0,
            "持国天": 0,
            "木灵": 0,
            "克鲁波克鲁": 12,
            "菈南希": 0,
            "女王的首饰": 0
        },
        "talk": "菈南希"
    },
    "Rampage": {
        "cost": 13,
        "effect": "Deal 1 to 3 times weak Phys damage to all foes.",
        "element": "phys",
        "fuse": "鬼",
        "personas": {
            "克伦佐": 0,
            "一本踏鞴": 15,
            "恶灵军团": 0,
            "鬼": 0,
            "毕舍遮": 0,
            "狮爷": 18
        },
        "talk": "鬼"
    },
    "Rat Fang": {
        "cost": 10,
        "effect": "Deal medium Phys damage to 1 foe. More powerful when being ambushed.",
        "element": "phys",
        "personas": {
            "猫将军": 33,
            "欧特鲁斯": 24
        }
    },
    "Rebellion": {
        "cost": 500,
        "effect": "Increase 1 ally's critical rate for 3 turns.",
        "element": "support",
        "personas": {
            "飞天": 0,
            "荒魂": 32,
            "大天使": 18,
            "克鲁贝洛斯": 56,
            "茶枳尼": 54,
            "象头神": 0,
            "瑟斯特": 32,
            "女梦魇": 0
        }
    },
    "Recarm": {
        "cost": 800,
        "effect": "Revive 1 ally with 50% HP recovered.",
        "element": "healing",
        "fuse": "菈南希",
        "personas": {
            "凤凰": 25,
            "女王的首饰": 0
        }
    },
    "Regenerate 1": {
        "effect": "Restore 2% of max HP each turn in battle.",
        "element": "passive",
        "fuse": "金鬼",
        "personas": {
            "金鬼": 0,
            "奇魂": 15,
            "罗刹": 26
        }
    },
    "Regenerate 2": {
        "effect": "Recover 4% of max HP each turn in battle.",
        "element": "passive",
        "fuse": "广目天",
        "personas": {
            "克鲁贝洛斯": 58,
            "百臂巨人": 0,
            "希望钻石": 0,
            "广目天": 0
        }
    },
    "Regenerate 3": {
        "effect": "Recover 6% of max HP each turn in battle.",
        "element": "passive",
        "fuse": "羽蛇神",
        "personas": {
            "经津主": 79,
            "哈奴曼": 69,
            "メサイア": 82,
            "隐形鬼": 78,
            "羽蛇神": 66,
            "撒旦": 0
        }
    },
    "Repel Bless": {
        "effect": "Repel Bless attacks.",
        "element": "passive",
        "personas": {}
    },
    "Repel Curse": {
        "effect": "Repel Curse attacks.",
        "element": "passive",
        "personas": {
            "圣达芬": 78
        }
    },
    "Repel Elec": {
        "effect": "Repel Electric attacks.",
        "element": "passive",
        "personas": {
            "莫特": 77
        }
    },
    "Repel Fire": {
        "effect": "Repel Fire attacks.",
        "element": "passive",
        "personas": {
            "邪恶霜精": 71,
            "毗湿奴": 87,
            "八岐大蛇": 66
        }
    },
    "Repel Ice": {
        "effect": "Repel Ice attacks.",
        "element": "passive",
        "personas": {
            "别西卜": 88,
            "丝卡蒂": 60
        }
    },
    "Repel Nuke": {
        "effect": "Repel Nuclear attacks.",
        "element": "passive",
        "personas": {
            "青龙": 63,
            "尤利尔": 83
        }
    },
    "Repel Phys": {
        "effect": "Repel Phys attacks.",
        "element": "passive",
        "personas": {
            "蚩尤": 0,
            "基力梅卡拉": 51,
            "辉夜": 22,
            "辉夜 贼神": 31
        }
    },
    "Repel Psy": {
        "effect": "Repel Psy attacks.",
        "element": "passive",
        "personas": {}
    },
    "Repel Wind": {
        "effect": "Repel Wind attacks.",
        "element": "passive",
        "personas": {}
    },
    "Fortify Spirit": {
        "effect": "Reduce susceptibilities to all ailments.",
        "element": "passive",
        "personas": {
            "蚩尤": 88,
            "撒旦": 96,
            "赛特": 56,
            "吹号者": 61
        }
    },
    "Resist Bless": {
        "effect": "Reduce damage from Bless attacks.",
        "element": "passive",
        "personas": {
            "阿努比斯": 41
        }
    },
    "Resist Brainwash": {
        "effect": "Reduce susceptibility to Brainwash.",
        "element": "passive",
        "personas": {
            "凯尔皮": 8
        }
    },
    "Resist Curse": {
        "effect": "Reduce damage from Curse attacks.",
        "element": "passive",
        "personas": {}
    },
    "Resist Despair": {
        "effect": "Reduce susceptibility to Despair.",
        "element": "passive",
        "personas": {
            "真神": 19
        }
    },
    "Resist Dizzy": {
        "effect": "Reduce susceptibility to Dizzy.",
        "element": "passive",
        "personas": {
            "一本踏鞴": 0,
            "幸魂": 10
        }
    },
    "Resist Elec": {
        "effect": "Reduce damage from Electric attacks.",
        "element": "passive",
        "personas": {}
    },
    "Resist Fear": {
        "effect": "Reduce susceptibility to Fear.",
        "element": "passive",
        "personas": {
            "木灵": 17,
            "背负怪": 10,
            "阴摩罗鬼": 17,
            "增长天": 34
        }
    },
    "Resist Fire": {
        "effect": "Reduce damage from Fire attacks.",
        "element": "passive",
        "personas": {}
    },
    "Resist Forget": {
        "effect": "Reduce susceptibility to Forget.",
        "element": "passive",
        "personas": {
            "玄武": 11,
            "花魄": 12,
            "伊西丝": 27
        }
    },
    "Resist Ice": {
        "effect": "Reduce damage from Ice attacks.",
        "element": "passive",
        "personas": {}
    },
    "Resist Nuke": {
        "effect": "Reduce damage from Nuclear attacks.",
        "element": "passive",
        "personas": {}
    },
    "Resist Confuse": {
        "effect": "Reduce susceptibility to Confuse.",
        "element": "passive",
        "personas": {
            "皮克希": 6,
            "红骑士": 44
        }
    },
    "Resist Phys": {
        "effect": "Reduce damage from Phys attacks.",
        "element": "passive",
        "personas": {}
    },
    "Resist Psy": {
        "effect": "Reduce damage from Psy attacks.",
        "element": "passive",
        "personas": {
            "风鬼": 27
        }
    },
    "Resist Rage": {
        "effect": "Reduce susceptibility to Rage.",
        "element": "passive",
        "personas": {}
    },
    "Resist Sleep": {
        "effect": "Reduce susceptibility to Sleep.",
        "element": "passive",
        "personas": {
            "杰克灯笼": 7
        }
    },
    "Resist Wind": {
        "effect": "Reduce damage from Wind attacks.",
        "element": "passive",
        "personas": {}
    },
    "Revolution": {
        "cost": 500,
        "effect": "Increase all foes and allies' critical rate for 3 turns.",
        "element": "support",
        "personas": {
            "巴尔": 0,
            "哈奴曼": 0,
            "广目天": 0,
            "鸠槃荼": 47,
            "默基瑟德": 62,
            "虹蛇": 44
        }
    },
    "Riot Gun": {
        "cost": 24,
        "effect": "Deal severe Gun damage to all foes.",
        "element": "gun",
        "fuse": "毗湿奴",
        "personas": {
            "撒旦耶尔": 0,
            "湿婆": 85,
            "毗湿奴": 90
        }
    },
    "Rising Slash": {
        "cost": 14,
        "effect": "Deal heavy Phys damage to 1 foe. More powerful under Baton Pass .",
        "element": "phys",
        "personas": {
            "茶枳尼": 0,
            "伊邪纳岐": 21,
            "伊邪纳岐 贼神": 24,
            "拉弥亚": 0,
            "红骑士": 0,
            "瑟斯特": 31,
            "女武神": 0
        },
        "talk": "茶枳尼"
    },
    "Salvation": {
        "cost": 4800,
        "effect": "Fully restore HP and cure all ailments of party except for unique status.",
        "element": "healing",
        "fuse": "伊丝塔",
        "personas": {
            "阿尔达": 90,
            "阿提斯": 0,
            "西布莉": 79,
            "加百列": 83,
            "伊丝塔": 90
        }
    },
    "Samarecarm": {
        "cost": 1800,
        "effect": "Revive 1 ally with all HP recovered.",
        "element": "healing",
        "fuse": "独角兽",
        "personas": {
            "阿提斯": 85,
            "西布莉": 0,
            "诃梨帝母": 41,
            "伊丝塔": 0,
            "诺伦": 57,
            "奥伯隆": 71,
            "圣达芬": 0,
            "独角兽": 41
        }
    },
    "Samsara": {
        "cost": 4400,
        "effect": "High chance of instantly killing all foes.",
        "element": "bless",
        "personas": {
            "大僧正": 43
        },
        "unique": "大僧正"
    },
    "Sharp Student": {
        "effect": "Lower odds of receiving critical hit.",
        "element": "passive",
        "fuse": "增长天",
        "personas": {
            "埃力格": 0,
            "一本踏鞴": 16,
            "杰克灯笼": 4,
            "鬼": 22,
            "斯卡哈": 0,
            "希路奇": 10,
            "山灵": 0,
            "增长天": 33
        }
    },
    "Snipe": {
        "effect": "Strengthen Gun attacks by 25%.",
        "element": "passive",
        "personas": {
            "佳塔由": 35,
            "白骑士": 41
        }
    },
    "Shining Arrows": {
        "cost": 2200,
        "dlc": true,
        "effect": "Deal 4 to 8 times weak Bless damage to all foes.",
        "element": "bless",
        "personas": {
            "辉夜": 0,
            "辉夜 贼神": 0
        },
        "unique": "辉夜"
    },
    "Shock Boost": {
        "effect": "Increase chance of inflicting Shock.",
        "element": "passive",
        "fuse": "巴风特",
        "personas": {
            "天钿女命": 34,
            "巴风特": 62,
            "天蛾人": 0,
            "蛇龙王": 57
        }
    },
    "Skull Cracker": {
        "cost": 10,
        "effect": "Deal medium Phys damage and inflict Confuse (medium odds) to 1 foe.",
        "element": "phys",
        "fuse": "鵺",
        "personas": {
            "曼陀罗": 7,
            "恶灵": 0,
            "天蛾人": 0,
            "鵺": 0,
            "狮爷": 0
        }
    },
    "Sledgehammer": {
        "cost": 10,
        "effect": "Deal medium Phys damage and inflict Dizzy (medium odds) to 1 foe.",
        "element": "phys",
        "fuse": "一本踏鞴",
        "personas": {
            "比列": 13,
            "一本踏鞴": 0,
            "金鬼": 28
        },
        "talk": "一本踏鞴"
    },
    "Sleep Boost": {
        "effect": "Increase chance of inflicting Sleep.",
        "element": "passive",
        "fuse": "睡魔",
        "personas": {
            "睡魔": 29
        }
    },
    "Snap": {
        "cost": 9,
        "effect": "Deal medium Gun damage to 1 foe.",
        "element": "gun",
        "personas": {
            "木叶天狗": 0,
            "背负怪": 0,
            "鬼": 0,
            "式王子": 0
        },
        "talk": "恶灵"
    },
    "Soul Chain": {
        "effect": "Recover 20 SP when performing Baton Pass .",
        "element": "passive",
        "personas": {}
    },
    "Speed Master": {
        "effect": "Automatic Sukukaja at the start of battle.",
        "element": "passive",
        "personas": {
            "地狱天使": 0,
            "佳塔由": 38,
            "迦温": 38,
            "祸津伊邪纳岐 贼神": 52,
            "朱雀": 23
        }
    },
    "Spell Master": {
        "effect": "Half SP cost for magic skills.",
        "element": "passive",
        "personas": {
            "伊丝塔": 89,
            "黄龙": 82,
            "路西法": 95,
            "摩陀": 91,
            "ツキヨミ 贼神": 61,
            "尤利尔": 86
        },
        fuse: "ツキヨミ 贼神"
    },
    "Spirit Drain": {
        "cost": 300,
        "effect": "Drains SP from 1 foe.",
        "element": "almighty",
        "fuse": "诃梨帝母",
        "personas": {
            "阿巴顿": 0,
            "荒霸吐": 37,
            "大僧正": 0,
            "诃梨帝母": 46,
            "莉莉姆": 36,
            "莉莉丝": 63,
            "丝卡蒂": 59,
            "ツキヨミ 贼神": 0
        }
    },
    "Stagnant Air": {
        "cost": 500,
        "effect": "Increase susceptibility to all ailments of all foes and allies.",
        "element": "almighty",
        "fuse": "黑软泥怪",
        "personas": {
            "黑软泥怪": 0,
            "切尔诺伯格": 63,
            "佛钮司": 66,
            "鸠槃荼": 0,
            "摩洛": 0,
            "毕舍遮": 0
        }
    },
    "Beast Weaver": {
        "cost": 20,
        "dlc": true,
        "effect": "Deal grave Phys damage to 1 foe and user is debuffed with Tarunda.",
        "element": "phys",
        "personas": {
            "アリアドネ": 0,
            "アリアドネ 贼神": 0
        },
        "unique": "アリアドネ"
    },
    "Sukukaja": {
        "cost": 800,
        "effect": "Increase 1 ally's Agility for 3 turns.",
        "element": "support",
        "personas": {
            "伊西丝": 0,
            "凯尔皮": 9,
            "斗牛士": 0,
            "欧若博司": 0,
            "能天使": 0,
            "女王的首饰": 0
        },
        "talk": "山灵"
    },
    "Sukunda": {
        "cost": 800,
        "effect": "Decrease 1 foe's Agility for 3 turns.",
        "element": "support",
        "personas": {
            "亚森": 4,
            "埃力格": 19,
            "曼陀罗": 5,
            "背负怪": 0,
            "女王的首饰": 0,
            "睡魔": 25
        },
        "talk": "背负怪"
    },
    "Survival Trick": {
        "effect": "Survive one instant death attack with 1 HP remaining.",
        "element": "passive",
        "personas": {
            "阿巴顿": 77,
            "爱丽丝": 84,
            "贝利亚": 70,
            "佛钮司": 65,
            "撒旦耶尔": 0
        },
        "talk": "阿巴顿"
    },
    "Swift Strike": {
        "cost": 17,
        "effect": "Deal 3 to 4 times weak Phys damage to all foes.",
        "element": "phys",
        "fuse": "白虎",
        "personas": {
            "白虎": 0,
            "基力梅卡拉": 0,
            "百臂巨人": 0,
            "斗牛士": 20,
            "能天使": 42,
            "兰达": 0,
            "独角兽": 42,
            "增长天": 35
        }
    },
    "Tarukaja": {
        "cost": 800,
        "effect": "Increase 1 ally's Attack power for 3 turns.",
        "element": "support",
        "fuse": "埃力格",
        "personas": {
            "安德拉斯": 11,
            "埃力格": 0,
            "风鬼": 0,
            "百臂巨人": 0,
            "犬神": 0,
            "一本踏鞴": 0,
            "伊邪纳岐": 0,
            "木灵": 14,
            "恶灵": 0,
            "皮克希": 5,
            "女王的首饰": 0,
            "罗刹": 0,
            "式王子": 0
        },
        "talk": "埃力格"
    },
    "Tarunda": {
        "cost": 800,
        "effect": "Decrease 1 foe's Attack power for 3 turns.",
        "element": "support",
        "personas": {
            "双角兽": 0,
            "花魄": 11,
            "男梦魇": 8,
            "俄耳甫斯": 0,
            "女王的首饰": 0,
            "朱雀": 0
        },
        "talk": "软泥怪"
    },
    "Taunt": {
        "cost": 500,
        "effect": "Inflict Rage (high odds) to 1 foe.",
        "element": "ailment",
        "personas": {
            "荒魂": 0,
            "高等皮克希": 19,
            "木叶天狗": 13,
            "式王子": 0,
            "图特": 0
        },
        "talk": "木叶天狗"
    },
    "Tempest Slash": {
        "cost": 17,
        "effect": "Deal 3 to 5 times minuscule Phys damage to 1 foe.",
        "element": "phys",
        "fuse": "斯卡哈",
        "personas": {
            "哈奴曼": 0,
            "鸠槃荼": 43,
            "大国主": 0,
            "欧赛": 43,
            "斯卡哈": 0
        },
        "talk": "哈奴曼"
    },
    "Tentarafoo": {
        "cost": 1200,
        "effect": "Inflict Confuse (medium odds) to all foes.",
        "element": "ailment",
        "personas": {
            "天钿女命": 31,
            "地狱天使": 41,
            "迦梨": 0,
            "米特拉斯": 0,
            "天蛾人": 35,
            "帕祖祖": 0,
            "蛇龙王": 0,
            "妙音天女": 0
        }
    },
    "Terror Claw": {
        "cost": 8,
        "effect": "Deal medium Phys damage and inflict Fear (medium odds) to 1 foe.",
        "element": "phys",
        "fuse": "凯尔皮",
        "personas": {
            "凯尔皮": 10,
            "猫怪": 0,
            "增长天": 32
        },
        "talk": "猫怪"
    },
    "Tetra Break": {
        "cost": 1800,
        "effect": "Remove physical-repellent shields from all foes.",
        "element": "support",
        "personas": {
            "风鬼": 0,
            "哈奴曼": 67,
            "恶灵军团": 40,
            "Mara": 0,
            "米特拉斯": 41,
            "虹蛇": 47
        },
        "talk": "恶灵军团"
    },
    "Tetraja": {
        "cost": 2400,
        "effect": "Create shields on party to nullify one instant death attack of Bless or Curse types.",
        "element": "support",
        "fuse": "权天使",
        "personas": {
            "巴尔": 78,
            "克罗索": 27,
            "福图纳": 0,
            "象头神": 55,
            "菊理媛": 43,
            "诺伦": 56,
            "权天使": 0
        }
    },
    "Tetrakarn": {
        "cost": 3600,
        "effect": "Create a shield on 1 ally to repel 1 Phys attack.",
        "element": "support",
        "personas": {
            "アステリオス": 60,
            "昆沙门天": 72,
            "单卡拉比": 38
        }
    },
    "Thermopylae": {
        "cost": 3000,
        "effect": "Increase party's Attack, Defense and Agility for 3 turns. Only usable if the party is being ambushed.",
        "element": "support",
        "fuse": "狄俄尼索斯",
        "personas": {
            "阿提斯": 0,
            "狄俄尼索斯": 62,
            "密特拉": 38
        }
    },
    "Thunder Reign": {
        "cost": 4800,
        "effect": "Deal severe Electric damage to 1 foe.",
        "element": "electric",
        "personas": {
            "奥丁": 0
        }
    },
    "Ayamur": {
        "cost": 25,
        "effect": "Deal 3 times medium Phys damage to 1 foe. High critical rate.",
        "element": "phys",
        "personas": {
            "巴尔": 80
        },
        "unique": "巴尔"
    },
    "Titanomachia": {
        "cost": 3400,
        "dlc": true,
        "effect": "Deal severe Fire damage to all foes and inflict Fear (high odds).",
        "element": "fire",
        "personas": {
            "アステリオス": 0,
            "アステリオス 贼神": 0
        },
        "unique": "アステリオス"
    },
    "Touch n' Go": {
        "effect": "Apply Sukukaja when performing Baton Pass .",
        "element": "passive",
        "personas": {
            "福图纳": 49,
            "加百列": 81,
            "荷鲁斯": 51
        }
    },
    "Trigger Happy": {
        "effect": "Increase critical rate of Gun attacks.",
        "element": "passive",
        "personas": {
            "地狱天使": 43,
            "斗牛士": 22,
            "婆苏古": 71
        }
    },
    "Triple Down": {
        "cost": 16,
        "effect": "Deal 3 times small Gun damage to all foes.",
        "element": "gun",
        "fuse": "白骑士",
        "personas": {
            "巴古斯": 52,
            "婆苏古": 0,
            "白骑士": 0
        }
    },
    "Unshaken Will": {
        "effect": "Impart immunity against Confuse, Fear, and Rage.",
        "element": "passive",
        "fuse": "摩陀",
        "personas": {
            "阿修罗王": 81,
            "摩陀": 86,
            "撒旦耶尔": 98,
            "八岐大蛇": 69
        }
    },
    "Vacuum Wave": {
        "cost": 4800,
        "effect": "Deal severe Wind damage to all foes.",
        "element": "wind",
        "personas": {
            "毗湿奴": 85
        }
    },
    "Vajra Blast": {
        "cost": 14,
        "effect": "Deal medium Phys damage to all foes.",
        "element": "phys",
        "personas": {
            "大天使": 21,
            "金鬼": 0
        },
        "talk": "金鬼"
    },
    "Vicious Strike": {
        "cost": 18,
        "effect": "Deal medium Phys damage to all foes.",
        "element": "phys",
        "fuse": "母夜叉",
        "personas": {
            "米特拉斯": 0,
            "母夜叉": 24
        }
    },
    "Victory Cry": {
        "effect": "Recover full HP and SP after a successful battle.",
        "element": "passive",
        "personas": {
            "撒旦耶尔": 99
        }
    },
    "Vorpal Blade": {
        "cost": 23,
        "effect": "Deal severe Phys damage to all foes.",
        "element": "phys",
        "fuse": "齐格菲",
        "personas": {
            "迦梨": 0,
            "齐格菲": 74,
            "ツキヨミ": 55,
            "ツキヨミ 贼神": 60
        }
    },
    "Wage War": {
        "cost": 1200,
        "effect": "Inflict Rage (medium odds) to all foes.",
        "element": "ailment",
        "personas": {
            "巴隆": 0,
            "基力梅卡拉": 48,
            "木叶天狗": 15,
            "鸠槃荼": 0,
            "水鬼": 27,
            "母夜叉": 0
        },
        "talk": "母夜叉"
    },
    "Cripple": {
        "effect": "Strengthen Gun attacks by 50%.",
        "element": "passive",
        "personas": {
            "赛特": 53,
            "吹号者": 62,
            "藏王权现": 84
        }
    },
    "Wind Amp": {
        "effect": "Strengthen Wind attacks by 50%.",
        "element": "passive",
        "fuse": "迦楼罗",
        "personas": {
            "迦楼罗": 59,
            "羽蛇神": 68,
            "毗湿奴": 88
        }
    },
    "Wind Boost": {
        "effect": "Strengthen Wind attacks by 25%.",
        "element": "passive",
        "fuse": "风鬼",
        "personas": {
            "风鬼": 25
        }
    },
    "Wind Break": {
        "cost": 1500,
        "effect": "Negate Wind resistances of all foes.",
        "element": "support",
        "personas": {
            "安祖": 0,
            "猫怪": 20,
            "八咫鸟": 61
        },
        "talk": "安祖"
    },
    "Wind Wall": {
        "cost": 1800,
        "effect": "Create a shield on 1 ally to reduce damage of Wind attacks for 3 turns.",
        "element": "support",
        "fuse": "奇稻田姬",
        "personas": {
            "飞天": 16,
            "奇稻田姬": 46,
            "奇魂": 16,
            "妖精女王": 0,
            "罗刹": 0,
            "幸魂": 0,
            "山灵": 21
        }
    },
    "Ominous Words": {
        "cost": 500,
        "effect": "Inflict Despair (high odds) to 1 foe.",
        "element": "ailment",
        "personas": {
            "单卡拉比": 0,
            "拉弥亚": 27,
            "朱雀": 21
        },
        "talk": "毕舍遮"
    },
    "Zio": {
        "cost": 400,
        "effect": "Deal weak Electric damage to 1 foe.",
        "element": "electric",
        "fuse": "阿珈席翁",
        "personas": {
            "阿珈席翁": 0,
            "皮克希": 0,
            "狮爷": 0
        }
    },
    "Ziodyne": {
        "cost": 1200,
        "effect": "Deal heavy Electric damage to 1 foe.",
        "element": "electric",
        "fuse": "蛇龙王",
        "personas": {
            "巴风特": 61,
            "巴隆": 0,
            "大帝的护符": 0,
            "诺伦": 0,
            "奥伯隆": 0,
            "蛇龙王": 0,
            "托尔": 0,
            "义经": 0
        },
        "talk": "巴隆"
    },
    "Zionga": {
        "cost": 800,
        "effect": "Deal medium Electric damage to 1 foe.",
        "element": "electric",
        "fuse": "伊西丝",
        "personas": {
            "诃梨帝母": 0,
            "伊西丝": 29,
            "伊邪纳岐": 0,
            "伊邪纳岐 贼神": 0,
            "娜迦": 0,
            "命运之石": 0,
            "建御名方": 0,
            "增长天": 0
        },
        "talk": "娜迦"
    }
};
