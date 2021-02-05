<template>
    <section class="popup">
        <el-dialog
            :title="$t('bo.confirm')"
            :visible.sync="openConfirmMessage"
        >
            <p>{{ question }}</p>
            <p class="merchant-name">{{ merchantName }}</p>
            <el-input 
                v-if="question === $t('bo.you_are_rejecting_this_merchant?')" 
                :placeholder="$t('bo.reject_reason')" 
                v-model="reason"
                type="textarea"
                :rows="3"
            ></el-input>
            <div class="buttons">
                <el-button 
                    v-if="question === $t('bo.you_are_approving_this_merchant?')" 
                    type="primary"
                    @click="close( $t('bo.ok_button') )" 
                    style="margin-right: 25px"
                >
                    {{ $t('bo.ok_button') }}
                </el-button>
                <el-button 
                    v-if="question === $t('bo.you_are_rejecting_this_merchant?')" 
                    type="primary"
                    @click="close( $t('bo.ok_button') )" 
                    style="margin-right: 25px"
                    :disabled="!isSubmittable"
                >
                    {{ $t('bo.ok_button') }}
                </el-button>
                <el-button
                    type="danger"
                    @click="close( $t('bo.cancel_button') )"
                >
                    {{ $t('bo.cancel_button') }}
                </el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator'

@Component
export default class PopUp extends Vue {
    @Watch("openConfirmMessage")
    @Emit("closePopup")
    closePopup() {
        return this.childData;
    }
    @Prop() question!: string;
    @Prop() merchantName!: string;
    
    childData: object = {
        rejectReason: '',
        condition: true
    }

    reason: string = '';
    openConfirmMessage: boolean = true;

    get isSubmittable() {
        return (this.reason.length !== 0)
    }
    
    close(buttonCondition: string) {
        this.openConfirmMessage = false;
        this.childData = {
            rejectReason: this.reason,
            condition: buttonCondition
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
@import "@/styles/mixins";

.popup {
    .el-dialog {
        .merchant-name {
            padding: 20px 0;
        }
        .el-textarea {
            padding-bottom: 20px;
        }
        .buttons {
            .el-button {
                width: 30%;
            }
        }
    }
}
</style>