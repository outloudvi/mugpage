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
}
</script>


