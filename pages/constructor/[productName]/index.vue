<script lang="ts" setup>
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ImageUp,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-vue-next";
import Canvas from "~/components/canvas/Canvas.vue";

const textAlign = ref("");
const color = ref("");
const size = ref("");
const text = ref("");
const fontWeight = ref("");
const font = ref("");
const lineHeight = ref("");
const letterSpacing = ref("");

const aboba = ref<InstanceType<typeof Canvas> | null>(null);

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (file) {
    const validTypes = ["image/jpeg", "image/png", "image/svg+xml"];
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (!validTypes.includes(file.type)) {
      alert("Пожалуйста, загрузите изображение в формате JPEG, PNG или SVG.");
      return;
    }

    if (file.size > maxSize) {
      alert("Размер файла не должен превышать 2MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (aboba.value) {
        aboba.value.addImg(result);
      }
    };
    reader.readAsDataURL(file);
  }
};

const addText = () => {
  if (aboba.value) {
    aboba.value.addText({
      text: text.value,
      font: font.value,
      fontWeight: fontWeight.value,
      color: color.value,
      fontSize: size.value,
      align: textAlign.value,
      lineHeight: lineHeight.value,
      letterSpacing: letterSpacing.value,
    });
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

        <label class="input-file">
          <input
            type="file"
            @change="handleFileChange"
            accept="image/jpeg, image/png, image/svg+xml"
          />

          <span><ImageUp color="#fff" :size="24" /> Выберите файл</span>
        </label>
        <p>Размер не больше 2мб</p>
      </div>
      <hr />
      <div class="constructor__text-wrapper">
        <h2>Типография</h2>
        <div class="option">
          <Select v-model="font">
            <SelectTrigger class="select-trigger">
              <SelectValue placeholder="Шрифт" />
            </SelectTrigger>
            <SelectContent class="select-content">
              <SelectGroup>
                <SelectLabel>Шрифт</SelectLabel>
                <SelectItem class="font-option" data-font="Magnet" value="Magnet"
                  >Magnet</SelectItem
                >
                <SelectItem class="font-option" data-font="Courier New" value="Courier New"
                  >Courier New</SelectItem
                >
                <SelectItem
                  class="font-option"
                  data-font="Franklin Gothic Medium"
                  value="Franklin Gothic Medium"
                  >Franklin Gothic</SelectItem
                >
                <SelectItem class="font-option" data-font="Arial Narrow" value="Arial Narrow"
                  >Arial Narrow</SelectItem
                >
                <SelectItem class="font-option" data-font="Gill Sans" value="Gill Sans"
                  >Gill Sans</SelectItem
                >
                <SelectItem class="font-option" data-font="Calibri" value="Calibri"
                  >Calibri</SelectItem
                >
                <SelectItem class="font-option" data-font="Trebuchet MS" value="Trebuchet MS"
                  >Trebuchet MS</SelectItem
                >
                <SelectItem class="font-option" data-font="Lucida Sans" value="Lucida Sans"
                  >Lucida Sans</SelectItem
                >

                <SelectItem class="font-option" data-font="" value="Verdana">Verdana</SelectItem>
                <SelectItem class="font-option" data-font="" value="Segoe UI"></SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div class="option">
          <Select v-model="fontWeight">
            <SelectTrigger class="select-trigger">
              <SelectValue placeholder="Жирность шрифта" />
            </SelectTrigger>
            <SelectContent class="select-content">
              <SelectGroup>
                <SelectLabel>Жирность шрифта</SelectLabel>
                <SelectItem value="100">Light</SelectItem>
                <SelectItem value="200">Extra-Light</SelectItem>
                <SelectItem value="300">Light</SelectItem>
                <SelectItem value="400">Regular</SelectItem>
                <SelectItem value="500">Medium</SelectItem>
                <SelectItem value="600">Semi-Bold</SelectItem>
                <SelectItem value="700">Bold</SelectItem>
                <SelectItem value="800">Extra-Bold</SelectItem>
                <SelectItem value="900">Black</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div class="option option--double option--size">
          <Input type="number" placeholder="Размер" max="100" v-model="size" />
          <Select v-model="size">
            <SelectTrigger class="select-trigger"> </SelectTrigger>
            <SelectContent class="select-content">
              <SelectGroup>
                <SelectItem value="12">12</SelectItem>
                <SelectItem value="14">14</SelectItem>
                <SelectItem value="16">16</SelectItem>
                <SelectItem value="18">18</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="22">22</SelectItem>
                <SelectItem value="24">24</SelectItem>
                <SelectItem value="32">32</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div class="option option--double">
          <Input type="number" placeholder="Межстрочное" v-model="lineHeight" />
          <Select v-model="lineHeight">
            <SelectTrigger class="select-trigger"> </SelectTrigger>
            <SelectContent class="select-content">
              <SelectGroup>
                <SelectItem value="0.5">0.5</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="1.2">1.2</SelectItem>
                <SelectItem value="1.5">1.5</SelectItem>
                <SelectItem value="1.7">1.7</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="2.2">2.2</SelectItem>
                <SelectItem value="2.5">2.5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div class="option option--double">
          <Input type="number" placeholder="Межбуквенное" v-model="letterSpacing" />
          <Select v-model="letterSpacing">
            <SelectTrigger class="select-trigger"> </SelectTrigger>
            <SelectContent class="select-content">
              <SelectGroup>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="7">7</SelectItem>
                <SelectItem value="10">10</SelectItem>
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
        <textarea name="" id="" cols="50" rows="10" v-model="text"></textarea>
        <Button class="add-text" @click="addText"> Наложить </Button>
        <Button class="add-to-cart" variant="black"> <ShoppingCart /> В корзину </Button>
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
    line-height: 20px;
    margin: 8px 0 16px;
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 80%;
    }
  }

  .input-file {
    position: relative;
    display: inline-block;
    width: 100%;
    span {
      background: $primary-blue-gradient;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      color: $primary-white;
      border-radius: 12px;
      padding: 16px 24px;
      transition: background-color 0.2s;
    }

    input[type="file"] {
      position: absolute;
      z-index: -1;
      opacity: 0;
      display: block;
      width: 0;
      height: 0;
    }
    input[type="file"]:focus + span {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    &:hover span {
      background-color: #59be6e;
    }
    &:active span {
      background-color: #2e703a;
    }

    input[type="file"]:disabled + span {
      background-color: #eee;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__img-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
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

    @include tablet-big {
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

      &--double {
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

        @include tablet-big {
          grid-template-columns: 1fr 50px;
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

      @include tablet-big {
        justify-content: space-between;
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

    textarea {
      grid-column-start: 2 span;
      resize: none;
      border: 1px solid $primary-black-100;
      outline: 0;
      border-radius: 8px;
      padding: 16px;
      background: none;
      font-size: var(--input-font);
    }
  }

  .add-text {
    margin-top: 12px;
    grid-column-start: 2 span;
  }
  .add-to-cart {
    grid-column-start: 2 span;
  }

  @include mobile {
    .add-text {
      grid-column-start: unset;
    }
    .add-to-cart {
      margin-top: 12px;
      grid-column-start: unset;
    }
  }
}
.font-option {
  &[data-font="Courier New"] {
    span {
      font-family: "Courier New", Courier, monospace;
    }
  }
  &[data-font="Franklin Gothic Medium"] {
    span {
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
  }
  &[data-font="Arial Narrow"] {
    span {
      font-family: "Arial Narrow", Arial, sans-serif;
    }
  }
  &[data-font="Gill Sans"] {
    span {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    }
  }
  &[data-font="Calibri"] {
    span {
      font-family: Calibri, "Trebuchet MS", sans-serif;
    }
  }
  &[data-font="Trebuchet MS"] {
    span {
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
        sans-serif;
    }
  }
  &[data-font="Lucida Sans"] {
    span {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode",
        Geneva, Verdana, sans-serif;
    }
  }

  &[data-font="Verdana"] {
    span {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  }
  &[data-font="Segoe UI"] {
    span {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
  }
}
</style>
