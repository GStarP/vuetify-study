# Vuetify 组件属性记录

## 预定义

| 名字  |            定义            |
| :---: | :------------------------: |
| $size | xs/sm/md/lg/xl（由小到大） |
| $dire |    t/b/l/r（上下左右）     |

## 通用 class

并非对全部元素有效（没有文档说明，就很难受）

|        类名         |        作用        |
| :-----------------: | :----------------: |
|   m[$dire]-[1-?]    |    指定 margin     |
|   p[$dire]-[1-?]    |    指定 padding    |
| :elevation="[0-24]" | 指定海拔(阴影程度) |
|      absolute       |         /          |
|   justify-center    |         /          |
|    align-center     |         /          |
|     text-center     |         /          |

## v-container

|      属性名       |          作用          |
| :---------------: | :--------------------: |
| grid-list-[$size] |     指定宽度为定值     |
|       fluid       | 指定 max-width 为 100% |
|    fill-height    |      height: 100%      |

## v-layout

| 属性名 |   作用   |
| :----: | :------: |
|  wrap  | 自动换行 |

## v-flex

|     属性名     |      作用      |
| :------------: | :------------: |
| \[$size][1-12] | 指定宽度为定值 |

## v-card

| 属性名 |      作用      |
| :----: | :------------: |
|  dark  | 将文字设为白色 |
| raised |  添加阴影效果  |

## v-list

| 属性名 |            作用            |
| :----: | :------------------------: |
|  nav   | 增加第一个item和其他的间隙 |
| dense  |          减小空隙          |


## v-list-item

|  属性名  |       作用       |
| :------: | :--------------: |
| two-line | 可以显示两行内容 |

## v-text-field

|          属性名          |         作用         |
| :----------------------: | :------------------: |
|         label=""         |    同 placeholder    |
|           solo           |        带边框        |
|         rounded          |       圆角边框       |
|        clearable         |       带清空键       |
|   append-icon="mdi-*"    |       后 icon        |
|   prepend-icon="mdi-*"   |       前 icon        |
| @click:append/prepend="" | 为 icon 添加点击事件 |
|         hint=""          |     底部提示文字     |

## v-list-item-group

|  属性名   |                  作用                  |
| :-------: | :------------------------------------: |
|  v-model  |        绑定当前激活的列表项索引        |
|   color   |         被激活列表项的颜色样式         |
| mandatory | 再次点击被激活列表项不会取消其激活状态 |

## v-navigation-drawer

|          属性名          |            作用             |
| :----------------------: | :-------------------------: |
|        permanent         |    无论屏幕宽度永不隐藏     |
|          fixed           |      纵向占据全部高度       |
| mobile-break-point="960" | 当屏幕宽度小于960时隐藏抽屉 |

## v-content

与带有 app 属性的元素并列，占满剩余空间

## v-data-table

|       属性名        |                        作用                        |
| :-----------------: | :------------------------------------------------: |
| hide-default-footer |                   隐藏自带的分页                   |
| :loading="boolean"  |                  控制进度条的显示                  |
|    loading-text     | 当 :loading 为 false 且 :items 为 undefined 时显示 |

