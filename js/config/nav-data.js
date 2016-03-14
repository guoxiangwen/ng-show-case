"use strict";
angular.module('app')
    .constant('NavData', [
        {
            label: '表单',
            state: 'form',
            items: [
                {
                    state: 'form-basicCheck',
                    label: '基本校验',
                    description: '基本校验'
                }
            ]
        },
        {
            label: '表格',
            state: 'table',
            items: [
                {
                    state: 'table-complex',
                    label: '表格综合',
                    description: '表格综合'
                }
            ]
        },
        {
            label: '基本控件',
            state: 'controls',
            items: [
                {
                    state: 'controls-progress',
                    label: '进度条',
                    description: '进度条'
                },
                {
                    state: 'controls-select',
                    label: '下拉框',
                    description: '下拉框'
                },
                {
                    state: 'controls-radio',
                    label: '单选框',
                    description: '单选框'
                }
            ]
        },
        {
            label: '常用应用场景',
            state: 'scene',
            items: [
                {
                    state: 'scene-controller',
                    label: '控制器通信(超实用)',
                    description: 'Controller之间的通信'
                },
                {
                    state: 'scene-router',
                    label: '路由实例',
                    description: '路由实例'
                },
                {
                    state: 'scene-directive',
                    label: '自定义指令',
                    description: '自定义指令'
                },
                {
                    state: 'scene-service',
                    label: '服务',
                    description: '服务'
                }
            ]
        },
        {
            label: 'Angular项目构建总结',
            state: 'project',
            items: [
                {
                    state: 'project-dir',
                    label: '目录结构',
                    description: '目录结构'
                },
                {
                    state: 'project-module',
                    label: '模块划分',
                    description: '模块划分'
                },
                {
                    state: 'project-files',
                    label: '文件命名',
                    description: '文件命名'
                },
                {
                    state: 'project-process',
                    label: 'Angular执行流程',
                    description: 'Angular执行流程'
                }
            ]
        }

    ]
)