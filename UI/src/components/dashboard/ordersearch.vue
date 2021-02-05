<template>
    <section class="order-search">
        <div class="main-contents">
            <div class="box-shadow">
                <div class="search-data-enter">
                    <div class="first-row">
                        <label class="label">{{ $t('bo.user_id') }}:</label>
                        <el-input v-model="userId" class="input-text" ></el-input>
                        <label class="label">{{ $t('bo.order_id') }}:</label>
                        <el-input v-model="orderId" class="input-text"></el-input>
                        <label class="label">{{ $t('bo.payment_order_id') }}:</label>
                        <el-input v-model="paymentOrderId" class="input-text"></el-input>
                    </div>
                    <div class="second-row">
                        <label class="label">{{ $t('bo.order_date') }}:</label>
                        <el-input v-model="fromDate" class="input-text"></el-input>
                        <div class="seperator" style="padding-left: 22px">~</div>
                        <el-input v-model="toDate" class="input-text"></el-input>
                        <label class="label">{{ $t('bo.store_id') }}:</label>
                        <el-input v-model="storeId" class="input-text"></el-input>
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
                                    :label="$t('bo.menu_id')"
                                >
                                    <template slot-scope="scope">
                                        <span>{{ scope.row.menuid }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    :label="$t('bo.menu_name')"
                                >
                                    <template slot-scope="scope">
                                        <span>{{ scope.row.menuname }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    :label="$t('bo.number')"
                                >
                                    <template slot-scope="scope">
                                        <span>{{ scope.row.number }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    :label="$t('bo.amount')"
                                >
                                    <template slot-scope="scope">
                                        <span>{{ scope.row.amount }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    :label="$t('bo.options')"
                                >
                                    <template slot-scope="scope">
                                        <p>{{ scope.row.option1 }}</p>
                                        <p>{{ scope.row.choice1 }}</p>
                                        <p>{{ scope.row.option2 }}</p>
                                        <p>{{ scope.row.choice2 }}</p>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-table-column>
                        <el-table-column
                            :label="$t('bo.user_id')"
                        >
                            <template slot-scope="scope">
                                <span>{{ scope.row.userid }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            :label="$t('bo.store_id')"
                        >
                            <template slot-scope="scope">
                                <span>{{ scope.row.storeid }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            :label="$t('bo.order_id')"
                        >
                            <template slot-scope="scope">
                                <span>{{ scope.row.orderid }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            :label="$t('bo.payment_order_id')"
                        >
                            <template slot-scope="scope">
                                <span>{{ scope.row.paymentorderid }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            :label="$t('bo.total_amount')"
                        >
                            <template slot-scope="scope">
                                <span>{{ scope.row.totalamount }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            :label="$t('bo.order_time')"
                        >
                            <template slot-scope="scope">
                                <p>{{ scope.row.orderdate }}</p>
                                <p>{{ scope.row.ordertime }}</p>
                            </template>
                        </el-table-column>
                        <el-table-column
                            :label="$t('bo.instruction_note')"
                        >
                            <template slot-scope="scope">
                                <span>{{ scope.row.instructionnote }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            :label="$t('bo.order_status')"
                        >
                            <template slot-scope="scope">
                                <span>{{ scope.row.orderstatus }}</span>
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
export default class OrderSearch extends Vue { 
    userId = '';
    orderId = '';
    paymentOrderId = '';
    fromDate = '';
    toDate = '';
    storeId = '';

    firstTableData = [
        {
            userid: "xxxxx",
            storeid: "xxxxx",
            orderid: "xxxxx",
            paymentorderid: "xxxxx",
            totalamount: 1000,
            orderdate: "yyyy-mm-dd", 
            ordertime: "hh:mm:ss",
            instructionnote: "xxxxxx",
            orderstatus: "xxxx"
        } 
    ]

    secondTableData = [
        {
            menuid: "xxxxx",
            menuname: "xxxxx",
            number: 1,
            amount: 2000,
            option1: "option1",
            choice1: "choice1",
            option2: "option2",
            choice2: "choice1 (199) / choice2"
        }
    ]
}
</script>

<style lang="scss">
.order-search {
    .search-data-enter {
        .label, .seperator {
            width: 6%;
        }
    }
}
</style>