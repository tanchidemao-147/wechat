export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx7e45e2e396be7df1",

    // 公众号APP_SECRET
    APP_SECRET: "bc609c22239b0cb899d7ec209788f7f9",

    // 模板消息id
    TEMPLATE_ID: "J444KS8aEP5m97KOEpdac5DvwO3fzyG_WL43SMaTmLI",

    // 回调消息模板id, 用来看自己有没有发送成功的那个模板
    CALLBACK_TEMPLATE_ID: "	tSCNP-59X-Hk8Qw5aMe383fiOg0FZbUdf-LxlwY0Gpw",

    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
    USERS: [
      {name: '艳艳', id: "oTg2w6vNqAt0NhB2mp3tRFpWmjts"}, 
      {name: '我', id: "oTg2w6gaxXYtJE5k9wVGfNEJ9nMw"}, 
    ],
    // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
    CALLBACK_USERS: [
      {name: '自己',id: "oTg2w6gaxXYtJE5k9wVGfNEJ9nMw"}, 
    ],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "上海",
    // 所在城市
    CITY: "上海",

    /** 重要节日相关 */

    // 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    // tpye必须填！ 只能 “生日” 和 “节日” 二选一!
    // 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
    // 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
    FESTIVALS: [
      {"type": "生日", "name": "宝宝的农历", "year": "1999", "date": "04-16"},
      {"type": "生日", "name": "宝宝的阳历", "year": "1999", "date": "05-30"},
      {"type": "节日", "name": "2周年纪念日", "year": "2022", "date": "10-25"},
    ],
    // 限制重要节日的展示条目, 需要填写数字; 
    // 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
    // 如果为0, 则默认展示全部
    FESTIVALS_LIMIT: 3,

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2020-10-25",
    // 结婚纪念日
    MARRY_DATE: "2020-01-04",


    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

// 共推送 {{need_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
