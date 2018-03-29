<style lang="less">
    @import '../../styles/common.less';
    @import './template-create-edit.less';
</style>

<template>
    <div class="setting-page">
        <div class="top-area">
            <div class="title"><label>当前模版名称：</label>{{ currentTemplate.name}}</div>
        </div>
        <div class="center-area">
            <div class="components-area">
                <div class="title">组件区域</div>
                <div class="content">
                    <div class="component-item"
                        v-for="item in componentList"
                        @click="addNewComponent(item)"
                    >{{ item.name }}</div>
                </div>
            </div>
            <div class="preview-area">
                <div class="title">预览区域</div>
                <div class="content">
                    <draggable v-model="currentTemplate.previewList" :options="{group:'people'}" @start="drag=true" @end="drag=false">
                    <!-- <div v-for="element in myArray" :key="element.id">{{element.name}}</div> -->
                        <div class="template-item"
                            v-for="(item, index) in currentTemplate.previewList"
                            @click="configComponentProps(item)"
                        > 
                            <img class='img-banner' v-if="item.componentName === 'Banner' && item.props.imgSrc" :src="item.props.imgSrc">
                            <span v-else>{{ item.componentName }}</span>
                            <span class="btn-delete" @click="removeComponent(index, $event)">x</span>
                        </div>
                    </draggable>
                </div>
            </div>
            <div class="config-area">
                <div class="title">配置区域</div>
                <div class="content">

                    <div v-if="currentComponent !== null" class="form-item" v-for="(value, key) in currentComponent.props">
                        <label>{{ key }}</label>
                        <input type="text" v-model="currentComponent.props[key]" />
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-area">
            <div class="btn-area">
                <Button type="primary" @click="saveTemplate()">模版保存</Button>
                <Button type="primary" v-if="operation === 'edit'" @click="saveAsTemplate()">模版另存为</Button>
            </div>
        </div>
        <Modal v-model="showModal" :title="modalTitle" @on-ok="okHandler" @on-cancel="cancelHandler">
            <p>
                <label>模版名称:</label>
                <input placeholder="请输入新的模版名称" v-model="newTemplateName"/>
            </p>
        </Modal>
    </div>
</template>

<script>
import tinymce from 'tinymce'
import draggable from 'vuedraggable'

export default {
    name: 'template-create-edit',
    components: {
        draggable
    },
    data () {
        
        return {
            componentList: [
                {name: 'Banner', props: [{name: 'imgSrc', type: 'string'}]},
                {name: 'Search', props: [{name: 'placeholder', type: 'string'}]},
                {name: 'Topic', props: [{name: 'name', type: 'string'}]}
            ],
            currentTemplate: {name: '', previewList: []},
            currentComponent: {},
            operation: this.$route.query.operation,
            templateId: this.$route.query.templateId,
            showModal: false,
            newTemplateName: '',
            modalTitle: '',
            saveType: 'create' // 'edit'
            
        }
    },
    methods: {

        /**
        * @desc 往预览区域新增组件
        *
        **/
        addNewComponent(component) {
            let newComponent = {
                componentName: component.name,
                props: {}
            }
            newComponent.name = component.name
            component.props.forEach(item => {
                newComponent.props[item.name] = null
            })
            this.currentTemplate.previewList.push(newComponent)
        },

        /**
        * @desc 删除预览区域的组件
        *
        **/
        removeComponent(index, $event) {
            $event.stopPropagation()
            debugger
            this.currentTemplate.previewList.splice(index, 1)
            this.currentComponent = {}
        },

        /**
        * @desc 删除预览区域的组件
        *
        **/
        configComponentProps(component) {
            debugger
            this.currentComponent = component
        },

        /**
        *@desc 保存模版
        *
        */
        saveTemplate() {
            
            // 如果是新建模版，则为其添加模版名称
            if (this.templateId === undefined) {
                this.showModal = true
                this.modalTitle = '新建模版'
                this.saveType = 'create'
            } else { // 如果是编辑模版，则直接保存

                // todo: 调用保存模版的接口(创建和编辑共用一个接口，检查到有id则为更新，无则为新建)
                // createOrEditTemplate('/api/template/createOrEdit', this.currentTemplate)
                
                this.$Message.success({
                    content: '保存成功！'
                })
            }
        },

        /**
        *@desc 保存模版
        *
        */
        saveAsTemplate() {
            this.showModal = true
            this.modalTitle = '新建模版'
            this.saveType = 'create'
        },

        /*
        *@desc 模拟获取模版的接口
        *@param templateId { String } 模版id
        */
        getTemplate(templateId) {
            return {
                id: 16,
                name: '16年模版',
                previewList: [
                    {
                        componentName: 'Banner',
                        props: {
                            imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg'
                        }
                    }, {
                        componentName: 'Input',
                        props: {
                            placeholder: '请输入要搜索的商品'
                        }
                    }
                ]
            }
        },

        okHandler() {

            let newTemplate = JSON.parse(JSON.stringify(this.currentTemplate))
            newTemplate.name = this.newTemplateName

            // 另存为时，去掉template原有的id

                delete newTemplate.id
            // 调用保存模版的接口(创建和编辑共用一个接口，检查到有id则为更新，无则为新建)
            // createOrEditTemplate('/api/template/createOrEdit', this.currentTemplate)
            this.$Message.success({
                content: '保存成功！'
            })
        },

        cancelHandler() {
            this.newTemplateName = ''
        },

    },
    computed: {

    },
    created() {
        if (this.operation === 'edit') {
            
            // 从接口中拉取模版配置
            this.currentTemplate = this.getTemplate(this.templateId)
        }
    },
    mounted () {
       
    },
    watch: {
        '$route' () {
            this.init();
        }
    }
};
</script>
