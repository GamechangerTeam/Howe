<template>
  <footer class="footer blockTopMargin">
    <div class="relative">
      <div class="container">
        <div class="fullHeight">
          <h2 class="text-primary-black-300 mb-6">
            “Каждая деталь имеет значение — <i>мы создаем будущее</i> , соединяя <i>качество</i> и
            <i>инновации”</i>
          </h2>
          <Button asChild variant="whiteOutline">
            <NuxtLink to="/catalog/female">Смотреть каталог</NuxtLink>
          </Button>
          <NuxtImg
            src="/images/footer-bg.jpg"
            class="w-full h-full object-cover absolute top-0 left-0 -z-10 brightness-90"
          />
        </div>
      </div>
    </div>
    <div class="bg-black">
      <div class="container text-primary-white">
        <div class="footer__footer">
          <h3 class="text-2xl">Howe</h3>
          <div class="footer__woman">
            <h4>Женское</h4>
            <ul>
              <li>
                <nuxt-link to="/">Хуй</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Хуй</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Хуй</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Хуй</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Хуй</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer__man">
            <h4>Женское</h4>
            <ul>
              <li>
                <nuxt-link to="/">Хуй</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Хуй</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Хуй</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Хуй</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Хуй</nuxt-link>
              </li>
            </ul>
          </div>

          <ul class="footer__others">
            <li>
              <nuxt-link to="/">Новинки и акции</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Наложить логотип</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Новинки и акции</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Новинки и акции</nuxt-link>
            </li>
          </ul>
          <ul class="footer__social">
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram-black.svg" alt="instagram" />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/telegram-black.svg" alt="telegram" />
              </a>
            </li>

            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/twitter-black.svg" alt="twitter" />
              </a>
            </li>

            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/youtube-black.svg" alt="youtube" />
              </a>
            </li>
          </ul>
          <p class="footer__copyright">© Copyright 2024</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "~/assets/css/_components.scss" as *;

@mixin before {
  content: "";
  position: absolute;
  left: -12px;
  top: 0;
  height: 100%;
  width: 1px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.12) 100%);
  border-radius: 10px;
}

.footer {
  i {
    color: white;
    font-family: "Playfair Display", serif;
  }

  &__footer {
    padding-top: 24px;
    display: grid;
    grid-template: auto 1fr auto auto / 1fr 1fr;
    gap: 36px 24px;

    h3 {
      grid-column-start: 2 span;
    }

    h4 {
      margin-bottom: 20px;
      position: relative;
      &::before {
        @include before;
      }
    }
  }

  &__woman,
  &__man {
    padding-left: 12px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      li,
      a {
        display: block;
        width: 100%;
        opacity: 80%;
      }
    }
  }

  &__others {
    grid-area: 3/1/3/2;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 12px;
    li {
      a {
        display: block;
        position: relative;
        font-size: 20px;
        &::before {
          @include before;
        }
      }
    }
  }

  &__social {
    grid-column-start: 2 span;
    grid-area: 4/1;
    display: flex;
    gap: 12px;
  }

  &__copyright {
    grid-area: 5/1;
    grid-column-start: 2 span;
    margin-bottom: 16px;
    opacity: 80%;
    width: 100%;
    text-align: center;
  }

  @include tablet {
    &__footer {
      padding: 40px 0 16px;
      grid-template: 30px auto auto / 1fr auto auto auto;
      gap: 24px 72px;
    }

    h3 {
      grid-area: 1/1;
    }

    &__social {
      grid-area: 2/1;
    }

    &__woman {
      grid-area: 1/2;
      grid-row-start: 3 span;
    }

    &__man {
      grid-area: 1/3;
      grid-row-start: 3 span;
    }

    &__others {
      grid-area: 1/4;
      grid-row-start: 3 span;
    }

    &__copyright {
      grid-area: 3/1;
      text-align: left;
      margin-top: auto;
    }
  }

  @include tablet-big {
    &__footer {
      padding: 40px 0 24px;
      gap: 24px 124px;
    }
  }

  @include laptop {
    &__footer {
      padding: 40px 0 80px;
    }
  }
}
</style>
