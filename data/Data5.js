var rarePersonae = ["摄政者", "女王的首饰", "命运之石", "柯·伊·诺尔", "欧鲁罗芙", "大帝的护符", "希望钻石", "水晶骷髅"];
var rareCombos = {
    "愚者": [-1, +1, -1, +1, -1, -1, +1, +2],
    "魔术师": [+1, -1, +2, -1, +1, +1, +1, +1],
    "女教皇": [-1, +1, -1, +2, +1, -1, +1, +1],
    "女皇": [-1, +2, -1, +1, +1, +1, -1, +1],
    "皇帝": [+2, -1, +1, -1, -1, +1, +1, -1],
    "教皇": [+1, -1, +1, -2, +1, -1, -1, -1],
    "恋爱": [-1, +1, -1, +1, -1, -1, -2, +1],
    "战车": [+1, -1, +1, -1, +1, -2, -1, -1],
    "正义": [+1, -1, -1, +2, +1, +1, -1, +1],
    "隐士": [+2, -1, -1, +1, +1, +1, +1, -2],
    "命运": [+1, -1, +2, -1, -2, -1, +1, -1],
    "力量": [-1, +1, -2, +1, +1, +1, -1, -1],
    "倒悬者": [+1, +1, -1, -1, +1, +2, -1, -1],
    "死神": [+1, -1, +1, +1, -1, -1, +2, +1],
    "节制": [-1, +1, -1, -1, +1, +1, -1, +2],
    "恶魔": [-2, +1, -1, +1, +1, +2, -1, -1],
    "塔": [-1, -2, +1, +1, +1, +1, -1, -1],
    "星星": [+1, -1, +1, -1, +1, -1, +1, +1],
    "月亮": [-1, +2, +1, -1, +1, -1, -1, -1],
    "太阳": [+1, -1, -1, +1, +1, -1, +2, +1],
    "审判": [-1, -1, +1, -1, +1, +1, -1, -1]
};
var arcana2Combos = [
    { 'source': ['愚者', '愚者'], 'result': '愚者' },
    { 'source': ['愚者', '魔术师'], 'result': '死神' },
    { 'source': ['愚者', '女教皇'], 'result': '月亮' },
    { 'source': ['愚者', '女皇'], 'result': '倒悬者' },
    { 'source': ['愚者', '皇帝'], 'result': '节制' },
    { 'source': ['愚者', '教皇'], 'result': '隐士' },
    { 'source': ['愚者', '恋爱'], 'result': '战车' },
    { 'source': ['愚者', '战车'], 'result': '月亮' },
    { 'source': ['愚者', '正义'], 'result': '星星' },
    { 'source': ['愚者', '隐士'], 'result': '女教皇' },
    { 'source': ['愚者', '命运'], 'result': '恋爱' },
    { 'source': ['愚者', '力量'], 'result': '死神' },
    { 'source': ['愚者', '倒悬者'], 'result': '塔' },
    { 'source': ['愚者', '死神'], 'result': '力量' },
    { 'source': ['愚者', '节制'], 'result': '教皇' },
    { 'source': ['愚者', '恶魔'], 'result': '节制' },
    { 'source': ['愚者', '塔'], 'result': '女皇' },
    { 'source': ['愚者', '星星'], 'result': '魔术师' },
    { 'source': ['愚者', '月亮'], 'result': '正义' },
    { 'source': ['愚者', '太阳'], 'result': '正义' },
    { 'source': ['愚者', '审判'], 'result': '太阳' },
    { 'source': ['魔术师', '魔术师'], 'result': '魔术师' },
    { 'source': ['魔术师', '女教皇'], 'result': '节制' },
    { 'source': ['魔术师', '女皇'], 'result': '正义' },
    { 'source': ['魔术师', '皇帝'], 'result': '倒悬者' },
    { 'source': ['魔术师', '教皇'], 'result': '死神' },
    { 'source': ['魔术师', '恋爱'], 'result': '恶魔' },
    { 'source': ['魔术师', '战车'], 'result': '女教皇' },
    { 'source': ['魔术师', '正义'], 'result': '皇帝' },
    { 'source': ['魔术师', '隐士'], 'result': '恋爱' },
    { 'source': ['魔术师', '命运'], 'result': '正义' },
    { 'source': ['魔术师', '力量'], 'result': '愚者' },
    { 'source': ['魔术师', '倒悬者'], 'result': '女皇' },
    { 'source': ['魔术师', '死神'], 'result': '隐士' },
    { 'source': ['魔术师', '节制'], 'result': '战车' },
    { 'source': ['魔术师', '恶魔'], 'result': '教皇' },
    { 'source': ['魔术师', '塔'], 'result': '节制' },
    { 'source': ['魔术师', '星星'], 'result': '女教皇' },
    { 'source': ['魔术师', '月亮'], 'result': '恋爱' },
    { 'source': ['魔术师', '太阳'], 'result': '教皇' },
    { 'source': ['魔术师', '审判'], 'result': '力量' },
    { 'source': ['女教皇', '女教皇'], 'result': '女教皇' },
    { 'source': ['女教皇', '女皇'], 'result': '皇帝' },
    { 'source': ['女教皇', '皇帝'], 'result': '女皇' },
    { 'source': ['女教皇', '教皇'], 'result': '魔术师' },
    { 'source': ['女教皇', '恋爱'], 'result': '命运' },
    { 'source': ['女教皇', '战车'], 'result': '教皇' },
    { 'source': ['女教皇', '正义'], 'result': '死神' },
    { 'source': ['女教皇', '隐士'], 'result': '节制' },
    { 'source': ['女教皇', '命运'], 'result': '魔术师' },
    { 'source': ['女教皇', '力量'], 'result': '恶魔' },
    { 'source': ['女教皇', '倒悬者'], 'result': '死神' },
    { 'source': ['女教皇', '死神'], 'result': '魔术师' },
    { 'source': ['女教皇', '节制'], 'result': '恶魔' },
    { 'source': ['女教皇', '恶魔'], 'result': '月亮' },
    { 'source': ['女教皇', '塔'], 'result': '倒悬者' },
    { 'source': ['女教皇', '星星'], 'result': '隐士' },
    { 'source': ['女教皇', '月亮'], 'result': '教皇' },
    { 'source': ['女教皇', '太阳'], 'result': '战车' },
    { 'source': ['女教皇', '审判'], 'result': '正义' },
    { 'source': ['女皇', '女皇'], 'result': '女皇' },
    { 'source': ['女皇', '皇帝'], 'result': '正义' },
    { 'source': ['女皇', '教皇'], 'result': '愚者' },
    { 'source': ['女皇', '恋爱'], 'result': '审判' },
    { 'source': ['女皇', '战车'], 'result': '星星' },
    { 'source': ['女皇', '正义'], 'result': '恋爱' },
    { 'source': ['女皇', '隐士'], 'result': '力量' },
    { 'source': ['女皇', '命运'], 'result': '隐士' },
    { 'source': ['女皇', '力量'], 'result': '战车' },
    { 'source': ['女皇', '倒悬者'], 'result': '女教皇' },
    { 'source': ['女皇', '死神'], 'result': '愚者' },
    { 'source': ['女皇', '节制'], 'result': '女教皇' },
    { 'source': ['女皇', '恶魔'], 'result': '太阳' },
    { 'source': ['女皇', '塔'], 'result': '皇帝' },
    { 'source': ['女皇', '星星'], 'result': '恋爱' },
    { 'source': ['女皇', '月亮'], 'result': '命运' },
    { 'source': ['女皇', '太阳'], 'result': '塔' },
    { 'source': ['女皇', '审判'], 'result': '皇帝' },
    { 'source': ['皇帝', '皇帝'], 'result': '皇帝' },
    { 'source': ['皇帝', '教皇'], 'result': '命运' },
    { 'source': ['皇帝', '恋爱'], 'result': '愚者' },
    { 'source': ['皇帝', '战车'], 'result': '力量' },
    { 'source': ['皇帝', '正义'], 'result': '战车' },
    { 'source': ['皇帝', '隐士'], 'result': '教皇' },
    { 'source': ['皇帝', '命运'], 'result': '太阳' },
    { 'source': ['皇帝', '力量'], 'result': '塔' },
    { 'source': ['皇帝', '倒悬者'], 'result': '恶魔' },
    { 'source': ['皇帝', '死神'], 'result': '隐士' },
    { 'source': ['皇帝', '节制'], 'result': '恶魔' },
    { 'source': ['皇帝', '恶魔'], 'result': '正义' },
    { 'source': ['皇帝', '塔'], 'result': '星星' },
    { 'source': ['皇帝', '星星'], 'result': '恋爱' },
    { 'source': ['皇帝', '月亮'], 'result': '塔' },
    { 'source': ['皇帝', '太阳'], 'result': '审判' },
    { 'source': ['皇帝', '审判'], 'result': '女教皇' },
    { 'source': ['教皇', '教皇'], 'result': '教皇' },
    { 'source': ['教皇', '恋爱'], 'result': '力量' },
    { 'source': ['教皇', '战车'], 'result': '星星' },
    { 'source': ['教皇', '正义'], 'result': '倒悬者' },
    { 'source': ['教皇', '隐士'], 'result': '命运' },
    { 'source': ['教皇', '命运'], 'result': '正义' },
    { 'source': ['教皇', '力量'], 'result': '愚者' },
    { 'source': ['教皇', '倒悬者'], 'result': '太阳' },
    { 'source': ['教皇', '死神'], 'result': '战车' },
    { 'source': ['教皇', '节制'], 'result': '死神' },
    { 'source': ['教皇', '恶魔'], 'result': '倒悬者' },
    { 'source': ['教皇', '塔'], 'result': '审判' },
    { 'source': ['教皇', '星星'], 'result': '塔' },
    { 'source': ['教皇', '月亮'], 'result': '女教皇' },
    { 'source': ['教皇', '太阳'], 'result': '恋爱' },
    { 'source': ['教皇', '审判'], 'result': '女皇' },
    { 'source': ['恋爱', '恋爱'], 'result': '恋爱' },
    { 'source': ['恋爱', '战车'], 'result': '节制' },
    { 'source': ['恋爱', '正义'], 'result': '审判' },
    { 'source': ['恋爱', '隐士'], 'result': '战车' },
    { 'source': ['恋爱', '命运'], 'result': '力量' },
    { 'source': ['恋爱', '力量'], 'result': '死神' },
    { 'source': ['恋爱', '倒悬者'], 'result': '太阳' },
    { 'source': ['恋爱', '死神'], 'result': '节制' },
    { 'source': ['恋爱', '节制'], 'result': '力量' },
    { 'source': ['恋爱', '恶魔'], 'result': '月亮' },
    { 'source': ['恋爱', '塔'], 'result': '女皇' },
    { 'source': ['恋爱', '星星'], 'result': '战车' },
    { 'source': ['恋爱', '月亮'], 'result': '魔术师' },
    { 'source': ['恋爱', '太阳'], 'result': '女皇' },
    { 'source': ['恋爱', '审判'], 'result': '倒悬者' },
    { 'source': ['战车', '战车'], 'result': '战车' },
    { 'source': ['战车', '正义'], 'result': '月亮' },
    { 'source': ['战车', '隐士'], 'result': '恶魔' },
    { 'source': ['战车', '命运'], 'result': '女教皇' },
    { 'source': ['战车', '力量'], 'result': '隐士' },
    { 'source': ['战车', '倒悬者'], 'result': '愚者' },
    { 'source': ['战车', '死神'], 'result': '恶魔' },
    { 'source': ['战车', '节制'], 'result': '力量' },
    { 'source': ['战车', '恶魔'], 'result': '节制' },
    { 'source': ['战车', '塔'], 'result': '命运' },
    { 'source': ['战车', '星星'], 'result': '月亮' },
    { 'source': ['战车', '月亮'], 'result': '恋爱' },
    { 'source': ['战车', '太阳'], 'result': '女教皇' },
    { 'source': ['正义', '正义'], 'result': '正义' },
    { 'source': ['正义', '隐士'], 'result': '魔术师' },
    { 'source': ['正义', '命运'], 'result': '皇帝' },
    { 'source': ['正义', '力量'], 'result': '教皇' },
    { 'source': ['正义', '倒悬者'], 'result': '恋爱' },
    { 'source': ['正义', '死神'], 'result': '愚者' },
    { 'source': ['正义', '节制'], 'result': '皇帝' },
    { 'source': ['正义', '恶魔'], 'result': '愚者' },
    { 'source': ['正义', '塔'], 'result': '太阳' },
    { 'source': ['正义', '星星'], 'result': '女皇' },
    { 'source': ['正义', '月亮'], 'result': '恶魔' },
    { 'source': ['正义', '太阳'], 'result': '倒悬者' },
    { 'source': ['隐士', '隐士'], 'result': '隐士' },
    { 'source': ['隐士', '命运'], 'result': '星星' },
    { 'source': ['隐士', '力量'], 'result': '教皇' },
    { 'source': ['隐士', '倒悬者'], 'result': '星星' },
    { 'source': ['隐士', '死神'], 'result': '力量' },
    { 'source': ['隐士', '节制'], 'result': '力量' },
    { 'source': ['隐士', '恶魔'], 'result': '女教皇' },
    { 'source': ['隐士', '塔'], 'result': '审判' },
    { 'source': ['隐士', '星星'], 'result': '力量' },
    { 'source': ['隐士', '月亮'], 'result': '女教皇' },
    { 'source': ['隐士', '太阳'], 'result': '恶魔' },
    { 'source': ['隐士', '审判'], 'result': '皇帝' },
    { 'source': ['命运', '命运'], 'result': '命运' },
    { 'source': ['命运', '力量'], 'result': '节制' },
    { 'source': ['命运', '倒悬者'], 'result': '皇帝' },
    { 'source': ['命运', '死神'], 'result': '星星' },
    { 'source': ['命运', '节制'], 'result': '女皇' },
    { 'source': ['命运', '恶魔'], 'result': '教皇' },
    { 'source': ['命运', '塔'], 'result': '倒悬者' },
    { 'source': ['命运', '星星'], 'result': '恶魔' },
    { 'source': ['命运', '月亮'], 'result': '太阳' },
    { 'source': ['命运', '太阳'], 'result': '星星' },
    { 'source': ['命运', '审判'], 'result': '塔' },
    { 'source': ['力量', '力量'], 'result': '力量' },
    { 'source': ['力量', '倒悬者'], 'result': '节制' },
    { 'source': ['力量', '死神'], 'result': '教皇' },
    { 'source': ['力量', '节制'], 'result': '战车' },
    { 'source': ['力量', '恶魔'], 'result': '死神' },
    { 'source': ['力量', '塔'], 'result': '战车' },
    { 'source': ['力量', '星星'], 'result': '月亮' },
    { 'source': ['力量', '月亮'], 'result': '魔术师' },
    { 'source': ['力量', '太阳'], 'result': '月亮' },
    { 'source': ['倒悬者', '倒悬者'], 'result': '倒悬者' },
    { 'source': ['倒悬者', '死神'], 'result': '月亮' },
    { 'source': ['倒悬者', '节制'], 'result': '死神' },
    { 'source': ['倒悬者', '恶魔'], 'result': '命运' },
    { 'source': ['倒悬者', '塔'], 'result': '隐士' },
    { 'source': ['倒悬者', '星星'], 'result': '正义' },
    { 'source': ['倒悬者', '月亮'], 'result': '力量' },
    { 'source': ['倒悬者', '太阳'], 'result': '教皇' },
    { 'source': ['倒悬者', '审判'], 'result': '星星' },
    { 'source': ['死神', '死神'], 'result': '死神' },
    { 'source': ['死神', '节制'], 'result': '倒悬者' },
    { 'source': ['死神', '恶魔'], 'result': '战车' },
    { 'source': ['死神', '塔'], 'result': '太阳' },
    { 'source': ['死神', '星星'], 'result': '恶魔' },
    { 'source': ['死神', '月亮'], 'result': '教皇' },
    { 'source': ['死神', '太阳'], 'result': '女教皇' },
    { 'source': ['节制', '节制'], 'result': '节制' },
    { 'source': ['节制', '恶魔'], 'result': '愚者' },
    { 'source': ['节制', '塔'], 'result': '命运' },
    { 'source': ['节制', '星星'], 'result': '太阳' },
    { 'source': ['节制', '月亮'], 'result': '命运' },
    { 'source': ['节制', '太阳'], 'result': '魔术师' },
    { 'source': ['节制', '审判'], 'result': '隐士' },
    { 'source': ['恶魔', '恶魔'], 'result': '恶魔' },
    { 'source': ['恶魔', '塔'], 'result': '魔术师' },
    { 'source': ['恶魔', '星星'], 'result': '力量' },
    { 'source': ['恶魔', '月亮'], 'result': '战车' },
    { 'source': ['恶魔', '太阳'], 'result': '隐士' },
    { 'source': ['恶魔', '审判'], 'result': '恋爱' },
    { 'source': ['塔', '塔'], 'result': '塔' },
    { 'source': ['塔', '星星'], 'result': '死神' },
    { 'source': ['塔', '月亮'], 'result': '隐士' },
    { 'source': ['塔', '太阳'], 'result': '皇帝' },
    { 'source': ['塔', '审判'], 'result': '月亮' },
    { 'source': ['星星', '星星'], 'result': '星星' },
    { 'source': ['星星', '月亮'], 'result': '节制' },
    { 'source': ['星星', '太阳'], 'result': '审判' },
    { 'source': ['星星', '审判'], 'result': '命运' },
    { 'source': ['月亮', '月亮'], 'result': '月亮' },
    { 'source': ['月亮', '太阳'], 'result': '女皇' },
    { 'source': ['月亮', '审判'], 'result': '愚者' },
    { 'source': ['太阳', '太阳'], 'result': '太阳' },
    { 'source': ['太阳', '审判'], 'result': '死神' },
    { 'source': ['审判', '审判'], 'result': '审判' }
];
var specialCombos = [
    { 'result': '爱丽丝', 'sources': ['奈比洛斯', '贝利亚'] },
    { 'result': '阿尔达', 'sources': ['帕尔瓦蒂', '湿婆'] },
    { 'result': '阿修罗王', 'sources': ['增长天', '持国天', '广目天', '昆沙门天'] },
    { 'result': '邪恶霜精', 'sources': ['Jack O\'Lantern', '杰克霜精', '霜精之王'] },
    { 'result': '巴古斯', 'sources': ['皮克希', '毕舍遮', '诃梨帝母'] },
    { 'result': '蚩尤', 'sources': ['百臂巨人', '白骑士', '托尔', '义经', '库夫林'] },
    { 'result': '佛劳洛斯', 'sources': ['比列', '安德拉斯', '埃力格'] },
    { 'result': '黄龙', 'sources': [' 玄武', '青龙', '朱雀', '白虎'] },
    { 'result': '路西法', 'sources': ['阿努比斯', '阿难陀', '吹号者', '米迦勒', '梅塔特隆', '撒旦'] },
    { 'result': '梅塔特隆', 'sources': ['权天使', '能天使', '主天使', '默基瑟德', '圣达芬', '米迦勒'] },
    { 'result': '米迦勒', 'sources': ['拉斐尔', '加百列', '尤利尔'] },
    { 'result': '猫将军', 'sources': ['木灵', '山灵', '安祖'] },
    { 'result': '隐形鬼', 'sources': ['金鬼', '水鬼', '风鬼'] },
    { 'result': '撒旦耶尔', 'sources': ['亚森', '安祖', '伊丝塔', '撒旦', '路西法', '米迦勒'] },
    { 'result': '赛特', 'sources': ['伊西丝', '图特', '阿努比斯', '荷鲁斯'] },
    { 'result': '湿婆', 'sources': ['兰达', '巴隆'] },
    { 'result': '斯拉欧加', 'sources': ['密特拉', '米特拉斯', '默基瑟德', '莉莉丝', '加百列'] },
    { 'result': '座天使', 'sources': ['能天使', '默基瑟德', '主天使'] },
    { 'result': '吹号者', 'sources': ['白骑士', '红骑士', '黑骑士', '苍白骑士'] },
    { 'result': '婆苏古', 'sources': ['娜迦', '蛇龙王', '阿难陀'] },
    { 'result': '义经', 'sources': ['大国主', '式王子', '荒霸吐', '八咫鸟', '经津主'] }
];
var dlcPersona = [["俄耳甫斯", "俄耳甫斯 贼神"], ["伊邪纳岐", "伊邪纳岐 贼神"], ["塔纳托斯", "塔纳托斯 贼神"],
    ["祸津伊邪纳岐", "祸津伊邪纳岐 贼神"], ["辉夜", "辉夜 贼神"], ["アリアドネ", "アリアドネ 贼神"],
    ["アステリオス", "アステリオス 贼神"], ["ツキヨミ", "ツキヨミ 贼神"], ["メサイア", "メサイア 贼神"]];
