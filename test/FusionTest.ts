///<reference path="../data/Data5.ts"/>
///<reference path="../src/DataUtil.ts"/>
///<reference path="../src/FusionCalculator.ts"/>
///<reference path="../data/PersonaData.ts"/>
///<reference path="d.ts/mocha.d.ts"/>
///<reference path="d.ts/expect.js.d.ts"/>

const fullPersonaeByArcana : {[arcana: string]: PersonaData[]} = (() =>{
    let personaeByArcana_ = {};
    for (let i = 0; i < fullPersonaList.length; i++) {
        let persona = fullPersonaList[i];
        if (!personaeByArcana_[persona.arcana]) {
            personaeByArcana_[persona.arcana] = [];
        }
        personaeByArcana_[persona.arcana].push(persona);
    }

    for (let key in personaeByArcana_) {
        personaeByArcana_[key].sort((a,b) => a.level - b.level);
    }

    return personaeByArcana_;
})();

let calc = new FusionCalculator(fullPersonaeByArcana);

function fuseTestWrapper(persona1Name: string, persona2Name: string): PersonaData {
    return calc.fuse(personaMap[persona1Name], personaMap[persona2Name]);
}

function containAll(recipe: Recipe, personaNames: string[]): boolean {
    return personaNames.map(a => personaMap[a])
        .every(val => recipe.sources.indexOf(val) !== -1);
}

describe('FusionCalculator', () => {
    describe('#fuse()', () => {
        describe('same arcana fusion', () => {
            it('should return null when fusing 2 lowest rank persona', () => {
                expect(fuseTestWrapper("背负怪", "亚森")).to.equal(null);
            });

            it('should return correct persona when fusing 2 highest rank persona', () => {
                expect(fuseTestWrapper("别西卜", "贝利亚")).to.equal(personaMap["奈比洛斯"]);
            });

            it('should return correct persona when have to skip special persona below 2 ingredients', () => {
                expect(fuseTestWrapper("阿难陀", "迦温")).to.equal(personaMap["风鬼"]);
            });

            it('should return correct persona when have to skip rare persona below 2 ingredients', () => {
                expect(fuseTestWrapper("摩洛", "百臂巨人")).to.equal(personaMap["建御名方"]);
            });

            it('should return correct persona when have to skip rare and special personae below 2 ingredients', () => {
                expect(fuseTestWrapper("狄俄尼索斯", "邪恶霜精")).to.equal(personaMap["欧赛"]);
            });

            it('should return correct persona when result level is midway of 2 ingredients, and right on level', () => {
                expect(fuseTestWrapper("式王子", "软泥怪")).to.equal(personaMap["狮爷"]);
            });

            it('should return correct persona when result level is midway of 2 ingredients, and have to go down', () => {
                expect(fuseTestWrapper("式王子", "软泥怪")).to.equal(personaMap["狮爷"]);
            });

            it('should return correct persona when have to skip rare midway and skip ingredient when fusing 2 persona', () => {
                expect(fuseTestWrapper("建御名方", "百臂巨人")).to.equal(personaMap["欧特鲁斯"]);
            });

            it('should return null when have to skip special midway, then skip ingredient, and ingredient is lowest in arcana rank', () => {
                expect(fuseTestWrapper("メサイア", "阿努比斯")).to.equal(null);
            });
        });

        describe('different arcana fusion', function () {
            it('should return null when result level is higher than the highest level persona in the resulting arcana ' +
                '(tower 79 + fool 83 -> empress 81 -> null)', () => {
                expect(fuseTestWrapper("毗湿奴", "义经")).to.equal(null);
            });

            it('should return correct persona when result is the highest ranked persona in the resulting arcana ' +
                '(judgement 92 + hierophant 63 -> empress 80)', () => {
                expect(fuseTestWrapper("撒旦", "佛钮司")).to.equal(personaMap["巴比伦大荡妇"]);
            });

            it('should return correct persona when fusing 2 persona, one highest rank and one lowest rank ' +
                '(star 93 + temperance 7 -> sun 53)', () => {
                expect(fuseTestWrapper("路西法", "玄武")).to.equal(personaMap["象头神"]);
            });

            it('should return correct persona when fusing 2 rare persona', () => {
                expect(fuseTestWrapper("水晶骷髅", "摄政者")).to.equal(personaMap["密特拉"]);
            });
        });

        describe('special fusion', function () {
            it('should return 爱丽丝 when fusing 奈比洛斯 and 贝利亚', () => {
                expect(fuseTestWrapper("奈比洛斯", "贝利亚")).to.equal(personaMap["爱丽丝"]);
            });

            it('should return 湿婆 when fusing 兰达 and 巴隆', () => {
                expect(fuseTestWrapper("兰达", "巴隆")).to.equal(personaMap["湿婆"]);
            });

            it('should return 阿尔达 when fusing 帕尔瓦蒂 and 湿婆', () => {
                expect(fuseTestWrapper("帕尔瓦蒂", "湿婆")).to.equal(personaMap["阿尔达"]);
            });
        });

        describe('rare fusion', function () {
            it('should return correct persona when go down one', () => {
                expect(fuseTestWrapper("摄政者", "背负怪")).to.equal(personaMap["亚森"]);
            });

            it('should return correct persona when go up two', () => {
                expect(fuseTestWrapper("命运之石", "猫怪")).to.equal(personaMap["克伦佐"]);
            });

            it('should return correct persona when go up one and skip special', () => {
                expect(fuseTestWrapper("欧鲁罗芙", "风鬼")).to.equal(personaMap["迦温"]);
            });

            it('should return correct persona when go up one and have special persona as ingredient', () => {
                expect(fuseTestWrapper("欧鲁罗芙", "猫将军")).to.equal(personaMap["迦温"]);
            });
        });

        describe('impossible fusions with 审判', function () {
            it('should return null when fusing 审判 + Death', () => {
                expect(fuseTestWrapper("メサイア", "曼陀罗")).to.equal(null);
                expect(fuseTestWrapper("吹号者", "地狱天使")).to.equal(null);
            });

            it('should return null when fusing 审判 + 战车', () => {
                expect(fuseTestWrapper("メサイア", "阿珈席翁")).to.equal(null);
            });

            it('should return null when fusing 审判 + 力量', () => {
                expect(fuseTestWrapper("メサイア 贼神", "凯尔皮")).to.equal(null);
            });

            it('should return null when fusing 审判 + 正义', () => {
                expect(fuseTestWrapper("メサイア 贼神", "天使")).to.equal(null);
                expect(fuseTestWrapper("能天使", "阿努比斯")).to.equal(null);
            });
        });
    });

    describe('#getRecipes()', () => {
        describe('special fusions', function () {
            it('should return correct recipe for 阿尔达', () => {
                let recipes = calc.getRecipes(personaMap["阿尔达"]);
                expect(recipes).to.have.length(1);
                expect(recipes[0].sources).to.have.length(2);
                expect(containAll(recipes[0], ['帕尔瓦蒂', '湿婆'])).to.be(true);
            });

            it('should return correct recipe for 爱丽丝', () => {
                let recipes = calc.getRecipes(personaMap["爱丽丝"]);
                expect(recipes).to.have.length(1);
                expect(recipes[0].sources).to.have.length(2);
                expect(containAll(recipes[0], ['贝利亚', '奈比洛斯'])).to.be(true);
            });

            it('should return correct recipe for 隐形鬼', () => {
                let recipes = calc.getRecipes(personaMap["隐形鬼"]);
                expect(recipes).to.have.length(1);
                expect(recipes[0].sources).to.have.length(3);
                expect(containAll(recipes[0], ['金鬼', '水鬼', '风鬼'])).to.be(true);
            });

            it('should return correct recipe for 黄龙', () => {
                let recipes = calc.getRecipes(personaMap["黄龙"]);
                expect(recipes).to.have.length(1);
                expect(recipes[0].sources).to.have.length(4);
                expect(containAll(recipes[0], ['玄武', '青龙', '朱雀', '白虎'])).to.be(true);
            });

            it('should return correct recipe for 斯拉欧加', () => {
                let recipes = calc.getRecipes(personaMap["斯拉欧加"]);
                expect(recipes).to.have.length(1);
                expect(recipes[0].sources).to.have.length(5);
                expect(containAll(recipes[0], ['密特拉', '米特拉斯', '默基瑟德', '莉莉丝', '加百列'])).to.be(true);
            });

            it('should return correct recipe for 撒旦耶尔', () => {
                let recipes = calc.getRecipes(personaMap["撒旦耶尔"]);
                expect(recipes).to.have.length(1);
                expect(recipes[0].sources).to.have.length(6);
                expect(containAll(recipes[0], ['亚森', '安祖', '伊丝塔', '撒旦', '路西法', '米迦勒'])).to.be(true);
            });
        });

        describe('rare persona (cannot be fused)', function () {
            it('should return empty recipe list for 摄政者', () => {
                let recipes = calc.getRecipes(personaMap["摄政者"]);
                expect(recipes).to.have.length(0);
            });

            it('should return empty recipe list for 命运之石', () => {
                let recipes = calc.getRecipes(personaMap["命运之石"]);
                expect(recipes).to.have.length(0);
            });

            it('should return empty recipe list for 欧鲁罗芙', () => {
                let recipes = calc.getRecipes(personaMap["欧鲁罗芙"]);
                expect(recipes).to.have.length(0);
            });
        });

        // note: these count the number of recipes and may not be correct
        describe('normal fusion', function () {
            it('should return correct number of recipe for 亚森', () => {
                let recipes = calc.getRecipes(personaMap["亚森"]);
                expect(recipes).to.have.length(6);
            });

            it('should return correct number of recipe for 飞天', () => {
                let recipes = calc.getRecipes(personaMap["飞天"]);
                expect(recipes).to.have.length(35);
            });

            it('should return correct number of recipe for 欧特鲁斯', () => {
                let recipes = calc.getRecipes(personaMap["欧特鲁斯"]);
                expect(recipes).to.have.length(46);
            });

            it('should return correct number of recipe for 菊理媛', () => {
                let recipes = calc.getRecipes(personaMap["菊理媛"]);
                expect(recipes).to.have.length(333);
            });

            it('should return correct number of recipe for 莉莉丝', () => {
                let recipes = calc.getRecipes(personaMap["莉莉丝"]);
                expect(recipes).to.have.length(82);
            });

            it('should return correct number of recipe for 伊丝塔', () => {
                let recipes = calc.getRecipes(personaMap["伊丝塔"]);
                expect(recipes).to.have.length(22);
            });
        });
    });
});

describe('Data', () => {
    it("all persona's skills should be in the skill list", () => {
        expect(checkSkill()).to.equal(true);
    });

    it("all skills in SkillData should have valid persona in the persona list, and " +
        "all skills in SkillData should have correct list of persona that learn that skill at the correct level", () => {
        expect(checkSkillPersona()).to.equal(true);
    });
});

function checkSkill() {
    let isGood = true;
    for (let i = 0; i < fullPersonaList.length; i++) {
        for (let key in fullPersonaList[i].skills) {
            if (fullPersonaList[i].skills.hasOwnProperty(key)) {
                if (!skillMap[key]) {
                    isGood = false;
                    throw new Error("Skill not found: " + key);
                }
            }
        }
    }
    return isGood;
}

function checkSkillPersona() {
    let isGood = true;
    for (let i = 0; i < skillList.length; i++) {
        for (let key in skillList[i].personas) {
            if (skillList[i].personas.hasOwnProperty(key)) {
                if (!personaMap[key]) {
                    isGood = false;
                    throw new Error("Persona not found: " + key);
                }

                let skillLevelInPersonaMap = personaMap[key].skills[skillList[i].name];
                let skillLevelInSkillMap = skillList[i].personas[key];
                if (skillLevelInPersonaMap === undefined) {
                    isGood = false;
                    throw new Error(key + " doesn't learn " + skillList[i].name);
                }

                if (skillLevelInPersonaMap !== skillLevelInSkillMap) {
                    isGood = false;
                    throw new Error(key + " learns " + skillList[i].name + " at at mismatched level");
                }
            }
        }
    }
    return isGood;
}