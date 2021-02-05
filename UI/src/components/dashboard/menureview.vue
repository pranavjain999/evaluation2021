<template>
    <section class="menu-review">
        <div class="main-contents">
            <div class="box-shadow">
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
                    </div>
                    <div class="menu-review-details">
                        <div class="details">
                            <div class="each-column">
                                <div class="image">
                                    <span>image</span>
                                </div>
                            </div>
                            <div class="each-column">
                                <div class="each-detail">
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
                        <div class="last-column">
                            <el-checkbox></el-checkbox>
                        </div>
                    </div>
                    <div class="menu-review-details">
                        <div class="details">
                            <div class="each-column">
                                <div class="image">
                                    <span>image</span>
                                </div>
                            </div>
                            <div class="each-column">
                                <div class="each-detail">
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
                        <div class="last-column">
                            <el-checkbox></el-checkbox>
                        </div>
                    </div>
                    <div class="bottom-buttons">
                        <el-button
                            type="primary"
                            @click="openApproveConfirm = true"
                        >
                            {{ $t('bo.approve_button') }}
                        </el-button>
                        <el-button
                            type="danger"
                            @click="openRejectConfirm = true"
                        >
                            {{ $t('bo.reject_button') }}
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
        <PopUp v-if="openApproveConfirm" @closePopup="closePopup" :question="$t('bo.you_are_approving_this_merchant?')" merchantName="xxxxxxxxxx"/>
        <PopUp v-if="openRejectConfirm" @closePopup="closePopup" :question="$t('bo.you_are_rejecting_this_merchant?')" merchantName="xxxxxxxxx"/>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PopUp from '../dashboard/popup.vue'

@Component ({
  components: {
    PopUp
  }
})
export default class MenuReview extends Vue {
    openApproveConfirm: boolean = false;
    openRejectConfirm: boolean = false;

    closePopup(childData: object) {
        console.log(childData);
        this.openApproveConfirm = false;
        this.openRejectConfirm = false;
    }

}
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
@import "@/styles/mixins";

.menu-review {
    .detail-table {
        padding: 0 20px;
        background-color: $aliceBlue;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        .headings {
            padding: 20px 0;
        }
        .menu-review-details {
            @include flexbox();
            background-color: $white;
            .details{
                width: 95%;
                border: 1px solid $silver;  
            }
            .last-column {
                @include flexbox();
                @include align-items(center);
                @include justify-content(center);
                border: 1px solid $silver; 
                border-left: none;
                width: 5%;
            }
        }
        .bottom-buttons {
            padding: 20px 0;
            text-align: end;
        }
    }
}
</style>