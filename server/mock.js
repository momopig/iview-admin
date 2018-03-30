const express = require('express')
const router = express.Router()

/* START-魔法页面 */


router.get('/api/magic/template/get/list', function (req, res, next) {
  res.json(
    {
      "code": "200",
        data: {
          list: [{
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
      },
      "success": true,
      "message": null
    }
  )
})

router.get('/api/magic/template/get/id', function (req, res, next) {
  res.json(
    {
      "code": "200",
        data: {
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
      },
      "success": true,
      "message": null
    }
  )
})



/* END-魔法页面 */





module.exports = router