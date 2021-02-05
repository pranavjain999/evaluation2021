<template>
    <section class="merchant-search">
        <div class="main-contents">
            <div class="box-shadow">
                <div class="search-data-enter">
                    <div class="first-row">
                        <label class="label">{{ $t('bo.merchant_id') }}:</label>
                        <el-input v-model="merchantId" class="input-text" ></el-input>
                        <label class="label">{{ $t('bo.store_id') }}:</label>
                        <el-input v-model="storeId" class="input-text"></el-input>
                    </div>
                    <div class="second-row">
                        <label class="label">{{ $t('bo.apply_date') }}:</label>
                        <el-input v-model="applyFromDate" class="input-text"></el-input>
                        <div class="seperator" style="padding-left: 33px">~</div>
                        <el-input v-model="applyToDate" class="input-text"></el-input>
                    </div>
                    <div class="third-row">
                        <label class="label">{{ $t('bo.review_date') }}:</label>
                        <el-input v-model="reviewFromDate" class="input-text"></el-input>
                        <div class="seperator" style="padding-left: 33px">~</div>
                        <el-input v-model="reviewToDate" class="input-text"></el-input>
                    </div>
                </div>
                <div class="data-table">
                    <el-table
                        :data="firstTableData"
                        border
                    >
                        <el-table-column
                            type="expand"
                        >
                            <el-table
                                :data="secondTableData"
                                border
                                class="second-table"
                            >
                                <el-table-column
                                    :label="$t('bo.store_id')"
                                >
                                    <template slot-scope="scope">
                                        <span>{{ scope.row.storeid }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    :label="$t('bo.store_name')"
                                >
                                    <template slot-scope="scope">
                                        <span>{{ scope.row.storename }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    :label="$t('bo.operation_time')"
                                >
                                    <template>
                                        <div class="operation-time">
                                            <p>Mon, Tue</p>
                                            <p>11:30-16:00</p>
                                        </div>
                                        <div class="operation-time">
                                            <p>Sat</p>
                                            <p>12:00-13:00</p>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    :label="$t('bo.prepare_time_normal')"
                                >
                                    <template slot-scope="scope">
                                        <span>{{ scope.row.preparetimenormal }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    :label="$t('bo.prepare_time_busy')"
                                >
                                    <template slot-scope="scope">
                                        <span>{{ scope.row.preparetimebusy }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    :label="$t('bo.status')"
                                >
                                    <template slot-scope="scope">
                                        <span>{{ scope.row.status }}</span>
                                    </template>
                                </el-table-column>
                                <!-- <el-table-column
                                    :label="$t('bo.operation')"
                                >
                                    <template >
                                        <el-button
                                            type="primary"
                                            @click="handleUpdate(row)"
                                        >
                                            froze
                                        </el-button>
                                    </template>
                                </el-table-column> -->
                            </el-table>
                        </el-table-column>
                        <el-table-column
                            :label="$t('bo.merchant_id')"
                        >
                            <template slot-scope="scope">
                                <span>{{ scope.row.merchantid }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            :label="$t('bo.merchant_name')"
                        >
                            <template slot-scope="scope">
                                <span>{{ scope.row.merchantname }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            :label="$t('bo.apply_date')"
                        >
                            <template slot-scope="scope">
                                <p>{{ scope.row.applydate }}</p>
                                <p>{{ scope.row.applytime }}</p>
                            </template>
                        </el-table-column>
                        <el-table-column
                            :label="$t('bo.review_date')"
                        >
                            <template slot-scope="scope">
                                <p>{{ scope.row.reviewdate }}</p>
                                <p>{{ scope.row.reviewtime }}</p>
                            </template>
                        </el-table-column>
                        <el-table-column
                            :label="$t('bo.status')"
                        >
                            <template slot-scope="scope">
                                <span>{{ scope.row.status }}</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MerchantSearch extends Vue { 
    merchantId = '';
    storeId = '';
    applyFromDate = '';
    applyToDate = '';
    reviewFromDate = '';
    reviewToDate = '';

    firstTableData = [
        {
            merchantid: "xxxxxx",
            merchantname: "xxxxxxxxxx",
            applydate: "yyyy-mm-dd",
            applytime: "hh:mm:ss",
            reviewdate: "yyyy-mm-dd",
            reviewtime: "hh:mm:ss",
            status: "xxxxx",
        } 
    ]

    secondTableData = [
        {
            storeid: "xxxxx",
            storename: "xxxxxx",
            preparetimenormal: 30,
            preparetimebusy: 60,
            status: "open",
        }
    ]
}
</script>

<style lang="scss">
.merchant-search {
    .search-data-enter {
        .label, .seperator {
            width: 7%;
        }      
    }
    .data-table {
        .el-table {
            .operation-time:not(:last-child) {
                padding-bottom: 16px;
            }
        }
    }  
}
</style>