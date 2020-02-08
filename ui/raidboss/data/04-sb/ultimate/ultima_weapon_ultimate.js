'use strict';

// Ultima Weapon Ultimate
[{
  zoneRegex: {
    en: /^The Weapon's Refrain \(Ultimate\)$/,
    cn: /^究极神兵绝境战$/,
    ko: /^절 알테마 웨폰 파괴작전$/,
  },
  timelineFile: 'ultima_weapon_ultimate.txt',
  timelineTriggers: [
    {
      id: 'UWU Feather Rain',
      regex: /Feather Rain/,
      beforeSeconds: 3,
      infoText: {
        en: 'Move!',
        de: 'Bewegen',
        fr: 'Bougez',
        ja: 'フェザーレイン',
        ko: '이동',
        cn: '躲羽毛',
      },
    },
  ],
  triggers: [
    // Phases
    {
      regex: Regexes.ability({ source: 'The Ultima Weapon', id: '2D4D', capture: false }),
      regexDe: Regexes.ability({ source: 'Ultima-Waffe', id: '2D4D', capture: false }),
      regexFr: Regexes.ability({ source: 'Ultima Arma', id: '2D4D', capture: false }),
      regexJa: Regexes.ability({ source: 'アルテマウェポン', id: '2D4D', capture: false }),
      regexCn: Regexes.ability({ source: '究极神兵', id: '2D4D', capture: false }),
      regexKo: Regexes.ability({ source: '알테마 웨폰', id: '2D4D', capture: false }),
      run: function(data) {
        data.phase = 'suppression';
      },
    },
    {
      // Wait after suppression for primal triggers at the end.
      regex: Regexes.ability({ source: 'The Ultima Weapon', id: '2D4D', capture: false }),
      regexDe: Regexes.ability({ source: 'Ultima-Waffe', id: '2D4D', capture: false }),
      regexFr: Regexes.ability({ source: 'Ultima Arma', id: '2D4D', capture: false }),
      regexJa: Regexes.ability({ source: 'アルテマウェポン', id: '2D4D', capture: false }),
      regexCn: Regexes.ability({ source: '究极神兵', id: '2D4D', capture: false }),
      regexKo: Regexes.ability({ source: '알테마 웨폰', id: '2D4D', capture: false }),
      delaySeconds: 74,
      run: function(data) {
        data.phase = 'finale';
      },
    },
    {
      id: 'UWU Garuda Slipstream',
      regex: Regexes.startsUsing({ id: '2B53', source: 'Garuda', capture: false }),
      regexDe: Regexes.startsUsing({ id: '2B53', source: 'Garuda', capture: false }),
      regexFr: Regexes.startsUsing({ id: '2B53', source: 'Garuda', capture: false }),
      regexJa: Regexes.startsUsing({ id: '2B53', source: 'ガルーダ', capture: false }),
      regexCn: Regexes.startsUsing({ id: '2B53', source: '迦楼罗', capture: false }),
      regexKo: Regexes.startsUsing({ id: '2B53', source: '가루다', capture: false }),
      condition: function(data) {
        return data.role == 'tank';
      },
      alertText: {
        en: 'Slipstream',
        de: 'Wirbelströmung',
        fr: 'Sillage',
        ja: 'スリップストリーム',
        ko: '반동 기류',
        cn: '螺旋气流',
      },
    },
    {
      id: 'UWU Garuda Mistral Song Marker',
      regex: Regexes.headMarker({ id: '0010' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      alertText: {
        en: 'Mistral on YOU',
        de: 'Mistral-Song',
        fr: 'Chant Du Mistral',
        ja: 'ミストラルソング',
        ko: '삭풍 징',
        cn: '寒风之歌点名',
      },
    },
    {
      id: 'UWU Garuda Mistral Song Tank',
      regex: Regexes.headMarker({ id: '0010', capture: false }),
      condition: function(data) {
        return data.role == 'tank';
      },
      suppressSeconds: 5,
      infoText: {
        en: 'Mistral Song',
        de: 'Mistral-Song',
        fr: 'Chant Du Mistral',
        ja: 'ミストラルソング',
        ko: '삭풍 징',
        cn: '寒风之歌',
      },
    },
    {
      id: 'UWU Garuda Spiny Plume',
      regex: Regexes.addedCombatant({ name: 'Spiny Plume', capture: false }),
      regexDe: Regexes.addedCombatant({ name: 'Dornig(?:e|er|es|en) Federsturm', capture: false }),
      regexFr: Regexes.addedCombatant({ name: 'Plume Perforante', capture: false }),
      regexJa: Regexes.addedCombatant({ name: 'スパイニープルーム', capture: false }),
      regexCn: Regexes.addedCombatant({ name: '刺羽', capture: false }),
      regexKo: Regexes.addedCombatant({ name: '가시돋힌 깃털', capture: false }),
      condition: function(data) {
        return data.role == 'tank';
      },
      infoText: {
        en: 'Spiny Plume Add',
        de: 'Dorniger Federsturm',
        fr: 'Plume Perforante',
        ja: 'スパイニープルーム',
        ko: '가시돋힌 깃털 등장',
        cn: '刺羽出现',
      },
    },
    {
      id: 'UWU Ifrit Fetters',
      regex: Regexes.gainsEffect({ effect: 'Infernal Fetters' }),
      regexDe: Regexes.gainsEffect({ effect: 'Infernofesseln' }),
      regexFr: Regexes.gainsEffect({ effect: 'Chaînes Infernales' }),
      regexJa: Regexes.gainsEffect({ effect: '炎獄の鎖' }),
      regexCn: Regexes.gainsEffect({ effect: '火狱之锁' }),
      regexKo: Regexes.gainsEffect({ effect: '염옥의 사슬' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      suppressSeconds: 45,
      infoText: {
        en: 'Fetters on YOU',
        de: 'Fesseln auf DIR',
        fr: 'Chaînes Infernales',
        ja: '自分に炎獄の鎖',
        ko: '사슬 → 나',
        cn: '火狱之锁点名',
      },
      tts: {
        en: 'Fetters',
        de: 'Fesseln',
        fr: 'Chaînes Infernales',
        ja: '炎獄の鎖',
        ko: '사슬',
        cn: '火狱之锁',
      },
    },
    {
      id: 'UWU Searing Wind',
      regex: Regexes.startsUsing({ id: '2B5B', source: 'Ifrit' }),
      regexDe: Regexes.startsUsing({ id: '2B5B', source: 'Ifrit' }),
      regexFr: Regexes.startsUsing({ id: '2B5B', source: 'Ifrit' }),
      regexJa: Regexes.startsUsing({ id: '2B5B', source: 'イフリート' }),
      regexCn: Regexes.startsUsing({ id: '2B5B', source: '伊弗利特' }),
      regexKo: Regexes.startsUsing({ id: '2B5B', source: '이프리트' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      alarmText: {
        en: 'Searing Wind on YOU',
        de: 'Versengen auf DIR',
        fr: 'Rugissement Infernal',
        ja: '自分に灼熱',
        ko: '작열 → 나',
        cn: '灼热咆哮点名',
      },
      tts: {
        en: 'Searing Wind',
        de: 'Versengen',
        fr: 'Rugissement Infernal',
        ja: '灼熱',
        ko: '작열',
        cn: '灼热咆哮',
      },
    },
    {
      id: 'UWU Ifrit Flaming Crush',
      regex: Regexes.headMarker({ id: '0075', capture: false }),
      alertText: {
        en: 'Stack',
        de: 'Stack',
        fr: 'Stack',
        ja: '頭割り',
        ko: '집합',
        cn: '集合',
      },
    },
    {
      id: 'UWU Garuda Woken',
      regex: Regexes.gainsEffect({ target: 'Garuda', effect: 'Woken', capture: false }),
      regexDe: Regexes.gainsEffect({ target: 'Garuda', effect: 'Ätherüberladung', capture: false }),
      regexFr: Regexes.gainsEffect({ target: 'Garuda', effect: 'Éveil Éthéré', capture: false }),
      regexJa: Regexes.gainsEffect({ target: 'ガルーダ', effect: '覚醒', capture: false }),
      regexCn: Regexes.gainsEffect({ target: '迦楼罗', effect: '觉醒', capture: false }),
      regexKo: Regexes.gainsEffect({ target: '가루다', effect: '각성', capture: false }),
      sound: 'Long',
    },
    {
      id: 'UWU Ifrit Woken',
      regex: Regexes.gainsEffect({ target: 'Ifrit', effect: 'Woken', capture: false }),
      regexDe: Regexes.gainsEffect({ target: 'Ifrit', effect: 'Ätherüberladung', capture: false }),
      regexFr: Regexes.gainsEffect({ target: 'Ifrit', effect: 'Éveil Éthéré', capture: false }),
      regexJa: Regexes.gainsEffect({ target: 'イフリート', effect: '覚醒', capture: false }),
      regexCn: Regexes.gainsEffect({ target: '伊弗利特', effect: '觉醒', capture: false }),
      regexKo: Regexes.gainsEffect({ target: '이프리트', effect: '각성', capture: false }),
      sound: 'Long',
    },
    {
      id: 'UWU Titan Woken',
      regex: Regexes.gainsEffect({ target: 'Titan', effect: 'Woken', capture: false }),
      regexDe: Regexes.gainsEffect({ target: 'Titan', effect: 'Ätherüberladung', capture: false }),
      regexFr: Regexes.gainsEffect({ target: 'Titan', effect: 'Éveil Éthéré', capture: false }),
      regexJa: Regexes.gainsEffect({ target: 'タイタン', effect: '覚醒', capture: false }),
      regexCn: Regexes.gainsEffect({ target: '泰坦', effect: '觉醒', capture: false }),
      regexKo: Regexes.gainsEffect({ target: '타이탄', effect: '각성', capture: false }),
      sound: 'Long',
    },
    {
      id: 'UWU Titan Gaols',
      regex: Regexes.ability({ id: ['2B6C', '2B6B'], source: ['Garuda', 'Titan'] }),
      regexDe: Regexes.ability({ id: ['2B6C', '2B6B'], source: ['Garuda', 'Titan'] }),
      regexFr: Regexes.ability({ id: ['2B6C', '2B6B'], source: ['Garuda', 'Titan'] }),
      regexJa: Regexes.ability({ id: ['2B6C', '2B6B'], source: ['ガルーダ', 'タイタン'] }),
      regexCn: Regexes.ability({ id: ['2B6C', '2B6B'], source: ['迦楼罗', '泰坦'] }),
      regexKo: Regexes.ability({ id: ['2B6C', '2B6B'], source: ['가루다', '타이탄'] }),
      preRun: function(data, matches) {
        data.titanGaols = data.titanGaols || [];
        data.titanGaols.push(matches.target);
        if (data.titanGaols.length == 3)
          data.titanGaols.sort();
      },
      alertText: function(data) {
        if (data.titanGaols.length != 3)
          return;
        let idx = data.titanGaols.indexOf(data.me);
        if (idx < 0)
          return;
        // Just return your number.
        return idx + 1;
      },
      infoText: function(data) {
        if (data.titanGaols.length != 3)
          return;
        // Return all the people in order.
        return data.titanGaols.map(function(n) {
          return data.ShortName(n);
        }).join(', ');
      },
    },
    {
      // If anybody dies to bombs (WHY) and a rock is on them, then glhf.
      id: 'UWU Titan Bomb Failure',
      regex: Regexes.ability({ id: '2B6A', source: 'Bomb Boulder' }),
      regexDe: Regexes.ability({ id: '2B6A', source: 'Bomber-Brocken' }),
      regexFr: Regexes.ability({ id: '2B6A', source: 'Bombo Rocher' }),
      regexJa: Regexes.ability({ id: '2B6A', source: 'ボムボルダー' }),
      regexCn: Regexes.ability({ id: '2B6A', source: '爆破岩石' }),
      regexKo: Regexes.ability({ id: '2B6A', source: '바위폭탄' }),
      infoText: function(data, matches) {
        if (!data.titanGaols)
          return;
        if (data.titanGaols.indexOf(matches.target) < 0)
          return;
        return {
          en: data.ShortName(matches.target) + ' died',
          de: data.ShortName(matches.target) + ' gestorben',
          ko: data.ShortName(matches.target) + ' 죽음',
          cn: data.ShortName(matches.target) + ' 死亡',
        };
      },
    },
    {
      // Cleanup
      regex: Regexes.ability({ id: ['2B6C', '2B6B'], source: ['Garuda', 'Titan'], capture: false }),
      regexCn: Regexes.ability({ id: ['2B6C', '2B6B'], source: ['迦楼罗', '泰坦'], capture: false }),
      regexDe: Regexes.ability({ id: ['2B6C', '2B6B'], source: ['Garuda', 'Titan'], capture: false }),
      regexFr: Regexes.ability({ id: ['2B6C', '2B6B'], source: ['Garuda', 'Titan'], capture: false }),
      regexJa: Regexes.ability({ id: ['2B6C', '2B6B'], source: ['ガルーダ', 'タイタン'], capture: false }),
      regexKo: Regexes.ability({ id: ['2B6C', '2B6B'], source: ['가루다', '타이탄'], capture: false }),
      delaySeconds: 15,
      run: function(data) {
        delete data.titanGaols;
      },
    },
    {
      id: 'UWU Suppression Gaol',
      regex: Regexes.ability({ id: '2B6B', source: 'Titan' }),
      regexDe: Regexes.ability({ id: '2B6B', source: 'Titan' }),
      regexFr: Regexes.ability({ id: '2B6B', source: 'Titan' }),
      regexJa: Regexes.ability({ id: '2B6B', source: 'タイタン' }),
      regexCn: Regexes.ability({ id: '2B6B', source: '泰坦' }),
      regexKo: Regexes.ability({ id: '2B6B', source: '타이탄' }),
      condition: function(data, matches) {
        return data.phase == 'suppression' && data.me == matches.target;
      },
      alarmText: {
        en: 'Gaol on YOU',
        de: 'Granitgefängnis',
        fr: 'Geôle',
        ja: 'ジェイル',
        ko: '감옥 → 나',
        cn: '石牢点名',
      },
    },
    {
      id: 'UWU Garuda Finale',
      regex: Regexes.ability({ source: 'The Ultima Weapon', id: '2CD3', capture: false }),
      regexDe: Regexes.ability({ source: 'Ultima-Waffe', id: '2CD3', capture: false }),
      regexFr: Regexes.ability({ source: 'Ultima Arma', id: '2CD3', capture: false }),
      regexJa: Regexes.ability({ source: 'アルテマウェポン', id: '2CD3', capture: false }),
      regexCn: Regexes.ability({ source: '究极神兵', id: '2CD3', capture: false }),
      regexKo: Regexes.ability({ source: '알테마 웨폰', id: '2CD3', capture: false }),
      condition: function(data) {
        return data.phase == 'finale';
      },
      infoText: {
        en: 'Garuda',
        de: 'Garuda',
        fr: 'Garuda',
        ja: 'ガルーダ',
        ko: '가루다',
        cn: '迦楼罗',
      },
    },
    {
      id: 'UWU Ifrit Finale',
      regex: Regexes.ability({ source: 'The Ultima Weapon', id: '2CD4', capture: false }),
      regexDe: Regexes.ability({ source: 'Ultima-Waffe', id: '2CD4', capture: false }),
      regexFr: Regexes.ability({ source: 'Ultima Arma', id: '2CD4', capture: false }),
      regexJa: Regexes.ability({ source: 'アルテマウェポン', id: '2CD4', capture: false }),
      regexCn: Regexes.ability({ source: '究极神兵', id: '2CD4', capture: false }),
      regexKo: Regexes.ability({ source: '알테마 웨폰', id: '2CD4', capture: false }),
      condition: function(data) {
        return data.phase == 'finale';
      },
      infoText: {
        en: 'Ifrit',
        de: 'Ifrit',
        fr: 'Ifrit',
        ja: 'イフリート',
        ko: '이프리트',
        cn: '伊弗利特',
      },
    },
    {
      id: 'UWU Titan Finale',
      regex: Regexes.ability({ source: 'The Ultima Weapon', id: '2CD5', capture: false }),
      regexDe: Regexes.ability({ source: 'Ultima-Waffe', id: '2CD5', capture: false }),
      regexFr: Regexes.ability({ source: 'Ultima Arma', id: '2CD5', capture: false }),
      regexJa: Regexes.ability({ source: 'アルテマウェポン', id: '2CD5', capture: false }),
      regexCn: Regexes.ability({ source: '究极神兵', id: '2CD5', capture: false }),
      regexKo: Regexes.ability({ source: '알테마 웨폰', id: '2CD5', capture: false }),
      condition: function(data) {
        return data.phase == 'finale';
      },
      infoText: {
        en: 'Titan',
        de: 'Titan',
        fr: 'Titan',
        ja: 'タイタン',
        ko: '타이탄',
        cn: '泰坦',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        '(?<! )Aetheroplasm': 'Ätheroplasma',
        'Bomb Boulder': 'Bomber-Brocken',
        'Chirada': 'Chirada',
        'Engage!': 'Start!',
        'Garuda': 'Garuda',
        'Granite Gaol': 'Granitgefängnis',
        'Heehee HAHA hahaha HEEHEE haha HEEEEEE': 'Nun, ihr Würmer! Ihr wollt die Macht des Windes spüren?',
        'Ifrit': 'Ifrit',
        'Infernal Nail': 'infernalisch(?:e|er|es|en) Fessel',
        'Lahabrea': 'Lahabrea',
        'Magitek Bit': 'Magitek-Bit',
        'Razor Plume': 'schneidend(?:e|er|es|en) Federsturm',
        'Satin Plume': 'samtig(?:e|er|es|en) Federsturm',
        'Spiny Plume': 'dornig(?:e|er|es|en) Federsturm',
        'Suparna': 'Suparna',
        'The Ultima Weapon': 'Ultima-Waffe',
        'Titan': 'Titan',
        'Ultimaplasm': 'Ultimaplasma',
      },
      'replaceText': {
        '--targetable--': '--anvisierbar--',
        '--untargetable--': '--nich anvisierbar--',
        'Aerial Blast': 'Windschlag',
        'Aetheric Boom': 'Ätherknall',
        'Aetherochemical Laser': 'Ätherochemischer Laser',
        '(?<! )Aetheroplasm': 'Ätheroplasma',
        'Apply Viscous': 'Ätheroplasma wirkt',
        'Blight': 'Pesthauch',
        '(?<![\\w| ])Burst': 'Detonation',
        'Bury': 'Begraben',
        'Ceruleum Vent': 'Erdseim-Entlüfter',
        'Crimson Cyclone': 'Zinnober-Zyklon',
        '(?<! )Cyclone(?! )': 'Zyklon',
        'Dark IV': 'Neka',
        'Diffractive Laser': 'Diffraktiver Laser',
        'Downburst': 'Fallböe',
        'Earthen Fury': 'Gaias Zorn',
        'Enrage': 'Finalangriff',
        'Eruption': 'Eruption',
        'Eye Of The Storm': 'Auge des Sturms',
        'Feather Rain': 'Federregen',
        'Featherlance': 'Federlanze',
        'Flaming Crush': 'Flammenstoß',
        'Freefire': 'Schwerer Beschuss',
        'Friction': 'Windklinge',
        'Fusion Burst': 'Fusionsknall',
        'Geocrush': 'Geo-Stoß',
        'Gigastorm': 'Gigasturm',
        'Grand Whirlwind': 'Großer Wirbelsturm',
        'Granite Impact': 'Granitstoß',
        'Great Whirlwind': 'Windhose',
        'Hellfire': 'Höllenfeuer',
        'Homing Lasers': 'Leitlaser',
        'Incinerate': 'Einäschern',
        'Infernal Fetters': 'Infernofesseln',
        'Infernal Surge': 'Infernowallung',
        'Inferno Howl': 'Brennende Wut',
        'Landslide': 'Bergsturz',
        'Light Pillar': 'Lichtsäule',
        'Mesohigh': 'Meso-Hoch',
        'Mistral Shriek': 'Mistral-Schrei',
        'Mistral Song': 'Mistral-Song',
        'Mountain Buster': 'Bergsprenger',
        'Nail Adds': 'Nail Adds', // FIXME
        'Radiant Plume': 'Scheiterhaufen',
        'Rock Buster': 'Steinsprenger',
        'Rock Throw': 'Granitgefängnis',
        'Searing Wind': 'Versengen',
        'Self-destruct': 'Selbstzerstörung',
        'Slipstream': 'Wirbelströmung',
        'Summon Random Primal': 'Zufällige Primaebeschwörung',
        'Super Cyclone': 'Superzyklon',
        'Tank Purge': 'Tankreinigung',
        'Tumult': 'Urerschütterung',
        'Ultima(?!\\w)': 'Ultima',
        'Ultimate Annihilation': 'Ultimative Vernichtung',
        'Ultimate Predation': 'Ultimative Prädation',
        'Ultimate Suppression': 'Ultimative Unterdrückung',
        'Upheaval': 'Urtrauma',
        'Viscous Aetheroplasm': 'Viskoses Ätheroplasma',
        'Vulcan Burst': 'Feuerstoß',
        'Weight Of The Land': 'Gaias Gewicht',
        'Wicked Tornado': 'Tornado der Bosheit',
        'Wicked Wheel': 'Rad der Bosheit',
      },
      '~effectNames': {
        'Accursed Flame': 'Fluchflamme',
        'Aetherially Charged': 'Ätheraufladung',
        'Beyond Limits': 'Ätherhyperladung',
        'Damage Up': 'Schaden +',
        'Doom': 'Verhängnis',
        'Down For The Count': 'Am Boden',
        'Fetters': 'Fesselung',
        'Fire Resistance Down II': 'Feuerresistenz - (stark)',
        'Infernal Fetters': 'Infernofesseln',
        'Searing Wind': 'Versengen',
        'Stun': 'Betäubung',
        'Thermal High': 'Hochdruck',
        'Thermal Low': 'Tiefdruck',
        'Viscous Aetheroplasm': 'Viskoses Ätheroplasma',
        'Vulnerability Down': 'Verringerte Verwundbarkeit',
        'Woken': 'Ätherüberladung',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        '(?<! )Aetheroplasm': 'Éthéroplasma',
        'Bomb Boulder': 'bombo rocher',
        'Chirada': 'Chirada',
        'Engage!': 'À l\'attaque',
        'Garuda': 'Garuda',
        'Granite Gaol': 'geôle de granite',
        'Heehee HAHA hahaha HEEHEE haha HEEEEEE': 'Je vais vous écorcher avec mes bourrasques',
        'Ifrit': 'Ifrit',
        'Infernal Nail': 'clou infernal',
        'Lahabrea': 'Lahabrea',
        'Magitek Bit': 'Éjection de drones',
        'Razor Plume': 'plume lacérante',
        'Satin Plume': 'plume soyeuse',
        'Spiny Plume': 'plume perforante',
        'Suparna': 'Suparna',
        'The Ultima Weapon': 'Ultima Arma',
        'Titan': 'Titan',
        'Ultimaplasm': 'ultimaplasme',
      },
      'replaceText': {
        '--targetable--': '--Ciblable--',
        '--untargetable--': '--Impossible à cibler--',
        'Aerial Blast': 'Rafale aérienne',
        'Aetheric Boom': 'Onde d\'éther',
        'Aetherochemical Laser': 'Laser magismologique',
        '(?<! )Aetheroplasm': 'Éthéroplasma',
        'Apply Viscous': 'Apply Viscous', // FIXME
        'Blight': 'Supplice',
        '(?<![\\w| ])Burst': 'Grosse Explosion',
        'Bury': 'Impact',
        'Ceruleum Vent': 'Exutoire à Céruleum',
        'Crimson Cyclone': 'Cyclone écarlate',
        '(?<! )Cyclone(?! )': 'Cyclone',
        'Dark IV': 'Giga Ténèbres',
        'Diffractive Laser': 'Laser diffracteur',
        'Downburst': 'Rafale descendante',
        'Earthen Fury': 'Fureur tellurique',
        'Enrage': 'Enrage',
        'Eruption': 'Éruption',
        'Eye Of The Storm': 'Œil du cyclone',
        'Feather Rain': 'Pluie de plumes',
        'Featherlance': 'Lance de plume',
        'Flaming Crush': 'Fracas de flammes',
        'Freefire': 'Tir d\'artillerie lourde',
        'Friction': 'Lame de vent',
        'Fusion Burst': 'Fusion explosive',
        'Geocrush': 'Broie-terre',
        'Gigastorm': 'Giga tempête',
        'Grand Whirlwind': 'Grand Whirlwind', // FIXME
        'Granite Impact': 'Impact de rocs',
        'Great Whirlwind': 'Grand tourbillon',
        'Hellfire': 'Flammes de l\'enfer',
        'Homing Lasers': 'Lasers autoguidés',
        'Incinerate': 'Incinération',
        'Infernal Fetters': 'Chaînes infernales',
        'Infernal Surge': 'Brasier infernal',
        'Inferno Howl': 'Rugissement infernal',
        'Landslide': 'Glissement de terrain',
        'Light Pillar': 'Colonne lumineuse',
        'Mesohigh': 'Anticyclone de méso-échelle',
        'Mistral Shriek': 'Cri du mistral',
        'Mistral Song': 'Chant du mistral',
        'Mountain Buster': 'Casse-montagnes',
        'Nail Adds': 'Nail Adds', // FIXME
        'Radiant Plume': 'Panache radiant',
        'Rock Buster': 'Casse-roc',
        'Rock Throw': 'Jeté de rocs',
        'Searing Wind': 'Carbonisation',
        'Self-destruct': 'Auto-destruction',
        'Slipstream': 'Sillage',
        'Summon Random Primal': 'Summon Random Primal', // FIXME
        'Super Cyclone': 'Super cyclone',
        'Tank Purge': 'Vidange de réservoir',
        'Tumult': 'Tumulte',
        'Ultima(?!\\w)': 'Ultima',
        'Ultimate Annihilation': 'Fantasmagorie infernale',
        'Ultimate Predation': 'Fantasmagorie prédatrice',
        'Ultimate Suppression': 'Fantasmagorie bestiale',
        'Upheaval': 'Bouleversement',
        'Viscous Aetheroplasm': 'Éthéroplasma poisseux',
        'Vulcan Burst': 'Explosion volcanique',
        'Weight Of The Land': 'Poids de la terre',
        'Wicked Tornado': 'Tornade meurtrière',
        'Wicked Wheel': 'Roue mauvaise',
      },
      '~effectNames': {
        'Accursed Flame': 'Flammes maudites',
        'Aetherially Charged': 'Charge éthérée',
        'Beyond Limits': 'Transcendance',
        'Damage Up': 'ダメージ上昇',
        'Doom': 'Glas',
        'Down For The Count': 'Au tapis',
        'Fetters': 'Attache',
        'Fire Resistance Down II': 'Résistance au feu réduite+',
        'Infernal Fetters': 'Chaînes infernales',
        'Searing Wind': 'Carbonisation',
        'Stun': 'Étourdissement',
        'Thermal High': 'Haute pression',
        'Thermal Low': 'Basse pression',
        'Viscous Aetheroplasm': 'Éthéroplasma poisseux',
        'Vulnerability Down': 'Vulnérabilité diminuée',
        'Woken': 'Éveil éthéré',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        '(?<! )Aetheroplasm': 'エーテル爆雷',
        'Bomb Boulder': 'ボムボルダー',
        'Chirada': 'チラーダ',
        'Engage!': '戦闘開始！',
        'Garuda': 'ガルーダ',
        'Granite Gaol': 'グラナイト・ジェイル',
        'Heehee HAHA hahaha HEEHEE haha HEEEEEE': 'はじめようぞ、虫ケラ…… .わたくしの風でッ！　嵐でッ！　無残に散れッ！',
        'Ifrit': 'イフリート',
        'Infernal Nail': '炎獄の楔',
        'Lahabrea': 'アシエン・ラハブレア',
        'Magitek Bit': 'ビット射出',
        'Razor Plume': 'ブリストリープルーム',
        'Satin Plume': 'シルキープルーム',
        'Spiny Plume': 'スパイニープルーム',
        'Suparna': 'スパルナ',
        'The Ultima Weapon': 'アルテマウェポン',
        'Titan': 'タイタン',
        'Ultimaplasm': 'アルテマ爆雷',
      },
      'replaceText': {
        '--targetable--': '--targetable--',
        '--untargetable--': '--untargetable--',
        'Aerial Blast': 'エリアルブラスト',
        'Aetheric Boom': 'エーテル波動',
        'Aetherochemical Laser': '魔科学レーザー',
        '(?<! )Aetheroplasm': 'エーテル爆雷',
        'Apply Viscous': 'Apply Viscous', // FIXME
        'Blight': 'クラウダ',
        '(?<![\\w| ])Burst': '大爆発',
        'Bury': '衝撃',
        'Ceruleum Vent': 'セルレアムベント',
        'Crimson Cyclone': 'クリムゾンサイクロン',
        '(?<! )Cyclone(?! )': 'サイクロン',
        'Dark IV': 'ダージャ',
        'Diffractive Laser': '拡散レーザー',
        'Downburst': 'ダウンバースト',
        'Earthen Fury': '大地の怒り',
        'Enrage': 'Enrage',
        'Eruption': 'エラプション',
        'Eye Of The Storm': 'アイ・オブ・ストーム',
        'Feather Rain': 'フェザーレイン',
        'Featherlance': 'フェザーランス',
        'Flaming Crush': 'フレイムクラッシュ',
        'Freefire': '誘爆',
        'Friction': 'ウィンドブレード',
        'Fusion Burst': '融合爆発',
        'Geocrush': 'ジオクラッシュ',
        'Gigastorm': 'ギガストーム',
        'Grand Whirlwind': 'Grand Whirlwind', // FIXME
        'Granite Impact': 'グラナイトインパクト',
        'Great Whirlwind': '大旋風',
        'Hellfire': '地獄の火炎',
        'Homing Lasers': '誘導レーザー',
        'Incinerate': 'インシネレート',
        'Infernal Fetters': '炎獄の鎖',
        'Infernal Surge': '炎獄の焔',
        'Inferno Howl': '灼熱の咆吼',
        'Landslide': 'ランドスライド',
        'Light Pillar': 'リヒト・ゾイレ',
        'Mesohigh': 'メソハイ',
        'Mistral Shriek': 'ミストラルシュリーク',
        'Mistral Song': 'ミストラルソング',
        'Mountain Buster': 'マウンテンバスター',
        'Nail Adds': 'Nail Adds', // FIXME
        'Radiant Plume': '光輝の炎柱',
        'Rock Buster': 'ロックバスター',
        'Rock Throw': 'グラナイト・ジェイル',
        'Searing Wind': '熱風',
        'Self-destruct': '自爆',
        'Slipstream': 'スリップストリーム',
        'Summon Random Primal': 'Summon Random Primal', // FIXME
        'Super Cyclone': 'スーパーサイクロン',
        'Tank Purge': '魔導フレア',
        'Tumult': '激震',
        'Ultima(?!\\w)': 'アルテマ',
        'Ultimate Annihilation': '爆撃の究極幻想',
        'Ultimate Predation': '追撃の究極幻想',
        'Ultimate Suppression': '乱撃の究極幻想',
        'Upheaval': '大激震',
        'Viscous Aetheroplasm': '吸着式エーテル爆雷',
        'Vulcan Burst': 'バルカンバースト',
        'Weight Of The Land': '大地の重み',
        'Wicked Tornado': 'ウィケッドトルネード',
        'Wicked Wheel': 'ウィケッドホイール',
      },
      '~effectNames': {
        'Accursed Flame': '呪いの炎',
        'Aetherially Charged': 'エーテル供給',
        'Beyond Limits': '限界突破',
        'Damage Up': 'ダメージ上昇',
        'Doom': '死の宣告',
        'Down For The Count': 'ノックダウン',
        'Fetters': '拘束',
        'Fire Resistance Down II': '火属性耐性低下[強]',
        'Infernal Fetters': '炎獄の鎖',
        'Searing Wind': '熱風',
        'Stun': 'スタン',
        'Thermal High': '高気圧',
        'Thermal Low': '低気圧',
        'Viscous Aetheroplasm': '吸着式エーテル爆雷',
        'Vulnerability Down': '被ダメージ低下',
        'Woken': '覚醒',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        '(?<! )Aetheroplasm': '以太爆雷',
        'Bomb Boulder': '爆破岩石',
        'Chirada': '妙翅',
        'Engage!': '战斗开始！',
        'Garuda': '迦楼罗',
        'Granite Gaol': '花岗石牢',
        'Heehee HAHA hahaha HEEHEE haha HEEEEEE': '哈哈哈哈哈！',
        'Ifrit': '伊弗利特',
        'Infernal Nail': '火狱之楔',
        'Lahabrea': '拉哈布雷亚',
        'Magitek Bit': '魔导浮游炮',
        'Razor Plume': '刚羽',
        'Satin Plume': '柔羽',
        'Spiny Plume': '刺羽',
        'Suparna': '美翼',
        'The Ultima Weapon': '究极神兵',
        'Titan': '泰坦',
        'Ultimaplasm': '究极炸弹',
      },
      'replaceText': {
        '--targetable--': '--可选中--',
        '--untargetable--': '--不可选中--',
        'Aerial Blast': '大气爆发',
        'Aetheric Boom': '以太波动',
        'Aetherochemical Laser': '魔科学激光',
        '(?<! )Aetheroplasm': '以太爆雷',
        'Apply Viscous': '吸附式炸弹',
        'Blight': '毒雾',
        '(?<![\\w| ])Burst': '爆炸',
        'Bury': '塌方',
        'Ceruleum Vent': '青磷放射',
        'Crimson Cyclone': '深红旋风',
        '(?<! )Cyclone(?! )': '气旋',
        'Dark IV': '冥暗',
        'Diffractive Laser': '扩散射线',
        'Downburst': '下行突风',
        'Earthen Fury': '大地之怒',
        'Enrage': '战斗开始',
        'Eruption': '地火喷发',
        'Eye Of The Storm': '台风眼',
        'Feather Rain': '飞翎雨',
        'Featherlance': '羽枪',
        'Flaming Crush': '烈焰碎击',
        'Freefire': '诱导爆炸',
        'Friction': '烈风刃',
        'Fusion Burst': '融合爆炸',
        'Geocrush': '大地粉碎',
        'Gigastorm': '大暴风',
        'Grand Whirlwind': '大龙卷风',
        'Granite Impact': '花岗岩冲击',
        'Great Whirlwind': '大龙卷风',
        'Hellfire': '地狱之火炎',
        'Homing Lasers': '诱导射线',
        'Incinerate': '烈焰焚烧',
        'Infernal Fetters': '火狱之锁',
        'Infernal Surge': '火狱之炎',
        'Inferno Howl': '灼热咆哮',
        'Landslide': '地裂',
        'Light Pillar': '光柱',
        'Mesohigh': '中高压',
        'Mistral Shriek': '寒风之啸',
        'Mistral Song': '寒风之歌',
        'Mountain Buster': '山崩',
        'Nail Adds': '火神柱',
        'Radiant Plume': '光辉炎柱',
        'Rock Buster': '碎岩',
        'Rock Throw': '花岗岩牢狱',
        'Searing Wind': '热风',
        'Self-destruct': '自爆',
        'Slipstream': '螺旋气流',
        'Summon Random Primal': '召唤随机蛮神',
        'Super Cyclone': '超级气旋',
        'Tank Purge': '魔导核爆',
        'Tumult': '怒震',
        'Ultima(?!\\w)': '究极',
        'Ultimate Annihilation': '爆击之究极幻想',
        'Ultimate Predation': '追击之究极幻想',
        'Ultimate Suppression': '乱击之究极幻想',
        'Upheaval': '大怒震',
        'Viscous Aetheroplasm': '吸附式以太炸弹',
        'Vulcan Burst': '火神爆裂',
        'Weight Of The Land': '大地之重',
        'Wicked Tornado': '邪气龙卷',
        'Wicked Wheel': '邪轮旋风',
      },
      '~effectNames': {
        'Accursed Flame': '诅咒之炎',
        'Aetherially Charged': '以太供应',
        'Beyond Limits': '突破极限',
        'Damage Up': 'ダメージ上昇',
        'Doom': '死亡宣告',
        'Down For The Count': '击倒',
        'Fetters': '拘束',
        'Fire Resistance Down II': '火属性耐性大幅降低',
        'Infernal Fetters': '火狱之锁',
        'Searing Wind': '热风',
        'Stun': '眩晕',
        'Thermal High': '高气压',
        'Thermal Low': '低气压',
        'Viscous Aetheroplasm': '吸附式以太炸弹',
        'Vulnerability Down': '受伤减轻',
        'Woken': '觉醒',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        '(?<! )Aetheroplasm': '에테르 폭뢰',
        'Bomb Boulder': '바위폭탄',
        'Chirada': '치라다',
        'Engage!': '전투 시작!',
        'Garuda': '가루다',
        'Granite Gaol': '화강암 감옥',
        'Heehee HAHA hahaha HEEHEE haha HEEEEEE': '시작하자, 버러지들아',
        'Ifrit': '이프리트',
        'Infernal Nail': '염옥의 말뚝',
        'Lahabrea': '아씨엔 라하브레아',
        'Magitek Bit': '마도 비트',
        'Razor Plume': '예리한 깃털',
        'Satin Plume': '부드러운 깃털',
        'Spiny Plume': '가시돋힌 깃털',
        'Suparna': '수파르나',
        'The Ultima Weapon': '알테마 웨폰',
        'Titan': '타이탄',
        'Ultimaplasm': '알테마 폭뢰',
      },
      'replaceText': {
        '--targetable--': '--대상 지정 가능--',
        '--untargetable--': '--대상 지정 불가--',
        'Aerial Blast': '대기 폭발',
        'Aetheric Boom': '에테르 파동',
        'Aetherochemical Laser': '마과학 레이저',
        '(?<! )Aetheroplasm': '에테르 폭뢰',
        'Apply Viscous': '흡착식 에테르 폭뢰',
        'Blight': '독안개',
        '(?<![\\w| ])Burst': '대폭발',
        'Bury': '충격',
        'Ceruleum Vent': '청린 방출',
        'Crimson Cyclone': '진홍 회오리',
        '(?<! )Cyclone(?! )': '돌개바람',
        'Dark IV': '다쟈',
        'Diffractive Laser': '확산 레이저',
        'Downburst': '하강 기류',
        'Earthen Fury': '대지의 분노',
        'Enrage': '전멸기',
        'Eruption': '용암 분출',
        'Eye Of The Storm': '태풍의 눈',
        'Feather Rain': '깃털비',
        'Featherlance': '깃털창',
        'Flaming Crush': '화염 작열',
        'Freefire': '유폭',
        'Friction': '바람의 칼날',
        'Fusion Burst': '융합 폭발',
        'Geocrush': '대지 붕괴',
        'Gigastorm': '대폭풍',
        'Grand Whirlwind': '대선풍',
        'Granite Impact': '감옥 폭발',
        'Great Whirlwind': '대선풍',
        'Hellfire': '지옥의 화염',
        'Homing Lasers': '유도 레이저',
        'Incinerate': '소각',
        'Infernal Fetters': '염옥의 사슬',
        'Infernal Surge': '염옥의 불꽃',
        'Inferno Howl': '작열의 포효',
        'Landslide': '산사태',
        'Light Pillar': '빛 기둥',
        'Mesohigh': '뇌우고기압',
        'Mistral Shriek': '삭풍의 비명',
        'Mistral Song': '삭풍의 노래',
        'Mountain Buster': '산 쪼개기',
        'Nail Adds': '염옥의 말뚝',
        'Radiant Plume': '광휘의 불기둥',
        'Rock Buster': '바위 쪼개기',
        'Rock Throw': '화강암 감옥',
        'Searing Wind': '열풍',
        'Self-destruct': '자폭',
        'Slipstream': '반동 기류',
        'Summon Random Primal': '무작위 야만신 소환',
        'Super Cyclone': '대형 돌개바람',
        'Tank Purge': '마도 플레어',
        'Tumult': '격진',
        'Ultima(?!\\w)': '알테마',
        'Ultimate Annihilation': '궁극의 폭격 환상',
        'Ultimate Predation': '궁극의 추격 환상',
        'Ultimate Suppression': '궁극의 난격 환상',
        'Upheaval': '대격진',
        'Viscous Aetheroplasm': '흡착식 에테르 폭뢰',
        'Vulcan Burst': '폭렬 난사',
        'Weight Of The Land': '대지의 무게',
        'Wicked Tornado': '마녀의 회오리',
        'Wicked Wheel': '마녀의 수레바퀴',
      },
      '~effectNames': {
        'Accursed Flame': '저주의 불꽃',
        'Aetherially Charged': '에테르 공급',
        'Beyond Limits': '한계 돌파',
        'Damage Up': 'ダメージ上昇',
        'Doom': '죽음의 선고',
        'Down For The Count': '넉다운',
        'Fetters': '구속',
        'Fire Resistance Down II': '불속성 저항 감소[강]',
        'Infernal Fetters': '염옥의 사슬',
        'Searing Wind': '열풍',
        'Stun': '기절',
        'Thermal High': '고기압',
        'Thermal Low': '저기압',
        'Viscous Aetheroplasm': '흡착식 에테르 폭뢰',
        'Vulnerability Down': '받는 피해량 감소',
        'Woken': '각성',
      },
    },
  ],
}];
