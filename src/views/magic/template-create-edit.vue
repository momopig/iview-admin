<style lang="less">
    @import '../../styles/common.less';
    @import './template-create-edit.less';
</style>

<template>
    <div class="setting-page">
        <div class="top-area">
            <div class="components-area">
                <div class="title">组件区域</div>
                <div class="content">
                    <div class="component-item"
                        v-for="item in componentList"
                        @click="addNewTemplate(item)"
                    >{{ item.name }}</div>
                </div>
            </div>
            <div class="preview-area">
                <div class="title">预览区域</div>
                <div class="content">
                    <div class="template-item"
                        v-for="(item, index) in previewList"
                        @click="configTemplateProps(item)"
                    > 
                        <span>{{ item.name }}</span>
                        <span class="btn-delete" @click="removeTemplate(index, $event)">x</span>
                    </div>
                </div>
            </div>
            <div class="config-area">
                <div class="title">配置区域</div>
                <div class="content">

                    <div v-if="currentTemplate !== null" class="form-item" v-for="(value, key) in currentTemplate.props">
                        <label>{{ key }}</label>
                        <input type="text" v-model="currentTemplate.props[key]" />
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-area">
            <div class="btn-area">
                <Button type="primary">模版保存</Button>
                <Button type="primary" v-if="">模版另存为</Button>
            </div>
        </div>
    </div>
</template>

<script>
import tinymce from 'tinymce';
export default {
    name: 'template-create-edit',
    data () {
        return {
            componentList: [
                {name: 'Banner', props: [{name: 'banner_prop_1', type: 'string'}]},
                {name: 'Search', props: [{name: 'search_prop_1', type: 'string'}]},
                {name: 'Topic', props: [{name: 'topic_prop_1', type: 'string'}]}
            ],
            previewList: [],
            currentTemplate: {},
            operation: this.$rout
        }
    },
    methods: {

        /**
        * @desc 往预览区域新增模版项
        *
        **/
        addNewTemplate(component) {
            let newTemplate = {
                name: component.name,
                props: {}
            }
            newTemplate.name = component.name
            component.props.forEach(item => {
                newTemplate.props[item.name] = null
            })
            this.previewList.push(newTemplate)
        },

        /**
        * @desc 删除预览区域的模版项
        *
        **/
        removeTemplate(index, $event) {
            $event.stopPropagation()
            this.previewList.splice(index, 1)
            this.currentTemplate = {}
        },

        /**
        * @desc 删除预览区域的模版项
        *
        **/
        configTemplateProps(template) {
            this.currentTemplate = template
        }

    },
    computed: {

    },
    mounted () {
       
    }
};
</script>
