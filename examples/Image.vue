<template>
  <div class="block-img-div">
    <p>基本用法</p>
    <div>
      <uku-image src="https://avatars.githubusercontent.com/u/34529328?v=4" alt="uku" width="100" height="100" />
    </div>
  </div>
  <div class="block-img-div">
    <p>圆角</p>
    <div>
      <uku-image
        src="https://avatars.githubusercontent.com/u/34529328?v=4"
        alt="uku"
        width="100"
        height="100"
        radius="20" />
      <uku-image
        src="https://avatars.githubusercontent.com/u/34529328?v=4"
        alt="uku"
        width="100px"
        height="100px"
        radius="100px" />
    </div>
  </div>
  <div class="block-img-div">
    <p>图片下方内容</p>
    <div>
      <uku-image src="https://avatars.githubusercontent.com/u/34529328?v=4" alt="uku" width="100px" height="100px">
        text
      </uku-image>
      <uku-image src="https://avatars.githubusercontent.com/u/34529328?v=4" alt="uku" width="100px" height="100px">
        <span style="padding: 10px; color: #f65349">text</span>
      </uku-image>
    </div>
  </div>
</template>

<style lang="less" scoped>
.block-img-div {
  margin-top: 30px;
  > p {
    margin: 0;
    padding: 0;
    color: #646566;
  }

  > div {
    display: flex;
    margin: 10px 20px 0 0;

    > div {
      margin-right: 20px;
    }
  }
}
</style>
