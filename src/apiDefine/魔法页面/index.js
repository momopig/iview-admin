var apis = [
    {
        desc: '接口1： 根据分页参数获取模版列表',
        url: '/api/magic/template/get/list',
        method: 'get',
        query: {
            pageSize: 10,
            page: 0
        },
        data: [{
            "id": 16,
            "name": "16年模版",
            "previewList": [
                {
                    "componentName": "Banner",
                    "props": {
                        "imgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg"
                    }
                },
                {
                    "componentName": "Input",
                    "props": {
                        "placeholder": "请输入要搜索的商品"
                    }
                }
            ]
        }, {
            "id": 17,
            "name": "17年模版",
            "previewList": [
                {
                    "componentName": "Banner",
                    "props": {
                        "imgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg"
                    }
                },
                {
                    "componentName": "Input",
                    "props": {
                        "placeholder": "请输入要搜索的商品"
                    }
                }
            ]
        }]
    }, {
        desc: '接口2： 根据id删除指定模版',
        url: '/api/magic/template/delete/id',
        method: 'delete',
        query: {
            id: 16
        },
        data: {
        }

    },  {
        desc: '接口3： 根据id读取指定模版',
        url: '/api/magic/template/get/id',
        method: 'get',
        query: {
            id: 16
        },
        data: {
            "id": 16,
            "name": "16年模版",
            "previewList": [
                {
                    "componentName": "Banner",
                    "props": {
                        "imgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg"
                    }
                },
                {
                    "componentName": "Input",
                    "props": {
                        "placeholder": "请输入要搜索的商品"
                    }
                }
            ]
        }
    }, {
        desc: '接口4： 新建或编辑模版',
        url: '/api/magic/template/createOrEdit/id',
        method: 'post',
        body: {

            // 有id则表示编辑更新，无id则表示创建
            "id": 16,
            "name": "16年模版",
            "previewList": [
                {
                    "componentName": "Banner",
                    "props": {
                        "imgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg"
                    }
                },
                {
                    "componentName": "Input",
                    "props": {
                        "placeholder": "请输入要搜索的商品"
                    }
                }
            ]

        },
        data: {
            // 无
        }
    },       
]
