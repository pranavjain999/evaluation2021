<template>
    <section class="menu-search">
        <div class="main-contents">
            <div class="box-shadow">
                <div class="search-data-enter">
                    <div class="first-row">
                        <label class="label">{{ $t('bo.merchant_id') }}:</label>
                        <el-input v-model="merchantId" class="input-text" ></el-input>
                        <label class="label">{{ $t('bo.store_id') }}:</label>
                        <el-input v-model="storeId" class="input-text"></el-input>
                        <label class="label">{{ $t('bo.menu_id') }}:</label>
                        <el-input v-model="menuId" class="input-text"></el-input>
                    </div>
                </div>
                <div class="data-table">
                   <div class="detail-table">
                        <div class="headings">
                           <div class="heading-contents">
                                <span class="each-heading">{{ $t('bo.merchant_id') }}:</span>
                                <span>xxxxx</span>
                           </div>
                           <div class="heading-contents">
                                <span class="each-heading">{{ $t('bo.merchant_name') }}:</span>
                                <span>xxxx</span>
                           </div>
                           <div class="heading-contents">
                                <span class="each-heading">{{ $t('bo.store_id') }}:</span>
                                <span>xxxxxx</span>
                           </div>
                           <div class="heading-contents">
                                <span class="each-heading">{{ $t('bo.store_name') }}:</span>
                                <span>xxxxx</span>
                           </div>
                           <div class="heading-contents" style="margin-left: auto">
                                <span class="menu-status">[Soldout]</span>
                                <span>{{ $t('bo.menu_status') }}</span>
                           </div>
                        </div>
                        <div class="details">
                            <div class="each-column">
                                <div class="image">
                                    <span>image</span>
                                </div>
                            </div>
                            <div class="each-column">
                                <div class="each-detail">
                                    <p class="each-heading">{{ $t('bo.menu_id') }}:</p>
                                    <p>111</p>
                                    <p class="each-heading">{{ $t('bo.menu_name') }}:</p>
                                    <p>xxxxxxxxxx</p>
                                </div>
                                <div class="each-detail">
                                    <p class="each-heading">{{ $t('bo.price') }}:</p>
                                    <p>9,999</p>
                                </div> 
                                <div class="each-detail">
                                    <p class="each-heading">{{ $t('bo.category') }}:</p>
                                    <p>xxxxxxxx</p>
                                </div> 
                                <div class="each-detail">
                                    <p class="each-heading">{{ $t('bo.description') }}:</p>
                                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                </div> 
                            </div>
                            <div class="each-column">
                                <div class="each-detail">
                                    <p class="each-heading">{{ $t('bo.created_at') }}:</p>
                                    <p>YYYY-MM-DD hh:mm:ss</p>
                                </div>
                                <div class="each-detail">
                                    <p class="each-heading">{{ $t('bo.updated_at') }}:</p>
                                    <p>YYYY-MM-DD hh:mm:ss</p>
                                </div>
                            </div>
                            <div class="each-column">
                                <div class="each-detail">
                                    <p class="each-heading">{{ $t('bo.allergy') }}:</p>
                                    <p>xxxxx, xx, xxx, xxx</p>
                                </div>
                                <div class="each-detail">
                                    <p class="each-heading">{{ $t('bo.provide_time') }}:</p>
                                    <p>YYYY-MM-DD ~ YYYY-MM-DD</p>
                                    <p>Mon, Tues, Sun</p>
                                    <p>10:00-12:00</p>
                                    <p>13:00-17:00</p>
                                </div>
                            </div>
                            <div class="each-column">
                                <div class="each-detail">
                                    <p class="each-heading">{{ $t('bo.options') }}:</p>
                                </div>
                                <div class="each-detail">
                                    <p>Option1 (Must-Single)</p>
                                    <p>Choice1 / Choice2 / Choice3</p>
                                </div>
                                <div class="each-detail">
                                    <p>Option1 (Optional-Multiple)</p>
                                    <p>Choice1 (100yen) / Choice2 / Choice3</p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MenuSearch extends Vue { 
    merchantId = '';
    storeId = '';
    menuId = '';
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
@import "@/styles/mixins";

.menu-search {
    .search-data-enter {
        .label {
            width: 6%;
        }
    }
    .data-table {
        .detail-table {
            border: 1px solid $silver;
            .headings {
                padding: 20px 80px 20px 20px;
                background-color: $aliceBlue;
                border-bottom: 1px solid $silver;
                .heading-contents {
                    &:last-child {
                        font-weight: bold;
                    }
                    .menu-status {
                        padding-right: 24px;
                    }
                }
            }
        }
    }
}
</style>