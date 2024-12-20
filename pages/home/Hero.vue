<template>
  <section class="home__hero min-h-[500px] fullHeight">
    <div
      class="container h-full flex gap-2 justify-end flex-col tablet:items-end tablet:justify-between tablet:flex-row pb-6"
    >
      <h1
        class="text-primary-white relative text-[36px] leading-[36px] mobile-min:text-[48px] mobile-min:leading-[48px] tablet:text-[62px] tablet:leading-[62px]  tablet:max-w-[45%] tablet-big:max-w-[550px] pc:text-[80px] pc:leading-[80px]"
      >
        Howe – <i>стиль и комфорт в медицинской одежде</i>
      </h1>
      <p class="tex text-sm mobile-mid:text-base text-primary-white tablet:max-w-[50%]  tablet-big:text-xl tablet-big:max-w-[500px] relative">
        Мы создаем одежду для профессионалов, уделяя особое внимание вашему комфорту, практичности и
        стилю. Наша миссия – помочь вам чувствовать себя уверенно и удобно каждый день, независимо
        от задач и вызовов, стоящих перед вами.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home {
  &__hero {
    background-image: url('/images/hero.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 110%;
      pointer-events: none;
      background: linear-gradient(0deg, black, #00000020, transparent);
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #00000010;
      pointer-events: none;
    }
  }
}

h1,
i {
  font-family: 'Playfair', serif;
}
</style>
