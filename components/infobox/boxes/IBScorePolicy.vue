<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import type { ScorePolicy } from '@/types'

import IBPolicyBase from '../IBPolicyBase.vue'

@Component
export default class Infobox extends mixins<IBPolicyBase<ScorePolicy>>(IBPolicyBase) {
  title = "分数计算特性"

  policyNames = {
    comboDependent: '与连击强相关',
    nonPlayerDependent: '与非游玩结果因素相关',
  }

  policyDocs = {
    nonPlayerDependent: '游戏分数除与准确率等玩家个人因素相关外，还与其它的因素相关，例如出场人物的选择。'
  }
}
</script>


