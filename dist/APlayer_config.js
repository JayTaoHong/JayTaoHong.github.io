const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: false,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    lrcType: 3, //使用lrc文件提供歌词
   //网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
		{
            name: '搁浅',
            artist: '周杰伦',
            url: 'https://freetyst.nf.migu.cn/public%2Fproduct9th%2Fproduct42%2F2021%2F01%2F2612%2F2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F60054701938124543.mp3',
			cover: '/./dist/img/搁浅.jpg',
			lrc: '/./dist/music/lrc/搁浅-周杰伦.lrc',
            theme: '#46718b'
        },
		{
            name: '夜曲',
            artist: '周杰伦',
            url: 'https://freetyst.nf.migu.cn/public%2Fproduct5th%2Fproduct34%2F2019%2F07%2F1710%2F2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F60054701947.mp3',
			cover: '/./dist/img/夜曲.jpg',
			lrc: '/./dist/music/lrc/夜曲-周杰伦.lrc',
            theme: '#46718b'
        },
		{
            name: '花海',
            artist: '周杰伦',
            url: 'https://freetyst.nf.migu.cn/public%2Fproduct5th%2Fproduct33%2F2019%2F05%2F2314%2F2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F60054702003.mp3',
			cover: '/./dist/img/花海.jpg',
			lrc: '/./dist/music/lrc/花海-周杰伦.lrc',
            theme: '#46718b'
        },
		{
            name: '明明就',
            artist: '周杰伦',
            url: 'https://freetyst.nf.migu.cn/public%2Fproduct6th%2Fproduct36%2F2019%2F12%2F1609%2F2012%E5%B9%B412%E6%9C%886%E6%97%A5%E7%BA%B5%E6%A8%AA%E4%B8%96%E4%BB%A3%E7%B4%A7%E6%80%A5%E5%87%86%E5%85%A51%E9%A6%96%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F60054703842.mp3',
			cover: '/./dist/img/明明就.jpg',
			lrc: '/./dist/music/lrc/明明就-周杰伦.lrc',
            theme: '#46718b'
        },
		{
            name: '夜的第七章',
            artist: '周杰伦',
            url: 'https://freetyst.nf.migu.cn/public%2Fproduct9th%2Fproduct43%2F2021%2F05%2F1109%2F2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F60054701961091852.mp3',
			cover: '/./dist/img/夜的第七章.jpg',
			lrc: '/./dist/music/lrc/夜的第七章-周杰伦.lrc',
            theme: '#46718b'
        },
		{
            name: '告白气球',
            artist: '周杰伦',
            url: 'https://freetyst.nf.migu.cn/public%2Fproduct8th%2Fproduct39%2F2020%2F04%2F2415%2F2016%E5%B9%B408%E6%9C%8815%E6%97%A509%E7%82%B919%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E7%BA%B5%E6%A8%AA%E4%B8%96%E4%BB%A310%E9%A6%96%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F60054704037153557.mp3',
			cover: '/./dist/img/告白气球.jpg',
			lrc: '/./dist/music/lrc/告白气球-周杰伦.lrc',
            theme: '#46718b'
        },
		{
            name: '蒲公英的约定',
            artist: '周杰伦',
            url: 'https://freetyst.nf.migu.cn/public%2Fproduct5th%2Fproduct34%2F2019%2F06%2F1021%2F2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F60054701993.mp3',
			cover: '/./dist/img/蒲公英的约定.jpg',
			lrc: '/./dist/music/lrc/蒲公英的约定-周杰伦.lrc',
            theme: '#46718b'
        },
		{
            name: '兰亭序',
            artist: '周杰伦',
            url: 'https://freetyst.nf.migu.cn/public%2Fproduct5th%2Fproduct35%2F2019%2F10%2F2820%2F2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F60054702006.mp3',
			cover: '/./dist/img/兰亭序.jpg',
			lrc: '/./dist/music/lrc/兰亭序-周杰伦.lrc',
            theme: '#46718b'
        },
        {
            name: '成都',
            artist: '赵雷',
            url: 'http://music.163.com/song/media/outer/url?id=436514312.mp3',
			cover: '/./dist/img/成都.jpg',
			lrc: '/./dist/music/lrc/成都-赵雷.lrc',
            theme: '#46718b'
        },
        {
            name: '月半小夜曲',
            artist: '李克勤',
            url: 'http://music.163.com/song/media/outer/url?id=1847408144.mp3',
			cover: '/./dist/img/月半小夜曲.jpg',
			lrc: '/./dist/music/lrc/月半小夜曲-李克勤.lrc',
            theme: '#46718b'
        },
        {
            name: '写给黄淮',
            artist: '邵帅',
            url: 'http://music.163.com/song/media/outer/url?id=1334295185.mp3',
			cover: '/./dist/img/写给黄淮.jpg',
			lrc: '/./dist/music/lrc/写给黄淮-邵帅.lrc',
            theme: '#46718b'
        },
		{
            name: '可乐',
            artist: '赵紫骅',
            url: 'http://music.163.com/song/media/outer/url?id=29759733.mp3',
			cover: '/./dist/img/可乐.jpg',
			lrc: '/./dist/music/lrc/可乐-赵紫骅.lrc',
            theme: '#46718b'
        },
		{
            name: '孤身',
            artist: '徐秉龙',
            url: 'http://music.163.com/song/media/outer/url?id=1365393542.mp3',
			cover: '/./dist/img/孤身.jpg',
			lrc: '/./dist/music/lrc/孤身-徐秉龙.lrc',
            theme: '#46718b'
        },
		{
            name: '嗜好',
            artist: '颜人中',
            url: 'http://music.163.com/song/media/outer/url?id=1391891631.mp3',
			cover: '/./dist/img/嗜好.jpg',
			lrc: '/./dist/music/lrc/嗜好-颜人中.lrc',
            theme: '#46718b'
        }
    ]
});