<template>
  <div class="block-btn-div">
    <p>按钮类型</p>
    <div>
      <uku-button type="primary">普通按钮</uku-button>
      <uku-button type="success">成功按钮</uku-button>
      <uku-button type="warn">警告按钮</uku-button>
      <uku-button type="error">错误按钮</uku-button>
      <uku-button>默认按钮</uku-button>
    </div>
  </div>
  <div class="block-btn-div">
    <p>朴素按钮</p>
    <div>
      <uku-button type="primary" plain>普通按钮</uku-button>
      <uku-button type="success" plain>成功按钮</uku-button>
      <uku-button type="warn" plain>警告按钮</uku-button>
      <uku-button type="error" plain>错误按钮</uku-button>
    </div>
  </div>
  <div class="block-btn-div">
    <p>按钮尺寸</p>
    <div>
      <uku-button type="primary" size="small">小型按钮</uku-button>
      <uku-button type="success" size="normal">普通按钮</uku-button>
      <uku-button type="warn" size="large">大号按钮</uku-button>
    </div>
  </div>
  <div class="block-btn-div">
    <p>块级</p>
    <div>
      <uku-button type="primary" size="small" block>小型块级按钮</uku-button>
      <uku-button type="success" size="normal" block>普通块级按钮</uku-button>
      <uku-button type="warn" size="large" block>大号块级按钮</uku-button>
    </div>
  </div>
  <div class="block-btn-div">
    <p>禁用</p>
    <div>
      <uku-button type="primary" disabled>普通按钮</uku-button>
      <uku-button type="success" plain disabled>成功按钮</uku-button>
    </div>
  </div>
  <div class="block-btn-div">
    <p>自定义颜色</p>
    <div>
      <uku-button color="purple">普通按钮</uku-button>
      <uku-button plain color="pink">成功按钮</uku-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.block-btn-div {
  margin-top: 30px;
  > p {
    margin: 0;
    padding: 0;
    color: #646566;
  }

  > div {
    > button {
      margin: 10px 20px 0 0;
    }
  }
}
</style>
