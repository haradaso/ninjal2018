

waldayu.transducers["kuroshima_compare"] = (function() {
    var correspondences = {'ヴァ': 'バ', 'トゥ': 'ト', 'ル': 'ヌ'};
    var keys = ['ヴァ', 'トゥ', 'ル'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();var config = {
    "L1": {
        "name": "Kuroshima",
        "underlying": "",
        "compare": "kuroshima_compare",
        "lettersInLanguage" : ['ー', 'ア', 'イ', 'ウ', 'ヴァ', 'エ', 'オ', 'カ', 'ガ', 'キ', 'ギ', 'ク', 'グ', 'ケ', 'ゲ ', 'コ', 'ゴ ', 'サ', 'ザ', 'シ', 'ジ', 'シャ', 'シュ', 'シェ', 'ショ', 'ス', 'ズ', 'セ', 'ソ', 'タ', 'ティ', 'トゥ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'バ', 'パ', 'ヒ', 'ビ', 'ピ', 'フ', 'ブ', 'プ', 'ヘ', 'べ', 'ペ', 'ホ', 'ボ', 'ポ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ン']
    },
    "L2": {
        "name": "English",
        "underlying": "",
        "compare": ""
    }
};

/* Search Variables */
var l1_weights_config = {'underlying_form': 0.1, 'compare_form': 1.0};

var l1_thresholds_config = {'partial': 1.0, 'other': 4.0, 'exact': 0.0};

var l2_weights_config = {'definition': 1.0};

var l2_thresholds_config = {'partial': 1.9, 'other': 1000.0, 'exact': 0.9};
