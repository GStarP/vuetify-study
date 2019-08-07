# Vuetify 组件属性记录

## 预定义

| 名字  |            定义            |
| :---: | :------------------------: |
| $size | xs/sm/md/lg/xl（由小到大） |
| $dire |    t/b/l/r（上下左右）     |

## 通用 class

|        类名         |        作用        |
| :-----------------: | :----------------: |
|   m[$dire]-[1-?]    |    指定 margin     |
|   p[$dire]-[1-?]    |    指定 padding    |
| :elevation="[0-24]" | 指定海拔(阴影程度) |
|      absolute       |         /          |
|   justify-center    |         /          |
|    align-center     |         /          |



## v-container

|      属性名       |          作用          |
| :---------------: | :--------------------: |
| grid-list-[$size] |     指定宽度为定值     |
|       fluid       | 指定 max-width 为 100% |
|    text-center    |   使其中文字全部居中   |
|    fill-height    |        纵向拉满        |

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
|        |          减小空隙          |


## v-list-item

|  属性名  |       作用       |
| :------: | :--------------: |
| two-line | 可以显示两行内容 |
|          |   添加点击相关   |

## v-input

这玩意居然不是输入框？？？我惊了。反正我用的是 v-text-field......

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



