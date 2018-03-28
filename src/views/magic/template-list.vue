<style lang="less">
    @import '../../styles/common.less';
    @import './template-list.less';
</style>

<template>
    <div class="list-page">
        <div class="edittable-table-height-con">
            <Button type="primary" class="btn-create"><a href="/#/magic/template-create-edit?operation=create">新建</a></Button>
            <can-edit-table class="table-template-list" v-model="templateList" :columns-list="editInlineColumns"></can-edit-table>
        </div>
    </div>
</template>

<script>
import tinymce from 'tinymce';
import canEditTable from './../tables/components/canEditTable.vue';

export default {
    name: 'template-list',
    components: {
        canEditTable
    },
    data () {
        return {
            templateList: [
                    {
                        id: 16,
                        name: '16年流行模版',
                        previewList: [{}]
                    },
                    {
                        id: 17,
                        name: '17年流行模版'
                    }
                ],
            editInlineColumns: [
                {
                    title: '序号',
                    type: 'index',
                    align: 'center',
                    width: 300,
                    editable: true
                },
                {
                    title: '模版名称',
                    align: 'center',
                    key: 'name',
                    width: 430,
                    editable: true
                },
                {
                    title: '操作',
                    align: 'center',
                    width: 236,
                    key: 'handle',
                    handle: ['edit', 'delete']
                }
            ]

        }
    },
    methods: {

    },
    computed: {

    },
    mounted () {
       
    }
};
</script>
