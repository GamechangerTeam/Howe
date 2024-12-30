<script lang="ts" setup>
import { AlignCenter, AlignLeft, AlignRight, ImageUp } from "lucide-vue-next";
import Canvas from "~/components/canvas/Canvas.vue";

const textAlign = ref("");
const color = ref("");
const size = ref("");
const aboba = ref<InstanceType<typeof Canvas> | null>(null);
const lol = () => {
  if (aboba.value) {
    aboba.value.addImg("/images/footer-bg.jpg");
  }
};
</script>

<template>
  <div class="container constructor">
    <div class="constructor__wrapper">
      <img src="/images/t-short-mockup.png" alt="" />
      <ClientOnly>
        <Canvas ref="aboba" />
      </ClientOnly>
    </div>
    <div class="constructor__info">
      <h1>T-Shirt White</h1>
      <hr />
      <div class="constructor__img-wrapper">
        <h2>Изображение</h2>
        <Button class="text-base" @click="lol">
          <ImageUp color="#fff" :size="24" />
          Загрузить изображение
        </Button>
        <p>Размер не больше 2мб</p>
      </div>
      <hr />
      <div class="constructor__text-wrapper">
        <h2>Типография</h2>
        <div class="option">
          <Select>
            <SelectTrigger class="select-trigger">
              <SelectValue placeholder="Шрифт" />
            </SelectTrigger>
            <SelectContent class="select-content">
              <SelectGroup>
                <SelectLabel>Шрифт</SelectLabel>
                <SelectItem value="inter">Inter</SelectItem>
                <SelectItem value="time new romance">Time new romance</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div class="option">
          <Select>
            <SelectTrigger class="select-trigger">
              <SelectValue placeholder="Жирность шрифта" />
            </SelectTrigger>
            <SelectContent class="select-content">
              <SelectGroup>
                <SelectLabel>Жирность шрифта</SelectLabel>

                <SelectItem value="inter">Inter</SelectItem>
                <SelectItem value="time new romance">Time new romance</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div class="option option--size">
          <Input placeholder="Размер" v-model="size" />
          <Select v-model="size">
            <SelectTrigger class="select-trigger"> </SelectTrigger>
            <SelectContent class="select-content">
              <SelectGroup>
                <SelectItem value="12">12</SelectItem>
                <SelectItem value="16">16</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div class="option">
          <Select>
            <SelectTrigger class="select-trigger">
              <SelectValue placeholder="Межстрочное" />
            </SelectTrigger>
            <SelectContent class="select-content">
              <SelectGroup>
                <SelectLabel>Межстрочное расстояние</SelectLabel>

                <SelectItem value="10%">10%</SelectItem>
                <SelectItem value="20%">20%</SelectItem>
                <SelectItem value="normal">normal</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div class="option">
          <Select>
            <SelectTrigger class="select-trigger">
              <SelectValue placeholder="Межбуквенное" />
            </SelectTrigger>
            <SelectContent class="select-content">
              <SelectGroup>
                <SelectLabel>Межбуквенное расстояние</SelectLabel>
                <SelectItem value="inter">Inter</SelectItem>
                <SelectItem value="time new romance">Time new romance</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div class="option option--color">
          <Input type="text" placeholder="Цвет" v-model="color" />
          <input type="color" name="color" id="color-inp" v-model="color" />
        </div>
        <div class="option">
          <ToggleGroup class="align-group" type="single" v-model="textAlign">
            <ToggleGroupItem value="left">
              <AlignLeft color="#000" :size="24" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center">
              <AlignCenter color="#000" :size="24" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right">
              <AlignRight color="#000" :size="24" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "~/assets/css/components" as *;

:root {
  --input-font: 12px;
}

@include mobile-mid {
  :root {
    --input-font: 14px;
  }
}

@include mobile {
  :root {
    --input-font: 16px;
  }
}
.constructor {
  display: flex;
  flex-direction: column;
  gap: 32px;
  @include tablet-big {
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    gap: 100px;
  }

  &__wrapper {
    background-image: url("/images/constructor-bg.jpg");
    background-size: 180% 180%;
    background-position: center;

    aspect-ratio: 1/1;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: auto;
      aspect-ratio: 1/1;
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%);
    }
  }

  h1 {
    font-size: 32px;
    line-height: 32px;
  }
  h2 {
    font-size: 20px;
  }

  .input-wrapper {
    height: 50px;
    input {
      border-color: $primary-black-100;
      font-size: var(--input-font);
      height: 100% !important;
    }

    label {
      font-size: var(--input-font);
      color: black;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__img-wrapper {
    p {
      font-size: 12px;
      color: $primary-black-300;
      text-align: right;
      margin-top: 8px;
    }
  }

  &__text-wrapper {
    display: grid;
    grid-template: auto / repeat(2, calc(50% - 6px));
    gap: 12px;
    h2 {
      grid-column-start: 2 span;
    }

    @include pc {
      grid-template: auto / 200px 200px;
    }
    .option {
      &:nth-child(2) {
        grid-column-start: 2 span;
      }

      @include break-max(525px) {
        &:nth-child(8) {
          grid-area: 6/1;
        }

        &--color {
          grid-area: 5/1;
          grid-column-start: 2 span !important;
        }
      }

      &--size {
        display: grid;
        grid-template-columns: 1fr 50px;
        input {
          border-radius: 8px 0 0 8px;
          height: 100%;
          border-color: $primary-black-100;
        }

        .select-trigger {
          position: relative;
          border-radius: 0 8px 8px 0;
          border-left: 0;
          span {
            display: none;
          }
          svg {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 16px;
            height: 16px;
          }
        }
      }

      &--color {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 12px;

        button {
          border: 1px solid $primary-black-100;
          border-radius: 8px;
          background: none;
          outline: none;
          width: 100%;
          aspect-ratio: 1/1;
          height: auto;
        }
      }
    }

    #color-inp {
      height: 100%;
      border-radius: 8px;
      width: 100%;
      border: none;
      padding: 0;
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
      &::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      &::-webkit-color-swatch {
        border: none;
        border-radius: 8px;
      }
    }

    .align-group {
      flex-wrap: nowrap;
      gap: 12px;
      justify-content: space-between;
      @include mobile {
        justify-content: flex-start;
      }
      button {
        aspect-ratio: 1/1;
        height: auto;
        padding: 0;
        width: 100%;
        border-radius: 8px;
        border-color: $primary-black-100;
        max-width: 50px;
        &[data-state="on"] {
          border-color: black;
          background-color: unset;
        }
      }
    }

    .select-trigger {
      border-color: $primary-black-100;
      border-radius: 8px;
      padding: 8px 16px;
      height: 50px;
      span {
        font-size: var(--input-font);
      }
    }
  }
}
</style>
