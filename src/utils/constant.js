/**
 * 用户code 换取 session_key
 * @type {String}
 */
export const USER_SPECICAL_INFO = "userSpecialInfo";

/**
 * 用户信息
 * @type {String}
 */
export const USER_INFO = "userInfo";

/**
 * 系统信息
 * @type {String}
 */
export const SYSTEM_INFO = "systemInfo";


export const ADDRESS_ID = "addressId";

export const SEL_CLASS_CODE = "selClassCode";
export const FILTER_LIST = [
    {
        type: 'radio',
        label: '型号',
        value: 'size',
        children: [{
            label: '小型',
            value: 'small',
        },
        {
            label: '大型',
            value: 'big',
        },
        ],
        groups: ['001'],
    },
    {
        type: 'sort',
        label: '价格',
        value: 'stars',
        groups: ['002']
    },
    {
        type: 'filter',
        label: '筛选',
        value: 'filter',
        children: [
            {
                type: 'radio',
                label: '颜色',
                value: 'color',
                children: [{
                    label: '红色',
                    value: 'red',
                },
                {
                    label: '白色',
                    value: 'html',
                },
                {
                    label: '黑色',
                    value: 'css',
                },
                {
                    label: '紫色',
                    value: 'typescript',
                },
                ],
            },
            {
                type: 'radio',
                label: '租车方式',
                value: 'away',
                children: [{
                    label: '月租',
                    value: '1',
                },
                {
                    label: '日租',
                    value: '2',
                },
                {
                    label: '全额购买',
                    value: '3',
                },
                ],
            },
            {
                type: 'checkbox',
                label: '附加服务',
                value: 'query',
                children: [{
                    label: '头盔',
                    value: 'angular',
                },
                {
                    label: '雨衣',
                    value: 'vue',
                },
                {
                    label: '电子锁',
                    value: 'react',
                },
                {
                    label: '配送箱',
                    value: 'avalon',
                },
                {
                    label: '定位',
                    value: 'gps',
                },
                ],
            },
        ],
        groups: ['003'],
    },
];

export const baseForm = {
    name: {
        label: '姓名',
        value: 'damon'
    },
    sex: {
        label: '性别',
        value: '男',
        type: 'picker',
        options: ['男', '女']
    },
    phone: {
        label: '手机号',
        value: '',
        type: 'number'
    },
    qq: {
        label: 'QQ',
        value: '',
        type: 'number'
    },
    email: {
        label: '邮箱',
        value: ''
    }
};
export const residenceForm = {
    id: {
        label: '身份证',
        value: ''
    },
    birthday: {
        label: '生日',
        value: '',
        type: 'date'
    },
    address: {
        label: '现居地址',
        value: '',
    }
};
export const companyForm = {
    company: {
        label: '所在公司',
        value: ''
    },
    job: {
        label: '职位',
        value: '',
    },
};
export const educationForm = {
    education: {
        label: '最高学历',
        value: ''
    },
    degree: {
        label: '学位',
        value: '',
    },
    school: {
        label: '毕业学校',
        value: ''
    }
};
export const emergencyForm = {
    contact: {
        label: '紧急联系人',
        value: ''
    },
    phone: {
        label: '联系电话',
        value: '',
    },
};